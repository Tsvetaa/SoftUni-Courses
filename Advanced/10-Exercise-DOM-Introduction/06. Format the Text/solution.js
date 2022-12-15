function solve() {
  let text = document.getElementById('input').value.split('.').filter(s => s.length != 0);
  let output = document.getElementById('output');
 

  const pPerThree = Math.floor(text.length / 3);
  while (text.length > 0) {
    let textForP = text.splice(0, 3).join('. ');
    output.innerHTML += `<p>${textForP}.</p>`
  }
   
}