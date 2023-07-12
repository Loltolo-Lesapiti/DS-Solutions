
// Promise that returns a result after a certain time out.

const newPromise= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("All done");
    })
})

//Creating an asynchrounius function.
const asyFunc= async()=>{
    const message= await newPromise;
    console.log(message);
}

asyFunc();

