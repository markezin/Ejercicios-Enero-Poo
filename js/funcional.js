function factorial (numero) {

	if(numero==1)
		return 1;

	// else
	// 	if(numero==2)
	// 		return 2;

			else{

		return factorial(numero-1)*numero;
}
}

console.log(factorial(5))




function gritar (numero, letra) {

	if(numero===1)
		return letra+letra+"!";

	else{
		return letra+(gritar(numero-1, letra));
	}
}

console.log (gritar(3,"A"))