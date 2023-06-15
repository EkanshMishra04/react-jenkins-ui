import React, { useEffect, useState } from 'react';
import UrlComponent from './UrlComponent';
import Responses from './Responses';
import "./getHelm.css";
import axios from 'axios';
import { BASE_URL, GET_PODS_WITH_HELM_DATA, POST_URL } from '../../constants/UrlConstants';
import { CREATION_FAILURE, CREATION_SUCCESS } from '../../constants/Constants';


const CreateJenkinsController = () => {
    const [name, setName] = useState('');
    const [labname, setLabname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [response,setResponse] = useState('');
    const [error,setError] = useState('');
    const [showError,setShowError] = useState(false);
    const [controller, setController] = useState({
        name: '',
        namespace:'default',
        revision:Math.floor(Math.random() * 11),
        updated:new Date().toString(),
        status:'deployed',
        chart:"jenkins-4.1.17",
        app_version:"2.346.3"
    });

    const clear = () => {
        setController({
            name: '',
        namespace:'default',
        revision:Math.floor(Math.random() * 11),
        updated:new Date().toString(),
        status:'deployed',
        chart:"jenkins-4.1.17",
        app_version:"2.346.3"
        })
        setName('');
        setLabname('');
        setUsername('');
        setPassword('');
        setResponse('');
        setShowError(false);

    }

    const createApi= ()=>{
        console.log(controller)
        axios.post(
            POST_URL,
            controller
        )
        .then((resp)=>{
            setResponse(resp.status+" "+CREATION_SUCCESS)
            setShowError(false)
        })
        .catch((error) => {  
            console.warn(error)
            setError(CREATION_FAILURE)  
            setShowError(true)
            setResponse('')
          }); 
          
          axios.post(
            GET_PODS_WITH_HELM_DATA,
            controller
        )
        .then((resp)=>{
            // setResponse(resp.status+" "+CREATION_SUCCESS)
            setShowError(false)
        })
        .catch((error) => {  
            // console.warn(error)
            setError(CREATION_FAILURE)  
            setShowError(true)
            setResponse('')
          }); 
    }
    const executeRequest = () => {
        if(controller.name===""){
            setError("Name cannont be blank");
            setShowError(true)
            return
        }
        setController(()=>({
            name: name,
            namespace:"default",
            revision:Math.floor(Math.random() * 11),
            updated:new Date().toString(),
            status:"deployed",
            chart:"jenkins-4.1.17",
            app_version:"2.346.3"
        }));
        
        // call for api to do both work of adding in helm list and default namespace list
        createApi(); 
        
        // set fields back to empty
        setName('');
        setLabname('');
        setUsername('');
        setPassword('');
    }

    useEffect(() => {
    }, [controller])

    return (
        <div className='main-container'>
            <div className="classA"><h4>CREATE JENKINS CONTROLLER</h4></div>
            <div className='classB'>
                <div classname="classB1" ><UrlComponent method="POST" uri="/create_new_jenkins_controller" detail="Deploy jenkins" /></div>
                <div classname="classB2">
                    <div className='main-container-parameter'>
                        <div className='col-lg-12'>
                            <div className='paramA '>
                                <div style={{ marginLeft: '10px' }}><label><strong>name</strong></label></div>
                                <div style={{ marginLeft: '60px' }}><label><strong>description</strong></label></div>
                            </div>
                            <hr />
                            <div className='row'>
                                <div className='col-md-6' style={{}}>
                                <div>
                                        <label><strong> NAME</strong></label>
                                    </div>
                                    <div>
                                        <label><strong> LABNAME</strong></label>
                                    </div>
                                    <div>
                                        <label><strong> USERNAME</strong></label>
                                    </div>
                                    <div>
                                        <label><strong> PASSWORD</strong></label>
                                    </div>
                                </div>
                                <div  className='col-md-6' >
                                <div style={{ marginLeft: '70px' }}>
                                        <input type="text" value={controller.name} onChange={(e) => {
                                            setController({...controller,name:e.target.value})
                                        }} />
                                    </div>
                                    <div style={{ marginLeft: '70px' }}>
                                        <input type="text" value={labname} onChange={e => setLabname(e.target.value)} />
                                    </div>
                                    <div style={{ marginLeft: '70px' }}>
                                        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                                    </div>
                                    <div style={{ marginLeft: '70px' }}>
                                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className='paramC'>
                                <button className='col-lg-5 btn btn-primary' onClick={() => executeRequest()}>Execute</button>
                                <button className='col-lg-5 btn btn-secondary' onClick={() => clear()}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {showError?<Responses data={error} />:<Responses data={response} />}
                </div>
            </div>
        </div>
    )
}

export default CreateJenkinsController;

