let a:string="";

let b:string|number

b=1
b="1"
let c:any

c=1
c="1"

let arr1:string[]=[]
// arr1.push(1)
arr1.push("1")

let arr2:(string|number)[]=[]
arr2.push(1)
arr2.push("1")

let arr3:Array<string|number>=[]
arr3.push("1")
arr3.push(1)

let  arr4: any=[]
arr4.push(1)
arr4.push("1")
interface Student{
    name:string
    age:number
    sex?:string //可选属性
    [keyName:string]:any //任意多个属性
}

let stu:Student
stu={
    name:'yan',
    age:100
}

function test(a:number,b:number):number{
    return a+b
}

test(1,2)
