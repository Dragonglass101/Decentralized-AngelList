# Decentralized AngelList

This is a Decentralized AngelList Dapp build on the Tezos blockchain

## Prerequisites :

- Python 3.x +
- Node v12.x +

## Setup, Run, Compile & Deploy Steps :

1.  `npm install` it will install all your dependencies

2.  `npm run client-install` it will install all the client dependencies i.e in React

> If step 2 does not work then go to the 'client' directory and run 'npm install'

3.  `npm run sync` this is a syncing command. Whenever the compile_config is changed in config.json this command must be executed from the terminal. This command helps the bundle to reconfigure the compilation parameters according to the changes you have made.

4.  `npm run compile` will build the contracts locally inside the folder ./contract_build. This command compiles the python file to a Michelson file and stores it in the ./contract_build folder.

5.  `npm run deploy` will deploy your contract with the params respect to your config.json

6.  `npm run dapp` It will spin-up the Dapp front-end and you are ready to use it. This Bundle is packed up with simple create-react-app. Once you run the command the front-end dev server will start up and you will be redirected to your home page in your default browser.

7.  `npm run test` It will run the whole template of SmartPy code with their scenario based testing. And the test results will be visualised in the teminal.
>Step 7 will also generate a test_build where your test results will be stored.

8.  `npm run get-entry-points` It will extract the entry-points from you recently compiled code and display in the terminal with a sample invocation which you can reference while invoking an entry-point from your dapp.
9.  **`npm run sync` is mandatory whenever your config.json file is changed !**

### Editing compile_config :

The contract name is "demo.py" inside the contract folder, to change the name of this folder you  will have to change it in config.json under contract_name.

Note : You have to be specific about file name, otherwise it will throw an error.

```json
    "compile_config" : {
        "contract_name": "demo.py",
        "class_name": "MyContract(12, 13)"
    },
```

#### contract_build folder will contain the following files :

- demo_compiled.tz : Michelson Code of your Smart Contract.

- demo_compiled.json : Micheline Code of your Smart Contract.

- demo.smlse : an internal expression between SmartPy and SmartML, kept for the record but not directly useful.

- demo_storage_init.tz : Micheline representation of the Storage.

- demo_types.sp : It specifies the types of the params used in the contract.

>The two important are *\_compiled.tz & *\_storage_init.tz files

#### Configuring Deployment Parameters :

Inside the deploy_config section

- First is the Tezos node you want to use , It can be local or any remote node

* Next You can change the contract_code and contract_storage with the ones you want to deploy

- Set the parameters like amount, gas_limit, derivation_path etc

These are the pre-defined config for deployment:

```json
    "deploy_config" : {
        "node" : "https://testnet.tezster.tech",
        "contract_code" : "demo_compiled.tz",
        "contract_storage" : "demo_storage_init.tz",
        "key" : "test_key1",
        "amount" : 10,
        "delegate_address" : "",
        "fee" : 10000,
        "derivation_path" : "",
        "storage_limit" : 10000,
        "gas_limit" : 500000
    },

```

A Tezos **node** allows you deploy contract, make transaction etc.

**Contract Specifications:**

- **contract_code** : It should refer to the Michelson Contract code you want to deploy.

- **contract_storage** : refers to the Michelson representation of the initial storage used for deployment

To deploy your contracts in the local tezos blockchain you first need to Setup [Tezster-CLI](https://docs.tezster.tech/tezster-cli) / [Tezster-GUI](https://docs.tezster.tech/)

Once done just change the deploy_config.node : "http://localhost:18731"

### Intracting with smart contract
>ConseilJs library is interct with the contract.
 