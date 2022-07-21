import React, { useState } from 'react'
import ipfs from '../ipfs';

export const Test = () => {
    const [ipfsHash, setipfsHash] = useState("");
    const [account, setaccount] = useState(null);
    const [buffer, setbuffer] = useState(null);

    function captureFile(event) {
        event.preventDefault()
        const file = event.target.files[0]
        const reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => {
          setbuffer(Buffer(reader.result))
        }
      }
    
      function onSubmit(event) {
        event.preventDefault();
        console.log("on submit handler")
        ipfs.files.add(buffer, (error, result) => {
          if(error) {
            console.error(error)
            return
          }
        //   this.simpleStorageInstance.set(result[0].hash, { from: this.state.account }).then((r) => {
        //     return this.setState({ ipfsHash: result[0].hash })
        //     console.log('ifpsHash', this.state.ipfsHash)
        //   })
          setipfsHash(result[0].hash);
        })
      }

      function checkValBuff(){
        console.log(buffer);
        console.log(ipfsHash);
      }

    return (
        <div className="pure-g">
            <div className="pure-u-1-1">
                <h1>Your Image</h1>
                <p>This image is stored on IPFS & The Ethereum Blockchain!</p>
                {ipfs ? 
                <img src={`https://ipfs.io/ipfs/${ipfs}`} alt=""/> : <></>}
                <h2>Upload Image</h2>
                <form onSubmit={onSubmit} >
                <input type='file' onChange={captureFile} />
                <input type='submit' />
                </form>
            </div>
            <button onClick={checkValBuff}>Check buffer value</button>
        </div>
    )
}
