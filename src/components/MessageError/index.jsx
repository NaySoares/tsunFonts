import React from 'react';

import elaina2 from '../../assets/elaina2.gif';

import styles from  './styles.module.scss';

export default function Error() {
  return(
    <div className={styles.modal}>
      <img src={elaina2}></img>
      <span>O Axios não adicionou essa fonte ainda, me desculpe</span>
    </div>
  )
}