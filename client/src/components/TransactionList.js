import React, {useContext, useEffect} from 'react'
import {GlobalContext} from '../context/globalState'
import Transaction from './Transaction'

const TransactionList = () => {
    
    const { transactions, getTransaction } = useContext(GlobalContext)
  
    useEffect(()=> {
        getTransaction()
    },[])


    return (
        <>
        <h3>History</h3>
        <ul className="list">
        {transactions.map(trans => (<Transaction key={trans.id} transaction={trans}/>))}
              
        </ul>
        </>
    )
}

export default TransactionList
