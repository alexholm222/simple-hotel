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

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
