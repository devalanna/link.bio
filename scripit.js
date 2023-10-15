function tooggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")
    if(html.classList.contains('light')) {
        img.setAttribute('src','./assets/assets/claro.png')
        img.setAttribute('alt', 'alanna de cabelo amarrado' ) 
    } 
    else{
        img.setAttribute('src', './assets/assets/escuro.png')
        img.setAttribute('alt', 'alanna de cabelo solto')
    }

 
   
   
   

}