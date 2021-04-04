import Button from "./../ui/Button/Button"
export default function EmptySearchResult({ query }) {
  return (
    <div className="flex flex-col items-center justify-center">
      Nothing found for the search query :
      <p className="font-bold">&quot;{query}&quot;</p>
      <Button variant="primary">Return to store</Button>
    </div>
  )
}
