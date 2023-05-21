
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

 const searchInputs = document.querySelectorAll('.input__search');
 const searchButtons = document.querySelectorAll('.btn__search');
 
 searchButtons.forEach(searchButton => {
   searchButton.addEventListener('click', (e) => {
     e.preventDefault();
     const searchText = searchInputs[0].value;
     
     // Формируем URL-адрес для запроса на основе значения поисковой строки
     const url = `https://api.example.com/search?q=${encodeURIComponent(searchText)}`;
     
     // Формируем объект параметров для запроса
     const options = {
       method: 'GET', // Метод запроса
       headers: {
         'Content-Type': 'application/json' // Заголовок запроса
       }
     };
     
     // Отправляем запрос с помощью метода fetch() и обрабатываем ответ
     fetch(url, options)
       .then(response => response.json())
       .then(data => {
         console.log(data); // Выводим полученные данные в консоль
         // Добавляем код для обработки полученных данных
       })
       .catch(error => console.error(error)); // Обрабатываем ошибки
   });
 });



