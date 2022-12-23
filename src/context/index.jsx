import React, {createContext, useContext} from 'react';

import {useAddress, useDisconnect, useMetamask} from '@thirdweb-dev/react';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {

    const address = useAddress();
    const connect = useMetamask();
    const disconnect = useDisconnect();

    return (
        <StateContext.Provider
            value={{
                address,
                connect,
                disconnect,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);