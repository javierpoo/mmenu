;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    root.jquery_mmenu_all_js = factory(root.jQuery);
  }
}(this, function(jQuery) {
/*
 * jQuery mmenu v7.0.0
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-NC-4.0
 * http://creativecommons.org/licenses/by-nc/4.0/
 */
!function(e){function t(){e[n].glbl||(l={$wndw:e(window),$docu:e(document),$html:e("html"),$body:e("body")},s={},a={},r={},e.each([s,a,r],function(e,t){t.add=function(e){e=e.split(" ");for(var n=0,i=e.length;n<i;n++)t[e[n]]=t.mm(e[n])}}),s.mm=function(e){return"mm-"+e},s.add("wrapper menu panels panel nopanel navbar listview nolistview listitem btn hidden"),s.umm=function(e){return"mm-"==e.slice(0,3)&&(e=e.slice(3)),e},a.mm=function(e){return"mm-"+e},a.add("parent child title"),r.mm=function(e){return e+".mm"},r.add("transitionend webkitTransitionEnd click scroll resize keydown mousedown mouseup touchstart touchmove touchend orientationchange"),e[n]._c=s,e[n]._d=a,e[n]._e=r,e[n].glbl=l)}var n="mmenu",i="7.0.0";if(!(e[n]&&e[n].version>i)){e[n]=function(e,t,n){return this.$menu=e,this._api=["bind","getInstance","initPanels","openPanel","closePanel","closeAllPanels","setSelected"],this.opts=t,this.conf=n,this.vars={},this.cbck={},this.mtch={},"function"==typeof this.___deprecated&&this.___deprecated(),this._initHooks(),this._initWrappers(),this._initAddons(),this._initExtensions(),this._initMenu(),this._initPanels(),this._initOpened(),this._initAnchors(),this._initMatchMedia(),"function"==typeof this.___debug&&this.___debug(),this},e[n].version=i,e[n].uniqueId=0,e[n].wrappers={},e[n].addons={},e[n].defaults={hooks:{},extensions:[],wrappers:[],navbar:{add:!0,title:"Menu",titleLink:"parent"},onClick:{setSelected:!0},slidingSubmenus:!0},e[n].configuration={classNames:{divider:"Divider",inset:"Inset",nolistview:"NoListview",nopanel:"NoPanel",panel:"Panel",selected:"Selected",spacer:"Spacer",vertical:"Vertical"},clone:!1,openingInterval:25,panelNodetype:"ul, ol, div",transitionDuration:400},e[n].prototype={getInstance:function(){return this},initPanels:function(e){this._initPanels(e)},openPanel:function(t,i){if(this.trigger("openPanel:before",t),t&&t.length&&(t.is("."+s.panel)||(t=t.closest("."+s.panel)),t.is("."+s.panel))){var r=this;if("boolean"!=typeof i&&(i=!0),t.parent("."+s.listitem+"_vertical").length)t.parents("."+s.listitem+"_vertical").addClass(s.listitem+"_opened").children("."+s.panel).removeClass(s.hidden),this.openPanel(t.parents("."+s.panel).not(function(){return e(this).parent("."+s.listitem+"_vertical").length}).first()),this.trigger("openPanel:start",t),this.trigger("openPanel:finish",t);else{if(t.hasClass(s.panel+"_opened"))return;var l=this.$pnls.children("."+s.panel),o=this.$pnls.children("."+s.panel+"_opened");if(!e[n].support.csstransitions)return o.addClass(s.hidden).removeClass(s.panel+"_opened"),t.removeClass(s.hidden).addClass(s.panel+"_opened"),this.trigger("openPanel:start",t),void this.trigger("openPanel:finish",t);l.not(t).removeClass(s.panel+"_opened-parent");for(var d=t.data(a.parent);d;)d=d.closest("."+s.panel),d.parent("."+s.listitem+"_vertical").length||d.addClass(s.panel+"_opened-parent"),d=d.data(a.parent);l.removeClass(s.panel+"_highest").not(o).not(t).addClass(s.hidden),t.removeClass(s.hidden);var c=function(){o.removeClass(s.panel+"_opened"),t.addClass(s.panel+"_opened"),t.hasClass(s.panel+"_opened-parent")?(o.addClass(s.panel+"_highest"),t.removeClass(s.panel+"_opened-parent")):(o.addClass(s.panel+"_opened-parent"),t.addClass(s.panel+"_highest")),r.trigger("openPanel:start",t)},h=function(){o.removeClass(s.panel+"_highest").addClass(s.hidden),t.removeClass(s.panel+"_highest"),r.trigger("openPanel:finish",t)};i&&!t.hasClass(s.panel+"_noanimation")?setTimeout(function(){r.__transitionend(t,function(){h()},r.conf.transitionDuration),c()},r.conf.openingInterval):(c(),h())}this.trigger("openPanel:after",t)}},closePanel:function(e){this.trigger("closePanel:before",e);var t=e.parent();t.hasClass(s.listitem+"_vertical")&&(t.removeClass(s.listitem+"_opened"),e.addClass(s.hidden),this.trigger("closePanel",e)),this.trigger("closePanel:after",e)},closeAllPanels:function(e){this.trigger("closeAllPanels:before"),this.$pnls.find("."+s.listview).children().removeClass(s.listitem+"_selected").filter("."+s.listitem+"_vertical").removeClass(s.listitem+"_opened");var t=this.$pnls.children("."+s.panel),n=e&&e.length?e:t.first();this.$pnls.children("."+s.panel).not(n).removeClass(s.panel+"_opened").removeClass(s.panel+"_opened-parent").removeClass(s.panel+"_highest").addClass(s.hidden),this.openPanel(n,!1),this.trigger("closeAllPanels:after")},togglePanel:function(e){var t=e.parent();t.hasClass(s.listitem+"_vertical")&&this[t.hasClass(s.listitem+"_opened")?"closePanel":"openPanel"](e)},setSelected:function(e){this.trigger("setSelected:before",e),this.$menu.find("."+s.listitem+"_selected").removeClass(s.listitem+"_selected"),e.addClass(s.listitem+"_selected"),this.trigger("setSelected:after",e)},bind:function(e,t){this.cbck[e]=this.cbck[e]||[],this.cbck[e].push(t)},trigger:function(){var e=this,t=Array.prototype.slice.call(arguments),n=t.shift();if(this.cbck[n])for(var i=0,s=this.cbck[n].length;i<s;i++)this.cbck[n][i].apply(e,t)},matchMedia:function(e,t,n){var i={yes:t,no:n};this.mtch[e]=this.mtch[e]||[],this.mtch[e].push(i)},_initHooks:function(){for(var e in this.opts.hooks)this.bind(e,this.opts.hooks[e])},_initWrappers:function(){this.trigger("initWrappers:before");for(var t=0;t<this.opts.wrappers.length;t++){var i=e[n].wrappers[this.opts.wrappers[t]];"function"==typeof i&&i.call(this)}this.trigger("initWrappers:after")},_initAddons:function(){this.trigger("initAddons:before");var t;for(t in e[n].addons)e[n].addons[t].add.call(this),e[n].addons[t].add=function(){};for(t in e[n].addons)e[n].addons[t].setup.call(this);this.trigger("initAddons:after")},_initExtensions:function(){this.trigger("initExtensions:before");var e=this;this.opts.extensions.constructor===Array&&(this.opts.extensions={all:this.opts.extensions});for(var t in this.opts.extensions)this.opts.extensions[t]=this.opts.extensions[t].length?s.menu+"_"+this.opts.extensions[t].join(" "+s.menu+"_"):"",this.opts.extensions[t]&&!function(t){e.matchMedia(t,function(){this.$menu.addClass(this.opts.extensions[t])},function(){this.$menu.removeClass(this.opts.extensions[t])})}(t);this.trigger("initExtensions:after")},_initMenu:function(){this.trigger("initMenu:before");this.conf.clone&&(this.$orig=this.$menu,this.$menu=this.$orig.clone(),this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function(){e(this).attr("id",s.mm(e(this).attr("id")))})),this.$menu.attr("id",this.$menu.attr("id")||this.__getUniqueId()),this.$pnls=e('<div class="'+s.panels+'" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu),this.$menu.addClass(s.menu).parent().addClass(s.wrapper),this.trigger("initMenu:after")},_initPanels:function(t){this.trigger("initPanels:before",t),t=t||this.$pnls.children(this.conf.panelNodetype);var n=e(),i=this,a=function(t){t.filter(i.conf.panelNodetype).each(function(t){var r=i._initPanel(e(this));if(r){i._initNavbar(r),i._initListview(r),n=n.add(r);var l=r.children("."+s.listview).children("li").children(i.conf.panelNodeType).add(r.children("."+i.conf.classNames.panel));l.length&&a(l)}})};a(t),this.trigger("initPanels:after",n)},_initPanel:function(e){this.trigger("initPanel:before",e);if(e.hasClass(s.panel))return e;if(this.__refactorClass(e,this.conf.classNames.panel,s.panel),this.__refactorClass(e,this.conf.classNames.nopanel,s.nopanel),this.__refactorClass(e,this.conf.classNames.inset,s.listview+"_inset"),e.filter("."+s.listview+"_inset").addClass(s.nopanel),e.hasClass(s.nopanel))return!1;var t=e.hasClass(this.conf.classNames.vertical)||!this.opts.slidingSubmenus;e.removeClass(this.conf.classNames.vertical);var n=e.attr("id")||this.__getUniqueId();e.is("ul, ol")&&(e.removeAttr("id"),e.wrap("<div />"),e=e.parent()),e.attr("id",n),e.addClass(s.panel+" "+s.hidden);var i=e.parent("li");return t?i.addClass(s.listitem+"_vertical"):e.appendTo(this.$pnls),i.length&&(i.data(a.child,e),e.data(a.parent,i)),this.trigger("initPanel:after",e),e},_initNavbar:function(t){if(this.trigger("initNavbar:before",t),!t.children("."+s.navbar).length){var n=t.data(a.parent),i=e('<div class="'+s.navbar+'" />'),r=this.__getPanelTitle(t,this.opts.navbar.title),l="";if(n&&n.length){if(n.hasClass(s.listitem+"_vertical"))return;if(n.parent().is("."+s.listview))var o=n.children("a, span").not("."+s.btn+"_next");else var o=n.closest("."+s.panel).find('a[href="#'+t.attr("id")+'"]');o=o.first(),n=o.closest("."+s.panel);var d=n.attr("id");switch(r=this.__getPanelTitle(t,e("<span>"+o.text()+"</span>").text()),this.opts.navbar.titleLink){case"anchor":l=o.attr("href");break;case"parent":l="#"+d}i.append('<a class="'+s.btn+" "+s.btn+"_prev "+s.navbar+'__btn" href="#'+d+'" />')}else if(!this.opts.navbar.title)return;this.opts.navbar.add&&t.addClass(s.panel+"_has-navbar"),i.append('<a class="'+s.navbar+'__title"'+(l.length?' href="'+l+'"':"")+">"+r+"</a>").prependTo(t),this.trigger("initNavbar:after",t)}},_initListview:function(t){this.trigger("initListview:before",t);var n=this.__childAddBack(t,"ul, ol");this.__refactorClass(n,this.conf.classNames.nolistview,s.nolistview);var i=n.not("."+s.nolistview).addClass(s.listview).children().addClass(s.listitem);this.__refactorClass(i,this.conf.classNames.selected,s.listitem+"_selected"),this.__refactorClass(i,this.conf.classNames.divider,s.listitem+"_divider"),this.__refactorClass(i,this.conf.classNames.spacer,s.listitem+"_spacer");var r=t.data(a.parent);if(r&&r.is("."+s.listitem)&&!r.children("."+s.btn+"_next").length){var l=r.children("a, span").first(),o=e('<a class="'+s.btn+'_next" href="#'+t.attr("id")+'" />').insertBefore(l);l.is("span")&&o.addClass(s.btn+"_fullwidth")}this.trigger("initListview:after",t)},_initOpened:function(){this.trigger("initOpened:before");var e=this.$pnls.find("."+s.listitem+"_selected").removeClass(s.listitem+"_selected").last().addClass(s.listitem+"_selected"),t=e.length?e.closest("."+s.panel):this.$pnls.children("."+s.panel).first();this.openPanel(t,!1),this.trigger("initOpened:after")},_initAnchors:function(){this.trigger("initAnchors:before");var t=this;l.$body.on(r.click+"-oncanvas","a[href]",function(i){var a=e(this),r=a.attr("href"),l=t.$menu.find(a).length,o=a.is("."+s.listitem+" > a"),d=a.is('[rel="external"]')||a.is('[target="_blank"]');if(l&&r.length>1&&"#"==r.slice(0,1))try{var c=t.$menu.find(r);if(c.is("."+s.panel))return t[a.parent().hasClass(s.listitem+"_vertical")?"togglePanel":"openPanel"](c),void i.preventDefault()}catch(h){}var f={close:null,setSelected:null,preventDefault:"#"==r.slice(0,1)};for(var p in e[n].addons){var u=e[n].addons[p].clickAnchor.call(t,a,l,o,d);if(u){if("boolean"==typeof u)return void i.preventDefault();"object"==typeof u&&(f=e.extend({},f,u))}}l&&o&&!d&&(t.__valueOrFn(a,t.opts.onClick.setSelected,f.setSelected)&&t.setSelected(e(i.target).parent()),t.__valueOrFn(a,t.opts.onClick.preventDefault,f.preventDefault)&&i.preventDefault(),t.__valueOrFn(a,t.opts.onClick.close,f.close)&&t.opts.offCanvas&&"function"==typeof t.close&&t.close())}),this.trigger("initAnchors:after")},_initMatchMedia:function(){var e=this;for(var t in this.mtch)!function(){var n=t,i=window.matchMedia(n);e._fireMatchMedia(n,i),i.addListener(function(t){e._fireMatchMedia(n,t)})}()},_fireMatchMedia:function(e,t){for(var n=t.matches?"yes":"no",i=0;i<this.mtch[e].length;i++)this.mtch[e][i][n].call(this)},_getOriginalMenuId:function(){var e=this.$menu.attr("id");return this.conf.clone&&e&&e.length&&(e=s.umm(e)),e},__api:function(){var t=this,n={};return e.each(this._api,function(e){var i=this;n[i]=function(){var e=t[i].apply(t,arguments);return"undefined"==typeof e?n:e}}),n},__valueOrFn:function(e,t,n){if("function"==typeof t){var i=t.call(e[0]);if("undefined"!=typeof i)return i}return"function"!=typeof t&&"undefined"!=typeof t||"undefined"==typeof n?t:n},__getPanelTitle:function(t,i){var s;return"function"==typeof this.opts.navbar.title&&(s=this.opts.navbar.title.call(t[0])),"undefined"==typeof s&&(s=t.data(a.title)),"undefined"!=typeof s?s:"string"==typeof i?e[n].i18n(i):e[n].i18n(e[n].defaults.navbar.title)},__refactorClass:function(e,t,n){return e.filter("."+t).removeClass(t).addClass(n)},__findAddBack:function(e,t){return e.find(t).add(e.filter(t))},__childAddBack:function(e,t){return e.children(t).add(e.filter(t))},__filterListItems:function(e){return e.not("."+s.listitem+"_divider").not("."+s.hidden)},__filterListItemAnchors:function(e){return this.__filterListItems(e).children("a").not("."+s.btn+"_next")},__openPanelWoAnimation:function(e){e.hasClass(s.panel+"_noanimation")||(e.addClass(s.panel+"_noanimation"),this.__transitionend(e,function(){e.removeClass(s.panel+"_noanimation")},this.conf.openingInterval),this.openPanel(e))},__transitionend:function(e,t,n){var i=!1,s=function(n){"undefined"!=typeof n&&n.target!=e[0]||(i||(e.off(r.transitionend),e.off(r.webkitTransitionEnd),t.call(e[0])),i=!0)};e.on(r.transitionend,s),e.on(r.webkitTransitionEnd,s),setTimeout(s,1.1*n)},__getUniqueId:function(){return s.mm(e[n].uniqueId++)}},e.fn[n]=function(i,s){t(),i=e.extend(!0,{},e[n].defaults,i),s=e.extend(!0,{},e[n].configuration,s);var a=e();return this.each(function(){var t=e(this);if(!t.data(n)){var r=new e[n](t,i,s);r.$menu.data(n,r.__api()),a=a.add(r.$menu)}}),a},e[n].i18n=function(){var t={};return function(n){switch(typeof n){case"object":return e.extend(t,n),t;case"string":return t[n]||n;case"undefined":default:return t}}}(),e[n].support={touch:"ontouchstart"in window||navigator.msMaxTouchPoints||!1,csstransitions:function(){return"undefined"==typeof Modernizr||"undefined"==typeof Modernizr.csstransitions||Modernizr.csstransitions}(),csstransforms:function(){return"undefined"==typeof Modernizr||"undefined"==typeof Modernizr.csstransforms||Modernizr.csstransforms}(),csstransforms3d:function(){return"undefined"==typeof Modernizr||"undefined"==typeof Modernizr.csstransforms3d||Modernizr.csstransforms3d}()};var s,a,r,l}}(jQuery);
/*
 * jQuery mmenu offCanvas add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var t="mmenu",n="offCanvas";e[t].addons[n]={setup:function(){if(this.opts[n]){var i=this.opts[n],s=this.conf[n];r=e[t].glbl,this._api=e.merge(this._api,["open","close","setPage"]),"object"!=typeof i&&(i={}),i=this.opts[n]=e.extend(!0,{},e[t].defaults[n],i),"string"!=typeof s.pageSelector&&(s.pageSelector="> "+s.pageNodetype),this.vars.opened=!1;var a=[o.menu+"_offcanvas"];e[t].support.csstransforms||a.push(o["no-csstransforms"]),e[t].support.csstransforms3d||a.push(o["no-csstransforms3d"]),this.bind("initMenu:after",function(){var e=this;this.setPage(r.$page),this._initBlocker(),this["_initWindow_"+n](),this.$menu.addClass(a.join(" ")).parent("."+o.wrapper).removeClass(o.wrapper),this.$menu[s.menuInsertMethod](s.menuInsertSelector);var t=window.location.hash;if(t){var i=this._getOriginalMenuId();i&&i==t.slice(1)&&setTimeout(function(){e.open()},1e3)}}),this.bind("open:start:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!1)}),this.bind("close:finish:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!0)}),this.bind("initMenu:after:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!0)})}},add:function(){o=e[t]._c,i=e[t]._d,s=e[t]._e,o.add("slideout page no-csstransforms3d"),i.add("style")},clickAnchor:function(e,t){var i=this;if(this.opts[n]){var s=this._getOriginalMenuId();if(s&&e.is('[href="#'+s+'"]')){if(t)return this.open(),!0;var a=e.closest("."+o.menu);if(a.length){var p=a.data("mmenu");if(p&&p.close)return p.close(),i.__transitionend(a,function(){i.open()},i.conf.transitionDuration),!0}return this.open(),!0}if(r.$page)return s=r.$page.first().attr("id"),s&&e.is('[href="#'+s+'"]')?(this.close(),!0):void 0}}},e[t].defaults[n]={blockUI:!0,moveBackground:!0},e[t].configuration[n]={pageNodetype:"div",pageSelector:null,noPageSelector:[],wrapPageIfNeeded:!0,menuInsertMethod:"prependTo",menuInsertSelector:"body"},e[t].prototype.open=function(){if(this.trigger("open:before"),!this.vars.opened){var e=this;this._openSetup(),setTimeout(function(){e._openFinish()},this.conf.openingInterval),this.trigger("open:after")}},e[t].prototype._openSetup=function(){var t=this,a=this.opts[n];this.closeAllOthers(),r.$page.each(function(){e(this).data(i.style,e(this).attr("style")||"")}),r.$wndw.trigger(s.resize+"-"+n,[!0]);var p=[o.wrapper+"_opened"];a.blockUI&&p.push(o.wrapper+"_blocking"),"modal"==a.blockUI&&p.push(o.wrapper+"_modal"),a.moveBackground&&p.push(o.wrapper+"_background"),r.$html.addClass(p.join(" ")),setTimeout(function(){t.vars.opened=!0},this.conf.openingInterval),this.$menu.addClass(o.menu+"_opened")},e[t].prototype._openFinish=function(){var e=this;this.__transitionend(r.$page.first(),function(){e.trigger("open:finish")},this.conf.transitionDuration),this.trigger("open:start"),r.$html.addClass(o.wrapper+"_opening")},e[t].prototype.close=function(){if(this.trigger("close:before"),this.vars.opened){var t=this;this.__transitionend(r.$page.first(),function(){t.$menu.removeClass(o.menu+"_opened");var n=[o.wrapper+"_opened",o.wrapper+"_blocking",o.wrapper+"_modal",o.wrapper+"_background"];r.$html.removeClass(n.join(" ")),r.$page.each(function(){e(this).attr("style",e(this).data(i.style))}),t.vars.opened=!1,t.trigger("close:finish")},this.conf.transitionDuration),this.trigger("close:start"),r.$html.removeClass(o.wrapper+"_opening"),this.trigger("close:after")}},e[t].prototype.closeAllOthers=function(){r.$body.find("."+o.menu+"_offcanvas").not(this.$menu).each(function(){var n=e(this).data(t);n&&n.close&&n.close()})},e[t].prototype.setPage=function(t){this.trigger("setPage:before",t);var i=this,s=this.conf[n];t&&t.length||(t=r.$body.find(s.pageSelector),s.noPageSelector.length&&(t=t.not(s.noPageSelector.join(", "))),t.length>1&&s.wrapPageIfNeeded&&(t=t.wrapAll("<"+this.conf[n].pageNodetype+" />").parent())),t.each(function(){e(this).attr("id",e(this).attr("id")||i.__getUniqueId())}),t.addClass(o.page+" "+o.slideout),r.$page=t,this.trigger("setPage:after",t)},e[t].prototype["_initWindow_"+n]=function(){r.$wndw.off(s.keydown+"-"+n).on(s.keydown+"-"+n,function(e){if(r.$html.hasClass(o.wrapper+"_opened")&&9==e.keyCode)return e.preventDefault(),!1});var e=0;r.$wndw.off(s.resize+"-"+n).on(s.resize+"-"+n,function(t,n){if(1==r.$page.length&&(n||r.$html.hasClass(o.wrapper+"_opened"))){var i=r.$wndw.height();(n||i!=e)&&(e=i,r.$page.css("minHeight",i))}})},e[t].prototype._initBlocker=function(){var t=this;this.opts[n].blockUI&&(r.$blck||(r.$blck=e('<div class="'+o.page+"__blocker "+o.slideout+'" />')),r.$blck.appendTo(r.$body).off(s.touchstart+"-"+n+" "+s.touchmove+"-"+n).on(s.touchstart+"-"+n+" "+s.touchmove+"-"+n,function(e){e.preventDefault(),e.stopPropagation(),r.$blck.trigger(s.mousedown+"-"+n)}).off(s.mousedown+"-"+n).on(s.mousedown+"-"+n,function(e){e.preventDefault(),r.$html.hasClass(o.wrapper+"_modal")||(t.closeAllOthers(),t.close())}))};var o,i,s,r}(jQuery);
/*
 * jQuery mmenu scrollBugFix add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(o){var t="mmenu",n="scrollBugFix";o[t].addons[n]={setup:function(){var r=this.opts[n];this.conf[n];i=o[t].glbl,o[t].support.touch&&this.opts.offCanvas&&this.opts.offCanvas.blockUI&&("boolean"==typeof r&&(r={fix:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=o.extend(!0,{},o[t].defaults[n],r),r.fix&&(this.bind("open:start",function(){this.$pnls.children("."+e.panel+"_opened").scrollTop(0)}),this.bind("initMenu:after",function(){this["_initWindow_"+n]()})))},add:function(){e=o[t]._c,r=o[t]._d,s=o[t]._e},clickAnchor:function(o,t){}},o[t].defaults[n]={fix:!0},o[t].prototype["_initWindow_"+n]=function(){var t=this;i.$docu.off(s.touchmove+"-"+n).on(s.touchmove+"-"+n,function(o){i.$html.hasClass(e.wrapper+"_opened")&&o.preventDefault()});var r=!1;i.$body.off(s.touchstart+"-"+n).on(s.touchstart+"-"+n,"."+e.panels+"> ."+e.panel,function(o){i.$html.hasClass(e.wrapper+"_opened")&&(r||(r=!0,0===o.currentTarget.scrollTop?o.currentTarget.scrollTop=1:o.currentTarget.scrollHeight===o.currentTarget.scrollTop+o.currentTarget.offsetHeight&&(o.currentTarget.scrollTop-=1),r=!1))}).off(s.touchmove+"-"+n).on(s.touchmove+"-"+n,"."+e.panels+"> ."+e.panel,function(t){i.$html.hasClass(e.wrapper+"_opened")&&o(this)[0].scrollHeight>o(this).innerHeight()&&t.stopPropagation()}),i.$wndw.off(s.orientationchange+"-"+n).on(s.orientationchange+"-"+n,function(){t.$pnls.children("."+e.panel+"_opened").scrollTop(0).css({"-webkit-overflow-scrolling":"auto"}).css({"-webkit-overflow-scrolling":"touch"})})};var e,r,s,i}(jQuery);
/*
 * jQuery mmenu screenReader add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t){var i="mmenu",n="screenReader";t[i].addons[n]={setup:function(){var a=this,o=this.opts[n],h=this.conf[n];s=t[i].glbl,"boolean"==typeof o&&(o={aria:o,text:o}),"object"!=typeof o&&(o={}),o=this.opts[n]=t.extend(!0,{},t[i].defaults[n],o),o.aria&&(this.bind("initAddons:after",function(){this.bind("initMenu:after",function(){this.trigger("initMenu:after:sr-aria")}),this.bind("initNavbar:after",function(){this.trigger("initNavbar:after:sr-aria",arguments[0])}),this.bind("openPanel:start",function(){this.trigger("openPanel:start:sr-aria",arguments[0])}),this.bind("close:start",function(){this.trigger("close:start:sr-aria")}),this.bind("close:finish",function(){this.trigger("close:finish:sr-aria")}),this.bind("open:start",function(){this.trigger("open:start:sr-aria")}),this.bind("initOpened:after",function(){this.trigger("initOpened:after:sr-aria")})}),this.bind("updateListview",function(){this.$pnls.find("."+e.listview).children().each(function(){a.__sr_aria(t(this),"hidden",t(this).is("."+e.hidden))})}),this.bind("openPanel:start",function(t){var i=this.$menu.find("."+e.panel).not(t).not(t.parents("."+e.panel)),n=t.add(t.find("."+e.listitem+"_vertical ."+e.listitem+"_opened").children("."+e.panel));this.__sr_aria(i,"hidden",!0),this.__sr_aria(n,"hidden",!1)}),this.bind("closePanel",function(t){this.__sr_aria(t,"hidden",!0)}),this.bind("initPanels:after",function(i){var n=i.find("."+e.btn).each(function(){a.__sr_aria(t(this),"owns",t(this).attr("href").replace("#",""))});this.__sr_aria(n,"haspopup",!0)}),this.bind("initNavbar:after",function(t){var i=t.children("."+e.navbar);this.__sr_aria(i,"hidden",!t.hasClass(e.panel+"_has-navbar"))}),o.text&&(this.bind("initlistview:after",function(t){var i=t.find("."+e.listview).find("."+e.btn+"_fullwidth").parent().children("span");this.__sr_aria(i,"hidden",!0)}),"parent"==this.opts.navbar.titleLink&&this.bind("initNavbar:after",function(t){var i=t.children("."+e.navbar),n=!!i.children("."+e.btn+"_prev").length;this.__sr_aria(i.children("."+e.title),"hidden",n)}))),o.text&&(this.bind("initAddons:after",function(){this.bind("setPage:after",function(){this.trigger("setPage:after:sr-text",arguments[0])})}),this.bind("initNavbar:after",function(n){var r=n.children("."+e.navbar),a=r.children("."+e.title).text(),s=t[i].i18n(h.text.closeSubmenu);a&&(s+=" ("+a+")"),r.children("."+e.btn+"_prev").html(this.__sr_text(s))}),this.bind("initListview:after",function(n){var s=n.data(r.parent);if(s&&s.length){var o=s.children("."+e.btn+"_next"),d=o.nextAll("span, a").first().text(),l=t[i].i18n(h.text[o.parent().is("."+e.listitem+"_vertical")?"toggleSubmenu":"openSubmenu"]);d&&(l+=" ("+d+")"),o.html(a.__sr_text(l))}}))},add:function(){e=t[i]._c,r=t[i]._d,a=t[i]._e,e.add("sronly")},clickAnchor:function(t,i){}},t[i].defaults[n]={aria:!0,text:!0},t[i].configuration[n]={text:{closeMenu:"Close menu",closeSubmenu:"Close submenu",openSubmenu:"Open submenu",toggleSubmenu:"Toggle submenu"}},t[i].prototype.__sr_aria=function(t,i,n){t.prop("aria-"+i,n)[n?"attr":"removeAttr"]("aria-"+i,n)},t[i].prototype.__sr_role=function(t,i){t.prop("role",i)[i?"attr":"removeAttr"]("role",i)},t[i].prototype.__sr_text=function(t){return'<span class="'+e.sronly+'">'+t+"</span>"};var e,r,a,s}(jQuery);
/*
 * jQuery mmenu autoHeight add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t){var e="mmenu",i="autoHeight";t[e].addons[i]={setup:function(){var h=this.opts[i];this.conf[i];if(a=t[e].glbl,"boolean"==typeof h&&h&&(h={height:"auto"}),"string"==typeof h&&(h={height:h}),"object"!=typeof h&&(h={}),h=this.opts[i]=t.extend(!0,{},t[e].defaults[i],h),"auto"==h.height||"highest"==h.height){this.bind("initMenu:after",function(){this.$menu.addClass(n.menu+"_autoheight")});var s=function(e){if(!this.opts.offCanvas||this.vars.opened){var i=Math.max(parseInt(this.$pnls.css("top"),10),0)||0,s=Math.max(parseInt(this.$pnls.css("bottom"),10),0)||0,a=0;this.$menu.addClass(n.menu+"_autoheight-measuring"),"auto"==h.height?(e=e||this.$pnls.children("."+n.panel+"_opened"),e.parent("."+n.listitem+"_vertical").length&&(e=e.parents("."+n.panel).not(function(){return t(this).parent("."+n.listitem+"_vertical").length})),e.length||(e=this.$pnls.children("."+n.panel)),a=e.first().outerHeight()):"highest"==h.height&&this.$pnls.children("."+n.panel).each(function(){var e=t(this);e.parent("."+n.listitem+"_vertical").length&&(e=e.parents("."+n.panel).not(function(){return t(this).parent("."+n.listitem+"_vertical").length})),a=Math.max(a,e.first().outerHeight())}),this.$menu.height(a+i+s).removeClass(n.menu+"_autoheight-measuring")}};this.opts.offCanvas&&this.bind("open:start",s),"highest"==h.height&&this.bind("initPanels:after",s),"auto"==h.height&&(this.bind("updateListview",s),this.bind("openPanel:start",s),this.bind("closePanel",s))}},add:function(){n=t[e]._c,h=t[e]._d,s=t[e]._e,s.add("resize")},clickAnchor:function(t,e){}},t[e].defaults[i]={height:"default"};var n,h,s,a}(jQuery);
/*
 * jQuery mmenu backButton add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(n){var t="mmenu",o="backButton";n[t].addons[o]={setup:function(){function e(){l=[c],this.$pnls.children("."+i.panel+"_opened-parent").add(s.$pnls.children("."+i.panel+"_opened")).each(function(){l.push("#"+n(this).attr("id"))})}if(this.opts.offCanvas){var s=this,h=this.opts[o];this.conf[o];a=n[t].glbl,"boolean"==typeof h&&(h={close:h}),"object"!=typeof h&&(h={}),h=n.extend(!0,{},n[t].defaults[o],h);var c="#"+this.$menu.attr("id");if(h.close){var l=[];this.bind("open:finish",function(){history.pushState(null,document.title,c)}),this.bind("open:finish",e),this.bind("openPanel:finish",e),this.bind("close:finish",function(){l=[],history.back(),history.pushState(null,document.title,location.pathname+location.search)}),n(window).on("popstate",function(t){if(s.vars.opened&&l.length){l=l.slice(0,-1);var o=l[l.length-1];o==c?s.close():(s.openPanel(n(o)),history.pushState(null,document.title,c))}})}h.open&&n(window).on("popstate",function(n){s.vars.opened||location.hash!=c||s.open()})}},add:function(){return window.history&&window.history.pushState?(i=n[t]._c,e=n[t]._d,void(s=n[t]._e)):void(n[t].addons[o].setup=function(){})},clickAnchor:function(n,t){}},n[t].defaults[o]={close:!1,open:!1};var i,e,s,a}(jQuery);
/*
 * jQuery mmenu columns add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var n="mmenu",i="columns";e[n].addons[i]={setup:function(){function l(e){var n=e.data(s.parent);if(n&&(n=n.closest("."+a.panel),n.length)){var i=n.attr("class");if(i&&(i=i.split(a.panel+"_columns-")[1]))for(i=parseInt(i.split(" ")[0],10)+1;i>0;){var l=this.$pnls.children("."+a.panel+"_columns-"+i);if(!l.length){i=-1;break}i++,l.removeClass(r).addClass(a.hidden)}}}var o=this.opts[i];this.conf[i];if(t=e[n].glbl,"boolean"==typeof o&&(o={add:o}),"number"==typeof o&&(o={add:!0,visible:o}),"object"!=typeof o&&(o={}),"number"==typeof o.visible&&(o.visible={min:o.visible,max:o.visible}),o=this.opts[i]=e.extend(!0,{},e[n].defaults[i],o),o.add){o.visible.min=Math.max(1,Math.min(6,o.visible.min)),o.visible.max=Math.max(o.visible.min,Math.min(6,o.visible.max));for(var d="",p="",m=0;m<=o.visible.max;m++)d+=" "+a.menu+"_columns-"+m,p+=" "+a.panel+"_columns-"+m;d.length&&(d=d.slice(1),p=p.slice(1));var r=p+" "+a.panel+"_opened "+a.panel+"_opened-parent "+a.panel+"_highest",c=function(n){var i=this.$pnls.children("."+a.panel+"_opened-parent").length;n.hasClass(a.panel+"_opened-parent")||i++,i=Math.min(o.visible.max,Math.max(o.visible.min,i)),this.$menu.removeClass(d).addClass(a.menu+"_columns-"+i),this.$pnls.children("."+a.panel).removeClass(p).filter("."+a.panel+"_opened-parent").add(n).slice(-o.visible.max).each(function(n){e(this).addClass(a.panel+"_columns-"+n)})};this.bind("openPanel:before",l),this.bind("openPanel:start",c)}},add:function(){a=e[n]._c,s=e[n]._d,l=e[n]._e},clickAnchor:function(e,n){}},e[n].defaults[i]={add:!1,visible:{min:1,max:3}};var a,s,l,t}(jQuery);
/*
 * jQuery mmenu counters add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t){var e="mmenu",n="counters";t[e].addons[n]={setup:function(){var s=this,d=this.opts[n];this.conf[n];if(c=t[e].glbl,"boolean"==typeof d&&(d={add:d,update:d}),"object"!=typeof d&&(d={}),d=this.opts[n]=t.extend(!0,{},t[e].defaults[n],d),this.bind("initListview:after",function(t){var e=this.conf.classNames[n].counter;this.__refactorClass(t.find("."+e),e,i.counter)}),d.add&&this.bind("initListview:after",function(e){var n;switch(d.addTo){case"panels":n=e;break;default:n=e.filter(d.addTo)}n.each(function(){var e=t(this).data(a.parent);e&&(e.children("."+i.counter).length||e.prepend(t('<em class="'+i.counter+'" />')))})}),d.update){var r=function(e){e=e||this.$pnls.children("."+i.panel),e.each(function(){var e=t(this),n=e.data(a.parent);if(n){var c=n.children("em."+i.counter);c.length&&(e=e.children("."+i.listview),e.length&&c.html(s.__filterListItems(e.children()).length))}})};this.bind("initListview:after",r),this.bind("updateListview",r)}},add:function(){i=t[e]._c,a=t[e]._d,s=t[e]._e,i.add("counter")},clickAnchor:function(t,e){}},t[e].defaults[n]={add:!1,addTo:"panels",count:!1},t[e].configuration.classNames[n]={counter:"Counter"};var i,a,s,c}(jQuery);
/*
 * jQuery mmenu dividers add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(i){var e="mmenu",t="dividers";i[e].addons[t]={setup:function(){var s=this,a=this.opts[t];this.conf[t];if(l=i[e].glbl,"boolean"==typeof a&&(a={add:a,fixed:a}),"object"!=typeof a&&(a={}),a=this.opts[t]=i.extend(!0,{},i[e].defaults[t],a),a.type&&this.bind("initMenu:after",function(){this.$menu.addClass(n.menu+"_"+t+"-"+a.type)}),a.add&&this.bind("initListview:after",function(e){var t;switch(a.addTo){case"panels":t=e;break;default:t=e.filter(a.addTo)}t.length&&(t.children("."+n.listitem+"_divider").remove(),t.find("."+n.listview).each(function(){var e="";s.__filterListItems(i(this).children()).each(function(){var t=i.trim(i(this).children("a, span").text()).slice(0,1).toLowerCase();t!=e&&t.length&&(e=t,i('<li class="'+n.listitem+" "+n.listitem+'_divider">'+t+"</li>").insertBefore(this))})}))}),a.fixed){this.bind("initPanels:after",function(){"undefined"==typeof this.$fixeddivider&&(this.$fixeddivider=i('<ul class="'+n.listview+" "+n.listview+'_fixeddivider"><li class="'+n.listitem+" "+n.listitem+'_divider"></li></ul>').appendTo(this.$pnls).children())});var o=function(e){if(e=e||this.$pnls.children("."+n.panel+"_opened"),!e.is(":hidden")){var t=e.find("."+n.listitem+"_divider").not("."+n.hidden),s=e.scrollTop()||0,d="";t.each(function(){i(this).position().top+s<s+1&&(d=i(this).text())}),this.$fixeddivider.text(d),this.$pnls[d.length?"addClass":"removeClass"](n.panel+"_dividers")}};this.bind("open:start",o),this.bind("openPanel:start",o),this.bind("updateListview",o),this.bind("initPanel:after",function(i){i.off(d.scroll+"-"+t+" "+d.touchmove+"-"+t).on(d.scroll+"-"+t+" "+d.touchmove+"-"+t,function(e){i.hasClass(n.panel+"_opened")&&o.call(s,i)})})}},add:function(){n=i[e]._c,s=i[e]._d,d=i[e]._e,d.add("scroll")},clickAnchor:function(i,e){}},i[e].defaults[t]={add:!1,addTo:"panels",fixed:!1,type:null};var n,s,d,l}(jQuery);
/*
 * jQuery mmenu drag add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){function n(e,n,t){return e<n&&(e=n),e>t&&(e=t),e}function t(t,o,i){var r,p,d,f=this,c={events:"panleft panright",typeLower:"x",typeUpper:"X",open_dir:"right",close_dir:"left",negative:!1},m="width",l=c.open_dir,u=function(e){e<=t.maxStartPos&&(g=1)},h=function(){return e("."+s.slideout)},g=0,v=0,b=0,w=this.opts.extensions.all,_="undefined"==typeof w?"left":w.indexOf(s.mm("position-right"))>-1?"right":w.indexOf(s.mm("position-top"))>-1?"top":w.indexOf(s.mm("position-bottom"))>-1?"bottom":"left",y="undefined"==typeof w?"back":w.indexOf(s.mm("position-top"))>-1||w.indexOf(s.mm("position-bottom"))>-1||w.indexOf(s.mm("position-front"))>-1?"front":"back";switch(_){case"top":case"bottom":c.events="panup pandown",c.typeLower="y",c.typeUpper="Y",m="height"}switch(_){case"right":case"bottom":c.negative=!0,u=function(e){e>=i.$wndw[m]()-t.maxStartPos&&(g=1)}}switch(_){case"right":c.open_dir="left",c.close_dir="right";break;case"top":c.open_dir="down",c.close_dir="up";break;case"bottom":c.open_dir="up",c.close_dir="down"}switch(y){case"front":h=function(){return f.$menu}}var x,O=this.__valueOrFn(this.$menu,t.node,i.$page);"string"==typeof O&&(O=e(O));var $=new Hammer(O[0],this.opts[a].vendors.hammer);$.on("panstart",function(e){u(e.center[c.typeLower]),x=h(),l=c.open_dir}),$.on(c.events+" panend",function(e){g>0&&e.preventDefault()}),$.on(c.events,function(e){if(r=e["delta"+c.typeUpper],c.negative&&(r=-r),r!=v&&(l=r>=v?c.open_dir:c.close_dir),v=r,v>t.threshold&&1==g){if(i.$html.hasClass(s.wrapper+"_opened"))return;g=2,f._openSetup(),f.trigger("open:start"),i.$html.addClass(s.dragging),b=n(i.$wndw[m]()*o[m].perc,o[m].min,o[m].max)}2==g&&(p=n(v,10,b)-("front"==y?b:0),c.negative&&(p=-p),d="translate"+c.typeUpper+"("+p+"px )",x.css({"-webkit-transform":"-webkit-"+d,transform:d}))}),$.on("panend",function(e){2==g&&(i.$html.removeClass(s.dragging),x.css("transform",""),f[l==c.open_dir?"_openFinish":"close"]()),g=0})}function o(e,n,t,o){var i=this,p=e.data(r.parent);if(p){p=p.closest("."+s.panel);var d=new Hammer(e[0],i.opts[a].vendors.hammer),f=null;d.on("panright",function(e){f||(i.openPanel(p),f=setTimeout(function(){clearTimeout(f),f=null},i.conf.openingInterval+i.conf.transitionDuration))})}}var i="mmenu",a="drag";e[i].addons[a]={setup:function(){if(this.opts.offCanvas){var n=this.opts[a],s=this.conf[a];d=e[i].glbl,"boolean"==typeof n&&(n={menu:n,panels:n}),"object"!=typeof n&&(n={}),"boolean"==typeof n.menu&&(n.menu={open:n.menu}),"object"!=typeof n.menu&&(n.menu={}),"boolean"==typeof n.panels&&(n.panels={close:n.panels}),"object"!=typeof n.panels&&(n.panels={}),n=this.opts[a]=e.extend(!0,{},e[i].defaults[a],n),n.menu.open&&this.bind("setPage:after",function(){t.call(this,n.menu,s.menu,d)}),n.panels.close&&this.bind("initPanel:after",function(e){o.call(this,e,n.panels,s.panels,d)})}},add:function(){return"function"!=typeof Hammer||Hammer.VERSION<2?(e[i].addons[a].add=function(){},void(e[i].addons[a].setup=function(){})):(s=e[i]._c,r=e[i]._d,p=e[i]._e,void s.add("dragging"))},clickAnchor:function(e,n){}},e[i].defaults[a]={menu:{open:!1,maxStartPos:100,threshold:50},panels:{close:!1},vendors:{hammer:{}}},e[i].configuration[a]={menu:{width:{perc:.8,min:140,max:440},height:{perc:.8,min:140,max:880}},panels:{}};var s,r,p,d}(jQuery);
/*
 * jQuery mmenu dropdown add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t){var o="mmenu",e="dropdown";t[o].addons[e]={setup:function(){if(this.opts.offCanvas){var r=this,f=this.opts[e],p=this.conf[e];if(a=t[o].glbl,"boolean"==typeof f&&f&&(f={drop:f}),"object"!=typeof f&&(f={}),"string"==typeof f.position&&(f.position={of:f.position}),f=this.opts[e]=t.extend(!0,{},t[o].defaults[e],f),f.drop){var l;this.bind("initMenu:after",function(){if(this.$menu.addClass(i.menu+"_"+e),"string"!=typeof f.position.of){var o=this._getOriginalMenuId();o&&o.length&&(f.position.of='[href="#'+o+'"]')}"string"==typeof f.position.of&&(l=t(f.position.of),f.event=f.event.split(" "),1==f.event.length&&(f.event[1]=f.event[0]),"hover"==f.event[0]&&l.on(s.mouseenter+"-"+e,function(){r.open()}),"hover"==f.event[1]&&this.$menu.on(s.mouseleave+"-"+e,function(){r.close()}))}),this.bind("open:start",function(){this.$menu.data(n.style,this.$menu.attr("style")||""),a.$html.addClass(i.wrapper+"_dropdown")}),this.bind("close:finish",function(){this.$menu.attr("style",this.$menu.data(n.style)),a.$html.removeClass(i.wrapper+"_dropdown")});var h=function(t,o){var e=o[0],n=o[1],s="x"==t?"scrollLeft":"scrollTop",r="x"==t?"outerWidth":"outerHeight",h="x"==t?"left":"top",u="x"==t?"right":"bottom",d="x"==t?"width":"height",c="x"==t?"maxWidth":"maxHeight",m=null,v=a.$wndw[s](),x=l.offset()[h]-=v,b=x+l[r](),w=a.$wndw[d](),g=p.offset.button[t]+p.offset.viewport[t];if(f.position[t])switch(f.position[t]){case"left":case"bottom":m="after";break;case"right":case"top":m="before"}null===m&&(m=x+(b-x)/2<w/2?"after":"before");var $,y;return"after"==m?($="x"==t?x:b,y=w-($+g),e[h]=$+p.offset.button[t],e[u]="auto",f.tip&&n.push(i.menu+"_tip-"+("x"==t?"left":"top"))):($="x"==t?b:x,y=$-g,e[u]="calc( 100% - "+($-p.offset.button[t])+"px )",e[h]="auto",f.tip&&n.push(i.menu+"_tip-"+("x"==t?"right":"bottom"))),e[c]=Math.min(p[d].max,y),[e,n]},u=function(t){if(this.vars.opened){this.$menu.attr("style",this.$menu.data(n.style));var o=[{},[]];o=h.call(this,"y",o),o=h.call(this,"x",o),this.$menu.css(o[0]),f.tip&&this.$menu.removeClass(i.tipleft+" "+i.tipright+" "+i.tiptop+" "+i.tipbottom).addClass(o[1].join(" "))}};this.bind("open:start",u),a.$wndw.on(s.resize+"-"+e,function(t){u.call(r)}),this.opts.offCanvas.blockUI||a.$wndw.on(s.scroll+"-"+e,function(t){u.call(r)})}}},add:function(){i=t[o]._c,n=t[o]._d,s=t[o]._e,i.add("dropdown"),s.add("mouseenter mouseleave resize scroll")},clickAnchor:function(t,o){}},t[o].defaults[e]={drop:!1,event:"click",position:{},tip:!0},t[o].configuration[e]={offset:{button:{x:-5,y:5},viewport:{x:20,y:20}},height:{max:880},width:{max:440}};var i,n,s,a}(jQuery);
/*
 * jQuery mmenu fixedElements add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(s){var t="mmenu",i="fixedElements";s[t].addons[i]={setup:function(){if(this.opts.offCanvas){var n=(this.opts[i],this.conf[i]);c=s[t].glbl;var o=function(t){var o=this.conf.classNames[i].fixed,f=t.find("."+o);this.__refactorClass(f,o,e.slideout),f[n.elemInsertMethod](n.elemInsertSelector);var a=this.conf.classNames[i].sticky,r=t.find("."+a);this.__refactorClass(r,a,e.sticky),r=t.find("."+e.sticky),r.length&&(this.bind("open:start",function(){if("hidden"==c.$html.css("overflow")){var t=c.$wndw.scrollTop()+n.sticky.offset;r.each(function(){s(this).css("top",parseInt(s(this).css("top"),10)+t)})}}),this.bind("close:finish",function(){r.css("top","")}))};this.bind("setPage:after",o)}},add:function(){e=s[t]._c,n=s[t]._d,o=s[t]._e,e.add("sticky")},clickAnchor:function(s,t){}},s[t].configuration[i]={sticky:{offset:0},elemInsertMethod:"appendTo",elemInsertSelector:"body"},s[t].configuration.classNames[i]={fixed:"Fixed",sticky:"Sticky"};var e,n,o,c}(jQuery);
/*
 * jQuery mmenu iconbar add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(a){var t="mmenu",n="iconbar";a[t].addons[n]={setup:function(){function s(a){f.removeClass(e.iconbar+"__tab_selected");var t=f.filter('[href="#'+a.attr("id")+'"]');if(t.length)t.addClass(e.iconbar+"__tab_selected");else{var n=a.data(i.parent);n&&n.length&&s(n.closest("."+e.panel))}}var d=this,c=this.opts[n];this.conf[n];if(r=a[t].glbl,c instanceof Array&&(c={add:!0,top:c}),c.add){var l=null;if(a.each(["top","bottom"],function(t,n){var i=c[n];i instanceof Array||(i=[i]);for(var o=a('<div class="'+e.iconbar+"__"+n+'" />'),r=0,s=i.length;r<s;r++)o.append(i[r]);o.children().length&&(l||(l=a('<div class="'+e.iconbar+'" />')),l.append(o))}),l&&(this.bind("initMenu:after",function(){this.$menu.addClass(e.menu+"_iconbar-"+c.size).prepend(l)}),"tabs"==c.type)){l.addClass(e.iconbar+"_tabs");var f=l.find("a");f.on(o.click+"-"+n,function(t){var n=a(this);if(n.hasClass(e.iconbar+"__tab_selected"))return void t.stopImmediatePropagation();try{var i=a(n.attr("href"));i.hasClass(e.panel)&&(t.preventDefault(),t.stopImmediatePropagation(),d.__openPanelWoAnimation(i))}catch(o){}}),this.bind("openPanel:start",s)}}},add:function(){e=a[t]._c,i=a[t]._d,o=a[t]._e,e.add(n)},clickAnchor:function(a,t){}},a[t].defaults[n]={add:!1,size:40,top:[],bottom:[]},a[t].configuration[n]={};var e,i,o,r}(jQuery);
/*
 * jQuery mmenu iconPanels add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var i="mmenu",n="iconPanels";e[i].addons[n]={setup:function(){var a=this,l=this.opts[n],d=(this.conf[n],!1);if(s=e[i].glbl,"boolean"==typeof l&&(l={add:l}),"number"!=typeof l&&"string"!=typeof l||(l={add:!0,visible:l}),"object"!=typeof l&&(l={}),"first"==l.visible&&(d=!0,l.visible=1),l=this.opts[n]=e.extend(!0,{},e[i].defaults[n],l),l.visible=Math.min(3,Math.max(1,l.visible)),l.visible++,l.add){for(var r="",o=0;o<=l.visible;o++)r+=" "+t.panel+"_iconpanel-"+o;r.length&&(r=r.slice(1));var c=function(i){if(!i.parent("."+t.listitem+"_vertical").length){var n=a.$pnls.children("."+t.panel).removeClass(r);d&&n.removeClass(t.panel+"_iconpanel-first").first().addClass(t.panel+"_iconpanel-first"),n.filter("."+t.panel+"_opened-parent").removeClass(t.hidden).not(function(){return e(this).parent("."+t.listitem+"_vertical").length}).add(i).slice(-l.visible).each(function(i){e(this).addClass(t.panel+"_iconpanel-"+i)})}};this.bind("initMenu:after",function(){var e=[t.menu+"_iconpanel-"+l.size];l.hideNavbar&&e.push(t.menu+"_hidenavbar"),l.hideDivider&&e.push(t.menu+"_hidedivider"),this.$menu.addClass(e.join(" "))}),this.bind("openPanel:start",c),this.bind("initPanels:after",function(e){c.call(a,a.$pnls.children("."+t.panel+"_opened"))}),this.bind("initListview:after",function(e){!l.blockPanel||e.parent("."+t.listitem+"_vertical").length||e.children("."+t.panel+"__blocker").length||e.prepend('<a href="#'+e.closest("."+t.panel).attr("id")+'" class="'+t.panel+'__blocker" />')})}},add:function(){t=e[i]._c,a=e[i]._d,l=e[i]._e},clickAnchor:function(e,i){}},e[i].defaults[n]={add:!1,blockPanel:!0,hideDivider:!1,hideNavbar:!0,size:40,visible:3};var t,a,l,s}(jQuery);
/*
 * jQuery mmenu keyboardNavigation add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(n){function e(e,t){e=e||this.$pnls.children("."+i.panel+"_opened");var a=n(),s=this.$menu.children("."+i.mm("navbars_top")+", ."+i.mm("navbars_bottom")).children("."+i.navbar);s.find(r).filter(":focus").length||("default"==t&&(a=e.children("."+i.listview).find("a[href]").not("."+i.hidden),a.length||(a=e.find(r).not("."+i.hidden)),a.length||(a=s.find(r).not("."+i.hidden))),a.length||(a=this.$menu.children("."+i.tabstart)),a.first().focus())}var t="mmenu",a="keyboardNavigation";n[t].addons[a]={setup:function(){if(!n[t].support.touch){var s=this.opts[a];this.conf[a];if(d=n[t].glbl,"boolean"!=typeof s&&"string"!=typeof s||(s={enable:s}),"object"!=typeof s&&(s={}),s=this.opts[a]=n.extend(!0,{},n[t].defaults[a],s),s.enable){var o=n('<button class="'+i.tabstart+'" tabindex="0" type="button" />'),r=n('<button class="'+i.tabend+'" tabindex="0" type="button" />');this.bind("initMenu:after",function(){s.enhance&&this.$menu.addClass(i.menu+"_keyboardfocus"),this["_initWindow_"+a](s.enhance)}),this.bind("initOpened:before",function(){this.$menu.prepend(o).append(r).children("."+i.mm("navbars-top")+", ."+i.mm("navbars-bottom")).children("."+i.navbar).children("a."+i.title).attr("tabindex",-1)}),this.bind("open:finish",function(){e.call(this,null,s.enable)}),this.bind("openPanel:finish",function(n){e.call(this,n,s.enable)}),this.bind("initOpened:after:sr-aria",function(){var n=this.$menu.children("."+i.tabstart+", ."+i.tabend);this.__sr_aria(n,"hidden",!0),this.__sr_role(n,"presentation")})}}},add:function(){i=n[t]._c,s=n[t]._d,o=n[t]._e,i.add("tabstart tabend"),o.add("focusin keydown")},clickAnchor:function(n,e){}},n[t].defaults[a]={enable:!1,enhance:!1},n[t].configuration[a]={},n[t].prototype["_initWindow_"+a]=function(e){d.$wndw.off(o.keydown+"-offCanvas"),d.$wndw.off(o.focusin+"-"+a).on(o.focusin+"-"+a,function(e){if(d.$html.hasClass(i.wrapper+"_opened")){var t=n(e.target);t.is("."+i.tabend)&&t.parent().find("."+i.tabstart).focus()}}),d.$wndw.off(o.keydown+"-"+a).on(o.keydown+"-"+a,function(e){var t=n(e.target),a=t.closest("."+i.menu);if(a.length){a.data("mmenu");if(t.is("input, textarea"));else switch(e.keyCode){case 13:(t.is(".mm-toggle")||t.is(".mm-check"))&&t.trigger(o.click);break;case 32:case 37:case 38:case 39:case 40:e.preventDefault()}}}),e&&d.$wndw.off(o.keydown+"-"+a).on(o.keydown+"-"+a,function(e){var t=n(e.target),a=t.closest("."+i.menu);if(a.length){var o=a.data("mmenu");if(t.is("input"))switch(e.keyCode){case 27:t.val("")}else switch(e.keyCode){case 8:var d=a.find("."+i.panel+"_opened").data(s.parent);d&&d.length&&o.openPanel(d.closest("."+i.panel));break;case 27:a.hasClass(i.menu+"_offcanvas")&&o.close()}}})};var i,s,o,d,r="input, select, textarea, button, label, a[href]"}(jQuery);
/*
 * jQuery mmenu lazySubmenus add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(n){var e="mmenu",i="lazySubmenus";n[e].addons[i]={setup:function(){var t=this.opts[i];this.conf[i];a=n[e].glbl,"boolean"==typeof t&&(t={load:t}),"object"!=typeof t&&(t={}),t=this.opts[i]=n.extend(!0,{},n[e].defaults[i],t),t.load&&(this.bind("initMenu:after",function(){this.$pnls.find("li").children(this.conf.panelNodetype).not("."+l.inset).not("."+l.nolistview).not("."+l.nopanel).addClass(l.panel+"_lazysubmenu "+l.nolistview+" "+l.nopanel)}),this.bind("initPanels:before",function(n){n=n||this.$pnls.children(this.conf.panelNodetype),this.__findAddBack(n,"."+l.panel+"_lazysubmenu").not("."+l.panel+"_lazysubmenu ."+l.panel+"_lazysubmenu").removeClass(l.panel+"_lazysubmenu "+l.nolistview+" "+l.nopanel)}),this.bind("initOpened:before",function(){var n=this.$pnls.find("."+this.conf.classNames.selected).parents("."+l.panel+"_lazysubmenu");n.length&&(n.removeClass(l.panel+"_lazysubmenu "+l.nolistview+" "+l.nopanel),this.initPanels(n.last()))}),this.bind("openPanel:before",function(n){var e=this.__findAddBack(n,"."+l.panel+"_lazysubmenu").not("."+l.panel+"_lazysubmenu ."+l.panel+"_lazysubmenu");e.length&&this.initPanels(e)}))},add:function(){l=n[e]._c,t=n[e]._d,s=n[e]._e},clickAnchor:function(n,e){}},n[e].defaults[i]={load:!1},n[e].configuration[i]={};var l,t,s,a}(jQuery);
/*
 * jQuery mmenu navbar add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(n){var t="mmenu",a="navbars";n[t].addons[a]={setup:function(){var o=this,r=this.opts[a],i=this.conf[a];if(s=n[t].glbl,"undefined"!=typeof r){r instanceof Array||(r=[r]);var c={},d={};r.length&&(n.each(r,function(s){var f=r[s];"boolean"==typeof f&&f&&(f={}),"object"!=typeof f&&(f={}),"undefined"==typeof f.content&&(f.content=["prev","title"]),f.content instanceof Array||(f.content=[f.content]),f=n.extend(!0,{},o.opts.navbar,f);var l=n('<div class="'+e.navbar+'" />'),u=f.height;"number"!=typeof u?u=1:(u=Math.min(4,Math.max(1,u)),u>1&&l.addClass(e.navbar+"_size-"+u));var v=f.position;switch(v){case"bottom":break;default:v="top"}c[v]||(c[v]=0),c[v]+=u,d[v]||(d[v]=n('<div class="'+e.navbars+"_"+v+'" />')),d[v].append(l);for(var p=0,b=f.content.length;p<b;p++){var h=n[t].addons[a][f.content[p]]||null;h?h.call(o,l,f,i):(h=f.content[p],h instanceof n||(h=n(f.content[p])),l.append(h))}var m=n[t].addons[a][f.type]||null;m&&m.call(o,l,f,i),l.children("."+e.btn).length&&l.addClass(e.navbar+"_has-btns")}),this.bind("initMenu:after",function(){for(var n in c)this.$menu.addClass(e.menu+"_navbar_"+n+"-"+c[n]),this.$menu["bottom"==n?"append":"prepend"](d[n])}))}},add:function(){e=n[t]._c,o=n[t]._d,r=n[t]._e,e.add(a)},clickAnchor:function(n,t){}},n[t].configuration[a]={breadcrumbs:{separator:"/",removeFirst:!1}},n[t].configuration.classNames[a]={};var e,o,r,s}(jQuery);
/*
 * jQuery mmenu pageScroll add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t){function e(t){a&&a.length&&a.is(":visible")&&o.$html.add(o.$body).animate({scrollTop:a.offset().top+t}),a=!1}function i(t){try{return!("#"==t||"#"!=t.slice(0,1)||!o.$page.find(t).length)}catch(e){return!1}}var s="mmenu",n="pageScroll";t[s].addons[n]={setup:function(){var r=this,a=this.opts[n],c=this.conf[n];if(o=t[s].glbl,"boolean"==typeof a&&(a={scroll:a}),a=this.opts[n]=t.extend(!0,{},t[s].defaults[n],a),a.scroll&&this.bind("close:finish",function(){e(c.scrollOffset)}),a.update){var r=this,d=[],h=[];r.bind("initListview:after",function(e){r.__filterListItemAnchors(e.find("."+l.listview).children("li")).each(function(){var e=t(this).attr("href");i(e)&&d.push(e)}),h=d.reverse()});var p=-1;o.$wndw.on(f.scroll+"-"+n,function(e){for(var i=o.$wndw.scrollTop(),s=0;s<h.length;s++)if(t(h[s]).offset().top<i+c.updateOffset){p!==s&&(p=s,r.setSelected(r.__filterListItemAnchors(r.$pnls.children("."+l.panel+"_opened").find("."+l.listview).children("li")).filter('[href="'+h[s]+'"]').parent()));break}})}},add:function(){l=t[s]._c,r=t[s]._d,f=t[s]._e},clickAnchor:function(s,r,f){if(a=!1,r&&f&&this.opts.offCanvas&&this.opts[n].scroll&&o.$page&&o.$page.length){var c=s.attr("href");if(i(c)){if(a=t(c),!this.$menu.hasClass(l.mm("sidebar-expanded"))||!o.$html.is('[class*="'+l.mm("sidebar-expanded")+'"]'))return{close:!0};e(this.conf[n].scrollOffset)}}}},t[s].defaults[n]={scroll:!1,update:!1},t[s].configuration[n]={scrollOffset:0,updateOffset:50};var l,r,f,o,a=!1}(jQuery);
/*
 * jQuery mmenu RTL add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t){var e="mmenu",n="rtl";t[e].addons[n]={setup:function(){var u=this.opts[n];this.conf[n];i=t[e].glbl,"object"!=typeof u&&(u={use:u}),u=this.opts[n]=t.extend(!0,{},t[e].defaults[n],u),"boolean"!=typeof u.use&&(u.use="rtl"==(i.$html.attr("dir")||"").toLowerCase()),u.use&&this.bind("initMenu:after",function(){this.$menu.addClass(s.menu+"_rtl")})},add:function(){s=t[e]._c,u=t[e]._d,o=t[e]._e},clickAnchor:function(t,e){}},t[e].defaults[n]={use:"detect"};var s,u,o,i}(jQuery);
/*
 * jQuery mmenu searchfield add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){function n(e,n){if(n)for(var s in n)e.attr(s,n[s])}function s(e){switch(e){case 9:case 16:case 17:case 18:case 37:case 38:case 39:case 40:return!0}return!1}var a="mmenu",t="searchfield";e[a].addons[t]={setup:function(){var n=this,s=this.opts[t],i=this.conf[t];r=e[a].glbl,"boolean"==typeof s&&(s={add:s}),"object"!=typeof s&&(s={}),"boolean"==typeof s.panel&&(s.panel={add:s.panel}),"object"!=typeof s.panel&&(s.panel={}),s.add&&("panel"==s.addTo&&(s.panel.add=!0),s.panel.add&&(s.showSubPanels=!1,s.panel.splash&&(s.cancel=!0)),s=this.opts[t]=e.extend(!0,{},e[a].defaults[t],s),i=this.conf[t]=e.extend(!0,{},e[a].configuration[t],i),this.bind("close:start",function(){this.$menu.find("."+l.searchfield).children("input").blur()}),this.bind("initPanels:after",function(a){var t=e();s.panel.add&&(t=this._initSearchPanel(a));var l;switch(s.addTo){case"panels":l=a;break;case"panel":l=t;break;default:l=this.$menu.find(s.addTo)}if(l.each(function(){var a=n._initSearchfield(e(this));s.search&&n._initSearching(a)}),s.noResults){var i=s.panel.add?t:a;i.each(function(){n._initNoResultsMsg(e(this))})}}))},add:function(){l=e[a]._c,i=e[a]._d,d=e[a]._e,l.add("searchfield"),i.add("searchfield"),d.add("input focus blur")},clickAnchor:function(e,n){if(e.hasClass(l.searchfield+"__btn")){if(e.hasClass(l.btn+"_clear")){var s=e.closest("."+l.searchfield).find("input");return s.val(""),this.search(s),!0}if(e.hasClass(l.btn+"_next"))return e.closest("."+l.searchfield).submit(),!0}}},e[a].defaults[t]={add:!1,addTo:"panels",noResults:"No results found.",placeholder:"Search",panel:{add:!1,dividers:!0,fx:"none",id:null,splash:null,title:"Search"},search:!0,showTextItems:!1,showSubPanels:!0},e[a].configuration[t]={clear:!1,form:!1,input:!1,submit:!1};var l,i,d,r;e[a].prototype._initSearchPanel=function(n){var s=this.opts[t];this.conf[t];if(this.$pnls.children("."+l.panel+"_search").length)return e();var a=e('<div class="'+l.panel+'_search " />').append("<ul />").appendTo(this.$pnls);switch(s.panel.id&&a.attr("id",s.panel.id),s.panel.title&&a.attr("data-mm-title",s.panel.title),s.panel.fx){case!1:break;case"none":a.addClass(l.panel+"_noanimation");break;default:a.addClass(l.panel+"_fx-"+s.panel.fx)}return s.panel.splash&&a.append('<div class="'+l.panel+'__searchsplash">'+s.panel.splash+"</div>"),this._initPanels(a),a},e[a].prototype._initSearchfield=function(s){var i=this.opts[t],d=this.conf[t];if(!s.parent("."+l.listitem+"_vertical").length&&!s.find("."+l.searchfield).length){var r=e("<"+(d.form?"form":"div")+' class="'+l.searchfield+'" />'),h=e('<div class="'+l.searchfield+'__input" />'),c=e('<input placeholder="'+e[a].i18n(i.placeholder)+'" type="text" autocomplete="off" />');return h.append(c).appendTo(r),s.hasClass(l.searchfield)?s.replaceWith(r):(s.prepend(r),s.hasClass(l.panel)&&s.addClass(l.panel+"_has-searchfield")),n(c,d.input),d.clear&&e('<a class="'+l.btn+" "+l.btn+"_clear "+l.searchfield+'__btn" href="#" />').appendTo(h),n(r,d.form),d.form&&d.submit&&!d.clear&&e('<a class="'+l.btn+" "+l.btn+"_next "+l.searchfield+'__btn" href="#" />').appendTo(h),i.cancel&&e('<a href="#" class="'+l.searchfield+'__cancel">'+e[a].i18n("cancel")+"</a>").appendTo(r),r}},e[a].prototype._initSearching=function(n){var a=this,r=this.opts[t],h=(this.conf[t],{});n.closest("."+l.panel+"_search").length?(h.$pnls=this.$pnls.find("."+l.panel),h.$nrsp=n.closest("."+l.panel)):n.closest("."+l.panel).length?(h.$pnls=n.closest("."+l.panel),h.$nrsp=h.$pnls):(h.$pnls=this.$pnls.find("."+l.panel),h.$nrsp=this.$menu),r.panel.add&&(h.$pnls=h.$pnls.not("."+l.panel+"_search"));var c=n.find("input"),p=n.find("."+l.searchfield+"__cancel"),o=this.$pnls.children("."+l.panel+"_search"),f=h.$pnls.find("."+l.listitem);h.$itms=f.not("."+l.listitem+"_divider"),h.$dvdr=f.filter("."+l.listitem+"_divider"),r.panel.add&&r.panel.splash&&c.off(d.focus+"-"+t+"-splash").on(d.focus+"-"+t+"-splash",function(e){a.openPanel(o)}),r.cancel&&(c.off(d.focus+"-"+t+"-cancel").on(d.focus+"-"+t+"-cancel",function(e){p.addClass(l.searchfield+"__cancel-active")}),p.off(d.click+"-"+t+"-splash").on(d.click+"-"+t+"-splash",function(n){n.preventDefault(),e(this).removeClass(l.searchfield+"__cancel-active"),o.hasClass(l.panel+"_opened")&&a.openPanel(a.$pnls.children("."+l.panel+"_opened-parent").last())})),r.panel.add&&"panel"==r.addTo&&this.bind("openPanel:finish",function(e){e[0]===o[0]&&c.focus()}),c.data(i.searchfield,h).off(d.input+"-"+t).on(d.input+"-"+t,function(e){s(e.keyCode)||a.search(c)}),this.search(c)},e[a].prototype._initNoResultsMsg=function(n){var s=this.opts[t];this.conf[t];if(n.closest("."+l.panel).length||(n=this.$pnls.children("."+l.panel).first()),!n.children("."+l.panel+"__noresultsmsg").length){var i=n.children("."+l.listview).first(),d=e('<div class="'+l.panel+"__noresultsmsg "+l.hidden+'" />').append(e[a].i18n(s.noResults));i.length?d.insertAfter(i):d.prependTo(n)}},e[a].prototype.search=function(n,s){var a=this,d=this.opts[t];this.conf[t];n=n||this.$menu.find("."+l.searchfield).chidren("input").first(),s=s||n.val(),s=s.toLowerCase().trim();var r="a",h="a, span",c=n.data(i.searchfield),p=n.closest("."+l.searchfield),o=p.find("."+l.btn),f=this.$pnls.children("."+l.panel+"_search"),u=c.$pnls,_=c.$itms,v=c.$dvdr,m=c.$nrsp;if(_.removeClass(l.listitem+"_nosubitems").find("."+l.btn+"_fullwidth-search").removeClass(l.btn+"_fullwidth-search "+l.btn+"_fullwidth"),f.children("."+l.listview).empty(),u.scrollTop(0),s.length){if(_.add(v).addClass(l.hidden),_.each(function(){var n=e(this),a=r;(d.showTextItems||d.showSubPanels&&n.find("."+l.btn+"_next"))&&(a=h),n.children(a).not("."+l.btn+"_next").text().toLowerCase().indexOf(s)>-1&&n.removeClass(l.hidden)}),d.panel.add){var b=e();u.each(function(){var n=a.__filterListItems(e(this).find("."+l.listitem)).clone(!0);n.length&&(d.panel.dividers&&(b=b.add('<li class="'+l.listitem+" "+l.listitem+'_divider">'+e(this).find("."+l.navbar+"__title").text()+"</li>")),b=b.add(n))}),b.find("."+l.mm("toggle")).remove().end().find("."+l.mm("check")).remove().end().find("."+l.btn).remove(),f.children("."+l.listview).append(b),this.openPanel(f)}else d.showSubPanels&&u.each(function(n){var s=e(this);a.__filterListItems(s.find("."+l.listitem)).each(function(){var n=e(this),s=n.data(i.child);s&&s.find("."+l.listview).children().removeClass(l.hidden)})}),e(u.get().reverse()).each(function(s){var t=e(this),d=t.data(i.parent);d&&(a.__filterListItems(t.find("."+l.listitem)).length?d.hasClass(l.hidden)&&d.removeClass(l.hidden).children("."+l.btn+"_next").not("."+l.btn+"_fullwidth").addClass(l.btn+"_fullwidth").addClass(l.btn+"_fullwidth-search"):n.closest("."+l.panel).length||((t.hasClass(l.panel+"_opened")||t.hasClass(l.panel+"_opened-parent"))&&setTimeout(function(){a.openPanel(d.closest("."+l.panel))},(s+1)*(1.5*a.conf.openingInterval)),d.addClass(l.listitem+"_nosubitems")))}),this.__filterListItems(u.find("."+l.listitem)).each(function(){e(this).prevAll("."+l.listitem+"_divider").first().removeClass(l.hidden)});o.removeClass(l.hidden),m.find("."+l.panel+"__noresultsmsg")[_.not("."+l.hidden).length?"addClass":"removeClass"](l.hidden),d.panel.add&&(d.panel.splash&&f.find("."+l.panel+"__searchsplash").addClass(l.hidden),_.add(v).removeClass(l.hidden))}else _.add(v).removeClass(l.hidden),o.addClass(l.hidden),m.find("."+l.panel+"__noresultsmsg").addClass(l.hidden),d.panel.add&&(d.panel.splash?f.find("."+l.panel+"__searchsplash").removeClass(l.hidden):n.closest("."+l.panel+"_search").length||this.openPanel(this.$pnls.children("."+l.panel+"_opened-parent").last()));this.trigger("updateListview")}}(jQuery);
/*
 * jQuery mmenu sectionIndexer add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var a="mmenu",n="sectionIndexer";e[a].addons[n]={setup:function(){var r=this,d=this.opts[n];this.conf[n];s=e[a].glbl,"boolean"==typeof d&&(d={add:d}),"object"!=typeof d&&(d={}),d=this.opts[n]=e.extend(!0,{},e[a].defaults[n],d);var h=null;this.bind("initPanels:after",function(a){if(d.add){var s;switch(d.addTo){case"panels":s=a;break;default:s=e(d.addTo,this.$menu).filter("."+i.panel)}s.find("."+i.listitem+"_divider").closest("."+i.panel).addClass(i.panel+"_has-sectionindexer"),h||(h=e('<div class="'+i.sectionindexer+'" />').prependTo(this.$menu).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>'),h.on(t.mouseover+"-"+n+" "+t.touchstart+"-"+n,"a",function(a){var n=e(a.target).attr("href").slice(1),t=r.$pnls.children("."+i.panel+"_opened"),s=t.find("."+i.listview),d=-1,h=t.scrollTop();t.scrollTop(0),s.children("."+i.listitem+"_divider").not("."+i.hidden).each(function(){d<0&&n==e(this).text().slice(0,1).toLowerCase()&&(d=e(this).position().top)}),t.scrollTop(d>-1?d:h)}));var o=function(e){e=e||this.$pnls.children("."+i.panel+"_opened"),this.$menu[(e.hasClass(i.panel+"_has-sectionindexer")?"add":"remove")+"Class"](i.menu+"_has-sectionindexer")};this.bind("openPanel:start",o),this.bind("initPanels:after",o)}})},add:function(){i=e[a]._c,r=e[a]._d,t=e[a]._e,i.add("sectionindexer"),t.add("mouseover")},clickAnchor:function(e,a){if(e.parent().is("."+i.indexer))return!0}},e[a].defaults[n]={add:!1,addTo:"panels"};var i,r,t,s}(jQuery);
/*
 * jQuery mmenu setSelected add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var t="mmenu",n="setSelected";e[t].addons[n]={setup:function(){var a=this,r=this.opts[n];this.conf[n];if(l=e[t].glbl,"boolean"==typeof r&&(r={hover:r,parent:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),"detect"==r.current){var d=function(e){e=e.split("?")[0].split("#")[0];var t=a.$menu.find('a[href="'+e+'"], a[href="'+e+'/"]');t.length?a.setSelected(t.parent(),!0):(e=e.split("/").slice(0,-1),e.length&&d(e.join("/")))};this.bind("initMenu:after",function(){d(window.location.href)})}else r.current||this.bind("initListview:after",function(e){e.find("."+i.listview).children("."+i.listitem+"_selected").removeClass(i.listitem+"_selected")});r.hover&&this.bind("initMenu:after",function(){this.$menu.addClass(i.menu+"_selected-hover")}),r.parent&&(this.bind("openPanel:finish",function(e){this.$pnls.find("."+i.listview).find("."+i.listitem+"_selected-parent").removeClass(i.listitem+"_selected-parent");for(var t=e.data(s.parent);t;)t.not("."+i.listitem+"_vertical").addClass(i.listitem+"_selected-parent"),t=t.closest("."+i.panel).data(s.parent)}),this.bind("initMenu:after",function(){this.$menu.addClass(i.menu+"_selected-parent")}))},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e},clickAnchor:function(e,t){}},e[t].defaults[n]={current:!0,hover:!1,parent:!1};var i,s,a,l}(jQuery);
/*
 * jQuery mmenu sidebar add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var s="mmenu",d="sidebar";e[s].addons[d]={setup:function(){if(this.opts.offCanvas){var n=this.opts[d];this.conf[d];l=e[s].glbl,("string"==typeof n||"boolean"==typeof n&&n||"number"==typeof n)&&(n={expanded:n}),"object"!=typeof n&&(n={}),"boolean"==typeof n.collapsed&&n.collapsed&&(n.collapsed="all"),"string"!=typeof n.collapsed&&"number"!=typeof n.collapsed||(n.collapsed={use:n.collapsed}),"object"!=typeof n.collapsed&&(n.collapsed={}),"number"==typeof n.collapsed.use&&(n.collapsed.use="(min-width: "+n.collapsed.use+"px)"),"boolean"==typeof n.expanded&&n.expanded&&(n.expanded="all"),"string"!=typeof n.expanded&&"number"!=typeof n.expanded||(n.expanded={use:n.expanded}),"object"!=typeof n.expanded&&(n.expanded={}),"number"==typeof n.expanded.use&&(n.expanded.use="(min-width: "+n.expanded.use+"px)"),n=this.opts[d]=e.extend(!0,{},e[s].defaults[d],n);var t=a.wrapper+"_sidebar-collapsed-"+n.collapsed.size,i=a.wrapper+"_sidebar-expanded-"+n.expanded.size;n.collapsed.use&&(this.bind("initMenu:after",function(){this.$menu.addClass(a.menu+"_sidebar-collapsed"),n.collapsed.blockMenu&&this.opts.offCanvas&&!this.$menu.children("."+a.menu+"__blocker").length&&this.$menu.prepend('<a class="'+a.menu+'__blocker" href="#'+this.$menu.attr("id")+'" />'),n.collapsed.hideNavbar&&this.$menu.addClass(a.menu+"_hidenavbar"),n.collapsed.hideDivider&&this.$menu.addClass(a.menu+"_hidedivider")}),"boolean"==typeof n.collapsed.use?this.bind("initMenu:after",function(){l.$html.addClass(t)}):this.matchMedia(n.collapsed.use,function(){l.$html.addClass(t)},function(){l.$html.removeClass(t)})),n.expanded.use&&(this.bind("initMenu:after",function(){this.$menu.addClass(a.menu+"_sidebar-expanded")}),"boolean"==typeof n.expanded.use?this.bind("initMenu:after",function(){l.$html.addClass(i),this.open()}):this.matchMedia(n.expanded.use,function(){l.$html.addClass(i),l.$html.hasClass(a.wrapper+"_sidebar-closed")||this.open()},function(){l.$html.removeClass(i),this.close()}),this.bind("close:start",function(){l.$html.hasClass(i)&&l.$html.addClass(a.wrapper+"_sidebar-closed")}),this.bind("open:start",function(){l.$html.removeClass(a.wrapper+"_sidebar-closed")}))}},add:function(){a=e[s]._c,n=e[s]._d,t=e[s]._e},clickAnchor:function(e,s,n){if(this.opts[d].expanded.use&&l.$html.is('[class*="'+a.wrapper+'_sidebar-expanded-"]')&&s&&n)return{close:!1}}},e[s].defaults[d]={collapsed:{use:!1,size:40,blockMenu:!0,hideDivider:!1,hideNavbar:!0},expanded:{use:!1,size:30}},e[s].configuration[d]={};var a,n,t,l}(jQuery);
/*
 * jQuery mmenu toggles add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t){var e="mmenu",c="toggles";t[e].addons[c]={setup:function(){var s=this;this.opts[c],this.conf[c];a=t[e].glbl,this.bind("initPanels:after",function(e){this.__refactorClass(e.find("input"),this.conf.classNames[c].toggle,n.toggle),this.__refactorClass(e.find("input"),this.conf.classNames[c].check,n.check),e.find("input."+n.toggle+", input."+n.check).each(function(){var e=t(this),c=e.closest("li"),i=e.hasClass(n.toggle)?"toggle":"check",a=e.attr("id")||s.__getUniqueId();c.children('label[for="'+a+'"]').length||(e.attr("id",a),c.prepend(e),t('<label for="'+a+'" class="'+n[i]+'"></label>').insertBefore(c.children("a, span").last()))})})},add:function(){n=t[e]._c,s=t[e]._d,i=t[e]._e,n.add("toggle check")},clickAnchor:function(t,e){}},t[e].configuration.classNames[c]={toggle:"Toggle",check:"Check"};var n,s,i,a}(jQuery);
/*
 * jQuery mmenu navbar add-on breadcrumbs content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(a){var r="mmenu",n="navbars",e="breadcrumbs";a[r].addons[n][e]=function(n,e,s){var t=this,i=a[r]._c,b=a[r]._d;i.add("separator");var c=a('<span class="'+i.navbar+'__breadcrumbs" />').appendTo(n);this.bind("initNavbar:after",function(r){if(!r.children("."+i.navbar).children("."+i.navbar+"__breadcrumbs").length){r.removeClass(i.panel+"_has-navbar");for(var n=[],e=a('<span class="'+i.navbar+'__breadcrumbs"></span>'),t=r,c=!0;t&&t.length;){if(t.is("."+i.panel)||(t=t.closest("."+i.panel)),!t.parent("."+i.listitem+"_vertical").length){var d=t.children("."+i.navbar).children("."+i.navbar+"__title").text();d.length&&n.unshift(c?"<span>"+d+"</span>":'<a href="#'+t.attr("id")+'">'+d+"</a>"),c=!1}t=t.data(b.parent)}s.breadcrumbs.removeFirst&&n.shift(),e.append(n.join('<span class="'+i.separator+'">'+s.breadcrumbs.separator+"</span>")).appendTo(r.children("."+i.navbar))}}),this.bind("openPanel:start",function(a){var r=a.find("."+i.navbar+"__breadcrumbs");r.length&&c.html(r.html()||"")}),this.bind("initNavbar:after:sr-aria",function(r){r.children("."+i.navbar).children("."+i.breadcrumbs).children("a").each(function(){t.__sr_aria(a(this),"owns",a(this).attr("href").slice(1))})})}}(jQuery);
/*
 * jQuery mmenu navbar add-on close content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t){var e="mmenu",n="navbars",a="close";t[e].addons[n][a]=function(n,a){var s=t[e]._c;t[e].glbl;s.add("close");var r=t('<a class="'+s.btn+" "+s.btn+"_close "+s.navbar+'__btn" href="#" />').appendTo(n);this.bind("setPage:after",function(t){r.attr("href","#"+t.attr("id"))}),this.bind("setPage:after:sr-text",function(n){r.html(this.__sr_text(t[e].i18n(this.conf.screenReader.text.closeMenu))),this.__sr_aria(r,"owns",r.attr("href").slice(1))})}}(jQuery);
/*
 * jQuery mmenu navbar add-on next content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(a){var n="mmenu",t="navbars",e="next";a[n].addons[t][e]=function(e,s){var r,i,h,d=a[n]._c,o=a('<a class="'+d.btn+" "+d.btn+"_next "+d.navbar+'__btn" href="#" />').appendTo(e);this.bind("openPanel:start",function(a){r=a.find("."+this.conf.classNames[t].panelNext),i=r.attr("href"),h=r.html(),i?o.attr("href",i):o.removeAttr("href"),o[i||h?"removeClass":"addClass"](d.hidden),o.html(h)}),this.bind("openPanel:start:sr-aria",function(a){this.__sr_aria(o,"hidden",o.hasClass(d.hidden)),this.__sr_aria(o,"owns",(o.attr("href")||"").slice(1))})},a[n].configuration.classNames[t].panelNext="Next"}(jQuery);
/*
 * jQuery mmenu navbar add-on prev content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(a){var n="mmenu",r="navbars",e="prev";a[n].addons[r][e]=function(e,t){var i=a[n]._c,s=a('<a class="'+i.btn+" "+i.btn+"_prev "+i.navbar+'__btn" href="#" />').appendTo(e);this.bind("initNavbar:after",function(a){a.removeClass(i.panel+"_has-navbar")});var h,l,d;this.bind("openPanel:start",function(a){a.parent("."+i.listitem+"_vertical").length||(h=a.find("."+this.conf.classNames[r].panelPrev),h.length||(h=a.children("."+i.navbar).children("."+i.btn+"_prev")),l=h.attr("href"),d=h.html(),l?s.attr("href",l):s.removeAttr("href"),s[l||d?"removeClass":"addClass"](i.hidden),s.html(d))}),this.bind("initNavbar:after:sr-aria",function(a){var n=a.children("."+i.navbar);this.__sr_aria(n,"hidden",!0)}),this.bind("openPanel:start:sr-aria",function(a){this.__sr_aria(s,"hidden",s.hasClass(i.hidden)),this.__sr_aria(s,"owns",(s.attr("href")||"").slice(1))})},a[n].configuration.classNames[r].panelPrev="Prev"}(jQuery);
/*
 * jQuery mmenu navbar add-on searchfield content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(s){var e="mmenu",a="navbars",d="searchfield";s[e].addons[a][d]=function(a,d){var i=s[e]._c,t=s('<div class="'+i.searchfield+'" />').appendTo(a);"object"!=typeof this.opts.searchfield&&(this.opts.searchfield={}),this.opts.searchfield.add=!0,this.opts.searchfield.addTo=t}}(jQuery);
/*
 * jQuery mmenu navbar add-on tabs content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(a){var t="mmenu",e="navbars",n="tabs";a[t].addons[e][n]=function(n,s,r){function i(a){c.removeClass(d.navbar+"__tab_selected");var t=c.filter('[href="#'+a.attr("id")+'"]');if(t.length)t.addClass(d.navbar+"__tab_selected");else{var e=a.data(l.parent);e&&e.length&&i(e.closest("."+d.panel))}}var d=a[t]._c,l=a[t]._d,o=a[t]._e,_=this,c=n.children("a");n.addClass(d.navbar+"_tabs").parent().addClass(d.navbars+"_has-tabs"),c.on(o.click+"-"+e,function(t){t.preventDefault();var e=a(this);if(e.hasClass(d.navbar+"__tab_selected"))return void t.stopImmediatePropagation();try{_.__openPanelWoAnimation(a(e.attr("href"))),t.stopImmediatePropagation()}catch(n){}}),this.bind("openPanel:start",i)}}(jQuery);
/*
 * jQuery mmenu navbar add-on title content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t){var a="mmenu",e="navbars",n="title";t[a].addons[e][n]=function(n,i){var r,s,l,h=t[a]._c,d=t('<a class="'+h.navbar+'__title" />').appendTo(n);this.bind("openPanel:start",function(t){t.parent("."+h.listitem+"_vertical").length||(l=t.find("."+this.conf.classNames[e].panelTitle),l.length||(l=t.children("."+h.navbar).children("."+h.navbar+"__title")),r=l.attr("href"),s=l.html()||i.title,r?d.attr("href",r):d.removeAttr("href"),d[r||s?"removeClass":"addClass"](h.hidden),d.html(s))});var o;this.bind("openPanel:start:sr-aria",function(t){if(this.opts.screenReader.text&&(o||(o=this.$menu.children("."+h.navbars+"_top, ."+h.navbars+"_bottom").children("."+h.navbar).children("."+h.btn+"_prev")),o.length)){var a=!0;"parent"==this.opts.navbar.titleLink&&(a=!o.hasClass(h.hidden)),this.__sr_aria(d,"hidden",a)}})},t[a].configuration.classNames[e].panelTitle="Title"}(jQuery);
/*
 * jQuery mmenu Angular wrapper
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var n="mmenu",t="angular";e[n].wrappers[t]=function(){this.opts.onClick={close:!0,preventDefault:!1,setSelected:!0}}}(jQuery);
/*
 * jQuery mmenu Bootstrap 3 wrapper
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(n){var e="mmenu",a="bootstrap3";n[e].wrappers[a]=function(){this.$menu.hasClass("navbar-collapse")&&(this.conf.classNames.selected="active",this.conf.classNames.divider="divider",this.conf.clone=!0,this.opts.initMenu=function(n){for(var e="",a=["nav-tabs","nav-pills","navbar-nav"],t=0;t<a.length;t++)if(n.find("."+a[t]).length){e=a[t];break}e.length&&(i.menu.call(this),i.dropdown.call(this),i[e.split("nav-").join("").split("-nav").join("")].call(this))})};var i={menu:function(){this.$menu.children().removeClass("nav").find(".sr-only").remove().end().find(".divider:empty").remove();for(var n=["role","aria-haspopup","aria-expanded"],e=0;e<n.length;e++)this.$menu.find("["+n[e]+"]").removeAttr(n[e])},dropdown:function(){var e=this.$menu.find(".dropdown");e.removeClass("dropdown"),e.children(".dropdown-toggle").find(".caret").remove().end().each(function(){n(this).replaceWith("<span>"+n(this).html()+"</span>")}),e.children(".dropdown-menu").removeClass("dropdown-menu")},tabs:function(){this.$menu.children().removeClass("nav-tabs")},pills:function(){this.$menu.children().removeClass("nav-pills")},navbar:function(){var n=this;this.$menu.removeClass("collapse navbar-collapse").wrapInner("<div />").children().children().removeClass("navbar-left navbar-right navbar-nav navbar-text navbar-btn");var e=this.$menu.find(".navbar-form");this.conf.searchform={form:{action:e.attr("action"),method:e.attr("method")},input:{name:e.find("input").attr("name")},submit:!0},e.remove(),(this.$orig||this.$menu).closest(".navbar").find(".navbar-header").find(".navbar-toggle").off("click").on("click",function(e){n.open(),e.stopImmediatePropagation(),e.preventDefault()})}}}(jQuery);
/*
 * jQuery mmenu Bootstrap 4 wrapper
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(n){function e(e){for(var a=n("<a />"),t=["href","title","target"],r=0;r<t.length;r++)"undefined"!=typeof e.attr(t[r])&&a.attr(t[r],e.attr(t[r]));return a.html(e.html()),a.find(".sr-only").remove(),a}function a(a){var t=n("<ul />");return a.find(".dropdown-item, .dropdown-divider").each(function(){var a=n(this),r=n("<li />");a.hasClass("dropdown-divider")?r.addClass("Divider"):r.append(e(a)),t.append(r)}),t}function t(t){var r=n("<ul />");return t.find(".nav-item").each(function(){var t=n(this),i=n("<li />");if(t.hasClass("active")&&i.addClass("Selected"),!t.hasClass("nav-link")){var o=t.children(".dropdown-menu");o.length&&i.append(a(o)),t=t.children(".nav-link")}i.prepend(e(t)),r.append(i)}),r}var r="mmenu",i="bootstrap4";n[r].wrappers[i]=function(){var e=this;if(this.$menu.hasClass("navbar-collapse")){this.conf.clone=!1;var r=n("<nav />"),i=n("<div />");r.append(i),this.$menu.children().each(function(){var r=n(this);switch(!0){case r.hasClass("navbar-nav"):i.append(t(r));break;case r.hasClass("dropdown-menu"):i.append(a(r));break;case r.hasClass("form-inline"):e.conf.searchfield.form={action:r.attr("action")||null,method:r.attr("method")||null},e.conf.searchfield.input={name:r.find("input").attr("name")||null},e.conf.searchfield.clear=!1,e.conf.searchfield.submit=!0;break;default:i.append(r.clone(!0))}}),this.bind("initMenu:before",function(){r.prependTo("body"),this.$menu=r}),this.$menu.parent().find(".navbar-toggler").removeAttr("data-target").removeAttr("aria-controls").off("click").on("click",function(n){n.preventDefault(),n.stopImmediatePropagation(),e.open()})}}}(jQuery);
/*
 * jQuery mmenu jQuery Mobile wrapper
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var n="mmenu",t="jqueryMobile";e[n].wrappers[t]=function(){var n=this;this.opts.onClick.close=!1,this.conf.offCanvas.pageSelector="div.ui-page-active",e("body").on("pagecontainerchange",function(e,t){"function"==typeof n.close&&(n.close(),n.setPage(t.toPage))}),this.bind("initAnchors:after",function(){e("body").on("click",".mm-listview a",function(n){n.isDefaultPrevented()||(n.preventDefault(),e("body").pagecontainer("change",this.href))})})}}(jQuery);
/*
 * jQuery mmenu Magento wrapper
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var n="mmenu",a="magento";e[n].wrappers[a]=function(){this.conf.classNames.selected="active"}}(jQuery);
/*
 * jQuery mmenu Olark wrapper
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(n){var o="mmenu",a="olark";n[o].wrappers[a]=function(){this.conf.offCanvas.noPageSelector.push("#olark")}}(jQuery);
/*
 * jQuery mmenu Turbolinks wrapper
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(n){var t="mmenu",o="turbolinks";n[t].wrappers[o]=function(){var o,r;n(document).on("turbolinks:before-visit",function(){r=n("html"),o=r.attr("class"),o=n.grep(o.split(/\s+/),function(n){return!/mm-/.test(n)}).join(" ")}).on("turbolinks:load",function(){"undefined"!=typeof r&&(r.attr("class",o),n[t].glbl=!1)})}}(jQuery);
/*
 * jQuery mmenu WordPress wrapper
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(s){var e="mmenu",n="wordpress";s[e].wrappers[n]=function(){this.conf.classNames.selected="current-menu-item",s("#wpadminbar").css("position","fixed").addClass("mm-slideout")}}(jQuery);
return true;
}));

jQuery(document).ready(function($) {
	$("#wpadminbar")
		.css( "position", "fixed" )
		.addClass( "mm-slideout" );

	var $menu 	= $("#menu-location-menu-1").first().clone(),
		$button = $(".menu-toggle");

	var $selected = $menu.find( "li.current-menu-item" );
	var $vertical = $menu.find( "li.Vertical" );
	var $dividers = $menu.find( "li.Divider" );

	$menu.children().not( "ul, ol, div" ).remove();
	$menu.add( $menu.find( "ul, li" ) )
		.removeAttr( "class" )
		.not( "[id^='wpmm-']" )
		.removeAttr( "id" );

	$menu.addClass( "wpmm-menu" );

	$selected.addClass( "Selected" );
	$vertical.addClass( "Vertical" );
	$dividers.addClass( "Divider" );

	$menu.mmenu(
		{
			extensions: {
				"all": ["position-top"]
			},
			offCanvas: {
				moveBackground: false
			},
			navbars: [
				{
					content: [ "prev", "title" ]
				}
			],
			keyboardNavigation: true
		}, {
			offCanvas: {
				pageSelector: "> div:not(#wpadminbar)"
			}
		}
	);

	var api = $menu.data( "mmenu" );

	$button
		.addClass( "wpmm-button" )
		.off( "click" )
		.on( "click", function( e ) {
			e.preventDefault();
			e.stopImmediatePropagation();
			api.open();
		});
	$("body").on(
		"click",
		"a",
		function( e ) {
			if ( !e.isDefaultPrevented() )
			{
				if ( !confirm( "You are leaving the preview, changes you've made to the mobile menu will no longer take effect." ) ) {
					e.preventDefault();
				}
			}
		}
	);
	setTimeout(function() {
		api.open();
	}, 1000);

	function mm_hasBg( $e )
	{
		var bg = true;
		switch( $e.css( "background-color" ) )
		{
			case "":
			case "none":
			case "inherit":
			case "undefined":
			case "transparent":
			case "rgba(0,0,0,0)":
			case "rgba( 0,0,0,0 )":
			case "rgba(0, 0, 0, 0)":
			case "rgba( 0, 0, 0, 0 )":
				bg = false;
				break;
		}
		return bg;
	}

	var $node = $(".mm-page");
	if ( !mm_hasBg( $node ) )
	{
		$node.addClass( "wpmm-force-bg" );
		$node = $("body");
		if ( !mm_hasBg( $node ) )
		{
			$node.addClass( "wpmm-force-bg" );
			$node = $("html");
			if ( !mm_hasBg( $node ) )
			{
				$node.addClass( "wpmm-force-bg" );
			}
		}
	}
});