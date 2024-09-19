import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import Image from "next/image";
import { Eye, CircleDollarSign, Recycle, Maximize2, Puzzle, Gift, Zap, WalletMinimal, FileText, CircleDollarSignIcon, Check, BriefcaseBusiness } from "lucide-react";
import { WithAnimation } from "./components/other/animated-element";

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
        <WithAnimation mode="up">
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
        </WithAnimation>
        <div className="ml-20 flex items-center w-[50vw]">
          <div className="flex relative  items-center">
            <WithAnimation mode="zoom">
              <Image src={'/img/invoice.svg'} className="w-full h-auto" width={50} height={100} alt="" />
              <Image src={'/img/create-store.svg'} className="absolute top-40 left-40 w-full h-auto" width={50} height={100} alt="" />
            </WithAnimation>
          </div>
        </div>
      </div>

      <div className="bg-[#f5f6fa] flex justify-center py-20 gap-20">
        <WithAnimation mode="zoom">
          <div className="flex flex-col gap-4 w-[250px]">
            <Eye className="w-[50px] h-[50px] text-blue-500" />
            <div className="text-2xl font-bold">
              Privacy
            </div>
            <div className="text-[#828cc0]">
              No proof of identity needed; we don’t keep transaction details
            </div>
          </div>
        </WithAnimation>

        <WithAnimation mode="zoom" delay={0.3}>
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
        </WithAnimation>

        <WithAnimation mode="zoom" delay={0.6}>

          <div className="flex flex-col gap-4 w-[250px]">
            <Recycle className="w-[50px] h-[50px] text-blue-500" />
            <div className="text-2xl font-bold">
              0% chargeback
            </div>
            <div className="text-[#828cc0]">
              Transactions cannot be canceled or reversed on Blockchain
            </div>
          </div>
        </WithAnimation>
      </div>

      <div className="bg-white py-20">
        <div className="w-full flex justify-center">
          <div className="flex flex-col gap-4 text-center">
            <WithAnimation mode="zoom">
              <Maximize2 className="w-[70px] h-[70px] text-blue-500 mx-auto" />
            </WithAnimation>
            <WithAnimation mode="zoom" delay={0.3}>
              <div className="text-3xl font-bold">
                Crypto Payment Gateway for
                <div>
                  All Kinds of Needs
                </div>
              </div>
            </WithAnimation>

            <WithAnimation mode="zoom" delay={0.6}>
              <div className="text-[#828cc0]">
                Customize Plisio API to meet your business demands and become
                <div>
                  part of the market with $300 billion+ turnover.
                </div>
              </div>
            </WithAnimation>
          </div>
        </div>
      </div>


      <div className="bg-[#f5f6fa] py-20">
        <div className="w-full flex justify-center">
          <WithAnimation mode="up" delay={0.3}>

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
          </WithAnimation>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="w-full flex justify-center">
          <div className="flex flex-col gap-4 text-center">
            <WithAnimation mode="zoom" delay={0.3}>

              <Puzzle className="w-[70px] h-[70px] text-blue-500 mx-auto" />
            </WithAnimation>

            <WithAnimation mode="zoom" delay={0.3}>

              <div className="text-3xl font-bold">
                Fast and Seamless Integrations
              </div>
            </WithAnimation>

            <WithAnimation mode="zoom" delay={0.6}>

              <div className="text-[#828cc0]">
                Choose a plugin and follow the instruction to accept and
                <div>
                  convert crypto into 160+ world currencies
                </div>
              </div>
            </WithAnimation>
          </div>
        </div>
        <div className="py-8 mt-8 flex flex-wrap justify-center w-[60vw] gap-10 mx-auto">
          {items.map((a, idx) => (
            <WithAnimation key={idx} mode="zoom" delay={0.2 * idx}>
              <Image src={`/img/group/${a}.${(a === 'virtuemart' || a === 'zencart') ? 'png' : 'svg'}`} alt="" width={50} height={50} className="w-auto h-[40px]" />
            </WithAnimation>
          ))}
        </div>
        <div className="mt-20 w-full flex justify-center">
          <div className="flex flex-col gap-4 text-center">
            <WithAnimation mode="zoom" >

              <Gift className="w-[70px] h-[70px] text-blue-500 mx-auto" />
            </WithAnimation>

            <WithAnimation mode="zoom" delay={0.3}>

              <div className="text-3xl font-bold">
                Donation Integrations
              </div>
            </WithAnimation>

            <WithAnimation mode="zoom" delay={0.6}>

              <div className="text-[#828cc0]">
                Accept crypto donations on any platform in 18+ cryptocurrencies.
              </div>
            </WithAnimation>
          </div>
        </div>
        <div className="mt-8 py-8 flex flex-wrap justify-center w-[50vw] gap-10 mx-auto">
          {socials.slice(0, 4).map((a, idx) => (
            <WithAnimation key={idx} mode="zoom" delay={0.2 * idx}>
              <Image key={idx} src={`/img/social/${a}.svg`} alt="" width={50} height={50} className="w-auto h-[30px]" />
            </WithAnimation>
          ))}
        </div>
        <div className="py-8 flex flex-wrap justify-center w-[50vw] gap-10 mx-auto">
          {socials.slice(4, 8).map((a, idx) => (
            <WithAnimation key={idx} mode="zoom" delay={0.8 + 0.2 * idx}>
              <Image key={idx} src={`/img/social/${a}.svg`} alt="" width={50} height={50} className="w-auto h-[30px]" />
            </WithAnimation>
          ))}
        </div>
      </div>

      <div className="bg-[#f5f6fa] py-20">
        <div className="mt-20 w-full flex justify-center">
          <div className="flex flex-col gap-4 text-center">
            <WithAnimation mode="zoom" >

              <Zap className="w-[70px] h-[70px] text-blue-500 mx-auto" />
            </WithAnimation>

            <WithAnimation mode="zoom" delay={0.3}>

              <div className="text-3xl font-bold">
                Simple code. Easy setup.
              </div>
            </WithAnimation>

            <WithAnimation mode="zoom" delay={0.6}>

              <div className="text-[#828cc0]">
                Use our code to connect your business in a few clicks. Our API will
                <div>
                  show you that managing your funds and invoices or calculating fees
                </div>
                has never been easier.
              </div>
            </WithAnimation>
          </div>
        </div>
        <WithAnimation mode="up" >

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
        </WithAnimation>
      </div>

      <WithAnimation mode="up" >

        <div className="w-full flex py-20 items-center">
          <div className="w-[50%] flex justify-end">
            <div className="w-[50%] flex flex-col gap-4">
              <div className="text-3xl font-bold">
                Boost your Business
              </div>
              <div className="text-[#828cc0]">
                Save time and money with Mass Payouts.
                <div>
                  No Limits. No Boundaries
                </div>

              </div>
              <div className="flex gap-2">
                <Check className="text-blue-500 w-5 h-5" />
                Easily enter an international market
              </div>
              <div className="flex gap-2">
                <Check className="text-blue-500 w-5 h-5" />
                Pool together up to 1000 transactions
              </div>
              <div className="flex gap-2">
                <Check className="text-blue-500 w-5 h-5" />
                Import your data from file (.xls)
              </div>
              <div className="flex gap-2">
                <Check className="text-blue-500 w-5 h-5" />
                No limits for payout amount
              </div>
              <div>
                <button className="text-white bg-blue-500 hover:bg-blue-600 duration-500  p-2 px-4 rounded-md shadow-sm">Boost My business</button>
              </div>
            </div>
          </div>
          <div className="w-[50%] flex items-center">
            <Image src={'/img/mass-payouts.webp'} alt="" width={400} height={50} />
          </div>
        </div>
      </WithAnimation>

      <WithAnimation mode="up" >
        <div className="w-full flex py-20 items-center">
          <div className="w-[50%] flex justify-end items-center">
            <div className="w-[50%]">
              <Image src={'/img/pricing.webp'} alt="" width={400} height={50} />
            </div>
          </div>
          <div className="w-[50%] flex">
            <div className="w-[50%] flex flex-col gap-4">
              <div className="text-3xl font-bold">
                Fair Pricing
              </div>
              <div className="text-[#828cc0]">
                No monthly, setup or hidden fees. We charge only one

                <div>
                  fee of 0.5%. Personal plans for businesses with a higher
                </div>
                turnover rate.
              </div>
              <div className="flex gap-2">
                <Check className="text-blue-500 w-5 h-5" />
                Learn more
              </div>


            </div>
          </div>

        </div>
      </WithAnimation>

      <WithAnimation mode="up" >

        <div className="w-full flex py-20 items-center">
          <div className="w-[50%] flex justify-end">
            <div className="w-[50%] flex flex-col gap-4">
              <div className="text-3xl font-bold">
                Enhanced Privacy
              </div>
              <div className="text-[#828cc0]">
                We do not collect our clients’ data. Your funds are

                <div>
                  protected with 2FA, SSL Technology and Trusted IPs.
                </div>

              </div>
              <div className="flex gap-2">
                <Check className="text-blue-500 w-5 h-5" />
                Learn more
              </div>
            </div>
          </div>
          <div className="w-[50%] flex items-center">
            <Image src={'/img/shield.webp'} alt="" width={300} height={50} />
          </div>
        </div>
      </WithAnimation>

      <WithAnimation mode="up" delay={0.6}>

        <div className="w-full bg-[#f5f6fa] py-20 flex justify-center">
          <div className="flex flex-col gap-4 text-center">

            <BriefcaseBusiness className="w-[70px] h-[70px] text-blue-500 mx-auto" />


            <div className="text-3xl font-bold">
              Let Your Business Develop with Us
            </div>

            <div className="text-[#828cc0]">
              We launch new features and tools every month
            </div>
          </div>
        </div>
      </WithAnimation>
      <WithAnimation mode="up" delay={0.6}>

        <div className="bg-[#f5f6fa] flex justify-center pb-20 gap-20">

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
      </WithAnimation>

      <div className="w-full flex py-20 items-center">
        <div className="w-[50%] flex justify-end">
          <div className="w-[50%] flex flex-col gap-4">
            <div className="text-3xl font-bold">
              Register on
              <div>
                Plisio Today
              </div>

            </div>
            <div className="text-[#828cc0]">
              Grow Your Business while Saving Time

              <div>
                and Money
              </div>

            </div>
            <div className="flex gap-2">
              <button className="text-white bg-blue-500 hover:bg-blue-600 duration-500  p-2 px-4 rounded-md shadow-sm">Sign Up now</button>
              <button className="text-blue-500 bg-blue-100 hover:bg-blue-200 duration-500  p-2 px-4 rounded-md shadow-sm">Talk to sales</button>
            </div>
            <div className="text-[#a9b0d1]">Sign up for free in 2 clicks • Easy setup in 2 minutes • Tech support 24/7</div>

          </div>
        </div>
        <div className="w-[50%] pl-20 flex flex-col gap-2">
          <div className="flex gap-2">
            <Check className="text-blue-500 w-5 h-5" />
            Free-of-charge registration and setup
          </div>
          <div className="flex gap-2">
            <Check className="text-blue-500 w-5 h-5" />
            24/7 Live Chat Support
          </div>
          <div className="flex gap-2">
            <Check className="text-blue-500 w-5 h-5" />
            Automated mass payouts
          </div>
          <div className="flex gap-2">
            <Check className="text-blue-500 w-5 h-5" />
            Enhanced privacy and security
          </div>
          <div className="flex gap-2">
            <Check className="text-blue-500 w-5 h-5" />
            Multi-currency account
          </div>
          <div className="flex gap-2">
            <Check className="text-blue-500 w-5 h-5" />
            Trending integrations
          </div>
        </div>
      </div>
      <Footer />
    </div >
  );
}
