import React from 'react'
import { useState } from 'react'


import AccountBalance from './banking_components/AccountBalance'
import Form from './banking_components/Form'
import Hi from './banking_components/Hi'
import Hello from './banking_components/Hello'

const Banking = () => {
    //THE BALANCE STATE HAS TO BE HERE IN THE PARENT BECAUSE MORE THAN ONE COMPONENTS NEEDS IT

    const[balance, setBalance] = useState(0)


  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12 text-center'>
                <h1>Banking App</h1>
            </div>
        </div>
        {
            balance > 1000 ? <p className='alert alert-success'>You are doing well</p> : <p className=' alert alert-warning'> Oga Hustle More</p>
        }
        <AccountBalance balance={balance} />
        <Form balance={balance} setBalance={setBalance} />
<hr />
<Hello />
<Hi />  
    </div>
  )
}

export default Banking