import { dbank } from "../../declarations/dbank";



window.addEventListener("load", async function(){
         const currentAmount=await dbank.checkBalance();
        //  document.getElementById("value").innerText=currentAmount;

});












// window.addEventListener("load", async function() {
//   // console.log("Finished loading");
//   update();
// });

// document.querySelector("form").addEventListener("submit", async function(event) {
//   event.preventDefault();
//   // console.log("Submitted.");

//   const button = event.target.querySelector("#submit-btn");

//   const inputAmount = parseFloat(document.getElementById("input-amount").value);
//   const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

//   button.setAttribute("disabled", true);

//   if (document.getElementById("input-amount").value.length != 0) {
//     await dbank.topUp(inputAmount);
//   }

//   if (document.getElementById("withdrawal-amount").value.length != 0) {
//     await dbank.withdraw(outputAmount);
//   }

//   await dbank.compound();

//   update()

//   document.getElementById("input-amount").value = "";
//   document.getElementById("withdrawal-amount").value = "";

//   button.removeAttribute("disabled");

// });




