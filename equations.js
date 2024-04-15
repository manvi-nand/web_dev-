// a. Button click to display date in textarea
function displayDate() {
    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    document.getElementById('dateTextarea').value = date;
}

// b. Fibonacci of n in alert
function fibonacciAlert() {
    var n = parseInt(prompt("Enter a number:"));
    var fib = [0, 1];
    for (var i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    alert("Fibonacci of " + n + " is: " + fib[n]);
}

// c. nX1, nX2, ..., nX10 in alert
function multiplyByN() {
    var n = parseInt(prompt("Enter a number:"));
    var result = "";
    for (var i = 1; i <= 10; i++) {
        result += n + " X " + i + " = " + (n * i) + "\n";
    }
    alert(result);
}

// d. Sum of n numbers in alert
function sumOfNumbers() {
    var count = parseInt(prompt("Enter the count of numbers:"));
    var numbers = prompt("Enter " + count + " numbers separated by space:").split(" ");
    var sum = 0;
    for (var i = 0; i < count; i++) {
        sum += parseInt(numbers[i]);
    }
    alert("Sum of the numbers is: " + sum);
}
