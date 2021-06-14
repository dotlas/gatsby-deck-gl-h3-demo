/**
 * A simple 404 error handler.
 */

import React from "react"
import { Link } from "gatsby"

const ErrorPage = () => (
  <div>
    This is not the page you're looking for! Go <Link to="/">Home</Link>
  </div>
)

export default ErrorPage
