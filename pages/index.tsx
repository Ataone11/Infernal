import axios from 'axios'
import Banner from '../components/home/Banner'
import { API_URL, QUERY_IMAGE } from '../utils/constants'
import Image from 'next/image'
import flayer from '../assets/images/gato.png'
import proximo from '../assets/images/home/proximo.png'
import CountdownTimer from '../components/home/timer'
import fantasma from '../assets/images/fantama.png'
import { Fade, Slide } from 'react-awesome-reveal'
const Home = ({ banners }: { banners: any[] }) => {
  return (
    <div className="bg-black w-full lg:min-h-[120vh] h-screen">
      <div className=" w-11/12 m-auto container ">
        <Banner banner={banners} />
      </div>
      <link rel="icon" href="../assets/images/icono.png" />
      <div className="bg-black h-full">
        <Slide direction="left" duration={1000} className="pl-[5vw] pt-[10vw]">
          <div className="pl-[22vw] pt-[30vw] relative flex h-[5%] w-[2%]">
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
        <Slide
          direction="up"
          className="absolute lg:-bottom-[12vw] lg:pt-0 pt-[15vh]  flex w-full justify-center"
        >
          <div className="relative h-full flex align-bottom items-end mx-auto z-20">
            <CountdownTimer />
          </div>
        </Slide>

        <div className="lg:static absolute lg:w-auto w-screen lg:h-auto h-[60vw] top-14">
          <Image src={proximo} layout="fill" className="pt-10" />
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
