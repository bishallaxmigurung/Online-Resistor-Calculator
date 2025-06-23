function calculateResistor() {
    let band1 = parseInt(document.getElementById("band1").value);
    let band2 = parseInt(document.getElementById("band2").value);
    let multiplier = parseInt(document.getElementById("multiplier").value);
    
    let resistance = ((band1 * 10) + band2) * multiplier;
    
    document.getElementById("result").innerText = "Resistance: " + resistance + " Ω";
}
