import Image from 'next/image'

const WeFirstSection = () => {
  return (
    <div className="w-full container flex flex-col lg:flex-row flex-wrap lg:pt-14 md:flex-nowrap justify-center items-center xl:justify-between xl:gap-x-20 mx-auto pb-10 lg:px-10">
      <div className="max-w-full m-auto flex justify-center items-center xl:mx-0 my-10 xl:my-0 w-full">
        <div className="mx-2 relative w-[320px] sm:w-[330px] lg:w-[351px] xl:w-[586px] h-[192px] sm:h-[214px] lg:h-[236px] xl:h-[341px] before:absolute before:top-[-5%]  before:rounded-2xl before:left-[-5%] before:w-full before:h-full before:bg-redOmega2">
          <Image
            alt=""
            src={'/nosotros/Nosotros.jpg'}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
      </div>
      <div className="w-[80%] md:mt-0 xl:w-[100%] flex flex-col flex-end space-y-5">
        <h1 className="text-redOmega text-large xl:text-extraLarge tracking-[0.2em] text-center lg:text-left uppercase font-bold">
          ¿Quienes somos?
        </h1>
        <p className="text-white text-small font-normal xl:text-[16px] text-justify leading-[22px]">
          El Infernal Fest es un festival anual de música que tiene lugar en
          Bogotá durante el mes de octubre, coincidiendo con las celebraciones
          de Halloween. Este evento está abierto a todo público y se destaca por
          su ambiente inclusivo y festivo.
          <br />
          <br />
          Como un festival sin ánimo de lucro, nuestro principal objetivo es
          apoyar y ofrecer una plataforma a bandas emergentes de diversos
          géneros, brindándoles la oportunidad de mostrar su talento y conectar
          con el público local. Además, El Infernal Fest es un punto de
          encuentro donde la comunidad puede disfrutar de buena música,
          compartir momentos con amigos y familiares, degustar dulces, bailar y
          explorar una variedad de artesanías locales.
          <br />
          <br />
          Nos enorgullecemos de ser una comunidad punk rockanrolera que trabaja
          para crear espacios únicos y significativos para todos. Nuestro
          festival es una celebración de la creatividad, la diversidad y la
          buena musica.
        </p>
      </div>
    </div>
  )
}

export default WeFirstSection
