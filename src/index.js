module.exports = function reverse (n) {
    let result = '';
    n = n < 0 ? -n : n;
  for (let i = String(n).length - 1; i >= 0; i--) {
    result = result + String(n)[i];
  }
  return Number(result);
}
