import Image from 'next/image'
import flayer from '../assets/images/gato.png'
import logo from '../assets/images/home/infernallogo.png'
import esteaño from '../assets/images/home/2024.png'
import fantasma from '../assets/images/fantama.png'
import Link from 'next/link'

const Home = () => {
  return (
    <div className=" w-full min-h-[900px] sm:min-h-screen  ">
      <div className=" bg-[#FE0E06]  h-full">
        <div className="mx-auto hidden  relative w-[300px] h-[750px] ">
          <Image alt="" src={fantasma} layout="fill" objectFit="cover" />
        </div>
        <div className="flex-col-reverse flex md:grid md:grid-cols-2 md:w-[800px] md:mx-auto  ">
          <div className="mx-auto pt-[80vw] lg:pl-[22vw] lg:pt-[30vw] relative flex flex-col h-[420px] w-[300px] sm:w-[400px] lg:h-[5%] lg:w-[2%] z-20">
            <Image alt="" src={flayer} layout="fill" objectFit="cover" />
          </div>

          <div className="flex flex-col justify-center mx-auto">
            <Image
              alt=""
              src={logo}
              layout="fixed"
              width={450}
              objectFit="cover"
            />
            <div className=" flex justify-center">
              <Image alt="" src={esteaño} layout="fixed" objectFit="cover" />
            </div>
            <Link
              className={`  text-[#FE0E06] pt-3 hover:pt:0 font-bold text  text-xl w-[150px] md:w-[100px]   h-[55px] hover:w-[150px] duration-300 hover:flex hover:justify-center  mx-auto  bg-black rounded-full flex-initial text-center my-8`}
              href="/home"
            >
              Coopeo!
            </Link>
          </div>
        </div>
        <div className="block md:hidden">
          <Link
            className={` hidden text-[#FE0E06] pt-3 hover:pt:0 font-bold text  text-xl w-[150px]   h-[55px] hover:w-[150px] duration-300 hover:flex hover:justify-center  mx-auto  bg-black rounded-full flex-initial text-center my-8`}
            href="/home"
          >
            Coopeo!
          </Link>
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
