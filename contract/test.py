def add_test(config, is_default = True):
    @sp.add_test(name = config.name, is_default = is_default)
    def test():
        scenario = sp.test_scenario()
        scenario.h1("Contract Name: " + "DevilList")
        scenario.table_of_contents()
        admin = sp.test_account("Administrator")
        alice = sp.test_account("Alice")
        bob   = sp.test_account("Bob")
        robert = sp.test_account("Robert")
        john = sp.test_account("John")
        Google = sp.test_account("Google")
        SundarPichai = sp.test_account("SundarPichai")
       
        scenario.h2("Accounts")
        scenario.show([admin, Google, SundarPichai, alice, bob, robert])
       

        contract = DevilList (config = config,
                        metadata = sp.utils.metadata_of_url("https://example.com"))
        scenario += contract

        scenario.h2("Signing Up Company")
        scenario += contract.company_signup(sp.record(company_valuation = sp.tez(800000), company_profile_Id = sp.string("company_a\Profile_Id"))).run(
                amount = sp.tez(50), sender = Google)

        scenario += contract.investor_signup(sp.record(investor_profile_Id = "Alice Profile Id")).run(amount = sp.tez(50), sender = robert)

        scenario += contract.employee_signup(sp.record(employee_profile_Id = "John Profile Id")).run(amount = sp.tez(25), sender = john)

        scenario.h2("Adding Members to Company and Minting their Company Shares Token")
        scenario += contract.add_member_to_company(sp.record(
                            member_wallet = SundarPichai.address,
                            stakeHolder_name = "SundarPichai", stakeHolder_profile_Id = sp.string("SundarPichaiProfileID"), stakeHolder_type = sp.string("CEO"), 
                            investment = sp.tez(4000), common_shares = sp.nat(2450), common_options = sp.nat(0),
                            preferred_shares = sp.nat(0), fd_shares = sp.nat(0), fd_percent = sp.nat(0))).run(sender = Google)
        scenario.h2("Company Raising Fund")
        scenario += contract.raise_fund_for_company(sp.record(investment = sp.tez(100000), ownership = sp.nat(10),type = sp.string("SAFE"))).run(sender = Google)
        scenario.h2("Investor Offering Initial Offer")
        scenario += contract.request_from_investor(sp.record(company_wallet = Google.address, investment = sp.tez(100000), valuation_cap = sp.tez(400000), direct_equity = sp.nat(25), type = sp.string("SAFE"))).run(sender = robert)
        scenario.h2("Company Accepting Investor Final Offer")
        scenario += contract.accept_investor_request(sp.record(investor_wallet = robert.address)).run(sender = Google)
        scenario.h2("Company Paying Salaries to Employee")
        scenario += contract.pay_from_company_wallet(sp.record(company_wallet = Google.address, receiver_wallet = SundarPichai.address, amount = sp.tez(600000), tag = "Salary")).run(amount = sp.tez(600000), sender = Google)
        scenario.h2("Signing SAFE Agreement")
        scenario += contract.invest_through_SAFE(sp.record(investor_name = sp.string("Robert"),company_wallet = Google.address)).run(
                    amount = sp.tez(100000), sender = robert)
        scenario.h2("Raise Fund New Round - Previous SAFE conversion ")
        scenario += contract.request_from_investor(sp.record(company_wallet = Google.address, investment = sp.tez(100000), valuation_cap = sp.tez(400000), direct_equity = sp.nat(40), type = sp.string("DirectEquity"))).run(sender = alice)
        
        scenario += contract.accept_investor_request(sp.record(investor_wallet = alice.address)).run(sender = Google)
        scenario += contract.pay_from_company_wallet(sp.record(company_wallet = Google.address, receiver_wallet = SundarPichai.address, amount = sp.tez(6000), tag = "Salary")).run(amount = sp.tez(6000), sender = Google)
        scenario += contract.invest_through_DirectEquity(sp.record(investor_name = sp.string("Alice"),company_wallet = Google.address)).run(
                    amount = sp.tez(100000), sender = alice)
        
        scenario += contract.pay_from_company_wallet(sp.record(company_wallet = Google.address, receiver_wallet = SundarPichai.address, amount = sp.tez(6000), tag = "Salary")).run(amount = sp.tez(6000), sender = Google)
        
        scenario += contract.sell_shares(sp.record(seller_wallet = SundarPichai.address, company_token = 0, shares = 200, price_per_share = 12))
        scenario += contract.buy_shares(sp.record(buyer_wallet = SundarPichai.address, company_token = 0, shares = 200, price_per_share = 12))
        scenario += contract.token_transfer(sp.record(from_ = SundarPichai.address, to_ = robert.address, token_id = 0, amount = 200))

        scenario += contract.apply_for_company(sp.record(company_wallet = Google.address)).run(sender = john)
        scenario += contract.hire_employee(sp.record(employee_wallet = john.address)).run(sender = Google)