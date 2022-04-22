const WEEKDAYS = {
    0: "Воскресенье",
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота"
};


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

            inputs[i] = +inputs[i];

            if (isNaN(inputs[i])){
                alert(`Position ${i + 1} input not a number `);
                is_number = false;
            }
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

    let keyWithNanValue = findNanInObj(houseProperties);
    
    if (keyWithNanValue !== false){
        outputInTagById(outputId, `${keyWithNanValue} is not a number`);
        return;
    }

    houseProperties = objectValuesToNum(houseProperties);

    const minNaturalInt = 1;
    const maxHouseProperties = {
        floorAmount: 20,
        entranceAmount: 15,
        flatsPerFloor: 5
    }

    for (const key in houseProperties){
        if (houseProperties[key] > maxHouseProperties[key] || houseProperties[key] < minNaturalInt){
            outputInTagById(outputId, `${key} should be >= ${minNaturalInt} and <= ${maxHouseProperties[key]}`);
            return;
        }
    }

    let inputFlat = document.getElementById("flatNum").value;
    if(isNaN(inputFlat = +inputFlat)){
        outputInTagById(outputId, "Flat number should be a number");
        return;
    }

    const maxFlat = houseProperties.floorAmount * houseProperties.flatsPerFloor * houseProperties.entranceAmount;
    if(inputFlat > maxFlat || inputFlat < minNaturalInt){
        outputInTagById(outputId, `Max flat num = ${maxFlat}, min = ${minNaturalInt}`)
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
    const minNaturalInt = 1;
    let month = document.getElementById("month").value;
    let day = document.getElementById("day").value;

    month = +month;
    day = +day;
    if (isNaN(month) || isNaN(day)){
        outputInTagById(outputTagId, "Month and day should be a number");
        return;
    }

    if (month > 12 || month < minNaturalInt){
        outputInTagById(outputTagId, "Incorrect month");
        return;
    }

    if (day > 31 || day < minNaturalInt){
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

function findNanInObj(prop){  //возвращает ключ NaN значения, либо false - если такого нет
    for (let key in prop){
        
        if(!prop.hasOwnProperty(key)){
            continue;
        }
        if(isNaN(prop[key])){
            return key
        }
        
    }
    return false
}

function objectValuesToNum(prop){
    const newObject = {}

    for (let key in prop){
        newObject[key] = +prop[key]
    }
    return newObject;
}

function outputInTagById(tagId, msg){
    document.getElementById(tagId).innerHTML = msg;
}

