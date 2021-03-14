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


export default function ReactSelect() {
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [key, setKey] = useState()
  const [keyLn, setKeyLn] = useState()

  useEffect(() => {
      if (type.value == "Mangá") {
        setKeyLn(false);
        setKey(true);
      } if (type.value == "Light Novel") {
        setKey(false);
        setKeyLn(true);
      }
    }, [type]);

    function handleSend() {
      setType('')
      setTitle('')

      window.location.reload();
    }

   
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

  return(
    <div className={"miniContainer"}>
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
        <button className={"buttonAnimated"} onClick={handleSend}>
          Baixar
        </button>
      ) : (
        <button className={"buttonDisable"}>
          Baixar
        </button>
      )}

    </div>
  )
} 