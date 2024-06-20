'use client'
import React from 'react'
import Navbar from '@/Components/Navbar'
import Sidebar from '@/Components/Sidebar'

export default function App() {
    return(
        <div className='w-full'>
            <Navbar/>
            <Sidebar/>
        </div>
    )
}