import SEO from "components/SEO"
import { Button } from "components/ui"
export default function NotFound() {
  return (
    <>
      <SEO title="404 | Not Found" />
      <div className="flex flex-col justify-center items-center my-20 space-y-4">
        <h1 className="text-base md:text-lg">
          <span className="font-bold">404 </span> | Requested resource was not
          found on this website
        </h1>
        <a href="/">
          <Button size="sm">Go Home</Button>
        </a>
      </div>
    </>
  )
}
