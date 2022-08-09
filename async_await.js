//calling a async function always returns a Promise
const asyncFunc=async()=>{
    let promise=new Promise((res,rej)=>{
        setTimeout(()=>res('Promise is resolved'),4000)
    })
    const response=await promise //await stops JS from assigning fetch to response until a promise is resolved.
    //once promise is resolved the result from fetch can be assigned to response
    console.log(response)
}

console.log(asyncFunc()) //This will return a promise
