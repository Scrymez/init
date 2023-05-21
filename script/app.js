
//navigation
const nav = document.querySelectorAll(".li");
const active = document.querySelector(".active")

nav.forEach((item,index)=>{
   
   item.addEventListener('click',()=>{
      nav.forEach(elem => {
         elem.classList.remove('active')
      })
      item.classList.add('active')
   })
})

//like
const like = document.querySelectorAll(".like-active");
const tap = document.querySelector(".active")

like.forEach((item,index)=>{
   
   item.addEventListener('click',()=>{
      item.classList.toggle('link__like_active')
   })
})


// <input type="text" id="searchInput">
// <button id="searchButton">Поиск</button>

const searchInput = document.querySelector('.input__search');
const searchButton = document.querySelector('.btn__search');

searchButton.addEventListener('click', () => {
   const searchText = searchInput.value;
   console.log(searchText); // Выводим значение в консоль
 });





