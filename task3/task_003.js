/**
 * Задание 3
    Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
    1. Рассчитать сумму элементов этого массива
    2. Найти минимальное число
    3. Найти есть ли в этом массиве число 3
 */

const arr = createArr();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createArr(){
    const arr = [];
    for (let i = 0; i < 5; i++){
        arr.push(getRandomInt(10))
    }
    return arr;
}


const sumArr = arr.reduce((sum, i) => sum + i, 0);

function minElementArr(arr){
    let min = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i]
        }
    }
    return min;
}

console.log(`Массив ${arr}`);
console.log(`Сумма элементов массива ${sumArr}`);
console.log(`Минимальный элемент массива ${minElementArr(arr)}`);

if (arr.indexOf(3, 0) === -1){
    console.log(`В массиве ${arr} элемента 3 нет!`);
}else{
    console.log(`В массиве ${arr} элемента 3 находится на позиции ${arr.indexOf(3, 0)}`);
}