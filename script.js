// 1. Suppose You have an array of object
// var itemsArray = [
// {name:”juice”,price:”50”, quantity:”3”},
// {name:”cookie”,price:”30”, quantity:”9”},
// {name:”shirt”,price:”880”, quantity:”1”},
// {name:”pen”,price:”100”, quantity:”2”}];
// Calculate total price of each item and all items;

// let arrayItems = [
//   { name: "juice", price: "50", quantity: "3" },
//   { name: "cookie", price: "30", quantity: "9" },
//   { name: "shirt", price: "880", quantity: "1" },
//   { name: "pen", price: "100", quantity: "2" },
// ];
// let totalbill = 0;
// for (let i = 0; i < arrayItems.length; i++) {
//   let item = arrayItems[i];
//   let itemprices = item.price * item.quantity;
//   console.log(item.name + itemprices);
//   totalbill += itemprices;
// }
// console.log(totalbill);

// 2. Create an object with properties name, email, password, age,
// gender, city, country.
// Check if age and country properties exist in object or not.
// Also check firstName and lastName properties in object.

// var user = {
//   name: "Saad Ansari",
//   email: "saad123.com",
//   password: "abcd1234",
//   age: 18,
//   gender: "male",
//   city: "karachi",
//   country: "PAKISTAN"
// };

// if ('age' in user) {
//   console.log("Property 'age' exists in the object.");
// } else {
//   console.log("Property 'age' does NOT exist in the object.");
// }

// if ('country' in user) {
//   console.log("Property 'country' exists in the object.");
// } else {
//   console.log("Property 'country' does NOT exist in the object.");
// }

// // Check if 'firstName' and 'lastName' properties exist
// if ('firstName' in user) {
//   console.log("Property 'firstName' exists in the object.");
// } else {
//   console.log("Property 'firstName' does NOT exist in the object.");
// }

// if ('lastName' in user) {
//   console.log("Property 'lastName' exists in the object.");
// } else {
//   console.log("Property 'lastName' does NOT exist in the object.");
// }


// 3. Create a constructor function with some properties. Now
// create multiple records using the constructor.

// function User(name, email, password, age, gender, city, country, Nationality) {
//   this.name = name;
//   this.email = email;
//   this.password = password;
//   this.age = age;
//   this.gender = gender;
//   this.city = city;
//   this.country = country;
// }
// User.prototype.Nationality = "Pakistani";

// let user1 = new User(
//   "Saad Ansari",
//   "m.saad123.com",
//   "abcd1234",
//   18,
//   "Male",
//   "karachi",
//   "Pakistan"
// );
// let user2 = new User(
//   "Muhammad Ummer",
//   "m.ummer123.com",
//   "abc123456",
//   20,
//   "Male",
//   "Quetta",
//   "Pakistan"
// );
// let user3 = new User(
//   "Muhammad Usman",
//   "m.usman123.com",
//   "1234abcd",
//   22,
//   "Male",
//   "Swat",
//   "Pakistan"
// );
// console.log(user1);
// console.log(user2);
// console.log(user3);
