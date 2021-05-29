var modelsauto = {
    audi: ["A1", "A3", "A4", "A6"],
    bmw: ["3 series", "5 series", "7 series"],
    vw: ["Caddy", "Jetta", "Passat"],
    ford: ["C-Max", "Mondeo", "Fusion"],
};
var modelsgeneration = {
    A4: ["B5", "B6", "B7", "B8", "B9"],
    A6: ["C4", "C5", "C6", "C7", "C8"],
    bmw_3: ["E21", "E30", "E36", "E46"],
    bmw_5: ["E12", "E28", "E34", "E39", "E60"],
    vw: ["Caddy", "Jetta", "Passat"],
    ford: ["C-Max", "Mondeo", "Fusion"],
};

var brandauto = document.getElementById("brandauto");
var modelauto = document.querySelector("#modelauto");
var generationauto = document.querySelector("#generationauto");
window.onload = selectBrandauto;
brandauto.onchange = selectBrandauto;

function selectBrandauto(ev){
    modelauto.innerHTML = "";
    generationauto.innerHTML = "";
    var c = this.value || "noselected", o;
    for(let i = 0; i < modelsauto[c].length; i++){
        o = new Option(modelsauto[c][i],i,false,false);
        modelauto.add(o);
    };
}