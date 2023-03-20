import Script from "next/script";

export default function Head() {
  return (
    <>
      <title>WealthAid Mining</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="WealthAid Mining" />
      <link rel="icon" href="/mining_white.ico" />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/6418bb1d4247f20fefe701fd/1gs09lrno';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
`,
        }}
        id="chat"
        strategy="afterInteractive"
      />
    </>
  );
}
