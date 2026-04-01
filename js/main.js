// console.log("\n=== Деструктуризация массивов ===");

// const colors = ["red", "green", "blue"];

// const color1 = colors[0];
// const color2 = colors[1];
// console.log(color1, color2);

// const [firstColor, secondColor, thirdColor] = colors;
// console.log(firstColor, secondColor, thirdColor);

// const [primary, , tertiary] = colors;
// console.log(primary, tertiary);

// const [c1, c2, c3, c4 = "yellow"] = colors;
// console.log(c4);

// console.log("Деструктуризация объектов");

// const user = {
//     name: "Алиса",
//     age: 25,
//     city: "Москва",
// };

// const userName = user.name;
// const userAge = user.age;
// console.log(userName, userAge);

// const { name, age, city } = user;
// console.log(name, age, city);

// const { name: fullName, age: years } = user;
// console.log(fullName, years);

// const { name: personName, country = "Россия" } = user;
// console.log(personName, country);

// console.log("Деструктуризация в параметрах");

// const user = {
//   name: "Алиса",
//   age: 25,
//   city: "Москва",
// };

// function printUserOld(user) {
//   console.log(`Имя: ${user.name}`);
//   console.log(`Возраст: ${user.age}`);
//   console.log(`Город: ${user.city}`);
// }

// function printUser({ name, age, city }) {
//   console.log(`Имя: ${name}`);
//   console.log(`Возраст: ${age}`);
//   console.log(`Город: ${city}`);
// }

// printUserOld(user);
// console.log();
// printUser(user);


// const product = {
//   name: "Ноутбук",
//   price: 75000,
//   category: "Электроника",
//   inStock: true,
// };

// const { name, price, category, inStock } = product;

// function printProduct({ name, price, category, inStock }) {
//   console.log(`Название: ${name}`);
//   console.log(`Цена: ${price}`);
//   console.log(`Категория: ${category}`);
//   console.log(`В наличии: ${inStock}`);
// }

// printProduct(product);

// console.log("Spread для массивов");

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const combined = [...arr1, ...arr2];
// console.log("Объединённый массив:", combined);

// const copy = [...arr1];
// console.log("Копия массива:", copy);

// const extended = [0, ...arr1, 7, 8];
// console.log("Расширенный массив:", extended);

// console.log("Spread для объектов");

// const person = {
//     name: "Иван",
//     age: 30,
// };

// const address = {
//     city: "Санкт-Петербург",
//     street: "Невский проспект",
// };

// const fullInfo = { ...person, ...address };
// console.log("Полная информация:", fullInfo);

// const personCopy = { ...person };
// console.log("Копия объекта:", personCopy);

// const updated = { ...person, age: 31, occupation: "Developer" };
// console.log("Обновлённый объект:", updated);

// console.log("Rest оператор");

// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }

// console.log("Сумма 1,2,3:", sum(1, 2, 3));
// console.log("Сумма 1,2,3,4,5:", sum(1, 2, 3, 4, 5));

// const numbers = [10, 20, 30, 40, 50];
// const [first, second, ...rest] = numbers;
// console.log("Первое число:", first);
// console.log("Второе число:", second);
// console.log("Остальные числа:", rest);

// const arr1 = [5, 10, 15];
// const arr2 = [20, 25, 30];

// const combined = [...arr1, ...arr2];

// function findMax(...numbers) {
//     return Math.max(...numbers);
// }

// const obj1 = { name: "Товар", price: 100 };
// const obj2 = { category: "Электроника", inStock: true };

// const mergedObject = { ...obj1, ...obj2 };

// console.log("Объединённый массив:", combined);
// console.log("Максимальное число:", findMax(1, 5, 3, 9, 2));
// console.log("Объединённый объект:", mergedObject);

// import { greet, add, PI } from "./utils.js";

// console.log("Модули");
// console.log(greet("Алексей"));
// console.log("5 + 3 =", add(5, 3));
// console.log("Значение PI:", PI); 

// import { multiply as умножить } from "./utils.js";
// console.log("4 * 7 =", умножить(4, 7));

// import * as Utils from "./utils.js";
// console.log(Utils.greet("Мария"));
// console.log("Умножение:", Utils.multiply(3, 9));

// import { square, cube, E } from "./math.js";

// console.log("Квадрат 5:", square(5));
// console.log("Куб 3:", cube(3));
// console.log("Константа E:", E);

// console.log("Промисы");

// const simplePromise = new Promise((resolve, reject) => {
//     const success = true;
//     if (success) {
//         resolve("Операция выполнена успешно!");
//     } else {
//         reject("Произошла ошибка!");
//     }
// });

// simplePromise
//     .then((result) => console.log("Результат:", result))
//     .catch((error) => console.log("Ошибка:", error));

// function delay(ms) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Прошло ${ms} миллисекунд`);
//         }, ms);
//     });
// }

// delay(1000)
//     .then((message) => console.log(message));

// function fetchUserData(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (userId > 0) {
//                 resolve({
//                     id: userId,
//                     name: "Иван Иванов",
//                     email: "ivan@example.com",
//                 });
//             } else {
//                 reject("Неверный ID пользователя");
//             }
//         }, 1500);
//     });
// }

// fetchUserData(1)
//     .then((user) => console.log("Пользователь:", user))
//     .catch((error) => console.log("Ошибка:", error));

// function step1() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Шаг 1 завершён"), 500);
//     });
// }

// function step2(previousResult) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(`${previousResult} -> Шаг 2 завершён`), 500);
//     });
// }

// function step3(previousResult) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(`${previousResult} -> Шаг 3 завершён`), 500);
//     });
// }

// step1()
//     .then((result1) => step2(result1))
//     .then((result2) => step3(result2))
//     .then((finalResult) => console.log("Финальный результат:", finalResult))
//     .catch((error) => console.log("Ошибка в цепочке:", error));

// function checkInventory(inStock) {
//     return new Promise((resolve, reject) => {
//         if (inStock) {
//             resolve("Товар в наличии");
//         } else {
//             reject("Товара нет в наличии");
//         }
//     });
// }

// checkInventory(true)
//     .then((message) => console.log(message))
//     .catch((error) => console.log(error));

// checkInventory(false)
//     .then((message) => console.log(message))
//     .catch((error) => console.log(error));

// console.log("Async/Await");

// async function greet() {
//     return "Привет!";
// }

// greet().then((message) => console.log(message));

// function getWeather() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ temp: 22, condition: "Солнечно" });
//         }, 1000);
//     });
// }

// async function showWeather() {
//     console.log("Загрузка погоды...");
//     const weather = await getWeather();
//     console.log(`Температура: ${weather.temp}°C, ${weather.condition}`);
// }

// showWeather();

// async function fetchData(shouldFail) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (shouldFail) {
//                 reject("Ошибка при загрузке данных");
//             } else {
//                 resolve({ data: "Важные данные" });
//             }
//         }, 800);
//     });
// }

// async function getData() {
//     try {
//         const result = await fetchData(false);
//         console.log("Успешно:", result.data);

//         const failedResult = await fetchData(true);
//         console.log("Это не выполнится");
//     } catch (error) {
//         console.log("Поймана ошибка:", error);
//     }
// }

// getData();

// async function cookDinner() {
//     console.log("Начинаем готовить...");

//     const pasta = await delay(1000).then(() => "Паста готова");
//     console.log(pasta);

//     const sauce = await delay(500).then(() => "Соус готов");
//     console.log(sauce);

//     const salad = await delay(700).then(() => "Салат готов");
//     console.log(salad);

//     return "Ужин готов!";
// }

// cookDinner().then((result) => console.log(result));

// async function cookDinnerFast() {
//     console.log("Готовим всё одновременно...");

//     const [pasta, sauce, salad] = await Promise.all([
//         delay(1000).then(() => "Паста готова"),
//         delay(500).then(() => "Соус готов"),
//         delay(700).then(() => "Салат готов")
//     ]);

//     console.log(pasta, sauce, salad);
//     return "Ужин готов быстрее!";
// }

// cookDinnerFast().then((result) => console.log(result));


function checkStock(product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const inStock = product === "Ноутбук";
            if (inStock) {
                resolve({ product, available: true });
            } else {
                reject("Товар отсутствует на складе");
            }
        }, 800);
    });
}

function calculatePrice(product) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const prices = { "Ноутбук": 75000, "Телефон": 30000 };
            resolve({ product, price: prices[product] || 0 });
        }, 600);
    });
}

function confirmOrder(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ ...order, confirmed: true, orderId: Math.floor(Math.random() * 10000) });
        }, 500);
    });
}

async function processOrder(product) {
    try {
        console.log(`Начинаем обработку заказа для: ${product}`);
        
        const stock = await checkStock(product);
        console.log("Проверка наличия:", stock);
        
        const priceInfo = await calculatePrice(product);
        console.log("Расчёт стоимости:", priceInfo.price, "руб.");
        
        const order = await confirmOrder(priceInfo);
        console.log("Подтверждение заказа:", order);
        
        console.log(`Заказ ${order.orderId} успешно оформлен!`);
        return order;
    } catch (error) {
        console.log("Ошибка при обработке заказа:", error);
        throw error;
    }
}

processOrder("Ноутбук").then((result) => {
    console.log("Результат:", result);
}).catch((error) => {
    console.log("Заказ не оформлен:", error);
});

