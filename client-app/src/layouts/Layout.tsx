import React from 'react'
import 'mdb-react-ui-kit'

const Layout = (props: any) => {
	const {
		children
	} = props
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
			<div className="container-fluid">
				<button
					data-mdb-collapse-init
					className="navbar-toggler"
					type="button"
					data-mdb-target="#navbarLeftAlignExample"
					aria-controls="navbarLeftAlignExample"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<i className="fas fa-bars"></i>
				</button>

				<div className="collapse navbar-collapse" id="navbarLeftAlignExample">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Link</a>
						</li>
						<li className="nav-item dropdown">
							<a
								data-mdb-dropdown-init
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								aria-expanded="false"
							>
								Dropdown
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li>
									<a className="dropdown-item" href="#">Action</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">Another action</a>
								</li>
								<li><hr className="dropdown-divider" /></li>
								<li>		
									<a className="dropdown-item" href="#">Something else here</a>
								</li>
							</ul>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled">Disabled</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Layout