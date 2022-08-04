import axios from "axios"

const contractAddress = "KT1PaS3SRVkyC6JhfwPEEmi31AbXFYiBDT5T";

export const getBalance = async(address) => {
    try {
        const body = await axios.get(
            `https://api.jakartanet.tzkt.io/v1/accounts/${address}/balance`
        );
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
            contractAddress +
            "/storage"
        );

        console.log(body);
        return body.data;
    } catch (error) {
        return error;
    }
}

export const getAllKeysBigMapByID = async(bigMapId) => {
    try {
        const body = await axios.get(
            `https://api.jakartanet.tzkt.io/v1/bigmaps/${bigMapId}/keys`
        )
        return body.data;
    } catch (error) {
        return error;
    }
}

export const getKeyBigMapByID = async(bigMapId, key) => {
    try {
        const body = await axios.get(
            `https://api.jakartanet.tzkt.io/v1/bigmaps/${bigMapId}/keys/${key}`
        )
        return body.data;
    } catch (error) {
        return error;
    }
}