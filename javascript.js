//сложение чисел 
let a = 2;
let b = 3;
c = a + b;
function addFunction() {
  alert(c);
}
console.log(a + b); //выводит в консоль
//document.write(c); выводит результат на новую страницу

//вычитание чисел 
let d = 6;
let p = 12;
m = d - p;
function minusFunction() {
  alert(m);
}
console.log(d - p); //выводит в консоль
//document.write(m);  выводит на страницу

//умножение чисел 
let l = 7;
let o = 7;
t = l * o;
function multiplyFunction() {
  alert(t);
}
console.log(l * o); //выводит в консоль
//document.write(z);  выводит на страницу

//деление чисел 
let r = 34;
let u = 2;
i = r / u;
function divideFunction() {
  alert(i);
}
console.log(r / u); //выводит в консоль
//document.write(z);  выводит на страницу

//Комодзи
let comodzi = function (howManyTimes) {
for (var i = 0; i < howManyTimes; i++) {
console.log(i + " =^.^=");
}
};
comodzi(5); //выводит в консоль
function comodziFunction() {
  alert(comodzi);
}

// Булевые значения true; false;
let javascriptIsCool = true;             // записали значение в переменную
function javascriptFunction() {          //  вызвали при нажатии на onclick функцию, которая выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмет ОК.  
  alert(javascriptIsCool);
}
console.log(); //выводит в консоль


// Булевые значения объединяем как математические выражения:  булевые  true; false;
// Три основных булевых оператора — это &&, || и !.

// && - ИИ - нужно узнать равны они оба true. "логограмма заменяющая союз -И-" 
// условие - надо пойти в школу (принял душ, взял рюбзак) 
let hadShower = true;
let hasBackpack = true;
function schoolFunction() {          //  вызвали при нажатии на onclick функцию, которая выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмет ОК.  
  alert(hadShower && hasBackpack);   //   спрашиваем JavaScript: и «равны ли оба этих значения true»?
}
console.log(); //выводит в консоль

//   означает «или» «или» ||  pipe - труба
// условие - надо пойти в школу, взять фрукты (или яблоко, или апельсин, или и то и другое.) 
let hasApple = true;
let hasOrange = false;
function fructFunction() {          //  вызвали при нажатии на onclick функцию, которая выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмет ОК.  
  alert(hasApple || hasOrange);   //   спрашиваем JavaScript: "или" "или" проверяем есть ли у вас хотя бы один из этих плодов?
}
console.log(); //выводит в консоль

// означает (НЕ) ! - чтобы превратить false в true или, наоборот, true в false. Для работы со значениями-противоположностями.
let isWeekend = true;
let needToShowerToday = !isWeekend; // false //   Оператор ! преобразует значение в противоположное — то есть, если isWeekend равно true, !isWeekend даст нам не true (то есть false)
function dontFunction() {          //   вызвали при нажатии на onclick функцию, которая выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмет ОК.  
  alert(!needToShowerToday);       //   спрашиваем JavaScript: запрашивая значение needToShowerToday, мы получаем false (сегодня выходной, так что мыться совсем не обязательно)
                                  //    Поскольку needToShowerToday равно false, !needToShowerToday даст true:
}
console.log(); //выводит в консоль

//       Совмещение логических операторов
//    1. Нужно идти в школу
//    2. если сегодня не выходной
//    3. и вы приняли душ,
//    4. и у вас с собой есть яблоко или апельсин.

let boyIsWeekend = false;          // не выходной 
let boyHadShower = true;           // приняли душ
let boyHasApple = false;           // не взяли яблоко - нет яблока
let boyHasOrange = true;           // есть апельсин
let boyShouldGoToSchool = !boyIsWeekend && boyHadShower && (boyHasApple || boyHasOrange);    // в скобках проверка в первую очередь
function combiningFunction() {     //  вызвали при нажатии на onclick функцию, которая выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмет ОК.  
  alert(boyShouldGoToSchool);      //   спрашиваем JavaScript: "или" || "или" проверяем есть ли у вас хотя бы один из этих плодов?
}
console.log(); //выводит в консоль
// в логических выражениях он выполняет && прежде ||

//  Сравнение чисел с помощью булевых значений -  для проверки чисел, если эта проверка подразумевает простой ответ: да или нет
//  ограничение: рост не менее 150 см. Нужно понять, больше названное число или меньше.
// оператор «больше» (>)
let height = 155;
let heightRestriction = 150;
function heightFunction() {          //   вызвали при нажатии на onclick функцию, которая выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмет ОК.  
  alert(height > heightRestriction);     //   спрашиваем JavaScript: использовать оператор > для сравнения двух переменных
                                      //    Поскольку height > heightRestriction, даст true:
}

let height150 = 150;
let heightRestriction150 = 150;
function height150Function() {          //   вызвали при нажатии на onclick функцию, которая выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмет ОК.  
  alert(height150 > heightRestriction150);     //   спрашиваем JavaScript: использовать оператор > для сравнения двух переменных
                                      //    Поскольку height150 > heightRestriction150, даст false:
}

//  оператор >= что означает «больше или равно»
let height151 = 150;
let heightRestriction151 = 150;
function height151Function() {          //   вызвали при нажатии на onclick функцию, которая выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмет ОК.  
  alert(height151 >= heightRestriction151);     //   спрашиваем JavaScript: использовать оператор >= для сравнения двух переменных
                                      //    Поскольку height151 >= heightRestriction151, даст true:
}

//  оператором «меньше» (<)
let height120 = 150;
let heightRestriction120 = 120;
function height120Function() {          //   вызвали при нажатии на onclick функцию, которая выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмет ОК.  
  alert(height120 < heightRestriction120);     //   спрашиваем JavaScript: использовать оператор < для сравнения двух переменных
                                      //    Поскольку height120 < heightRestriction120, даст false:
}

//  тройной знак  равенства (===) — это оператор «равно»  ,  проверить два числа на точное равенство
let mySecretNumber = 5;  // загадал число
let chicoGuess = 3;
function mySecretFunction() {          //   вызвали при нажатии на onclick функцию, которая выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмет ОК.  
  alert(mySecretNumber === chicoGuess);     //   спрашиваем JavaScript: оператор === можно проверить, равен ли какой-нибудь ответ вашему числу
                                      //    Поскольку mySecretNumber === chicoGuess, числа неравны, даст false:
}

let harpoGuess = 7;
function mySecretSecondFrendTryFunction() {          //   вызвали при нажатии на onclick функцию, которая выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмет ОК.  
  alert(mySecretNumber === harpoGuess);     //   спрашиваем JavaScript: оператор === можно проверить, равен ли какой-нибудь ответ вашему числу
                                      //    Поскольку mySecretNumber === harpoGuess, числа неравны, даст false:
}

let grouchoGuess = 5;
function mySecretThirdFrendTryFunction() {          //   вызвали при нажатии на onclick функцию, которая выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмет ОК.  
  alert(mySecretNumber === grouchoGuess);     //   спрашиваем JavaScript: оператор === можно проверить, равен ли какой-нибудь ответ вашему числу
                                      //    Поскольку mySecretNumber === grouchoGuess, числа неравны, даст true:
}

// Оператор === можно сравнивать значения разных типов, две строки, булевые значения.

// Оператор == двойное сравнение "практически равно"
let stringNumber = "5";
let actualNumber = 5;
function equalFunction() {          //   вызвали при нажатии на onclick функцию, которая выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмет ОК.  
  alert(stringNumber === actualNumber);     //   спрашиваем JavaScript: оператор === можно проверить, равен ли какой-нибудь ответ вашему числу
                                      //    Поскольку stringNumber === actualNumber, ответит, что значения не равны, даст false:
}

let stringNumber5 = "5";
let actualNumber5 = 5;
function equal5Function() {          //   вызвали при нажатии на onclick функцию, которая выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмет ОК.  
  alert(stringNumber5 == actualNumber5);     //   спрашиваем JavaScript: оператор == можно проверить, практически равно
                                      //    Поскольку stringNumber == actualNumber, ответит, что значения равны, даст true:
}

//  Например, как считаете, 0 равен false? 
//  А строка "false" значению false? 
//  При сравнении через двойное равно 0 оказывается равным false, а строка "false" не равна false:

let stringNumber0 = 0;
let actualNumber0 = false;
function equal0Function() {          //   вызвали при нажатии на onclick функцию, которая выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмет ОК.  
  alert(stringNumber0 == actualNumber0); //   спрашиваем JavaScript: булево значение он преобразует в числовое — при этом false становится нулем
                                      //    Поскольку stringNumber0 == actualNumber0, ответит, что значения равны, даст true = 1:
}

let stringNumberF = "false";
let actualNumberF = false;
function equalFFunction() {          //   вызвали при нажатии на onclick функцию, которая выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмет ОК.  
  alert(stringNumberF === actualNumberF); //   спрашиваем JavaScript: булево значение он преобразует в числовое — при этом false становится нулем
                                      //    Поскольку stringNumberF == // ===  actualNumberF, ответит, что значения равны, даст false:
}

// Кино для 12 лет и стапрше, если взрослый сопровождает, пусть проходит.
let ageBoy = 13;
let ageRestriction = 12;
let accompanied = true;


function ageRestrictionFunction() {          //   вызвали при нажатии на onclick функцию, которая выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмет ОК.  
  alert(ageBoy >= ageRestriction === accompanied);     //   спрашиваем JavaScript: использовать оператор >= для сравнения двух переменных  === и равенство третьей переменной
                                        //    Поскольку ageBoy >= ageRestriction, даст true:
}

// undefined и null, оба они означают «пусто»
//  undefined - JavaScript не может найти другого значения.

//  var myVariable;
//  myVariable;
//  undefined    -  если создадите переменную и не присвоите ей значения  

// var myNullVariable = null;   - обозначить, что в переменной «пусто», используйте для этого null
// myNullVariable;
// null

// Например, есть переменная, обозначающая ваш любимый овощ. 
// Если вы терпеть не можете все без исключения овощи, имеет смысл дать переменной «любимый овощ» значение null.
// Этим вы явно покажете любому, кто увидит ваш код, что у вас нетлюбимого овоща.
// Однако если в переменной будет undefined, кто-нибудь может подумать, что вы просто еще не приписали ей значения.


// массивов позволяет создавать и группировать данные. Массив — всего лишь список, где хранятся другие значения.
// вы можете воспользоваться единственным массивом - myTopThreeDinosaurs
let myTopThreeDinosaurs = ["Тираннозавр", "Велоцираптор", "Стегозавр"];
// пишем программу  для учета всех видов динозавров, которые вам известны
let dinosaur1 = "Тираннозавр";
let dinosaur2 = "Велоцираптор";
let dinosaur3 = "Стегозавр";
let dinosaur4 = "Трицератопс";
let dinosaur5 = "Брахиозавр";
let dinosaur6 = "Птеранодон";
let dinosaur7 = "Апатозавр";
let dinosaur8 = "Диплодок";
let dinosaur9 = "Компсогнат";

// Обойдемся лишь одной переменной.
// []; - пустой массив
// Запишем строковые элементы в массив
let dinosaur = ["Тираннозавр", "Велоцираптор", "Стегозавр", "Трицератопс", "Брахиозавр", "Птеранодон", "Апатозавр", "Диплодок", "Компсогнат"];
let dinosaurs = [
  "Тираннозавр",
  "Велоцираптор",
  "Стегозавр",
  "Трицератопс",
  "Брахиозавр",
  "Птеранодон",
  "Апатозавр",
  "Диплодок",
  "Компсогнат"
  ];

 function dinosaursFunction() {          //   вызвали при нажатии на onclick функцию, которая выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмет ОК.  
  alert(dinosaurs[7]);     //   спрашиваем JavaScript: использовать оператор >= для сравнения двух переменных  === и равенство третьей переменной
                                        //    Поскольку ageBoy >= ageRestriction, даст true:
}











let name = 'Ludmila';
let age = 22;
let month = 12;
age = 36;
console.log(age * month);


// For Children
let highFives = 0;
console.log(++highFives);  
console.log(++highFives);
// Умножение
let x = 10;
x = x + 5;
console.log(x);
// Инкремент_Декремент
let score = 10;
score += 7;
console.log(score);
score -= 3;
console.log(score);
// Умножение деление
let ballons = 100;
ballons *= 2;
console.log(ballons);
ballons /= 4;
console.log(ballons);

// Условные конструкции if, else
let boyTeenager ="Nikolay";
console.log("Привет, " + boyTeenager);
if (boyTeenager.length > 6) {
 console.log("Ну и длиннющее же у вас имя!");}
 else {
 	console.log("Имя у Вас не из длинных.");
}
boyTeenager = "Valentin";

/*
Тренировка
Объединение и удаление (попробовать) строк - оператор + оператор -
Узнаем длину строки - .length
Получение отдельного символа строки - [0];
Получение среза строки -   .slice(1,5)
Перевод в заглавный или строчный регист - .toLowerCase() .toUpperCase() для переменных и значений 
*/

let sillyString = "пРиВетт реБята!";
let lowerString = sillyString.toLowerCase();
let firstCharacter = lowerString[0];
let firstCharacterUpper = firstCharacter.toUpperCase();
let restOfString = lowerString.slice(1);
console.log(firstCharacterUpper + restOfString.slice(1,5) + restOfString.slice (6,14));


let sillyString1 = "пРиВет EvEryBody!";
let lowerString1 = sillyString1.toLowerCase();
let firstCharacter1 = lowerString1[0];
let firstCharacterUpper1 = firstCharacter1.toUpperCase();
let restOfString1 = lowerString1.slice(1);
console.log(firstCharacterUpper1 + restOfString1.slice(1,7) + restOfString1.slice (8,15));

/* 
var sillyString = "эЙ, кАК деЛа?";
sillyString[0].toUpperCase() + sillyString.slice(1). 
toLowerCase();
"Эй, как дела?"
*/
