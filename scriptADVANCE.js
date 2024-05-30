function factorial(n) {
    if (n == 0 || n == 1) {
        return 1
    }
    let result = 1
    for (let i = 2 ;i <= n ; i++) {
        result *= i
    }
    return result
}

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
        alert("there isn't any result")
    }
    // operator_input = operator_input.replace(/\Rest/g, '%')
    operator_input = operator_input.replace(/\^/g, '**')
    operator_input = operator_input.replace(/\π/g, Math.PI)
    operator_input = operator_input.replace(/\e/g, Math.E)

    try {
        result = eval(operator_input)
    }
    catch {
        result = "Error"
    }
    
    document.getElementById("result_input").value = result
}

function clearInput() {
    document.getElementById("result_input").value = ''
}

function clearI() {
    document.getElementById("operator_input").value = ''
}

function Ans() {
    try {

    } catch {
        document.getElementById("operator_input").value = 'Error'
    }
    let result = document.getElementById("result_input").value
    document.getElementById("operator_input").value += result
}

function factor(){
    let operator_input = parseFloat(document.getElementById("operator_input").value)
    let result = 1
    try {
        if (operator_input == 0 || operator_input == 1) {
            document.getElementById("result_input").value = 1
        } else {
            for (let i = 2 ;i <= operator_input ; i++) {
                result = result * i
            }
            document.getElementById("result_input").value = result
        }
    } catch {
        document.getElementById("result_input").value = 'Error'
    }

}

function cos() {
    try {
        let operator_input = parseFloat(document.getElementById("operator_input").value)
        document.getElementById("result_input").value = Math.cos(operator_input)
    } catch {
        document.getElementById("result_input").value = 'Error'
    }
}

function sin() {
    try {
        let operator_input = parseFloat(document.getElementById("operator_input").value)
        document.getElementById("result_input").value = Math.sin(operator_input)
    } catch {
        document.getElementById("result_input").value = 'Error'
    }

}

function tan() {
    try {
        let operator_input = parseFloat(document.getElementById("operator_input").value)
        document.getElementById("result_input").value = Math.tan(operator_input)
    } catch {
        document.getElementById("result_input").value = 'Error'
    }
}



function log() {
    try {
        let operator_input = parseFloat(document.getElementById("operator_input").value)
        document.getElementById("result_input").value = Math.log(operator_input)
    } catch {
        document.getElementById("result_input").value = 'Error'
    }

}

function ln() {
    try {
        let operator_input = parseFloat(document.getElementById("operator_input").value)
        document.getElementById("result_input").value = Math.log10(operator_input)
    } catch {
        document.getElementById("result_input").value = 'Error'
    }

}

function abs() {
    try {
        let operator_input = parseFloat(document.getElementById("operator_input").value)
        document.getElementById("result_input").value = Math.abs(operator_input)
    } catch {
        document.getElementById("result_input").value = 'Error'
    }

}

function squareRoot() {
    try {
        let operator_input = parseFloat(document.getElementById("operator_input").value)
        document.getElementById("result_input").value = Math.sqrt(operator_input)
    } catch {
        document.getElementById("result_input").value = 'Error'
    }

}

function percentage() {
    let operator_input = document.getElementById("operator_input").value
    operator_input = operator_input.replace(/\%/g, '/')
    let result = eval(operator_input)
    document.getElementById("result_input").value = result * 100 + '%'
}

function cosd() {
    try {
        let operator_input = parseFloat(document.getElementById("operator_input").value)
        let operator_inputd = operator_input * (Math.PI / 180)
        document.getElementById("result_input").value = Math.cos(operator_inputd)
    } catch {
        document.getElementById("result_input").value = 'Error'
    }
}

function sind() {
    try {
        let operator_input = parseFloat(document.getElementById("operator_input").value)
        let operator_inputd = operator_input * (Math.PI / 180)
        document.getElementById("result_input").value = Math.sin(operator_inputd)
    } catch {
        document.getElementById("result_input").value = 'Error'
    }
}

function tand() {
    try {
        let operator_input = parseFloat(document.getElementById("operator_input").value)
        let operator_inputd = operator_input * (Math.PI / 180)
        document.getElementById("result_input").value = Math.tan(operator_inputd)
    } catch {
        document.getElementById("result_input").value = 'Error'
    }
}