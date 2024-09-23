import Banner from '../components/home/Banner'
import Image from 'next/image'
import flayer from '../assets/images/gato.png'
import proximo from '../assets/images/home/proximo.png'
import CountdownTimer from '../components/home/timer'
import fantasma from '../assets/images/fantama.png'
import Link from 'next/link'

const Home = ({ banners }: { banners: any[] }) => {
  return (
    <div className="bg-black w-full  min-h-[1000px] sm:min-h-screen lg:min-h-[180vh]">
      <div className=" w-11/12 m-auto container ">
        <Banner banner={banners} />
      </div>
      <link rel="icon" href="../assets/images/icono.png" />
      <div className="bg-black h-full">
        <div className="mx-auto hidden  relative w-[300px] h-[750px] ">
          <Image alt="" src={fantasma} layout="fill" objectFit="cover" />
        </div>

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

          <div className="flex md:my-12"></div>
          <div className="absolute lg:-bottom-[30vw] xl:-bottom-[30vw] pt-10 flex w-full justify-center">
            <div className="relative h-full  align-bottom items-end mx-auto z-20 flex-col  pt-10 lg:pt-0">
              <Link href="/contacto">
                <div className=" text-redOmega2 text-base md:text-xl lg:text-3xl flex justify-center font-extrabold underline mx-auto">
                  CONVOCATORIA ABIERTA {'➤'}
                </div>
              </Link>
              <CountdownTimer />
              <label className=" text-redOmega2 text-3xl flex justify-center font-mono">
                Requisitos
              </label>
              <div className="flex  flex-col  w-[360px] md:w-[600px]">
                <div className="flex  flex-col text-left pl-14 lg:pl-32 my-3">
                  <label className=" text-redOmega2 ">
                    ●La agrupacion debe estar compuesta por almenos dos o mas
                    miembros.
                  </label>
                  <label className=" text-redOmega2 ">
                    ●Es necesario contar con al menos una red social donde se
                    pueda visualizar la trayectoria de la banda
                  </label>
                  <label className=" text-redOmega2 ">
                    ●Se requiere tener al menos 1 o 2 canciones grabadas, no
                    importa sin son grabaciones de garaje.
                  </label>
                  <label className=" text-redOmega2 flex">
                    ●Seguir nuestra pagina de{' '}
                    <a href="https://www.instagram.com/zisifopunk/">
                      instagram
                    </a>{' '}
                    y{' '}
                    <a href="https://www.facebook.com/profile.php?id=100064306854720">
                      facebook
                    </a>
                  </label>
                  <label className=" text-redOmega2 ">
                    ●Enviar 2 fotos grupales de los artistas.
                  </label>
                </div>
                <label className=" text-redOmega2 flex justify-center text-center w-full my-5 lg:pl-10">
                  Las bandas seleccionadas tendrán su espacio en el flyer del
                  festival y aparecerán en el apartado de Artistas con su foto
                  grupal y una breve reseña. Algunos de los requisitos se
                  solicitarán a través de contacto por WhatsApp. El flyer será
                  publicado cuando el contador llegue a cero.
                </label>
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
