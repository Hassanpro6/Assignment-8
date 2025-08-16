
console.log("rgb color codes");

for (var i = 0; i<10; i++) {
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)

let final = `rgb(${r},${g},${b})`
console.log(final);


}

console.log("Hexadecimal color codes:");

for (var e = 0; e < 5; e++) {
     let hexColor = Math.floor(Math.random()*6001)
     let finalAns = `#FF${hexColor}`
    console.log(finalAns);
    
    }

console.log("FizBuzz:");

for (var u = 0; u < 100; u++) {

    if (u % 3 == 0) {
        console.log("Fizz");

        
    }

    if (u % 5 == 0) {
        console.log("Buzz");
        
    }

    if (u % 3 == 0 || u % 5 == 0) {
        console.log("FizzBuzz");
        
    }

}

let sum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {   
        sum += i;        
        }
}

console.log(`Sum of multiples of 5 from 1 to 100 is ${sum}`);