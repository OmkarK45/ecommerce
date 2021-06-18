import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a
import { Carousel } from "react-responsive-carousel"
import { imgLinks } from "./imgLinks"
import { useState } from "react"
import Spinner from "components/ui/Spinner"
export default function Slideshow() {
  const [image, setImageURL] = useState("")

  function handleImageLoad() {
    setImageURL("loaded")
  }
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      emulateTouch
      swipeable
    >
      {imgLinks.map((img, index) => {
        return (
          <div key={index} className="h-[200px] md:h-[280px] overflow-hidden">
            {!image && (
              <div className="flex items-center justify-center h-full bg-gray-100">
                <Spinner />
              </div>
            )}
            <img
              src={img.url}
              className="object-cover object-center h-full max-w-full"
              onLoad={handleImageLoad}
            />
          </div>
        )
      })}
    </Carousel>
  )
}
