let lates = document.getElementsByClassName('late');
for (let k = 0; k < (lates.length); k++)
    {
        window.addEventListener(`scroll${k}`, function()
        {
            var displayOn = []
            var displayOn = document.getElementsByClassName('crutilka-characters')[0].offsetTop
            var place = document.body.scrollTop
            if(place > displayOn1 - 200)
            {
                this.removeEventListener(`scroll${k}`, arguments.callee, false)
                document.getElementById('opozdun1').style.display = 'block'
                document.getElementById('opozdun2').style.display = 'block'
                document.getElementById('opozdun3').style.display = 'block'
                document.getElementById('uznat-bolshe1').style.display = 'flex'    
            }
        })
    }