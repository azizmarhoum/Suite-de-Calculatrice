let ingéni = document.getElementById("Ingénierie")
let volume = document.getElementById("volume")
let span1 = document.getElementById("span1")
let span2 = document.getElementById("span2")

function Carré() {
    ingéni.innerHTML = '<input type="text" id="Carré" placeholder="Entrer la longueur du carré" class="ingéni_input"><button class="btnU" onclick="calCarré()">=</button><br><input type="text" readonly class="ingéni_input" placeholder="Résultat" id="résultat">'
    span1.innerHTML = 'Carré'
}

function Rectangle() {
    ingéni.innerHTML = '<input type="text" id="rectangleLong" placeholder="Entrer la longueur du rectangle" class="ingéni_input"><input type="text" id="rectangleLarg" placeholder="Entrer la largeur du rectangle" class="ingéni_input"><button class="btnU" onclick="calRectangle()">=</button><input type="text" readonly class="ingéni_input" placeholder="Résultat" id="résultat" >'
    span1.innerHTML = 'Rectangle'
}

function Cercle() {
    ingéni.innerHTML = '<input type="text" id="Cercle" placeholder="Entrer le rayon du cercle" class="ingéni_input"><button class="btnU" onclick="calCercle()">=</button><br><input type="text" readonly class="ingéni_input" placeholder="Résultat" id="résultat">'
    span1.innerHTML = 'Cercle'
}

function Triangle() {
    ingéni.innerHTML = '<input type="text" id="triangleHaut" placeholder="Entrer le hauteur du triangle" class="ingéni_input"><input type="text" id="triangleBase" placeholder="Entrer la base du triangle" class="ingéni_input"><button class="btnU" onclick="calTriangle()">=</button><br><input type="text" readonly class="ingéni_input" placeholder="Résultat" id="résultat">'
    span1.innerHTML = 'Triangle'
}

function Cube() {
    ingéni.innerHTML = '<input type="text" id="Cube" placeholder="Entrer la longueur du Cube" class="ingéni_input"><button class="btnU" onclick="calCube()">=</button><br><input type="text" readonly class="ingéni_input" placeholder="Résultat" id="résultat">'
    span1.innerHTML = 'Cube'
}

function P_rectanglaire() {
    ingéni.innerHTML = '<input type="text" id="P_rectanglaireLong" placeholder="Entrer la longueur du P_rectanglaire" class="ingéni_input"><input type="text" id="P_rectanglaireLarg" placeholder="Entrer la largeur du P_rectanglaire" class="ingéni_input"><input type="text" id="P_rectanglaireHaut" placeholder="Entrer le hauteur du P_rectanglaire" class="ingéni_input"><button class="btnU" onclick="calP_rectanglaire()">=</button><input type="text" readonly class="ingéni_input" placeholder="Résultat" id="résultat">'
    span1.innerHTML = 'P_rectanglaire'
}

function Sphere() {
    ingéni.innerHTML = '<input type="text" id="Sphere" placeholder="Entrer le rayon du Sphere" class="ingéni_input"><button class="btnU" onclick="calSphere()">=</button><br><input type="text" readonly class="ingéni_input" placeholder="Résultat" id="résultat">'
    span1.innerHTML = 'Sphere'
}

function Cylindre() {
    ingéni.innerHTML = '<input type="text" id="CylindreRayon" placeholder="Entrer le rayon du Cylindre" class="ingéni_input"><input type="text" id="CylindreHaut" placeholder="Entrer le hauteur du Cylindre" class="ingéni_input"><button class="btnU" onclick="calCylindre()">=</button><br><input type="text" readonly class="ingéni_input" placeholder="Résultat" id="résultat">'
    span1.innerHTML = 'Cylindre'
}







function CubeV() {
    volume.innerHTML = '<input type="text" id="CubeV" placeholder="Entrer la longueur du Cube" class="ingéni_input"><button class="btnU" onclick="calCubeV()">=</button><br><input type="text" readonly class="ingéni_input" placeholder="Résultat" id="résultat">'
    span2.innerHTML = 'Cube'
}

function P_rectanglaireV() {
    volume.innerHTML = '<input type="text" id="P_rectanglaireLongV" placeholder="Entrer la longueur du P_rectanglaire" class="ingéni_input"><input type="text" id="P_rectanglaireLargV" placeholder="Entrer la largeur du P_rectanglaire" class="ingéni_input"><input type="text" id="P_rectanglaireHautV" placeholder="Entrer le hauteur du P_rectanglaire" class="ingéni_input"><button class="btnU" onclick="calP_rectanglaireV()">=</button><input type="text" readonly class="ingéni_input" placeholder="Résultat" id="résultat">'
    span2.innerHTML = 'P_rectanglaire'
}

function SphereV() {
    volume.innerHTML = '<input type="text" id="SphereV" placeholder="Entrer le rayon du Sphere" class="ingéni_input"><button class="btnU" onclick="calSphereV()">=</button><br><input type="text" readonly class="ingéni_input" placeholder="Résultat" id="résultat">'
    span2.innerHTML = 'Sphere'
}

function CylindreV() {
    volume.innerHTML = '<input type="text" id="CylindreRayonV" placeholder="Entrer le rayon du Cylindre" class="ingéni_input"><input type="text" id="CylindreHautV" placeholder="Entrer le hauteur du Cylindre" class="ingéni_input"><button class="btnU" onclick="calCylindreV()">=</button><br><input type="text" readonly class="ingéni_input" placeholder="Résultat" id="résultat">'
    span2.innerHTML = 'Cylindre'
}










function calCarré() {
    let input = document.getElementById("Carré").value
    document.getElementById("résultat").value = input**2
}

function calRectangle() {
    let inputLong = document.getElementById("rectangleLong").value
    let inputLarg = document.getElementById("rectangleLarg").value
    document.getElementById("résultat").value = inputLarg * inputLong
}

function calCercle() {
    let input = document.getElementById("Cercle").value
    document.getElementById("résultat").value = Math.PI * input**2
}

function calTriangle() {
    let inputHaut = document.getElementById("triangleHaut").value
    let inputBase = document.getElementById("triangleBase").value
    document.getElementById("résultat").value = (inputHaut * inputBase) / 2
}

function calCube() {
    let input = document.getElementById("Cube").value
    document.getElementById("résultat").value = 6 * input**2
}

function calP_rectanglaire() {
    let inputLong = document.getElementById("P_rectanglaireLong").value
    let inputLarg = document.getElementById("P_rectanglaireLarg").value
    let inputHaut = document.getElementById("P_rectanglaireHaut").value
    document.getElementById("résultat").value = 2 * (inputLong * inputLarg + inputLarg * inputHaut + inputLong * inputHaut)
}

function calSphere() {
    let input = document.getElementById("Sphere").value
    document.getElementById("résultat").value = 4 * Math.PI * input**2 
}

function calCylindre() {
    let inputRayon = document.getElementById("CylindreRayon").value
    let inputHaut = document.getElementById("CylindreHaut").value
    document.getElementById("résultat").value = 2 * inputRayon * inputHaut + 2 * Math.PI * inputRayon**2
}





function calCubeV() {
    let input = document.getElementById("CubeV").value
    document.getElementById("résultat").value = input**3
}

function calP_rectanglaireV() {
    let inputLong = document.getElementById("P_rectanglaireLongV").value
    let inputLarg = document.getElementById("P_rectanglaireLargV").value
    let inputHaut = document.getElementById("P_rectanglaireHautV").value
    document.getElementById("résultat").value = inputHaut * inputLarg * inputLong
}

function calSphereV() {
    let input = document.getElementById("SphereV").value
    document.getElementById("résultat").value = (4/3) * Math.PI * input**3
}

function calCylindreV() {
    let inputRayon = document.getElementById("CylindreRayonV").value
    let inputHaut = document.getElementById("CylindreHautV").value
    document.getElementById("résultat").value = Math.PI * inputRayon ** 2 * inputHaut
}