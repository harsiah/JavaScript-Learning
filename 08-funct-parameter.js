function sayHello(name){
    console.log("hello," + name);

}
sayHello("budi");
sayHello("anna");
sayHello("iva");


function greet(name = "guest"){
    console.log("hello, " + name);
}

greet("dinda");
greet();


//memahami function arrow dengan parameter

//biasa menulis function seperti ini

const greetTy = function(name){
    return "Hi, " + name;
}

console.log(greetTy("dinda"));

//kita ubah menulis ke dalam arrow tapi hasil sama

const greetArrow = (name) => {
    return "Hi, " + name;
}
console.log(greetArrow("dinda"));