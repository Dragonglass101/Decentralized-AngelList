<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>




<!-- PROJECT SHIELDS -->
<!--
* I'm using markdown "reference style" links for readability.
* Reference links are enclosed in brackets [ ] instead of parentheses ( ).
* See the bottom of this document for the declaration of the reference variables
* for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
* https://www.markdownguide.org/basic-syntax/#reference-style-links




<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h1 align="center"> DevilList </h1>

  <p align="center">
    An On-Chain AngelList on Tezos BlockChain!
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://youtu.be/m3xArqbYJ1A">View Demo</a>
    .
    <a href="https://decentralizedangellist.web.app">View Site</a>
    <!-- <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a> -->
  </p>
</div>



<!-- TABLE OF CONTENTS -->

  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#getting-started">Tech-Stack</a></li>
    <li><a href="#usage">Challenges Faced</a></li>
    <li><a href="#contributing">Future Aspects and Scope</a></li>
    <li><a href="#license">Guide to setup the project locally</a></li>
    <li><a href="#contract-address">Contract Address</a></li>
    <li><a href="#acknowledgments">Acknowledgments and References</a></li>
    <li><a href="#contact">Project Demo Pictures</a></li>

  </ol>




## About The Project

### Inspiration 

With the worlds fastly adapting and appreciating blockchain and decentralized ecosystem it is the need of the day for the big platforms like AngelList to move to WEB3. New startups will be based on WEB3 and in near future blockchain token transactions will lay the prime part of monetary transactions. 
Moreover Traditional financial services such as payments, lending and borrowing were only available via established financial institutes and banks. But it transformed with the introduction of blockchain technology. When the concept of cryptocurrency started expanding, the discussion has shifted to a new set of considerations, i.e., decentralized finance (DeFi) decentralized finance creates a fair and transparent financial system where anyone can participate. It allows unbanked people to access financial and banking services via blockchain technology.

DeFi aims to build an open-source, permissionless and transparent financial service ecosystem. Thus it is need of the day to have platform like Angellist to be on AngelList.

DevilList is an end-to-end platform where investors can invest using tez/USDT in startups and can sign SAFT/SAFEs on the platform itself. This platform keep track of cap-table whenever a round closes and startups can also pay their employees and vendors in tez/USDT. It is a super app to invest, raise funds, maintain cap-table, manage cash-flow and payroll & accounting done on-chain.

Cap-Table Calculator and Manager 
On platform wallet to pay to vendors or employee
Decentralized Peer to Peer Chat
On Platform investing through (Direct Equity SAFE/SAFT)agreements.
Deentralized Stock Trading (Future of Trading)






<!-- Here's why:
* Your time should be focused on creating something amazing. A project that solves a problem and helps others
* You shouldn't be doing the same tasks over and over like creating a README from scratch
* You should implement DRY principles to the rest of your life :smile:

Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have contributed to expanding this template! -->

<!-- Use the `BLANK_README.md` to get started. -->





### Tech-Stack
* [Tezos](https://tezos.com/)
* [IPFS](https://infura.io/)
* [Smartpy](https://smartpy.io/)
* [React](https://reactjs.org/)

<p align="right"><a href="#readme-top">Top</a></p>

## Challenges Faced
Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have contributed to expanding this template!

<p align="right"><a href="#readme-top">Top</a></p>

## Future Aspects and Scope
Royalty On FA2 Company Tokens: 
Unlike traditional stock-trading using FA2 token the seller of token will get Royalty of 5% on the trade profit done buy the successive buyers of this tokens.
By this we will encourage people to built great companies on blockchain as the early you become owner of the tokens longer you get the profit (each owner will keep getting royalty until the those tokens are in the market). The above feature is already half implemented.

CRON jobs : Introducing CRON jobs to automate the buying and selling FA2 company tokens (which are currently being triggered by confirmations) instead directly initiate tokens transfer whenever avaliable at the buyer's price.

Coinbase: If any user on the platform is deficiet of Tez instead of going to other platforms for buying tez he can buy tez directly from our platform. By making this buying process easy we will encourage the users to keep trading in Tez which will help in growth of Tezos Ecosystem. The above feature is almost close to completition.

USDT/USDC: According to the research USDT stable coin has came on the Tezos blockchain recently in June 2022. USDC.e is coin on ethereum blockchain. For allowing the transactions in USDC.e there need to build an bridge between the two blockchain. We hope to enable transactions in this two coins in the near future.



<p align="right"><a href="#readme-top">Top</a></p>





## Guide to setup the project locally
### Prerequisites

- Python 3.x +
- Node v12.x +

<p align="right"><a href="#readme-top">Top</a></p>

### Setup, Run, Compile & Deploy Steps :


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
9.  *`npm run sync` is mandatory whenever your config.json file is changed !*

<p align="right"><a href="#readme-top">Top</a></p>

## Contract Address
### KT1RgCskZanXW1mtz4aeFB9txG5Uce454V3q

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments and References

* [Infura](https://infura.io/)
* [Taquito](https://tezostaquito.io/)
* [Smartpy](https://smartpy.io/)
* [Tezos](https://opentezos.com/)
* [Axios](https://axios-http.com/docs/intro)
* [TZKT APi](https://api.tzkt.io/)
* [React](https://reactjs.org/docs/getting-started.html)
* [Fusion Charts](https://www.fusioncharts.com/fusioncharts)
* [README Template](https://github.com/othneildrew/Best-README-Template/edit/master/README.md)

<p align="right"><a href="#readme-top">Top</a></p>

## Project Demo Pictures
You can refer the sample shots our projects <a href="https://drive.google.com/drive/folders/1vyppSZRm_aS8BcY_G4efxLQuYp651AkP?usp=sharing">Click Here</a>

<p align="right">(<a href="#readme-top">Top</a>)</p>
