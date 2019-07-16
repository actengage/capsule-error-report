import axios from 'axios';

export default function lint(data, options) {
    return new Promise((resolve, reject) => {
        axios.post('lint', data, options)
            .then(response => {
                resolve(response.data);
            }, e => {
                reject(e);
            });
    });
}