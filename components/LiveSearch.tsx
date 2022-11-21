import React, { useEffect, useState, useRef } from 'react'
import { image_server, server } from '../config'
import { SyntheticEvent } from 'react'
import getConfig from 'next/config'
import Link from 'next/link'
import Image from 'next/image'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

// "71661be18f2fafefa4966ae143fa2251" = "71661be18f2fafefa4966ae143fa2251"

export default function LiveSearch() {
  const [searchResults, setsearchResults] = useState([])
  const [searchTerm, setsearchTerm] = useState('')
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const [formInputs, setformInputs] = useState({})
  useEffect(() => {
    if(searchTerm == ''){
      inputRef.current.placeholder = "Input movie cannot be empty!"
      inputRef.current.classList.toggle("placeholder-red-500")
      inputRef.current.classList.toggle("border")
      inputRef.current.classList.toggle("border-red-800")
      inputRef.current.classList.toggle("border-4")
      inputRef.current.classList.toggle("focus:outline-red-800")
      inputRef.current.classList.toggle("focus:outline-4")
    }
    else{
      inputRef.current.classList.remove("placeholder-red-500")
      inputRef.current.classList.remove("border")
      inputRef.current.classList.remove("border-red-800")
      inputRef.current.classList.remove("border-4")
      inputRef.current.classList.remove("focus:outline-red-800")
      inputRef.current.classList.remove("focus:outline-4")
    }
  }, [searchTerm])

  const handleInputs = (event: SyntheticEvent) => {
    let { name, value } = event.target as HTMLInputElement
    setformInputs({ ...formInputs, [name]: value })
    setsearchTerm(value)
    search(event)
  }

  const search = async (event: SyntheticEvent) => {
    event.preventDefault()
    let movies = await fetch(
      `${server}/search/movie?api_key=${"71661be18f2fafefa4966ae143fa2251"}&language=en-US&page=1&include_adult=false&query=${searchTerm}`,
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
          ref={inputRef}
          required
        />

        {searchTerm ? (
          <div className="absolute mt-1 w-full p-2 bg-white shadow-lg rounded-bl rounded-br max-h-36 overflow-y-auto">
            <ul>
              {searchResults?.map((each: any, index) => {
                return (
                  <Link href={`/movie/${each.id}`}>
                    <li
                      key={index}
                      className="flex flex-row font-sans hover:bg-slate-300 p-1 rounded-md"
                    >
                      <Image
                        src={`${image_server}/t/p/w500${each.poster_path}`}
                        width={20}
                        height={20}
                        className="rounded-md"
                        alt={each.title}
                      ></Image>
                      <div className="ml-2 font-serif text-lg tracking-wide">
                        {each.title}
                      </div>
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
