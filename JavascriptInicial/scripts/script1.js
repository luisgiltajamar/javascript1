numero2=2;

function espar(numero1) {
    numero2 = 22;
    return numero1 % 2 == 0;

}
alert(numero2);


//var numero = prompt("Dime un numero");

for (var i = 0; i < 10; i++) {
    document.writeln("El numero " + i + (espar(i) ? "es par" : "no es par"));
    document.writeln("<br />");
}
