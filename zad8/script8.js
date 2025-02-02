let equipment = [];

function addEquipment() {
    let name = document.getElementById("name").value.trim();
    let price = document.getElementById("price").value.trim();
    let status = document.getElementById("status").value;

    if (name === "" || price === "") {
        alert("Molimo unesite sve podatke.");
        return;
    }

    equipment.push({ name, price: Number(price), status });
    sortAndDisplay();
}

function sortAndDisplay() {
    equipment.sort((a, b) => {
        if (a.status !== b.status) return a.status === "Dostupno" ? -1 : 1;
        return a.name.localeCompare(b.name);
    });

    let list = document.getElementById("equipmentList");
    list.innerHTML = "";
    let availableCount = 0;

    equipment.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price} EUR - ${item.status}`;
        li.className = item.status === "Dostupno" ? "available" : "unavailable";
        if (item.status === "Dostupno") availableCount++;
        list.appendChild(li);
    });

    let ratio = document.getElementById("ratio");
    let total = equipment.length;
    ratio.textContent = `Omjer dostupne i nedostupne opreme: ${availableCount} / ${total - availableCount}`;
}