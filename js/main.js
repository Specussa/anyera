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

const carusel = new Carusel(document.querySelector('.slider'))

 // end carusel