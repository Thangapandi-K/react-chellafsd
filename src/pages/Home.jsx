import React, { useEffect, useState } from 'react'
import noteServices from '../services/noteServices';
import { Link, useLoaderData } from 'react-router-dom';

export const loader = async () => {
    const notes = await noteServices.getNotes();
    return notes;
}

const Home = () => {

    const notes = useLoaderData();

  return (
    <div>
        <h1>Notes</h1>
        <ul>
            {notes.map(note => (
                <li key={note.id}>
                    <Link to={`/notes/${note.id}`}> {note.title}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Home