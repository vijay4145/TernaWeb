import { Skeleton, Typography } from '@mui/material'
import React from 'react'

const EventCardSkeleton = () => {
  return (
    <div  className="flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 gap-1 pb-3 cursor-pointer">
    <div className="flex justify-center">
        <img className="rounded-t-lg h-48 w-auto"  alt=""/>
        <Skeleton variant='rectangular' width={350} height={220}/>
    </div>
    <div id="event_heading" className="px-3 mt-1">
        <Typography variant='body1' component='div'> <Skeleton/> </Typography>
        <Typography variant='body1' component='div'  > <Skeleton/> </Typography>
        <Typography variant='body1' component='div'  > <Skeleton/> </Typography>
    </div>
  </div>
  )
}

export default EventCardSkeleton
