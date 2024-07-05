import Image from 'next/image'
import Link from 'next/link'
import menu from '../assets/icons/menuburger.svg'
import MenuMobile from './MenuMobile'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Navbar = () => {
  const [toggle, setToggle] = useState(true)
  const router = useRouter()

  return (
    <div className="bg-[#FE0E06] w-full py-2 sticky inset-0 m-auto shadow-lg flex px-5 z-[999]  items-center">
      <div className="flex justify-between w-full max-w-[1500px] mx-auto items-center">
        <div
          className="w-full relative z-40 cursor-pointer"
          onClick={() => router.push('/')}
        >
          <Link href="/">
            <a className={`text-black font-bold text-3xl`}>Infernal Fest</a>
          </Link>
        </div>

        <div className="lg:grid grid-cols-4 gap-2 items-end  hidden justify-between w-full ">
          <Link href="/">
            <a
              className={`${
                router.pathname === '/'
                  ? ' underline underline-offset-8 font-semibold'
                  : 'text-black font-semibold hover:text-white transition-colors'
              } text-normal flex-initial w-4`}
            >
              Inicio
            </a>
          </Link>
          <Link href="/seguros">
            <a
              className={`${
                router.pathname === '/seguros'
                  ? 'underline underline-offset-8 font-semibold'
                  : 'text-black font-semibold hover:text-white transition-colors'
              } text-normal  w-4`}
            >
              Artistas
            </a>
          </Link>
          <Link href="/asesorias">
            <a
              className={`${
                router.pathname === '/asesorias'
                  ? 'underline underline-offset-8 font-semibold'
                  : 'text-black font-semibold hover:text-white transition-colors'
              } text-normal  w-4`}
            >
              Programacion
            </a>
          </Link>

          <Link href="/contacto">
            <a
              className={`${
                router.pathname === '/asesorias'
                  ? 'underline underline-offset-8 font-semibold'
                  : 'text-black font-semibold hover:text-white transition-colors'
              } text-normal w-4`}
            >
              Contacto
            </a>
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
