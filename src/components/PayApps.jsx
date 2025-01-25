import React from 'react'
import "../css/PayApp.css"
import { Link } from 'react-router-dom'
import ScrollingMsg from './ScrollingMsg'
import LinkArrow from './Linkarrow'
const PayApps = () => {
  return (
    <div>
      <div className="cashapp-top">
      <p>Only Cashapp, paypal, Zelle, Chime and Apple pay are accepted!</p>
      </div>
      <div className="cashapp-bottom">
      <p>Use any of the channels below to ask for info on the payment app you wanna send through to get premium access!</p>
      </div>
      <div className="contact-links">
      <a href="mailto:suremeet.com@gmail.com" className="link-item email">Email <LinkArrow/></a>
      <a href="https://m.me/suremeethookup?hash=AbY9Nar2u5mc57C1&source=qr_link_share" target="_blank" rel="noopener noreferrer" className="link-item facebook">Facebook <LinkArrow/></a>
      {/* <a href="tel:+1234567890" className="link-item phone">Phone <LinkArrow/></a> */}
      <a href="https://www.snapchat.com/add/sure-meet?share_id=1HojaWjIvOM&locale=en-GB" target="_blank" rel="noopener noreferrer" className="link-item snapchat">Snapchat <LinkArrow/></a>
    </div>
      <div className="go-homes">
            <Link to="/profile" className="backs">Go Back</Link>
       </div>

    </div>
  )
}

export default PayApps// import React from 'react'// import React, { useState } from 'react';
// import '../css/PayApp.css'; // Ensure you incorporate styles for the modal as well
// import LinkArrow from './Linkarrow';

// const PayApps = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const paymentMethods = [
//     { name: 'PayPal' },
//     { name: 'CashApp' },
//     { name: 'Zelle' },
//     { name: 'Chime' },
//     { name: 'Apple Pay' },
//   ];

//   const handleOptionClick = (option) => {
//     setIsModalOpen(true); // Open modal when an option is clicked
//     setIsDropdownOpen(false); // Close dropdown after selection
//   };

//   return (
//     <div className="">
//        <div className="cashapp-top">
//       <p>Only Cashapp, paypal, Zelle, Chime and Apple pay are accepted!</p>
//       </div>
//       <div className="cashapp-bottom">
//       <p>Use any of the channels below to ask for info on the payment app you wanna send through to get premium access!</p>
//       </div>
// <div className="payment-options">
//       <button 
//         className="dropdown-button" 
//         onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//       >
//         Select Payment Method 
//         <span className="arrow">{isDropdownOpen ? '▲' : '▼'}</span>
//       </button>
      
//       {isDropdownOpen && (
//         <ul className="dropdown-list">
//           {paymentMethods.map((method, index) => (
//             <li 
//               key={index} 
//               onClick={() => handleOptionClick(method)}
//               className="dropdown-item"
//             >
//               {method.name}
//             </li>
//           ))}
//         </ul>
//       )}
      
//       {/* Modal */}
//       {isModalOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={() => setIsModalOpen(false)}>×</span>
//             <div className="modal-body">
//               <div className="contact-links">
//                 <a href="mailto:suremeet.com@gmail.com" className="link-item email">Email <LinkArrow/></a>
//                 <a href="https://m.me/suremeethookup?hash=AbY9Nar2u5mc57C1&source=qr_link_share" target="_blank" rel="noopener noreferrer" className="link-item facebook">Facebook <LinkArrow/></a>
//                 <a href="tel:+1234567890" className="link-item phone">Phone <LinkArrow/></a>
//                 <a href="https://www.snapchat.com/add/sure-meet?share_id=1HojaWjIvOM&locale=en-GB" target="_blank" rel="noopener noreferrer" className="link-item snapchat">Snapchat <LinkArrow/></a>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//     </div>
    
//   );
// };

// export default PayApps;