import clsx from "clsx"

export default function Skeleton({ width = "auto", height }) {
  return (
    <div
      className={clsx(
        "bg-gray-300 rounded-tr rounded-tl animate-pulse mx-auto",
        width && width,
        height && height
      )}
    ></div>
  )
}
