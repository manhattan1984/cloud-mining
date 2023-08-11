import Script from "next/script";

export default function Head() {
  return (
    <>
      <title>WealthAid Mining</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="WealthAid Mining" />
      <link rel="icon" href="/mining_white.ico" />
      {/* <Script
        strategy="afterInteractive"
        src="//code.jivosite.com/widget/63IJl5Ckr1"
        async
      /> */}
      <Script>
        {`
var _smartsupp = _smartsupp || {};
_smartsupp.key = 'b5501667bb9f2ade13c6bd7f1c094984c8345624';
  var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
  s=d.getElementsByTagName('script')[0];c=d.createElement('script');
  c.type='text/javascript';c.charset='utf-8';c.async=true;
  c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);
`}
      </Script>

      {/* <Script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async />
      <Script>
        {`window.OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      appId: "509d1867-15f5-4a4d-b4d5-eff768ffc3b1",
      safari_web_id: "web.onesignal.auto.2900aeea-27da-4bc5-9f95-2e3d9a76781c",
      notifyButton: {
        enable: true,
      },
      allowLocalhostAsSecureOrigin: true,
    });
  });`}
      </Script> */}

      {/* <Script></Script> */}
    </>
  );
}
