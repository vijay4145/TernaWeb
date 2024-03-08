import React, { useEffect, useState } from "react";
import { AiOutlineSchedule } from 'react-icons/ai';
import { Link } from "react-router-dom";
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, CardActions, CardContent, Skeleton } from "@mui/material";
import {getTimeLeft} from '../../Services/Utils';


export const EventCard = ({event}) => {

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const handleImageLoad = ()=>{
    setIsImageLoaded(true);
  }

  const getHeading = ()=>{
    let newHeading = event.EVENT_HEADING;
    const limit = 30;
    if(newHeading.length > limit){
      newHeading = newHeading.substring(0,30);
      newHeading = newHeading + '...';
    }
    return newHeading;
  }
  
  return (
    <>
    <Link to={'eventdetail/'+event._id} target="_blank" className="flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 gap-1 cursor-pointer">

       <Card sx={{ maxWidth: 300, }} >
        {!isImageLoaded && <Skeleton variant='rectangular' height={220} className={`${isImageLoaded} ? 'hidden':''`}/> }
      <CardMedia
        component="img"
        alt="green iguana"
        className={`object-cover ${isImageLoaded ? 'h-60':'h-0 hidden'}`}
        image={event.EVENT_IMAGE_URL}
        onLoad={handleImageLoad}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="truncate">
          {getHeading()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {getTimeLeft(event)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {event.EVENT_DESCRIPTION}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-center">
      <Button variant="outlined">APPLY</Button>
      {/* <Button variant="outlined">FORM TEAM</Button> */}
      </CardActions>
    </Card>
    </Link>
    </>
  );
};
