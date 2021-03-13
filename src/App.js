import React from 'react';
import { Button } from './Button'

function App() {
  const [count, setCount] = React.useState(0);
  
  const handleClick = () => {
    setCount(count + 1)
  }

  return(
    <Button
      color={{ initial: 'coral', bp1: 'purple' }}
      onClick={handleClick}>{count}
    </Button>
  )
}

export default App;
