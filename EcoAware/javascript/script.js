// Funzione: calcola emissioni energia (kWh)
function calculateEnergyEmissions(kwh) {
  const CO2_PER_KWH = 0.233;
  return kwh * CO2_PER_KWH;
}

// Funzione: calcola emissioni trasporto (km)
function calculateTransportEmissions(km) {
  const CO2_PER_KM = 0.21;
  return km * CO2_PER_KM;
}

// Funzione: emissioni totali
function calculateTotalEmissions(kwh, km) {
  return calculateEnergyEmissions(kwh) + calculateTransportEmissions(km);
}

// Event listener per pulsante energia
document.getElementById("calculate-kwh-emissions-btn").addEventListener("click", () => {
  const kwh = parseFloat(document.getElementById("kwh").value);
  if (isNaN(kwh) || kwh < 0) {
    alert("Please insert a positive valid number.");
    return;
  }
  const emissions = calculateEnergyEmissions(kwh);
  document.getElementById("kwh-emissions-output").textContent = emissions.toFixed(2);
});

// Event listener per pulsante trasporto
document.getElementById("calculate-km-emissions-btn").addEventListener("click", () => {
  const km = parseFloat(document.getElementById("km").value);
  if (isNaN(km) || (km < 0)) {
    // Controllo per km negativo o non numerico
    alert("Please insert a positive valid number.");
    return;
  }
  const emissions = calculateTransportEmissions(km);
  document.getElementById("km-emissions-output").textContent = emissions.toFixed(2);
});

// Event listener per pulsante totale
document.getElementById("total-emissions-btn").addEventListener("click", () => {
  const kwh = parseFloat(document.getElementById("kwh").value);
  const km = parseFloat(document.getElementById("km").value);
  const totalEmissions = calculateTotalEmissions(kwh, km);
  document.getElementById("total-emissions-output").textContent = totalEmissions.toFixed(2);
});
