function disolvente( estado, densidad, color ) {

	this.estado = "liquido";
	this.densidad = 0;
	this.volatil = true;
	function disolver() {

	}

	function evaporarse() {

	}

}


var Agua = new disolvente();
var Acetona = new disolvente();

Agua.volatil = false;
// Agua.prototype.densidad = 1;

console.log(Agua.volatil); // false
console.log(Acetona.volatil); // true





// function polar() {
// 	estado = "líquido";
// 	densidad = 0;

// }

// function apolar() {
// 	var estado = "líquido";
// 	var densidad = 0;
// }

// disolver()
// evaporarse()