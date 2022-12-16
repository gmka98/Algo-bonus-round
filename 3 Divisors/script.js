// function to print the divisors 
function printDivisors(n) 
{ 
    for (i=1;i<=n;i++) 
        if (n%i==0) 
            document.write(i+ " "); 
} 
  
/* Driver program to test above function */
  
    document.write("The divisors of 100 are:" + "<br>"); 
    printDivisors(100);
