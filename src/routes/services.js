const baseURL = 'http://localhost:5173/admin'
export const load = async (url)=>{
    console.log('loading data from url: ',baseURL+url)
    const data = await fetch(baseURL+url,{
        method: "POST" ,
        headers: {'content-type': 'text/html'}
    })
    .then( val => val.json())
    .catch((error)=> console.log('error loading data: ', error))
    return data
    

}


export const request = {
    
    async get (url){
        //call get 
        const response= await fetch(baseURL+ url,{
            method: "get"
        })
        .then(res => res.json())
        .catch((e)=>  new Error(e.message))
        return response
    },
    async post (url){
        //call post 
        return await fetch(baseURL+ url,{
            method: "POST",
            headers: {'content-type' : 'application/json'},
            
        })

        .then(data => data)
        .catch((e)=>  new Error(e.message))
    },
    async edit(url){
        //call edit
        return await fetch(baseURL+ url,{
            method: "put"
        })
        .then(data => data)
        .catch((e)=>  new Error(e.message))
    },
    async delete (url){
        //call delete 
        return await fetch(baseURL+ url,{
            method: "delete"
        })
        .then(data => data)
        .catch((e)=>  new Error(e.message))
    }
}