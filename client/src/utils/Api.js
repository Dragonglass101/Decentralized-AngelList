import axios from "axios"

const contractAddress = "KT1UTMqaz9z8LzpRCwb19jPMKMfU9aHwFijf";

export const getBalance = async(address) => {
    try {
        const body = await axios.get(
            `https://api.jakartanet.tzkt.io/v1/accounts/${address}/balance`
        );

        console.log(body);
        return body.data;
    } catch (error) {
        return error;
    }
};

export const getRootStorage = async() => {
    try {
        const body = await axios.get(
            "https://api.jakartanet.tzkt.io" +
            "/v1/contracts/" +
            "KT1DuHfMszQvvYaBVcmVxqZFZ1uVJpzC72u4" +
            "/storage"
        );

        console.log(body);
        return body.data;
    } catch (error) {
        return error;
    }
}

export const getBigMapByID = async(bigMapId) => {
    try {
        const body = await axios.get(
            `https://api.jakartanet.tzkt.io/v1/bigmaps/${bigMapId}`
        )
        return body.data;
    } catch (error) {
        return error;
    }
}