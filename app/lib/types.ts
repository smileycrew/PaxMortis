import { StaticImageData } from "next/image"

export type commander = {
  username: string
  image: string
  rank: StaticImageData
  role: string
}

export type founder = {
  username: string
  image: StaticImageData
  rank: StaticImageData
  role: string
}

export type member = {
  username: string
  image: StaticImageData
  rank: StaticImageData
  role: string
}
