import { tezos } from "./tezos";

export const verifyInvestor = async(
    investorDetailsCID,
    walletID
) => {
    try {
        const contract = await tezos.wallet.at(
            //Contract Address
            "KT1NVPnVfJGAfJETT7AJdLSgUHvtckAX9r28"
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

export const signupCompany = async(
    startupDetailsCID,
    companyValuation,
    walletID
) => {
    try {
        const contract = await tezos.wallet.at(
            //Contract Address
            "KT1NVPnVfJGAfJETT7AJdLSgUHvtckAX9r28"
        );

        const op = await contract.methods
            .company_signup(
                startupDetailsCID,
                companyValuation,
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
/*
common_options sp.TNat
common_shares sp.TNat
fd_percent sp.TNat
fd_shares sp.TNat
investment sp.TMutez
preferred_shares sp.TNat
stakeHolder_name sp.TString
stakeHolder_profile_Id sp.TString
stakeHolder_type sp.Tstring
*/

export const addFounders = async(
    founderDetailsCID,
    walletID
) => {
    try {
        const contract = await tezos.wallet.at(
            //Contract Address
            "KT1NVPnVfJGAfJETT7AJdLSgUHvtckAX9r28"
        );

        const op = await contract.methods
            .add_member_to_company(
                5, 5, 0, 0, 1000, 10, "Anurag",
                founderDetailsCID,
                "founder"
            )
            .send({
                amount: 0,
                mutez: false,
            });
        await op.confirmation(1);
    } catch (error) {
        console.log(error.message);
        throw error;
    }
};