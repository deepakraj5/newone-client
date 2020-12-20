import React from 'react'
import '../../styles/app.scss'
import Header from '../header/Header'
import Services from '../services/Services'
import Footer from '../footer/Footer'

const App = () => {
    return (
        <div>
            <Header />
            <Services />
            <Footer />
        </div>
    );
}

export default App