"use strict";

let bmw = {
    model: 'F10',
    year: 2023,
    color: 'Black'
}

let audi = {
    model: 'A6',
    year: 2022,
    color: 'Red'
}

let mercedes = {
    model: 'E-Class',
    year: 2021,
    color: 'Blue'
}
function info() {
    let carInfo = document.getElementById('carInfo');
    carInfo.innerHTML = `model: ${this.model}<br>year: ${this.year}<br>color: ${this.color}`;
}
function choose() {
    let select = document.getElementById('select');
    let carInfo = document.getElementById('carInfo');
    let selectCar = select.value;
    if (selectCar === "BMW") {
        info.call(bmw);
    }
    else if (selectCar === "Audi") {
        info.call(audi);
    }
    else if (selectCar === "Mercedes") {
        info.call(mercedes);
    } else if (selectCar === "0") {
        carInfo.innerHTML = "";
    }
}


