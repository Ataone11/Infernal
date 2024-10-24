import Detalle from '../components/asesorias/DetalleAsesoria'

const asesorias = () => {
  return (
    <div className="bg-black w-full h-full">
      <div className="bg-black w-full h-full  items-center justify-center">
        <div className="w-full flex flex-col items-center   pt-3 md:pt-5 lg:pt-10">
          <h2
            className="text-redOmega text-3xl xl:text-4xl font-bold
           text-center  tracking-widest md:w-full my-2"
          >
            Programacion Infernal Fest 4
          </h2>
        </div>
        <div className="">
          <Detalle />
        </div>
      </div>
    </div>
  )
}

export default asesorias
