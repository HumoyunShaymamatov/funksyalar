"use strict";
// const firstName = "Humoyun";
// console.log(firstNmae);
// console.log(4 * 8 * 9);
// console.log("firstName");
// console.log(firstName);
// console.log(firstName);
// console.log(null, typeof null);
// let x = 4;
// console.log(typeof "");
// if (`Humoyun`) {
//   console.log(firstName);
// } else if (false) {
//   console.log(x);
// } else {
//   console.log("string");
// }
// switch (x) {
//   case 1:
//     console.log("congratulations");
//     break;
//   case 5:
//     console.log("you Found the answer");
//     break;
//   default:
//     console.log("OK");
// }
// const word = x >= 12 ? "big" : firstName;
// console.log(word);
// const age = 18;
// console.log(`I like to vote ${age > 34 ? "myself" : "my friend"}`);
// console.log(3 === "3");
// const calcage = (birthyear) => 2021 - birthyear;
// console.log(calcage(2004));
// const myArray = ["Humoyun", "Shaymamatov", 2004, "student"];
// myArray.unshift("Bahrom o`g`li");
// console.log(myArray.length);
// const findAge = 2021 - 2004;
// myArray.push(findAge);
// // console.log(myArray.length);
// console.log(myArray.indexOf(1));
// console.log(myArray.includes(7));

// const humoyun = {
//   firstNmae: "Hummoyun",
//   lastName: "Shaymamatov",
//   birthYear: 2004,
//   job: "",
//   isEmployed: this.job ? true : false,
//   calcAge: function () {
//     return 2021 - this.birthYear;
//   },
// };
// console.log(humoyun.isEmployed);

// for (let i = 0; i < myArray.length; i++) {
//   const g = myArray[i];
//   console.log(g);
// }
// for (let i = 1; i < 6; i++) {
//   console.log(`Day ${i} went as expected`);
// }

// son topish
// function fibonacci(son) {
//   let sonlar = [];
//   if (son === 1) {
//     sonlar.push(0);
//   }
//   if (son === 2) {
//     sonlar.push(0, 1);
//   } else {
//     sonlar.push(0, 1);
//     for (let i = 3; i < son; i++) {
//       sonlar.push(sonlar[sonlar.length - 1] + sonlar[sonlar.length - 2]);
//     }
//   }
//   return sonlar;
// }
// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(5));
// console.log(fibonacci(50));
//const javob = Math.floor(Math.random() * 5 + 1);
//let tahmin = prompt("sonni kiriting");
//while (true) {
//  if (tahmin > javob) {
//    tahmin = prompt("Men oylagan son bundan kichik");
//  } else if (javob > tahmin) {
//    tahmin = prompt("Men o`ylagan son bundan katta");
//  } else {
//    alert("Siz yutdingiz");
//    break;
//  }
//}

const tubmi = function (son) {
  let tub = true;
  const ildiz = Math.floor(Math.sqrt(son));
  if (son === 0) tub = false;
  else if (son === 1) tub = false;
  else if (son === 2) tub = true;
  else if (son === 3) tub = true;
  else {
    for (let i = 2; i < ildiz + 1; i++) {
      if (son % i === 0) tub = false;
    }
  }
  return tub;
};

// console.log(tubmi(0));
// console.log(tubmi(2));
// console.log(tubmi(3));
// console.log(tubmi(4));
// console.log(tubmi(5));
// console.log(tubmi(50));
// console.log(tubmi(37));
// console.log(tubmi(101));
// console.log(tubmi(111));
// console.log(tubmi(31546641441));
// def tubsonchi(son):
//     eratosfen_galviri= []
//     tub = 1
//     while len(eratosfen_galviri) < son:
//         if tubmi(tub):
//             eratosfen_galviri.append(tub)
//             tub +=1
//         else:
//             tub +=1
//     return eratosfen_galviri

const tubsonchi = function (son) {
  const eratosfenGalviri = [];
  let tub = 2;
  while (eratosfenGalviri.length < son) {
    if (tubmi(tub)) {
      eratosfenGalviri.push(tub);
      tub++;
    } else {
      tub++;
    }
  }
  return eratosfenGalviri;
};

const tubSonlarJadvali = tubsonchi(1000);
console.log(tubSonlarJadvali);
