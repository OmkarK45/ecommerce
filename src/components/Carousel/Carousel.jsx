import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a
import { Carousel } from "react-responsive-carousel"
import { imgLinks } from "./imgLinks"
export default function Slideshow() {
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
            <img
              src={img.url}
              className="max-w-full h-full   object-center object-cover"
            />
          </div>
        )
      })}
    </Carousel>
  )
}
