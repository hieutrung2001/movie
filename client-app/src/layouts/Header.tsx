import React from 'react'
import './assets/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className="header">
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
          <div className="container-fluid">
            <Link className="navbar-brand abs" to="#">Logo</Link>
            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="collapseNavbar">
              <ul className="navbar-nav">
              <li className="nav-item">
                  <Link className="nav-link" to="#">Trang chủ</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Hoạt hình 3D TQ</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Thể loại</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Lịch chiếu</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Mới cập nhật</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Hoàn thành</Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="#myAlert" data-bs-toggle="collapse">Link</Link>
                </li> */}
              </ul>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="" data-bs-target="#myModal" data-bs-toggle="modal">Đăng nhập</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="" data-bs-target="#myModal" data-bs-toggle="modal">Đăng ký</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="space"></div>
      <div className="search bg-secondary">abcd</div>
    </div>
  )
}

export default Header