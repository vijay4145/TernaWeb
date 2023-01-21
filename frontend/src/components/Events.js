import React, { useEffect } from 'react'

export const Events = (props) => {
  useEffect(() => {
    props.setProgress(100);
  }, [])
  
  return (
    <>
    <h1>To be completed by Vijay</h1>
    </>
  )
}
