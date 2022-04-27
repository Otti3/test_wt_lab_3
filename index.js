const WEEKDAYS = {
    0: "Воскресенье",
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота"
};

const MIN_NATURAL_INT = 1;


function task1(){
    let inputs = [];
    let inputsCount = 2;
    let is_number;
    while(true){
        is_number = true;
        inputs[0] = prompt('Input 1-st number');
        inputs[1] = prompt('Input 2-nd number');

        for (let i = 0; i < inputsCount; i++){
            if (inputs[i].toLowerCase() === 'q'){
                alert(`Position ${i + 1} input perform end condition `);
                return;
            }

            if (!isNumber(inputs[i])){
                alert(`Position ${i + 1} input not a number `);
                is_number = false;
            }

            inputs[i] = +inputs[i];
        }
        if (!is_number) continue;


        if (inputs[0] > inputs[1]) alert('1-st > 2-nd');
        else if (inputs[0] < inputs[1]) alert('1-st < 2-nd');
        else alert('1-st = 2-nd');

    }

}

function task2(){
    const outputId = "entranceNum";
    const printMsg = outputInTag(outputId);
    const printNan = outputNanInTag(outputId);

    const houseProperties = {
        floorAmount: document.getElementById("floorAmount").value,
        entranceAmount: document.getElementById("entranceAmount").value,
        flatsPerFloor: document.getElementById("flatsPerFloor").value
    }

    for (let key in houseProperties){
        if (!isNumber(houseProperties[key])){
            printNan(key);
            return;
        }
        houseProperties[key] = +houseProperties[key];
    }

    const maxHouseProperties = {
        floorAmount: 20,
        entranceAmount: 15,
        flatsPerFloor: 5
    }

    for (const key in houseProperties){
        if (houseProperties[key] > maxHouseProperties[key] || houseProperties[key] < MIN_NATURAL_INT){
            printMsg(`${key} should be >= ${MIN_NATURAL_INT} and <= ${maxHouseProperties[key]}`);
            return;
        }
    }

    let inputFlat = document.getElementById("flatNum").value;
    if(!isNumber(inputFlat)){
        printNan("Flat number");
        return;
    }
    inputFlat = +inputFlat;

    const maxFlat = houseProperties.floorAmount * houseProperties.flatsPerFloor * houseProperties.entranceAmount;
    if(inputFlat > maxFlat || inputFlat < MIN_NATURAL_INT){
        printMsg(`Max flat num = ${maxFlat}, min = ${MIN_NATURAL_INT}`)
        return;
    }

    const entrance = Math.trunc((inputFlat - 1) /
        (houseProperties.floorAmount * houseProperties.flatsPerFloor))
        + 1;

    printMsg(`Flat ${inputFlat} is located in the entrance number ${entrance}`)
}

function task3(){
    const outputTagId = "weekday";
    const printMsg = outputInTag(outputTagId);
    const printNan = outputNanInTag(outputTagId);
    const year = 2022;
    let month = document.getElementById("month").value;
    let day = document.getElementById("day").value;

    if (!isNumber(month) || !isNumber(day)){
        printNan("Month or day");
        return;
    }

    month = +month;
    day = +day;

    if (month > 12 || month < MIN_NATURAL_INT){
        printMsg("Incorrect month");
        return;
    }

    if (day > 31 || day < MIN_NATURAL_INT){
        printMsg("Incorrect day");
        return;
    }

    const weekday = weekdayInRussianTranslate(year, month - 1, day)
    printMsg(`${weekday}`);

}

function task4(){
    const outputTagId = "task4__output";
    const printMsg = outputInTag(outputTagId);
    const printNan = outputNanInTag(outputTagId);
    let firstNum = document.getElementById("task4__input1").value;
    let secondNum = document.getElementById("task4__input2").value;

    if (!isNumber(firstNum)) {
        printNan(firstNum);
        return;
    }
    firstNum = +firstNum;

    if(!Number.isInteger(firstNum)){
        printMsg(`${firstNum} is not an integer`)
        return;
    }

    if (!isNumber(secondNum)){
        printNan(secondNum);
        return;
    }
    secondNum = +secondNum;

    if(!Number.isInteger(secondNum)){
        printMsg(`${secondNum} is not an integer`)
        return;
    }

    if (firstNum % 2 === 0 && secondNum % 2 === 0 ){
        printMsg(`Result: a * b = ${firstNum * secondNum}`);
    }

    else if (firstNum % 2 === 1 && secondNum % 2 === 1){
        printMsg(`Result: a + b = ${firstNum + secondNum}`);
    }

    else {
        printMsg(`Result: b = ${secondNum}`);
    }

}

function task5(){
    function sum(a) {
        function f(b){
            return sum(a + b);
        }

        f.toString = function(){
            return a;
        }
        return f;
    }

    alert(`sum(3)(1)(1)(12521) = ${sum(3)(1)(1)(12521)}`);
    alert(`sum(3) = ${sum(3)}`);
    alert(`sum(11)(-8)(0) = ${sum(11)(-8)(0)}`);
}

function task6(){
    const outputTagId = "task6__output";
    const printMsg = outputInTag(outputTagId);
    const printNan = outputNanInTag(outputTagId);

    let start = document.getElementById("task6__input1").value;
    let end = document.getElementById("task6__input2").value;
    let step = document.getElementById("task6__input3").value;

    let requiredParameters = [start, end];
    let rangeResult;
    for (let index in requiredParameters){
        if (!isNumber(requiredParameters[index])){
            printNan(requiredParameters[index]);
            return;
        }
        requiredParameters[index] = +requiredParameters[index];

        if(!Number.isInteger(requiredParameters[index])){
            printMsg(`${requiredParameters[index]} is not an integer`)
            return;
        }

    }

    if (step === ""){
        rangeResult = range(...requiredParameters);
    }
    else {
        step = +step;
        rangeResult = range(...requiredParameters, step);
    }
    printMsg(`range(${start})(${end})(${step}) = ${rangeResult}`);
}

function task7() {
    const outputTagId = "task7__output";
    const printMsg = outputInTag(outputTagId);
    const printNan = outputNanInTag(outputTagId);

    let rows = document.getElementById("task7__input1").value;
    let columns = document.getElementById("task7__input2").value;

    let matrixDimension = {
        rows: rows,
        columns: columns
    };

    for (let key in matrixDimension) {
        if (!isNumber(matrixDimension[key])) {
            printNan(key);
            return;
        }
        matrixDimension[key] = +matrixDimension[key];

        if (!Number.isInteger(matrixDimension[key]) && matrixDimension[key] > 0) {
            printMsg(`${key} should be a positive integer`)
            return;
        }
    }
}

function task8(){
    const arr1 = [[1,[2,[3,[4]]]], [5,6],[7,8]];
    let result1 = uniqueArraysElems(...arr1);
    if (typeof result1 === "number"){
        alert(`Dimension of ${arr1}  = ${result1}`)
    } else{
        alert(`Result array of ${arr1} = ${result1}`)
    }

    const arr2 = [[1, 5, 5, 3], [10, 5, 1, 10], [5, 1]];
    let result2 = uniqueArraysElems(...arr2);
    if (typeof result2 === "number"){
        alert(`Dimension of ${arr2}  = ${result2}`)
    } else{
        alert(`Result array of ${arr2} = ${result2}`)
    }
}

function task9(){
    let arr = [[1,[2,[3,[4]]]], [5,6],[7,8]];
    let arrToPush = toFlat(arr);
    alert(`[${arrToPush}]`);

}

function task10(){
    let test = MyFunctionUnique([1, 2, 1, 5, 1, 5, 1, 4], 3);
    console.log(test);
}

function MyFunctionUnique(obj, repeatCount){
    if (typeof obj[Symbol.iterator] !== "function"){
        alert(`Not a iterable data type`);
        return;
    }
    const dictLetters = {};
    for (const item of obj){
        if (item in dictLetters){
            dictLetters[item]++;
        } else{
            dictLetters[item] = 1;
        }
    }
    const result = [];
    for (const key in dictLetters){
        if (dictLetters[key] <= repeatCount){
            result.push(key);
        }
    }
    return result;

}

function toFlat (arrToCheck, arrToPush){
    if (arrToPush === undefined){
        arrToPush = [];
    }

    for (let item of arrToCheck){
        if(Array.isArray(item)){
            toFlat(item, arrToPush);
        }
        else{
            arrToPush.push(item);
        }
    }
    return arrToPush;

}

function uniqueArraysElems(...arrays) {

    for (const arr of arrays){
        for(const item of arr){
            if(Array.isArray(arr[item])){
                return getArrDimension(arrays);
            }
        }
    }

    let arrWithUniqueValues = [];

    for (const arr of arrays){
        for(const item of arr){
            if(!arrWithUniqueValues.includes(item)){
                arrWithUniqueValues.push(item);
            }
        }
    }

    return arrWithUniqueValues;
}

function getArrDimension(arr) {
    return Array.isArray(arr) ? 1 + Math.max(0, ...arr.map(getArrDimension)) : 0;
}


function weekdayInRussianTranslate(year, month, day){
    const weekdayNum = new Date(year, month, day).getDay();
    return WEEKDAYS[weekdayNum]
}


function isNumber(str){
    if (typeof str !== "string") return false
    return !isNaN(str) && !isNaN(parseFloat(str))
}


function outputInTag(tagId){
    return function(msg){
        document.getElementById(tagId).innerHTML = msg;
    }
}

function outputNanInTag(tagId){
    return function(NanValue){
        document.getElementById(tagId).innerHTML = `${NanValue} is not a number`;
    }
}

function range(start, end, step = 1){
    let result = [start];
    let incRange = end > start;

    if ((incRange === true && step < 0) || (incRange === false && step > 0)){
        return result;
    }

    for (let i = start + step; incRange ? i <= end :  i >= end; i+=step){
        result.push(i);
    }
    return result;
}

function initMatrix(rows, columns){
    const matrix = [];
    for (let i = 0; i < rows; i++){
        matrix[i] = [];
        for (let j = 0; j < columns; j++){
            matrix[i][j] = Math.floor(Math.random() * 101);
        }
    }
    return matrix;
}

function printMatrix(matrix, tagId){
    const rows = matrix.length;
    const columns = matrix[0].length;

}






