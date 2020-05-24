import React, {useState, useEffect} from "react"
import axios from "axios"
import { Link } from "@reach/router"

const Show = props => {
    const { id, i, counter, setCounter, statusCounter, setStatusCounter } = props
    const [project, setProject] = useState([])
    const [projects, setProjects] = useState([])

    useEffect( () => {
        axios.get("http://localhost:8000/api/projects")
            .then(response => {
                let allProjects = response.data.Projects
                // if(response.data.Projects.date) > Date.now()
                setProjects(allProjects)
            })
            // .then( response => {
            //     let newDate = response.data.project.date.toDateString('monthIndex [, day, year [[[[]]]]]')
            //     setProject.date(newDate)
            // })
            // .then( response =>{
            //     let allDates = response.data.date.aggregate(
            //     [
            //       {
            //         '$project:{month: { $month: "$date" },day: { $dayOfMonth: "$date" }, year: { $year: "$date"'},
            //     }
            //       }
            //     ]
            //  )
            .then(response => {
                let Date = response.data.date.format('[MM-DD-YYYY]')
            })
            .then(response => {
                let Date = response.data.date.toDateString('monthIndex [, day, year [[[[]]]]]')
            })
                // setProjects((response.data.Projects.date).OrderByDescending((a,b) => (a.date > b.date) ? 1: -1)))
                // if(response.data.Project.date) >= Date.now()
                //     .then (style= {{ fontColor:"red"}})
            .catch(error => console.log("Houston we have a was an issue: ", error))
    }, [counter])
    
    // OrderByDescending(x => DateTime.Parse(x.GetProperty("date").Value));
    const date = project =>{
        date = Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: '2-digit',  
            year: 'numeric'}).format(date); 
    }
    const getProjectById = project => {
        return `/${project._id}`
    }

    const getDatebyID = project => {
        return `/${project._date}`
        .then (date =>  new Date('Thu Dec 29 2011 20:14:56 GMT-0600 (CST)'))
        .then (date => new date.toDateString())
    }

    const progressProject = project_id => {
        axios.onClick('backlogCol" {project_id}')
            .then (response => setProject('${project_id}).appendTo(("inProgressCol")'))
            .then(()=> setCounter( {count: -1} ))
            .catch(error => console.log("Houston! We have a problem with data progressing out of backlog!", error))
    }

    const completedProject = project_id => {
        axios.onClick('"inProgressCol" {project_id}')
            return ('${project_id}.appendTo("completedCol")')
    }

    const deleteProject = url => {
        axios.delete("http://localhost:8000/api/projects" + url)
            .then(response => console.log("Project has been removed ", response))
            .then(()=> setCounter( {count: -1} ))
            .catch(error => console.log("Houston! We have a deletion problem! ", error))
    }
    
    const onClick = e => {
        if (id === "0"){
            axios.put(`http://localhost:8000/api/project/${e.target.value}`, {
                backLog: e.target.name                            
            })
                .then(response => {
                    if (statusCounter === false){setStatusCounter(true)}
                    else { setStatusCounter(false) }
                })
                .catch(error => console.log("Houston! We have a placement problem.", error))
        }
        else if (id === "1"){
            axios.put(`http://localhost:8000/api/project/${e.target.value}`, {
                inProgress: e.target.name                            
            })
                .then(response => {
                    if (statusCounter === false){setStatusCounter(true)}
                    else { setStatusCounter(false) }
                })
                .catch(error => console.log("Houston! We have a placement problem.", error))
        }
        else if (id === "2"){
            axios.put(`http://localhost:8000/api/project/${e.target.value}`, {
                completed: e.target.name                            
            })
                .then(response => {
                    if (statusCounter === false){setStatusCounter(true)}
                    else { setStatusCounter(false) }
                })
                .catch(error => console.log("Houston! We have a placement problem.", error))
        }
    }

    const getStatus = project => project[`${id}Status`]

    const getProgressButton = project => {
        let status = getStatus(project)
        if (status === "backLog"){
            return(
                <div>
                    <button onClick={onClick} className="btn btn-lg btn-block btn-outline-primary" style= {{backgroundColor: "yellow", border:"2px solid yellow", color:"black"}} value={project._id} name="backLog">Start Project &nbsp; ></button>
                </div>
            )
        }
        else if (status === "inProgress"){
            return(
                <div>
                    <button onClick={onClick} className="btn btn-lg btn-block btn-outline-primary" style= {{backgroundColor: "yellow",border:"2px solid yellow", color:"black"}} value={project._id} name="inProgess">Move to Completed &nbsp; ></button>
                </div>
            )
        }
        else {
            return(
                <div>
                    <button onClick={onClick} className="btn btn-lg btn-block btn-outline-primary" value={project._id} style={{backgroundColor: "orange", border:"2px solid orange", color:"black"}} name="completed">Completed &nbsp; ></button>
                </div>
            )
        }
        
    }

    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="container">
                    <div className="card-deck mb-3 text-center">
                        <div className="card mb-4 shadow-sm">
                        <div className="card-header" style={{backgroundColor: "lightblue"}}>
                            <h4 className="my-0 font-weight-normal">Backlog</h4>
                        </div>
                        <div className="card-body">
                            {
                            projects.map( (project, i) => (
                                <tr key={i}>
                                        
                                    <h1 class="card-title pricing-card-title">{project.name}</h1>
                                        <ul class="list-unstyled mt-3 mb-4">
                                            <li>Due:&nbsp;{project.date}</li>
            
                                            <li>Status:&nbsp;{project.status}</li>
                                            
                                            {/* { getProgressButton(project) } */}
                                        </ul>
                                    <button onClick={ (e)=>{progressProject(getProjectById(project.status))} } className="btn btn-lg btn-block btn-outline-primary" style= {{backgroundColor: "yellow",border:"2px solid yellow", color:"black"}}>Start Project&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;></button>                                                
                                    <hr/>
                                </tr>
                                ))
                            }
                                <div>
                                    {/* <tbody>
                                    {
                                        projects.map( (project, i) => 
                                            <tr key={ i }>
                                                { getProgressButton(project) }
                                            </tr>
                                        )
                                    }
                                    </tbody> */}
                                </div>
                                
                        </div>
                            <hr/>
                            <h1 class="card-title pricing-card-title">{project.name}</h1>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>Due:&nbsp;{project.date}</li>
                                    <li>Status:&nbsp;{project.status}</li>
                                </ul>
                            <button onClick={ (e)=>{progressProject(getProjectById(project))} } className="btn btn-lg btn-block btn-outline-primary" style= {{backgroundColor: "yellow",border:"2px solid yellow", color:"black"}}>Start Project&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;></button>                                               
                            <hr/>
                            <h1 class="card-title pricing-card-title">{project.name}</h1>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>Due:&nbsp;{project.date}</li>
                                    <li>Status:&nbsp;{project.status}</li>
                                </ul>
                            <button onClick={ (e)=>{progressProject(getProjectById(project))} } className="btn btn-lg btn-block btn-outline-primary" style= {{backgroundColor: "yellow",border:"2px solid yellow", color:"black"}}>Start Project&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;></button>  
                            <hr/>
                        </div>
                        <div class="card mb-4 shadow-sm">
                            <div class="card-header" style={{backgroundColor:"lightyellow"}}>
                                <h4 class="my-0 font-weight-normal">In Progress</h4>
                            </div>
                            <div class="card-body">
                                <h1 class="card-title pricing-card-title">{project.name}</h1>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>Due:&nbsp;{project.date}</li>
                                    <li>Status:&nbsp;{project.status}</li>
                                </ul>
                                <button onClick={ (e)=>{completedProject(getProjectById(project))} } className="btn btn-lg btn-block btn-outline-primary" style={{backgroundColor: "lightgreen", border:"2px solid lightgreen", color:"black"}}>Move to Completed&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;   ></button>
                                <hr/>
                            </div>
                            <div class="card-body">
                                <h1 class="card-title pricing-card-title">{project.name}</h1>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>Due:&nbsp;{project.date}</li>
                                    <li>Status:&nbsp;{project.status}</li>
                                </ul>
                                <button onClick={ (e)=>{completedProject(getProjectById(project))} } className="btn btn-lg btn-block btn-outline-primary" style={{backgroundColor: "lightgreen", border:"2px solid lightgreen", color:"black"}}>Move to Completed&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;></button>
                                <hr/>
                            </div>
                            
                            <div class="card-body">
                                <h1 class="card-title pricing-card-title">{project.name}</h1>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>Due:&nbsp;{project.date}</li>
                                    <li>Status:&nbsp;{project.status}</li>
                                </ul>
                                <button onClick={ (e)=>{completedProject(getProjectById(project))} } className="btn btn-lg btn-block btn-outline-primary" style={{backgroundColor: "lightgreen", border:"2px solid lightgreen", color:"black"}}>Move to Completed&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;></button>
                                <hr/>
                            </div>
                            </div>
                            <div class="card mb-4 shadow-sm">
                            <div class="card-header" style={{backgroundColor:"lightgreen"}}>
                            <h4 class="my-0 font-weight-normal">Completed</h4>
                            </div>
                            <div class="card-body">
                                <h1 class="card-title pricing-card-title">{project.name}</h1>
                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li>Due:&nbsp;{project.date}</li>
                                        <li>Status:&nbsp;{project.status}</li>
                                    </ul>
                                <button onClick={ (e)=>{deleteProject(getProjectById(project))} } className="btn btn-lg btn-block btn-outline-primary"  style={{backgroundColor: "orange", border:"2px solid orange", color:"black"}}>Remove Project&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;></button> 
                                <hr/>
                            </div>
                            <div class="card-body">
                            <h1 class="card-title pricing-card-title">{project.name}</h1>
                        <ul class="list-unstyled mt-3 mb-4">
                        <li>Due:&nbsp;{project.date}</li>
                        <li>Status:&nbsp;{project.status}</li>
                        </ul>
                        <button onClick={ (e)=>{deleteProject(getProjectById(project))} } className="btn btn-lg btn-block btn-outline-primary"  style={{backgroundColor: "orange", border:"2px solid orange", color:"black"}}>Remove Project&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;></button> 
                        <hr/>
                    </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">{project.name}</h1>
                                <ul class="list-unstyled mt-3 mb-4">
                                <li>Due:&nbsp;{project.date}</li>
                                <li>Status:&nbsp;{project.status}</li>
                                </ul>
                                <button onClick={ (e)=>{deleteProject(getProjectById(project))} } className="btn btn-lg btn-block btn-outline-primary"  style={{backgroundColor: "orange", border:"2px solid orange", color:"black"}}>Remove Project&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;></button> 
                                <hr/>
                        </div>
                    </div>
                    </div>
                        <button style = {{backgroundColor:"lightBlue", marginBottom:"600px", color:"black", borderDecoration:"none", marginLeft:"10px", borderRadius:"6px" }}><Link to="/"> + Add New Project</Link></button>
                    </div>
                </div>
            </div>
        )
    }

export default Show