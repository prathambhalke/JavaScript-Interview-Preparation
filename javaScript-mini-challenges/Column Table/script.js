const rowRange = document.getElementById("row");
const columnRange = document.getElementById("column");
const table = document.querySelector(".table-body");

let RowCount = +rowRange.value;
let columnCount = +columnRange.value;

const createTable = (RowCount, columnCount) => {
  table.innerHTML = "";
  let cellNumber = 1;
  const tableData = Array.from({ length: RowCount }, () =>
    Array(columnCount).fill(0)
  );

  for (let col = 0; col < columnCount; col++) {
    if (col % 2 === 0) {
      for (let row = 0; row < RowCount; row++) {
        tableData[row][col] = cellNumber++;
      }
    } else {
      for (let row = RowCount - 1; row >= 0; row--) {
        tableData[row][col] = cellNumber++;
      }
    }
  }

  for (let i = 0; i < RowCount; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < columnCount; j++) {
      const cell = document.createElement("td");
      cell.textContent = tableData[i][j];
      row.appendChild(cell);
    }
    table.appendChild(row);
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

createTable(RowCount, columnCount)