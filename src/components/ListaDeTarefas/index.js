import { useTarefasContext } from "../../common/contexts/TarefasContext"
import { ListPannel, ListItem, ListButton } from "./style"

const ListaDeTarefas = () => {
    const { tarefas, setTarefaEmEdicao, removerTarefa } = useTarefasContext()
    return (
        <ListPannel>
            {tarefas.map(item => <ListItem key={item.id} >
                <ListButton textColor="#252442" backgroundColor="#9694ce" onClick={() => setTarefaEmEdicao(item)} >Editar</ListButton>
                <ListButton textColor="#422424" backgroundColor="#d16666" onClick={() => removerTarefa(item.id)} >Remover</ListButton>
                <span>{item.rotulo}</span>
            </ListItem>)}
        </ListPannel>
    )
}

export default ListaDeTarefas