import { error, json, text } from '@sveltejs/kit'
import type { RequestHandler } from '@sveltejs/kit'

export const GET =  ( ({params})=>{

    console.log('Handling get request')
    // const data = await fetch(`${params.url}`).then(data => data)
    // return data

    //some test data
    const data = {
        data:
                `
                <div>
                    <h1>hellow world</h1>
                </div>
                <El>el content</El>
                `
                ,
    }
    
    return json(data)
})satisfies RequestHandler