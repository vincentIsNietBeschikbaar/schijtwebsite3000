let ad = document.getElementById("ad2")



window.onscroll = function(){
    let amountOfScroll =  Math.floor(window.scrollY) 

    if (amountOfScroll > 500){
        ad.style.visibility = 'visible'
    }else{
        ad.style.visibility = 'hidden'
    }

}


