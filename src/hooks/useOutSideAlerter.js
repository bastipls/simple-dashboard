import { useEffect, useState } from "react";

export const useOutsideAlerter = (ref) => {
    const [isComponentVisible, setIsComponentVisible] = useState(false)

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        const  handleClickOutside = (event) => {
            
            if (ref.current && !ref.current.contains(event.target)) {
    
                setIsComponentVisible(false);    
            }
         }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    const HandleSetVisibilitiy = () =>{
        setIsComponentVisible(!isComponentVisible)
    }
    return {
        isComponentVisible,
        HandleSetVisibilitiy
    }
}
