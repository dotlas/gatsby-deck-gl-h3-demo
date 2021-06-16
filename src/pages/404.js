/**
 * A simple 404 error handler.
 */

import { Link } from "gatsby"
import React from "react"

const ErrorPage = () => (
  <div>
    This is not the page you're looking for! Go <Link to="/">Home</Link>
  </div>
)

export default ErrorPage
