"use server"

import axiosLib from "axios";

const instance = axiosLib.create({});
instance.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export async function getBreachesData(query = {}) {
    try {
        const searchparams = new URLSearchParams();
        if (query.q) searchparams.set("q", query.q);
        if (query.offset) searchparams.set("offset", query.offset);
        return instance.get(`/databreaches/list?${searchparams.toString()}`);
    } catch (error) {
        console.log(error);
        return {
            message: "nothing"
        }
    }
};
