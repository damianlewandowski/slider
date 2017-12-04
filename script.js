window.onload = function() {
  // Fix javascript's stupid modulo bug for negative numbers
  function mod(n, m) {
    return ((n % m) + m) % m;
  }

  // All slides data
  const slides = [
    {
      "id": 0,
      "image": "img1.jpg",
      "title": "Image 1 title",
      "description": "0Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro numquam eligendi dicta adipisci deleniti."
    },
    {
      "id": 1,
      "image": "img2.jpg",
      "title": "Image 2 title",
      "description": "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro numquam eligendi dicta adipisci deleniti."
    },
    {
      "id": 2,
      "image": "img3.jpg",
      "title": "Image 3 title",
      "description": "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro numquam eligendi dicta adipisci deleniti."
    },
    {
      "id": 3,
      "image": "img4.jpg",
      "title": "Image 4 title",
      "description": "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro numquam eligendi dicta adipisci deleniti."
    },
    {
      "id": 4,
      "image": "img5.jpg",
      "title": "Image 5 title",
      "description": "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro numquam eligendi dicta adipisci deleniti."
    },
    {
      "id": 5,
      "image": "img6.jpg",
      "title": "Image 6 title",
      "description": "5Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro numquam eligendi dicta adipisci deleniti."
    }
  ]

  // Handlers for displaying each slide
  const slide = document.querySelector("#slide");
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");

  // Buttons for changing slides for the previous one and the next one
  const leftBtn = document.querySelector("#left-btn");
  const rightBtn = document.querySelector("#right-btn");

  // White circle buttons div
  // Construct them as a string and then render into pickSLides.innerHTML
  const pickSlides = document.querySelector("#pick-slides");
  let pickSlidesButtons = ``;
  for(let i = 0; i < slides.length; i++) {
    pickSlidesButtons += `<button id="pick-slide-${i}" class="pick-slide"></button>`
  }

  pickSlides.innerHTML = pickSlidesButtons;

  // The currently displayed slide
  let currentSlide = slides[0];

    // Add onclick event handlers for circle buttons
    for(let i = 0; i < slides.length; i++) {
      document.getElementById("pick-slide-" + i).onclick = function() {
        const index = parseInt(this.id[this.id.length - 1]);
        // Remove active
        document.getElementById("pick-slide-" + currentSlide["id"]).className = "pick-slide";
        currentSlide = slides[index];    
        slide.style.opacity = "0";
        setTimeout(changeSlide, 500, index);   
      }
    }

  // Assign on click event handlers
  leftBtn.onclick = leftBtnClick;
  rightBtn.onclick = rightBtnClick;

  // Load initial slide
  changeSlide(0);

  // Change displayed slide
  function changeSlide(id) {
    // Grab new slide data
    const newSlide = slides.find((slide) => {
      return slide.id === id;
    })

    // Change active
    document.getElementById("pick-slide-" + currentSlide["id"]).className = "pick-slide active";
    
    // Set new background
    slide.style.backgroundImage = `url(images/${newSlide.image})`;
    slide.style.opacity = "1";
    title.innerHTML = newSlide.title;
    description.innerHTML = newSlide.description;
  }

  // Handle event for displaying the previous slide
  function leftBtnClick() {
    const index = mod((currentSlide["id"] - 1), slides.length);
    // Remove active
    document.getElementById("pick-slide-" + currentSlide["id"]).className = "pick-slide";
    currentSlide = slides[index];
    slide.style.opacity = "0";
    setTimeout(changeSlide, 500, index);    
  }

  // Handle event for displaying the next slide  
  function rightBtnClick() {
    const index = (currentSlide["id"] + 1) % slides.length;
    // Remove active
    document.getElementById("pick-slide-" + currentSlide["id"]).className = "pick-slide";
    currentSlide = slides[index];    
    slide.style.opacity = "0";
    setTimeout(changeSlide, 500, index); 
  }

  function pickSlideX() {
    // Id of clicked button
    const id = pickSlideOne.id[pickSlideOne.id.length - 1]
    currentSlide = cu
  }

  


}