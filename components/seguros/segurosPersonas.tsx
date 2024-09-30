import Link from 'next/link'
import Image from 'next/image'

const Personas = () => {
  interface Props {
    title?: string
    negrilla?: string
    description?: string
    image?: any | string
    id: number
  }

  const dataSecure3: Props[] = [
    {
      id: 1,
      title: 'Zisifo',
      negrilla: 'En momentos difíciles mereces estar tranquilo.',
      description:
        'Este seguro te ayudara a no preocuparte por cuestiones económicas al momento de falleciiento de un ser querido.',
      image: '/seguros/banda1.webp'
    },
    {
      id: 2,
      title: 'Los Bananos',
      negrilla: 'Los accidentes pueden ocurrir en cualquier momento.',
      description:
        'El seguro de Accidentes te suministrará una ayuda económica, en caso de que un evento exterior te cause lesión física o la muerte',
      image: '/seguros/bananos.jpg'
    },
    {
      id: 3,
      title: 'Dc punk',
      negrilla: 'Sabemos la importancia de la formación de tus hijos. ',
      description:
        'Asesórate con nosotros y descubre la manera mas efectiva para cubrir los costos de sus planes educativos',
      image: '/seguros/dc.webp'
    },
    {
      id: 2,
      title: 'Los Bananos',
      negrilla: 'Los accidentes pueden ocurrir en cualquier momento.',
      description:
        'El seguro de Accidentes te suministrará una ayuda económica, en caso de que un evento exterior te cause lesión física o la muerte',
      image: '/seguros/bananos.jpg'
    },
    {
      id: 2,
      title: 'Los Bananos',
      negrilla: 'Los accidentes pueden ocurrir en cualquier momento.',
      description:
        'El seguro de Accidentes te suministrará una ayuda económica, en caso de que un evento exterior te cause lesión física o la muerte',
      image: '/seguros/bananos.jpg'
    },
    {
      id: 2,
      title: 'Los Bananos',
      negrilla: 'Los accidentes pueden ocurrir en cualquier momento.',
      description:
        'El seguro de Accidentes te suministrará una ayuda económica, en caso de que un evento exterior te cause lesión física o la muerte',
      image: '/seguros/bananos.jpg'
    },
    {
      id: 2,
      title: 'Los Bananos',
      negrilla: 'Los accidentes pueden ocurrir en cualquier momento.',
      description:
        'El seguro de Accidentes te suministrará una ayuda económica, en caso de que un evento exterior te cause lesión física o la muerte',
      image: '/seguros/bananos.jpg'
    },
    {
      id: 2,
      title: 'Los Bananos',
      negrilla: 'Los accidentes pueden ocurrir en cualquier momento.',
      description:
        'El seguro de Accidentes te suministrará una ayuda económica, en caso de que un evento exterior te cause lesión física o la muerte',
      image: '/seguros/bananos.jpg'
    },
    {
      id: 2,
      title: 'Los Bananos',
      negrilla: 'Los accidentes pueden ocurrir en cualquier momento.',
      description:
        'El seguro de Accidentes te suministrará una ayuda económica, en caso de que un evento exterior te cause lesión física o la muerte',
      image: '/seguros/bananos.jpg'
    },
    {
      id: 2,
      title: 'Los Bananos',
      negrilla: 'Los accidentes pueden ocurrir en cualquier momento.',
      description:
        'El seguro de Accidentes te suministrará una ayuda económica, en caso de que un evento exterior te cause lesión física o la muerte',
      image: '/seguros/bananos.jpg'
    },
    {
      id: 2,
      title: 'Los Bananos',
      negrilla: 'Los accidentes pueden ocurrir en cualquier momento.',
      description:
        'El seguro de Accidentes te suministrará una ayuda económica, en caso de que un evento exterior te cause lesión física o la muerte',
      image: '/seguros/bananos.jpg'
    },
    {
      id: 2,
      title: 'Los Bananos',
      negrilla: 'Los accidentes pueden ocurrir en cualquier momento.',
      description:
        'El seguro de Accidentes te suministrará una ayuda económica, en caso de que un evento exterior te cause lesión física o la muerte',
      image: '/seguros/bananos.jpg'
    }
  ]

  /*  const ImageShadow = ({ img }: any) => (
    <div className=" bg-black">
      <div className="min-w-[250px] w-full relative flex lg:hidden lg:pt-8 h-[100%] mx-auto after:bg-red-900 after:content-[''] after:absolute after:w-[80%] after:h-full after:rounded-2xl after:top-3 image-shadow after:self-end after:right-0">
        <Image
          alt=""
          src={img}
          width={435}
          height={428}
          className="rounded-2xl relative z-10  w-[95%] h-full shadow mr-auto"
          layout="fixed"
          objectFit="cover"
          objectPosition="90% 50%"
        />
      </div>

      <div className="min-w-[250px] w-[460px] relative  hidden lg:block lg:pt-8 h-[80%] mx-auto after:bg-red-900 after:content-[''] after:absolute after:w-[90%] after:h-[80%] after:rounded-3xl after:top-16 image-shadow after:self-end after:right-0">
        <Image
          alt=""
          src={img}
          width={335}
          height={250}
          className="rounded-3xl z-10 w-[80%] h-[50%] relative"
          layout="fixed"
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </div>
    </div>
  ) */
  return (
    <div className="bg-black h-full w-full container mx-auto px-5">
      <div className=" xl:grid-cols-3 lg:justify-between my-5  lg:grid lg:grid-cols-2">
        <br className="block md:hidden" />
        {dataSecure3.map((item: Props) => (
          <div className=" flex my-5" key={item.id}>
            <div className="container w-[400px] min-h-[500px] mx-auto flex flex-col">
              <Image
                width={400}
                height={500}
                layout="fixed"
                alt=""
                objectFit="cover"
                objectPosition="center-top"
                src={item.image}
              />

              <div className="col flex justify-center my-2">
                <audio
                  controls
                  className="bg-black"
                  id="a1"
                  src="/audios/hw.mp3"
                ></audio>
              </div>
              <h1 className=" text-white my-2 font-myriad tracking-[4px] text-xs  text-justify block lg:my-1">
                Absoloum es una banda de Death Metal Punk de la ciudad de
                Bogotá, creada en 2016 por Edward Rivera La banda abarca sonidos
                estridentes, violentos de atmósferas oscuras que sumergen al
                oyente en una variedad de emociones que van desde la alegría
                hasta la rabia
              </h1>

              <h1 className="text-2xl text-white my-3  font-myriad font-bold text-center  ">
                {item.title}
              </h1>

              <div className="lg:justify-center flex my-8 lg:my-0 items-center justify-end">
                <Link href="/seguros/seguro_vida">
                  <button className="btn-primary  lg:w-auto lg:h-auto align-middle text-center h-[60%] w-[20%]  md:w-[40%] min-w-[100px] ml-1">
                    Ver más
                  </button>
                </Link>
              </div>
            </div>
            <br className="block md:hidden" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Personas
