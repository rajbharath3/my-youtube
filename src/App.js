
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import Results from './components/Results';

export const appRouter = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: "/",
      element: <MainContainer />,
    },
    {
      path: "/watch",
      element: <WatchPage />,
    },
    {
      path: "/results",
      element: <Results />
    }
  ]
}])

function App() {
  return (
   
      <div>
        <Head />
        
       <Body />
      </div>

    
  );
}

export default App;


