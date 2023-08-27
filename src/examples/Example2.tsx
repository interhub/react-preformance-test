import React, {useCallback, useEffect, useState} from 'react'

const arr = new Array(5).fill(1)

const Example2 = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('main counter is updated', count)
  })

  const onClickItem = useCallback((i: number) => {
    console.log('on click item main', i)
  }, [])

  const handleIncrease = useCallback(() => {
    setCount((s) => s + 1)
  }, [])

  return <div>
    <p>Functional list items <b>with</b><br/> memo wrappers</p>
    <div>
      <IncreaseButton onClick={handleIncrease}/>
      <DisplayView count={count}/>
      <SimpleChildViewTitle text={'Hi!'}/>
      <SimpleChildViewTitle/>
    </div>
    <div>
      {arr.map((_, i) => {
        return <ListItem index={i} onClick={onClickItem} key={i}/>
      })}
    </div>
  </div>
}

const SimpleChildViewTitle = React.memo(({text}: { text?: string }) => {
  useEffect(() => {
    console.log('SimpleChildViewTitle is updated')
  })
  return <div>
    SimpleChildViewTitle: {text || 'none'}
  </div>
})

const IncreaseButton = React.memo(({onClick}: { onClick: () => void }) => {
  useEffect(() => {
    console.log('IncreaseButton is updated')
  })

  return <div>
    <button onClick={onClick}>
      IncreaseButton
    </button>
  </div>
})

const DisplayView = React.memo(({count}: { count: number }) => {
  useEffect(() => {
    console.log('DisplayView is updated', count)
  })
  return <div>
    <h1>
      DisplayView: {count}
    </h1>
  </div>
})

const ListItem = React.memo(({index, onClick}: { index: number, onClick: (index: number) => void }) => {
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
})

export default Example2
