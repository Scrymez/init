export const search = 
                                                   // Отправка запроса на сервер
      fetch('http://example.com/api/data')
      .then(response => {
         if (response.ok) {
                                                    // Получение данных из ответа
            return response.json();
         } else {
            throw new Error('Ошибка запроса');
         }
      })
      .then(data => {
         console.log(data);
      })
      .catch(error => {
         console.log(error);
      });