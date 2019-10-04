import React, { useEffect } from 'react'
import { useNotify } from 'reactive-loadable-component'

console.log('file C loaded')

export default () => {
  const [status, notify] = useNotify()
  console.log('status : ', status)

  useEffect(() => {
    const timeHandler = setTimeout(() => {
      notify('c-loaded')
    }, 2000)

    return () => {
      clearTimeout(timeHandler)
    }
  }, [])

  return <div>file C</div>
}