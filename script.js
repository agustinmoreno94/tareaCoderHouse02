let nombre = prompt("Bienvenido a Lince Prestamos. Ingrese su nombre")
let salario = parseInt(prompt("ingrese su salario"))
let montoMinimo = 45000;
let montoMayor=120000

if(salario>montoMinimo){
    alert("Usted puede pedir un prestamo maximo de $100000")
}else if(salario<montoMinimo){
    alert("Usted puede epdir un prestamo maximo de $40000")
}
