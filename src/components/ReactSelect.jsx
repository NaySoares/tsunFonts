import React, { useState, useEffect } from 'react';
import Select from 'react-select';

import '../styles/reactSelect.scss';


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
];

const listLink = [
  { id: 'Disciple', link: 'My Disciple Died Yet Again'},
  { id: 'Hataraku', link: 'Hataraku Maou-sama'},
  { id: 'Goblins', link: 'Matador de Goblins'},
  { id: 'Mushoku', link: 'Mushoku Tensei'},
  { id: 'Marcha', link: 'Marcha Mortal'},
  { id: 'Elaina', link: 'Bruxa Errante, a Jornada de Elaina'},
  { id: 'Eminencia', link: 'A Eminência nas Sombras'},
  { id: 'Outer', link: 'Outer Ragna'},
  { id: 'Nobunaga', link: 'Um Trabalho Misterioso Chamado Oda Nobunaga'},
  { id: 'Heroi', link: 'Como Um Herói Realista Reconstruiu o Reino'},
  { id: 'Elfa', link: 'Uma Elfa Lésbica e Uma Princesa Amaldiçoada'},
  { id: 'Apprentice', link: 'My Apprentice: Game Over Again!'},
  { id: 'Regressor', link: 'Past Life Regressor'},
  { id: 'Judge', link: 'Judge Lee Han Young'},
  { id: 'Rasud', link: 'Rasud'},
  { id: 'Apparedan', link: 'https://drive.google.com/u/1/uc?id=15TmvQtHNY7fgfLeFvcxETQZRwngABg2h&export=download'},
  { id: 'Bruxinha', link: 'Hai Kaburi no Majo'},
  { id: 'Tearmoon', link: 'Tearmoon Teikoku Monogatari'},
  { id: 'Shadow', link: 'Kage no Jitsuryokusha ni Naritakute'},
];


export default function ReactSelect() {
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [key, setKey] = useState()
  const [keyLn, setKeyLn] = useState()
  const [download, setDownload] = useState('')
  const [active, setActive] = useState(false)
  const [time, setTime] = useState(10)

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
      
      setDownload(urlToDownload[0].link)

      setActive(true);
    }

  return (
    <div className={"miniContainer"}>
      { active ? ( 
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
      ) : (
        <>
          <strong>Tipo</strong>
          <Select
            theme={customTheme}
            onChange={setType}
            placeholder="Selecione um tipo"
            className={"select"}
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
            <button className={"buttonAnimated"} onClick={() => handleSend(title)}>
              Baixar
            </button>
          ) : (
            <button className={"buttonDisable"}>
              Baixar
            </button>
          )}
          
          
        </>
      )}
    </div>
  )
} 