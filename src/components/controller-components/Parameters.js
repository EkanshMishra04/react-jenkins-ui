import axios from 'axios';
import React, { useEffect } from 'react'
import { GET_PODS_WITH_HELM_DATA } from '../../constants/UrlConstants';
import './parameters.css';


const Parameters = (props) => {

  const namespace = props.namespace
  const change = props.change
  const find = props.find
  const clear = props.clear

  const getJenkinsByHelm = () => {
    axios.get(`${GET_PODS_WITH_HELM_DATA}`)
      .then((response) => {
        console.warn(response.data)
        if (response.data != undefined) {
          // console.log(response.data[0].releases)
          find(response.data)
        } else {
          find([]);
          // setError('Namespace Not Selected Correctly');
        }
      })
      .catch((error) => {
        console.error(error);
        // setError(error);
      });
  };

  return (
    <div className='main-container-parameter'>
      <div className='row'>
        <div className='col-md-6'>
          <div style={{ marginLeft: '10px' }}><label><strong>name</strong></label></div>
          <hr />
          <div style={{ marginLeft: '30px' }}><label><strong>Namespace</strong></label></div>
        </div>

        <div className='col-md-6'>
          <div style={{ marginLeft: '60px' }}><label><strong>description</strong></label></div>
          <hr />
          <div style={{ marginLeft: '30px' }}><input type="text" value={namespace} onChange={(e) => change(e.target.value)} /></div>
        </div>

      </div>
      <div className='paramC'>
        <button className='col-lg-5 btn btn-primary' onClick={() => getJenkinsByHelm()}>Execute</button>
        <button className='col-lg-5 btn btn-secondary' onClick={() => clear()}>Close</button>
      </div>


      {/* <div className='col-lg-8'>
                <div className='paramA '>
                    <div style={{ marginLeft: '10px' }}><label><strong>name</strong></label></div>
                    <div style={{ marginLeft: '60px' }}><label><strong>description</strong></label></div>
                </div>
                <hr/>
                <div className='paramB' >
                    
                        <div><label><strong> namespace</strong></label></div>
                        <div style={{ marginLeft: '30px' }}><input type="text" value={namespace} onChange={(e)=>change(e.target.value)} /></div>
                   
                </div>
                <div className='paramC'>
                    <button className='col-lg-5 btn btn-primary' onClick={()=>getJenkinsByHelm()}>Execute</button>
                    <button className='col-lg-5 btn btn-secondary' onClick={()=>clear()}>Close</button>
                </div>
            </div> */}
    </div>
  )
}

export default Parameters
