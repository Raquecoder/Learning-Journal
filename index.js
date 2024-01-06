const openNavBtn = document.getElementById('openNavBtn')
//console.log(openNavBtn)
const closeNavBtn = document.getElementById('closeNavBtn')
//console.log(closeNavBtn)
const navSection = document.getElementById('navSection')
//console.log(navSection)

openNavBtn.addEventListener('click',function(){
    navSection.style.display = 'block';
})

closeNavBtn.addEventListener('click',function(){
    navSection.style.display= 'none';
})

