import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

import residentEvil from '../../assets/images/resident.png'

import Gallery from '../../components/Gallery'
import { useDebugValue, useEffect, useState } from 'react'
import { Game } from '../Home'
import { useGetGameQuery } from '../../Services/api'

const Product = () => {
  const { id } = useParams()
  const { data: game } = useGetGameQuery(id!)

  if (!game) {
    return <h3>carregando...</h3>
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system}
          <b>Desenvolvedor:</b> {game.details.developer}
          <b>Editora:</b> {game.details.publisher}
          <b>Idiomas:</b> O jogo oferece suporte a vários idiomas, incluindo{' '}
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
