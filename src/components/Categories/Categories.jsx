import React from 'react';
import './Categories.scss';
import { Link } from 'react-router-dom'


const Categories = () => {
  return (
      <div className='categories'>
          <div className="col">
              <div className="row">
                  <img src="https://images.pexels.com/photos/974964/pexels-photo-974964.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                  <button>
                      <Link to='products/1' className='link' >
                          Sale
                      </Link>
                  </button>
              </div>
              <div className="row">
                  <img src="https://images.pexels.com/photos/58592/pexels-photo-58592.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                  <button>
                      <Link to='products/1' className='link'>
                          Women
                      </Link>
                  </button>
              </div>
          </div>
          <div className="col">
              <div className="row">
                  <img src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                  <button>
                      <Link to='products/1' className='link'>
                          New Season
                      </Link>
                  </button>
              </div>
          </div>
          <div className="col col-l">
              <div className="row">
                  <div className="col">
                      <div className="row">
                          <img src="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                  <button>
                      <Link to='products/1' className='link'>
                          Men
                      </Link>
                  </button>
                      </div>
                  </div>
                  <div className="col">
                      <div className="row">
                          <img src="https://images.pexels.com/photos/1460838/pexels-photo-1460838.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                  <button>
                      <Link to='products/1' className='link'>
                          Accessories
                      </Link>
                  </button>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <img src="https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                  <button>
                      <Link to='products/1' className='link'>
                          Shoes
                      </Link>
                  </button>
              </div>
          </div>
    </div>
  )
}

export default Categories