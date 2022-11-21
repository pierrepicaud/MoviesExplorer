import React, { useState } from 'react'
import { image_server, server } from '../config'
import { SyntheticEvent } from 'react'
import getConfig from 'next/config'
import Link from 'next/link'
import Image from 'next/image'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

export default function LiveSearch() {
  const [searchResults, setsearchResults] = useState([])
  const [searchTerm, setsearchTerm] = useState('')
  const [formInputs, setformInputs] = useState({})

  const handleInputs = (event: SyntheticEvent) => {
    let { name, value } = event.target as HTMLInputElement
    setformInputs({ ...formInputs, [name]: value })
    setsearchTerm(value)
    search(event)
  }

  const search = async (event: SyntheticEvent) => {
    event.preventDefault()
    let movies = await fetch(
      `${server}/search/movie?api_key=${publicRuntimeConfig.API_KEY}&language=en-US&page=1&include_adult=false&query=${searchTerm}`,
    )
    movies = await movies.json()
    setsearchResults((movies as any).results)
  }
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <input
          type="text"
          className="w-[400px] rounded-lg py-1 px-3 font-mono tracking-wider"
          onChange={handleInputs}
          value={searchTerm}
        />

        {searchTerm ? (
          <div className="absolute mt-1 w-full p-2 bg-white shadow-lg rounded-bl rounded-br max-h-36 overflow-y-auto">
            <ul>
              {searchResults?.map((each: any, index) => {
                return (
                  <Link href={`/movie/${each.id}`}>
                    <li key={index} className="flex flex-row font-sans hover:bg-slate-300 p-1 rounded-md">
                      <Image
                        src={`${image_server}/t/p/w500${each.poster_path}`}
                        width={20}
                        height={20}
                        className="rounded-md"
                        alt={each.title}
                      ></Image>
                      <div className='ml-2 font-serif text-lg tracking-wide'>{each.title}</div>
                    </li>
                  </Link>
                )
              })}
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}
