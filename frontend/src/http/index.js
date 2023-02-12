import axios from "axios"
import { getAuth } from "firebase/auth";
import '../config/firebase-config'


const api = async (endpoint, data,method)=>{
    const idToken = await getAuth().currentUser.getIdToken();
        const instance = axios.create({
            baseURL: 'http://localhost:8000',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: idToken
            }
        })

        try{
            if(method === 'post') {
                const response = await instance.post(endpoint, data);
                console.log(response);
            }
            return {
                success : true
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
export const postCommittee = async (data)=> await api('/committees/addCommittee', data, 'post')
export default api;


// module.exports = {getRoommateListRespone};