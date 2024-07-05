//let var and const

let m = 10
console.log(m)
m = m+10
console.log(m)
const flag = true
console.log('=================If Statement=================')

if(!flag)
    {
        console.log('If is satisfied');
    }
else
    {
        console.log('else is satisfied')
    }
//flag = false; Incorrect statment
console.log(flag)
let i =  0
console.log('=================While loop=================')
while(i<15)
    {
        console.log(i)
        i++  // i=i+1
    }
console.log(i)
// POST INCREMENT -- PRE INCREMENT
// POST DECREMENT -- PRE DECREMENT
console.log('=================Do While loop=================')
let k=1;
// var or let

do{
    
console.log(k)
i++

}while(k<10);

var inputTextFiledLocator = '#inputfield';
// let is higher preference compared to var
console.log("=================== PRINT NUMBER DIVISBLE BY 5 (1-100)==================")


let l = 1

for(l=0;l<=100;l++)
    {

        if(l%5==0)
            {
                console.log(l)
            }
    }

  /*  
while(l<=100)
    {
        if(l%5==0)
        {
                console.log(l)
        }
        l++;
    }
*/


