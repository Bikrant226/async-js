console.log('This is the first text.') //logs immediately
console.log('This is the second text.')//logs immediately


setTimeout(() => {
   console.log('This is the third text.') 
},2000);   //logs after 2 seconds


const hello=()=>{
    console.log('Hello,I am Bikrant')
}

setTimeout(hello,4000) //logs after 4 seconds

console.log('This is the last text')//logs immediately
