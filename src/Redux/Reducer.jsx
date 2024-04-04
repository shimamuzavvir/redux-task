import { createSlice } from "@reduxjs/toolkit";

// Function to find the index of an item in an array by its id
function findIndex(array, id) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id)
            return i;
    }
    // Return -1 instead of null for index not found
    return -1;
}

// Creating a slice for managing blog state
export const Reducer = createSlice({
    name: "blogs", // Name of the slice
    initialState: [], // Initial state of the slice
    reducers: {
        // Reducer function to save all blogs
        saveAllBlogs: (state, action) => {
            return action.payload; // Replace the current state with the payload
        },
        // Reducer function to increase the quantity of a blog item in the cart
        increase_cart: (state, action) => {
            const { id } = action.payload; // Extracting id from action payload
            const index = findIndex(state, id); // Finding index of the item in state
            // If item exists, increase its quantity by 1
            if (index !== -1) {
                state[index] = {
                    ...state[index],
                    quantity: (state[index].quantity || 1) + 1
                };
            }
        },
        // Reducer function to decrease the quantity of a blog item in the cart
        decrease_cart: (state, action) => {
            const { id } = action.payload; // Extracting id from action payload
            const index = findIndex(state, id); // Finding index of the item in state
            // If item exists and its quantity is greater than 1, decrease its quantity by 1
            if (index !== -1 && state[index].quantity > 1) {
                state[index] = {
                    ...state[index],
                    quantity: state[index].quantity - 1
                };
            }
        },
        // Reducer function to remove a blog item from the cart
        remove_cart: (state, action) => {
            const { id } = action.payload; // Extracting id from action payload
            // Filter out the item with the given id
            return state.filter((item) => item.id !== id);
        }
    }
});

// Extracting action creators and reducer function from the slice
export const { saveAllBlogs, increase_cart, decrease_cart, remove_cart } = Reducer.actions;
export const blogReducer = Reducer.reducer; // Reducer function to be used in the Redux store