(this["webpackJsonpfooty-team-picker"]=this["webpackJsonpfooty-team-picker"]||[]).push([[0],{106:function(e,t,a){},221:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),s=a(41),l=a.n(s),i=(a(106),a(97)),o=a(8),u=a(11),b=Object(u.a)(),d=a(4),m=a(18),j=a(19),h=a(9),p=a(21),O=a(20),_=a(99),f=function(e){var t=e.color,a=e.css;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("svg",{fill:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"50px",height:"50px",className:a,children:["    ",Object(n.jsx)("path",{d:"M49.859,19.489c0,0-3.958-6.652-6.352-10.64c-1.682-2.802-5.096-3.773-5.241-3.813c0,0,0,0,0,0l-6.991-1.998 c-0.047-0.013-0.092-0.005-0.139-0.011C31.09,3.021,31.048,3,31,3H19c-0.048,0-0.089,0.021-0.135,0.027 c-0.047,0.006-0.093-0.002-0.14,0.011l-6.991,1.998c0,0,0,0,0,0c-0.145,0.04-3.559,1.011-5.241,3.813 c-2.394,3.987-6.352,10.64-6.352,10.64c-0.281,0.472-0.128,1.083,0.342,1.367l6.625,4C7.27,24.954,7.448,25,7.624,25 c0.333,0,0.66-0.167,0.849-0.47L11,20.487V46c0,0.552,0.448,1,1,1h13h13c0.552,0,1-0.448,1-1V20.487l2.527,4.043 c0.189,0.303,0.516,0.47,0.849,0.47c0.176,0,0.354-0.046,0.516-0.144l6.625-4C49.987,20.572,50.141,19.961,49.859,19.489z M30.722,5 C30.197,6.458,28.749,9,25,9s-5.197-2.542-5.722-4H30.722z"})]})})},v=function(e){Object(p.a)(a,e);var t=Object(O.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={name:"",color:n.props.color},n.colorChange=n.colorChange.bind(Object(h.a)(n)),n.nameChange=n.nameChange.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(j.a)(a,[{key:"colorChange",value:function(e,t){this.setState({color:e.hex})}},{key:"nameChange",value:function(e){this.setState({name:e.currentTarget.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({name:"",color:""}),b.push("/set-up/".concat(this.props.nextRoute)),this.props.handleAddTeam(Object(d.a)({},this.state))}},{key:"render",value:function(){var e=this.props.filledIn;return Object(n.jsx)("div",{className:"team-card card",children:Object(n.jsxs)("form",{className:"team-card__form",onSubmit:this.handleSubmit,children:[Object(n.jsx)("input",{id:"team-name",type:"text",onChange:this.nameChange,required:!0,placeholder:"Team name...",className:"team-card__form__input card__sub"}),Object(n.jsxs)("div",{className:"team-card__form__color card__sub",children:[Object(n.jsx)(_.a,{className:"team-card__form__color__picker",color:this.state.color,onChange:this.colorChange,colors:["#ef0505","#33cc33","#2605ef","#ffabab","#c005ef","#000","#e6e600","#9999ff","#cc6600"],width:"180px",circleSize:32}),Object(n.jsx)(f,{color:this.state.color,css:"team-card__form__color__kit"})]}),Object(n.jsx)("button",{className:"button",children:e?"update":"add team"})]})})}}]),a}(r.Component),x=a(7),g=function(e,t){return 1===t?{type:"ADD_TEAM1",data:e}:2===t?{type:"ADD_TEAM2",data:e}:void 0},y=Object(x.b)((function(e){return{nextRoute:"team2",filledIn:e.team1.name.length>0,color:e.team1.kit_color}}),(function(e){return{handleAddTeam:function(t){return e(g(t,1))}}}))(v),C=Object(x.b)((function(e){return{nextRoute:"players",filledIn:e.team2.name.length>0,color:e.team2.kit_color}}),(function(e){return{handleAddTeam:function(t){return e(g(t,2))}}}))(v),k=a(17),N=function(e){var t=e.handleClick,a=e.selected,r=e.id,c=e.skill;return Object(n.jsxs)("div",{className:"btn-group",children:[Object(n.jsx)("div",{className:"btn-group__label",children:Object(n.jsx)("p",{children:c})}),Object(n.jsxs)("div",{className:"btn-group__btns",children:[Object(n.jsx)("button",{onClick:t,"data-rating":1,"data-id":r,"data-skill":c,className:"btn-group__btns__btn left-btn ".concat(1===a?"selected":""),children:"\u2b50"}),Object(n.jsx)("button",{onClick:t,"data-rating":2,"data-id":r,"data-skill":c,className:"btn-group__btns__btn ".concat(2===a?"selected":""),children:"\u2b50\u2b50"}),Object(n.jsx)("button",{onClick:t,"data-rating":3,"data-id":r,"data-skill":c,className:"btn-group__btns__btn right-btn ".concat(3===a?"selected":""),children:"\u2b50\u2b50\u2b50"})]})]})},w=function(e){Object(p.a)(a,e);var t=Object(O.a)(a);function a(e){var n;Object(m.a)(this,a),n=t.call(this,e);for(var r={},c=1;c<=n.props.playerQty;c+=1)r["player_".concat(c)]={name:"",active:!0,rating:0};return n.state=r,n.handleAdd=n.handleAdd.bind(Object(h.a)(n)),n.handleSubtract=n.handleSubtract.bind(Object(h.a)(n)),n.nameChange=n.nameChange.bind(Object(h.a)(n)),n.ratingClick=n.ratingClick.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(j.a)(a,[{key:"handleAdd",value:function(e){var t;e.preventDefault();var a=this.props.playerQty,n="player_".concat(a+1),r="player_".concat(a+2);this.setState((t={},Object(k.a)(t,n,{name:"",active:!0,rating:0}),Object(k.a)(t,r,{name:"",active:!0,rating:0}),t)),this.props.incrementPlayers(2)}},{key:"handleSubtract",value:function(e){var t;e.preventDefault(),this.props.incrementPlayers(-2);var a=this.props.playerQty,n="player_".concat(a-1),r="player_".concat(a);this.setState((t={},Object(k.a)(t,n,{name:"",active:!1,rating:0}),Object(k.a)(t,r,{name:"",active:!1,rating:0}),t))}},{key:"nameChange",value:function(e){var t=e.currentTarget.id,a=e.currentTarget.value;this.setState(Object(k.a)({},t,{name:a,active:!0,rating:+this.state[t].rating}))}},{key:"ratingClick",value:function(e){e.preventDefault();var t=e.currentTarget.dataset.rating,a=e.currentTarget.dataset.id;this.setState(Object(k.a)({},a,Object(d.a)(Object(d.a)({},this.state[a]),{},{rating:+t})))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,a=[];for(var n in t){var r=t[n];r.active&&a.push(r)}b.push("/teams"),this.props.submitPlayers(a)}},{key:"render",value:function(){for(var e=this,t=this.props,a=t.playerQty,r=t.filledIn,c=[],s=1;s<=a;s+=1)c.push(s);var l=a>20,i=a<6;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("form",{className:"card",onSubmit:this.handleSubmit,children:[Object(n.jsx)("ul",{className:"card__ul",children:c.map((function(t){return Object(n.jsxs)("li",{className:"card__ul__li card__sub",children:[Object(n.jsxs)("label",{className:"card__ul__li__label",htmlFor:"player_".concat(t),children:["player ",t]}),Object(n.jsx)("input",{className:"card__ul__li__input",required:!0,id:"player_".concat(t),type:"text",placeholder:"Name...",onChange:e.nameChange,value:e.state["player_".concat(t)].name}),Object(n.jsx)(N,{handleClick:e.ratingClick,selected:e.state["player_".concat(t)].rating,id:"player_".concat(t),skill:"skill",className:"card__ul__li__button-group"})]},t)}))}),Object(n.jsxs)("div",{className:"button-pair",children:[Object(n.jsx)("button",{className:"button button-pair__btn",onClick:this.handleAdd,disabled:l,children:"Add players"}),Object(n.jsx)("button",{className:"button button-pair__btn",onClick:this.handleSubtract,disabled:i,children:"Remove players"})]}),Object(n.jsx)("button",{className:"submit button",children:r?"re-submit":"submit"})]})})}}]),a}(r.Component),S=Object(x.b)((function(e){return{playerQty:e.playerQty,detailedSetUp:e.detailed,filledIn:e.players.length>0}}),(function(e){return{incrementPlayers:function(t){return e(function(e){return{type:"INCREMENT_PLAYER_NUM",increment:e}}(t))},submitPlayers:function(t){return e(function(e){return{type:"SAVE_PLAYERS",players:e}}(t))}}}))(w),E=function(e){var t=e.teamObj;return Object(n.jsxs)("div",{className:"card__sub selected-team",children:[Object(n.jsx)("h2",{className:"selected-team__name",children:t.name}),Object(n.jsx)(f,{color:t.kit_color,css:"selected-team__kit"}),Object(n.jsx)("hr",{className:"selected-team__line"}),Object(n.jsx)("ul",{className:"selected-team__list",children:t.name?t.players.map((function(e,t){return Object(n.jsxs)("li",{className:"selected-team__list__player",children:[Object(n.jsx)("span",{className:"selected-team__list__player__name",children:e.name}),Object(n.jsx)("span",{className:"selected-team__list__player__rating",children:"\u2b50".repeat(e.rating)})]},t)})):null})]})},A=Object(x.b)((function(e){return{teamObj:e.team1}}))(E),L=Object(x.b)((function(e){return{teamObj:e.team2}}))(E),T=function(e){var t=e.random,a=e.sortClick,r=e.randomClick;return Object(n.jsxs)("div",{className:"card team-output-card",children:[Object(n.jsx)(A,{}),Object(n.jsx)(L,{}),Object(n.jsxs)("div",{className:"button-pair",children:[Object(n.jsx)("button",{onClick:a,className:"button-pair__btn button ".concat(t?"":"selected-sort"),disabled:!t,children:"Equal"}),Object(n.jsx)("button",{onClick:r,className:"button-pair__btn button ".concat(t?"selected-sort":""),children:"Random"})]})]})},M=Object(x.b)((function(e){return{random:e.randomSort}}),(function(e){return{sortClick:function(){return e({type:"EQUAL_SORT"})},randomClick:function(){return e({type:"RANDOM_SORT"})}}}))(T),P=function(e){var t=e.progress,a=e.currentStage,r=e.linkClick;return Object(n.jsxs)("ul",{className:"nav-list",children:[Object(n.jsx)("li",{className:"nav-list__item left-raduis",children:Object(n.jsx)("button",{className:"nav-list__item__button left-raduis ".concat(1===a?"current-nav":""),onClick:r,"data-route":"/",children:"home"})}),Object(n.jsx)("li",{className:"nav-list__item",children:Object(n.jsx)("button",{className:"nav-list__item__button ".concat(2===a?"current-nav":""),onClick:r,"data-route":"/set-up/team1",children:"team 1"})}),Object(n.jsx)("li",{className:"nav-list__item",children:Object(n.jsx)("button",{className:"nav-list__item__button ".concat(3===a?"current-nav":""),onClick:r,"data-route":"/set-up/team2",disabled:!t.team1,children:"team 2"})}),Object(n.jsx)("li",{className:"nav-list__item",children:Object(n.jsx)("button",{className:"nav-list__item__button ".concat(4===a?"current-nav":""),onClick:r,"data-route":"/set-up/players",disabled:!t.team2,children:"players"})}),Object(n.jsx)("li",{className:"nav-list__item right-raduis",children:Object(n.jsx)("button",{className:"nav-list__item__button right-raduis ".concat(5===a?"current-nav":""),onClick:r,"data-route":"/teams",disabled:!t.players,children:"teams"})})]})},R=Object(x.b)((function(e){return{progress:e.progress,currentStage:+e.currentStage}}),(function(e){return{linkClick:function(t){var a=t.currentTarget.dataset.route;b.push(a),e({type:"NAV_UPDATE"})}}}))(P),D=function(){return Object(n.jsx)("p",{children:"Page not found"})},I=function(e){Object(p.a)(a,e);var t=Object(O.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(h.a)(n)),n}return Object(j.a)(a,[{key:"handleClick",value:function(){this.props.inProgress?(b.push("/set-up/team1"),this.props.reset()):(b.push("/set-up/team1"),this.props.start())}},{key:"render",value:function(){var e=this.props.inProgress?"restart":"start";return Object(n.jsxs)("div",{className:"home card",children:[Object(n.jsx)("p",{className:"home__text1",children:"Team Picker - pain free team selection from 2-on-2 to full 11-a-side."}),Object(n.jsx)("p",{className:"home__text2",children:"Input your team names along with a list of players and the app does the rest. Once created go back edit and re-sort your teams randomly or on ability."}),Object(n.jsxs)("p",{className:"home__text2",children:["Dig a little deeper and interigate the ",Object(n.jsx)("a",{href:"https://github.com/jnc202/footy-team-picker",target:"__blank",children:"code"})," behind the app."]}),Object(n.jsx)("button",{className:"home__button button",onClick:this.handleClick,children:e})]})}}]),a}(r.Component),F=Object(x.b)((function(e){var t=e.progress,a=t.team1,n=t.team2,r=t.players;return{inProgress:a||n||r}}),(function(e){return{reset:function(){return e({type:"RESET"})},start:function(){return e({type:"START"})}}}))(I),z=["/","/set-up/team1","/set-up/team2","/set-up/players","/teams"],Q=["home","team 1","team 2","players","teams"],V=function(e){var t=e.css;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("svg",{className:t,fill:"#FFFFFF",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"50px",height:"50px",children:Object(n.jsx)("path",{d:"M 25 2 C 12.316406 2 2 12.316406 2 25 C 2 37.683594 12.316406 48 25 48 C 37.683594 48 48 37.683594 48 25 C 48 12.316406 37.683594 2 25 2 Z M 32.707031 25.707031 L 22.707031 35.707031 C 22.511719 35.902344 22.257813 36 22 36 C 21.742188 36 21.488281 35.902344 21.292969 35.707031 C 20.902344 35.316406 20.902344 34.683594 21.292969 34.292969 L 30.585938 25 L 21.292969 15.707031 C 20.902344 15.316406 20.902344 14.683594 21.292969 14.292969 C 21.683594 13.902344 22.316406 13.902344 22.707031 14.292969 L 32.707031 24.292969 C 33.097656 24.683594 33.097656 25.316406 32.707031 25.707031 Z"})})})},U=function(e){Object(p.a)(a,e);var t=Object(O.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).nextClick=n.nextClick.bind(Object(h.a)(n)),n.prevClick=n.prevClick.bind(Object(h.a)(n)),n.nextArrowState=n.nextArrowState.bind(Object(h.a)(n)),n}return Object(j.a)(a,[{key:"nextClick",value:function(){console.log("next"),this.props.navArrowClick(1)}},{key:"prevClick",value:function(){console.log("prev"),this.props.navArrowClick(-1)}},{key:"nextArrowState",value:function(e,t){return 1===e||(2===e?t.team1:3===e?t.team2:4===e?t.players:5!==e&&void 0)}},{key:"render",value:function(){var e=this.props,t=e.currentStage,a=e.progress,r=Q[t-1];return Object(n.jsxs)("div",{className:"nav-arrows",children:[Object(n.jsx)("button",{className:"nav-arrows__button",onClick:this.prevClick,disabled:1===t,children:Object(n.jsx)(V,{css:"nav-arrows__prev ".concat(1===t?"disabled-arrow":"")})}),Object(n.jsx)("div",{className:"nav-arrows__text-box",children:Object(n.jsx)("h2",{className:"nav-arrows__text-box__text",children:r})}),Object(n.jsx)("button",{className:"nav-arrows__button",onClick:this.nextClick,disabled:!this.nextArrowState(t,a),children:Object(n.jsx)(V,{css:"nav-arrows__next ".concat(this.nextArrowState(t,a)?"":"disabled-arrow")})})]})}}]),a}(r.Component),B=Object(x.b)((function(e){return{currentStage:+e.currentStage,progress:e.progress}}),(function(e){return{navArrowClick:function(t){return e(function(e){return{type:"NAV_INCREMENT",increment:e}}(t))}}}))(U);function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var H=r.createElement("path",{d:"M 25 2 C 12.360055 2 2 12.259016 2 25 C 2 37.740984 12.360055 48 25 48 C 37.639945 48 48 37.740984 48 25 C 48 12.259016 37.639945 2 25 2 z M 18.064453 5.1777344 L 24 8.4003906 L 24 15.800781 L 17 19.599609 L 10 15.800781 L 10 10.306641 C 12.237378 8.0244815 14.987229 6.2530524 18.064453 5.1777344 z M 32.048828 5.2148438 C 35.080761 6.2937805 37.78987 8.0522747 40 10.306641 L 40 15.800781 L 33 19.599609 L 26 15.800781 L 26 8.5 L 32.048828 5.2148438 z M 41 17.599609 L 45.386719 19.949219 C 45.78446 21.565595 46 23.256458 46 25 C 46 26.807043 45.771987 28.558989 45.345703 30.228516 L 41 32.599609 L 34 28.800781 L 34 21.400391 L 41 17.599609 z M 9 17.699219 L 16 21.5 L 16 28.900391 L 9 32.699219 L 4.6855469 30.345703 C 4.2396601 28.640888 4 26.849516 4 25 C 4 23.297688 4.2062329 21.646071 4.5859375 20.064453 L 9 17.699219 z M 33 30.599609 L 40 34.400391 L 40 39.693359 C 37.683417 42.056309 34.817056 43.871457 31.607422 44.933594 L 26 41.800781 L 26 34.400391 L 33 30.599609 z M 17 30.699219 L 24 34.5 L 24 41.900391 L 18.412109 44.939453 C 15.194653 43.878216 12.321241 42.061061 10 39.693359 L 10 34.5 L 17 30.699219 z"});function J(e,t){var a=e.title,n=e.titleId,c=q(e,["title","titleId"]);return r.createElement("svg",Y({fill:"#FFFFFF",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"50px",height:"50px",ref:t,"aria-labelledby":n},c),a?r.createElement("title",{id:n},a):null,H)}var W=r.forwardRef(J);a.p;function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Z(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var $=r.createElement("path",{d:"M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"});function G(e,t){var a=e.title,n=e.titleId,c=Z(e,["title","titleId"]);return r.createElement("svg",X({fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"30px",height:"30px",ref:t,"aria-labelledby":n},c),a?r.createElement("title",{id:n},a):null,$)}var K=r.forwardRef(G);a.p;function ee(){return(ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function te(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var ae=r.createElement("path",{d:"M 25 2 C 12.321124 2 2 12.321124 2 25 C 2 37.678876 12.321124 48 25 48 C 37.678876 48 48 37.678876 48 25 A 2.0002 2.0002 0 1 0 44 25 C 44 35.517124 35.517124 44 25 44 C 14.482876 44 6 35.517124 6 25 C 6 14.482876 14.482876 6 25 6 C 30.475799 6 35.391893 8.3080175 38.855469 12 L 35 12 A 2.0002 2.0002 0 1 0 35 16 L 46 16 L 46 5 A 2.0002 2.0002 0 0 0 43.970703 2.9726562 A 2.0002 2.0002 0 0 0 42 5 L 42 9.5253906 C 37.79052 4.9067015 31.727675 2 25 2 z"});function ne(e,t){var a=e.title,n=e.titleId,c=te(e,["title","titleId"]);return r.createElement("svg",ee({fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"50px",height:"50px",ref:t,"aria-labelledby":n},c),a?r.createElement("title",{id:n},a):null,ae)}var re=r.forwardRef(ne),ce=(a.p,function(e){var t=e.reset,a=e.homeClick;return Object(n.jsxs)("header",{className:"header",children:[Object(n.jsxs)("button",{onClick:a,className:"header__logo",children:[Object(n.jsx)(W,{className:"header__logo__svg"}),Object(n.jsx)("h1",{className:"header__logo__text",children:"team picker"})]}),Object(n.jsxs)("div",{className:"header__links",children:[Object(n.jsx)("button",{children:Object(n.jsx)(re,{className:"header__links__reset",onClick:t})}),Object(n.jsx)("a",{href:"https://github.com/jnc202/footy-team-picker",target:"__blank",children:Object(n.jsx)(K,{className:"header__links__git"})})]})]})}),se=Object(x.b)(null,(function(e){return{reset:function(){b.push("/"),e({type:"RESET"})},homeClick:function(){b.push("/"),e({type:"NAV_UPDATE"})}}}))(ce);var le=function(){return Object(n.jsxs)(i.a,{history:b,children:[Object(n.jsx)(se,{}),Object(n.jsx)(R,{}),Object(n.jsx)(B,{}),Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{exact:!0,path:"/",children:Object(n.jsx)(F,{})}),Object(n.jsx)(o.a,{exact:!0,path:"/set-up/team1",children:Object(n.jsx)(y,{})}),Object(n.jsx)(o.a,{exact:!0,path:"/set-up/team2",children:Object(n.jsx)(C,{})}),Object(n.jsx)(o.a,{exact:!0,path:"/set-up/players",children:Object(n.jsx)(S,{})}),Object(n.jsx)(o.a,{exact:!0,path:"/teams",children:Object(n.jsx)(M,{})}),Object(n.jsx)(D,{})]})]})},ie=a(29),oe=a(98),ue=a.n(oe),be={dark_mode:!1,detailed:!1,team1:{name:"",kit_color:"#ef0505",players:[]},team2:{name:"",kit_color:"#33cc33",players:[]},players:[],playerQty:4,randomSort:!1,progress:{team1:!1,team2:!1,players:!1},currentStage:1},de=a(100),me=function(e){return Object(d.a)(Object(d.a)({},e),{},{progress:{team1:e.team1.name.length>0,team2:e.team2.name.length>0,players:e.players.length>0}})},je=function(e){var t=[],a=[];return e.sort((function(e,t){return t.rating-e.rating})).forEach((function(e,n){n%2===0?t.push(e):a.push(e)})),{team1:t,team2:a}},he=function(e){var t=function(e){for(var t=Object(de.a)(e),a=[],n=[];t.length>1;){var r=Math.floor(Math.random()*t.length);a.push(t.splice(r,1)[0]);var c=Math.floor(Math.random()*t.length);n.push(t.splice(c,1)[0])}return{team1:a,team2:n}}(e.players),a=t.team1,n=t.team2;return Object(d.a)(Object(d.a)({},e),{},{team1:Object(d.a)(Object(d.a)({},e.team1),{},{players:a}),team2:Object(d.a)(Object(d.a)({},e.team2),{},{players:n}),randomSort:!0})},pe=function(e){var t,a=b.location.pathname;return a===z[0]?t=1:a===z[1]?t=2:a===z[2]?t=3:a===z[3]?t=4:a===z[4]&&(t=5),Object(d.a)(Object(d.a)({},e),{},{currentStage:t})},Oe=function(e,t){switch(t.type){case"RESET":return pe(function(e){return Object(d.a)({},e)}(Object(d.a)({},be)));case"ADD_TEAM1":return pe(me(function(e,t){return Object(d.a)(Object(d.a)({},e),{},{team1:{name:t.data.name,kit_color:t.data.color}})}(e,t)));case"ADD_TEAM2":return pe(me(function(e,t){return Object(d.a)(Object(d.a)({},e),{},{team2:{name:t.data.name,kit_color:t.data.color}})}(e,t)));case"INCREMENT_PLAYER_NUM":return function(e,t){var a=t.increment,n=e.playerQty+a;return n<2||n>22?Object(d.a)({},e):Object(d.a)(Object(d.a)({},e),{},{playerQty:e.playerQty+t.increment})}(e,t);case"SAVE_PLAYERS":return pe(me(function(e,t){var a=t.players,n=je(a),r=n.team1,c=n.team2;return Object(d.a)(Object(d.a)({},e),{},{players:a,team1:Object(d.a)(Object(d.a)({},e.team1),{},{players:r}),team2:Object(d.a)(Object(d.a)({},e.team2),{},{players:c})})}(e,t)));case"EQUAL_SORT":return function(e){var t=e.players,a=je(t),n=a.team1,r=a.team2;return Object(d.a)(Object(d.a)({},e),{},{team1:Object(d.a)(Object(d.a)({},e.team1),{},{players:n}),team2:Object(d.a)(Object(d.a)({},e.team2),{},{players:r}),randomSort:!1})}(e);case"RANDOM_SORT":return he(e);case"NAV_UPDATE":case"START":return pe(e);case"NAV_INCREMENT":return function(e,t){var a=t.increment,n=e.currentStage+a;return b.push(z[n-1]),Object(d.a)(Object(d.a)({},e),{},{currentStage:n})}(e,t);default:return e}},_e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ie.b,fe=Object(ie.c)(Oe,be,_e(ue()()));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ve=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,223)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};l.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(x.a,{store:fe,children:Object(n.jsx)(le,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),ve()}},[[221,1,2]]]);
//# sourceMappingURL=main.94508538.chunk.js.map