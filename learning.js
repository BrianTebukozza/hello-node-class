// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let order = (call_production) => {
//   console.log("Order placed. Please call production");

//   // function 👇 is being called
//   call_production();
// };

// let production = () => {
//   console.log("Production has started");
// };

// // name 👇 of our second function
// order(production);

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = false;
let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        // work is 👇 getting done here
        resolve(work());

        // Setting 👇 time here for 1 work
      }, time);
    } else {
      reject(console.log("Our shop is closed"));
    }
  });
};
// Set 👇 time here
order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
  // //    pass a ☝️ function here to start working

  .then(() => {
    return order(1000, () => console.log("production has started"));
  })

  // // step 3
  .then(() => {
    return order(2000, () => console.log("Fruit has been chopped"));
  })

  // // step 4
  .then(() => {
    return order(1000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`),
    );
  })

  // // step 5
  .then(() => {
    return order(1000, () => console.log("start the machine"));
  })

  // // step 6
  .then(() => {
    return order(2000, () =>
      console.log(`ice cream placed on ${stocks.holder[1]}`),
    );
  })

  // // step 7
  .then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`));
  })

  // // Step 8
  .then(() => {
    return order(2000, () => console.log("Serve Ice Cream"));
  })

  .catch(()=>{
    console.log("Customer left")

  })

  .finally(()=>{
    console.log("end of day")
  })

// let order = (fruit_name, call_production) => {
//   setTimeout(function () {
//     console.log(`${stocks.Fruits[fruit_name]} was selected`);

//     // function 👇 is being called
//     call_production();
//   }, 2000);
// };

// let production = () =>{

//     setTimeout(()=>{
//       console.log("production has started")
//       setTimeout(()=>{
//         console.log("The fruit has been chopped")
//         setTimeout(()=>{
//           console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
//           setTimeout(()=>{
//             console.log("start the machine")
//             setTimeout(()=>{
//               console.log(`Ice cream placed on ${stocks.holder[1]}`)
//               setTimeout(()=>{
//                 console.log(`${stocks.toppings[0]} as toppings`)
//                 setTimeout(()=>{
//                   console.log("serve Ice cream")
//                 },2000)
//               },3000)
//             },2000)
//           },1000)
//         },1000)
//       },2000)
//     },1000)

//   };

// // function invocation / calling
// order(0, production);
