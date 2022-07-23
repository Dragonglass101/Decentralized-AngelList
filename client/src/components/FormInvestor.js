import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import countryList from "react-select-country-list";
import Select from "react-select";
import Button from '@material-ui/core/Button';

import { connectWallet } from "../utils/wallet";
import {verifyInvestor} from "../utils/operation"

import ipfs from '../ipfs';

import "../styles/FormInvestor.css";

export const FormInvestor = () => {
  const [step, setStep] = useState(1);
  const countries = countryList().getData();
  const [loading, setLoading] = useState(false);
  const [identity, setIdentity] = useState("Individual");
  const [details, setDetails] = useState({
    amountToAccredition: 10,
    email: "",        // done
    howAccredited: 0, // done
    linkedIn: "",     // done
    name: "",         // done
    number: 0,     // done
    percentageNetworth: 2,
    walletID: "",     // done

    bufferPhoto: null,
    bufferResume: null
  });
  const [photoCID, setphotoCID] = useState(null);
  const [resumeCID, setresumeCID] = useState(null)

  const [wallet, setWallet] = useState(null);
  const handleConnectWallet = async () => {
    const { wallet } = await connectWallet();
    setWallet(wallet);
  };

  useEffect(() => {
    console.log(photoCID, resumeCID)
      const onverifyInvestor = async () =>{
        console.log(photoCID, resumeCID)
        try{
          // await verifyInvestor(50, "alex@gmail.com", 1,"linkedinurl","alice",1234567890,2,"photoCID", "resumeCID",wallet);
          await verifyInvestor(details["amountToAccredition"], details["email"], details["howAccredited"],details["linkedIn"],details["name"],details["number"],details["percentageNetworth"],photoCID, resumeCID,wallet);
          alert("Transaction Confirmed! You are now an Accredited Investor");
        }catch(error){
          alert("Transaction Failed:", error.message);
        } 
    
        setLoading(false);
        
      }
      if(photoCID != null && resumeCID != null)
        onverifyInvestor();
  }, [resumeCID, photoCID])

  function capturePhoto(event) {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      setDetails({ ...details, bufferPhoto: Buffer(reader.result) })
    }
  }
  function captureResume(event) {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      setDetails({ ...details, bufferResume: Buffer(reader.result) })
    }
  }

  function uploadPhoto() {
    ipfs.files.add(details["bufferPhoto"], (error, result) => {
      if(error) {
        console.error(error)
        return
      }
      setphotoCID(result[0].hash)
    })
  }
  function uploadResume() {
    ipfs.files.add(details["bufferResume"], (error, result) => {
      if(error) {
        console.error(error)
        return
      }
      setresumeCID(result[0].hash)
    })
  }

  async function handleSubmit(e){
    e.preventDefault()
    await handleConnectWallet();
    setLoading(true);
    uploadPhoto();
    uploadResume();
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Step 1 */}
        <div className={"main " + `${step != 1 ? "hidden" : ""}`}>
          <h1 className="title"> Step 1 of 3 : Accreditation </h1>
          <p className="p1">
            You must be an accredited investor to invest in AnglelList Venture
          </p>
          <div className="q1">
            <p className="q">
              Will you be investing money as an Individual, a Trust, or a Firm
              or Fund ?
            </p>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="q1"
                  onClick={() => {
                    setIdentity("Individual");
                  }}
                />
                Individual
              </label>
              <label>
                <input
                  type="radio"
                  name="q1"
                  onClick={() => {
                    setIdentity("Trust");
                  }}
                />
                Trust
              </label>
              <label>
                <input
                  type="radio"
                  name="q1"
                  onClick={() => {
                    setIdentity("Firm");
                  }}
                />
                Firm or Fund
              </label>
            </div>
          </div>
          {identity == "Individual" ? (
            <>
              <div className="q1">
                <p className="q"> What is your full legal name ? </p>
                <input
                  type="text"
                  className="input-text"
                  onChange={(e) =>
                    setDetails({ ...details, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="q2">
                <p className="q"> Enter Your Phone Number </p>
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  className="input-text"
                  onChange={(e) =>
                    setDetails({ ...details, number: parseInt(e.target.value) })
                  }
                  required
                />
              </div>
              <div className="q2">
                <p className="q"> Enter Your Email Id </p>
                <input
                  type="email"
                  className="input-text"
                  onChange={(e) =>
                    setDetails({ ...details, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <p className="q"> Profile Picture </p>
                <input type="file" onChange={capturePhoto} required/>
              </div>
              <div>
                <p className="q"> Resume </p>
                <input type="file" onChange={captureResume} required/>
              </div>
              <div className="q3">
                <p className="q"> Where is your legal place of Residence ? </p>
                <Select isSearchable options={countries} className="select" />
              </div>
              <div className="q4">
                <p className="q"> How are you accredited ? </p>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      name="q4"
                    />
                    I have atleast 500k Tez in investments
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="q4"
                    />
                    I have between 220k to 500k Tez in net assets
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="q4"
                    />
                    I have between 100k to 200k Tez in net assets 
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="q4"
                    />
                    I have income of 200k Tez( or 300k Tez jointly with spouse) for
                    the past 2 years and expect the same for this year
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="q4"
                    />
                    I am Series 7, Series65, or Series 82 holder and my license
                    is active and in good standing
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="q4"
                    />
                    I am not accredited yet
                  </label>
                </div>
              </div>
            </>
          ) : identity == "Trust" ? (
            <>
              <div className="q2">
                <p className="q"> What is your trust 's legal name?</p>
                <input
                  type="text"
                  className="input-text"
                  onChange={(e) =>
                    setDetails({ ...details, name: e.target.value })
                  }
                />
              </div>
              <div className="q3">
                <p className="q"> Where is your trust located ? </p>
                <Select isSearchable options={countries} className="select" />
              </div>
              <div className="q4">
                <p className="q"> Is your trust revocable ? </p>
                <div className="radio">
                  <label>
                    <input type="radio" name="q4" /> Yes, revocable
                  </label>
                  <label>
                    <input type="radio" name="q4" /> No, revocable
                  </label>
                </div>
              </div>
              <div className="q5">
                <p className="q"> How is your trust accredited ? </p>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      name="q5"
                    />
                    The trust has over $25M in investments
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="q5"
                    />
                    The trust has over $5M in net assets
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="q5"
                    />
                    None of the above
                  </label>
                </div>
              </div>
            </>
          ) : identity == "Firm" ? (
            <>
              <div className="q2">
                <p className="q">
                  What is your firm 's or fund' s legal name ?
                </p>
                <input
                  type="text"
                  className="input-text"
                  onChange={(e) =>
                    setDetails({ ...details, name: e.target.value })
                  }
                />
              </div>
              <div className="q3">
                <p className="q"> Where is your firm or fund located ? </p>
                <Select isSearchable options={countries} className="select" />
              </div>
              <div className="q4">
                <p className="q"> How is your firm / fund accredited ? </p>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      name="q4"
                    />
                    The investing entity has over $25M in investments
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="q4"
                    />
                    The investing entity has between $5M and $25M in net assets
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="q4"
                    />
                    All the owners of the investing enituty are qualified
                    purchasers
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="q4"
                    />
                    All the owners of the investing enituty are individually
                    accredited
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="q4"
                    />
                    The investing entity is a state or SEC registered investment
                    adviser or any exempt reporting adviser
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="q4"
                    />
                    None of the above
                  </label>
                </div>
              </div>
            </>
          ) : null}
          <button
            className="continue"
            type="button"
            onClick={() => {
              console.log(details);
              setStep(2);
            }}
          >
            Continue
          </button>
        </div>
      {/* Step 2 */}
        <div className={"main " + `${step != 2 ? "hidden" : ""}`}>
          <h1 className="title"> Step 2 of 3 : Investment Goals </h1>
          <p className="p1">
            Tell us more about why you want to invest on AngelList Venture
          </p>
          <div className="q1">
            <p className="q">
              Which of the following investment strategies(or products) best
              match your preferences ?
            </p>
            <div className="radio">
              <label>
                <input type="checkbox" name="q1" />
                Picking Companies...
              </label>
              <label>
                <input type="checkbox" name="q1" />
                Investing in funds....
              </label>
              <label>
                <input type="checkbox" name="q1" />
                Investing behind.....
              </label>
            </div>
          </div>
          <div className="q2">
            <p className="q">
              How much are you hoping to allocate( in Tez) to startups using
              AngelList Venture over the next 12 months ?
            </p>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="q2"
                  onChange={(e) =>
                    setDetails({
                      ...details,
                      howAccredited: 1,
                    })
                  }
                />
                Up to 20, 000
              </label>
              <label>
                <input
                  type="radio"
                  name="q2"
                  onChange={(e) =>
                    setDetails({
                      ...details,
                      howAccredited: 2,
                    })
                  }
                />
                Up to 50,000
              </label>
              <label>
                <input
                  type="radio"
                  name="q2"
                  onChange={(e) =>
                    setDetails({
                      ...details,
                      howAccredited: 3,
                    })
                  }
                />
                Up to 100,000
              </label>
              <label>
                <input
                  type="radio"
                  name="q2"
                  onChange={(e) =>
                    setDetails({
                      ...details,
                      howAccredited: 4,
                    })
                  }
                />
                Up to 250,000
              </label>
              <label>
                <input
                  type="radio"
                  name="q2"
                  onChange={(e) =>
                    setDetails({
                      ...details,
                      howAccredited: 5,
                    })
                  }
                />
                Up to 500, 000
              </label>
              <label>
                <input
                  type="radio"
                  name="q2"
                  onChange={(e) =>
                    setDetails({
                      ...details,
                      howAccredited: 6,
                    })
                  }
                />
                More than 500,000
              </label>
            </div>
          </div>
          <div className="q3">
            <p className="q">
              What percentage of your net - worth do you want to allocate to
              investing in startups ?
            </p>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="q3"
                  onChange={(e) =>
                    setDetails({ ...details, percentageNetworth: 1 })
                  }
                />
                Up to 5 %
              </label>
              <label>
                <input
                  type="radio"
                  name="q3"
                  onChange={(e) =>
                    setDetails({ ...details, percentageNetworth:2 })
                  }
                />
                Up to 10 %
              </label>
              <label>
                <input
                  type="radio"
                  name="q3"
                  onChange={(e) =>
                    setDetails({ ...details, percentageNetworth: 3 })
                  }
                />
                Up to 15 %
              </label>
              <label>
                <input
                  type="radio"
                  name="q3"
                  onChange={(e) =>
                    setDetails({
                      ...details,
                      percentageNetworth: 4,
                    })
                  }
                />
                More than % 15
              </label>
            </div>
          </div>
          <div className="q4">
            <p className="q">
              What are your main reasons for choosing AngelList Venture ?
            </p>
            <div className="radio">
              <label>
                <input type="checkbox" name="q4" />
                Generating financial...
              </label>
              <label>
                <input type="checkbox" name="q4" />
                Meeting new people....
              </label>
              <label>
                <input type="checkbox" name="q4" />
                Accessing dealflow.....
              </label>
              <label>
                <input type="checkbox" name="q4" />
                Learing more.....
              </label>
            </div>
          </div>
          <div className="q5">
            <p className="q"> How are you hoping to use AngelList Venture ? </p>
            <textarea
              id="q"
              className="input-text"
              style={{ width: "650px" }}
              rows="3"
            />
          </div>
          <button
            className="continue"
            type="button"
            onClick={() => {
              setStep(1);
            }}
          >
            Back
          </button>
          <button
            className="continue"
            type="button"
            onClick={() => {
              setStep(3);
            }}
          >
            Continue
          </button>
        </div>
      {/* Step 3 */}
        <div className={"main " + `${step != 3 ? "hidden" : ""}`}>
          <h1 className="title"> Step 3 of 3 : Past Experience </h1>
          <p className="p1">
            Yours goals and past experience can help unlock access to investment
            opportunities
          </p>
          <div className="q1">
            <p className="q"> LinkedIn Profile </p>
            <input
              type="text"
              className="input-text"
              onChange={(e) =>
                setDetails({ ...details, linkedIn: e.target.value })
              }
            />
          </div>
          <div className="q2">
            <p className="q">
              What is your experience in investing in venture - backed tech
              startups or venture capital funds ?
            </p>
            <div className="radio">
              <label>
                <input type="checkbox" name="q2" /> I invested in a...
              </label>
              <label>
                <input type="checkbox" name="q2" /> I invested in ...
              </label>
              <label>
                <input type="checkbox" name="q2" /> I work or worked.....
              </label>
              <label>
                <input type="checkbox" name="q2" /> I represent or
                represented.....
              </label>
              <label>
                <input type="checkbox" name="q2" />
                None of the above
              </label>
            </div>
          </div>
          <div className="q3">
            <p className="q">
              What is your experience working with tech startups ?
            </p>
            <div className="radio">
              <label>
                <input type="checkbox" name="q3" /> I work or...
              </label>
              <label>
                <input type="checkbox" name="q3" /> I advise..
              </label>
              <label>
                <input type="checkbox" name="q3" /> I am or.....
              </label>
              <label>
                <input type="checkbox" name="q3" />
                None of the above
              </label>
            </div>
          </div>
          <div className="q4">
            <p className="q"> How did you hear about AngelList Venture ? </p>
            <div className="radio">
              <label>
                <input type="checkbox" name="q4" />
                Google Search
              </label>
              <label>
                <input type="checkbox" name="q4" />
                Newsletter / Media Sites
              </label>
              <label>
                <input type="checkbox" name="q4" />
                Twitter
              </label>
              <label>
                <input type="checkbox" name="q4" />
                Friend or Connection
              </label>
              <label>
                <input type="checkbox" name="q4" />
                AngelList Syndicate Lead or Fund Manager
              </label>
              <label>
                <input type="checkbox" name="q4" />
                Others
              </label>
            </div>
          </div>
          <div className="q5">
            <p className="q">
              Please carefully review the information below before submitting
              your application.
            </p>
            <ol>
              <li> I understand that.. </li> <li> I understand that.. </li>
              <li> I promise to.. </li> <li> If I invest, I.. </li>
              <li> I understand that.. </li>
              <li> I declare that I am the resident of India.. </li>
            </ol>
            <label>
              <input type="checkbox" name="q4" />I agree to the terms and
              conditions, as well as the terms above.
            </label>
          </div>
          <button
            className="continue"
            type="button"
            onClick={() => {
              setStep(2);
            }}
          >
            Back
          </button>

          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            {loading === true ? "Loading..." : "Submit Form"}
          </Button>
        </div>
    </form>
  );
};