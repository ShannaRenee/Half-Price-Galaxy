import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Login from './pages/Login';
import Vote from './pages/Vote';
import NotFound from './pages/NotFound';
import RealEstate from './pages/realEstate';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route 
              path="/" 
              element={<Home />}
            />
            <Route 
              path="/login" 
              element={<Login />}
            />
           
            <Route 
              path="*"
              element={<NotFound />}
            />
            <Route
              path="/realEstate"
              element={<RealEstate />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
