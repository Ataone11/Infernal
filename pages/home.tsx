import Banner from '../components/home/Banner'
import Image from 'next/image'
import flayer from '../assets/images/gato.png'
import proximo from '../assets/images/home/proximo.png'
import CountdownTimer from '../components/home/timer'
import Link from 'next/link'

const Home = ({ banners }: { banners: any[] }) => {
  return (
    <div className="bg-black w-full  min-h-[1000px] sm:min-h-screen lg:min-h-[140vh]">
      <div className=" w-11/12 m-auto container ">
        <Banner banner={banners} />
      </div>
      <link rel="icon" href="../assets/images/icono.png" />
      <div className="bg-black h-full">
        <div className="lg:static absolute lg:w-auto w-screen lg:h-auto h-[60vw]  top-14 z-10 ">
          <video
            autoPlay={true}
            loop
            preload="auto"
            src={'/videos/video.mp4'}
            className="lg:absolute lg:h-[90vh] lg:w-[100vw] top-[50px]"
          >
            <track kind="captions" />
          </video>
          <Image alt="" src={proximo} layout="fill" className="pt-10 z-30" />

          <div className="lg:pl-[22vw] lg:pt-[30vw] relative flex flex-col h-[5%] w-[2%] z-20">
            <Image alt="" src={flayer} layout="fill" objectFit="cover" />
          </div>

          <div className="flex md:my-5"></div>
          <div className="absolute lg:-bottom-[30vw] xl:-bottom-[15vw] pt-10 flex w-full justify-center">
            <div className="relative h-full  align-bottom items-end mx-auto z-20 flex-col  pt-10 lg:pt-0">
              <Link href="/artistas">
                <div className=" text-redOmega2 text-base md:text-xl lg:text-3xl flex justify-center font-extrabold underline mx-auto">
                  ARTISTAS INFERNAL FEST 2024 {'➤'}
                </div>
              </Link>
              <CountdownTimer />
            </div>
          </div>
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
