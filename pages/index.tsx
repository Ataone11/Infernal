import Banner from '../components/home/Banner'
import Image from 'next/image'
import flayer from '../assets/images/gato.png'
import proximo from '../assets/images/home/proximo.png'
import CountdownTimer from '../components/home/timer'
import fantasma from '../assets/images/fantama.png'
import { Slide } from 'react-awesome-reveal'
import Link from 'next/link'
const Home = ({ banners }: { banners: any[] }) => {
  return (
    <div className="bg-black w-full  min-h-screen lg:min-h-[120vh]">
      <div className=" w-11/12 m-auto container ">
        <Banner banner={banners} />
      </div>
      <link rel="icon" href="../assets/images/icono.png" />
      <div className="bg-black h-full">
        <div className="mx-auto hidden  relative w-[300px] h-[750px] ">
          <Image alt="" src={fantasma} layout="fill" objectFit="cover" />
        </div>

        <div className="lg:static absolute lg:w-auto w-screen lg:h-auto h-[60vw] top-14 z-10 ">
          <video
            autoPlay={true}
            loop
            src={'/videos/video.mp4'}
            className="lg:absolute lg:h-[90vh] lg:w-[100vw] top-[50px]"
          >
            <track kind="captions" />
          </video>
          <Image alt="" src={proximo} layout="fill" className="pt-10 z-30" />

          <div className="lg:pl-[22vw] lg:pt-[30vw] relative flex flex-col h-[5%] w-[2%] z-20">
            <Image alt="" src={flayer} layout="fill" objectFit="cover" />
          </div>

          <div className="flex md:my-12"></div>
          <Slide
            direction="up"
            className="absolute lg:-bottom-[12vw] pt-0 flex w-full justify-center"
          >
            <div className="relative h-full  j align-bottom items-end mx-auto z-20 flex-col pt-10 lg:pt-0">
              <Link href="/contacto">
                <div className=" text-redOmega2 text-base md:text-xl lg:text-3xl flex justify-center font-extrabold underline mx-auto">
                  CONVOCATORIA ABIERTA {'➤'}
                </div>
              </Link>
              <CountdownTimer />
            </div>
          </Slide>
        </div>
      </div>
    </div>
  )
}

export default Home

// export const getStaticProps = async () => {
//   let banners
//   try {
//     banners = await axios.get(`${API_URL}/api/banners${QUERY_IMAGE}`)
//   } catch (error) {
//     console.log(error)
//   }
//   return {
//     props: {
//       banners: banners ? banners.data.data : []
//     }
//   }
// }
