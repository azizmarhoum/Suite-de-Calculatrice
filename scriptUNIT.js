function convert() {
    let select_unit = document.querySelector('input[name="Length"]:checked')
    let select_convert = document.querySelector('input[name="Length1"]:checked')

    if (select_unit == null || select_unit == '' || select_convert == '' || select_convert == null ) {
        alert('veuillez sélectionner les deux unités .')
        return
    }

    let unit_from = document.getElementById("convert_input").value
    let unit_value = math.unit(unit_from, select_unit.value).toNumber(select_convert.value)

    document.getElementById("convert_result").value = unit_value
}


function Length() {
    let div = document.getElementById("units_div")
    div.innerHTML = ''

    let Length_tab = ['mm','cm','dm','m','dam','hm','km']
    Length_tab.forEach(element => {
        let label = document.createElement("label")
        let radio = document.createElement("input")
        radio.type = 'radio'
        radio.name = 'Length'
        radio.id = element
        radio.className = 'convert_radio'
        radio.value = element
        label.appendChild(radio)
        label.appendChild(document.createTextNode(element))
        div.appendChild(label)
        div.appendChild(document.createElement("br"))
    });

    let div1 = document.getElementById("units_div1")
    div1.innerHTML = ''

    let Length_tab1 = ['mm','cm','dm','m','dam','hm','km']
    Length_tab1.forEach(element => {
        let label1 = document.createElement("label")
        let radio1 = document.createElement("input")
        radio1.type = 'radio'
        radio1.name = 'Length1'
        radio1.id = element + 1
        radio1.className = 'convert_radio'
        radio1.value = element
        label1.appendChild(radio1)
        label1.appendChild(document.createTextNode(element))
        div1.appendChild(label1)
        div1.appendChild(document.createElement("br"))
    });

}

function Convert(){

}

function Mass() {
    let div = document.getElementById("units_div")
    div.innerHTML = ''

    let Length_tab = ['mg','cg','dg','g','dag','hg','kg']
    Length_tab.forEach(element => {
        let label = document.createElement("label")
        let radio = document.createElement("input")
        radio.type = 'radio'
        radio.name = 'Length'
        radio.id = element
        radio.className = 'convert_radio'
        radio.value = element
        label.appendChild(radio)
        label.appendChild(document.createTextNode(element))
        div.appendChild(label)
        div.appendChild(document.createElement("br"))
    });

    let div1 = document.getElementById("units_div1")
    div1.innerHTML = ''

    let Length_tab1 = ['mg','cg','dg','g','dag','hg','kg']
    Length_tab1.forEach(element => {
        let label1 = document.createElement("label")
        let radio1 = document.createElement("input")
        radio1.type = 'radio'
        radio1.name = 'Length1'
        radio1.id = element + 1
        radio1.className = 'convert_radio'
        radio1.value = element
        label1.appendChild(radio1)
        label1.appendChild(document.createTextNode(element))
        div1.appendChild(label1)
        div1.appendChild(document.createElement("br"))
    });

}

function Area() {
    let div = document.getElementById("units_div")
    div.innerHTML = ''

    let Length_tab = ['mm²','cm²','dm²','m²','dam²','hm²','km²']
    Length_tab.forEach(element => {
        let label = document.createElement("label")
        let radio = document.createElement("input")
        radio.type = 'radio'
        radio.name = 'Length'
        radio.id = element
        radio.className = 'convert_radio'
        radio.value = element
        label.appendChild(radio)
        label.appendChild(document.createTextNode(element))
        div.appendChild(label)
        div.appendChild(document.createElement("br"))
    });

    let div1 = document.getElementById("units_div1")
    div1.innerHTML = ''

    let Length_tab1 = ['mm²','cm²','dm²','m²','dam²','hm²','km²']
    Length_tab1.forEach(element => {
        let label1 = document.createElement("label")
        let radio1 = document.createElement("input")
        radio1.type = 'radio'
        radio1.name = 'Length1'
        radio1.id = element + 1
        radio1.className = 'convert_radio'
        radio1.value = element
        label1.appendChild(radio1)
        label1.appendChild(document.createTextNode(element))
        div1.appendChild(label1)
        div1.appendChild(document.createElement("br"))
    });

}

function Volume() {
    let div = document.getElementById("units_div")
    div.innerHTML = ''

    let Length_tab = ['ml','cl','dl','l','dal','hl','kl']
    Length_tab.forEach(element => {
        let label = document.createElement("label")
        let radio = document.createElement("input")
        radio.type = 'radio'
        radio.name = 'Length'
        radio.id = element
        radio.className = 'convert_radio'
        radio.value = element
        label.appendChild(radio)
        label.appendChild(document.createTextNode(element))
        div.appendChild(label)
        div.appendChild(document.createElement("br"))
    });

    let div1 = document.getElementById("units_div1")
    div1.innerHTML = ''

    let Length_tab1 = ['ml','cl','dl','l','dal','hl','kl']
    Length_tab1.forEach(element => {
        let label1 = document.createElement("label")
        let radio1 = document.createElement("input")
        radio1.type = 'radio'
        radio1.name = 'Length1'
        radio1.id = element + 1
        radio1.className = 'convert_radio'
        radio1.value = element
        label1.appendChild(radio1)
        label1.appendChild(document.createTextNode(element))
        div1.appendChild(label1)
        div1.appendChild(document.createElement("br"))
    });

}

function Time() {
    let div = document.getElementById("units_div")
    div.innerHTML = ''

    let Length_tab = ['s','min','hr','day']
    Length_tab.forEach(element => {
        let label = document.createElement("label")
        let radio = document.createElement("input")
        radio.type = 'radio'
        radio.name = 'Length'
        radio.id = element
        radio.className = 'convert_radio'
        radio.value = element
        label.appendChild(radio)
        label.appendChild(document.createTextNode(element))
        div.appendChild(label)
        div.appendChild(document.createElement("br"))
    });

    let div1 = document.getElementById("units_div1")
    div1.innerHTML = ''

    let Length_tab1 = ['s','min','hr','day']
    Length_tab1.forEach(element => {
        let label1 = document.createElement("label")
        let radio1 = document.createElement("input")
        radio1.type = 'radio'
        radio1.name = 'Length1'
        radio1.id = element + 1
        radio1.className = 'convert_radio'
        radio1.value = element
        label1.appendChild(radio1)
        label1.appendChild(document.createTextNode(element))
        div1.appendChild(label1)
        div1.appendChild(document.createElement("br"))
    });

}

function Speed() {
    let div = document.getElementById("units_div")
    div.innerHTML = ''

    let Length_tab = ['m/s','km/h']
    Length_tab.forEach(element => {
        let label = document.createElement("label")
        let radio = document.createElement("input")
        radio.type = 'radio'
        radio.name = 'Length'
        radio.id = element
        radio.className = 'convert_radio'
        radio.value = element
        label.appendChild(radio)
        label.appendChild(document.createTextNode(element))
        div.appendChild(label)
        div.appendChild(document.createElement("br"))
    });

    let div1 = document.getElementById("units_div1")
    div1.innerHTML = ''

    let Length_tab1 = ['m/s','km/h']
    Length_tab1.forEach(element => {
        let label1 = document.createElement("label")
        let radio1 = document.createElement("input")
        radio1.type = 'radio'
        radio1.name = 'Length1'
        radio1.id = element + 1
        radio1.className = 'convert_radio'
        radio1.value = element
        label1.appendChild(radio1)
        label1.appendChild(document.createTextNode(element))
        div1.appendChild(label1)
        div1.appendChild(document.createElement("br"))
    });

}

function Data() {
    let div = document.getElementById("units_div")
    div.innerHTML = ''

    let Length_tab = ['b','B','KB','MB','GB','TB']
    Length_tab.forEach(element => {
        let label = document.createElement("label")
        let radio = document.createElement("input")
        radio.type = 'radio'
        radio.name = 'Length'
        radio.id = element
        radio.className = 'convert_radio'
        radio.value = element
        label.appendChild(radio)
        label.appendChild(document.createTextNode(element))
        div.appendChild(label)
        div.appendChild(document.createElement("br"))
    });

    let div1 = document.getElementById("units_div1")
    div1.innerHTML = ''

    let Length_tab1 = ['b','B','KB','MB','GB','TB']
    Length_tab1.forEach(element => {
        let label1 = document.createElement("label")
        let radio1 = document.createElement("input")
        radio1.type = 'radio'
        radio1.name = 'Length1'
        radio1.id = element + 1
        radio1.className = 'convert_radio'
        radio1.value = element
        label1.appendChild(radio1)
        label1.appendChild(document.createTextNode(element))
        div1.appendChild(label1)
        div1.appendChild(document.createElement("br"))
    });

}

