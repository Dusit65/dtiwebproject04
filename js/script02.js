console.log("OK👌");
console.log("111");
console.log("222");
console.log("333");
console.log("OK👌");
console.log("NO😒😂");

//variable
var a = 100;
var b = 200;
console.log(a + b);
// Scope
console.log("------------------");
{
  let e = 999;
  {
    var c = 300;
    let d = 400;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
  }
  console.log("------------------");
  console.log(e);
}
console.log(a);
console.log(b);
console.log(c);

// console.log(e)
const DATA_A1 = 52;
const INFO1 = "wow";
const INFO2 = "woo";
console.log(INFO1 + "@@@" + INFO2);
console.log("SAU\nDTI\t\t2023");
console.log("I love SAU");
console.log("I love 'SAU'");
console.log("สวัสดี %s %d", INFO1 , DATA_A1);

//const เหมือน let
{
    {
        const INFO3 ="wee"
        console.log(INFO3)
    }
    // console.log(INFO3); error
}
// console.log(INFO3); error
console.log(`welcome,,,,,`)
let yourname = "สมชาย"
let year = 2000
let age = 15

console.log("สวัสดี" + yourname + 'คุณเกิดปี' + year + "อายุ" + age)
console.log(`สวัสดี${yourname}คุณเกิดปี${year}อายุ${age}`)

//string method
let data ='   Southeast Asia University'
console.log(data)
console.log(data.length)
console.log(data.trim().length)
console.log(data.toLowerCase())
console.log(data.toUpperCase())
console.log(data.substring(10))
           //0123456789
let data2 = 'Welcome To'
console.log(data2.substring(5))
console.log(data2.substring(3,7))
console.log(data2.repeat(5))
console.log(data2.replace('To','To Thailand'))
console.log(data.replaceAll('e','xxx'))