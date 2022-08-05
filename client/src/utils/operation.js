import { tezos } from "./tezos";

export const signupInvestor = async(
    investorDetailsCID
) => {
    try {
        const contract = await tezos.wallet.at(
            //Contract Address
            "KT1PaS3SRVkyC6JhfwPEEmi31AbXFYiBDT5T"
        );

        const op = await contract.methods
            .investor_signup(
                investorDetailsCID
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
    companyValuation
) => {
    try {
        const contract = await tezos.wallet.at(
            //Contract Address
            "KT1PaS3SRVkyC6JhfwPEEmi31AbXFYiBDT5T"
        );

        const op = await contract.methods
            .company_signup(
                startupDetailsCID,
                companyValuation
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
common_options sp.TNat  common_shares sp.TNat   fd_percent sp.TNat  fd_shares sp.TNat  investment sp.TMutez  preferred_shares sp.TNat  stakeHolder_name sp.TString  stakeHolder_profile_Id sp.TString  stakeHolder_type sp.Tstring
*/
export const addFounders = async(
    commonOptions,
    commonShares,
    investment,
    preferredShares,
    stakeHolderName,
    stakeHolderProfileId,
    stakeHolderType
) => {
    try {
        const contract = await tezos.wallet.at(
            //Contract Address
            "KT1PaS3SRVkyC6JhfwPEEmi31AbXFYiBDT5T"
        );

        const op = await contract.methods
            .add_member_to_company(
                commonOptions, commonShares, 0, 0, investment, preferredShares, stakeHolderName,
                stakeHolderProfileId, stakeHolderType
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


export const raiseFunds = async(
    investment, ownership, type
) => {
    try {
        const contract = await tezos.wallet.at(
            //Contract Address
            "KT1PaS3SRVkyC6JhfwPEEmi31AbXFYiBDT5T"
        );

        const op = await contract.methods
            .raise_fund_for_company(
                investment, ownership, type
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

// company_wallet = sp.TAddress, investment = sp.TMutez, valuation_cap = sp.TMutez, direct_equity = sp.TNat, type = sp.TString)
export const requestFromInvestor = async(companyWallet, directEquity, investment, type, valuationCap) => {
    try {
        const contract = await tezos.wallet.at(
            //Contract Address
            "KT1PaS3SRVkyC6JhfwPEEmi31AbXFYiBDT5T"
        );

        const op = await contract.methods
            .raise_fund_for_company(
                companyWallet, directEquity, investment, type, valuationCap
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
}