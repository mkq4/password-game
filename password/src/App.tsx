import './App.css'
import { Input } from './components/Input'
import { Message } from './components/Message'

function App() {

  return (
    <main>
      <Input className='p-3 text-2xl w-[350px] border-2 rounded-2xl'/>
      <div>
        <Message step={1} text={"Password should be more then 10 symbols"}/>
      </div>
    </main>
  )
}

export default App
