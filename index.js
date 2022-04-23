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

    let houseProperties = {
        floorAmount: document.getElementById("floorAmount").value,
        entranceAmount: document.getElementById("entranceAmount").value,
        flatsPerFloor: document.getElementById("flatsPerFloor").value
    }

    for (let key in houseProperties){
        if (!isNumber(houseProperties[key])){
            outputNanInTagById(outputId, key);
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
            outputInTagById(outputId, `${key} should be >= ${MIN_NATURAL_INT} and <= ${maxHouseProperties[key]}`);
            return;
        }
    }

    let inputFlat = document.getElementById("flatNum").value;
    if(!isNumber(inputFlat)){
        outputNanInTagById(outputId, "Flat number");
        return;
    }
    inputFlat = +inputFlat;

    const maxFlat = houseProperties.floorAmount * houseProperties.flatsPerFloor * houseProperties.entranceAmount;
    if(inputFlat > maxFlat || inputFlat < MIN_NATURAL_INT){
        outputInTagById(outputId, `Max flat num = ${maxFlat}, min = ${MIN_NATURAL_INT}`)
        return
    }

    const entrance = Math.trunc((inputFlat - 1) /
        (houseProperties.floorAmount * houseProperties.flatsPerFloor))
        + 1;

    outputInTagById(outputId, `Flat ${inputFlat} is located in the entrance number ${entrance}`)
}

function task3(){
    const outputTagId = "weekday";
    const year = 2022;
    let month = document.getElementById("month").value;
    let day = document.getElementById("day").value;

    if (!isNumber(month) || !isNumber(day)){
        outputNanInTagById(outputTagId, "Month or day");
        return;
    }

    month = +month;
    day = +day;

    if (month > 12 || month < MIN_NATURAL_INT){
        outputInTagById(outputTagId, "Incorrect month");
        return;
    }

    if (day > 31 || day < MIN_NATURAL_INT){
        outputInTagById(outputTagId, "Incorrect day");
        return;
    }

    const weekday = weekdayInRussianTranslate(year, month - 1, day)
    outputInTagById(outputTagId, `${weekday}`);

}

function weekdayInRussianTranslate(year, month, day){
    const weekdayNum = new Date(year, month, day).getDay();
    return WEEKDAYS[weekdayNum]
}


function isNumber(str){
    if (typeof str !== "string") return false
    return !isNaN(str) && !isNaN(parseFloat(str))
}

function outputNanInTagById(tagId, NanValue){
    outputInTagById(tagId, `${NanValue} is not a number`);
}


function outputInTagById(tagId, msg){
    document.getElementById(tagId).innerHTML = msg;
}

