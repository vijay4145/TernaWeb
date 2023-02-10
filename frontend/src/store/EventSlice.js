import { createSlice } from "@reduxjs/toolkit";


const initialState = []
    // EVENT_HEADING : "",  1
    // EVENT_SCHEDULE: "",  1
    // EVENT_TAGS: [],  
    // EVENT_REGISTER_LINK: '',
    // EVENT_DESCRIPTION: '', 1
    // EVENT_IMAGE_URL: '',   1
    // EVENT_POSTED_BY : ''   1


export const eventSlice = createSlice({
    name: "EventSlice",
    initialState,
    reducers : {
        addEventSlice: (state, action) =>{
            state.push(action.payload);
        }
    }
});

export const { addEventSlice } = eventSlice.actions;
export default eventSlice.reducer;