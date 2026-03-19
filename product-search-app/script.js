let products = [];
let filtered = [];

fetch("db.json")
    .then(res => res.json())
    .then(data => {
        products = data;
        filtered = [...products];
        render();
    });

function render() {
    const tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";
    filtered.forEach(p => {
        tbody.innerHTML += `
        <tr>
            <td>${p.id}</td>
            <td>${p.name}</td>
            <td>${p.price}</td>
            <td>${p.category}</td>
        </tr>`;
    });
}

function handleSearch() {
    const keyword = document.getElementById("search").value.toLowerCase();
    filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
    render();
}

function sortName(asc) {
    filtered.sort((a, b) => asc 
        ? a.name.localeCompare(b.name) 
        : b.name.localeCompare(a.name)
    );
    render();
}

function sortPrice(asc) {
    filtered.sort((a, b) => asc 
        ? a.price - b.price 
        : b.price - a.price
    );
    render();
}
