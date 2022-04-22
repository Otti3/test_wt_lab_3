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
            if (inputs[i].toLowerCase() == 'q'){
                alert(`Position ${i + 1} input perform end condition `);
                return;
            }
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
    const houseProperties = {
        floorAmount: document.getElementById("floorAmount").value,
        entranceAmount: document.getElementById("entranceAmount").value,
        flatsPerFloor: document.getElementById("flatsPerFloor").value
    }

    for (let key in houseProperties){
        if (!houseProperties.hasOwnProperty(key)){
            continue;
        }
        if(isNaN(houseProperties[key] = +houseProperties[key])){
            alert(`${key} should be a number`)
            return;
        }
    }

    const minNaturalInt = 1;
    const maxHouseProperties = {
        floorAmount: 20,
        entranceAmount: 15,
        flatsPerFloor: 5
    }

    for (const key in houseProperties){
        if (houseProperties[key] > maxHouseProperties[key] || houseProperties[key] < minNaturalInt){
            alert(`${key} should be >= ${minNaturalInt} and <= ${maxHouseProperties[key]}`);
            return;
        }
    }

    let inputFlat = prompt("Input flat number")
    if(isNaN(inputFlat = +inputFlat)){
        alert("Flat number should be a number");
        return;
    }

    const maxFlat = houseProperties.floorAmount * houseProperties.flatsPerFloor * houseProperties.entranceAmount;
    if(inputFlat > maxFlat || inputFlat < minNaturalInt){
        alert(`Max flat num = ${maxFlat}, min = ${minNaturalInt}`)
        return
    }

    const entrance = Math.trunc((inputFlat - 1) /
        (houseProperties.floorAmount * houseProperties.flatsPerFloor))
        + 1;

    alert(`Flat ${inputFlat} is located in the entrance number ${entrance}`)
}

function task3(){
    const year = 2022;
    const minNaturalInt = 1;
    let month = prompt("Input month");
    let day = prompt("Input day");

    if (isNaN(month = +month) || isNaN(day = +day)){
        alert("Month and day should be a number");
        return;
    }

    if (month > 12 || month < minNaturalInt){
        alert("Incorrect month");
        return;
    }

    if (day > 31 || day < minNaturalInt){
        alert("Incorrect day");
        return;
    }

    const weekday = weekdayInRussianTranslate(year, month - 1, day)
    alert(`${weekday}`)

}

function weekdayInRussianTranslate(year, month, day){
    const weekdayNum = new Date(year, month, day).getDay();
    return WEEKDAYS[weekdayNum]
}


