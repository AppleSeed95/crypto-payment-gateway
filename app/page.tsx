'use client'
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import Image from "next/image";
import { Eye, CircleDollarSign, Recycle, Maximize2, Puzzle, Gift, Zap, WalletMinimal, FileText, CircleDollarSignIcon, Check, BriefcaseBusiness } from "lucide-react";
import { WithAnimation } from "./components/other/animated-element";
import MarQuee from "./components/lp/marquee";

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
      <Navbar welcomeMode />
      <div className="t-0 py-20 md:py-60 w-full flex flex-col md:flex-row px-4 md:px-0">
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end">
          <div className="flex flex-col gap-6 max-w-[600px]">
            <div className="uppercase text-xl md:text-2xl font-bold text-[#a9b0d1]">Fast. Convenient. Secure.</div>
            <div className="text-4xl md:text-6xl font-bold text-[#2b2d31]">Accept Crypto on Your Website</div>
            <div className="text-xl md:text-2xl font-bold text-[#a9b0d1]">Grow your business with a gateway that will save you time and money</div>
            <div className="flex flex-col sm:flex-row gap-2">
              <button className="text-white bg-blue-500 hover:bg-blue-600 duration-500 text-lg md:text-2xl p-2 px-4 rounded-md shadow-sm w-full sm:w-auto">Sign Up now</button>
              <button className="text-blue-500 bg-blue-100 hover:bg-blue-200 duration-500 text-lg md:text-2xl p-2 px-4 rounded-md shadow-sm w-full sm:w-auto">Talk to sales</button>
            </div>
            <div className="text-sm md:text-base text-[#a9b0d1]">Sign up for free in 2 clicks • Easy setup in 2 minutes • Tech support 24/7</div>
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:ml-20 flex items-center justify-center md:justify-start hidden md:block w-full md:w-1/2">
          <div className="flex relative items-center">
            <Image src={'/img/invoice.svg'} className="w-full h-auto max-w-[300px]" width={500} height={500} alt="Invoice illustration" />
            <Image
              src="/img/create-store.svg"
              className="absolute top-1/4 h-auto w-[300px] left-[100px]  animate-float"
              width={250}
              height={250}
              alt="Create store illustration"
            />
            <style jsx global>{`
              @keyframes float {
                0%, 100% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-20px);
                }
              }
              .animate-float {
                animation: float 3s ease-in-out infinite;
              }
            `}</style>
          </div>
        </div>
      </div>

      <div className="bg-[#f5f6fa] flex flex-col md:flex-row justify-center py-20 gap-10 md:gap-20 px-4 md:px-0">
        <WithAnimation mode="zoom">
          <div className="text-center md:text-left flex flex-col gap-4 w-full md:w-[250px]">
            <div className="flex justify-center md:justify-start">
              <Eye className="w-[50px] h-[50px] text-blue-500" />
            </div>
            <div className="text-2xl font-bold">
              Privacy
            </div>
            <div className="text-[#828cc0]">
              No proof of identity needed; we don`t keep transaction details
            </div>
          </div>
        </WithAnimation>

        <WithAnimation mode="zoom" delay={0.3}>
          <div className="text-center md:text-left flex flex-col gap-4 w-full md:w-[250px]">
            <div className="flex justify-center md:justify-start">
              <CircleDollarSign className="w-[50px] h-[50px] text-blue-500" />
            </div>
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
          <div className="text-center md:text-left flex flex-col gap-4 w-full md:w-[250px]">
            <div className="flex justify-center md:justify-start">
              <Recycle className="w-[50px] h-[50px] text-blue-500" />
            </div>
            <div className="text-2xl font-bold">
              0% chargeback
            </div>
            <div className="text-[#828cc0]">
              Transactions cannot be canceled or reversed on Blockchain
            </div>
          </div>
        </WithAnimation>
      </div>

      <div className="bg-white py-20 px-4 md:px-0">
        <div className="w-full flex justify-center">
          <div className="flex flex-col gap-4 text-center">
            <WithAnimation mode="zoom">
              <Maximize2 className="w-[70px] h-[70px] text-blue-500 mx-auto" />
            </WithAnimation>
            <WithAnimation mode="zoom" delay={0.3}>
              <div className="text-2xl md:text-3xl font-bold">
                Crypto Payment Gateway for
                <div>
                  All Kinds of Needs
                </div>
              </div>
            </WithAnimation>

            <WithAnimation mode="zoom" delay={0.6}>
              <div className="text-sm md:text-base text-[#828cc0]">
                Customize Plisio API to meet your business demands and become
                <div>
                  part of the market with $300 billion+ turnover.
                </div>
              </div>
            </WithAnimation>
          </div>
        </div>
        <MarQuee />
      </div>

      <div className="bg-[#f5f6fa] py-20 px-4 md:px-0">
        <div className="w-full flex justify-center">
          <WithAnimation mode="up" delay={0.3}>
            <div className="flex flex-col gap-4 text-center">
              <div className="text-2xl md:text-3xl font-bold">
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

      <div className="bg-white py-20 px-4 md:px-0">
        <div className="w-full flex justify-center">
          <div className="flex flex-col gap-4 text-center">
            <WithAnimation mode="zoom" delay={0.3}>
              <Puzzle className="w-[70px] h-[70px] text-blue-500 mx-auto" />
            </WithAnimation>

            <WithAnimation mode="zoom" delay={0.3}>
              <div className="text-2xl md:text-3xl font-bold">
                Fast and Seamless Integrations
              </div>
            </WithAnimation>

            <WithAnimation mode="zoom" delay={0.6}>
              <div className="text-sm md:text-base text-[#828cc0]">
                Choose a plugin and follow the instruction to accept and
                <div>
                  convert crypto into 160+ world currencies
                </div>
              </div>
            </WithAnimation>
          </div>
        </div>
        <div className="py-8 mt-8 flex flex-wrap justify-center w-full md:w-[60vw] gap-6 md:gap-10 mx-auto">
          {items.map((a, idx) => (
            <WithAnimation key={idx} mode="zoom" delay={0.2 * idx}>
              <Image src={`/img/group/${a}.${(a === 'virtuemart' || a === 'zencart') ? 'png' : 'svg'}`} alt="" width={50} height={50} className="w-auto h-[30px] md:h-[40px]" />
            </WithAnimation>
          ))}
        </div>
        <div className="mt-20 w-full flex justify-center">
          <div className="flex flex-col gap-4 text-center">
            <WithAnimation mode="zoom" >
              <Gift className="w-[70px] h-[70px] text-blue-500 mx-auto" />
            </WithAnimation>

            <WithAnimation mode="zoom" delay={0.3}>
              <div className="text-2xl md:text-3xl font-bold">
                Donation Integrations
              </div>
            </WithAnimation>

            <WithAnimation mode="zoom" delay={0.6}>
              <div className="text-sm md:text-base text-[#828cc0]">
                Accept crypto donations on any platform in 18+ cryptocurrencies.
              </div>
            </WithAnimation>
          </div>
        </div>
        <div className="mt-8 py-8 flex flex-wrap justify-center w-full md:w-[50vw] gap-6 md:gap-10 mx-auto">
          {socials.slice(0, 4).map((a, idx) => (
            <WithAnimation key={idx} mode="zoom" delay={0.2 * idx}>
              <Image key={idx} src={`/img/social/${a}.svg`} alt="" width={50} height={50} className="w-auto h-[25px] md:h-[30px]" />
            </WithAnimation>
          ))}
        </div>
        <div className="py-8 flex flex-wrap justify-center w-full md:w-[50vw] gap-6 md:gap-10 mx-auto">
          {socials.slice(4, 8).map((a, idx) => (
            <WithAnimation key={idx} mode="zoom" delay={0.8 + 0.2 * idx}>
              <Image key={idx} src={`/img/social/${a}.svg`} alt="" width={50} height={50} className="w-auto h-[25px] md:h-[30px]" />
            </WithAnimation>
          ))}
        </div>
      </div>

      <div className="bg-[#f5f6fa] py-20 px-4 md:px-0">
        <div className="mt-20 w-full flex justify-center">
          <div className="flex flex-col gap-4 text-center">
            <WithAnimation mode="zoom" >
              <Zap className="w-[70px] h-[70px] text-blue-500 mx-auto" />
            </WithAnimation>

            <WithAnimation mode="zoom" delay={0.3}>
              <div className="text-2xl md:text-3xl font-bold">
                Simple code. Easy setup.
              </div>
            </WithAnimation>

            <WithAnimation mode="zoom" delay={0.6}>
              <div className="text-sm md:text-base text-[#828cc0]">
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
          <div className="flex flex-col md:flex-row my-20 justify-center">
            <div className="shadow-lg w-full md:w-[30vw] rounded-lg overflow-hidden flex">
              <div className="bg-blue-200 py-4 text-blue-700 flex flex-col gap-1">
                {
                  new Array(15).fill(0).map((_, idx) => (
                    <span className="px-2 text-right" key={idx}>{idx + 1}</span>
                  ))
                }
              </div>
              <div className="py-4 ml-4 md:ml-10 flex flex-col gap-1 overflow-x-auto">
                <div className="flex flex-col gap-1">
                  {codes.map((a, idx) => (
                    <span key={idx} className="whitespace-nowrap">{`${a}`}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="px-4 md:px-20 flex items-center mt-10 md:mt-0 justify-center md:justify-start">
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
                <button className="text-white bg-blue-500 hover:bg-blue-600 duration-500 p-2 px-4 rounded-md shadow-sm">Documentation</button>
                <button className="text-blue-500 bg-blue-100 hover:bg-blue-200 duration-500 p-2 px-4 rounded-md shadow-sm">Get help</button>
              </div>
            </div>
          </div>
        </WithAnimation>
      </div>

      <WithAnimation mode="up" >
        <div className="w-full flex flex-col md:flex-row py-20 items-center px-4 md:px-0">
          <div className="w-full md:w-[50%] flex justify-center md:justify-end">
            <div className="w-full md:w-[50%] flex flex-col gap-4">
              <div className="text-2xl md:text-3xl font-bold">
                Boost your Business
              </div>
              <div className="text-sm md:text-base text-[#828cc0]">
                Save time and money with Mass Payouts.
                <div>
                  No Limits. No Boundaries
                </div>
              </div>
              <div className="flex gap-2">
                <Check className="text-blue-500 w-5 h-5 flex-shrink-0" />
                <span>Easily enter an international market</span>
              </div>
              <div className="flex gap-2">
                <Check className="text-blue-500 w-5 h-5 flex-shrink-0" />
                <span>Pool together up to 1000 transactions</span>
              </div>
              <div className="flex gap-2">
                <Check className="text-blue-500 w-5 h-5 flex-shrink-0" />
                <span>Import your data from file (.xls)</span>
              </div>
              <div className="flex gap-2">
                <Check className="text-blue-500 w-5 h-5 flex-shrink-0" />
                <span>No limits for payout amount</span>
              </div>
              <div>
                <button className="text-white bg-blue-500 hover:bg-blue-600 duration-500 p-2 px-4 rounded-md shadow-sm">Boost My business</button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%] flex items-center justify-center md:justify-start mt-10 md:mt-0">
            <Image src={'/img/mass-payouts.webp'} alt="Mass payouts illustration" width={400} height={400} className="w-full max-w-[300px] md:max-w-[400px] h-auto" />
          </div>
        </div>
      </WithAnimation>

      <WithAnimation mode="up" >
        <div className="w-full flex flex-col-reverse md:flex-row py-20 items-center gap-4 px-4 md:px-0">
          <div className="w-full md:w-[50%] flex justify-center md:justify-end items-center mt-10 md:mt-0">
            <div className="w-full justify-center flex md:justify-start md:w-[50%]">
              <Image src={'/img/pricing.webp'} alt="Pricing illustration" width={400} height={400} className="w-full max-w-[300px] md:max-w-[400px] h-auto" />
            </div>
          </div>
          <div className="w-full md:w-[50%] flex justify-center md:justify-start">
            <div className="w-full md:w-[50%] flex flex-col gap-4">
              <div className="text-2xl md:text-3xl font-bold">
                Fair Pricing
              </div>
              <div className="text-sm md:text-base text-[#828cc0]">
                No monthly, setup or hidden fees. We charge only one
                <div>
                  fee of 0.5%. Personal plans for businesses with a higher
                </div>
                turnover rate.
              </div>
              <div className="flex gap-2">
                <Check className="text-blue-500 w-5 h-5 flex-shrink-0" />
                <span>Learn more</span>
              </div>
            </div>
          </div>
        </div>
      </WithAnimation>

      <WithAnimation mode="up" >
        <div className="w-full flex flex-col md:flex-row py-20 items-center px-4 md:px-0">
          <div className="w-full md:w-[50%] flex justify-center md:justify-end">
            <div className="w-full md:w-[50%] flex flex-col gap-4">
              <div className="text-2xl md:text-3xl font-bold">
                Enhanced Privacy
              </div>
              <div className="text-sm md:text-base text-[#828cc0]">
                We do not collect our clients` data. Your funds are
                <div>
                  protected with 2FA, SSL Technology and Trusted IPs.
                </div>
              </div>
              <div className="flex gap-2">
                <Check className="text-blue-500 w-5 h-5 flex-shrink-0" />
                <span>Learn more</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%] flex items-center justify-center md:justify-start mt-10 md:mt-0">
            <Image src={'/img/shield.webp'} alt="Privacy shield illustration" width={300} height={300} className="w-full max-w-[250px] md:max-w-[300px] h-auto" />
          </div>
        </div>
      </WithAnimation>

      <WithAnimation mode="up" delay={0.6}>
        <div className="w-full bg-[#f5f6fa] py-20 flex justify-center px-4 md:px-0">
          <div className="flex flex-col gap-4 text-center">
            <BriefcaseBusiness className="w-[70px] h-[70px] text-blue-500 mx-auto" />
            <div className="text-2xl md:text-3xl font-bold">
              Let Your Business Develop with Us
            </div>
            <div className="text-sm md:text-base text-[#828cc0]">
              We launch new features and tools every month
            </div>
          </div>
        </div>
      </WithAnimation>

      <WithAnimation mode="up" delay={0.6}>
        <div className="bg-[#f5f6fa] flex flex-col md:flex-row justify-center pb-20 gap-10 md:gap-20 px-4 md:px-0">
          <div className="text-center md:text-left flex flex-col gap-4 w-full md:w-[250px]">
            <div className="flex justify-center md:justify-start">
              <Eye className="w-[50px] h-[50px] text-blue-500" />
            </div>
            <div className="text-xl md:text-2xl font-bold">
              Privacy
            </div>
            <div className="text-sm md:text-base text-[#828cc0]">
              No proof of identity needed; we don`t keep transaction details
            </div>
          </div>

          <div className="text-center md:text-left flex flex-col gap-4 w-full md:w-[250px]">
            <div className="flex justify-center md:justify-start">
              <CircleDollarSign className="w-[50px] h-[50px] text-blue-500" />
            </div>
            <div className="text-xl md:text-2xl font-bold">
              Mass Payouts
            </div>
            <div className="text-sm md:text-base text-[#828cc0]">
              Pool all your transactions together
              <p className="text-blue-500">saving 80% on fees</p>
            </div>
          </div>

          <div className=" text-center md:text-leftflex flex-col gap-4 w-full md:w-[250px]">
            <div className="flex justify-center md:justify-start">
              <Recycle className="w-[50px] h-[50px] text-blue-500" />
            </div>
            <div className="text-xl md:text-2xl font-bold">
              0% chargeback
            </div>
            <div className="text-sm md:text-base text-[#828cc0]">
              Transactions cannot be canceled or reversed on Blockchain
            </div>
          </div>
        </div>
      </WithAnimation>

      <div className="w-full flex flex-col md:flex-row py-20 items-center px-4 md:px-0">
        <div className="w-full md:w-[50%] flex justify-center md:justify-end">
          <div className="w-full md:w-[50%] flex flex-col gap-4">
            <div className="text-2xl md:text-3xl font-bold">
              Register on
              <div>
                Plisio Today
              </div>
            </div>
            <div className="text-sm md:text-base text-[#828cc0]">
              Grow Your Business while Saving Time
              <div>
                and Money
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <button className="text-white bg-blue-500 hover:bg-blue-600 duration-500 p-2 px-4 rounded-md shadow-sm w-full sm:w-auto">Sign Up now</button>
              <button className="text-blue-500 bg-blue-100 hover:bg-blue-200 duration-500 p-2 px-4 rounded-md shadow-sm w-full sm:w-auto">Talk to sales</button>
            </div>
            <div className="text-xs md:text-sm text-[#a9b0d1]">Sign up for free in 2 clicks • Easy setup in 2 minutes • Tech support 24/7</div>
          </div>
        </div>
        <div className="w-full md:w-[50%] md:pl-20 flex flex-col gap-2 mt-10 md:mt-0">
          <div className="flex gap-2">
            <Check className="text-blue-500 w-5 h-5 flex-shrink-0" />
            <span>Free-of-charge registration and setup</span>
          </div>
          <div className="flex gap-2">
            <Check className="text-blue-500 w-5 h-5 flex-shrink-0" />
            <span>24/7 Live Chat Support</span>
          </div>
          <div className="flex gap-2">
            <Check className="text-blue-500 w-5 h-5 flex-shrink-0" />
            <span>Automated mass payouts</span>
          </div>
          <div className="flex gap-2">
            <Check className="text-blue-500 w-5 h-5 flex-shrink-0" />
            <span>Enhanced privacy and security</span>
          </div>
          <div className="flex gap-2">
            <Check className="text-blue-500 w-5 h-5 flex-shrink-0" />
            <span>Multi-currency account</span>
          </div>
          <div className="flex gap-2">
            <Check className="text-blue-500 w-5 h-5 flex-shrink-0" />
            <span>Trending integrations</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}