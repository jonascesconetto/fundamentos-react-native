import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default function () { // Função anonima -> export como default
    return <Text style={Estilo.fontG}> Comp #Oficial </Text>
}

export function Comp1() { // Função nominal precisa do nome obrigatóriamente
    return <Text style={Estilo.fontG}> Comp #01 </Text>
}

export function Comp2() {
    return <Text style={Estilo.fontG}> Comp #02 </Text>
}

// export {Comp1, Comp2}