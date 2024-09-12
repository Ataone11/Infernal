import Link from 'next/link'
import Image from 'next/image'
import FormContacto from '../contacto/FormContacto'

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
      <div className="lg:grid lg:grid-cols-3 lg:justify-between my-5  md:grid md:grid-cols-2">
        <br className="block md:hidden" />
        {dataSecure3.map((item: Props) => (
          <div key={item.id}>
            <div className="container mx-auto flex flex-col">
              <Image alt="" src={item.image} />
              <h1 className="text-2xl text-white my-10 font-myriad font-bold tracking-[4px] text-center hidden lg:block lg:my-6"></h1>
              <h1 className="text-2xl text-white my-10 lg:my-5 font-myriad font-bold text-center  ">
                {item.title}
              </h1>

              <div className="lg:justify-center flex my-8 lg:my-0 items-center justify-between">
                <h1 className="text-xl text-greyOmega  font-myriad font-bold tracking-widest text-left block lg:hidden"></h1>
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
      <FormContacto />
    </div>
  )
}

export default Personas
