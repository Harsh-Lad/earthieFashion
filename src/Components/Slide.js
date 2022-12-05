import React from 'react'
import Image from 'next/image'

function Slide(image) {
  return (
    <div className="card" style="width: 18rem;">
  <Image src={image} className="card-img-top" width={350} height={250} />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  )
}

export default Slide