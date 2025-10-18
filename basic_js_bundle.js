    let btn_all = document.querySelectorAll('.button');
    for (let i = 0; i <= btn_all.length; i++)
        {
            let btn_s_temp = getComputedStyle(btn_all[i]);
            btn_all[i].style.color = btn_s_temp.color;
            btn_all[i].style.borderColor = btn_s_temp.color
        }