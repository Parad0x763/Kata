#include <stdio.h>
#include <stdlib.h>

int is_prime_number(int number) {
    int index = 2;
    while (index < number) {
        if (number % index == 0) {
            return 0; //is not prime number
        }   
        index++;     
    }
    return 1; //is prime number
}

int main(int argc, char**  argv) {
    int number = atoi(argv[1]);

    // printf("Enter a number to check if it is prime!");

    // scanf_s("%d", &number); //scanf is deprciated

    if (is_prime_number(number) == 1) {
        printf("%d is a prime number!\n", number);
    } else {
        printf("%d is not a prime number\n", number);
    }

    return 0;
}