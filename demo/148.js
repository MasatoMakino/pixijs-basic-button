"use strict";(self.webpackChunk_masatomakino_pixijs_basic_button=self.webpackChunk_masatomakino_pixijs_basic_button||[]).push([[148],{8148:(t,e,i)=>{var n=i(8507),o=i(5815),s=i(5101);class r{constructor(t){this.bubbles=!0,this.cancelBubble=!0,this.cancelable=!1,this.composed=!1,this.defaultPrevented=!1,this.eventPhase=r.prototype.NONE,this.propagationStopped=!1,this.propagationImmediatelyStopped=!1,this.layer=new s.b,this.page=new s.b,this.NONE=0,this.CAPTURING_PHASE=1,this.AT_TARGET=2,this.BUBBLING_PHASE=3,this.manager=t}get layerX(){return this.layer.x}get layerY(){return this.layer.y}get pageX(){return this.page.x}get pageY(){return this.page.y}get data(){return this}composedPath(){return!this.manager||this.path&&this.path[this.path.length-1]===this.target||(this.path=this.target?this.manager.propagationPath(this.target):[]),this.path}initEvent(t,e,i){throw new Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")}initUIEvent(t,e,i,n,o){throw new Error("initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")}preventDefault(){this.nativeEvent instanceof Event&&this.nativeEvent.cancelable&&this.nativeEvent.preventDefault(),this.defaultPrevented=!0}stopImmediatePropagation(){this.propagationImmediatelyStopped=!0}stopPropagation(){this.propagationStopped=!0}}var a=/iPhone/i,h=/iPod/i,l=/iPad/i,c=/\biOS-universal(?:.+)Mac\b/i,d=/\bAndroid(?:.+)Mobile\b/i,p=/Android/i,u=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,v=/Silk/i,m=/Windows Phone/i,g=/\bWindows(?:.+)ARM\b/i,y=/BlackBerry/i,b=/BB10/i,_=/Opera Mini/i,E=/\b(CriOS|Chrome)(?:.+)Mobile/i,f=/Mobile(?:.+)Firefox\b/i,T=function(t){return void 0!==t&&"MacIntel"===t.platform&&"number"==typeof t.maxTouchPoints&&t.maxTouchPoints>1&&"undefined"==typeof MSStream};function P(t){var e={userAgent:"",platform:"",maxTouchPoints:0};t||"undefined"==typeof navigator?"string"==typeof t?e.userAgent=t:t&&t.userAgent&&(e={userAgent:t.userAgent,platform:t.platform,maxTouchPoints:t.maxTouchPoints||0}):e={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0};var i=e.userAgent,n=i.split("[FBAN");void 0!==n[1]&&(i=n[0]),void 0!==(n=i.split("Twitter"))[1]&&(i=n[0]);var o=function(t){return function(e){return e.test(t)}}(i),s={apple:{phone:o(a)&&!o(m),ipod:o(h),tablet:!o(a)&&(o(l)||T(e))&&!o(m),universal:o(c),device:(o(a)||o(h)||o(l)||o(c)||T(e))&&!o(m)},amazon:{phone:o(u),tablet:!o(u)&&o(v),device:o(u)||o(v)},android:{phone:!o(m)&&o(u)||!o(m)&&o(d),tablet:!o(m)&&!o(u)&&!o(d)&&(o(v)||o(p)),device:!o(m)&&(o(u)||o(v)||o(d)||o(p))||o(/\bokhttp\b/i)},windows:{phone:o(m),tablet:o(g),device:o(m)||o(g)},other:{blackberry:o(y),blackberry10:o(b),opera:o(_),firefox:o(f),chrome:o(E),device:o(y)||o(b)||o(_)||o(f)||o(E)},any:!1,phone:!1,tablet:!1};return s.any=s.apple.device||s.android.device||s.windows.device||s.other.device,s.phone=s.apple.phone||s.android.phone||s.windows.phone,s.tablet=s.apple.tablet||s.android.tablet||s.windows.tablet,s}const w=(P.default??P)(globalThis.navigator);var M=i(9903);const A=class t{constructor(t,e=w){this._mobileInfo=e,this.debug=!1,this._activateOnTab=!0,this._deactivateOnMouseMove=!0,this._isActive=!1,this._isMobileAccessibility=!1,this._div=null,this._pool=[],this._renderId=0,this._children=[],this._androidUpdateCount=0,this._androidUpdateFrequency=500,this._hookDiv=null,(e.tablet||e.phone)&&this._createTouchHook(),this._renderer=t}get isActive(){return this._isActive}get isMobileAccessibility(){return this._isMobileAccessibility}get hookDiv(){return this._hookDiv}_createTouchHook(){const t=document.createElement("button");t.style.width="1px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.left="-1000px",t.style.zIndex=2..toString(),t.style.backgroundColor="#FF0000",t.title="select to enable accessibility for this content",t.addEventListener("focus",(()=>{this._isMobileAccessibility=!0,this._activate(),this._destroyTouchHook()})),document.body.appendChild(t),this._hookDiv=t}_destroyTouchHook(){this._hookDiv&&(document.body.removeChild(this._hookDiv),this._hookDiv=null)}_activate(){if(this._isActive)return;this._isActive=!0,this._div||(this._div=document.createElement("div"),this._div.style.width="100px",this._div.style.height="100px",this._div.style.position="absolute",this._div.style.top="0px",this._div.style.left="0px",this._div.style.zIndex=2..toString(),this._div.style.pointerEvents="none"),this._activateOnTab&&(this._onKeyDown=this._onKeyDown.bind(this),globalThis.addEventListener("keydown",this._onKeyDown,!1)),this._deactivateOnMouseMove&&(this._onMouseMove=this._onMouseMove.bind(this),globalThis.document.addEventListener("mousemove",this._onMouseMove,!0));const t=this._renderer.view.canvas;if(t.parentNode)t.parentNode.appendChild(this._div),this._initAccessibilitySetup();else{const e=new MutationObserver((()=>{t.parentNode&&(t.parentNode.appendChild(this._div),e.disconnect(),this._initAccessibilitySetup())}));e.observe(document.body,{childList:!0,subtree:!0})}}_initAccessibilitySetup(){this._renderer.runners.postrender.add(this),this._renderer.lastObjectRendered&&this._updateAccessibleObjects(this._renderer.lastObjectRendered)}_deactivate(){if(this._isActive&&!this._isMobileAccessibility){this._isActive=!1,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),this._activateOnTab&&globalThis.addEventListener("keydown",this._onKeyDown,!1),this._renderer.runners.postrender.remove(this);for(const t of this._children)t._accessibleDiv&&t._accessibleDiv.parentNode&&(t._accessibleDiv.parentNode.removeChild(t._accessibleDiv),t._accessibleDiv=null),t._accessibleActive=!1;this._pool.forEach((t=>{t.parentNode&&t.parentNode.removeChild(t)})),this._div&&this._div.parentNode&&this._div.parentNode.removeChild(this._div),this._pool=[],this._children=[]}}_updateAccessibleObjects(t){if(!t.visible||!t.accessibleChildren)return;t.accessible&&(t._accessibleActive||this._addChild(t),t._renderId=this._renderId);const e=t.children;if(e)for(let t=0;t<e.length;t++)this._updateAccessibleObjects(e[t])}init(e){const i={accessibilityOptions:{...t.defaultOptions,...e?.accessibilityOptions||{}}};this.debug=i.accessibilityOptions.debug,this._activateOnTab=i.accessibilityOptions.activateOnTab,this._deactivateOnMouseMove=i.accessibilityOptions.deactivateOnMouseMove,i.accessibilityOptions.enabledByDefault?this._activate():this._activateOnTab&&(this._onKeyDown=this._onKeyDown.bind(this),globalThis.addEventListener("keydown",this._onKeyDown,!1)),this._renderer.runners.postrender.remove(this)}postrender(){const t=performance.now();if(this._mobileInfo.android.device&&t<this._androidUpdateCount)return;if(this._androidUpdateCount=t+this._androidUpdateFrequency,!this._renderer.renderingToScreen||!this._renderer.view.canvas)return;const e=new Set;if(this._renderer.lastObjectRendered){this._updateAccessibleObjects(this._renderer.lastObjectRendered);for(const t of this._children)t._renderId===this._renderId&&e.add(this._children.indexOf(t))}for(let t=this._children.length-1;t>=0;t--){const i=this._children[t];e.has(t)||(i._accessibleDiv&&i._accessibleDiv.parentNode&&(i._accessibleDiv.parentNode.removeChild(i._accessibleDiv),this._pool.push(i._accessibleDiv),i._accessibleDiv=null),i._accessibleActive=!1,(0,M.d)(this._children,t,1))}if(this._renderer.renderingToScreen){const{x:t,y:e,width:i,height:n}=this._renderer.screen,o=this._div;o.style.left=`${t}px`,o.style.top=`${e}px`,o.style.width=`${i}px`,o.style.height=`${n}px`}for(let t=0;t<this._children.length;t++){const e=this._children[t];if(!e._accessibleActive||!e._accessibleDiv)continue;const i=e._accessibleDiv,n=e.hitArea||e.getBounds().rectangle;if(e.hitArea){const t=e.worldTransform,o=this._renderer.resolution,s=this._renderer.resolution;i.style.left=(t.tx+n.x*t.a)*o+"px",i.style.top=(t.ty+n.y*t.d)*s+"px",i.style.width=n.width*t.a*o+"px",i.style.height=n.height*t.d*s+"px"}else{this._capHitArea(n);const t=this._renderer.resolution,e=this._renderer.resolution;i.style.left=n.x*t+"px",i.style.top=n.y*e+"px",i.style.width=n.width*t+"px",i.style.height=n.height*e+"px"}}this._renderId++}_updateDebugHTML(t){t.innerHTML=`type: ${t.type}</br> title : ${t.title}</br> tabIndex: ${t.tabIndex}`}_capHitArea(t){t.x<0&&(t.width+=t.x,t.x=0),t.y<0&&(t.height+=t.y,t.y=0);const{width:e,height:i}=this._renderer;t.x+t.width>e&&(t.width=e-t.x),t.y+t.height>i&&(t.height=i-t.y)}_addChild(t){let e=this._pool.pop();e||("button"===t.accessibleType?e=document.createElement("button"):(e=document.createElement(t.accessibleType),e.style.cssText="\n                        color: transparent;\n                        pointer-events: none;\n                        padding: 0;\n                        margin: 0;\n                        border: 0;\n                        outline: 0;\n                        background: transparent;\n                        box-sizing: border-box;\n                        user-select: none;\n                        -webkit-user-select: none;\n                        -moz-user-select: none;\n                        -ms-user-select: none;\n                    ",t.accessibleText&&(e.innerText=t.accessibleText)),e.style.width="100px",e.style.height="100px",e.style.backgroundColor=this.debug?"rgba(255,255,255,0.5)":"transparent",e.style.position="absolute",e.style.zIndex=2..toString(),e.style.borderStyle="none",navigator.userAgent.toLowerCase().includes("chrome")?e.setAttribute("aria-live","off"):e.setAttribute("aria-live","polite"),navigator.userAgent.match(/rv:.*Gecko\//)?e.setAttribute("aria-relevant","additions"):e.setAttribute("aria-relevant","text"),e.addEventListener("click",this._onClick.bind(this)),e.addEventListener("focus",this._onFocus.bind(this)),e.addEventListener("focusout",this._onFocusOut.bind(this))),e.style.pointerEvents=t.accessiblePointerEvents,e.type=t.accessibleType,t.accessibleTitle&&null!==t.accessibleTitle?e.title=t.accessibleTitle:t.accessibleHint&&null!==t.accessibleHint||(e.title=`container ${t.tabIndex}`),t.accessibleHint&&null!==t.accessibleHint&&e.setAttribute("aria-label",t.accessibleHint),this.debug&&this._updateDebugHTML(e),t._accessibleActive=!0,t._accessibleDiv=e,e.container=t,this._children.push(t),this._div.appendChild(t._accessibleDiv),t.interactive&&(t._accessibleDiv.tabIndex=t.tabIndex)}_dispatchEvent(t,e){const{container:i}=t.target,n=this._renderer.events.rootBoundary,o=Object.assign(new r(n),{target:i});n.rootTarget=this._renderer.lastObjectRendered,e.forEach((t=>n.dispatchEvent(o,t)))}_onClick(t){this._dispatchEvent(t,["click","pointertap","tap"])}_onFocus(t){t.target.getAttribute("aria-live")||t.target.setAttribute("aria-live","assertive"),this._dispatchEvent(t,["mouseover"])}_onFocusOut(t){t.target.getAttribute("aria-live")||t.target.setAttribute("aria-live","polite"),this._dispatchEvent(t,["mouseout"])}_onKeyDown(t){9===t.keyCode&&this._activateOnTab&&this._activate()}_onMouseMove(t){0===t.movementX&&0===t.movementY||this._deactivate()}destroy(){this._deactivate(),this._destroyTouchHook(),this._div=null,this._pool=null,this._children=null,this._renderer=null,this._activateOnTab&&globalThis.removeEventListener("keydown",this._onKeyDown)}setAccessibilityEnabled(t){t?this._activate():this._deactivate()}};A.extension={type:[n.Ag.WebGLSystem,n.Ag.WebGPUSystem],name:"accessibility"},A.defaultOptions={enabledByDefault:!1,debug:!1,activateOnTab:!0,deactivateOnMouseMove:!0};let O=A;n.XO.add(O),o.mc.mixin({accessible:!1,accessibleTitle:null,accessibleHint:null,tabIndex:0,_accessibleActive:!1,_accessibleDiv:null,accessibleType:"button",accessibleText:null,accessiblePointerEvents:"auto",accessibleChildren:!0,_renderId:-1}),i(4732);var D=i(8875),x=i(268),I=i(4458),k=i(7309);const L=new class{constructor(){this.interactionFrequency=10,this._deltaTime=0,this._didMove=!1,this._tickerAdded=!1,this._pauseUpdate=!0}init(t){this.removeTickerListener(),this.events=t,this.interactionFrequency=10,this._deltaTime=0,this._didMove=!1,this._tickerAdded=!1,this._pauseUpdate=!0}get pauseUpdate(){return this._pauseUpdate}set pauseUpdate(t){this._pauseUpdate=t}addTickerListener(){!this._tickerAdded&&this.domElement&&(k.R.system.add(this._tickerUpdate,this,I.d.INTERACTION),this._tickerAdded=!0)}removeTickerListener(){this._tickerAdded&&(k.R.system.remove(this._tickerUpdate,this),this._tickerAdded=!1)}pointerMoved(){this._didMove=!0}_update(){if(!this.domElement||this._pauseUpdate)return;if(this._didMove)return void(this._didMove=!1);const t=this.events._rootPointerEvent;this.events.supportsTouchEvents&&"touch"===t.pointerType||globalThis.document.dispatchEvent(new PointerEvent("pointermove",{clientX:t.clientX,clientY:t.clientY,pointerType:t.pointerType,pointerId:t.pointerId}))}_tickerUpdate(t){this._deltaTime+=t.deltaTime,this._deltaTime<this.interactionFrequency||(this._deltaTime=0,this._update())}};class B extends r{constructor(){super(...arguments),this.client=new s.b,this.movement=new s.b,this.offset=new s.b,this.global=new s.b,this.screen=new s.b}get clientX(){return this.client.x}get clientY(){return this.client.y}get x(){return this.clientX}get y(){return this.clientY}get movementX(){return this.movement.x}get movementY(){return this.movement.y}get offsetX(){return this.offset.x}get offsetY(){return this.offset.y}get globalX(){return this.global.x}get globalY(){return this.global.y}get screenX(){return this.screen.x}get screenY(){return this.screen.y}getLocalPosition(t,e,i){return t.worldTransform.applyInverse(i||this.global,e)}getModifierState(t){return"getModifierState"in this.nativeEvent&&this.nativeEvent.getModifierState(t)}initMouseEvent(t,e,i,n,o,s,r,a,h,l,c,d,p,u,v){throw new Error("Method not implemented.")}}class C extends B{constructor(){super(...arguments),this.width=0,this.height=0,this.isPrimary=!1}getCoalescedEvents(){return"pointermove"===this.type||"mousemove"===this.type||"touchmove"===this.type?[this]:[]}getPredictedEvents(){throw new Error("getPredictedEvents is not supported!")}}class S extends B{constructor(){super(...arguments),this.DOM_DELTA_PIXEL=0,this.DOM_DELTA_LINE=1,this.DOM_DELTA_PAGE=2}}S.DOM_DELTA_PIXEL=0,S.DOM_DELTA_LINE=1,S.DOM_DELTA_PAGE=2;const U=new s.b,R=new s.b;class F{constructor(t){this.dispatch=new D.A,this.moveOnAll=!1,this.enableGlobalMoveEvents=!0,this.mappingState={trackingData:{}},this.eventPool=new Map,this._allInteractiveElements=[],this._hitElements=[],this._isPointerMoveEvent=!1,this.rootTarget=t,this.hitPruneFn=this.hitPruneFn.bind(this),this.hitTestFn=this.hitTestFn.bind(this),this.mapPointerDown=this.mapPointerDown.bind(this),this.mapPointerMove=this.mapPointerMove.bind(this),this.mapPointerOut=this.mapPointerOut.bind(this),this.mapPointerOver=this.mapPointerOver.bind(this),this.mapPointerUp=this.mapPointerUp.bind(this),this.mapPointerUpOutside=this.mapPointerUpOutside.bind(this),this.mapWheel=this.mapWheel.bind(this),this.mappingTable={},this.addEventMapping("pointerdown",this.mapPointerDown),this.addEventMapping("pointermove",this.mapPointerMove),this.addEventMapping("pointerout",this.mapPointerOut),this.addEventMapping("pointerleave",this.mapPointerOut),this.addEventMapping("pointerover",this.mapPointerOver),this.addEventMapping("pointerup",this.mapPointerUp),this.addEventMapping("pointerupoutside",this.mapPointerUpOutside),this.addEventMapping("wheel",this.mapWheel)}addEventMapping(t,e){this.mappingTable[t]||(this.mappingTable[t]=[]),this.mappingTable[t].push({fn:e,priority:0}),this.mappingTable[t].sort(((t,e)=>t.priority-e.priority))}dispatchEvent(t,e){t.propagationStopped=!1,t.propagationImmediatelyStopped=!1,this.propagate(t,e),this.dispatch.emit(e||t.type,t)}mapEvent(t){if(!this.rootTarget)return;const e=this.mappingTable[t.type];if(e)for(let i=0,n=e.length;i<n;i++)e[i].fn(t);else(0,x.R)(`[EventBoundary]: Event mapping not defined for ${t.type}`)}hitTest(t,e){L.pauseUpdate=!0;const i=this[this._isPointerMoveEvent&&this.enableGlobalMoveEvents?"hitTestMoveRecursive":"hitTestRecursive"](this.rootTarget,this.rootTarget.eventMode,U.set(t,e),this.hitTestFn,this.hitPruneFn);return i&&i[0]}propagate(t,e){if(!t.target)return;const i=t.composedPath();t.eventPhase=t.CAPTURING_PHASE;for(let n=0,o=i.length-1;n<o;n++)if(t.currentTarget=i[n],this.notifyTarget(t,e),t.propagationStopped||t.propagationImmediatelyStopped)return;if(t.eventPhase=t.AT_TARGET,t.currentTarget=t.target,this.notifyTarget(t,e),!t.propagationStopped&&!t.propagationImmediatelyStopped){t.eventPhase=t.BUBBLING_PHASE;for(let n=i.length-2;n>=0;n--)if(t.currentTarget=i[n],this.notifyTarget(t,e),t.propagationStopped||t.propagationImmediatelyStopped)return}}all(t,e,i=this._allInteractiveElements){if(0===i.length)return;t.eventPhase=t.BUBBLING_PHASE;const n=Array.isArray(e)?e:[e];for(let e=i.length-1;e>=0;e--)n.forEach((n=>{t.currentTarget=i[e],this.notifyTarget(t,n)}))}propagationPath(t){const e=[t];for(let i=0;i<2048&&t!==this.rootTarget&&t.parent;i++){if(!t.parent)throw new Error("Cannot find propagation path to disconnected target");e.push(t.parent),t=t.parent}return e.reverse(),e}hitTestMoveRecursive(t,e,i,n,o,s=!1){let r=!1;if(this._interactivePrune(t))return null;if("dynamic"!==t.eventMode&&"dynamic"!==e||(L.pauseUpdate=!1),t.interactiveChildren&&t.children){const a=t.children;for(let h=a.length-1;h>=0;h--){const l=a[h],c=this.hitTestMoveRecursive(l,this._isInteractive(e)?e:l.eventMode,i,n,o,s||o(t,i));if(c){if(c.length>0&&!c[c.length-1].parent)continue;const e=t.isInteractive();(c.length>0||e)&&(e&&this._allInteractiveElements.push(t),c.push(t)),0===this._hitElements.length&&(this._hitElements=c),r=!0}}}const a=this._isInteractive(e),h=t.isInteractive();return h&&h&&this._allInteractiveElements.push(t),s||this._hitElements.length>0?null:r?this._hitElements:a&&!o(t,i)&&n(t,i)?h?[t]:[]:null}hitTestRecursive(t,e,i,n,o){if(this._interactivePrune(t)||o(t,i))return null;if("dynamic"!==t.eventMode&&"dynamic"!==e||(L.pauseUpdate=!1),t.interactiveChildren&&t.children){const s=t.children,r=i;for(let i=s.length-1;i>=0;i--){const a=s[i],h=this.hitTestRecursive(a,this._isInteractive(e)?e:a.eventMode,r,n,o);if(h){if(h.length>0&&!h[h.length-1].parent)continue;const e=t.isInteractive();return(h.length>0||e)&&h.push(t),h}}}const s=this._isInteractive(e),r=t.isInteractive();return s&&n(t,i)?r?[t]:[]:null}_isInteractive(t){return"static"===t||"dynamic"===t}_interactivePrune(t){return!(t&&t.visible&&t.renderable&&t.measurable)||"none"===t.eventMode||"passive"===t.eventMode&&!t.interactiveChildren}hitPruneFn(t,e){if(t.hitArea&&(t.worldTransform.applyInverse(e,R),!t.hitArea.contains(R.x,R.y)))return!0;if(t.effects&&t.effects.length)for(let i=0;i<t.effects.length;i++){const n=t.effects[i];if(n.containsPoint&&!n.containsPoint(e,this.hitTestFn))return!0}return!1}hitTestFn(t,e){return!!t.hitArea||!!t?.containsPoint&&(t.worldTransform.applyInverse(e,R),t.containsPoint(R))}notifyTarget(t,e){if(!t.currentTarget.isInteractive())return;e??(e=t.type);const i=`on${e}`;t.currentTarget[i]?.(t);const n=t.eventPhase===t.CAPTURING_PHASE||t.eventPhase===t.AT_TARGET?`${e}capture`:e;this._notifyListeners(t,n),t.eventPhase===t.AT_TARGET&&this._notifyListeners(t,e)}mapPointerDown(t){if(!(t instanceof C))return void(0,x.R)("EventBoundary cannot map a non-pointer event as a pointer event");const e=this.createPointerEvent(t);if(this.dispatchEvent(e,"pointerdown"),"touch"===e.pointerType)this.dispatchEvent(e,"touchstart");else if("mouse"===e.pointerType||"pen"===e.pointerType){const t=2===e.button;this.dispatchEvent(e,t?"rightdown":"mousedown")}this.trackingData(t.pointerId).pressTargetsByButton[t.button]=e.composedPath(),this.freeEvent(e)}mapPointerMove(t){if(!(t instanceof C))return void(0,x.R)("EventBoundary cannot map a non-pointer event as a pointer event");this._allInteractiveElements.length=0,this._hitElements.length=0,this._isPointerMoveEvent=!0;const e=this.createPointerEvent(t);this._isPointerMoveEvent=!1;const i="mouse"===e.pointerType||"pen"===e.pointerType,n=this.trackingData(t.pointerId),o=this.findMountedTarget(n.overTargets);if(n.overTargets?.length>0&&o!==e.target){const n="mousemove"===t.type?"mouseout":"pointerout",s=this.createPointerEvent(t,n,o);if(this.dispatchEvent(s,"pointerout"),i&&this.dispatchEvent(s,"mouseout"),!e.composedPath().includes(o)){const n=this.createPointerEvent(t,"pointerleave",o);for(n.eventPhase=n.AT_TARGET;n.target&&!e.composedPath().includes(n.target);)n.currentTarget=n.target,this.notifyTarget(n),i&&this.notifyTarget(n,"mouseleave"),n.target=n.target.parent;this.freeEvent(n)}this.freeEvent(s)}if(o!==e.target){const n="mousemove"===t.type?"mouseover":"pointerover",s=this.clonePointerEvent(e,n);this.dispatchEvent(s,"pointerover"),i&&this.dispatchEvent(s,"mouseover");let r=o?.parent;for(;r&&r!==this.rootTarget.parent&&r!==e.target;)r=r.parent;if(!r||r===this.rootTarget.parent){const t=this.clonePointerEvent(e,"pointerenter");for(t.eventPhase=t.AT_TARGET;t.target&&t.target!==o&&t.target!==this.rootTarget.parent;)t.currentTarget=t.target,this.notifyTarget(t),i&&this.notifyTarget(t,"mouseenter"),t.target=t.target.parent;this.freeEvent(t)}this.freeEvent(s)}const s=[],r=this.enableGlobalMoveEvents??!0;this.moveOnAll?s.push("pointermove"):this.dispatchEvent(e,"pointermove"),r&&s.push("globalpointermove"),"touch"===e.pointerType&&(this.moveOnAll?s.splice(1,0,"touchmove"):this.dispatchEvent(e,"touchmove"),r&&s.push("globaltouchmove")),i&&(this.moveOnAll?s.splice(1,0,"mousemove"):this.dispatchEvent(e,"mousemove"),r&&s.push("globalmousemove"),this.cursor=e.target?.cursor),s.length>0&&this.all(e,s),this._allInteractiveElements.length=0,this._hitElements.length=0,n.overTargets=e.composedPath(),this.freeEvent(e)}mapPointerOver(t){if(!(t instanceof C))return void(0,x.R)("EventBoundary cannot map a non-pointer event as a pointer event");const e=this.trackingData(t.pointerId),i=this.createPointerEvent(t),n="mouse"===i.pointerType||"pen"===i.pointerType;this.dispatchEvent(i,"pointerover"),n&&this.dispatchEvent(i,"mouseover"),"mouse"===i.pointerType&&(this.cursor=i.target?.cursor);const o=this.clonePointerEvent(i,"pointerenter");for(o.eventPhase=o.AT_TARGET;o.target&&o.target!==this.rootTarget.parent;)o.currentTarget=o.target,this.notifyTarget(o),n&&this.notifyTarget(o,"mouseenter"),o.target=o.target.parent;e.overTargets=i.composedPath(),this.freeEvent(i),this.freeEvent(o)}mapPointerOut(t){if(!(t instanceof C))return void(0,x.R)("EventBoundary cannot map a non-pointer event as a pointer event");const e=this.trackingData(t.pointerId);if(e.overTargets){const i="mouse"===t.pointerType||"pen"===t.pointerType,n=this.findMountedTarget(e.overTargets),o=this.createPointerEvent(t,"pointerout",n);this.dispatchEvent(o),i&&this.dispatchEvent(o,"mouseout");const s=this.createPointerEvent(t,"pointerleave",n);for(s.eventPhase=s.AT_TARGET;s.target&&s.target!==this.rootTarget.parent;)s.currentTarget=s.target,this.notifyTarget(s),i&&this.notifyTarget(s,"mouseleave"),s.target=s.target.parent;e.overTargets=null,this.freeEvent(o),this.freeEvent(s)}this.cursor=null}mapPointerUp(t){if(!(t instanceof C))return void(0,x.R)("EventBoundary cannot map a non-pointer event as a pointer event");const e=performance.now(),i=this.createPointerEvent(t);if(this.dispatchEvent(i,"pointerup"),"touch"===i.pointerType)this.dispatchEvent(i,"touchend");else if("mouse"===i.pointerType||"pen"===i.pointerType){const t=2===i.button;this.dispatchEvent(i,t?"rightup":"mouseup")}const n=this.trackingData(t.pointerId),o=this.findMountedTarget(n.pressTargetsByButton[t.button]);let s=o;if(o&&!i.composedPath().includes(o)){let e=o;for(;e&&!i.composedPath().includes(e);){if(i.currentTarget=e,this.notifyTarget(i,"pointerupoutside"),"touch"===i.pointerType)this.notifyTarget(i,"touchendoutside");else if("mouse"===i.pointerType||"pen"===i.pointerType){const t=2===i.button;this.notifyTarget(i,t?"rightupoutside":"mouseupoutside")}e=e.parent}delete n.pressTargetsByButton[t.button],s=e}if(s){const o=this.clonePointerEvent(i,"click");o.target=s,o.path=null,n.clicksByButton[t.button]||(n.clicksByButton[t.button]={clickCount:0,target:o.target,timeStamp:e});const r=n.clicksByButton[t.button];if(r.target===o.target&&e-r.timeStamp<200?++r.clickCount:r.clickCount=1,r.target=o.target,r.timeStamp=e,o.detail=r.clickCount,"mouse"===o.pointerType){const t=2===o.button;this.dispatchEvent(o,t?"rightclick":"click")}else"touch"===o.pointerType&&this.dispatchEvent(o,"tap");this.dispatchEvent(o,"pointertap"),this.freeEvent(o)}this.freeEvent(i)}mapPointerUpOutside(t){if(!(t instanceof C))return void(0,x.R)("EventBoundary cannot map a non-pointer event as a pointer event");const e=this.trackingData(t.pointerId),i=this.findMountedTarget(e.pressTargetsByButton[t.button]),n=this.createPointerEvent(t);if(i){let o=i;for(;o;)n.currentTarget=o,this.notifyTarget(n,"pointerupoutside"),"touch"===n.pointerType?this.notifyTarget(n,"touchendoutside"):"mouse"!==n.pointerType&&"pen"!==n.pointerType||this.notifyTarget(n,2===n.button?"rightupoutside":"mouseupoutside"),o=o.parent;delete e.pressTargetsByButton[t.button]}this.freeEvent(n)}mapWheel(t){if(!(t instanceof S))return void(0,x.R)("EventBoundary cannot map a non-wheel event as a wheel event");const e=this.createWheelEvent(t);this.dispatchEvent(e),this.freeEvent(e)}findMountedTarget(t){if(!t)return null;let e=t[0];for(let i=1;i<t.length&&t[i].parent===e;i++)e=t[i];return e}createPointerEvent(t,e,i){const n=this.allocateEvent(C);return this.copyPointerData(t,n),this.copyMouseData(t,n),this.copyData(t,n),n.nativeEvent=t.nativeEvent,n.originalEvent=t,n.target=i??this.hitTest(n.global.x,n.global.y)??this._hitElements[0],"string"==typeof e&&(n.type=e),n}createWheelEvent(t){const e=this.allocateEvent(S);return this.copyWheelData(t,e),this.copyMouseData(t,e),this.copyData(t,e),e.nativeEvent=t.nativeEvent,e.originalEvent=t,e.target=this.hitTest(e.global.x,e.global.y),e}clonePointerEvent(t,e){const i=this.allocateEvent(C);return i.nativeEvent=t.nativeEvent,i.originalEvent=t.originalEvent,this.copyPointerData(t,i),this.copyMouseData(t,i),this.copyData(t,i),i.target=t.target,i.path=t.composedPath().slice(),i.type=e??i.type,i}copyWheelData(t,e){e.deltaMode=t.deltaMode,e.deltaX=t.deltaX,e.deltaY=t.deltaY,e.deltaZ=t.deltaZ}copyPointerData(t,e){t instanceof C&&e instanceof C&&(e.pointerId=t.pointerId,e.width=t.width,e.height=t.height,e.isPrimary=t.isPrimary,e.pointerType=t.pointerType,e.pressure=t.pressure,e.tangentialPressure=t.tangentialPressure,e.tiltX=t.tiltX,e.tiltY=t.tiltY,e.twist=t.twist)}copyMouseData(t,e){t instanceof B&&e instanceof B&&(e.altKey=t.altKey,e.button=t.button,e.buttons=t.buttons,e.client.copyFrom(t.client),e.ctrlKey=t.ctrlKey,e.metaKey=t.metaKey,e.movement.copyFrom(t.movement),e.screen.copyFrom(t.screen),e.shiftKey=t.shiftKey,e.global.copyFrom(t.global))}copyData(t,e){e.isTrusted=t.isTrusted,e.srcElement=t.srcElement,e.timeStamp=performance.now(),e.type=t.type,e.detail=t.detail,e.view=t.view,e.which=t.which,e.layer.copyFrom(t.layer),e.page.copyFrom(t.page)}trackingData(t){return this.mappingState.trackingData[t]||(this.mappingState.trackingData[t]={pressTargetsByButton:{},clicksByButton:{},overTarget:null}),this.mappingState.trackingData[t]}allocateEvent(t){this.eventPool.has(t)||this.eventPool.set(t,[]);const e=this.eventPool.get(t).pop()||new t(this);return e.eventPhase=e.NONE,e.currentTarget=null,e.defaultPrevented=!1,e.path=null,e.target=null,e}freeEvent(t){if(t.manager!==this)throw new Error("It is illegal to free an event not managed by this EventBoundary!");const e=t.constructor;this.eventPool.has(e)||this.eventPool.set(e,[]),this.eventPool.get(e).push(t)}_notifyListeners(t,e){const i=t.currentTarget._events[e];if(i)if("fn"in i)i.once&&t.currentTarget.removeListener(e,i.fn,void 0,!0),i.fn.call(i.context,t);else for(let n=0,o=i.length;n<o&&!t.propagationImmediatelyStopped;n++)i[n].once&&t.currentTarget.removeListener(e,i[n].fn,void 0,!0),i[n].fn.call(i[n].context,t)}}const X={touchstart:"pointerdown",touchend:"pointerup",touchendoutside:"pointerupoutside",touchmove:"pointermove",touchcancel:"pointercancel"},Y=class t{constructor(e){this.supportsTouchEvents="ontouchstart"in globalThis,this.supportsPointerEvents=!!globalThis.PointerEvent,this.domElement=null,this.resolution=1,this.renderer=e,this.rootBoundary=new F(null),L.init(this),this.autoPreventDefault=!0,this._eventsAdded=!1,this._rootPointerEvent=new C(null),this._rootWheelEvent=new S(null),this.cursorStyles={default:"inherit",pointer:"pointer"},this.features=new Proxy({...t.defaultEventFeatures},{set:(t,e,i)=>("globalMove"===e&&(this.rootBoundary.enableGlobalMoveEvents=i),t[e]=i,!0)}),this._onPointerDown=this._onPointerDown.bind(this),this._onPointerMove=this._onPointerMove.bind(this),this._onPointerUp=this._onPointerUp.bind(this),this._onPointerOverOut=this._onPointerOverOut.bind(this),this.onWheel=this.onWheel.bind(this)}static get defaultEventMode(){return this._defaultEventMode}init(e){const{canvas:i,resolution:n}=this.renderer;this.setTargetElement(i),this.resolution=n,t._defaultEventMode=e.eventMode??"passive",Object.assign(this.features,e.eventFeatures??{}),this.rootBoundary.enableGlobalMoveEvents=this.features.globalMove}resolutionChange(t){this.resolution=t}destroy(){this.setTargetElement(null),this.renderer=null,this._currentCursor=null}setCursor(t){t||(t="default");let e=!0;if(globalThis.OffscreenCanvas&&this.domElement instanceof OffscreenCanvas&&(e=!1),this._currentCursor===t)return;this._currentCursor=t;const i=this.cursorStyles[t];if(i)switch(typeof i){case"string":e&&(this.domElement.style.cursor=i);break;case"function":i(t);break;case"object":e&&Object.assign(this.domElement.style,i)}else e&&"string"==typeof t&&!Object.prototype.hasOwnProperty.call(this.cursorStyles,t)&&(this.domElement.style.cursor=t)}get pointer(){return this._rootPointerEvent}_onPointerDown(t){if(!this.features.click)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;const e=this._normalizeToPointerData(t);this.autoPreventDefault&&e[0].isNormalized&&(t.cancelable||!("cancelable"in t))&&t.preventDefault();for(let t=0,i=e.length;t<i;t++){const i=e[t],n=this._bootstrapEvent(this._rootPointerEvent,i);this.rootBoundary.mapEvent(n)}this.setCursor(this.rootBoundary.cursor)}_onPointerMove(t){if(!this.features.move)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered,L.pointerMoved();const e=this._normalizeToPointerData(t);for(let t=0,i=e.length;t<i;t++){const i=this._bootstrapEvent(this._rootPointerEvent,e[t]);this.rootBoundary.mapEvent(i)}this.setCursor(this.rootBoundary.cursor)}_onPointerUp(t){if(!this.features.click)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;let e=t.target;t.composedPath&&t.composedPath().length>0&&(e=t.composedPath()[0]);const i=e!==this.domElement?"outside":"",n=this._normalizeToPointerData(t);for(let t=0,e=n.length;t<e;t++){const e=this._bootstrapEvent(this._rootPointerEvent,n[t]);e.type+=i,this.rootBoundary.mapEvent(e)}this.setCursor(this.rootBoundary.cursor)}_onPointerOverOut(t){if(!this.features.click)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;const e=this._normalizeToPointerData(t);for(let t=0,i=e.length;t<i;t++){const i=this._bootstrapEvent(this._rootPointerEvent,e[t]);this.rootBoundary.mapEvent(i)}this.setCursor(this.rootBoundary.cursor)}onWheel(t){if(!this.features.wheel)return;const e=this.normalizeWheelEvent(t);this.rootBoundary.rootTarget=this.renderer.lastObjectRendered,this.rootBoundary.mapEvent(e)}setTargetElement(t){this._removeEvents(),this.domElement=t,L.domElement=t,this._addEvents()}_addEvents(){if(this._eventsAdded||!this.domElement)return;L.addTickerListener();const t=this.domElement.style;t&&(globalThis.navigator.msPointerEnabled?(t.msContentZooming="none",t.msTouchAction="none"):this.supportsPointerEvents&&(t.touchAction="none")),this.supportsPointerEvents?(globalThis.document.addEventListener("pointermove",this._onPointerMove,!0),this.domElement.addEventListener("pointerdown",this._onPointerDown,!0),this.domElement.addEventListener("pointerleave",this._onPointerOverOut,!0),this.domElement.addEventListener("pointerover",this._onPointerOverOut,!0),globalThis.addEventListener("pointerup",this._onPointerUp,!0)):(globalThis.document.addEventListener("mousemove",this._onPointerMove,!0),this.domElement.addEventListener("mousedown",this._onPointerDown,!0),this.domElement.addEventListener("mouseout",this._onPointerOverOut,!0),this.domElement.addEventListener("mouseover",this._onPointerOverOut,!0),globalThis.addEventListener("mouseup",this._onPointerUp,!0),this.supportsTouchEvents&&(this.domElement.addEventListener("touchstart",this._onPointerDown,!0),this.domElement.addEventListener("touchend",this._onPointerUp,!0),this.domElement.addEventListener("touchmove",this._onPointerMove,!0))),this.domElement.addEventListener("wheel",this.onWheel,{passive:!0,capture:!0}),this._eventsAdded=!0}_removeEvents(){if(!this._eventsAdded||!this.domElement)return;L.removeTickerListener();const t=this.domElement.style;t&&(globalThis.navigator.msPointerEnabled?(t.msContentZooming="",t.msTouchAction=""):this.supportsPointerEvents&&(t.touchAction="")),this.supportsPointerEvents?(globalThis.document.removeEventListener("pointermove",this._onPointerMove,!0),this.domElement.removeEventListener("pointerdown",this._onPointerDown,!0),this.domElement.removeEventListener("pointerleave",this._onPointerOverOut,!0),this.domElement.removeEventListener("pointerover",this._onPointerOverOut,!0),globalThis.removeEventListener("pointerup",this._onPointerUp,!0)):(globalThis.document.removeEventListener("mousemove",this._onPointerMove,!0),this.domElement.removeEventListener("mousedown",this._onPointerDown,!0),this.domElement.removeEventListener("mouseout",this._onPointerOverOut,!0),this.domElement.removeEventListener("mouseover",this._onPointerOverOut,!0),globalThis.removeEventListener("mouseup",this._onPointerUp,!0),this.supportsTouchEvents&&(this.domElement.removeEventListener("touchstart",this._onPointerDown,!0),this.domElement.removeEventListener("touchend",this._onPointerUp,!0),this.domElement.removeEventListener("touchmove",this._onPointerMove,!0))),this.domElement.removeEventListener("wheel",this.onWheel,!0),this.domElement=null,this._eventsAdded=!1}mapPositionToPoint(t,e,i){const n=this.domElement.isConnected?this.domElement.getBoundingClientRect():{x:0,y:0,width:this.domElement.width,height:this.domElement.height,left:0,top:0},o=1/this.resolution;t.x=(e-n.left)*(this.domElement.width/n.width)*o,t.y=(i-n.top)*(this.domElement.height/n.height)*o}_normalizeToPointerData(t){const e=[];if(this.supportsTouchEvents&&t instanceof TouchEvent)for(let i=0,n=t.changedTouches.length;i<n;i++){const n=t.changedTouches[i];void 0===n.button&&(n.button=0),void 0===n.buttons&&(n.buttons=1),void 0===n.isPrimary&&(n.isPrimary=1===t.touches.length&&"touchstart"===t.type),void 0===n.width&&(n.width=n.radiusX||1),void 0===n.height&&(n.height=n.radiusY||1),void 0===n.tiltX&&(n.tiltX=0),void 0===n.tiltY&&(n.tiltY=0),void 0===n.pointerType&&(n.pointerType="touch"),void 0===n.pointerId&&(n.pointerId=n.identifier||0),void 0===n.pressure&&(n.pressure=n.force||.5),void 0===n.twist&&(n.twist=0),void 0===n.tangentialPressure&&(n.tangentialPressure=0),void 0===n.layerX&&(n.layerX=n.offsetX=n.clientX),void 0===n.layerY&&(n.layerY=n.offsetY=n.clientY),n.isNormalized=!0,n.type=t.type,e.push(n)}else if(!globalThis.MouseEvent||t instanceof MouseEvent&&!(this.supportsPointerEvents&&t instanceof globalThis.PointerEvent)){const i=t;void 0===i.isPrimary&&(i.isPrimary=!0),void 0===i.width&&(i.width=1),void 0===i.height&&(i.height=1),void 0===i.tiltX&&(i.tiltX=0),void 0===i.tiltY&&(i.tiltY=0),void 0===i.pointerType&&(i.pointerType="mouse"),void 0===i.pointerId&&(i.pointerId=1),void 0===i.pressure&&(i.pressure=.5),void 0===i.twist&&(i.twist=0),void 0===i.tangentialPressure&&(i.tangentialPressure=0),i.isNormalized=!0,e.push(i)}else e.push(t);return e}normalizeWheelEvent(t){const e=this._rootWheelEvent;return this._transferMouseData(e,t),e.deltaX=t.deltaX,e.deltaY=t.deltaY,e.deltaZ=t.deltaZ,e.deltaMode=t.deltaMode,this.mapPositionToPoint(e.screen,t.clientX,t.clientY),e.global.copyFrom(e.screen),e.offset.copyFrom(e.screen),e.nativeEvent=t,e.type=t.type,e}_bootstrapEvent(t,e){return t.originalEvent=null,t.nativeEvent=e,t.pointerId=e.pointerId,t.width=e.width,t.height=e.height,t.isPrimary=e.isPrimary,t.pointerType=e.pointerType,t.pressure=e.pressure,t.tangentialPressure=e.tangentialPressure,t.tiltX=e.tiltX,t.tiltY=e.tiltY,t.twist=e.twist,this._transferMouseData(t,e),this.mapPositionToPoint(t.screen,e.clientX,e.clientY),t.global.copyFrom(t.screen),t.offset.copyFrom(t.screen),t.isTrusted=e.isTrusted,"pointerleave"===t.type&&(t.type="pointerout"),t.type.startsWith("mouse")&&(t.type=t.type.replace("mouse","pointer")),t.type.startsWith("touch")&&(t.type=X[t.type]||t.type),t}_transferMouseData(t,e){t.isTrusted=e.isTrusted,t.srcElement=e.srcElement,t.timeStamp=performance.now(),t.type=e.type,t.altKey=e.altKey,t.button=e.button,t.buttons=e.buttons,t.client.x=e.clientX,t.client.y=e.clientY,t.ctrlKey=e.ctrlKey,t.metaKey=e.metaKey,t.movement.x=e.movementX,t.movement.y=e.movementY,t.page.x=e.pageX,t.page.y=e.pageY,t.relatedTarget=null,t.shiftKey=e.shiftKey}};Y.extension={name:"events",type:[n.Ag.WebGLSystem,n.Ag.CanvasSystem,n.Ag.WebGPUSystem],priority:-1},Y.defaultEventFeatures={move:!0,globalMove:!0,click:!0,wheel:!0};let N=Y;const G={onclick:null,onmousedown:null,onmouseenter:null,onmouseleave:null,onmousemove:null,onglobalmousemove:null,onmouseout:null,onmouseover:null,onmouseup:null,onmouseupoutside:null,onpointercancel:null,onpointerdown:null,onpointerenter:null,onpointerleave:null,onpointermove:null,onglobalpointermove:null,onpointerout:null,onpointerover:null,onpointertap:null,onpointerup:null,onpointerupoutside:null,onrightclick:null,onrightdown:null,onrightup:null,onrightupoutside:null,ontap:null,ontouchcancel:null,ontouchend:null,ontouchendoutside:null,ontouchmove:null,onglobaltouchmove:null,ontouchstart:null,onwheel:null,get interactive(){return"dynamic"===this.eventMode||"static"===this.eventMode},set interactive(t){this.eventMode=t?"static":"passive"},_internalEventMode:void 0,get eventMode(){return this._internalEventMode??N.defaultEventMode},set eventMode(t){this._internalEventMode=t},isInteractive(){return"static"===this.eventMode||"dynamic"===this.eventMode},interactiveChildren:!0,hitArea:null,addEventListener(t,e,i){const n="boolean"==typeof i&&i||"object"==typeof i&&i.capture,o="object"==typeof i?i.signal:void 0,s="object"==typeof i&&!0===i.once,r="function"==typeof e?void 0:e;t=n?`${t}capture`:t;const a="function"==typeof e?e:e.handleEvent,h=this;o&&o.addEventListener("abort",(()=>{h.off(t,a,r)})),s?h.once(t,a,r):h.on(t,a,r)},removeEventListener(t,e,i){const n="function"==typeof e?void 0:e;t="boolean"==typeof i&&i||"object"==typeof i&&i.capture?`${t}capture`:t,e="function"==typeof e?e:e.handleEvent,this.off(t,e,n)},dispatchEvent(t){if(!(t instanceof r))throw new Error("Container cannot propagate events outside of the Federated Events API");return t.defaultPrevented=!1,t.path=null,t.target=this,t.manager.dispatchEvent(t),!t.defaultPrevented}};n.XO.add(N),o.mc.mixin(G),i(6312),i(5753),i(8928),i(5285),i(9305),i(6958),i(23),i(9147),i(8723),i(7252),i(4980)}}]);