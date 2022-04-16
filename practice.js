// ////Manual.map()Function
// // function map(array) {
// //   // Map magic to follow shortly
// // }

//  function map(array, callbackFunction) {
//    for (const element of array) {
//      // Do something to each element +
//       // itteratingThruEachElement
//       callbackFunction(element);
//    }
//  }

// map([1, 2, 3], function (num) {
//   console.log(num * num);//squares each array element
// });
// /*Inside the for...of statement, */

// ////Returning a brand new collection

// function map(array, callback) {
//   const newArr = [];

//   for (const element of array) {
//     newArr.push(callback(element));
//   }
//   return newArr;//ReturnsNewArray
// }
// /*let's .push() the return value of each 
// callback invocation into newArr:*/

// const originalNumbers = [1, 2, 3, 4, 5];

// const squaredNumbers = map(originalNumbers, function (num) {
//   return num * num;
// });

// console.log(originalNumbers);
// // => [1, 2, 3, 4, 5]

// console.log(squaredNumbers);
// // => [1, 4, 9, 16, 25]

/*Demonstrate Using map() on Flatbook's Expanding Engineering Team
Let's use our map() function on a trickier data structure — a list 
of recently onboarded engineers. First off, we need to flip each 
new engineer's account from a normal user to an admin:*/
const oldAccounts = [
  { userID: 15, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 63, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 97, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 12, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 44, title: "Developer Apprentice", accessLevel: "user" },
];
const adminUsers=oldAccounts.map(user=>{
    return Object.assign({},user,{
        accessLevel:"admin",
    })
})
console.log("NewEngineers!",adminUsers);
console.log(`OldAccounts`,oldAccounts);