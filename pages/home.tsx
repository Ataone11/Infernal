import Banner from '../components/home/Banner'
import Image from 'next/image'
import flayer from '../assets/images/flayer.jpg'
import CountdownTimer from '../components/home/timer27'
import CountdownTimer31 from '../components/home/timer31'

const Home = ({ banners }: { banners: any[] }) => {
  return (
    <div className="bg-black w-full  min-h-[700px] sm:min-h-[1200px] lg:min-h-[140vh]">
      <div className=" w-11/12 m-auto container ">
        <Banner banner={banners} />
      </div>
      <link rel="icon" href="../assets/images/icono.png" />
      <div className="bg-black h-full">
        <div className="lg:static absolute lg:w-auto w-screen lg:h-auto h-[60vw]  top-14 z-10 ">
          <div className=" relative flex flex-col h-[460px] sm:h-[950px] w-[320px] sm:w-[660px]  mx-auto my-10">
            <Image alt="" src={flayer} layout="fill" objectFit="cover" />
          </div>

          <div className="absolute lg:-bottom-[30vw] xl:-bottom-[15vw]  flex w-full justify-center">
            <div className="relative h-full  align-bottom items-end mx-auto z-20 flex-col ">
              <div className="flex flex-col md:grid md:grid-cols-2 md: gap-x-32">
                <div className=" flex flex-col">
                  <div className=" text-redOmega2 text-base md:text-xl lg:text-3xl flex justify-center font-extrabold underline mx-auto">
                    27 Oct - Suba av Boyaca
                  </div>
                  <CountdownTimer />
                </div>
                <div className=" flex flex-col">
                  <div className=" text-redOmega2 text-base md:text-xl lg:text-3xl flex justify-center font-extrabold underline mx-auto">
                    2 Nov - Monumento del parkway
                  </div>
                  <CountdownTimer31 />
                </div>
              </div>
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
