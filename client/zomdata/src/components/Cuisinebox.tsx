import React, { useContext, useEffect } from 'react'
import { Head } from '../Context';

interface filterobjtype {
    filterobj: filterobjtype2
    setfilterobj: (x: any) => any
}

interface filterobjtype2 {
    rateorder: string,
    ordersorder: string,
    ratebox: number,
    cuisine: any
}

const Cuisinebox = () => {



    // const [myarr, setmyarr] = useState<any>([])
    const { filterobj, setfilterobj } = useContext(Head) as filterobjtype;

    useEffect(() => {
        // console.log("check")
        // if (filterobj.cuisine.length === 0) {
        //     console.log("ok")
        //     for (let i = 0; i < cuisine.length; i++) {
        //         console.log("first")
        //         console.log(document.getElementById(`${cuisine[i]}`));
        //         document.getElementById(`${cuisine[i]}`)?.removeAttribute("checked");
        //         console.log(document.getElementById(`${cuisine[i]}`));
        //     }
        // }
        for (let i = 0; i < filterobj.cuisine.length; i++) {
            document.getElementById(`${filterobj.cuisine[i]}`)?.setAttribute("checked", "true");
        }
    }, [filterobj]);

    // useEffect(() => {
    //     console.log(filterobj);
    // }, [filterobj])



    // function check(e: React.ChangeEvent<HTMLInputElement>) {
    //     console.log(e.target.getAttribute('id'));
    //     // let filterobj:string[] = [""];
    //     console.log("checkkkk")
    //     if (e.target.checked && !filterobj.cuisine.includes(e.target.value)) {
    //         console.log("check")
    //         let myarr = [e.target.value]
    //         // filterobj.push(e.target.value);
    //         setfilterobj((prev: any) => ({
    //             ...prev,
    //             cuisine: [...filterobj.cuisine, ...myarr]
    //         }))
    //     }
    //     if (!e.target.checked) {
    //         console.log("not check")

    //         let newarr = filterobj.cuisine.filter((el: string) => el !== e.target.value);
    //         setfilterobj((prev: any) => ({
    //             ...prev,
    //             cuisine: newarr
    //         }));
    //     }
    // }

    function clik(e: React.MouseEvent<HTMLInputElement>) {
        // console.log((e.target as HTMLInputElement).checked);

        if ((e.target as HTMLInputElement).checked && !filterobj.cuisine.includes((e.target as HTMLInputElement).value)) {
            // console.log("check")
            let myarr = [(e.target as HTMLInputElement).value]
            // filterobj.push(e.target.value);
            setfilterobj((prev: any) => ({
                ...prev,
                cuisine: [...filterobj.cuisine, ...myarr]
            }))
        }
        if (!(e.target as HTMLInputElement).checked) {
            // console.log("not check")

            let newarr = filterobj.cuisine.filter((el: string) => el !== (e.target as HTMLInputElement).value);
            setfilterobj((prev: any) => ({
                ...prev,
                cuisine: newarr
            }));
        }

    }

    return (
        <div className=' p-4 h-full overflow-y-scroll'>

            {
                cuisine.map((el) => {
                    return (
                        <div className=' flex justify-start p-4 my-4' key={el}>
                            <input type="checkbox" onClick={(e) => clik(e)} className='multi' id={el} name={el} value={el} />
                            <label className=' ml-4' htmlFor={el}>{el}</label>
                        </div>
                    )
                })
            }
        </div>
    )
}

const cuisine = [
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

export default Cuisinebox