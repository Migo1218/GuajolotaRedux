import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { listarProductosAction } from '../actions/listarProductosAction'
import Banner from '../components/Banner'
import { Navbar } from '../components/Navbar'
import Search from '../components/Search'
import Superiorsection from '../components/Superiorsection'

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listarProductosAction())
    }, [dispatch])
    return (
        <div>
            <Superiorsection/>
            <Banner/>
            <Search/>
            <Navbar/>
        </div>
    )
}

export default Home
