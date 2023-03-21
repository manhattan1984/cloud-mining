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
window.smartsupp||(function(d) {
  var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
  s=d.getElementsByTagName('script')[0];c=d.createElement('script');
  c.type='text/javascript';c.charset='utf-8';c.async=true;
  c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);
`}
      </Script>
    </>
  );
}
