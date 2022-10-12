import React from 'react'
import { useDispatch } from 'react-redux'
import { Add,Remove } from '../store and reducer/reducer/conterSlide'
const Function = () => {
    const dispatch = useDispatch()
  return (
      <div>
          <button onClick={()=>dispatch(Add({amount:10}))}>add</button>
          <button onClick={()=>dispatch(Remove({amount:20}))}>remove</button>
    </div>
  )
}

export default Function