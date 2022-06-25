import { TarefasContextProvider } from "./common/contexts/TarefasContext"
import InputForm from "./components/InputForm"
import ListaDeTarefas from "./components/ListaDeTarefas"

const App = () => {
    return (
        <TarefasContextProvider>
            <InputForm />
            <ListaDeTarefas />
        </TarefasContextProvider>
    )
}

export default App