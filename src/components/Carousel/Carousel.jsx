import React, { useState } from "react"
import "./Carousel.scss"

import { Button } from "reactstrap"

export const Carousel = (props) => {
  const [img, setImage] = useState(0)

  const { images } = props

  const changeImage = (e, dir) => {
    switch(dir) {
      case "left": {
        if(img == 0)
          setImage(images.length-1)
        else
          setImage(img-1)

        break;
      }
      case "right": {
        if(img == images.length-1)
          setImage(0)
        else
          setImage(img+1)
        
        break;
      }
    }
  }

  return (
    <div>
      <div className="carousel-container">
        <div className="left-section">
          <Button color="light" outline onClick={e => changeImage(e, "left")}><i className={"fas fa-arrow-left"} /></Button>
        </div>
        <img className="content" height="auto" src={images[img]} />
        <div className="right-section">
          <Button color="light" outline onClick={e => changeImage(e, "right")}><i className={"fas fa-arrow-right"} /></Button>
        </div>
      </div>
      <h4 className="text-center">{`${img+1} / ${images.length}`}</h4>
    </div>
  )
}

export default Carousel