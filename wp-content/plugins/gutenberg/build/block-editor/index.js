this.wp=this.wp||{},this.wp.blockEditor=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=211)}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},10:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return r})},11:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n(29),i=n(3);function c(t,e){return!e||"object"!==Object(r.a)(e)&&"function"!=typeof e?Object(i.a)(t):e}},12:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",function(){return i})},13:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",function(){return r})},14:function(t,e){!function(){t.exports=this.wp.blocks}()},15:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",function(){return r})},18:function(t,e,n){"use strict";var r=n(32);function i(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",function(){return i})},19:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",function(){return r})},2:function(t,e){!function(){t.exports=this.lodash}()},21:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}n.d(e,"a",function(){return r})},211:function(t,e,n){"use strict";n.r(e);var r={};n.d(r,"resetBlocks",function(){return M}),n.d(r,"receiveBlocks",function(){return x}),n.d(r,"updateBlockAttributes",function(){return K}),n.d(r,"updateBlock",function(){return N}),n.d(r,"selectBlock",function(){return D}),n.d(r,"selectPreviousBlock",function(){return U}),n.d(r,"selectNextBlock",function(){return V}),n.d(r,"startMultiSelect",function(){return G}),n.d(r,"stopMultiSelect",function(){return W}),n.d(r,"multiSelect",function(){return z}),n.d(r,"clearSelectedBlock",function(){return F}),n.d(r,"toggleSelection",function(){return H}),n.d(r,"replaceBlocks",function(){return Y}),n.d(r,"replaceBlock",function(){return X}),n.d(r,"moveBlocksDown",function(){return Z}),n.d(r,"moveBlocksUp",function(){return J}),n.d(r,"moveBlockToPosition",function(){return Q}),n.d(r,"insertBlock",function(){return $}),n.d(r,"insertBlocks",function(){return tt}),n.d(r,"showInsertionPoint",function(){return et}),n.d(r,"hideInsertionPoint",function(){return nt}),n.d(r,"setTemplateValidity",function(){return rt}),n.d(r,"synchronizeTemplate",function(){return it}),n.d(r,"mergeBlocks",function(){return ct}),n.d(r,"removeBlocks",function(){return ot}),n.d(r,"removeBlock",function(){return ut}),n.d(r,"toggleBlockMode",function(){return lt}),n.d(r,"startTyping",function(){return at}),n.d(r,"stopTyping",function(){return st}),n.d(r,"enterFormattedText",function(){return ft}),n.d(r,"exitFormattedText",function(){return dt}),n.d(r,"insertDefaultBlock",function(){return bt}),n.d(r,"updateBlockListSettings",function(){return Ot}),n.d(r,"updateSettings",function(){return pt}),n.d(r,"__unstableSaveReusableBlock",function(){return gt}),n.d(r,"__unstableMarkLastChangeAsPersistent",function(){return vt});var i={};n.d(i,"INSERTER_UTILITY_HIGH",function(){return yt}),n.d(i,"INSERTER_UTILITY_MEDIUM",function(){return St}),n.d(i,"INSERTER_UTILITY_LOW",function(){return kt}),n.d(i,"INSERTER_UTILITY_NONE",function(){return ht}),n.d(i,"getBlockDependantsCacheBust",function(){return It}),n.d(i,"getBlockName",function(){return _t}),n.d(i,"isBlockValid",function(){return Tt}),n.d(i,"getBlockAttributes",function(){return Bt}),n.d(i,"getBlock",function(){return Ct}),n.d(i,"__unstableGetBlockWithoutInnerBlocks",function(){return Lt}),n.d(i,"getBlocks",function(){return Pt}),n.d(i,"getClientIdsOfDescendants",function(){return Rt}),n.d(i,"getClientIdsWithDescendants",function(){return wt}),n.d(i,"getGlobalBlockCount",function(){return At}),n.d(i,"getBlocksByClientId",function(){return Mt}),n.d(i,"getBlockCount",function(){return xt}),n.d(i,"getBlockSelectionStart",function(){return Kt}),n.d(i,"getBlockSelectionEnd",function(){return Nt}),n.d(i,"getSelectedBlockCount",function(){return Dt}),n.d(i,"hasSelectedBlock",function(){return Ut}),n.d(i,"getSelectedBlockClientId",function(){return Vt}),n.d(i,"getSelectedBlock",function(){return Gt}),n.d(i,"getBlockRootClientId",function(){return Wt}),n.d(i,"getBlockHierarchyRootClientId",function(){return zt}),n.d(i,"getAdjacentBlockClientId",function(){return Ft}),n.d(i,"getPreviousBlockClientId",function(){return Ht}),n.d(i,"getNextBlockClientId",function(){return Yt}),n.d(i,"getSelectedBlocksInitialCaretPosition",function(){return Xt}),n.d(i,"getMultiSelectedBlockClientIds",function(){return qt}),n.d(i,"getMultiSelectedBlocks",function(){return Zt}),n.d(i,"getFirstMultiSelectedBlockClientId",function(){return Jt}),n.d(i,"getLastMultiSelectedBlockClientId",function(){return Qt}),n.d(i,"isFirstMultiSelectedBlock",function(){return te}),n.d(i,"isBlockMultiSelected",function(){return ee}),n.d(i,"isAncestorMultiSelected",function(){return ne}),n.d(i,"getMultiSelectedBlocksStartClientId",function(){return re}),n.d(i,"getMultiSelectedBlocksEndClientId",function(){return ie}),n.d(i,"getBlockOrder",function(){return ce}),n.d(i,"getBlockIndex",function(){return oe}),n.d(i,"isBlockSelected",function(){return ue}),n.d(i,"hasSelectedInnerBlock",function(){return le}),n.d(i,"isBlockWithinSelection",function(){return ae}),n.d(i,"hasMultiSelection",function(){return se}),n.d(i,"isMultiSelecting",function(){return fe}),n.d(i,"isSelectionEnabled",function(){return de}),n.d(i,"getBlockMode",function(){return be}),n.d(i,"isTyping",function(){return Oe}),n.d(i,"isCaretWithinFormattedText",function(){return pe}),n.d(i,"getBlockInsertionPoint",function(){return ge}),n.d(i,"isBlockInsertionPointVisible",function(){return ve}),n.d(i,"isValidTemplate",function(){return je}),n.d(i,"getTemplate",function(){return ye}),n.d(i,"getTemplateLock",function(){return Se}),n.d(i,"canInsertBlockType",function(){return he}),n.d(i,"getInserterItems",function(){return _e}),n.d(i,"hasInserterItems",function(){return Te}),n.d(i,"getBlockListSettings",function(){return Be}),n.d(i,"getSettings",function(){return Ce}),n.d(i,"isLastBlockChangePersistent",function(){return Le});var c=n(14),o=n(5),u=n(8),l=n(21),a=n(18),s=n(15),f=n(2),d=n(1),b={insertUsage:{}},O={alignWide:!1,colors:[{name:Object(d.__)("Pale pink"),slug:"pale-pink",color:"#f78da7"},{name:Object(d.__)("Vivid red"),slug:"vivid-red",color:"#cf2e2e"},{name:Object(d.__)("Luminous vivid orange"),slug:"luminous-vivid-orange",color:"#ff6900"},{name:Object(d.__)("Luminous vivid amber"),slug:"luminous-vivid-amber",color:"#fcb900"},{name:Object(d.__)("Light green cyan"),slug:"light-green-cyan",color:"#7bdcb5"},{name:Object(d.__)("Vivid green cyan"),slug:"vivid-green-cyan",color:"#00d084"},{name:Object(d.__)("Pale cyan blue"),slug:"pale-cyan-blue",color:"#8ed1fc"},{name:Object(d.__)("Vivid cyan blue"),slug:"vivid-cyan-blue",color:"#0693e3"},{name:Object(d.__)("Very light gray"),slug:"very-light-gray",color:"#eeeeee"},{name:Object(d.__)("Cyan bluish gray"),slug:"cyan-bluish-gray",color:"#abb8c3"},{name:Object(d.__)("Very dark gray"),slug:"very-dark-gray",color:"#313131"}],fontSizes:[{name:Object(d._x)("Small","font size name"),size:13,slug:"small"},{name:Object(d._x)("Normal","font size name"),size:16,slug:"normal"},{name:Object(d._x)("Medium","font size name"),size:20,slug:"medium"},{name:Object(d._x)("Large","font size name"),size:36,slug:"large"},{name:Object(d._x)("Huge","font size name"),size:48,slug:"huge"}],imageSizes:[{slug:"thumbnail",label:Object(d.__)("Thumbnail")},{slug:"medium",label:Object(d.__)("Medium")},{slug:"large",label:Object(d.__)("Large")},{slug:"full",label:Object(d.__)("Full Size")}],maxWidth:580,allowedBlockTypes:!0,maxUploadFileSize:0,allowedMimeTypes:null};function p(t,e,n){return[].concat(Object(a.a)(t.slice(0,n)),Object(a.a)(Object(f.castArray)(e)),Object(a.a)(t.slice(n)))}function g(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=Object(a.a)(t);return i.splice(e,r),p(i,t.slice(e,e+r),n)}function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=Object(s.a)({},e,[]);return t.forEach(function(t){var r=t.clientId,i=t.innerBlocks;n[e].push(r),Object.assign(n,v(i,r))}),n}function j(t,e){for(var n={},r=Object(a.a)(t);r.length;){var i=r.shift(),c=i.innerBlocks,o=Object(l.a)(i,["innerBlocks"]);r.push.apply(r,Object(a.a)(c)),n[o.clientId]=e(o)}return n}function y(t){return j(t,function(t){return Object(f.omit)(t,"attributes")})}function S(t){return j(t,function(t){return t.attributes})}function k(t,e){return"UPDATE_BLOCK_ATTRIBUTES"===t.type&&void 0!==e&&"UPDATE_BLOCK_ATTRIBUTES"===e.type&&t.clientId===e.clientId&&function(t,e){return Object(f.isEqual)(Object(f.keys)(t),Object(f.keys)(e))}(t.attributes,e.attributes)}var h=Object(f.flow)(o.combineReducers,function(t){return function(e,n){if(e&&"REMOVE_BLOCKS"===n.type){for(var r=Object(a.a)(n.clientIds),i=0;i<r.length;i++)r.push.apply(r,Object(a.a)(e.order[r[i]]));n=Object(u.a)({},n,{clientIds:r})}return t(e,n)}},function(t){return function(e,n){if(e&&"RESET_BLOCKS"===n.type){var r=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object(f.reduce)(e[n],function(n,r){return[].concat(Object(a.a)(n),[r],Object(a.a)(t(e,r)))},[])}(e.order);return Object(u.a)({},e,{byClientId:Object(u.a)({},Object(f.omit)(e.byClientId,r),y(n.blocks)),attributes:Object(u.a)({},Object(f.omit)(e.attributes,r),S(n.blocks)),order:Object(u.a)({},Object(f.omit)(e.order,r),v(n.blocks))})}return t(e,n)}},function(t){return function(e,n){if(e&&"SAVE_REUSABLE_BLOCK_SUCCESS"===n.type){var r=n.id,i=n.updatedId;if(r===i)return e;(e=Object(u.a)({},e)).attributes=Object(f.mapValues)(e.attributes,function(t,n){return"core/block"===e.byClientId[n].name&&t.ref===r?Object(u.a)({},t,{ref:i}):t})}return t(e,n)}},function(t){var e,n=new Set(["RECEIVE_BLOCKS"]);return function(r,i){var c=t(r,i),o="MARK_LAST_CHANGE_AS_PERSISTENT"===i.type;return r!==c||o?n.has(i.type)?Object(u.a)({},c,{isPersistentChange:!1}):(c=Object(u.a)({},c,{isPersistentChange:o||!k(i,e)}),e=i,c):Object(u.a)({},c,{isPersistentChange:Object(f.get)(r,["isPersistentChange"],!0)})}})({byClientId:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"RESET_BLOCKS":return y(e.blocks);case"RECEIVE_BLOCKS":return Object(u.a)({},t,y(e.blocks));case"UPDATE_BLOCK":if(!t[e.clientId])return t;var n=Object(f.omit)(e.updates,"attributes");return Object(f.isEmpty)(n)?t:Object(u.a)({},t,Object(s.a)({},e.clientId,Object(u.a)({},t[e.clientId],n)));case"INSERT_BLOCKS":return Object(u.a)({},t,y(e.blocks));case"REPLACE_BLOCKS":return e.blocks?Object(u.a)({},Object(f.omit)(t,e.clientIds),y(e.blocks)):t;case"REMOVE_BLOCKS":return Object(f.omit)(t,e.clientIds)}return t},attributes:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"RESET_BLOCKS":return S(e.blocks);case"RECEIVE_BLOCKS":return Object(u.a)({},t,S(e.blocks));case"UPDATE_BLOCK":return t[e.clientId]&&e.updates.attributes?Object(u.a)({},t,Object(s.a)({},e.clientId,Object(u.a)({},t[e.clientId],e.updates.attributes))):t;case"UPDATE_BLOCK_ATTRIBUTES":if(!t[e.clientId])return t;var n=Object(f.reduce)(e.attributes,function(n,r,i){return r!==n[i]&&((n=function(t,e){return t===e?Object(u.a)({},t):e}(t[e.clientId],n))[i]=r),n},t[e.clientId]);return n===t[e.clientId]?t:Object(u.a)({},t,Object(s.a)({},e.clientId,n));case"INSERT_BLOCKS":return Object(u.a)({},t,S(e.blocks));case"REPLACE_BLOCKS":return e.blocks?Object(u.a)({},Object(f.omit)(t,e.clientIds),S(e.blocks)):t;case"REMOVE_BLOCKS":return Object(f.omit)(t,e.clientIds)}return t},order:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"RESET_BLOCKS":return v(e.blocks);case"RECEIVE_BLOCKS":return Object(u.a)({},t,Object(f.omit)(v(e.blocks),""));case"INSERT_BLOCKS":var n=e.rootClientId,r=void 0===n?"":n,i=t[r]||[],c=v(e.blocks,r),o=e.index,l=void 0===o?i.length:o;return Object(u.a)({},t,c,Object(s.a)({},r,p(i,c[r],l)));case"MOVE_BLOCK_TO_POSITION":var d,b=e.fromRootClientId,O=void 0===b?"":b,j=e.toRootClientId,y=void 0===j?"":j,S=e.clientId,k=e.index,h=void 0===k?t[y].length:k;if(O===y){var E=t[y].indexOf(S);return Object(u.a)({},t,Object(s.a)({},y,g(t[y],E,h)))}return Object(u.a)({},t,(d={},Object(s.a)(d,O,Object(f.without)(t[O],S)),Object(s.a)(d,y,p(t[y],S,h)),d));case"MOVE_BLOCKS_UP":var m=e.clientIds,I=e.rootClientId,_=void 0===I?"":I,T=Object(f.first)(m),B=t[_];if(!B.length||T===Object(f.first)(B))return t;var C=B.indexOf(T);return Object(u.a)({},t,Object(s.a)({},_,g(B,C,C-1,m.length)));case"MOVE_BLOCKS_DOWN":var L=e.clientIds,P=e.rootClientId,R=void 0===P?"":P,w=Object(f.first)(L),A=Object(f.last)(L),M=t[R];if(!M.length||A===Object(f.last)(M))return t;var x=M.indexOf(w);return Object(u.a)({},t,Object(s.a)({},R,g(M,x,x+1,L.length)));case"REPLACE_BLOCKS":var K=e.clientIds;if(!e.blocks)return t;var N=v(e.blocks);return Object(f.flow)([function(t){return Object(f.omit)(t,K)},function(t){return Object(u.a)({},t,Object(f.omit)(N,""))},function(t){return Object(f.mapValues)(t,function(t){return Object(f.reduce)(t,function(t,e){return e===K[0]?[].concat(Object(a.a)(t),Object(a.a)(N[""])):(-1===K.indexOf(e)&&t.push(e),t)},[])})}])(t);case"REMOVE_BLOCKS":return Object(f.flow)([function(t){return Object(f.omit)(t,e.clientIds)},function(t){return Object(f.mapValues)(t,function(t){return f.without.apply(void 0,[t].concat(Object(a.a)(e.clientIds)))})}])(t)}return t}});var E=Object(o.combineReducers)({blocks:h,isTyping:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"START_TYPING":return!0;case"STOP_TYPING":return!1}return t},isCaretWithinFormattedText:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"ENTER_FORMATTED_TEXT":return!0;case"EXIT_FORMATTED_TEXT":return!1}return t},blockSelection:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{start:null,end:null,isMultiSelecting:!1,isEnabled:!0,initialPosition:null},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CLEAR_SELECTED_BLOCK":return null!==t.start||null!==t.end||t.isMultiSelecting?Object(u.a)({},t,{start:null,end:null,isMultiSelecting:!1,initialPosition:null}):t;case"START_MULTI_SELECT":return t.isMultiSelecting?t:Object(u.a)({},t,{isMultiSelecting:!0,initialPosition:null});case"STOP_MULTI_SELECT":return t.isMultiSelecting?Object(u.a)({},t,{isMultiSelecting:!1,initialPosition:null}):t;case"MULTI_SELECT":return Object(u.a)({},t,{start:e.start,end:e.end,initialPosition:null});case"SELECT_BLOCK":return e.clientId===t.start&&e.clientId===t.end?t:Object(u.a)({},t,{start:e.clientId,end:e.clientId,initialPosition:e.initialPosition});case"INSERT_BLOCKS":return e.updateSelection?Object(u.a)({},t,{start:e.blocks[0].clientId,end:e.blocks[0].clientId,initialPosition:null,isMultiSelecting:!1}):t;case"REMOVE_BLOCKS":return e.clientIds&&e.clientIds.length&&-1!==e.clientIds.indexOf(t.start)?Object(u.a)({},t,{start:null,end:null,initialPosition:null,isMultiSelecting:!1}):t;case"REPLACE_BLOCKS":if(-1===e.clientIds.indexOf(t.start))return t;var n=Object(f.last)(e.blocks),r=n?n.clientId:null;return r===t.start&&r===t.end?t:Object(u.a)({},t,{start:r,end:r,initialPosition:null,isMultiSelecting:!1});case"TOGGLE_SELECTION":return Object(u.a)({},t,{isEnabled:e.isSelectionEnabled})}return t},blocksMode:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;if("TOGGLE_BLOCK_MODE"===e.type){var n=e.clientId;return Object(u.a)({},t,Object(s.a)({},n,t[n]&&"html"===t[n]?"visual":"html"))}return t},blockListSettings:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REPLACE_BLOCKS":case"REMOVE_BLOCKS":return Object(f.omit)(t,e.clientIds);case"UPDATE_BLOCK_LIST_SETTINGS":var n=e.clientId;return e.settings?Object(f.isEqual)(t[n],e.settings)?t:Object(u.a)({},t,Object(s.a)({},n,e.settings)):t.hasOwnProperty(n)?Object(f.omit)(t,n):t}return t},insertionPoint:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SHOW_INSERTION_POINT":return{rootClientId:e.rootClientId,index:e.index};case"HIDE_INSERTION_POINT":return null}return t},template:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isValid:!0},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_TEMPLATE_VALIDITY":return Object(u.a)({},t,{isValid:e.isValid})}return t},settings:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UPDATE_SETTINGS":return Object(u.a)({},t,e.settings)}return t},preferences:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"INSERT_BLOCKS":case"REPLACE_BLOCKS":return e.blocks.reduce(function(t,n){var r=n.name,i={name:n.name};return Object(c.isReusableBlock)(n)&&(i.ref=n.attributes.ref,r+="/"+n.attributes.ref),Object(u.a)({},t,{insertUsage:Object(u.a)({},t.insertUsage,Object(s.a)({},r,{time:e.time,count:t.insertUsage[r]?t.insertUsage[r].count+1:1,insert:i}))})},t)}return t}}),m=n(65),I=n.n(m),_=n(89),T=n.n(_),B=n(25),C=n(45);function L(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return{type:"SELECT",storeName:t,selectorName:e,args:r}}var P={SELECT:Object(o.createRegistryControl)(function(t){return function(e){var n,r=e.storeName,i=e.selectorName,c=e.args;return(n=t.select(r))[i].apply(n,Object(a.a)(c))}})},R=regeneratorRuntime.mark(U),w=regeneratorRuntime.mark(V),A=regeneratorRuntime.mark(ot);function M(t){return{type:"RESET_BLOCKS",blocks:t}}function x(t){return{type:"RECEIVE_BLOCKS",blocks:t}}function K(t,e){return{type:"UPDATE_BLOCK_ATTRIBUTES",clientId:t,attributes:e}}function N(t,e){return{type:"UPDATE_BLOCK",clientId:t,updates:e}}function D(t){return{type:"SELECT_BLOCK",initialPosition:arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,clientId:t}}function U(t){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,L("core/block-editor","getPreviousBlockClientId",t);case 2:return e=n.sent,n.next=5,D(e,-1);case 5:case"end":return n.stop()}},R,this)}function V(t){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,L("core/block-editor","getNextBlockClientId",t);case 2:return e=n.sent,n.next=5,D(e);case 5:case"end":return n.stop()}},w,this)}function G(){return{type:"START_MULTI_SELECT"}}function W(){return{type:"STOP_MULTI_SELECT"}}function z(t,e){return{type:"MULTI_SELECT",start:t,end:e}}function F(){return{type:"CLEAR_SELECTED_BLOCK"}}function H(){return{type:"TOGGLE_SELECTION",isSelectionEnabled:!(arguments.length>0&&void 0!==arguments[0])||arguments[0]}}function Y(t,e){return{type:"REPLACE_BLOCKS",clientIds:Object(f.castArray)(t),blocks:Object(f.castArray)(e),time:Date.now()}}function X(t,e){return Y(t,e)}function q(t){return function(e,n){return{clientIds:Object(f.castArray)(e),type:t,rootClientId:n}}}var Z=q("MOVE_BLOCKS_DOWN"),J=q("MOVE_BLOCKS_UP");function Q(t,e,n,r){return{type:"MOVE_BLOCK_TO_POSITION",fromRootClientId:e,toRootClientId:n,clientId:t,index:r}}function $(t,e,n){return tt([t],e,n,!(arguments.length>3&&void 0!==arguments[3])||arguments[3])}function tt(t,e,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return{type:"INSERT_BLOCKS",blocks:Object(f.castArray)(t),index:e,rootClientId:n,time:Date.now(),updateSelection:r}}function et(t,e){return{type:"SHOW_INSERTION_POINT",rootClientId:t,index:e}}function nt(){return{type:"HIDE_INSERTION_POINT"}}function rt(t){return{type:"SET_TEMPLATE_VALIDITY",isValid:t}}function it(){return{type:"SYNCHRONIZE_TEMPLATE"}}function ct(t,e){return{type:"MERGE_BLOCKS",blocks:[t,e]}}function ot(t){var e,n=arguments;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(e=!(n.length>1&&void 0!==n[1])||n[1],t=Object(f.castArray)(t),!e){r.next=5;break}return r.next=5,U(t[0]);case 5:return r.next=7,{type:"REMOVE_BLOCKS",clientIds:t};case 7:return r.next=9,L("core/block-editor","getBlockCount");case 9:if(0!==r.sent){r.next=13;break}return r.next=13,bt();case 13:case"end":return r.stop()}},A,this)}function ut(t,e){return ot([t],e)}function lt(t){return{type:"TOGGLE_BLOCK_MODE",clientId:t}}function at(){return{type:"START_TYPING"}}function st(){return{type:"STOP_TYPING"}}function ft(){return{type:"ENTER_FORMATTED_TEXT"}}function dt(){return{type:"EXIT_FORMATTED_TEXT"}}function bt(t,e,n){return $(Object(c.createBlock)(Object(c.getDefaultBlockName)(),t),n,e)}function Ot(t,e){return{type:"UPDATE_BLOCK_LIST_SETTINGS",clientId:t,settings:e}}function pt(t){return{type:"UPDATE_SETTINGS",settings:t}}function gt(t,e){return{type:"SAVE_REUSABLE_BLOCK_SUCCESS",id:t,updatedId:e}}function vt(){return{type:"MARK_LAST_CHANGE_AS_PERSISTENT"}}var jt=n(28),yt=3,St=2,kt=1,ht=0,Et=[],mt={},It=Object(jt.a)(function(){return[]},function(t,e){return Object(f.map)(ce(t,e),function(e){return Ct(t,e)})});function _t(t,e){var n=t.blocks.byClientId[e];return n?n.name:null}function Tt(t,e){var n=t.blocks.byClientId[e];return!!n&&n.isValid}var Bt=Object(jt.a)(function(t,e){var n=t.blocks.byClientId[e];if(!n)return null;var r=t.blocks.attributes[e],i=Object(c.getBlockType)(n.name);return i&&(r=Object(f.reduce)(i.attributes,function(e,n,i){return"meta"===n.source&&(e===r&&(e=Object(u.a)({},e)),e[i]=Pe(t,n.meta)),e},r)),r},function(t,e){return[t.blocks.byClientId[e],t.blocks.attributes[e],Pe(t)]}),Ct=Object(jt.a)(function(t,e){var n=t.blocks.byClientId[e];return n?Object(u.a)({},n,{attributes:Bt(t,e),innerBlocks:Pt(t,e)}):null},function(t,e){return[].concat(Object(a.a)(Bt.getDependants(t,e)),[It(t,e)])}),Lt=Object(jt.a)(function(t,e){var n=t.blocks.byClientId[e];return n?Object(u.a)({},n,{attributes:Bt(t,e)}):null},function(t,e){return[t.blocks.byClientId[e]].concat(Object(a.a)(Bt.getDependants(t,e)))}),Pt=Object(jt.a)(function(t,e){return Object(f.map)(ce(t,e),function(e){return Ct(t,e)})},function(t){return[t.blocks.byClientId,t.blocks.order,t.blocks.attributes]}),Rt=function t(e,n){return Object(f.flatMap)(n,function(n){var r=ce(e,n);return[].concat(Object(a.a)(r),Object(a.a)(t(e,r)))})},wt=Object(jt.a)(function(t){var e=ce(t);return[].concat(Object(a.a)(e),Object(a.a)(Rt(t,e)))},function(t){return[t.blocks.order]}),At=Object(jt.a)(function(t,e){var n=wt(t);return e?Object(f.reduce)(n,function(n,r){return t.blocks.byClientId[r].name===e?n+1:n},0):n.length},function(t){return[t.blocks.order,t.blocks.byClientId]}),Mt=Object(jt.a)(function(t,e){return Object(f.map)(Object(f.castArray)(e),function(e){return Ct(t,e)})},function(t){return[Pe(t),t.blocks.byClientId,t.blocks.order,t.blocks.attributes]});function xt(t,e){return ce(t,e).length}function Kt(t){return t.blockSelection.start}function Nt(t){return t.blockSelection.end}function Dt(t){var e=qt(t).length;return e||(t.blockSelection.start?1:0)}function Ut(t){var e=t.blockSelection,n=e.start,r=e.end;return!!n&&n===r}function Vt(t){var e=t.blockSelection,n=e.start,r=e.end;return n&&n===r&&t.blocks.byClientId[n]?n:null}function Gt(t){var e=Vt(t);return e?Ct(t,e):null}var Wt=Object(jt.a)(function(t,e){var n=t.blocks.order;for(var r in n)if(Object(f.includes)(n[r],e))return r;return null},function(t){return[t.blocks.order]}),zt=Object(jt.a)(function(t,e){for(var n=e,r=e;n;)n=Wt(t,r=n);return r},function(t){return[t.blocks.order]});function Ft(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(void 0===e&&(e=Vt(t)),void 0===e&&(e=n<0?Jt(t):Qt(t)),!e)return null;var r=Wt(t,e);if(null===r)return null;var i=t.blocks.order[r],c=i.indexOf(e)+1*n;return c<0?null:c===i.length?null:i[c]}function Ht(t,e){return Ft(t,e,-1)}function Yt(t,e){return Ft(t,e,1)}function Xt(t){var e=t.blockSelection,n=e.start;return n===e.end&&n?t.blockSelection.initialPosition:null}var qt=Object(jt.a)(function(t){var e=t.blockSelection,n=e.start,r=e.end;if(n===r)return[];var i=Wt(t,n);if(null===i)return[];var c=ce(t,i),o=c.indexOf(n),u=c.indexOf(r);return o>u?c.slice(u,o+1):c.slice(o,u+1)},function(t){return[t.blocks.order,t.blockSelection.start,t.blockSelection.end]}),Zt=Object(jt.a)(function(t){var e=qt(t);return e.length?e.map(function(e){return Ct(t,e)}):Et},function(t){return[].concat(Object(a.a)(qt.getDependants(t)),[t.blocks.byClientId,t.blocks.order,t.blocks.attributes,Pe(t)])});function Jt(t){return Object(f.first)(qt(t))||null}function Qt(t){return Object(f.last)(qt(t))||null}var $t=Object(jt.a)(function(t,e,n){for(var r=n;e!==r&&r;)r=Wt(t,r);return e===r},function(t){return[t.blocks.order]});function te(t,e){return Jt(t)===e}function ee(t,e){return-1!==qt(t).indexOf(e)}var ne=Object(jt.a)(function(t,e){for(var n=e,r=!1;n&&!r;)r=ee(t,n=Wt(t,n));return r},function(t){return[t.blocks.order,t.blockSelection.start,t.blockSelection.end]});function re(t){var e=t.blockSelection,n=e.start;return n===e.end?null:n||null}function ie(t){var e=t.blockSelection,n=e.start,r=e.end;return n===r?null:r||null}function ce(t,e){return t.blocks.order[e||""]||Et}function oe(t,e,n){return ce(t,n).indexOf(e)}function ue(t,e){var n=t.blockSelection,r=n.start;return r===n.end&&r===e}function le(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(f.some)(ce(t,e),function(e){return ue(t,e)||ee(t,e)||n&&le(t,e,n)})}function ae(t,e){if(!e)return!1;var n=qt(t),r=n.indexOf(e);return r>-1&&r<n.length-1}function se(t){var e=t.blockSelection;return e.start!==e.end}function fe(t){return t.blockSelection.isMultiSelecting}function de(t){return t.blockSelection.isEnabled}function be(t,e){return t.blocksMode[e]||"visual"}function Oe(t){return t.isTyping}function pe(t){return t.isCaretWithinFormattedText}function ge(t){var e,n,r=t.insertionPoint,i=t.blockSelection;if(null!==r)return r;var c=i.end;return n=c?oe(t,c,e=Wt(t,c)||void 0)+1:ce(t).length,{rootClientId:e,index:n}}function ve(t){return null!==t.insertionPoint}function je(t){return t.template.isValid}function ye(t){return t.settings.template}function Se(t,e){if(!e)return t.settings.templateLock;var n=Be(t,e);return n?n.templateLock:null}var ke=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return Object(f.isBoolean)(t)?t:Object(f.isArray)(t)?Object(f.includes)(t,e):n},i=Object(c.getBlockType)(e);if(!i)return!1;if(!r(Ce(t).allowedBlockTypes,e,!0))return!1;if(!!Se(t,n))return!1;var o=Be(t,n),u=r(Object(f.get)(o,["allowedBlocks"]),e),l=r(i.parent,_t(t,n));return null!==u&&null!==l?u||l:null!==u?u:null===l||l},he=Object(jt.a)(ke,function(t,e,n){return[t.blockListSettings[n],t.blocks.byClientId[n],t.settings.allowedBlockTypes,t.settings.templateLock]});function Ee(t,e){return t.preferences.insertUsage[e]||null}var me=function(t,e,n){return!!Object(c.hasBlockSupport)(e,"inserter",!0)&&ke(t,e.name,n)},Ie=function(t,e,n){if(!ke(t,"core/block",n))return!1;var r=_t(t,e.clientId);return!!r&&(!!Object(c.getBlockType)(r)&&(!!ke(t,r,n)&&!$t(t,e.clientId,n)))},_e=Object(jt.a)(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=function(t,e,n){return n?yt:e>0?St:"common"===t?kt:ht},r=function(t,e){if(!t)return e;var n=Date.now()-t;switch(!0){case n<36e5:return 4*e;case n<864e5:return 2*e;case n<6048e5:return e/2;default:return e/4}},i=Object(c.getBlockTypes)().filter(function(n){return me(t,n,e)}).map(function(e){var i=e.name,o=!1;Object(c.hasBlockSupport)(e.name,"multiple",!0)||(o=Object(f.some)(Mt(t,wt(t)),{name:e.name}));var u=Object(f.isArray)(e.parent),l=Ee(t,i)||{},a=l.time,s=l.count,d=void 0===s?0:s;return{id:i,name:e.name,initialAttributes:{},title:e.title,icon:e.icon,category:e.category,keywords:e.keywords,isDisabled:o,utility:n(e.category,d,u),frecency:r(a,d),hasChildBlocksWithInserterSupport:Object(c.hasChildBlocksWithInserterSupport)(e.name)}}),o=Re(t).filter(function(n){return Ie(t,n,e)}).map(function(e){var i="core/block/".concat(e.id),o=_t(t,e.clientId),u=Object(c.getBlockType)(o),l=Ee(t,i)||{},a=l.time,s=l.count,f=void 0===s?0:s,d=n("reusable",f,!1),b=r(a,f);return{id:i,name:"core/block",initialAttributes:{ref:e.id},title:e.title,icon:u.icon,category:"reusable",keywords:[],isDisabled:!1,utility:d,frecency:b}});return Object(f.orderBy)([].concat(Object(a.a)(i),Object(a.a)(o)),["utility","frecency"],["desc","desc"])},function(t,e){return[t.blockListSettings[e],t.blocks.byClientId,t.blocks.order,t.preferences.insertUsage,t.settings.allowedBlockTypes,t.settings.templateLock,Re(t),Object(c.getBlockTypes)()]}),Te=Object(jt.a)(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return!!Object(f.some)(Object(c.getBlockTypes)(),function(n){return me(t,n,e)})||Object(f.some)(Re(t),function(n){return Ie(t,n,e)})},function(t,e){return[t.blockListSettings[e],t.blocks.byClientId,t.settings.allowedBlockTypes,t.settings.templateLock,Re(t),Object(c.getBlockTypes)()]});function Be(t,e){return t.blockListSettings[e]}function Ce(t){return t.settings}function Le(t){return t.blocks.isPersistentChange}function Pe(t,e){return void 0===e?Object(f.get)(t,["settings","__experimentalMetaSource","value"],mt):Object(f.get)(t,["settings","__experimentalMetaSource","value",e])}function Re(t){return Object(f.get)(t,["settings","__experimentalReusableBlocks"],Et)}var we={MERGE_BLOCKS:function(t,e){var n=e.dispatch,r=e.getState(),i=Object(B.a)(t.blocks,2),o=i[0],l=i[1],s=Ct(r,o),f=Object(c.getBlockType)(s.name);if(f.merge){var d=Ct(r,l),b=s.name===d.name?[d]:Object(c.switchToBlockType)(d,s.name);if(b&&b.length){var O=f.merge(s.attributes,b[0].attributes);n(D(s.clientId,-1)),n(Y([s.clientId,d.clientId],[Object(u.a)({},s,{attributes:Object(u.a)({},s.attributes,O)})].concat(Object(a.a)(b.slice(1)))))}}else n(D(s.clientId))},RESET_BLOCKS:[function(t,e){var n=e.getState(),r=ye(n),i=Se(n),o=!r||"all"!==i||Object(c.doBlocksMatchTemplate)(t.blocks,r);if(o!==je(n))return rt(o)}],REPLACE_BLOCKS:[function(t,e){if(!xt(e.getState()))return bt()}],MULTI_SELECT:function(t,e){var n=Dt((0,e.getState)());Object(C.speak)(Object(d.sprintf)(Object(d._n)("%s block selected.","%s blocks selected.",n),n),"assertive")},SYNCHRONIZE_TEMPLATE:function(t,e){var n=(0,e.getState)(),r=Pt(n),i=ye(n);return M(Object(c.synchronizeBlocksWithTemplate)(r,i))}};var Ae=function(t){var e,n=[I()(we),T.a],r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},i={getState:t.getState,dispatch:function(){return r.apply(void 0,arguments)}};return e=n.map(function(t){return t(i)}),r=f.flowRight.apply(void 0,Object(a.a)(e))(t.dispatch),t.dispatch=r,t},Me=Object(o.registerStore)("core/block-editor",{reducer:E,selectors:i,actions:r,controls:P,persist:["preferences"]});Ae(Me);var xe=n(10),Ke=n(9),Ne=n(11),De=n(13),Ue=n(12),Ve=n(19),Ge=n(0),We=n(4),ze=n(7),Fe=Object(ze.createHigherOrderComponent)(function(t){return function(e){return Object(Ge.createElement)(o.RegistryConsumer,null,function(n){return Object(Ge.createElement)(t,Object(Ve.a)({},e,{registry:n}))})}},"withRegistry"),He=function(t){function e(){return Object(xe.a)(this,e),Object(Ne.a)(this,Object(De.a)(e).apply(this,arguments))}return Object(Ue.a)(e,t),Object(Ke.a)(e,[{key:"componentDidMount",value:function(){this.props.updateSettings(this.props.settings),this.props.resetBlocks(this.props.value),this.attachChangeObserver(this.props.registry)}},{key:"componentDidUpdate",value:function(t){var e=this.props,n=e.settings,r=e.updateSettings,i=e.value,c=e.resetBlocks,o=e.registry;n!==t.settings&&r(n),o!==t.registry&&this.attachChangeObserver(o),this.isSyncingOutcomingValue?this.isSyncingOutcomingValue=!1:i!==t.value&&(this.isSyncingIncomingValue=!0,c(i))}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe()}},{key:"attachChangeObserver",value:function(t){var e=this;this.unsubscribe&&this.unsubscribe();var n=t.select("core/block-editor"),r=n.getBlocks,i=n.isLastBlockChangePersistent,c=r(),o=i();this.unsubscribe=t.subscribe(function(){var t=e.props,n=t.onChange,u=t.onInput,l=r(),a=i();if(l!==c&&e.isSyncingIncomingValue)return e.isSyncingIncomingValue=!1,c=l,void(o=a);(l!==c||a&&!o)&&(c=l,o=a,e.isSyncingOutcomingValue=!0,o?n(c):u(c))})}},{key:"render",value:function(){var t=this.props.children;return Object(Ge.createElement)(We.SlotFillProvider,null,Object(Ge.createElement)(We.DropZoneProvider,null,t))}}]),e}(Ge.Component),Ye=Object(ze.compose)([Object(o.withDispatch)(function(t){var e=t("core/block-editor");return{updateSettings:e.updateSettings,resetBlocks:e.resetBlocks}}),Fe])(He);n.d(e,"BlockEditorProvider",function(){return Ye}),n.d(e,"SETTINGS_DEFAULTS",function(){return O})},25:function(t,e,n){"use strict";var r=n(34);var i=n(33);function c(t,e){return Object(r.a)(t)||function(t,e){var n=[],r=!0,i=!1,c=void 0;try{for(var o,u=t[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){i=!0,c=t}finally{try{r||null==u.return||u.return()}finally{if(i)throw c}}return n}(t,e)||Object(i.a)()}n.d(e,"a",function(){return c})},28:function(t,e,n){"use strict";var r,i;function c(t){return[t]}function o(t){return!!t&&"object"==typeof t}function u(){var t={clear:function(){t.head=null}};return t}function l(t,e,n){var r;if(t.length!==e.length)return!1;for(r=n;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}r={},i="undefined"!=typeof WeakMap,e.a=function(t,e){var n,a;function s(){n=i?new WeakMap:u()}function f(){var n,r,i,c,o,u=arguments.length;for(c=new Array(u),i=0;i<u;i++)c[i]=arguments[i];for(o=e.apply(null,c),(n=a(o)).isUniqueByDependants||(n.lastDependants&&!l(o,n.lastDependants,0)&&n.clear(),n.lastDependants=o),r=n.head;r;){if(l(r.args,c,1))return r!==n.head&&(r.prev.next=r.next,r.next&&(r.next.prev=r.prev),r.next=n.head,r.prev=null,n.head.prev=r,n.head=r),r.val;r=r.next}return r={val:t.apply(null,c)},c[0]=null,r.args=c,n.head&&(n.head.prev=r,r.next=n.head),n.head=r,r.val}return e||(e=c),a=i?function(t){var e,i,c,l,a=n,s=!0;for(e=0;e<t.length;e++){if(!o(i=t[e])){s=!1;break}a.has(i)?a=a.get(i):(c=new WeakMap,a.set(i,c),a=c)}return a.has(r)||((l=u()).isUniqueByDependants=s,a.set(r,l)),a.get(r)}:function(){return n},f.getDependants=e,f.clear=s,s(),f}},29:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){return(i="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}n.d(e,"a",function(){return i})},3:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",function(){return r})},32:function(t,e,n){"use strict";function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}n.d(e,"a",function(){return r})},33:function(t,e,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}n.d(e,"a",function(){return r})},34:function(t,e,n){"use strict";function r(t){if(Array.isArray(t))return t}n.d(e,"a",function(){return r})},4:function(t,e){!function(){t.exports=this.wp.components}()},45:function(t,e){!function(){t.exports=this.wp.a11y}()},5:function(t,e){!function(){t.exports=this.wp.data}()},65:function(t,e,n){t.exports=function(){"use strict";return function(t){var e={};return function t(e,n){var r;if(Array.isArray(n))for(r=0;r<n.length;r++)t(e,n[r]);else for(r in n)e[r]=(e[r]||[]).concat(n[r])}(e,t),function(t){return function(n){return function(r){var i,c,o=e[r.type],u=n(r);if(o)for(i=0;i<o.length;i++)(c=o[i](r,t))&&t.dispatch(c);return u}}}}}()},7:function(t,e){!function(){t.exports=this.wp.compose}()},8:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(15);function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){Object(r.a)(t,e,n[e])})}return t}},89:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.dispatch;return function(t){return function(n){return Array.isArray(n)?n.filter(Boolean).map(e):t(n)}}}},9:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",function(){return i})}});