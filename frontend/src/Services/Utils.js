
export function getTimeLeft(data){
        const targetDateTime = data.EVENT_REGISTER_BEFORE;
        const now = new Date().getTime();
        const targetTime = new Date(targetDateTime).getTime();
        const difference = targetTime - now;
        const oneDayInMilliseconds = 1000 * 60 * 60 * 24;
        if(difference < oneDayInMilliseconds){
            const timeLeft = `${Math.floor(difference / (1000 * 60 * 60 * 24))} days, ${Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} hours left`;
            return <span className="text-red-500">{timeLeft}</span>
        }
        else if (difference > 0) 
            return `${Math.floor(difference / (1000 * 60 * 60 * 24))} days, ${Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} hours left`;
        else return <span className="text-red-500">Registration Finished</span>;
        
}