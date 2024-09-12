import React from 'react'
import './assets/Layout.js'

import Header from './Header'
import { Outlet } from 'react-router-dom'
import Content from './Content'

const Layout = () => {
	return (
		<React.Fragment>
			<Header />
			<Content>
				<Outlet />
			</Content>
		</React.Fragment>
	)
}

export default Layout