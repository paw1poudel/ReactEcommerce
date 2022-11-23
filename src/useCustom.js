import React, { useState } from 'react'

function useCustom() {
    const[isProductShown,setIsProductShown]=useState(false)
    function toggleShown(){
        setIsProductShown(prev=>!prev)
    }
  return (
   [toggleShown,isProductShown]
  )
}

export default useCustom