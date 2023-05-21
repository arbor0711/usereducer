async function loginHelper({username, password}){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(username==='username' && password==='password'){
                resolve()
            }else{
                reject()
            }
        }, 1000)
    })
}

export default loginHelper

