import React from 'react'
 import "../styles/Prefooter.css"
 import "../styles/Footer.css"

// const instaicon= <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512">
// <path style="fill:#010101; stroke:none;" d="M0 0L0 512L512 512L512 0L0 0z"/></svg>

// const youtubeicon =<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512">
// <path style="fill:#010101; stroke:none;" d="M0 0L0 512L512 512L512 0L0 0z"/>
// </svg>

// const twittericon= <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512">
// <path style="fill:#ffffff; stroke:none;" d="M0 0L0 314L0 390C0 395.239 -2.74939 412.525 1.6034 415.972C8.89938 421.751 29.368 417.421 38 417.039C81.5574 415.115 116.789 397.55 153 375L153 374C111.584 373.145 66.7628 341.197 57 300C72.1284 301.912 85.9707 301.915 101 299L101 298C52.8762 290.893 20 239.783 20 194C35.506 200.456 49.2752 204.886 66 207L66 206C35.7534 187.081 17.8052 147.212 21.1698 112C22.7399 95.5675 28.7569 81.9953 35 67C51.332 79.4902 63.5548 97.8157 80 110.789C127.581 148.326 189.4 176 251 176C250.208 157.556 247.761 141.131 253.67 123C271.741 67.5445 330.587 34.6456 387 52.7462C398.079 56.3009 408.674 62.2715 418 69.1559C422.305 72.3336 427.381 79.7571 433 80.0162C439.191 80.3016 447.176 76.9214 453 74.9992C468.785 69.7894 483.663 63.4552 498 55C492.418 78.5534 474.506 98.6903 455 112L455 113L497 102.656L510.972 96.3009L512 70L512 0L0 0z"/>
// <path style="fill:#010101; stroke:none;" d="M251 176C194.526 175.994 134.397 151.654 90 117.765C76.7708 107.667 64.7509 96.7698 53 85C47.3322 79.3231 42.1748 70.6325 35 67C15.2796 100.787 16.6755 143.957 37.1937 177C43.8666 187.746 54.0734 200.95 66 206L66 207L20 194C20 238.639 51.9237 293.715 101 298L101 299L57 300C63.2705 341.865 113.199 373.67 153 374L153 375C139.52 380.698 127.418 391.25 114 397.742C81.6704 413.383 35.7312 424.507 0 416C5.99078 426.635 28.0654 434.154 39 438.85C78.8016 455.943 119.775 464 163 464C289.288 464 398.388 386.806 441.947 268C450.645 244.276 456.397 219.148 458.83 194C459.965 182.271 456.507 164.853 460.603 154.015C463.015 147.633 472.101 143.239 477 138.829C489.374 127.692 505.894 112.874 512 97L480 107.572L455 113L455 112C474.591 102.68 494.743 76.7463 498 55C478.589 63.1243 455.269 80.4191 433.17 79.794C427.501 79.6336 419.773 69.5876 415 66.3441C402.707 57.9898 388.721 51.7494 374 49.2855C326.564 41.3459 276.026 65.151 257.453 111C248.574 132.919 249.187 153.033 251 176z"/>
// <path style="fill:#ffffff; stroke:none;" d="M511 99C501.106 112.815 490.299 125.205 478 136.961C473.026 141.715 463.137 146.471 460.603 153.039C458.36 158.854 460 167.822 460 174C459.999 185.265 458.757 196.882 456.92 208C450.324 247.915 437.159 286.171 416.396 321C350.912 430.848 224.091 482.532 100 458.196C76.9981 453.685 54.0924 445.947 33 435.742C21.7835 430.314 11.4061 422.915 0 418L0 512L512 512L512 220L512 136C512 125.366 515.108 108.789 511 99z"/>
// </svg>

// const facebookicon=<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512">
// <path style="fill:#010101; stroke:none;" d="M0 0L0 512L512 512L512 0L0 0z"/>
// </svg>

const repeatIcon=<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M22.55 41.9q-6.15-.5-10.35-5.05Q8 32.3 8 26.05q0-3.85 1.775-7.25t4.975-5.55l2.15 2.15q-2.8 1.65-4.35 4.525Q11 22.8 11 26.05q0 5 3.3 8.65 3.3 3.65 8.25 4.2Zm3 0v-3q5-.6 8.25-4.225 3.25-3.625 3.25-8.625 0-5.45-3.775-9.225Q29.5 13.05 24.05 13.05h-1l3 3-2.15 2.15-6.65-6.65L23.9 4.9l2.15 2.15-3 3h1q6.7 0 11.35 4.675 4.65 4.675 4.65 11.325 0 6.25-4.175 10.8Q31.7 41.4 25.55 41.9Z"/></svg>

const shieldIcon=<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M25.05 31.5q1.75 0 3.4-.725t2.95-2.125q.3-.35.275-.55-.025-.2-.475-.3-1.95-.4-3.7-1.575-1.75-1.175-2.9-3.075-1.05-1.8-1.25-3.875-.2-2.075.5-4.025.15-.45-.05-.6-.2-.15-.7-.05-3.1.7-4.875 3.125T16.45 23q0 3.55 2.5 6.025 2.5 2.475 6.1 2.475ZM24 43.95q-7-1.75-11.5-8.125T8 21.85V9.95l16-6 16 6v11.9q0 7.6-4.5 13.975T24 43.95Zm0-3.1q5.75-1.9 9.375-7.175T37 21.85v-9.8l-13-4.9-13 4.9v9.8q0 6.55 3.625 11.825Q18.25 38.95 24 40.85ZM24 24Z"/></svg>

const mapIcon=<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M22 34q-.35 0-.6-.2t-.35-.5q-.7-2.1-1.7-3.5t-2-2.7q-1-1.3-1.675-2.7Q15 23 15 21q0-2.9 2.05-4.95Q19.1 14 22 14q2.9 0 4.95 2.05Q29 18.1 29 21q0 2-.675 3.4t-1.675 2.7q-1 1.3-2 2.7-1 1.4-1.7 3.5-.1.3-.35.5-.25.2-.6.2Zm0-5.6q.45-.7.9-1.3.45-.6.85-1.15 1.15-1.5 1.7-2.5T26 21q0-1.65-1.175-2.825Q23.65 17 22 17q-1.65 0-2.825 1.175Q18 19.35 18 21q0 1.45.55 2.45.55 1 1.7 2.5.4.55.85 1.15.45.6.9 1.3Zm0-4.9q1.05 0 1.775-.725.725-.725.725-1.775 0-1.05-.725-1.775Q23.05 18.5 22 18.5q-1.05 0-1.775.725Q19.5 19.95 19.5 21q0 1.05.725 1.775.725.725 1.775.725Zm.15 18.7q-7.6 0-12.9-5.3-5.3-5.3-5.3-12.9 0-3.8 1.425-7.1t3.9-5.775q2.475-2.475 5.775-3.9 3.3-1.425 7.1-1.425t7.1 1.425q3.3 1.425 5.775 3.9 2.475 2.475 3.9 5.775 1.425 3.3 1.425 7.1v.9l3.5-3.5 2.1 2.1-7.1 7.1-7.1-7.1 2.1-2.1 3.5 3.5V24q0-6.25-4.475-10.725T22.15 8.8q-6.25 0-10.725 4.475T6.95 24q0 6.25 4.475 10.725T22.15 39.2q2.85 0 5.525-1.075Q30.35 37.05 32.35 35.2l2.15 2.15q-2.4 2.25-5.65 3.55-3.25 1.3-6.7 1.3ZM22 21Z"/></svg>

const Footer = ({footer}) => {
  return (
    <>
    <div className="PreFooter">
      <div>
        {repeatIcon}
        <p> <b>Hassle-free replacement</b> <br/>10-day easy replacement policy on mi.com</p>
      </div>
      <div>
        {shieldIcon}
        <p> <b>Vast service network</b> <br/>We support Cards, Wallets, EMI and COD</p>
      </div>
      <div>
        {mapIcon}
        <p> <b>Vast service network</b> <br/>1000 Mi service-centers across 600 cities</p>
      </div>
    </div>

<div className="PreFooter2">
  <div><p>LET'S STAY IN TOUCH</p><span>Get updates on sale specials and more</span></div>
  <div>
    <div>
      <input type="email" name='email' placeholder='Enter Email Address'/>
      <button> 〉</button>
    </div>
      <span>Thanks. You're on our email list for special offers.</span>

    
  </div>
  <div>
    <p> FOLLOW MI</p>
    <span>We want to hear from you!</span>
  </div>
  {/* <div>
    {facebookicon}{youtubeicon}{instaicon}{twittericon}
  </div> */}
</div>
<div className="footer">
  <div>
    <p>SUPPORT</p>
    {footer.support.map((item,index)=>(
        <a key={item.url} href={item.url}>{item.name}</a>
      ))}
  </div>
  <div>
    <p>SHOP AND LEARN</p>
    {footer.shopAndLearn.map((item,index)=>(
        <a key={item.url} href={item.url}>{item.name}</a>
      ))}
  </div>
  <div>
    <p>RETAIL STORE</p>
    {footer.retailStore.map((item,index)=>(
        <a key={item.url} href={item.url}>{item.name}</a>
      ))}
  </div>
  <div>
    <p>ABOUT</p>
    {footer.aboutUS.map((item,index)=>(
        <a key={item.url} href={item.url}>{item.name}</a>
      ))}
  </div>
  <div>
    <p>CONTACT US</p>
    {footer.contactUs.map((item,index)=>(
        <a key={item.url} href={item.url}>{item.name}</a>
      ))}
  </div>
  <div>
    <div>Chat with our Virtual AI Bot  (24/7 Live Agent Support)</div>
    <button>CHAT NOW</button>
  </div>
  </div>
  <div className='footerBorder'>
    <div>Copyright 2010-2021 Xiomi. All rights reserved</div>
  </div>


</>
  )
}

export default Footer