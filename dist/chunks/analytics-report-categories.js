(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[10],{482:function(e,t,r){"use strict";r.r(t);var o=r(5),c=r.n(o),a=r(11),n=r.n(a),i=r(12),s=r.n(i),l=r(13),m=r.n(l),u=r(14),d=r.n(u),g=r(6),p=r.n(g),b=r(0),y=r(1),_=r.n(y),f=r(2),O=r(15),h=r(42),v=r(497),j=Object(h.applyFilters)("woocommerce_admin_categories_report_charts",[{key:"items_sold",label:Object(f.__)("Items Sold","woocommerce-admin"),order:"desc",orderby:"items_sold",type:"number"},{key:"net_revenue",label:Object(f.__)("Net Sales","woocommerce-admin"),order:"desc",orderby:"net_revenue",type:"currency"},{key:"orders_count",label:Object(f.__)("Orders","woocommerce-admin"),order:"desc",orderby:"orders_count",type:"number"}]),w=Object(h.applyFilters)("woocommerce_admin_categories_report_filters",[{label:Object(f.__)("Show","woocommerce-admin"),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:function(){return!0},filters:[{label:Object(f.__)("All Categories","woocommerce-admin"),value:"all"},{label:Object(f.__)("Single Category","woocommerce-admin"),value:"select_category",chartMode:"item-comparison",subFilters:[{component:"Search",value:"single_category",chartMode:"item-comparison",path:["select_category"],settings:{type:"categories",param:"categories",getLabels:v.a,labels:{placeholder:Object(f.__)("Type to search for a category","woocommerce-admin"),button:Object(f.__)("Single Category","woocommerce-admin")}}}]},{label:Object(f.__)("Comparison","woocommerce-admin"),value:"compare-categories",chartMode:"item-comparison",settings:{type:"categories",param:"categories",getLabels:v.a,labels:{helpText:Object(f.__)("Check at least two categories below to compare","woocommerce-admin"),placeholder:Object(f.__)("Search for categories to compare","woocommerce-admin"),title:Object(f.__)("Compare Categories","woocommerce-admin"),update:Object(f.__)("Compare","woocommerce-admin")}}}]}]),C=Object(h.applyFilters)("woocommerce_admin_category_report_advanced_filters",{}),S=r(8),R=r.n(S),q=r(18),k=r(3),F=r(21),P=r(47),E=r(142),D=r(23),A=r(528),x=r(503),N=r(495);function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=p()(e);if(t){var c=p()(this).constructor;r=Reflect.construct(o,arguments,c)}else r=o.apply(this,arguments);return d()(this,r)}}var V=function(e){m()(r,e);var t=T(r);function r(e){var o;return n()(this,r),(o=t.call(this,e)).getRowsContent=o.getRowsContent.bind(R()(o)),o.getSummary=o.getSummary.bind(R()(o)),o}return s()(r,[{key:"getHeadersContent",value:function(){return[{label:Object(f.__)("Category","woocommerce-admin"),key:"category",required:!0,isSortable:!0,isLeftAligned:!0},{label:Object(f.__)("Items Sold","woocommerce-admin"),key:"items_sold",required:!0,defaultSort:!0,isSortable:!0,isNumeric:!0},{label:Object(f.__)("Net Sales","woocommerce-admin"),key:"net_revenue",isSortable:!0,isNumeric:!0},{label:Object(f.__)("Products","woocommerce-admin"),key:"products_count",isSortable:!0,isNumeric:!0},{label:Object(f.__)("Orders","woocommerce-admin"),key:"orders_count",isSortable:!0,isNumeric:!0}]}},{key:"getRowsContent",value:function(e){var t=this,r=this.context,o=r.render,c=r.formatDecimal,a=(0,r.getCurrencyConfig)();return Object(k.map)(e,(function(e){var r=e.category_id,n=e.items_sold,i=e.net_revenue,s=e.products_count,l=e.orders_count,m=t.props,u=m.categories,d=m.query,g=u.get(r),p=Object(F.getPersistedQuery)(d);return[{display:Object(b.createElement)(A.a,{query:d,category:g,categories:u}),value:g&&g.name},{display:Object(E.formatValue)(a,"number",n),value:n},{display:o(i),value:c(i)},{display:g&&Object(b.createElement)(P.Link,{href:Object(F.getNewPath)(p,"/analytics/categories",{filter:"single_category",categories:g.id}),type:"wc-admin"},Object(E.formatValue)(a,"number",s)),value:s},{display:Object(E.formatValue)(a,"number",l),value:l}]}))}},{key:"getSummary",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=e.items_sold,o=void 0===r?0:r,c=e.net_revenue,a=void 0===c?0:c,n=e.orders_count,i=void 0===n?0:n,s=this.context,l=s.formatAmount,m=s.getCurrencyConfig,u=m();return[{label:Object(f._n)("category","categories",t,"woocommerce-admin"),value:Object(E.formatValue)(u,"number",t)},{label:Object(f._n)("item sold","items sold",o,"woocommerce-admin"),value:Object(E.formatValue)(u,"number",o)},{label:Object(f.__)("net sales","woocommerce-admin"),value:l(a)},{label:Object(f._n)("order","orders",i,"woocommerce-admin"),value:Object(E.formatValue)(u,"number",i)}]}},{key:"render",value:function(){var e=this.props,t=e.advancedFilters,r=e.filters,o=e.isRequesting,c=e.query,a={helpText:Object(f.__)("Check at least two categories below to compare","woocommerce-admin"),placeholder:Object(f.__)("Search by category name","woocommerce-admin")};return Object(b.createElement)(x.a,{compareBy:"categories",endpoint:"categories",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["items_sold","net_revenue","orders_count"],isRequesting:o,itemIdField:"category_id",query:c,searchBy:"categories",labels:a,tableQuery:{orderby:c.orderby||"items_sold",order:c.order||"desc",extended_info:!0},title:Object(f.__)("Categories","woocommerce-admin"),columnPrefsKey:"categories_report_columns",filters:r,advancedFilters:t})}}]),r}(b.Component);V.contextType=N.a;var I=Object(q.compose)(Object(O.withSelect)((function(e,t){var r=t.isRequesting,o=t.query;if(r||o.search&&(!o.categories||!o.categories.length))return{};var c=e(D.ITEMS_STORE_NAME),a=c.getItems,n=c.getItemsError,i=c.isResolving,s={per_page:-1};return{categories:a("categories",s),isError:Boolean(n("categories",s)),isRequesting:i("getItems",["categories",s])}})))(V),L=r(500),M=r(499),B=r(501),H=r(527),Q=r(502),J=r(73);function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=p()(e);if(t){var c=p()(this).constructor;r=Reflect.construct(o,arguments,c)}else r=o.apply(this,arguments);return d()(this,r)}}var G=function(e){m()(r,e);var t=z(r);function r(){return n()(this,r),t.apply(this,arguments)}return s()(r,[{key:"getChartMeta",value:function(){var e=this.props.query,t="compare-categories"===e.filter&&e.categories&&e.categories.split(",").length>1,r="single_category"===e.filter&&!!e.categories,o=t||r?"item-comparison":"time-comparison";return{isSingleCategoryView:r,itemsLabel:r?Object(f.__)("%d products","woocommerce-admin"):Object(f.__)("%d categories","woocommerce-admin"),mode:o}}},{key:"render",value:function(){var e=this.props,t=e.isRequesting,r=e.query,o=e.path,a=e.addCesSurveyForAnalytics,n=this.getChartMeta(),i=n.mode,s=n.itemsLabel,l=n.isSingleCategoryView,m=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r);return"item-comparison"===i&&(m.segmentby=l?"product":"category"),w[0].filters.find((function(e){return"compare-categories"===e.value})).settings.onClick=a,Object(b.createElement)(b.Fragment,null,Object(b.createElement)(Q.a,{query:r,path:o,filters:w,advancedFilters:C,report:"categories"}),Object(b.createElement)(B.a,{charts:j,endpoint:"products",isRequesting:t,limitProperties:l?["products","categories"]:["categories"],query:m,selectedChart:Object(L.a)(r.chart,j),filters:w,advancedFilters:C,report:"categories"}),Object(b.createElement)(M.a,{charts:j,filters:w,advancedFilters:C,mode:i,endpoint:"products",limitProperties:l?["products","categories"]:["categories"],path:o,query:m,isRequesting:t,itemsLabel:s,selectedChart:Object(L.a)(r.chart,j)}),l?Object(b.createElement)(H.a,{isRequesting:t,query:m,baseSearchQuery:{filter:"single_category"},hideCompare:l,filters:w,advancedFilters:C}):Object(b.createElement)(I,{isRequesting:t,query:r,filters:w,advancedFilters:C}))}}]),r}(b.Component);G.propTypes={query:_.a.object.isRequired,path:_.a.string.isRequired};t.default=Object(O.withDispatch)((function(e){return{addCesSurveyForAnalytics:e(J.c).addCesSurveyForAnalytics}}))(G)}}]);