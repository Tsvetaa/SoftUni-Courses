function solve() {
  let btnGenerate = document.querySelectorAll('button')[0];
  let btnBuy = document.querySelectorAll('button')[1];
  let input = Array.from(JSON.parse(document.querySelector('textarea').value));

  let outputField = document.querySelectorAll('textarea')[1];
  let table = document.querySelectorAll('tbody')[0];


  btnGenerate.addEventListener('click', generate);
  btnBuy.addEventListener('click', buy);

  function generate() {
    for (let furniture of input) {
      let tr = document.createElement('tr');
      table.appendChild(tr);

      let tdImg = document.createElement('td');
      let img = document.createElement('img');
      img.src = furniture.img;
      tr.appendChild(tdImg);
      tdImg.appendChild(img);

      let tdName = document.createElement('td');
      let p = document.createElement('p');
      p.textContent = furniture.name;
      tr.appendChild(tdName);
      tdName.appendChild(p);

      let tdPrice = document.createElement('td');
      let pPr = document.createElement('p');
      pPr.textContent = furniture.price;
      tr.appendChild(tdPrice);
      tdPrice.appendChild(pPr);

      let tdFactor = document.createElement('td');
      let pF = document.createElement('p');
      pF.textContent = furniture.decFactor;
      tr.appendChild(tdFactor);
      tdFactor.appendChild(pF);

      let tdMark = document.createElement('td');
      let checkBox = document.createElement('input');
      checkBox.type = "checkbox";
      tr.appendChild(tdMark);
      tdMark.appendChild(checkBox);
    }

  }

  function buy() {
    let checkBoxes = Array.from(document.querySelectorAll('input[type = "checkbox"]'));
    let listNames = [];
    let sum = 0;
    let dFactorTotal = 0;
    let dFactorAvg = 0;
    let count = 0;

    checkBoxes.forEach(box => {
      if (box.checked) {
        count++;
        let name = box.parentElement.parentElement.childNodes[1].innerText;
        let pricePiece = Number(box.parentElement.parentElement.childNodes[2].innerText);
        let dFactorPiece = Number(box.parentElement.parentElement.childNodes[3].innerText);

        listNames.push(name);
        sum += pricePiece;
        dFactorTotal += dFactorPiece;
      }
    });

    dFactorAvg = dFactorTotal / count;
    outputField.textContent = `Bought furniture: ${listNames.join(", ")}` + '\n';
    outputField.textContent += `Total price: ${sum.toFixed(2)}` + '\n';
    outputField.textContent += `Average decoration factor: ${dFactorAvg}`;
  }

}

