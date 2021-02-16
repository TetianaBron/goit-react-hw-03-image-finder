(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__34PfI",Loader:"ImageGallery_Loader__2B34N"}},13:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1Mgc0",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__r-u2j"}},14:function(e,t,a){e.exports={Button:"Button_Button__3Ev6u",ButtonSection:"Button_ButtonSection__3nuQt"}},15:function(e,t,a){e.exports={Overlay:"Modal_Overlay__25R6g",Modal:"Modal_Modal__1T4c0"}},17:function(e,t,a){e.exports={layout:"Layout_layout__2N9dn"}},25:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a(3),c=a.n(o),l=(a(25),a(4)),i=a(5),s=a(7),u=a(6),h=a(8),m=(a(26),a(17)),d=a.n(m),b=function(e){var t=e.children;return Object(n.jsx)("div",{className:d.a.layout,children:t})},p=a(9),g=a.n(p),f=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleQueryChange=function(t){e.setState({query:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.query.trim()?(e.props.onSubmit(e.state.query),e.setState({query:""})):h.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0442\u043e-\u0442\u043e.")},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:g.a.Searchbar,children:Object(n.jsxs)("form",{onSubmit:this.handleSubmit,className:g.a.SearchForm,children:[Object(n.jsx)("button",{type:"submit",className:g.a.SearchFormButton,children:Object(n.jsx)("span",{className:g.a.SearchFormButtonLabel,children:"Search"})}),Object(n.jsx)("input",{className:g.a.SearchFormInput,type:"text",name:"query",value:this.state.query,onChange:this.handleQueryChange,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(r.Component),j=a(11),y=a.n(j),O=a(18),v=a(16),_=a(12),S=a.n(_),I=a(13),x=a.n(I),w=a.p+"static/media/No_Image-512.6bca87e4.webp",k=function(e){var t=e.webformatURL,a=e.tags,r=e.clickOnItem;return Object(n.jsx)("div",{className:x.a.ImageGalleryItem,children:Object(n.jsx)("img",{src:t||w,alt:a,onClick:r,className:x.a.ImageGalleryItemImage})})},C=a(14),q=a.n(C),B=function(e){var t=e.onIncrement;return Object(n.jsx)("div",{className:q.a.ButtonSection,children:Object(n.jsx)("button",{type:"button",onClick:t,className:q.a.Button,children:"Load more"})})},N=(a(30),a(19)),F=a.n(N);var L={fetchImg:function(e,t){return fetch("".concat("https://pixabay.com/api","/?q=").concat(e,"&page=").concat(t,"&key=").concat("19207978-b8cc5d5178f1c84e5ac39b1c7","&image_type=photo&orientation=horizontal&per_page=").concat(12)).then((function(e){return e.json()}))}},G=a(15),M=a.n(G),D=document.querySelector("#modal-root"),T=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.image,t=e.src,a=e.alt;return Object(o.createPortal)(Object(n.jsx)("div",{className:M.a.Overlay,onClick:this.handleBackdropClick,children:Object(n.jsx)("div",{className:M.a.Modal,children:Object(n.jsx)("img",{src:t,alt:a})})}),D)}}]),a}(r.Component),U=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={items:[],error:null,loading:!1,page:1,showModal:!1,largeImage:{src:"",alt:""}},e.fetch=function(t){e.setState({loading:!0}),L.fetchImg(t,e.state.page).then((function(a){0===a.total&&h.b.error("".concat(t," is not found. Try another one!")),e.setState((function(e){return{items:[].concat(Object(v.a)(e.items),Object(v.a)(a.hits)),page:e.page+1}}))})).catch((function(t){h.b.error(t.message),e.setState({error:t.message})})).finally((function(){e.setState({loading:!1}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleButtonClick=function(){e.fetch(e.props.query)},e.handleGalleryItemClick=function(t,a){e.setState({largeImage:{src:t,alt:a}}),e.toggleModal()},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(O.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.query===this.props.query){e.next=4;break}return e.next=3,this.setState({items:[],page:1});case 3:this.fetch(this.props.query);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.items,r=t.showModal,o=t.loading,c=t.largeImage;return Object(n.jsxs)(n.Fragment,{children:[o&&Object(n.jsx)("div",{className:S.a.Loader,children:Object(n.jsx)(F.a,{type:"ThreeDots",color:"#3f51b5",height:80,width:80,timeout:3e3})}),a.length>0&&Object(n.jsx)("ul",{className:S.a.ImageGallery,children:a.map((function(t,a){var r=t.webformatURL,o=t.largeImageURL,c=t.tags;return Object(n.jsx)("li",{children:Object(n.jsx)(k,{webformatURL:r,largeImageURL:o,tags:c,clickOnItem:function(){return e.handleGalleryItemClick(o,c)}})},a)}))}),r&&Object(n.jsx)(T,{image:c,onClose:this.toggleModal}),a.length>11&&Object(n.jsx)(B,{onIncrement:function(){return e.handleButtonClick()}})]})}}]),a}(r.Component),R=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleFormSubmit=function(t){e.setState({query:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(b,{children:[Object(n.jsx)(f,{onSubmit:this.handleFormSubmit}),Object(n.jsx)(U,{query:this.state.query}),Object(n.jsx)(h.a,{})]})}}]),a}(r.Component);c.a.render(Object(n.jsx)(R,{}),document.querySelector("#root"))},9:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__ZNzXf",SearchForm:"Searchbar_SearchForm__3WhZq",SearchFormButton:"Searchbar_SearchFormButton__1Jm4J",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__JT9Mo",SearchFormInput:"Searchbar_SearchFormInput__19Z_n"}}},[[50,1,2]]]);
//# sourceMappingURL=main.8515964b.chunk.js.map