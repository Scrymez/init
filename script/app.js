
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
})//navigation end

//like
const like = document.querySelectorAll(".like-active");
const tap = document.querySelector(".active")

like.forEach((item,index)=>{
   
   item.addEventListener('click',()=>{
      item.classList.toggle('link__like_active')
   })
})//like end



   // search
 const searchInputs = document.querySelectorAll('.input__search');
 const searchButtons = document.querySelectorAll('.btn__search');
 
 searchButtons.forEach(searchButton => {
   btn__search.addEventListener('click', (e) => {
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

//  search end

// счетчик 

class Cart {
   constructor() {
     this.count = 0; // начальное значение счетчика
     this.cartCountElement = document.querySelectorALL('.cart-count'); // получаем элемент, в котором будет отображаться счетчик
   }
 
   addToCart() {
     this.count++; // увеличиваем значение счетчика на 1
     this.updateCartCount(); // обновляем значение счетчика на странице
   }
 
   removeFromCart() {
     this.count--; // уменьшаем значение счетчика на 1
     this.updateCartCount(); // обновляем значение счетчика на странице
   }
 
   updateCartCount() {
     this.cartCountElement.innerText = this.count; // обновляем значение на странице
   }
 }
 
 const cart = new Cart();
 
 // получаем кнопку на странице
 const button = document.querySelector('.add-to-cart');
 
 // добавляем обработчик события "click" на кнопку
 button.addEventListener('click', function() {
   if (cart.count === 0) {
     // если корзина пуста, то добавляем товар и увеличиваем счетчик на 1
     cart.addToCart();
   } else {
     // если в корзине уже есть товар, то удаляем его и уменьшаем счетчик на 1
     cart.removeFromCart();
   }
 });
 
 // получаем ссылку на корзину на странице
 const cartLink = document.querySelector('.link_backet');
 
 // добавляем обработчик события "click" на ссылку корзины
 cartLink.addEventListener('click', function() {
   // здесь можно добавить код для открытия страницы с содержимым корзины товаров
 });
