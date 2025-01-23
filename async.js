// console.log(10);
// console.log(20);
// // setTimeout(()=>{
// //     console.log(30);
// // },5000)
// setInterval(()=>{
//     // document.writeln("MRU");
//     console.lOg(30);
// },1500)
// console.log(40);
// console.log(50);


//! promise

// let p1 = new Promise((resolve , reject)=>{});
// console.log(p1);

// let p2 = new Promise((resolve , reject)=>{
//     resolve("success");
// })
// // console.log(p2);
// // p2
// // .then((response)=>console.log(response))
// // .catch((error)=>console.log(error))
// // .finally(()=>console.log("finally for both"))

// let p3 = new Promise((resolve , reject)=>{
//     reject("Failure");
// });
// // console.log(p3);
// p3
// .then(data=>console.log(data))
// .catch(err=>console.log(err))
// .finally(()=>console.log("finally for both"))


// ! API fetching

//! https://jsonplaceholder.typicode.com/users

function fetchUsers()
{
    let response = fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(response);
    response.then(result=>{
        // console.log(result.json());
        return result.json().then(data=>{
            console.log(data);
            let store = document.getElementById("store");
            console.log(store);
            data.map(user=>{
                // console.log(user);
                store.innerHTML += `
                <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.company.name}</td>
                </tr>
                `
            })
        })
    })
    .catch(err=>console.log(err))
}
fetchUsers();
