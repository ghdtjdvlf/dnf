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

const s1 = document.querySelector('.scene1')
const sex = document.querySelector('#sex')
const s2 = document.querySelector('.scene2')
const s3 = document.querySelector('.scene3')
const s4 = document.querySelector('.scene4')

const c1El = document.querySelector('.c1')
const c2El = document.querySelector('.c2')
const c3El = document.querySelector('.c3')
const c4El = document.querySelector('.c4')
const c5El = document.querySelector('.c5')
const c6El = document.querySelector('.c6')
const c7El = document.querySelector('.c7')
const c8El = document.querySelector('.c8')

const t1El = document.querySelector('.t1')
const t2El = document.querySelector('.t2')
const t3El = document.querySelector('.t3')
const t4El = document.querySelector('.t4')
const t5El = document.querySelector('.t5')
const t6El = document.querySelector('.t6')
const t7El = document.querySelector('.t7')
const t8El = document.querySelector('.t8')

const bg1El = document.querySelector('.bg1')
const bg2El = document.querySelector('.bg2')
const bg3El = document.querySelector('.bg3')
const bg4El = document.querySelector('.bg4')


const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const leftBtn = document.querySelector('.left_btn')
const rightBtn = document.querySelector('.right_btn')

btn1.addEventListener('click', function(){
  bg1El.classList.add('show')
  bg2El.classList.remove('show')
  bg3El.classList.remove('show')
  bg4El.classList.remove('show')
  c1El.classList.add('show')
  c2El.classList.add('show')
  c3El.classList.remove('show')
  c4El.classList.remove('show')
  c5El.classList.remove('show')
  c6El.classList.remove('show')
  c7El.classList.remove('show')
  c8El.classList.remove('show')
  t1El.classList.add('show')
  t2El.classList.add('show')
  t3El.classList.remove('show')
  t4El.classList.remove('show')
  t5El.classList.remove('show')
  t6El.classList.remove('show')
  t7El.classList.remove('show')
  t8El.classList.remove('show')
  btn1.classList.add('on')
  btn2.classList.remove('on')
  btn3.classList.remove('on')
  btn4.classList.remove('on')
  지금사진 = 1
})

btn2.addEventListener('click', function(){
  bg1El.classList.remove('show')
  bg2El.classList.add('show')
  bg3El.classList.remove('show')
  bg4El.classList.remove('show')
  c1El.classList.remove('show')
  c2El.classList.remove('show')
  c3El.classList.add('show')
  c4El.classList.add('show')
  c5El.classList.remove('show')
  c6El.classList.remove('show')
  c7El.classList.remove('show')
  c8El.classList.remove('show')

  t1El.classList.remove('show')
  t2El.classList.remove('show')
  t3El.classList.add('show')
  t4El.classList.add('show')
  t5El.classList.remove('show')
  t6El.classList.remove('show')
  t7El.classList.remove('show')
  t8El.classList.remove('show')

  btn1.classList.remove('on')
  btn2.classList.add('on')
  btn3.classList.remove('on')
  btn4.classList.remove('on')
  지금사진 = 2
})
btn3.addEventListener('click', function(){
  bg1El.classList.remove('show')
  bg2El.classList.remove('show')
  bg3El.classList.add('show')
  bg4El.classList.remove('show')
  c1El.classList.remove('show')
  c2El.classList.remove('show')
  c3El.classList.remove('show')
  c4El.classList.remove('show')
  c5El.classList.add('show')
  c6El.classList.add('show')
  c7El.classList.remove('show')
  c8El.classList.remove('show')

  t1El.classList.remove('show')
  t2El.classList.remove('show')
  t3El.classList.remove('show')
  t4El.classList.remove('show')
  t5El.classList.add('show')
  t6El.classList.add('show')
  t7El.classList.remove('show')
  t8El.classList.remove('show')


  btn1.classList.remove('on')
  btn2.classList.remove('on')
  btn3.classList.add('on')
  btn4.classList.remove('on')
  지금사진 = 3
})
btn4.addEventListener('click', function(){
  bg1El.classList.remove('show')
  bg2El.classList.remove('show')
  bg3El.classList.remove('show')
  bg4El.classList.add('show')
  c1El.classList.remove('show')
  c2El.classList.remove('show')
  c3El.classList.remove('show')
  c4El.classList.remove('show')
  c5El.classList.remove('show')
  c6El.classList.remove('show')
  c7El.classList.add('show')
  c8El.classList.add('show')

  t1El.classList.remove('show')
  t2El.classList.remove('show')
  t3El.classList.remove('show')
  t4El.classList.remove('show')
  t5El.classList.remove('show')
  t6El.classList.remove('show')
  t7El.classList.add('show')
  t8El.classList.add('show')


  btn1.classList.remove('on')
  btn2.classList.remove('on')
  btn3.classList.remove('on')
  btn4.classList.add('on')
})


// 다음 버튼 눌렀을때 1번 사진이면 2번으로 2면 3번으로 

let 지금사진 = 2

rightBtn.addEventListener('click', function () {
  if (지금사진 == 1) {
    bg1El.classList.add('show')
    bg2El.classList.remove('show')
    bg3El.classList.remove('show')
    bg4El.classList.remove('show')

    c1El.classList.add('show')
    c2El.classList.add('show')
    c3El.classList.remove('show')
    c4El.classList.remove('show')
    c5El.classList.remove('show')
    c6El.classList.remove('show')
    c7El.classList.remove('show')
    c8El.classList.remove('show')

    btn1.classList.add('on')
    btn2.classList.remove('on')
    btn3.classList.remove('on')
    btn4.classList.remove('on');

    t1El.classList.add('show')
    t2El.classList.add('show')
    t3El.classList.remove('show')
    t4El.classList.remove('show')
    t5El.classList.remove('show')
    t6El.classList.remove('show')
    t7El.classList.remove('show')
    t8El.classList.remove('show')
    
    지금사진 += 1;
    console.log(지금사진);
  } else if (지금사진 == 2) {
    bg1El.classList.remove('show')
    bg2El.classList.add('show')
    bg3El.classList.remove('show')
    bg4El.classList.remove('show')

    c1El.classList.remove('show')
    c2El.classList.remove('show')
    c3El.classList.add('show')
    c4El.classList.add('show')
    c5El.classList.remove('show')
    c6El.classList.remove('show')
    c7El.classList.remove('show')
    c8El.classList.remove('show')

    t1El.classList.remove('show')
    t2El.classList.remove('show')
    t3El.classList.add('show')
    t4El.classList.add('show')
    t5El.classList.remove('show')
    t6El.classList.remove('show')
    t7El.classList.remove('show')
    t8El.classList.remove('show')

    btn1.classList.remove('on')
    btn2.classList.add('on')
    btn3.classList.remove('on')
    btn4.classList.remove('on');
    지금사진 += 1;
    console.log(지금사진);
  }
  else if (지금사진 == 3) {
    bg1El.classList.remove('show')
    bg2El.classList.remove('show')
    bg3El.classList.add('show')
    bg4El.classList.remove('show')

    c1El.classList.remove('show')
    c2El.classList.remove('show')
    c3El.classList.remove('show')
    c4El.classList.remove('show')
    c5El.classList.add('show')
    c6El.classList.add('show')
    c7El.classList.remove('show')
    c8El.classList.remove('show')

    t1El.classList.remove('show')
    t2El.classList.remove('show')
    t3El.classList.remove('show')
    t4El.classList.remove('show')
    t5El.classList.add('show')
    t6El.classList.add('show')
    t7El.classList.remove('show')
    t8El.classList.remove('show')

    btn1.classList.remove('on')
    btn2.classList.remove('on')
    btn3.classList.add('on')
    btn4.classList.remove('on')
    지금사진 += 1;
    console.log(지금사진);
    
  } else if (지금사진 == 4) {
    bg1El.classList.remove('show')
    bg2El.classList.remove('show')
    bg3El.classList.remove('show')
    bg4El.classList.add('show')
    c1El.classList.remove('show')
    c2El.classList.remove('show')
    c3El.classList.remove('show')
    c4El.classList.remove('show')
    c5El.classList.remove('show')
    c6El.classList.remove('show')
    c7El.classList.add('show')
    c8El.classList.add('show')

    t1El.classList.remove('show')
    t2El.classList.remove('show')
    t3El.classList.remove('show')
    t4El.classList.remove('show')
    t5El.classList.remove('show')
    t6El.classList.remove('show')
    t7El.classList.add('show')
    t8El.classList.add('show')

    btn1.classList.remove('on')
    btn2.classList.remove('on')
    btn3.classList.remove('on')
    btn4.classList.add('on')
    지금사진 = 1;
    console.log(지금사진);
  }}) 

  leftBtn.addEventListener('click',function(){
    if(지금사진 = 2){
      bg1El.classList.remove('show')
      bg2El.classList.remove('show')
      bg3El.classList.remove('show')
      bg4El.classList.add('show')
      c1El.classList.remove('show')
      c2El.classList.remove('show')
      c3El.classList.remove('show')
      c4El.classList.remove('show')
      c5El.classList.remove('show')
      c6El.classList.remove('show')
      c7El.classList.add('show')
      c8El.classList.add('show')
      btn1.classList.remove('on')
      btn2.classList.remove('on')
      btn3.classList.remove('on')
      btn4.classList.add('on')
      지금사진 = 1;
    }})
  leftBtn.addEventListener('click',function(){
    if(지금사진 = 1){
      bg1El.classList.remove('show')
      bg2El.classList.remove('show')
      bg3El.classList.remove('show')
      bg4El.classList.add('show')
      c1El.classList.remove('show')
      c2El.classList.remove('show')
      c3El.classList.remove('show')
      c4El.classList.remove('show')
      c5El.classList.remove('show')
      c6El.classList.remove('show')
      c7El.classList.add('show')
      c8El.classList.add('show')
      btn1.classList.remove('on')
      btn2.classList.remove('on')
      btn3.classList.remove('on')
      btn4.classList.add('on')
    }})
    
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });