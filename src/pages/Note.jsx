import React from 'react'
import { useParams } from 'react-router-dom'

const Note = ({notes}) => {

    const {id} = useParams();

  return (
    <div>Note {id}</div>
  )
}

export default Note