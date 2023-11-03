#include <stdio.h>
int main()
{
int x, y, temp;

   printf("Enter Ist integer to swap :: ");
   scanf("%d", &x);
   printf("\nEnter 2nd integer to swap :: ");
   scanf("%d", &y);
   printf("\nBefore Swapping, Numbers are :: \n");
   printf("%d%d\n",x,y);

 temp = x;
   x    = y;
   y    = temp;

   printf("\nAfter Swapping, Numbers are :: \n");
   printf("%d%d\n",x,y);

   return 0;
}