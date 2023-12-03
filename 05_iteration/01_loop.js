// node 05_iteration/01_loop

for(let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);
}


for(let index = 0; index < 10; index++) {
    const element = index;
    if(element == 5) {
        // console.log("5 is best number");
    }
//     console.log(element);
}

for(let i = 0; i<=10; i++) {
    // console.log(`outer loop value: ${i}`);
    for(let j =0; j <=10; j++) {
        // console.log(`inner loop value ${j} and inner loop ${i}`);
        // console.log(i+ '*' + j + ' = ' + i*j);
  }
}

let myArr = ["flash", "batman", "superman"];
for(let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
    // console.log(myArr.length);
}

// break and continue

for(let index=1; index <= 20; index++) {
    if(index == 5) {
        // console.log(`detected 5`);
        break;
    }
    // console.log(`value of i is ${index}`);
}

for(let index=1; index <= 20; index++) {
    if(index == 5) {
        console.log(`detected 5`);
        continue;
    }
    console.log(`value of i is ${index}`);
}

