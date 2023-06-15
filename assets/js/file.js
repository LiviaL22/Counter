
/* funzioni del contatore cliccando i pulsanti + , - e reset*/ 
let counter = 0;

function initial(){

    document.getElementById("result").innerHTML = counter;
}

function add(){
    counter++;
    document.getElementById("result").innerHTML = counter;
}

function sub(){
    counter--;
    document.getElementById("result").innerHTML = counter;
}

function reset(){
    counter = 0;
    document.getElementById("result").innerHTML = counter;
}

/* funzione della tastiera con i tasti + e - */ 

document.onkeyup = keyup ;

function keyup(){

    let id = event.key;
    if (id == '+'){ 
        add();
}

if (id == '-'){ 
    sub();
}

}

/* funzione di reset del tasto reset */

