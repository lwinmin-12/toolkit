import Show from './component/Show'
import Function from './component/Function'
import { useDispatch, useSelector } from 'react-redux'
import { toogle } from './store and reducer/reducer/toggle'

const App = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  
  
  return (<>
    <Show />
    <Function />
    {
      state.toggle && <p>hello</p>
    }
    <button onClick={()=>dispatch(toogle())}>toggle</button>
  </>
    
    )
}

export default App