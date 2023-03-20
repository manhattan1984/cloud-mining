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
          __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="076a7f70-4c5f-45bb-be8f-76f45c1e9d7e";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`,
        }}
        id="chat"
        strategy="afterInteractive"
      />
    </>
  );
}
