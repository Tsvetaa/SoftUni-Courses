function solve() {
  const input = document.getElementById('text').value;
  const currentCase = document.getElementById('naming-convention').value;

  const arr = input.toLowerCase().split(' ');
  console.log(arr);
  const result = [];

  if (currentCase == 'Camel Case') {
    result.push(arr[0]);
    for (i = 1; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
      result.push(arr[i])
    }

  } else if (currentCase == 'Pascal Case') {
    for (i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
      result.push(arr[i])
    }

  } else {
    return document.getElementById('result').textContent = "Error!"
  }

  document.getElementById('result').textContent = result.join("");
}