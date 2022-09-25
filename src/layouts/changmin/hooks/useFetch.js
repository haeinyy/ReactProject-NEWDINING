import { useState, useEffect } from "react";

import got from "../components/got";

import axios from "axios";

const useFetch = () => {
    const [data, setData] = useState({
        slug: "",
        results: [],
    });

    useEffect(() => {
        if (data.slug !== "") {
            const timeoutId = setTimeout(() => {
                const fetch = async () => {
                    try {
                        // const res = await got.get(`/${data.slug}`);
                        // const tmp_res =
                        // "http://35.216.64.71/menu/search?name=" + data.slug;
                        const tmp_res = "/menu/search?name=" + data.slug;

                        console.log(tmp_res);
                        // const res = await got.get(`=${data.slug}`);
                        const res = await axios.get(tmp_res);
                        setData({ ...data, results: res.data });
                        console.log(data);
                    } catch (err) {
                        console.error(err);
                    }
                };
                fetch();
            }, 1000);
            return () => clearTimeout(timeoutId);
        }
    }, [data.slug]);

    return { data, setData };
};

export default useFetch;
