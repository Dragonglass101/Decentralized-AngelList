<!-- # Decentralized AngelList

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
>ConseilJs library is interct with the contract. -->


<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
<!-- [![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url] -->
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h2 align="center">DevilList </h2>

  <p align="center">
    An On-Chain AngelList on Tezos BlockChain!
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    <a href="https://decentralizedangellist.web.app">View Site</a>
    <!-- <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a> -->
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#getting-started">Tech-Stack</a></li>
    <li><a href="#usage">Challenges Faced</a></li>
    <li><a href="#contributing">Future Aspects and Scope</a></li>
    <li><a href="#license">Guide to setup the project locally</a></li>
    <li><a href="#acknowledgments">Acknowledgments and References</a></li>
    <li><a href="#contact">Project Demo Pictures</a></li>

  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

There are many great README templates available on GitHub; however, I didn't find one that really suited my needs so I created this enhanced one. I want to create a README template so amazing that it'll be the last one you ever need -- I think this is it.

<!-- Here's why:
* Your time should be focused on creating something amazing. A project that solves a problem and helps others
* You shouldn't be doing the same tasks over and over like creating a README from scratch
* You should implement DRY principles to the rest of your life :smile:

Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have contributed to expanding this template! -->

<!-- Use the `BLANK_README.md` to get started. -->

<p align="right">(<a href="#readme-top">Top</a>)</p>



### Tech-Stack

<!-- This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples. -->

* [![Tezos][Tezos]][Vue-url]
* [![IPFS][IPFS]][Angular-url]
* [![SmartPy][SmartPy]][Svelte-url]
* [![React][React.js]][React-url]
* [![TZKT API][TZKT API]][JQuery-url]
* [![Taquito][Taquito]][JQuery-url]
* [![FA2][FA2]][JQuery-url]


<p align="right">(<a href="#readme-top">Top</a>)</p>

### Challenges Faced
Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have contributed to expanding this template!

### Future Aspects and Scope
Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have contributed to expanding this template!





## Guide to setup the project locally
### Prerequisites

- Python 3.x +
- Node v12.x +

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
9.  **`npm run sync` is mandatory whenever your config.json file is changed !**

<!-- ### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- USAGE EXAMPLES -->
<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- ROADMAP -->
<!-- ## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- CONTRIBUTING -->
<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->











<!-- ACKNOWLEDGMENTS -->
## Acknowledgments and References

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 


## Project Demo Pictures
You can refer the sample shots our projects <a href="https://github.com/othneildrew/Best-README-Template">Click Here</a>
 
