    import characters from '../Json/characters.json' with {type:'json'};

    import news from '../Json/news.json' with {type:'json'};

    let characters_names = [], characters_stories = [], characters_pics = [], characters_types = [], characters_roles = []

    let news_pics = [], news_titles = [];

    for (let i = 0; i < (characters.length); i++)
    {
        characters_names.push(characters[i].name)
        characters_stories.push(characters[i].story)
        characters_pics.push(`url(Images/Characters/${characters[i].image})`)
        characters_types.push(characters[i].type)
        characters_roles.push(characters[i].role)
    }

    for (let i = 0; i < (news.length); i++)
    {
        news_pics.push(`url(Images/News/${news[i].image})`)
        news_titles.push(news[i].title)
    }
    
    let actual_pic_chars = 0;
    let actual_pic_news = 0;
    let actual_pic = 0

    let carousel_items
    let true_item
    let shadow_item

    document.getElementById('carousel-pic-char').style.backgroundImage = characters_pics[actual_pic];
    document.getElementById('carousel-pic-news').style.background = news_pics[actual_pic];

    const animation_param = {
        duration: 1000,
        iterations: 1,
        direction: 'normal',
        easing: 'ease-in-out'
    }

    let pic_animation

    let same = false

    let shadow_animation

    let p1 
    let p2
    let s1 
    let s2
    function car_is_chars()
    {
        carousel_items = characters_pics
        true_item = document.getElementById('carousel-pic-char')
        shadow_item = document.getElementById('carousel-pic-char-shadow')
        actual_pic = actual_pic_chars
        pic_animation = true_item.animate(p1,p2)
        shadow_animation = shadow_item.animate(s1,s2)
        p1, s1 = char_animation
        p2, s2 = animation_param
        s2.direction = "reverse"
        same = true
    }

    function car_is_news()
    {
        carousel_items = news_pics
        true_item = document.getElementById('carousel-pic-news')
        shadow_item = document.getElementById('carousel-pic-news-shadow')
        actual_pic = actual_pic_news
        pic_animation = true_item.animate(p1,p2)
        shadow_animation = shadow_item.animate(s1,s2)
        p1 = news_animation
        s1 = news_animation_shadow
        p2, s2 = animation_param
    }

    async function carousel_forward()
    {   
        actual_pic = actual_pic + 1
        if (actual_pic == carousel_items.length)
        {actual_pic = 0}

        pic_animation.play()

        shadow_item.style.backgroundImage = carousel_items[actual_pic]
        shadow_item.style.display = 'block'
        shadow_animation.play()

        await delay(2000)
        shadow_item.style.display = 'none'

        true_item.style.backgroundImage = carousel_items[actual_pic]
        
        if (true_item == document.getElementById('carousel-pic-char'))
        {actual_pic_chars = actual_pic}
        
        if (true_item == document.getElementById('carousel-pic-news'))
        {actual_pic_news = actual_pic}
    }

    async function carousel_backward()
    {
        if (not(same)){
            p1 = news_animation_shadow
            s1 = news_animation
            s2.direction = "reverse"
            p2.direction = "reverse"
        }

        actual_pic = actual_pic - 1
        if (actual_pic < 0)
        {actual_pic = carousel_items.length - 1}

        pic_animation.play()

        true_item.style.backgroundImage = carousel_items[actual_pic]
        
        shadow_item.style.display = 'block'
        shadow_animation.play()
        shadow_item.style.display = 'none'

        await delay(2000)

        true_item.style.backgroundImage = carousel_items[actual_pic]
        
        if (true_item == document.getElementById('carousel-pic-char'))
        {actual_pic_chars = actual_pic}
        
        if (true_item == document.getElementById('carousel-pic-news'))
        {actual_pic_news = actual_pic}

    }

    const btn_chars_forward = document.getElementById('chars_forward')
        btn_chars_forward.addEventListener('click', car_is_chars)
        btn_chars_forward.addEventListener('click', carousel_forward)
    const btn_chars_backward = document.getElementById('chars_backward')
        btn_chars_backward.addEventListener('click', car_is_chars)
        btn_chars_backward.addEventListener('click', carousel_backward)
    const btn_news_forward = document.getElementById('news_forward')
        btn_news_forward.addEventListener('click', car_is_news)
        btn_news_forward.addEventListener('click', carousel_forward)
    const btn_news_backward = document.getElementById('news_backward')
        btn_news_backward.addEventListener('click', car_is_news)
        btn_news_backward.addEventListener('click', carousel_backward)
    
    const delay = ms => new Promise(res => setTimeout(res, ms))
    
    const char_animation = [
        {left:"0%", filter:"opacity(1)"},
        {left:"100%", filter:"opacity(0)"}
    ]

    const news_animation = [
        {left:"0%"},
        {left:"-100%"}
    ]

    const news_animation_shadow = [
        {left:"100%"},
        {left:"0%"}
    ]