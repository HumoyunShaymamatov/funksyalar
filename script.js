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

function fibonacci(son) {
  let sonlar = [];
  if (son === 1) {
    sonlar.push(0);
  }
  if (son === 2) {
    sonlar.push(0, 1);
  } else {
    sonlar.push(0, 1);
    for (let i = 3; i < son; i++) {
      sonlar.push(sonlar[sonlar.length - 1] + sonlar[sonlar.length - 2]);
    }
  }
  return sonlar;
}

// console.log(fibonacci(50));

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

// console.log(tubmi(37));
// console.log(tubmi(101));
// console.log(tubmi(31546641441));

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

// const tubSonlarJadvali = tubsonchi(1000);
// console.log(tubSonlarJadvali);

// const arr = [3, 4, 6, 9];
// const arrCopy = [...arr];
// arrCopy[3] = 56;
// console.log(arr, arrCopy);

function ekubLight(son1, son2) {
  const sonlar = [];
  if (son1 > son2) {
    sonlar.push(son1);
    sonlar.push(son2);
  } else {
    sonlar.push(son2, son1);
  }
  if (sonlar[0] % sonlar[1] === 0) {
    return sonlar[1];
  }
  while (sonlar[0] % sonlar[1] !== 0) {
    let qoldiq = sonlar[0] % sonlar[1];
    sonlar[0] = sonlar[1];
    sonlar[1] = qoldiq;
  }
  return sonlar[1];
}

const ekub = function (...sonlar) {
  const sonlarNew = [];
  while (true) {
    while (sonlar.length !== 1 && sonlar.length !== 0) {
      const ekubNew = ekubLight(sonlar.shift(), sonlar.pop());
      sonlarNew.push(ekubNew);
    }
    if (sonlar.length === 1) {
      sonlarNew.push(sonlar.pop(0));
    }
    if (sonlarNew.length !== 1) {
      sonlar = sonlarNew;
    } else {
      break;
    }
  }
  return sonlarNew[0];
};

// const mylist = [32, 464, 80, 176];
// console.log(ekub(...mylist));

// const message = "boarding door, boarding door";
// console.log(message.replace(/door/g, "gate"));

// def linear_function(list1, list2):
//     slope = (list2[1] - list1[1])/(list2[0] - list1[0])
//     b = list1[1] - slope * list1[0]
//     if slope%1 == 0:
//         slope = int(slope)
//     if b % 1 == 0:
//         b = int(b)
//     return f'y={slope}x + {b}'
// print(linear_function(a,b))

function linearFunction(l1, l2) {
  let slope = (l2[1] - l1[1]) / (l2[0] - l1[0]);
  const b = l1[1] - slope * l1[0];
  if (slope === 1) slope = "";
  if (slope % 1 !== 0) slope = `(${l2[1] - l1[1]}/${l2[0] - l1[0]})`;
  return `y = ${slope}x ${b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`}`;
}

console.log(linearFunction([0, 1], [1, 6]));
