import Image from 'next/image'
import Link from 'next/link'
import menu from '../assets/icons/menuburger.svg'
import MenuMobile from './MenuMobile'
import { useState } from 'react'
import { useRouter } from 'next/router'
import logoOmegaWhite from '../assets/images/home/infernal.png'

const Navbar = () => {
  const [toggle, setToggle] = useState(true)
  const router = useRouter()

  return (
    <div className="bg-[#FE0E06] w-full py-2 sticky inset-0 m-auto shadow-lg flex px-5 z-[999]  items-center">
      <div className="flex justify-between w-full max-w-[1900px] mx-auto px-[5vw] items-center">
        <div
          className="w-full relative z-40 cursor-pointer"
          onClick={() => router.push('/')}
        >
          <div className="relative w-[140px] h-[40px]">
            <Image src={logoOmegaWhite} layout="fill" />
          </div>
        </div>

        <div className="lg:flex gap-12 items-end  hidden justify-between">
          <Link href="/">
            <a
              className={`${
                router.pathname === '/'
                  ? ' underline underline-offset-8 font-semibold'
                  : 'text-black font-semibold hover:text-white transition-colors'
              } text-normal flex-initial w-full text-center`}
            >
              Inicio
            </a>
          </Link>
          <Link href="/seguros">
            <button
              disabled={true}
              className={`${
                router.pathname === '/seguros'
                  ? 'underline underline-offset-8 font-semibold'
                  : 'text-black font-semibold hover:text-white transition-colors'
              } text-normal w-full text-center`}
            >
              Artistas
            </button>
          </Link>
          <Link href="/asesorias">
            <button
              disabled={true}
              className={`${
                router.pathname === '/asesorias'
                  ? 'underline underline-offset-8 font-semibold'
                  : 'text-black font-semibold hover:text-white transition-colors'
              } text-normal w-full text-center`}
            >
              Programacion
            </button>
          </Link>

          <Link href="/nosotros">
            <button
              className={`${
                router.pathname === '/nosotros'
                  ? 'underline underline-offset-8 font-semibold'
                  : 'text-black font-semibold hover:text-white transition-colors'
              } text-normal w-full text-center`}
            >
              Nosotros
            </button>
          </Link>

          <Link href="/contacto">
            <button
              className={`${
                router.pathname === '/contacto'
                  ? 'underline underline-offset-8 font-semibold'
                  : 'text-black font-semibold hover:text-white transition-colors'
              } text-normal w-full text-center`}
            >
              Contacto
            </button>
          </Link>
        </div>
        <div
          onClick={() => setToggle(!toggle)}
          className=" z-50 relative flex lg:hidden p-3 cursor-pointer hover:shadow-md transition-all duration-300 hover:shadow-redOmega/60 justify-center items-center rounded-full bg-redOmega"
        >
          <Image src={menu} alt="menu" />
        </div>
        <MenuMobile toggle={toggle} setToggle={setToggle} />
      </div>
    </div>
  )
}

export default Navbar
