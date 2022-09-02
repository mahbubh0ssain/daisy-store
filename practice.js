//১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো।

const obj = {
  name: "Mahbub",
  age: 22,
  laptop: "Acer",
  mobile: "Xiaomi Redmi Note 7",
  university: "JU",
  favDish: {
    local: "Alu vorta",
    overseas: "Chinese",
    indian: "Hyaedrabadi Biriraini",
    canadian: "Turkey PIzza",
  },
  friends: ["Amina", "Rimi", "Papri", "Mun", "Najmul"],
  myFunc: function () {
    return this.mobile;
  },
};

// console.log(obj.myFunc());

const keys = Object.keys(obj.favDish);
// console.log(keys);
const values = Object.values(obj.favDish);
// console.log(values);
const entries = Object.entries(obj.favDish);
// console.log(entries);
// const con = obj.favDish;
// for (cons in con) {
//   console.log(cons);
// }
// console.log(obj);

//২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো।

const templateString = `Name is ${obj.name}. Laptop is ${obj.laptop}. Mobile is ${obj.mobile}. Fav Food is ${obj.favDish.canadian} and His Best friend is ${obj.friends[1]} `;

// console.log(templateString);

// ৩.১. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে।
noParameter = () => 89;
// console.log(noParameter());

// ৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে 17 দিয়ে ভাগ করে ভাগফল রিটার্ন করবে।

oneParameter = (number) => number / 17;
// console.log(oneParameter(89).toFixed(2));

// ৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও।

twoParameter = (num1, num2) => (num1 + num2) / 2;
// console.log(twoParameter(80, 100));

//৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।
multiLineArrowFunc = (num1, num2) => {
  const add = (num1 + 7 + (num2 + 7)) / 2;
  return add;
};

// console.log(multiLineArrowFunc(10, 20));

// ৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।

const arr = [14, 21, 28, 35, 56, 49, 70, 77, 84];
const result = arr.map((number) => number / 7);

// console.log(result);

//৫. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো।

// map() do something on a number of  array an return a new array
// forEach () do something on a number of  array  but return nothing
// filter() do something over a number of array conditionally and return all amtched number
//  find()  do something on a number of array and return only the first matched number

// ৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।

const myObj = {
  name: "Mahbub",
  age: 22,
  father: "Abu Sufian",
  mother: "Marufa Khatun",
  village: "Randhunibari",
  district: "Sirajganj",
};

const { name, father, mother } = myObj;
// console.log(name, father, mother);

// array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।

const newArr = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];
const [, balance] = newArr;
// console.log(balance);

callTheData = async () => {
  const url = `https://jsonplaceholder.typicode.com/albums`;
  const res = await fetch(url);
  const data = await res.json();
  displayData(data.slice(0, 10));
  return data.slice(0, 10);
};

displayData = async (data) => {
  const body = document.getElementById("body");
  data.forEach((info) => {
    const { id, title } = info;
    const div = document.createElement("div");
    div.innerHTML = `
    <p>Id is: ${id}</p>
      <p>Title is: ${title}</p>
  `;
    body.appendChild(div);
  });
};
