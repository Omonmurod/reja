//TASK E: shunday function tuzing unga faqat bitta musbat integer 
//argument qilib berilsin, va u ushbu argumentni tub son bolsa true 
//aksincha false return qilsin.
//Masalan: tubSonmi(5) return true, tubSonmi(10) return false.
//Tub sonlar faqat ozi va 1soniga toliq bolinadigan sonlar.
function tubSonmi (a) {
  if (a <= 1) return false;
  for (let b = 2; b < a; b++) {
    if (a % b == 0){
      return false;
    } 
  } 
  return true;
} 

const c = tubSonmi(3) 
console.log(c);









// console.log("Jack Ma maslahati:");
// const list = [
//   "Yaxshi talaba bo'ling",  //0-20
//   "To'g'ri boshliq tanlang va ko'proq xato qiling",  //20-30
//   "O'zingizga ishlashni boshlang",  //30-40
//   "Siz kuchli bo'lgan narsalarni qiling",  //40-50
//   "Yoshlarga investitsiya qiling",  //50-60
//   "Endi dam oling, foydasi yo'q endi",  //60
// ];

// // //Callback functions
// // function maslahatBering (a, callback) {
// //   if(typeof a !== 'number') callback("Insert the number please", null);
// //   else if(a <= 20) callback(null, list[0]);
// //   else if(a > 20 && a <= 30) callback(null, list[1]);
// //   else if(a > 30 && a <= 40) callback(null, list[2]);
// //   else if(a > 40 && a <= 50) callback(null, list[3]);
// //   else if(a > 50 && a <= 60) callback(null, list[4]);
// //   else {
// //     // setInterval(function () {
// //       callback(null, list[5]);
// //     // }, 1000);

// //   } 
// // } 

// // console.log("===================");
// // maslahatBering(35, (err, data) => {
// //   if(err) console.log('ERROR:', err);
// //   else {
// //     console.log('Javob:', data);
// //   }
// // });
// // console.log("===================");

// //ASYNC function
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

// //Call via async/await
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
// console.log("====================");
// maslahatBering(25)
// .then(data => {
//   console.log("Javob:", data);
// })
// .catch(err => {
//   console.log("ERROR:", err);
// });
// console.log("====================");


// // // Task D
// // class Shop {
// //   constructor(bread, pasta, cola) {
// //     this.bread = bread;
// //     this.pasta = pasta;
// //     this.cola = cola;
// //   }

// //   selled_amount(a, b, c) {
// //     this.bread = this.bread - a;
// //     this.pasta = this.pasta - b;
// //     this.cola = this.cola - c;
// //   }

// //   received_amount(a, b, c) {
// //     this.bread = this.bread + a;
// //     this.pasta = this.pasta + b;
// //     this.cola = this.cola + c;
// //   }

// //   remain_amount() {
// //     console.log(`we have: ${this.bread}pc bread, ${this.pasta}pc pasta, ${this.cola}pc cola`);
// //     return this.bread, this.pasta, this.cola;
// //   }

// // }


// // let currentTime = new Date();
// // let currentHour = currentTime.getHours();
// // let currentMinute = currentTime.getMinutes();

// // console.log("Now time is: ", currentHour + ":" + currentMinute); 
// // const remain = new Shop(4, 5, 2);
// // remain.remain_amount();

// // remain.received_amount(0, 0, 4);
// // remain.selled_amount(3,0,0);

// // console.log("Now time is: ", currentHour + ":" + currentMinute); 
// // remain.remain_amount();


