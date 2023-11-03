#include<stdio.h>
int main()
{
    int a,b;
    printf("enter first number\n");
    scanf("%d",&a);
    printf("enter second number\n");
    scanf("%d",&b);
    printf("Before swap: a=%d ; b=%d",a,b);
    a=a+b;
    b=a-b;
    a=a-b;
    printf("\nAfter swap: a=%d ; b=%d",a,b);    
    return 0;
}
