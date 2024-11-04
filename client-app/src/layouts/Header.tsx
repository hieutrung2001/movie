import React from 'react'
import './assets/Header.css'
import useHooks from './hooks/useHooks'

const Header = () => {
  const {
    genres
  } = useHooks()

  console.log(genres)

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark bg-gradient">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">Trang chủ</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">HH 3D Trung Quốc</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link dropdown">Thể loại</a>
            <ul className="dropdown-menu">
              {genres && genres.map((v:any, i:any) => {
                return <li key={i}><a href="#">{v.name}</a></li>
              })}
            </ul>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Lịch chiếu</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Mới cập nhật</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Hoàn thành</a>
          </li>
          <li className="nav-item">
            <a href="/admin/login" className="nav-link">Đăng nhập</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Đăng ký</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header