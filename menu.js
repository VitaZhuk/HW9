// // 1

// // Получаем данные
// const firstNumber = parseFloat(prompt("Введите первое число"));
// const secondNumber = parseFloat(prompt("Введите второе число"));
// // Выводим результат
// console.log ("Сумма", firstNumber + secondNumber);
// console.log ("Разность", firstNumber - secondNumber);
// console.log ("Произведение", firstNumber * secondNumber);
// console.log ("Частное", firstNumber / secondNumber);


// // 2

// // Функция,которая позволяет проверить является ли введенное пользователем число четным или нечетным
// function result (number){
//     if (number % 2 === 0){
//         console.log (number + ' четное');
//     } else {
//         console.log (number + ' нечетное');
//     }
// }
// result(11);


// // 3

// // Счетчик, который проходит по числам от 1 до 100 и заменяет их согласно условиям
// for (var i = 1; i<=100; i++){
//     if (i % 3===0 && i % 5===0) {
//         console.log ('FizzBuzz');
//     } else if (i % 5 ===0){
//         console.log ('Buzz')
//     } else if (i % 3===0){
//         console.log ('Fizz')
//     } else {
//         console.log(i);
//     }
// }


// // 4

// // Function Declaration
// function sum (num1, num2){
//     return num1+num2;
// }
// const a = sum (10,8);
// console.log (a);

// // Function Expression
// const sum = function (num1, num2){
//     return num1+num2;
// }
// const a = sum (10,2);
// console.log (a);

// // стрелочная фун-ия
// const sum = (num1, num2) => num1 + num2;
// const a = sum (5,2);
// console.log (a);

// // самовызывающаяся фун-ия
// (function sum(num1, num2){
//     console.log (num1+num2)
// })(5,3);


// // 5

// // Создадим объект
// let user = {
//     name:'Vita',
//     age:27,
//     address:{
//       city:'Brest',
//       country:'Belarus',
//     }
// };

// // Функция, которая изменяет возраст 
//   function changeAge(newAge=30){
//     user.age=newAge;
//     console.log(user);
//   }
//   changeAge(50);
 
// // Функция, которая добавляет новое поле "email" 
//   function addEmail(email){
//    user.email=email;
//   }
//   addEmail('vita@mail.com');
 
// // Функция, которая удаляет поле "country" из объекта address
//   function deleteCountry(){
//     delete user.address.country;
//   }
//   deleteCountry();

// // Функция, которая выводит всю информацию о пользователе 
//   function displayUserInfo(){
//   console.log(`Имя: ${user.name}, Возраст: ${user.age}, Город: ${user.address.city}`);
//   }
//   displayUserInfo();


// // 6

// // Получаем элементы
// let inputAdd = document.getElementById('inputText');
// let output = document.getElementById('output');

// // Назначаем на элемент обработчик событий и выводим содержимое 
// inputAdd.addEventListener('input', function() {
//     output.textContent = inputAdd.value;
// });


// // 7

// // Назначаем событие, возникающее при изменении видимости окна браузера, в зависимости от состояния вкладки меняем заголовок 
// document.addEventListener("visibilitychange", function() {
//     if (document.visibilityState === 'visible') {
//         document.title = "Hello";
//     } else {
//         document.title = "Come back!";
//     }
// });


// 8

// // Функция, которая приветствует пользователя по имени, но с ошибкой
// function greetWithError(name) {
// // ошибка в передаче переменной
//     return "Hello, " + name + "!";
// }
// // ошибка, Антон необходимо передать как строку
// console.log(greetWithError("Anton"));  

// // Функция, которая возвращает наибольшее из двух чисел, но с ошибкой
// function getMaxNumberWithError(a, b) {
//     if (a < b) {
//         return b;
//     } else {
//         return a;
//     }
// }
// console.log(getMaxNumberWithError(50, 30));