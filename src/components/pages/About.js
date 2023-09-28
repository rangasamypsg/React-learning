import React, { useState } from 'react';  
const About = () => {     
    
    const [family, setFamily] = useState(["Rangasamy","Murugan","Lakshmi","Maragatham","Aanand","dharshana","siddarth","Mythili","Keerthi"]);

    

    return  (
        <div style={{marginTop:'50px'}}>
           
        {
            family.map((item) => {
                return(
                    <div>
                       <div style={{backgroundColor:'yellow',padding:'10px',border:'1px solid red',marginTop:'5px',fontSize:'16px',fontWeight:'600',width:'30%',display:'inline',float:'left',margin:'10px'}}>{item}</div>
                    </div>
                )
            })
        }
            
        </div>
    )
}  
export default About;  