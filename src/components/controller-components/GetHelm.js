import React, { useEffect, useState } from 'react';
import UrlComponent from './UrlComponent';
import Parameters from './Parameters';
import Responses from './Responses';
import "./getHelm.css";


const GetHelm = () => {
    const [helmPods, setHelmPods] = useState([]);
    const [namespace, setNamespace] = useState('default');
    const [error, setError] = useState(null);

    const clear = () => {
        setHelmPods([])
    }

    return (
        <div className='main-container'>
            <div className="classA"><h4>LIST JENKINS HELM CHARTS</h4></div>
            <div className='classB'>
                <div classname="classB1"><UrlComponent method="GET" uri="list-jenkins/{namespace}" detail="List jenkins" /></div>
                <div classname="classB2">
                    <Parameters namespace={namespace} change={setNamespace} find={setHelmPods} clear={clear} />
                </div>
                <div>
                    <Responses data={helmPods} />
                </div>
            </div>
        </div>
    )
}

export default GetHelm