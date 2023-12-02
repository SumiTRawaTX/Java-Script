// node 03_basic/06_arrow_function

// syntax () => {}
const chai = () => {
    let username = "sumit";
    // console.log(this.username);
}
// chai();


const addTwo = (nums1, nums2) => {
    return nums1 + nums2;
}
console.log(addTwo(2, 3));

// for one line function

const addThree = (nums1, nums2, nums3) => nums1 + nums2 + nums3;

console.log(addThree(2, 3, 1));

const add = (nums1, nums2) => ({username: "sumit"});
console.log(add(3,4));
