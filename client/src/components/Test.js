import React, { useState, useEffect } from 'react'
import { NFTStorage, File } from 'nft.storage'
import axios from 'axios'

export const Test = () => {

  const [photobuffer, setphotobuffer] = useState();

  const [image, setimage] = useState();
  const [metadata, setmetadata] = useState();

  useEffect(() => {
    async function uploadipfs(){
        console.log(photobuffer)
        const client = new NFTStorage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDJENkM4Qjg4RWY2YzY4YTU1NzdGMGZhOUU3MDE4ODU1ODk5YTYzQzkiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MDI0NDkwMjI5MiwibmFtZSI6IkRldmlsc0xpc3QifQ.fuOaSEThIZdIxTzNUQ-yOc4gvcuzv4K3LssZGSw6thc" })
        console.log("init")
        const nft = { name: "test", description: "this is a test", image: new File([photobuffer], 'blob'), test: "test"};
        const metadata = await client.store(nft);
        console.log("yea motherfucker", metadata);
        setmetadata(metadata);
    }
    if(photobuffer)
      uploadipfs();
  }, [photobuffer])

  useEffect(() => {
    async function metadataasf(){
        console.log(metadata.data.image.pathname);
    }
    if(metadata)
      metadataasf();
  }, [metadata])

  async function loadImage(){
    const result = await axios("https://bafybeihndylgdrr4w7m7g6xqe6c7w35x6ljn4623yzwvzflp75iohub6gi.ipfs.dweb.link/test_file")
    console.log(typeof result.data);
  }
  
  function handleClick(){
      loadImage();
  }
  function capturePhoto(event) {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      setphotobuffer(Buffer(reader.result))
    }
  }

    return (
      <>
        <img src="https://bafybeihndylgdrr4w7m7g6xqe6c7w35x6ljn4623yzwvzflp75iohub6gi.ipfs.dweb.link/blob"></img>
        <input type="file" onChange={capturePhoto}></input>
        <button onClick={handleClick}>Load Image</button>
      </>
    )
}
