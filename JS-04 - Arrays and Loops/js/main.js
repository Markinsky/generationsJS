let btnLine = document.getElementById("btnLine");
let btnPart2 = document.getElementById("btnPart2");
let btnPart3 = document.getElementById("btnPart3");

let btnPattern = document.getElementById("btnPattern");

let inputValue = document.getElementById("inputValue");
let btnValue = document.getElementById("btnValue");

let btnOdd = document.getElementById("btnOdd");

let btnNumbers = document.getElementById("btnNumbers");

let inputLoopNumber = document.getElementById("inputLoopNumber");
let btnLoop = document.getElementById("btnLoop");

let fila = ["Sofia", "David", "Juan"];
btnLine.addEventListener("click" , function(event){
    event.preventDefault();
    let strFila = fila.join(", ");
    console.log("Estado de la fila: ");
    console.log(strFila +".");
});

btnPart2.addEventListener("click", function(event){
    event.preventDefault();
    fila.push("Sara");
    fila.push("Agustin");
    fila.shift();
    let strFila = fila.join(", ");
    console.log("Estado de la fila: ");
    console.log(strFila + ".");
});

btnPart3.addEventListener("click", function(event){
    event.preventDefault();
    fila.splice(fila.indexOf("David")+1, 0, "Renata");
    fila.push("Elena");
    let strFila = fila.join(", ");
    console.log("Estado de la fila: ");
    console.log(strFila + ".");
    console.log("Lugar de David: " + fila.indexOf("David"));
});

btnPattern.addEventListener("click", function(event){
    event.preventDefault();
    var data = "* ";
    var res = "";
    let filas = 1, i = 1;
    for(filas ; filas <= 5 ; filas++){
        for(i  ; i <= filas; i++){
            res += data;
            console.log(res);
            console.log(" ");
        }
    }
});

btnValue.addEventListener("click", function(event){
    event.preventDefault();
    decrement(parseFloat(String(inputValue.value)));
});

btnOdd.addEventListener("click", function(event){
    event.preventDefault();
    console.log(odd());
});

btnNumbers.addEventListener("click", function(event){
    event.preventDefault();
    console.log(numbersWith());
});

btnLoop.addEventListener("click", function(event){
    event.preventDefault();
    loop(parseFloat(String(inputLoopNumber.value)));
});

function decrement(xValue){
    do{
        console.log(xValue);
        xValue -= 0.5;
    }while(xValue > 0)
}

function odd(){
    let index = 1, reb = 0, odds="";
    for(index; index<=100; index++){
        reb = index % 2;
        if(reb == 1){
            odds += index.toString()+ ", ";
        }
    }
    return odds;
}

function numbersWith(){
    let indexWith = 1, withZ="";
    for(indexWith; indexWith<=100; indexWith++){
            withZ += "["+ indexWith.toString()+ "]";
    }
    return withZ;
}

function loop(number){
    let indexLoop = 1, loopRes = 0 ;
    do{
        loopRes += indexLoop;
        indexLoop++;
    }while(indexLoop <= number );

    console.log("Resultado: " + loopRes);
}