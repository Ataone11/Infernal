import Image from 'next/image'
import { useState } from 'react'
import contacto from '../../assets/images/nosotros/infernalw.png'

import axios from 'axios'

import { PulseLoader } from 'react-spinners'

const FormContacto = () => {
  const [data, setData] = useState<any>({
    banda: '',
    contacto: '',
    correo: '',
    telefono: '',
    numeroIntegrantes: '',
    redSocial: '',
    reseña: '',
    genero: ''
  })

  const [sent, setSent] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
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
        'https://sheet.best/api/sheets/8cc01630-c505-4d95-973d-ca2dd243d91c',
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
        <div className="w-full flex flex-col items-start lg:mx-auto md:w-full my-5 md:my-0 lg:max-w-[530px] md:px-5">
          {sent === false ? (
            <div className="flex flex-col relative w-full px-8 md:px-0">
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
          ) : (
            <div></div>
          )}
          <div className="relative ">
            <div className="pt-8 md:pt-10 hidden lg:block xl:hidden ">
              <Image
                src={contacto}
                width={340}
                height={529}
                layout="fixed"
                className="rounded-3xl pt-5 static"
                objectFit="cover"
                objectPosition="50% 50%"
              />
            </div>

            <div className="pt-5  hidden lg:hidden md:block">
              <Image
                src={contacto}
                width={328}
                height={519}
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
                height={519}
                layout="fixed"
                className="rounded-3xl pt-5"
                objectFit="cover"
                objectPosition="50% 50%"
              />
            </div>

            <div className="pt-8 hidden lg:hidden 2xl:block">
              <Image
                src={contacto}
                width={478}
                height={520}
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
                Te has incrito Exitosamente, nos contactaremos con tigo tan
                pronto como podamos!
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
                <h1 className="font-bold mb-2 text-white">Genero musical</h1>
                <div className="flex flex-wrap mb-6 md:my-1 lg:my-3">
                  <div className="w-full">
                    <input
                      className="appearance-none block w-full  text-normal border border-greyOmega rounded-lg   py-2 px-3 leading-tight focus:outline-none "
                      name="genero"
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
                  className={` relative flex justify-center md:justify-start items-center font-myriad font-bold transition-all ease-in duration-300 md:w-[40%] align-middle text-center`}
                >
                  {error && (
                    <span className="absolute bottom-[95%] text-xs text-redOmega">
                      Hubo un error, inténtelo de nuevo
                    </span>
                  )}

                  {loading ? (
                    <PulseLoader color="#CC0000" />
                  ) : (
                    <button
                      className="btn-primary text-white mt-2 w-auto align-middle text-center my-4"
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
