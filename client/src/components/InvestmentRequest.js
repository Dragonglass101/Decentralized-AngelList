import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { alpha, makeStyles } from '@material-ui/core/styles';

import InvestorNavbar from './InvestorNavbar';
import NavFloating from './NavFloating';

import { getActiveAccount } from '../utils/wallet';

import { getKeyBigMapByID, getRootStorage } from '../utils/Api';
import { investThroughDirectEquity, investThroughSAFE } from '../utils/operation';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';

//Transaction Debit/credit/pending

import SearchIcon from '@material-ui/icons/Search';
import TimerRoundedIcon from '@material-ui/icons/TimerRounded';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'rgb(26,27,47)',
    color: 'grey'
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(0),
  },
  padded: {
    padding: theme.spacing(3),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
}));

export const InvestmentRequest = () => {
  const classes = useStyles();
  const companyBigMapID = 79636;
  const investorBigMapID = 79640;
  const fundraiseBigMapID = 79639;

  const [wallet, setWallet] = useState(null);
  const [loading, setloading] = useState(false);
  const [pendingList, setpendingList] = useState(null);

  const [currCompany, setcurrCompany] = useState(null);

  const [details, setDetails] = useState({
    companyName: "",
    contractType: "",
    ownership: null,
    companyValuation: null,
    alreadyInvested: true,
    investement: null
  });

  const [view, setView] = React.useState('list');

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  useEffect(() => {
    if (!wallet) {
      (async () => {
        const activeAccount = await getActiveAccount();
        setWallet(activeAccount);
      })();
    }
  }, []);

  async function makePendingPaymentList() {
    const storage = await getRootStorage();

    const tempElements = [];
    for (let companyAddress of storage["all_companies"]) {
      const companyDetails = await getKeyBigMapByID(companyBigMapID, companyAddress);
      console.log(companyDetails);
      const companyJSON = await axios("https://" + companyDetails.value["company_profile_Id"] + ".ipfs.dweb.link/metadata.json");
      const companyimageUri = companyJSON.data.image;
      const companyimageHash = companyimageUri.substring(7, companyimageUri.length-5);

      const fundraiseDetails = await getKeyBigMapByID(fundraiseBigMapID, `{"address":"${companyAddress}","nat":"${companyDetails.value["round_num"]}"}`);
      console.log(companyJSON);
      console.log(fundraiseDetails);
      const investmentDetails = (companyDetails.value["investor_requests"]);
      if (companyDetails.value["request_accepted"] && companyDetails.value["investor_accepted"] === wallet.address) {
        for(let request of investmentDetails){
          console.log(request);
          tempElements.push(
            <>
              <ToggleButton
                onClick={() => { 
                  setcurrCompany(companyAddress); 
                  handleShowAgreement(
                    companyJSON.data.name, 
                    fundraiseDetails.value.investment_type,
                    fundraiseDetails.value.ownership, 
                    fundraiseDetails.value.valuation_cap, 
                    Number(fundraiseDetails.value.investment), 
                    fundraiseDetails.value.investement_confirmed) }}
                value="chat1" aria-label="chat1" style={{ textTransform: 'capitalize', border: '0px' }}>
                  <div className='' style={{ width: '25%' }}>
                    <Avatar src={"https://" + companyimageHash + ".ipfs.dweb.link/blob"}/>
                  </div>
                  <div className='text-start' style={{ width: '58%' }}>
                    <h6 className='m-0 text-black'>{companyJSON.data.name}</h6>
                    <span className='text-secondary font13'>{fundraiseDetails.value.investment_type} ꜩ</span>
                  </div>
                  <div className='text-end' style={{ width: '17%' }}>
                    <span className='text-secondary font13'>25Jul</span>
                  </div>
                </ToggleButton>

                <Divider />
            </>
          )
        }
      }
    }
    setpendingList(tempElements);
  }

  if (wallet && !pendingList) {
    makePendingPaymentList();
  }

  function handleShowAgreement(name, type, ownership, valuation, investement, isinvested) {
    console.log("alsdkf", isinvested);
    setDetails({
      companyName: name, 
      contractType: type, 
      ownership: ownership, 
      companyValuation: valuation, 
      investement: investement, 
      alreadyInvested: isinvested 
    })
  }

  async function handleSignContract(e) {
    e.preventDefault();
    setloading(true);
    try {
      const investorDetails = await getKeyBigMapByID(investorBigMapID, wallet.address);
      const investorJSON = await axios("https://" + investorDetails.value["investor_profile_Id"] + ".ipfs.dweb.link/metadata.json");

      if (details["contractType"] === "SAFE") {
        await investThroughSAFE(currCompany, investorJSON.data.name, details["investement"]);
      }
      if (details["contractType"] === "DirectEquity") {
        await investThroughDirectEquity(currCompany, investorJSON.data.name, details["investement"]);
      }
    } catch (error) {
      alert("Transaction Failed:", error.message);
    }
    setloading(false);
  }

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
        </AppBar>
        <InvestorNavbar />
        <main className={classes.content}>

          <NavFloating />

          <div className={classes.padded}>
            <div className='container shadow p-3 rounded15 h-100 d-flex'>
              <div className='p-3' style={{ width: '40%' }}>
                <div className='d-flex justify-content-between align-items-center'>
                  <h3>Pending Investements</h3>
                  {/* <Button style={{ textTransform: 'capitalize' }} variant='contained' color='primary'>Add Member</Button> */}
                </div>
                <div className="input-group shadow-sm mt-3 w-100" style={{ width: '90%', overflow: 'hidden', borderColor: 'rgb(18, 24, 39)' }}>
                  <input style={{ border: '0px' }} type="text" className="form-control bg-white" placeholder="Search Contacts" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button className="btn background-purplepink" type="button" id="button-addon2">
                    <SearchIcon style={{ color: 'white' }} />
                  </button>
                </div>
                <div className='container p-0 shadow mt-4 rounded15' style={{ overflowY: 'auto', overflowX: 'hidden', height: '380px' }}>
                  <ToggleButtonGroup className='w-100' orientation="vertical" value={view} exclusive onChange={handleChange} style={{ textTransform: 'capitalize', border: '0px' }}>
                    {pendingList}
                  </ToggleButtonGroup>
                </div>
              </div>
              {currCompany ?
              <div className='shadow-sm m-3 rounded15 bg-white' style={{ width: '60%', height: '505px' }}>
                <div className='p-3 d-flex justify-content-between align-items-center' id='contract-start' style={{ height: '10%', borderRadius:'15px 15px 0 0', backgroundColor:'#e9e9e9' }}>
                    <h5 className='m-0'>{details["companyName"]}</h5>
                    <div className='d-flex justify-content-between align-items-center'>
                    <TimerRoundedIcon />
                    </div>
                </div>
                <div id='contract-window' style={{ height: '80%', overflow: 'auto', border:'1px solid', borderColor :'rgb(233, 233, 233)', borderTopWidth:'0px', borderBottomWidth:'0px' }}>
                  <div id='contract-content'>
                    <table className="table mt-4 w-75 mx-auto shadow-sm">
                      <thead style={{ fontSize: '20px' }}>
                        <td>
                          {details["contractType"]} Contract
                        </td>
                      </thead>
                      <tbody>
                        {details["contractType"] === "DirectEquity" ?
                        <tr>
                          <th>Ownership<p className='font10 text-secondary m-0'>on valuation cap</p></th>
                          <td>{details["ownership"]}%</td>
                        </tr> : null}
                        {details["contractType"] === "SAFE" ?
                        <tr>
                          <th>Valuation Cap</th>
                          <td>{details["companyValuation"]} ꜩ</td>
                        </tr> : null}
                        <tr>
                          <th>Investment Amount</th>
                          <td>{details["investement"]} ꜩ</td>
                        </tr>
                      </tbody>
                    </table>

                    <h4 className='font-numbers fw-bold text-center pt-3 pb-2'>Terms & Conditions</h4>
                    <div id='tnc' className='mx-auto' style={{ fontSize: '12px', width: '90%' }}>
                      <p>THIS INSTRUMENT AND ANY SECURITIES ISSUABLE PURSUANT HERETO HAVE NOT BEEN REGISTERED UNDER THE SECURITIES ACT OF 1933, AS AMENDED (THE &ldquo;<strong>SECURITIES ACT</strong>&rdquo;), OR UNDER THE SECURITIES LAWS OF CERTAIN STATES.&nbsp;&nbsp;THESE SECURITIES MAY NOT BE OFFERED, SOLD OR OTHERWISE TRANSFERRED, PLEDGED OR HYPOTHECATED EXCEPT AS PERMITTED IN THIS SAFE AND UNDER THE ACT AND APPLICABLE STATE SECURITIES LAWS PURSUANT TO AN EFFECTIVE REGISTRATION STATEMENT OR AN EXEMPTION THEREFROM. &nbsp;</p>
                      <p><br /></p>
                      <p><strong>{details["companyName"]}</strong></p>
                      <p><br /></p>
                      <p><strong>SAFE&nbsp;</strong></p>
                      <p><strong>(Simple Agreement for Future Equity)</strong></p>
                      <p>THIS CERTIFIES THAT in exchange for the payment by [Investor Name] (the &ldquo;<strong>Investor</strong>&rdquo;) of $[_____________] (the &ldquo;<strong>Purchase Amount</strong>&rdquo;) on or about [Date of Safe], [Company Name], a [State of Incorporation] corporation (the &ldquo;<strong>Company</strong>&rdquo;), issues to the Investor the right to certain shares of the Company&rsquo;s Capital Stock, subject to the terms described below.</p>
                      <p>This Safe is one of the forms available at <a href="http://ycombinator.com/documents">http://ycombinator.com/documents</a> and the Company and the Investor agree that neither one has modified the form, except to fill in blanks and bracketed terms.&nbsp;</p>
                      <p>The &ldquo;<strong>Post-Money Valuation Cap</strong>&rdquo; is $[_____________].&nbsp;&nbsp;See <strong>Section 2</strong> for certain additional defined terms.</p>
                      <p><strong>1. &nbsp; &nbsp;<em>Events</em></strong></p>
                      <p>&nbsp; &nbsp; (a) &nbsp; &nbsp;<strong>Equity Financing</strong>. If there is an Equity Financing before the termination of this Safe, on the initial closing of such Equity Financing, this Safe will automatically convert into the greater of: (1) the number of shares of Standard Preferred Stock equal to the Purchase Amount divided by the lowest price per share of the Standard Preferred Stock; or (2) the number of shares of Safe Preferred Stock equal to the Purchase Amount divided by the Safe Price.&nbsp; &nbsp;</p>
                      <p>&nbsp; &nbsp; In connection with the automatic conversion of this Safe into shares of Standard Preferred Stock or Safe Preferred Stock, the Investor will execute and deliver to the Company all of the transaction documents related to the Equity Financing; <em>provided,&nbsp;</em>that such documents (i) are the same documents to be entered into with the purchasers of Standard Preferred Stock, with appropriate variations for the Safe Preferred Stock if applicable, and (ii) have customary exceptions to any drag-along applicable to the Investor, including (without limitation) limited representations, warranties, liability and indemnification obligations for the Investor.</p>
                      <p>&nbsp; &nbsp; (b) &nbsp; &nbsp;<strong>Liquidity Event</strong>.&nbsp;&nbsp;If there is a Liquidity Event before the termination of this Safe, this Safe will automatically be entitled (subject to the liquidation priority set forth in Section 1(d) below) to receive a portion of Proceeds, due and payable to the Investor immediately prior to, or concurrent with, the consummation of such Liquidity Event, equal to the greater of (i) the Purchase Amount (the &ldquo;<strong>Cash-Out Amount</strong>&rdquo;) or (ii) the amount payable on the number of shares of Common Stock equal to the Purchase Amount divided by the Liquidity Price (the &ldquo;<strong>Conversion Amount</strong>&rdquo;).&nbsp;&nbsp;If any of the Company&rsquo;s securityholders are given a choice as to the form and amount of Proceeds to be received in a Liquidity Event, the Investor will be given the same choice, <em>provided</em> that the Investor may not choose to receive a form of consideration that the Investor would be ineligible to receive as a result of the Investor&rsquo;s failure to satisfy any requirement or limitation generally applicable to the Company&rsquo;s securityholders, or under any applicable laws.</p>
                      <p>&nbsp; &nbsp; Notwithstanding the foregoing, in connection with a Change of Control intended to qualify as a tax-free reorganization, the Company may reduce the cash portion of Proceeds payable to the Investor by the amount determined by its board of directors in good faith for such Change of Control to qualify as a tax-free reorganization for U.S. federal income tax purposes, provided that such reduction (A) does not reduce the total Proceeds payable to such Investor and (B) is applied in the same manner and on a pro rata basis to all securityholders who have equal priority to the Investor under Section 1(d).</p>
                      <p>&nbsp; &nbsp;&nbsp;(c) &nbsp; &nbsp;<strong>Dissolution Event</strong>. If there is a Dissolution Event before the termination of this Safe, the Investor will automatically be entitled (subject to the liquidation priority set forth in Section 1(d) below) to receive a portion of Proceeds equal to the Cash-Out Amount, due and payable to the Investor immediately prior to the consummation of the Dissolution Event.&nbsp;</p>
                      <p>(d) &nbsp; &nbsp;<strong>Liquidation Priority</strong>.&nbsp;&nbsp;In a Liquidity Event or Dissolution Event, this Safe is intended to operate like standard non-participating Preferred Stock.&nbsp;&nbsp;The Investor&rsquo;s right to receive its Cash-Out Amount is:</p>
                      <p>(i) &nbsp; &nbsp;Junior to payment of outstanding indebtedness and creditor claims, including contractual claims for payment and convertible promissory notes (to the extent such convertible promissory notes are not actually or notionally converted into Capital Stock);</p>
                      <p>(ii) &nbsp; &nbsp;On par with payments for other Safes and/or Preferred Stock, and if the applicable Proceeds are insufficient to permit full payments to the Investor and such other Safes and/or Preferred Stock, the applicable Proceeds will be distributed pro rata to the Investor and such other Safes and/or Preferred Stock in proportion to the full payments that would otherwise be due; and&nbsp;</p>
                      <p>(iii) &nbsp; &nbsp;Senior to payments for Common Stock.</p>
                      <p>The Investor&rsquo;s right to receive its Conversion Amount is (A) on par with payments for Common Stock and other Safes and/or Preferred Stock who are also receiving Conversion Amounts or Proceeds on a similar as-converted to Common Stock basis, and (B) junior to payments described in clauses (i) and (ii) above (in the latter case, to the extent such payments are Cash-Out Amounts or similar liquidation preferences).&nbsp;</p>
                      <p>(e) &nbsp; &nbsp;<strong>Termination</strong>.&nbsp;&nbsp;This Safe will automatically terminate (without relieving the Company of any obligations arising from a prior breach of or non-compliance with this Safe) immediately following the earliest to occur of: (i) the issuance of Capital Stock to the Investor pursuant to the automatic conversion of this Safe under Section 1(a); or (ii) the payment, or setting aside for payment, of amounts due the Investor pursuant to Section 1(b) or Section 1(c).</p>
                      <p><strong>2. &nbsp; &nbsp;<em>Definitions</em></strong></p>
                      <p>&nbsp; &nbsp; &ldquo;<strong>Capital Stock</strong>&rdquo; means the capital stock of the Company, including, without limitation, the &ldquo;<strong>Common Stock</strong>&rdquo; and the &ldquo;<strong>Preferred Stock</strong>.&rdquo; &nbsp;</p>
                      <p>&nbsp; &nbsp; &ldquo;<strong>Change of Control</strong>&rdquo; means (i)&nbsp;a transaction or series of related transactions in which any &ldquo;person&rdquo; or &ldquo;group&rdquo; (within the meaning of Section 13(d) and 14(d) of the Securities Exchange Act of 1934, as amended), becomes the &ldquo;beneficial owner&rdquo; (as defined in Rule 13d-3 under the Securities Exchange Act of 1934, as amended), directly or indirectly, of more than 50% of the outstanding voting securities of the Company having the right to vote for the election of members of the Company&rsquo;s board of directors, (ii)&nbsp;any reorganization, merger or consolidation of the Company, other than a transaction or series of related transactions in which the holders of the voting securities of the Company outstanding immediately prior to such transaction or series of related transactions retain, immediately after such transaction or series of related transactions, at least a majority of the total voting power represented by the outstanding voting securities of the Company or such other surviving or resulting entity or (iii)&nbsp;a sale, lease or other disposition of all or substantially all of the assets of the Company.</p>
                      <p>&ldquo;<strong>Company Capitalization</strong>&rdquo; is calculated as of immediately prior to the Equity Financing and (without double-counting, in each case calculated on an as-converted to Common Stock basis):</p>
                      <ul>
                        <li>Includes all shares of Capital Stock issued and outstanding;</li>
                        <li>Includes all Converting Securities;</li>
                        <li>Includes all (i) issued and outstanding Options and (ii) Promised Options; and</li>
                        <li>Includes the Unissued Option Pool, except that any increase to the Unissued Option Pool in connection with the Equity Financing shall only be included to the extent that the number of Promised Options exceeds the Unissued Option Pool prior to such increase.</li>
                      </ul>
                      <p>&ldquo;<strong>Converting Securities</strong>&rdquo; includes this Safe and other convertible securities issued by the Company, including but not limited to: (i) other Safes; (ii) convertible promissory notes and other convertible debt instruments; and (iii) convertible securities that have the right to convert into shares of Capital Stock. &nbsp;</p>
                      <p>&nbsp; &nbsp; &ldquo;<strong>Direct Listing</strong>&rdquo; means the Company&rsquo;s initial listing of its Common Stock (other than shares of Common Stock not eligible for resale under Rule 144 under the Securities Act) on a national securities exchange by means of an effective registration statement on Form S-1 filed by the Company with the SEC that registers shares of existing capital stock of the Company for resale, as approved by the Company&rsquo;s board of directors. For the avoidance of doubt, a Direct Listing shall not be deemed to be an underwritten offering and shall not involve any underwriting services.&nbsp;</p>
                      <p>&nbsp; &nbsp; &ldquo;<strong>Dissolution Event</strong>&rdquo; means (i) a voluntary termination of operations, (ii) a general assignment for the benefit of the Company&rsquo;s creditors or (iii) any other liquidation, dissolution or winding up of the Company (<strong>excluding</strong> a Liquidity Event), whether voluntary or involuntary.</p>
                      <p>&nbsp; &nbsp; &ldquo;<strong>Dividend Amount</strong>&rdquo; means, with respect to any date on which the Company pays a dividend on its outstanding Common Stock, the amount of such dividend that is paid per share of Common Stock multiplied by (x) the Purchase Amount divided by (y) the Liquidity Price (treating the dividend date as a Liquidity Event solely for purposes of calculating such Liquidity Price).</p>
                      <p>&nbsp; &nbsp; &ldquo;<strong>Equity Financing</strong>&rdquo; means a bona fide transaction or series of transactions with the principal purpose of raising capital, pursuant to which the Company issues and sells Preferred Stock at a fixed valuation, including but not limited to, a pre-money or post-money valuation.</p>
                      <p>&nbsp; &nbsp; &ldquo;<strong>Initial Public Offering</strong>&rdquo; means the closing of the Company&rsquo;s first firm commitment underwritten initial public offering of Common Stock pursuant to a registration statement filed under the Securities Act.</p>
                      <p>&nbsp; &nbsp; &ldquo;<strong>Liquidity Capitalization</strong>&rdquo; is calculated as of immediately prior to the Liquidity Event, and (without double- counting, in each case calculated on an as-converted to Common Stock basis):&nbsp;</p>
                      <ul>
                        <li>Includes all shares of Capital Stock issued and outstanding;</li>
                        <li>Includes all (i) issued and outstanding Options and (ii) to the extent receiving Proceeds, Promised Options;</li>
                        <li>Includes all Converting Securities, <strong>other than</strong> any Safes and other convertible securities (including without limitation shares of Preferred Stock) where the holders of such securities are receiving Cash-Out Amounts or similar liquidation preference payments in lieu of Conversion Amounts or similar &ldquo;as-converted&rdquo; payments; and</li>
                        <li>Excludes the Unissued Option Pool.</li>
                      </ul>
                      <p><br /></p>
                      <p>&nbsp; &nbsp; &ldquo;<strong>Liquidity Event</strong>&rdquo; means a Change of Control, a Direct Listing or an Initial Public Offering.</p>
                      <p>&nbsp; &nbsp; &ldquo;<strong>Liquidity Price</strong>&rdquo; means the price per share equal to the Post-Money Valuation Cap divided by the Liquidity Capitalization. &nbsp; &nbsp;</p>
                      <p>&nbsp; &nbsp; &ldquo;<strong>Options</strong>&rdquo; includes options, restricted stock awards or purchases, RSUs, SARs, warrants or similar securities, vested or unvested.</p>
                      <p>&ldquo;<strong>Proceeds</strong>&rdquo; means cash and other assets (including without limitation stock consideration) that are proceeds from the Liquidity Event or the Dissolution Event, as applicable, and legally available for distribution. &nbsp;</p>
                      <p>&ldquo;<strong>Promised Options</strong>&rdquo; means promised but ungranted Options that are the greater of those (i) promised pursuant to agreements or understandings made prior to the execution of, or in connection with, the term sheet or letter of intent for the Equity Financing or Liquidity Event, as applicable (or the initial closing of the Equity Financing or consummation of the Liquidity Event, if there is no term sheet or letter of intent), (ii) in the case of an Equity Financing, treated as outstanding Options in the calculation of the Standard Preferred Stock&rsquo;s price per share, or (iii) in the case of a Liquidity Event, treated as outstanding Options in the calculation of the distribution of the Proceeds.</p>
                      <p>&nbsp; &nbsp; &ldquo;<strong>Safe</strong>&rdquo; means an instrument containing a future right to shares of Capital Stock, similar in form and content to this instrument, purchased by investors for the purpose of funding the Company&rsquo;s business operations.&nbsp;&nbsp;References to &ldquo;this Safe&rdquo; mean this specific instrument.&nbsp;</p>
                      <p>&nbsp; &nbsp; &ldquo;<strong>Safe</strong> <strong>Preferred Stock</strong>&rdquo; means the shares of the series of Preferred Stock issued to the Investor in an Equity Financing, having the identical rights, privileges, preferences and restrictions as the shares of Standard Preferred Stock, other than with respect to: (i) the per share liquidation preference and the initial conversion price for purposes of price-based anti-dilution protection, which will equal the Safe Price; and (ii) the basis for any dividend rights, which will be based on the Safe Price. &nbsp;</p>
                      <p>&nbsp; &nbsp; &ldquo;<strong>Safe Price</strong>&rdquo; means the price per share equal to the Post-Money Valuation Cap divided by the Company Capitalization.</p>
                      <p>&nbsp; &nbsp; &ldquo;S<strong>tandard Preferred Stock</strong>&rdquo; means the shares of the series of Preferred Stock issued to the investors investing new money in the Company in connection with the initial closing of the Equity Financing.</p>
                      <p>&nbsp; &nbsp; &ldquo;<strong>Unissued Option Pool</strong>&rdquo; means all shares of Capital Stock that are reserved, available for future grant and not subject to any outstanding Options or Promised Options (but in the case of a Liquidity Event, only to the extent Proceeds are payable on such Promised Options) under any equity incentive or similar Company plan.</p>
                      <p><strong>3. &nbsp; &nbsp;<em>Company Representations</em></strong></p>
                      <p>&nbsp; &nbsp; (a) &nbsp; &nbsp;The Company is a corporation duly organized, validly existing and in good standing under the laws of its state of incorporation, and has the power and authority to own, lease and operate its properties and carry on its business as now conducted.</p>
                      <p>&nbsp; &nbsp; (b) &nbsp; &nbsp;The execution, delivery and performance by the Company of this Safe is within the power of the Company and has been duly authorized by all necessary actions on the part of the Company (subject to section 3(d)). This Safe constitutes a legal, valid and binding obligation of the Company, enforceable against the Company in accordance with its terms, except as limited by bankruptcy, insolvency or other laws of general application relating to or affecting the enforcement of creditors&rsquo; rights generally and general principles of equity.&nbsp;&nbsp;To its knowledge, the Company is not in violation of (i) its current certificate of incorporation or bylaws, (ii) any material statute, rule or regulation applicable to the Company or (iii) any material debt or contract to which the Company is a party or by which it is bound, where, in each case, such violation or default, individually, or together with all such violations or defaults, could reasonably be expected to have a material adverse effect on the Company.</p>
                      <p>&nbsp; &nbsp; (c) &nbsp; &nbsp;The performance and consummation of the transactions contemplated by this Safe do not and will not: (i) violate any material judgment, statute, rule or regulation applicable to the Company; (ii) result in the acceleration of any material debt or contract to which the Company is a party or by which it is bound; or (iii) result in the creation or imposition of any lien on any property, asset or revenue of the Company or the suspension, forfeiture, or nonrenewal of any material permit, license or authorization applicable to the Company, its business or operations.</p>
                      <p>&nbsp; &nbsp; (d) &nbsp; &nbsp;No consents or approvals are required in connection with the performance of this Safe, other than: (i) the Company&rsquo;s corporate approvals; (ii) any qualifications or filings under applicable securities laws; and (iii) necessary corporate approvals for the authorization of Capital Stock issuable pursuant to Section 1.</p>
                      <p>&nbsp; &nbsp; (e) &nbsp; &nbsp;To its knowledge, the Company owns or possesses (or can obtain on commercially reasonable terms) sufficient legal rights to all patents, trademarks, service marks, trade names, copyrights, trade secrets, licenses, information, processes and other intellectual property rights necessary for its business as now conducted and as currently proposed to be conducted, without any conflict with, or infringement of the rights of, others.</p>
                      <p><strong>4. &nbsp; &nbsp;<em>Investor Representations</em></strong></p>
                      <p>&nbsp; &nbsp; (a) &nbsp; &nbsp;The Investor has full legal capacity, power and authority to execute and deliver this Safe and to perform its obligations hereunder. This Safe constitutes valid and binding obligation of the Investor, enforceable in accordance with its terms, except as limited by bankruptcy, insolvency or other laws of general application relating to or affecting the enforcement of creditors&rsquo; rights generally and general principles of equity.</p>
                      <p>&nbsp; &nbsp; (b) &nbsp; &nbsp;The Investor is an accredited investor as such term is defined in Rule 501 of Regulation D under the Securities Act, and acknowledges and agrees that if not an accredited investor at the time of an Equity Financing, the Company may void this Safe and return the Purchase Amount. The Investor has been advised that this Safe and the underlying securities have not been registered under the Securities Act, or any state securities laws and, therefore, cannot be resold unless they are registered under the Securities Act and applicable state securities laws or unless an exemption from such registration requirements is available. The Investor is purchasing this Safe and the securities to be acquired by the Investor hereunder for its own account for investment, not as a nominee or agent, and not with a view to, or for resale in connection with, the distribution thereof, and the Investor has no present intention of selling, granting any participation in, or otherwise distributing the same. The Investor has such knowledge and experience in financial and business matters that the Investor is capable of evaluating the merits and risks of such investment, is able to incur a complete loss of such investment without impairing the Investor&rsquo;s financial condition and is able to bear the economic risk of such investment for an indefinite period of time.&nbsp;</p>
                      <p><strong>5. &nbsp; &nbsp;<em>Miscellaneous</em></strong></p>
                      <p>&nbsp; &nbsp; (a)<strong><em>&nbsp; &nbsp;&nbsp;</em></strong>Any provision of this Safe may be amended, waived or modified by written consent of the Company and either (i) the Investor or (ii) the majority-in-interest of all then-outstanding Safes with the same &ldquo;Post-Money Valuation Cap&rdquo; and &ldquo;Discount Rate&rdquo; as this Safe (and Safes lacking one or both of such terms will be considered to be the same with respect to such term(s)), <em>provided that</em> with respect to clause (ii): (A) the Purchase Amount may not be amended, waived or modified in this manner, (B) the consent of the Investor and each holder of such Safes must be solicited (even if not obtained), and (C) such amendment, waiver or modification treats all such holders in the same manner. &ldquo;Majority-in-interest&rdquo; refers to the holders of the applicable group of Safes whose Safes have a total Purchase Amount greater than 50% of the total Purchase Amount of all of such applicable group of Safes.</p>
                      <p>&nbsp; &nbsp; (b) &nbsp; &nbsp;Any notice required or permitted by this Safe will be deemed sufficient when delivered personally or by overnight courier or sent by email to the relevant address listed on the signature page, or 48 hours after being deposited in the U.S. mail as certified or registered mail with postage prepaid, addressed to the party to be notified at such party&rsquo;s address listed on the signature page, as subsequently modified by written notice.</p>
                      <p>&nbsp; &nbsp; (c) &nbsp; &nbsp;The Investor is not entitled, as a holder of this Safe, to vote or be deemed a holder of Capital Stock for any purpose other than tax purposes, nor will anything in this Safe be construed to confer on the Investor, as such, any rights of a Company stockholder or rights to vote for the election of directors or on any matter submitted to Company stockholders, or to give or withhold consent to any corporate action or to receive notice of meetings, until shares have been issued on the terms described in Section 1.&nbsp;&nbsp;However, if the Company pays a dividend on outstanding shares of Common Stock (that is not payable in shares of Common Stock) while this Safe is outstanding, the Company will pay the Dividend Amount to the Investor at the same time.</p>
                      <p>&nbsp; &nbsp; (d) &nbsp; &nbsp;Neither this Safe nor the rights in this Safe are transferable or assignable, by operation of law or otherwise, by either party without the prior written consent of the other; <em>provided, however</em>, that this Safe and/or its rights may be assigned without the Company&rsquo;s consent by the Investor (i) to the Investor&rsquo;s estate, heirs, executors, administrators, guardians and/or successors in the event of Investor&rsquo;s death or disability, or (ii)&nbsp;to any other entity who directly or indirectly, controls, is controlled by or is under common control with the Investor, including, without limitation, any general partner, managing member, officer or director of the Investor, or any venture capital fund now or hereafter existing which is controlled by one or more general partners or managing members of, or shares the same management company with, the Investor; and <em>provided, further</em>, that the Company may assign this Safe in whole, without the consent of the Investor, in connection with a reincorporation to change the Company&rsquo;s domicile.</p>
                      <p>&nbsp; &nbsp; (e) &nbsp; &nbsp;In the event any one or more of the provisions of this Safe is for any reason held to be invalid, illegal or unenforceable, in whole or in part or in any respect, or in the event that any one or more of the provisions of this Safe operate or would prospectively operate to invalidate this Safe, then and in any such event, such provision(s) only will be deemed null and void and will not affect any other provision of this Safe and the remaining provisions of this Safe will remain operative and in full force and effect and will not be affected, prejudiced, or disturbed thereby.</p>
                      <p>&nbsp; &nbsp; (f) &nbsp; &nbsp;All rights and obligations hereunder will be governed by the laws of the State of [Governing Law Jurisdiction], without regard to the conflicts of law provisions of such jurisdiction.</p>
                      <p>&nbsp; &nbsp; (g) &nbsp; &nbsp;The parties acknowledge and agree that for United States federal and state income tax purposes this Safe is, and at all times has been, intended to be characterized as stock, and more particularly as common stock for purposes of Sections 304, 305, 306, 354, 368, 1036 and 1202 of the Internal Revenue Code of 1986, as amended.&nbsp;&nbsp;Accordingly, the parties agree to treat this Safe consistent with the foregoing intent for all United States federal and state income tax purposes (including, without limitation, on their respective tax returns or other informational statements).</p>
                      <p>(<em>Signature page follows</em>)</p>
                      <p>IN WITNESS WHEREOF, the undersigned have caused this Safe to be duly executed and delivered.</p>
                    </div>
                  </div>
                </div>
                <div id='contract-end' className='m-0' style={{ height: '10%', borderRadius:'0 0 15px 15px', backgroundColor:'#e9e9e9' }}>
                  <div className='p-3 d-flex justify-content-between align-items-center h-100'>
                    {details["alreadyInvested"] ? 
                      <Tooltip title='Deposit Fund' aria-label='deposit-fund'>
                        <Button className='me-3 text-black background-accept py-1 font13 shadow' variant='contained'>
                          View Agreement
                        </Button>
                      </Tooltip>
                    :
                    <>
                    <h5 className='mb-0 ms-3'>{details["investement"]} ꜩ</h5>
                    <div className='d-flex justify-content-around'>
                      <Tooltip title='Deposit Fund' aria-label='deposit-fund'>
                        <Button onClick={handleSignContract} className='me-3 text-black background-accept py-1 font13 shadow' variant='contained'>
                          {loading ? "loading..." : "Sign Contract"}
                        </Button>
                      </Tooltip>
                      <Tooltip title='Reject Contract' aria-label='reject-contract'>
                        <Button className='background-deny py-1 font13 shadow' variant='contained' >
                          Refuse
                        </Button>
                      </Tooltip>
                    </div>
                    </>}
                  </div>
                </div>
              </div>
              :   
              <div className='shadow-sm m-3 p-3 d-flex align-items-center justify-content-center flex-column' style={{ width: '60%' }}>
                <div className='background-purplepink p-3 m-3 rounded-circle'>
                    <ForumRoundedIcon className='text-white' />
                </div>
                <span className='text-center m-0 text-secondary'>Start a Meaningful Converstation !</span>
              </div>}


            </div>
          </div>
        </main>
      </div>
    </>
  )
}