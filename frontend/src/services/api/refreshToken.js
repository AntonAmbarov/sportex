import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl, { paths } from "../../config/apiConfig";

const baseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');
        // console.log('token', token) //log
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    }
})

const baseQueryRefresh = async (args, api, opts) => {
    let result = await baseQuery(args, api, opts);
    if (result.error && result.error.status === 401) {
        const { data } = await baseQuery(paths.refreshToken, api, opts);
        if (data?.token) {
            localStorage.setItem('token', data.token);
            result = await baseQuery(args, api, opts);
        } else {
            localStorage.removeItem('token');
        }
    }
    return result;
}

export default baseQueryRefresh;