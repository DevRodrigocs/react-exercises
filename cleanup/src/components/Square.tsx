import { useEffect } from "react";

export const Square = () => {
    useEffect(() => {
        console.log('THE SQUARE EFFECT HAS BEEN TRANSFORMED');

        return () => {
            console.log('RAN THE "CLEANUP..."');
        }
    })

    return (
       <div className="w-40 h-40 bg-red-400"></div>
    );
}