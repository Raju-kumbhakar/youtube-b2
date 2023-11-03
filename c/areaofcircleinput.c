#include<stdio.h>
int main ()
{
  int num1, num2;
  printf("enter first number\n");
  scanf("%d",&num1);
  
  printf("enter second number\n");
  scanf("%d",&num2);

  if (num1 == num2)
    printf("both are equal");
  else if (num1 < num2) 
    printf("%d is smaller", num1);
  else
    printf("%d is smaller", num2);

  return 0;
}