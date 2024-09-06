import axios from 'axios'
import Banner from '../components/home/Banner'
import { API_URL, QUERY_IMAGE } from '../utils/constants'
import Image from 'next/image'
import flayer from '../assets/images/infernalgato.jpg'
import proximo from '../assets/images/home/proximo.png'
import CountdownTimer from '../components/home/timer'
import fantasma from '../assets/images/fantama.png'
import { Fade, Slide } from 'react-awesome-reveal'
const Home = ({ banners }: { banners: any[] }) => {
  return (
    <div className="bg-black w-full h-full min-h-[1100px]">
      <div className=" w-11/12 m-auto container ">
        <Banner banner={banners} />
      </div>

      <div className="bg-black h-full">
        <div className=" flex  py-10">
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
        <Slide direction="left" duration={1000}>
          <div className="mx-auto  relative flex w-[450px] h-[750px] ">
            <Image
              src={flayer}
              layout="fill"
              width={200}
              height={100}
              objectFit="cover"
            />
          </div>
        </Slide>
        <div className="mx-auto hidden  relative w-[300px] h-[750px] ">
          <Image
            src={fantasma}
            layout="fill"
            width={200}
            height={100}
            objectFit="cover"
          />
        </div>

        <div className="flex md:my-12"></div>
        <Slide direction="up">
          <div className="relative mx-auto z-20">
            <CountdownTimer />
          </div>
        </Slide>
        <div className=" ">
          <Image
            src={proximo}
            layout="fill"
            width={200}
            height={100}
            objectFit="cover"
            className="pt-10"
          />
        </div>
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
