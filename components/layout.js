// components/layout.js

import Navbar from './navbar'
import React from "react";

export default function Layout({ children }) {
    return (
        <>
        <div className="flex">
            <Navbar />
            <main>{children}</main>
        </div>
        </>
    )
}