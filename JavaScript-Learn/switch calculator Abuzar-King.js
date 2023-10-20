function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            console.log('Invalid operator');
            return;
    }
    console.log(`${num1} ${operator} ${num2} = ${result}`);
}

calculator(5, 2, '+'); // Output: 5 + 2 = 7
calculator(5, 2, '-'); // Output: 5 - 2 = 3
calculator(5, 2, '*'); // Output: 5 * 2 = 10
calculator(5, 2, '/'); // Output: 5 / 2 = 2.5
calculator(5, 2, '%'); // Output: Invalid operator
