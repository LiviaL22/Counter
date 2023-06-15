
/* funzioni del contatore cliccando i pulsanti + e - */ 
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