import React from 'react';
import '../styles/error.scss';

import elaina2 from '../assets/elaina2.gif';

export default function Error() {
  return(
    <div className={"modal"}>
      <img src={elaina2}></img>
      <span>O Axios não adicionou essa fonte ainda, me desculpe</span>
    </div>
  )
}