import { useUser } from "@/contexts/UserContext";
import { NameInput } from "./NameInput";
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";

export const Chat = () => {

    // Step 1: Know username
    const userCtx = useUser();

    if(!userCtx) return null;
    if(!userCtx.user) return <NameInput />

    // Step 2: Messages history
    // Step 3: Add messages input

    return (
        <div className="border border-white/30 rounded-md">
            <div className="flex flex-col gap-2 h-96 overflow-y-auto p-3 scroll-smoot">
                <ChatMessages />
            </div>
            <div className="border-t border-t-white/30 p-3">
                <ChatInput name={userCtx.user} />
            </div>
            <div className="border-t border-t-white/30 p-3">
                <ChatInput name={'bot'} />
            </div>
        </div>
    )
}