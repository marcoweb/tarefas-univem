import { TarefasContextProvider } from "./common/contexts/TarefasContext"
import InputForm from "./components/InputForm"

const App = () => {
    return (
        <TarefasContextProvider>
            <InputForm />
        </TarefasContextProvider>
    )
}

export default App