import Image from 'next/image'
import Carousel from '../components/nosotros/Carousel'
import fantasma from '../assets/images/fantama.png'
import tabla from '../assets/images/tabla.jpg'

const Riffa = ({ team }: any) => {
  return (
    <div className="bg-black min-h-[2300px] lg:min-h-[1700px] xl:min-h-[1800px] ">
      <div className="w-full md:w-full container mx-auto pt-8">
        <div className="w-11/12 lg:w-6/12 mx-auto space-y-5">
          <h3 className="uppercase font-bold text-redOmega text-large lg:text-extraLarge tracking-[0.2em] text-center">
            Tatto Mania
          </h3>
          <h3 className="uppercase font-bold text-redOmega text-medium lg:text-large tracking-[0.2em] text-center">
            Sorteo Live
          </h3>
          <p className="  text-white text-extraSmall text-justify sm:text-small md:text-[16px]">
            Bueno esta dinamica la hacemos con el motivo de recolectar algo de
            fondos para el evento, por loque haremos el sorteo de 2 tatuajes
            estilo blackwork el dia 31 de octubre, el sorteo de estos se hara
            durante un envivo en el mismo evento, &nbsp;
            <a className=" font-bold underline text-redOmega  ">
              Para ganar
            </a>{' '}
            &nbsp; no es necesario estar presente en el evento, lo unico es que
            tendra estar pendiente al Live para saber sobre el ganador o estar
            presente a la hora del sorteo.
            <br />
            <br />
            Seran 2 Tattoos, uno de 10x6 cm y tendra un valor de 5k el numero y
            el otros de 14x8 cm que tendra un valor de 10k recuerden que pueden
            tener mas de un numero por si se les antoja rayarse.
            <br />
            <br />
          </p>
        </div>
      </div>
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
            ¡¡Tatto Horror!!
          </h1>
          <p className="text-white text-small font-normal xl:text-[16px] text-justify leading-[22px]">
            los tatuajes seran estilo horror hallowen en donde el ganado pordra
            escoger el diseño que mas le guste en el portafolio del tatuador que
            esta haciendo la rifa con nosotros. &nbsp;
            <a
              className=" font-bold underline "
              href="https://www.instagram.com/famtatto08?utm_source=qr&igsh=MWdra2RwZ3o0MDRzZA=="
              target="_blank"
              rel="noreferrer"
            >
              instagram
            </a>{' '}
            &nbsp; la compra de los numeros del sorteo sea hacen por medio de
            nequi y daviplata
            <br />
            <br />
            Bueno como nos gusta apoyar a los emprendimientos independientes,
            invitamos a los emprendimientos y malabaristas a que se rosen al
            evento y parchen al mero Halloween 💀👻
            <br />
            No olviden llevar golocinas!!🍬🍬🍭
            <br />
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-col lg:grid lg:grid-cols-2 xl:flex-row gap-y-8 justify-center xl:items-start items-center">
        <div className="mx-auto flex flex-col ">
          <p className=" text-center text-white text-large font-semibold italic ">
            5 K
          </p>
          <Image
            alt=""
            src={tabla}
            layout="fixed"
            objectFit="cover"
            height={400}
            width={400}
            className="rounded-2xl"
          />
          <div className="lg:justify-center flex my-3 lg:my-4 items-center justify-end">
            <button
              onClick={() =>
                window.open(
                  'https://api.whatsapp.com/send?phone=573505082555&text=Hola%2C%20quiero%20comprar%20un%20numero%20para%20el%20tattoo%20de%205%20Lukitas',
                  '_blank'
                )
              }
              className="btn-primary  lg:w-auto lg:h-auto align-middle text-center h-[60%] w-[20%]  md:w-[40%] min-w-[150px] ml-1"
            >
              Comprar numero
            </button>
          </div>
        </div>
        <div className="mx-auto flex flex-col ">
          <p className=" text-center text-white text-large font-semibold italic ">
            10 K
          </p>
          <Image
            alt=""
            src={tabla}
            layout="fixed"
            objectFit="cover"
            height={400}
            width={400}
            className="rounded-2xl"
          />
          <div className="lg:justify-center flex my-3 lg:my-4 items-center justify-end">
            <button
              onClick={() =>
                window.open(
                  'https://api.whatsapp.com/send?phone=573505082555&text=Hola%2C%20quiero%20comprar%20un%20numero%20para%20el%20tattoo%20de%10%20Lukitas',
                  '_blank'
                )
              }
              className="btn-primary  lg:w-auto lg:h-auto align-middle text-center h-[60%] w-[20%]  md:w-[40%] min-w-[150px] ml-1"
            >
              Comprar numero
            </button>
          </div>
        </div>
      </div>

      {(team?.length ?? 0) > 0 && <Carousel team={team} />}
    </div>
  )
}

export default Riffa
