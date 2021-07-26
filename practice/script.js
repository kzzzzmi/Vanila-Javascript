
let x = +prompt("x");
let y = +prompt("y");

while (y < 1) {
  y = +prompt("y는 1보다 크거나 같아야 합니다.");
}

alert(pow(x, y));
function pow(x, n) {
  let answer = x;

  for (let i = 1; i < n; i++) {
    answer *= x;
  }
  return answer;
}
