import axios from "axios";

export default {

    //Create activities
    postActivities: function (data) {
        return axios.post("/api/activities", data);
    },

    updateActivities: function (id) {
        return axios.put("/api/activities/" + id);
    },

    getAccount: function (id) {
        return axios.get("/api/login/" + id);

    },

    createAccount: function () {
        return axios.post("/api/signup".data);
    },

    createPuc: function (data) {
        return axios.post("/api/puc", data);
    },

    getPost: function () {
        return axios.get("/api/post");
    },

    createPost: function (data) {
        return axios.post("/api/post", data);
    },

    deletePost: function (id) {
        return axios.delete("/api/post" + id);
    },

    updatePost: function (id) {
        return axios.put("/api/post" + id);
    }

};