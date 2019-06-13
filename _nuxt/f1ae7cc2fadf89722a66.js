(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{375:function(t,e,n){},376:function(t,e,n){"use strict";var r=n(1),o=n(0);e.a=o.a.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(r.b)(this.height),n=Object(r.b)(this.minHeight),o=Object(r.b)(this.minWidth),c=Object(r.b)(this.maxHeight),l=Object(r.b)(this.maxWidth),d=Object(r.b)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),o&&(t.minWidth=o),c&&(t.maxHeight=c),l&&(t.maxWidth=l),d&&(t.width=d),t}}})},377:function(t,e,n){"use strict";var r=n(0);e.a=r.a.extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var data=e.data,n=e.props,r=e.children;return data.staticClass=("v-card__title "+(data.staticClass||"")).trim(),n.primaryTitle&&(data.staticClass+=" v-card__title--primary"),t("div",data,r)}})},378:function(t,e,n){"use strict";n(117);var r=n(85);e.a=Object(r.a)("flex")},379:function(t,e,n){"use strict";n(117);var r=n(85);e.a=Object(r.a)("layout")},380:function(t,e,n){"use strict";n(381),n(382);var r=n(5);var o=n(0).a.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){return this.computedElevation?(t={},e="elevation-"+this.computedElevation,n=!0,e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t):{};var t,e,n}}}),c=n(376),l=n(8),d=n(3),h=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t},v=Object(d.a)(r.a,o,c.a,l.a).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return h({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var data={class:this.classes,style:this.styles,on:this.$listeners};return t(this.tag,this.setBackgroundColor(this.color,data),this.$slots.default)}}),m=n(43),f=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};e.a=Object(d.a)(m.a,v).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return f({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover},v.options.computed.classes.call(this))},styles:function(){var style=f({},v.options.computed.styles.call(this));return this.img&&(style.background='url("'+this.img+'") center center / cover no-repeat'),style}},render:function(t){var e=this.generateRouteLink(this.classes),n=e.tag,data=e.data;return data.style=this.styles,t(n,this.setBackgroundColor(this.color,data),this.$slots.default)}})},381:function(t,e,n){},382:function(t,e,n){},383:function(t,e,n){},384:function(t,e,n){},385:function(t,e,n){"use strict";var r=n(375);n.n(r).a},386:function(t,e,n){},387:function(t,e,n){"use strict";var r={data:function(){return{show:!1}},props:{code:{type:String,default:""},language:{type:String,default:"javascript"},copyable:{type:Boolean,default:!1}},computed:{slotContent:function(){return this.code||this.$slots.default?(this.$slots.default[0].text||"").trim():(console.error("Missing content for code-copy element"),"[Missing content]")}},methods:{copy:function(){if(this.copyable){var t=document.createElement("textarea");t.value=this.code||this.slotContent,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.show=!0}}}},o=(n(385),n(25)),c=n(86),l=n.n(c),d=(n(386),n(5)),h=n(19),v=n(44),m=n(3),f=Object(m.a)(d.a,h.a,Object(v.b)(["absolute","top","bottom","left","right"])).extend({name:"v-snackbar",props:{autoHeight:Boolean,multiLine:Boolean,timeout:{type:Number,default:6e3},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--active":this.isActive,"v-snack--absolute":this.absolute,"v-snack--auto-height":this.autoHeight,"v-snack--bottom":this.bottom||!this.top,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--top":this.top,"v-snack--vertical":this.vertical}}},watch:{isActive:function(){this.setTimeout()}},mounted:function(){this.setTimeout()},methods:{setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout),this.isActive&&this.timeout&&(this.activeTimeout=window.setTimeout(function(){t.isActive=!1},this.timeout))}},render:function(t){return t("transition",{attrs:{name:"v-snack-transition"}},this.isActive&&[t("div",{staticClass:"v-snack",class:this.classes,on:this.$listeners},[t("div",this.setBackgroundColor(this.color,{staticClass:"v-snack__wrapper"}),[t("div",{staticClass:"v-snack__content"},this.$slots.default)])])])}}),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{copyable:t.copyable,copy:!0},on:{click:t.copy}},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.code||t.slotContent,expression:"code || slotContent"}]},[n("code",{class:t.language})]),t._v(" "),n("v-snackbar",{attrs:{timeout:2e3},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t._v("\n    Copié ;-)\n  ")]),t._v(" "),n("br")],1)},[],!1,null,"55ae2834",null);e.a=component.exports;l()(component,{VSnackbar:f})},388:function(t,e,n){"use strict";n.d(e,"a",function(){return h});var r=n(1),o=n(367),c=n(368),l=n(378),d=n(379),h=Object(r.d)("spacer","div","v-spacer");o.a,c.a,l.a,d.a},389:function(t,e,n){"use strict";var r=n(1),o=n(380),c=(n(383),n(384),n(376)),l=n(3),d=Object(l.a)(c.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),h=n(7),v=d.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"==typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(h.a)("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch(function(e){Object(h.b)("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)}).then(t.onLoad):t.onLoad()},image.onerror=this.onError,image.src=this.normalisedSrc.src,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;!function n(){var r=img.naturalHeight,o=img.naturalWidth;r||o?t.calculatedAspectRatio=o/r:null!=e&&setTimeout(n,e)}()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=d.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}}).extend({name:"v-card-media",mounted:function(){Object(h.c)("v-card-media",this.src?"v-img":"v-responsive",this)}}),m=n(377);n.d(e,"a",function(){return f}),n.d(e,"b",function(){return _});var f=Object(r.d)("v-card__actions"),_=Object(r.d)("v-card__text");o.a,m.a},402:function(t,e,n){t.exports=n.p+"img/e7cbff8.jpg"},403:function(t,e,n){t.exports=n.p+"img/f17088c.jpg"},409:function(t,e,n){"use strict";n.r(e);var r={components:{CodeCopy:n(387).a},data:function(){return{example_getters_setters:'let _name = "joe";\nconst user = {\n  get name() {\n    console.log("accès en lecture à la propriété")\n    return _name\n  },\n  set name(value) {\n    console.log("accès en écriture à la propriété")\n    _name = value\n  }\n}',example_proxy:'const _user = { name: "joe" }\nconst user = new Proxy(_user, {\n  get(obj, key) {\n    console.log(`accès en lecture à la propriété ${key}`)\n    return Reflect.get(obj, key)\n  },\n  set (obj, key, value) {\n    console.log(`accès en écriture à la propriété ${key} avec la valeur ${value}`)\n    return Reflect.set(obj, key, value)\n  }\n})'}}},o=n(25),c=n(86),l=n.n(c),d=n(78),h=n(380),v=n(389),m=n(377),f=n(378),_=n(79),y=n(379),S=n(388),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[r("v-card",[r("v-card-title",{staticClass:"headline primary--text"},[t._v("\n        Réactivité\n      ")]),t._v(" "),r("v-card-text",[r("p",[t._v("La réactivité est le mécanisme qui permet au framework de détecter lorsque des données utilisées sur la page sont modifiées (mutées), et de mettre à jour la page de façon optimale. C'est donc une mécanique cruciale pour tout framework web, et il convient d'en analyser le fonctionnement pour comprendre ses forces et ses limites.")]),t._v(" "),r("p",[t._v("Vue fournit une réactivité automatique, c'est-à-dire qu'il n'est pas nécessaire au développeur de déclencher manuellement la mise à jour de la vue après avoir muté des données. Cette réactivité est basée sur 2 fonctionnalités de JavaScript: les getters/setters (ECMAScript 5), et les Proxies (ECMAScript 6).")]),t._v(" "),r("h2",{staticClass:"subheading primary--text pa-2"},[t._v("\n          Getters / setters (ECMAScript 5)\n        ")]),t._v(" "),r("code-copy",{attrs:{code:t.example_getters_setters,language:"javascript"}}),t._v(" "),r("p",[t._v("En JavaScript, les propriétés d'un objet peuvent être déclarées avec un getter et un setter, qui sont des fonctions exécutées à l'accès en lecture et écriture à cette propriété. Vue.js les utilise en redefinissant des getters/setters pour toutes les data et props des composants, de façon à identifier les consommateurs de ces données ainsi que le moment où celles-ci sont mises à jour.")]),t._v(" "),r("p",[t._v("La principale limitation des getters/setters est qu'il faut connaître au préalable le nom des variables pour leur assigner un getter/setter. C'est la raison pour laquelle "),r("strong",[t._v("il est impératif de déclarer en data ou en props toutes les variables utilisées par un composant si on veut qu'elles soient réactives")]),t._v(".")]),t._v(" "),r("p",[t._v("Dans les cas particuliers où il n'est pas possible de déclarer une variable au préalable, comme par exemple un "),r("code",[t._v("Array")]),t._v(" extensible de longueur indéfinie ou une "),r("code",[t._v("Map")]),t._v(", Vue propose la méthodes "),r("code",[t._v("Vue.set")]),t._v(" ou "),r("code",[t._v("vm.$set")]),t._v(" pour assigner une valeur à une propriété en forçant la réactivité.")]),t._v(" "),r("div",{staticClass:"text-xs-center"},[r("img",{attrs:{src:n(402),height:"300"}}),t._v(" "),r("p",[t._v("Principe de réactivité basé sur les getters/setters")])]),t._v(" "),r("h2",{staticClass:"subheading primary--text pa-2"},[t._v("\n          Proxies (ECMAScript 6)\n        ")]),t._v(" "),r("code-copy",{attrs:{code:t.example_proxy,language:"javascript"}}),t._v(" "),r("p",[t._v("Les Proxies sont une nouveauté de JavaScript avec la spécification de 2015. Ils permettent de s'abstraire de toutes les limitations des getters/setters, en donnant un contrôle complet sur toutes les opérations permettant de manipuler un objet. Puisqu'ils ne sont pas supportés par les anciens navigateurs comme Internet Explorer, ils ne seront introduits que dans Vue 3.0, dont la sortie est prévue en 2019.")]),t._v(" "),r("h2",{staticClass:"subheading primary--text pa-2"},[t._v("\n          Détail du système de réactivité de Vue\n        ")]),t._v(" "),r("div",{staticClass:"text-xs-center"},[r("img",{attrs:{src:n(403),height:"500"}})])],1),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"primary",flat:"",nuxt:"",to:"/components"}},[r("v-icon",{attrs:{left:""}},[t._v("\n            navigate_before\n          ")]),t._v("\n          Composants\n        ")],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",flat:"",nuxt:"",to:"/state"}},[t._v("\n          Gestion d'état\n          "),r("v-icon",{attrs:{right:""}},[t._v("\n            navigate_next\n          ")])],1)],1)],1)],1)],1)},[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:h.a,VCardActions:v.a,VCardText:v.b,VCardTitle:m.a,VFlex:f.a,VIcon:_.a,VLayout:y.a,VSpacer:S.a})}}]);