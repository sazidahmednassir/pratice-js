const flag = true;

if (!flag) {
  console.log("The flag is true.");
} else {
  console.log("The flag is false.");
}

console.log("for loop-----");
for (let i = 0; i < 20; i++) {
  console.log("Current number is:", i);
  if (i % 2 === 0) {
    console.log(i + " is multiple of 2");
  } else if (i % 5 === 0) {
    console.log(i + " is multiple of 5");
  } else {
    console.log(i + " is neither multiple of 2 nor 3");
  }
}

console.log("while loop-----");
let k = 0;
while (k <= 10) {
  console.log("Current number is:", k);
  if (k % 5 === 0) {
    console.log(k + " is multiple of 5");
  } else if (k % 2 === 0) {
    console.log(k + " is multiple of 2");
  }
  k++;
}
