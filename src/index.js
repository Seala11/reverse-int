module.exports = function reverse (n) {

    // ==================================================
    // One way is to convert to string reverse and return:
    //
    // return Math.abs(n).toString().split('').reverse().join('');

    // =====================================
    // Another way without converting to str:
    //  
    // 1. set number as n (num=123) and result as 0 (result=0);
    // 2. loop untill number > 0
      // 2.1 save the last number from num (lastNumber = 123 % 10 = 3)
      // 2.2 refresh the result, leave all prev result + last number (result = result * 10 + lastNumber = 3)
      // 2.3 delete last number from number, that we already pushed to the result (num = parseInt(123, 10) = 12)
    // 3. return the result

    let number = Math.abs(n);
    let result = 0;

    while (number > 0) {
        let lastNumber = number % 10;
        result = result * 10 + lastNumber;
        number = parseInt(number / 10);
    }

    return result;
}
