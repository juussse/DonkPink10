const frase = document.getElementById('frase')
const quienesS = document.getElementById('quienesSomos')

const text = document.getElementById('textFrase')

const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const img3 = document.querySelector('.img3')
const img4 = document.querySelector('.img4')




window.addEventListener('scroll', (event) => {
    let scrolled = window.scrollY;
    let qRect = quienesS.getBoundingClientRect();
    let f = frase.getBoundingClientRect();
    
    let opa = 1- f.top/(window.screen.height/5)

    frase.style.opacity = `${opa*2}`

    img1.style.transform = `translate(${opa*16+9}vw, ${opa*5+15}vh)`
    img2.style.transform = `translate(${-opa*16-9}vw, ${opa*5+15}vh)`
    img3.style.transform = `translate(${-opa*10-9}vw, ${-opa*10-20}vh)`
    img4.style.transform = `translate(${opa*10+9}vw, ${-opa*10-20}vh)`

    
    var vel_parallax = 0.2, nivel_scroll = qRect.top+qRect.height+scrolled+window.screen.height/2
    
    // console.log(f.top.toFixed(3), f.height.toFixed(3), window.scrollY.toFixed(3), nivel_scroll.toFixed(3))

    
    
    let parallax = -scrolled * vel_parallax + (nivel_scroll*vel_parallax);
    let v = (f.top-window.screen.height/2+f.height/2)/window.screen.height
    console.log(v)
    text.style.backgroundPositionY = `-${Math.abs(v)*500}px`

    frase.style.transform = `translateY(calc(${parallax}px))`;
})