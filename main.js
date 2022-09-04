import './style.scss'
// import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import '@/nav/nav'
import '@/nav/_partials/account-cartbox/account-cartbox'
import '@/product/_partials/product-gallery/product-gallery'
import '@/product/_partials/product-prop/product-prop'
import '@/product/_partials/product-prop/product-prop'





setupCounter(document.querySelector('#counter'))


setTimeout(function(){
    document.body.className="";
},500);