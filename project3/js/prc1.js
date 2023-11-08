const buttonnav =document.querySelector('.list')
const lilist=document.querySelectorAll('.lilist')
const chailddrop=document.querySelectorAll('.chiled')
const tooglenav=document.querySelector('.tooglenav')
const TooglesLi=document.querySelector('.liliststoogles')
const sublilist=document.querySelector('.sublilisttogle')

buttonnav.addEventListener('click',function(){
tooglenav.classList.toggle('dis')
/* if(tooglenav==false){
    tooglenav.display='block'
} */
tooglenav.style.top='55px';

});

 for(let i=0;i<lilist.length;i++){
     lilist[i].addEventListener('mouseover',function(){
         chailddrop[i].style.display='block';

     });
     lilist[i].addEventListener('mouseout',function(){
    setTimeout( chailddrop[i].style.display='none',3000);
});
}

sublilist.addEventListener('click',function(){
    TooglesLi.classList.toggle('lilists-toogles')

});


  /* slider 1 homepagr */
  let slidon=1;
  dispalyimg(slidon);

  function nextimg(n){
    dispalyimg(slidon +=n)
  }

  function curentslide(n){
    dispalyimg(slidon=n)
  }

  function dispalyimg(n){
let i;
let slid =document.getElementsByClassName("slider")
let dotss=document.getElementsByClassName("dots")

if(n>slid.length){
  slidon=1;
}

if(n <1){
  slidon=slid.length;
}
 for(i=0;i<slid.length;i++){
  slid[i].style.display="none"
  slid[i].style.transition="all 5s"
 }
 for(i=0;i<dotss.length;i++){
  dotss[i].className=dotss[i].className.replace("active","")
 }

 slid[slidon - 1].style.display="block"
 dotss[slidon - 1].className +="active";
  }


  /* slider2 (porduct) */
 const products= document.querySelectorAll('.product')
 const allbuttonproducts= document.querySelectorAll('.totla-buttonproduct')
/*  products[i].addEventListener('mouseover' ,function(){
  allbuttonproducts.style.display="block";
});
 products[i].addEventListener('mouseout' ,function(){
  allbuttonproducts.style.display="none";
}); */
 for(let i=0; i<products.length;i++){
  products[i].addEventListener('mouseover' ,function(){
    allbuttonproducts[i].style.display="block";

  });
   products[i].addEventListener('mouseout' ,function(){
    allbuttonproducts[i].style.display="none";
  });
}



const leftbutton=document.querySelector('.left-sliders ')
const rightbutton=document.querySelector('.right-sliders ')

 let currentIndex =0;
const totalslide2=document.querySelector('.slider2-total')
const itemsslid2 = document.querySelectorAll('.product')
const numberitem=itemsslid2.length;

function nextslid() {
  if(currentIndex==0){
   rightbutton.style.display='none'
 }
   currentIndex = (currentIndex + 1 ) % numberitem;

 updateSlider();
}
function privslid () {
  if(widrh>1200){
if(currentIndex>-2)
    currentIndex = (currentIndex - 1)
}
if(widrh<1200&widrh>768){
  if(currentIndex>-4)
      currentIndex = (currentIndex - 1)
  }
  if(widrh<768){
    if(currentIndex>-5)
        currentIndex = (currentIndex - 1)
    }
updateSlider();
}
const widrh=window.innerWidth;

const productss=document.querySelector('.product1')
const productWidth = productss.offsetWidth;
function updateSlider() {
  const translateX = (currentIndex) *productWidth ;
  totalslide2.style.transition = 'transform 0.3s ease-in-out';
  totalslide2.style.transform = `translateX(${translateX}px)`;
}






/* slider3 */

const products3= document.querySelectorAll('.product3')
 const allbuttonproducts3= document.querySelectorAll('.totla-buttonproduct3')
/*  products[i].addEventListener('mouseover' ,function(){
  allbuttonproducts.style.display="block";
});
 products[i].addEventListener('mouseout' ,function(){
  allbuttonproducts.style.display="none";
}); */
 for(let i=0; i<products.length;i++){
  products3[i].addEventListener('mouseover' ,function(){
    allbuttonproducts3[i].style.display="block";

  });
   products3[i].addEventListener('mouseout' ,function(){
    allbuttonproducts3[i].style.display="none";
  });
}



const leftbutton3=document.querySelector('.left-sliders3 ')
const rightbutton3=document.querySelector('.right-sliders3 ')

 let currentIndex3=0;
const totalslide23=document.querySelector('.slider2-total3')
const itemsslid23 = document.querySelectorAll('.product3')
const numberitem3=itemsslid23.length;

function nextslid3() {
  if(currentIndex3==0){
   rightbutton3.style.display='none'
 }
   currentIndex3 = (currentIndex3 + 1 ) % numberitem3;

 updateSlider3();
}
 function privslid3 () {
 if(widrh3>1200){
if(currentIndex3>-4)
    currentIndex3 = (currentIndex3 - 1)
 }

/* if(widrh3<1200&widrh3>768){
  if(currentIndex3>-4)
      currentIndex3 = (currentIndex3 - 1)
  }*/
  if(widrh3<768){
    if(currentIndex3>-5)
        currentIndex3 = (currentIndex3 - 1)
    }
updateSlider3();
}
const widrh3=window.innerWidth;

const productss3=document.querySelector('.product13')
const productWidth3 = productss3.offsetWidth;

function updateSlider3() {
  const translateX3 = (currentIndex3) *productWidth3 ;
  totalslide23.style.transition = 'transform 0.3s ease-in-out';
  totalslide23.style.transform = `translateX(${translateX3}px)`;
}



/* slider4 */
const leftbutton4=document.querySelector('.left-sliders4 ')
const rightbutton4=document.querySelector('.right-sliders4 ')

 let currentIndex4=0;
const totalslide24=document.querySelector('.slider2-total4')
const itemsslid24 = document.querySelectorAll('.product4')
const numberitem4=itemsslid24.length;

function nextslid4() {
  if(currentIndex4==0){
   rightbutton4.style.display='none'
 }
   currentIndex4 = (currentIndex4 + 1 ) % numberitem4;

 updateSlider4();
}
 function privslid4 () {
 if(widrh4>1200){
if(currentIndex4>-5)
    currentIndex4 = (currentIndex4 - 1)
 }

/* if(widrh3<1200&widrh3>768){
  if(currentIndex3>-4)
      currentIndex3 = (currentIndex3 - 1)
  }*/
/*   if(widrh4<768){
    if(currentIndex4>-5)
        currentIndex4 = (currentIndex4- 1)
    } */
updateSlider4();
}
const widrh4=window.innerWidth;

const productss4=document.querySelector('.product14')
const productWidth4 = productss4.offsetWidth;
console.log(productWidth4);
function updateSlider4() {
  const translateX4 = (currentIndex4) *productWidth4 ;
  totalslide24.style.transition = 'transform 0.3s ease-in';
  totalslide24.style.transform = `translateX(${translateX4}px)`;
}

/* img slider */
 let slidon5=1;
dispalyimg5(slidon5);

/* function nextimg(n){
  dispalyimg(slidon +=n)
} */

function curentslide5(n){
  dispalyimg5(slidon5=n)
  curentslide5.style.transition = 'transform 0.3s ease-in';

}

function dispalyimg5(n){
let i;
let slid5 =document.getElementsByClassName("slider5")
let dotss5=document.getElementsByClassName("dots5")

if(n>slid5.length){
slidon5=1;
}

if(n <1){
slidon5=slid5.length;
}
for(i=0;i<slid5.length;i++){
slid5[i].style.display="none"
slid5[i].style.transition="all 5s"
}
for(i=0;i<dotss5.length;i++){
dotss5[i].className=dotss5[i].className.replace("active1","")
}

slid5[slidon5 - 1].style.display="block"
dotss5[slidon5 - 1].className +="active1";
}



/* slider6 */

const leftbutton6=document.querySelector('.left-sliders6 ')
const rightbutton6=document.querySelector('.right-sliders6 ')

 let currentIndex6=0;
const totalslide26=document.querySelector('.slider2-total6')
const itemsslid26 = document.querySelectorAll('.product6')
const numberitem6=itemsslid26.length;

function nextslid6() {
  if(widrh6>1200){
    if(currentIndex6<0)
        currentIndex6 = (currentIndex6 + 1)
    }
    if(widrh6<1200&widrh6>768){
      if(currentIndex6<0)
          currentIndex6 = (currentIndex6 + 1)
      }
      if(widrh6<768){
        if(currentIndex6<0)
            currentIndex6 = (currentIndex6 + 1)
        }
    console.log(currentIndex);
 updateSlider6();
}
function privslid6() {
  if(widrh6>1200){
if(currentIndex6>-3)
    currentIndex6 = (currentIndex6 - 1)
}
if(widrh6<1200&widrh6>768){
  if(currentIndex6>-4)
      currentIndex6 = (currentIndex6 - 1)
  }
  if(widrh6<768){
    if(currentIndex6>-5)
        currentIndex6 = (currentIndex6 - 1)
    }
updateSlider6();
}
const widrh6=window.innerWidth;

const productss6=document.querySelector('.product16')
const productWidth6 = productss6.offsetWidth;
function updateSlider6() {
  const translateX6 = (currentIndex6) *productWidth6 ;
  totalslide26.style.transition = 'transform 0.3s ease-in-out';
  totalslide26.style.transform = `translateX(${translateX6}px)`;
}
const btn11=document.querySelectorAll('.btn1')
const span6=document.querySelectorAll('.sapn-slider6')
/*  const btnslid6=document.querySelectorAll('.btn-slid6')
console.log(btnslid6);
btnslid6.addEventListener('click',function(){
  for(let i=0;i<btnslid6.length;i++){
  btnslid6.style.textDecoration = 'block'
}
}) */
/* btn11.addEventListener('click',function(){



}) */

/* for(let i=0;i<btn11.length;i++){
btn11[i].addEventListener('click',function(){
span6[i].classList.add("dis6");
})
}

for(let i=0;i<btn11.length;i++){
  span6[i].className=span6[i].className.replace("dis6","")

  } */

/* tab */
let slidon6=1;
  dispalyimg6(slidon6);

/*   function nextimg(n){
    dispalyimg(slidon +=n)
  } */

  function curentslide6(n){
    dispalyimg6(slidon6=n)
  }

  function dispalyimg6(n){
let i;
let item1s =document.getElementsByClassName("item1")
let btnslid6=document.getElementsByClassName("btn-slid6")

if(n>item1s.length){
  slidon=1;
}

if(n <1){
  slidon=item1s.length;
}
 for(i=0;i<item1s.length;i++){
  item1s[i].style.display="none"
  item1s[i].style.transition="all 5s"
 }
 for(i=0;i<btnslid6.length;i++){
  btnslid6[i].className=btnslid6[i].className.replace("active6","")
 }

 item1s[slidon6 - 1].style.display="block"
 btnslid6[slidon6 - 1].className +="active6";
  }


  const leftbutton7=document.querySelector('.left-sliders7 ')
const rightbutton7=document.querySelector('.right-sliders7 ')

 let currentIndex7=0;
const totalslide27=document.querySelector('.slider2-total7')
const itemsslid27 = document.querySelectorAll('.product7')
const numberitem7=itemsslid27.length;

function nextslid7() {
  if(currentIndex7==0){
   rightbutton7.style.display='none'
 }
   currentIndex7 = (currentIndex7 + 1 ) % numberitem7;

 updateSlider7();
}
 function privslid7 () {
 if(widrh7>1200){
if(currentIndex7>-3)
    currentIndex7 = (currentIndex7 - 1)
 }

 if(widrh7<1200&widrh7>768){
  if(currentIndex7>-4)
      currentIndex7 = (currentIndex7 - 1)
  }
   if(widrh7<768){
    if(currentIndex7>-5)
        currentIndex7 = (currentIndex7- 1)
    }
updateSlider7();
}
const widrh7=window.innerWidth;

const productss7=document.querySelector('.product17')
const productWidth7 = productss7.offsetWidth;
console.log(productWidth7);
function updateSlider7() {
  const translateX7 = (currentIndex7) *productWidth7 ;
  totalslide27.style.transition = 'transform 0.3s ease-in';
  totalslide27.style.transform = `translateX(${translateX7}px)`;
}
const btnfooter=document.querySelector('.input-footer')
const inputgrop=document.querySelector('.input-grop')

  btnfooter.addEventListener('click',function(){
inputgrop.style.borderBottom = "2px solid red";
  })

