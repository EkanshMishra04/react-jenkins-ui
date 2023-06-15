import React from 'react';
import GetHelm from '../controller-components/GetHelm';
import CreateJenkinsController from '../controller-components/CreateJenkinsController';
import DeleteJenkinsController from '../controller-components/DeleteJenkinsController';
import GetByNamespace from '../controller-components/GetByNamespace';
import GetPodDetail from '../controller-components/GetPodDetail';


export default function MainScreen() {
  return (
    <>
      <GetByNamespace />
      <GetPodDetail />
      <GetHelm />
      <CreateJenkinsController />
      <DeleteJenkinsController />
      <ul>
      <li>thing to be done subsequently</li>
        <li>condense and expand carat button in each component</li>
        <li>all responses should be beautifully presented </li>
        <li>show response status also for each component response</li>
        <li>url for all api correction</li>
        <li>props type validation</li>
        
        
      </ul>
    </>
  );
}
