export function List({ children }) {
  return <ul className="divide-y divide-gray-200">{children}</ul>
}
export function ListItem({ children }) {
  return <li className="px-4 py-4 sm:px-0">{children}</li>
}
