import "nprogress/nprogress.css"
import "./routeStyles.css"
import nprogress from "nprogress"
import { useEffect, useState } from "react"
import { Route } from "react-router-dom"

export default function FancyRoute(props) {
  useState(nprogress.start())
  useEffect(() => {
    nprogress.done()
    return () => nprogress.start()
  })
  return <Route {...props} />
}
