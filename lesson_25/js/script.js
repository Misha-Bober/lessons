// Задача №1
// Отримати в константу елемент <body>

// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)

// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.

// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active, 
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний


// відповіді :

// Задача №1
// Отримати в константу елемент <body>

// const bodyElement = document.body;
// console.log(bodyElement);

// за допомогою Document Object Model (DOM)
// Об'ектна модель документу

// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)

// function addListToBody(itemCount = 10) {
//     // Створення нового елемента <ul>
//     const ulElement = document.createElement("ul");

//     // Додавання елементів <li> до списку
//     for (let i = 1; i <= itemCount; i++) {
//         const liElement = document.createElement("li");
//         liElement.textContent = "Пункт № " + i;
//         ulElement.appendChild(liElement);
//     }

//     // Додавання списку <ul> до тіла документа
//     document.body.appendChild(ulElement);
// }

// Виклик функції зі значенням за замовченням (10 елементів)
// addListToBody();

// Виклик функції з іншим значенням (наприклад, 5 елементів)
// addListToBody(5);

// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.


// // Додаємо клас 'loaded' до елементу <body>
// document.body.classList.add('loaded');

//  Перевіряємо, чи є клас 'loaded' у елементі <body>
// if (document.body.classList.contains('loaded')) {
//     Якщо клас 'loaded' є, додаємо стиль кольору тексту зелений
//     document.body.style.color = 'green';
// }

// Цей код спочатку додає клас 'loaded' до елементу <body>. 
// Потім він перевіряє, чи має елемент <body> клас 'loaded'. 
// Якщо так, то додає стиль кольору тексту зелений.

// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active, 
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".


//     // Отримання всіх елементів з класом 'item'
//     const items = document.querySelectorAll('.item');

//     // Ітерація по кожному елементу та встановлення необхідних класів та контенту
//     items.forEach((item, index) => {
//         // Додавання класу 'active'
//         item.classList.add('active');

//         // Оновлення контенту
//         item.textContent = "Елемент №" + (index + 1);
//     });

//     Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки


//     // Отримання елемента кнопки
//     const button = document.querySelector('.button');

//     // Функція для прокрутки сторінки до кнопки
//     function scrollToButton() {
//         button.scrollIntoView({ behavior: 'smooth' });
//     }

//     // Додаємо обробник події для кнопки
//     button.addEventListener('click', scrollToButton);

//     В цьому прикладі ми використовуємо button.scrollIntoView({ behavior: 'smooth' }) 
//     для плавної прокрутки сторінки до елемента кнопки. Також ми додаємо обробник 
//     події для кнопки, щоб викликати функцію scrollToButton при кліку на кнопку.

//     Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний


//     // Отримання елемента посилання
//     const linkElement = document.querySelector('.link');

//     // Додавання дата-атрибуту зі значенням 100
//     linkElement.setAttribute('data-value', '100');

//     // Отримання значення дата-атрибуту
//     const dataValue = linkElement.getAttribute('data-value');

//     // Перевірка, чи значення менше 200
//     if (parseInt(dataValue) < 200) {
//         // Зміна кольору тексту на червоний
//         linkElement.style.color = 'red';
//     }

//     У цьому прикладі, за допомогою setAttribute, ми додаємо дата-атрибут 
//     зі значенням 100 до посилання. Потім, використовуючи getAttribute, 
//     ми отримуємо значення дата-атрибуту та перевіряємо, чи менше воно 200. 
//     Якщо умова виконується, ми змінюємо колір тексту на червоний.

