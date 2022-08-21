import Head from 'next/head'
import React, { FC, PropsWithChildren } from 'react'
import { NavBar } from '../ui/NavBar';

interface LayoutProps {
    foo?: string,
    title?: string,
}

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>
                {title ? title : 'Pockemon App'}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Pockemon app" />
            <meta name="keywords" content="pockemon, app" />
        </Head>
        {/* Navbar*/}
        <NavBar />
        <main>
            {children}
        </main>

    </>
  )
}
