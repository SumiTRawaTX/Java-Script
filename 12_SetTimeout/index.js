// setTimeout(function() {
//     console.log("sumit");
// }, 2000);

const saySumit = function() {
    console.log("Sumit");
}
// document.querySelector('h1').innerHTML = "best js series"; not valid method

const changeText = function() {
    document.querySelector('h1').innerHTML = "best js course"
}
setTimeout(changeText, 3000);
setTimeout(saySumit, 2000);

// clearTimeOut()

const changeMe = setTimeout(changeText, 2000)

document.querySelector('#stop').addEventListener('click', function() {
    clearTimeout(changeMe)
    console.log("stopped");
});
