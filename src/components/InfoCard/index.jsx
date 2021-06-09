import React from 'react';
import logo from '../../assets/logoTsun.png'

import styles from './styles.module.scss';

export default function InfoCard() {
  return(
    <section className={styles.infos}>
      <h1>Tsundoku Fontes</h1>
      <img src={logo} alt="logo" />
      <span>Preencha o formulário para poder baixar suas fontes</span>
      <span>Criado por Axios</span>
  </section>
  )
}