import Image from 'next/image'
import { useState } from 'react'
import contacto from '../../assets/images/seguros/punki.jpg'
import iconVida from '../../assets/icons/vida.svg'
import iconHouse from '../../assets/icons/hogar.svg'
import iconPymes from '../../assets/icons/pymes.svg'
import iconCar from '../../assets/icons/car.svg'
import iconPlus from '../../assets/icons/plus.svg'
import axios from 'axios'
import { API_URL } from '../../utils/constants'
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

const FormBanda = () => {
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

  const handleServicios = (item: any) => {
    setServicios(item)
    setData({
      ...data,
      seguro: item.title
    })
  }

  const borrarArchivos = () => {
    setData({
      ...data,
      archivo: null
    })
  }

  const descargar = (e: any) => {
    e.preventDefault()
    if (descarga) {
      setData({
        ...data,
        archivo: null
      })
    }
    setDescarga(!descarga)
  }

  const insertarArchivo = (e: any) => {
    setData({
      ...data,
      archivo: e.target.files[0]
    })
  }

  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (data.asesoria !== '' && data.seguro !== '') {
      setError(false)
      const formData = new FormData()
      Object.keys(data).forEach((key: any) => {
        formData.append(key, data[key])
      })
      try {
        setLoading(true)
        const result = await axios.post(
          `${API_URL}/api/correo/contacto`,
          formData
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
    } else {
      setCompleteFields(true)
    }
  }

  return (
    <div className="sm:mx-3 min-h-full">
      <div className="flex flex-col w-full my-0 items-center">
        <form className="w-full md:pt-5 px-5" onSubmit={handleSubmit}>
          <h1 className="font-bold mb-2 text-white">Nombre de la bandaa</h1>
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

          <h1 className="font-bold mb-2 text-white">Número de contacto</h1>
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
          <h1 className="font-bold mb-2 text-white">Correo electrónico</h1>
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
          <h1 className="font-bold mb-2 text-white">Reseña de banda</h1>
          <div className="flex flex-wrap mb-6 md:my-1 lg:my-3">
            <div className="w-full">
              <textarea
                className="form-control ease-in-out  block w-full text-normal border border-greyOmega rounded-xl  h-[90px]  md:h-[90px]  lg:h-[120px] xl:h-[140px] py-2  px-3 leading-tight focus:outline-none  "
                name="mensaje"
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
          <div
            onChange={handleChange}
            className="flex flex-col justify-start items-start w-full mt-4"
          >
            <h5 className="font-bold text-base">¿Eres empresa o persona?</h5>
            <div className="flex items-center justify-start mt-2">
              <input
                defaultChecked
                type="radio"
                id="empresa"
                name="tipoPersona"
                value="Empresa"
                className="accent-pink-300 focus:accent-pink-500 text-white"
              />
              &nbsp;
              <label className="ml-2 text-white" htmlFor="empresa">
                Empresa
              </label>
            </div>
            <div className="flex items-center justify-start">
              <input
                type="radio"
                id="persona"
                name="tipoPersona"
                value="Persona"
                className="accent-pink-300 focus:accent-pink-500 text-white"
              />
              &nbsp;
              <label className="ml-2 text-white" htmlFor="persona">
                Persona
              </label>
            </div>
          </div>
          <div className="flex justify-between md:justify-start items-center w-full mt-4">
            <h5 className="font-bold text-base">¿Desea adjuntar el SARLAFT?</h5>
            <button
              className={`${
                descarga === false
                  ? 'transition ease-in duration-500'
                  : 'transition ease-in duration-500'
              }   bg-redOmega hover:bg-redOmega rounded-full py-2 px-5 items-center md:ml-5`}
              onClick={descargar}
            >
              <h1
                className={`${
                  descarga === false
                    ? 'block transition ease-in duration-300 opacity-100'
                    : 'hidden transition ease-in duration-300 opacity-0'
                }   text-white font-bold font-myriad text-sm lg:text-[16px]`}
              >
                Descargar plantilla
              </h1>
              <h1
                className={`${
                  descarga === true
                    ? 'block transition ease-in duration-500 opacity-100 '
                    : 'hidden transition ease-in duration-500 opacity-0'
                }   text-white font-bold font-myriad text-sm lg:text-[16px]`}
              >
                Cancelar
              </h1>
            </button>
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
                onChange={insertarArchivo}
              />
              <h1 className="text-sm md:text-xs lg:text-xs xl:text-base">
                Subir documento
              </h1>
            </button>

            <label className="appearance-none w-[64%] text-normal border border-greyOmega rounded-lg   mx-4 my-5  leading-tight focus:outline-none h-[40px] p-2 flex justify-between ">
              <div className="overflow-auto">{data.archivo?.name}</div>
              <div className="text-right flex justify-end">
                <button
                  type="button"
                  className="text-greyOmega"
                  onClick={borrarArchivos}
                >
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
        </form>
      </div>
    </div>
  )
}

export default FormBanda
