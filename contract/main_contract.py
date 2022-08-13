import smartpy as sp
class Config:
    def __init__(self,
                 debug_mode                         = False,
                 single_asset                       = False,
                 non_fungible                       = False,
                 add_mutez_transfer                 = False,
                 readable                           = True,
                 force_layouts                      = True,
                 support_operator                   = True,
                 assume_consecutive_token_ids       = True,
                 store_total_supply                 = True,
                 lazy_entry_points                  = False,
                 allow_self_transfer                = False,
                 use_token_metadata_offchain_view   = False
                 ):
            
        self.my_map = sp.big_map
        self.use_token_metadata_offchain_view = use_token_metadata_offchain_view
        self.single_asset = single_asset
        self.non_fungible = non_fungible
        self.readable = readable
        self.force_layouts = force_layouts
        self.support_operator = support_operator
        self.assume_consecutive_token_ids = assume_consecutive_token_ids
        self.store_total_supply = store_total_supply
        self.add_mutez_transfer = add_mutez_transfer
        self.lazy_entry_points = lazy_entry_points
        self.allow_self_transfer = allow_self_transfer
      
        name = "FA2"
        if debug_mode:
            name += "-debug"
        if single_asset:
            name += "-single_asset"
        if non_fungible:
            name += "-nft"
        if add_mutez_transfer:
            name += "-mutez"
        if not readable:
            name += "-no_readable"
        if not force_layouts:
            name += "-no_layout"
        if not support_operator:
            name += "-no_ops"
        if not assume_consecutive_token_ids:
            name += "-no_toknat"
        if not store_total_supply:
            name += "-no_totsup"
        if lazy_entry_points:
            name += "-lep"
        if allow_self_transfer:
            name += "-self_transfer"
        self.name = name


token_id_type = sp.TNat

class Error_message:
    def __init__(self, config):
        self.config = config
        self.prefix = "FA2_"
    def make(self, s): return (self.prefix + s)
    def token_undefined(self):       return self.make("TOKEN_UNDEFINED")
    def insufficient_balance(self):  return self.make("INSUFFICIENT_BALANCE")
    def not_operator(self):          return self.make("NOT_OPERATOR")
    def not_owner(self):             return self.make("NOT_OWNER")
    def operators_unsupported(self): return self.make("OPERATORS_UNSUPPORTED")
    def not_admin(self):             return self.make("NOT_ADMIN")
    def not_admin_or_operator(self): return self.make("NOT_ADMIN_OR_OPERATOR")
    def paused(self):                return self.make("PAUSED")

class Batch_transfer:
    def __init__(self, config):
        self.config = config
    def get_transfer_type(self):
        tx_type = sp.TRecord(to_ = sp.TAddress,
                             token_id = token_id_type,
                             amount = sp.TNat)
        if self.config.force_layouts:
            tx_type = tx_type.layout(
                ("to_", ("token_id", "amount"))
            )
        transfer_type = sp.TRecord(from_ = sp.TAddress,
                                   txs = sp.TList(tx_type)).layout(
                                       ("from_", "txs"))
        return transfer_type
    def get_type(self):
        return sp.TList(self.get_transfer_type())
    def item(self, from_, txs):
        v = sp.record(from_ = from_, txs = txs)
        return sp.set_type_expr(v, self.get_transfer_type())

class Operator_param:
    def __init__(self, config):
        self.config = config
    def get_type(self):
        t = sp.TRecord(
            owner = sp.TAddress,
            operator = sp.TAddress,
            token_id = token_id_type)
        if self.config.force_layouts:
            t = t.layout(("owner", ("operator", "token_id")))
        return t
    def make(self, owner, operator, token_id):
        r = sp.record(owner = owner,
                      operator = operator,
                      token_id = token_id)
        return sp.set_type_expr(r, self.get_type())

class Balance_of:
    def request_type():
        return sp.TRecord(
            owner = sp.TAddress,
            token_id = token_id_type).layout(("owner", "token_id"))
    def response_type():
        return sp.TList(
            sp.TRecord(
                request = Balance_of.request_type(),
                balance = sp.TNat).layout(("request", "balance")))
    def entry_point_type():
        return sp.TRecord(
            callback = sp.TContract(Balance_of.response_type()),
            requests = sp.TList(Balance_of.request_type())
        ).layout(("requests", "callback"))

#STORAGE
#Data Types : Variables
class DevilList_wallet:
    def get_wallet(self):
        return self.data.devilList_wallet

    def set_wallet(self, wallet):
        self.data.devilList_wallet = wallet
        # sp.verify(self.is_administrator(sp.sender), message = self.error_message.not_admin())

class Investor_fees:
    def get_fees(self):
        return self.data.investor_fees
    
    def set_fees(self, amount):
        return self.data.investor_fees = amount
class Employee_fees:
    def get_fees(self):
        return self.data.employee_fees
    
    def set_fees(self, amount):
        return self.data.employee_fees = amount

class Company_fees:
    def get_fees(self):
        return self.data.company_fees
    
    def set_fees(self, amount):
        return self.data.company_fees = amount

class Total_company:
    def get_total_company(self):
        return self.data.total_companies
    def increase_total_company(self):
        self.data.total_companies = self.data.total_companies + 1
    def decrease_total_company(self):
        self.data.total_companies = self.data.total_companies - 1

class Total_investor:
    def get_total_investor(self):
        return self.data.total_investors
    def increase_total_investor(self):
        self.data.total_investors = self.data.total_investors + 1
    def decrease_total_investor(self):
        self.data.total_investors = self.data.total_investors - 1

class Total_employee:
    def get_total_employee(self):
        return self.data.total_employees
    def increase_total_employee(self):
        self.data.total_employees = self.data.total_employees + 1
    def decrease_total_employee(self):
        self.data.total_employees = self.data.total_employees - 1

class Total_investment:
    def get_total_investment(self):
        return self.data.total_investments
    def set_total_investment(self, amount):
        self.data.total_investments = self.data.total_investments + amount

#Data Type: Maps
class Ledger_key:
    def __init__(self, config):
        self.config = config
    def make(self, user, token):
        user = sp.set_type_expr(user, sp.TAddress)
        token = sp.set_type_expr(token, token_id_type)
        if self.config.single_asset:
            result = user
        else:
            result = sp.pair(user, token)
        if self.config.readable:
            return result
        else:
            return sp.pack(result)

class Ledger_value:
    def get_type():
        return sp.TRecord(balance = sp.TNat)
    def make(balance):
        return sp.record(balance = balance)

# Investor details Map 
class Investors_key:
    def __init__(self,config):
        self.config = config
    def make(self, wallet):
        return wallet

class Investors_value:
    def get_type():
        return sp.TRecord( company = sp.TAddress, investment_amount = sp.TMutez,
                            valuation_cap = sp.TMutez, approx_ownership = sp.TNat,
                            investment_recieved = sp.TBool, investment_type = sp.TString,
                            safe_converted = sp.TBool   )

    def make(self, profile):
        return sp.record(
                        investor_profile_Id = profile,
                        investments = [],
                        message_history=sp.map(
                                            tkey = sp.TAddress,
                                            tvalue = sp.TString,
                            )
                        )

    def add(self, wallet, comp, inv, val_cap, own, inv_recieve, inv_type, convert):
        self.data.investors[wallet].investments.push(sp.record(
                    company = comp, investment_amount = inv, 
                    valuation_cap = val_cap, approx_ownership = own,
                    investment_recieved = inv_recieve, investment_type = inv_type,
                    safe_converted = convert   ))

# Employee details Map
class Employees_key:
    def __init__(self,config):
        self.config = config
    def make(self, wallet):
        return wallet

class Employees_value:
    def get_type():
        return sp.TRecord(  employee_profile_Id = sp.TString,
                            applied_companies = sp.TList(t = sp.TAddress),
                            is_hired = sp.TBool,
                            hired_in = sp.TAddress )

    def make(self, emp, is_hired, hired_in):
        return sp.record(   employee_profile_Id = emp,
                            applied_companies = [],
                            is_hired = is_hired,
                            hired_in = hired_in   )
# Company_member map
class Company_members_key:
    def __init__(self,config):
        self.config = config
    def make(self, wallet):
        return wallet

class Company_members_value:
    def get_type():
        return sp.TRecord(  member_wallet = sp.TAddress,
                            stakeHolder_name = sp.TString,
                            stakeHolder_profile_Id = sp.TString,
                            stakeHolder_type = sp.TString, 
                            investment = sp.TMutez,
                            common_shares = sp.TNat,
                            common_options = sp.TNat,
                            preferred_shares = sp.TNat,
                            fd_shares = sp.TNat,
                            fd_percent = sp.TNat    ) 

    def make(wal, name, pr_id, typ, inv, co_sh, co_op, pr_sh, fd_sh, fd_pr):
        return sp.record(   member_wallet = wal,
                            stakeHolder_name = name,
                            stakeHolder_profile_Id = pr_id,
                            stakeHolder_type = typ, 
                            investment = inv,
                            common_shares = co_op,
                            common_options = co_op,
                            preferred_shares = pr_sh,
                            fd_shares = fd_sh,
                            fd_percent = fd_pr  )

# Fundraise details map
class Fundraise_key:
    def __init__(self, config):
        self.config = config
    def make(self, user, rnd):
        user = sp.set_type_expr(user, sp.TAddress)
        rnd = sp.set_type_expr(rnd, sp.TNat)
        result = sp.pair(user, rnd)
        return result
        
class Fundraise_value:
    def get_type():
        return sp.TRecord(  time = sp.TTimestamp,
                            investor = sp.TAddress,
                            investment = sp.TMutez,
                            ownership = sp.TNat,
                            investment_type = sp.TString, 
                            valuation_cap = sp.TMutez,
                            investment_confirmed = sp.TBool )
    def make(time, inv, inves, own, inv_type, val_cap, inv_conf):
        return sp.record(   time = time,
                            investor = inv,
                            investment = inves,
                            ownership = own,
                            investment_type = inv_type, 
                            valuation_cap = val_cap,
                            investment_confirmed = inv_conf )

# Data Type: List
# Cap-table list
class Cap_table:
    def get_type():
        return sp.TRecord(  stakeHolder_name = sp.TString,
                            stakeHolder_type = sp.TString,
                            investment = sp.TMutez, 
                            common_shares = sp.TNat,
                            common_options = sp.TNat,
                            preferred_shares = sp.TNat,
                            agreement_type = sp.TString,
                            fd_shares = sp.TNat,
                            fd_percent = sp.TNat    )

    def make(name, inv_type, inv, co_sh, co_op, pr_sh, ag_type, fd_sh, fd_pr):
        return sp.record(   stakeHolder_name = name,
                            stakeHolder_type = inv_type,
                            investment = inv, 
                            common_shares = co_sh,
                            common_options = co_op,
                            preferred_shares = pr_sh,
                            agreement_type = ag_type,
                            fd_shares = fd_sh,
                            fd_percent = fd_pr      )
# Safe table list
class Safe_table:
    def get_type():
        return sp.TRecord(  investor_name = sp.TString,
                            investor = sp.TAddress,
                            investment = sp.TMutez,
                            valuation_cap = sp.TMutez,
                            approx_ownership = sp.TNat,
                            investment_recieved = sp.TBool  )

    def make(name, inv, inves, val_cap, own, inv_recieve):
        return sp.record(  investor_name = name,
                            investor = inv,
                            investment = inves,
                            valuation_cap = val_cap,
                            approx_ownership = own,
                            investment_recieved = inv_recieve )
# Investor Requests list
class Investor_request:
    def get_type():
        return sp.TRecord(  investor = sp.TAddress, 
                            investment = sp.TMutez, 
                            valuation_cap = sp.TMutez, 
                            ownership = sp.TNat, 
                            type = sp.TString   )

    def make(inv, inves, val_cap, own, typ):
        return sp.record(   investor = inv, 
                            investment = inves, 
                            valuation_cap = val_cap, 
                            ownership = own, 
                            type = typ  )

# Cashflow details list
class CashFlow:
    def get_type():
        return sp.TRecord(amount = sp.TMutez, tag = sp.TString, time = sp.TTimestamp , isCredit = sp.TBool)
    
    def make(amt, tag, time, isCredit):
        return sp.record(amount = amt, tag = tag, time = time, isCredit = isCredit)

# Companies Requested list
class Companies_requested:
    def get_type():
        return sp.TRecord(  company_wallet = sp.TAddress, 
                            investment = sp.TMutez, 
                            valuation_cap = sp.TMutez, 
                            ownership = sp.TNat, 
                            type = sp.TString   )

    def make(wallet, inv, val_cap, typ):
        return sp.record(   company_wallet = wallet, 
                            investment = inv, 
                            valuation_cap = val_cap, 
                            ownership = own, 
                            type = typ)

#Extras 
class Operator_set:
    def __init__(self, config):
        self.config = config
    def inner_type(self):
        return sp.TRecord(owner = sp.TAddress,
                          operator = sp.TAddress,
                          token_id = token_id_type
                          ).layout(("owner", ("operator", "token_id")))
    def key_type(self):
        if self.config.readable:
            return self.inner_type()
        else:
            return sp.TBytes
    def make(self):
        return self.config.my_map(tkey = self.key_type(), tvalue = sp.TUnit)
    def make_key(self, owner, operator, token_id):
        metakey = sp.record(owner = owner,
                            operator = operator,
                            token_id = token_id)
        metakey = sp.set_type_expr(metakey, self.inner_type())
        if self.config.readable:
            return metakey
        else:
            return sp.pack(metakey)
    def add(self, set, owner, operator, token_id):
        set[self.make_key(owner, operator, token_id)] = sp.unit
    def remove(self, set, owner, operator, token_id):
        del set[self.make_key(owner, operator, token_id)]
    def is_member(self, set, owner, operator, token_id):
        return set.contains(self.make_key(owner, operator, token_id))



class Token_meta_data:
    def __init__(self, config):
        self.config = config

    def get_type(self):
        return sp.TRecord(token_id = sp.TNat, token_info = sp.TMap(sp.TString, sp.TBytes))

    def set_type_and_layout(self, expr):
        sp.set_type(expr, self.get_type())


class Token_id_set:
    def __init__(self, config):
        self.config = config
    def empty(self):
        if self.config.assume_consecutive_token_ids:
            # The "set" is its cardinal.
            return sp.nat(0)
        else:
            return sp.set(t = token_id_type)
    def add(self, totalTokens, tokenID):
        if self.config.assume_consecutive_token_ids:
            sp.verify(totalTokens == tokenID, message = "Token-IDs should be consecutive")
            totalTokens.set(tokenID + 1)
        else:
            totalTokens.add(tokenID)
    def contains(self, totalTokens, tokenID):
        if self.config.assume_consecutive_token_ids:
            return (tokenID < totalTokens)
        else:
            return totalTokens.contains(tokenID)
    def cardinal(self, totalTokens):
        if self.config.assume_consecutive_token_ids:
            return totalTokens
        else:
            return sp.len(totalTokens)

def mutez_transfer(contract, params):
    sp.verify(sp.sender == contract.data.administrator)
    sp.set_type(params.destination, sp.TAddress)
    sp.set_type(params.amount, sp.TMutez)
    sp.send(params.destination, params.amount)

class Core(sp.Contract):
    def __init__(self, config, metadata, **extra_storage):
        self.config = config
        self.error_message = Error_message(self.config)
        self.operator_set = Operator_set(self.config)
        self.operator_param = Operator_param(self.config)
        self.token_id_set = Token_id_set(self.config)
        self.token_meta_data = Token_meta_data(self.config)
        self.batch_transfer    = Batch_transfer(self.config)

        self.ledger_key = Ledger_key(self.config)
        self.investors = Investors_key(self.config)
        self.employees = Employees_key(self.config)
        self.company_members = Company_members_key(self.config)
        self.fundraise = Fundraise_key(self.config)

        self.init(
            ledger = self.config.my_map(tvalue = Ledger_value.get_type()),
            token_metadata = self.config.my_map(tkey = sp.TNat, tvalue = self.token_meta_data.get_type()),
            operators = self.operator_set.make(),
            all_tokens = self.token_id_set.empty(),
            metadata = metadata,
            
            devilList_wallet = sp.address("tz1ZnEXCTNCjtnASjrzK5z2evVC9AdF4K19e"),
            
            total_investments = sp.nat(0),
            total_companies = sp.nat(0),
            total_investors = sp.nat(0),
            total_employees = sp.nat(0),

            all_investors = sp.list(t = sp.TAddress),
            all_employee = sp.list(t = sp.TAddress),
            all_companies = sp.list(t = sp.TAddress),

            buy_shares_request = sp.list(t = sp.TRecord(buyer_wallet = sp.TAddress, company_token = sp.TNat, shares = sp.TNat, price_per_share = sp.TNat)),
            sell_shares_request = sp.list(t = sp.TRecord(seller_wallet = sp.TAddress, company_token = sp.TNat, shares = sp.TNat, price_per_share = sp.TNat)),
            
            investors = sp.big_map( tkey = sp.TAddress, 
                                    tvalue = sp.TRecord(investor_profile_Id = sp.TString, message_history = sp.TMap(sp.TAddress,sp.TString), investments = sp.TList(t = Investors_value.get_type()))),

            employees = self.config.my_map(tvalue = Employees_value.get_type()),
            company_members = self.config.my_map(tvalue = Company_members_value.get_type()),
            fundraise = self.config.my_map(tvalue = Fundraise_value.get_type()),
            
            investor_fees = sp.tez(50),
            employee_fees = sp.tez(25),
            company_fees = sp.tez(50),

            companies_requested = sp.list(t = Companies_requested.get_type()),
        
            fundraised_companies = sp.list(t = sp.TAddress),
            companies = sp.big_map(
                        tkey = sp.TAddress, 
                        tvalue = sp.TRecord(
                            company_profile_Id = sp.TString,
                            token_Id = sp.TNat,
                            
                            company_valuation = sp.TMutez,
                            cashflow = sp.TList(t = CashFlow.get_type()),
                            
                            round_num = sp.TNat,
                            total_shares = sp.TNat,
                            company_ownership = sp.TNat, 
                            
                            employees = sp.TList(t = sp.TAddress),
                            employee_requests = sp.TList(t = sp.TAddress),

                            investor_requests = sp.TList(t = Investor_request.get_type()),
                            request_accepted = sp.TBool,
                            investor_accepted = sp.TAddress,
                            time_of_acceptance = sp.TTimestamp,
                            message_history = sp.TMap(sp.TAddress, sp.TString),
                            
                            safe_table = sp.TList(t = Safe_table.get_type()),
                            cap_table = sp.TList(t = Cap_table.get_type())
                    )
                ),
            **extra_storage
        )

        if self.config.store_total_supply:
            self.update_initial_storage(
                total_supply = self.config.my_map(tkey = sp.TNat, tvalue = sp.TNat),
            )

    # @sp.entry_point
    def transfer(self, params):
        sp.set_type(params, self.batch_transfer.get_type())
        sp.for transfer in params:
           current_from = transfer.from_
           sp.for tx in transfer.txs:
                if self.config.single_asset:
                    sp.verify(tx.token_id == 0, message = "single-asset: token-id <> 0")

                sender_verify = ((self.is_administrator(sp.sender)) |
                                (current_from == sp.sender))
                message = self.error_message.not_owner()

                sp.if (tx.amount > 0):
                    from_user = self.ledger_key.make(current_from, tx.token_id)
                    sp.verify(
                        (self.data.ledger[from_user].balance >= tx.amount),
                        message = self.error_message.insufficient_balance())
                    to_user = self.ledger_key.make(tx.to_, tx.token_id)
                    self.data.ledger[from_user].balance = sp.as_nat(
                        self.data.ledger[from_user].balance - tx.amount)
                    sp.if self.data.ledger.contains(to_user):
                        self.data.ledger[to_user].balance += tx.amount
                    sp.else:
                         self.data.ledger[to_user] = Ledger_value.make(tx.amount)
                sp.else:
                    pass

    @sp.entry_point
    def balance_of(self, params):
        sp.set_type(params, Balance_of.entry_point_type())
        def f_process_request(req):
            user = self.ledger_key.make(req.owner, req.token_id)
            sp.verify(self.data.token_metadata.contains(req.token_id), message = self.error_message.token_undefined())
            sp.if self.data.ledger.contains(user):
                balance = self.data.ledger[user].balance
                sp.result(
                    sp.record(
                        request = sp.record(
                            owner = sp.set_type_expr(req.owner, sp.TAddress),
                            token_id = sp.set_type_expr(req.token_id, sp.TNat)),
                        balance = balance))
            sp.else:
                sp.result(
                    sp.record(
                        request = sp.record(
                            owner = sp.set_type_expr(req.owner, sp.TAddress),
                            token_id = sp.set_type_expr(req.token_id, sp.TNat)),
                        balance = 0))
        res = sp.local("responses", params.requests.map(f_process_request))
        destination = sp.set_type_expr(params.callback, sp.TContract(Balance_of.response_type()))
        sp.transfer(res.value, sp.mutez(0), destination)

    @sp.entry_point
    def update_operators(self, params):
        sp.set_type(params, sp.TList(
            sp.TVariant(
                add_operator = self.operator_param.get_type(),
                remove_operator = self.operator_param.get_type()
            )
        ))
        if self.config.support_operator:
            sp.for update in params:
                with update.match_cases() as arg:
                    with arg.match("add_operator") as upd:
                        sp.verify(
                            (upd.owner == sp.sender) | self.is_administrator(sp.sender),
                            message = self.error_message.not_admin_or_operator()
                        )
                        self.operator_set.add(self.data.operators,
                                              upd.owner,
                                              upd.operator,
                                              upd.token_id)
                    with arg.match("remove_operator") as upd:
                        sp.verify(
                            (upd.owner == sp.sender) | self.is_administrator(sp.sender),
                            message = self.error_message.not_admin_or_operator()
                        )
                        self.operator_set.remove(self.data.operators,
                                                 upd.owner,
                                                 upd.operator,
                                                 upd.token_id)
        else:
            sp.failwith(self.error_message.operators_unsupported())


    def is_administrator(self, sender):
        return sp.bool(False)

class FA2_administrator(Core):
    def is_administrator(self, sender):
        return sender == self.data.administrator

    @sp.entry_point
    def set_administrator(self, params):
        sp.verify(self.is_administrator(sp.sender), message = self.error_message.not_admin())
        self.data.administrator = params


class FA2_change_metadata(Core):
    @sp.entry_point
    def set_metadata(self, k, v):
        sp.verify(self.is_administrator(sp.sender), message = self.error_message.not_admin())
        self.data.metadata[k] = v

class FA2_token_metadata(Core):
    def make_metadata(symbol, name, decimals):
        "Helper function to build metadata JSON bytes values."
        return (sp.map(l = {
            "decimals" : sp.utils.bytes_of_string("%d" % decimals),
            "name" : sp.utils.bytes_of_string(name),
            "symbol" : sp.utils.bytes_of_string(symbol)
        }))

class FA2_mint(Core):
    def mint(self, member_wallet, amount, token_id):
        if self.config.single_asset:
            sp.verify(params.token_id == 0, message = "single-asset: token-id <> 0")
        if self.config.non_fungible:
            sp.verify(params.amount == 1, message = "NFT-asset: amount <> 1")
            sp.verify(
                ~ self.token_id_set.contains(self.data.all_tokens, params.token_id),
                message = "NFT-asset: cannot mint twice same token"
            )

        metadata = FA2_token_metadata.make_metadata(
            name = "The Token Zero",
            decimals = 2,
            symbol= "TK0" )
        user = self.ledger_key.make(member_wallet, token_id)
        sp.if self.data.ledger.contains(user):
            self.data.ledger[user].balance = self.data.ledger[user].balance + amount
        sp.else:
            self.data.ledger[user] = Ledger_value.make(amount)
        sp.if ~ self.token_id_set.contains(self.data.all_tokens, token_id):
            self.token_id_set.add(self.data.all_tokens, token_id)
            self.data.token_metadata[token_id] = sp.record(
                token_id    = token_id,
                token_info  = metadata
            )

        if self.config.store_total_supply:
            self.data.total_supply[token_id] = amount + self.data.total_supply.get(token_id, default_value = 0)

class DevilList(Core):
    @sp.entry_point
    def sell_shares(self, params):
        sp.set_type(params, sp.TRecord(seller_wallet = sp.TAddress, company_token = sp.TNat, shares = sp.TNat, price_per_share = sp.TNat))
        self.data.sell_shares_request.push(params)

    @sp.entry_point
    def buy_shares(self, params):
        sp.set_type(params, sp.TRecord(buyer_wallet = sp.TAddress, company_token = sp.TNat, shares = sp.TNat, price_per_share = sp.TNat))
        self.data.buy_shares_request.push(params)

    @sp.entry_point
    def token_transfer(self, params):
        sp.set_type(params, sp.TRecord(from_ = sp.TAddress, to_ = sp.TAddress, token_id = token_id_type, amount = sp.TNat))

        sp.send(params.to_, sp.amount, "Transaction Failed") 
        txs = sp.local("txs", sp.list([]))
        tranfer_entry = sp.local("tranfer_entry", sp.list([]))
        txs.value.push(sp.record(to_ = params.to_, token_id = params.token_id,amount = params.amount))
        tranfer_entry.value.push(sp.record(from_ = params.from_, txs = txs.value))
        self.transfer(tranfer_entry.value)


    @sp.entry_point
    def investor_signup(self, params):
        sp.set_type(params.investor_profile_Id, sp.TString)

        sp.for inv in self.data.all_investors:
            sp.verify(sp.sender != inv,"Account Already Exist!" )
        sp.verify(sp.amount == Investor_fees.get_fees(self), "Invalid Amount!" )
        
        self.data.investors[sp.sender] = Investors_value.make(self, params.investor_profile_Id)
        self.data.all_investors.push(sp.sender)
        sp.send(self.data.devilList_wallet, sp.amount, "New Investor Registered!")
        Total_investor.increase_total_investor(self)

    @sp.entry_point
    def employee_signup(self, params):
        sp.set_type(params.employee_profile_Id, sp.TString)

        sp.for emp in self.data.all_employee:
            sp.verify(sp.sender != emp,"Account Already Exist!" )
        sp.verify(sp.amount == Employee_fees.get_fees(self), "Invalid Amount!" )
        
        self.data.employees[sp.sender] = Employees_value.make(self, params.employee_profile_Id, False, sp.sender)
        self.data.all_employee.push(sp.sender)
        sp.send(self.data.devilList_wallet, sp.amount, "New Employee Registered!")
        Total_employee.increase_total_employee(self)


       
    @sp.entry_point
    def company_signup(self, params):
        sp.set_type(params, sp.TRecord(company_valuation = sp.TMutez, company_profile_Id = sp.TString))
        
        sp.for com in self.data.all_companies:
            sp.verify(sp.sender != com,"Account Already Exist!" )

        sp.verify(sp.amount == Company_fees.get_fees(self), "Invalid Amount!" )
        
        self.data.companies[sp.sender] = sp.record(
                            company_profile_Id = params.company_profile_Id,
                            token_Id = self.data.total_companies,
                            company_valuation = params.company_valuation,
                            cashflow = [],
                            round_num = sp.nat(0),
                            total_shares = sp.nat(0),
                            company_ownership = sp.nat(100), 
                            
                            employees = [],
                            employee_requests = [],
                            investor_requests = [],
                            request_accepted = False,
                            investor_accepted = sp.sender,
                            time_of_acceptance = sp.now,
                            message_history = sp.map( tkey = sp.TAddress, tvalue = sp.TString),
                            
                            safe_table = [],
                            cap_table = [],
                        )
        self.data.all_companies.push(sp.sender)
        sp.send(self.data.devilList_wallet, sp.amount, "New Company Registered!")
        Total_company.increase_total_company(self)

    @sp.entry_point
    def pay_from_company_wallet(self, params):
        sp.set_type(params, sp.TRecord(company_wallet = sp.TAddress, receiver_wallet = sp.TAddress, amount = sp.TMutez, tag = sp.TString))
        sp.verify(sp.amount == params.amount, "Invalid Amount")
        sp.send(params.receiver_wallet, sp.amount, message='Transaction Failed')
        self.data.companies[params.company_wallet].cashflow.push(CashFlow.make(sp.amount, params.tag, sp.now, False))
        self.data.companies[params.company_wallet].company_valuation = self.data.companies[params.company_wallet].company_valuation - sp.amount

    @sp.entry_point
    def apply_for_company(self, params):
        sp.set_type(params.company_wallet, sp.TAddress)
        
        self.data.employees[sp.sender].applied_companies.push(params.company_wallet)
        self.data.companies[params.company_wallet].employee_requests.push(sp.sender)

    @sp.entry_point
    def hire_employee(self, params):
        sp.set_type(params.employee_wallet, sp.TAddress)

        self.data.companies[sp.sender].employees.push(params.employee_wallet)
        self.data.employees[params.employee_wallet].is_hired = True
        self.data.employees[params.employee_wallet].hired_in = sp.sender

        new_employee_requests = sp.local("new_employee_requests", sp.list([]))
        sp.for emp in self.data.companies[sp.sender].employee_requests:
            sp.if emp != params.employee_wallet:
                new_employee_requests.value.push(emp)
        self.data.companies[sp.sender].employee_requests = new_employee_requests.value

    @sp.entry_point
    def change_message_hash(self,params):
        sp.set_type(params,sp.TRecord(company = sp.TAddress, investor = sp.TAddress, message_hash = sp.TString) )
        self.data.investors[params.investor].message_history[params.company] = params.message_hash
        self.data.companies[params.company].message_history[params.investor] = params.message_hash
    
    def update_cap_table(self, company_wallet, fd_shares):
        self.data.companies[company_wallet].total_shares = self.data.companies[company_wallet].total_shares + fd_shares
        sp.for stakeholder in self.data.companies[company_wallet].cap_table:
            stakeholder.fd_percent = sp.nat(1000000) * stakeholder.fd_shares / self.data.companies[company_wallet].total_shares 

    @sp.entry_point
    def add_member_to_company(self, params):
        sp.set_type(params, sp.TRecord( member_wallet = sp.TAddress, stakeHolder_name = sp.TString, stakeHolder_profile_Id = sp.TString, stakeHolder_type = sp.TString, 
                                        investment = sp.TMutez, common_shares = sp.TNat, common_options = sp.TNat,
                                        preferred_shares = sp.TNat, fd_shares = sp.TNat, fd_percent = sp.TNat))
        self.data.company_members[params.member_wallet] = params
        fd_shares = sp.local("fd_shares", params.common_shares + params.common_options + params.preferred_shares)
        self.data.company_members[params.member_wallet].fd_shares = fd_shares.value
    
        self.data.companies[sp.sender].cap_table.push(Cap_table.make(params.stakeHolder_name, params.stakeHolder_type, params.investment,
                         params.common_shares, params.common_options,params.preferred_shares, sp.string(""), fd_shares.value, 0))
        
        self.update_cap_table(sp.sender, fd_shares.value)

        sp.for entry in self.data.companies[sp.sender].cap_table:
            sp.if entry.stakeHolder_name == params.stakeHolder_name:
                self.data.company_members[params.member_wallet].fd_percent = entry.fd_percent 
        FA2_mint.mint(self, params.member_wallet, fd_shares.value, self.data.companies[sp.sender].token_Id)

    @sp.entry_point
    def request_from_investor(self, params):
        sp.set_type(params, sp.TRecord(company_wallet = sp.TAddress, investment = sp.TMutez, valuation_cap = sp.TMutez, direct_equity = sp.TNat, type = sp.TString))
        
        round_num = sp.local('round_num', self.data.companies[params.company_wallet].round_num )

        flag_present = sp.local("flag_present", False)
        sp.for r in self.data.companies[params.company_wallet].investor_requests:
            sp.if r.investor == sp.sender:
                sp.if r.type == sp.string("DirectEquity"):
                    r.ownership = params.direct_equity
                sp.if r.type == sp.string("SAFE"):
                    r.ownership = sp.nat(100) * sp.utils.mutez_to_nat(params.investment) / sp.utils.mutez_to_nat(params.valuation_cap)
                r.type = params.type
                r.investment = params.investment
                r.valuation_cap = params.valuation_cap
                flag_present.value = True
                
                    
        sp.if flag_present.value == False:
            sp.if params.type == sp.string("DirectEquity"):
                ownership = sp.local("ownership", params.direct_equity)
                new_record = Investor_request.make(sp.sender, params.investment, params.valuation_cap, params.direct_equity, params.type)
                self.data.companies[params.company_wallet].investor_requests.push(new_record)

            
            sp.if params.type == sp.string("SAFE"):
                ownership = sp.local("ownership", sp.nat(100) * sp.utils.mutez_to_nat(params.investment) / sp.utils.mutez_to_nat(params.valuation_cap))
                new_record = Investor_request.make(sp.sender, params.investment, params.valuation_cap, ownership.value, params.type)
                self.data.companies[params.company_wallet].investor_requests.push(new_record)

    @sp.entry_point
    def accept_investor_request(self, params):
        sp.set_type(params.investor_wallet, sp.TAddress)
        
        round_num = sp.local('round_num', self.data.companies[sp.sender].round_num )
        sp.for r in  self.data.companies[sp.sender].investor_requests:
            sp.if r.investor == params.investor_wallet:
                request = sp.local("request", r)
                self.data.companies[sp.sender].request_accepted = True
                self.data.companies[sp.sender].investor_accepted = params.investor_wallet
                self.data.companies[sp.sender].time_of_acceptance = sp.now
                new_fund_raise = Fundraise_key.make(self, sp.sender, round_num.value)
                self.data.fundraise[new_fund_raise] = Fundraise_value.make(sp.now, params.investor_wallet, request.value.investment, 
                                                                    request.value.ownership, request.value.type, request.value.valuation_cap, False)


    @sp.entry_point
    def invest_through_SAFE(self, params):
        sp.set_type(params, sp.TRecord(investor_name = sp.TString, company_wallet = sp.TAddress))
        
        round_num = sp.local('round_num', self.data.companies[params.company_wallet].round_num )
        fund_raise = sp.local('fund_raise',Fundraise_key.make(self, params.company_wallet, round_num.value))
        sp.verify(sp.amount == self.data.fundraise[fund_raise.value].investment , "Invalid Amount") 
        sp.send( params.company_wallet, sp.amount, message = "Amount Investment Failed")

        self.data.companies[params.company_wallet].cashflow.push(CashFlow.make(sp.amount,"Investment", sp.now, True))
        
        self.data.companies[params.company_wallet].company_valuation = self.data.companies[params.company_wallet].company_valuation + sp.amount
        self.data.fundraise[fund_raise.value].investment_confirmed = True
        self.data.companies[params.company_wallet].company_ownership = sp.as_nat(self.data.companies[params.company_wallet].company_ownership - self.data.fundraise[fund_raise.value].ownership)

        self.data.companies[params.company_wallet].safe_table.push(
                                    Safe_table.make(params.investor_name, sp.sender, self.data.fundraise[fund_raise.value].investment,  
                                    self.data.fundraise[fund_raise.value].valuation_cap,  self.data.fundraise[fund_raise.value].ownership, True)
                                    )

        Total_investment.set_total_investment(self, sp.utils.mutez_to_nat(sp.amount))
        
        new_fundraised_companies = sp.local("new_fundraised_companies", sp.list([]))
        sp.for company in self.data.fundraised_companies:
            sp.if company != params.company_wallet:
                new_fundraised_companies.value.push(company)
        self.data.fundraised_companies = new_fundraised_companies.value


    @sp.entry_point
    def invest_through_DirectEquity(self, params):
        sp.set_type(params, sp.TRecord(company_wallet = sp.TAddress, investor_name = sp.TString))
        round_num = sp.local('round_num', self.data.companies[params.company_wallet].round_num)
        fund_raise = sp.local('fund_raise',Fundraise_key.make(self, params.company_wallet, round_num.value))
        ownership = sp.local('ownership', self.data.fundraise[fund_raise.value].ownership)
        fd_shares = sp.local('fd_shares', ownership.value * self.data.companies[params.company_wallet].total_shares / self.data.companies[params.company_wallet].company_ownership)
        
        
        self.data.companies[params.company_wallet].company_ownership = sp.as_nat(self.data.companies[params.company_wallet].company_ownership - ownership.value)
        self.data.companies[params.company_wallet].cap_table.push(
                                    Cap_table.make(params.investor_name, "Investor",self.data.fundraise[fund_raise.value].investment ,
                                    0, 0, fd_shares.value, "DirectEquity", fd_shares.value, ownership.value)
                                    )

        FA2_mint.mint(self, sp.sender, fd_shares.value, self.data.companies[params.company_wallet].token_Id)
        self.update_cap_table(params.company_wallet, fd_shares.value) 
        Total_investment.set_total_investment(self, sp.utils.mutez_to_nat(sp.amount))
        new_fundraised_companies = sp.local("new_fundraised_companies", sp.list([]))
        sp.for company in self.data.fundraised_companies:
            sp.if company != params.company_wallet:
                new_fundraised_companies.value.push(company)
        self.data.fundraised_companies = new_fundraised_companies.value

    @sp.entry_point
    def raise_fund_for_company(self, params):
        sp.set_type(params, sp.TRecord(investment = sp.TMutez, ownership = sp.TNat, type = sp.TString))
        
        self.data.fundraised_companies.push(sp.sender)
        self.data.companies[sp.sender].request_accepted = False
        self.data.companies[sp.sender].time_of_acceptance = sp.now
        self.data.companies[sp.sender].investor_accepted = sp.sender
        self.data.companies[sp.sender].round_num = self.data.companies[sp.sender].round_num + 1

        round_num = sp.local('round_num', self.data.companies[sp.sender].round_num)
        new_fund_raise = Fundraise_key.make(self, sp.sender, round_num.value)
        self.data.fundraise[new_fund_raise] = Fundraise_value.make(sp.now, sp.sender, params.investment, 
                                                                    params.ownership, params.type, sp.tez(0), False)
        
        sp.for safe in self.data.companies[sp.sender].safe_table:
            sp.if self.data.companies[sp.sender].company_valuation >= safe.valuation_cap:
                fd_shares = sp.local("fd", safe.approx_ownership * self.data.companies[sp.sender].total_shares / self.data.companies[sp.sender].company_ownership )
                self.data.companies[sp.sender].cap_table.push(
                                    Cap_table.make(safe.investor_name, "Investor", safe.investment ,
                                    0, 0, fd_shares.value, "SAFE", fd_shares.value, safe.approx_ownership))
                self.update_cap_table(sp.sender, fd_shares.value) 
                FA2_mint.mint(self, safe.investor, fd_shares.value, self.data.companies[sp.sender].token_Id)

            sp.else:
                safe.approx_ownership = sp.utils.mutez_to_nat(safe.investment) / sp.utils.mutez_to_nat( self.data.companies[sp.sender].company_valuation)
                self.data.companies[sp.sender].company_ownership = sp.as_nat( self.data.companies[sp.sender].company_ownership - safe.approx_ownership )

                fd_shares = sp.local("fd", safe.approx_ownership * self.data.companies[sp.sender].total_shares / self.data.companies[sp.sender].company_ownership )
                self.data.companies[sp.sender].cap_table.push(
                                    Cap_table.make(safe.investor_name, "Investor", safe.investment ,
                                    0, 0, fd_shares.value, "SAFE", fd_shares.value, safe.approx_ownership))
                self.update_cap_table(sp.sender, fd_shares.value) 
                FA2_mint.mint(self, safe.investor, fd_shares.value, self.data.companies[sp.sender].token_Id)
            
        self.data.companies[sp.sender].safe_table = []

def global_parameter(env_var, default):
    try:
        if os.environ[env_var] == "true" :
            return True
        if os.environ[env_var] == "false" :
            return False
        return default
    except:
        return default

def environment_config():
    return Config(
        debug_mode = global_parameter("debug_mode", False),
        single_asset = global_parameter("single_asset", False),
        non_fungible = global_parameter("non_fungible", False),
        add_mutez_transfer = global_parameter("add_mutez_transfer", False),
        readable = global_parameter("readable", True),
        force_layouts = global_parameter("force_layouts", True),
        support_operator = global_parameter("support_operator", True),
        assume_consecutive_token_ids =
            global_parameter("assume_consecutive_token_ids", True),
        store_total_supply = global_parameter("store_total_supply", False),
        lazy_entry_points = global_parameter("lazy_entry_points", False),
        allow_self_transfer = global_parameter("allow_self_transfer", False),
        use_token_metadata_offchain_view = global_parameter("use_token_metadata_offchain_view", True),
    )

if "templates" not in __name__:
    add_test(environment_config())
    if not global_parameter("only_environment_test", False):
        add_test(Config(debug_mode = True), is_default = not sp.in_browser)
        add_test(Config(single_asset = True), is_default = not sp.in_browser)
        add_test(Config(non_fungible = True, add_mutez_transfer = True),
                 is_default = not sp.in_browser)
        add_test(Config(readable = False), is_default = not sp.in_browser)
        add_test(Config(force_layouts = False),
                 is_default = not sp.in_browser)
        add_test(Config(debug_mode = True, support_operator = False),
                 is_default = not sp.in_browser)
        add_test(Config(assume_consecutive_token_ids = False)
                 , is_default = not sp.in_browser)
        add_test(Config(store_total_supply = True)
                 , is_default = not sp.in_browser)
        add_test(Config(add_mutez_transfer = True)
                 , is_default = not sp.in_browser)
        add_test(Config(lazy_entry_points = True)
                 , is_default = not sp.in_browser)

    
