import React, { useEffect, useState } from 'react';
import UrlComponent from './UrlComponent';
import Parameters from './Parameters';
import Responses from './Responses';
import "./getHelm.css";
import axios from 'axios';
import { BASE_URL, GET_ALL_JENKINS_JOBS } from '../../constants/UrlConstants';
import { GET_FAILURE } from '../../constants/Constants';


const GetPodDetail = () => {
    const [namespace, setNamespace] = useState('default');
    const [podname, setPodname] = useState('');
    const [detail, setDetail] = useState('');
    const [error, setError] = useState('');
    const [isError,setIsError] = useState(false);

    const clear = () => {
        setDetail();
        setError('');
        setIsError(false);
    }

    const getSpecificPodDetail = () => {
        axios.get(`${BASE_URL}`+namespace+"?name="+podname)
          .then((response) => {
            if (response.data[0] != undefined) {
              setDetail(response.data);
              setIsError(false);
              setError(null);
            } else {
                setDetail();
              setError('Name or Namespace Not Selected Correctly');
              setIsError(true)
            }
          })
          .catch((error) => {
            setError(GET_FAILURE);
            setIsError(true)
          });
      };

    return (
        <div className='main-container'>
            <div className="classA"><h4>DESCRIBE JENKINS CONTROLLER</h4></div>
            <div className='classB'>
                <div classname="classB1"><UrlComponent method="GET" uri="/pods/{namespace}/{pod}/detail" detail="Get Specific Jenkins Details" /></div>
                <div classname="classB2">
                    {/* <Parameters namespace={namespace} change={setNamespace} find={setHelmPods} clear={clear} /> */}
                    <div className='main-container-parameter'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div style={{ marginLeft: '10px' }}><label><strong>name</strong></label></div>
                                <hr />
                                <div style={{ marginLeft: '30px' }}><label><strong>Namespace</strong></label></div>
                                <div style={{ marginLeft: '30px' }}><label><strong>Pod</strong></label></div>
                            </div>

                            <div className='col-md-6'>
                                <div style={{ marginLeft: '60px' }}><label><strong>description</strong></label></div>
                                <hr />
                                <div style={{ marginLeft: '30px' }}><input type="text" value={namespace} onChange={(e) => setNamespace(e.target.value)} /></div>
                                <div style={{ marginLeft: '30px' }}><input type="text" value={podname} onChange={(e) => setPodname(e.target.value)} /></div>
                            </div>

                        </div>
                        <div className='paramC'>
                            <button className='col-lg-5 btn btn-primary' onClick={() => getSpecificPodDetail()}>Execute</button>
                            <button className='col-lg-5 btn btn-secondary' onClick={() => clear()}>Close</button>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        isError? <Responses data={error} />:<Responses data={detail} />
                    }
                </div>
            </div>
        </div>
    )
}

export default GetPodDetail;