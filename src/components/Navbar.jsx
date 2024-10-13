import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary bg-opacity-75">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{color:props.mode==='dark'?'white':'black'}}>TextUtils</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="/" style={{color:props.mode==='dark'?'white':'black'}}>Home</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="/" style={{color:props.mode==='dark'?'white':'black'}}>Link</a>
              </li>
              <button className="btn btn-outline-light mx-2 btn-sm' fw-bold">Login</button>
            </ul>
            <div className={`form-check form-switch ms-3 text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
              </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
