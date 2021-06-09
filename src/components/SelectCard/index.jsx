import React, { useState, useEffect } from 'react';
import Select from 'react-select';

import styles from './styles.module.scss';

import Error from '../MessageError/Error';


const optionsType = [
  { value: 'Light Novel', label: 'Ligh Novel'},
  { value: 'Mangá', label: 'Mangá'},
];

const optionsLightNovel = [
  { value: 'Disciple', label: 'My Disciple Died Yet Again'},
  { value: 'Hataraku', label: 'Hataraku Maou-sama'},
  { value: 'Goblins', label: 'Matador de Goblins'},
  { value: 'Mushoku', label: 'Mushoku Tensei'},
  { value: 'Marcha', label: 'Marcha Mortal'},
  { value: 'Elaina', label: 'Bruxa Errante, a Jornada de Elaina'},
  { value: 'Eminencia', label: 'A Eminência nas Sombras'},
  { value: 'Outer', label: 'Outer Ragna'},
  { value: 'Nobunaga', label: 'Um Trabalho Misterioso Chamado Oda Nobunaga'},
  { value: 'Heroi', label: 'Como Um Herói Realista Reconstruiu o Reino'},
  { value: 'Elfa', label: 'Uma Elfa Lésbica e Uma Princesa Amaldiçoada'},
];

const optionsManga = [
  { value: 'Apprentice', label: 'My Apprentice: Game Over Again!'},
  { value: 'Regressor', label: 'Past Life Regressor'},
  { value: 'Judge', label: 'Judge Lee Han Young'},
  { value: 'Rasud', label: 'Rasud'},
  { value: 'Apparedan', label: 'Hare no Kuni no Apparedan'},
  { value: 'Bruxinha', label: 'Hai Kaburi no Majo'},
  { value: 'Tearmoon', label: 'Tearmoon Teikoku Monogatari'},
  { value: 'Shadow', label: 'Kage no Jitsuryokusha ni Naritakute'},
  { value: 'Hinowa', label: 'Hinowa ga Crush'},
];

const listLink = [
  { id: 'Hinowa', link: 'https://drive.google.com/u/1/uc?id=1N5LARvbaWACPO-6OaQ7WY7TShVFpvzYZ&export=download'},
  { id: 'Disciple', link: ''},
  { id: 'Hataraku', link: ''},
  { id: 'Goblins', link: 'https://drive.google.com/u/1/uc?id=1WS-GINjk06pyILnoCI2WAo6GVWNpWK3V&export=download'},
  { id: 'Mushoku', link: ''},
  { id: 'Marcha', link: ''},
  { id: 'Elaina', link: 'https://drive.google.com/u/1/uc?id=1e8bQ6EBMQSxWrkCECDPaWEXOTny7XFiR&export=download'},
  { id: 'Eminencia', link: ''},
  { id: 'Outer', link: ''},
  { id: 'Nobunaga', link: ''},
  { id: 'Heroi', link: 'https://drive.google.com/u/1/uc?id=1vr8ltNkEcYqLLvmnKpBnABbNSVZtJ2zW&export=download'},
  { id: 'Elfa', link: ''},
  { id: 'Apprentice', link: 'https://drive.google.com/u/1/uc?id=1kfG6mksdPpjYOqdGGj_XjIfpo-PX34Y5&export=download'},
  { id: 'Regressor', link: ''},
  { id: 'Judge', link: 'https://drive.google.com/u/1/uc?id=16qIkJrFIXM_ji1YcL-7M6MtkFevr4PeS&export=download'},
  { id: 'Rasud', link: 'https://drive.google.com/u/1/uc?id=1UCTzxIDdwObad3vbS30a5v-Rqq3VyWY_&export=download'},
  { id: 'Apparedan', link: 'https://drive.google.com/u/1/uc?id=15TmvQtHNY7fgfLeFvcxETQZRwngABg2h&export=download'},
  { id: 'Bruxinha', link: ''},
  { id: 'Tearmoon', link: ''},
  { id: 'Shadow', link: ''},
];


export default function ReactSelect() {
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [key, setKey] = useState()
  const [keyLn, setKeyLn] = useState()
  const [download, setDownload] = useState('')
  const [active, setActive] = useState(false)
  const [time, setTime] = useState(10)
  const [error, setError] = useState(false)

  useEffect(() => {
      if (type.value == "Mangá") {
        setKeyLn(false);
        setKey(true);
      } if (type.value == "Light Novel") {
        setKey(false);
        setKeyLn(true);
      }
    }, [type]);

    useEffect(() => {
      if (active && time > 0) {
        setTimeout(() => {
          setTime(time - 1);
        }, 1000)
      } else if (active && time == 0 ) {
        setActive(false);
        setType('')
        setTitle('')
        
        window.location.reload()
      }
    }, [active, time])

    function customTheme(theme) {
      return {
        ...theme,
        colors: {
          ...theme.colors,
          primary25: '#A2D883',
          primary: '#4F8C2C',
          primary50: '#4F8C2C',
          neutral0: 'white',
          neutral80: 'black',
        }
      }
    }

    function handleSend(title) {
      const urlToDownload = listLink.filter(url => url.id == title.value);
      
      if ( urlToDownload[0].link !== '' ) {
        setDownload(urlToDownload[0].link)

        setActive(true);
      } else {
        setError(true);
        setActive(true);
      }
    }

  return (
    <div className={styles.miniContainer}>
      { active ? ( 
        <>
          { error ? (
            <Error/>) : (
            <div className={"wait"}>
              <strong>{time}</strong>
              <span>Obrigado, o download já irá começar</span>
              { download && 
                <iframe
                  src={download}
                  style={{display: 'none'}}
                ></iframe>
              }
            </div>
          )}
        </>
      ) : (
        <> 
          <h1>Formulário</h1>
          <strong>Tipo</strong>
          <Select
            theme={customTheme}
            onChange={setType}
            placeholder="Selecione um tipo"
            className={styles.select}
            options={optionsType}
            isFocus
            isSearching
          />

          { key && (
            <>
              <strong>Mangá</strong>
              <Select
                theme={customTheme}
                onChange={setTitle}
                placeholder="Selecione uma obra"
                className={"select"}
                options={optionsManga}
                isFocus
                isSearching
                maxMenuHeight={200}
              />
            </>
          )}

          { keyLn && (
            <>
              <strong>Light Novel</strong>
              <Select
                theme={customTheme}
                onChange={setTitle}
                placeholder="Selecione uma obra"
                className={"select"}
                options={optionsLightNovel}
                isFocus
                isSearching
                maxMenuHeight={200}
              />
            </>
          )}
          
          { title ? (
            <button className={styles.buttonAnimated} onClick={() => handleSend(title)}>
              Baixar
            </button>
          ) : (
            <button className={styles.buttonDisable}>
              Baixar
            </button>
          )}

          
        </>
      )}
    </div>
  )
} 