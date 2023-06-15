import React, { useState } from 'react';
import './response.css';

const Responses = (props) => {
    const data = props.data
    const [arr, setArr] = useState(...data)
    console.log(typeof arr)
    // const printer =
    //     arr.map((item) => (
    //         <>
    //         <li>{JSON.stringify(item)}</li>
    //         <li>hello</li>
    //         </>
    //     ))
    // arr.map((item)=>{
    //     console.log('====================================');
    //     console.log(item);
    //     console.log('====================================');
    // })

    return (
        <div className='response-main-container'>
            <label>Responses</label>
            <div className='response-container'>

            {
                JSON.stringify(data)  
                // JSON.stringify(arr)  
                
                // JSON.stringify(arr)  
                // arr 

               
            } 
                {/* <ul>
                    {printer}
                </ul> */}
            </div>
        </div>
    )
}

export default Responses