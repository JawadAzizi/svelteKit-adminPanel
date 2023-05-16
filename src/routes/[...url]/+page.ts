import type {PageLoad} from './$types'

export const load =  (async({params})=>{
    // const data = await fetch(`${params.url}`).then(data => data)
    // return data


    //some test data
    const data = 
    `
    <div>
        <h1>hellow world</h1>
    </div>
    `
    return data
})satisfies PageLoad