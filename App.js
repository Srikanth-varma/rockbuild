import axios from "axios";
import React,{useEffect,useState} from "react";
import './App.css';

function App() {
  // const [data,setdata]=useState('');
  const [data, setdata] = useState({

    id:'',
    title:""

  }
  );

  // useEffect(() => {
  //   axios.get("http://localhost:3002/items/srikanth").then((response) => {
  //      console.log(response.data);
  //     // var b=JSON.stringify(response.data);
  //     // var str = b.replace(/\\/g, '');
  //     // console.log(str);
  //   });
  // }, []);
 const handleChanger=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
  }
  const submitHandler=(e)=> {
    e.preventDefault();

  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ data })
  // };
    console.log("data",JSON.stringify(data))
    axios.post("http://localhost:8000/items",data )
    .then(response => console.log(response.data))
    // .then(data => console.log(data))
      .catch((err)=>(console.error(err)));
  }

  // if (!post) return "No post!"


  return (
    <div>
      <form onSubmit={submitHandler}>
    {/* <h1>{post.title}</h1>
    <p>{post.body}</p> */}
    <input type="text" name="id"  onChange={handleChanger}></input>
    <input type="text" name="title"  onChange={handleChanger}></input>
    {/* <button onClick={createPost}>Create Post</button> */}
    <input type="submit" value="Submit" />
    </form>
    {/* <p>{data.body}</p> */}
  </div>
  );
}

export default App;
