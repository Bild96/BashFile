import React from "react";
import lighthouse from '@lighthouse-web3/sdk';

function App() {

  const progressCallback = (progressData) => {
    let percentageDone =
      100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
    console.log(percentageDone);
  };

  const deploy = async(e) =>{
    // Push file to lighthouse node
    // Both file and folder supported by upload function
    const output = await lighthouse.upload(e, "e892288c-bece-47dc-92c4-5ee89d836c42", progressCallback);
    console.log('File Status:', output);
    /*
      output:
        {
          Name: "filename.txt",
          Size: 88000,
          Hash: "QmWNmn2gr4ZihNPqaC5oTeePsHvFtkWNpjY3cD6Fd5am1w"
        }
      Note: Hash in response is CID.
    */

      console.log('Visit at https://gateway.lighthouse.storage/ipfs/' + output.data.Hash);
  }

  return (
    <div className="App">
      <input onChange={e=>deploy(e)} type="file" />
    </div>
  );
}

export default App;
