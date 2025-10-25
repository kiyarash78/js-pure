
// function say() { console.log("Hello"); }
// say();

///////////////////////////////////////

// function showName() {
//   console.log("Name:", this.name);
// }

// const user = { name: "KiāRash 👑", show: showName };
// user.show();

// const other = { name: "Arya" };
// showName.call(other);

/////////////////////////////////////////////////////////


// const user = { name: "KiāRash 👑" };

// function showName() {
//   console.log("Name:", this.name);
// }

// // showName.call(user); 
// console.log(showName(user));


///////////////////////// fetch ///////////////////////////////////////


// شبیه مثال شبکه ولی برای فهم Promise
// function getUser() {
//   // فرض کنیم fetch یه مسیر داره (الکی برای تمرین)
//   return fetch("https://jsonplaceholder.typicode.com/users/3")  // یه سایت تستیه که اطلاعات کاربر الکی میده
// }

// getUser()
//   .then((response) => {
//     console.log("✅ مرحله ۱: پاسخ سرور رسید (اما هنوز متن JSON نیست)");
//     return response.json();  // اینجا داده هنوز در قالب streamه، باید تبدیل بشه به Object
//   })
//   .then((data) => {
//     console.log("✅ مرحله ۲: داده تبدیل شد به شیء جاوااسکریپتی");
//     console.log("🌍 نام کاربر:", data.name);
//     console.log("📧 ایمیل:", data.email);
//     console.log('یزرنیم:', data.username);
//   })
//   .catch((error) => {
//     console.log("❌ خطا در درخواست:", error);
//   });


////////////////////////////// fetch /////////////////////////////////////////

// async function getUser() {
//   try {
//     console.log("🚀 Starting request to server...");

//     // Step 1: Send request and wait for server response (still not JSON)
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/3");
//     console.log("✅ Step 1: Server response received (still raw data)");

//     // Step 2: Convert raw response to JSON object
//     const data = await response.json();
//     console.log("✅ Step 2: Data converted to JavaScript object");

//     // Step 3: Display final output
//     console.log("🌍 User name:", data.name);
//     console.log("📧 Email:", data.email);
//     console.log("🏙️ City:", data.address.city);
//   } catch (error) {
//     console.log("❌ Error in request:", error);
//   }
// }

// // Run function
// getUser();


/////////////////////////////////////////////////////////////////////////////////////

// async function getPosts() {
//   console.log("🚀 Starting request to server...");
  
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     console.log("✅ Step 1: Response received");

//     const posts = await response.json();
//     console.log("✅ Step 2: Converted to JSON");

//     console.log('post1:', posts.title)
//   }catch(error) {
//     console.log("error dad nashod", error)
//   }
// }

// getPosts()

/////////////////////////////////////////////////////////////////////////////////////////

// async function getPosts() {
  // console.log("🚀 Starting request to server...");

//   try {
//     // مرحله ۱️⃣: درخواست به سرور
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     console.log("✅ Step 1: Response received");

//     // مرحله ۲️⃣: تبدیل به آبجکت JS
//     const posts = await response.json();
//     console.log("✅ Step 2: Converted to JSON");

//     // مرحله ۳️⃣: نمایش چند پست اول برای تست
//     console.log("📦 Equation: posts[0].title");
//     console.log("→ Result:", posts[0].title);

//     console.log("📦 Equation: posts[1].title");
//     console.log("→ Result:", posts[1].title);

//     console.log("📦 Equation: posts[2].title");
//     console.log("→ Result:", posts[2].title);
//   } catch (error) {
//     console.log("❌ Error in request:", error);
//   }
// }

// // اجرای تابع
// getPosts();


///////////////////////////////// forEach Loop /////////////////////////////////////////////

// const names = ["KiāRash", "Amin", "Sara", "Mahan"];

// // حلقه forEach روی آرایه
// names.forEach((item, index) => {
//   console.log("📦 Equation: names[index]");
//   console.log(`→ Result [${index}]:`, item);
// });


///////////////////////////// forEach loop /////////////////////////////////////////////

// const names = ["KiāRash", "Amin", "Sara"];

// names.forEach(function(current, i, arr) {
//   console.log(`${i}: ${current}`);
//   console.log(`${arr}`);
// });

///////////////////////////// forEach loop /////////////////////////////////////////////


// حلقه با سه پارامتر: item, index, array
// names.forEach((item, index, array) => {
//   console.log("🧠 Equation → callback(item, index, array)");
//   console.log(`→ Result [${index + 1}]:`, item);
//   console.log("→ Full array context:", array);
//   console.log("──────────────");
// });

////////////////////////////// forEach ////////////////////////////

// const names = ["KiāRash", "Amin", "Sara"];

// names.forEach((item, index, arr) => {
//   console.log(`→ Engine injected automatically →`, item, index, arr);
// });

////////////////////////////// forEach loop faghat meghdar ////////////////////////////////////////

// یه آرایه ساده از اسم‌ها
// const names = ["KiāRash", "Amin", "Sara"];

// // حلقه forEach می‌گه: برای هر اسم، تابع منو اجرا کن.
// names.forEach((name) => {
//   console.log("→ Result:", name);
// });

////////////////////////////// forEach loop parametr dovom shomare meghdar////////////////////////////////////////

// const names = ["KiāRash", "Amin", "Sara"];

// names.forEach((name, index , arr) => {
//   console.log(index);
//   console.log(name);
//   console.log(arr);
// });


////////////////////////////////////////////////////////////////////////////////////

// async function getPosts() {
//   console.log("🚀 Starting request to server...");
  
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     console.log("✅ Step 1: Response received");

//     const posts = await response.json();
//     console.log("✅ Step 2: Converted to JSON");

//     // نمایش همه title ها به‌صورت لوپ ساده
//     console.log("📦 Equation: posts[i].title");
//     posts.forEach((post, i) => {
//       console.log(`→ Result [${i + 1}]:`, post.title);
//     });

//   } catch (error) {
//     console.log("❌ Error in request:", error);
//   }
// }

// getPosts();

//////////////////////////////method map//////////////////////////////////

// const names = ["KiāRash", "Amin", "Sara"];

// // معادله ذهنی
// // newArray = names.map((name) => transformedValue)

// const shoutNames = names.map((name) => {
//   return name.toUpperCase(); // تبدیل به حروف بزرگ
// });

// console.log("→ Result new array:", shoutNames);

//////////////////////////////// method map ////////////////////////////////////////


// const names = ["kiyarash", "amin", "mohsen"];
// const newNames = names.map((name) => {return name});

// console.log("result:", newNames);

//////////////////////////////////////////////////////////////////

// const names = ["kiyarash", "amin", "mohsen"];

// names.forEach((name) => {
//   console.log(name);
// });



//////////////////////////////// method map ////////////////////////////////////////

// const names = ["KiāRash", "Amin", "Sara"];

// const newNames = names.map(function(current, i, arr) {
//   return current.toUpperCase();
// });

// console.log(newNames);
// console.log(names);

//////////////////////////////// method map ////////////////////////////////////////

// const names = ["KiāRash", "Amin", "Sara"];

// const newNames = names.map(function(current, i, arr) {
//   console.log('Current:', current);
//   console.log('Index:', i);
//   console.log('Array:', arr);
//   console.log('----------------');

//   return current.toUpperCase();
// });

// console.log("→ Result newNames:", newNames);

//////////////////////////////// method map ////////////////////////////////////////

// const users = [
//   { name: "KiāRash", age: 28 },
//   { name: "Amin", age: 30 },
//   { name: "Mohsen", age: 26 },
// ];

// const names = users.map((user) => user.name);

// console.log("→ Result:", names);

/////////////////////////////////// ya ///////////////////////////////////

// const users = [
//   { name: "KiāRash", age: 28 },
//   { name: "Amin", age: 30 },
//   { name: "Mohsen", age: 26 },
// ];

// const names = users.map((user) => { return user.name});

// console.log("→ Result:", names);

//////////////////////////// method map ///////////////////////////////////////////

// const users = [
//   { name: "KiāRash", age: 28 },
//   { name: "Amin", age: 30 },
//   { name: "Mohsen", age: 26 },
// ];

// const names = users.map((user) => user.name);

// console.log("→ Result:", names);

//////////////////////////// method map ///////////////////////////////////////////

// const users = [
//   { name: "KiāRash", age: 28 },
//   { name: "Amin", age: 30 },
//   { name: "Mohsen", age: 22 },
// ];

// const youngUsers = users.filter((user) => user.age < 25);

// console.log("→ Result:", youngUsers);

//////////////////////////// method map ///////////////////////////////////////////

// const users = [
//   { name: "KiāRash", age: 28 },
//   { name: "Amin", age: 30 },
//   { name: "Mohsen", age: 22 },
// ];

// const targetUser = users.find((user) => user.age > 25 && user.age < 29);

// console.log("→ Result:", targetUser);

/////////////////////////////// reduce //////////////////////////////////////////////////////


// const names = ["KiāRash", "Amin", "Mohsen"];

// const joinedNames = names.reduce((total, name) => {
//   return total + " & " + name;
// });

// console.log("→ Result:", joinedNames);


/////////////////////// new object in js pure(vanilla) //////////////////////////

// function User(name, age) {
//   this.name = name;
//   this.age = age;

//   this.showInfo = function() {
//     console.log("→ Name:", this.name);
//     console.log("→ Age:", this.age);
//   };
// }

// const user1 = new User("KiāRash", 28);
// user1.showInfo();

//////////////////////////////// Function Declaration //////////////////////////

// function sayHello(name) {
//   console.log("→ Hello,", name);
// }

// sayHello("KiāRash");


/////////////////////////////////// Function Declaration /////////////////////////////

// function sayHello(name, family) {
//   console.log({ name, family });
// }

// sayHello("KiāRash", "mahmoodnahrani");

/////////////////////////////////// Expression /////////////////////////////

// const sayHi = function(name) {
//   console.log("→ Hi", name);
// };

// sayHi("Amin");

/////////////////////////////////// Arrow Function (ES6+) /////////////////////////////////////////


// const greet = (name) => {
//   console.log("→ Greetings,", name);
// };

// greet("Sara");

///////////////////////////////////////// async back end nodejs///////////////////////////////////////////////////////

// async function safeFetch(id) {
//   try {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     if (!res.ok) throw new Error(`HTTP ${res.status}`);
//     const data = await res.json();
//     console.log("→ Result:", data.title);
//   } catch (err) {
//     console.error("→ Error:", err.message);
//   }
// }
// safeFetch(5);
















/////////////////////////////////////////////////////////////////////////////////////////


// شبیه مثال شبکه ولی برای فهم Promise
// function getUser() {
//   // فرض کنیم fetch یه مسیر داره (الکی برای تمرین)
//   return fetch("https://jsonplaceholder.typicode.com/users/3")  // یه سایت تستیه که اطلاعات کاربر الکی میده
// }

// getUser()
//   .then((response) => {
//     console.log("✅ مرحله ۱: پاسخ سرور رسید (اما هنوز متن JSON نیست)");
//     return response.json();  // اینجا داده هنوز در قالب streamه، باید تبدیل بشه به Object
//   })
//   .then((data) => {
//     console.log("✅ مرحله ۲: داده تبدیل شد به شیء جاوااسکریپتی");
//     console.log("🌍 نام کاربر:", data.name);
//     console.log("📧 ایمیل:", data.email);
//     console.log('یزرنیم:', data.username);
//   })
//   .catch((error) => {
//     console.log("❌ خطا در درخواست:", error);
//   });


////////////////////////////// fetch /////////////////////////////////////////


// async function getUser() {
//   try {
//     console.log("🚀 Starting request to server...");

//     // Step 1: Send request and wait for server response (still not JSON)
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/3");
//     console.log("✅ Step 1: Server response received (still raw data)");

//     // Step 2: Convert raw response to JSON object
//     const data = await response.json();
//     console.log("✅ Step 2: Data converted to JavaScript object");

//     // Step 3: Display final output
//     console.log("🌍 User name:", data.name);
//     console.log("📧 Email:", data.email);
//     console.log("🏙️ City:", data.address.city);
//   } catch (error) {
//     console.log("❌ Error in request:", error);
//   }
// }

// // Run function
// getUser();

//////////////////////////////// fetch posts ///////////////////////////////////////////////////////

// async function createPost() {
//   const postData = {
//     title: "My first post",
//     body: "Hello KiāRash 👑",
//     userId: 1
//   };

//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",                        // نوع درخواست
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(postData)         // تبدیل شیء JS به رشته JSON
//     });

    // if (!res.ok) throw new Error(`HTTP ${res.status}`);

//     const data = await res.json();          // پاسخ به JSON تبدیل می‌شود
//     console.log("→ Result:", data);
//   } catch (err) {
//     console.error("→ Error:", err.message);
//   }
// }

// await createPost();

/////////////////////////////////////////////////////////////////////////////////////

// function makeUser(name) {
//   let age = 0;                  // در حافظه‌ی داخلی تابع ذخیره می‌شود (Closure)

//   const user = { name, age };   // Object Literal
//   const clone = { ...user };    // Spread Copy سطحی

//   clone.name = "Modified";      // تغییر در Clone نباید روی user اثر بگذارد
//   age++;                        // تغییر در Closure نباید در آبجکت دیده شود (چون Primitive)

//   return function summary() {
//     console.log("--- Memory Check ---");
//     console.log("user.name →", user.name);
//     console.log("clone.name →", clone.name);
//     console.log("age (closure var) →", age);
//   };
// };

// const logger = makeUser("KiāRash 👑");
// logger(); // → Result: ...

// // عملیات اضافی برای تست reference behavior:
// const arrA = [{ id: 1 }, { id: 2 }];
// const arrB = [...arrA];          // Spread سطحی
// arrB[0].id = 999;                // تغییر در عنصر مشترک → Reference
// console.log("arrA[0].id →", arrA[0].id);

///////////////////////////////////////////////////////////////////////////////////

// const numbers = [1, 2, 3];
// const copy = [...numbers, 4]; // کپی آرایه

// console.log(copy); 

//////////////////////////////////////////////////////////////////////////////////////

// const base = { role: "Developer", city: "Tehran" };
// const extra = { age: 28, name: "Kiarosh" };

// const merged = { ...base, ...extra };

// console.log(merged);

////////////////////////// arguman ////////////////////////////////////////////////////////////

// function greet(message) {
//   console.log(message);
// }

// // "Hello Kiarosh" اینجا آرگومان واقعیه
// greet("Hello Kiarosh");

/////////////////////////////////////////////////////////////////////////////////////////////


const prices = [100, 200, 300];

// forEach: sum side-effect
let total = 0;
prices.forEach(p => total += p);
console.log(total);      // → 600

// map: make transformed array
const withTax = prices.map(p => p * 1.09);
console.log(withTax);    // → [109, 218, 327]

