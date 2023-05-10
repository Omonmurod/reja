console.log("Jack Ma maslahati:");
const list = [
  "Yaxshi talaba bo'ling",  //0-20
  "To'g'ri boshliq tanlang va ko'proq xato qiling",  //20-30
  "O'zingizga ishlashni boshlang",  //30-40
  "Siz kuchli bo'lgan narsalarni qiling",  //40-50
  "Yoshlarga investitsiya qiling",  //50-60
  "Endi dam oling, foydasi yo'q endi",  //60
];

//Callback functions
function maslahatBering (a, callback) {
  if(typeof a !== 'number') callback("Insert the number please", null);
  else if(a <= 20) callback(null, list[0]);
  else if(a > 20 && a <= 30) callback(null, list[1]);
  else if(a > 30 && a <= 40) callback(null, list[2]);
  else if(a > 40 && a <= 50) callback(null, list[3]);
  else if(a > 50 && a <= 60) callback(null, list[4]);
  else {
    setInterval(function () {
      callback(null, list[5]);
    }, 1000);
  } 
} 

console.log("Passed here 0");
maslahatBering(65, (err, data) => {
  if(err) console.log('ERROR:', err);
  else {
    console.log('Javob:', data);
  }
});
console.log("Passed here 1");

//ASYNC function
// async function maslahatBering (a) {
//   if(typeof a !== 'number') throw new Error("Insert the number please");
//   else if(a <= 20) return list[0];
//   else if(a > 20 && a <= 30) return list[1];
//   else if(a > 30 && a <= 40) return list[2];
//   else if(a > 40 && a <= 50) return list[3];
//   else if(a > 50 && a <= 60) return list[4];
//   else {
//     //return list[5];
//     return new Promise ((resolve, reject) => {
//       setTimeout(() => {
//         resolve (list[5]);
//       }, 5000);
//     });
//     // setTimeout(function () {
//     //   return list[5];
//     // }, 5000);
//   } 
// } 

// Call via async/await
// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(61);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();

// //  Call via then/catch
// console.log("Passed here 0");
// maslahatBering(25)
// .then(data => {
//   console.log("Javob:", data);
// })
// .catch(err => {
//   console.log("ERROR:", err);
// });
// console.log("Passed here 1");

