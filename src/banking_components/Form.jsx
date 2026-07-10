import React from 'react'

import { useState } from 'react'
const Form = ({balance, setBalance}) => {

    // a state to track amount they typed: useState hook
    const[amount, setAmount] = useState("")

    function withdraw(){
        if(amount == ""){
            alert("How much you want to withdraw");
            return false;
        }
        if(amount > balance){
            alert("Insufficient Account Balance")
            return false;
        }
        var amount_to_withdraw = Number(amount)
        var currentBalance = balance - amount_to_withdraw
        setBalance(currentBalance)
        setAmount("")

    }
    function deposit(){
        if(amount == ""){
            alert("How much you want to deposit");
            return false;
        }
        var amount_to = Number(amount);
        var currentBalance = balance + amount_to
        setBalance(currentBalance)
        setAmount("")

    }

  return (
    <div className='row'>
        <div className="col-md-8 offset-md-2">
            <div className='mb-2'>
                <input className='form-control' type='number' onChange={ function(e){
                    setAmount(e.target.value);
                } } value={amount}/>
            </div>
            <div className='mb-2'>
                <button className="btn btn-danger w-50" onClick={withdraw}>Withdraw</button>
                <button className="btn btn-primary w-50" onClick={deposit}>Deposit</button>
            </div>
        </div>
    </div>
  )
}

export default Form