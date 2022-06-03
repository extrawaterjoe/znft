import React from "react"
import Nft from "./Nft"
import { styled } from "stitches.config"

const Text = styled("p", {
  fontFamily: "$system",
  color: "blue",

  variants: {
    size: {
      1: {
        fontSize: "$1",
      },
      2: {
        fontSize: "$2",
      },
      3: {
        fontSize: "$3",
      },
    },
  },
})

const Gallery = () => {
  return (
    <div>
      <Text as="h1" size="3">
        Gallery
      </Text>
      <div>
        <Nft />
      </div>
    </div>
  )
}

export default Gallery
