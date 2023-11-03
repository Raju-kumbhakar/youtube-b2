#include <stdio.h>

int main() 
{
   int num1, num2;
    printf("Enter first number: ");
    scanf("%d", &num1);
    printf("Enter second number: ");
    scanf("%d", &num2);
  int sum = num1 + num2;
    printf("Sum: %d\n", sum);
    
    // Subtraction
    int diff = num1 - num2;
    printf("Difference: %d\n", diff);
    
    // Multiplication
    int product = num1 * num2;
    printf("Product: %d\n", product);
    int division=num1/num2;
   printf("difference:%d\n",division);
    return 0; }