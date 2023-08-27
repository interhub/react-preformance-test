import React, {useCallback, useEffect, useState} from 'react'

const arr = new Array(5).fill(1)

const Example1 = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('main counter is updated', count)
  })

  const onClickItem = useCallback((i: number) => {
    console.log('on click item main', i)
  }, [])

  const handleIncrease = () => {
    setCount((s) => s + 1)
  }

  return <div>
    <p>Functional list items <b>without</b><br/> any memo wrapper</p>
    <div>
      <IncreaseButton onClick={handleIncrease}/>
      <DisplayView count={count}/>
      <SimpleChildViewTitle/>
    </div>
    <div>
      {arr.map((_, i) => {
        return <ListItem index={i} onClick={onClickItem} key={i}/>
      })}
    </div>
  </div>
}

const SimpleChildViewTitle=()=>{
  useEffect(() => {
    console.log('SimpleChildViewTitle is updated' )
  })
  return <div>
    SimpleChildViewTitle
  </div>
}

const IncreaseButton=({onClick}: { onClick: () => void })=>{
  useEffect(() => {
    console.log('IncreaseButton is updated' )
  })

  return <div>
    <button onClick={onClick}>
      IncreaseButton
    </button>
  </div>
}

const DisplayView = ({count}: { count: number }) => {
  useEffect(() => {
    console.log('DisplayView is updated', count)
  })
  return <div>
    <h1>
      DisplayView: {count}
    </h1>
  </div>
}

const ListItem = ({index, onClick}: { index: number, onClick: (index: number) => void }) => {
  const [count, setCount] = useState(index)


  const handleClick = () => {
    onClick(index)
    setCount((c) => c + 1)
  }

  useEffect(() => {
    console.log('ListItem updated', index)
  })

  return <div>
    Functional ListItem #{count}
    <button onClick={handleClick}>Improve</button>
  </div>
}

export default Example1
