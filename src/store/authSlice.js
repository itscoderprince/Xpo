import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // Set loading state
        setLoading: (state, action) => {
            state.isLoading = action.payload;
            state.error = null;
        },

        // Login success - store user data
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.isLoading = false;
            state.error = null;
        },

        // Login failure
        loginFailure: (state, action) => {
            state.user = null;
            state.isAuthenticated = false;
            state.isLoading = false;
            state.error = action.payload;
        },

        // Logout - clear everything
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.isLoading = false;
            state.error = null;
        },

        // Update user profile
        updateUser: (state, action) => {
            state.user = { ...state.user, ...action.payload };
        },

        // Clear error
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const {
    setLoading,
    loginSuccess,
    loginFailure,
    logout,
    updateUser,
    clearError,
} = authSlice.actions;

export default authSlice.reducer;
