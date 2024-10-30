var titulo_articulo = document.querySelectorAll(".harticle");
var subtitulo_art = document.querySelectorAll(".titleArticle");
var exercise = document.querySelectorAll(".article_text");
var example = document.querySelectorAll(".exampleArt");
var out = document.querySelectorAll(".outArt");
var contenedor = document.querySelectorAll(".content-articles");

let subtitle = ["Número mayor o menor","Par o impar","Clasificación de edad","Aprobado o reprobado","Calculadora simple","Número positivo, negativo o cero","¿Es divisible por 3 y 5?","Número de tres cifras","Bisiesto o no bisiesto","Comparación de tres números","Imprimir números del 1 al 100","Suma de números pares del 1 al 50","Factorial de un número","Tabla de multiplicar","Imprimir números impares del 1 al 50","Números Fibonacci","Número primo","Invertir una palabra","Sumatoria de los dígitos de un número","Dibujar un triángulo de asteriscos"];
let Ejercicio = ["Escribe un programa que le pida al usuario ingresar tres números y determine cuál es el mayor.","Escribe un programa que le pida al usuario ingresar un número y determine si es par o impar.","Escribe un programa que solicite la edad de una persona y muestre un mensaje indicando si es un niño (0-12 años), adolescente (13-17 años), adulto (18-64 años) o adulto mayor (65 años o más).","Escribe un programa que solicite la calificación de un estudiante (un número entre 0 y 100) y determine si ha aprobado (si la nota es mayor o igual a 60) o reprobado.","Escribe un programa que le pida al usuario ingresar dos números y una operación (suma, resta, multiplicación o división) y muestre el resultado de la operación.","Escribe un programa que le pida al usuario ingresar un número y determine si es positivo, negativo o cero.","Escribe un programa que le pida al usuario ingresar un número y determine si es divisible por 3, por 5, por ambos o por ninguno.","Escribe un programa que le pida al usuario ingresar un número y determine si tiene exactamente tres cifras (entre 100 y 999).","Escribe un programa que le pida al usuario ingresar un año y determine si es un año bisiesto o no (un año es bisiesto si es divisible por 4 pero no por 100, excepto si también es divisible por 400).","Escribe un programa que le pida al usuario ingresar tres números y determine cuál es el mayor.","Escribe un programa que imprima todos los números del 1 al 100 usando un ciclo for.","Usa un ciclo for para sumar todos los números pares entre 1 y 50 e imprime el resultado final.","Pide al usuario que ingrese un número y calcula el factorial de ese número usando un ciclo for.","Pide al usuario un número y genera su tabla de multiplicar del 1 al 10.","Usa un ciclo for para imprimir todos los números impares entre 1 y 50.","Genera e imprime los primeros 10 números de la secuencia de Fibonacci usando un ciclo for.","Pide al usuario un número e implementa un programa que determine si es un número primo usando un ciclo for.","Pide al usuario una palabra e imprímela al revés utilizando un ciclo for.","Pide al usuario que ingrese un número entero positivo y calcula la suma de sus dígitos utilizando un ciclo for.","Utiliza un ciclo for anidado para imprimir un triángulo de asteriscos de altura n, donde n es un número introducido por el usuario."];
let ejemplo = ["Ingresa el primer número: 8 <br>Ingresa el segundo número: 5","Ingresa un número: 7","Ingresa tu edad: 20","Ingresa tu calificación: 75","Ingresa el primer número: 10<br>Ingresa el segundo número: 5<br>Ingresa la operación (+, -, *, /): *","Ingresa un número: -3","Ingresa un número: 15","Ingresa un número: 123","Ingresa un año: 2020","Ingresa el primer número: 12<br>Ingresa el segundo número: 45<br>Ingresa el tercer número: 32"];
let salida = ["El número mayor es: 8","El número 7 es impar.","Eres un adulto.","Aprobado.","El resultado es: 50","El número es negativo.","El número es divisible por 3 y por 5.","El número tiene tres cifras.","El año es bisiesto.","El número mayor es: 45"];

console.log(subtitle.length);
console.log(Ejercicio.length);
console.log(ejemplo.length);
console.log(salida.length);

for (let i = 0;i < titulo_articulo.length; i++) {
    let cc = i+1;
    const titulo = titulo_articulo[i];
    titulo.innerHTML="Ejercicio " + cc;
    subtitulo_art[i].innerHTML=subtitle[i];
    exercise[i].innerHTML=Ejercicio[i];
    if(ejemplo[i]==null){
        example[i].innerHTML="Ejemplo no disponible";
    }else{

        example[i].innerHTML=ejemplo[i];
    }
    if(salida[i]==null){
        out[i].innerHTML="Salida no disponible";
    }else{

        out[i].innerHTML=salida[i];
    }

    contenedor[i].addEventListener("click",()=>{
        contenedor[i].classList.toggle("desplegar");
    })

}

