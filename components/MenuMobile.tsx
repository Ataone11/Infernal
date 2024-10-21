import Link from 'next/link'
import { useRouter } from 'next/router'

const MenuMobile = ({ toggle, setToggle }: any) => {
  const router = useRouter()

  return (
    <div
      className={`w-full flex lg:hidden h-[100%] fixed ${
        toggle ? 'translate-x-full' : 'translate-x-0'
      } transition-all duration-300 ease-in-out top-0 z-30 left-0  bg-white/40 `}
    >
      <div className="bg-white w-[80%] h-[80%] rounded-md flex flex-col items-center justify-center m-auto shadow-2xl">
        <Link href="/home">
          <button
            onClick={() => setToggle(true)}
            className={`text-base font-semibold transition-colors py-7  flex justify-center items-center w-full ${
              router.pathname === '/home'
                ? 'text-redOmega'
                : 'text-blackOmega hover:text-redOmega transition-colors'
            } text-normal`}
          >
            Flayer
          </button>
        </Link>
        <hr className=" w-[90%]" />

        <Link href="/asesorias">
          <button
            onClick={() => setToggle(true)}
            disabled={true}
            className={`text-base font-semibold transition-colors py-7  flex justify-center items-center w-full ${
              router.pathname === '/asesorias'
                ? 'text-redOmega'
                : 'text-blackOmega hover:text-redOmega transition-colors'
            } text-normal`}
          >
            Programacion
          </button>
        </Link>
        <hr className=" w-[90%]" />

        <Link href="/artistas">
          <button
            onClick={() => setToggle(true)}
            className={`text-base font-semibold transition-colors py-7  flex justify-center items-center w-full ${
              router.pathname === '/artistass'
                ? 'text-redOmega'
                : 'text-blackOmega hover:text-redOmega transition-colors'
            } text-normal`}
          >
            Artistas
          </button>
        </Link>
        <hr className=" w-[90%]" />

        <Link
          onClick={() => setToggle(true)}
          className={`text-base font-semibold transition-colors py-7  flex justify-center items-center w-full ${
            router.pathname === '/nosotros'
              ? 'text-redOmega'
              : 'text-blackOmega hover:text-redOmega transition-colors'
          } text-normal`}
          href="/nosotros"
        >
          Nosotros
        </Link>
        <hr className=" w-[90%]" />
        <Link
          onClick={() => setToggle(true)}
          className={`text-base font-semibold transition-colors py-7  flex justify-center items-center w-full ${
            router.pathname === '/nosotros'
              ? 'text-redOmega'
              : 'text-blackOmega hover:text-redOmega transition-colors'
          } text-normal`}
          href="/riffa"
        >
          Sorteo
        </Link>
        <hr className=" w-[90%]" />

        <Link href="/contacto">
          <button
            disabled={true}
            onClick={() => setToggle(true)}
            className={`text-base font-semibold transition-colors py-7  flex justify-center items-center w-full ${
              router.pathname === '/contacto'
                ? 'text-redOmega'
                : 'text-redOmega hover:text-redOmega transition-colors'
            } text-normal`}
          >
            Inscripcion
          </button>
        </Link>
      </div>
    </div>
  )
}

export default MenuMobile
