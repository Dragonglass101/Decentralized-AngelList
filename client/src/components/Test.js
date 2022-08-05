import React, { useState, useEffect } from 'react'
import ipfs_mini from '../ipfs_mini';

export const Test = () => {
    const [messageHash, setmessageHash] = useState();

    function addTextIpfs(){
        console.log("uploading")
        ipfs_mini.add('hello world!').then((result, err)=>{
            console.log(err, result)
            setmessageHash(result)}).catch(console.log);
    }

    async function fetchText(url) {
        const response = await fetch(url);
        return response.text();
    }

    useEffect(() => {
        console.log(messageHash)
        async function getmessage(){
            const messageJSON = await fetchText(`https://ipfs.io/ipfs/${messageHash}`);
            console.log(messageJSON);
        }
        if(messageHash){
            getmessage();
        }
    }, [messageHash])
    
    if(!messageHash)
        addTextIpfs();
    return (
        <div className="pure-g">
            <div className="pure-u-1-1">
            </div>
        </div>
    )
}