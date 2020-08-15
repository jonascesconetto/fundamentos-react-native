import React from 'react'
import { Text } from 'react-native'

import Estilo from './estilo'

export default () => {
    
    console.warn('Opa!') //yellow box -> para vizualiza alguns parametros #debug
    return (
        <Text style={Estilo.fontG}> Primeiro!</Text>
    )
}