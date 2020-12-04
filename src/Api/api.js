import * as axios from "axios";

const API_KEY = "?client_id=s1a2lQWYDTYcKQJCnT8LcbnpXpplHNA2am8DEqTpsUc";

const instance = axios.create({

    baseURL: "https://api.unsplash.com",

});

export const api = {

    getPhotos() {
        return instance.get(`/photos` + API_KEY).then((response) => {

            return response.data
        });

    },

};