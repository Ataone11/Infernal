import { useState } from 'react'
import 'react-multi-carousel/lib/styles.css'
import ScrollContainer from 'react-indiana-drag-scroll'

interface Props {
  title?: string
  description?: string
  image?: any | string
  id: number
}

const dataSecure: Props[] = [
  {
    id: 1,
    title: '27 de Octubre'
  },
  {
    id: 2,
    title: '2 de Noviembre'
  }
]

const Detalle = () => {
  const [servicios, setServicios] = useState(dataSecure[0])
  return (
    <>
      <ScrollContainer className="flex justify-center md:hidden container mx-auto w-full">
        <button
          onClick={() => setServicios(dataSecure[0])}
          className={`${
            servicios.id === 1
              ? ' bg-redOmega border-redOmega text-white'
              : 'bg-white'
          }  rounded-full md:rounded-full hover:bg-redOmega hover:text-white hover:border-redOmega font-semibold
            border-2 border-greyOmega text-greyOmega  py-2 whitespace-nowrap px-3 mx-4 h-[45px] snap-center w-fit`}
        >
          <h1 className="">27 de Octubre</h1>
        </button>
        <button
          onClick={() => setServicios(dataSecure[1])}
          className={`${
            servicios.id === 2
              ? ' bg-redOmega border-redOmega text-white'
              : 'bg-white'
          }  rounded-full md:rounded-full hover:bg-redOmega hover:text-white hover:border-redOmega font-semibold
          border-2 border-greyOmega text-greyOmega  py-2 whitespace-nowrap px-3 mx-4 h-[45px] w-fit`}
        >
          2 de Noviembre
        </button>
      </ScrollContainer>
      <div className="container mx-auto gap-3 space-y-4 md:py-3 lg:py-10 px-5 w-full">
        <div className="flx justify-center">
          <div className="text-center pt-5 lg:flex lg:justify-center lg:w-full mx-auto hidden md:flex flex-wrap justify-center text-base md:pl-10 pl-0 lg:pl-0">
            <div className="md:pl-8 lg:pl-0 pl-0">
              <button
                onClick={() => setServicios(dataSecure[0])}
                className={`${
                  servicios.id === 1
                    ? ' bg-redOmega border-redOmega text-white'
                    : 'bg-white'
                }  rounded-full md:rounded-full hover:bg-redOmega hover:text-white hover:border-redOmega font-semibold
            border-2 border-greyOmega text-greyOmega  py-2 xl:mx-5 mx-2 w-[240px] h-[45px] my-1`}
              >
                <h1 className="">27 de Octubre</h1>
              </button>
            </div>
            <div>
              <button
                onClick={() => setServicios(dataSecure[1])}
                className={`${
                  servicios.id === 2
                    ? ' bg-redOmega border-redOmega text-white'
                    : 'bg-white'
                }  rounded-full md:rounded-full hover:bg-redOmega hover:text-white hover:border-redOmega font-semibold
          border-2 border-greyOmega text-greyOmega  py-2  xl:mx-5 mx-2 w-[260px] h-[45px] my-1`}
              >
                2 de Noviembre
              </button>
            </div>
          </div>
        </div>

        {dataSecure.map((item: any) => (
          <div key={item.id} className="w-full">
            <div
              className={`${
                servicios.id === item.id ? 'transition-opacity2' : 'hidden '
              } grid grid-cols-1gap-x-6 gap-y-8 lg:gap-y-32 rounded-xl container mx-auto md:mx-0 lg:mx-auto w-[99%] xl:w-[80%] md:w-[150%] relative`}
            >
              {item.id === 1 ? (
                <div>
                  <div className=" hidden lg:flex flex-col w-full mx-auto text-sm sm:text-xl lg:text-4xl">
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">
                        Routh riders
                      </h1>
                      <h1 className=" text-center text-red-700  ">
                        ........................................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">12:00 am</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">
                        Llenitos de ruido
                      </h1>
                      <h1 className=" text-center text-red-700  ">
                        ........................................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">12:50 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">Agression</h1>
                      <h1 className=" text-center text-red-700  ">
                        ........................................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">1:40 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">G-12</h1>
                      <h1 className=" text-center text-red-700  ">
                        ........................................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">2:30 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">
                        Menozprezio
                      </h1>
                      <h1 className=" text-center text-red-700  ">
                        ........................................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">3:20 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">
                        Archilunátikoss
                      </h1>
                      <h1 className=" text-center text-red-700  ">
                        ........................................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">4:10 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">
                        Detonante pun
                      </h1>
                      <h1 className=" text-center text-red-700  ">
                        ........................................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">5:00 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">Dc punk</h1>
                      <h1 className=" text-center text-red-700  ">
                        ........................................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">5:50 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">
                        Los bananos
                      </h1>
                      <h1 className=" text-center text-red-700  ">
                        ........................................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">6:30 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">Dynamo</h1>
                      <h1 className=" text-center text-red-700  ">
                        ........................................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">7:20 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">
                        No Name Core
                      </h1>
                      <h1 className=" text-center text-red-700  ">
                        ........................................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">8:10 pm</h1>
                    </div>

                    <h1 className="text-center text-red-700  ">
                      Fin del evento
                    </h1>
                  </div>
                  <div className=" block lg:hidden flex-col w-full mx-auto">
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">
                        Routh riders
                      </h1>
                      <h1 className=" text-center text-red-700  ">
                        ......................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">12:00 am</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">
                        Llenitos de ruido
                      </h1>
                      <h1 className=" text-center text-red-700  ">
                        ......................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">12:50 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">Agression</h1>
                      <h1 className=" text-center text-red-700  ">
                        ......................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">1:40 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">G-12</h1>
                      <h1 className=" text-center text-red-700  ">
                        ......................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">2:30 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">
                        Menozprezio
                      </h1>
                      <h1 className=" text-center text-red-700  ">
                        ......................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">3:20 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">
                        Archilunátikoss
                      </h1>
                      <h1 className=" text-center text-red-700  ">
                        ......................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">4:10 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">
                        Detonante pun
                      </h1>
                      <h1 className=" text-center text-red-700  ">
                        ......................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">5:00 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">Dc punk</h1>
                      <h1 className=" text-center text-red-700  ">
                        ......................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">5:50 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">
                        Los bananos
                      </h1>
                      <h1 className=" text-center text-red-700  ">
                        ......................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">6:30 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">Dynamo</h1>
                      <h1 className=" text-center text-red-700  ">
                        ......................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">7:20 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">
                        No Name Core
                      </h1>
                      <h1 className=" text-center text-red-700  ">
                        ......................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">8:10 pm</h1>
                    </div>

                    <h1 className="text-center text-red-700  ">
                      Fin del evento
                    </h1>
                  </div>
                </div>
              ) : (
                <div>
                  <div className=" hidden lg:flex flex-col w-full mx-auto text-sm sm:text-xl lg:text-4xl">
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">Absoloum</h1>
                      <h1 className=" text-center text-red-700  ">
                        ........................................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">12:00 am</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">
                        Contaminantes
                      </h1>
                      <h1 className=" text-center text-red-700  ">
                        ........................................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">12:50 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">Dissforia</h1>
                      <h1 className=" text-center text-red-700  ">
                        ........................................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">1:40 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">Eskozor </h1>
                      <h1 className=" text-center text-red-700  ">
                        ........................................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">2:30 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">Fusilia</h1>
                      <h1 className=" text-center text-red-700  ">
                        ........................................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">3:20 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">Ironside</h1>
                      <h1 className=" text-center text-red-700  ">
                        ........................................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">4:10 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">Zisifo</h1>
                      <h1 className=" text-center text-red-700  ">
                        ........................................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">5:00 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">Berserker</h1>
                      <h1 className=" text-center text-red-700  ">
                        ........................................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">5:50 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">Battousai</h1>
                      <h1 className=" text-center text-red-700  ">
                        ........................................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">6:30 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">Tote</h1>
                      <h1 className=" text-center text-red-700  ">
                        ........................................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">7:20 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">Smog</h1>
                      <h1 className=" text-center text-red-700  ">
                        ........................................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">8:10 pm</h1>
                    </div>

                    <h1 className="text-center text-red-700  ">
                      Fin del evento
                    </h1>
                  </div>
                  <div className=" block lg:hidden flex-col w-full mx-auto">
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">Absoloum</h1>
                      <h1 className=" text-center text-red-700  ">
                        ......................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">12:00 am</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">
                        Contaminantes
                      </h1>
                      <h1 className=" text-center text-red-700  ">
                        ......................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">12:50 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">Dissforia</h1>
                      <h1 className=" text-center text-red-700  ">
                        ......................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">1:40 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">Eskozor</h1>
                      <h1 className=" text-center text-red-700  ">
                        ......................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">2:30 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">Fusilia</h1>
                      <h1 className=" text-center text-red-700  ">
                        ......................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">3:20 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">Ironside</h1>
                      <h1 className=" text-center text-red-700  ">
                        ......................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">4:10 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">Zisifo</h1>
                      <h1 className=" text-center text-red-700  ">
                        ......................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">5:00 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">Berserker</h1>
                      <h1 className=" text-center text-red-700  ">
                        ......................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">5:50 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">Battousai</h1>
                      <h1 className=" text-center text-red-700  ">
                        ......................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">6:30 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">Tote</h1>
                      <h1 className=" text-center text-red-700  ">
                        ......................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">7:20 pm</h1>
                    </div>
                    <div className="grid grid-cols-3 w-full mx-auto">
                      <h1 className=" text-center text-red-700  ">Smog</h1>
                      <h1 className=" text-center text-red-700  ">
                        ......................................
                      </h1>
                      <h1 className=" text-center text-red-700  ">8:10 pm</h1>
                    </div>

                    <h1 className="text-center text-red-700  ">
                      Fin del evento
                    </h1>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Detalle
