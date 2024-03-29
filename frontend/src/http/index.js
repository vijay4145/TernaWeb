import axios from "axios"
import { getAuth } from "firebase/auth";
import '../config/firebase-config'


const api = async (endpoint, data,method)=>{
    var idToken =  getAuth().currentUser;
    if(idToken) idToken = await idToken.getIdToken();
    if(!idToken) idToken = "bearer";
    const mainUrl = process.env.REACT_APP_BACKEND_URL;
        const instance = axios.create({
            baseURL: mainUrl,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: idToken
            }
        })

        try{
            if(method === 'npost'){
                const response = await instance.post(endpoint, data);
                return response;
            }
            else if(method === 'post') {
                if(idToken === 'bearer') return {
                    success: false
                }
                const response = await instance.post(endpoint, data);
                return {
                    success : true
                }
            }else if(method === 'post_with_token_and_return_response'){
                try{
                    const response = await instance.post(endpoint, data);
                    return response;
                }catch(err){
                    if(err.response.status === 401){
                        return err.response;
                    }else throw err;
                }
            }
            else if(method === 'get') {
                const response = await instance.get(endpoint);
                return response;
            }
        }catch(err){
            console.log("error aaya h" + err);
            return {
                success: false
            };
        }

}


      
    

export const postEventDetails = async (data)=> await api('/events/addEvent', data, 'post')
export const getEventDetails = async (data)=> await api('/events/getlist', '', 'get');
export const getEventOverviewList = async (event_type)=> await api('/events/' + event_type + '/getEventOverviewList', '', 'get');
export const getEventDetailsUsingId = async (id)=> await api('/events/' + id, '', 'get');

export const postCommittee = async (data)=> await api('/committees/addCommittee', data, 'post')
export const getCommittee = async ()=> await api('/committees/getCommitteeList', '', 'get')
export const getCommitteeUsingId = async (id)=> await api('/committees/'+id, '', 'get')

export const postUser = async (data)=> await api('/user/addUser', data, 'post');
export const getUserDetails = async ()=> await api('/user/userDetail', '', 'get');
export const getUserDetailsUsingid = async (id)=> await api('/user/userDetail/' + id, "", 'get');


export const getGCRLink = async (branch, semester)=> await api('/resources/gcr/' + branch+ '/' + semester, "" , 'get');
export const getAvailableAssignment = async ()=> await api('/resources/get_assignment_experiment_list', "" , 'get');

export const getExperimentList = async (branch, semester, subject)=> await api('/resources/get_experiment_list/' + branch+ '/' + semester + '/' + subject, "" , 'get');
export const getAiExperimentUrl = async (data)=> await api('/resources/get_experiment_url', data , 'post_with_token_and_return_response');
export const getAiExperimentUrlNormal = async (data)=> await api('/resources/get_experiment_url_normal', data , 'npost');

// topcoder
export const getCodechefUserData = async (data)=> await api('/topcoders/codechef', '' , 'get');
export const getGithubUserData = async (data)=> await api('/topcoders/github', '' , 'get');
export const getGfgUserData = async (data)=> await api('/topcoders/geeksforgeeks', '' , 'get');
export const newgithubuserAdd = async (data)=> await api('/topcoders/newgithubuser', data , 'npost');


export default api;


// module.exports = {getRoommateListRespone};