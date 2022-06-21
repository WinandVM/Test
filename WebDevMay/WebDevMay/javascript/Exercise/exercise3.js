const numbers = [12, 15, 32, 42, 55, 75, 122, 132, 150, 180, 200];
const filteredNumbers = numbers.filter (value => value % 5 == 0 && value <=150);
console.log(filteredNumbers);


function Factorial(n) {
    if (n < 0) {
          return "Please don't use a negative number";
    }
    else if (n == 0) {
        return 1;
    }
      else {
          return (n * Factorial(n - 1));
    }
  }
  console.log(Factorial(4));