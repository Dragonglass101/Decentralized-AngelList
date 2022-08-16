// Setup Tezos Toolkit
import {TezosToolkit} from "@taquito/taquito";
import {wallet} from "./wallet"
export const tezos = new TezosToolkit("https://jakartanet.smartpy.io");

tezos.setWalletProvider(wallet);
