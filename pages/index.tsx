import axios from 'axios'
import Banner from '../components/home/Banner'
import { API_URL, QUERY_IMAGE } from '../utils/constants'
import Image from 'next/image'
import flayer from '../assets/images/home/infernalweb.jpg'
import iv from '../assets/images/home/proximo.png'

import CountdownTimer from '../components/home/timer'

const Home = ({ banners }: { banners: any[] }) => {
  return (
    <div className="bg-black w-full h-full">
      <div className=" w-11/12 m-auto container ">
        <Banner banner={banners} />
      </div>

      <div className="bg-black h-full">
        <div className=" flex  py-10">
          <div className=" m-auto  relative hidden lg:flex md:w-[950px] xl:w-[1047px] h-[192px] xl:h-[564px]">
            <Image src={flayer} layout="fixed" objectFit="cover" />
          </div>
          <div className=" m-auto  relative flex w-[300px] h-[200px] sm:w-[600px]  sm:h-[302px] lg:  lg:hidden">
            <Image
              src={flayer}
              layout="fill"
              width={200}
              height={100}
              objectFit="cover"
            />
          </div>
        </div>

        <div className="flex "></div>
        <CountdownTimer />
        <div className="m-auto  relative flex w-[300px] h-[200px]">
          <Image
            src={iv}
            layout="fill"
            width={100}
            height={50}
            objectFit="cover"
          />
        </div>
        <br />
      </div>
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  let banners
  try {
    banners = await axios.get(`${API_URL}/api/banners${QUERY_IMAGE}`)
  } catch (error) {
    console.log(error)
  }
  return {
    props: {
      banners: banners ? banners.data.data : []
    }
  }
}
