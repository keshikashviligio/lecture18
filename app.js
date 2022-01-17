// // #1
// const removeBtn = document.getElementById('remove-btn');
// removeBtn.addEventListener('click', e => {
//   e.target.remove();
// });
//
// // #2
// const img = document.createElement('img');
// img.setAttribute('src', 'https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg');
// document.body.appendChild(img);
const users = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg"
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg"
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg"
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg"
  },
];

// #5
function renderUsers() {
  const userListWrapper = document.getElementById('user-list');
  const usersHtml = users.map(user => {
    return `<div class="user-item">
    <img src="${user.avatar}" alt="${user.first_name}" />
    <span>${user.first_name} ${user.last_name}</span>
    <button class="remove-user-btn">X</button>
    <button class="show-user-info-btn">?</button>
    <span class="user-email" style="display: none">${user.email}</span>
</div>`
  });
  userListWrapper.innerHTML = usersHtml.join('');
  const removeUserButtons = document.querySelectorAll('.remove-user-btn');
  const userInfoButtons = document.querySelectorAll('.show-user-info-btn');

  removeUserButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      btn.parentNode.remove();
    })
  })
  userInfoButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      const userEmail = btn.parentNode.querySelector('.user-email');
      if(userEmail.style.display === 'block'){
        userEmail.style.display = 'none';
      } else {
        userEmail.style.display = 'block';
      }
    })
  })
}

// renderUsers();

// #6
// function birthdayCakeCandles(candles) {
//   // Write your code here
//   const max = Math.max(...candles);
//   // let max = candles[0];
//   // candles.forEach(candle => {
//   //   if(max < candle){
//   //     max = candle;
//   //   }
//   // });
//   // console.log(max);
//   const filtered = candles.filter(candle => candle === max);
//
//   return filtered.length;
// }

// function sync(){
//   console.log('Call function');
//   for (let i = 0; i < 100000; i++){
//
//   }
//   console.log('###');
//   console.log('End for');
// }
// sync();

// const eventLoop = [];
// let timeOutId = null;
// let intervalId = null;
// function startTimeOutFn() {
//   console.log('Call function');
//   const handleTimeOut = () => {
//     console.log('Timeout done');
//   }
//   timeOutId = setTimeout(handleTimeOut, 4000);
//   console.log('End Function call');
// }
//
// function stopTimeOutFn() {
//   if(timeOutId) {
//     clearTimeout(timeOutId);
//     timeOutId = null;
//   }
// }
//
// function startIntervalFn() {
//   console.log('Call function');
//   const handleTimeOut = () => {
//     console.log(new Date().getSeconds());
//   }
//   intervalId = setInterval(handleTimeOut, 1000);
//   console.log('End Function call');
// }
//
// function stopIntervalFn() {
//   if(intervalId) {
//     clearInterval(intervalId);
//     intervalId = null;
//   }
// }
// // asyncFuncInterval();
// // asyncFunc();
//
// const startTimeOut = document.querySelector('.start-timeout');
// const startInterval = document.querySelector('.start-interval');
// const stopTimeOut = document.querySelector('.stop-timeout');
// const stopInterval = document.querySelector('.stop-interval');
//
// startTimeOut.addEventListener('click', () => {
//   startTimeOutFn();
// });
// startInterval.addEventListener('click', () => {
//   startIntervalFn();
// });
//
// stopTimeOut.addEventListener('click', () => {
//   stopTimeOutFn();
// });
//
// stopInterval.addEventListener('click', () => {
//   stopIntervalFn();
// });

const sliderItems = document.querySelectorAll('.slider-item');
const nextSlideBtn = document.querySelector('#next-slide-btn');
const prevSlideBtn = document.querySelector('#prev-slide-btn');
const startAutoSliding = document.querySelector('#autoslide-btn');
const stopAutoSliding = document.querySelector('#autoslide-stop-btn');
let activeIndex = 0;
let timeoutId = null;

function initSlider(){
  nextSlideBtn.addEventListener('click', showNextSlide);
  prevSlideBtn.addEventListener('click', showPrevSlide);
  startAutoSliding.addEventListener('click', startAutoSlidingFn)
  stopAutoSliding.addEventListener('click', stopAutoSlidingFn);
  document.addEventListener('keyup', e => {
    if(e.code === 'ArrowLeft') {
      showPrevSlide();
    }
    console.log(e.code);
  });
  renderSlides();
}
initSlider();

function renderSlides() {
  sliderItems.forEach((slide, i) => {
    if(activeIndex === i){
      slide.classList.add('animating');
      setTimeout(() => {
        slide.classList.remove('animating');
        slide.classList.add('active');
      }, 0);
    } else {
      slide.classList.remove('active');
    }
  });
}

function showNextSlide(){
  if(activeIndex === sliderItems.length - 1){
    activeIndex = 0;
  } else {
    activeIndex++;
  }
  renderSlides();
}

function showPrevSlide(){
  if(activeIndex === 0){
    activeIndex = sliderItems.length - 1;
  } else {
    activeIndex--;
  }
  renderSlides();
}

function startAutoSlidingFn() {
  timeoutId = setInterval(showNextSlide, 3000);
}

function stopAutoSlidingFn() {
  if(timeoutId){
    clearInterval(timeoutId);
    timeoutId = null;
  }
}
