(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{141:function(e,t,a){"use strict";a.r(t);a(32);var i=a(0),s=a.n(i),r=a(154),n=a(155),l=a(156),o=a(161),d=(a(150),a(176)),A=a(149),c=a(151),u=a.n(c),f=function(){return s.a.createElement("figure",{className:"image is-96x96"},s.a.createElement(A.StaticQuery,{query:"4206119890",render:function(e){return s.a.createElement(u.a,{fixed:e.placeholderImage.childImageSharp.fixed})},data:d}))},h=a(157),p=a(153),g=a(158);t.default=function(e){return s.a.createElement(h.a,Object.assign({},e,{currentPage:"posts"}),s.a.createElement(p.a.Consumer,null,function(e){var t=e.locale,a=e.formatMessage;return s.a.createElement(n.a,null,s.a.createElement(l.a,{lang:t,title:a({id:"posts.title"}),description:a({id:"meta.description"}),keywords:a({id:"meta.keywords"})}),s.a.createElement("section",{className:"section is-size-4-desktop is-size-5-touch"},s.a.createElement("h1",{className:"title has-text-centered has-text-light"},s.a.createElement(r.a,{id:"posts.title"})),s.a.createElement("div",{className:"container"},s.a.createElement("hr",null),s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-half is-offset-one-quarter"},s.a.createElement(o.a,{title:a({id:"posts.learnReact.title"}),subtitle:a({id:"posts.learnReact.subtitle"}),link:g.b.learnReact,image:f,tags:["React"]}))))))}))}},150:function(e,t,a){"use strict";a(152)("fixed",function(e){return function(){return e(this,"tt","","")}})},151:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var s,r=i(a(7)),n=i(a(51)),l=i(a(162)),o=i(a(163)),d=i(a(0)),A=i(a(4)),c=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},u={},f=function(e){var t=c(e),a=t.fluid?t.fluid.src:t.fixed.src;return u[a]||!1},h=[];var p=function(e,t){(void 0===s&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),s).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",s=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+s+"<img "+l+o+t+n+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=d.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,s=e.onError,r=(0,l.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,o.default)({},r,{onLoad:i,onError:s,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});m.propTypes={style:A.default.object,onError:A.default.func,onLoad:A.default.func};var E=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,s=!1,r=t.fadeIn,l=f(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,s=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,s=!1);var o=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:s,fadeIn:r,hasNoScript:o,seenBefore:l},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&p(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:f(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=t.fluid?t.fluid.src:t.fixed.src,u[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,i=e.className,s=e.style,r=void 0===s?{}:s,n=e.imgStyle,l=void 0===n?{}:n,A=e.placeholderStyle,u=void 0===A?{}:A,f=e.placeholderClassName,h=e.fluid,p=e.fixed,E=e.backgroundColor,b=e.Tag,y="boolean"==typeof E?"lightgray":E,S=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,u),w=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),v={title:t,alt:this.state.isVisible?"":a,style:S,className:f};if(h){var Q=h;return d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(Q.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/Q.aspectRatio+"%"}}),Q.base64&&d.default.createElement(m,(0,o.default)({src:Q.base64},v)),Q.tracedSVG&&d.default.createElement(m,(0,o.default)({src:Q.tracedSVG},v)),y&&d.default.createElement(b,{title:t,style:{backgroundColor:y,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,Q.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:Q.srcSetWebp,sizes:Q.sizes}),d.default.createElement("source",{srcSet:Q.srcSet,sizes:Q.sizes}),d.default.createElement(m,{alt:a,title:t,src:Q.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},Q))}}))}if(p){var N=p,R=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},r);return"inherit"===r.display&&delete R.display,d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(N.srcSet)},N.base64&&d.default.createElement(m,(0,o.default)({src:N.base64},v)),N.tracedSVG&&d.default.createElement(m,(0,o.default)({src:N.tracedSVG},v)),y&&d.default.createElement(b,{title:t,style:{backgroundColor:y,width:N.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:N.height}}),this.state.isVisible&&d.default.createElement("picture",null,N.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),d.default.createElement("source",{srcSet:N.srcSet,sizes:N.sizes}),d.default.createElement(m,{alt:a,title:t,width:N.width,height:N.height,src:N.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t,width:N.width,height:N.height},N))}}))}return null},t}(d.default.Component);E.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=A.default.shape({width:A.default.number.isRequired,height:A.default.number.isRequired,src:A.default.string.isRequired,srcSet:A.default.string.isRequired,base64:A.default.string,tracedSVG:A.default.string,srcWebp:A.default.string,srcSetWebp:A.default.string}),y=A.default.shape({aspectRatio:A.default.number.isRequired,src:A.default.string.isRequired,srcSet:A.default.string.isRequired,sizes:A.default.string.isRequired,base64:A.default.string,tracedSVG:A.default.string,srcWebp:A.default.string,srcSetWebp:A.default.string});E.propTypes={resolutions:b,sizes:y,fixed:b,fluid:y,fadeIn:A.default.bool,title:A.default.string,alt:A.default.string,className:A.default.oneOfType([A.default.string,A.default.object]),critical:A.default.bool,style:A.default.object,imgStyle:A.default.object,placeholderStyle:A.default.object,placeholderClassName:A.default.string,backgroundColor:A.default.oneOfType([A.default.string,A.default.bool]),onLoad:A.default.func,onError:A.default.func,onStartLoad:A.default.func,Tag:A.default.string};var S=E;t.default=S},152:function(e,t,a){var i=a(11),s=a(24),r=a(16),n=/"/g,l=function(e,t,a,i){var s=String(r(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(i).replace(n,"&quot;")+'"'),l+">"+s+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),i(i.P+i.F*s(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},160:function(e,t,a){"use strict";a(152)("link",function(e){return function(t){return e(this,"a","href",t)}})},161:function(e,t,a){"use strict";a(160);var i=a(0),s=a.n(i),r=a(4),n=a.n(r),l=function(e){var t=e.title,a=e.subtitle,i=e.link,r=e.image,n=e.tags;return s.a.createElement("a",{href:i},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-content"},s.a.createElement("div",{className:"media"},s.a.createElement("div",{className:"media-left"},r()),s.a.createElement("div",{className:"media-content"},s.a.createElement("h4",{className:"title has-text-light is-size-5-desktop is-size-6-touch"},t),s.a.createElement("p",{className:"subtitle has-text-light is-size-5-desktop is-size-6-touch"},a),s.a.createElement("div",{className:"tags"},n.map(function(e){return s.a.createElement("span",{className:"tag",key:e},e)})))))))};l.propTypes={title:n.a.string,subtitle:n.a.string,link:n.a.string,image:n.a.func.isRequired,tags:n.a.arrayOf(n.a.string)},l.defaultProps={title:"",subtitle:"",link:null,tags:[]};var o=l;a.d(t,"a",function(){return o})},176:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMEAgX/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAHHfPesfPVK4dA5BV//xAAbEAADAAIDAAAAAAAAAAAAAAABAhEAEgMQE//aAAgBAQABBQLjU6wUiFGWFqfXXA0zc9f/xAAZEQABBQAAAAAAAAAAAAAAAAAAAQIQEVH/2gAIAQMBAT8BUt2T/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAh/9oACAECAQE/ASP/xAAfEAACAQIHAAAAAAAAAAAAAAABEQACIRAgIjFBUaH/2gAIAQEABj8C6mlLnAk2cVR3tEPcn//EABwQAQADAAMBAQAAAAAAAAAAAAEAESFBUWEQcf/aAAgBAQABPyEuaS7fUuH5UehJYRWe5nIRSiCFOQwrE9lfrwvHz//aAAwDAQACAAMAAAAQzBA8/8QAGREBAAIDAAAAAAAAAAAAAAAAAQAQESHw/9oACAEDAQE/EE5ZwYhuv//EABgRAQEAAwAAAAAAAAAAAAAAAAEAEBFR/9oACAECAQE/EALXUOP/xAAfEAACAQQCAwAAAAAAAAAAAAABEQAhMUFxUbFhgdH/2gAIAQEAAT8QaDtFujr4gYQssxHNcdQzIGRqMVBwfZ9RQgUNY5+RSpHYxGAgtA0eZREkCqAzpCaz/9k=",width:96,height:96,src:"/static/a29f7822f02f334eadbc54600279c676/d3390/learn-react.jpg",srcSet:"/static/a29f7822f02f334eadbc54600279c676/d3390/learn-react.jpg 1x"}}}}}}}]);
//# sourceMappingURL=component---src-pages-posts-js-8b0cdc3532899f43cf47.js.map