import React from 'react'
import '../styles/Prenavbar.css'

const cartIcon =<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M14.35 43.95q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm20 0q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm-22.6-33 5.5 11.4h14.4l6.25-11.4Zm-1.5-3H39.7q1.15 0 1.75 1.05.6 1.05 0 2.1L34.7 23.25q-.55.95-1.425 1.525t-1.925.575H16.2l-2.8 5.2h24.55v3h-24.1q-2.1 0-3.025-1.4-.925-1.4.025-3.15l3.2-5.9L6.45 7h-3.9V4H8.4Zm7 14.4h14.4Z"/></svg>

const Prenavbar = () => {
  return (
    <div className="preNav">
    <div>
        <a href="https://www.mi.com/in/">MI INDIA</a><span>|</span>
        <a href="https://www.mi.com/in/store">MI STORE</a><span>|</span>
        <a href="https://www.mi.com/in/phone">PHONE</a><span>|</span>
      
    </div>
     <div>
     <a href="https://account.xiaomi.com/fe/service/login/password?_locale=en_IN&checkSafePhone=false&sid=i18n_in_pc_pro&qs=%253Fcallback%253Dhttps%25253A%25252F%25252Fstore.mi.com%25252Fin%25252Flogin%25252Fcallback%25253Ffollowup%25253D%2525252F%2525252Fwww.mi.com%2525252Fin%2525252Fuser%252526sign%25253DZGNlYWI5ZTQ3NTZhNWNhMWRmZTQyMmQ5M2Y0ZTUxNGEwNTcyMTNlNg%25252C%25252C%2526sid%253Di18n_in_pc_pro%2526_locale%253Den_IN%2526checkSafePhone%253Dfalse&callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3D%252F%252Fwww.mi.com%252Fin%252Fuser%26sign%3DZGNlYWI5ZTQ3NTZhNWNhMWRmZTQyMmQ5M2Y0ZTUxNGEwNTcyMTNlNg%2C%2C&_sign=BTyNaZEwdjR5wFJbr7req3kEHro%3D&serviceParam=%7B%22checkSafePhone%22%3Afalse%2C%22checkSafeAddress%22%3Afalse%2C%22lsrp_score%22%3A0.0%7D&showActiveX=false&theme=&needTheme=false&bizDeviceType=">SIGN IN</a><span>|</span>

     <a href="https://in.account.xiaomi.com/fe/service/register?bizDeviceType=&theme=&needTheme=false&showActiveX=false&serviceParam=%7B%22checkSafePhone%22%3Afalse%2C%22checkSafeAddress%22%3Afalse%2C%22lsrp_score%22%3A0.0%7D&_locale=en_IN&checkSafePhone=false&_sign=BTyNaZEwdjR5wFJbr7req3kEHro%3D&source=&region=IN&sid=i18n_in_pc_pro&qs=%3Fcallback%3Dhttps%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3D%252F%252Fwww.mi.com%252Fin%252Fuser%26sign%3DZGNlYWI5ZTQ3NTZhNWNhMWRmZTQyMmQ5M2Y0ZTUxNGEwNTcyMTNlNg%2C%2C%26sid%3Di18n_in_pc_pro&callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3D%252F%252Fwww.mi.com%252Fin%252Fuser%26sign%3DZGNlYWI5ZTQ3NTZhNWNhMWRmZTQyMmQ5M2Y0ZTUxNGEwNTcyMTNlNg%2C%2C&_uRegion=IN">SIGN UP</a><span>|</span>

     <a href="https://store.mi.com/in/cart">{cartIcon}CART</a><span>|</span>
   
 </div>
 </div>
  )
}

export default Prenavbar
