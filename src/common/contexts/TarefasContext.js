import { createContext, useContext, useState } from "react";

const TarefasContext = createContext()
TarefasContext.displayName = "Tarefas"

const TarefasContextProvider = ( {children} ) => {
    const [tarefaEmEdicao, setTarefaEmEdicao] = useState({id: 0, rotulo: ''})
    const [tarefas, setTarefas] = useState([])

    return (
        <TarefasContext.Provider value={{tarefas, tarefaEmEdicao, setTarefas, setTarefaEmEdicao}}>
            {children}
        </TarefasContext.Provider>
    )
}

const useTarefasContext = () => {
    const {tarefas, tarefaEmEdicao, setTarefas, setTarefaEmEdicao} = useContext(TarefasContext)

    function limparTarefaEmEdicao() {
        setTarefaEmEdicao({id: 0, rotulo: ''})
    }

    function salvarTarefa() {
        if(tarefaEmEdicao.id === 0) {
            tarefaEmEdicao.id = (tarefas.length === 0) ? 1 : tarefas[tarefas.length - 1].id + 1
            setTarefas(prevTarefas => [...prevTarefas, tarefaEmEdicao])
        }
        limparTarefaEmEdicao()
    }

    return {tarefas, tarefaEmEdicao, setTarefas, setTarefaEmEdicao, limparTarefaEmEdicao, salvarTarefa}
}

export { TarefasContext, TarefasContextProvider, useTarefasContext }