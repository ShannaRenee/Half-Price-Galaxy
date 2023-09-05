import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import RealEstate from './pages/realEstate';
import Travel from './pages/travel';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';
import GenMerch from './pages/GenMerch';
import Profile from './pages/profile';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});
const pages = ['market', 'realEstate', 'travel', 'Login', 'signup'];
function App() {
  const [currentPage, setCurrentPage] = useState('realEstate');
  return (
  <div className="wrapper">
    <Header
      pages={pages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
    <main>
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
              <Route
                path="/travel"
                element={<Travel />}
              />
              <Route
                path="/signup"
                element={<SignUp />}  
              />
              <Route
                path="/market"
                element={<GenMerch />}
              />
              <Route
                path="/profile"
                element={<Profile />}
              />              
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </main>
    <Footer />
  </div>
  );
}
export default App;