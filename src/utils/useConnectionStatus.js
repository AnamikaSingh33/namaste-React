import { useEffect, useState } from "react";

const useConnectionStatus =()=>{

    const [onlineStatus , setOnlineStatus] =useState(true);

    useEffect(()=>{
          // Event listener for going online
window.addEventListener('online', () => {
    setOnlineStatus(true);
});

// Event listener for going offline
window.addEventListener('offline', () => {
    setOnlineStatus(false);
});

    },[])

    return onlineStatus;
}

export default useConnectionStatus;