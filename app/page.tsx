import Navbar from "./components/layout/navbar";
import Image from "next/image";
import { Eye, CircleDollarSign, Recycle, Maximize2, Puzzle, Gift, Zap, WalletMinimal, FileText, CircleDollarSignIcon } from "lucide-react";

const items = [
  'bigcommerce',
  'blesta',
  'easydigitaldownloads',
  'ecwid',
  'magento',
  'opencart',
  'oscommerce',
  'prestashop',
  'telegram',
  'virtuemart',
  'whmcs',
  'woocommerce',
  'x-cart',
  'zencart'
]
const socials = [
  'email',
  'facebook',
  'instagram',
  'likee',
  'tiktok',
  'twitch',
  'twitter',
  'web',
  'youtube',
]
const codes = [
  '<?php',
  '// Get balance:',
  '$secretKey = "xxxxxxxxxxxxxxxxxxxxx";',
  '$plisio = new \Plisio\ClientAPI($secretKey);',
  '$currency = "DOGE";',
  '$balance = $plisio->getBalances($currency);',
  'if ($balance',
  '    && isset($balance["status"])',
  '    && $balance["status"] === "success"',
  ') {',
  '    echo $balance["data"]["balance"];',
  '} else {',
  '    print_r($balance);',
  '}',
  '?>',
]
export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen">
      <Navbar />
      <div className="t-0 py-60 w-full flex">
        <div className="w-full flex items-center justify-end max-w-[50vw] pl-20">
          <div className="flex flex-col gap-6 max-w-[70%]">
            <div className="uppercase text-2xl font-bold text-[#a9b0d1]">Fast. Convenient. Secure.</div>
            <div className="text-6xl font-bold text-[#2b2d31]">Accept Crypto on Your Website</div>
            <div className="text-2xl font-bold text-[#a9b0d1]">Grow your business with a gateway that will save you time and money</div>
            <div className="flex gap-2">
              <button className="text-white bg-blue-500 hover:bg-blue-600 duration-500 text-2xl p-2 px-4 rounded-md shadow-sm">Sign Up now</button>
              <button className="text-blue-500 bg-blue-100 hover:bg-blue-200 duration-500 text-2xl p-2 px-4 rounded-md shadow-sm">Talk to sales</button>

            </div>
            <div className="text-[#a9b0d1]">Sign up for free in 2 clicks • Easy setup in 2 minutes • Tech support 24/7</div>
          </div>

        </div>
        <div className="ml-20 flex items-center w-[50vw]">
          <div className="flex relative  items-center">
            <Image src={'/img/invoice.svg'} className="w-full h-auto" width={50} height={100} alt="" />
            <Image src={'/img/create-store.svg'} className="absolute top-40 left-40 w-full h-auto" width={50} height={100} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-[#f5f6fa] flex justify-center py-20 gap-20">
        <div className="flex flex-col gap-4 w-[250px]">
          <Eye className="w-[50px] h-[50px] text-blue-500" />
          <div className="text-2xl font-bold">
            Privacy
          </div>
          <div className="text-[#828cc0]">
            No proof of identity needed; we don’t keep transaction details
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[250px]">
          <CircleDollarSign className="w-[50px] h-[50px] text-blue-500" />
          <div className="text-2xl font-bold">
            Mass Payouts

          </div>
          <div className="text-[#828cc0]">
            Pool all your transactions together
            <p className="text-blue-500">saving 80% on fees</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[250px]">
          <Recycle className="w-[50px] h-[50px] text-blue-500" />
          <div className="text-2xl font-bold">
            0% chargeback
          </div>
          <div className="text-[#828cc0]">
            Transactions cannot be canceled or reversed on Blockchain
          </div>
        </div>
      </div>
      <div className="bg-white py-20">
        <div className="w-full flex justify-center">
          <div className="flex flex-col gap-4 text-center">
            <Maximize2 className="w-[70px] h-[70px] text-blue-500 mx-auto" />
            <div className="text-3xl font-bold">
              Crypto Payment Gateway for
              <div>
                All Kinds of Needs
              </div>
            </div>
            <div className="text-[#828cc0]">
              Customize Plisio API to meet your business demands and become
              <div>
                part of the market with $300 billion+ turnover.
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-[#f5f6fa] py-20">
        <div className="w-full flex justify-center">
          <div className="flex flex-col gap-4 text-center">
            <div className="text-3xl font-bold">
              Accept
              <span className="ml-2 text-blue-500">
                15+ Supported Coins
              </span>
              <div>
                on Your Website
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="w-full flex justify-center">
          <div className="flex flex-col gap-4 text-center">
            <Puzzle className="w-[70px] h-[70px] text-blue-500 mx-auto" />
            <div className="text-3xl font-bold">
              Fast and Seamless Integrations
            </div>
            <div className="text-[#828cc0]">
              Choose a plugin and follow the instruction to accept and
              <div>
                convert crypto into 160+ world currencies
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 mt-8 flex flex-wrap justify-center w-[60vw] gap-10 mx-auto">
          {items.map((a, idx) => (
            <Image key={idx} src={`/img/group/${a}.${(a === 'virtuemart' || a === 'zencart') ? 'png' : 'svg'}`} alt="" width={50} height={50} className="w-auto h-[40px]" />
          ))}
        </div>
        <div className="mt-20 w-full flex justify-center">
          <div className="flex flex-col gap-4 text-center">
            <Gift className="w-[70px] h-[70px] text-blue-500 mx-auto" />
            <div className="text-3xl font-bold">
              Donation Integrations
            </div>
            <div className="text-[#828cc0]">
              Accept crypto donations on any platform in 18+ cryptocurrencies.
            </div>
          </div>
        </div>
        <div className="mt-8 py-8 flex flex-wrap justify-center w-[50vw] gap-10 mx-auto">
          {socials.slice(0, 4).map((a, idx) => (
            <Image key={idx} src={`/img/social/${a}.svg`} alt="" width={50} height={50} className="w-auto h-[30px]" />
          ))}
        </div>
        <div className="py-8 flex flex-wrap justify-center w-[50vw] gap-10 mx-auto">
          {socials.slice(4, 8).map((a, idx) => (
            <Image key={idx} src={`/img/social/${a}.svg`} alt="" width={50} height={50} className="w-auto h-[30px]" />
          ))}
        </div>
      </div>

      <div className="bg-[#f5f6fa] py-20">
        <div className="mt-20 w-full flex justify-center">
          <div className="flex flex-col gap-4 text-center">
            <Zap className="w-[70px] h-[70px] text-blue-500 mx-auto" />
            <div className="text-3xl font-bold">
              Simple code. Easy setup.
            </div>
            <div className="text-[#828cc0]">
              Use our code to connect your business in a few clicks. Our API will
              <div>
                show you that managing your funds and invoices or calculating fees
              </div>
              has never been easier.
            </div>
          </div>
        </div>
        <div className="flex my-20 justify-center">
          <div className="shadow-lg w-[30vw] rounded-lg overflow-hidden flex">
            <div className="bg-blue-200 py-4 text-blue-700 flex flex-col gap-1">
              {
                new Array(15).fill(0).map((_, idx) => (
                  <span className="px-2 text-right" key={idx}>{idx + 1}</span>
                ))
              }
            </div>
            <div className="py-4 ml-10 flex flex-col gap-1">
              <div className="flex flex-col gap-1">
                {codes.map((a, idx) => (
                  <span key={idx}>{`${a}`}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="px-20 flex items-center">
            <div className="flex gap-4 flex-col justify-center">
              <div className="text-center font-bold text-blue-500 flex gap-2 justify-center">
                <WalletMinimal />
                Balance
              </div>
              <div className="text-center font-bold text-[#828cc0] flex gap-2 justify-center">
                <CircleDollarSignIcon />
                Payouts
              </div>
              <div className="text-center font-bold text-[#828cc0] flex gap-2 justify-center">
                <FileText />
                Invoice
              </div>
              <button className="text-white bg-blue-500 hover:bg-blue-600 duration-500  p-2 px-4 rounded-md shadow-sm">Documentation</button>
              <button className="text-blue-500 bg-blue-100 hover:bg-blue-200 duration-500  p-2 px-4 rounded-md shadow-sm">Get help</button>
            </div>
          </div>
        </div>
      </div>


      {/* <div className="w-full flex">
        <div className="w-[50%]">

        </div>
        <div className="w-[50%]">
          <Image src={'/img/mass-payouts.webp'} alt="" width={600} height={50} />
        </div>
      </div> */}
    </div>
  );
}
