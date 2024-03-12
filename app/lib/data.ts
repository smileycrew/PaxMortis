import paxImg from "@/public/paxLogoImg.png"
import yelaImg from "@/public/yela.png"
import grimHexImg from "@/public/grimHexImg.png"
import ceroImg from "@/public/Cero.png"
import regImg from "@/public/RegulatorRep.png"
import silImg from "@/public/Silchiasruin.png"
import smileyImg from "@/public/Smiley.png"
import imperatorImg from "@/public/imperatorImg.png"

export const members = [
  {
    username: "Cero",
    image: ceroImg,
    rank: imperatorImg,
    role: "Imperator",
  },
  {
    username: "RegulatorRep",
    image: regImg,
    rank: imperatorImg,
    role: "Imperator",
  },
  {
    username: "Silchiasruin",
    image: silImg,
    rank: imperatorImg,
    role: "Imperator",
  },
  {
    username: "Smiley",
    image: smileyImg,
    rank: imperatorImg,
    role: "Imperator",
  },
] as const

export const organization = {
  logo: paxImg,
  home: yelaImg,
  home2: grimHexImg,
} as const
