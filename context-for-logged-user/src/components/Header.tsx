import { LoggedUserContext } from "@/contexts/LoggedUser";
import { useContext } from "react";

export const Header = () => {
    const loggedUserCtx = useContext(LoggedUserContext);

    const handleLogout = () => {
        loggedUserCtx?.setName('');
    }

    return (
        <header>
            <h1 className="text-3xl mb-4">Page title</h1>
            {loggedUserCtx?.name &&
                <>
                    <p className="mb-2">Logged User: {loggedUserCtx?.name}</p>
                    <button 
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-colors"
                        onClick={handleLogout}
                    >Log out</button>
                </>
            
            }
            {(!loggedUserCtx || loggedUserCtx?.name === '') &&
                <p>Logged out user</p>
            }

        </header>

    );
}