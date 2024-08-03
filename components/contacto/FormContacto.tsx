import Image from 'next/image'
import { useState } from 'react'
import contacto from '../../assets/images/nosotros/infernalw.jpg'
import iconVida from '../../assets/icons/vida.svg'
import iconHouse from '../../assets/icons/hogar.svg'
import iconPymes from '../../assets/icons/pymes.svg'
import iconCar from '../../assets/icons/car.svg'
import iconPlus from '../../assets/icons/plus.svg'
import axios from 'axios'

import { PulseLoader } from 'react-spinners'

interface Props {
  title?: string
  icon: any | string
  id: number
}

const dataSecure: Props[] = [
  {
    id: 1,
    title: 'Vida',
    icon: iconVida
  },
  {
    id: 2,
    title: 'Hogar',
    icon: iconHouse
  },
  {
    id: 3,
    title: 'PYMES',
    icon: iconPymes
  },
  // {
  //   id: 4,
  //   title: 'Estatales',
  //   icon: iconBills
  // },
  {
    id: 5,
    title: 'Automovíles',
    icon: iconCar
  },
  {
    id: 6,
    title: 'Otros',
    icon: iconPlus
  }
]

const FormContacto = () => {
  const [servicios, setServicios] = useState(dataSecure[0])
  const [descarga, setDescarga] = useState(false)
  const [data, setData] = useState<any>({
    banda: '',
    contacto: '',
    correo: '',
    telefono: '',
    numeroIntegrantes: '',
    redSocial: '',
    reseña: ''
  })

  const [sent, setSent] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [completeFields, setCompleteFields] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    console.log(data)
    setError(false)

    try {
      setLoading(true)
      const result = await axios.post(
        'https://sheet.best/api/sheets/1cdc285b-7e4e-452e-b970-609a9aaad090',
        data
      )

      setLoading(false)
      if (result.status === 200) {
        setSent(true)
      } else {
        setError(true)
      }
    } catch (error) {
      console.log('error', error)
      setLoading(false)
      setError(true)
    }
  }

  return (
    <div className="sm:mx-3 min-h-full">
      <div className="w-full h-full flex justify-center">
        <h2 className="text-redOmega text-2xl md:text-3xl lg:text-4xl font-bold font-myriad w-[65%] md:w-full lg:w-[80%] text-center  tracking-widest md:my-7">
          Convocatoria abierta
        </h2>
      </div>

      <form
        className="grid grid-cols-1 md:grid-cols-2  gap-x-10 container mx-auto md:pb-5"
        onSubmit={handleSubmit}
      >
        <div className="relative flex justify-start sm:justify-center pt-8 md:hidden after:bg-red-900 after:content-[''] after:absolute after:w-[90%] after:h-[80%] after:rounded-3xl after:top-16 image-shadow after:self-end after:right-0 w-[70%] mx-auto min-w-[250px]">
          <Image
            src={contacto}
            width={360}
            height={180}
            layout="fixed"
            className="rounded-2xl pt-5 z-10"
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </div>

        <div className="w-full flex flex-col items-start lg:mx-auto md:w-full my-5 md:my-0 lg:max-w-[530px] md:px-5">
          <div className="flex flex-col relative w-full px-5 md:px-0">
            <h1 className="text-left font-bold md:pt-0 lg:pt-3 font-myriad mb-2 text-white">
              Numero de integrantes
            </h1>
            <div className="flex flex-wrap">
              <div className="w-full">
                <input
                  className="appearance-none block w-full  text-normal border border-greyOmega rounded-lg   py-2 px-3 leading-tight focus:outline-none "
                  name="numeroIntegrantes"
                  onChange={handleChange}
                  type="text"
                  required
                />
              </div>
            </div>
          </div>
          <div className="relative ">
            <div className="pt-8 md:pt-10 hidden lg:block xl:hidden ">
              <Image
                src={contacto}
                width={340}
                height={229}
                layout="fixed"
                className="rounded-3xl pt-5 static"
                objectFit="cover"
                objectPosition="50% 50%"
              />
            </div>

            <div className="pt-8 md:pt-10 hidden lg:hidden md:block">
              <Image
                src={contacto}
                width={328}
                height={179}
                layout="fixed"
                className="rounded-3xl pt-5"
                objectFit="cover"
                objectPosition="50% 50%"
              />
            </div>

            <div className="pt-8 md:pt-10 hidden lg:hidden xl:block 2xl:hidden">
              <Image
                src={contacto}
                width={420}
                height={229}
                layout="fixed"
                className="rounded-3xl pt-5"
                objectFit="cover"
                objectPosition="50% 50%"
              />
            </div>

            <div className="pt-8 md:pt-14 hidden lg:hidden 2xl:block">
              <Image
                src={contacto}
                width={478}
                height={279}
                layout="fixed"
                className="rounded-3xl pt-5"
                objectFit="cover"
                objectPosition="50% 50%"
              />
            </div>
          </div>
        </div>

        <div className="sm:mx-3 min-h-full">
          <div className="flex flex-col w-full my-0 items-center">
            {sent ? (
              <h3 className="text-2xl font-bold text-redOmega w-full mx-10 py-20 text-center h-[100%] flex items-center">
                Gracias por escribirnos, intentaremos responder lo antes
                posible!
              </h3>
            ) : (
              <div className="w-full  px-5">
                <h1 className="font-bold mb-2 text-white">
                  Nombre de la banda
                </h1>
                <div className="flex flex-wrap mb-6 md:my-1 lg:my-3">
                  <div className="w-full">
                    <input
                      className="appearance-none block w-full  text-normal border border-greyOmega rounded-lg   py-2 px-3 leading-tight focus:outline-none "
                      name="banda"
                      onChange={handleChange}
                      type="text"
                      required
                    />
                  </div>
                </div>
                <h1 className="font-bold mb-2 text-white">
                  Nombre del contacto
                </h1>
                <div className="flex flex-wrap mb-6 md:my-1 lg:my-3">
                  <div className="w-full">
                    <input
                      className="appearance-none block w-full  text-normal border border-greyOmega rounded-lg  py-2 px-3 leading-tight focus:outline-none  "
                      name="contacto"
                      onChange={handleChange}
                      type="text"
                      required
                    />
                  </div>
                </div>
                <h1 className="font-bold mb-2 text-white">
                  Número de contacto
                </h1>
                <div className="flex flex-wrap mb-6 md:my-1 lg:my-3">
                  <div className="w-full">
                    <input
                      className="appearance-none block w-full  text-normal border border-greyOmega rounded-lg  py-2 px-3 leading-tight focus:outline-none  "
                      name="telefono"
                      onChange={handleChange}
                      type="text"
                      required
                    />
                  </div>
                </div>
                <h1 className="font-bold mb-2 text-white">
                  Correo electrónico
                </h1>
                <div className="flex flex-wrap mb-6 md:my-1 lg:my-3">
                  <div className="w-full">
                    <input
                      className="appearance-none block w-full text-normal border border-greyOmega rounded-lg  py-2 px-3 leading-tight focus:outline-none  "
                      name="correo"
                      onChange={handleChange}
                      type="email"
                      required
                    />
                  </div>
                </div>
                <h1 className="font-bold mb-2 text-white">
                  Link de alguna red social que utilicen
                </h1>
                <div className="flex flex-wrap mb-6 md:my-1 lg:my-3">
                  <div className="w-full">
                    <input
                      className="appearance-none block w-full text-normal border border-greyOmega rounded-lg  py-2 px-3 leading-tight focus:outline-none  "
                      name="redSocial"
                      onChange={handleChange}
                      type="text"
                      required
                    />
                  </div>
                </div>
                <h1 className="font-bold mb-2 text-white">Reseña de banda</h1>
                <div className="flex flex-wrap mb-6 md:my-1 lg:my-3">
                  <div className="w-full">
                    <textarea
                      className="form-control ease-in-out  block w-full text-normal border border-greyOmega rounded-xl  h-[90px]  md:h-[90px]  lg:h-[120px] xl:h-[140px] py-2  px-3 leading-tight focus:outline-none  "
                      name="reseña"
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>

                <div
                  className={`${
                    descarga === true
                      ? 'transition-opacity   duration-300 ease-out opacity-100'
                      : 'transition-opacity  duration-300 ease-in opacity-0'
                  }   flex`}
                >
                  <button
                    type="button"
                    className="bg-redOmega hover:bg-redOmega  rounded-full py-1 px-3 text-white font-myriad w-[230px] h-[35px] align-middle text-center my-5"
                  >
                    <input
                      className={`${
                        descarga === true ? 'block' : 'hidden'
                      }  flex justify-start items-center font-myriad font-bold transition-all  absolute w-[250px] align-middle text-center opacity-0 cursor-pointer`}
                      type="file"
                      name="files"
                    />
                    <h1 className="text-sm md:text-xs lg:text-xs xl:text-base">
                      Subir documento
                    </h1>
                  </button>

                  <label className="appearance-none w-[64%] text-normal border border-greyOmega rounded-lg   mx-4 my-5  leading-tight focus:outline-none h-[40px] p-2 flex justify-between ">
                    <div className="overflow-auto">{data.archivo?.name}</div>
                    <div className="text-right flex justify-end">
                      <button type="button" className="text-greyOmega">
                        X
                      </button>
                    </div>
                  </label>
                </div>

                <div
                  className={`${
                    descarga === true ? 'translate-y-2' : '-translate-y-16'
                  } relative flex justify-center md:justify-start items-center font-myriad font-bold transition-all ease-in duration-300 md:w-[40%] align-middle text-center`}
                >
                  {error && (
                    <span className="absolute bottom-[95%] text-xs text-redOmega">
                      Hubo un error, inténtelo de nuevo
                    </span>
                  )}
                  {completeFields && (
                    <span className="absolute bottom-[95%] text-xs text-redOmega">
                      Por favor completa todos los campos
                    </span>
                  )}
                  {loading ? (
                    <PulseLoader color="#CC0000" />
                  ) : (
                    <button
                      className="btn-primary mt-2 w-auto align-middle text-center my-4"
                      type="submit"
                    >
                      Enviar
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormContacto
