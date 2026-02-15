    import characters from './Json/characters.json' with {type:'json'};

    import news from './Json/news.json' with {type:'json'};

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

    function car_is_chars()
    {
        carousel_items = characters_pics
        true_item = document.getElementById('carousel-pic-char')
        shadow_item = document.getElementById('carousel-pic-char-shadow')
        actual_pic = actual_pic_chars
    }

    function car_is_news()
    {
        carousel_items = news_pics
        true_item = document.getElementById('carousel-pic-news')
        shadow_item = document.getElementById('carousel-pic-news-shadow')
        actual_pic = actual_pic_news
    }

    function carousel_forward()
    {
        actual_pic = actual_pic + 1
        if (actual_pic == carousel_items.length)
        {
            actual_pic = 0
        }
        true_item.style.backgroundImage = carousel_items[actual_pic]
        if (true_item == document.getElementById('carousel-pic-char'))
        {actual_pic_chars = actual_pic}
        if (true_item == document.getElementById('carousel-pic-news'))
        {actual_pic_news = actual_pic}
    }

    function carousel_backward()
    {
        actual_pic = actual_pic - 1
        if (actual_pic < 0)
        {
            actual_pic = carousel_items.length - 1
        }
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
