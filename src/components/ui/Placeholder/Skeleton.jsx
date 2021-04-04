export default function Skeleton({ width = "auto", height }) {
  return (
    <div
      className={`w-${width} h-${height} bg-gray-300 rounded-tr rounded-tl animate-pulse mx-auto `}
    ></div>
  )
}
