import { tezos } from "./tezos";
import { wallet } from "./wallet";
import { TezosToolkit, MichelsonMap } from "@taquito/taquito";
import axios from "axios"

export const verifyInvestor = async(
    amountToAccredition,
    email,
    howAccredited,
    linkedIn,
    name,
    number,
    percentageNetworth,
    photoCID,
    resumeCID,
    walletID
) => {
    try {
        const contract = await tezos.wallet.at(
            //Contract Address
            "KT1DuHfMszQvvYaBVcmVxqZFZ1uVJpzC72u4"
        );

        const op = await contract.methods
            .verifyInvestor(
                amountToAccredition,
                email,
                howAccredited,
                linkedIn,
                name,
                number,
                percentageNetworth,
                photoCID,
                resumeCID,
                walletID
            )
            .send({
                amount: 50,
                mutez: false,
            });
        await op.confirmation(1);
    } catch (error) {
        console.log(error.message);
        throw error;
    }
};

export const getStorage = async() => {
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
};