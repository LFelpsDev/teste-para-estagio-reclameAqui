let number = document.getElementById("number-unoeste")
let counter = 0;
setInterval(() => {
    if(counter == 35){
        clearInterval()
    } else {
        counter  += 1;
        number.innerHTML = counter +  "% Unoeste"
    }
    
}, 60)


let numberfatec = document.getElementById('number-fatec')
let counterFatec = 0;
setInterval(() => {
    if(counterFatec == 33){
        clearInterval()
    }else {
        counterFatec += 1;
        numberfatec.innerHTML = counterFatec + "% Fatec"
    }
}, 60)


let numberToledo = document.getElementById("number-toledo")
let counterToledo = 0;

setInterval(() => {
    if(counterToledo === 32){
        clearInterval()
    }else {
        counterToledo += 1;
        numberToledo.innerHTML = counterToledo + "% Toledo"
    }
}, 60)