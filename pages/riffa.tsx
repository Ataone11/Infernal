import Image from 'next/image'
import Carousel from '../components/nosotros/Carousel'
import fantasma from '../assets/images/fantama.png'
import tabla from '../assets/images/tabla.jpg'

const Riffa = ({ team }: any) => {
  return (
    <div className="bg-black min-h-screen">
      <div className="w-full container flex flex-col lg:flex-row flex-wrap lg:pt-14 md:flex-nowrap justify-center items-center xl:justify-between xl:gap-x-20 mx-auto pb-10 lg:px-10">
        <div className="max-w-full m-auto flex justify-center items-center xl:mx-0 my-10 xl:my-0 w-full">
          <div className="mx-2">
            <Image
              alt=""
              src={fantasma}
              layout="fixed"
              objectFit="cover"
              height={500}
              width={200}
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className="w-[80%] md:mt-0 xl:w-[100%] flex flex-col flex-end space-y-2">
          <h1 className="text-redOmega text-large xl:text-extraLarge tracking-[0.2em] text-center lg:text-left uppercase font-bold">
            Tatto Horror!!!!
          </h1>
          <p className="text-white text-small font-normal xl:text-[16px] text-justify leading-[22px]">
            Bueno esta rifa la hacemos con el motivo de recolectar algo de
            fondos para el evento por loque haremos el sorteo de 2 tatuajes
            estilo blackwork, el sorteo de estos se hara durante un envivo en el
            mismo evento, no es necesario estar presente en el evento para
            concurzar, lo unico es que tendra estar pendiente a nuestras redes
            para saber que es el ganador o estar presenta a la hora del sorteo.
            <br />
            <br />
            Seran 2 Tattoos uno de 45cm por un valor de 10k el numero y el otros
            de 25cm que tendra un valor de 25k recuerden que pueden tener mas de
            un numero por si se les antoja rayarse.
            <br />
            <br />
          </p>
        </div>
      </div>

      <div className="w-full md:w-full container mx-auto pt-8">
        <div className="w-11/12 mx-auto space-y-5">
          <div className="mx-auto flex w-full container">
            <Image
              alt=""
              src={tabla}
              layout="fixed"
              objectFit="cover"
              height={400}
              width={400}
              className="rounded-2xl"
            />
          </div>
          <h3 className="uppercase font-bold text-redOmega text-large lg:text-extraLarge tracking-[0.2em] text-center">
            Punk & Roll Bby
          </h3>
          <p className="text-center  text-white text-extraSmall sm:text-small md:text-[16px]">
            Nos apasiona apoyar y promover la escena punk local de Bogotá, y
            estamos comprometidos en proporcionar oportunidades a las bandas y
            artistas de la ciudad. Sin embargo, nuestro objetivo va más allá de
            las fronteras urbanas. Queremos extender nuestro apoyo a artistas
            que residen fuera de Bogotá, dándoles la oportunidad de mostrar su
            talento y participar en nuestro festival. Creemos que es fundamental
            ofrecer un espacio inclusivo donde no solo los talentos locales,
            sino también los de otras regiones, puedan recibir el reconocimiento
            que merecen. Al hacerlo, enriquecemos nuestra oferta cultural y
            fortalecemos el intercambio entre diferentes comunidades musicales,
            creando así un evento más diverso y vibrante.
          </p>
        </div>
        <div className="mt-10 flex flex-col xl:flex-row gap-y-8 justify-center xl:items-start items-center"></div>
      </div>
      {(team?.length ?? 0) > 0 && <Carousel team={team} />}
    </div>
  )
}

export default Riffa
