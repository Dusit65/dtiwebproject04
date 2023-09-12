function funcA(){
    console.log("AAA")
}

funcA()
funcA()
//func have para no re
function FuncB(data1,data2){
    console.log(`${data1}ยกกำลัง${data2}เท่ากับ${data1 ** data2}`)
}

FuncB(10,2)
funcA()

//func no para have re
function FuncC(){
    console.log('WOW...')
    return 1000*2
}
console.log(FuncC())
x = FuncC()-500
console.log(x)
 
//func have para have re
function funcD(xx,yy,zz){
    // console.log()
    return xx + yy + zz
}

console.log(funcD(10,20,30))
y = funcD(1,2,3)
console.log(y)

//--------------------------------
function funcE(n1, n2, n3 = 100){
    console.log(n1 + n2 + n3)
}
funcE(200,300) //600
funcE(200,300,400)//900

//expression function
let a = 20 
 

let b = function(){
    console.log("SAU 555")
    console.log("DTI 555")
}

//arrow function
let c = ()=>{
    console.log("ok👌")
    console.log("ok👌")
}

let d = function(xxx){
    console.log(xxx + 20)
}

// let e =(num) => num * 10
//     let e = (num) => {
//         return num * 10
//     }

b()
b()
c()
d(500)
console.log(e(200))
