// Variables y Arrays
let ingresos = [];
let gastos = [];

// Función para registrar ingresos
function registrarIngreso() {
    let agregarMas = true;
    while (agregarMas) {
        let ingreso = parseFloat(prompt("Ingrese el monto del ingreso:"));
        if (!isNaN(ingreso) && ingreso > 0) {
            ingresos.push(ingreso);
            agregarMas = confirm("¿Desea agregar otro ingreso?");
        } else {
            alert("Por favor, ingrese un valor válido.");
        }
    }
}

// Función para registrar gastos
function registrarGasto() {
    let agregarMas = true;
    while (agregarMas) {
        let gasto = parseFloat(prompt("Ingrese el monto del gasto:"));
        if (!isNaN(gasto) && gasto > 0) {
            gastos.push(gasto);
            agregarMas = confirm("¿Desea agregar otro gasto?");
        } else {
            alert("Por favor, ingrese un valor válido.");
        }
    }
}

// Función para calcular balance
function calcularBalance() {
    let totalIngresos = ingresos.reduce((a, b) => a + b, 0);
    let totalGastos = gastos.reduce((a, b) => a + b, 0);
    let balance = totalIngresos - totalGastos;

    let mensaje = `Resumen del presupuesto:\n\n` +
                  `Total de ingresos: $${totalIngresos}\n` +
                  `Total de gastos: $${totalGastos}\n` +
                  `Balance: $${balance}\n`;

    if (balance > 0) {
        mensaje += "¡Estás en superávit! Puedes ahorrar más.";
    } else if (balance < 0) {
        mensaje += "Estás en déficit. ¡Revisa tus gastos!";
    } else {
        mensaje += "Estás equilibrado. ¡Buen trabajo!";
    }

    alert(mensaje);
}

// Llamadas a las funciones
registrarIngreso();
registrarGasto();
calcularBalance();
