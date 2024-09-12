import Image from 'next/image'
import howWeAre from '../../assets/images/home/pfg.jpg'

const WeFirstSection = () => {
  return (
    <div className="w-full container flex flex-col lg:flex-row flex-wrap lg:pt-14 md:flex-nowrap justify-center items-center xl:justify-between xl:gap-x-20 mx-auto pb-10 lg:px-10">
      <div className="max-w-full m-auto flex justify-center items-center xl:mx-0 my-10 xl:my-0 w-full">
        <div className="mx-2 relative w-[320px] sm:w-[330px] lg:w-[351px] xl:w-[586px] h-[192px] sm:h-[214px] lg:h-[236px] xl:h-[341px] before:absolute before:top-[-5%]  before:rounded-2xl before:left-[-5%] before:w-full before:h-full before:bg-[#6B6B6B]/10">
          <Image
            alt=""
            src={howWeAre}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
      </div>
      <div className="w-[80%] md:mt-0 xl:w-[100%] flex flex-col flex-end space-y-5">
        <h1 className="text-redOmega text-large xl:text-extraLarge tracking-[0.2em] text-center lg:text-left uppercase font-bold">
          ¿Que es el Infernal Fest?
        </h1>
        <p className="text-white text-small font-normal xl:text-[16px] text-justify leading-[22px]">
          El infernal Fest es un Festival anual de ruido urbano celebrado en
          octubre con tematica de hallowen en donde le damos la oportunidad a
          bandas emergentes, es un evento cultural para todo el publico el cual
          no se limita a un solo genero musical sino abarca toda variedad de
          generos.
          <br />
          <br />
          El infernal es un evento cultural que busca encontrar nuevos talentos
          combinado con una escenografia terrorifica para que asi se pueda
          combinar el horror y la buena musica.
          <br />
          <br />
          ya llevamos mas de 3 años haciendo este festival con exito en
          diferentes partes de bogota hecho no solo con el proposito de celebrar
          hallowen sino tambien con diferentes causas ya sean los animales,
          niños, desplazados por la violencia, etc.
        </p>
      </div>
    </div>
  )
}

export default WeFirstSection
