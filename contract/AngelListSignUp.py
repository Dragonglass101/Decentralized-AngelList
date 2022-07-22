import smartpy as sp

class AngelListSignUp(sp.Contract):
    def __init__(self):
        self.init(
            # admin_address = admin_address,
            feesToRegister = sp.tez(5),
            
            verified_investors = sp.big_map(
                        l={}, 
                        tkey = sp.TAddress, 
                        tvalue = sp.TRecord(
                            name = sp.TString, 
                            email = sp.TString, 
                            number = sp.TNat, 
                            howAccredited = sp.TNat, 
                            percentageNetworth = sp.TNat, 
                            linkedIn = sp.TString, 
                            wallet = sp.TAddress, 
                            photoCID = sp.TString, 
                            resumeCID = sp.TString, 
                            amountToAccredition = sp.TNat,
                        )
                    ),
            investor_startups = sp.big_map(
                        l={}, 
                        tkey = sp.TAddress, 
                        tvalue = sp.TRecord(
                            wishlistStartUps = sp.TList(t = sp.TAddress),
                            investedStartUps = sp.TList(t = sp.TAddress),
                        )
                    ),
            
                    
            total_investors = sp.nat(0)
        )

    @sp.entry_point
    def investorAlreadyExist(self, params):
        sp.set_type(params.wallet, sp.TAddress)

        sp.if self.data.verified_investors.contains(params.wallet):
            sp.trace("New Investor")
            # sp.return(True)
        sp.else:
            sp.trace("Investor already exist")
        #     # sp.return(False)


    @sp.entry_point
    def verifyInvestor(self, params):
        sp.set_type(params, sp.TRecord(
                        amountToAccredition = sp.TNat,
                        email = sp.TString,
                        howAccredited = sp.TNat,
                        linkedIn = sp.TString, 
                        name = sp.TString, 
                        number = sp.TNat, 
                        percentageNetworth = sp.TNat, 
                        photoCID = sp.TString,
                        resumeCID = sp.TString,
                        wallet = sp.TAddress 
                    )
                )
            
        sp.verify(sp.amount >= sp.utils.nat_to_tez(params.amountToAccredition), "Accredition Failed")
        # sp.verify(params.wallet != sp.string(""), "No Wallet Connected")
        # sp.verify(self.data.verified_investors.contains(params.wallet,), "Account Already Exist")

        self.data.verified_investors[params.wallet] = params
        self.data.investor_startups[params.wallet] = sp.record(
                                            wishlistStartUps = [],
                                            investedStartUps = [])
        self.data.total_investors = self.data.total_investors + 1

        extra_amount = sp.amount - self.data.feesToRegister
        sp.send(sp.sender, extra_amount)

    @sp.entry_point
    def addInvestedStartUp(self, params):
        sp.set_type(params, sp.TRecord(
                                investor_address = sp.TAddress,
                                startup_address = sp.TAddress
                                ))
        self.data.investor_startups[params.investor_address].investedStartUps.push(params.startup_address)
    
    @sp.entry_point
    def addWishlistStartUp(self, params):
        sp.set_type(params, sp.TRecord(
                                investor_address = sp.TAddress,
                                startup_address = sp.TAddress
                                ))
        self.data.investor_startups[params.investor_address].wishlistStartUps.push(params.startup_address)
       



@sp.add_test(name="main")
def test():
    scenario = sp.test_scenario()

    alice = sp.test_account("alice")
    bob = sp.test_account("bob")

    contract = AngelListSignUp()
    scenario += contract

    scenario += contract.verifyInvestor(sp.record(
                                                    name = sp.string("Alice Sharma"),
                                                    email = sp.string("alice@gmail.com"),
                                                    number = sp.nat(1234567890),
                                                    howAccredited = sp.nat(1),
                                                    percentageNetworth = sp.nat(2), 
                                                    linkedIn = sp.string("hello"), 
                                                    wallet = alice.address, 
                                                    photoCID = sp.string("hello"), 
                                                    resumeCID = sp.string("hello"), 
                                                    amountToAccredition = sp.nat(500)
                                                    )).run(
        amount = sp.tez(505), sender = alice
    )

   
    # scenario += contract.investorAlreadyExist(sp.record(wallet = alice.address))
    # scenario += contract.investorAlreadyExist(sp.record(wallet = bob.address))
    scenario += contract.addInvestedStartUp(sp.record(investor_address = alice.address, startup_address = bob.address))
    scenario += contract.addWishlistStartUp(sp.record(investor_address = alice.address, startup_address = bob.address))

        