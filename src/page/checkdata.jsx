import React from 'react'



const Checkdata = () => {

    const token = JSON.parse(localStorage.getItem('token'))

    console.log(token,'token++++++++++++++')
  return (
    <div>checkdata</div>
  )
}

export default Checkdata