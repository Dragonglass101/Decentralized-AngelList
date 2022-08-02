import React, { useState, useEffect } from 'react'
import { TezosToolkit, MichelsonMap } from '@taquito/taquito';
import { BigNumber } from 'bignumber.js';
import { getStorage } from '../utils/operation';
import { uploadDataIpfs } from '../utils/ipfsDataUpload';

export const Test = () => {
    const contractAddress = 'KT1DuHfMszQvvYaBVcmVxqZFZ1uVJpzC72u4';

    const Tezos = new TezosToolkit('https://jakartanet.smartpy.io');

    // uploadDataIpfs();

    return (
        <div className="pure-g">
            <div className="pure-u-1-1">
            </div>
        </div>
    )
}