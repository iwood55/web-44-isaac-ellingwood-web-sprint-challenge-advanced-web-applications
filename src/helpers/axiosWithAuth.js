import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://web-44-isaac-ellingwood-web-sprint-challenge-advance-lnw9wliw8.vercel.app/',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
        }
    })
};

//Task List:
//Build and export a function used to send in our authorization token