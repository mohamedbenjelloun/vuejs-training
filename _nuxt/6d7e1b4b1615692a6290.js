(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{375:function(e,t,n){},376:function(e,t,n){"use strict";var r=n(1),o=n(0);t.a=o.a.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var e={},t=Object(r.b)(this.height),n=Object(r.b)(this.minHeight),o=Object(r.b)(this.minWidth),c=Object(r.b)(this.maxHeight),l=Object(r.b)(this.maxWidth),d=Object(r.b)(this.width);return t&&(e.height=t),n&&(e.minHeight=n),o&&(e.minWidth=o),c&&(e.maxHeight=c),l&&(e.maxWidth=l),d&&(e.width=d),e}}})},377:function(e,t,n){"use strict";var r=n(0);t.a=r.a.extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(e,t){var data=t.data,n=t.props,r=t.children;return data.staticClass=("v-card__title "+(data.staticClass||"")).trim(),n.primaryTitle&&(data.staticClass+=" v-card__title--primary"),e("div",data,r)}})},378:function(e,t,n){"use strict";n(117);var r=n(85);t.a=Object(r.a)("flex")},379:function(e,t,n){"use strict";n(117);var r=n(85);t.a=Object(r.a)("layout")},380:function(e,t,n){"use strict";n(381),n(382);var r=n(5);var o=n(0).a.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){return this.computedElevation?(e={},t="elevation-"+this.computedElevation,n=!0,t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e):{};var e,t,n}}}),c=n(376),l=n(8),d=n(3),v=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var t in source)Object.prototype.hasOwnProperty.call(source,t)&&(e[t]=source[t])}return e},m=Object(d.a)(r.a,o,c.a,l.a).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return v({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(e){var data={class:this.classes,style:this.styles,on:this.$listeners};return e(this.tag,this.setBackgroundColor(this.color,data),this.$slots.default)}}),h=n(43),_=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var t in source)Object.prototype.hasOwnProperty.call(source,t)&&(e[t]=source[t])}return e};t.a=Object(d.a)(h.a,m).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return _({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover},m.options.computed.classes.call(this))},styles:function(){var style=_({},m.options.computed.styles.call(this));return this.img&&(style.background='url("'+this.img+'") center center / cover no-repeat'),style}},render:function(e){var t=this.generateRouteLink(this.classes),n=t.tag,data=t.data;return data.style=this.styles,e(n,this.setBackgroundColor(this.color,data),this.$slots.default)}})},381:function(e,t,n){},382:function(e,t,n){},383:function(e,t,n){},384:function(e,t,n){},385:function(e,t,n){"use strict";var r=n(375);n.n(r).a},386:function(e,t,n){},387:function(e,t,n){"use strict";var r={data:function(){return{show:!1}},props:{code:{type:String,default:""},language:{type:String,default:"javascript"},copyable:{type:Boolean,default:!1}},computed:{slotContent:function(){return this.code||this.$slots.default?(this.$slots.default[0].text||"").trim():(console.error("Missing content for code-copy element"),"[Missing content]")}},methods:{copy:function(){if(this.copyable){var e=document.createElement("textarea");e.value=this.code||this.slotContent,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.show=!0}}}},o=(n(385),n(25)),c=n(86),l=n.n(c),d=(n(386),n(5)),v=n(19),m=n(44),h=n(3),_=Object(h.a)(d.a,v.a,Object(m.b)(["absolute","top","bottom","left","right"])).extend({name:"v-snackbar",props:{autoHeight:Boolean,multiLine:Boolean,timeout:{type:Number,default:6e3},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--active":this.isActive,"v-snack--absolute":this.absolute,"v-snack--auto-height":this.autoHeight,"v-snack--bottom":this.bottom||!this.top,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--top":this.top,"v-snack--vertical":this.vertical}}},watch:{isActive:function(){this.setTimeout()}},mounted:function(){this.setTimeout()},methods:{setTimeout:function(){var e=this;window.clearTimeout(this.activeTimeout),this.isActive&&this.timeout&&(this.activeTimeout=window.setTimeout(function(){e.isActive=!1},this.timeout))}},render:function(e){return e("transition",{attrs:{name:"v-snack-transition"}},this.isActive&&[e("div",{staticClass:"v-snack",class:this.classes,on:this.$listeners},[e("div",this.setBackgroundColor(this.color,{staticClass:"v-snack__wrapper"}),[e("div",{staticClass:"v-snack__content"},this.$slots.default)])])])}}),component=Object(o.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{copyable:e.copyable,copy:!0},on:{click:e.copy}},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code||e.slotContent,expression:"code || slotContent"}]},[n("code",{class:e.language})]),e._v(" "),n("v-snackbar",{attrs:{timeout:2e3},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[e._v("\n    Copié ;-)\n  ")]),e._v(" "),n("br")],1)},[],!1,null,"55ae2834",null);t.a=component.exports;l()(component,{VSnackbar:_})},388:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var r=n(1),o=n(367),c=n(368),l=n(378),d=n(379),v=Object(r.d)("spacer","div","v-spacer");o.a,c.a,l.a,d.a},389:function(e,t,n){"use strict";var r=n(1),o=n(380),c=(n(383),n(384),n(376)),l=n(3),d=Object(l.a)(c.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(e){return e("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),v=n(7),m=d.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"==typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var e=[],t=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&e.push("linear-gradient("+this.gradient+")"),t&&e.push('url("'+t+'")');var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:e.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var e=new Image;e.src=this.normalisedSrc.lazySrc,this.pollForSize(e,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(v.a)("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var e=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch(function(t){Object(v.b)("Failed to decode image, trying to render anyway\n\nsrc: "+e.normalisedSrc.src+(t.message?"\nOriginal error: "+t.message:""),e)}).then(e.onLoad):e.onLoad()},image.onerror=this.onError,image.src=this.normalisedSrc.src,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var e=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;!function n(){var r=img.naturalHeight,o=img.naturalWidth;r||o?e.calculatedAspectRatio=o/r:null!=t&&setTimeout(n,t)}()},__genPlaceholder:function(){if(this.$slots.placeholder){var e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},e):e[0]}}},render:function(e){var t=d.options.render.call(this,e);return t.data.staticClass+=" v-image",t.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},t.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],e(t.tag,t.data,t.children)}}).extend({name:"v-card-media",mounted:function(){Object(v.c)("v-card-media",this.src?"v-img":"v-responsive",this)}}),h=n(377);n.d(t,"a",function(){return _}),n.d(t,"b",function(){return f});var _=Object(r.d)("v-card__actions"),f=Object(r.d)("v-card__text");o.a,h.a},413:function(e,t,n){"use strict";n.r(t);var r={components:{CodeCopy:n(387).a},data:function(){return{example_shared_state:'const state = {}\n// or import state from "@/services/state.js"\n\nconst vueA = new Vue({\n  data: state\n})\n\nconst vueB = new Vue({\n  data(){\n    return {\n      sharedState: state,\n      privateState: {}\n    }\n  }\n})',example_store:'//store.js\nconst state = { message: "bonjour" }\n\nexport const store = {\n  get(prop){\n    if(DEBUG_MODE) console.log("[store] get", prop)\n    return state[prop]\n  },\n  set(prop, value){\n    if(DEBUG_MODE) console.log("[store] set", prop)\n    state[prop] = value\n  }\n}',example_store_template:'\x3c!-- MyComponent.vue --\x3e\n<script>\nimport store from "@/services/store.js"\n\nexport default {\n  data(){\n    return {\n      privateState: {},\n      store\n    }\n  },\n  computed: {\n    message(){\n      return this.store.get("message")\n    }\n  },\n  methods: {\n    exit(){\n      this.store.set("message", "bye!")\n    }\n  }\n}\n<\/script>',vuex_store:"import Vue from 'vue'\nimport Vuex from 'vuex'\nimport createPersistedState from 'vuex-persistedstate'\n\nVue.use(Vuex)\n\nexport default new Vuex.Store({\n  strict: true,\n  plugins: [\n    createPersistedState()\n  ],\n  state: {\n    loggedIn: false\n  },\n  mutations: {\n    setLoggedIn (state, loggedIn) {\n      state.loggedIn = loggedIn\n    }\n  },\n  actions: {\n    setLoggedIn ({commit}, loggedIn) {\n      commit('setLoggedIn', loggedIn)\n    }\n  }\n})"}}},o=n(25),c=n(86),l=n.n(c),d=n(78),v=n(380),m=n(389),h=n(377),_=n(378),f=n(79),y=n(379),x=n(388),component=Object(o.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[n("v-card",[n("v-card-title",{staticClass:"headline primary--text"},[e._v("\n          Gestion d'état\n        ")]),e._v(" "),n("v-card-text",[n("p",[e._v("Nous avons vu dans la section précédente comment communiquaient les composants parents et enfants. Toutefois, à mesure que les applications grandissent et se complexifient, des composants très éloignés dans l'arborescence peuvent être amenées à manipuler les mêmes données. Il devient alors très fastidieux de les faire communiquer entre eux pour travailler sur les mêmes références de données. C'est pourquoi il existe des solutions plus ou moins complexes de gestion d'état, ou "),n("i",[e._v("state management")]),e._v(".")]),e._v(" "),n("h2",{staticClass:"subheading primary--text pa-2"},[e._v("\n            Pourquoi une solution de gestion d'état ?\n          ")]),e._v(" "),n("img",{attrs:{src:"https://i.imgur.com/PSYBCRG.png",alt:"Problème multiple vues avec props partagés"}}),e._v(" "),n("ul",[n("li",[e._v("Parce que passer une variable ("),n("code",[e._v("props")]),e._v(") entre 2 composants (parent, enfant) c'est bien, mais si l'on veut la propager aux petits-enfants et arrières petits enfants, cela devient compliqué")]),e._v(" "),n("li",[e._v("Parce que partager de l'information entre des composants non liés (ex: informations de l'utilisateur connecté) n'est pas réalisable.")]),e._v(" "),n("li",[e._v('Parce qu\'il est plus facile de déléguer la tâche à un "singleton" tiers accessible depuis tous les composants')]),e._v(" "),n("li",[e._v('Parce qu\'il est souhaitable que le "store" puisse être persisté (sur le localStorage par ex.)')])]),e._v(" "),n("h2",{staticClass:"subheading primary--text pa-2"},[e._v("\n            Données partagées par référence\n          ")]),e._v(" "),n("p",[e._v("La solution la plus évidente et la plus simple au problème de gestion d'état est de stocker les données au sein d'un ou plusieurs objets déclarés dans leur propre module, puis d'exporter ces objets. Tous les composants voulant manipuler ces données peuvent alors importer l'objet et travailleront sur la même référence.")]),e._v(" "),n("code-copy",{attrs:{language:"javascript",code:e.example_shared_state}}),e._v(" "),n("p",[e._v("Cette solution peut faire l'affaire dans de nombreux cas, mais montre rapidement ses limites au débogage lorsqu'un grand nombre de composants différents interagissent avec les données. En effet, les mutations sur les objets d'état ne sont tracées nulle part, ce qui complexifie l'identification de la source d'un bug.")]),e._v(" "),n("h2",{staticClass:"subheading primary--text pa-2"},[e._v("\n            Store et mutations contrôlées\n          ")]),e._v(" "),n("p",[e._v("Un pattern un peu plus avancé est de déclarer un objet store qui encapsule l'objet d'état. L'objet d'état n'est pas directement accessible de l'extérieur par référence, mais le store fournit des méthodes pour interagir avec: typiquement un getter/setter. Ce sont dans ces méthodes que l'on pourra ajouter des instructions de débogage, monitoring, mesure de performance etc.")]),e._v(" "),n("code-copy",{attrs:{language:"javascript",code:e.example_store}}),e._v(" "),n("code-copy",{attrs:{language:"html",code:e.example_store_template}}),e._v(" "),n("h2",{staticClass:"subheading primary--text pa-2"},[e._v("\n            Vuex\n          ")]),e._v(" "),n("p",[e._v("Une fois que l'on dispose d'un store, on est tenté de l'enrichir de nombreuses fonctionnalités en profitant de la centralisation des mutations d'état. Cela a été un terrain de recherche pour de nombreuses équipes de développement, notamment en dehors de l'écosystème Vue avec par exemple les travaux sur l'architecture "),n("i",[e._v("Flux")]),e._v(" par l'équipe de React.")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://vuex.vuejs.org/",target:"_blank"}},[e._v("Vuex")]),e._v(" est l'aboutissement de ce pattern de store. Il est fourni par l'équipe de Vue comme solution \"officielle\" de gestion d'état, et sert de store centralisé pour tous les composants d'une application. Il fonctionne selon les principes suivants:\n          ")]),e._v(" "),n("ul",[n("li",[e._v("Une "),n("em",[e._v("mutation")]),e._v(" correspond à une méthode permettant de modifier l'état du Store. Elle est obligatoirement synchrone.")]),e._v(" "),n("li",[e._v("Une "),n("em",[e._v("action")]),e._v(" permet de dispatcher une ou plusieurs mutations. Elle peut être asynchrone.")]),e._v(" "),n("li",[e._v("Les composants modifient l'état applicatif en invoquant des actions")]),e._v(" "),n("li",[e._v("L'état muté à la suite de mutations met à jour de façon réactive toutes les vues associées, peu importe leur niveau dans l'arborescence")])]),e._v(" "),n("img",{attrs:{src:"https://vuex.vuejs.org/vuex.png",alt:"Vuex et les composants"}}),e._v(" "),n("h2",{staticClass:"subheading primary--text pa-2"},[e._v("\n            Installation de vuex\n          ")]),e._v(" "),n("p",[e._v("Installer la dépendance Vuex, ainsi que Vuex-PersistedState pour persister les stores dans le localStorage")]),e._v(" "),n("code-copy",{attrs:{code:"npm install vuex vuex-persistedstate",language:"shell"}}),e._v(" "),n("h2",{staticClass:"subheading primary--text pa-2"},[e._v("\n            Création d'un Store vuex\n          ")]),e._v(" "),n("p",[e._v("- Créer un fichier "),n("code",[e._v("src/store.js")]),e._v(", et y placer le contenu suivant")]),e._v(" "),n("code-copy",{attrs:{copyable:!0,code:e.vuex_store}}),e._v(" "),n("p",[e._v("Le mode strict permet de lancer une erreur si le store Vuex est modifié en dehors des mutateurs. "),n("span",{staticStyle:{color:"red","font-weight":"bold"}},[e._v("Attention !")]),e._v(" Ce mode doit être désactivé en production !")]),e._v(" "),n("p",[e._v("- Déclarez le store dans votre application en complétant le fichier "),n("code",[e._v("main.js")]),e._v(" comme ceci:")]),e._v(" "),n("code-copy",{attrs:{code:"import store from '@/store'\n\nnew Vue({\n  render: h => h(App),\n  store\n}).$mount('#app')\n"}}),e._v(" "),n("p",[e._v("- Pour modifier la valeur d'un élément depuis un composant")]),e._v(" "),n("code-copy",{attrs:{code:"this.$store.dispatch('setLoggedIn', true)"}}),e._v(" "),n("p",[e._v("- Pour déclarer une variable du Store comme propriété")]),e._v(" "),n("code-copy",{attrs:{code:"import {mapState} from 'vuex'\ncomputed: {\n    ...mapState([\n      'loggedIn'\n    ])\n  }"}}),e._v(" "),n("h1",{staticClass:"headline primary--text pa-4"},[e._v("\n            TP\n          ")]),e._v(" "),n("ol",[n("li",[e._v("Installez "),n("code",[e._v("vuex")]),e._v(" et "),n("code",[e._v("vuex-persistedstate")]),e._v(" sur votre projet.")]),e._v(" "),n("li",[e._v("Créez un store et mettez la variable "),n("code",[e._v("loggedIn")]),e._v(" dedans.")]),e._v(" "),n("li",[e._v("Dans "),n("code",[e._v("LoginForm.vue")]),e._v(", lors du submit, vérifier si l'utilisateur a entré l'adresse mail "),n("code",[e._v("test@test.com")]),e._v(" et le mot de passe "),n("code",[e._v("test123")]),e._v(", si c'est le cas mettre à "),n("code",[e._v("true")]),e._v(" la valeur de "),n("code",[e._v("loggedIn")]),e._v(" dans le store (en utilisant un dispatch).")]),e._v(" "),n("li",[e._v("Si l'utilisateur a entré de fausses informations, afficher un message d'erreur")]),e._v(" "),n("li",[e._v("Se connecter avec les identifiants cités ci-haut, puis rafraîchir la page. "),n("i",[e._v("Question : pourquoi le formulaire de login ne s'affiche plus ?")])]),e._v(" "),n("li",[e._v("Ajouter un bouton de déconnexion "),n("code",[e._v('<button id="logout-btn">')]),e._v(" qui modifie la valeur de "),n("code",[e._v("loggedIn")]),e._v(" du store")])])],1),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"primary",flat:"",nuxt:"",to:"/reactivity"}},[n("v-icon",{attrs:{left:""}},[e._v("\n              navigate_before\n            ")]),e._v("\n            Réactivité\n          ")],1),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"primary",flat:"",nuxt:"",to:"/routing"}},[e._v("\n            Routage\n            "),n("v-icon",{attrs:{right:""}},[e._v("\n              navigate_next\n            ")])],1)],1)],1)],1)],1)},[],!1,null,null,null);t.default=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.a,VCardText:m.b,VCardTitle:h.a,VFlex:_.a,VIcon:f.a,VLayout:y.a,VSpacer:x.a})}}]);