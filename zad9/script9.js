function processCities() {
    let input = document.getElementById("citiesInput").value.trim();

    if (!input) {
        alert("Molimo unesite gradove!");
        return;
    }

    let cities = input.split(",").map(city => city.trim()).filter(city => city !== "");


    let filteredCities = cities.filter(city => city.length > 5);
    filteredCities.sort((a, b) => a.localeCompare(b));

    let csvResult = filteredCities.join(", ");
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; 

    if (filteredCities.length > 0) {
        let p = document.createElement("p");
        p.textContent = `Gradovi: ${csvResult}`;
        outputDiv.appendChild(p);
    } else {
        outputDiv.textContent = "Nema gradova koji zadovoljavaju kriterij.";
    }

    document.getElementById("citiesInput").value = "";
}

function saveToFile() {
    let outputText = document.getElementById("output").textContent;

    if (!outputText || outputText.includes("Nema gradova")) {
        alert("Nema podataka za spremanje!");
        return;
    }

    let blob = new Blob([outputText], { type: "text/plain" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "gradovi.txt";
    a.click();
}