import smartpy as sp

class AngelList(sp.Contract):
    def __init__(self):
        self.init(
            # fees to register       -----------------------------------------------------------------------------
            feesToRegister = sp.mutez(5000000),

            # starups which raised funds
            fundraise_list = sp.list(t = sp.TAddress),

            # all startups
            all_startups = sp.list(t = sp.TAddress), 

            # StartUp's Storage      -----------------------------------------------------------------------------
            verified_startups = sp.big_map(
                        l={},
                        tkey = sp.TAddress, 
                        tvalue = sp.TRecord(
                            
                            #Company Details
                            company_name = sp.TString,
                            company_email = sp.TString,
                            company_wallet = sp.TAddress,
                            company_linkedin = sp.TString,
                            company_website = sp.TString,
                            company_type = sp.TString,
                            company_number = sp.TNat,
                            photoId = sp.TString,
                            documentId = sp.TString,
                            company_address = sp.TRecord( address = sp.TString, city = sp.TString, state = sp.TString, 
                                                            zip = sp.TNat, country = sp.TString),
                            
                            #Compnany CashFlow
                            ini_company_valuation = sp.TMutez,
                            curr_company_valuation = sp.TMutez,
                            credited_amount =  sp.TList(t = sp.TRecord(amount = sp.TMutez, tag = sp.TString, time = sp.TTimestamp)),
                            debited_amount = sp.TList(t = sp.TRecord(amount = sp.TMutez, tag = sp.TString, time = sp.TTimestamp)),
                            
                            
                            #FundRaising Details
                            round_num = sp.TNat,
                            total_shares = sp.TNat,
                            company_ownership = sp.TNat, 

                            fundraise_details = sp.TMap(
                                # l = {},
                                sp.TNat,
                                sp.TRecord(
                                    type = sp.TString, #Direct Equity, Safe
                                    fund_raised = sp.TMutez,
                                    safe_signed = sp.TBool,
                                    investor_address = sp.TAddress,
                                    valuation_cap = sp.TMutez,
                                    ownership = sp.TNat,
                                    time = sp.TTimestamp
                                )
                            ), 
            
                            #Members And Employees
                            member_count = sp.TNat,
                            employee_count = sp.TNat,
                            members_list = sp.TList(t = sp.TString),
                            employee_list = sp.TList(t = sp.TAddress),
                            
                            #Request and Negotiation
                            request_accepted = sp.TBool,
                            investor_accepted = sp.TAddress,
                            time_of_acceptance = sp.TTimestamp,
                            request_list = sp.TList(t = sp.TRecord(investor_address = sp.TAddress, valuation_cap = sp.TMutez, 
                                                        ownership = sp.TNat, type = sp.TString)),

                            #company safe-table
                            safe_table = sp.TList(t = sp.TRecord(
                                                name = sp.TString,
                                                investment = sp.TMutez,
                                                valuation_cap = sp.TMutez,
                                                ownership = sp.TNat,
                                                investment_recieved = sp.TBool,
                                                safe_converted = sp.TBool,
                                                )
                                            ),
                            

                            #company's cap-table
                            cap_table = sp.TList(t = sp.TRecord(
                                                        type_name = sp.TString, 
                                                        common_shares = sp.TNat,
                                                        common_options = sp.TNat,
                                                        preferred_shares = sp.TNat,
                                                        investement = sp.TMutez,
                                                        fd_shares = sp.TNat,
                                                        fd_percent = sp.TNat
                                                )
                                            )
                            
                            
                        )
                    ),


            
            # startup members
            startup_members = sp.big_map(
                        l={},
                        tkey = sp.TString, 
                        tvalue = sp.TRecord(
                            #Individual Details
                            member_name = sp.TString,
                            member_email = sp.TString,
                            member_wallet = sp.TAddress,
                            member_number = sp.TNat,
                            member_linkedin = sp.TString,
                            company_address = sp.TAddress,
                            photoId = sp.TString,
                            resumeId = sp.TString,
                            member_address = sp.TRecord( address = sp.TString, city = sp.TString, state = sp.TString, 
                                                            zip = sp.TNat, country = sp.TString),

                            #Individual Cap Table Details 
                            type = sp.TString, 
                            common_shares = sp.TNat,
                            common_options = sp.TNat,
                            preferred_shares = sp.TNat,
                            investment = sp.TMutez,
                            fd_shares = sp.TNat,
                            fd_percent = sp.TNat,
                            
                        )
                    ),

            
            total_startups = sp.nat(0)

           
        )

    @sp.entry_point
    def StartUpSignUp(self, params):
        sp.set_type(params, sp.TRecord(
                            company_name = sp.TString, 
                            company_email = sp.TString,
                            company_wallet = sp.TAddress,
                            company_linkedin = sp.TString,
                            company_website = sp.TString,
                            company_type = sp.TString,
                            company_number = sp.TNat,
                            photoId = sp.TString,
                            documentId = sp.TString,
                            company_address = sp.TRecord( address = sp.TString, city = sp.TString, state = sp.TString, 
                                                            zip = sp.TNat, country = sp.TString),
                            # total_shares = sp.TNat, 
                            valuation = sp.TMutez
                        )
                )
        
        sp.verify(sp.amount >= self.data.feesToRegister, "Invalid Amount")


        self.data.verified_startups[params.company_wallet] = sp.record(
                                                                company_name = sp.string(""), 
                                                                company_email = sp.string(""),
                                                                company_wallet = sp.address("tz1aTgF2c3vyrk2Mko1yzkJQGAnqUeDapxxm"),
                                                                company_linkedin = sp.string(""),
                                                                company_website = sp.string(""),
                                                                company_type = sp.string(""),
                                                                company_number = sp.nat(0),
                                                                photoId = sp.string(""),
                                                                documentId = sp.string(""),
                                                                company_address = sp.record( address = sp.string(""), city =sp.string(""), state = sp.string(""), 
                                                                                                zip = sp.nat(0), country = sp.string("")),

                                                                ini_company_valuation = sp.mutez(000000),
                                                                curr_company_valuation = sp.mutez(000000),
                                                                credited_amount =  [],
                                                                debited_amount = [],
                                                                round_num = sp.nat(0),
                                                                total_shares = sp.nat(0),
                                                                company_ownership = sp.nat(0), 
                                                                fundraise_details = sp.map(
                                                                        # l = {},
                                                                        tkey = sp.TNat,
                                                                        tvalue = sp.TRecord(
                                                                            type = sp.TString, #Direct Equity, Safe
                                                                            fund_raised = sp.TMutez,
                                                                            safe_signed = sp.TBool,
                                                                            investor_address = sp.TAddress,
                                                                            valuation_cap = sp.TMutez,
                                                                            ownership = sp.TNat,
                                                                            time = sp.TTimestamp
                                                                        )
                                                                    ), 

                                                                member_count = sp.nat(0),
                                                                employee_count = sp.nat(0),
                                                                members_list = [],
                                                                employee_list = [],

                                                                request_accepted = False,
                                                                investor_accepted = sp.address("tz1aTgF2c3vyrk2Mko1yzkJQGAnqUeDapxxm"),
                                                                time_of_acceptance = sp.now,
                                                                request_list = [],
                                                                safe_table = [] ,
                                                                cap_table = [] 
                                                            )
                 


                            

        #company details initialized
        self.data.verified_startups[params.company_wallet].company_name = params.company_name
        self.data.verified_startups[params.company_wallet].company_email= params.company_email
        self.data.verified_startups[params.company_wallet].company_wallet = params.company_wallet
        self.data.verified_startups[params.company_wallet].company_linkedin = params.company_linkedin
        self.data.verified_startups[params.company_wallet].company_website = params.company_website
        self.data.verified_startups[params.company_wallet].company_type = params.company_type
        self.data.verified_startups[params.company_wallet].company_number = params.company_number
        self.data.verified_startups[params.company_wallet].photoId = params.photoId
        self.data.verified_startups[params.company_wallet].documentId = params.documentId
        self.data.verified_startups[params.company_wallet].company_address = params.company_address
        
        #cashflow details initialized
        self.data.verified_startups[params.company_wallet].ini_company_valuation = params.valuation
        self.data.verified_startups[params.company_wallet].curr_company_valuation = params.valuation
        self.data.verified_startups[params.company_wallet].credited_amount = []
        self.data.verified_startups[params.company_wallet].debited_amount = []

        #fundraise details initialized
        # self.data.verified_startups[params.company_wallet].total_shares = params.total_shares
        self.data.verified_startups[params.company_wallet].round_num = sp.nat(0)
        self.data.verified_startups[params.company_wallet].company_ownership = sp.nat(1000000)

        #members and employee details initialized
        self.data.verified_startups[params.company_wallet].member_count = sp.nat(0)
        self.data.verified_startups[params.company_wallet].employee_count = sp.nat(0)
        self.data.verified_startups[params.company_wallet].employee_list = []
        self.data.verified_startups[params.company_wallet].members_list = []

        #request and negotiation
        self.data.verified_startups[params.company_wallet].request_accepted = sp.bool(False)
        self.data.verified_startups[params.company_wallet].time_of_acceptance = sp.now
        self.data.verified_startups[params.company_wallet].investor_accepted = sp.sender
        self.data.verified_startups[params.company_wallet].request_list = []

        #initialize cap-table and safe-table
        self.data.verified_startups[params.company_wallet].cap_table = []
        self.data.verified_startups[params.company_wallet].safe_table = []

        #add startup 
        self.data.all_startups.push(params.company_wallet)
        self.data.total_startups = self.data.total_startups + 1 

        #extra amount
        extra_amount = sp.amount - self.data.feesToRegister
        sp.if extra_amount > sp.tez(0):
            sp.send(sp.sender, extra_amount) 

    @sp.entry_point
    def addStartUpMembers(self, params):
        sp.set_type(params, sp.TRecord(member_name = sp.TString, member_email = sp.TString, member_wallet = sp.TAddress, member_number = sp.TNat, 
                            member_linkedin = sp.TString,company_address = sp.TAddress, photoId = sp.TString, resumeId = sp.TString, 
                            member_address = sp.TRecord( address = sp.TString, city = sp.TString, state = sp.TString, 
                                                            zip = sp.TNat, country = sp.TString), 

                            type = sp.TString, common_shares = sp.TNat, common_options = sp.TNat, preferred_shares = sp.TNat, 
                            investment = sp.TMutez, fd_shares = sp.TNat, fd_percent = sp.TNat
                            )
                        )
        #member-details initialized
        self.data.startup_members[params.member_name] = params
        self.data.startup_members[params.member_name].fd_shares = params.common_options + params.common_shares + params.preferred_shares


        #adding member to startup 
        self.data.verified_startups[params.company_address].member_count = self.data.verified_startups[params.company_address].member_count + 1
        self.data.verified_startups[params.company_address].members_list.push(params.member_name)

    @sp.entry_point
    def ini_computeCapTable(self, params):
        sp.set_type(params.company_wallet, sp.TAddress)

        sp.for member in self.data.verified_startups[params.company_wallet].members_list:
            self.data.verified_startups[params.company_wallet].total_shares = self.data.verified_startups[params.company_wallet].total_shares + self.data.startup_members[member].fd_shares    

        total_shares = sp.local('total_shares', self.data.verified_startups[params.company_wallet].total_shares)

        sp.for member in self.data.verified_startups[params.company_wallet].members_list:
            # self.data.verified_startups[params.company_wallet].total_shares = self.data.verified_startups[params.company_wallet].total_shares + member.fd_shares    
            self.data.startup_members[member].fd_percent = sp.nat(1000000) *  self.data.startup_members[member].fd_shares / total_shares.value
            new_record = sp.record( 
                                    type_name = self.data.startup_members[member].member_name,
                                    common_shares = self.data.startup_members[member].common_shares,
                                    common_options = self.data.startup_members[member].common_options, 
                                    preferred_shares = self.data.startup_members[member].preferred_shares, 
                                    investement = self.data.startup_members[member].investment,
                                    fd_shares = self.data.startup_members[member].fd_shares,
                                    fd_percent = self.data.startup_members[member].fd_percent
                                )

            self.data.verified_startups[params.company_wallet].cap_table.push(new_record)
    
    # #@sp.entry_point
    def computeCapTable(self, company_wallet):
        # sp.set_type(params.company_wallet, sp.TAddress)

        sp.for stakeholder in self.data.verified_startups[company_wallet].cap_table:
            stakeholder.fd_percent = sp.nat(1000000) * stakeholder.fd_shares / self.data.verified_startups[company_wallet].total_shares #percent * 10 to power 4
        
    
    @sp.entry_point
    def raiseFund(self, params):
        sp.set_type(params, sp.TRecord(company_wallet  = sp.TAddress, fund_raised = sp.TMutez, ownership = sp.TNat, type = sp.TString))
        
        #check Authorization
        # sp.verify(self.data.all_startups.contains(params.company_wallet), 'NOT AUTHORIZED')
        #add starup to the funding list
        self.data.fundraise_list.push(params.company_wallet)


        #initialize round details
        self.data.verified_startups[params.company_wallet].round_num = self.data.verified_startups[params.company_wallet].round_num + 1
        round_num = sp.local('round_num', self.data.verified_startups[params.company_wallet].round_num )

        self.data.verified_startups[params.company_wallet].fundraise_details[round_num.value] = sp.record(
                                    type = params.type, #Direct Equity, Safe
                                    fund_raised = params.fund_raised,
                                    safe_signed = False,
                                    investor_address =sp.address("tz1aTgF2c3vyrk2Mko1yzkJQGAnqUeDapxxm"),
                                    valuation_cap = sp.mutez(0),
                                    ownership = sp.nat(0),
                                    time = sp.now)
        # self.data.verified_startups[params.company_wallet].fundraise_details[round_num.value].fund_raised = params.fund_raised
        # self.data.verified_startups[params.company_wallet].fundraise_details[round_num.value].safe_signed= sp.bool(False)
        # self.data.verified_startups[params.company_wallet].fundraise_details[round_num.value].time = sp.now


        #STEP 1: all the SAFEs will convert into shares
        new_investor_shares = sp.local('new_investor_shares',sp.nat(0) ) 
        #will contain the sum of newly formed investor shares

        sp.for safe in self.data.verified_startups[params.company_wallet].safe_table:
            
            # investor_cap = self.data.company_list[company].cap_table[ self.data.company_list[company].safe_table[investor].name ] #alias
            # investor_cap.type = sp.string("investor") #feeding data from safe_table to cap_table
            

            new_cap_entry = sp.local('new_cap_entry', sp.record(
                                type_name = sp.string(""), common_shares = sp.nat(0), common_options = sp.nat(0),
                                preferred_shares = sp.nat(0), investement = sp.mutez(0),fd_shares = sp.nat(0), fd_percent = sp.nat(0)
                            ))
            

            #Before converting SAFEs to Equity check Company Capitalization.
            sp.if self.data.verified_startups[params.company_wallet].curr_company_valuation >= safe.valuation_cap:
                 new_cap_entry.value.preferred_shares = safe.ownership * self.data.verified_startups[params.company_wallet].total_shares / self.data.verified_startups[params.company_wallet].company_ownership #Preferred shares calculation, with help of ownership
            sp.else:
                self.data.verified_startups[params.company_wallet].company_ownership = self.data.verified_startups[params.company_wallet].company_ownership + safe.ownership
                #here we changed the ownership of safe as valuation didnt meet cap
                safe.ownership = sp.utils.mutez_to_nat(safe.investment) / sp.utils.mutez_to_nat( self.data.verified_startups[params.company_wallet].curr_company_valuation)
                
                self.data.verified_startups[params.company_wallet].company_ownership = sp.as_nat( self.data.verified_startups[params.company_wallet].company_ownership - safe.ownership )
                
                new_cap_entry.value.preferred_shares = safe.ownership * self.data.verified_startups[params.company_wallet].total_shares / self.data.verified_startups[params.company_wallet].company_ownership #Preferred shares calculation, with help of ownership
            
            new_cap_entry.value.fd_shares = new_cap_entry.value.preferred_shares
            new_cap_entry.value.fd_percent = safe.ownership

            # redeemed_investors.add(investor) #pushing the investor as its SAFE is redeemed
            
            new_investor_shares.value = new_investor_shares.value + new_cap_entry.value.fd_shares #add these newly created shares to new_investor_shares which will later be added to total
            new_cap_entry.value.type_name = safe.name
            new_cap_entry.value.investement = safe.investment

            self.data.verified_startups[params.company_wallet].cap_table.push(new_cap_entry.value)
        
        self.data.verified_startups[params.company_wallet].total_shares = self.data.verified_startups[params.company_wallet].total_shares + new_investor_shares.value #change the total number of shares
        # self.data.verified_startups[params.company_wallet].safe_table = []
        
        self.computeCapTable(params.company_wallet) #update fd_percent of every stakeholder



    #Pay to Employee or Vendor
    @sp.entry_point
    def debitToWallet(self, params):
        #set parameter
        sp.set_type(params, sp.TRecord(sender_wallet = sp.TAddress, receiver_wallet = sp.TAddress, amount = sp.TMutez, tag = sp.TString))
        #assertions
        # sp.verify(self.data.all_startups.contains(params.sender_wallet), "Invalid StartUp Account")
        sp.verify(sp.amount == params.amount, "Invalid Amount")

        sp.send(params.receiver_wallet, sp.amount, message='Transaction Failed')
        self.data.verified_startups[params.sender_wallet].debited_amount.push(sp.record(amount = sp.amount, tag = params.tag, time = sp.now))
        self.data.verified_startups[params.sender_wallet].curr_company_valuation = self.data.verified_startups[params.sender_wallet].curr_company_valuation - sp.amount
    
    




    # Requests and Negotiation 
    @sp.entry_point
    def requestFromInvestor(self, params):
        sp.set_type(params, sp.TRecord(startup_address = sp.TAddress, investor_address = sp.TAddress, valuation_cap = sp.TMutez, direct_equity = sp.TNat, type = sp.TString))
        
        round_num = sp.local('round_num', self.data.verified_startups[params.startup_address].round_num )
        
        sp.if params.type == sp.string("DirectEquity"):
            ownership = sp.local("ownership", params.direct_equity)
            new_record = sp.record(investor_address = params.investor_address, valuation_cap = params.valuation_cap, ownership = ownership.value, type = params.type)
            self.data.verified_startups[params.startup_address].request_list.push(new_record)

        
        sp.if params.type == sp.string("SAFE"):
            ownership = sp.local("ownership", sp.nat(1000000) * sp.utils.mutez_to_nat(self.data.verified_startups[params.startup_address].fundraise_details[round_num.value].fund_raised) / sp.utils.mutez_to_nat(params.valuation_cap))
            new_record = sp.record(investor_address = params.investor_address, valuation_cap = params.valuation_cap, ownership = ownership.value, type = params.type)
            self.data.verified_startups[params.startup_address].request_list.push(new_record)


        
    @sp.entry_point
    def acceptFromStartUp(self, params):
        sp.set_type(params, sp.TRecord(startup_address = sp.TAddress, investor_address = sp.TAddress))
        
        round_num = sp.local('round_num', self.data.verified_startups[params.startup_address].round_num )
        sp.for request in self.data.verified_startups[params.startup_address].request_list:
            sp.if request.investor_address == params.investor_address:
                self.data.verified_startups[params.startup_address].request_accepted = sp.bool(True)
                self.data.verified_startups[params.startup_address].investor_accepted = params.investor_address
                self.data.verified_startups[params.startup_address].time_of_acceptance = sp.now
                
                self.data.verified_startups[params.startup_address].fundraise_details[round_num.value].type = request.type
                self.data.verified_startups[params.startup_address].fundraise_details[round_num.value].valuation_cap = request.valuation_cap
                self.data.verified_startups[params.startup_address].fundraise_details[round_num.value].ownership = request.ownership
                self.data.verified_startups[params.startup_address].fundraise_details[round_num.value].investor_address = request.investor_address

    def EquityCapUpdate(self, company_wallet):

        # sp.set_type(params.company_wallet, sp.TAddress)
        round_n = sp.local('round_n', self.data.verified_startups[company_wallet].round_num )
        # name = sp.local("name", self.data.verified_startups[company_wallet].fundraise_details[round_n.value].name)
        # investment = sp.local("name", self.data.verified_startups[company_wallet].fundraise_details[round_n.value].investment)
        ownership_n = sp.local("ownership_n", self.data.verified_startups[company_wallet].fundraise_details[round_n.value].ownership)
        new_cap_entry = sp.local('new_cap_entry', sp.record(
                                type_name = sp.string(""), common_shares = sp.nat(0), common_options = sp.nat(0),
                                preferred_shares = sp.nat(0), investement = sp.mutez(0),fd_shares = sp.nat(0), fd_percent = sp.nat(0)
                            ))
        self.data.verified_startups[company_wallet].company_ownership = sp.as_nat(self.data.verified_startups[company_wallet].company_ownership  - ownership_n.value)
        
        new_cap_entry.value.preferred_shares = ownership_n.value * self.data.verified_startups[company_wallet].total_shares / self.data.verified_startups[company_wallet].company_ownership 
        new_cap_entry.value.fd_shares = new_cap_entry.value.preferred_shares
        new_cap_entry.value.fd_percent = ownership_n.value
        new_cap_entry.value.type_name = sp.string("Investor Name Direct Equity")
        new_cap_entry.value.investement = self.data.verified_startups[company_wallet].fundraise_details[round_n.value].fund_raised
        self.data.verified_startups[company_wallet].cap_table.push(new_cap_entry.value)
        self.data.verified_startups[company_wallet].total_shares = self.data.verified_startups[company_wallet].total_shares + new_cap_entry.value.fd_shares 
        self.computeCapTable(company_wallet)






    
    # # Sign in SAFE
    @sp.entry_point
    def SignAgreement(self, params):

        sp.set_type(params,sp.TRecord(
                investor_name = sp.TString,
                company_wallet = sp.TAddress,
            )
        )
        # round_num = self.data.verified_startups[params.company_wallet].round_num
        round_num = sp.local('round_num', self.data.verified_startups[params.company_wallet].round_num )
        sp.verify(sp.amount == self.data.verified_startups[params.company_wallet].fundraise_details[round_num.value].fund_raised , "SENT AMOUNT IS NOT AS PROMISED") 
        sp.send( params.company_wallet, sp.amount, message='Investor has deposited fund on successfully signing SAFE note' )

        self.data.verified_startups[params.company_wallet].credited_amount.push(sp.record(amount = sp.amount, tag = sp.string("Investment"), time = sp.now))
        self.data.verified_startups[params.company_wallet].curr_company_valuation = self.data.verified_startups[params.company_wallet].curr_company_valuation + sp.amount
        self.data.verified_startups[params.company_wallet].fundraise_details[round_num.value].safe_signed = True
        self.data.verified_startups[params.company_wallet].company_ownership = sp.as_nat( self.data.verified_startups[params.company_wallet].company_ownership - self.data.verified_startups[params.company_wallet].fundraise_details[round_num.value].ownership )

        sp.if self.data.verified_startups[params.company_wallet].fundraise_details[round_num.value].type == sp.string("DirectEquity"):
            self.EquityCapUpdate(params.company_wallet)

        sp.if self.data.verified_startups[params.company_wallet].fundraise_details[round_num.value].type == sp.string("SAFE"): 
            new_safe = sp.record(
                            name = params.investor_name,
                            investment = self.data.verified_startups[params.company_wallet].fundraise_details[round_num.value].fund_raised,
                            valuation_cap = self.data.verified_startups[params.company_wallet].fundraise_details[round_num.value].valuation_cap ,
                            ownership = self.data.verified_startups[params.company_wallet].fundraise_details[round_num.value].ownership ,
                            investment_recieved = True,
                            safe_converted = False
                        )
            
            self.data.verified_startups[params.company_wallet].safe_table.push(new_safe)
        
        # new_fund_raise_list = []
        # sp.for startup in self.data.fundraise_list:
        #     sp.if startup != params.company_wallet:
        #         new_fund_raise_list.push(startup)  


        


        




        

            








@sp.add_test(name="main")
def test():
    scenario = sp.test_scenario()

    startup = sp.test_account("startup")
    founder1 = sp.test_account("founder1")
    founder2 = sp.test_account("founder2")
    founder3 = sp.test_account("founder3")
    investor = sp.test_account("investor")
    receiver = sp.test_account("receiver")



    contract = AngelList()
    scenario += contract

    scenario += contract.StartUpSignUp(sp.record(
                                                    company_name = sp.string("Company"),
                                                    company_email = sp.string("company@gmail.com"),
                                                    company_wallet = startup.address,
                                                    company_linkedin = sp.string("linkedinurl"),
                                                    company_website = sp.string("website"),
                                                    company_type = sp.string("company_type"),
                                                    company_number = sp.nat(1234567890),
                                                    photoId = sp.string("#kdsnjnsgnkjsndfgjkn"),
                                                    documentId = sp.string("#infjgnjadsnfkjgnfknklng"),
                                                    company_address = sp.record( 
                                                                            address = sp.string("company_address"), 
                                                                            city = sp.string("company_city"), 
                                                                            state = sp.string("company_state"),
                                                                            zip = sp.nat(123321), 
                                                                            country = sp.string("INdia")),
                                                    # total_shares = sp.nat(10324745), 
                                                    valuation= sp.mutez(3000000000000)
                                                    )).run(
        amount = sp.mutez(6000000), sender = startup
    )

    scenario += contract.addStartUpMembers(sp.record(
                            member_name = sp.string("Alice"), 
                            member_email = sp.string("alice@gmail.com"), 
                            member_wallet = founder1.address, 
                            member_number = sp.nat(1234567890), 
                            member_linkedin = sp.string("founder1.linkedIN"),
                            company_address = startup.address, 
                            photoId = sp.string("#founder1photokdsnjnsgnkjsndfgjkn"), 
                            resumeId = sp.string("#founder1resumekdsnjnsgnkjsndfgjkn"), 

                            member_address = sp.record( 
                                                    address = sp.string("company_address"), 
                                                    city = sp.string("company_city"), 
                                                    state = sp.string("company_state"),
                                                    zip = sp.nat(123321), 
                                                    country = sp.string("INdia")),

                            type = sp.string("Founder"), 
                            common_shares = sp.nat(5250000), 
                            common_options = sp.nat(12345),
                            preferred_shares = sp.nat(1111),
                            investment = sp.mutez(0),
                            fd_shares = sp.nat(0), 
                            fd_percent = sp.nat(0)
                            )
                        )
    scenario += contract.addStartUpMembers(sp.record(
                            member_name = sp.string("Bob"), 
                            member_email = sp.string("bob@gmail.com"), 
                            member_wallet = founder2.address, 
                            member_number = sp.nat(9087654321), 
                            member_linkedin = sp.string("founder2.linkedIN"),
                            company_address = startup.address, 
                            photoId = sp.string("#founder2photokdsnjnsgnkjsndfgjkn"), 
                            resumeId = sp.string("#founder2resumekdsnjnsgnkjsndfgjkn"), 

                            member_address = sp.record( 
                                                    address = sp.string("company_address"), 
                                                    city = sp.string("company_city"), 
                                                    state = sp.string("company_state"),
                                                    zip = sp.nat(123321), 
                                                    country = sp.string("INdia")),

                            type = sp.string("Co-Founder"), 
                            common_shares = sp.nat(4000000), 
                            common_options = sp.nat(54321),
                            preferred_shares = sp.nat(99234),
                            investment = sp.mutez(0),
                            fd_shares = sp.nat(0), 
                            fd_percent = sp.nat(0)
                            )
                        )
    
    scenario += contract.addStartUpMembers(sp.record(
                            member_name = sp.string("Rahuk"), 
                            member_email = sp.string("Rahuk@gmail.com"), 
                            member_wallet = founder3.address, 
                            member_number = sp.nat(9057654321), 
                            member_linkedin = sp.string("founder3.linkedIN"),
                            company_address = startup.address, 
                            photoId = sp.string("#founder3photokdsnjnsgnkjsndfgjkn"), 
                            resumeId = sp.string("#founder3resumekdsnjnsgnkjsndfgjkn"), 

                            member_address = sp.record( 
                                                    address = sp.string("company_address"), 
                                                    city = sp.string("company_city"), 
                                                    state = sp.string("company_state"),
                                                    zip = sp.nat(123321), 
                                                    country = sp.string("INdia")),

                            type = sp.string("Chaprasi"), 
                            common_shares = sp.nat(50000), 
                            common_options = sp.nat(780000),
                            preferred_shares = sp.nat(77734),
                            investment = sp.mutez(0),
                            fd_shares = sp.nat(0), 
                            fd_percent = sp.nat(0)
                            )
                        )
    
    scenario += contract.ini_computeCapTable(sp.record(company_wallet = startup.address))
    # scenario += contract.raiseFund(sp.record(company_wallet  = startup.address, fund_raised = sp.mutez(200000000000), ownership = sp.nat(5),type = sp.string("SAFE")))

    # scenario += contract.requestFromInvestor(sp.record(startup_address = startup.address, investor_address = investor.address, valuation_cap = sp.mutez(4000000000000),direct_equity = sp.nat(0), type = sp.string("SAFE")))
    # scenario += contract.acceptFromStartUp(sp.record(startup_address = startup.address, investor_address = investor.address))

    # scenario += contract.SignAgreement(sp.record(investor_name = sp.string("Investor1"),company_wallet = startup.address)).run(
    #                 amount = sp.mutez(200000000000), sender = investor)
    
    scenario += contract.raiseFund(sp.record(company_wallet  = startup.address, fund_raised = sp.mutez(200000000000), ownership = sp.nat(5),type = sp.string("DirectEquity")))
    scenario += contract.requestFromInvestor(sp.record(startup_address = startup.address, investor_address = investor.address, valuation_cap = sp.mutez(0000000000000),direct_equity = sp.nat(10), type = sp.string("DirectEquity")))
    scenario += contract.acceptFromStartUp(sp.record(startup_address = startup.address, investor_address = investor.address))

    scenario += contract.SignAgreement(sp.record(investor_name = sp.string("Investor1"),company_wallet = startup.address)).run(
                    amount = sp.mutez(200000000000), sender = investor)
    
    # scenario += contract.debitToWallet(sp.record(sender_wallet = startup.address, receiver_wallet = receiver.address, amount = sp.mutez(8000000), tag = sp.string("PayedtoVendor"))).run(
                #    amount = sp.mutez(8000000), sender = startup )


        
   










