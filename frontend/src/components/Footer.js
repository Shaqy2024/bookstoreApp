import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [scrib , setScrib] = useState();
  const scrbBtn = () => {
    alert(scrib)
    localStorage.setItem("srb", (scrib))
  }
  return (
    <div>
      <footer className="footer bg-base-200 text-base-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label>
      <div className="join">
      <input type='text' placeholder='Enter your email' className='w-80 px-2  border outline-none rounded'
      value={scrib}
              onChange={(e)=>setScrib(e.target.value)}
              />
              <Link>
        <button onClick={scrbBtn} className="btn bg-pink-500 join-item">Subscribe</button>
        </Link>
      </div>
    </fieldset>
  </form>
</footer>
    </div>
  )
}

export default Footer