//Ejercicio 1.2 array  Add 10 random integers to the "arr" list.

        // var arr = [4,5,734,43,45];
        // for (var i=0, t=5; i<t; i++) {
        //     arr.push(Math.round(Math.random() * t))
        // }
        // console.log(arr);

//Ejercicio 1.1  array  //Ejercicio 1.2 array  Add 10 random integers to the "arr" list.
        // function generateRandomArray()
        // {
        //     var auxArray = [];
        //     var randomLength = Math.floor(Math.random()*100);
        //     for(var i = 0;i<randomLength;i++) auxArray.push(Math.floor(Math.random()*100));
        //     return auxArray;	
        // }
        // var myStupidArray = generateRandomArray();
        // var theLastOne = myStupidArray
        // console.log(theLastOne)// arreglo completo
        // console.log(theLastOne[theLastOne.length-1]) //ultimo digito del arreglo

//Ejercicio 1.3  array Count from 1 to 17 with a loop and print each number on the console.
        // for(let i= 1; i < 18; i ++){
        //     console.log(i)}

// Considicional Largo
        // let uno = 30;
        // let dos = 50;

        // if (uno==10){
        //     document.write("Es igual a 10 ");
        // }else if (uno==20){
        //     document.write("Es igual a 20 ");
        // }else if (uno==30){
        //     document.write("Es igual a 30 ");
        // }else if (uno==40){
        //     document.write("Es igual a 40 ");
        // }else{
        //     document.write("NO ES IGUAL A NINGUNO");
        // }

// Considicional Largo----------------switch cuando la variable  uno vale uno la variable dos tiene muchos valores

    //     let uno = 3;
    //     let dos;

    //     switch(uno){
    //         case 0: dos="CERO" ;break;
    //         case 1: dos="CERO" ;break;
    //         case 2: dos="CERO" ;break;
    //         case 3: dos="CERO" ;break;
    //         case 4: dos="CERO" ;break;
    //         case 5: dos="CERO" ;break;
    //         default: dos="NINGUNO";break;
    // }
    // document.write(dos);

// Considicional Largo----------------switch
    // let uno = 3;
    //     let dos;

    //     switch(uno){
    //         case 0: document.write("no es") ;break;
    //         case 1: document.write("no es") ;break;
    //         case 2: document.write("no es");break;
    //         case 3: document.write("si es") ;break;
    //         case 4: document.write("no es");break;
    //         case 5: document.write("no es") ;break;
    //         default: dos="NINGUNO";break;
    // }
// whilw--------------------------------------------------------------------------


   // bucle siempre y cuando la variable uno sea mayor que la variable dos y se repetira asta que se cumpla
        //let uno = 10;

//         while(uno<dos){
//         document.write(uno +"<br>");uno++;
// }
// ejemplo de disminucion de WHILE
        // let dos = 40;

        // while(dos>=20){
        // document.write(dos +"<br>");dos--;
        // }

//DO WHILE -----------------------------------------------------------------
        // do
        // {document.write(uno + "<br>"); //ejecuta la ccion 
        // uno--;}
        // while(uni >= 20)                //Evaluacion

//FOR-----------------------------------------------------------------------

// for(let i=1;i<=10;i++){
//         document.write(i + "<br>");   //"<br>" salto de linea
// }                                                            //for incluye la variable dentro de el 
//variable:let i=1,condicion:i<=10 incremento: i++;{}orden de accion IMPRESION


//FOR BREAK y CONTINUE-----------------------------------------------------------------------
// for(let i=1;i<=20;i++){
// if(i>=5 && i<= 10){continue}  //if(i>=5 && i<= 10) nuemeros que no se toman en cuenta
// document.write(i + "<br>");
// }


//FUNCIONES-------------------------------------------------------------------

        //FUNCION SIN PARAMETROS
// function uno(){
//         let saludo = document.write('hola a todos');
//                 return saludo
// };

        //FUNCION CON PARAMETROS
function dos(a, b, c,){
let datos = document.write("Mi nombre es:"+ a +"<br> Mi apellido es:"+ b +"<br>Mi edad es:"+ c);
return datos
};

dos("ali","ale","cacao")
// dos('Ali','Carmona',25)  //llamado de fuccion

        //FUNCION CON PARAMETROS #2
// function cuatro(nombre, apellido){
// if(nombre != null && apellido != null){
// respuesta =document.write(nombre + " ",apellido);
//         }
//         else{ respuesta =document.write("No puso los datos")
//         }
//         return respuesta; 
// };

// cuatro("ALi","Carmona")

// funcion LIST ---- HACE LA VECES DE ARRAY-------------------------
// function cinco(...meses){
//         for(let uno of meses){
//         document.write(uno + "<br>");
//         }
// }

// cinco("Enero","Febrero","Marzo","Abril")

// FUNCIONES ANONIMAS ------------------------------------------------------------------
// let a = function (nombre,uno){let e=nombre; uno(e);};
// let b = function (i){document.write(i); };

// a("ALI",b);

// arrows ------------------------------------------------------------------
