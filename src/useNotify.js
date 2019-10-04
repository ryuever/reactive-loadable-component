import { useContext } from 'react'
import Context from './Context'

export default () => {
  const emitter = useContext(Context)
  return [emitter.status, emitter.fire.bind(emitter)]
}