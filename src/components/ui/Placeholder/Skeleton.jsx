export default function Skeleton({ width = "auto", height }) {
  return (
    <div
      className={`w-${width} h-${height} bg-gray-400 rounded-tr rounded-tl animate-pulse`}
    ></div>
  )
}
