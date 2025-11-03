// implement a counter logic that uses a singular function that takes an action parameter "increment" or "decrement" to update the counter value accordingly.
console.log("cos");
console.log("cos");

let count: number = 10;
const decrement = document.getElementById("d")!;
const increment = document.getElementById("i")!;
const reset = document.getElementById("r")!;

const counterDisplay = document.getElementById("Counter");

function updateDisplay() {
  if (counterDisplay) {
    counterDisplay.textContent = count.toString();
  }
}



type CounterAction = "incr" | "decr" | "rest";

const handleCounter = (action: CounterAction) => {
  switch (action) {
    case "incr":
      count++;

      break;
    case "decr":
      count--;
      break;
    case "rest":
      count = 10;
      break;
  }
  updateDisplay();
};

increment.addEventListener("click", () => handleCounter("incr"));
decrement.addEventListener("click", () => handleCounter("decr"));
reset.addEventListener("click", () => handleCounter("rest"));




//nowe

// type A = {
    
//     randomProperty: boolean;
//     commonKey: "boo";

// }
// type B = {
    
//     anotherKey: number;
//     liczba: "foo";
// }

// const myFunc = (obj: A | B) => {
//     if("randomProperty"in obj){
//         obj.
//     } else{
//         obj.
//     }
// }
