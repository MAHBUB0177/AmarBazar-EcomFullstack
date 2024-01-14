import React, { useEffect, useState } from 'react'
import { getCustomer } from '../service'

const Customer = () => {
    const [data,setData]=useState()
    console.log(data,'customer data')

    useEffect(()=>{
        getCustomer().then((res)=>{
            setData(res?.data)
        })

    },[])
  return (
    <div>
      {data?.length > 0 && data?.map((item,i)=>
      <>
      <p className='text-xl h-[80px] w-[300px] ' key={i}>
        {item?.customer_name}

      </p>
      
      </>)}
    </div>
  )
}

export default Customer