import {useState} from 'react';
import '../../App.css';

function Search() {
  const [val, setVal] = useState("");
  const [list, setlist] = useState(['Orange', 'Apple', 'Banana', 'Mango', 'Cherry'])
  const [list1, setList1] = useState(list)
  const filterEvent=(e)=>{
    console.log(e.target.value)
    setVal(e.target.value)
    if(e.target.value){
        let result = list1.filter((item)=> item.toLowerCase().includes(e.target.value.toLowerCase()))
        console.log("result", result)
        setlist(result)
    } 
    if(e.target.value === ""){
      setlist(list1)
    }
    // else{
    //   setlist(list1)
    // }
  }
  return (
    <div className="App" style={{ width: '190px', margin: 'auto'}}>
        <input value={val} onChange={(e)=>filterEvent(e)} style={{marginTop: '120px'}}/>
        {
          list.map((item)=>{
            return(
              <div style={{backgroundColor:'yellow',padding:'10px',border:'1px solid red',marginTop:'10px',fontSize:'16px',fontWeight:'600'}}>{item}</div>
            )
          })
        }
    </div>
  );
}

export default Search;