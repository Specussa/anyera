
  // start navbar
  document.querySelector('.header__burger').addEventListener('click', function() {
    var menu = document.querySelector('.header__nav');
    var burger = document.querySelector('.header__burger');
    var burgernav = document.querySelector('.header__nav_burger');
    var overlay = document.querySelector('.overlay');
    
    if (burger.classList.contains("active")) {
      menu.classList.remove("active");
      burger.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "visible";
      document.body.style.height = "auto";
    } else {
      menu.classList.add("active");
      burger.classList.add("active");
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    }
    
    if (burgernav.classList.contains("active")) {
      menu.classList.remove("active");
      burgernav.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "visible";
      document.body.style.height = "auto";
    } else {
      menu.classList.add("active");
      burgernav.classList.add("active");
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    }
    
    overlay.addEventListener('click', () => {
      menu.classList.remove('active');
      burger.classList.remove('active');
      burgernav.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = "visible";
      document.body.style.height = "auto";
    });
  })
  document.querySelector('.header__nav_burger').addEventListener('click', function() {
     var menu = document.querySelector('.header__nav');
     var burger = document.querySelector('.header__burger');
     var burgernav = document.querySelector('.header__nav_burger');
     var overlay = document.querySelector('.overlay');
    
     if (burger.classList.contains("active")) {
       menu.classList.remove("active");
       burger.classList.remove("active");
       overlay.classList.remove("active");
       document.body.style.overflow = "visible";
       document.body.style.height = "auto";
     } else {
       menu.classList.add("active");
       burger.classList.add("active");
       overlay.classList.add("active");
       document.body.style.overflow = "hidden";
       document.body.style.height = "100vh";
     }
     
     if (burgernav.classList.contains("active")) {
       menu.classList.remove("active");
       burgernav.classList.remove("active");
       overlay.classList.remove("active");
       document.body.style.overflow = "visible";
       document.body.style.height = "auto";
     } else {
       menu.classList.add("active");
       burgernav.classList.add("active");
       overlay.classList.add("active");
       document.body.style.overflow = "hidden";
       document.body.style.height = "100vh";
     }
     
     overlay.addEventListener('click', () => {
       menu.classList.remove('active');
       burger.classList.remove('active');
       burgernav.classList.remove('active');
       overlay.classList.remove('active');
       document.body.style.overflow = "visible";
       document.body.style.height = "auto";
     });
   })
  // end navbar
 
  // start carusel
 class Carusel {
   constructor(node) {
     this.node = node
     this.list = null
     this._counter = 0
     this.sides = 0
     this.step = 0
     this.shift = 0
     this.findParts()
     this.prepare()
     this.listen()
   }
   
   findParts() {
     this.list = this.node.querySelector('[data-slider-list]')
     this.items = [...this.list.children]
     this.step_buttons = [...this.node.querySelectorAll('[data-slider-step-button]')].map((button) => {
         return {
         node: button,
         value: !!button.dataset.sliderStepButton ? +button.dataset.sliderStepButton: 1
       }
     })
   }
   
   prepare() {
     this.sides = this.items.length
     this.step = 2 * Math.PI / this.sides
     this.shift = Math.PI / 2
     this.counter = 0
   }
   
   listen() {
     this.step_buttons.forEach(button => {
         button.node.addEventListener('click', () => {
         this.counter = this.counter + button.value
       })
     })
   }
   
   listenKeys(e) {
     if(e.key === 'ArrowLeft') {
       this.counter = this.counter - 1
     } else if(e.key === 'ArrowRight') {
       this.counter = this.counter + 1
     }
   }
   
   notify() {
     this.items.forEach((item, i) => {
       const pos = (i + this.counter) * this.step + this.shift
       const cos = Math.cos(pos)
       const sin = Math.sin(pos)
       const scale = Math.max(0.3, (sin + 1) / 2)
       item.style.setProperty('--cos', (cos + 0.05))
       item.style.setProperty('--sin', (sin - 0.9))
       item.style.setProperty('--scale', scale)
     })
   }
   
   get counter() {
     return this._counter
   }
   
   set counter(new_value) {
     this._counter = new_value < 0 ? this.sides + new_value : new_value % this.sides
     this.notify()
   }
 }
 
 const carusel = new Carusel(document.querySelector('.section__hero_carusel'))
 
 var dots = document.querySelectorAll('.slider__list .slider__list__item');
 dots.forEach(function(dot) {
     // document.querySelector('.slider1').style.width = 'calc(30em *' + dots.length + ')';
     // document.querySelector('.slider1').style.height = 'calc(10em *' + dots.length + ')';
 });
 
 
  // end carusel
 
  // start slider
 
 const slides = document.querySelectorAll(".section__hero_slide");
 const hero_top = document.querySelector(".section__hero_top");
 const hero_bottom = document.querySelector(".section__hero_bottom");
 const slidewidth = document.querySelector(".section__hero_slider");
 const ltop = getComputedStyle(hero_top);
 const lbottom = getComputedStyle(hero_bottom);
 
 // hero_top.style.left = (parseInt(ltop.left) + 50) + 'px';
 
 slides.forEach((slide, indx) => {
   slide.style.transform = `translateX(${indx * 100}%)` + `translateY(-50%)`;
   hero_top.style.left = ltop.left;
   hero_bottom.style.left = lbottom.left;
 });
 const nextSlide = document.querySelector(".button__go");
 const nextSlide2 = document.querySelector(".section__hero_right_go");
 let curSlide = 0;
 let maxSlide = slides.length - 1;
 
 nextSlide.addEventListener("click", function () {
   if (curSlide === maxSlide) {
     curSlide = 0;
   } else {
     curSlide++;
   }
   slides.forEach((slide, indx) => {
     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)` + `translateY(-50%)`;
     hero_top.style.left = (parseInt(ltop.left) - slidewidth.offsetWidth) + "px";
     hero_bottom.style.left = (parseInt(lbottom.left) - slidewidth.offsetWidth) + "px";
   });
 });
 nextSlide2.addEventListener("click", function () {
   if (curSlide === maxSlide) {
     curSlide = 0;
   } else {
     curSlide++;
   }
   slides.forEach((slide, indx) => {
     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)` + `translateY(-50%)`;
     hero_top.style.left = (parseInt(ltop.left) - slidewidth.offsetWidth) + "px";
     hero_bottom.style.left = (parseInt(lbottom.left) - slidewidth.offsetWidth) + "px";
   });
 });
 const prevSlide = document.querySelector(".button__back");
 const prevSlide2 = document.querySelector(".section__hero_right_back");
 prevSlide.addEventListener("click", function () {
   if (curSlide === 0) {
     curSlide = maxSlide;
   } else {
     curSlide--;
   }
   slides.forEach((slide, indx) => {
     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)` + `translateY(-50%)`;
     hero_top.style.left = (parseInt(ltop.left) + slidewidth.offsetWidth) + "px";
     hero_bottom.style.left = (parseInt(lbottom.left) + slidewidth.offsetWidth) + "px";
   });
 });
 prevSlide2.addEventListener("click", function () {
   if (curSlide === 0) {
     curSlide = maxSlide;
   } else {
     curSlide--;
   }
   slides.forEach((slide, indx) => {
     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)` + `translateY(-50%)`;
     hero_top.style.left = (parseInt(ltop.left) + slidewidth.offsetWidth) + "px";
     hero_bottom.style.left = (parseInt(lbottom.left) + slidewidth.offsetWidth) + "px";
   });
 });
 

 window.addEventListener('resize', onResizeHandler, false);
 function onResizeHandler() {
  
 }

  // end slider
 
  // start sp
 
  const button__level = document.querySelector(".section__hero_sp_gradient");
  const button__one = document.querySelector(".button__level_one");
  const button__two = document.querySelector(".button__level_two");
  const button__three = document.querySelector(".button__level_three");
  const arrow = document.querySelector(".section__hero_sp_arrow");
 
  document.querySelector(".button__level_one").addEventListener("click", function(e) {
   arrow.style.transform = `translate(-50%, -50%) rotate(6deg)`;
   button__level.classList.add("gradient_one");
   button__level.classList.remove("gradient_two");
   button__level.classList.remove("gradient_three");
   button__one.classList.add("active");
   button__two.classList.remove("active");
   button__three.classList.remove("active");
 });
 document.querySelector(".button__level_two").addEventListener("click", function(e) {
   arrow.style.transform = `translate(-50%, -50%) rotate(127deg)`;
   button__level.classList.add("gradient_two");
   button__level.classList.remove("gradient_one");
   button__level.classList.remove("gradient_three");
   button__two.classList.add("active");
   button__one.classList.remove("active");
   button__three.classList.remove("active");
 });
 document.querySelector(".button__level_three").addEventListener("click", function(e) {
   arrow.style.transform = `translate(-50%, -50%) rotate(247deg)`;
   button__level.classList.add("gradient_three");
   button__level.classList.remove("gradient_two");
   button__level.classList.remove("gradient_one");
   button__three.classList.add("active");
   button__two.classList.remove("active");
   button__one.classList.remove("active");
 });
 
  // end sp