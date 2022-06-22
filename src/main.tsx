import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Event from './pages/Event'
import './styles/global.css'
import {client} from './lib/apollo'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <ApolloProvider client={client}>
    <Event />
    </ApolloProvider>


  </React.StrictMode>
)
