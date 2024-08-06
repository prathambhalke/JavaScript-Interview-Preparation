const rowRange = document.getElementById("row");
const columnRange = document.getElementById("column");
const table = document.querySelector(".table-body");

let RowCount = +rowRange.value;
let columnCount = +columnRange.value;

const createTable = () => {
  table.innerHTML = "";
  let cellNumber = 1;
  for (let i = 0; i < RowCount; i++) {
    const rows = document.createElement("tr");
    for (let j = 0; j < columnCount; j++) {
      const columns = document.createElement("td");
      columns.textContent = cellNumber++;
      rows.appendChild(columns);
    }
    table.appendChild(rows);
  }
};

rowRange.addEventListener("change", (e) => {
  RowCount = +e.target.value;
  createTable(RowCount, columnCount);
});

columnRange.addEventListener("change", (e) => {
  columnCount = +e.target.value;
  createTable(RowCount, columnCount);
});

createTable(RowCount, columnCount);
