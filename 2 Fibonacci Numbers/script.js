// Function to print
// first n Fibonacci Numbers
function printFibonacciNumbers(n)
{
	let f1 = 0
    let f2 = 1
     i;

	if (n < 1)
		return;
	document.write(f1 + " ");
	for (i = 1; i < n; i++) {
		console.log(f2 + " ");
		let next = f1 + f2;
		f1 = f2;
		f2 = next;
	}
}

	printFibonacciNumbers(100);
	


