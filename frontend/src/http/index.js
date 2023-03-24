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
            if(method === 'post') {
                if(idToken === 'bearer') return {
                    success: false
                }
                const response = await instance.post(endpoint, data);
                return {
                    success : true
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


      
    
export const getRoommateListRespone = (data) => api.get('/roommate', data);

export const postEventDetails = async (data)=> await api('/events/addEvent', data, 'post')
export const getEventDetails = async (data)=> await api('/events/getlist', '', 'get');
export const getEventDetailsUsingId = async (data, url1, url2)=> await api('/events/' + url1 + '/' + url2, '', 'get');

export const postCommittee = async (data)=> await api('/committees/addCommittee', data, 'post')
export const getCommittee = async ()=> await api('/committees/getCommitteeList', '', 'get')

export const postUser = async (data)=> await api('/user/addUser', data, 'post');
export const getUserDetails = async ()=> await api('/user/userDetail', '', 'get');

export default api;


// module.exports = {getRoommateListRespone};