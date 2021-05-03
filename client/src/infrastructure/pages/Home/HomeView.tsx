import React, { useEffect, useState } from 'react'
import { testService } from 'domain/services'

import s from './Home.module.css'

const HomeView = (): JSX.Element => {
  const [test, setTest] = useState('')

  useEffect(() => {
    testService.setTest({ test: 'ok' }).then(setTest).catch(console.error)
  })

  return (
    <div className={s.center}>
      <h1>HomeView</h1>
      <p>{test}</p>
    </div>
  )
}

export default HomeView
