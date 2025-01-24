let ele = document.getElementsByClassName("test");
console.log(ele);
console.log(Array.isArray(ele));
ele[0].innerText="Hello"
ele[0].style.backgroundColor="tomato"

//! spread operator:- itwill takeout each and every value from the original array
//! and store it inside one more new array(pure array).

let x=[...ele];
x.map(element=>{
    element.style.backgroundColor="orange"
})
