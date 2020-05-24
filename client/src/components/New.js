import React, { useState } from "react"
import axios from "axios"
import { navigate, Link } from "@reach/router"

const New = props => {

    const { flag, setFlag } = props
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [status] = useState("")
    const [errors, setErrors] = useState([])

    const onSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/project", {
            name: name,
            date: date,
            status: status
        })
            .then(response => {
                console.log(response)
                if (flag){setFlag(false)}
                else{setFlag(true)}
                navigate("/")
            })
            .catch(err =>{
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return(
        
        <div className="row">
            <div className="col-12">
                <p style={{color:"blue", marginRight:"90px", fontSize:"14px"}}><Link to="/">Back to Dashboard</Link></p>
            </div>
                <div className="col-10 offset-1" style={{border: "2px solid lightgrey", borderRadius: "7px"}}>
                    <div className="row">
                        <div className="col-12"> 
                            <br></br>
                            <h3 style={{margin:"0px 0px 0px 0px", backgroundColor:"white"}}>Plan a new Project</h3>
                            <br></br>
                        </div>
                            <div className="col-12">
                                <form onSubmit={ onSubmit }>
                                    <div className="form-group">
                                        <label>Project:&nbsp;
                                        {
                                            errors.map((err, index) => <small key={index} style={{color:"red"}}>{err}</small>)
                                        }
                                        </label>
                                        <input onChange={e=>setName(e.target.value)} type="text" placeholder= "Title of your project" className="form-control"/>
                                    </div>
                                        <div className="form-group">
                                            <label>Due Date:</label>
                                            <input onChange={e=>setDate(e.target.value)} type="text" placeholder= "06/05/2020" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Status:</label>
                                            <input onChange={e=>setDate(e.target.value)} type="text" placeholder= "Number here please:  0 = Backlog,  1 = In Progress, and 2 = Completed"className="form-control"/>
                                        </div>
                                        <div className="form-group text-right">
                                            <button className="btn btn-success" style={{width: "140px"}}>Plan Project</button>
                                        </div>
                                </form>
                            </div>
                    </div>
                </div>
        </div>
        
    )
}

export default New