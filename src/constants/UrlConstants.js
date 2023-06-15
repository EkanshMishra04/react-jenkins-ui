
export const DOMAIN = 'http://localhost:8085/jenkins-list';
export const GET_ALL_JENKINS_JOBS = 'http://localhost:8085/';
export const GET_SPECIFIC_JENKINS_DETAILS = 'http://localhost:8085/pods/';

export const DELETE_JENKINS_JOB_BY_ID = 'http://localhost:8085/jenkinsjobs';

export const BASE_URL = 'http://localhost:8085/'

// http get for helm chart data eg- 'http://localhost:8085/namespace'
export const GET_PODS_WITH_HELM_DATA = BASE_URL+'helm'

// http get for helm chart data eg- 'http://localhost:8085/list-jenkins/namespace'
export const PROD_GET_PODS_WITH_HELM_DATA = BASE_URL+"list-jenkins"

// http post + body{name,labname,username,password}
export const CREATE_JENKINS_CONTROLLER = 'http://localhost:8085/create_new_jenkins_controller';


//http delete with namespace and pod id or name
export const DELETE_JENKINS_POD = "http://localhost:8085/delete";


export const POST_URL = "http://localhost:8085/default/"