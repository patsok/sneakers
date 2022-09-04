import './style.scss'
// import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import './pages/_sections/nav/nav'


setupCounter(document.querySelector('#counter'))


setTimeout(function(){
    document.body.className="";
},500);