import React, { createContext, FC, useState } from 'react'

interface filterobjtype {
    rateorder: string,
    ordersorder: string,
    ratebox: string,
    cuisine: any,
    splitarr: string
}

interface ParentCompProps {
    children?: React.ReactNode;
}

export const Head = createContext<any>({});

const Context: FC<ParentCompProps> = ({ children }) => {
    const [toggleFilterbox, setToggleFilterbox] = useState<boolean>(false);
    // const [myarr, setmyarr] = useState<any>([]);
    const [filterobj, setfilterobj] = useState<filterobjtype>({
        rateorder: "rdesc",
        ordersorder: "odesc",
        ratebox: "0.0",
        cuisine: [],
        splitarr: "none"
    })


    return (
        <Head.Provider value={{ toggleFilterbox, setToggleFilterbox, filterobj, setfilterobj }}>{children}</Head.Provider>
    )
}

export default Context