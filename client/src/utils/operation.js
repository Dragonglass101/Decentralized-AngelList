import { tezos } from "./tezos";

export const verifyInvestor = async(
    investorDetailsCID,
    walletID
) => {
    try {
        const contract = await tezos.wallet.at(
            //Contract Address
            "KT1UTMqaz9z8LzpRCwb19jPMKMfU9aHwFijf"
        );

        const op = await contract.methods
            .verifyInvestor(
                investorDetailsCID,
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