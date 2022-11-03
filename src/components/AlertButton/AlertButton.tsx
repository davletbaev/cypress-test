import { ReactNode } from 'react';

import styles from './AlertButton.module.css';

type AlertButtonProps = {
  message: string
  children: ReactNode
}

const AlertButton = ({ message, children }: AlertButtonProps) => {
  const handleClick = () => {
    window.alert(message)
  }
  return (
    <button className={ styles.button } onClick={ handleClick }>
      { children }
    </button>
  )
}

export default AlertButton
