import { createSlice } from "@reduxjs/toolkit";


const initialState = []
    // EVENT_HEADING : "",
    // EVENT_SCHEDULE: "",
    // EVENT_TAGS: [],
    // EVENT_REGISTER_LINK: '',
    // EVENT_DESCRIPTION: '',
    // EVENT_IMAGE_URL: '',
    // EVENT_POSTED_BY : ''


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