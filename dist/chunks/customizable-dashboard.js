(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[27],{495:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u}));var r=n(0),o=n(42),c=n(110),i=n.n(c),a=n(25),l=i()(a.b),s=function(e){var t=l.getCurrencyConfig(),n=Object(o.applyFilters)("woocommerce_admin_report_currency",t,e);return i()(n)},u=Object(r.createContext)(l)},502:function(e,t,n){"use strict";var r=n(5),o=n.n(r),c=n(11),i=n.n(c),a=n(12),l=n.n(a),s=n(8),u=n.n(s),d=n(13),p=n.n(d),f=n(14),m=n.n(f),b=n(6),v=n.n(b),y=n(0),h=n(18),_=n(1),O=n.n(_),j=n(3),g=n(15),k=n(47),w=n(25),E=n(23),D=n(29),S=n(28),C=n(495),T=n(73);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v()(e);if(t){var o=v()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m()(this,n)}}var B=function(e){p()(n,e);var t=R(n);function n(){var e;return i()(this,n),(e=t.call(this)).onDateSelect=e.onDateSelect.bind(u()(e)),e.onFilterSelect=e.onFilterSelect.bind(u()(e)),e.onAdvancedFilterAction=e.onAdvancedFilterAction.bind(u()(e)),e}return l()(n,[{key:"onDateSelect",value:function(e){var t=this.props,n=t.report;(0,t.addCesSurveyForAnalytics)(),Object(S.recordEvent)("datepicker_update",P({report:n},Object(j.omitBy)(e,j.isUndefined)))}},{key:"onFilterSelect",value:function(e){var t=this.props,n=t.report,r=t.addCesSurveyForAnalytics,o=e.filter||e["filter-variations"];["single_product","single_category","single_coupon","single_variation"].includes(o)&&r(),Object(S.recordEvent)("analytics_filter",{report:n,filter:e.filter||"all"})}},{key:"onAdvancedFilterAction",value:function(e,t){var n=this.props,r=n.report,o=n.addCesSurveyForAnalytics;switch(e){case"add":Object(S.recordEvent)("analytics_filters_add",{report:r,filter:t.key});break;case"remove":Object(S.recordEvent)("analytics_filters_remove",{report:r,filter:t.key});break;case"filter":var c=Object.keys(t).reduce((function(e,n){return e[Object(j.snakeCase)(n)]=t[n],e}),{});o(),Object(S.recordEvent)("analytics_filters_filter",P({report:r},c));break;case"clear_all":Object(S.recordEvent)("analytics_filters_clear_all",{report:r});break;case"match":Object(S.recordEvent)("analytics_filters_all_any",{report:r,value:t.match})}}},{key:"render",value:function(){var e=this.props,t=e.advancedFilters,n=e.filters,r=e.path,o=e.query,c=e.showDatePicker,i=e.defaultDateRange,a=Object(D.getDateParamsFromQuery)(o,i),l=a.period,s=a.compare,u=a.before,d=a.after,p=Object(D.getCurrentDates)(o,i),f={period:l,compare:s,before:u,after:d,primaryDate:p.primary,secondaryDate:p.secondary},m=this.context;return Object(y.createElement)(k.ReportFilters,{query:o,siteLocale:w.c.siteLocale,currency:m.getCurrencyConfig(),path:r,filters:n,advancedFilters:t,showDatePicker:c,onDateSelect:this.onDateSelect,onFilterSelect:this.onFilterSelect,onAdvancedFilterAction:this.onAdvancedFilterAction,dateQuery:f,isoDateFormat:D.isoDateFormat})}}]),n}(y.Component);B.contextType=C.a,t.a=Object(h.compose)(Object(g.withSelect)((function(e){return{defaultDateRange:e(E.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range}})),Object(g.withDispatch)((function(e){return{addCesSurveyForAnalytics:e(T.c).addCesSurveyForAnalytics}})))(B),B.propTypes={advancedFilters:O.a.object,filters:O.a.array,path:O.a.string.isRequired,query:O.a.object,showDatePicker:O.a.bool,report:O.a.string.isRequired}},577:function(e,t,n){"use strict";n.r(t);var r=n(34),o=n.n(r),c=n(5),i=n.n(c),a=n(20),l=n.n(a),s=n(0),u=n(2),d=n(18),p=n(3),f=n(4),m=n(42),b=n(304),v=n(196),y=Object(s.createElement)(v.b,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(s.createElement)(v.a,{d:"M2 12C2 6.44444 6.44444 2 12 2C17.5556 2 22 6.44444 22 12C22 17.5556 17.5556 22 12 22C6.44444 22 2 17.5556 2 12ZM13 11V7H11V11H7V13H11V17H13V13H17V11H13Z"})),h=n(15),_=n(47),O=n(23),j=n(21),g=n(29),k=n(28),w=(n(508),Object(s.lazy)((function(){return Promise.all([n.e(5),n.e(29)]).then(n.bind(null,598))}))),E=Object(s.lazy)((function(){return Promise.all([n.e(1),n.e(34)]).then(n.bind(null,599))})),D=Object(s.lazy)((function(){return n.e(48).then(n.bind(null,591))})),S=Object(m.applyFilters)("woocommerce_dashboard_default_sections",[{key:"store-performance",component:function(e){return Object(s.createElement)(s.Suspense,{fallback:Object(s.createElement)(_.Spinner,null)},Object(s.createElement)(D,e))},title:Object(u.__)("Performance","woocommerce-admin"),isVisible:!0,icon:"arrow-right-alt",hiddenBlocks:["coupons/amount","coupons/orders_count","downloads/download_count","taxes/order_tax","taxes/total_tax","taxes/shipping_tax","revenue/shipping","orders/avg_order_value","revenue/refunds","revenue/gross_sales"]},{key:"charts",component:function(e){return Object(s.createElement)(s.Suspense,{fallback:Object(s.createElement)(_.Spinner,null)},Object(s.createElement)(w,e))},title:Object(u.__)("Charts","woocommerce-admin"),isVisible:!0,icon:"chart-bar",hiddenBlocks:["orders_avg_order_value","avg_items_per_order","products_items_sold","revenue_total_sales","revenue_refunds","coupons_amount","coupons_orders_count","revenue_shipping","taxes_total_tax","taxes_order_tax","taxes_shipping_tax","downloads_download_count"]},{key:"leaderboards",component:function(e){return Object(s.createElement)(s.Suspense,{fallback:Object(s.createElement)(_.Spinner,null)},Object(s.createElement)(E,e))},title:Object(u.__)("Leaderboards","woocommerce-admin"),isVisible:!0,icon:"editor-ol",hiddenBlocks:["coupons","customers"]}]),C=n(24),T=n.n(C),F=n(11),P=n.n(F),R=n(12),B=n.n(R),x=n(8),A=n.n(x),M=n(13),I=n.n(M),V=n(14),H=n.n(V),N=n(6),U=n.n(N);function q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=U()(e);if(t){var o=U()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return H()(this,n)}}var L=function(e){I()(n,e);var t=q(n);function n(e){var r;return P()(this,n),(r=t.call(this,e)).onMoveUp=r.onMoveUp.bind(A()(r)),r.onMoveDown=r.onMoveDown.bind(A()(r)),r}return B()(n,[{key:"onMoveUp",value:function(){var e=this.props,t=e.onMove,n=e.onToggle;t(-1),n()}},{key:"onMoveDown",value:function(){var e=this.props,t=e.onMove,n=e.onToggle;t(1),n()}},{key:"render",value:function(){var e=this.props,t=e.onRemove,n=e.isFirst,r=e.isLast,o=e.onTitleBlur,c=e.onTitleChange,i=e.titleInput;return Object(s.createElement)(s.Fragment,null,Object(s.createElement)("div",{className:"woocommerce-ellipsis-menu__item"},Object(s.createElement)(f.TextControl,{label:Object(u.__)("Section Title","woocommerce-admin"),onBlur:o,onChange:c,required:!0,value:i})),Object(s.createElement)("div",{className:"woocommerce-dashboard-section-controls"},!n&&Object(s.createElement)(_.MenuItem,{isClickable:!0,onInvoke:this.onMoveUp},Object(s.createElement)(f.Icon,{icon:"arrow-up-alt2",label:Object(u.__)("Move up")}),Object(u.__)("Move up","woocommerce-admin")),!r&&Object(s.createElement)(_.MenuItem,{isClickable:!0,onInvoke:this.onMoveDown},Object(s.createElement)(f.Icon,{icon:"arrow-down-alt2",label:Object(u.__)("Move Down")}),Object(u.__)("Move Down","woocommerce-admin")),Object(s.createElement)(_.MenuItem,{isClickable:!0,onInvoke:t},Object(s.createElement)(f.Icon,{icon:"trash",label:Object(u.__)("Remove block")}),Object(u.__)("Remove section","woocommerce-admin"))))}}]),n}(s.Component);function Q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=U()(e);if(t){var o=U()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return H()(this,n)}}var z=function(e){I()(n,e);var t=Q(n);function n(e){var r;P()(this,n),r=t.call(this,e);var o=e.title;return r.state={titleInput:o},r.onToggleHiddenBlock=r.onToggleHiddenBlock.bind(A()(r)),r.onTitleChange=r.onTitleChange.bind(A()(r)),r.onTitleBlur=r.onTitleBlur.bind(A()(r)),r}return B()(n,[{key:"onTitleChange",value:function(e){this.setState({titleInput:e})}},{key:"onTitleBlur",value:function(){var e=this.props,t=e.onTitleUpdate,n=e.title,r=this.state.titleInput;""===r?this.setState({titleInput:n}):t&&t(r)}},{key:"onToggleHiddenBlock",value:function(e){var t=this;return function(){var n=Object(p.xor)(t.props.hiddenBlocks,[e]);t.props.onChangeHiddenBlocks(n)}}},{key:"render",value:function(){var e=this.props,t=e.component,n=o()(e,["component"]),r=this.state.titleInput;return Object(s.createElement)("div",{className:"woocommerce-dashboard-section"},Object(s.createElement)(t,T()({onTitleChange:this.onTitleChange,onTitleBlur:this.onTitleBlur,onToggleHiddenBlock:this.onToggleHiddenBlock,titleInput:r,controls:L},n)))}}]),n}(s.Component),G=n(502),J=n(495);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W=Object(m.applyFilters)("woocommerce_admin_dashboard_filters",[]);t.default=Object(d.compose)(Object(h.withSelect)((function(e){return{defaultDateRange:e(O.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range}})))((function(e){var t,n,r,c,i,a,d,m,v,h=e.defaultDateRange,w=e.path,E=e.query,D=Object(O.useUserPreferences)(),C=D.updateUserPreferences,T=function(e){if(!e||0===e.length)return S;var t=S.map((function(e){return e.key})),n=e.map((function(e){return e.key})),r=new Set([].concat(l()(n),l()(t))),o=[];return r.forEach((function(t){var n=S.find((function(e){return e.key===t}));if(n){var r=e.find((function(e){return e.key===t}));o.push(K(K({},n),r))}})),o}(o()(D,["updateUserPreferences"]).dashboard_sections),F=function(e){C({dashboard_sections:e})},P=function(e,t){var n=T.map((function(n){return n.key===e?K(K({},n),t):n}));F(n)},R=function(e){return function(t){Object(k.recordEvent)("dash_section_rename",{key:e}),P(e,{title:t})}},B=function(e,t){return function(){t&&t();var n=T.findIndex((function(t){return e===t.key})),r=T.splice(n,1).shift();r.isVisible=!r.isVisible,T.push(r),r.isVisible?Object(k.recordEvent)("dash_section_add",{key:r.key}):Object(k.recordEvent)("dash_section_remove",{key:r.key}),F(T)}},x=function e(t,n){var r=T.splice(t,1).shift(),o=t+n;if(T[n<0?o:o-1].isVisible||0===t||t===T.length-1){T.splice(o,0,r),F(T);var c={key:r.key,direction:n>0?"down":"up"};Object(k.recordEvent)("dash_section_order_change",c)}else e(t,n+n)};return Object(s.createElement)(J.a.Provider,{value:Object(J.b)(Object(j.getQuery)())},(n=Object(g.getDateParamsFromQuery)(E,h),r=n.period,c=n.compare,i=n.before,a=n.after,d=Object(g.getCurrentDates)(E,h),m={period:r,compare:c,before:i,after:a,primaryDate:d.primary,secondaryDate:d.secondary},v=T.filter((function(e){return e.isVisible})).map((function(e){return e.key})),Object(s.createElement)(s.Fragment,null,Object(s.createElement)(G.a,{report:"dashboard",query:E,path:w,dateQuery:m,isoDateFormat:g.isoDateFormat,filters:W}),T.map((function(e,t){return e.isVisible?Object(s.createElement)(z,{component:e.component,hiddenBlocks:e.hiddenBlocks,key:e.key,onChangeHiddenBlocks:(n=e.key,function(e){P(n,{hiddenBlocks:e})}),onTitleUpdate:R(e.key),path:w,query:E,title:e.title,onMove:Object(p.partial)(x,t),onRemove:B(e.key),isFirst:e.key===v[0],isLast:e.key===v[v.length-1],filters:W}):null;var n})),0===(t=T.filter((function(e){return!1===e.isVisible}))).length?null:Object(s.createElement)(f.Dropdown,{position:"top center",className:"woocommerce-dashboard-section__add-more",renderToggle:function(e){var t=e.onToggle,n=e.isOpen;return Object(s.createElement)(f.Button,{onClick:t,title:Object(u.__)("Add more sections","woocommerce-admin"),"aria-expanded":n},Object(s.createElement)(b.a,{icon:y}))},renderContent:function(e){var n=e.onToggle;return Object(s.createElement)(s.Fragment,null,Object(s.createElement)(_.H,null,Object(u.__)("Dashboard Sections","woocommerce-admin")),Object(s.createElement)("div",{className:"woocommerce-dashboard-section__add-more-choices"},t.map((function(e){return Object(s.createElement)(f.Button,{key:e.key,onClick:B(e.key,n),className:"woocommerce-dashboard-section__add-more-btn",title:Object(u.sprintf)(Object(u.__)("Add %s section","woocommerce-admin"),e.title)},Object(s.createElement)(f.Icon,{icon:e.icon,size:30}),Object(s.createElement)("span",{className:"woocommerce-dashboard-section__add-more-btn-title"},e.title))}))))}}))))}))}}]);