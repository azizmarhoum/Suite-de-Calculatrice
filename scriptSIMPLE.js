
function add(value) {
    let operator_input = document.getElementById("operator_input")
    let input = operator_input.value
    let new_operator_input = input + value
    operator_input.value = new_operator_input
}

function calculate() {
    let result
    let operator_input = document.getElementById("operator_input").value
    if (operator_input==""){
        alert("Veuillez entrer une expression.")
        return
    }
    operator_input = operator_input.replace(/\^/g, '**')
    try {
        result = eval(operator_input)
    }
    catch {
        result = "Error"
    }
    document.getElementById("result_input").value = result
}

function clearR() {
    document.getElementById("result_input").value = ''
}

function clearI() {
    document.getElementById("operator_input").value = ''
}

function Ans() {
    let result = document.getElementById("result_input").value
    if (result == '' || result == 'Error' || result == 'Infinity'){
        alert("Il n'y a pas de résultat.")
        return
    }
    document.getElementById("operator_input").value += result
}
