import React, { useState } from 'react'
function Show() {
    const [show, setShow] = useState(false)
    return (
        <div className="App">
            {
                show ? <h1>Hello World !</h1> : null
            }

            <button onClick={() => setShow(!show)} style={{marginTop:'20px'}}>Toggle</button>
        </div>
    );
}

export default Show;