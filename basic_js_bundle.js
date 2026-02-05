    import characters from './Data/characters.json' with {type:'json'};

    alert(characters.char1.name);
    
    let lates = document.getElementsByClassName('title');

    for (let i = 0; i < 5; i++)
    {
        console.log(i);
    }

    let characters_pics = ["red","blue","green","orange"];
    
    let news_pics = ["red","blue","green","orange"];

    let actual_pic_chars = 0;
    let actual_pic_news = 0;
    let actual_pic = 0

    document.getElementById('carousel-pic-char').style.background = characters_pics[actual_pic];
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
        true_item.style.background = carousel_items[actual_pic]
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
        true_item.style.background = carousel_items[actual_pic]
        if (true_item == document.getElementById('carousel-pic-char'))
        {actual_pic_chars = actual_pic}
        if (true_item == document.getElementById('carousel-pic-news'))
        {actual_pic_news = actual_pic}

    }


