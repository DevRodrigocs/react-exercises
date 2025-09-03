import { CountContext } from "@/contexts/CountContext"
import { useContext } from "react"

export const OnlineUsers = () => {
    const countCtx = useContext(CountContext);

    const handleBanAll = () => {
        countCtx?.setOnlineCount(0);
    }

    return (
        <>
           <p>Online: {countCtx?.onlineCount}</p>
            <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            onClick={handleBanAll}
            >
            Ban all
            </button>
        </>
    )
}