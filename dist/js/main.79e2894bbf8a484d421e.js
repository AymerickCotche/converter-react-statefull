"use strict";(self.webpackChunkbase=self.webpackChunkbase||[]).push([[179],{193:()=>{},439:(e,n,t)=>{var a=t(294),r=t(935),o=t(697);function u(e){var n=e.baseAmount,t=e.editAmountState,r=e.toggleBaseAmountState,o=e.onChangeInputValue,u=a.createElement("p",{className:"header__baseamount",onClick:function(){r(!t)}},n," Euro");return t&&(u=a.createElement("p",null,a.createElement("input",{autoFocus:!0,id:"baseAmount",className:"baseAmountInput",type:"number",value:n,onChange:function(e){var n=Math.abs(Number(e.currentTarget.value));o(n)},onBlur:function(){r(!t)},onKeyPress:function(e){"Enter"===e.key&&r(!t)},min:0}),a.createElement("span",null,"Euro"))),a.createElement("header",{className:"header"},a.createElement("h1",{className:"header__title"},"Converter"),u)}u.propTypes={baseAmount:o.number.isRequired,editAmountState:o.bool.isRequired};const c=u,i=[{name:"Australian Dollar",rate:1.665247},{name:"Bulgarian Lev",rate:1.955843},{name:"Brazilian Real",rate:4.877723},{name:"Canadian Dollar",rate:1.459549},{name:"Swiss Franc",rate:1.063547},{name:"Chinese Renminbi Yuan",rate:7.663895},{name:"Czech Koruna",rate:25.303513},{name:"Danish Krone",rate:7.471905},{name:"British Pound",rate:.848099},{name:"Hong Kong Dollar",rate:8.527761},{name:"Croatian Kuna",rate:7.461611},{name:"Hungarian Forint",rate:339.010251},{name:"Indonesian Rupiah",rate:15244.461735},{name:"Israeli New Sheqel",rate:3.759468},{name:"Indian Rupee",rate:78.266835},{name:"Icelandic Króna",rate:139.283067},{name:"Japanese Yen",rate:120.425258},{name:"South Korean Won",rate:1323.751325},{name:"Mexican Peso",rate:21.229867},{name:"Malaysian Ringgit",rate:4.604002},{name:"Norwegian Krone",rate:10.271817},{name:"New Zealand Dollar",rate:1.733181},{name:"Philippine Peso",rate:55.663969},{name:"Polish Złoty",rate:4.310683},{name:"Romanian Leu",rate:4.808434},{name:"Russian Ruble",rate:71.643333},{name:"Swedish Krona",rate:10.592243},{name:"Singapore Dollar",rate:1.524971},{name:"Thai Baht",rate:34.637741},{name:"Turkish Lira",rate:6.75515},{name:"United States Dollar",rate:1.094103},{name:"South African Rand",rate:16.779419}];function s(e){var n=e.currencies,t=e.onCurrencyClick,r=e.inputValue,o=e.onChangeInputValue,u=function(e){t(e.currentTarget.textContent)},c=n.map((function(e){var n=e.name;return a.createElement("li",{className:"currencies__list__item",key:n,onClick:u},n)}));return a.createElement("div",{className:"currencies"},a.createElement("input",{type:"text",className:"currencies__input",placeholder:"Rechercher une devise",value:r,onChange:function(e){o(e.currentTarget.value)}}),a.createElement("ul",{className:"currencies__list"},c))}s.propTypes={currencies:o.arrayOf(o.shape({name:o.string,rate:o.number})).isRequired,onCurrencyClick:o.func.isRequired,inputValue:o.string.isRequired,onChangeInputValue:o.func.isRequired};const l=s;function m(e){var n=e.value,t=e.currency;return a.createElement("footer",{className:"selected"},a.createElement("p",{className:"selected__value"},n),a.createElement("p",{className:"selected__currency"},t))}m.propTypes={value:o.number,currency:o.string},m.defaultProps={value:0,currency:"Select a currency"};const p=m;var h,d=t(486),f=(h=function(e,n){return h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},h(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}h(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),y=function(e){function n(n){var t=e.call(this,n)||this;return t.changeTitle=function(){var e=t.state.currencyName;document.title="Euro to ".concat(e)},t.setCurrency=function(e){t.setState({currencyName:e})},t.setEditAmountState=function(e){t.setState({editAmountState:e})},t.setSearch=function(e){t.setState({search:e})},t.setBaseAmount=function(e){t.setState({baseAmount:e})},t.makeConversion=function(){var e=t.state,n=e.baseAmount,a=e.currencyName,r=e.currencies.find((function(e){return a===e.name}));return Number((n*r.rate).toFixed(2))},t.state={baseAmount:1,currencyName:"United States Dollar",currencies:i,search:"",editAmountState:!1},t}return f(n,e),n.prototype.componentDidMount=function(){this.changeTitle(),document.addEventListener("keyup",(function(e){console.log(e)}))},n.prototype.componentDidUpdate=function(e,n){var t=this.state.currencyName;n.currencyName!==t&&(console.log("on change le titre"),this.changeTitle())},n.prototype.componentWillUnmount=function(){console.log("componentWillUnmount")},n.prototype.render=function(){var e=this.state,n=e.baseAmount,t=e.currencyName,r=e.currencies,o=e.search,u=e.editAmountState,i=this.makeConversion(),s=r.filter((function(e){return d.includes(e.name.toLowerCase(),o.toLowerCase())})),m=d.sortBy(s,"name");return a.createElement("div",{className:"app"},a.createElement(c,{baseAmount:n,editAmountState:u,toggleBaseAmountState:this.setEditAmountState,onChangeInputValue:this.setBaseAmount}),a.createElement(l,{currencies:m,onCurrencyClick:this.setCurrency,inputValue:o,onChangeInputValue:this.setSearch}),a.createElement(p,{value:i,currency:t}))},n}(a.Component);const g=y;var v=a.createElement(g,null),C=document.getElementById("root");(0,r.render)(v,C)}},e=>{var n=n=>e(e.s=n);e.O(0,[207],(()=>(n(193),n(439))));e.O()}]);