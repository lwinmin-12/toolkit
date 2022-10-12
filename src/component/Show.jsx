import React from 'react'
import { useSelector } from 'react-redux'

const Show = () => {
    const state = useSelector(state => state);
  return (
      <div>{ state.counter.value }</div>
  )
}

export default Show