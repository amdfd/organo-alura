import './Forms.css'
import { useState } from 'react'
import Textfield from '../Textfield'
import DropdownList from '../DropdownList'
import Button from '../Button'

const Forms = (props) => {

  const [name, setName] = useState('')
  const [job, setJob] = useState('')
  const [picture, setPicture] = useState('')
  const [team, setTeam] = useState('')

  const whenSaved = (event) => {
    event.preventDefault()
    props.onEmployee({
      name,
      job,
      picture,
      team,
    })
    setName('')
    setJob('')
    setPicture('')
    setTeam('')
  }

  return (
    <section className='forms'>
      <form onSubmit={whenSaved}>
      <h2>Preencha os dados para criar o card do colaborador</h2>
      <Textfield 
        required={true} 
        label="Nome" 
        placeholder="Digite o seu nome" 
        inputValue={name} 
        whenChanged={inputValue => setName(inputValue)} />

      <Textfield 
        required={true} 
        label="Cargo" 
        placeholder="Digite o seu cargo"
        inputValue={job}
        whenChanged={inputValue => setJob(inputValue)} />

      <Textfield 
        label="Imagem" 
        placeholder="Digite o endereço da imagem"
        inputValue={picture}
        whenChanged={inputValue => setPicture(inputValue)} />

      <DropdownList 
        label="Time" 
        items={props.teams}
        value={team}
        whenChanged={value => setTeam(value)} />
      <Button>Criar Card</Button>
      </form>
    </section>
  )
}

export default Forms