let count = 0;

//while loop — used when you don’t know how many times it will run, but it keeps running as long as the condition stays true.
while (count < 10) {
  count++;
  console.log("Count is:", count);
}

//do…while — used when you must do the task at least once, and then repeat it again based on the condition.
do {
  console.log("This will run at least once.");
  count--;
} while (count > 0);
{
  console.log("Count is less than 0" + count);
}

//for loop — used when you already know in advance how many times it will run.
for (let i = 0; i <= 5; i++) {
  console.log("Iteration:", i);
}
