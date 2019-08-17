import axios from "axios";

export default {

    //Create activities
    postActivities: function () {
        return axios.post("/api/activities");
    },

    updateActivities: function (id) {
        return axios.put("/api/activities/" + id);
    },

    getAccount: function (id) {
        return axios.get("/api/login/" + id);

    },

    createAccount: function () {
        return axios.post("/api/signup");
    },

    createPuc: function () {
        return axios.post("/api/puc");
    },

    getPost: function () {
        return axios.get("/api/post");
    },

    createPost: function () {
        return axios.post("/api/post");
    },

    deletePost: function (id) {
        return axios.delete("/api/post" + id);
    },

    updatePost: function (id) {
        return axios.put("/api/post" + id);
    }

};