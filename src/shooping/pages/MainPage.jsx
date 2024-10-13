import React, {useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer';
import Women from '../components/Women';
import { Gents, Ladies } from '../data';


function MainPage() {
    
const [gentsFashion, setGentsFashion] = useState(Gents)
const [womenFashion, setWomenFashion] = useState(Ladies)
    return (
        <div>
            <Header/>
            <Banner/>
            <Collections gentsFashion={gentsFashion}/>
            <Women womenFashion={womenFashion}/>
            <Footer/>
        </div>
    )
}

export default MainPage
