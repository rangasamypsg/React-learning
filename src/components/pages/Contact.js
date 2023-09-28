import React, { useEffect, useState } from 'react';
const Contact = () => {

        const [count,setCount] = useState(0);

        useEffect(() => {
            if(count > 10) {
                setCount(10)
            }
            if(count < 0) {
                setCount(0)
            }
        },[count])

        return (
                <div class="container">
                        <h2>Card Inc and Dec</h2>
                        <div class="card">
                                <div class="card-header">Count</div>
                                        
                                <div class="card-body" style={{ float : 'left' }}>
                                        <button className='btn btn-success' style={{ width : '10%',marginRight : '10px' }} onClick={() => setCount(count + 1)}>Increment</button>
                                        <button className='btn btn-info' style={{ width : '10%',marginRight : '10px' }} onClick={() => setCount(0)}>Reset</button>
                                        <button className='btn btn-danger' style={{ width : '10%' }} onClick={() => setCount(count - 1)}>Decrement</button>
                                </div>
                                <div class="card-footer">Count { count }</div>
                        </div>
                </div>
        )
}
export default Contact;  