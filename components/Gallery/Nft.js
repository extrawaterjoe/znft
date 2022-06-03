import React from "react"
import { useNFT, useNFTMetadata } from "@zoralabs/nft-hooks"

const Nft = () => {
  const { data } = useNFT("0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7", "20")
  const { metadata } = useNFTMetadata(data && data.metadataURI)

  return (
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <pre>{JSON.stringify(metadata, null, 2)}</pre>
      </div>
  )
}

export default Nft
