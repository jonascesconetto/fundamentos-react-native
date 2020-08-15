import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default props => { 
    // Outra forma de destructing({min, max}) => {
    // a estrtura definida como default props mantem a caracteristica 
    // de props que é somente leitura

    props.min += 1000
    props.max += 2000

    const {min, max} = props // destructing copia os valores dentro de props

    const delta = max - min + 1

    const aleatorio = parseInt(Math.random() * delta) + min

    return (
        <Text style={Estilo.fontG}> 
            O valor aleatório é {aleatorio}
        </Text>
    )
}
