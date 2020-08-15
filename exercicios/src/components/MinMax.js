import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default (props) => { //props é utilizado para passagem de parametros (propriedades)

    console.warn(props)

    return (
        <Text style={Estilo.fontG}> O valor {props.max} 
        é maior que o valor {props.min} </Text>
    )

}