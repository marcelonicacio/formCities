import { AppRoutes } from './routes'
import { BrowserRouter } from 'react-router-dom'

export const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
       <AppRoutes/>
      </div>
    </BrowserRouter>
  )
}

