import axios, { InternalAxiosRequestConfig } from 'axios';
const axiosIns = axios.create({
    baseURL: 'http://192.168.0.223',
});

axiosIns.interceptors.request.use(onFulfilled, error => Promise.reject(error));

axiosIns.interceptors.response.use(response => response, onRejected);

function onFulfilled(config: InternalAxiosRequestConfig) {
    return config;
}

async function onRejected(error: { config: object; response: Response }) {
    const { config: originalRequest, response } = error;

    if (response && response.status === 401) {
        return new Promise((resolve, reject) => {
            resolve(axiosIns(originalRequest));

            reject(error);
            // ('');
        });
    }

    return Promise.reject(error);
}

export default axiosIns;