import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import Aleatorio from './components/Aleatorio'

// import MinMax from './components/MinMax'
// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro'

// function App(){ //função com letra maiscúla representa um componente (React)
//     return <Text>Primeiro Componente</Text>
// }

export default () => (
    <SafeAreaView style={style.App}> 

        <Aleatorio min={1} max={60}/>
        {/* // passa os parametros como string */}
        {/* <MinMax min="3" max="20"/> */}
        
        {/* // passa os parametros como inteiro */}
        {/* <MinMax min={3} max={20}/> */}
        
        {/* // Outro teste */}
        {/* <CompPadrao/>
        <Comp1/>
        <Comp2/>
        <Primeiro/> */}
    </SafeAreaView>
)

const style = StyleSheet.create ({
    App: { 
        // backgroundColor: '#A00',
        flexGrow: 1, // indica que o componente pode crescer = flex: 1
        justifyContent: "center", // 
        alignItems: "center",
        padding: 20
    }

})