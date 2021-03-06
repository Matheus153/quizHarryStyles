import React from 'react'
import StyledContainer from './styles.js'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import db from '../../../db.json'
import Widget from '../Widget';
import Input from '../Input'
import Button from '../Button'

export default function Principal() {
    const router = useRouter()
    const [name, setName] = React.useState('')
  
    return (
        <StyledContainer>
            <Widget
            as={motion.section}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            variants={{
            show: {opacity: 1, x:'0'},
            hidden: {opacity: 0, x:'-70%'}
            }}
            initial="hidden"
            animate="show"
            >
                <Widget.Header>
                <h1>{db.title}</h1>
                </Widget.Header>

                <img src={"harry-photo.jpg"} 
                style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover',
                marginTop: '20px'
                }}
                alt="principal"/>

                <Widget.Content>
                <form onSubmit= {function(infosDoEvento) {
                    infosDoEvento.preventDefault()
                    router.push(`/quiz?name= ${name}`)
                    console.log('Fazendo uma submissão pelo react')

                    // router manda para a proxima página.
                    }}>
                    <Input
                        name="nomeDoUsuario"
                        onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                        placeholder="Diz aí seu nome..."
                        value={name}
                    />
                    <Button type="submit" disabled={name.length === 0}>
                        {`Jogar`} {/* {name } */}
                    </Button>
                    </form>
                </Widget.Content>
            </Widget>
      </StyledContainer>
    )
  }