import React, { useEffect } from 'react'

export const CommittesOverview = (props) => {
  // componenDid
  useEffect(()=>{
    props.setProgress(100);
  }, []);

  return (
    <>
      <div>
        <h1> To be completed by bangar</h1>
      </div>
    </>
  )
}
