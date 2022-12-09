// traverse each number 1-100 and
//      > for each number that is a multipl fo 3, print "Fizz"
//      > for each number that is a multiple of 5, print "Buzz"
//      > for numbers that are a multiple of both 3 and 5, print "FizzBuzz"
//      > print all other numbers as-is


for(var i=1; i<=100; i++) {
    // check if the number (i) is evenly divisible by 3
    if(i % 3 == 0) {
        // check if the number (i) is also evently divisible by 5
        if(i % 5 == 0) {
            console.log('"FizzBuzz"');  // print "FizzBuzz" if evenly divisible by both
        }
        else {
            console.log('"Fizz"');  // print "Fizz" if only evenly divisble by 3
        }
    }
    // check if the number (i) is evenly divisble by 5
    else if(i % 5 == 0) {
        console.log('"Buzz"');  // print "Buzz" if so
    }
    else {
        console.log(i); // all else untrue, just print the number
    }
}