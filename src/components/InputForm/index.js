import { useTarefasContext } from "../../common/contexts/TarefasContext"
import { InputPannel, InputText, InputButton } from "./styles"

const InputForm = () => {
    const {tarefaEmEdicao, setTarefaEmEdicao, limparTarefaEmEdicao, salvarTarefa} = useTarefasContext()
    return(
        <InputPannel>
            <InputButton textColor="#422424" backgroundColor="#d16666" onClick={() => limparTarefaEmEdicao()}>Limpar</InputButton>
            <InputText value={tarefaEmEdicao.rotulo} onChange={(e) => setTarefaEmEdicao(t => {
                return {id: t.id, rotulo: e.target.value}
            })}  />
            <InputButton textColor="#425024" backgroundColor="#b5d867" onClick={() => salvarTarefa()}>Salvar</InputButton>
        </InputPannel>
    )
}

export default InputForm