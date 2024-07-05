import imageOne from '../../assets/images/home/31.png'
import imageTwo from '../../assets/images/home/5.png'
import CardHome from '../CardHome'

const dataService = [
  {
    id: 1,
    titleOne: 'Galeria',
    route: '/seguros',
    description: 'Galeria de fotos de los anteriores Infernal',
    image: imageOne,
    button: 'Ver más'
  },
  {
    id: 2,
    titleOne: 'Videos',
    route: '/asesorias',
    description: 'Videos de los anteriores festivales del INFERNAL FEST ',
    image: imageTwo,
    button: 'Ver más'
  }
]

const Service = () => {
  return (
    <div className="flex justify-center bg-black my-10 py-10 w-full">
      <div className="flex flex-col md:flex-row gap-[16px] md:mx-4 md:gap-[30px] lg:gap-[123px] max-w-[900px] mx-auto">
        {dataService.map((item: any) => (
          <CardHome key={item.id} {...item} href={item.route} />
        ))}
      </div>
    </div>
  )
}

export default Service
