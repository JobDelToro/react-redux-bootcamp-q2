import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import loginApi from "../utils/loginApi";

let authActions = {};
let auth = {
    isAuthenticated: false
};

/**
 * Get user info
 * 
 * @param {}
 * 
 * @return {Object}
 * 
 */
const useAuth = () => {
    let { user, isAuthenticated, isLoading } = useAuth0();
    return !user ? auth : auth = { ...auth, user, isAuthenticated, isLoading };
};
/**
 * Login a user
 * 
 * @param {Object}
 * 
 * @return {VoidFunction}
 * 
 */
const login = async values => {
    try {
        const user = await loginApi(values.email, values.password);
        auth = { ...auth, user };
    } catch (err) {
        alert(err);
    }
};

authActions = { ...authActions, useAuth };
authActions = { ...authActions, login };

export default authActions;
