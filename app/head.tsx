import Script from "next/script";

export default function Head() {
  return (
    <>
      <title>WealthAid Mining</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="WealthAid Mining" />
      <link rel="icon" href="/mining_white.ico" />
      <Script
        strategy="afterInteractive"
        src="//code.jivosite.com/widget/63IJl5Ckr1"
        async
      />
    </>
  );
}
