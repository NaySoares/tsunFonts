import React from "react";

import InfoCard from '../InfoCard';
import ReactSelect from '../SelectCard';

import styles from './styles.module.scss'



export function Main() {
  return (
    <div className={styles.container}> 
      <div className={styles.center}>
        <InfoCard/>   
      <div className={styles.order}>
        <ReactSelect />
      </div>
      </div>
    </div>
    )
}