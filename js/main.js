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