# Фронтед тестовое задание для ЛИИС

**Описание проекта**
 * [Ссылка на сайт проекта]( https://project-movies.ru/)
 * [GitHub проекта]( https://github.com/alexholm222/movies-explorer-frontend/)
 * [Макет проекта]( https://www.figma.com/file/PxI4ycD6GMGSpxOZ2NbFBO/React-Test%2FSimple-Hotel-Check-(Copy)?node-id=1-30&t=BrULN1j6c9fgTj7R-0)
 * [API используемый в проекте]( https://support.travelpayouts.com/hc/ru/articles/115000343268-API-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85-%D0%BE%D1%82%D0%B5%D0%BB%D0%B5%D0%B9)

Проект представляет собой web-приложение для пойска отелей.  
 Проект имеет две страницы:  
* Авторизация, /sign-in
* Главная страница приложения, / 
  
  На главной странице расположены 3 основных блока:   
* Search - форма для пойска отелей, имеет 3 инпута (город, дата, кол-во дней)  
* Hotel - в этом блоке отображается список найденых отелей  
* Favorites - блок избранного, что бы добавить отель в избранное необходимо нажать лайк, для удаления лайк снять.  

**Функции/features**
* Авторизация: поля ввода имеют валидация(с невалидными данными вход не возможен), роут / защищен, состояние авторизации записывается в глобальнй стейт и локальное хранилище
* Пойск отелей, поле город имеет всплывающие подсказки при вводе названия, для поля выбора даты был использован DatePicker от antd. При нажатии пойск данные из всех инпутов записываются в глобальный стейт для дальнейшего использования в воркере cardSaga, также вызывается action fetchCards, осуществляется запрос на сервер с параметрами в виде наших поисковых данных.
* Функция добавления отеля в избранное: при нажатии на кнопку лайк данные об отеле попадают в глобальный стейт массив favorites при снятии лайка данные отеля удаляются. Список избранных отелей перезаписывается в локальное хранилище при каждом изменении списка, при перезагрузки страницы список избранного не пропадает, при ралогировании список избранного пропадает
* Функция сортировки избранных отелей: каждая кнопка сортировки имеет 3 состояния (без сортировки, сортировка по возрастанию, сортировка по убыванию), остортированный список избранного остается так же отсортированым и при перезагрузки страницы, при добавлении и удалении  отеля в избранном, сортировка сбрасывается (список сортируется по времени добавления), состояние кнопок сбрасывается.  

**Используемые технологии**
* Адаптивная верстка
* HTML
* CSS
* Javascript
* React
* Redux
* Redux-saga
