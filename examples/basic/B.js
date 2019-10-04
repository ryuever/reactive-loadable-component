import React, { useEffect } from 'react'
import { useNotify } from 'reactive-loadable-component'

console.log('file B loaded')

export default () => {
  const [_, notify] = useNotify()

  useEffect(() => {
    const timeHandler = setTimeout(() => {
      notify('b-loaded')
    }, 1000)

    return () => {
      clearTimeout(timeHandler)
    }
  }, [])

  return <div>file B</div>
}