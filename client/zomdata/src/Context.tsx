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
    });




    return (
        <Head.Provider value={{ cuisines, toggleFilterbox, setToggleFilterbox, filterobj, setfilterobj }}>{children}</Head.Provider>
    )
}

const cuisines = [
    "Afghan",
    "African",
    "American",
    "Andhra",
    "Arabian",
    "Asian",
    "Delight Goodies",
    "Awadhi",
    "BBQ",
    "Bakery",
    "Bangladeshi",
    "Belgian",
    "Bengali",
    "Bihari",
    "Biryani",
    "Bubble Tea",
    "Burger",
    "Burmese",
    "Cantonese",
    "Charcoal Chicken",
    "Chettinad",
    "Chinese",
    "Coffee",
    "Continental",
    "Desserts",
    "Egyptian",
    "European",
    "Fast Food",
    "Finger Food",
    "French",
    "Frozen Yogurt",
    "Goan",
    "Gujarati",
    "Healthy Food",
    "Hot dogs",
    "Hyderabadi",
    "Ice Cream",
    "Indonesian",
    "Iranian",
    "Irish",
    "Italian",
    "Japanese",
    "Juices",
    "Kashmiri",
    "Kathiyawadi",
    "Kebab",
    "Kerala",
    "Konkan",
    "Korean",
    "Lebanese",
    "Lucknowi",
    "Maharashtrian",
    "Malaysian",
    "Mandi",
    "Mangalorean",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Mishti",
    "Mithai",
    "Modern Indian",
    "Momos",
    "Mughlai",
    "Naga",
    "Nepalese",
    "North Eastern",
    "North Indian",
    "Oriental",
    "Paan",
    "Pakistani",
    "Pancake",
    "Panini",
    "Retail Products",
    "Parsi",
    "Pasta",
    "Pizza",
    "Rajasthani",
    "Roast Chicken",
    "Rolls",
    "Salad",
    "Sandwich",
    "Seafood",
    "Shake",
    "Shawarma",
    "Sichuan",
    "Singaporean",
    "South American",
    "South Indian",
    "Spanish",
    "Sri Lankan",
    "Steak",
    "Sushi",
    "Tamil",
    "Tea",
    "Tex-Mex",
    "Thai",
    "Tibetan",
    "Turkish",
    "Vietnamese",
    "Waffle",
    "Wraps"
];

export default Context