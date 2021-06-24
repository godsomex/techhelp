/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Listing.css';
import Logo from './default-user-image.png';
import GOC from './IMG_7059.JPG';
import Jude from './IMG_7582.jpg';

function Listing() {
    return (
        <>
    <nav className="product-filter">
      <h1>Developers</h1>

      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>
          <select>
            <option value="/">All Developers</option>
          </select>
        </div>

        <div className="collection-sort">
          <label>Sort by:</label>
          <select>
            <option value="/">Featured</option>
            <option value="/">Framework</option>
          </select>
        </div>
      </div>
    </nav>

    <section className="products">
      <div className="product-card">
        <div className="product-image">
          <a href="default.asp">
            <img src={GOC} alt="Godspower Chidozie" />
          </a>
        </div>
        <div className="product-info">
          <h5>Godspower Chidozie</h5>
          <h6>Developer</h6>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <a href="default.asp">
            <img src={Jude} alt="Jude Miracle" />
          </a>
        </div>
        <div className="product-info">
          <h5>Jude Miracle</h5>
          <h6>Developer</h6>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <a href="default.asp">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="product-info">
          <h5>Ayo Otutuloro</h5>
          <h6>Developer</h6>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <a href="default.asp">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="product-info">
          <h5>Laura Dixon</h5>
          <h6>Developer</h6>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <a href="default.asp">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="product-info">
          <h5>Henry Duncan</h5>
          <h6>Developer</h6>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <a href="default.asp">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="product-info">
          <h5>Megan Payne</h5>
          <h6>Developer</h6>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <a href="default.asp">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="product-info">
          <h5>Julie Lawrence</h5>
          <h6>Developer</h6>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <a href="default.asp">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="product-info">
          <h5>Diana Dean</h5>
          <h6>Developer</h6>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <a href="default.asp">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="product-info">
          <h5>Craig Estrada</h5>
          <h6>Developer</h6>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <a href="default.asp">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="product-info">
          <h5>Joshua James</h5>
          <h6>Developer</h6>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <a href="default.asp">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="product-info">
          <h5>Sarah Baker</h5>
          <h6>Developer</h6>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <a href="default.asp">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="product-info">
          <h5>Roy Nelson</h5>
          <h6>Developer</h6>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <a href="default.asp">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="product-info">
          <h5>Nathan West</h5>
          <h6>Developer</h6>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <a href="default.asp">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="product-info">
          <h5>Melissa Bradley</h5>
          <h6>Developer</h6>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <a href="default.asp">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="product-info">
          <h5>Pamela Davidson</h5>
          <h6>Developer</h6>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <a href="default.asp">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="product-info">
          <h5>Janet Watson</h5>
          <h6>Developer</h6>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <a href="default.asp">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="product-info">
          <h5>Karen Morales</h5>
          <h6>Developer</h6>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <a href="default.asp">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="product-info">
          <h5>Donald Chen</h5>
          <h6>Developer</h6>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <a href="default.asp">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="product-info">
          <h5>Jose Bowman</h5>
          <h6>Developer</h6>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <a href="default.asp">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="product-info">
          <h5>Kathryn Johnson</h5>
          <h6>Developer</h6>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <a href="default.asp">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="product-info">
          <h5>Richard Baker</h5>
          <h6>Developer</h6>
        </div>
      </div>
    </section>
    </>
    );
}

export default Listing;