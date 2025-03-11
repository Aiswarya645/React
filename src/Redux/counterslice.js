import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    data: [],  
};

const counterslice = createSlice({ 
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        addData: (state, action) => {
            const item = state.data.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            } else {
                state.data.push({ ...action.payload, quantity: 1 });
            }
        },
        incre:(state,action)=>{
            const item=state.data.find((item)=>item.id===action.payload);
            if(item && item.quantity>0){
                item.quantity+=1;
            }
        },
        decre:(state,action)=>{
            const item=state.data.find((item)=>item.id===action.payload);
            if(item && item.quantity>0){
                item.quantity-=1;
            }
        }
    },
});

export const { increment, decrement, addData ,incre ,decre} = counterslice.actions;
export default counterslice.reducer;
