let output = document.querySelector(".output")
let areaText = document.querySelector(".areaText")


//stores the inputs into textArr
let textArr =[]
let outputFunction = () => {
  textArr.push(areaText.value)
}

//outputs our info with a delete button to the dom
// let outputBox = () => {
//   // const div = (areaText) => {
// //   return `<div>${areaText}</div>
// //   <button id="delete--1">Delete This Card</button>
// //   `
// // }
// }





// students.forEach((currStudent) => {
//   let studentComponent = ""
//   if (currStudent.score >= 60) {
//       studentComponent = student(currStudent.name, currStudent.class, currStudent.info, "passing")
//   } else {
//       studentComponent = student(currStudent.name, currStudent.class, currStudent.info, "failing")
//   }
//   document.querySelector("#container").innerHTML += `
//   ${studentComponent}
//   `
// })
//saves to textArr
document.querySelector(".btn").addEventListener("click", outputFunction)
//outputs info to dom
document.querySelector(".btn").addEventListener("click", outputFunction)