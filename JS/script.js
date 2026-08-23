// Si le gusta el anime dar una recomendacion

let edad = prompt("ingrese tu edad");
console.log(edad);
var name = prompt("ingrese su nombre: ");
console.log(name);
const lastname = prompt("ingrese su apellido: ");
console.log(lastname);
const miSerieFav = "summer time rendering"
const serieIngresada = prompt("Queremos saber si tu serie favorita es igual que la nuestra");
const esLaMismaSerie = serieIngresada === miSerieFav
console.log(esLaMismaSerie);
let scb = prompt("Que tant chiclebomba es "+serieIngresada+": ", "1-100");
console.log(scb);

alert("hola " + name +" "+ lastname + " ya que tu edad es " + edad + " años tenemos algo que decirte");

if (edad >= 18) {
    alert("Puedes ver estas series disfrutalas mucho y manten discresion");
    console.log(true);
} else {
    alert("Contine contenido explicitos como fumar o sangre por lo que se recomiendo esperar a los 18 para disfrutar mejor del contenido");
    console.log(false);
}