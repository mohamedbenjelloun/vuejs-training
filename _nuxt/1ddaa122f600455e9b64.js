(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{376:function(e,t,r){"use strict";var n=r(1),o=r(0);t.a=o.a.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var e={},t=Object(n.b)(this.height),r=Object(n.b)(this.minHeight),o=Object(n.b)(this.minWidth),c=Object(n.b)(this.maxHeight),l=Object(n.b)(this.maxWidth),d=Object(n.b)(this.width);return t&&(e.height=t),r&&(e.minHeight=r),o&&(e.minWidth=o),c&&(e.maxHeight=c),l&&(e.maxWidth=l),d&&(e.width=d),e}}})},377:function(e,t,r){"use strict";var n=r(0);t.a=n.a.extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(e,t){var data=t.data,r=t.props,n=t.children;return data.staticClass=("v-card__title "+(data.staticClass||"")).trim(),r.primaryTitle&&(data.staticClass+=" v-card__title--primary"),e("div",data,n)}})},378:function(e,t,r){"use strict";r(117);var n=r(85);t.a=Object(n.a)("flex")},379:function(e,t,r){"use strict";r(117);var n=r(85);t.a=Object(n.a)("layout")},380:function(e,t,r){"use strict";r(381),r(382);var n=r(5);var o=r(0).a.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){return this.computedElevation?(e={},t="elevation-"+this.computedElevation,r=!0,t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e):{};var e,t,r}}}),c=r(376),l=r(8),d=r(3),v=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var t in source)Object.prototype.hasOwnProperty.call(source,t)&&(e[t]=source[t])}return e},m=Object(d.a)(n.a,o,c.a,l.a).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return v({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(e){var data={class:this.classes,style:this.styles,on:this.$listeners};return e(this.tag,this.setBackgroundColor(this.color,data),this.$slots.default)}}),h=r(43),_=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var t in source)Object.prototype.hasOwnProperty.call(source,t)&&(e[t]=source[t])}return e};t.a=Object(d.a)(h.a,m).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return _({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover},m.options.computed.classes.call(this))},styles:function(){var style=_({},m.options.computed.styles.call(this));return this.img&&(style.background='url("'+this.img+'") center center / cover no-repeat'),style}},render:function(e){var t=this.generateRouteLink(this.classes),r=t.tag,data=t.data;return data.style=this.styles,e(r,this.setBackgroundColor(this.color,data),this.$slots.default)}})},381:function(e,t,r){},382:function(e,t,r){},383:function(e,t,r){},384:function(e,t,r){},388:function(e,t,r){"use strict";r.d(t,"a",function(){return v});var n=r(1),o=r(367),c=r(368),l=r(378),d=r(379),v=Object(n.d)("spacer","div","v-spacer");o.a,c.a,l.a,d.a},389:function(e,t,r){"use strict";var n=r(1),o=r(380),c=(r(383),r(384),r(376)),l=r(3),d=Object(l.a)(c.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(e){return e("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),v=r(7),m=d.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"==typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var e=[],t=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&e.push("linear-gradient("+this.gradient+")"),t&&e.push('url("'+t+'")');var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:e.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var e=new Image;e.src=this.normalisedSrc.lazySrc,this.pollForSize(e,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(v.a)("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var e=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch(function(t){Object(v.b)("Failed to decode image, trying to render anyway\n\nsrc: "+e.normalisedSrc.src+(t.message?"\nOriginal error: "+t.message:""),e)}).then(e.onLoad):e.onLoad()},image.onerror=this.onError,image.src=this.normalisedSrc.src,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var e=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;!function r(){var n=img.naturalHeight,o=img.naturalWidth;n||o?e.calculatedAspectRatio=o/n:null!=t&&setTimeout(r,t)}()},__genPlaceholder:function(){if(this.$slots.placeholder){var e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},e):e[0]}}},render:function(e){var t=d.options.render.call(this,e);return t.data.staticClass+=" v-image",t.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},t.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],e(t.tag,t.data,t.children)}}).extend({name:"v-card-media",mounted:function(){Object(v.c)("v-card-media",this.src?"v-img":"v-responsive",this)}}),h=r(377);r.d(t,"a",function(){return _}),r.d(t,"b",function(){return f});var _=Object(n.d)("v-card__actions"),f=Object(n.d)("v-card__text");o.a,h.a},390:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTYuMzIgMTcwLjAyIj4KICA8cGF0aCBmaWxsPSIjNDJiODgzIiBkPSJNMTIwLjgzIDBMOTguMTYgMzkuMjYgNzUuNDkgMEgwbDk4LjE2IDE3MC4wMkwxOTYuMzIgMGgtNzUuNDl6Ii8+CiAgPHBhdGggZmlsbD0iIzM1NDk1ZSIgZD0iTTEyMC44MyAwTDk4LjE2IDM5LjI2IDc1LjQ5IDBIMzkuMjZsNTguOSAxMDIuMDFMMTU3LjA2IDBoLTM2LjIzeiIvPgo8L3N2Zz4K"},391:function(e,t,r){},394:function(e,t,r){e.exports=r.p+"img/1de295d.jpg"},395:function(e,t,r){e.exports=r.p+"img/68390d0.jpg"},396:function(e,t,r){e.exports=r.p+"img/127b737.jpg"},397:function(e,t,r){e.exports=r.p+"img/d8bf69b.jpg"},398:function(e,t,r){e.exports=r.p+"img/38ab4a4.jpg"},399:function(e,t,r){e.exports=r.p+"img/d7eff42.jpg"},400:function(e,t,r){e.exports=r.p+"img/951bbf5.jpg"},401:function(e,t,r){"use strict";var n=r(391);r.n(n).a},410:function(e,t,r){"use strict";r.r(t);var n={components:{}},o=(r(401),r(25)),c=r(86),l=r.n(c),d=r(78),v=r(380),m=r(389),h=r(377),_=r(378),f=r(79),x=r(379),y=r(388),component=Object(o.a)(n,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[n("div",{staticClass:"text-xs-center"},[n("img",{staticClass:"mb-5",attrs:{src:r(390),alt:"Vue.js",height:"100"}})]),e._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline primary--text"},[e._v("\n        Présentation de Vue.js\n      ")]),e._v(" "),n("v-card-text",[n("p",[e._v("Vue (prononcé /vjuː/, comme le terme anglais view) est un framework évolutif pour construire des interfaces utilisateurs. À la différence des autres frameworks monolithiques, Vue a été conçu et pensé pour pouvoir être adopté de manière incrémentale. Le cœur de la bibliothèque est concentré uniquement sur la partie vue, et il est vraiment simple de l’intégrer avec d’autres bibliothèques ou projets existants. D’un autre côté, Vue est tout à fait capable de faire tourner des applications web monopages quand il est couplé avec des outils modernes et des bibliothèques complémentaires.")])])],1),e._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline primary--text"},[e._v("\n        Historique\n      ")]),e._v(" "),n("v-card-text",[n("p",[e._v("\n          Vue.js a été créé à l'origine par une seule personne, "),n("a",{attrs:{href:"https://evanyou.me/",target:"_blank"}},[e._v("Evan You")]),e._v(", ancien ingénieur de Google ayant notamment travaillé avec Angular.js puis sur le framework Meteor. Après avoir expérimenté une mécanique de réactivité qu'il jugeait plus intéressante que celle d'Angular, il décide de publier ses premiers résultats en juillet 2013. Cinq ans plus tard, Vue.js est le 3ème projet sur Github en nombre de stars et Evan enchaîne les conférences à travers le monde.\n        ")]),e._v(" "),n("div",{staticClass:"text-xs-center"},[n("img",{attrs:{src:r(395),height:"400"}})])])],1),e._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline primary--text"},[e._v("\n        L'équipe de développement\n      ")]),e._v(" "),n("v-card-text",[n("p",[e._v("\n          Vue dispose aujourd'hui d'une équipe internationale d'une trentaine de personnes, constituée de contributeurs bénévoles qui se sont formés avec les années. La décentralisation complète de l'équipe est à la fois une contrainte et une force qui lui a permis de diffuser le framework beaucoup plus rapidement à plusieurs endroits à la fois. On peut ainsi trouver facilement un contributeur Vue.js pas loin de chez soi, par exemple Guillaume Chau alias "),n("a",{attrs:{href:"https://twitter.com/akryum",target:"_blank"}},[e._v("Akryum")]),e._v(" à Lyon. Cela permet aussi d'avoir du support rapidement peu importe le fuseau horaire.\n        ")]),e._v(" "),n("div",{staticClass:"text-xs-center"},[n("img",{attrs:{src:r(396),height:"400"}}),e._v(" "),n("a",{attrs:{href:"https://vuejs.org/v2/guide/team.html",target:"blank"}},[e._v("https://vuejs.org/v2/guide/team.html")])])])],1),e._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline primary--text"},[e._v("\n        Business model et financement\n      ")]),e._v(" "),n("v-card-text",[n("p",[e._v("Contrairement à React et Angular qui sont portés respectivement par les entreprises Facebook et Google, Vue.js est totalement indépendant et entièrement piloté par la communauté. Ce sont donc les intérêts de la communauté qui priment pour le pilotage du projet et la roadmap à suivre.")]),e._v(" "),n("p",[e._v("Toutefois, cela soulève la question du financement. Beaucoup de contributeurs sont bénévoles mais pour répondre au gain de popularité du framework, plusieurs ont quitté leur emploi ou sont passés à mi-temps pour s'impliquer sur Vue. Pour se rémunérer, ils comptent ainsi sur du sponsoring et sur des donations individuelles via des sites tels que Patreon. Grâce au succès du framework, Evan et son équipe ont aujourd'hui un soutien financier suffisant pour travailler à plein temps sur Vue, mais également pour organiser des conférences à travers le monde. Et les sources des donations sont suffisamment variées pour préserver l'indépendance du framework.")]),e._v(" "),n("div",{staticClass:"text-xs-center"},[n("img",{attrs:{src:r(397),height:"400"}})])])],1),e._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline primary--text"},[e._v("\n        Popularité\n      ")]),e._v(" "),n("v-card-text",[n("p",[e._v("Vue.js a battu des records en termes de hausse de popularité depuis 2015. Il s'agit aujourd'hui du 2ème projet en nombre de stars sur Github. Malgré l'absence de financement, de nombreux meetups et conférences se sont auto-organisés dans différents pays. Il s'agit de l'un des succès les plus retentissants dans le monde open-source depuis ces cinq dernières années.")]),e._v(" "),n("p",[e._v("Le secret de son succès ? Rien de révolutionnaire : un focus sur la simplicité, une courbe d'apprentissage très faible, une excellente documentation et une communauté à l'écoute.")]),e._v(" "),n("div",{staticClass:"text-xs-center"},[n("img",{attrs:{src:r(398),height:"400"}})])])],1),e._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline primary--text"},[e._v("\n        Comparaison avec les autres frameworks\n      ")]),e._v(" "),n("v-card-text",[n("p",[e._v("Tâchons de comparer Vue avec les deux autres frameworks JS les plus populaires, React et Angular.")]),e._v(" "),n("div",{staticClass:"text-xs-center"},[n("img",{attrs:{src:r(394),width:"400"}})]),e._v(" "),n("h2",{staticClass:"title my-3"},[e._v("\n          Points communs entre ces 3 frameworks\n        ")]),e._v(" "),n("ul",[n("li",[e._v("Très populaires, utilisé par de grosses entreprises")]),e._v(" "),n("li",[e._v("Matures, stables, support à long terme financé")]),e._v(" "),n("li",[e._v("Codebase orientée composants")]),e._v(" "),n("li",[e._v("Adapté aux stacks modernes (ES6+ / TypeScript)")]),e._v(" "),n("li",[e._v("Large écosystème de composants et d’outillage")])]),e._v(" "),n("h2",{staticClass:"title my-3"},[e._v("\n          Positionnement / autodescription\n        ")]),e._v(" "),n("div",{staticClass:"text-xs-center"},[n("img",{attrs:{src:r(399),width:"960"}})]),e._v(" "),n("p",[e._v("React, Vue et Angular se positionnent dans des catégories différentes et cela s'observe dès les premières lignes d'introduction. React se définit comme une "),n("i",[e._v("bibliothèque")]),e._v(" indépendante du reste de la stack technique. Angular se définit comme "),n("i",[e._v("le framework unique")]),e._v(" répondant à tous les besoins, desktop comme mobile. Tandis que Vue se positionne entre deux comme un framework progressif, polyvalent et que l'on peut adopter par étapes. Un juste milieu entre une bibliothèque et un framework tout équipé.")]),e._v(" "),n("h2",{staticClass:"title my-3"},[e._v("\n          Langages, style et stack technique\n        ")]),e._v(" "),n("div",{staticClass:"text-xs-center"},[n("table",{staticClass:"mx-auto"},[n("thead",[n("th"),e._v(" "),n("th",{attrs:{width:"300"}},[e._v("\n                React\n              ")]),e._v(" "),n("th",{attrs:{width:"300"}},[e._v("\n                Vue.js\n              ")]),e._v(" "),n("th",{attrs:{width:"300"}},[e._v("\n                Angular\n              ")])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("Langage")]),e._v(" "),n("td",[e._v("JSX*")]),e._v(" "),n("td",[e._v("JSX et TypeScript en option")]),e._v(" "),n("td",[e._v("TypeScript*")])]),e._v(" "),n("tr",[n("td",[e._v("Paradigme")]),e._v(" "),n("td",[e._v("Favorise la prog fonctionnelle")]),e._v(" "),n("td",[e._v("Favorise la prog déclarative")]),e._v(" "),n("td",[e._v("Mélange prog déclarative orientée classes et prog fonctionnelle (RxJS)")])]),e._v(" "),n("tr",[n("td",[e._v("Gestion d'état")]),e._v(" "),n("td",[e._v("State centralisé non mutable (Flux)")]),e._v(" "),n("td",[e._v("State centralisé en option (Vuex), sinon interne et mutable")]),e._v(" "),n("td",[e._v("State interne et mutable, pas de state centralisé officiel")])]),e._v(" "),n("tr",[n("td",[e._v("Gestion de la réactivité")]),e._v(" "),n("td",[e._v("Manuelle ("),n("code",[e._v("setState")]),e._v(" + VDOM diffing)")]),e._v(" "),n("td",[e._v("Automatique (observers/Proxies)")]),e._v(" "),n("td",[e._v("Automatique (Zones/dirty-checking)")])]),e._v(" "),n("tr",[n("td",[e._v("Stack")]),e._v(" "),n("td",[e._v("Ne se suffit pas à lui-même, à intégrer dans une stack web avec d’autres outils en externe. Ecosystème riche.")]),e._v(" "),n("td",[e._v("Quelques outils officiels maintenus par la team Vue, d’autres à chercher en externe. Promeut des solutions tierces si elles sont appopriées.")]),e._v(" "),n("td",[e._v("Framework full stack et auto-suffisant, avec options de sécurité incluses nativement. Complet mais plus fermé.")])])])])]),e._v(" "),n("p",{staticStyle:{"font-style":"italic",color:"gray"}},[e._v("\n          * non obligatoire mais fortement recommandé\n          "),n("br"),e._v("State = objet de données représentant l’état de l’application ; interne = propre à chaque composant\n        ")]),e._v(" "),n("h2",{staticClass:"title my-3"},[e._v("\n          Comparaison en métaphore\n        ")]),e._v(" "),n("div",{staticClass:"text-xs-center"},[n("img",{attrs:{src:r(394),width:"800"}}),e._v(" "),n("img",{attrs:{src:r(400),width:"800"}})]),e._v(" "),n("v-layout",[n("v-flex",{attrs:{xs4:""}},[n("ul",[n("li",[e._v("Fait une seule chose mais le fait très bien")]),e._v(" "),n("li",[e._v("A ne pas mettre entre toutes les mains")]),e._v(" "),n("li",[e._v("Innovant et disruptif")]),e._v(" "),n("li",[e._v("Prévoir des pièces de rechange")])])]),e._v(" "),n("v-flex",{attrs:{xs4:""}},[n("ul",[n("li",[e._v("Accessible et simple à prendre en main")]),e._v(" "),n("li",[e._v("Familiarité à l’utilisation")]),e._v(" "),n("li",[e._v("Efficace rapidement, peut peiner sur la longueur")]),e._v(" "),n("li",[e._v("Assez conventionnel, mais gros potentiel de tuning")])])]),e._v(" "),n("v-flex",{attrs:{xs4:""}},[n("ul",[n("li",[e._v("Tout équipé toutes options")]),e._v(" "),n("li",[e._v("Catégorie poids lourd")]),e._v(" "),n("li",[e._v("Plus lent au démarrage, mais tient bien la longueur")]),e._v(" "),n("li",[e._v("Pièces de rechange hors-constructeur plus dures à trouver sur le marché")])])])],1)],1),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"primary",flat:"",nuxt:"",to:"/"}},[n("v-icon",{attrs:{left:""}},[e._v("\n            navigate_before\n          ")]),e._v("Accueil\n        ")],1),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"primary",flat:"",nuxt:"",to:"/tools"}},[e._v("\n          Outillage\n          "),n("v-icon",{attrs:{right:""}},[e._v("\n            navigate_next\n          ")])],1)],1)],1)],1)],1)},[],!1,null,"4c75ed2c",null);t.default=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.a,VCardText:m.b,VCardTitle:h.a,VFlex:_.a,VIcon:f.a,VLayout:x.a,VSpacer:y.a})}}]);