import React from 'react'
import Link from 'next/link'
import styles from './sidebar.module.css'

function ListItems({ routes }) {
  if (routes) {
    return routes.map((r) => {
      if (!r.path) {
        return (
          <li key={r.title}>
            <h4 className="text-gray-500 uppercase font-bold">{r.title}</h4>
            <ul>
              <ListItems routes={r.routes} />
            </ul>
          </li>
        )
      } else {
        return (
          <li key={r.title}>
            <Link key={r.path} href={r.path}>
              <a className="flex py-2 pl-2 text-sm font-medium text-gray-600 transition ease-in-out duration-150">
                {r.title}
              </a>
            </Link>
          </li>
        )
      }
    })
  } else {
    return <></>
  }
}

export default function Sidebar({ routes }) {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      {routes &&
        Object.keys(routes).map((route, idx) => {
          const obj = routes[route]
          return (
            <div key={`sidebar-${idx}`}>
              <h3 className="text-gray-800 uppercase font-bold">
                {obj.title}
              </h3>
              <ul>
                <ListItems routes={obj.routes} />
              </ul>
            </div>
          )
        })}
    </nav>
  )
}