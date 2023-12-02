//nexted scope

function one () {
    const username = "sumit";

    function two () {
        const website = "demo";
        console.log(username);
    }
    // console.log(website);
    two();
}
one();



if(true) {
    const username = "sumit";
    if(username === "sumit") {
        const website = "rawat";
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// intersting
addone(5);
function addone(num) {
    return num + 1;
}

// addone(5);

const addtwo = function (num) {
    return num + 2;
}
addtwo(5);
