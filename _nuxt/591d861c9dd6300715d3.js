(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{375:function(t,e,n){},376:function(t,e,n){"use strict";var r=n(1),o=n(0);e.a=o.a.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(r.b)(this.height),n=Object(r.b)(this.minHeight),o=Object(r.b)(this.minWidth),c=Object(r.b)(this.maxHeight),l=Object(r.b)(this.maxWidth),d=Object(r.b)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),o&&(t.minWidth=o),c&&(t.maxHeight=c),l&&(t.maxWidth=l),d&&(t.width=d),t}}})},377:function(t,e,n){"use strict";var r=n(0);e.a=r.a.extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var data=e.data,n=e.props,r=e.children;return data.staticClass=("v-card__title "+(data.staticClass||"")).trim(),n.primaryTitle&&(data.staticClass+=" v-card__title--primary"),t("div",data,r)}})},378:function(t,e,n){"use strict";n(117);var r=n(85);e.a=Object(r.a)("flex")},379:function(t,e,n){"use strict";n(117);var r=n(85);e.a=Object(r.a)("layout")},380:function(t,e,n){"use strict";n(381),n(382);var r=n(5);var o=n(0).a.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){return this.computedElevation?(t={},e="elevation-"+this.computedElevation,n=!0,e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t):{};var t,e,n}}}),c=n(376),l=n(8),d=n(3),h=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t},v=Object(d.a)(r.a,o,c.a,l.a).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return h({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var data={class:this.classes,style:this.styles,on:this.$listeners};return t(this.tag,this.setBackgroundColor(this.color,data),this.$slots.default)}}),m=n(43),f=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};e.a=Object(d.a)(m.a,v).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return f({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover},v.options.computed.classes.call(this))},styles:function(){var style=f({},v.options.computed.styles.call(this));return this.img&&(style.background='url("'+this.img+'") center center / cover no-repeat'),style}},render:function(t){var e=this.generateRouteLink(this.classes),n=e.tag,data=e.data;return data.style=this.styles,t(n,this.setBackgroundColor(this.color,data),this.$slots.default)}})},381:function(t,e,n){},382:function(t,e,n){},383:function(t,e,n){},384:function(t,e,n){},385:function(t,e,n){"use strict";var r=n(375);n.n(r).a},386:function(t,e,n){},387:function(t,e,n){"use strict";var r={data:function(){return{show:!1}},props:{code:{type:String,default:""},language:{type:String,default:"javascript"},copyable:{type:Boolean,default:!1}},computed:{slotContent:function(){return this.code||this.$slots.default?(this.$slots.default[0].text||"").trim():(console.error("Missing content for code-copy element"),"[Missing content]")}},methods:{copy:function(){if(this.copyable){var t=document.createElement("textarea");t.value=this.code||this.slotContent,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.show=!0}}}},o=(n(385),n(25)),c=n(86),l=n.n(c),d=(n(386),n(5)),h=n(19),v=n(44),m=n(3),f=Object(m.a)(d.a,h.a,Object(v.b)(["absolute","top","bottom","left","right"])).extend({name:"v-snackbar",props:{autoHeight:Boolean,multiLine:Boolean,timeout:{type:Number,default:6e3},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--active":this.isActive,"v-snack--absolute":this.absolute,"v-snack--auto-height":this.autoHeight,"v-snack--bottom":this.bottom||!this.top,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--top":this.top,"v-snack--vertical":this.vertical}}},watch:{isActive:function(){this.setTimeout()}},mounted:function(){this.setTimeout()},methods:{setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout),this.isActive&&this.timeout&&(this.activeTimeout=window.setTimeout(function(){t.isActive=!1},this.timeout))}},render:function(t){return t("transition",{attrs:{name:"v-snack-transition"}},this.isActive&&[t("div",{staticClass:"v-snack",class:this.classes,on:this.$listeners},[t("div",this.setBackgroundColor(this.color,{staticClass:"v-snack__wrapper"}),[t("div",{staticClass:"v-snack__content"},this.$slots.default)])])])}}),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{copyable:t.copyable,copy:!0},on:{click:t.copy}},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.code||t.slotContent,expression:"code || slotContent"}]},[n("code",{class:t.language})]),t._v(" "),n("v-snackbar",{attrs:{timeout:2e3},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t._v("\n    Copié ;-)\n  ")]),t._v(" "),n("br")],1)},[],!1,null,"55ae2834",null);e.a=component.exports;l()(component,{VSnackbar:f})},388:function(t,e,n){"use strict";n.d(e,"a",function(){return h});var r=n(1),o=n(367),c=n(368),l=n(378),d=n(379),h=Object(r.d)("spacer","div","v-spacer");o.a,c.a,l.a,d.a},389:function(t,e,n){"use strict";var r=n(1),o=n(380),c=(n(383),n(384),n(376)),l=n(3),d=Object(l.a)(c.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),h=n(7),v=d.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"==typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(h.a)("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch(function(e){Object(h.b)("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)}).then(t.onLoad):t.onLoad()},image.onerror=this.onError,image.src=this.normalisedSrc.src,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;!function n(){var r=img.naturalHeight,o=img.naturalWidth;r||o?t.calculatedAspectRatio=o/r:null!=e&&setTimeout(n,e)}()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=d.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}}).extend({name:"v-card-media",mounted:function(){Object(h.c)("v-card-media",this.src?"v-img":"v-responsive",this)}}),m=n(377);n.d(e,"a",function(){return f}),n.d(e,"b",function(){return _});var f=Object(r.d)("v-card__actions"),_=Object(r.d)("v-card__text");o.a,m.a},419:function(t,e,n){"use strict";n.r(e);var r={components:{CodeCopy:n(387).a},data:function(){return{example_mixin:"// définir un objet mixin\nconst helloMixin = {\n  created: function () {\n    this.hello()\n  },\n  methods: {\n    hello: function () {\n      console.log('hello from mixin!')\n    }\n  }\n}\n\n// définition d'un composant qui utilise ce mixin\nconst Component = Vue.extend({\n  mixins: [helloMixin],\n  created(){\n    console.log('another created callback')\n  }\n})\n\nlet component = new Component()",example_custom_directive:"// Register a global custom directive called 'v-focus'\nVue.directive('focus', {\n  // When the bound element is inserted into the DOM...\n  inserted: function (el) {\n    // Focus the element\n    el.focus()\n  }\n})",example_plugin:"const NotificationPlugin = {\n  install(){\n    Vue.component('Notification', NotificationComponent);\n    Vue.directive('notify', NotificationDirective):\n  }\n}\n\nVue.use(NotificationPlugin)"}}},o=n(25),c=n(86),l=n.n(c),d=n(374),h=n(78),v=n(380),m=n(389),f=n(377),_=n(378),y=n(79),S=n(379),x=n(388),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[n("v-card",[n("v-card-title",{staticClass:"headline primary--text"},[t._v("\n        Réutilisabilité et composition\n      ")]),t._v(" "),n("v-card-text",[n("h2",{staticClass:"subheading primary--text pa-2"},[t._v("\n          Mixins\n        ")]),t._v(" "),n("p",[t._v("\n          Les "),n("a",{attrs:{href:"https://fr.vuejs.org/v2/guide/mixins.html",target:"_blank"}},[t._v("Mixins")]),t._v(" permettent de créer des ensembles de fonctionnalités réutilisables pour les composants de Vue. En les déclarant via l'option "),n("code",[t._v("mixins")]),t._v(", toutes les options du mixin seront fusionnées (merge) avec les options du composant.\n        ")]),t._v(" "),n("code-copy",{attrs:{code:t.example_mixin,language:"javascript"}}),t._v(" "),n("v-alert",{attrs:{value:!0,color:"info",icon:"info",outline:""}},[n("p",[t._v("En cas de conflit, la stratégie de merge appliquée est la suivante:")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("data, methods, components & directives")]),t._v(": les options du composants ont la priorité")]),t._v(" "),n("li",[n("code",[t._v("event hooks")]),t._v(" : déclenchés successivement, les hooks du mixin en premier")])])]),t._v(" "),n("h2",{staticClass:"subheading primary--text pa-2"},[t._v("\n          Directives personnalisées\n        ")]),t._v(" "),n("p",[t._v("\n          Vue permet de déclarer ses propres "),n("a",{attrs:{href:"https://fr.vuejs.org/v2/guide/custom-directive.html",target:"_blank"}},[t._v("directives personnalisées")]),t._v(" - les éléments de syntaxe qui sont utilisés dans les templates de composant. Cette fonction est souvent utilisée par des bibliothèques tierces. Les directives personnalisées permettent de réutiliser de la logique applicative sur plusieurs éléments sans passer par un composant dédié. Veillez toutefois à ne pas en abuser car il est difficile de les tracer et elles peuvent rentrer en conflit avec des évolutions futures de Vue.\n        ")]),t._v(" "),n("code-copy",{attrs:{code:t.example_custom_directive,language:"javascript"}}),t._v(" "),n("h2",{staticClass:"subheading primary--text pa-2"},[t._v("\n          Plugins\n        ")]),t._v(" "),n("p",[t._v("\n          Enfin, Vue propose un système de "),n("a",{attrs:{href:"https://fr.vuejs.org/v2/guide/plugins.html",target:"_blank"}},[t._v("plugins")]),t._v(" servant à ajouter des fonctionnalités au niveau global. Là encore, il s'agit d'une fonctionnalité principalement utilisée par les bibliothèques tierces et il convient de ne pas en abuser. Les plugins peuvent entre autres:\n          "),n("ul",[n("li",[t._v("ajouter des mixins globales ou de nouveaux composants déclarés globalement")]),t._v(" "),n("li",[t._v("ajouter des méthodes ou propriétés globalement à tous les composants")]),t._v(" "),n("li",[t._v("ajouter des directives/filtres/transitions")])])]),t._v(" "),n("code-copy",{attrs:{code:t.example_plugin,language:"javascript"}}),t._v(" "),n("p",[t._v("La plupart des bibliothèques tierces de Vue utilisent ce format de plugin pour sa praticité. C'est le cas de "),n("code",[t._v("vue-router")]),t._v(" par exemple. Les plugins sont reconnus comme tels et placés dans leur propre catégorie sur Vue UI.")])],1),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"primary",flat:"",nuxt:"",to:"/http"}},[n("v-icon",{attrs:{left:""}},[t._v("\n            navigate_before\n          ")]),t._v("\n          Requêtes HTTP\n        ")],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",flat:"",nuxt:"",to:"/ecosystem"}},[t._v("\n          Ecosystème Vue\n          "),n("v-icon",{attrs:{right:""}},[t._v("\n            navigate_next\n          ")])],1)],1)],1)],1)],1)},[],!1,null,null,null);e.default=component.exports;l()(component,{VAlert:d.a,VBtn:h.a,VCard:v.a,VCardActions:m.a,VCardText:m.b,VCardTitle:f.a,VFlex:_.a,VIcon:y.a,VLayout:S.a,VSpacer:x.a})}}]);