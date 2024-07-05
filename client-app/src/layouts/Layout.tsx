import React from 'react'
import './assets/Layout.js'

import Header from './Header'
import Content from './Content'

const Layout = (props: any) => {
	const {
		children
	} = props
	return (
		<React.Fragment>
			<Header />
			<Content>
				{children}
			</Content>
		</React.Fragment>
	)
}

export default Layout