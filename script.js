
function convertToRoman() {
  let num = parseInt(document.getElementById('numberInput').value);
  
  if (isNaN(num) || num < 0 || num > 100000) {
    document.getElementById('result').textContent = "Please enter a number between 0 and 100000.";
    return;
  }

  const romanNumerals = [
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1]
  ];

  let result = '';
  
  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i][1]) {
      result += romanNumerals[i][0];
      num -= romanNumerals[i][1];
    }
  }

  document.getElementById('result').textContent = result;
}
