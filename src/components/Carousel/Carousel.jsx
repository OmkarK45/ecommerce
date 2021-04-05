import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a
import { Carousel } from "react-responsive-carousel"
export default function Slideshow() {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      emulateTouch
      swipeable
      dynamicHeight
    >
      <div className="h-[918px]">
        <img src="https://unsplash.it/400/200" className="opacity-[35]" />
      </div>
      <div>
        <img src="https://unsplash.it/400/200" />
      </div>
      <div>
        <img src="https://unsplash.it/400/200" />
      </div>
    </Carousel>
  )
}
