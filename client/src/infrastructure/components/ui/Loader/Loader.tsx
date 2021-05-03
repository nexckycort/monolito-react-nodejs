import React, { FC, HTMLAttributes } from 'react'
import cn from 'classnames'

import s from './Loader.module.scss'

interface Props extends HTMLAttributes<HTMLElement> {
  show: boolean
}

const Loader: FC<Props> = ({ children, show }) => {
  const rootClassName = cn(s.loader, show ? s.loaderShow : '')

  return <div className={rootClassName}>{children}</div>
}

export default Loader
