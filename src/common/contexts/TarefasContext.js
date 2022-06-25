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
        } else {
            setTarefas(tarefas.map(item => {
                if(item.id === tarefaEmEdicao.id) {
                    item.rotulo = tarefaEmEdicao.rotulo
                }
                return item
            }))
        }
        limparTarefaEmEdicao()
    }

    function removerTarefa(id) {
        setTarefas(tarefas.filter(item => item.id !== id))
    }

    return {tarefas, tarefaEmEdicao, setTarefas, setTarefaEmEdicao, limparTarefaEmEdicao, salvarTarefa, removerTarefa}
}

export { TarefasContext, TarefasContextProvider, useTarefasContext }