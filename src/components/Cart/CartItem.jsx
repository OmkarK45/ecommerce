import { Button } from "components/ui"
export default function CartItem() {
  return (
    <li className="px-6 py-4">
      <div className="flex items-start space-x-4">
        <img src="https://placekitten.com/100/100" className="rounded" alt="" />
        <div className="flex flex-col space-y-2">
          <h2 className="text-base font-semibold">Apple iPhone (64GB)</h2>
          <p className="text-gray-500 text-sm ">
            Apple Inc. is an American multinational technology company
            headquartered in Cupertino,
          </p>
          <p className="text-lg font-bold">Rs. 19,999</p>
          <div className="flex justify-between">
            <div className="space-x-2">
              <Button size="sm">
                <p className="text-red-500">Remove</p>
              </Button>
              <Button className="bg-red-50" size="sm">
                <p>Move To Wishlist</p>
              </Button>
            </div>
            <div className="flex space-x-2 flex-row-reverse">
              <Button size="sm">+</Button>
              <input type="text" value="1" className="w-6 pl-2" />
              <Button>-</Button>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
