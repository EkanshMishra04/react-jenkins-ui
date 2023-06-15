import React, { useEffect, useState } from 'react';
import UrlComponent from './UrlComponent';
import Responses from './Responses';
import "./getHelm.css";
import axios from 'axios';
import { DELETION_ERROR, NO_RECORD_FOUND } from '../../constants/Constants';


const DeleteJenkinsController = () => {
    const [namespace, setNamespace] = useState('default');
    const [podName, setPodName] = useState('');
    const [response,setResponse] = useState('');
    const [error,setError] = useState('');
    const [showError,setShowError] = useState(false);

    const clear = () => {
        setNamespace('default');
        setPodName('');
        setResponse('');
    }

    const executeRequest = () => {
        // delete from default url
        axios.get(`http://localhost:8085/${namespace}?name=${podName}`)
        .then((response) => {
            const id = response.data[0].id;
            axios.delete(`http://localhost:8085/default/${id}`)
            .then((resp)=>{
                // console.log(resp);
                setResponse(resp.status+" Deletion Success")
                setShowError(false)
            })
            .catch((error) => {  
                setError(DELETION_ERROR+" "+NO_RECORD_FOUND)  
                setShowError(true)
                setResponse('')
              });   
            
          })
          .catch((error) => {   
            setError(DELETION_ERROR+" "+NO_RECORD_FOUND)  
            setResponse('')
            setShowError(true)
          });       
          
        //delete from helm url
        axios.get(`http://localhost:8085/helm?name=${podName}`)
        .then((response) => {
            const id = response.data[0].id;
            axios.delete(`http://localhost:8085/helm/${id}`)
            .then((resp)=>{
                // console.log(resp);
                setResponse(resp.status+" Deletion Success")
                setShowError(false)
            })
            .catch((error) => {  
                setError(DELETION_ERROR+" "+NO_RECORD_FOUND)  
                setShowError(true)
                setResponse('')
              });   
            
          })
          .catch((error) => {   
            setError(DELETION_ERROR+" "+NO_RECORD_FOUND)  
            setResponse('')
            setShowError(true)
          });   
    }

    return (
        <div className='main-container'>
            <div className="classA"><h4>DELETE JENKINS CONTROLLER</h4></div>
            <div className='classB'>
                <div classname="classB1" ><UrlComponent method="POST" uri="/delete_jenkins_controller" detail="Delete jenkins" /></div>
                <div classname="classB2">
                    <div className='main-container-parameter'>
                        <div className='col-lg-12'>
                            <div className='paramA '>
                                <div style={{ marginLeft: '10px' }}><label><strong>name</strong></label></div>
                                <div style={{ marginLeft: '60px' }}><label><strong>description</strong></label></div>
                            </div>
                            <hr />
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div style={{marginTop:'10px'}}><label><strong>Namespace</strong></label></div>
                                    <div style={{marginTop:'10px'}}><label><strong>PodName</strong></label></div>
                                </div>
                                <div className='col-md-6'>
                                    <div style={{marginTop:'10px'}}><input  type="text" value={namespace}
                                    // onChange={(e) => setNamespace(e.target.value)}
                                    
                                    readOnly /></div>
                                    <div style={{marginTop:'10px'}}><input  type="text" value={podName} onChange={(e) => setPodName(e.target.value)} /></div>
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
                    {
                        showError?<Responses data={error}/>:<Responses data={response} />
                    }
                </div>
            </div>
        </div>
    )
}

export default DeleteJenkinsController;

