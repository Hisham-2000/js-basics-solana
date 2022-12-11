//console.log("abcdefghhjsadk");
//console.log(2 + 3);
//console.log(typeof 121323232232321223n);
//console.log(undefined);
//console.log(null);
//
//var name = "abc";
//let name = "bcd";
//const name = "abcd";

//const a = 10,
//  b = 8;
//if (a > b) {
//  let c = 15;
//  console.log(a,c);
//} else console.log(b);
//
//console.log(c);

//const n=5;
//
//for(let i=0;i<n;i++)
//console.log(i)
//
//for(let i=0;i<n;console.log(i);i++)

//const a = ["assad", [21, 12, 1], 123, true];
//console.log(a);
//
//JSON - Javascript Object Notaion
//key-value pairs
//
//const json = {
//  name: "Git",
//  surname: "repo",
//};
//console.log(json);

//try {
//  const a = 10;
//  a = 12;
//} catch (err) {
//  console.log(err);
//}

//function square(a) {
//  return a * a;
//}
//
//console.log(square(2));

//const a=[1,2,3,4,5]
//const sq_a = a.map((e -> square(a)))
//const sq_b = a.filter((e -> square(a)))

//npm init
//download dependencies from npmjs.com
//print cowsay

var cowsay = require("cowsay");
//

const Quote = require("inspirational-quotes");

//console.log(Quote.getQuote()); // returns quote (text and author)
//console.log(Quote.getQuote({ author: false }); // return quote without author
//console.log(Quote.getRandomQuote()); // return any random quote

var quote = Quote.getRandomQuote();

console.log(
  cowsay.say({
    text: quote,
    e: "oO",
    T: "U ",
  })
);
