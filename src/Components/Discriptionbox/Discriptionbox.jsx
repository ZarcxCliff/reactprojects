import React from 'react';
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
      <div className='discriptionbox'>
      <div className="descriptionbox-navigator">
         <div className="descriptionbox-nav-box">Description</div>
         <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
           <div className="descriptionbox-description">
            <p> An e-commerce website is an online platform that facilitate the buying and selling of products 
            or services over the internet and serves as a virtual marketplace where businesses and individuals 
            showcase their products , interact with customers  and conduct transactions without the nees for a
            physical presence.E-commence websites have gained immense popularity due to their conveniencey and 
          accessibility  and the global reach ther offer.</p> 
        <p>
          E-commerce websites typically display products or services on detailed descriptions , images , prices
          and any available variable(e.g, sizes , colors).Each product usually has its oen dedicated space with
          relevant informations.
        </p>
          </div>
      </div>
  )
}

export default DescriptionBox