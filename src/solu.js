
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import App from "./App";
import { InitSpin } from "./initial-spin/initial-spin";

export const Solution = ()=>{

    const [d, setD] = useState(false);

    useEffect(()=>{
        setD(true)
        setTimeout(() => {
            setD(false);
        }, 4500);
    }, []);

    const swap = createPortal(<> <App /> </>, document.querySelector('._moz_webkitms_foxos_'));

    return(<>
        <main>
            {
                d ?
                    <InitSpin />
                :
                    swap
            }
        </main>
    </>)
};