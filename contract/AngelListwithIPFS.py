import smartpy as sp

class AngelList(sp.Contract):
    def __init__(self):
        self.init(
            devilList_wallet = sp.address("tz1ZnEXCTNCjtnASjrzK5z2evVC9AdF4K19e"),
            temp_address = sp.address("tz1aTgF2c3vyrk2Mko1yzkJQGAnqUeDapxxm"),

            total_investment = sp.nat(1200000000),
            total_companies = sp.nat(1500),
            total_investors = sp.nat(1200),
            total_employees = sp.nat(2400),

            fees_to_register_investor = sp.tez(50),
            all_investors = sp.list(t = sp.TAddress),
            investors = sp.big_map(
                        l={},
                        tkey = sp.TAddress, 
                        tvalue = sp.TRecord(
                            investor_profile_Id = sp.TString,
                            investments = sp.TList(t = sp.TRecord(
                                                company = sp.TAddress, 
                                                investment_amount = sp.TMutez,
                                                valuation_cap = sp.TMutez,
                                                approx_ownership = sp.TNat,
                                                investment_recieved = sp.TBool, 
                                                investment_type = sp.TString,
                                                safe_converted = sp.TBool
                                                )
                                            ),
                        )
                ),
            
            fees_to_register_employee = sp.tez(25),
            all_employee = sp.list(t = sp.TAddress),
            employees = sp.big_map(
                        l = {},
                        tkey = sp.TAddress,
                        tvalue = sp.TRecord(
                            employee_profile_Id = sp.TString,
                            applied_companies = sp.TList(t = sp.TAddress),
                            is_hired = sp.TBool,
                            hired_in = sp.TAddress
                        )
                ),
            
            fees_to_register_company = sp.tez(50),
            all_companies = sp.list(t = sp.TAddress),
            companies_for_funding = sp.list(t = sp.TAddress),
            companies = sp.big_map(
                        l={},
                        tkey = sp.TAddress, 
                        tvalue = sp.TRecord(
                            
                            company_profile_Id = sp.TString,
                            
                            company_valuation = sp.TMutez,
                            credit_to_company =  sp.TList(t = sp.TRecord(amount = sp.TMutez, tag = sp.TString, time = sp.TTimestamp)),
                            debit_from_company = sp.TList(t = sp.TRecord(amount = sp.TMutez, tag = sp.TString, time = sp.TTimestamp)),
                            
                            round_num = sp.TNat,
                            total_shares = sp.TNat,
                            company_ownership = sp.TNat, 
                            fundraise_details = sp.TMap(
                                sp.TNat,
                                sp.TRecord(
                                    time = sp.TTimestamp,
                                    investor = sp.TAddress,
                                    investment = sp.TMutez,
                                    ownership = sp.TNat,
                                    investment_type = sp.TString, #Direct Equity, Safe
                                    valuation_cap = sp.TMutez,
                                    investment_confirmed = sp.TBool,
                                )
                            ), 
            
                            members_list = sp.TList(t = sp.TRecord(
                                                                    stakeHolder_name = sp.TString,
                                                                    stakeHolder_profile_Id = sp.TString,
                                                                    stakeHolder_type = sp.TString, 
                                                                    investment = sp.TMutez,
                                                                    common_shares = sp.TNat,
                                                                    common_options = sp.TNat,
                                                                    preferred_shares = sp.TNat,
                                                                    fd_shares = sp.TNat,
                                                                    fd_percent = sp.TNat,
                                                                )
                                                            ),

                            hired_employees = sp.TList(t = sp.TAddress),
                            request_from_employee = sp.TList(t = sp.TAddress),

                            request_accepted = sp.TBool,
                            investor_accepted = sp.TAddress,
                            time_of_acceptance = sp.TTimestamp,
                            request_from_investor = sp.TList(t = sp.TRecord(
                                                investor = sp.TAddress, 
                                                investment = sp.TMutez, 
                                                valuation_cap = sp.TMutez, 
                                                ownership = sp.TNat, 
                                                type = sp.TString
                                                )
                                            ),

                            safe_table = sp.TList(t = sp.TRecord(
                                                investor_name = sp.TString,
                                                investor = sp.TAddress,
                                                investment = sp.TMutez,
                                                valuation_cap = sp.TMutez,
                                                approx_ownership = sp.TNat,
                                                investment_recieved = sp.TBool,
                                                )
                                            ),
                            
                            cap_table = sp.TList(t = sp.TRecord(
                                                        stakeHolder_name = sp.TString,
                                                        stakeHolder_type = sp.TString,
                                                        investment = sp.TMutez, 
                                                        common_shares = sp.TNat,
                                                        common_options = sp.TNat,
                                                        preferred_shares = sp.TNat,
                                                        agreement_type = sp.TString,
                                                        fd_shares = sp.TNat,
                                                        fd_percent = sp.TNat
                                                )
                                            )
                    )
                )

        )
    # @sp.entry_point
    # def company_signup(self, params):

    # @sp.entry_point
    # def investor_signup(self, params):


    @sp.entry_point
    def employee_signup(self, params):
        sp.set_type(params.employee_profile_Id, sp.TString)

        sp.for emp in self.data.all_employee:
            sp.verify(sp.sender != emp,"Account Already Exist!" )
        sp.verify(sp.amount == self.data.fees_to_register_employee, "Invalid Amount!" )
        
        self.data.employees[sp.sender] = sp.record(employee_profile_Id = params.employee_profile_Id,
                                                    applied_companies = [],
                                                    is_hired = False,
                                                    hired_in = self.data.temp_address,
                                        )
        self.data.all_employee.push(sp.sender)
        sp.send(self.data.devilList_wallet, sp.amount, "New Employee Registered!")

    @sp.entry_point
    def apply_for_company(self, params):
        sp.set_type(params.company_wallet, sp.TAddress)
        
        self.data.employees[sp.sender].applied_companies.push(params.company_wallet)
        self.data.companies[params.company_wallet].request_from_employee.push(sp.sender)

    @sp.entry_point
    def hire_employee(self, params):
        sp.set_type(params.employee_wallet, sp.TAddress)

        self.data.companies[sp.sender].hired_employees.push(params.employee_wallet)
        self.data.employees[params.employee_wallet].is_hired = True
        self.data.employees[params.employee_wallet].hired_in = sp.sender

        # new_request_from_employee = []
        # sp.for emp in self.data.companies[sp.sender].request_from_employee:
        #     sp.if emp != params.employee_wallet:
        #         new_request_from_employee.push(emp)
        # self.data.companies[sp.sender].request_from_employee = new_request_from_employee

    @sp.entry_point
    def company_signup(self, params):
        sp.set_type(params, sp.TRecord(company_valuation = sp.TMutez, company_profile_Id = sp.TString))
        
        sp.for com in self.data.all_companies:
            sp.verify(sp.sender != com,"Account Already Exist!" )

        sp.verify(sp.amount == self.data.fees_to_register_company, "Invalid Amount!" )
        
        self.data.companies[sp.sender] = sp.record(
                            company_profile_Id = params.company_profile_Id,
                            company_valuation = params.company_valuation,
                            credit_to_company =  [],
                            debit_from_company = [],
                            round_num = sp.nat(0),
                            total_shares = sp.nat(0),
                            company_ownership = sp.nat(100), 

                            fundraise_details = sp.map(
                                tkey = sp.TNat,
                                tvalue = sp.TRecord(
                                    time = sp.TTimestamp,
                                    investor = sp.TAddress,
                                    investment = sp.TMutez,
                                    ownership = sp.TNat,
                                    investment_type = sp.TString, #Direct Equity, Safe
                                    valuation_cap = sp.TMutez,
                                    investment_confirmed = sp.TBool,
                                )
                            ), 
                            members_list = [],
                            hired_employees = [],
                            request_from_employee = [],
                            request_accepted = False,
                            investor_accepted = self.data.temp_address,
                            time_of_acceptance = sp.now,
                            request_from_investor = [],
                            safe_table = [],
                            cap_table = [],
                        )
        
        self.data.all_companies.push(sp.sender)
        sp.send(self.data.devilList_wallet, sp.amount, "New Company Registered!")

    def update_cap_table(self, company_wallet, fd_shares):
        self.data.companies[company_wallet].total_shares = self.data.companies[company_wallet].total_shares + fd_shares
        sp.for stakeholder in self.data.companies[company_wallet].cap_table:
            stakeholder.fd_percent = sp.nat(1000000) * stakeholder.fd_shares / self.data.companies[company_wallet].total_shares 


    @sp.entry_point
    def add_member_to_company(self, params):
        sp.set_type(params, sp.TRecord( stakeHolder_name = sp.TString, stakeHolder_profile_Id = sp.TString, stakeHolder_type = sp.TString, 
                                        investment = sp.TMutez, common_shares = sp.TNat, common_options = sp.TNat,
                                        preferred_shares = sp.TNat, fd_shares = sp.TNat, fd_percent = sp.TNat))
        fd_shares = sp.local('fd_shares', params.common_shares + params.common_options + params.preferred_shares)
        self.data.companies[sp.sender].members_list.push(params)
        self.data.companies[sp.sender].cap_table.push(sp.record(
                                                        stakeHolder_name = params.stakeHolder_name,
                                                        stakeHolder_type = params.stakeHolder_type,
                                                        investment = params.investment, 
                                                        common_shares = params.common_shares,
                                                        common_options = params.common_options,
                                                        preferred_shares = params.preferred_shares,
                                                        agreement_type = sp.string(""),
                                                        fd_shares = fd_shares.value,
                                                        fd_percent = params.fd_percent)) 
        self.update_cap_table(sp.sender, params.fd_shares)

    @sp.entry_point
    def pay_from_company_wallet(self, params):
        sp.set_type(params, sp.TRecord(company_wallet = sp.TAddress, receiver_wallet = sp.TAddress, amount = sp.TMutez, tag = sp.TString))
        sp.verify(sp.amount == params.amount, "Invalid Amount")
        sp.send(params.receiver_wallet, sp.amount, message='Transaction Failed')
        self.data.companies[params.company_wallet].debit_from_company.push(sp.record(amount = sp.amount, tag = params.tag, time = sp.now))
        self.data.companies[params.company_wallet].company_valuation = self.data.companies[params.company_wallet].company_valuation - sp.amount

    @sp.entry_point
    def request_from_investor(self, params):
        sp.set_type(params, sp.TRecord(company_wallet = sp.TAddress, investment = sp.TMutez, valuation_cap = sp.TMutez, direct_equity = sp.TNat, type = sp.TString))
        
        round_num = sp.local('round_num', self.data.companies[params.company_wallet].round_num )
        
        sp.if params.type == sp.string("DirectEquity"):
            ownership = sp.local("ownership", params.direct_equity)
            new_record = sp.record(investor = sp.sender, investment = params.investment, valuation_cap = params.valuation_cap, ownership = ownership.value, type = params.type)
            self.data.companies[params.company_wallet].request_from_investor.push(new_record)

        
        sp.if params.type == sp.string("SAFE"):
            ownership = sp.local("ownership", sp.nat(1000000) * sp.utils.mutez_to_nat(self.data.companies[params.company_wallet].fundraise_details[round_num.value].investment) / sp.utils.mutez_to_nat(params.valuation_cap))
            new_record = sp.record(investor = sp.sender, investment = params.investment, valuation_cap = params.valuation_cap, ownership = ownership.value, type = params.type)
            self.data.companies[params.company_wallet].request_from_investor.push(new_record)

    @sp.entry_point
    def accept_investor_request(self, params):
        sp.set_type(params.investor_wallet, sp.TAddress)
        
        round_num = sp.local('round_num', self.data.companies[sp.sender].round_num )
        sp.for request in self.data.companies[sp.sender].request_from_investor:
            sp.if request.investor == sp.sender:
                self.data.companies[sp.sender].request_accepted = True
                self.data.companies[sp.sender].investor_accepted = params.investor_wallet
                self.data.companies[sp.sender].time_of_acceptance = sp.now

                self.data.companies[sp.sender].fundraise_details[round_num.value].time = sp.now
                self.data.companies[sp.sender].fundraise_details[round_num.value].investment_type = request.type
                self.data.companies[sp.sender].fundraise_details[round_num.value].valuation_cap = request.valuation_cap
                self.data.companies[sp.sender].fundraise_details[round_num.value].ownership = request.ownership
                self.data.companies[sp.sender].fundraise_details[round_num.value].investor = request.investor
                self.data.companies[sp.sender].fundraise_details[round_num.value].investment_confirmed = False
    
    
    @sp.entry_point
    def invest_through_SAFE(self, params):
        sp.set_type(params, sp.TRecord(investor_name = sp.TString, company_wallet = sp.TAddress))
        
        round_num = sp.local('round_num', self.data.companies[params.company_wallet].round_num )
        sp.verify(sp.amount == self.data.companies[params.company_wallet].fundraise_details[round_num.value].investment , "Invalid Amount") 
        sp.send( params.company_wallet, sp.amount, message = "Amount Investment Failed")

        self.data.companies[params.company_wallet].credit_to_company.push(sp.record(amount = sp.amount, tag = sp.string("Investment"), time = sp.now))
        self.data.companies[params.company_wallet].company_valuation = self.data.companies[params.company_wallet].company_valuation + sp.amount
        self.data.companies[params.company_wallet].fundraise_details[round_num.value].investment_confirmed = True
        self.data.companies[params.company_wallet].company_ownership = sp.as_nat( self.data.companies[params.company_wallet].company_ownership - self.data.companies[params.company_wallet].fundraise_details[round_num.value].ownership)

        new_safe = sp.record(
                            investor_name = params.investor_name,
                            investor = sp.sender,
                            investment = self.data.companies[params.company_wallet].fundraise_details[round_num.value].investment,
                            valuation_cap = self.data.companies[params.company_wallet].fundraise_details[round_num.value].valuation_cap ,
                            approx_ownership = self.data.companies[params.company_wallet].fundraise_details[round_num.value].ownership ,
                            investment_recieved = True,
                        )
        self.data.companies[params.company_wallet].safe_table.push(new_safe)
        
        # new_fund_raise_list = []
        # sp.for startup in self.data.fundraise_list:
        #     sp.if startup != params.company_wallet:
        #         new_fund_raise_list.push(startup)  

        
    @sp.entry_point
    def invest_through_DirectEquity(self, params):
        sp.set_type(params, sp.TRecord(company_wallet = sp.TAddress, investor_name = sp.TString))
        round_num = sp.local('round_num', self.data.companies[params.company_wallet].round_num)
        ownership = sp.local('ownership', self.data.companies[params.company_wallet].fundraise_details[round_num.value].ownership)
        fd_shares = sp.local('fd_shares', ownership.value * self.data.companies[params.company_wallet].total_shares / self.data.companies[params.company_wallet].company_ownership)
        
        self.data.companies[params.company_wallet].company_ownership = sp.as_nat(self.data.companies[params.company_wallet].company_ownership - ownership.value)
        
        self.data.companies[params.company_wallet].cap_table.push(sp.record(
                            stakeHolder_name = params.investor_name, 
                            stakeHolder_type = sp.string("Investor"), 
                            investment = self.data.companies[params.company_wallet].fundraise_details[round_num.value].investment, 
                            common_shares = sp.nat(0),
                            common_options = sp.nat(0),
                            preferred_shares = fd_shares.value,
                            agreement_type = sp.string("DirectEquity"),
                            fd_shares = fd_shares.value,
                            fd_percent = ownership.value
                        ))
        self.data.companies[params.company_wallet].total_shares = self.data.companies[params.company_wallet].total_shares + fd_shares.value 

    @sp.entry_point
    def raise_fund_for_company(self, params):
        sp.set_type(params, sp.TRecord(investment = sp.TMutez, ownership = sp.TNat, type = sp.TString))
        
        self.data.companies_for_funding.push(sp.sender)
        self.data.companies[sp.sender].round_num = self.data.companies[sp.sender].round_num + 1
        round_num = sp.local('round_num', self.data.companies[sp.sender].round_num)
        new_shares = sp.local('new_shares', sp.nat(0)) 
        self.data.companies[sp.sender].fundraise_details[round_num.value] = sp.record(
                                    time = sp.now,
                                    investor = self.data.temp_address,
                                    investment = params.investment,
                                    ownership = params.ownership,
                                    investment_type = params.type, 
                                    valuation_cap = sp.mutez(0),
                                    investment_confirmed = False
                                )
 
        
        
        sp.for safe in self.data.companies[sp.sender].safe_table:
            new_cap_entry = sp.local('new_cap_entry', sp.record(
                                stakeHolder_name = sp.string(""), stakeHolder_type =sp.string(""), 
                                investment = sp.mutez(0), common_shares = sp.nat(0), common_options = sp.nat(0),
                                preferred_shares = sp.nat(0), agreement_type = sp.string(""),
                                fd_shares = sp.nat(0), fd_percent = sp.nat(0)
                            ))
            sp.if self.data.companies[sp.sender].company_valuation >= safe.valuation_cap:
                 new_cap_entry.value.preferred_shares = safe.approx_ownership * self.data.companies[sp.sender].total_shares / self.data.companies[sp.sender].company_ownership #Preferred shares calculation, with help of ownership
            sp.else:
                self.data.companies[sp.sender].company_ownership = self.data.companies[sp.sender].company_ownership + safe.approx_ownership
                safe.approx_ownership = sp.utils.mutez_to_nat(safe.investment) / sp.utils.mutez_to_nat( self.data.companies[sp.sender].company_valuation)
                self.data.companies[sp.sender].company_ownership = sp.as_nat( self.data.companies[sp.sender].company_ownership - safe.approx_ownership )
                new_cap_entry.value.preferred_shares = safe.approx_ownership * self.data.companies[sp.sender].total_shares / self.data.companies[sp.sender].company_ownership #Preferred shares calculation, with help of ownership
            
            new_cap_entry.value.fd_shares = new_cap_entry.value.preferred_shares
            new_cap_entry.value.fd_percent = safe.approx_ownership            
            new_shares.value = new_shares.value + new_cap_entry.value.fd_shares 
            new_cap_entry.value.stakeHolder_name = safe.investor_name
            new_cap_entry.value.investment = safe.investment
            new_cap_entry.value.agreement_type = sp.string("SAFE")
            new_cap_entry.value.stakeHolder_type = sp.string("Investor")

            self.data.companies[sp.sender].cap_table.push(new_cap_entry.value)
            self.update_cap_table(sp.sender, new_cap_entry.value.fd_shares) 

        
        self.data.companies[sp.sender].total_shares = self.data.companies[sp.sender].total_shares + new_shares.value 
        self.data.companies[sp.sender].safe_table = []





    



    @sp.add_test(name="main")
    def test():
        scenario = sp.test_scenario()

        company_1 = sp.test_account("company_1")
        founder = sp.test_account("founder")
        cofounder = sp.test_account("co-founder")
        investor = sp.test_account("investor")

        employee_1 = sp.test_account("employee_1")
        employee_2 = sp.test_account("employee_2")
        employee_3 = sp.test_account("employee_3")
        # investor = sp.test_account("investor")
        # receiver = sp.test_account("receiver")

        contract = AngelList()
        scenario += contract

        # scenario += contract.company_signup(sp.record(company_valuation = sp.mutez(200000000000), company_profile_Id = sp.string("Profile_Id"))).run(
        #     amount = sp.tez(50), sender = company_1)
        # scenario += contract.employee_signup(sp.record(employee_profile_Id = sp.string("Profile_Id"))).run(
        #     amount = sp.tez(25), sender = employee_1)       
        # scenario += contract.apply_for_company(sp.record(company_wallet = company_1.address)).run(
        #     sender = employee_1)
        # scenario += contract.hire_employee(sp.record(employee_wallet = employee_1)).run(sender = company_1)

        
        scenario += contract.company_signup(sp.record(company_valuation= sp.mutez(3000000000000), company_profile_Id = sp.string("Company_1-Profile_Id"))).run(
            amount = sp.tez(50), sender = company_1
        )

        scenario += contract.add_member_to_company(sp.record(
                            stakeHolder_name = "Rakshit", stakeHolder_profile_Id = sp.string("RakshitProfileID"), stakeHolder_type = sp.string("Founder"), 
                            investment = sp.tez(4000), common_shares = sp.nat(23367), common_options = sp.nat(2345),
                            preferred_shares = sp.nat(64078), fd_shares = sp.nat(2), fd_percent = sp.nat(0))).run(sender = company_1)
        
        scenario += contract.add_member_to_company(sp.record(
                            stakeHolder_name = "Rahul", stakeHolder_profile_Id = sp.string("RahulProfileID"), stakeHolder_type = sp.string("CoFounder"), 
                            investment = sp.tez(4001), common_shares = sp.nat(2634367), common_options = sp.nat(233345),
                            preferred_shares = sp.nat(634078), fd_shares = sp.nat(2), fd_percent = sp.nat(0))).run(sender = company_1)
        
        scenario += contract.raise_fund_for_company(sp.record(investment = sp.tez(1000), ownership = sp.nat(5),type = sp.string("SAFE"))).run(sender =company_1)

        scenario += contract.request_from_investor(sp.record(company_wallet = company_1.address, investment = sp.tez(1000), valuation_cap = sp.tez(10000), direct_equity = sp.nat(0), type = sp.string("SAFE"))).run(sender = investor )
        scenario += contract.accept_investor_request(sp.record(investor_wallet = investor.address)).run(sender = company_1)

        scenario += contract.invest_through_SAFE(sp.record(investor_name = sp.string("Investor1"),company_wallet = company_1.address)).run(
                        amount = sp.tez(1000), sender = investor)

        scenario += contract.raise_fund_for_company(sp.record(investment = sp.tez(1000), ownership = sp.nat(5),type = sp.string("SAFE"))).run(sender =company_1)
        
        
        # scenario += contract.raiseFund(sp.record(company_wallet  = startup.address, fund_raised = sp.mutez(200000000000), ownership = sp.nat(5),type = sp.string("DirectEquity")))
       
       
        # scenario += contract.requestFromInvestor(sp.record(startup_address = startup.address, investor_address = investor.address, valuation_cap = sp.mutez(0000000000000),direct_equity = sp.nat(10), type = sp.string("DirectEquity")))
        # scenario += contract.acceptFromStartUp(sp.record(startup_address = startup.address, investor_address = investor.address))

        # scenario += contract.SignAgreement(sp.record(investor_name = sp.string("Investor1"),company_wallet = startup.address)).run(
        #                 amount = sp.mutez(200000000000), sender = investor)
        
        # scenario += contract.debitToWallet(sp.record(sender_wallet = startup.address, receiver_wallet = receiver.address, amount = sp.mutez(8000000), tag = sp.string("PayedtoVendor"))).run(
                    #    amount = sp.mutez(8000000), sender = startup )
        

    







    





    






    









        




        

            
















