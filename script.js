const bar=document.getElementById('bar')
const nav=document.getElementById('navbar')
const close=document.getElementById('close')

// showing hamburger menu
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}

// hide hamburger menu
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}