import React from 'react'
import "./About.css"

export default function About() {
  return (
   <>
 <div className="container">
      <h1>About React Router</h1>
      <p>
        React Router is a powerful library for handling navigation and routing in React applications.
        It allows you to define different views and link them to specific URLs, enabling the
        creation of single-page applications with multiple sections.
      </p>
      <p>
        With React Router, you can define routes using the <code>Route</code> component,
        create navigation links using the <code>Link</code> component, and handle redirects,
        nested routes, and more. It provides a declarative way to manage client-side navigation
        and enhance the user experience.
      </p>
      <p>
        To get started, install React Router using:
        <pre>
          <code>npm install react-router-dom</code>
        </pre>
        Then, set up your routes and use the <code>BrowserRouter</code> to enable routing in your application.
      </p>
      <p>
        For more information, refer to the official documentation on{' '}
        <a href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer">
          React Router
        </a>
        .
      </p>
    </div>

   </>
  )
}
