import React, { useState, useEffect } from 'react'
import { TezosToolkit, MichelsonMap } from '@taquito/taquito';
import { BigNumber } from 'bignumber.js';
import { getStorage } from '../utils/operation';

export const Test = () => {
    const contractAddress = 'KT1DuHfMszQvvYaBVcmVxqZFZ1uVJpzC72u4';

    const Tezos = new TezosToolkit('https://jakartanet.smartpy.io');

    // const newEmptyMapWithArg = new MichelsonMap({
    //     prim: 'map',
    //     args: [{ prim: 'string' }, { prim: 'mutez' }],
    // });
    // console.log(newEmptyMapWithArg);

    // async function getStorage(){
    //   const contract = await Tezos.contract.at(contractAddress);
    //   const storage = await contract.storage();
    //   console.log(storage);
    //   const feestoregister = storage["feesToRegister"]
    //   console.log(feestoregister.toNumber());
    //   const st = new MichelsonMap();
    //   console.log(st)
    // }
    // getStorage();

    getStorage();


    return (
        <div className="pure-g">
            <div className="pure-u-1-1">
            </div>
        </div>
    )
}