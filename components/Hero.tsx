import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="text-center bg-white pb-10">
      <div className="w-60 mx-auto pt-6">
        <Image
          src={'/undraw_home_cinema_l7yl.svg'}
          width={200}
          height={200}
          layout="responsive"
          alt="Watch Me Icon"
        ></Image>
      </div>
      <h1 className="text-2xl text-gray-700 uppercase font-bold">
        Welcome to Movie Explorer
      </h1>
      <p className="text-gray-500">Produce FILM feature, TELEVISION and GAME</p>
      <Link href="/contact">
        <button className="bg-gray-700 text-white py-3 px-6 rounded text-sm mt-4 transition-all duration-100 hover:text-base">
          CONTACT US
        </button>
      </Link>
    </div>
  )
}

export default Hero
