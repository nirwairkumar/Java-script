let student = {
    name: "Chirag",
    age: "23",
    eng: 89,
    sci: 90,
    math: 78,
    average (){
        console.log(this)
        avg = (this.eng+this.sci+this.math)/3;
        console.log(avg);
    }
}

function avge(){
   console.log(this)
}