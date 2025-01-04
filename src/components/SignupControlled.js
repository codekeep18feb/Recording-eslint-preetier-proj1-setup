import React, {useState} from "react"


const Signup = ()=>{
    const [username, setusername] = useState("")
    console.log("here is username",username)
    return (<div>

        <h2>Signup Here</h2>
        <form>
            <label htmlFor="username">Username</label>
            <input id="username" value={username} onChange={(e)=>setusername(e.target.value)} type="number"/>
        
            <button>Submit</button>
        </form>
    </div>)
}


export default Signup