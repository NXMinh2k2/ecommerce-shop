import React from 'react'

import Grid from './Grid'
import Logo from '../assets/images/Logo-2.png'
import { Link } from 'react-router-dom'

const footerAboutLinks = [
  {
    display: "Giới thiệu",
    path: "/about"
  },
  {
    display: "Liện Hệ",
    path: "/about"
  },
  {
    display: "Tuyển dụng",
    path: "/about"
  },
  {
    display: "Tin tức",
    path: "/about"
  },
  {
    display: "Hệ thống cửa hàng",
    path: "/about"
  },
]

const footerCustomerLinks = [
  {
      display: "Chính sách đổi trả",
      path: "/about"
  },
  {
      display: "Chính sách bảo hành",
      path: "/about"
  },
  {
      display: "Chính sách hoàn tiền",
      path: "/about"
  }
]


const Footer = () => {
  return (
    <footer className='footer' style={{marginTop: '170px'}}>
      <div className="container">
        <Grid
          col = {4}
          mdCol={2}
          smCol={1}
          gap={10}
        >
          <div>
            <div className="footer__title">
              Tổng đài hỗ trợ
            </div>
            <div className="footer__content">
              <p>Liên hệ đặt hàng <strong>0123456789</strong></p>
              <p>Thắc mắc đơn hàng <strong>0123456789</strong></p>
              <p>Góp ý, Khiếu nại <strong>0123456789</strong></p>
            </div>
          </div>

          <div>
            <div className="footer__title">
              Về Yolo
            </div>
            <div className="footer__content">
              {
                footerAboutLinks.map((item, index) => {
                  return (
                    <p key={index}>
                      <Link to={item.path}>{item.display}</Link>
                    </p>
                  )
                })
              }
            </div>
          </div>

          <div>
            <div className="footer__title">
              Chăm sóc khách hàng
            </div>
            <div className="footer__content">
              {
                footerCustomerLinks.map((item, index) => {
                  return (
                    <p key={index}>
                      <Link to={item.path}>{item.display}</Link>
                    </p>
                  )
                })
              }
            </div>
          </div>

          <div className='footer__about'>
            <p>
              <Link to="/">
                  <img src={Logo} className="footer__logo" alt="" />
              </Link>
            </p>
            <p>HƯớng đến niềm vui cho khách hàng</p>
          </div>
        </Grid>
      </div>
    </footer>
  )
}

export default Footer