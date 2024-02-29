
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { InitSpin } from "./initial-spin/initial-spin";
import { Solution } from "./solu";

export const SolutionTwo = ()=>{

    const [c, setC] = useState(false);

    useEffect(()=>{
        setC(true)
        setTimeout(() => {
            setC(false);
        }, 2000);
    }, []);

    const swap = createPortal(<> <Solution /> </>, document.querySelector('.loading'));

    return(<>
        <main>
            {
                c ?
                    <InitSpin />
                :
                    swap
            }
        </main>
    </>)
};