import Link from 'next/link'
import Image from 'next/image'
import br from '../../assets/images/bandas/berserker.png'
import g12 from '../../assets/images/seguros/g12.jpg'
import zisifo from '../../assets/images/bandas/zisifo.jpg'
import bananos from '../../assets/images/bandas/bananos.png'
import smog from '../../assets/images/bandas/smog.png'
import dynamo from '../../assets/images/bandas/dynamo.jpeg'
import ironside from '../../assets/images/bandas/ironside.png'
import fusilia from '../../assets/images/bandas/fusilia.png'
import noname from '../../assets/images/bandas/noname.jpeg'
import menos from '../../assets/images/bandas/menozprezio.png'
import dc from '../../assets/images/bandas/dcpunk.jpg'
import agresion from '../../assets/images/bandas/agresion.png'
import battousai from '../../assets/images/bandas/battousai.jpeg'
import detonante from '../../assets/images/bandas/detonante.png'
import archilunaticos from '../../assets/images/bandas/archilunaticos.png'
import tote from '../../assets/images/bandas/tote.png'
import sonora from '../../assets/images/bandas/sonora.jpg'
import disforia from '../../assets/images/bandas/disforia.png'
import ezkozor from '../../assets/images/bandas/ezkozor.png'
import absolum from '../../assets/images/bandas/absoloum.png'

const Personas = () => {
  interface Props {
    title?: string
    negrilla?: string | any
    description?: string
    image?: any | string
    id: number
    audio?: string
  }

  const dataSecure3: Props[] = [
    {
      id: 1,
      title: 'Zisifo',
      negrilla:
        'https://www.facebook.com/profile.php?id=100064306854720&mibextid=ZbWKwL',
      description:
        'Con un rock and roll acelerado , letras anarquistas e historias de nuestras vidas , estamos aquí para escupirle a los poderosos y al puto sistema que han creado !!',
      image: zisifo,
      audio: '/audios/zisifo.mp3'
    },
    {
      id: 2,
      title: 'Los Bananos',
      negrilla: 'https://www.facebook.com/LosBananosPsychobilly',
      description: '',
      image: bananos,
      audio: '/audios/losbananos.mp3'
    },
    {
      id: 3,
      title: 'Dc punk',
      negrilla:
        'https://www.instagram.com/d.c.punkoficial?igsh=MTIyOXlsejZ1YW90Yw==',
      description:
        'Vamos a totear ese infernaaaaaaaaaalllllll. Parce descripción de la banda no hay mucha, el bajista no sabe tocar y el guitarra nunca llega a ensayar pero hacemos ruido del bueno y del rebelde 🥸',
      image: dc,
      audio: '/audios/dc.mp3'
    },
    {
      id: 2,
      title: 'Dynamo',
      negrilla:
        'https://youtube.com/@dynamopunkhardcore5857?si=YlqKx0ba7GjoPsfQ',
      description:
        'Dynamo PunkHardcore, es un grupo nacido en Bogotá conformado por 3 personajes, su sonido rápido y agresivo, caracterizado por melodías simples y más acentuadas, influenciadas por los distintos gustos musicales de sus integrantes y grupos del género.Sus letras a modo de protesta son críticas a la sociedad, inspiradas en la vida cotidiana, independencia, anarquismo, autogestión y ese afán de luchar contra la religión, invitando a los espectadores al bullicio y algarabía al ritmo de la música. Gracias a los que nos apoyan y muchas más a los que no. 💀',
      image: dynamo,
      audio: '/audios/dynamo.mp3'
    },
    {
      id: 2,
      title: 'IRONSIDE',
      negrilla: 'https://www.instagram.com/ironside.metal/',
      description:
        'Originarios de Bogotá, Colombia se inició este proyecto de Metal a finales del año 2019 donde se unieron los deseos y ganas de hacer música con una marca muy única mostrando las influencias personales de cada integrante, formando una sola propuesta muy sólida en la que fundamentar su sonido. Formados en distintos lugares y con variadas influencias que hacen que lo que se gesta sea unico, algo intimo y visceral, entregando vivencias y experiencias, uniendo todo lo que es IRONSIDE El material que constituye esta propuesta actualmente: Big Rubbens (DEMO) lanzado el 7 agosto del 2020, Snakeknife (DEMO) lanzado el 11 de Novimebre de 2020 y su primer EP titulado "OMINOUS PREFACE" lanzado en plataformas digitales en Octubre de 2022 y en formato fisico el 15 de enero de 2023, ya por ultimo como ultimo Lanzamiento, el single"ROOM CDXVI" lanzado el 2 de agosto de 2024',
      image: ironside,
      audio: '/audios/ironside.mp3'
    },
    {
      id: 2,
      title: 'Smog',
      negrilla: 'https://www.facebook.com/Smogthrashmetal/',
      description:
        'Smog es una banda de thrash metal bogotana conformada desde el 2008. Caracterizada por sus riff acelerados y baterías potentes Smog tiene una propuesta musical que relata la vida dentro de los barrios de Bogotá, así como hace una crítica a la raza humana como virus que infecta el planeta plagado de guerra y ultra contaminación ',
      image: smog,
      audio: '/audios/smog.mpeg'
    },
    {
      id: 2,
      title: 'Battousai',
      negrilla: 'https://www.instagram.com/battousaixpunk/',
      description:
        'Aguante el ruido maldita sea, estamos en busca de libertad y la libre expresion a como se nos de la gana asi no les guste sapo perro',
      image: battousai,
      audio: '/audios/battousai.mp3'
    },
    {
      id: 2,
      title: 'No Name Core',
      negrilla:
        'https://www.facebook.com/share/xdJ4yieFxsQqiMpn/?mibextid=qi2Omg',
      description:
        'Banda conformada por  la desconformidad social. Letras agresivas echas para pensar en lo absurdo de los sistemas económicos y l entes sociales represivos. Banda sin cover con mera bulla y ruido estridente...',
      image: noname,
      audio: '/audios/noname.mp3'
    },
    {
      id: 2,
      title: 'Tote',
      negrilla: 'https://www.facebook.com/profile.php?id=100083165177400',
      description: 'Aguante el ruido',
      image: tote,
      audio: '/audios/tote.mp3'
    },
    {
      id: 2,
      title: 'Menozprezio',
      negrilla:
        'https://www.facebook.com/share/HVzfJT2qyAmqohJ7/?mibextid=qi2Omg',
      description:
        'Menoz Prezio es una banda originaria de la ciudad de Bogotá, Colombia; es una banda de punk que retrata lo cotidiano de la ciudad en sus canciones. Llevamos un recorrido en la escena de 1 año, y 1 año y medio de formación. Contamos con un EP lanzado en enero de 2024 en todas las plataformas digitales; este EP cuenta con influencias de punk, rock, noise, hardcore punk y d-beat.  ',
      image: menos,
      audio: '/audios/menos.mp3'
    },
    {
      id: 2,
      title: 'ESKOZOR HC',
      negrilla: 'https://www.facebook.com/collector.esk',
      description:
        'ESKOZOR HC es una banda de hardcore punk de Bogotá Colombia, formada en el 2002, activa hasta el día de hoy. Con diferentes alineaciones de integrantes la banda ha sobrevivido desde su formación original, cuando inició una fuerte actividad en la ciudad de Bogotá, entrando a convocatorias locales de punk dando conciertos a partir de iniciativas propias en diferentes locaciones alternativas e independientes, así como la participación en festivales en las localidades de Mártires, Chapinero y Centro de la ciudad, como también editando directos y trabajando con más bandas en recopilaciones de Autogestión y Fortalecimiento del Movimiento Punk en Bogotá.',
      image: ezkozor,
      audio: '/audios/eskozor.wav'
    },
    {
      id: 2,
      title: 'Agression',
      negrilla: 'https://www.facebook.com/profile.php?id=61558398086868',
      description:
        'Somos una banda emergente de Thrash Metal, somos una banda creativa, con tan solo 7 meses de creación contamos con 7 canciones propias dentro de nuestro repertorio ',
      image: agresion,
      audio: '/audios/agresion.mpeg'
    },
    {
      id: 2,
      title: 'Berserker',
      negrilla:
        'https://www.facebook.com/share/HVzfJT2qyAmqohJ7/?mibextid=qi2Omg',
      description: 'Hemos tenido buen recibimiento ',
      image: br,
      audio: '/audios/berserker.mp3'
    },
    {
      id: 2,
      title: 'G-12',
      negrilla: 'https://www.instagram.com/g12punk?igsh=MWdmbjF1aXpsa3pzMw==',
      description:
        'G-12. una banda Bogotana con buena trayectoria en la escena Punk Rocker, consolidada con buena música, grandes personas y actitud para tocar en el escenario. ',
      image: g12,
      audio: '/audios/g12.mp3'
    },
    {
      id: 2,
      title: 'Fusilia',
      negrilla:
        'https://www.instagram.com/sonia_ericcsson?igsh=YW90NmYyM2ZidXc4',
      description:
        'somos una banda de emotional hardcore creada en 2021 aguante el ruido!!! ',
      image: fusilia,
      audio: '/audios/fusilia.mp4'
    },
    {
      id: 2,
      title: 'Dissforia',
      negrilla:
        'https://www.instagram.com/dissforia_punk?igsh=MzFpbjhpMmhhN3M5',
      description:
        'Dissforia, banda de HardCrust punk de la ciudad de Bogotá establecida desde el año 2021, transmitimos el mensaje de una sociedad enferma, los miedos y los futuros apocalípticos.',
      image: disforia,
      audio: '/audios/disforia.mp3'
    },
    {
      id: 2,
      title: 'Archilunatikos',
      negrilla:
        'https://www.instagram.com/archilunatikoss_punk?igsh=MXM2bzhsZjA3bXgzZg==',
      description:
        'Somos una banda de tres integrantes nacida en Bogotá, zona cuarta. Nuestro enfoque musical esta en el punk y sus derivados, tocando siempre a gran velocidad y fomentando la diversión y el pogo en cada uno de nuestras presentaciones, somos adrenalina pura en el escenario y nos encantaría participar ya que el evento es acorde a nuestro estilo musical. ',
      image: archilunaticos,
      audio: '/audios/archilunatikos.mp3'
    },
    {
      id: 2,
      title: 'Detonante punk',
      negrilla: 'https://www.instagram.com/detonante_pun/',
      description: '',
      image: detonante,
      audio: '/audios/detonante.mpeg'
    },
    {
      id: 2,
      title: 'Sonora Rebel',
      negrilla: 'https://www.facebook.com/SonoraRebelCol',
      description:
        'Sonora Rebel es una agrupación bogotana que transita entre el punk, el ska y las sonoridades que acompañen sus discursos contestatarios con salpicaduras de historias de vida. Se origina en el año 2006 bajo el nombre de Involución, con un sonido mucho más cercano al punk duro y la realidad cruda de la decadencia social. Sin embargo, el sonido evoluciona de manera progresiva con sus cambios de escuadra, lo que los lleva a experimentar nuevas líneas de letras y melodías. Sonora porque vibra entre el ska y el punk, pero se permite tener apertura para converger a través de diferentes armonías en medio de la diversión, el baile y la alegría. Rebel, porque no se abandona la idea de una sociedad que pueda transformar las realidades injustas y poco equilibradas, usando la música como herramienta para despertar miradas críticas manteniendo la esperanza. Las influencias de la agrupación tienen un alto tinte de heterogeneidad, sonidos como: Miles Davis, Death, Iggy Pop, Lee Morgan, The Beatles, Stevie Ray Vaughan, Envidia Kotxina, Manu Chao, Foo Fighters, Incubus, Primus y Jamiroquai han trazado las líneas de arreglos, propuestas y curiosamente, unidad en la agrupación. ',
      image: sonora,
      audio: '/audios/sonora.mp3'
    },
    {
      id: 2,
      title: 'Absoloum',
      negrilla: 'https://www.facebook.com/Absoloum',
      description:
        'Absoloum es una banda de Death Metal Punk de la ciudad de Bogotá, creada en 2016 por Edward Rivera La banda abarca sonidos estridentes, violentos de atmósferas oscuras que sumergen al oyente en una variedad de emociones que van desde la alegría hasta la rabia',
      image: absolum,
      audio: '/audios/absoloum.mp3'
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
                  src={item.audio}
                ></audio>
              </div>
              <h1 className=" text-white my-2 font-myriad tracking-[4px] text-xs  text-justify block lg:my-1">
                {item.description}
              </h1>

              <h1 className="text-2xl text-white my-3  font-myriad font-bold text-center  ">
                {item.title}
              </h1>

              <div className="lg:justify-center flex my-8 lg:my-0 items-center justify-end">
                <Link target="_blank" href={item.negrilla}>
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
