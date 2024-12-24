const navbtnEl = document.querySelector('.lb_btn_nav')
const menuEl = document.querySelector('.menu')
const txt1 = document.querySelector('.txt1')
const txt2 = document.querySelector('.txt2')
const txt3 = document.querySelector('.txt3')
const txt4 = document.querySelector('.txt4')
const secimg1 = document.querySelector('.secimg1')
const h2Els = document.querySelectorAll('h2')

const io = new IntersectionObserver(function(entries){
  entries.forEach(function(entry){
    if(!entry.isIntersecting){
      return
    }
    entry.target.classList.add('on')
  })
})

h2Els.forEach(function(el){
  io.observe(el)
})


// 클릭시 close로 변경
navbtnEl.addEventListener('click' , function(){
  navbtnEl.classList.toggle('close');
})
navbtnEl.addEventListener('click' , function(){
  menuEl.classList.toggle('hide');
})

// window.addEventListener('scroll', _.throttle(function(){
//   console.log(window.screenY,scrollX); }))


  window.addEventListener('scroll',function(){
    if(window.scrollY > 600){
      txt1.classList.add('on')
    } else {
      txt1.classList.remove('on')
    }
  })
  window.addEventListener('scroll',function(){
    if(window.scrollY > 700){
      txt2.classList.add('on')
    } else {
      txt2.classList.remove('on')
    }
  })
  window.addEventListener('scroll',function(){
    if(window.scrollY > 890){
      secimg1.classList.add('on')
    } else {
      secimg1.classList.remove('on')
    }
  })
  
  window.addEventListener('scroll',function(){
    if(window.scrollY > 1850){
      txt3.classList.add('on')
    } else {
      txt3.classList.remove('on')
    }
  })
  
  window.addEventListener('scroll',function(){
    if(window.scrollY > 1930){
      txt4.classList.add('on')
    } else {
      txt4.classList.remove('on')
    }
  })

  
  

  



// 600 TXT1 1900
// 700 txt2 1970
// 890 secimg1 2979

//1850 txt3
//1930 txt4
