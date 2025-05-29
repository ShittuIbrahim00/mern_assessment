import axios from "axios";
import { create } from "zustand";

const BASE_URL = "https://billings-r3v1.onrender.com/api/v1"

axios.defaults.withCredentials = true;

export const useAuthStore = create ((set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
    isCheckingAuth: true,
    message: null,
    login : async (email, password) => {
        set({isLoading: true, error: null});
        try {
            const response = await axios.post(`${BASE_URL}/login`, {email, password});
            set({
                user: response.data.data.user,
                isAuthenticated: true,
                isLoading: false,
                error: null,
            })
        } catch (error) {
            set({error: error.response?.data?.message || "Error loggin in", isLoading: false })
        }
    },
    register : async (firstName, lastName, email, password) => {
        set({isLoading: true, error: null});
        try {
            const response = await axios.post(`${BASE_URL}/register`, {firstName, lastName, email, password});
            set({
                user: response.data.data.user,
                isAuthenticated: true,
                isLoading: false,
                error: null,
            })
        } catch (error) {
            set({error: error.response?.data?.message || "Error signing up ", isLoading: false });
        }
    },
    verifyEmail : async (code) => {
        set({isLoading: true, error: null});
        try {
            const response = await axios.post(`${BASE_URL}/verifyaccount`, {code});
            set({
                user: response.data.user,
                isLoading: false,
                isAuthenticated: true,
                error: null
            })
        } catch (error) {
            set({error: error.response?.data?.msg || "Error verifying email", isLoading: false });
            throw error;
        }
    }
}))