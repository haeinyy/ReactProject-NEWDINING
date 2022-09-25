import axios from "axios";

export default axios.create({
    // baseURL: "https://game-of-thrones-quotes.herokuapp.com/v1/house",
    baseURL: "http://35.216.64.71/menu/search?name",
});
