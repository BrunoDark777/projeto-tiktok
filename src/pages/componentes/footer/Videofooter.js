import React from 'react'
import "./videofooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function Videofooter() {
  return (
    <div className='videoFooter'>
        <div className='videoFooter__text'>
         <h3>BrunoDark&#174;</h3>
         <p>Descrição do video</p>
         <div className='videoFooter__music'>
             <MusicNoteIcon className='videoFooter__icon' />
             <div className='videoFooterMusic__text'>
                 <p>Titulo da musica</p>
             </div>
         </div>
        </div>
        <img src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z' className='videoFooter__record' alt='imagem de vinil girando'/>
       
    </div>
  )
}

export default Videofooter