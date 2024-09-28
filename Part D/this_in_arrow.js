let student2 = {
    name: "Chirag",
    age: "23",
    eng: 89,
    sci: 90,
    math: 78,
    hindi: 98,
    prop: this,
    average: function (){
        console.log(this)     // refers to parent objects 
        avg = (this.eng+this.sci+this.math+ this.hindi)/4;
        console.log(avg);
    },
    getMarks: () => {
        console.log(this);   // refers to global ---> windows
        return this.hindi;   // it is now global variable and >39 | parent's scope of hindi is 39.
    },
}
hindi =39;

function avge(){
   console.log(this)
}