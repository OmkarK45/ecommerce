import { sidebarLinks } from "../../common/defines"
import VerticalNav from "./VerticalNav"

export default function Sidebar() {
  return (
    <div
      className="h-screen z-40 absolute  flex bg-gray-100"
      style={{ minHeight: "640px" }}
    >
      <div className="flex flex-col w-64">
        <div className="flex flex-col flex-grow border-r border-gray-200  bg-white overflow-y-auto">
          <div className="flex-grow flex flex-col">
            <div className="mx-auto">
              <VerticalNav links={sidebarLinks} />
              {/* TBD Sort and Filter */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
