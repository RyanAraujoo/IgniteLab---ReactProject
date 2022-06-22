import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import {client} from './lib/apollo'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>


  </React.StrictMode>
)
