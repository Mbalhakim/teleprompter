import axios from 'axios';

const baseUrl = process.env.VUE_APP_API_ENDPOINT;
import Router from '../router';

export default {
    anonymous() {
        return axios.create({
            baseURL: baseUrl,
        })
    },
    authenticated() {
        let instance = axios.create({
            baseURL: baseUrl,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('jwtToken'),
                'Content-type': 'application/ld+json',
            }
        });
        if (!localStorage.getItem('jwtToken')) {
            throw new Error('Authenticated requests require a token.');
        }
        instance.interceptors.request.use(request => {

            if (request.method.toLowerCase() === 'patch') {
                request.headers['Content-type'] = 'application/merge-patch+json';
            }

            return request;
        }, error => error);

        instance.interceptors.response.use((response) => {

            // Return a successful response back to the calling service
            return response;
        }, (error) => {

            if (!error.response) {
                return error;
            }
            // Return any error which is not due to authentication back to the calling service
            if (error.response.status !== 401) {
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            }

            // Logout user if token refresh didn't work or user is disabled
            if (error.config.url === '/token/refresh' || error.response.data.message === 'Account is disabled.' || error.response.data.message === 'JWT Token not found') {
              //  store.dispatch('user/clear');
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            }

            // Try request again with new token
            return axios.post(process.env.VUE_APP_API_ENDPOINT + '/api/token/refresh', {
                refresh_token: localStorage.getItem('jwtRefreshToken')
            })
                .then(response => {
                    // New request with new token
                    const config = error.config;

                    config.headers['Authorization'] = `Bearer ${response.data.token}`;
                    return axios.request(config);
                }).catch(error => {
                    localStorage.removeItem('jwtToken');
                    localStorage.removeItem('jwtRefreshToken');
                    localStorage.removeItem('selectedProject');
                    Router.push('/')
                    if (error.response.status === 401) {
                        // store.dispatch('toasts/addToast', {
                        //     title: 'Error',
                        //     variant: 'danger',
                        //     message: 'Your session has expired. Please log in.'
                        //     });
                        throw new  Error('Refresh niet gelukt');
                     }
                    throw error;
                });
        });

        return instance;
    }
}
