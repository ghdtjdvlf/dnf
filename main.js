const navbtnEl = document.querySelector('.lb_btn_nav')
const menuEl = document.querySelector('.menu')
const secimg1 = document.querySelector('.secimg1')
const h2Els = document.querySelectorAll('h2')
const h3Els = document.querySelectorAll('h3')

const sub1 = document.querySelector('.sub1')
const sub2 = document.querySelector('.sub2')
const sub3 = document.querySelector('.sub3')
const sub4 = document.querySelector('.sub4')
const sub5 = document.querySelector('.sub5')




sub1.addEventListener('click',function(){
  window.scrollTo({
    top: 1700,
    left: 0,
  })
})
sub2.addEventListener('click',function(){
  window.scrollTo({
    top: 6824,
    left: 0,
  })
})
sub3.addEventListener('click',function(){
  window.scrollTo({
    top: 8257,
    left: 0,
  })
})
sub4.addEventListener('click',function(){
  window.scrollTo({
    top: 9649,
    left: 0,
  })
})
sub5.addEventListener('click',function(){
  window.scrollTo({
    top: 11062,
    left: 0,
  })
})

const openbtn = document.querySelector('#openbtn')
const closebtn = document.querySelector('#closebtn')

const submenu = document.querySelector('.submenu_on')


navbtnEl.addEventListener('click',function(){
  menuEl.classList.toggle('on')
})

openbtn.addEventListener('click',function(){
  submenu.classList.add('on')
  closebtn.classList.add('on')
})

closebtn.addEventListener('click',function(){
  closebtn.classList.remove('on')
  submenu.classList.remove('on')
})

const s4 = document.querySelector('section.section4')
const s5 = document.querySelector('section.section5')
const s6 = document.querySelector('section.section6')
const s7 = document.querySelector('section.section7')

const s4ob1 =s4.querySelector('.obj1')
const s4ob2 =s4.querySelector('.obj2')
const s4up =s4.querySelector('.d0109')

const s5up = s5.querySelector('.d0200')
const preview = s5.querySelector('.preview')
const reward = s5.querySelector('.reward')

const s6up = s6.querySelector('.d0400')

const s7c1 = s7.querySelector('.c1')
const s7c2 = s7.querySelector('.c2')






const s3obj1 = document.querySelector('.s3obj1') 
const s3obj2 = document.querySelector('.s3obj2') 
const cardbox = document.querySelector('.card-box') 

const io = new IntersectionObserver(function(entries){
  entries.forEach(function(entry){
    if(entry.isIntersecting){
      entry.target.classList.add('on')
    } else {
      entry.target.classList.remove('on')
    }
  })
})



h2Els.forEach(function(el){
  io.observe(el)
})
h3Els.forEach(function(el){
  io.observe(el)
})

io.observe(s7c1);
io.observe(secimg1);
io.observe(s3obj1);
io.observe(s3obj2);
io.observe(cardbox);
io.observe(s4ob1);
io.observe(s4ob2);
io.observe(s4up);
io.observe(s5up);
io.observe(preview);
io.observe(reward);
io.observe(s6up);
io.observe(s7c1);
io.observe(s7c2);







// 클릭시 close로 변경
navbtnEl.addEventListener('click' , function(){
  navbtnEl.classList.toggle('close');
})

// window.addEventListener('scroll', _.throttle(function(){
//   console.log(window.screenY,scrollX); }))


  // window.addEventListener('scroll',function(){
  //   if(window.scrollY > 600){
  //     txt1.classList.add('on')
  //   } else {
  //     txt1.classList.remove('on')
  //   }
  // })
  // window.addEventListener('scroll',function(){
  //   if(window.scrollY > 700){
  //     txt2.classList.add('on')
  //   } else {
  //     txt2.classList.remove('on')
  //   }
  // })
  // window.addEventListener('scroll',function(){
  //   if(window.scrollY > 890){
  //     secimg1.classList.add('on')
  //   } else {
  //     secimg1.classList.remove('on')
  //   }
  // })
  
  // window.addEventListener('scroll',function(){
  //   if(window.scrollY > 1850){
  //     txt3.classList.add('on')
  //   } else {
  //     txt3.classList.remove('on')
  //   }
  // })
  
  // window.addEventListener('scroll',function(){
  //   if(window.scrollY > 1930){
  //     txt4.classList.add('on')
  //   } else {
  //     txt4.classList.remove('on')
  //   }
  // })

  
// 600 TXT1 1900
// 700 txt2 1970
// 890 secimg1 2979

//1850 txt3
//1930 txt4

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

let 지금사진 = 1;
console.log(지금사진);


rightBtn.addEventListener('click', function () {
  if (지금사진 == 1) {
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

    btn1.classList.remove('on')
    btn2.classList.add('on')
    btn3.classList.remove('on')
    btn4.classList.remove('on')

    t1El.classList.remove('show')
    t2El.classList.remove('show')
    t3El.classList.add('show')
    t4El.classList.add('show')
    t5El.classList.remove('show')
    t6El.classList.remove('show')
    t7El.classList.remove('show')
    t8El.classList.remove('show')
    
    지금사진 += 1;

    console.log(지금사진);

  } else if (지금사진 == 2) {
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
    btn4.classList.remove('on');
    지금사진 += 1;
    console.log(지금사진);
  }
  else if (지금사진 == 3) {
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
    지금사진 += 1;
    console.log(지금사진);
    
  } else if (지금사진 == 4) {
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

    지금사진 = 1;
    console.log(지금사진);
  }}) 

  leftBtn.addEventListener('click',function(){
    if(지금사진 == 1){ 
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

      지금사진 = 4;  
      console.log(지금사진);
    }

    else if (지금사진 == 4 ){
      
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
    
    지금사진 -= 1;
    console.log(지금사진);
    

    }
    
    else if (지금사진 == 3){

      //세번째

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

    지금사진 -= 1;
    console.log(지금사진);

    }

    else if (지금사진 == 2){

      //세번째

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
    지금사진 -= 1;
    console.log(지금사진);
    }})






