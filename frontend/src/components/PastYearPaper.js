import React, { useEffect } from 'react'

export const PastYearPaper = (props) => {
  useEffect(()=>{
    props.setProgress(100);
  },[]);
  return (
    <>
    <h1>To be completed by apte</h1>
    </>
  )
}
