import { Link } from "react-router-dom"
import Button from "./../ui/Button/Button"
import { useShop } from "context/shopContext"
import { handleSearch } from "./../../context/actions/shopActions"
export default function EmptySearchResult({ query }) {
  const { dispatch: shopDispatch } = useShop()
  function clearSearch() {
    shopDispatch(handleSearch(""))
  }
  return (
    <div className="flex flex-col items-center justify-center">
      Nothing found for the search query :
      <p className="font-bold">&quot;{query}&quot;</p>
      <Link to="/store">
        <Button variant="primary" onClick={clearSearch}>
          Return to store
        </Button>
      </Link>
    </div>
  )
}
