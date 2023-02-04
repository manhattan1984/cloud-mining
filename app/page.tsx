import Calculator from "@/components/Calculator";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="bg-neutral-900 text-white flex flex-col gap-2 py-8">
        <div className="flex justify-between">
          <p className="text-xl">Trusted Site</p>
        </div>
        <div className="">
          <p className="text-3xl">Earn your visitors' trust</p>
          <p className="text-gray-300">
            Address the security and trust concerns that cost you sales and
            convert more customers at every stage of the buyer's journey with
            TrustedSite's earned certification program.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <button className="p-2 w-full bg-green-600">Get Certified</button>
          <button className="p-2 w-full bg-neutral-700">watch the video</button>
        </div>
      </div>
      <div className="text-center my-4 flex flex-col gap-2">
        <p className="text-2xl">Download Our App</p>
        <div className=" text-white">
          <Link href="/comingsoon" className="flex gap-2 justify-center">
            <button className="border p-4 bg-orange-700">Google Play</button>
            <button className="border p-4 bg-blue-400">App Store</button>
          </Link>
        </div>
      </div>
      <Calculator />
      <div className="text-center w-full my-8 bg-neutral-800 text-white py-8">
        <p className="mb-8 text-xl">Why choose us?</p>
        <div className="flex gap-4 w-full justify-center">
          <div className="text-center p-4 bg-gradient-to-b rounded to-gray-700 from-neutral-900 border border-gray-400">
            <p className="text-4xl">X</p>
            <p>Service</p>
            <button className="text-xs w-full underline">Open Account</button>
          </div>

          <div className="text-center p-4 bg-gradient-to-b rounded to-gray-700 from-neutral-900 border border-gray-400">
            <p className="text-4xl">X</p>
            <p>Service</p>
            <button className="text-xs w-full underline">Open Account</button>
          </div>

          <div className="text-center p-4 bg-gradient-to-b rounded to-gray-700 from-neutral-900 border border-gray-400">
            <p className="text-4xl">X</p>
            <p>Service</p>
            <button className="text-xs w-full underline">Open Account</button>
          </div>

          <div className="text-center p-4 bg-gradient-to-b rounded to-gray-700 from-neutral-900 border border-gray-400">
            <p className="text-4xl">X</p>
            <p>Service</p>
            <button className="text-xs w-full underline">Open Account</button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="text-center">
          <p className="font-medium text-2xl my-2">choose mining plan</p>
          <p className="text-sm mb-4">
            your hardware is already running, find a plan that's right for you
            (Hashrate Converter)
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="border py-2 px-4 rounded shadow w-11/12 mx-auto">
            <p className="font-medium text-center">sha-256 cloud mining</p>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <p>Cryptocurrency</p>
                <p>Bitcoin</p>
              </div>
              <div className="flex justify-between">
                <p>Minimum Hashrate:</p>
                <p>10 GH/s</p>
              </div>
              <div className="flex justify-between">
                <p>Maintainance fee:</p>
                <p className="text-xs text-right">$0.0000009 / 10GH/s / day</p>
              </div>
              <div className="flex justify-between">
                <p>Hardware:</p>
                <p>Antminer Z11</p>
              </div>
              <div className="flex justify-between">
                <p>Payout In:</p>
                <p>BTC</p>
              </div>
              <div className="flex justify-between">
                <p>In Stock:</p>
                <p>Yes</p>
              </div>
              <div className="flex justify-between">
                <p>Term:</p>
                <p>2 years contract</p>
              </div>
              <div className="flex justify-between my-4">
                <div className="text-left">
                  <p className="text-lg font-medium">$0.50</p>
                  <p>per 10 GH/S</p>
                </div>
                <button className="text-green-700 uppercase">buy now</button>
              </div>
            </div>
          </div>
          <div className="border py-2 px-4 rounded shadow w-11/12 mx-auto">
            <p className="font-medium text-center">sha-256 cloud mining</p>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <p>Cryptocurrency</p>
                <p>Bitcoin</p>
              </div>
              <div className="flex justify-between">
                <p>Minimum Hashrate:</p>
                <p>10 GH/s</p>
              </div>
              <div className="flex justify-between">
                <p>Maintainance fee:</p>
                <p className="text-xs text-right">$0.0000009 / 10GH/s / day</p>
              </div>
              <div className="flex justify-between">
                <p>Hardware:</p>
                <p>Antminer Z11</p>
              </div>
              <div className="flex justify-between">
                <p>Payout In:</p>
                <p>BTC</p>
              </div>
              <div className="flex justify-between">
                <p>In Stock:</p>
                <p>Yes</p>
              </div>
              <div className="flex justify-between">
                <p>Term:</p>
                <p>2 years contract</p>
              </div>
              <div className="flex justify-between my-4">
                <div className="text-left">
                  <p className="text-lg font-medium">$0.50</p>
                  <p>per 10 GH/S</p>
                </div>
                <button className="text-green-700 uppercase">buy now</button>
              </div>
            </div>
          </div>
          <div className="border py-2 px-4 rounded shadow w-11/12 mx-auto">
            <p className="font-medium text-center">sha-256 cloud mining</p>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <p>Cryptocurrency</p>
                <p>Bitcoin</p>
              </div>
              <div className="flex justify-between">
                <p>Minimum Hashrate:</p>
                <p>10 GH/s</p>
              </div>
              <div className="flex justify-between">
                <p>Maintainance fee:</p>
                <p className="text-xs text-right">$0.0000009 / 10GH/s / day</p>
              </div>
              <div className="flex justify-between">
                <p>Hardware:</p>
                <p>Antminer Z11</p>
              </div>
              <div className="flex justify-between">
                <p>Payout In:</p>
                <p>BTC</p>
              </div>
              <div className="flex justify-between">
                <p>In Stock:</p>
                <p>Yes</p>
              </div>
              <div className="flex justify-between">
                <p>Term:</p>
                <p>2 years contract</p>
              </div>
              <div className="flex justify-between my-4">
                <div className="text-left">
                  <p className="text-lg font-medium">$0.50</p>
                  <p>per 10 GH/S</p>
                </div>
                <button className="text-green-700 uppercase">buy now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
