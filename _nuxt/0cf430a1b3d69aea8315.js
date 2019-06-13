(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{376:function(t,e,r){"use strict";var n=r(1),o=r(0);e.a=o.a.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(n.b)(this.height),r=Object(n.b)(this.minHeight),o=Object(n.b)(this.minWidth),c=Object(n.b)(this.maxHeight),l=Object(n.b)(this.maxWidth),d=Object(n.b)(this.width);return e&&(t.height=e),r&&(t.minHeight=r),o&&(t.minWidth=o),c&&(t.maxHeight=c),l&&(t.maxWidth=l),d&&(t.width=d),t}}})},377:function(t,e,r){"use strict";var n=r(0);e.a=n.a.extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var data=e.data,r=e.props,n=e.children;return data.staticClass=("v-card__title "+(data.staticClass||"")).trim(),r.primaryTitle&&(data.staticClass+=" v-card__title--primary"),t("div",data,n)}})},378:function(t,e,r){"use strict";r(117);var n=r(85);e.a=Object(n.a)("flex")},379:function(t,e,r){"use strict";r(117);var n=r(85);e.a=Object(n.a)("layout")},380:function(t,e,r){"use strict";r(381),r(382);var n=r(5);var o=r(0).a.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){return this.computedElevation?(t={},e="elevation-"+this.computedElevation,r=!0,e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t):{};var t,e,r}}}),c=r(376),l=r(8),d=r(3),h=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t},v=Object(d.a)(n.a,o,c.a,l.a).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return h({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var data={class:this.classes,style:this.styles,on:this.$listeners};return t(this.tag,this.setBackgroundColor(this.color,data),this.$slots.default)}}),m=r(43),f=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};e.a=Object(d.a)(m.a,v).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return f({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover},v.options.computed.classes.call(this))},styles:function(){var style=f({},v.options.computed.styles.call(this));return this.img&&(style.background='url("'+this.img+'") center center / cover no-repeat'),style}},render:function(t){var e=this.generateRouteLink(this.classes),r=e.tag,data=e.data;return data.style=this.styles,t(r,this.setBackgroundColor(this.color,data),this.$slots.default)}})},381:function(t,e,r){},382:function(t,e,r){},383:function(t,e,r){},384:function(t,e,r){},388:function(t,e,r){"use strict";r.d(e,"a",function(){return h});var n=r(1),o=r(367),c=r(368),l=r(378),d=r(379),h=Object(n.d)("spacer","div","v-spacer");o.a,c.a,l.a,d.a},389:function(t,e,r){"use strict";var n=r(1),o=r(380),c=(r(383),r(384),r(376)),l=r(3),d=Object(l.a)(c.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),h=r(7),v=d.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"==typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(h.a)("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch(function(e){Object(h.b)("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)}).then(t.onLoad):t.onLoad()},image.onerror=this.onError,image.src=this.normalisedSrc.src,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;!function r(){var n=img.naturalHeight,o=img.naturalWidth;n||o?t.calculatedAspectRatio=o/n:null!=e&&setTimeout(r,e)}()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=d.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}}).extend({name:"v-card-media",mounted:function(){Object(h.c)("v-card-media",this.src?"v-img":"v-responsive",this)}}),m=r(377);r.d(e,"a",function(){return f}),r.d(e,"b",function(){return _});var f=Object(n.d)("v-card__actions"),_=Object(n.d)("v-card__text");o.a,m.a},412:function(t,e,r){"use strict";r.r(e);var n={name:"Ecosystem",components:{}},o=r(25),c=r(86),l=r.n(c),d=r(78),h=r(380),v=r(389),m=r(377),f=r(378),_=r(79),y=r(379),S=r(388),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[r("v-card",[r("v-card-title",{staticClass:"headline primary--text"},[t._v("\n        Ecosystème logiciel de Vue\n      ")]),t._v(" "),r("v-card-text",[r("p",[t._v("\n          Grâce à sa popularité, Vue s'est enrichi d'un vaste écosystème de plugins et d'outillage. Une (longue) liste est disponible ici: "),r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")]),t._v(".\n        ")]),t._v(" "),r("p",[t._v("En voici une sélection de quelques-uns:")]),t._v(" "),r("h2",{staticClass:"subheading primary--text pa-2"},[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools",target:"_blank"}},[t._v("vue-devtools")])]),t._v(" "),r("p",[t._v("Une extension navigateur très utile pour déboguer des applications Vue. Disponible sur Chrome, Firefox ou en application standalone.")]),t._v(" "),r("h2",{staticClass:"subheading primary--text pa-2"},[r("a",{attrs:{href:"https://vuejs.org/v2/style-guide/",target:"_blank"}},[t._v("Vue Styleguide")])]),t._v(" "),r("p",[t._v("Un guide de style maintenu par l'équipe officielle pour lister les conventions et bonnes pratiques autour de projets Vue.")]),t._v(" "),r("h2",{staticClass:"subheading primary--text pa-2"},[r("a",{attrs:{href:"https://vue-test-utils.vuejs.org/",target:"_blank"}},[t._v("vue-test-utils")])]),t._v(" "),r("p",[t._v("\n          La suite d'outils officielle pour faire des tests unitaires sur des applications Vue. Un "),r("a",{attrs:{href:"https://fr.vuejs.org/v2/guide/unit-testing.html",target:"_blank"}},[t._v("guide d'introduction")]),t._v(" est également disponible dans la doc officielle. Notez que les tests unitaires sont excellents pour tester la logique, là où les tests end to end ou les tests manuels sont plus pertinents pour tester des pans entiers d'interface.\n        ")]),t._v(" "),r("h2",{staticClass:"subheading primary--text pa-2"},[r("a",{attrs:{href:"https://github.com/vue-a11y/vue-axe",target:"_blank"}},[t._v("vue-axe")])]),t._v(" "),r("p",[t._v("Un outil d'audit pour l'accessibilité de vos applications Vue. Il indique en console développeur la liste des défauts d'accessibilité repérés dans le code.")]),t._v(" "),r("h2",{staticClass:"subheading primary--text pa-2"},[r("a",{attrs:{href:"https://github.com/kaorun343/vue-property-decorator",target:"_blank"}},[t._v("vue-property-decorator")])]),t._v(" "),r("p",[t._v("\n          Une liste de décorateurs utiles si vous codez votre application Vue en TypeScript avec une API à base de l'opérateur "),r("code",[t._v("class")]),t._v(". A noter qu'une telle bibliothèque va probablement être "),r("a",{attrs:{href:"https://github.com/vuejs/rfcs/blob/class-api/active-rfcs/0000-class-api.md",target:"_blank"}},[t._v("fournie officiellement")]),t._v(" par l'équipe de Vue avec Vue 3, auquel cas celle-ci sera dépréciée.\n        ")]),t._v(" "),r("h2",{staticClass:"subheading primary--text pa-2"},[t._v("\n          Frameworks UI\n        ")]),t._v(" "),r("p",[t._v("Il existe de nombreux frameworks UI avec un grand nombre de composants prédéfinis et déjà stylisés, censés répondre à tous vos besoins en termes d'interface. "),r("i",[t._v("Note: ne remplace pas le travail d'un designer, ergonome et développeur CSS")]),t._v(".")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuetifyjs/vuetify",target:"_blank"}},[t._v("Vuetify")]),t._v(" (utilisé pour ce support)\n          ")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/quasarframework/quasar",target:"_blank"}},[t._v("Quasar")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/vuematerial/vue-material",target:"_blank"}},[t._v("Vue-material")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/rafaelpimpa/buefy",target:"_blank"}},[t._v("buefy")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://lusaxweb.github.io/vuesax/",target:"_blank"}},[t._v("vue-sax")])])]),t._v(" "),r("h2",{staticClass:"subheading primary--text pa-2"},[t._v("\n          Server-side rendering\n        ")]),t._v(" "),r("p",[t._v("Le rendu côté serveur (SSR) consiste à remplacer les serveurs frontaux classiques (Apache/nginx) par des interpréteurs JS (le plus souvent Node.js) qui vont exécuter Vue et générer les pages côté serveur. Cela permet de supporter les clients ayant JavaScript désactivé, améliore l'indexation sur les moteurs de recherche et améliore les performances au rendu initial.")]),t._v(" "),r("p",[r("a",{attrs:{href:"http://nuxtjs.org/",target:"_blank"}},[t._v("Nuxt")]),t._v(" est le framework SSR de référence pour Vue.js. Il propose un routage basé sur l'arborescence des sources, et assure une bascule transparente entre le rendu serveur et la prise en main côté client.\n        ")]),t._v(" "),r("v-card-title",{staticClass:"headline primary--text"},[t._v("\n          Fin de TP - exercices libres\n        ")]),t._v(" "),r("ul",[r("li",[t._v("Testez les outils qui vous intéressent")]),t._v(" "),r("li",[t._v("A l'aide du framework UI de votre choix, enjolivez votre application web :)")])])],1),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"primary",flat:"",nuxt:"",to:"/reusability"}},[r("v-icon",{attrs:{left:""}},[t._v("\n            navigate_before\n          ")]),t._v("\n          Réutilisabilité\n        ")],1),t._v(" "),r("v-spacer")],1)],1)],1)],1)},[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:h.a,VCardActions:v.a,VCardText:v.b,VCardTitle:m.a,VFlex:f.a,VIcon:_.a,VLayout:y.a,VSpacer:S.a})}}]);