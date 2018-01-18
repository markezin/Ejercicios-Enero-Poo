function factorial (numero) {

	if(numero==1)
		return 1;

	// else
	// 	if(numero==2)
	// 		return 2;

			else{

		return factorial (numero-1)*numero;
	}
}

console.log(factorial(5))




// function gritar (numero, letra) {
// 	if ( num == 0 ) {
//         return 0;	

// 	if(numero==1)
// 		return letra+letra+"!";
// 		// return "!"
// 	else{
// 		// return(numero-1,)
// 	}
// }

// console.log (gritar(3,"A"))


// function gritar( num, vocal ) {
//     if ( num == 0 ) {
//         return 0;
//     }
//     else if (num == 1 )
//         return vocal + vocal;
//     else {
//         return  vocal + gritar(num - 1, vocal);
//     }
// }
// console.log(gritar(0, "a"));


        /*
            2) funcion gritar (numero, letra)
            Pinta por consola tantas veces seguidas como el doble del parámetro número
        */
        function gritar (num, letra) {
            if (num == 0) {
                return "!";
            }
/*            if (num == 1) {
                return letra + "!";
            }*/
            if (num >= 1) {
                return letra + letra + gritar(num-1, letra);
            }
        }
console.log(gritar(4, "a"));



