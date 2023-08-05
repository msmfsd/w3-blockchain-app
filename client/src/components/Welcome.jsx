import { AiFillPlayCircle } from "react-icons/ai"
import { SiEthereum } from "react-icons/si"
import { BsInfoCircle } from "react-icons/bs"
import { Loader } from "./index"

const Welcome = () => {
  const connectWallet = () => {}
  const commonStyles =
    "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white"

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white py-1">
            Send Crypto
            <br />
            Accross the world
          </h1>
          <p className="text-l mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            krypto
          </p>
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 bg-purple-600 p-3 rounded-full cursor-pointer hover:bg-purple-700"
          >
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button>
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Reliabilty</div>
            <div className={commonStyles}>Security</div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>Etherium</div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
            <div className={commonStyles}>Low fees</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
