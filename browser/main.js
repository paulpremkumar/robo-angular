import {
  AsyncPipe,
  CommonModule,
  DomAdapter,
  HashLocationStrategy,
  LOCATION_INITIALIZED,
  Location,
  LocationStrategy,
  NgClass,
  NgForOf,
  PLATFORM_BROWSER_ID,
  PathLocationStrategy,
  ToasterService,
  ViewportScroller,
  getDOM,
  setLoginData,
  setRootDomAdapter
} from "./chunk-SQAEXKZN.js";
import {
  loadProductFailure,
  loadProductSuccess,
  loadProducts,
  selectAllProduct
} from "./chunk-IFVXIMNH.js";
import {
  APP_BOOTSTRAP_LISTENER,
  APP_ID,
  ActionsSubject,
  ApplicationModule,
  ApplicationRef,
  Attribute,
  BehaviorSubject,
  CSP_NONCE,
  ChangeDetectorRef,
  Compiler,
  Component,
  ConnectableObservable,
  Console,
  ContentChildren,
  DOCUMENT,
  DestroyRef,
  Directive,
  EMPTY,
  ENVIRONMENT_INITIALIZER,
  ElementRef,
  EmptyError,
  EnvironmentInjector,
  ErrorHandler,
  EventEmitter,
  FEATURE_STATE_PROVIDER,
  HostAttributeToken,
  HostBinding,
  HostListener,
  HttpClient,
  HttpHeaders,
  INIT,
  INITIAL_STATE,
  INJECTOR_SCOPE,
  INTERNAL_APPLICATION_ERROR_HANDLER,
  IS_ENABLED_BLOCKING_INITIAL_NAVIGATION,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgModuleFactory$1,
  NgZone,
  Observable,
  Optional,
  Output,
  PLATFORM_ID,
  PLATFORM_INITIALIZER,
  PendingTasksInternal,
  Pipe,
  ROOT_STORE_PROVIDER,
  ReducerManagerDispatcher,
  ReducerObservable,
  Renderer2,
  RendererFactory2,
  RendererStyleFlags2,
  ReplaySubject,
  RuntimeError,
  ScannedActionsSubject,
  SecurityContext,
  SkipSelf,
  StateObservable,
  Store,
  StoreFeatureModule,
  StoreRootModule,
  Subject,
  Subscription,
  TESTABILITY,
  TESTABILITY_GETTER,
  Testability,
  TestabilityRegistry,
  TracingService,
  UPDATE,
  Version,
  ViewContainerRef,
  ViewEncapsulation,
  XSS_SECURITY_URL,
  XhrFactory,
  __assign,
  __awaiter,
  __extends,
  __generator,
  __rest,
  __spreadArray,
  __spreadProps,
  __spreadValues,
  _global,
  _sanitizeHtml,
  _sanitizeUrl,
  afterNextRender,
  allLeavingAnimations,
  allowSanitizationBypassAndThrow,
  booleanAttribute,
  bypassSanitizationTrustHtml,
  bypassSanitizationTrustResourceUrl,
  bypassSanitizationTrustScript,
  bypassSanitizationTrustStyle,
  bypassSanitizationTrustUrl,
  catchError,
  combineLatest,
  concat,
  concatMap,
  createAction,
  createEnvironmentInjector,
  createPlatformFactory,
  createReducer,
  debounceTime,
  defaultIfEmpty,
  defer,
  dematerialize,
  exhaustMap,
  filter,
  finalize,
  first,
  forwardRef,
  from,
  groupBy,
  ignoreElements,
  inject,
  input,
  internalCreateApplication,
  isInjectable,
  isNgModule,
  isObservable,
  isPromise,
  isStandalone,
  last,
  makeEnvironmentProviders,
  map,
  materialize,
  merge,
  mergeAll,
  mergeMap,
  observable,
  observeOn,
  of,
  on,
  parseCookieValue,
  performanceMarkFeature,
  pipe,
  platformCore,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideEnvironmentInitializer,
  provideHttpClient,
  provideStore,
  queueScheduler,
  refCount,
  reflectComponentType,
  runInInjectionContext,
  scan,
  setClassMetadata,
  setDocument,
  share,
  signal,
  skip,
  startWith,
  switchMap,
  take,
  takeLast,
  takeUntil,
  tap,
  throwError,
  timeout,
  toSignal,
  untracked,
  unwrapSafeValue,
  withInterceptors,
  withLatestFrom,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrlOrResourceUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-UEDKRKWX.js";

// node_modules/@angular/platform-browser/fesm2022/dom_renderer.mjs
var EVENT_MANAGER_PLUGINS = new InjectionToken(ngDevMode ? "EventManagerPlugins" : "");
var EventManager = class _EventManager {
  _zone;
  _plugins;
  _eventNameToPlugin = /* @__PURE__ */ new Map();
  /**
   * Initializes an instance of the event-manager service.
   */
  constructor(plugins, _zone) {
    this._zone = _zone;
    plugins.forEach((plugin) => {
      plugin.manager = this;
    });
    this._plugins = plugins.slice().reverse();
  }
  /**
   * Registers a handler for a specific element and event.
   *
   * @param element The HTML element to receive event notifications.
   * @param eventName The name of the event to listen for.
   * @param handler A function to call when the notification occurs. Receives the
   * event object as an argument.
   * @param options Options that configure how the event listener is bound.
   * @returns  A callback function that can be used to remove the handler.
   */
  addEventListener(element, eventName, handler, options) {
    const plugin = this._findPluginFor(eventName);
    return plugin.addEventListener(element, eventName, handler, options);
  }
  /**
   * Retrieves the compilation zone in which event listeners are registered.
   */
  getZone() {
    return this._zone;
  }
  /** @internal */
  _findPluginFor(eventName) {
    let plugin = this._eventNameToPlugin.get(eventName);
    if (plugin) {
      return plugin;
    }
    const plugins = this._plugins;
    plugin = plugins.find((plugin2) => plugin2.supports(eventName));
    if (!plugin) {
      throw new RuntimeError(5101, (typeof ngDevMode === "undefined" || ngDevMode) && `No event manager plugin found for event ${eventName}`);
    }
    this._eventNameToPlugin.set(eventName, plugin);
    return plugin;
  }
  static \u0275fac = function EventManager_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventManager)(\u0275\u0275inject(EVENT_MANAGER_PLUGINS), \u0275\u0275inject(NgZone));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _EventManager,
    factory: _EventManager.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventManager, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [EVENT_MANAGER_PLUGINS]
    }]
  }, {
    type: NgZone
  }], null);
})();
var EventManagerPlugin = class {
  _doc;
  // TODO: remove (has some usage in G3)
  constructor(_doc) {
    this._doc = _doc;
  }
  // Using non-null assertion because it's set by EventManager's constructor
  manager;
};
var APP_ID_ATTRIBUTE_NAME = "ng-app-id";
function removeElements(elements) {
  for (const element of elements) {
    element.remove();
  }
}
function createStyleElement(style, doc) {
  const styleElement = doc.createElement("style");
  styleElement.textContent = style;
  return styleElement;
}
function addServerStyles(doc, appId, inline, external) {
  const elements = doc.head?.querySelectorAll(`style[${APP_ID_ATTRIBUTE_NAME}="${appId}"],link[${APP_ID_ATTRIBUTE_NAME}="${appId}"]`);
  if (elements) {
    for (const styleElement of elements) {
      styleElement.removeAttribute(APP_ID_ATTRIBUTE_NAME);
      if (styleElement instanceof HTMLLinkElement) {
        external.set(styleElement.href.slice(styleElement.href.lastIndexOf("/") + 1), {
          usage: 0,
          elements: [styleElement]
        });
      } else if (styleElement.textContent) {
        inline.set(styleElement.textContent, {
          usage: 0,
          elements: [styleElement]
        });
      }
    }
  }
}
function createLinkElement(url, doc) {
  const linkElement = doc.createElement("link");
  linkElement.setAttribute("rel", "stylesheet");
  linkElement.setAttribute("href", url);
  return linkElement;
}
var SharedStylesHost = class _SharedStylesHost {
  doc;
  appId;
  nonce;
  /**
   * Provides usage information for active inline style content and associated HTML <style> elements.
   * Embedded styles typically originate from the `styles` metadata of a rendered component.
   */
  inline = /* @__PURE__ */ new Map();
  /**
   * Provides usage information for active external style URLs and the associated HTML <link> elements.
   * External styles typically originate from the `ɵɵExternalStylesFeature` of a rendered component.
   */
  external = /* @__PURE__ */ new Map();
  /**
   * Set of host DOM nodes that will have styles attached.
   */
  hosts = /* @__PURE__ */ new Set();
  constructor(doc, appId, nonce, platformId = {}) {
    this.doc = doc;
    this.appId = appId;
    this.nonce = nonce;
    addServerStyles(doc, appId, this.inline, this.external);
    this.hosts.add(doc.head);
  }
  /**
   * Adds embedded styles to the DOM via HTML `style` elements.
   * @param styles An array of style content strings.
   */
  addStyles(styles, urls) {
    for (const value of styles) {
      this.addUsage(value, this.inline, createStyleElement);
    }
    urls?.forEach((value) => this.addUsage(value, this.external, createLinkElement));
  }
  /**
   * Removes embedded styles from the DOM that were added as HTML `style` elements.
   * @param styles An array of style content strings.
   */
  removeStyles(styles, urls) {
    for (const value of styles) {
      this.removeUsage(value, this.inline);
    }
    urls?.forEach((value) => this.removeUsage(value, this.external));
  }
  addUsage(value, usages, creator) {
    const record = usages.get(value);
    if (record) {
      if ((typeof ngDevMode === "undefined" || ngDevMode) && record.usage === 0) {
        record.elements.forEach((element) => element.setAttribute("ng-style-reused", ""));
      }
      record.usage++;
    } else {
      usages.set(value, {
        usage: 1,
        elements: [...this.hosts].map((host2) => this.addElement(host2, creator(value, this.doc)))
      });
    }
  }
  removeUsage(value, usages) {
    const record = usages.get(value);
    if (record) {
      record.usage--;
      if (record.usage <= 0) {
        removeElements(record.elements);
        usages.delete(value);
      }
    }
  }
  ngOnDestroy() {
    for (const [, {
      elements
    }] of [...this.inline, ...this.external]) {
      removeElements(elements);
    }
    this.hosts.clear();
  }
  /**
   * Adds a host node to the set of style hosts and adds all existing style usage to
   * the newly added host node.
   *
   * This is currently only used for Shadow DOM encapsulation mode.
   */
  addHost(hostNode) {
    this.hosts.add(hostNode);
    for (const [style, {
      elements
    }] of this.inline) {
      elements.push(this.addElement(hostNode, createStyleElement(style, this.doc)));
    }
    for (const [url, {
      elements
    }] of this.external) {
      elements.push(this.addElement(hostNode, createLinkElement(url, this.doc)));
    }
  }
  removeHost(hostNode) {
    this.hosts.delete(hostNode);
  }
  addElement(host2, element) {
    if (this.nonce) {
      element.setAttribute("nonce", this.nonce);
    }
    if (false) {
      element.setAttribute(APP_ID_ATTRIBUTE_NAME, this.appId);
    }
    return host2.appendChild(element);
  }
  static \u0275fac = function SharedStylesHost_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedStylesHost)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(APP_ID), \u0275\u0275inject(CSP_NONCE, 8), \u0275\u0275inject(PLATFORM_ID));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SharedStylesHost,
    factory: _SharedStylesHost.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedStylesHost, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [APP_ID]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CSP_NONCE]
    }, {
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var NAMESPACE_URIS = {
  "svg": "http://www.w3.org/2000/svg",
  "xhtml": "http://www.w3.org/1999/xhtml",
  "xlink": "http://www.w3.org/1999/xlink",
  "xml": "http://www.w3.org/XML/1998/namespace",
  "xmlns": "http://www.w3.org/2000/xmlns/",
  "math": "http://www.w3.org/1998/Math/MathML"
};
var COMPONENT_REGEX = /%COMP%/g;
var SOURCEMAP_URL_REGEXP = /\/\*#\s*sourceMappingURL=(.+?)\s*\*\//;
var PROTOCOL_REGEXP = /^https?:/;
var COMPONENT_VARIABLE = "%COMP%";
var HOST_ATTR = `_nghost-${COMPONENT_VARIABLE}`;
var CONTENT_ATTR = `_ngcontent-${COMPONENT_VARIABLE}`;
var REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT = true;
var REMOVE_STYLES_ON_COMPONENT_DESTROY = new InjectionToken(ngDevMode ? "RemoveStylesOnCompDestroy" : "", {
  providedIn: "root",
  factory: () => REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT
});
function shimContentAttribute(componentShortId) {
  return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimHostAttribute(componentShortId) {
  return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimStylesContent(compId, styles) {
  return styles.map((s) => s.replace(COMPONENT_REGEX, compId));
}
function addBaseHrefToCssSourceMap(baseHref, styles) {
  if (!baseHref) {
    return styles;
  }
  const absoluteBaseHrefUrl = new URL(baseHref, "http://localhost");
  return styles.map((cssContent) => {
    if (!cssContent.includes("sourceMappingURL=")) {
      return cssContent;
    }
    return cssContent.replace(SOURCEMAP_URL_REGEXP, (_, sourceMapUrl) => {
      if (sourceMapUrl[0] === "/" || sourceMapUrl.startsWith("data:") || PROTOCOL_REGEXP.test(sourceMapUrl)) {
        return `/*# sourceMappingURL=${sourceMapUrl} */`;
      }
      const {
        pathname: resolvedSourceMapUrl
      } = new URL(sourceMapUrl, absoluteBaseHrefUrl);
      return `/*# sourceMappingURL=${resolvedSourceMapUrl} */`;
    });
  });
}
var DomRendererFactory2 = class _DomRendererFactory2 {
  eventManager;
  sharedStylesHost;
  appId;
  removeStylesOnCompDestroy;
  doc;
  platformId;
  ngZone;
  nonce;
  tracingService;
  rendererByCompId = /* @__PURE__ */ new Map();
  defaultRenderer;
  platformIsServer;
  constructor(eventManager, sharedStylesHost, appId, removeStylesOnCompDestroy, doc, platformId, ngZone, nonce = null, tracingService = null) {
    this.eventManager = eventManager;
    this.sharedStylesHost = sharedStylesHost;
    this.appId = appId;
    this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
    this.doc = doc;
    this.platformId = platformId;
    this.ngZone = ngZone;
    this.nonce = nonce;
    this.tracingService = tracingService;
    this.platformIsServer = false;
    this.defaultRenderer = new DefaultDomRenderer2(eventManager, doc, ngZone, this.platformIsServer, this.tracingService);
  }
  createRenderer(element, type) {
    if (!element || !type) {
      return this.defaultRenderer;
    }
    if (false) {
      type = __spreadProps(__spreadValues({}, type), {
        encapsulation: ViewEncapsulation.Emulated
      });
    }
    const renderer = this.getOrCreateRenderer(element, type);
    if (renderer instanceof EmulatedEncapsulationDomRenderer2) {
      renderer.applyToHost(element);
    } else if (renderer instanceof NoneEncapsulationDomRenderer) {
      renderer.applyStyles();
    }
    return renderer;
  }
  getOrCreateRenderer(element, type) {
    const rendererByCompId = this.rendererByCompId;
    let renderer = rendererByCompId.get(type.id);
    if (!renderer) {
      const doc = this.doc;
      const ngZone = this.ngZone;
      const eventManager = this.eventManager;
      const sharedStylesHost = this.sharedStylesHost;
      const removeStylesOnCompDestroy = this.removeStylesOnCompDestroy;
      const platformIsServer = this.platformIsServer;
      const tracingService = this.tracingService;
      switch (type.encapsulation) {
        case ViewEncapsulation.Emulated:
          renderer = new EmulatedEncapsulationDomRenderer2(eventManager, sharedStylesHost, type, this.appId, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, tracingService);
          break;
        case ViewEncapsulation.ShadowDom:
          return new ShadowDomRenderer(eventManager, sharedStylesHost, element, type, doc, ngZone, this.nonce, platformIsServer, tracingService);
        default:
          renderer = new NoneEncapsulationDomRenderer(eventManager, sharedStylesHost, type, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, tracingService);
          break;
      }
      rendererByCompId.set(type.id, renderer);
    }
    return renderer;
  }
  ngOnDestroy() {
    this.rendererByCompId.clear();
  }
  /**
   * Used during HMR to clear any cached data about a component.
   * @param componentId ID of the component that is being replaced.
   */
  componentReplaced(componentId) {
    this.rendererByCompId.delete(componentId);
  }
  static \u0275fac = function DomRendererFactory2_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomRendererFactory2)(\u0275\u0275inject(EventManager), \u0275\u0275inject(SharedStylesHost), \u0275\u0275inject(APP_ID), \u0275\u0275inject(REMOVE_STYLES_ON_COMPONENT_DESTROY), \u0275\u0275inject(DOCUMENT), \u0275\u0275inject(PLATFORM_ID), \u0275\u0275inject(NgZone), \u0275\u0275inject(CSP_NONCE), \u0275\u0275inject(TracingService, 8));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DomRendererFactory2,
    factory: _DomRendererFactory2.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomRendererFactory2, [{
    type: Injectable
  }], () => [{
    type: EventManager
  }, {
    type: SharedStylesHost
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [APP_ID]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [REMOVE_STYLES_ON_COMPONENT_DESTROY]
    }]
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CSP_NONCE]
    }]
  }, {
    type: TracingService,
    decorators: [{
      type: Inject,
      args: [TracingService]
    }, {
      type: Optional
    }]
  }], null);
})();
var DefaultDomRenderer2 = class {
  eventManager;
  doc;
  ngZone;
  platformIsServer;
  tracingService;
  data = /* @__PURE__ */ Object.create(null);
  /**
   * By default this renderer throws when encountering synthetic properties
   * This can be disabled for example by the AsyncAnimationRendererFactory
   */
  throwOnSyntheticProps = true;
  constructor(eventManager, doc, ngZone, platformIsServer, tracingService) {
    this.eventManager = eventManager;
    this.doc = doc;
    this.ngZone = ngZone;
    this.platformIsServer = platformIsServer;
    this.tracingService = tracingService;
  }
  destroy() {
  }
  destroyNode = null;
  createElement(name, namespace) {
    if (namespace) {
      return this.doc.createElementNS(NAMESPACE_URIS[namespace] || namespace, name);
    }
    return this.doc.createElement(name);
  }
  createComment(value) {
    return this.doc.createComment(value);
  }
  createText(value) {
    return this.doc.createTextNode(value);
  }
  appendChild(parent, newChild) {
    const targetParent = isTemplateNode(parent) ? parent.content : parent;
    targetParent.appendChild(newChild);
  }
  insertBefore(parent, newChild, refChild) {
    if (parent) {
      const targetParent = isTemplateNode(parent) ? parent.content : parent;
      targetParent.insertBefore(newChild, refChild);
    }
  }
  removeChild(_parent, oldChild) {
    oldChild.remove();
  }
  selectRootElement(selectorOrNode, preserveContent) {
    let el = typeof selectorOrNode === "string" ? this.doc.querySelector(selectorOrNode) : selectorOrNode;
    if (!el) {
      throw new RuntimeError(-5104, (typeof ngDevMode === "undefined" || ngDevMode) && `The selector "${selectorOrNode}" did not match any elements`);
    }
    if (!preserveContent) {
      el.textContent = "";
    }
    return el;
  }
  parentNode(node) {
    return node.parentNode;
  }
  nextSibling(node) {
    return node.nextSibling;
  }
  setAttribute(el, name, value, namespace) {
    if (namespace) {
      name = namespace + ":" + name;
      const namespaceUri = NAMESPACE_URIS[namespace];
      if (namespaceUri) {
        el.setAttributeNS(namespaceUri, name, value);
      } else {
        el.setAttribute(name, value);
      }
    } else {
      el.setAttribute(name, value);
    }
  }
  removeAttribute(el, name, namespace) {
    if (namespace) {
      const namespaceUri = NAMESPACE_URIS[namespace];
      if (namespaceUri) {
        el.removeAttributeNS(namespaceUri, name);
      } else {
        el.removeAttribute(`${namespace}:${name}`);
      }
    } else {
      el.removeAttribute(name);
    }
  }
  addClass(el, name) {
    el.classList.add(name);
  }
  removeClass(el, name) {
    el.classList.remove(name);
  }
  setStyle(el, style, value, flags) {
    if (flags & (RendererStyleFlags2.DashCase | RendererStyleFlags2.Important)) {
      el.style.setProperty(style, value, flags & RendererStyleFlags2.Important ? "important" : "");
    } else {
      el.style[style] = value;
    }
  }
  removeStyle(el, style, flags) {
    if (flags & RendererStyleFlags2.DashCase) {
      el.style.removeProperty(style);
    } else {
      el.style[style] = "";
    }
  }
  setProperty(el, name, value) {
    if (el == null) {
      return;
    }
    (typeof ngDevMode === "undefined" || ngDevMode) && this.throwOnSyntheticProps && checkNoSyntheticProp(name, "property");
    el[name] = value;
  }
  setValue(node, value) {
    node.nodeValue = value;
  }
  listen(target, event, callback, options) {
    (typeof ngDevMode === "undefined" || ngDevMode) && this.throwOnSyntheticProps && checkNoSyntheticProp(event, "listener");
    if (typeof target === "string") {
      target = getDOM().getGlobalEventTarget(this.doc, target);
      if (!target) {
        throw new RuntimeError(5102, (typeof ngDevMode === "undefined" || ngDevMode) && `Unsupported event target ${target} for event ${event}`);
      }
    }
    let wrappedCallback = this.decoratePreventDefault(callback);
    if (this.tracingService?.wrapEventListener) {
      wrappedCallback = this.tracingService.wrapEventListener(target, event, wrappedCallback);
    }
    return this.eventManager.addEventListener(target, event, wrappedCallback, options);
  }
  decoratePreventDefault(eventHandler) {
    return (event) => {
      if (event === "__ngUnwrap__") {
        return eventHandler;
      }
      const allowDefaultBehavior = false ? this.ngZone.runGuarded(() => eventHandler(event)) : eventHandler(event);
      if (allowDefaultBehavior === false) {
        event.preventDefault();
      }
      return void 0;
    };
  }
};
var AT_CHARCODE = (() => "@".charCodeAt(0))();
function checkNoSyntheticProp(name, nameKind) {
  if (name.charCodeAt(0) === AT_CHARCODE) {
    throw new RuntimeError(5105, `Unexpected synthetic ${nameKind} ${name} found. Please make sure that:
  - Make sure \`provideAnimationsAsync()\`, \`provideAnimations()\` or \`provideNoopAnimations()\` call was added to a list of providers used to bootstrap an application.
  - There is a corresponding animation configuration named \`${name}\` defined in the \`animations\` field of the \`@Component\` decorator (see https://angular.dev/api/core/Component#animations).`);
  }
}
function isTemplateNode(node) {
  return node.tagName === "TEMPLATE" && node.content !== void 0;
}
var ShadowDomRenderer = class extends DefaultDomRenderer2 {
  sharedStylesHost;
  hostEl;
  shadowRoot;
  constructor(eventManager, sharedStylesHost, hostEl, component, doc, ngZone, nonce, platformIsServer, tracingService) {
    super(eventManager, doc, ngZone, platformIsServer, tracingService);
    this.sharedStylesHost = sharedStylesHost;
    this.hostEl = hostEl;
    this.shadowRoot = hostEl.attachShadow({
      mode: "open"
    });
    this.sharedStylesHost.addHost(this.shadowRoot);
    let styles = component.styles;
    if (ngDevMode) {
      const baseHref = getDOM().getBaseHref(doc) ?? "";
      styles = addBaseHrefToCssSourceMap(baseHref, styles);
    }
    styles = shimStylesContent(component.id, styles);
    for (const style of styles) {
      const styleEl = document.createElement("style");
      if (nonce) {
        styleEl.setAttribute("nonce", nonce);
      }
      styleEl.textContent = style;
      this.shadowRoot.appendChild(styleEl);
    }
    const styleUrls = component.getExternalStyles?.();
    if (styleUrls) {
      for (const styleUrl of styleUrls) {
        const linkEl = createLinkElement(styleUrl, doc);
        if (nonce) {
          linkEl.setAttribute("nonce", nonce);
        }
        this.shadowRoot.appendChild(linkEl);
      }
    }
  }
  nodeOrShadowRoot(node) {
    return node === this.hostEl ? this.shadowRoot : node;
  }
  appendChild(parent, newChild) {
    return super.appendChild(this.nodeOrShadowRoot(parent), newChild);
  }
  insertBefore(parent, newChild, refChild) {
    return super.insertBefore(this.nodeOrShadowRoot(parent), newChild, refChild);
  }
  removeChild(_parent, oldChild) {
    return super.removeChild(null, oldChild);
  }
  parentNode(node) {
    return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(node)));
  }
  destroy() {
    this.sharedStylesHost.removeHost(this.shadowRoot);
  }
};
var NoneEncapsulationDomRenderer = class extends DefaultDomRenderer2 {
  sharedStylesHost;
  removeStylesOnCompDestroy;
  styles;
  styleUrls;
  constructor(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, tracingService, compId) {
    super(eventManager, doc, ngZone, platformIsServer, tracingService);
    this.sharedStylesHost = sharedStylesHost;
    this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
    let styles = component.styles;
    if (ngDevMode) {
      const baseHref = getDOM().getBaseHref(doc) ?? "";
      styles = addBaseHrefToCssSourceMap(baseHref, styles);
    }
    this.styles = compId ? shimStylesContent(compId, styles) : styles;
    this.styleUrls = component.getExternalStyles?.(compId);
  }
  applyStyles() {
    this.sharedStylesHost.addStyles(this.styles, this.styleUrls);
  }
  destroy() {
    if (!this.removeStylesOnCompDestroy) {
      return;
    }
    if (allLeavingAnimations.size === 0) {
      this.sharedStylesHost.removeStyles(this.styles, this.styleUrls);
    }
  }
};
var EmulatedEncapsulationDomRenderer2 = class extends NoneEncapsulationDomRenderer {
  contentAttr;
  hostAttr;
  constructor(eventManager, sharedStylesHost, component, appId, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, tracingService) {
    const compId = appId + "-" + component.id;
    super(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, tracingService, compId);
    this.contentAttr = shimContentAttribute(compId);
    this.hostAttr = shimHostAttribute(compId);
  }
  applyToHost(element) {
    this.applyStyles();
    this.setAttribute(element, this.hostAttr, "");
  }
  createElement(parent, name) {
    const el = super.createElement(parent, name);
    super.setAttribute(el, this.contentAttr, "");
    return el;
  }
};

// node_modules/@angular/platform-browser/fesm2022/browser.mjs
var BrowserDomAdapter = class _BrowserDomAdapter extends DomAdapter {
  supportsDOMEvents = true;
  static makeCurrent() {
    setRootDomAdapter(new _BrowserDomAdapter());
  }
  onAndCancel(el, evt, listener, options) {
    el.addEventListener(evt, listener, options);
    return () => {
      el.removeEventListener(evt, listener, options);
    };
  }
  dispatchEvent(el, evt) {
    el.dispatchEvent(evt);
  }
  remove(node) {
    node.remove();
  }
  createElement(tagName, doc) {
    doc = doc || this.getDefaultDocument();
    return doc.createElement(tagName);
  }
  createHtmlDocument() {
    return document.implementation.createHTMLDocument("fakeTitle");
  }
  getDefaultDocument() {
    return document;
  }
  isElementNode(node) {
    return node.nodeType === Node.ELEMENT_NODE;
  }
  isShadowRoot(node) {
    return node instanceof DocumentFragment;
  }
  /** @deprecated No longer being used in Ivy code. To be removed in version 14. */
  getGlobalEventTarget(doc, target) {
    if (target === "window") {
      return window;
    }
    if (target === "document") {
      return doc;
    }
    if (target === "body") {
      return doc.body;
    }
    return null;
  }
  getBaseHref(doc) {
    const href = getBaseElementHref();
    return href == null ? null : relativePath(href);
  }
  resetBaseElement() {
    baseElement = null;
  }
  getUserAgent() {
    return window.navigator.userAgent;
  }
  getCookie(name) {
    return parseCookieValue(document.cookie, name);
  }
};
var baseElement = null;
function getBaseElementHref() {
  baseElement = baseElement || document.head.querySelector("base");
  return baseElement ? baseElement.getAttribute("href") : null;
}
function relativePath(url) {
  return new URL(url, document.baseURI).pathname;
}
var BrowserGetTestability = class {
  addToWindow(registry) {
    _global["getAngularTestability"] = (elem, findInAncestors = true) => {
      const testability = registry.findTestabilityInTree(elem, findInAncestors);
      if (testability == null) {
        throw new RuntimeError(5103, (typeof ngDevMode === "undefined" || ngDevMode) && "Could not find testability for element.");
      }
      return testability;
    };
    _global["getAllAngularTestabilities"] = () => registry.getAllTestabilities();
    _global["getAllAngularRootElements"] = () => registry.getAllRootElements();
    const whenAllStable = (callback) => {
      const testabilities = _global["getAllAngularTestabilities"]();
      let count = testabilities.length;
      const decrement = function() {
        count--;
        if (count == 0) {
          callback();
        }
      };
      testabilities.forEach((testability) => {
        testability.whenStable(decrement);
      });
    };
    if (!_global["frameworkStabilizers"]) {
      _global["frameworkStabilizers"] = [];
    }
    _global["frameworkStabilizers"].push(whenAllStable);
  }
  findTestabilityInTree(registry, elem, findInAncestors) {
    if (elem == null) {
      return null;
    }
    const t = registry.getTestability(elem);
    if (t != null) {
      return t;
    } else if (!findInAncestors) {
      return null;
    }
    if (getDOM().isShadowRoot(elem)) {
      return this.findTestabilityInTree(registry, elem.host, true);
    }
    return this.findTestabilityInTree(registry, elem.parentElement, true);
  }
};
var BrowserXhr = class _BrowserXhr {
  build() {
    return new XMLHttpRequest();
  }
  static \u0275fac = function BrowserXhr_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserXhr)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BrowserXhr,
    factory: _BrowserXhr.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserXhr, [{
    type: Injectable
  }], null, null);
})();
var DomEventsPlugin = class _DomEventsPlugin extends EventManagerPlugin {
  constructor(doc) {
    super(doc);
  }
  // This plugin should come last in the list of plugins, because it accepts all
  // events.
  supports(eventName) {
    return true;
  }
  addEventListener(element, eventName, handler, options) {
    element.addEventListener(eventName, handler, options);
    return () => this.removeEventListener(element, eventName, handler, options);
  }
  removeEventListener(target, eventName, callback, options) {
    return target.removeEventListener(eventName, callback, options);
  }
  static \u0275fac = function DomEventsPlugin_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomEventsPlugin)(\u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DomEventsPlugin,
    factory: _DomEventsPlugin.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomEventsPlugin, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var MODIFIER_KEYS = ["alt", "control", "meta", "shift"];
var _keyMap = {
  "\b": "Backspace",
  "	": "Tab",
  "\x7F": "Delete",
  "\x1B": "Escape",
  "Del": "Delete",
  "Esc": "Escape",
  "Left": "ArrowLeft",
  "Right": "ArrowRight",
  "Up": "ArrowUp",
  "Down": "ArrowDown",
  "Menu": "ContextMenu",
  "Scroll": "ScrollLock",
  "Win": "OS"
};
var MODIFIER_KEY_GETTERS = {
  "alt": (event) => event.altKey,
  "control": (event) => event.ctrlKey,
  "meta": (event) => event.metaKey,
  "shift": (event) => event.shiftKey
};
var KeyEventsPlugin = class _KeyEventsPlugin extends EventManagerPlugin {
  /**
   * Initializes an instance of the browser plug-in.
   * @param doc The document in which key events will be detected.
   */
  constructor(doc) {
    super(doc);
  }
  /**
   * Reports whether a named key event is supported.
   * @param eventName The event name to query.
   * @return True if the named key event is supported.
   */
  supports(eventName) {
    return _KeyEventsPlugin.parseEventName(eventName) != null;
  }
  /**
   * Registers a handler for a specific element and key event.
   * @param element The HTML element to receive event notifications.
   * @param eventName The name of the key event to listen for.
   * @param handler A function to call when the notification occurs. Receives the
   * event object as an argument.
   * @returns The key event that was registered.
   */
  addEventListener(element, eventName, handler, options) {
    const parsedEvent = _KeyEventsPlugin.parseEventName(eventName);
    const outsideHandler = _KeyEventsPlugin.eventCallback(parsedEvent["fullKey"], handler, this.manager.getZone());
    return this.manager.getZone().runOutsideAngular(() => {
      return getDOM().onAndCancel(element, parsedEvent["domEventName"], outsideHandler, options);
    });
  }
  /**
   * Parses the user provided full keyboard event definition and normalizes it for
   * later internal use. It ensures the string is all lowercase, converts special
   * characters to a standard spelling, and orders all the values consistently.
   *
   * @param eventName The name of the key event to listen for.
   * @returns an object with the full, normalized string, and the dom event name
   * or null in the case when the event doesn't match a keyboard event.
   */
  static parseEventName(eventName) {
    const parts = eventName.toLowerCase().split(".");
    const domEventName = parts.shift();
    if (parts.length === 0 || !(domEventName === "keydown" || domEventName === "keyup")) {
      return null;
    }
    const key = _KeyEventsPlugin._normalizeKey(parts.pop());
    let fullKey = "";
    let codeIX = parts.indexOf("code");
    if (codeIX > -1) {
      parts.splice(codeIX, 1);
      fullKey = "code.";
    }
    MODIFIER_KEYS.forEach((modifierName) => {
      const index = parts.indexOf(modifierName);
      if (index > -1) {
        parts.splice(index, 1);
        fullKey += modifierName + ".";
      }
    });
    fullKey += key;
    if (parts.length != 0 || key.length === 0) {
      return null;
    }
    const result2 = {};
    result2["domEventName"] = domEventName;
    result2["fullKey"] = fullKey;
    return result2;
  }
  /**
   * Determines whether the actual keys pressed match the configured key code string.
   * The `fullKeyCode` event is normalized in the `parseEventName` method when the
   * event is attached to the DOM during the `addEventListener` call. This is unseen
   * by the end user and is normalized for internal consistency and parsing.
   *
   * @param event The keyboard event.
   * @param fullKeyCode The normalized user defined expected key event string
   * @returns boolean.
   */
  static matchEventFullKeyCode(event, fullKeyCode) {
    let keycode = _keyMap[event.key] || event.key;
    let key = "";
    if (fullKeyCode.indexOf("code.") > -1) {
      keycode = event.code;
      key = "code.";
    }
    if (keycode == null || !keycode) return false;
    keycode = keycode.toLowerCase();
    if (keycode === " ") {
      keycode = "space";
    } else if (keycode === ".") {
      keycode = "dot";
    }
    MODIFIER_KEYS.forEach((modifierName) => {
      if (modifierName !== keycode) {
        const modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
        if (modifierGetter(event)) {
          key += modifierName + ".";
        }
      }
    });
    key += keycode;
    return key === fullKeyCode;
  }
  /**
   * Configures a handler callback for a key event.
   * @param fullKey The event name that combines all simultaneous keystrokes.
   * @param handler The function that responds to the key event.
   * @param zone The zone in which the event occurred.
   * @returns A callback function.
   */
  static eventCallback(fullKey, handler, zone) {
    return (event) => {
      if (_KeyEventsPlugin.matchEventFullKeyCode(event, fullKey)) {
        zone.runGuarded(() => handler(event));
      }
    };
  }
  /** @internal */
  static _normalizeKey(keyName) {
    return keyName === "esc" ? "escape" : keyName;
  }
  static \u0275fac = function KeyEventsPlugin_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KeyEventsPlugin)(\u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _KeyEventsPlugin,
    factory: _KeyEventsPlugin.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KeyEventsPlugin, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
function bootstrapApplication(rootComponent, options, context) {
  const config = __spreadValues({
    rootComponent,
    platformRef: context?.platformRef
  }, createProvidersConfig(options));
  if (false) {
    return resolveComponentResources(fetch).catch((error) => {
      console.error(error);
      return Promise.resolve();
    }).then(() => internalCreateApplication(config));
  }
  return internalCreateApplication(config);
}
function createProvidersConfig(options) {
  return {
    appProviders: [...BROWSER_MODULE_PROVIDERS, ...options?.providers ?? []],
    platformProviders: INTERNAL_BROWSER_PLATFORM_PROVIDERS
  };
}
function initDomAdapter() {
  BrowserDomAdapter.makeCurrent();
}
function errorHandler() {
  return new ErrorHandler();
}
function _document() {
  setDocument(document);
  return document;
}
var INTERNAL_BROWSER_PLATFORM_PROVIDERS = [{
  provide: PLATFORM_ID,
  useValue: PLATFORM_BROWSER_ID
}, {
  provide: PLATFORM_INITIALIZER,
  useValue: initDomAdapter,
  multi: true
}, {
  provide: DOCUMENT,
  useFactory: _document
}];
var platformBrowser = createPlatformFactory(platformCore, "browser", INTERNAL_BROWSER_PLATFORM_PROVIDERS);
var BROWSER_MODULE_PROVIDERS_MARKER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "BrowserModule Providers Marker" : "");
var TESTABILITY_PROVIDERS = [{
  provide: TESTABILITY_GETTER,
  useClass: BrowserGetTestability
}, {
  provide: TESTABILITY,
  useClass: Testability,
  deps: [NgZone, TestabilityRegistry, TESTABILITY_GETTER]
}, {
  provide: Testability,
  // Also provide as `Testability` for backwards-compatibility.
  useClass: Testability,
  deps: [NgZone, TestabilityRegistry, TESTABILITY_GETTER]
}];
var BROWSER_MODULE_PROVIDERS = [{
  provide: INJECTOR_SCOPE,
  useValue: "root"
}, {
  provide: ErrorHandler,
  useFactory: errorHandler
}, {
  provide: EVENT_MANAGER_PLUGINS,
  useClass: DomEventsPlugin,
  multi: true,
  deps: [DOCUMENT]
}, {
  provide: EVENT_MANAGER_PLUGINS,
  useClass: KeyEventsPlugin,
  multi: true,
  deps: [DOCUMENT]
}, DomRendererFactory2, SharedStylesHost, EventManager, {
  provide: RendererFactory2,
  useExisting: DomRendererFactory2
}, {
  provide: XhrFactory,
  useClass: BrowserXhr
}, typeof ngDevMode === "undefined" || ngDevMode ? {
  provide: BROWSER_MODULE_PROVIDERS_MARKER,
  useValue: true
} : []];
var BrowserModule = class _BrowserModule {
  constructor() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const providersAlreadyPresent = inject(BROWSER_MODULE_PROVIDERS_MARKER, {
        optional: true,
        skipSelf: true
      });
      if (providersAlreadyPresent) {
        throw new RuntimeError(5100, `Providers from the \`BrowserModule\` have already been loaded. If you need access to common directives such as NgIf and NgFor, import the \`CommonModule\` instead.`);
      }
    }
  }
  static \u0275fac = function BrowserModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BrowserModule,
    exports: [CommonModule, ApplicationModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [...BROWSER_MODULE_PROVIDERS, ...TESTABILITY_PROVIDERS],
    imports: [CommonModule, ApplicationModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserModule, [{
    type: NgModule,
    args: [{
      providers: [...BROWSER_MODULE_PROVIDERS, ...TESTABILITY_PROVIDERS],
      exports: [CommonModule, ApplicationModule]
    }]
  }], () => [], null);
})();

// node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
var Meta = class _Meta {
  _doc;
  _dom;
  constructor(_doc) {
    this._doc = _doc;
    this._dom = getDOM();
  }
  /**
   * Retrieves or creates a specific `<meta>` tag element in the current HTML document.
   * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
   * values in the provided tag definition, and verifies that all other attribute values are equal.
   * If an existing element is found, it is returned and is not modified in any way.
   * @param tag The definition of a `<meta>` element to match or create.
   * @param forceCreation True to create a new element without checking whether one already exists.
   * @returns The existing element with the same attributes and values if found,
   * the new element if no match is found, or `null` if the tag parameter is not defined.
   */
  addTag(tag, forceCreation = false) {
    if (!tag) return null;
    return this._getOrCreateElement(tag, forceCreation);
  }
  /**
   * Retrieves or creates a set of `<meta>` tag elements in the current HTML document.
   * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
   * values in the provided tag definition, and verifies that all other attribute values are equal.
   * @param tags An array of tag definitions to match or create.
   * @param forceCreation True to create new elements without checking whether they already exist.
   * @returns The matching elements if found, or the new elements.
   */
  addTags(tags, forceCreation = false) {
    if (!tags) return [];
    return tags.reduce((result2, tag) => {
      if (tag) {
        result2.push(this._getOrCreateElement(tag, forceCreation));
      }
      return result2;
    }, []);
  }
  /**
   * Retrieves a `<meta>` tag element in the current HTML document.
   * @param attrSelector The tag attribute and value to match against, in the format
   * `"tag_attribute='value string'"`.
   * @returns The matching element, if any.
   */
  getTag(attrSelector) {
    if (!attrSelector) return null;
    return this._doc.querySelector(`meta[${attrSelector}]`) || null;
  }
  /**
   * Retrieves a set of `<meta>` tag elements in the current HTML document.
   * @param attrSelector The tag attribute and value to match against, in the format
   * `"tag_attribute='value string'"`.
   * @returns The matching elements, if any.
   */
  getTags(attrSelector) {
    if (!attrSelector) return [];
    const list = this._doc.querySelectorAll(`meta[${attrSelector}]`);
    return list ? [].slice.call(list) : [];
  }
  /**
   * Modifies an existing `<meta>` tag element in the current HTML document.
   * @param tag The tag description with which to replace the existing tag content.
   * @param selector A tag attribute and value to match against, to identify
   * an existing tag. A string in the format `"tag_attribute=`value string`"`.
   * If not supplied, matches a tag with the same `name` or `property` attribute value as the
   * replacement tag.
   * @return The modified element.
   */
  updateTag(tag, selector) {
    if (!tag) return null;
    selector = selector || this._parseSelector(tag);
    const meta = this.getTag(selector);
    if (meta) {
      return this._setMetaElementAttributes(tag, meta);
    }
    return this._getOrCreateElement(tag, true);
  }
  /**
   * Removes an existing `<meta>` tag element from the current HTML document.
   * @param attrSelector A tag attribute and value to match against, to identify
   * an existing tag. A string in the format `"tag_attribute=`value string`"`.
   */
  removeTag(attrSelector) {
    this.removeTagElement(this.getTag(attrSelector));
  }
  /**
   * Removes an existing `<meta>` tag element from the current HTML document.
   * @param meta The tag definition to match against to identify an existing tag.
   */
  removeTagElement(meta) {
    if (meta) {
      this._dom.remove(meta);
    }
  }
  _getOrCreateElement(meta, forceCreation = false) {
    if (!forceCreation) {
      const selector = this._parseSelector(meta);
      const elem = this.getTags(selector).filter((elem2) => this._containsAttributes(meta, elem2))[0];
      if (elem !== void 0) return elem;
    }
    const element = this._dom.createElement("meta");
    this._setMetaElementAttributes(meta, element);
    const head = this._doc.getElementsByTagName("head")[0];
    head.appendChild(element);
    return element;
  }
  _setMetaElementAttributes(tag, el) {
    Object.keys(tag).forEach((prop) => el.setAttribute(this._getMetaKeyMap(prop), tag[prop]));
    return el;
  }
  _parseSelector(tag) {
    const attr = tag.name ? "name" : "property";
    return `${attr}="${tag[attr]}"`;
  }
  _containsAttributes(tag, elem) {
    return Object.keys(tag).every((key) => elem.getAttribute(this._getMetaKeyMap(key)) === tag[key]);
  }
  _getMetaKeyMap(prop) {
    return META_KEYS_MAP[prop] || prop;
  }
  static \u0275fac = function Meta_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Meta)(\u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Meta,
    factory: _Meta.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Meta, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var META_KEYS_MAP = {
  httpEquiv: "http-equiv"
};
var Title = class _Title {
  _doc;
  constructor(_doc) {
    this._doc = _doc;
  }
  /**
   * Get the title of the current HTML document.
   */
  getTitle() {
    return this._doc.title;
  }
  /**
   * Set the title of the current HTML document.
   * @param newTitle
   */
  setTitle(newTitle) {
    this._doc.title = newTitle || "";
  }
  static \u0275fac = function Title_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Title)(\u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Title,
    factory: _Title.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Title, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var EVENT_NAMES = {
  // pan
  "pan": true,
  "panstart": true,
  "panmove": true,
  "panend": true,
  "pancancel": true,
  "panleft": true,
  "panright": true,
  "panup": true,
  "pandown": true,
  // pinch
  "pinch": true,
  "pinchstart": true,
  "pinchmove": true,
  "pinchend": true,
  "pinchcancel": true,
  "pinchin": true,
  "pinchout": true,
  // press
  "press": true,
  "pressup": true,
  // rotate
  "rotate": true,
  "rotatestart": true,
  "rotatemove": true,
  "rotateend": true,
  "rotatecancel": true,
  // swipe
  "swipe": true,
  "swipeleft": true,
  "swiperight": true,
  "swipeup": true,
  "swipedown": true,
  // tap
  "tap": true,
  "doubletap": true
};
var HAMMER_GESTURE_CONFIG = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "HammerGestureConfig" : "");
var HAMMER_LOADER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "HammerLoader" : "");
var HammerGestureConfig = class _HammerGestureConfig {
  /**
   * A set of supported event names for gestures to be used in Angular.
   * Angular supports all built-in recognizers, as listed in
   * [HammerJS documentation](https://hammerjs.github.io/).
   */
  events = [];
  /**
   * Maps gesture event names to a set of configuration options
   * that specify overrides to the default values for specific properties.
   *
   * The key is a supported event name to be configured,
   * and the options object contains a set of properties, with override values
   * to be applied to the named recognizer event.
   * For example, to disable recognition of the rotate event, specify
   *  `{"rotate": {"enable": false}}`.
   *
   * Properties that are not present take the HammerJS default values.
   * For information about which properties are supported for which events,
   * and their allowed and default values, see
   * [HammerJS documentation](https://hammerjs.github.io/).
   *
   */
  overrides = {};
  /**
   * Properties whose default values can be overridden for a given event.
   * Different sets of properties apply to different events.
   * For information about which properties are supported for which events,
   * and their allowed and default values, see
   * [HammerJS documentation](https://hammerjs.github.io/).
   */
  options;
  /**
   * Creates a [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
   * and attaches it to a given HTML element.
   * @param element The element that will recognize gestures.
   * @returns A HammerJS event-manager object.
   */
  buildHammer(element) {
    const mc = new Hammer(element, this.options);
    mc.get("pinch").set({
      enable: true
    });
    mc.get("rotate").set({
      enable: true
    });
    for (const eventName in this.overrides) {
      mc.get(eventName).set(this.overrides[eventName]);
    }
    return mc;
  }
  static \u0275fac = function HammerGestureConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HammerGestureConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _HammerGestureConfig,
    factory: _HammerGestureConfig.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HammerGestureConfig, [{
    type: Injectable
  }], null, null);
})();
var HammerGesturesPlugin = class _HammerGesturesPlugin extends EventManagerPlugin {
  _config;
  _injector;
  loader;
  _loaderPromise = null;
  constructor(doc, _config, _injector, loader) {
    super(doc);
    this._config = _config;
    this._injector = _injector;
    this.loader = loader;
  }
  supports(eventName) {
    if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
      return false;
    }
    if (!window.Hammer && !this.loader) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        const _console = this._injector.get(Console);
        _console.warn(`The "${eventName}" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.`);
      }
      return false;
    }
    return true;
  }
  addEventListener(element, eventName, handler) {
    const zone = this.manager.getZone();
    eventName = eventName.toLowerCase();
    if (!window.Hammer && this.loader) {
      this._loaderPromise = this._loaderPromise || zone.runOutsideAngular(() => this.loader());
      let cancelRegistration = false;
      let deregister = () => {
        cancelRegistration = true;
      };
      zone.runOutsideAngular(() => this._loaderPromise.then(() => {
        if (!window.Hammer) {
          if (typeof ngDevMode === "undefined" || ngDevMode) {
            const _console = this._injector.get(Console);
            _console.warn(`The custom HAMMER_LOADER completed, but Hammer.JS is not present.`);
          }
          deregister = () => {
          };
          return;
        }
        if (!cancelRegistration) {
          deregister = this.addEventListener(element, eventName, handler);
        }
      }).catch(() => {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          const _console = this._injector.get(Console);
          _console.warn(`The "${eventName}" event cannot be bound because the custom Hammer.JS loader failed.`);
        }
        deregister = () => {
        };
      }));
      return () => {
        deregister();
      };
    }
    return zone.runOutsideAngular(() => {
      const mc = this._config.buildHammer(element);
      const callback = function(eventObj) {
        zone.runGuarded(function() {
          handler(eventObj);
        });
      };
      mc.on(eventName, callback);
      return () => {
        mc.off(eventName, callback);
        if (typeof mc.destroy === "function") {
          mc.destroy();
        }
      };
    });
  }
  isCustomEvent(eventName) {
    return this._config.events.indexOf(eventName) > -1;
  }
  static \u0275fac = function HammerGesturesPlugin_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HammerGesturesPlugin)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(HAMMER_GESTURE_CONFIG), \u0275\u0275inject(Injector), \u0275\u0275inject(HAMMER_LOADER, 8));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _HammerGesturesPlugin,
    factory: _HammerGesturesPlugin.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HammerGesturesPlugin, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: HammerGestureConfig,
    decorators: [{
      type: Inject,
      args: [HAMMER_GESTURE_CONFIG]
    }]
  }, {
    type: Injector
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [HAMMER_LOADER]
    }]
  }], null);
})();
var HammerModule = class _HammerModule {
  static \u0275fac = function HammerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HammerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _HammerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [{
      provide: EVENT_MANAGER_PLUGINS,
      useClass: HammerGesturesPlugin,
      multi: true,
      deps: [DOCUMENT, HAMMER_GESTURE_CONFIG, Injector, [new Optional(), HAMMER_LOADER]]
    }, {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerGestureConfig
    }]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HammerModule, [{
    type: NgModule,
    args: [{
      providers: [{
        provide: EVENT_MANAGER_PLUGINS,
        useClass: HammerGesturesPlugin,
        multi: true,
        deps: [DOCUMENT, HAMMER_GESTURE_CONFIG, Injector, [new Optional(), HAMMER_LOADER]]
      }, {
        provide: HAMMER_GESTURE_CONFIG,
        useClass: HammerGestureConfig
      }]
    }]
  }], null, null);
})();
var DomSanitizer = class _DomSanitizer {
  static \u0275fac = function DomSanitizer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomSanitizer)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DomSanitizer,
    factory: function DomSanitizer_Factory(__ngFactoryType__) {
      let __ngConditionalFactory__ = null;
      if (__ngFactoryType__) {
        __ngConditionalFactory__ = new (__ngFactoryType__ || _DomSanitizer)();
      } else {
        __ngConditionalFactory__ = \u0275\u0275inject(DomSanitizerImpl);
      }
      return __ngConditionalFactory__;
    },
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomSanitizer, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: forwardRef(() => DomSanitizerImpl)
    }]
  }], null, null);
})();
var DomSanitizerImpl = class _DomSanitizerImpl extends DomSanitizer {
  _doc;
  constructor(_doc) {
    super();
    this._doc = _doc;
  }
  sanitize(ctx, value) {
    if (value == null) return null;
    switch (ctx) {
      case SecurityContext.NONE:
        return value;
      case SecurityContext.HTML:
        if (allowSanitizationBypassAndThrow(
          value,
          "HTML"
          /* BypassType.Html */
        )) {
          return unwrapSafeValue(value);
        }
        return _sanitizeHtml(this._doc, String(value)).toString();
      case SecurityContext.STYLE:
        if (allowSanitizationBypassAndThrow(
          value,
          "Style"
          /* BypassType.Style */
        )) {
          return unwrapSafeValue(value);
        }
        return value;
      case SecurityContext.SCRIPT:
        if (allowSanitizationBypassAndThrow(
          value,
          "Script"
          /* BypassType.Script */
        )) {
          return unwrapSafeValue(value);
        }
        throw new RuntimeError(5200, (typeof ngDevMode === "undefined" || ngDevMode) && "unsafe value used in a script context");
      case SecurityContext.URL:
        if (allowSanitizationBypassAndThrow(
          value,
          "URL"
          /* BypassType.Url */
        )) {
          return unwrapSafeValue(value);
        }
        return _sanitizeUrl(String(value));
      case SecurityContext.RESOURCE_URL:
        if (allowSanitizationBypassAndThrow(
          value,
          "ResourceURL"
          /* BypassType.ResourceUrl */
        )) {
          return unwrapSafeValue(value);
        }
        throw new RuntimeError(5201, (typeof ngDevMode === "undefined" || ngDevMode) && `unsafe value used in a resource URL context (see ${XSS_SECURITY_URL})`);
      default:
        throw new RuntimeError(5202, (typeof ngDevMode === "undefined" || ngDevMode) && `Unexpected SecurityContext ${ctx} (see ${XSS_SECURITY_URL})`);
    }
  }
  bypassSecurityTrustHtml(value) {
    return bypassSanitizationTrustHtml(value);
  }
  bypassSecurityTrustStyle(value) {
    return bypassSanitizationTrustStyle(value);
  }
  bypassSecurityTrustScript(value) {
    return bypassSanitizationTrustScript(value);
  }
  bypassSecurityTrustUrl(value) {
    return bypassSanitizationTrustUrl(value);
  }
  bypassSecurityTrustResourceUrl(value) {
    return bypassSanitizationTrustResourceUrl(value);
  }
  static \u0275fac = function DomSanitizerImpl_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomSanitizerImpl)(\u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DomSanitizerImpl,
    factory: _DomSanitizerImpl.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomSanitizerImpl, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var HydrationFeatureKind;
(function(HydrationFeatureKind2) {
  HydrationFeatureKind2[HydrationFeatureKind2["NoHttpTransferCache"] = 0] = "NoHttpTransferCache";
  HydrationFeatureKind2[HydrationFeatureKind2["HttpTransferCacheOptions"] = 1] = "HttpTransferCacheOptions";
  HydrationFeatureKind2[HydrationFeatureKind2["I18nSupport"] = 2] = "I18nSupport";
  HydrationFeatureKind2[HydrationFeatureKind2["EventReplay"] = 3] = "EventReplay";
  HydrationFeatureKind2[HydrationFeatureKind2["IncrementalHydration"] = 4] = "IncrementalHydration";
})(HydrationFeatureKind || (HydrationFeatureKind = {}));
var VERSION = new Version("20.3.1");

// node_modules/@angular/router/fesm2022/router2.mjs
var PRIMARY_OUTLET = "primary";
var RouteTitleKey = /* @__PURE__ */ Symbol("RouteTitle");
var ParamsAsMap = class {
  params;
  constructor(params) {
    this.params = params || {};
  }
  has(name) {
    return Object.prototype.hasOwnProperty.call(this.params, name);
  }
  get(name) {
    if (this.has(name)) {
      const v = this.params[name];
      return Array.isArray(v) ? v[0] : v;
    }
    return null;
  }
  getAll(name) {
    if (this.has(name)) {
      const v = this.params[name];
      return Array.isArray(v) ? v : [v];
    }
    return [];
  }
  get keys() {
    return Object.keys(this.params);
  }
};
function convertToParamMap(params) {
  return new ParamsAsMap(params);
}
function defaultUrlMatcher(segments, segmentGroup, route) {
  const parts = route.path.split("/");
  if (parts.length > segments.length) {
    return null;
  }
  if (route.pathMatch === "full" && (segmentGroup.hasChildren() || parts.length < segments.length)) {
    return null;
  }
  const posParams = {};
  for (let index = 0; index < parts.length; index++) {
    const part = parts[index];
    const segment = segments[index];
    const isParameter = part[0] === ":";
    if (isParameter) {
      posParams[part.substring(1)] = segment;
    } else if (part !== segment.path) {
      return null;
    }
  }
  return {
    consumed: segments.slice(0, parts.length),
    posParams
  };
}
function shallowEqualArrays(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; ++i) {
    if (!shallowEqual(a[i], b[i])) return false;
  }
  return true;
}
function shallowEqual(a, b) {
  const k1 = a ? getDataKeys(a) : void 0;
  const k2 = b ? getDataKeys(b) : void 0;
  if (!k1 || !k2 || k1.length != k2.length) {
    return false;
  }
  let key;
  for (let i = 0; i < k1.length; i++) {
    key = k1[i];
    if (!equalArraysOrString(a[key], b[key])) {
      return false;
    }
  }
  return true;
}
function getDataKeys(obj) {
  return [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)];
}
function equalArraysOrString(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    const aSorted = [...a].sort();
    const bSorted = [...b].sort();
    return aSorted.every((val, index) => bSorted[index] === val);
  } else {
    return a === b;
  }
}
function last2(a) {
  return a.length > 0 ? a[a.length - 1] : null;
}
function wrapIntoObservable(value) {
  if (isObservable(value)) {
    return value;
  }
  if (isPromise(value)) {
    return from(Promise.resolve(value));
  }
  return of(value);
}
var pathCompareMap = {
  "exact": equalSegmentGroups,
  "subset": containsSegmentGroup
};
var paramCompareMap = {
  "exact": equalParams,
  "subset": containsParams,
  "ignored": () => true
};
function containsTree(container, containee, options) {
  return pathCompareMap[options.paths](container.root, containee.root, options.matrixParams) && paramCompareMap[options.queryParams](container.queryParams, containee.queryParams) && !(options.fragment === "exact" && container.fragment !== containee.fragment);
}
function equalParams(container, containee) {
  return shallowEqual(container, containee);
}
function equalSegmentGroups(container, containee, matrixParams) {
  if (!equalPath(container.segments, containee.segments)) return false;
  if (!matrixParamsMatch(container.segments, containee.segments, matrixParams)) {
    return false;
  }
  if (container.numberOfChildren !== containee.numberOfChildren) return false;
  for (const c in containee.children) {
    if (!container.children[c]) return false;
    if (!equalSegmentGroups(container.children[c], containee.children[c], matrixParams)) return false;
  }
  return true;
}
function containsParams(container, containee) {
  return Object.keys(containee).length <= Object.keys(container).length && Object.keys(containee).every((key) => equalArraysOrString(container[key], containee[key]));
}
function containsSegmentGroup(container, containee, matrixParams) {
  return containsSegmentGroupHelper(container, containee, containee.segments, matrixParams);
}
function containsSegmentGroupHelper(container, containee, containeePaths, matrixParams) {
  if (container.segments.length > containeePaths.length) {
    const current = container.segments.slice(0, containeePaths.length);
    if (!equalPath(current, containeePaths)) return false;
    if (containee.hasChildren()) return false;
    if (!matrixParamsMatch(current, containeePaths, matrixParams)) return false;
    return true;
  } else if (container.segments.length === containeePaths.length) {
    if (!equalPath(container.segments, containeePaths)) return false;
    if (!matrixParamsMatch(container.segments, containeePaths, matrixParams)) return false;
    for (const c in containee.children) {
      if (!container.children[c]) return false;
      if (!containsSegmentGroup(container.children[c], containee.children[c], matrixParams)) {
        return false;
      }
    }
    return true;
  } else {
    const current = containeePaths.slice(0, container.segments.length);
    const next = containeePaths.slice(container.segments.length);
    if (!equalPath(container.segments, current)) return false;
    if (!matrixParamsMatch(container.segments, current, matrixParams)) return false;
    if (!container.children[PRIMARY_OUTLET]) return false;
    return containsSegmentGroupHelper(container.children[PRIMARY_OUTLET], containee, next, matrixParams);
  }
}
function matrixParamsMatch(containerPaths, containeePaths, options) {
  return containeePaths.every((containeeSegment, i) => {
    return paramCompareMap[options](containerPaths[i].parameters, containeeSegment.parameters);
  });
}
var UrlTree = class {
  root;
  queryParams;
  fragment;
  /** @internal */
  _queryParamMap;
  constructor(root2 = new UrlSegmentGroup([], {}), queryParams = {}, fragment = null) {
    this.root = root2;
    this.queryParams = queryParams;
    this.fragment = fragment;
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (root2.segments.length > 0) {
        throw new RuntimeError(4015, "The root `UrlSegmentGroup` should not contain `segments`. Instead, these segments belong in the `children` so they can be associated with a named outlet.");
      }
    }
  }
  get queryParamMap() {
    this._queryParamMap ??= convertToParamMap(this.queryParams);
    return this._queryParamMap;
  }
  /** @docsNotRequired */
  toString() {
    return DEFAULT_SERIALIZER.serialize(this);
  }
};
var UrlSegmentGroup = class {
  segments;
  children;
  /** The parent node in the url tree */
  parent = null;
  constructor(segments, children) {
    this.segments = segments;
    this.children = children;
    Object.values(children).forEach((v) => v.parent = this);
  }
  /** Whether the segment has child segments */
  hasChildren() {
    return this.numberOfChildren > 0;
  }
  /** Number of child segments */
  get numberOfChildren() {
    return Object.keys(this.children).length;
  }
  /** @docsNotRequired */
  toString() {
    return serializePaths(this);
  }
};
var UrlSegment = class {
  path;
  parameters;
  /** @internal */
  _parameterMap;
  constructor(path, parameters) {
    this.path = path;
    this.parameters = parameters;
  }
  get parameterMap() {
    this._parameterMap ??= convertToParamMap(this.parameters);
    return this._parameterMap;
  }
  /** @docsNotRequired */
  toString() {
    return serializePath(this);
  }
};
function equalSegments(as, bs) {
  return equalPath(as, bs) && as.every((a, i) => shallowEqual(a.parameters, bs[i].parameters));
}
function equalPath(as, bs) {
  if (as.length !== bs.length) return false;
  return as.every((a, i) => a.path === bs[i].path);
}
function mapChildrenIntoArray(segment, fn) {
  let res = [];
  Object.entries(segment.children).forEach(([childOutlet, child]) => {
    if (childOutlet === PRIMARY_OUTLET) {
      res = res.concat(fn(child, childOutlet));
    }
  });
  Object.entries(segment.children).forEach(([childOutlet, child]) => {
    if (childOutlet !== PRIMARY_OUTLET) {
      res = res.concat(fn(child, childOutlet));
    }
  });
  return res;
}
var UrlSerializer = class _UrlSerializer {
  static \u0275fac = function UrlSerializer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UrlSerializer)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UrlSerializer,
    factory: () => (() => new DefaultUrlSerializer())(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlSerializer, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new DefaultUrlSerializer()
    }]
  }], null, null);
})();
var DefaultUrlSerializer = class {
  /** Parses a url into a `UrlTree` */
  parse(url) {
    const p = new UrlParser(url);
    return new UrlTree(p.parseRootSegment(), p.parseQueryParams(), p.parseFragment());
  }
  /** Converts a `UrlTree` into a url */
  serialize(tree2) {
    const segment = `/${serializeSegment(tree2.root, true)}`;
    const query = serializeQueryParams(tree2.queryParams);
    const fragment = typeof tree2.fragment === `string` ? `#${encodeUriFragment(tree2.fragment)}` : "";
    return `${segment}${query}${fragment}`;
  }
};
var DEFAULT_SERIALIZER = new DefaultUrlSerializer();
function serializePaths(segment) {
  return segment.segments.map((p) => serializePath(p)).join("/");
}
function serializeSegment(segment, root2) {
  if (!segment.hasChildren()) {
    return serializePaths(segment);
  }
  if (root2) {
    const primary = segment.children[PRIMARY_OUTLET] ? serializeSegment(segment.children[PRIMARY_OUTLET], false) : "";
    const children = [];
    Object.entries(segment.children).forEach(([k, v]) => {
      if (k !== PRIMARY_OUTLET) {
        children.push(`${k}:${serializeSegment(v, false)}`);
      }
    });
    return children.length > 0 ? `${primary}(${children.join("//")})` : primary;
  } else {
    const children = mapChildrenIntoArray(segment, (v, k) => {
      if (k === PRIMARY_OUTLET) {
        return [serializeSegment(segment.children[PRIMARY_OUTLET], false)];
      }
      return [`${k}:${serializeSegment(v, false)}`];
    });
    if (Object.keys(segment.children).length === 1 && segment.children[PRIMARY_OUTLET] != null) {
      return `${serializePaths(segment)}/${children[0]}`;
    }
    return `${serializePaths(segment)}/(${children.join("//")})`;
  }
}
function encodeUriString(s) {
  return encodeURIComponent(s).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",");
}
function encodeUriQuery(s) {
  return encodeUriString(s).replace(/%3B/gi, ";");
}
function encodeUriFragment(s) {
  return encodeURI(s);
}
function encodeUriSegment(s) {
  return encodeUriString(s).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&");
}
function decode(s) {
  return decodeURIComponent(s);
}
function decodeQuery(s) {
  return decode(s.replace(/\+/g, "%20"));
}
function serializePath(path) {
  return `${encodeUriSegment(path.path)}${serializeMatrixParams(path.parameters)}`;
}
function serializeMatrixParams(params) {
  return Object.entries(params).map(([key, value]) => `;${encodeUriSegment(key)}=${encodeUriSegment(value)}`).join("");
}
function serializeQueryParams(params) {
  const strParams = Object.entries(params).map(([name, value]) => {
    return Array.isArray(value) ? value.map((v) => `${encodeUriQuery(name)}=${encodeUriQuery(v)}`).join("&") : `${encodeUriQuery(name)}=${encodeUriQuery(value)}`;
  }).filter((s) => s);
  return strParams.length ? `?${strParams.join("&")}` : "";
}
var SEGMENT_RE = /^[^\/()?;#]+/;
function matchSegments(str) {
  const match2 = str.match(SEGMENT_RE);
  return match2 ? match2[0] : "";
}
var MATRIX_PARAM_SEGMENT_RE = /^[^\/()?;=#]+/;
function matchMatrixKeySegments(str) {
  const match2 = str.match(MATRIX_PARAM_SEGMENT_RE);
  return match2 ? match2[0] : "";
}
var QUERY_PARAM_RE = /^[^=?&#]+/;
function matchQueryParams(str) {
  const match2 = str.match(QUERY_PARAM_RE);
  return match2 ? match2[0] : "";
}
var QUERY_PARAM_VALUE_RE = /^[^&#]+/;
function matchUrlQueryParamValue(str) {
  const match2 = str.match(QUERY_PARAM_VALUE_RE);
  return match2 ? match2[0] : "";
}
var UrlParser = class {
  url;
  remaining;
  constructor(url) {
    this.url = url;
    this.remaining = url;
  }
  parseRootSegment() {
    this.consumeOptional("/");
    if (this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#")) {
      return new UrlSegmentGroup([], {});
    }
    return new UrlSegmentGroup([], this.parseChildren());
  }
  parseQueryParams() {
    const params = {};
    if (this.consumeOptional("?")) {
      do {
        this.parseQueryParam(params);
      } while (this.consumeOptional("&"));
    }
    return params;
  }
  parseFragment() {
    return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null;
  }
  parseChildren() {
    if (this.remaining === "") {
      return {};
    }
    this.consumeOptional("/");
    const segments = [];
    if (!this.peekStartsWith("(")) {
      segments.push(this.parseSegment());
    }
    while (this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(")) {
      this.capture("/");
      segments.push(this.parseSegment());
    }
    let children = {};
    if (this.peekStartsWith("/(")) {
      this.capture("/");
      children = this.parseParens(true);
    }
    let res = {};
    if (this.peekStartsWith("(")) {
      res = this.parseParens(false);
    }
    if (segments.length > 0 || Object.keys(children).length > 0) {
      res[PRIMARY_OUTLET] = new UrlSegmentGroup(segments, children);
    }
    return res;
  }
  // parse a segment with its matrix parameters
  // ie `name;k1=v1;k2`
  parseSegment() {
    const path = matchSegments(this.remaining);
    if (path === "" && this.peekStartsWith(";")) {
      throw new RuntimeError(4009, (typeof ngDevMode === "undefined" || ngDevMode) && `Empty path url segment cannot have parameters: '${this.remaining}'.`);
    }
    this.capture(path);
    return new UrlSegment(decode(path), this.parseMatrixParams());
  }
  parseMatrixParams() {
    const params = {};
    while (this.consumeOptional(";")) {
      this.parseParam(params);
    }
    return params;
  }
  parseParam(params) {
    const key = matchMatrixKeySegments(this.remaining);
    if (!key) {
      return;
    }
    this.capture(key);
    let value = "";
    if (this.consumeOptional("=")) {
      const valueMatch = matchSegments(this.remaining);
      if (valueMatch) {
        value = valueMatch;
        this.capture(value);
      }
    }
    params[decode(key)] = decode(value);
  }
  // Parse a single query parameter `name[=value]`
  parseQueryParam(params) {
    const key = matchQueryParams(this.remaining);
    if (!key) {
      return;
    }
    this.capture(key);
    let value = "";
    if (this.consumeOptional("=")) {
      const valueMatch = matchUrlQueryParamValue(this.remaining);
      if (valueMatch) {
        value = valueMatch;
        this.capture(value);
      }
    }
    const decodedKey = decodeQuery(key);
    const decodedVal = decodeQuery(value);
    if (params.hasOwnProperty(decodedKey)) {
      let currentVal = params[decodedKey];
      if (!Array.isArray(currentVal)) {
        currentVal = [currentVal];
        params[decodedKey] = currentVal;
      }
      currentVal.push(decodedVal);
    } else {
      params[decodedKey] = decodedVal;
    }
  }
  // parse `(a/b//outlet_name:c/d)`
  parseParens(allowPrimary) {
    const segments = {};
    this.capture("(");
    while (!this.consumeOptional(")") && this.remaining.length > 0) {
      const path = matchSegments(this.remaining);
      const next = this.remaining[path.length];
      if (next !== "/" && next !== ")" && next !== ";") {
        throw new RuntimeError(4010, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot parse url '${this.url}'`);
      }
      let outletName = void 0;
      if (path.indexOf(":") > -1) {
        outletName = path.slice(0, path.indexOf(":"));
        this.capture(outletName);
        this.capture(":");
      } else if (allowPrimary) {
        outletName = PRIMARY_OUTLET;
      }
      const children = this.parseChildren();
      segments[outletName] = Object.keys(children).length === 1 ? children[PRIMARY_OUTLET] : new UrlSegmentGroup([], children);
      this.consumeOptional("//");
    }
    return segments;
  }
  peekStartsWith(str) {
    return this.remaining.startsWith(str);
  }
  // Consumes the prefix when it is present and returns whether it has been consumed
  consumeOptional(str) {
    if (this.peekStartsWith(str)) {
      this.remaining = this.remaining.substring(str.length);
      return true;
    }
    return false;
  }
  capture(str) {
    if (!this.consumeOptional(str)) {
      throw new RuntimeError(4011, (typeof ngDevMode === "undefined" || ngDevMode) && `Expected "${str}".`);
    }
  }
};
function createRoot(rootCandidate) {
  return rootCandidate.segments.length > 0 ? new UrlSegmentGroup([], {
    [PRIMARY_OUTLET]: rootCandidate
  }) : rootCandidate;
}
function squashSegmentGroup(segmentGroup) {
  const newChildren = {};
  for (const [childOutlet, child] of Object.entries(segmentGroup.children)) {
    const childCandidate = squashSegmentGroup(child);
    if (childOutlet === PRIMARY_OUTLET && childCandidate.segments.length === 0 && childCandidate.hasChildren()) {
      for (const [grandChildOutlet, grandChild] of Object.entries(childCandidate.children)) {
        newChildren[grandChildOutlet] = grandChild;
      }
    } else if (childCandidate.segments.length > 0 || childCandidate.hasChildren()) {
      newChildren[childOutlet] = childCandidate;
    }
  }
  const s = new UrlSegmentGroup(segmentGroup.segments, newChildren);
  return mergeTrivialChildren(s);
}
function mergeTrivialChildren(s) {
  if (s.numberOfChildren === 1 && s.children[PRIMARY_OUTLET]) {
    const c = s.children[PRIMARY_OUTLET];
    return new UrlSegmentGroup(s.segments.concat(c.segments), c.children);
  }
  return s;
}
function isUrlTree(v) {
  return v instanceof UrlTree;
}
function createUrlTreeFromSnapshot(relativeTo, commands, queryParams = null, fragment = null) {
  const relativeToUrlSegmentGroup = createSegmentGroupFromRoute(relativeTo);
  return createUrlTreeFromSegmentGroup(relativeToUrlSegmentGroup, commands, queryParams, fragment);
}
function createSegmentGroupFromRoute(route) {
  let targetGroup;
  function createSegmentGroupFromRouteRecursive(currentRoute) {
    const childOutlets = {};
    for (const childSnapshot of currentRoute.children) {
      const root2 = createSegmentGroupFromRouteRecursive(childSnapshot);
      childOutlets[childSnapshot.outlet] = root2;
    }
    const segmentGroup = new UrlSegmentGroup(currentRoute.url, childOutlets);
    if (currentRoute === route) {
      targetGroup = segmentGroup;
    }
    return segmentGroup;
  }
  const rootCandidate = createSegmentGroupFromRouteRecursive(route.root);
  const rootSegmentGroup = createRoot(rootCandidate);
  return targetGroup ?? rootSegmentGroup;
}
function createUrlTreeFromSegmentGroup(relativeTo, commands, queryParams, fragment) {
  let root2 = relativeTo;
  while (root2.parent) {
    root2 = root2.parent;
  }
  if (commands.length === 0) {
    return tree(root2, root2, root2, queryParams, fragment);
  }
  const nav = computeNavigation(commands);
  if (nav.toRoot()) {
    return tree(root2, root2, new UrlSegmentGroup([], {}), queryParams, fragment);
  }
  const position = findStartingPositionForTargetGroup(nav, root2, relativeTo);
  const newSegmentGroup = position.processChildren ? updateSegmentGroupChildren(position.segmentGroup, position.index, nav.commands) : updateSegmentGroup(position.segmentGroup, position.index, nav.commands);
  return tree(root2, position.segmentGroup, newSegmentGroup, queryParams, fragment);
}
function isMatrixParams(command) {
  return typeof command === "object" && command != null && !command.outlets && !command.segmentPath;
}
function isCommandWithOutlets(command) {
  return typeof command === "object" && command != null && command.outlets;
}
function tree(oldRoot, oldSegmentGroup, newSegmentGroup, queryParams, fragment) {
  let qp = {};
  if (queryParams) {
    Object.entries(queryParams).forEach(([name, value]) => {
      qp[name] = Array.isArray(value) ? value.map((v) => `${v}`) : `${value}`;
    });
  }
  let rootCandidate;
  if (oldRoot === oldSegmentGroup) {
    rootCandidate = newSegmentGroup;
  } else {
    rootCandidate = replaceSegment(oldRoot, oldSegmentGroup, newSegmentGroup);
  }
  const newRoot = createRoot(squashSegmentGroup(rootCandidate));
  return new UrlTree(newRoot, qp, fragment);
}
function replaceSegment(current, oldSegment, newSegment) {
  const children = {};
  Object.entries(current.children).forEach(([outletName, c]) => {
    if (c === oldSegment) {
      children[outletName] = newSegment;
    } else {
      children[outletName] = replaceSegment(c, oldSegment, newSegment);
    }
  });
  return new UrlSegmentGroup(current.segments, children);
}
var Navigation = class {
  isAbsolute;
  numberOfDoubleDots;
  commands;
  constructor(isAbsolute, numberOfDoubleDots, commands) {
    this.isAbsolute = isAbsolute;
    this.numberOfDoubleDots = numberOfDoubleDots;
    this.commands = commands;
    if (isAbsolute && commands.length > 0 && isMatrixParams(commands[0])) {
      throw new RuntimeError(4003, (typeof ngDevMode === "undefined" || ngDevMode) && "Root segment cannot have matrix parameters");
    }
    const cmdWithOutlet = commands.find(isCommandWithOutlets);
    if (cmdWithOutlet && cmdWithOutlet !== last2(commands)) {
      throw new RuntimeError(4004, (typeof ngDevMode === "undefined" || ngDevMode) && "{outlets:{}} has to be the last command");
    }
  }
  toRoot() {
    return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/";
  }
};
function computeNavigation(commands) {
  if (typeof commands[0] === "string" && commands.length === 1 && commands[0] === "/") {
    return new Navigation(true, 0, commands);
  }
  let numberOfDoubleDots = 0;
  let isAbsolute = false;
  const res = commands.reduce((res2, cmd, cmdIdx) => {
    if (typeof cmd === "object" && cmd != null) {
      if (cmd.outlets) {
        const outlets = {};
        Object.entries(cmd.outlets).forEach(([name, commands2]) => {
          outlets[name] = typeof commands2 === "string" ? commands2.split("/") : commands2;
        });
        return [...res2, {
          outlets
        }];
      }
      if (cmd.segmentPath) {
        return [...res2, cmd.segmentPath];
      }
    }
    if (!(typeof cmd === "string")) {
      return [...res2, cmd];
    }
    if (cmdIdx === 0) {
      cmd.split("/").forEach((urlPart, partIndex) => {
        if (partIndex == 0 && urlPart === ".") ;
        else if (partIndex == 0 && urlPart === "") {
          isAbsolute = true;
        } else if (urlPart === "..") {
          numberOfDoubleDots++;
        } else if (urlPart != "") {
          res2.push(urlPart);
        }
      });
      return res2;
    }
    return [...res2, cmd];
  }, []);
  return new Navigation(isAbsolute, numberOfDoubleDots, res);
}
var Position = class {
  segmentGroup;
  processChildren;
  index;
  constructor(segmentGroup, processChildren, index) {
    this.segmentGroup = segmentGroup;
    this.processChildren = processChildren;
    this.index = index;
  }
};
function findStartingPositionForTargetGroup(nav, root2, target) {
  if (nav.isAbsolute) {
    return new Position(root2, true, 0);
  }
  if (!target) {
    return new Position(root2, false, NaN);
  }
  if (target.parent === null) {
    return new Position(target, true, 0);
  }
  const modifier = isMatrixParams(nav.commands[0]) ? 0 : 1;
  const index = target.segments.length - 1 + modifier;
  return createPositionApplyingDoubleDots(target, index, nav.numberOfDoubleDots);
}
function createPositionApplyingDoubleDots(group, index, numberOfDoubleDots) {
  let g = group;
  let ci = index;
  let dd = numberOfDoubleDots;
  while (dd > ci) {
    dd -= ci;
    g = g.parent;
    if (!g) {
      throw new RuntimeError(4005, (typeof ngDevMode === "undefined" || ngDevMode) && "Invalid number of '../'");
    }
    ci = g.segments.length;
  }
  return new Position(g, false, ci - dd);
}
function getOutlets(commands) {
  if (isCommandWithOutlets(commands[0])) {
    return commands[0].outlets;
  }
  return {
    [PRIMARY_OUTLET]: commands
  };
}
function updateSegmentGroup(segmentGroup, startIndex, commands) {
  segmentGroup ??= new UrlSegmentGroup([], {});
  if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
    return updateSegmentGroupChildren(segmentGroup, startIndex, commands);
  }
  const m = prefixedWith(segmentGroup, startIndex, commands);
  const slicedCommands = commands.slice(m.commandIndex);
  if (m.match && m.pathIndex < segmentGroup.segments.length) {
    const g = new UrlSegmentGroup(segmentGroup.segments.slice(0, m.pathIndex), {});
    g.children[PRIMARY_OUTLET] = new UrlSegmentGroup(segmentGroup.segments.slice(m.pathIndex), segmentGroup.children);
    return updateSegmentGroupChildren(g, 0, slicedCommands);
  } else if (m.match && slicedCommands.length === 0) {
    return new UrlSegmentGroup(segmentGroup.segments, {});
  } else if (m.match && !segmentGroup.hasChildren()) {
    return createNewSegmentGroup(segmentGroup, startIndex, commands);
  } else if (m.match) {
    return updateSegmentGroupChildren(segmentGroup, 0, slicedCommands);
  } else {
    return createNewSegmentGroup(segmentGroup, startIndex, commands);
  }
}
function updateSegmentGroupChildren(segmentGroup, startIndex, commands) {
  if (commands.length === 0) {
    return new UrlSegmentGroup(segmentGroup.segments, {});
  } else {
    const outlets = getOutlets(commands);
    const children = {};
    if (Object.keys(outlets).some((o) => o !== PRIMARY_OUTLET) && segmentGroup.children[PRIMARY_OUTLET] && segmentGroup.numberOfChildren === 1 && segmentGroup.children[PRIMARY_OUTLET].segments.length === 0) {
      const childrenOfEmptyChild = updateSegmentGroupChildren(segmentGroup.children[PRIMARY_OUTLET], startIndex, commands);
      return new UrlSegmentGroup(segmentGroup.segments, childrenOfEmptyChild.children);
    }
    Object.entries(outlets).forEach(([outlet, commands2]) => {
      if (typeof commands2 === "string") {
        commands2 = [commands2];
      }
      if (commands2 !== null) {
        children[outlet] = updateSegmentGroup(segmentGroup.children[outlet], startIndex, commands2);
      }
    });
    Object.entries(segmentGroup.children).forEach(([childOutlet, child]) => {
      if (outlets[childOutlet] === void 0) {
        children[childOutlet] = child;
      }
    });
    return new UrlSegmentGroup(segmentGroup.segments, children);
  }
}
function prefixedWith(segmentGroup, startIndex, commands) {
  let currentCommandIndex = 0;
  let currentPathIndex = startIndex;
  const noMatch2 = {
    match: false,
    pathIndex: 0,
    commandIndex: 0
  };
  while (currentPathIndex < segmentGroup.segments.length) {
    if (currentCommandIndex >= commands.length) return noMatch2;
    const path = segmentGroup.segments[currentPathIndex];
    const command = commands[currentCommandIndex];
    if (isCommandWithOutlets(command)) {
      break;
    }
    const curr = `${command}`;
    const next = currentCommandIndex < commands.length - 1 ? commands[currentCommandIndex + 1] : null;
    if (currentPathIndex > 0 && curr === void 0) break;
    if (curr && next && typeof next === "object" && next.outlets === void 0) {
      if (!compare(curr, next, path)) return noMatch2;
      currentCommandIndex += 2;
    } else {
      if (!compare(curr, {}, path)) return noMatch2;
      currentCommandIndex++;
    }
    currentPathIndex++;
  }
  return {
    match: true,
    pathIndex: currentPathIndex,
    commandIndex: currentCommandIndex
  };
}
function createNewSegmentGroup(segmentGroup, startIndex, commands) {
  const paths = segmentGroup.segments.slice(0, startIndex);
  let i = 0;
  while (i < commands.length) {
    const command = commands[i];
    if (isCommandWithOutlets(command)) {
      const children = createNewSegmentChildren(command.outlets);
      return new UrlSegmentGroup(paths, children);
    }
    if (i === 0 && isMatrixParams(commands[0])) {
      const p = segmentGroup.segments[startIndex];
      paths.push(new UrlSegment(p.path, stringify(commands[0])));
      i++;
      continue;
    }
    const curr = isCommandWithOutlets(command) ? command.outlets[PRIMARY_OUTLET] : `${command}`;
    const next = i < commands.length - 1 ? commands[i + 1] : null;
    if (curr && next && isMatrixParams(next)) {
      paths.push(new UrlSegment(curr, stringify(next)));
      i += 2;
    } else {
      paths.push(new UrlSegment(curr, {}));
      i++;
    }
  }
  return new UrlSegmentGroup(paths, {});
}
function createNewSegmentChildren(outlets) {
  const children = {};
  Object.entries(outlets).forEach(([outlet, commands]) => {
    if (typeof commands === "string") {
      commands = [commands];
    }
    if (commands !== null) {
      children[outlet] = createNewSegmentGroup(new UrlSegmentGroup([], {}), 0, commands);
    }
  });
  return children;
}
function stringify(params) {
  const res = {};
  Object.entries(params).forEach(([k, v]) => res[k] = `${v}`);
  return res;
}
function compare(path, params, segment) {
  return path == segment.path && shallowEqual(params, segment.parameters);
}
var IMPERATIVE_NAVIGATION = "imperative";
var EventType;
(function(EventType2) {
  EventType2[EventType2["NavigationStart"] = 0] = "NavigationStart";
  EventType2[EventType2["NavigationEnd"] = 1] = "NavigationEnd";
  EventType2[EventType2["NavigationCancel"] = 2] = "NavigationCancel";
  EventType2[EventType2["NavigationError"] = 3] = "NavigationError";
  EventType2[EventType2["RoutesRecognized"] = 4] = "RoutesRecognized";
  EventType2[EventType2["ResolveStart"] = 5] = "ResolveStart";
  EventType2[EventType2["ResolveEnd"] = 6] = "ResolveEnd";
  EventType2[EventType2["GuardsCheckStart"] = 7] = "GuardsCheckStart";
  EventType2[EventType2["GuardsCheckEnd"] = 8] = "GuardsCheckEnd";
  EventType2[EventType2["RouteConfigLoadStart"] = 9] = "RouteConfigLoadStart";
  EventType2[EventType2["RouteConfigLoadEnd"] = 10] = "RouteConfigLoadEnd";
  EventType2[EventType2["ChildActivationStart"] = 11] = "ChildActivationStart";
  EventType2[EventType2["ChildActivationEnd"] = 12] = "ChildActivationEnd";
  EventType2[EventType2["ActivationStart"] = 13] = "ActivationStart";
  EventType2[EventType2["ActivationEnd"] = 14] = "ActivationEnd";
  EventType2[EventType2["Scroll"] = 15] = "Scroll";
  EventType2[EventType2["NavigationSkipped"] = 16] = "NavigationSkipped";
})(EventType || (EventType = {}));
var RouterEvent = class {
  id;
  url;
  constructor(id, url) {
    this.id = id;
    this.url = url;
  }
};
var NavigationStart = class extends RouterEvent {
  type = EventType.NavigationStart;
  /**
   * Identifies the call or event that triggered the navigation.
   * An `imperative` trigger is a call to `router.navigateByUrl()` or `router.navigate()`.
   *
   * @see {@link NavigationEnd}
   * @see {@link NavigationCancel}
   * @see {@link NavigationError}
   */
  navigationTrigger;
  /**
   * The navigation state that was previously supplied to the `pushState` call,
   * when the navigation is triggered by a `popstate` event. Otherwise null.
   *
   * The state object is defined by `NavigationExtras`, and contains any
   * developer-defined state value, as well as a unique ID that
   * the router assigns to every router transition/navigation.
   *
   * From the perspective of the router, the router never "goes back".
   * When the user clicks on the back button in the browser,
   * a new navigation ID is created.
   *
   * Use the ID in this previous-state object to differentiate between a newly created
   * state and one returned to by a `popstate` event, so that you can restore some
   * remembered state, such as scroll position.
   *
   */
  restoredState;
  constructor(id, url, navigationTrigger = "imperative", restoredState = null) {
    super(id, url);
    this.navigationTrigger = navigationTrigger;
    this.restoredState = restoredState;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
  }
};
var NavigationEnd = class extends RouterEvent {
  urlAfterRedirects;
  type = EventType.NavigationEnd;
  constructor(id, url, urlAfterRedirects) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
  }
};
var NavigationCancellationCode;
(function(NavigationCancellationCode2) {
  NavigationCancellationCode2[NavigationCancellationCode2["Redirect"] = 0] = "Redirect";
  NavigationCancellationCode2[NavigationCancellationCode2["SupersededByNewNavigation"] = 1] = "SupersededByNewNavigation";
  NavigationCancellationCode2[NavigationCancellationCode2["NoDataFromResolver"] = 2] = "NoDataFromResolver";
  NavigationCancellationCode2[NavigationCancellationCode2["GuardRejected"] = 3] = "GuardRejected";
  NavigationCancellationCode2[NavigationCancellationCode2["Aborted"] = 4] = "Aborted";
})(NavigationCancellationCode || (NavigationCancellationCode = {}));
var NavigationSkippedCode;
(function(NavigationSkippedCode2) {
  NavigationSkippedCode2[NavigationSkippedCode2["IgnoredSameUrlNavigation"] = 0] = "IgnoredSameUrlNavigation";
  NavigationSkippedCode2[NavigationSkippedCode2["IgnoredByUrlHandlingStrategy"] = 1] = "IgnoredByUrlHandlingStrategy";
})(NavigationSkippedCode || (NavigationSkippedCode = {}));
var NavigationCancel = class extends RouterEvent {
  reason;
  code;
  type = EventType.NavigationCancel;
  constructor(id, url, reason, code) {
    super(id, url);
    this.reason = reason;
    this.code = code;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
  }
};
var NavigationSkipped = class extends RouterEvent {
  reason;
  code;
  type = EventType.NavigationSkipped;
  constructor(id, url, reason, code) {
    super(id, url);
    this.reason = reason;
    this.code = code;
  }
};
var NavigationError = class extends RouterEvent {
  error;
  target;
  type = EventType.NavigationError;
  constructor(id, url, error, target) {
    super(id, url);
    this.error = error;
    this.target = target;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
  }
};
var RoutesRecognized = class extends RouterEvent {
  urlAfterRedirects;
  state;
  type = EventType.RoutesRecognized;
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
  }
  /** @docsNotRequired */
  toString() {
    return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var GuardsCheckStart = class extends RouterEvent {
  urlAfterRedirects;
  state;
  type = EventType.GuardsCheckStart;
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
  }
  toString() {
    return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var GuardsCheckEnd = class extends RouterEvent {
  urlAfterRedirects;
  state;
  shouldActivate;
  type = EventType.GuardsCheckEnd;
  constructor(id, url, urlAfterRedirects, state, shouldActivate) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.shouldActivate = shouldActivate;
  }
  toString() {
    return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
  }
};
var ResolveStart = class extends RouterEvent {
  urlAfterRedirects;
  state;
  type = EventType.ResolveStart;
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
  }
  toString() {
    return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var ResolveEnd = class extends RouterEvent {
  urlAfterRedirects;
  state;
  type = EventType.ResolveEnd;
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
  }
  toString() {
    return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var RouteConfigLoadStart = class {
  route;
  type = EventType.RouteConfigLoadStart;
  constructor(route) {
    this.route = route;
  }
  toString() {
    return `RouteConfigLoadStart(path: ${this.route.path})`;
  }
};
var RouteConfigLoadEnd = class {
  route;
  type = EventType.RouteConfigLoadEnd;
  constructor(route) {
    this.route = route;
  }
  toString() {
    return `RouteConfigLoadEnd(path: ${this.route.path})`;
  }
};
var ChildActivationStart = class {
  snapshot;
  type = EventType.ChildActivationStart;
  constructor(snapshot) {
    this.snapshot = snapshot;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ChildActivationStart(path: '${path}')`;
  }
};
var ChildActivationEnd = class {
  snapshot;
  type = EventType.ChildActivationEnd;
  constructor(snapshot) {
    this.snapshot = snapshot;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ChildActivationEnd(path: '${path}')`;
  }
};
var ActivationStart = class {
  snapshot;
  type = EventType.ActivationStart;
  constructor(snapshot) {
    this.snapshot = snapshot;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ActivationStart(path: '${path}')`;
  }
};
var ActivationEnd = class {
  snapshot;
  type = EventType.ActivationEnd;
  constructor(snapshot) {
    this.snapshot = snapshot;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ActivationEnd(path: '${path}')`;
  }
};
var Scroll = class {
  routerEvent;
  position;
  anchor;
  type = EventType.Scroll;
  constructor(routerEvent, position, anchor) {
    this.routerEvent = routerEvent;
    this.position = position;
    this.anchor = anchor;
  }
  toString() {
    const pos = this.position ? `${this.position[0]}, ${this.position[1]}` : null;
    return `Scroll(anchor: '${this.anchor}', position: '${pos}')`;
  }
};
var BeforeActivateRoutes = class {
};
var RedirectRequest = class {
  url;
  navigationBehaviorOptions;
  constructor(url, navigationBehaviorOptions) {
    this.url = url;
    this.navigationBehaviorOptions = navigationBehaviorOptions;
  }
};
function isPublicRouterEvent(e) {
  return !(e instanceof BeforeActivateRoutes) && !(e instanceof RedirectRequest);
}
function stringifyEvent(routerEvent) {
  switch (routerEvent.type) {
    case EventType.ActivationEnd:
      return `ActivationEnd(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.ActivationStart:
      return `ActivationStart(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.ChildActivationEnd:
      return `ChildActivationEnd(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.ChildActivationStart:
      return `ChildActivationStart(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.GuardsCheckEnd:
      return `GuardsCheckEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state}, shouldActivate: ${routerEvent.shouldActivate})`;
    case EventType.GuardsCheckStart:
      return `GuardsCheckStart(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.NavigationCancel:
      return `NavigationCancel(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case EventType.NavigationSkipped:
      return `NavigationSkipped(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case EventType.NavigationEnd:
      return `NavigationEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}')`;
    case EventType.NavigationError:
      return `NavigationError(id: ${routerEvent.id}, url: '${routerEvent.url}', error: ${routerEvent.error})`;
    case EventType.NavigationStart:
      return `NavigationStart(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case EventType.ResolveEnd:
      return `ResolveEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.ResolveStart:
      return `ResolveStart(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.RouteConfigLoadEnd:
      return `RouteConfigLoadEnd(path: ${routerEvent.route.path})`;
    case EventType.RouteConfigLoadStart:
      return `RouteConfigLoadStart(path: ${routerEvent.route.path})`;
    case EventType.RoutesRecognized:
      return `RoutesRecognized(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.Scroll:
      const pos = routerEvent.position ? `${routerEvent.position[0]}, ${routerEvent.position[1]}` : null;
      return `Scroll(anchor: '${routerEvent.anchor}', position: '${pos}')`;
  }
}
function getOrCreateRouteInjectorIfNeeded(route, currentInjector) {
  if (route.providers && !route._injector) {
    route._injector = createEnvironmentInjector(route.providers, currentInjector, `Route: ${route.path}`);
  }
  return route._injector ?? currentInjector;
}
function validateConfig(config, parentPath = "", requireStandaloneComponents = false) {
  for (let i = 0; i < config.length; i++) {
    const route = config[i];
    const fullPath = getFullPath(parentPath, route);
    validateNode(route, fullPath, requireStandaloneComponents);
  }
}
function assertStandalone(fullPath, component) {
  if (component && isNgModule(component)) {
    throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. You are using 'loadComponent' with a module, but it must be used with standalone components. Use 'loadChildren' instead.`);
  } else if (component && !isStandalone(component)) {
    throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. The component must be standalone.`);
  }
}
function validateNode(route, fullPath, requireStandaloneComponents) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!route) {
      throw new RuntimeError(4014, `
      Invalid configuration of route '${fullPath}': Encountered undefined route.
      The reason might be an extra comma.

      Example:
      const routes: Routes = [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        { path: 'dashboard',  component: DashboardComponent },, << two commas
        { path: 'detail/:id', component: HeroDetailComponent }
      ];
    `);
    }
    if (Array.isArray(route)) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': Array cannot be specified`);
    }
    if (!route.redirectTo && !route.component && !route.loadComponent && !route.children && !route.loadChildren && route.outlet && route.outlet !== PRIMARY_OUTLET) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': a componentless route without children or loadChildren cannot have a named outlet set`);
    }
    if (route.redirectTo && route.children) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and children cannot be used together`);
    }
    if (route.redirectTo && route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and loadChildren cannot be used together`);
    }
    if (route.children && route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': children and loadChildren cannot be used together`);
    }
    if (route.component && route.loadComponent) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': component and loadComponent cannot be used together`);
    }
    if (route.redirectTo) {
      if (route.component || route.loadComponent) {
        throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and component/loadComponent cannot be used together`);
      }
      if (route.canMatch || route.canActivate) {
        throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and ${route.canMatch ? "canMatch" : "canActivate"} cannot be used together.Redirects happen before guards are executed.`);
      }
    }
    if (route.path && route.matcher) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': path and matcher cannot be used together`);
    }
    if (route.redirectTo === void 0 && !route.component && !route.loadComponent && !route.children && !route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. One of the following must be provided: component, loadComponent, redirectTo, children or loadChildren`);
    }
    if (route.path === void 0 && route.matcher === void 0) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': routes must have either a path or a matcher specified`);
    }
    if (typeof route.path === "string" && route.path.charAt(0) === "/") {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': path cannot start with a slash`);
    }
    if (route.path === "" && route.redirectTo !== void 0 && route.pathMatch === void 0) {
      const exp = `The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`;
      throw new RuntimeError(4014, `Invalid configuration of route '{path: "${fullPath}", redirectTo: "${route.redirectTo}"}': please provide 'pathMatch'. ${exp}`);
    }
    if (requireStandaloneComponents) {
      assertStandalone(fullPath, route.component);
    }
  }
  if (route.children) {
    validateConfig(route.children, fullPath, requireStandaloneComponents);
  }
}
function getFullPath(parentPath, currentRoute) {
  if (!currentRoute) {
    return parentPath;
  }
  if (!parentPath && !currentRoute.path) {
    return "";
  } else if (parentPath && !currentRoute.path) {
    return `${parentPath}/`;
  } else if (!parentPath && currentRoute.path) {
    return currentRoute.path;
  } else {
    return `${parentPath}/${currentRoute.path}`;
  }
}
function getOutlet(route) {
  return route.outlet || PRIMARY_OUTLET;
}
function sortByMatchingOutlets(routes2, outletName) {
  const sortedConfig = routes2.filter((r) => getOutlet(r) === outletName);
  sortedConfig.push(...routes2.filter((r) => getOutlet(r) !== outletName));
  return sortedConfig;
}
function getClosestRouteInjector(snapshot) {
  if (!snapshot) return null;
  if (snapshot.routeConfig?._injector) {
    return snapshot.routeConfig._injector;
  }
  for (let s = snapshot.parent; s; s = s.parent) {
    const route = s.routeConfig;
    if (route?._loadedInjector) return route._loadedInjector;
    if (route?._injector) return route._injector;
  }
  return null;
}
var OutletContext = class {
  rootInjector;
  outlet = null;
  route = null;
  children;
  attachRef = null;
  get injector() {
    return getClosestRouteInjector(this.route?.snapshot) ?? this.rootInjector;
  }
  constructor(rootInjector) {
    this.rootInjector = rootInjector;
    this.children = new ChildrenOutletContexts(this.rootInjector);
  }
};
var ChildrenOutletContexts = class _ChildrenOutletContexts {
  rootInjector;
  // contexts for child outlets, by name.
  contexts = /* @__PURE__ */ new Map();
  /** @docs-private */
  constructor(rootInjector) {
    this.rootInjector = rootInjector;
  }
  /** Called when a `RouterOutlet` directive is instantiated */
  onChildOutletCreated(childName, outlet) {
    const context = this.getOrCreateContext(childName);
    context.outlet = outlet;
    this.contexts.set(childName, context);
  }
  /**
   * Called when a `RouterOutlet` directive is destroyed.
   * We need to keep the context as the outlet could be destroyed inside a NgIf and might be
   * re-created later.
   */
  onChildOutletDestroyed(childName) {
    const context = this.getContext(childName);
    if (context) {
      context.outlet = null;
      context.attachRef = null;
    }
  }
  /**
   * Called when the corresponding route is deactivated during navigation.
   * Because the component get destroyed, all children outlet are destroyed.
   */
  onOutletDeactivated() {
    const contexts = this.contexts;
    this.contexts = /* @__PURE__ */ new Map();
    return contexts;
  }
  onOutletReAttached(contexts) {
    this.contexts = contexts;
  }
  getOrCreateContext(childName) {
    let context = this.getContext(childName);
    if (!context) {
      context = new OutletContext(this.rootInjector);
      this.contexts.set(childName, context);
    }
    return context;
  }
  getContext(childName) {
    return this.contexts.get(childName) || null;
  }
  static \u0275fac = function ChildrenOutletContexts_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChildrenOutletContexts)(\u0275\u0275inject(EnvironmentInjector));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ChildrenOutletContexts,
    factory: _ChildrenOutletContexts.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChildrenOutletContexts, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EnvironmentInjector
  }], null);
})();
var Tree = class {
  /** @internal */
  _root;
  constructor(root2) {
    this._root = root2;
  }
  get root() {
    return this._root.value;
  }
  /**
   * @internal
   */
  parent(t) {
    const p = this.pathFromRoot(t);
    return p.length > 1 ? p[p.length - 2] : null;
  }
  /**
   * @internal
   */
  children(t) {
    const n = findNode(t, this._root);
    return n ? n.children.map((t2) => t2.value) : [];
  }
  /**
   * @internal
   */
  firstChild(t) {
    const n = findNode(t, this._root);
    return n && n.children.length > 0 ? n.children[0].value : null;
  }
  /**
   * @internal
   */
  siblings(t) {
    const p = findPath(t, this._root);
    if (p.length < 2) return [];
    const c = p[p.length - 2].children.map((c2) => c2.value);
    return c.filter((cc) => cc !== t);
  }
  /**
   * @internal
   */
  pathFromRoot(t) {
    return findPath(t, this._root).map((s) => s.value);
  }
};
function findNode(value, node) {
  if (value === node.value) return node;
  for (const child of node.children) {
    const node2 = findNode(value, child);
    if (node2) return node2;
  }
  return null;
}
function findPath(value, node) {
  if (value === node.value) return [node];
  for (const child of node.children) {
    const path = findPath(value, child);
    if (path.length) {
      path.unshift(node);
      return path;
    }
  }
  return [];
}
var TreeNode = class {
  value;
  children;
  constructor(value, children) {
    this.value = value;
    this.children = children;
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function nodeChildrenAsMap(node) {
  const map2 = {};
  if (node) {
    node.children.forEach((child) => map2[child.value.outlet] = child);
  }
  return map2;
}
var RouterState = class extends Tree {
  snapshot;
  /** @internal */
  constructor(root2, snapshot) {
    super(root2);
    this.snapshot = snapshot;
    setRouterState(this, root2);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function createEmptyState(rootComponent) {
  const snapshot = createEmptyStateSnapshot(rootComponent);
  const emptyUrl = new BehaviorSubject([new UrlSegment("", {})]);
  const emptyParams = new BehaviorSubject({});
  const emptyData = new BehaviorSubject({});
  const emptyQueryParams = new BehaviorSubject({});
  const fragment = new BehaviorSubject("");
  const activated = new ActivatedRoute(emptyUrl, emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, snapshot.root);
  activated.snapshot = snapshot.root;
  return new RouterState(new TreeNode(activated, []), snapshot);
}
function createEmptyStateSnapshot(rootComponent) {
  const emptyParams = {};
  const emptyData = {};
  const emptyQueryParams = {};
  const fragment = "";
  const activated = new ActivatedRouteSnapshot([], emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, null, {});
  return new RouterStateSnapshot("", new TreeNode(activated, []));
}
var ActivatedRoute = class {
  urlSubject;
  paramsSubject;
  queryParamsSubject;
  fragmentSubject;
  dataSubject;
  outlet;
  component;
  /** The current snapshot of this route */
  snapshot;
  /** @internal */
  _futureSnapshot;
  /** @internal */
  _routerState;
  /** @internal */
  _paramMap;
  /** @internal */
  _queryParamMap;
  /** An Observable of the resolved route title */
  title;
  /** An observable of the URL segments matched by this route. */
  url;
  /** An observable of the matrix parameters scoped to this route. */
  params;
  /** An observable of the query parameters shared by all the routes. */
  queryParams;
  /** An observable of the URL fragment shared by all the routes. */
  fragment;
  /** An observable of the static and resolved data of this route. */
  data;
  /** @internal */
  constructor(urlSubject, paramsSubject, queryParamsSubject, fragmentSubject, dataSubject, outlet, component, futureSnapshot) {
    this.urlSubject = urlSubject;
    this.paramsSubject = paramsSubject;
    this.queryParamsSubject = queryParamsSubject;
    this.fragmentSubject = fragmentSubject;
    this.dataSubject = dataSubject;
    this.outlet = outlet;
    this.component = component;
    this._futureSnapshot = futureSnapshot;
    this.title = this.dataSubject?.pipe(map((d) => d[RouteTitleKey])) ?? of(void 0);
    this.url = urlSubject;
    this.params = paramsSubject;
    this.queryParams = queryParamsSubject;
    this.fragment = fragmentSubject;
    this.data = dataSubject;
  }
  /** The configuration used to match this route. */
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  /** The root of the router state. */
  get root() {
    return this._routerState.root;
  }
  /** The parent of this route in the router state tree. */
  get parent() {
    return this._routerState.parent(this);
  }
  /** The first child of this route in the router state tree. */
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  /** The children of this route in the router state tree. */
  get children() {
    return this._routerState.children(this);
  }
  /** The path from the root of the router state tree to this route. */
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  /**
   * An Observable that contains a map of the required and optional parameters
   * specific to the route.
   * The map supports retrieving single and multiple values from the same parameter.
   */
  get paramMap() {
    this._paramMap ??= this.params.pipe(map((p) => convertToParamMap(p)));
    return this._paramMap;
  }
  /**
   * An Observable that contains a map of the query parameters available to all routes.
   * The map supports retrieving single and multiple values from the query parameter.
   */
  get queryParamMap() {
    this._queryParamMap ??= this.queryParams.pipe(map((p) => convertToParamMap(p)));
    return this._queryParamMap;
  }
  toString() {
    return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
  }
};
function getInherited(route, parent, paramsInheritanceStrategy = "emptyOnly") {
  let inherited;
  const {
    routeConfig
  } = route;
  if (parent !== null && (paramsInheritanceStrategy === "always" || // inherit parent data if route is empty path
  routeConfig?.path === "" || // inherit parent data if parent was componentless
  !parent.component && !parent.routeConfig?.loadComponent)) {
    inherited = {
      params: __spreadValues(__spreadValues({}, parent.params), route.params),
      data: __spreadValues(__spreadValues({}, parent.data), route.data),
      resolve: __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, route.data), parent.data), routeConfig?.data), route._resolvedData)
    };
  } else {
    inherited = {
      params: __spreadValues({}, route.params),
      data: __spreadValues({}, route.data),
      resolve: __spreadValues(__spreadValues({}, route.data), route._resolvedData ?? {})
    };
  }
  if (routeConfig && hasStaticTitle(routeConfig)) {
    inherited.resolve[RouteTitleKey] = routeConfig.title;
  }
  return inherited;
}
var ActivatedRouteSnapshot = class {
  url;
  params;
  queryParams;
  fragment;
  data;
  outlet;
  component;
  /** The configuration used to match this route **/
  routeConfig;
  /** @internal */
  _resolve;
  /** @internal */
  _resolvedData;
  /** @internal */
  _routerState;
  /** @internal */
  _paramMap;
  /** @internal */
  _queryParamMap;
  /** The resolved route title */
  get title() {
    return this.data?.[RouteTitleKey];
  }
  /** @internal */
  constructor(url, params, queryParams, fragment, data, outlet, component, routeConfig, resolve) {
    this.url = url;
    this.params = params;
    this.queryParams = queryParams;
    this.fragment = fragment;
    this.data = data;
    this.outlet = outlet;
    this.component = component;
    this.routeConfig = routeConfig;
    this._resolve = resolve;
  }
  /** The root of the router state */
  get root() {
    return this._routerState.root;
  }
  /** The parent of this route in the router state tree */
  get parent() {
    return this._routerState.parent(this);
  }
  /** The first child of this route in the router state tree */
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  /** The children of this route in the router state tree */
  get children() {
    return this._routerState.children(this);
  }
  /** The path from the root of the router state tree to this route */
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    this._paramMap ??= convertToParamMap(this.params);
    return this._paramMap;
  }
  get queryParamMap() {
    this._queryParamMap ??= convertToParamMap(this.queryParams);
    return this._queryParamMap;
  }
  toString() {
    const url = this.url.map((segment) => segment.toString()).join("/");
    const matched = this.routeConfig ? this.routeConfig.path : "";
    return `Route(url:'${url}', path:'${matched}')`;
  }
};
var RouterStateSnapshot = class extends Tree {
  url;
  /** @internal */
  constructor(url, root2) {
    super(root2);
    this.url = url;
    setRouterState(this, root2);
  }
  toString() {
    return serializeNode(this._root);
  }
};
function setRouterState(state, node) {
  node.value._routerState = state;
  node.children.forEach((c) => setRouterState(state, c));
}
function serializeNode(node) {
  const c = node.children.length > 0 ? ` { ${node.children.map(serializeNode).join(", ")} } ` : "";
  return `${node.value}${c}`;
}
function advanceActivatedRoute(route) {
  if (route.snapshot) {
    const currentSnapshot = route.snapshot;
    const nextSnapshot = route._futureSnapshot;
    route.snapshot = nextSnapshot;
    if (!shallowEqual(currentSnapshot.queryParams, nextSnapshot.queryParams)) {
      route.queryParamsSubject.next(nextSnapshot.queryParams);
    }
    if (currentSnapshot.fragment !== nextSnapshot.fragment) {
      route.fragmentSubject.next(nextSnapshot.fragment);
    }
    if (!shallowEqual(currentSnapshot.params, nextSnapshot.params)) {
      route.paramsSubject.next(nextSnapshot.params);
    }
    if (!shallowEqualArrays(currentSnapshot.url, nextSnapshot.url)) {
      route.urlSubject.next(nextSnapshot.url);
    }
    if (!shallowEqual(currentSnapshot.data, nextSnapshot.data)) {
      route.dataSubject.next(nextSnapshot.data);
    }
  } else {
    route.snapshot = route._futureSnapshot;
    route.dataSubject.next(route._futureSnapshot.data);
  }
}
function equalParamsAndUrlSegments(a, b) {
  const equalUrlParams = shallowEqual(a.params, b.params) && equalSegments(a.url, b.url);
  const parentsMismatch = !a.parent !== !b.parent;
  return equalUrlParams && !parentsMismatch && (!a.parent || equalParamsAndUrlSegments(a.parent, b.parent));
}
function hasStaticTitle(config) {
  return typeof config.title === "string" || config.title === null;
}
var ROUTER_OUTLET_DATA = new InjectionToken(ngDevMode ? "RouterOutlet data" : "");
var RouterOutlet = class _RouterOutlet {
  activated = null;
  /** @internal */
  get activatedComponentRef() {
    return this.activated;
  }
  _activatedRoute = null;
  /**
   * The name of the outlet
   *
   */
  name = PRIMARY_OUTLET;
  activateEvents = new EventEmitter();
  deactivateEvents = new EventEmitter();
  /**
   * Emits an attached component instance when the `RouteReuseStrategy` instructs to re-attach a
   * previously detached subtree.
   **/
  attachEvents = new EventEmitter();
  /**
   * Emits a detached component instance when the `RouteReuseStrategy` instructs to detach the
   * subtree.
   */
  detachEvents = new EventEmitter();
  /**
   * Data that will be provided to the child injector through the `ROUTER_OUTLET_DATA` token.
   *
   * When unset, the value of the token is `undefined` by default.
   */
  routerOutletData = input(void 0, ...ngDevMode ? [{
    debugName: "routerOutletData"
  }] : []);
  parentContexts = inject(ChildrenOutletContexts);
  location = inject(ViewContainerRef);
  changeDetector = inject(ChangeDetectorRef);
  inputBinder = inject(INPUT_BINDER, {
    optional: true
  });
  /** @docs-private */
  supportsBindingToComponentInputs = true;
  /** @docs-private */
  ngOnChanges(changes) {
    if (changes["name"]) {
      const {
        firstChange,
        previousValue
      } = changes["name"];
      if (firstChange) {
        return;
      }
      if (this.isTrackedInParentContexts(previousValue)) {
        this.deactivate();
        this.parentContexts.onChildOutletDestroyed(previousValue);
      }
      this.initializeOutletWithName();
    }
  }
  /** @docs-private */
  ngOnDestroy() {
    if (this.isTrackedInParentContexts(this.name)) {
      this.parentContexts.onChildOutletDestroyed(this.name);
    }
    this.inputBinder?.unsubscribeFromRouteData(this);
  }
  isTrackedInParentContexts(outletName) {
    return this.parentContexts.getContext(outletName)?.outlet === this;
  }
  /** @docs-private */
  ngOnInit() {
    this.initializeOutletWithName();
  }
  initializeOutletWithName() {
    this.parentContexts.onChildOutletCreated(this.name, this);
    if (this.activated) {
      return;
    }
    const context = this.parentContexts.getContext(this.name);
    if (context?.route) {
      if (context.attachRef) {
        this.attach(context.attachRef, context.route);
      } else {
        this.activateWith(context.route, context.injector);
      }
    }
  }
  get isActivated() {
    return !!this.activated;
  }
  /**
   * @returns The currently activated component instance.
   * @throws An error if the outlet is not activated.
   */
  get component() {
    if (!this.activated) throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
    return this.activated.instance;
  }
  get activatedRoute() {
    if (!this.activated) throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
    return this._activatedRoute;
  }
  get activatedRouteData() {
    if (this._activatedRoute) {
      return this._activatedRoute.snapshot.data;
    }
    return {};
  }
  /**
   * Called when the `RouteReuseStrategy` instructs to detach the subtree
   */
  detach() {
    if (!this.activated) throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
    this.location.detach();
    const cmp = this.activated;
    this.activated = null;
    this._activatedRoute = null;
    this.detachEvents.emit(cmp.instance);
    return cmp;
  }
  /**
   * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
   */
  attach(ref, activatedRoute) {
    this.activated = ref;
    this._activatedRoute = activatedRoute;
    this.location.insert(ref.hostView);
    this.inputBinder?.bindActivatedRouteToOutletComponent(this);
    this.attachEvents.emit(ref.instance);
  }
  deactivate() {
    if (this.activated) {
      const c = this.component;
      this.activated.destroy();
      this.activated = null;
      this._activatedRoute = null;
      this.deactivateEvents.emit(c);
    }
  }
  activateWith(activatedRoute, environmentInjector) {
    if (this.isActivated) {
      throw new RuntimeError(4013, (typeof ngDevMode === "undefined" || ngDevMode) && "Cannot activate an already activated outlet");
    }
    this._activatedRoute = activatedRoute;
    const location = this.location;
    const snapshot = activatedRoute.snapshot;
    const component = snapshot.component;
    const childContexts = this.parentContexts.getOrCreateContext(this.name).children;
    const injector = new OutletInjector(activatedRoute, childContexts, location.injector, this.routerOutletData);
    this.activated = location.createComponent(component, {
      index: location.length,
      injector,
      environmentInjector
    });
    this.changeDetector.markForCheck();
    this.inputBinder?.bindActivatedRouteToOutletComponent(this);
    this.activateEvents.emit(this.activated.instance);
  }
  static \u0275fac = function RouterOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RouterOutlet,
    selectors: [["router-outlet"]],
    inputs: {
      name: "name",
      routerOutletData: [1, "routerOutletData"]
    },
    outputs: {
      activateEvents: "activate",
      deactivateEvents: "deactivate",
      attachEvents: "attach",
      detachEvents: "detach"
    },
    exportAs: ["outlet"],
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterOutlet, [{
    type: Directive,
    args: [{
      selector: "router-outlet",
      exportAs: "outlet"
    }]
  }], null, {
    name: [{
      type: Input
    }],
    activateEvents: [{
      type: Output,
      args: ["activate"]
    }],
    deactivateEvents: [{
      type: Output,
      args: ["deactivate"]
    }],
    attachEvents: [{
      type: Output,
      args: ["attach"]
    }],
    detachEvents: [{
      type: Output,
      args: ["detach"]
    }]
  });
})();
var OutletInjector = class {
  route;
  childContexts;
  parent;
  outletData;
  constructor(route, childContexts, parent, outletData) {
    this.route = route;
    this.childContexts = childContexts;
    this.parent = parent;
    this.outletData = outletData;
  }
  get(token, notFoundValue) {
    if (token === ActivatedRoute) {
      return this.route;
    }
    if (token === ChildrenOutletContexts) {
      return this.childContexts;
    }
    if (token === ROUTER_OUTLET_DATA) {
      return this.outletData;
    }
    return this.parent.get(token, notFoundValue);
  }
};
var INPUT_BINDER = new InjectionToken("");
var RoutedComponentInputBinder = class _RoutedComponentInputBinder {
  outletDataSubscriptions = /* @__PURE__ */ new Map();
  bindActivatedRouteToOutletComponent(outlet) {
    this.unsubscribeFromRouteData(outlet);
    this.subscribeToRouteData(outlet);
  }
  unsubscribeFromRouteData(outlet) {
    this.outletDataSubscriptions.get(outlet)?.unsubscribe();
    this.outletDataSubscriptions.delete(outlet);
  }
  subscribeToRouteData(outlet) {
    const {
      activatedRoute
    } = outlet;
    const dataSubscription = combineLatest([activatedRoute.queryParams, activatedRoute.params, activatedRoute.data]).pipe(switchMap(([queryParams, params, data], index) => {
      data = __spreadValues(__spreadValues(__spreadValues({}, queryParams), params), data);
      if (index === 0) {
        return of(data);
      }
      return Promise.resolve(data);
    })).subscribe((data) => {
      if (!outlet.isActivated || !outlet.activatedComponentRef || outlet.activatedRoute !== activatedRoute || activatedRoute.component === null) {
        this.unsubscribeFromRouteData(outlet);
        return;
      }
      const mirror = reflectComponentType(activatedRoute.component);
      if (!mirror) {
        this.unsubscribeFromRouteData(outlet);
        return;
      }
      for (const {
        templateName
      } of mirror.inputs) {
        outlet.activatedComponentRef.setInput(templateName, data[templateName]);
      }
    });
    this.outletDataSubscriptions.set(outlet, dataSubscription);
  }
  static \u0275fac = function RoutedComponentInputBinder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoutedComponentInputBinder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RoutedComponentInputBinder,
    factory: _RoutedComponentInputBinder.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoutedComponentInputBinder, [{
    type: Injectable
  }], null, null);
})();
var \u0275EmptyOutletComponent = class _\u0275EmptyOutletComponent {
  static \u0275fac = function \u0275EmptyOutletComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275EmptyOutletComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _\u0275EmptyOutletComponent,
    selectors: [["ng-component"]],
    exportAs: ["emptyRouterOutlet"],
    decls: 1,
    vars: 0,
    template: function _EmptyOutletComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    },
    dependencies: [RouterOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275EmptyOutletComponent, [{
    type: Component,
    args: [{
      template: `<router-outlet/>`,
      imports: [RouterOutlet],
      // Used to avoid component ID collisions with user code.
      exportAs: "emptyRouterOutlet"
    }]
  }], null, null);
})();
function standardizeConfig(r) {
  const children = r.children && r.children.map(standardizeConfig);
  const c = children ? __spreadProps(__spreadValues({}, r), {
    children
  }) : __spreadValues({}, r);
  if (!c.component && !c.loadComponent && (children || c.loadChildren) && c.outlet && c.outlet !== PRIMARY_OUTLET) {
    c.component = \u0275EmptyOutletComponent;
  }
  return c;
}
function createRouterState(routeReuseStrategy, curr, prevState) {
  const root2 = createNode(routeReuseStrategy, curr._root, prevState ? prevState._root : void 0);
  return new RouterState(root2, curr);
}
function createNode(routeReuseStrategy, curr, prevState) {
  if (prevState && routeReuseStrategy.shouldReuseRoute(curr.value, prevState.value.snapshot)) {
    const value = prevState.value;
    value._futureSnapshot = curr.value;
    const children = createOrReuseChildren(routeReuseStrategy, curr, prevState);
    return new TreeNode(value, children);
  } else {
    if (routeReuseStrategy.shouldAttach(curr.value)) {
      const detachedRouteHandle = routeReuseStrategy.retrieve(curr.value);
      if (detachedRouteHandle !== null) {
        const tree2 = detachedRouteHandle.route;
        tree2.value._futureSnapshot = curr.value;
        tree2.children = curr.children.map((c) => createNode(routeReuseStrategy, c));
        return tree2;
      }
    }
    const value = createActivatedRoute(curr.value);
    const children = curr.children.map((c) => createNode(routeReuseStrategy, c));
    return new TreeNode(value, children);
  }
}
function createOrReuseChildren(routeReuseStrategy, curr, prevState) {
  return curr.children.map((child) => {
    for (const p of prevState.children) {
      if (routeReuseStrategy.shouldReuseRoute(child.value, p.value.snapshot)) {
        return createNode(routeReuseStrategy, child, p);
      }
    }
    return createNode(routeReuseStrategy, child);
  });
}
function createActivatedRoute(c) {
  return new ActivatedRoute(new BehaviorSubject(c.url), new BehaviorSubject(c.params), new BehaviorSubject(c.queryParams), new BehaviorSubject(c.fragment), new BehaviorSubject(c.data), c.outlet, c.component, c);
}
var RedirectCommand = class {
  redirectTo;
  navigationBehaviorOptions;
  constructor(redirectTo, navigationBehaviorOptions) {
    this.redirectTo = redirectTo;
    this.navigationBehaviorOptions = navigationBehaviorOptions;
  }
};
var NAVIGATION_CANCELING_ERROR = "ngNavigationCancelingError";
function redirectingNavigationError(urlSerializer, redirect) {
  const {
    redirectTo,
    navigationBehaviorOptions
  } = isUrlTree(redirect) ? {
    redirectTo: redirect,
    navigationBehaviorOptions: void 0
  } : redirect;
  const error = navigationCancelingError(ngDevMode && `Redirecting to "${urlSerializer.serialize(redirectTo)}"`, NavigationCancellationCode.Redirect);
  error.url = redirectTo;
  error.navigationBehaviorOptions = navigationBehaviorOptions;
  return error;
}
function navigationCancelingError(message, code) {
  const error = new Error(`NavigationCancelingError: ${message || ""}`);
  error[NAVIGATION_CANCELING_ERROR] = true;
  error.cancellationCode = code;
  return error;
}
function isRedirectingNavigationCancelingError(error) {
  return isNavigationCancelingError(error) && isUrlTree(error.url);
}
function isNavigationCancelingError(error) {
  return !!error && error[NAVIGATION_CANCELING_ERROR];
}
var warnedAboutUnsupportedInputBinding = false;
var activateRoutes = (rootContexts, routeReuseStrategy, forwardEvent, inputBindingEnabled) => map((t) => {
  new ActivateRoutes(routeReuseStrategy, t.targetRouterState, t.currentRouterState, forwardEvent, inputBindingEnabled).activate(rootContexts);
  return t;
});
var ActivateRoutes = class {
  routeReuseStrategy;
  futureState;
  currState;
  forwardEvent;
  inputBindingEnabled;
  constructor(routeReuseStrategy, futureState, currState, forwardEvent, inputBindingEnabled) {
    this.routeReuseStrategy = routeReuseStrategy;
    this.futureState = futureState;
    this.currState = currState;
    this.forwardEvent = forwardEvent;
    this.inputBindingEnabled = inputBindingEnabled;
  }
  activate(parentContexts) {
    const futureRoot = this.futureState._root;
    const currRoot = this.currState ? this.currState._root : null;
    this.deactivateChildRoutes(futureRoot, currRoot, parentContexts);
    advanceActivatedRoute(this.futureState.root);
    this.activateChildRoutes(futureRoot, currRoot, parentContexts);
  }
  // De-activate the child route that are not re-used for the future state
  deactivateChildRoutes(futureNode, currNode, contexts) {
    const children = nodeChildrenAsMap(currNode);
    futureNode.children.forEach((futureChild) => {
      const childOutletName = futureChild.value.outlet;
      this.deactivateRoutes(futureChild, children[childOutletName], contexts);
      delete children[childOutletName];
    });
    Object.values(children).forEach((v) => {
      this.deactivateRouteAndItsChildren(v, contexts);
    });
  }
  deactivateRoutes(futureNode, currNode, parentContext) {
    const future = futureNode.value;
    const curr = currNode ? currNode.value : null;
    if (future === curr) {
      if (future.component) {
        const context = parentContext.getContext(future.outlet);
        if (context) {
          this.deactivateChildRoutes(futureNode, currNode, context.children);
        }
      } else {
        this.deactivateChildRoutes(futureNode, currNode, parentContext);
      }
    } else {
      if (curr) {
        this.deactivateRouteAndItsChildren(currNode, parentContext);
      }
    }
  }
  deactivateRouteAndItsChildren(route, parentContexts) {
    if (route.value.component && this.routeReuseStrategy.shouldDetach(route.value.snapshot)) {
      this.detachAndStoreRouteSubtree(route, parentContexts);
    } else {
      this.deactivateRouteAndOutlet(route, parentContexts);
    }
  }
  detachAndStoreRouteSubtree(route, parentContexts) {
    const context = parentContexts.getContext(route.value.outlet);
    const contexts = context && route.value.component ? context.children : parentContexts;
    const children = nodeChildrenAsMap(route);
    for (const treeNode of Object.values(children)) {
      this.deactivateRouteAndItsChildren(treeNode, contexts);
    }
    if (context && context.outlet) {
      const componentRef = context.outlet.detach();
      const contexts2 = context.children.onOutletDeactivated();
      this.routeReuseStrategy.store(route.value.snapshot, {
        componentRef,
        route,
        contexts: contexts2
      });
    }
  }
  deactivateRouteAndOutlet(route, parentContexts) {
    const context = parentContexts.getContext(route.value.outlet);
    const contexts = context && route.value.component ? context.children : parentContexts;
    const children = nodeChildrenAsMap(route);
    for (const treeNode of Object.values(children)) {
      this.deactivateRouteAndItsChildren(treeNode, contexts);
    }
    if (context) {
      if (context.outlet) {
        context.outlet.deactivate();
        context.children.onOutletDeactivated();
      }
      context.attachRef = null;
      context.route = null;
    }
  }
  activateChildRoutes(futureNode, currNode, contexts) {
    const children = nodeChildrenAsMap(currNode);
    futureNode.children.forEach((c) => {
      this.activateRoutes(c, children[c.value.outlet], contexts);
      this.forwardEvent(new ActivationEnd(c.value.snapshot));
    });
    if (futureNode.children.length) {
      this.forwardEvent(new ChildActivationEnd(futureNode.value.snapshot));
    }
  }
  activateRoutes(futureNode, currNode, parentContexts) {
    const future = futureNode.value;
    const curr = currNode ? currNode.value : null;
    advanceActivatedRoute(future);
    if (future === curr) {
      if (future.component) {
        const context = parentContexts.getOrCreateContext(future.outlet);
        this.activateChildRoutes(futureNode, currNode, context.children);
      } else {
        this.activateChildRoutes(futureNode, currNode, parentContexts);
      }
    } else {
      if (future.component) {
        const context = parentContexts.getOrCreateContext(future.outlet);
        if (this.routeReuseStrategy.shouldAttach(future.snapshot)) {
          const stored = this.routeReuseStrategy.retrieve(future.snapshot);
          this.routeReuseStrategy.store(future.snapshot, null);
          context.children.onOutletReAttached(stored.contexts);
          context.attachRef = stored.componentRef;
          context.route = stored.route.value;
          if (context.outlet) {
            context.outlet.attach(stored.componentRef, stored.route.value);
          }
          advanceActivatedRoute(stored.route.value);
          this.activateChildRoutes(futureNode, null, context.children);
        } else {
          context.attachRef = null;
          context.route = future;
          if (context.outlet) {
            context.outlet.activateWith(future, context.injector);
          }
          this.activateChildRoutes(futureNode, null, context.children);
        }
      } else {
        this.activateChildRoutes(futureNode, null, parentContexts);
      }
    }
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const context = parentContexts.getOrCreateContext(future.outlet);
      const outlet = context.outlet;
      if (outlet && this.inputBindingEnabled && !outlet.supportsBindingToComponentInputs && !warnedAboutUnsupportedInputBinding) {
        console.warn(`'withComponentInputBinding' feature is enabled but this application is using an outlet that may not support binding to component inputs.`);
        warnedAboutUnsupportedInputBinding = true;
      }
    }
  }
};
var CanActivate = class {
  path;
  route;
  constructor(path) {
    this.path = path;
    this.route = this.path[this.path.length - 1];
  }
};
var CanDeactivate = class {
  component;
  route;
  constructor(component, route) {
    this.component = component;
    this.route = route;
  }
};
function getAllRouteGuards(future, curr, parentContexts) {
  const futureRoot = future._root;
  const currRoot = curr ? curr._root : null;
  return getChildRouteGuards(futureRoot, currRoot, parentContexts, [futureRoot.value]);
}
function getCanActivateChild(p) {
  const canActivateChild = p.routeConfig ? p.routeConfig.canActivateChild : null;
  if (!canActivateChild || canActivateChild.length === 0) return null;
  return {
    node: p,
    guards: canActivateChild
  };
}
function getTokenOrFunctionIdentity(tokenOrFunction, injector) {
  const NOT_FOUND = Symbol();
  const result2 = injector.get(tokenOrFunction, NOT_FOUND);
  if (result2 === NOT_FOUND) {
    if (typeof tokenOrFunction === "function" && !isInjectable(tokenOrFunction)) {
      return tokenOrFunction;
    } else {
      return injector.get(tokenOrFunction);
    }
  }
  return result2;
}
function getChildRouteGuards(futureNode, currNode, contexts, futurePath, checks = {
  canDeactivateChecks: [],
  canActivateChecks: []
}) {
  const prevChildren = nodeChildrenAsMap(currNode);
  futureNode.children.forEach((c) => {
    getRouteGuards(c, prevChildren[c.value.outlet], contexts, futurePath.concat([c.value]), checks);
    delete prevChildren[c.value.outlet];
  });
  Object.entries(prevChildren).forEach(([k, v]) => deactivateRouteAndItsChildren(v, contexts.getContext(k), checks));
  return checks;
}
function getRouteGuards(futureNode, currNode, parentContexts, futurePath, checks = {
  canDeactivateChecks: [],
  canActivateChecks: []
}) {
  const future = futureNode.value;
  const curr = currNode ? currNode.value : null;
  const context = parentContexts ? parentContexts.getContext(futureNode.value.outlet) : null;
  if (curr && future.routeConfig === curr.routeConfig) {
    const shouldRun = shouldRunGuardsAndResolvers(curr, future, future.routeConfig.runGuardsAndResolvers);
    if (shouldRun) {
      checks.canActivateChecks.push(new CanActivate(futurePath));
    } else {
      future.data = curr.data;
      future._resolvedData = curr._resolvedData;
    }
    if (future.component) {
      getChildRouteGuards(futureNode, currNode, context ? context.children : null, futurePath, checks);
    } else {
      getChildRouteGuards(futureNode, currNode, parentContexts, futurePath, checks);
    }
    if (shouldRun && context && context.outlet && context.outlet.isActivated) {
      checks.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, curr));
    }
  } else {
    if (curr) {
      deactivateRouteAndItsChildren(currNode, context, checks);
    }
    checks.canActivateChecks.push(new CanActivate(futurePath));
    if (future.component) {
      getChildRouteGuards(futureNode, null, context ? context.children : null, futurePath, checks);
    } else {
      getChildRouteGuards(futureNode, null, parentContexts, futurePath, checks);
    }
  }
  return checks;
}
function shouldRunGuardsAndResolvers(curr, future, mode) {
  if (typeof mode === "function") {
    return mode(curr, future);
  }
  switch (mode) {
    case "pathParamsChange":
      return !equalPath(curr.url, future.url);
    case "pathParamsOrQueryParamsChange":
      return !equalPath(curr.url, future.url) || !shallowEqual(curr.queryParams, future.queryParams);
    case "always":
      return true;
    case "paramsOrQueryParamsChange":
      return !equalParamsAndUrlSegments(curr, future) || !shallowEqual(curr.queryParams, future.queryParams);
    case "paramsChange":
    default:
      return !equalParamsAndUrlSegments(curr, future);
  }
}
function deactivateRouteAndItsChildren(route, context, checks) {
  const children = nodeChildrenAsMap(route);
  const r = route.value;
  Object.entries(children).forEach(([childName, node]) => {
    if (!r.component) {
      deactivateRouteAndItsChildren(node, context, checks);
    } else if (context) {
      deactivateRouteAndItsChildren(node, context.children.getContext(childName), checks);
    } else {
      deactivateRouteAndItsChildren(node, null, checks);
    }
  });
  if (!r.component) {
    checks.canDeactivateChecks.push(new CanDeactivate(null, r));
  } else if (context && context.outlet && context.outlet.isActivated) {
    checks.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, r));
  } else {
    checks.canDeactivateChecks.push(new CanDeactivate(null, r));
  }
}
function isFunction(v) {
  return typeof v === "function";
}
function isBoolean(v) {
  return typeof v === "boolean";
}
function isCanLoad(guard) {
  return guard && isFunction(guard.canLoad);
}
function isCanActivate(guard) {
  return guard && isFunction(guard.canActivate);
}
function isCanActivateChild(guard) {
  return guard && isFunction(guard.canActivateChild);
}
function isCanDeactivate(guard) {
  return guard && isFunction(guard.canDeactivate);
}
function isCanMatch(guard) {
  return guard && isFunction(guard.canMatch);
}
function isEmptyError(e) {
  return e instanceof EmptyError || e?.name === "EmptyError";
}
var INITIAL_VALUE = /* @__PURE__ */ Symbol("INITIAL_VALUE");
function prioritizedGuardValue() {
  return switchMap((obs) => {
    return combineLatest(obs.map((o) => o.pipe(take(1), startWith(INITIAL_VALUE)))).pipe(map((results) => {
      for (const result2 of results) {
        if (result2 === true) {
          continue;
        } else if (result2 === INITIAL_VALUE) {
          return INITIAL_VALUE;
        } else if (result2 === false || isRedirect(result2)) {
          return result2;
        }
      }
      return true;
    }), filter((item) => item !== INITIAL_VALUE), take(1));
  });
}
function isRedirect(val) {
  return isUrlTree(val) || val instanceof RedirectCommand;
}
function checkGuards(injector, forwardEvent) {
  return mergeMap((t) => {
    const {
      targetSnapshot,
      currentSnapshot,
      guards: {
        canActivateChecks,
        canDeactivateChecks
      }
    } = t;
    if (canDeactivateChecks.length === 0 && canActivateChecks.length === 0) {
      return of(__spreadProps(__spreadValues({}, t), {
        guardsResult: true
      }));
    }
    return runCanDeactivateChecks(canDeactivateChecks, targetSnapshot, currentSnapshot, injector).pipe(mergeMap((canDeactivate) => {
      return canDeactivate && isBoolean(canDeactivate) ? runCanActivateChecks(targetSnapshot, canActivateChecks, injector, forwardEvent) : of(canDeactivate);
    }), map((guardsResult) => __spreadProps(__spreadValues({}, t), {
      guardsResult
    })));
  });
}
function runCanDeactivateChecks(checks, futureRSS, currRSS, injector) {
  return from(checks).pipe(mergeMap((check2) => runCanDeactivate(check2.component, check2.route, currRSS, futureRSS, injector)), first((result2) => {
    return result2 !== true;
  }, true));
}
function runCanActivateChecks(futureSnapshot, checks, injector, forwardEvent) {
  return from(checks).pipe(concatMap((check2) => {
    return concat(fireChildActivationStart(check2.route.parent, forwardEvent), fireActivationStart(check2.route, forwardEvent), runCanActivateChild(futureSnapshot, check2.path, injector), runCanActivate(futureSnapshot, check2.route, injector));
  }), first((result2) => {
    return result2 !== true;
  }, true));
}
function fireActivationStart(snapshot, forwardEvent) {
  if (snapshot !== null && forwardEvent) {
    forwardEvent(new ActivationStart(snapshot));
  }
  return of(true);
}
function fireChildActivationStart(snapshot, forwardEvent) {
  if (snapshot !== null && forwardEvent) {
    forwardEvent(new ChildActivationStart(snapshot));
  }
  return of(true);
}
function runCanActivate(futureRSS, futureARS, injector) {
  const canActivate = futureARS.routeConfig ? futureARS.routeConfig.canActivate : null;
  if (!canActivate || canActivate.length === 0) return of(true);
  const canActivateObservables = canActivate.map((canActivate2) => {
    return defer(() => {
      const closestInjector = getClosestRouteInjector(futureARS) ?? injector;
      const guard = getTokenOrFunctionIdentity(canActivate2, closestInjector);
      const guardVal = isCanActivate(guard) ? guard.canActivate(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => guard(futureARS, futureRSS));
      return wrapIntoObservable(guardVal).pipe(first());
    });
  });
  return of(canActivateObservables).pipe(prioritizedGuardValue());
}
function runCanActivateChild(futureRSS, path, injector) {
  const futureARS = path[path.length - 1];
  const canActivateChildGuards = path.slice(0, path.length - 1).reverse().map((p) => getCanActivateChild(p)).filter((_) => _ !== null);
  const canActivateChildGuardsMapped = canActivateChildGuards.map((d) => {
    return defer(() => {
      const guardsMapped = d.guards.map((canActivateChild) => {
        const closestInjector = getClosestRouteInjector(d.node) ?? injector;
        const guard = getTokenOrFunctionIdentity(canActivateChild, closestInjector);
        const guardVal = isCanActivateChild(guard) ? guard.canActivateChild(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => guard(futureARS, futureRSS));
        return wrapIntoObservable(guardVal).pipe(first());
      });
      return of(guardsMapped).pipe(prioritizedGuardValue());
    });
  });
  return of(canActivateChildGuardsMapped).pipe(prioritizedGuardValue());
}
function runCanDeactivate(component, currARS, currRSS, futureRSS, injector) {
  const canDeactivate = currARS && currARS.routeConfig ? currARS.routeConfig.canDeactivate : null;
  if (!canDeactivate || canDeactivate.length === 0) return of(true);
  const canDeactivateObservables = canDeactivate.map((c) => {
    const closestInjector = getClosestRouteInjector(currARS) ?? injector;
    const guard = getTokenOrFunctionIdentity(c, closestInjector);
    const guardVal = isCanDeactivate(guard) ? guard.canDeactivate(component, currARS, currRSS, futureRSS) : runInInjectionContext(closestInjector, () => guard(component, currARS, currRSS, futureRSS));
    return wrapIntoObservable(guardVal).pipe(first());
  });
  return of(canDeactivateObservables).pipe(prioritizedGuardValue());
}
function runCanLoadGuards(injector, route, segments, urlSerializer) {
  const canLoad = route.canLoad;
  if (canLoad === void 0 || canLoad.length === 0) {
    return of(true);
  }
  const canLoadObservables = canLoad.map((injectionToken) => {
    const guard = getTokenOrFunctionIdentity(injectionToken, injector);
    const guardVal = isCanLoad(guard) ? guard.canLoad(route, segments) : runInInjectionContext(injector, () => guard(route, segments));
    return wrapIntoObservable(guardVal);
  });
  return of(canLoadObservables).pipe(prioritizedGuardValue(), redirectIfUrlTree(urlSerializer));
}
function redirectIfUrlTree(urlSerializer) {
  return pipe(tap((result2) => {
    if (typeof result2 === "boolean") return;
    throw redirectingNavigationError(urlSerializer, result2);
  }), map((result2) => result2 === true));
}
function runCanMatchGuards(injector, route, segments, urlSerializer) {
  const canMatch = route.canMatch;
  if (!canMatch || canMatch.length === 0) return of(true);
  const canMatchObservables = canMatch.map((injectionToken) => {
    const guard = getTokenOrFunctionIdentity(injectionToken, injector);
    const guardVal = isCanMatch(guard) ? guard.canMatch(route, segments) : runInInjectionContext(injector, () => guard(route, segments));
    return wrapIntoObservable(guardVal);
  });
  return of(canMatchObservables).pipe(prioritizedGuardValue(), redirectIfUrlTree(urlSerializer));
}
var NoMatch = class {
  segmentGroup;
  constructor(segmentGroup) {
    this.segmentGroup = segmentGroup || null;
  }
};
var AbsoluteRedirect = class extends Error {
  urlTree;
  constructor(urlTree) {
    super();
    this.urlTree = urlTree;
  }
};
function noMatch$1(segmentGroup) {
  return throwError(new NoMatch(segmentGroup));
}
function namedOutletsRedirect(redirectTo) {
  return throwError(new RuntimeError(4e3, (typeof ngDevMode === "undefined" || ngDevMode) && `Only absolute redirects can have named outlets. redirectTo: '${redirectTo}'`));
}
function canLoadFails(route) {
  return throwError(navigationCancelingError((typeof ngDevMode === "undefined" || ngDevMode) && `Cannot load children because the guard of the route "path: '${route.path}'" returned false`, NavigationCancellationCode.GuardRejected));
}
var ApplyRedirects = class {
  urlSerializer;
  urlTree;
  constructor(urlSerializer, urlTree) {
    this.urlSerializer = urlSerializer;
    this.urlTree = urlTree;
  }
  lineralizeSegments(route, urlTree) {
    let res = [];
    let c = urlTree.root;
    while (true) {
      res = res.concat(c.segments);
      if (c.numberOfChildren === 0) {
        return of(res);
      }
      if (c.numberOfChildren > 1 || !c.children[PRIMARY_OUTLET]) {
        return namedOutletsRedirect(`${route.redirectTo}`);
      }
      c = c.children[PRIMARY_OUTLET];
    }
  }
  applyRedirectCommands(segments, redirectTo, posParams, currentSnapshot, injector) {
    return getRedirectResult(redirectTo, currentSnapshot, injector).pipe(map((redirect) => {
      if (redirect instanceof UrlTree) {
        throw new AbsoluteRedirect(redirect);
      }
      const newTree = this.applyRedirectCreateUrlTree(redirect, this.urlSerializer.parse(redirect), segments, posParams);
      if (redirect[0] === "/") {
        throw new AbsoluteRedirect(newTree);
      }
      return newTree;
    }));
  }
  applyRedirectCreateUrlTree(redirectTo, urlTree, segments, posParams) {
    const newRoot = this.createSegmentGroup(redirectTo, urlTree.root, segments, posParams);
    return new UrlTree(newRoot, this.createQueryParams(urlTree.queryParams, this.urlTree.queryParams), urlTree.fragment);
  }
  createQueryParams(redirectToParams, actualParams) {
    const res = {};
    Object.entries(redirectToParams).forEach(([k, v]) => {
      const copySourceValue = typeof v === "string" && v[0] === ":";
      if (copySourceValue) {
        const sourceName = v.substring(1);
        res[k] = actualParams[sourceName];
      } else {
        res[k] = v;
      }
    });
    return res;
  }
  createSegmentGroup(redirectTo, group, segments, posParams) {
    const updatedSegments = this.createSegments(redirectTo, group.segments, segments, posParams);
    let children = {};
    Object.entries(group.children).forEach(([name, child]) => {
      children[name] = this.createSegmentGroup(redirectTo, child, segments, posParams);
    });
    return new UrlSegmentGroup(updatedSegments, children);
  }
  createSegments(redirectTo, redirectToSegments, actualSegments, posParams) {
    return redirectToSegments.map((s) => s.path[0] === ":" ? this.findPosParam(redirectTo, s, posParams) : this.findOrReturn(s, actualSegments));
  }
  findPosParam(redirectTo, redirectToUrlSegment, posParams) {
    const pos = posParams[redirectToUrlSegment.path.substring(1)];
    if (!pos) throw new RuntimeError(4001, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot redirect to '${redirectTo}'. Cannot find '${redirectToUrlSegment.path}'.`);
    return pos;
  }
  findOrReturn(redirectToUrlSegment, actualSegments) {
    let idx = 0;
    for (const s of actualSegments) {
      if (s.path === redirectToUrlSegment.path) {
        actualSegments.splice(idx);
        return s;
      }
      idx++;
    }
    return redirectToUrlSegment;
  }
};
function getRedirectResult(redirectTo, currentSnapshot, injector) {
  if (typeof redirectTo === "string") {
    return of(redirectTo);
  }
  const redirectToFn = redirectTo;
  const {
    queryParams,
    fragment,
    routeConfig,
    url,
    outlet,
    params,
    data,
    title
  } = currentSnapshot;
  return wrapIntoObservable(runInInjectionContext(injector, () => redirectToFn({
    params,
    data,
    queryParams,
    fragment,
    routeConfig,
    url,
    outlet,
    title
  })));
}
var noMatch = {
  matched: false,
  consumedSegments: [],
  remainingSegments: [],
  parameters: {},
  positionalParamSegments: {}
};
function matchWithChecks(segmentGroup, route, segments, injector, urlSerializer) {
  const result2 = match(segmentGroup, route, segments);
  if (!result2.matched) {
    return of(result2);
  }
  injector = getOrCreateRouteInjectorIfNeeded(route, injector);
  return runCanMatchGuards(injector, route, segments, urlSerializer).pipe(map((v) => v === true ? result2 : __spreadValues({}, noMatch)));
}
function match(segmentGroup, route, segments) {
  if (route.path === "**") {
    return createWildcardMatchResult(segments);
  }
  if (route.path === "") {
    if (route.pathMatch === "full" && (segmentGroup.hasChildren() || segments.length > 0)) {
      return __spreadValues({}, noMatch);
    }
    return {
      matched: true,
      consumedSegments: [],
      remainingSegments: segments,
      parameters: {},
      positionalParamSegments: {}
    };
  }
  const matcher = route.matcher || defaultUrlMatcher;
  const res = matcher(segments, segmentGroup, route);
  if (!res) return __spreadValues({}, noMatch);
  const posParams = {};
  Object.entries(res.posParams ?? {}).forEach(([k, v]) => {
    posParams[k] = v.path;
  });
  const parameters = res.consumed.length > 0 ? __spreadValues(__spreadValues({}, posParams), res.consumed[res.consumed.length - 1].parameters) : posParams;
  return {
    matched: true,
    consumedSegments: res.consumed,
    remainingSegments: segments.slice(res.consumed.length),
    // TODO(atscott): investigate combining parameters and positionalParamSegments
    parameters,
    positionalParamSegments: res.posParams ?? {}
  };
}
function createWildcardMatchResult(segments) {
  return {
    matched: true,
    parameters: segments.length > 0 ? last2(segments).parameters : {},
    consumedSegments: segments,
    remainingSegments: [],
    positionalParamSegments: {}
  };
}
function split(segmentGroup, consumedSegments, slicedSegments, config) {
  if (slicedSegments.length > 0 && containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, config)) {
    const s2 = new UrlSegmentGroup(consumedSegments, createChildrenForEmptyPaths(config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
    return {
      segmentGroup: s2,
      slicedSegments: []
    };
  }
  if (slicedSegments.length === 0 && containsEmptyPathMatches(segmentGroup, slicedSegments, config)) {
    const s2 = new UrlSegmentGroup(segmentGroup.segments, addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
    return {
      segmentGroup: s2,
      slicedSegments
    };
  }
  const s = new UrlSegmentGroup(segmentGroup.segments, segmentGroup.children);
  return {
    segmentGroup: s,
    slicedSegments
  };
}
function addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, routes2, children) {
  const res = {};
  for (const r of routes2) {
    if (emptyPathMatch(segmentGroup, slicedSegments, r) && !children[getOutlet(r)]) {
      const s = new UrlSegmentGroup([], {});
      res[getOutlet(r)] = s;
    }
  }
  return __spreadValues(__spreadValues({}, children), res);
}
function createChildrenForEmptyPaths(routes2, primarySegment) {
  const res = {};
  res[PRIMARY_OUTLET] = primarySegment;
  for (const r of routes2) {
    if (r.path === "" && getOutlet(r) !== PRIMARY_OUTLET) {
      const s = new UrlSegmentGroup([], {});
      res[getOutlet(r)] = s;
    }
  }
  return res;
}
function containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, routes2) {
  return routes2.some((r) => emptyPathMatch(segmentGroup, slicedSegments, r) && getOutlet(r) !== PRIMARY_OUTLET);
}
function containsEmptyPathMatches(segmentGroup, slicedSegments, routes2) {
  return routes2.some((r) => emptyPathMatch(segmentGroup, slicedSegments, r));
}
function emptyPathMatch(segmentGroup, slicedSegments, r) {
  if ((segmentGroup.hasChildren() || slicedSegments.length > 0) && r.pathMatch === "full") {
    return false;
  }
  return r.path === "";
}
function noLeftoversInUrl(segmentGroup, segments, outlet) {
  return segments.length === 0 && !segmentGroup.children[outlet];
}
var NoLeftoversInUrl = class {
};
function recognize$1(injector, configLoader, rootComponentType, config, urlTree, urlSerializer, paramsInheritanceStrategy = "emptyOnly") {
  return new Recognizer(injector, configLoader, rootComponentType, config, urlTree, paramsInheritanceStrategy, urlSerializer).recognize();
}
var MAX_ALLOWED_REDIRECTS = 31;
var Recognizer = class {
  injector;
  configLoader;
  rootComponentType;
  config;
  urlTree;
  paramsInheritanceStrategy;
  urlSerializer;
  applyRedirects;
  absoluteRedirectCount = 0;
  allowRedirects = true;
  constructor(injector, configLoader, rootComponentType, config, urlTree, paramsInheritanceStrategy, urlSerializer) {
    this.injector = injector;
    this.configLoader = configLoader;
    this.rootComponentType = rootComponentType;
    this.config = config;
    this.urlTree = urlTree;
    this.paramsInheritanceStrategy = paramsInheritanceStrategy;
    this.urlSerializer = urlSerializer;
    this.applyRedirects = new ApplyRedirects(this.urlSerializer, this.urlTree);
  }
  noMatchError(e) {
    return new RuntimeError(4002, typeof ngDevMode === "undefined" || ngDevMode ? `Cannot match any routes. URL Segment: '${e.segmentGroup}'` : `'${e.segmentGroup}'`);
  }
  recognize() {
    const rootSegmentGroup = split(this.urlTree.root, [], [], this.config).segmentGroup;
    return this.match(rootSegmentGroup).pipe(map(({
      children,
      rootSnapshot
    }) => {
      const rootNode = new TreeNode(rootSnapshot, children);
      const routeState = new RouterStateSnapshot("", rootNode);
      const tree2 = createUrlTreeFromSnapshot(rootSnapshot, [], this.urlTree.queryParams, this.urlTree.fragment);
      tree2.queryParams = this.urlTree.queryParams;
      routeState.url = this.urlSerializer.serialize(tree2);
      return {
        state: routeState,
        tree: tree2
      };
    }));
  }
  match(rootSegmentGroup) {
    const rootSnapshot = new ActivatedRouteSnapshot([], Object.freeze({}), Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, Object.freeze({}), PRIMARY_OUTLET, this.rootComponentType, null, {});
    return this.processSegmentGroup(this.injector, this.config, rootSegmentGroup, PRIMARY_OUTLET, rootSnapshot).pipe(map((children) => {
      return {
        children,
        rootSnapshot
      };
    }), catchError((e) => {
      if (e instanceof AbsoluteRedirect) {
        this.urlTree = e.urlTree;
        return this.match(e.urlTree.root);
      }
      if (e instanceof NoMatch) {
        throw this.noMatchError(e);
      }
      throw e;
    }));
  }
  processSegmentGroup(injector, config, segmentGroup, outlet, parentRoute) {
    if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
      return this.processChildren(injector, config, segmentGroup, parentRoute);
    }
    return this.processSegment(injector, config, segmentGroup, segmentGroup.segments, outlet, true, parentRoute).pipe(map((child) => child instanceof TreeNode ? [child] : []));
  }
  /**
   * Matches every child outlet in the `segmentGroup` to a `Route` in the config. Returns `null` if
   * we cannot find a match for _any_ of the children.
   *
   * @param config - The `Routes` to match against
   * @param segmentGroup - The `UrlSegmentGroup` whose children need to be matched against the
   *     config.
   */
  processChildren(injector, config, segmentGroup, parentRoute) {
    const childOutlets = [];
    for (const child of Object.keys(segmentGroup.children)) {
      if (child === "primary") {
        childOutlets.unshift(child);
      } else {
        childOutlets.push(child);
      }
    }
    return from(childOutlets).pipe(concatMap((childOutlet) => {
      const child = segmentGroup.children[childOutlet];
      const sortedConfig = sortByMatchingOutlets(config, childOutlet);
      return this.processSegmentGroup(injector, sortedConfig, child, childOutlet, parentRoute);
    }), scan((children, outletChildren) => {
      children.push(...outletChildren);
      return children;
    }), defaultIfEmpty(null), last(), mergeMap((children) => {
      if (children === null) return noMatch$1(segmentGroup);
      const mergedChildren = mergeEmptyPathMatches(children);
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        checkOutletNameUniqueness(mergedChildren);
      }
      sortActivatedRouteSnapshots(mergedChildren);
      return of(mergedChildren);
    }));
  }
  processSegment(injector, routes2, segmentGroup, segments, outlet, allowRedirects, parentRoute) {
    return from(routes2).pipe(concatMap((r) => {
      return this.processSegmentAgainstRoute(r._injector ?? injector, routes2, r, segmentGroup, segments, outlet, allowRedirects, parentRoute).pipe(catchError((e) => {
        if (e instanceof NoMatch) {
          return of(null);
        }
        throw e;
      }));
    }), first((x) => !!x), catchError((e) => {
      if (isEmptyError(e)) {
        if (noLeftoversInUrl(segmentGroup, segments, outlet)) {
          return of(new NoLeftoversInUrl());
        }
        return noMatch$1(segmentGroup);
      }
      throw e;
    }));
  }
  processSegmentAgainstRoute(injector, routes2, route, rawSegment, segments, outlet, allowRedirects, parentRoute) {
    if (getOutlet(route) !== outlet && (outlet === PRIMARY_OUTLET || !emptyPathMatch(rawSegment, segments, route))) {
      return noMatch$1(rawSegment);
    }
    if (route.redirectTo === void 0) {
      return this.matchSegmentAgainstRoute(injector, rawSegment, route, segments, outlet, parentRoute);
    }
    if (this.allowRedirects && allowRedirects) {
      return this.expandSegmentAgainstRouteUsingRedirect(injector, rawSegment, routes2, route, segments, outlet, parentRoute);
    }
    return noMatch$1(rawSegment);
  }
  expandSegmentAgainstRouteUsingRedirect(injector, segmentGroup, routes2, route, segments, outlet, parentRoute) {
    const {
      matched,
      parameters,
      consumedSegments,
      positionalParamSegments,
      remainingSegments
    } = match(segmentGroup, route, segments);
    if (!matched) return noMatch$1(segmentGroup);
    if (typeof route.redirectTo === "string" && route.redirectTo[0] === "/") {
      this.absoluteRedirectCount++;
      if (this.absoluteRedirectCount > MAX_ALLOWED_REDIRECTS) {
        if (ngDevMode) {
          throw new RuntimeError(4016, `Detected possible infinite redirect when redirecting from '${this.urlTree}' to '${route.redirectTo}'.
This is currently a dev mode only error but will become a call stack size exceeded error in production in a future major version.`);
        }
        this.allowRedirects = false;
      }
    }
    const currentSnapshot = new ActivatedRouteSnapshot(segments, parameters, Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, getData(route), getOutlet(route), route.component ?? route._loadedComponent ?? null, route, getResolve(route));
    const inherited = getInherited(currentSnapshot, parentRoute, this.paramsInheritanceStrategy);
    currentSnapshot.params = Object.freeze(inherited.params);
    currentSnapshot.data = Object.freeze(inherited.data);
    const newTree$ = this.applyRedirects.applyRedirectCommands(consumedSegments, route.redirectTo, positionalParamSegments, currentSnapshot, injector);
    return newTree$.pipe(switchMap((newTree) => this.applyRedirects.lineralizeSegments(route, newTree)), mergeMap((newSegments) => {
      return this.processSegment(injector, routes2, segmentGroup, newSegments.concat(remainingSegments), outlet, false, parentRoute);
    }));
  }
  matchSegmentAgainstRoute(injector, rawSegment, route, segments, outlet, parentRoute) {
    const matchResult = matchWithChecks(rawSegment, route, segments, injector, this.urlSerializer);
    if (route.path === "**") {
      rawSegment.children = {};
    }
    return matchResult.pipe(switchMap((result2) => {
      if (!result2.matched) {
        return noMatch$1(rawSegment);
      }
      injector = route._injector ?? injector;
      return this.getChildConfig(injector, route, segments).pipe(switchMap(({
        routes: childConfig
      }) => {
        const childInjector = route._loadedInjector ?? injector;
        const {
          parameters,
          consumedSegments,
          remainingSegments
        } = result2;
        const snapshot = new ActivatedRouteSnapshot(consumedSegments, parameters, Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, getData(route), getOutlet(route), route.component ?? route._loadedComponent ?? null, route, getResolve(route));
        const inherited = getInherited(snapshot, parentRoute, this.paramsInheritanceStrategy);
        snapshot.params = Object.freeze(inherited.params);
        snapshot.data = Object.freeze(inherited.data);
        const {
          segmentGroup,
          slicedSegments
        } = split(rawSegment, consumedSegments, remainingSegments, childConfig);
        if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
          return this.processChildren(childInjector, childConfig, segmentGroup, snapshot).pipe(map((children) => {
            return new TreeNode(snapshot, children);
          }));
        }
        if (childConfig.length === 0 && slicedSegments.length === 0) {
          return of(new TreeNode(snapshot, []));
        }
        const matchedOnOutlet = getOutlet(route) === outlet;
        return this.processSegment(childInjector, childConfig, segmentGroup, slicedSegments, matchedOnOutlet ? PRIMARY_OUTLET : outlet, true, snapshot).pipe(map((child) => {
          return new TreeNode(snapshot, child instanceof TreeNode ? [child] : []);
        }));
      }));
    }));
  }
  getChildConfig(injector, route, segments) {
    if (route.children) {
      return of({
        routes: route.children,
        injector
      });
    }
    if (route.loadChildren) {
      if (route._loadedRoutes !== void 0) {
        return of({
          routes: route._loadedRoutes,
          injector: route._loadedInjector
        });
      }
      return runCanLoadGuards(injector, route, segments, this.urlSerializer).pipe(mergeMap((shouldLoadResult) => {
        if (shouldLoadResult) {
          return this.configLoader.loadChildren(injector, route).pipe(tap((cfg) => {
            route._loadedRoutes = cfg.routes;
            route._loadedInjector = cfg.injector;
          }));
        }
        return canLoadFails(route);
      }));
    }
    return of({
      routes: [],
      injector
    });
  }
};
function sortActivatedRouteSnapshots(nodes) {
  nodes.sort((a, b) => {
    if (a.value.outlet === PRIMARY_OUTLET) return -1;
    if (b.value.outlet === PRIMARY_OUTLET) return 1;
    return a.value.outlet.localeCompare(b.value.outlet);
  });
}
function hasEmptyPathConfig(node) {
  const config = node.value.routeConfig;
  return config && config.path === "";
}
function mergeEmptyPathMatches(nodes) {
  const result2 = [];
  const mergedNodes = /* @__PURE__ */ new Set();
  for (const node of nodes) {
    if (!hasEmptyPathConfig(node)) {
      result2.push(node);
      continue;
    }
    const duplicateEmptyPathNode = result2.find((resultNode) => node.value.routeConfig === resultNode.value.routeConfig);
    if (duplicateEmptyPathNode !== void 0) {
      duplicateEmptyPathNode.children.push(...node.children);
      mergedNodes.add(duplicateEmptyPathNode);
    } else {
      result2.push(node);
    }
  }
  for (const mergedNode of mergedNodes) {
    const mergedChildren = mergeEmptyPathMatches(mergedNode.children);
    result2.push(new TreeNode(mergedNode.value, mergedChildren));
  }
  return result2.filter((n) => !mergedNodes.has(n));
}
function checkOutletNameUniqueness(nodes) {
  const names = {};
  nodes.forEach((n) => {
    const routeWithSameOutletName = names[n.value.outlet];
    if (routeWithSameOutletName) {
      const p = routeWithSameOutletName.url.map((s) => s.toString()).join("/");
      const c = n.value.url.map((s) => s.toString()).join("/");
      throw new RuntimeError(4006, (typeof ngDevMode === "undefined" || ngDevMode) && `Two segments cannot have the same outlet name: '${p}' and '${c}'.`);
    }
    names[n.value.outlet] = n.value;
  });
}
function getData(route) {
  return route.data || {};
}
function getResolve(route) {
  return route.resolve || {};
}
function recognize(injector, configLoader, rootComponentType, config, serializer, paramsInheritanceStrategy) {
  return mergeMap((t) => recognize$1(injector, configLoader, rootComponentType, config, t.extractedUrl, serializer, paramsInheritanceStrategy).pipe(map(({
    state: targetSnapshot,
    tree: urlAfterRedirects
  }) => {
    return __spreadProps(__spreadValues({}, t), {
      targetSnapshot,
      urlAfterRedirects
    });
  })));
}
function resolveData(paramsInheritanceStrategy, injector) {
  return mergeMap((t) => {
    const {
      targetSnapshot,
      guards: {
        canActivateChecks
      }
    } = t;
    if (!canActivateChecks.length) {
      return of(t);
    }
    const routesWithResolversToRun = new Set(canActivateChecks.map((check2) => check2.route));
    const routesNeedingDataUpdates = /* @__PURE__ */ new Set();
    for (const route of routesWithResolversToRun) {
      if (routesNeedingDataUpdates.has(route)) {
        continue;
      }
      for (const newRoute of flattenRouteTree(route)) {
        routesNeedingDataUpdates.add(newRoute);
      }
    }
    let routesProcessed = 0;
    return from(routesNeedingDataUpdates).pipe(concatMap((route) => {
      if (routesWithResolversToRun.has(route)) {
        return runResolve(route, targetSnapshot, paramsInheritanceStrategy, injector);
      } else {
        route.data = getInherited(route, route.parent, paramsInheritanceStrategy).resolve;
        return of(void 0);
      }
    }), tap(() => routesProcessed++), takeLast(1), mergeMap((_) => routesProcessed === routesNeedingDataUpdates.size ? of(t) : EMPTY));
  });
}
function flattenRouteTree(route) {
  const descendants = route.children.map((child) => flattenRouteTree(child)).flat();
  return [route, ...descendants];
}
function runResolve(futureARS, futureRSS, paramsInheritanceStrategy, injector) {
  const config = futureARS.routeConfig;
  const resolve = futureARS._resolve;
  if (config?.title !== void 0 && !hasStaticTitle(config)) {
    resolve[RouteTitleKey] = config.title;
  }
  return defer(() => {
    futureARS.data = getInherited(futureARS, futureARS.parent, paramsInheritanceStrategy).resolve;
    return resolveNode(resolve, futureARS, futureRSS, injector).pipe(map((resolvedData) => {
      futureARS._resolvedData = resolvedData;
      futureARS.data = __spreadValues(__spreadValues({}, futureARS.data), resolvedData);
      return null;
    }));
  });
}
function resolveNode(resolve, futureARS, futureRSS, injector) {
  const keys = getDataKeys(resolve);
  if (keys.length === 0) {
    return of({});
  }
  const data = {};
  return from(keys).pipe(mergeMap((key) => getResolver(resolve[key], futureARS, futureRSS, injector).pipe(first(), tap((value) => {
    if (value instanceof RedirectCommand) {
      throw redirectingNavigationError(new DefaultUrlSerializer(), value);
    }
    data[key] = value;
  }))), takeLast(1), map(() => data), catchError((e) => isEmptyError(e) ? EMPTY : throwError(e)));
}
function getResolver(injectionToken, futureARS, futureRSS, injector) {
  const closestInjector = getClosestRouteInjector(futureARS) ?? injector;
  const resolver = getTokenOrFunctionIdentity(injectionToken, closestInjector);
  const resolverValue = resolver.resolve ? resolver.resolve(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => resolver(futureARS, futureRSS));
  return wrapIntoObservable(resolverValue);
}
function switchTap(next) {
  return switchMap((v) => {
    const nextResult = next(v);
    if (nextResult) {
      return from(nextResult).pipe(map(() => v));
    }
    return of(v);
  });
}
var TitleStrategy = class _TitleStrategy {
  /**
   * @returns The `title` of the deepest primary route.
   */
  buildTitle(snapshot) {
    let pageTitle;
    let route = snapshot.root;
    while (route !== void 0) {
      pageTitle = this.getResolvedTitleForRoute(route) ?? pageTitle;
      route = route.children.find((child) => child.outlet === PRIMARY_OUTLET);
    }
    return pageTitle;
  }
  /**
   * Given an `ActivatedRouteSnapshot`, returns the final value of the
   * `Route.title` property, which can either be a static string or a resolved value.
   */
  getResolvedTitleForRoute(snapshot) {
    return snapshot.data[RouteTitleKey];
  }
  static \u0275fac = function TitleStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TitleStrategy)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TitleStrategy,
    factory: () => (() => inject(DefaultTitleStrategy))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TitleStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(DefaultTitleStrategy)
    }]
  }], null, null);
})();
var DefaultTitleStrategy = class _DefaultTitleStrategy extends TitleStrategy {
  title;
  constructor(title) {
    super();
    this.title = title;
  }
  /**
   * Sets the title of the browser to the given value.
   *
   * @param title The `pageTitle` from the deepest primary route.
   */
  updateTitle(snapshot) {
    const title = this.buildTitle(snapshot);
    if (title !== void 0) {
      this.title.setTitle(title);
    }
  }
  static \u0275fac = function DefaultTitleStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultTitleStrategy)(\u0275\u0275inject(Title));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DefaultTitleStrategy,
    factory: _DefaultTitleStrategy.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultTitleStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Title
  }], null);
})();
var ROUTER_CONFIGURATION = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router config" : "", {
  providedIn: "root",
  factory: () => ({})
});
var ROUTES = new InjectionToken(ngDevMode ? "ROUTES" : "");
var RouterConfigLoader = class _RouterConfigLoader {
  componentLoaders = /* @__PURE__ */ new WeakMap();
  childrenLoaders = /* @__PURE__ */ new WeakMap();
  onLoadStartListener;
  onLoadEndListener;
  compiler = inject(Compiler);
  loadComponent(injector, route) {
    if (this.componentLoaders.get(route)) {
      return this.componentLoaders.get(route);
    } else if (route._loadedComponent) {
      return of(route._loadedComponent);
    }
    if (this.onLoadStartListener) {
      this.onLoadStartListener(route);
    }
    const loadRunner = wrapIntoObservable(runInInjectionContext(injector, () => route.loadComponent())).pipe(map(maybeUnwrapDefaultExport), switchMap(maybeResolveResources), tap((component) => {
      if (this.onLoadEndListener) {
        this.onLoadEndListener(route);
      }
      (typeof ngDevMode === "undefined" || ngDevMode) && assertStandalone(route.path ?? "", component);
      route._loadedComponent = component;
    }), finalize(() => {
      this.componentLoaders.delete(route);
    }));
    const loader = new ConnectableObservable(loadRunner, () => new Subject()).pipe(refCount());
    this.componentLoaders.set(route, loader);
    return loader;
  }
  loadChildren(parentInjector, route) {
    if (this.childrenLoaders.get(route)) {
      return this.childrenLoaders.get(route);
    } else if (route._loadedRoutes) {
      return of({
        routes: route._loadedRoutes,
        injector: route._loadedInjector
      });
    }
    if (this.onLoadStartListener) {
      this.onLoadStartListener(route);
    }
    const moduleFactoryOrRoutes$ = loadChildren(route, this.compiler, parentInjector, this.onLoadEndListener);
    const loadRunner = moduleFactoryOrRoutes$.pipe(finalize(() => {
      this.childrenLoaders.delete(route);
    }));
    const loader = new ConnectableObservable(loadRunner, () => new Subject()).pipe(refCount());
    this.childrenLoaders.set(route, loader);
    return loader;
  }
  static \u0275fac = function RouterConfigLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterConfigLoader)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RouterConfigLoader,
    factory: _RouterConfigLoader.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterConfigLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function loadChildren(route, compiler, parentInjector, onLoadEndListener) {
  return wrapIntoObservable(runInInjectionContext(parentInjector, () => route.loadChildren())).pipe(map(maybeUnwrapDefaultExport), switchMap(maybeResolveResources), mergeMap((t) => {
    if (t instanceof NgModuleFactory$1 || Array.isArray(t)) {
      return of(t);
    } else {
      return from(compiler.compileModuleAsync(t));
    }
  }), map((factoryOrRoutes) => {
    if (onLoadEndListener) {
      onLoadEndListener(route);
    }
    let injector;
    let rawRoutes;
    let requireStandaloneComponents = false;
    if (Array.isArray(factoryOrRoutes)) {
      rawRoutes = factoryOrRoutes;
      requireStandaloneComponents = true;
    } else {
      injector = factoryOrRoutes.create(parentInjector).injector;
      rawRoutes = injector.get(ROUTES, [], {
        optional: true,
        self: true
      }).flat();
    }
    const routes2 = rawRoutes.map(standardizeConfig);
    (typeof ngDevMode === "undefined" || ngDevMode) && validateConfig(routes2, route.path, requireStandaloneComponents);
    return {
      routes: routes2,
      injector
    };
  }));
}
function isWrappedDefaultExport(value) {
  return value && typeof value === "object" && "default" in value;
}
function maybeUnwrapDefaultExport(input2) {
  return isWrappedDefaultExport(input2) ? input2["default"] : input2;
}
function maybeResolveResources(value) {
  if (false) {
    return resolveComponentResources(fetch).catch((error) => {
      console.error(error);
      return Promise.resolve();
    }).then(() => value);
  }
  return of(value);
}
var UrlHandlingStrategy = class _UrlHandlingStrategy {
  static \u0275fac = function UrlHandlingStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UrlHandlingStrategy)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UrlHandlingStrategy,
    factory: () => (() => inject(DefaultUrlHandlingStrategy))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlHandlingStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(DefaultUrlHandlingStrategy)
    }]
  }], null, null);
})();
var DefaultUrlHandlingStrategy = class _DefaultUrlHandlingStrategy {
  shouldProcessUrl(url) {
    return true;
  }
  extract(url) {
    return url;
  }
  merge(newUrlPart, wholeUrl) {
    return newUrlPart;
  }
  static \u0275fac = function DefaultUrlHandlingStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultUrlHandlingStrategy)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DefaultUrlHandlingStrategy,
    factory: _DefaultUrlHandlingStrategy.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultUrlHandlingStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CREATE_VIEW_TRANSITION = new InjectionToken(ngDevMode ? "view transition helper" : "");
var VIEW_TRANSITION_OPTIONS = new InjectionToken(ngDevMode ? "view transition options" : "");
function createViewTransition(injector, from2, to) {
  const transitionOptions = injector.get(VIEW_TRANSITION_OPTIONS);
  const document2 = injector.get(DOCUMENT);
  if (!document2.startViewTransition || transitionOptions.skipNextTransition) {
    transitionOptions.skipNextTransition = false;
    return new Promise((resolve) => setTimeout(resolve));
  }
  let resolveViewTransitionStarted;
  const viewTransitionStarted = new Promise((resolve) => {
    resolveViewTransitionStarted = resolve;
  });
  const transition = document2.startViewTransition(() => {
    resolveViewTransitionStarted();
    return createRenderPromise(injector);
  });
  transition.ready.catch((error) => {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.error(error);
    }
  });
  const {
    onViewTransitionCreated
  } = transitionOptions;
  if (onViewTransitionCreated) {
    runInInjectionContext(injector, () => onViewTransitionCreated({
      transition,
      from: from2,
      to
    }));
  }
  return viewTransitionStarted;
}
function createRenderPromise(injector) {
  return new Promise((resolve) => {
    afterNextRender({
      read: () => setTimeout(resolve)
    }, {
      injector
    });
  });
}
var NAVIGATION_ERROR_HANDLER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "navigation error handler" : "");
var NavigationTransitions = class _NavigationTransitions {
  // Some G3 targets expect the navigation object to be mutated (and not getting a new reference on changes).
  currentNavigation = signal(null, ...ngDevMode ? [{
    debugName: "currentNavigation",
    equal: () => false
  }] : [{
    equal: () => false
  }]);
  currentTransition = null;
  lastSuccessfulNavigation = null;
  /**
   * These events are used to communicate back to the Router about the state of the transition. The
   * Router wants to respond to these events in various ways. Because the `NavigationTransition`
   * class is not public, this event subject is not publicly exposed.
   */
  events = new Subject();
  /**
   * Used to abort the current transition with an error.
   */
  transitionAbortWithErrorSubject = new Subject();
  configLoader = inject(RouterConfigLoader);
  environmentInjector = inject(EnvironmentInjector);
  destroyRef = inject(DestroyRef);
  urlSerializer = inject(UrlSerializer);
  rootContexts = inject(ChildrenOutletContexts);
  location = inject(Location);
  inputBindingEnabled = inject(INPUT_BINDER, {
    optional: true
  }) !== null;
  titleStrategy = inject(TitleStrategy);
  options = inject(ROUTER_CONFIGURATION, {
    optional: true
  }) || {};
  paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly";
  urlHandlingStrategy = inject(UrlHandlingStrategy);
  createViewTransition = inject(CREATE_VIEW_TRANSITION, {
    optional: true
  });
  navigationErrorHandler = inject(NAVIGATION_ERROR_HANDLER, {
    optional: true
  });
  navigationId = 0;
  get hasRequestedNavigation() {
    return this.navigationId !== 0;
  }
  transitions;
  /**
   * Hook that enables you to pause navigation after the preactivation phase.
   * Used by `RouterModule`.
   *
   * @internal
   */
  afterPreactivation = () => of(void 0);
  /** @internal */
  rootComponentType = null;
  destroyed = false;
  constructor() {
    const onLoadStart = (r) => this.events.next(new RouteConfigLoadStart(r));
    const onLoadEnd = (r) => this.events.next(new RouteConfigLoadEnd(r));
    this.configLoader.onLoadEndListener = onLoadEnd;
    this.configLoader.onLoadStartListener = onLoadStart;
    this.destroyRef.onDestroy(() => {
      this.destroyed = true;
    });
  }
  complete() {
    this.transitions?.complete();
  }
  handleNavigationRequest(request) {
    const id = ++this.navigationId;
    untracked(() => {
      this.transitions?.next(__spreadProps(__spreadValues({}, request), {
        extractedUrl: this.urlHandlingStrategy.extract(request.rawUrl),
        targetSnapshot: null,
        targetRouterState: null,
        guards: {
          canActivateChecks: [],
          canDeactivateChecks: []
        },
        guardsResult: null,
        abortController: new AbortController(),
        id
      }));
    });
  }
  setupNavigations(router) {
    this.transitions = new BehaviorSubject(null);
    return this.transitions.pipe(
      filter((t) => t !== null),
      // Using switchMap so we cancel executing navigations when a new one comes in
      switchMap((overallTransitionState) => {
        let completedOrAborted = false;
        return of(overallTransitionState).pipe(
          switchMap((t) => {
            if (this.navigationId > overallTransitionState.id) {
              const cancellationReason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation ID ${overallTransitionState.id} is not equal to the current navigation id ${this.navigationId}` : "";
              this.cancelNavigationTransition(overallTransitionState, cancellationReason, NavigationCancellationCode.SupersededByNewNavigation);
              return EMPTY;
            }
            this.currentTransition = overallTransitionState;
            this.currentNavigation.set({
              id: t.id,
              initialUrl: t.rawUrl,
              extractedUrl: t.extractedUrl,
              targetBrowserUrl: typeof t.extras.browserUrl === "string" ? this.urlSerializer.parse(t.extras.browserUrl) : t.extras.browserUrl,
              trigger: t.source,
              extras: t.extras,
              previousNavigation: !this.lastSuccessfulNavigation ? null : __spreadProps(__spreadValues({}, this.lastSuccessfulNavigation), {
                previousNavigation: null
              }),
              abort: () => t.abortController.abort()
            });
            const urlTransition = !router.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl();
            const onSameUrlNavigation = t.extras.onSameUrlNavigation ?? router.onSameUrlNavigation;
            if (!urlTransition && onSameUrlNavigation !== "reload") {
              const reason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation to ${t.rawUrl} was ignored because it is the same as the current Router URL.` : "";
              this.events.next(new NavigationSkipped(t.id, this.urlSerializer.serialize(t.rawUrl), reason, NavigationSkippedCode.IgnoredSameUrlNavigation));
              t.resolve(false);
              return EMPTY;
            }
            if (this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)) {
              return of(t).pipe(
                // Fire NavigationStart event
                switchMap((t2) => {
                  this.events.next(new NavigationStart(t2.id, this.urlSerializer.serialize(t2.extractedUrl), t2.source, t2.restoredState));
                  if (t2.id !== this.navigationId) {
                    return EMPTY;
                  }
                  return Promise.resolve(t2);
                }),
                // Recognize
                recognize(this.environmentInjector, this.configLoader, this.rootComponentType, router.config, this.urlSerializer, this.paramsInheritanceStrategy),
                // Update URL if in `eager` update mode
                tap((t2) => {
                  overallTransitionState.targetSnapshot = t2.targetSnapshot;
                  overallTransitionState.urlAfterRedirects = t2.urlAfterRedirects;
                  this.currentNavigation.update((nav) => {
                    nav.finalUrl = t2.urlAfterRedirects;
                    return nav;
                  });
                  const routesRecognized = new RoutesRecognized(t2.id, this.urlSerializer.serialize(t2.extractedUrl), this.urlSerializer.serialize(t2.urlAfterRedirects), t2.targetSnapshot);
                  this.events.next(routesRecognized);
                })
              );
            } else if (urlTransition && this.urlHandlingStrategy.shouldProcessUrl(t.currentRawUrl)) {
              const {
                id,
                extractedUrl,
                source,
                restoredState,
                extras: extras2
              } = t;
              const navStart = new NavigationStart(id, this.urlSerializer.serialize(extractedUrl), source, restoredState);
              this.events.next(navStart);
              const targetSnapshot = createEmptyState(this.rootComponentType).snapshot;
              this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t), {
                targetSnapshot,
                urlAfterRedirects: extractedUrl,
                extras: __spreadProps(__spreadValues({}, extras2), {
                  skipLocationChange: false,
                  replaceUrl: false
                })
              });
              this.currentNavigation.update((nav) => {
                nav.finalUrl = extractedUrl;
                return nav;
              });
              return of(overallTransitionState);
            } else {
              const reason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation was ignored because the UrlHandlingStrategy indicated neither the current URL ${t.currentRawUrl} nor target URL ${t.rawUrl} should be processed.` : "";
              this.events.next(new NavigationSkipped(t.id, this.urlSerializer.serialize(t.extractedUrl), reason, NavigationSkippedCode.IgnoredByUrlHandlingStrategy));
              t.resolve(false);
              return EMPTY;
            }
          }),
          // --- GUARDS ---
          tap((t) => {
            const guardsStart = new GuardsCheckStart(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot);
            this.events.next(guardsStart);
          }),
          map((t) => {
            this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t), {
              guards: getAllRouteGuards(t.targetSnapshot, t.currentSnapshot, this.rootContexts)
            });
            return overallTransitionState;
          }),
          checkGuards(this.environmentInjector, (evt) => this.events.next(evt)),
          tap((t) => {
            overallTransitionState.guardsResult = t.guardsResult;
            if (t.guardsResult && typeof t.guardsResult !== "boolean") {
              throw redirectingNavigationError(this.urlSerializer, t.guardsResult);
            }
            const guardsEnd = new GuardsCheckEnd(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot, !!t.guardsResult);
            this.events.next(guardsEnd);
          }),
          filter((t) => {
            if (!t.guardsResult) {
              this.cancelNavigationTransition(t, "", NavigationCancellationCode.GuardRejected);
              return false;
            }
            return true;
          }),
          // --- RESOLVE ---
          switchTap((t) => {
            if (t.guards.canActivateChecks.length === 0) {
              return void 0;
            }
            return of(t).pipe(tap((t2) => {
              const resolveStart = new ResolveStart(t2.id, this.urlSerializer.serialize(t2.extractedUrl), this.urlSerializer.serialize(t2.urlAfterRedirects), t2.targetSnapshot);
              this.events.next(resolveStart);
            }), switchMap((t2) => {
              let dataResolved = false;
              return of(t2).pipe(resolveData(this.paramsInheritanceStrategy, this.environmentInjector), tap({
                next: () => dataResolved = true,
                complete: () => {
                  if (!dataResolved) {
                    this.cancelNavigationTransition(t2, typeof ngDevMode === "undefined" || ngDevMode ? `At least one route resolver didn't emit any value.` : "", NavigationCancellationCode.NoDataFromResolver);
                  }
                }
              }));
            }), tap((t2) => {
              const resolveEnd = new ResolveEnd(t2.id, this.urlSerializer.serialize(t2.extractedUrl), this.urlSerializer.serialize(t2.urlAfterRedirects), t2.targetSnapshot);
              this.events.next(resolveEnd);
            }));
          }),
          // --- LOAD COMPONENTS ---
          switchTap((t) => {
            const loadComponents = (route) => {
              const loaders = [];
              if (route.routeConfig?.loadComponent) {
                const injector = getClosestRouteInjector(route) ?? this.environmentInjector;
                loaders.push(this.configLoader.loadComponent(injector, route.routeConfig).pipe(tap((loadedComponent) => {
                  route.component = loadedComponent;
                }), map(() => void 0)));
              }
              for (const child of route.children) {
                loaders.push(...loadComponents(child));
              }
              return loaders;
            };
            return combineLatest(loadComponents(t.targetSnapshot.root)).pipe(defaultIfEmpty(null), take(1));
          }),
          switchTap(() => this.afterPreactivation()),
          switchMap(() => {
            const {
              currentSnapshot,
              targetSnapshot
            } = overallTransitionState;
            const viewTransitionStarted = this.createViewTransition?.(this.environmentInjector, currentSnapshot.root, targetSnapshot.root);
            return viewTransitionStarted ? from(viewTransitionStarted).pipe(map(() => overallTransitionState)) : of(overallTransitionState);
          }),
          map((t) => {
            const targetRouterState = createRouterState(router.routeReuseStrategy, t.targetSnapshot, t.currentRouterState);
            this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t), {
              targetRouterState
            });
            this.currentNavigation.update((nav) => {
              nav.targetRouterState = targetRouterState;
              return nav;
            });
            return overallTransitionState;
          }),
          tap(() => {
            this.events.next(new BeforeActivateRoutes());
          }),
          activateRoutes(this.rootContexts, router.routeReuseStrategy, (evt) => this.events.next(evt), this.inputBindingEnabled),
          // Ensure that if some observable used to drive the transition doesn't
          // complete, the navigation still finalizes This should never happen, but
          // this is done as a safety measure to avoid surfacing this error (#49567).
          take(1),
          takeUntil(new Observable((subscriber) => {
            const abortSignal = overallTransitionState.abortController.signal;
            const handler = () => subscriber.next();
            abortSignal.addEventListener("abort", handler);
            return () => abortSignal.removeEventListener("abort", handler);
          }).pipe(
            // Ignore aborts if we are already completed, canceled, or are in the activation stage (we have targetRouterState)
            filter(() => !completedOrAborted && !overallTransitionState.targetRouterState),
            tap(() => {
              this.cancelNavigationTransition(overallTransitionState, overallTransitionState.abortController.signal.reason + "", NavigationCancellationCode.Aborted);
            })
          )),
          tap({
            next: (t) => {
              completedOrAborted = true;
              this.lastSuccessfulNavigation = untracked(this.currentNavigation);
              this.events.next(new NavigationEnd(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects)));
              this.titleStrategy?.updateTitle(t.targetRouterState.snapshot);
              t.resolve(true);
            },
            complete: () => {
              completedOrAborted = true;
            }
          }),
          // There used to be a lot more logic happening directly within the
          // transition Observable. Some of this logic has been refactored out to
          // other places but there may still be errors that happen there. This gives
          // us a way to cancel the transition from the outside. This may also be
          // required in the future to support something like the abort signal of the
          // Navigation API where the navigation gets aborted from outside the
          // transition.
          takeUntil(this.transitionAbortWithErrorSubject.pipe(tap((err) => {
            throw err;
          }))),
          finalize(() => {
            if (!completedOrAborted) {
              const cancelationReason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation ID ${overallTransitionState.id} is not equal to the current navigation id ${this.navigationId}` : "";
              this.cancelNavigationTransition(overallTransitionState, cancelationReason, NavigationCancellationCode.SupersededByNewNavigation);
            }
            if (this.currentTransition?.id === overallTransitionState.id) {
              this.currentNavigation.set(null);
              this.currentTransition = null;
            }
          }),
          catchError((e) => {
            if (this.destroyed) {
              overallTransitionState.resolve(false);
              return EMPTY;
            }
            completedOrAborted = true;
            if (isNavigationCancelingError(e)) {
              this.events.next(new NavigationCancel(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), e.message, e.cancellationCode));
              if (!isRedirectingNavigationCancelingError(e)) {
                overallTransitionState.resolve(false);
              } else {
                this.events.next(new RedirectRequest(e.url, e.navigationBehaviorOptions));
              }
            } else {
              const navigationError = new NavigationError(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), e, overallTransitionState.targetSnapshot ?? void 0);
              try {
                const navigationErrorHandlerResult = runInInjectionContext(this.environmentInjector, () => this.navigationErrorHandler?.(navigationError));
                if (navigationErrorHandlerResult instanceof RedirectCommand) {
                  const {
                    message,
                    cancellationCode
                  } = redirectingNavigationError(this.urlSerializer, navigationErrorHandlerResult);
                  this.events.next(new NavigationCancel(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), message, cancellationCode));
                  this.events.next(new RedirectRequest(navigationErrorHandlerResult.redirectTo, navigationErrorHandlerResult.navigationBehaviorOptions));
                } else {
                  this.events.next(navigationError);
                  throw e;
                }
              } catch (ee) {
                if (this.options.resolveNavigationPromiseOnError) {
                  overallTransitionState.resolve(false);
                } else {
                  overallTransitionState.reject(ee);
                }
              }
            }
            return EMPTY;
          })
        );
      })
    );
  }
  cancelNavigationTransition(t, reason, code) {
    const navCancel = new NavigationCancel(t.id, this.urlSerializer.serialize(t.extractedUrl), reason, code);
    this.events.next(navCancel);
    t.resolve(false);
  }
  /**
   * @returns Whether we're navigating to somewhere that is not what the Router is
   * currently set to.
   */
  isUpdatingInternalState() {
    return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString();
  }
  /**
   * @returns Whether we're updating the browser URL to something new (navigation is going
   * to somewhere not displayed in the URL bar and we will update the URL
   * bar if navigation succeeds).
   */
  isUpdatedBrowserUrl() {
    const currentBrowserUrl = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(true)));
    const currentNavigation = untracked(this.currentNavigation);
    const targetBrowserUrl = currentNavigation?.targetBrowserUrl ?? currentNavigation?.extractedUrl;
    return currentBrowserUrl.toString() !== targetBrowserUrl?.toString() && !currentNavigation?.extras.skipLocationChange;
  }
  static \u0275fac = function NavigationTransitions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavigationTransitions)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NavigationTransitions,
    factory: _NavigationTransitions.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationTransitions, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function isBrowserTriggeredNavigation(source) {
  return source !== IMPERATIVE_NAVIGATION;
}
var RouteReuseStrategy = class _RouteReuseStrategy {
  static \u0275fac = function RouteReuseStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouteReuseStrategy)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RouteReuseStrategy,
    factory: () => (() => inject(DefaultRouteReuseStrategy))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouteReuseStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(DefaultRouteReuseStrategy)
    }]
  }], null, null);
})();
var BaseRouteReuseStrategy = class {
  /**
   * Whether the given route should detach for later reuse.
   * Always returns false for `BaseRouteReuseStrategy`.
   * */
  shouldDetach(route) {
    return false;
  }
  /**
   * A no-op; the route is never stored since this strategy never detaches routes for later re-use.
   */
  store(route, detachedTree) {
  }
  /** Returns `false`, meaning the route (and its subtree) is never reattached */
  shouldAttach(route) {
    return false;
  }
  /** Returns `null` because this strategy does not store routes for later re-use. */
  retrieve(route) {
    return null;
  }
  /**
   * Determines if a route should be reused.
   * This strategy returns `true` when the future route config and current route config are
   * identical.
   */
  shouldReuseRoute(future, curr) {
    return future.routeConfig === curr.routeConfig;
  }
};
var DefaultRouteReuseStrategy = class _DefaultRouteReuseStrategy extends BaseRouteReuseStrategy {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DefaultRouteReuseStrategy_BaseFactory;
    return function DefaultRouteReuseStrategy_Factory(__ngFactoryType__) {
      return (\u0275DefaultRouteReuseStrategy_BaseFactory || (\u0275DefaultRouteReuseStrategy_BaseFactory = \u0275\u0275getInheritedFactory(_DefaultRouteReuseStrategy)))(__ngFactoryType__ || _DefaultRouteReuseStrategy);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DefaultRouteReuseStrategy,
    factory: _DefaultRouteReuseStrategy.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultRouteReuseStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var StateManager = class _StateManager {
  urlSerializer = inject(UrlSerializer);
  options = inject(ROUTER_CONFIGURATION, {
    optional: true
  }) || {};
  canceledNavigationResolution = this.options.canceledNavigationResolution || "replace";
  location = inject(Location);
  urlHandlingStrategy = inject(UrlHandlingStrategy);
  urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
  currentUrlTree = new UrlTree();
  /**
   * Returns the currently activated `UrlTree`.
   *
   * This `UrlTree` shows only URLs that the `Router` is configured to handle (through
   * `UrlHandlingStrategy`).
   *
   * The value is set after finding the route config tree to activate but before activating the
   * route.
   */
  getCurrentUrlTree() {
    return this.currentUrlTree;
  }
  rawUrlTree = this.currentUrlTree;
  /**
   * Returns a `UrlTree` that is represents what the browser is actually showing.
   *
   * In the life of a navigation transition:
   * 1. When a navigation begins, the raw `UrlTree` is updated to the full URL that's being
   * navigated to.
   * 2. During a navigation, redirects are applied, which might only apply to _part_ of the URL (due
   * to `UrlHandlingStrategy`).
   * 3. Just before activation, the raw `UrlTree` is updated to include the redirects on top of the
   * original raw URL.
   *
   * Note that this is _only_ here to support `UrlHandlingStrategy.extract` and
   * `UrlHandlingStrategy.shouldProcessUrl`. Without those APIs, the current `UrlTree` would not
   * deviated from the raw `UrlTree`.
   *
   * For `extract`, a raw `UrlTree` is needed because `extract` may only return part
   * of the navigation URL. Thus, the current `UrlTree` may only represent _part_ of the browser
   * URL. When a navigation gets cancelled and the router needs to reset the URL or a new navigation
   * occurs, it needs to know the _whole_ browser URL, not just the part handled by
   * `UrlHandlingStrategy`.
   * For `shouldProcessUrl`, when the return is `false`, the router ignores the navigation but
   * still updates the raw `UrlTree` with the assumption that the navigation was caused by the
   * location change listener due to a URL update by the AngularJS router. In this case, the router
   * still need to know what the browser's URL is for future navigations.
   */
  getRawUrlTree() {
    return this.rawUrlTree;
  }
  createBrowserPath({
    finalUrl,
    initialUrl,
    targetBrowserUrl
  }) {
    const rawUrl = finalUrl !== void 0 ? this.urlHandlingStrategy.merge(finalUrl, initialUrl) : initialUrl;
    const url = targetBrowserUrl ?? rawUrl;
    const path = url instanceof UrlTree ? this.urlSerializer.serialize(url) : url;
    return path;
  }
  commitTransition({
    targetRouterState,
    finalUrl,
    initialUrl
  }) {
    if (finalUrl && targetRouterState) {
      this.currentUrlTree = finalUrl;
      this.rawUrlTree = this.urlHandlingStrategy.merge(finalUrl, initialUrl);
      this.routerState = targetRouterState;
    } else {
      this.rawUrlTree = initialUrl;
    }
  }
  routerState = createEmptyState(null);
  /** Returns the current RouterState. */
  getRouterState() {
    return this.routerState;
  }
  stateMemento = this.createStateMemento();
  updateStateMemento() {
    this.stateMemento = this.createStateMemento();
  }
  createStateMemento() {
    return {
      rawUrlTree: this.rawUrlTree,
      currentUrlTree: this.currentUrlTree,
      routerState: this.routerState
    };
  }
  resetInternalState({
    finalUrl
  }) {
    this.routerState = this.stateMemento.routerState;
    this.currentUrlTree = this.stateMemento.currentUrlTree;
    this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, finalUrl ?? this.rawUrlTree);
  }
  static \u0275fac = function StateManager_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StateManager)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StateManager,
    factory: () => (() => inject(HistoryStateManager))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StateManager, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(HistoryStateManager)
    }]
  }], null, null);
})();
var HistoryStateManager = class _HistoryStateManager extends StateManager {
  /**
   * The id of the currently active page in the router.
   * Updated to the transition's target id on a successful navigation.
   *
   * This is used to track what page the router last activated. When an attempted navigation fails,
   * the router can then use this to compute how to restore the state back to the previously active
   * page.
   */
  currentPageId = 0;
  lastSuccessfulId = -1;
  restoredState() {
    return this.location.getState();
  }
  /**
   * The ɵrouterPageId of whatever page is currently active in the browser history. This is
   * important for computing the target page id for new navigations because we need to ensure each
   * page id in the browser history is 1 more than the previous entry.
   */
  get browserPageId() {
    if (this.canceledNavigationResolution !== "computed") {
      return this.currentPageId;
    }
    return this.restoredState()?.\u0275routerPageId ?? this.currentPageId;
  }
  registerNonRouterCurrentEntryChangeListener(listener) {
    return this.location.subscribe((event) => {
      if (event["type"] === "popstate") {
        setTimeout(() => {
          listener(event["url"], event.state, "popstate");
        });
      }
    });
  }
  handleRouterEvent(e, currentTransition) {
    if (e instanceof NavigationStart) {
      this.updateStateMemento();
    } else if (e instanceof NavigationSkipped) {
      this.commitTransition(currentTransition);
    } else if (e instanceof RoutesRecognized) {
      if (this.urlUpdateStrategy === "eager") {
        if (!currentTransition.extras.skipLocationChange) {
          this.setBrowserUrl(this.createBrowserPath(currentTransition), currentTransition);
        }
      }
    } else if (e instanceof BeforeActivateRoutes) {
      this.commitTransition(currentTransition);
      if (this.urlUpdateStrategy === "deferred" && !currentTransition.extras.skipLocationChange) {
        this.setBrowserUrl(this.createBrowserPath(currentTransition), currentTransition);
      }
    } else if (e instanceof NavigationCancel && e.code !== NavigationCancellationCode.SupersededByNewNavigation && e.code !== NavigationCancellationCode.Redirect) {
      this.restoreHistory(currentTransition);
    } else if (e instanceof NavigationError) {
      this.restoreHistory(currentTransition, true);
    } else if (e instanceof NavigationEnd) {
      this.lastSuccessfulId = e.id;
      this.currentPageId = this.browserPageId;
    }
  }
  setBrowserUrl(path, {
    extras: extras2,
    id
  }) {
    const {
      replaceUrl,
      state
    } = extras2;
    if (this.location.isCurrentPathEqualTo(path) || !!replaceUrl) {
      const currentBrowserPageId = this.browserPageId;
      const newState = __spreadValues(__spreadValues({}, state), this.generateNgRouterState(id, currentBrowserPageId));
      this.location.replaceState(path, "", newState);
    } else {
      const newState = __spreadValues(__spreadValues({}, state), this.generateNgRouterState(id, this.browserPageId + 1));
      this.location.go(path, "", newState);
    }
  }
  /**
   * Performs the necessary rollback action to restore the browser URL to the
   * state before the transition.
   */
  restoreHistory(navigation, restoringFromCaughtError = false) {
    if (this.canceledNavigationResolution === "computed") {
      const currentBrowserPageId = this.browserPageId;
      const targetPagePosition = this.currentPageId - currentBrowserPageId;
      if (targetPagePosition !== 0) {
        this.location.historyGo(targetPagePosition);
      } else if (this.getCurrentUrlTree() === navigation.finalUrl && targetPagePosition === 0) {
        this.resetInternalState(navigation);
        this.resetUrlToCurrentUrlTree();
      } else ;
    } else if (this.canceledNavigationResolution === "replace") {
      if (restoringFromCaughtError) {
        this.resetInternalState(navigation);
      }
      this.resetUrlToCurrentUrlTree();
    }
  }
  resetUrlToCurrentUrlTree() {
    this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId));
  }
  generateNgRouterState(navigationId, routerPageId) {
    if (this.canceledNavigationResolution === "computed") {
      return {
        navigationId,
        \u0275routerPageId: routerPageId
      };
    }
    return {
      navigationId
    };
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275HistoryStateManager_BaseFactory;
    return function HistoryStateManager_Factory(__ngFactoryType__) {
      return (\u0275HistoryStateManager_BaseFactory || (\u0275HistoryStateManager_BaseFactory = \u0275\u0275getInheritedFactory(_HistoryStateManager)))(__ngFactoryType__ || _HistoryStateManager);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _HistoryStateManager,
    factory: _HistoryStateManager.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistoryStateManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function afterNextNavigation(router, action) {
  router.events.pipe(filter((e) => e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError || e instanceof NavigationSkipped), map((e) => {
    if (e instanceof NavigationEnd || e instanceof NavigationSkipped) {
      return 0;
    }
    const redirecting = e instanceof NavigationCancel ? e.code === NavigationCancellationCode.Redirect || e.code === NavigationCancellationCode.SupersededByNewNavigation : false;
    return redirecting ? 2 : 1;
  }), filter(
    (result2) => result2 !== 2
    /* NavigationResult.REDIRECTING */
  ), take(1)).subscribe(() => {
    action();
  });
}
var exactMatchOptions = {
  paths: "exact",
  fragment: "ignored",
  matrixParams: "ignored",
  queryParams: "exact"
};
var subsetMatchOptions = {
  paths: "subset",
  fragment: "ignored",
  matrixParams: "ignored",
  queryParams: "subset"
};
var Router = class _Router {
  get currentUrlTree() {
    return this.stateManager.getCurrentUrlTree();
  }
  get rawUrlTree() {
    return this.stateManager.getRawUrlTree();
  }
  disposed = false;
  nonRouterCurrentEntryChangeSubscription;
  console = inject(Console);
  stateManager = inject(StateManager);
  options = inject(ROUTER_CONFIGURATION, {
    optional: true
  }) || {};
  pendingTasks = inject(PendingTasksInternal);
  urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
  navigationTransitions = inject(NavigationTransitions);
  urlSerializer = inject(UrlSerializer);
  location = inject(Location);
  urlHandlingStrategy = inject(UrlHandlingStrategy);
  injector = inject(EnvironmentInjector);
  /**
   * The private `Subject` type for the public events exposed in the getter. This is used internally
   * to push events to. The separate field allows us to expose separate types in the public API
   * (i.e., an Observable rather than the Subject).
   */
  _events = new Subject();
  /**
   * An event stream for routing events.
   */
  get events() {
    return this._events;
  }
  /**
   * The current state of routing in this NgModule.
   */
  get routerState() {
    return this.stateManager.getRouterState();
  }
  /**
   * True if at least one navigation event has occurred,
   * false otherwise.
   */
  navigated = false;
  /**
   * A strategy for re-using routes.
   *
   * @deprecated Configure using `providers` instead:
   *   `{provide: RouteReuseStrategy, useClass: MyStrategy}`.
   */
  routeReuseStrategy = inject(RouteReuseStrategy);
  /**
   * How to handle a navigation request to the current URL.
   *
   *
   * @deprecated Configure this through `provideRouter` or `RouterModule.forRoot` instead.
   * @see {@link withRouterConfig}
   * @see {@link provideRouter}
   * @see {@link RouterModule}
   */
  onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
  config = inject(ROUTES, {
    optional: true
  })?.flat() ?? [];
  /**
   * Indicates whether the application has opted in to binding Router data to component inputs.
   *
   * This option is enabled by the `withComponentInputBinding` feature of `provideRouter` or
   * `bindToComponentInputs` in the `ExtraOptions` of `RouterModule.forRoot`.
   */
  componentInputBindingEnabled = !!inject(INPUT_BINDER, {
    optional: true
  });
  /**
   * Signal of the current `Navigation` object when the router is navigating, and `null` when idle.
   *
   * Note: The current navigation becomes to null after the NavigationEnd event is emitted.
   */
  currentNavigation = this.navigationTransitions.currentNavigation.asReadonly();
  constructor() {
    this.resetConfig(this.config);
    this.navigationTransitions.setupNavigations(this).subscribe({
      error: (e) => {
        this.console.warn(ngDevMode ? `Unhandled Navigation Error: ${e}` : e);
      }
    });
    this.subscribeToNavigationEvents();
  }
  eventsSubscription = new Subscription();
  subscribeToNavigationEvents() {
    const subscription = this.navigationTransitions.events.subscribe((e) => {
      try {
        const currentTransition = this.navigationTransitions.currentTransition;
        const currentNavigation = untracked(this.navigationTransitions.currentNavigation);
        if (currentTransition !== null && currentNavigation !== null) {
          this.stateManager.handleRouterEvent(e, currentNavigation);
          if (e instanceof NavigationCancel && e.code !== NavigationCancellationCode.Redirect && e.code !== NavigationCancellationCode.SupersededByNewNavigation) {
            this.navigated = true;
          } else if (e instanceof NavigationEnd) {
            this.navigated = true;
          } else if (e instanceof RedirectRequest) {
            const opts = e.navigationBehaviorOptions;
            const mergedTree = this.urlHandlingStrategy.merge(e.url, currentTransition.currentRawUrl);
            const extras2 = __spreadValues({
              browserUrl: currentTransition.extras.browserUrl,
              info: currentTransition.extras.info,
              skipLocationChange: currentTransition.extras.skipLocationChange,
              // The URL is already updated at this point if we have 'eager' URL
              // updates or if the navigation was triggered by the browser (back
              // button, URL bar, etc). We want to replace that item in history
              // if the navigation is rejected.
              replaceUrl: currentTransition.extras.replaceUrl || this.urlUpdateStrategy === "eager" || isBrowserTriggeredNavigation(currentTransition.source)
            }, opts);
            this.scheduleNavigation(mergedTree, IMPERATIVE_NAVIGATION, null, extras2, {
              resolve: currentTransition.resolve,
              reject: currentTransition.reject,
              promise: currentTransition.promise
            });
          }
        }
        if (isPublicRouterEvent(e)) {
          this._events.next(e);
        }
      } catch (e2) {
        this.navigationTransitions.transitionAbortWithErrorSubject.next(e2);
      }
    });
    this.eventsSubscription.add(subscription);
  }
  /** @internal */
  resetRootComponentType(rootComponentType) {
    this.routerState.root.component = rootComponentType;
    this.navigationTransitions.rootComponentType = rootComponentType;
  }
  /**
   * Sets up the location change listener and performs the initial navigation.
   */
  initialNavigation() {
    this.setUpLocationChangeListener();
    if (!this.navigationTransitions.hasRequestedNavigation) {
      this.navigateToSyncWithBrowser(this.location.path(true), IMPERATIVE_NAVIGATION, this.stateManager.restoredState());
    }
  }
  /**
   * Sets up the location change listener. This listener detects navigations triggered from outside
   * the Router (the browser back/forward buttons, for example) and schedules a corresponding Router
   * navigation so that the correct events, guards, etc. are triggered.
   */
  setUpLocationChangeListener() {
    this.nonRouterCurrentEntryChangeSubscription ??= this.stateManager.registerNonRouterCurrentEntryChangeListener((url, state, source) => {
      this.navigateToSyncWithBrowser(url, source, state);
    });
  }
  /**
   * Schedules a router navigation to synchronize Router state with the browser state.
   *
   * This is done as a response to a popstate event and the initial navigation. These
   * two scenarios represent times when the browser URL/state has been updated and
   * the Router needs to respond to ensure its internal state matches.
   */
  navigateToSyncWithBrowser(url, source, state) {
    const extras2 = {
      replaceUrl: true
    };
    const restoredState = state?.navigationId ? state : null;
    if (state) {
      const stateCopy = __spreadValues({}, state);
      delete stateCopy.navigationId;
      delete stateCopy.\u0275routerPageId;
      if (Object.keys(stateCopy).length !== 0) {
        extras2.state = stateCopy;
      }
    }
    const urlTree = this.parseUrl(url);
    this.scheduleNavigation(urlTree, source, restoredState, extras2).catch((e) => {
      if (this.disposed) {
        return;
      }
      this.injector.get(INTERNAL_APPLICATION_ERROR_HANDLER)(e);
    });
  }
  /** The current URL. */
  get url() {
    return this.serializeUrl(this.currentUrlTree);
  }
  /**
   * Returns the current `Navigation` object when the router is navigating,
   * and `null` when idle.
   *
   * @deprecated 20.2 Use the `currentNavigation` signal instead.
   */
  getCurrentNavigation() {
    return untracked(this.navigationTransitions.currentNavigation);
  }
  /**
   * The `Navigation` object of the most recent navigation to succeed and `null` if there
   *     has not been a successful navigation yet.
   */
  get lastSuccessfulNavigation() {
    return this.navigationTransitions.lastSuccessfulNavigation;
  }
  /**
   * Resets the route configuration used for navigation and generating links.
   *
   * @param config The route array for the new configuration.
   *
   * @usageNotes
   *
   * ```ts
   * router.resetConfig([
   *  { path: 'team/:id', component: TeamCmp, children: [
   *    { path: 'simple', component: SimpleCmp },
   *    { path: 'user/:name', component: UserCmp }
   *  ]}
   * ]);
   * ```
   */
  resetConfig(config) {
    (typeof ngDevMode === "undefined" || ngDevMode) && validateConfig(config);
    this.config = config.map(standardizeConfig);
    this.navigated = false;
  }
  /** @docs-private */
  ngOnDestroy() {
    this.dispose();
  }
  /** Disposes of the router. */
  dispose() {
    this._events.unsubscribe();
    this.navigationTransitions.complete();
    if (this.nonRouterCurrentEntryChangeSubscription) {
      this.nonRouterCurrentEntryChangeSubscription.unsubscribe();
      this.nonRouterCurrentEntryChangeSubscription = void 0;
    }
    this.disposed = true;
    this.eventsSubscription.unsubscribe();
  }
  /**
   * Appends URL segments to the current URL tree to create a new URL tree.
   *
   * @param commands An array of URL fragments with which to construct the new URL tree.
   * If the path is static, can be the literal URL string. For a dynamic path, pass an array of path
   * segments, followed by the parameters for each segment.
   * The fragments are applied to the current URL tree or the one provided  in the `relativeTo`
   * property of the options object, if supplied.
   * @param navigationExtras Options that control the navigation strategy.
   * @returns The new URL tree.
   *
   * @usageNotes
   *
   * ```
   * // create /team/33/user/11
   * router.createUrlTree(['/team', 33, 'user', 11]);
   *
   * // create /team/33;expand=true/user/11
   * router.createUrlTree(['/team', 33, {expand: true}, 'user', 11]);
   *
   * // you can collapse static segments like this (this works only with the first passed-in value):
   * router.createUrlTree(['/team/33/user', userId]);
   *
   * // If the first segment can contain slashes, and you do not want the router to split it,
   * // you can do the following:
   * router.createUrlTree([{segmentPath: '/one/two'}]);
   *
   * // create /team/33/(user/11//right:chat)
   * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: 'chat'}}]);
   *
   * // remove the right secondary node
   * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: null}}]);
   *
   * // assuming the current url is `/team/33/user/11` and the route points to `user/11`
   *
   * // navigate to /team/33/user/11/details
   * router.createUrlTree(['details'], {relativeTo: route});
   *
   * // navigate to /team/33/user/22
   * router.createUrlTree(['../22'], {relativeTo: route});
   *
   * // navigate to /team/44/user/22
   * router.createUrlTree(['../../team/44/user/22'], {relativeTo: route});
   *
   * Note that a value of `null` or `undefined` for `relativeTo` indicates that the
   * tree should be created relative to the root.
   * ```
   */
  createUrlTree(commands, navigationExtras = {}) {
    const {
      relativeTo,
      queryParams,
      fragment,
      queryParamsHandling,
      preserveFragment
    } = navigationExtras;
    const f = preserveFragment ? this.currentUrlTree.fragment : fragment;
    let q = null;
    switch (queryParamsHandling ?? this.options.defaultQueryParamsHandling) {
      case "merge":
        q = __spreadValues(__spreadValues({}, this.currentUrlTree.queryParams), queryParams);
        break;
      case "preserve":
        q = this.currentUrlTree.queryParams;
        break;
      default:
        q = queryParams || null;
    }
    if (q !== null) {
      q = this.removeEmptyProps(q);
    }
    let relativeToUrlSegmentGroup;
    try {
      const relativeToSnapshot = relativeTo ? relativeTo.snapshot : this.routerState.snapshot.root;
      relativeToUrlSegmentGroup = createSegmentGroupFromRoute(relativeToSnapshot);
    } catch (e) {
      if (typeof commands[0] !== "string" || commands[0][0] !== "/") {
        commands = [];
      }
      relativeToUrlSegmentGroup = this.currentUrlTree.root;
    }
    return createUrlTreeFromSegmentGroup(relativeToUrlSegmentGroup, commands, q, f ?? null);
  }
  /**
   * Navigates to a view using an absolute route path.
   *
   * @param url An absolute path for a defined route. The function does not apply any delta to the
   *     current URL.
   * @param extras An object containing properties that modify the navigation strategy.
   *
   * @returns A Promise that resolves to 'true' when navigation succeeds,
   * to 'false' when navigation fails, or is rejected on error.
   *
   * @usageNotes
   *
   * The following calls request navigation to an absolute path.
   *
   * ```ts
   * router.navigateByUrl("/team/33/user/11");
   *
   * // Navigate without updating the URL
   * router.navigateByUrl("/team/33/user/11", { skipLocationChange: true });
   * ```
   *
   * @see [Routing and Navigation guide](guide/routing/common-router-tasks)
   *
   */
  navigateByUrl(url, extras2 = {
    skipLocationChange: false
  }) {
    const urlTree = isUrlTree(url) ? url : this.parseUrl(url);
    const mergedTree = this.urlHandlingStrategy.merge(urlTree, this.rawUrlTree);
    return this.scheduleNavigation(mergedTree, IMPERATIVE_NAVIGATION, null, extras2);
  }
  /**
   * Navigate based on the provided array of commands and a starting point.
   * If no starting route is provided, the navigation is absolute.
   *
   * @param commands An array of URL fragments with which to construct the target URL.
   * If the path is static, can be the literal URL string. For a dynamic path, pass an array of path
   * segments, followed by the parameters for each segment.
   * The fragments are applied to the current URL or the one provided  in the `relativeTo` property
   * of the options object, if supplied.
   * @param extras An options object that determines how the URL should be constructed or
   *     interpreted.
   *
   * @returns A Promise that resolves to `true` when navigation succeeds, or `false` when navigation
   *     fails. The Promise is rejected when an error occurs if `resolveNavigationPromiseOnError` is
   * not `true`.
   *
   * @usageNotes
   *
   * The following calls request navigation to a dynamic route path relative to the current URL.
   *
   * ```ts
   * router.navigate(['team', 33, 'user', 11], {relativeTo: route});
   *
   * // Navigate without updating the URL, overriding the default behavior
   * router.navigate(['team', 33, 'user', 11], {relativeTo: route, skipLocationChange: true});
   * ```
   *
   * @see [Routing and Navigation guide](guide/routing/common-router-tasks)
   *
   */
  navigate(commands, extras2 = {
    skipLocationChange: false
  }) {
    validateCommands(commands);
    return this.navigateByUrl(this.createUrlTree(commands, extras2), extras2);
  }
  /** Serializes a `UrlTree` into a string */
  serializeUrl(url) {
    return this.urlSerializer.serialize(url);
  }
  /** Parses a string into a `UrlTree` */
  parseUrl(url) {
    try {
      return this.urlSerializer.parse(url);
    } catch {
      return this.urlSerializer.parse("/");
    }
  }
  isActive(url, matchOptions) {
    let options;
    if (matchOptions === true) {
      options = __spreadValues({}, exactMatchOptions);
    } else if (matchOptions === false) {
      options = __spreadValues({}, subsetMatchOptions);
    } else {
      options = matchOptions;
    }
    if (isUrlTree(url)) {
      return containsTree(this.currentUrlTree, url, options);
    }
    const urlTree = this.parseUrl(url);
    return containsTree(this.currentUrlTree, urlTree, options);
  }
  removeEmptyProps(params) {
    return Object.entries(params).reduce((result2, [key, value]) => {
      if (value !== null && value !== void 0) {
        result2[key] = value;
      }
      return result2;
    }, {});
  }
  scheduleNavigation(rawUrl, source, restoredState, extras2, priorPromise) {
    if (this.disposed) {
      return Promise.resolve(false);
    }
    let resolve;
    let reject;
    let promise;
    if (priorPromise) {
      resolve = priorPromise.resolve;
      reject = priorPromise.reject;
      promise = priorPromise.promise;
    } else {
      promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
    }
    const taskId = this.pendingTasks.add();
    afterNextNavigation(this, () => {
      queueMicrotask(() => this.pendingTasks.remove(taskId));
    });
    this.navigationTransitions.handleNavigationRequest({
      source,
      restoredState,
      currentUrlTree: this.currentUrlTree,
      currentRawUrl: this.currentUrlTree,
      rawUrl,
      extras: extras2,
      resolve,
      reject,
      promise,
      currentSnapshot: this.routerState.snapshot,
      currentRouterState: this.routerState
    });
    return promise.catch((e) => {
      return Promise.reject(e);
    });
  }
  static \u0275fac = function Router_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Router)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Router,
    factory: _Router.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Router, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function validateCommands(commands) {
  for (let i = 0; i < commands.length; i++) {
    const cmd = commands[i];
    if (cmd == null) {
      throw new RuntimeError(4008, (typeof ngDevMode === "undefined" || ngDevMode) && `The requested path contains ${cmd} segment at index ${i}`);
    }
  }
}

// node_modules/@angular/router/fesm2022/router_module.mjs
var RouterLink = class _RouterLink {
  router;
  route;
  tabIndexAttribute;
  renderer;
  el;
  locationStrategy;
  /** @nodoc */
  reactiveHref = signal(null, ...ngDevMode ? [{
    debugName: "reactiveHref"
  }] : []);
  /**
   * Represents an `href` attribute value applied to a host element,
   * when a host element is an `<a>`/`<area>` tag or a compatible custom element.
   * For other tags, the value is `null`.
   */
  get href() {
    return untracked(this.reactiveHref);
  }
  /** @deprecated */
  set href(value) {
    this.reactiveHref.set(value);
  }
  /**
   * Represents the `target` attribute on a host element.
   * This is only used when the host element is
   * an `<a>`/`<area>` tag or a compatible custom element.
   */
  target;
  /**
   * Passed to {@link Router#createUrlTree} as part of the
   * `UrlCreationOptions`.
   * @see {@link UrlCreationOptions#queryParams}
   * @see {@link Router#createUrlTree}
   */
  queryParams;
  /**
   * Passed to {@link Router#createUrlTree} as part of the
   * `UrlCreationOptions`.
   * @see {@link UrlCreationOptions#fragment}
   * @see {@link Router#createUrlTree}
   */
  fragment;
  /**
   * Passed to {@link Router#createUrlTree} as part of the
   * `UrlCreationOptions`.
   * @see {@link UrlCreationOptions#queryParamsHandling}
   * @see {@link Router#createUrlTree}
   */
  queryParamsHandling;
  /**
   * Passed to {@link Router#navigateByUrl} as part of the
   * `NavigationBehaviorOptions`.
   * @see {@link NavigationBehaviorOptions#state}
   * @see {@link Router#navigateByUrl}
   */
  state;
  /**
   * Passed to {@link Router#navigateByUrl} as part of the
   * `NavigationBehaviorOptions`.
   * @see {@link NavigationBehaviorOptions#info}
   * @see {@link Router#navigateByUrl}
   */
  info;
  /**
   * Passed to {@link Router#createUrlTree} as part of the
   * `UrlCreationOptions`.
   * Specify a value here when you do not want to use the default value
   * for `routerLink`, which is the current activated route.
   * Note that a value of `undefined` here will use the `routerLink` default.
   * @see {@link UrlCreationOptions#relativeTo}
   * @see {@link Router#createUrlTree}
   */
  relativeTo;
  /** Whether a host element is an `<a>`/`<area>` tag or a compatible custom element. */
  isAnchorElement;
  subscription;
  /** @internal */
  onChanges = new Subject();
  applicationErrorHandler = inject(INTERNAL_APPLICATION_ERROR_HANDLER);
  options = inject(ROUTER_CONFIGURATION, {
    optional: true
  });
  constructor(router, route, tabIndexAttribute, renderer, el, locationStrategy) {
    this.router = router;
    this.route = route;
    this.tabIndexAttribute = tabIndexAttribute;
    this.renderer = renderer;
    this.el = el;
    this.locationStrategy = locationStrategy;
    this.reactiveHref.set(inject(new HostAttributeToken("href"), {
      optional: true
    }));
    const tagName = el.nativeElement.tagName?.toLowerCase();
    this.isAnchorElement = tagName === "a" || tagName === "area" || !!// Avoid breaking in an SSR context where customElements might not be defined.
    (typeof customElements === "object" && // observedAttributes is an optional static property/getter on a custom element.
    // The spec states that this must be an array of strings.
    customElements.get(tagName)?.observedAttributes?.includes?.("href"));
    if (!this.isAnchorElement) {
      this.subscribeToNavigationEventsIfNecessary();
    } else {
      this.setTabIndexIfNotOnNativeEl("0");
    }
  }
  subscribeToNavigationEventsIfNecessary() {
    if (this.subscription !== void 0 || !this.isAnchorElement) {
      return;
    }
    let createSubcription = this.preserveFragment;
    const dependsOnRouterState = (handling) => handling === "merge" || handling === "preserve";
    createSubcription ||= dependsOnRouterState(this.queryParamsHandling);
    createSubcription ||= !this.queryParamsHandling && !dependsOnRouterState(this.options?.defaultQueryParamsHandling);
    if (!createSubcription) {
      return;
    }
    this.subscription = this.router.events.subscribe((s) => {
      if (s instanceof NavigationEnd) {
        this.updateHref();
      }
    });
  }
  /**
   * Passed to {@link Router#createUrlTree} as part of the
   * `UrlCreationOptions`.
   * @see {@link UrlCreationOptions#preserveFragment}
   * @see {@link Router#createUrlTree}
   */
  preserveFragment = false;
  /**
   * Passed to {@link Router#navigateByUrl} as part of the
   * `NavigationBehaviorOptions`.
   * @see {@link NavigationBehaviorOptions#skipLocationChange}
   * @see {@link Router#navigateByUrl}
   */
  skipLocationChange = false;
  /**
   * Passed to {@link Router#navigateByUrl} as part of the
   * `NavigationBehaviorOptions`.
   * @see {@link NavigationBehaviorOptions#replaceUrl}
   * @see {@link Router#navigateByUrl}
   */
  replaceUrl = false;
  /**
   * Modifies the tab index if there was not a tabindex attribute on the element during
   * instantiation.
   */
  setTabIndexIfNotOnNativeEl(newTabIndex) {
    if (this.tabIndexAttribute != null || this.isAnchorElement) {
      return;
    }
    this.applyAttributeValue("tabindex", newTabIndex);
  }
  /** @docs-private */
  // TODO(atscott): Remove changes parameter in major version as a breaking change.
  ngOnChanges(changes) {
    if (ngDevMode && isUrlTree(this.routerLinkInput) && (this.fragment !== void 0 || this.queryParams || this.queryParamsHandling || this.preserveFragment || this.relativeTo)) {
      throw new RuntimeError(4017, "Cannot configure queryParams or fragment when using a UrlTree as the routerLink input value.");
    }
    if (this.isAnchorElement) {
      this.updateHref();
      this.subscribeToNavigationEventsIfNecessary();
    }
    this.onChanges.next(this);
  }
  routerLinkInput = null;
  /**
   * Commands to pass to {@link Router#createUrlTree} or a `UrlTree`.
   *   - **array**: commands to pass to {@link Router#createUrlTree}.
   *   - **string**: shorthand for array of commands with just the string, i.e. `['/route']`
   *   - **UrlTree**: a `UrlTree` for this link rather than creating one from the commands
   *     and other inputs that correspond to properties of `UrlCreationOptions`.
   *   - **null|undefined**: effectively disables the `routerLink`
   * @see {@link Router#createUrlTree}
   */
  set routerLink(commandsOrUrlTree) {
    if (commandsOrUrlTree == null) {
      this.routerLinkInput = null;
      this.setTabIndexIfNotOnNativeEl(null);
    } else {
      if (isUrlTree(commandsOrUrlTree)) {
        this.routerLinkInput = commandsOrUrlTree;
      } else {
        this.routerLinkInput = Array.isArray(commandsOrUrlTree) ? commandsOrUrlTree : [commandsOrUrlTree];
      }
      this.setTabIndexIfNotOnNativeEl("0");
    }
  }
  /** @docs-private */
  onClick(button, ctrlKey, shiftKey, altKey, metaKey) {
    const urlTree = this.urlTree;
    if (urlTree === null) {
      return true;
    }
    if (this.isAnchorElement) {
      if (button !== 0 || ctrlKey || shiftKey || altKey || metaKey) {
        return true;
      }
      if (typeof this.target === "string" && this.target != "_self") {
        return true;
      }
    }
    const extras2 = {
      skipLocationChange: this.skipLocationChange,
      replaceUrl: this.replaceUrl,
      state: this.state,
      info: this.info
    };
    this.router.navigateByUrl(urlTree, extras2)?.catch((e) => {
      this.applicationErrorHandler(e);
    });
    return !this.isAnchorElement;
  }
  /** @docs-private */
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  updateHref() {
    const urlTree = this.urlTree;
    this.reactiveHref.set(urlTree !== null && this.locationStrategy ? this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(urlTree)) ?? "" : null);
  }
  applyAttributeValue(attrName, attrValue) {
    const renderer = this.renderer;
    const nativeElement = this.el.nativeElement;
    if (attrValue !== null) {
      renderer.setAttribute(nativeElement, attrName, attrValue);
    } else {
      renderer.removeAttribute(nativeElement, attrName);
    }
  }
  get urlTree() {
    if (this.routerLinkInput === null) {
      return null;
    } else if (isUrlTree(this.routerLinkInput)) {
      return this.routerLinkInput;
    }
    return this.router.createUrlTree(this.routerLinkInput, {
      // If the `relativeTo` input is not defined, we want to use `this.route` by default.
      // Otherwise, we should use the value provided by the user in the input.
      relativeTo: this.relativeTo !== void 0 ? this.relativeTo : this.route,
      queryParams: this.queryParams,
      fragment: this.fragment,
      queryParamsHandling: this.queryParamsHandling,
      preserveFragment: this.preserveFragment
    });
  }
  static \u0275fac = function RouterLink_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterLink)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275injectAttribute("tabindex"), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(LocationStrategy));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RouterLink,
    selectors: [["", "routerLink", ""]],
    hostVars: 2,
    hostBindings: function RouterLink_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function RouterLink_click_HostBindingHandler($event) {
          return ctx.onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("href", ctx.reactiveHref(), \u0275\u0275sanitizeUrlOrResourceUrl)("target", ctx.target);
      }
    },
    inputs: {
      target: "target",
      queryParams: "queryParams",
      fragment: "fragment",
      queryParamsHandling: "queryParamsHandling",
      state: "state",
      info: "info",
      relativeTo: "relativeTo",
      preserveFragment: [2, "preserveFragment", "preserveFragment", booleanAttribute],
      skipLocationChange: [2, "skipLocationChange", "skipLocationChange", booleanAttribute],
      replaceUrl: [2, "replaceUrl", "replaceUrl", booleanAttribute],
      routerLink: "routerLink"
    },
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLink, [{
    type: Directive,
    args: [{
      selector: "[routerLink]",
      host: {
        "[attr.href]": "reactiveHref()"
      }
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: LocationStrategy
  }], {
    target: [{
      type: HostBinding,
      args: ["attr.target"]
    }, {
      type: Input
    }],
    queryParams: [{
      type: Input
    }],
    fragment: [{
      type: Input
    }],
    queryParamsHandling: [{
      type: Input
    }],
    state: [{
      type: Input
    }],
    info: [{
      type: Input
    }],
    relativeTo: [{
      type: Input
    }],
    preserveFragment: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    skipLocationChange: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    replaceUrl: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    routerLink: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event.button", "$event.ctrlKey", "$event.shiftKey", "$event.altKey", "$event.metaKey"]]
    }]
  });
})();
var RouterLinkActive = class _RouterLinkActive {
  router;
  element;
  renderer;
  cdr;
  link;
  links;
  classes = [];
  routerEventsSubscription;
  linkInputChangesSubscription;
  _isActive = false;
  get isActive() {
    return this._isActive;
  }
  /**
   * Options to configure how to determine if the router link is active.
   *
   * These options are passed to the `Router.isActive()` function.
   *
   * @see {@link Router#isActive}
   */
  routerLinkActiveOptions = {
    exact: false
  };
  /**
   * Aria-current attribute to apply when the router link is active.
   *
   * Possible values: `'page'` | `'step'` | `'location'` | `'date'` | `'time'` | `true` | `false`.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current}
   */
  ariaCurrentWhenActive;
  /**
   *
   * You can use the output `isActiveChange` to get notified each time the link becomes
   * active or inactive.
   *
   * Emits:
   * true  -> Route is active
   * false -> Route is inactive
   *
   * ```html
   * <a
   *  routerLink="/user/bob"
   *  routerLinkActive="active-link"
   *  (isActiveChange)="this.onRouterLinkActive($event)">Bob</a>
   * ```
   */
  isActiveChange = new EventEmitter();
  constructor(router, element, renderer, cdr, link) {
    this.router = router;
    this.element = element;
    this.renderer = renderer;
    this.cdr = cdr;
    this.link = link;
    this.routerEventsSubscription = router.events.subscribe((s) => {
      if (s instanceof NavigationEnd) {
        this.update();
      }
    });
  }
  /** @docs-private */
  ngAfterContentInit() {
    of(this.links.changes, of(null)).pipe(mergeAll()).subscribe((_) => {
      this.update();
      this.subscribeToEachLinkOnChanges();
    });
  }
  subscribeToEachLinkOnChanges() {
    this.linkInputChangesSubscription?.unsubscribe();
    const allLinkChanges = [...this.links.toArray(), this.link].filter((link) => !!link).map((link) => link.onChanges);
    this.linkInputChangesSubscription = from(allLinkChanges).pipe(mergeAll()).subscribe((link) => {
      if (this._isActive !== this.isLinkActive(this.router)(link)) {
        this.update();
      }
    });
  }
  set routerLinkActive(data) {
    const classes = Array.isArray(data) ? data : data.split(" ");
    this.classes = classes.filter((c) => !!c);
  }
  /** @docs-private */
  ngOnChanges(changes) {
    this.update();
  }
  /** @docs-private */
  ngOnDestroy() {
    this.routerEventsSubscription.unsubscribe();
    this.linkInputChangesSubscription?.unsubscribe();
  }
  update() {
    if (!this.links || !this.router.navigated) return;
    queueMicrotask(() => {
      const hasActiveLinks = this.hasActiveLinks();
      this.classes.forEach((c) => {
        if (hasActiveLinks) {
          this.renderer.addClass(this.element.nativeElement, c);
        } else {
          this.renderer.removeClass(this.element.nativeElement, c);
        }
      });
      if (hasActiveLinks && this.ariaCurrentWhenActive !== void 0) {
        this.renderer.setAttribute(this.element.nativeElement, "aria-current", this.ariaCurrentWhenActive.toString());
      } else {
        this.renderer.removeAttribute(this.element.nativeElement, "aria-current");
      }
      if (this._isActive !== hasActiveLinks) {
        this._isActive = hasActiveLinks;
        this.cdr.markForCheck();
        this.isActiveChange.emit(hasActiveLinks);
      }
    });
  }
  isLinkActive(router) {
    const options = isActiveMatchOptions(this.routerLinkActiveOptions) ? this.routerLinkActiveOptions : (
      // While the types should disallow `undefined` here, it's possible without strict inputs
      this.routerLinkActiveOptions.exact || false
    );
    return (link) => {
      const urlTree = link.urlTree;
      return urlTree ? router.isActive(urlTree, options) : false;
    };
  }
  hasActiveLinks() {
    const isActiveCheckFn = this.isLinkActive(this.router);
    return this.link && isActiveCheckFn(this.link) || this.links.some(isActiveCheckFn);
  }
  static \u0275fac = function RouterLinkActive_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterLinkActive)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(RouterLink, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RouterLinkActive,
    selectors: [["", "routerLinkActive", ""]],
    contentQueries: function RouterLinkActive_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, RouterLink, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.links = _t);
      }
    },
    inputs: {
      routerLinkActiveOptions: "routerLinkActiveOptions",
      ariaCurrentWhenActive: "ariaCurrentWhenActive",
      routerLinkActive: "routerLinkActive"
    },
    outputs: {
      isActiveChange: "isActiveChange"
    },
    exportAs: ["routerLinkActive"],
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkActive, [{
    type: Directive,
    args: [{
      selector: "[routerLinkActive]",
      exportAs: "routerLinkActive"
    }]
  }], () => [{
    type: Router
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: RouterLink,
    decorators: [{
      type: Optional
    }]
  }], {
    links: [{
      type: ContentChildren,
      args: [RouterLink, {
        descendants: true
      }]
    }],
    routerLinkActiveOptions: [{
      type: Input
    }],
    ariaCurrentWhenActive: [{
      type: Input
    }],
    isActiveChange: [{
      type: Output
    }],
    routerLinkActive: [{
      type: Input
    }]
  });
})();
function isActiveMatchOptions(options) {
  return !!options.paths;
}
var PreloadingStrategy = class {
};
var PreloadAllModules = class _PreloadAllModules {
  preload(route, fn) {
    return fn().pipe(catchError(() => of(null)));
  }
  static \u0275fac = function PreloadAllModules_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PreloadAllModules)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PreloadAllModules,
    factory: _PreloadAllModules.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreloadAllModules, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NoPreloading = class _NoPreloading {
  preload(route, fn) {
    return of(null);
  }
  static \u0275fac = function NoPreloading_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoPreloading)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NoPreloading,
    factory: _NoPreloading.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoPreloading, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RouterPreloader = class _RouterPreloader {
  router;
  injector;
  preloadingStrategy;
  loader;
  subscription;
  constructor(router, injector, preloadingStrategy, loader) {
    this.router = router;
    this.injector = injector;
    this.preloadingStrategy = preloadingStrategy;
    this.loader = loader;
  }
  setUpPreloading() {
    this.subscription = this.router.events.pipe(filter((e) => e instanceof NavigationEnd), concatMap(() => this.preload())).subscribe(() => {
    });
  }
  preload() {
    return this.processRoutes(this.injector, this.router.config);
  }
  /** @docs-private */
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  processRoutes(injector, routes2) {
    const res = [];
    for (const route of routes2) {
      if (route.providers && !route._injector) {
        route._injector = createEnvironmentInjector(route.providers, injector, `Route: ${route.path}`);
      }
      const injectorForCurrentRoute = route._injector ?? injector;
      const injectorForChildren = route._loadedInjector ?? injectorForCurrentRoute;
      if (route.loadChildren && !route._loadedRoutes && route.canLoad === void 0 || route.loadComponent && !route._loadedComponent) {
        res.push(this.preloadConfig(injectorForCurrentRoute, route));
      }
      if (route.children || route._loadedRoutes) {
        res.push(this.processRoutes(injectorForChildren, route.children ?? route._loadedRoutes));
      }
    }
    return from(res).pipe(mergeAll());
  }
  preloadConfig(injector, route) {
    return this.preloadingStrategy.preload(route, () => {
      let loadedChildren$;
      if (route.loadChildren && route.canLoad === void 0) {
        loadedChildren$ = this.loader.loadChildren(injector, route);
      } else {
        loadedChildren$ = of(null);
      }
      const recursiveLoadChildren$ = loadedChildren$.pipe(mergeMap((config) => {
        if (config === null) {
          return of(void 0);
        }
        route._loadedRoutes = config.routes;
        route._loadedInjector = config.injector;
        return this.processRoutes(config.injector ?? injector, config.routes);
      }));
      if (route.loadComponent && !route._loadedComponent) {
        const loadComponent$ = this.loader.loadComponent(injector, route);
        return from([recursiveLoadChildren$, loadComponent$]).pipe(mergeAll());
      } else {
        return recursiveLoadChildren$;
      }
    });
  }
  static \u0275fac = function RouterPreloader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterPreloader)(\u0275\u0275inject(Router), \u0275\u0275inject(EnvironmentInjector), \u0275\u0275inject(PreloadingStrategy), \u0275\u0275inject(RouterConfigLoader));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RouterPreloader,
    factory: _RouterPreloader.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterPreloader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Router
  }, {
    type: EnvironmentInjector
  }, {
    type: PreloadingStrategy
  }, {
    type: RouterConfigLoader
  }], null);
})();
var ROUTER_SCROLLER = new InjectionToken("");
var RouterScroller = class _RouterScroller {
  urlSerializer;
  transitions;
  viewportScroller;
  zone;
  options;
  routerEventsSubscription;
  scrollEventsSubscription;
  lastId = 0;
  lastSource = IMPERATIVE_NAVIGATION;
  restoredId = 0;
  store = {};
  /** @docs-private */
  constructor(urlSerializer, transitions, viewportScroller, zone, options = {}) {
    this.urlSerializer = urlSerializer;
    this.transitions = transitions;
    this.viewportScroller = viewportScroller;
    this.zone = zone;
    this.options = options;
    options.scrollPositionRestoration ||= "disabled";
    options.anchorScrolling ||= "disabled";
  }
  init() {
    if (this.options.scrollPositionRestoration !== "disabled") {
      this.viewportScroller.setHistoryScrollRestoration("manual");
    }
    this.routerEventsSubscription = this.createScrollEvents();
    this.scrollEventsSubscription = this.consumeScrollEvents();
  }
  createScrollEvents() {
    return this.transitions.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        this.store[this.lastId] = this.viewportScroller.getScrollPosition();
        this.lastSource = e.navigationTrigger;
        this.restoredId = e.restoredState ? e.restoredState.navigationId : 0;
      } else if (e instanceof NavigationEnd) {
        this.lastId = e.id;
        this.scheduleScrollEvent(e, this.urlSerializer.parse(e.urlAfterRedirects).fragment);
      } else if (e instanceof NavigationSkipped && e.code === NavigationSkippedCode.IgnoredSameUrlNavigation) {
        this.lastSource = void 0;
        this.restoredId = 0;
        this.scheduleScrollEvent(e, this.urlSerializer.parse(e.url).fragment);
      }
    });
  }
  consumeScrollEvents() {
    return this.transitions.events.subscribe((e) => {
      if (!(e instanceof Scroll)) return;
      if (e.position) {
        if (this.options.scrollPositionRestoration === "top") {
          this.viewportScroller.scrollToPosition([0, 0]);
        } else if (this.options.scrollPositionRestoration === "enabled") {
          this.viewportScroller.scrollToPosition(e.position);
        }
      } else {
        if (e.anchor && this.options.anchorScrolling === "enabled") {
          this.viewportScroller.scrollToAnchor(e.anchor);
        } else if (this.options.scrollPositionRestoration !== "disabled") {
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      }
    });
  }
  scheduleScrollEvent(routerEvent, anchor) {
    this.zone.runOutsideAngular(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve);
        if (typeof requestAnimationFrame !== "undefined") {
          requestAnimationFrame(resolve);
        }
      });
      this.zone.run(() => {
        this.transitions.events.next(new Scroll(routerEvent, this.lastSource === "popstate" ? this.store[this.restoredId] : null, anchor));
      });
    });
  }
  /** @docs-private */
  ngOnDestroy() {
    this.routerEventsSubscription?.unsubscribe();
    this.scrollEventsSubscription?.unsubscribe();
  }
  static \u0275fac = function RouterScroller_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RouterScroller,
    factory: _RouterScroller.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterScroller, [{
    type: Injectable
  }], () => [{
    type: UrlSerializer
  }, {
    type: NavigationTransitions
  }, {
    type: ViewportScroller
  }, {
    type: NgZone
  }, {
    type: void 0
  }], null);
})();
function provideRouter(routes2, ...features) {
  return makeEnvironmentProviders([{
    provide: ROUTES,
    multi: true,
    useValue: routes2
  }, typeof ngDevMode === "undefined" || ngDevMode ? {
    provide: ROUTER_IS_PROVIDED,
    useValue: true
  } : [], {
    provide: ActivatedRoute,
    useFactory: rootRoute,
    deps: [Router]
  }, {
    provide: APP_BOOTSTRAP_LISTENER,
    multi: true,
    useFactory: getBootstrapListener
  }, features.map((feature) => feature.\u0275providers)]);
}
function rootRoute(router) {
  return router.routerState.root;
}
function routerFeature(kind, providers) {
  return {
    \u0275kind: kind,
    \u0275providers: providers
  };
}
var ROUTER_IS_PROVIDED = new InjectionToken("", {
  providedIn: "root",
  factory: () => false
});
function getBootstrapListener() {
  const injector = inject(Injector);
  return (bootstrappedComponentRef) => {
    const ref = injector.get(ApplicationRef);
    if (bootstrappedComponentRef !== ref.components[0]) {
      return;
    }
    const router = injector.get(Router);
    const bootstrapDone = injector.get(BOOTSTRAP_DONE);
    if (injector.get(INITIAL_NAVIGATION) === 1) {
      router.initialNavigation();
    }
    injector.get(ROUTER_PRELOADER, null, {
      optional: true
    })?.setUpPreloading();
    injector.get(ROUTER_SCROLLER, null, {
      optional: true
    })?.init();
    router.resetRootComponentType(ref.componentTypes[0]);
    if (!bootstrapDone.closed) {
      bootstrapDone.next();
      bootstrapDone.complete();
      bootstrapDone.unsubscribe();
    }
  };
}
var BOOTSTRAP_DONE = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "bootstrap done indicator" : "", {
  factory: () => {
    return new Subject();
  }
});
var INITIAL_NAVIGATION = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "initial navigation" : "", {
  providedIn: "root",
  factory: () => 1
  /* InitialNavigation.EnabledNonBlocking */
});
function withEnabledBlockingInitialNavigation() {
  const providers = [{
    provide: IS_ENABLED_BLOCKING_INITIAL_NAVIGATION,
    useValue: true
  }, {
    provide: INITIAL_NAVIGATION,
    useValue: 0
    /* InitialNavigation.EnabledBlocking */
  }, provideAppInitializer(() => {
    const injector = inject(Injector);
    const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve());
    return locationInitialized.then(() => {
      return new Promise((resolve) => {
        const router = injector.get(Router);
        const bootstrapDone = injector.get(BOOTSTRAP_DONE);
        afterNextNavigation(router, () => {
          resolve(true);
        });
        injector.get(NavigationTransitions).afterPreactivation = () => {
          resolve(true);
          return bootstrapDone.closed ? of(void 0) : bootstrapDone;
        };
        router.initialNavigation();
      });
    });
  })];
  return routerFeature(2, providers);
}
function withDisabledInitialNavigation() {
  const providers = [provideAppInitializer(() => {
    inject(Router).setUpLocationChangeListener();
  }), {
    provide: INITIAL_NAVIGATION,
    useValue: 2
    /* InitialNavigation.Disabled */
  }];
  return routerFeature(3, providers);
}
function withDebugTracing() {
  let providers = [];
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    providers = [{
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useFactory: () => {
        const router = inject(Router);
        return () => router.events.subscribe((e) => {
          console.group?.(`Router Event: ${e.constructor.name}`);
          console.log(stringifyEvent(e));
          console.log(e);
          console.groupEnd?.();
        });
      }
    }];
  } else {
    providers = [];
  }
  return routerFeature(1, providers);
}
var ROUTER_PRELOADER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router preloader" : "");
function withPreloading(preloadingStrategy) {
  const providers = [{
    provide: ROUTER_PRELOADER,
    useExisting: RouterPreloader
  }, {
    provide: PreloadingStrategy,
    useExisting: preloadingStrategy
  }];
  return routerFeature(0, providers);
}
function withComponentInputBinding() {
  const providers = [RoutedComponentInputBinder, {
    provide: INPUT_BINDER,
    useExisting: RoutedComponentInputBinder
  }];
  return routerFeature(8, providers);
}
function withViewTransitions(options) {
  performanceMarkFeature("NgRouterViewTransitions");
  const providers = [{
    provide: CREATE_VIEW_TRANSITION,
    useValue: createViewTransition
  }, {
    provide: VIEW_TRANSITION_OPTIONS,
    useValue: __spreadValues({
      skipNextTransition: !!options?.skipInitialTransition
    }, options)
  }];
  return routerFeature(9, providers);
}
var ROUTER_DIRECTIVES = [RouterOutlet, RouterLink, RouterLinkActive, \u0275EmptyOutletComponent];
var ROUTER_FORROOT_GUARD = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router duplicate forRoot guard" : "");
var ROUTER_PROVIDERS = [
  Location,
  {
    provide: UrlSerializer,
    useClass: DefaultUrlSerializer
  },
  Router,
  ChildrenOutletContexts,
  {
    provide: ActivatedRoute,
    useFactory: rootRoute,
    deps: [Router]
  },
  RouterConfigLoader,
  // Only used to warn when `provideRoutes` is used without `RouterModule` or `provideRouter`. Can
  // be removed when `provideRoutes` is removed.
  typeof ngDevMode === "undefined" || ngDevMode ? {
    provide: ROUTER_IS_PROVIDED,
    useValue: true
  } : []
];
var RouterModule = class _RouterModule {
  constructor() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      inject(ROUTER_FORROOT_GUARD, {
        optional: true
      });
    }
  }
  /**
   * Creates and configures a module with all the router providers and directives.
   * Optionally sets up an application listener to perform an initial navigation.
   *
   * When registering the NgModule at the root, import as follows:
   *
   * ```ts
   * @NgModule({
   *   imports: [RouterModule.forRoot(ROUTES)]
   * })
   * class MyNgModule {}
   * ```
   *
   * @param routes An array of `Route` objects that define the navigation paths for the application.
   * @param config An `ExtraOptions` configuration object that controls how navigation is performed.
   * @return The new `NgModule`.
   *
   */
  static forRoot(routes2, config) {
    return {
      ngModule: _RouterModule,
      providers: [ROUTER_PROVIDERS, typeof ngDevMode === "undefined" || ngDevMode ? config?.enableTracing ? withDebugTracing().\u0275providers : [] : [], {
        provide: ROUTES,
        multi: true,
        useValue: routes2
      }, typeof ngDevMode === "undefined" || ngDevMode ? {
        provide: ROUTER_FORROOT_GUARD,
        useFactory: provideForRootGuard,
        deps: [[Router, new Optional(), new SkipSelf()]]
      } : [], config?.errorHandler ? {
        provide: NAVIGATION_ERROR_HANDLER,
        useValue: config.errorHandler
      } : [], {
        provide: ROUTER_CONFIGURATION,
        useValue: config ? config : {}
      }, config?.useHash ? provideHashLocationStrategy() : providePathLocationStrategy(), provideRouterScroller(), config?.preloadingStrategy ? withPreloading(config.preloadingStrategy).\u0275providers : [], config?.initialNavigation ? provideInitialNavigation(config) : [], config?.bindToComponentInputs ? withComponentInputBinding().\u0275providers : [], config?.enableViewTransitions ? withViewTransitions().\u0275providers : [], provideRouterInitializer()]
    };
  }
  /**
   * Creates a module with all the router directives and a provider registering routes,
   * without creating a new Router service.
   * When registering for submodules and lazy-loaded submodules, create the NgModule as follows:
   *
   * ```ts
   * @NgModule({
   *   imports: [RouterModule.forChild(ROUTES)]
   * })
   * class MyNgModule {}
   * ```
   *
   * @param routes An array of `Route` objects that define the navigation paths for the submodule.
   * @return The new NgModule.
   *
   */
  static forChild(routes2) {
    return {
      ngModule: _RouterModule,
      providers: [{
        provide: ROUTES,
        multi: true,
        useValue: routes2
      }]
    };
  }
  static \u0275fac = function RouterModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _RouterModule,
    imports: [RouterOutlet, RouterLink, RouterLinkActive, \u0275EmptyOutletComponent],
    exports: [RouterOutlet, RouterLink, RouterLinkActive, \u0275EmptyOutletComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterModule, [{
    type: NgModule,
    args: [{
      imports: ROUTER_DIRECTIVES,
      exports: ROUTER_DIRECTIVES
    }]
  }], () => [], null);
})();
function provideRouterScroller() {
  return {
    provide: ROUTER_SCROLLER,
    useFactory: () => {
      const viewportScroller = inject(ViewportScroller);
      const zone = inject(NgZone);
      const config = inject(ROUTER_CONFIGURATION);
      const transitions = inject(NavigationTransitions);
      const urlSerializer = inject(UrlSerializer);
      if (config.scrollOffset) {
        viewportScroller.setOffset(config.scrollOffset);
      }
      return new RouterScroller(urlSerializer, transitions, viewportScroller, zone, config);
    }
  };
}
function provideHashLocationStrategy() {
  return {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  };
}
function providePathLocationStrategy() {
  return {
    provide: LocationStrategy,
    useClass: PathLocationStrategy
  };
}
function provideForRootGuard(router) {
  if (router) {
    throw new RuntimeError(4007, `The Router was provided more than once. This can happen if 'forRoot' is used outside of the root injector. Lazy loaded modules should use RouterModule.forChild() instead.`);
  }
  return "guarded";
}
function provideInitialNavigation(config) {
  return [config.initialNavigation === "disabled" ? withDisabledInitialNavigation().\u0275providers : [], config.initialNavigation === "enabledBlocking" ? withEnabledBlockingInitialNavigation().\u0275providers : []];
}
var ROUTER_INITIALIZER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "Router Initializer" : "");
function provideRouterInitializer() {
  return [
    // ROUTER_INITIALIZER token should be removed. It's public API but shouldn't be. We can just
    // have `getBootstrapListener` directly attached to APP_BOOTSTRAP_LISTENER.
    {
      provide: ROUTER_INITIALIZER,
      useFactory: getBootstrapListener
    },
    {
      provide: APP_BOOTSTRAP_LISTENER,
      multi: true,
      useExisting: ROUTER_INITIALIZER
    }
  ];
}

// node_modules/@angular/router/fesm2022/router.mjs
var VERSION2 = new Version("20.3.1");

// src/app/shared/resolvers/product.resolver.ts
var ProductResolver = class _ProductResolver {
  store;
  constructor(store) {
    this.store = store;
  }
  resolve() {
    return this.store.select(selectAllProduct).pipe(
      tap((products) => {
        if (!products || products?.length === 0) {
          this.store.dispatch(loadProducts());
        }
      }),
      // map array → boolean
      map((products) => !!products && products?.length > 0),
      // Wait until boolean is true
      filter((loaded) => loaded === true),
      first()
    );
  }
  static \u0275fac = function ProductResolver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductResolver)(\u0275\u0275inject(Store));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductResolver, factory: _ProductResolver.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductResolver, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: Store }], null);
})();

// src/app/shared/authgaurd/auth-gaurd.ts
var AuthGuard = class _AuthGuard {
  store;
  router;
  constructor(store, router) {
    this.store = store;
    this.router = router;
  }
  canActivate() {
    let token = localStorage.getItem("token");
    if (!token) {
      this.router.navigate(["/login"]);
      return of(false);
    } else {
      return of(true);
    }
  }
  static \u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthGuard)(\u0275\u0275inject(Store), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthGuard, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: Store }, { type: Router }], null);
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    loadComponent: () => import("./chunk-IDB7MPQF.js").then((m) => m.Login),
    data: { title: "Login", info: "Login" }
  },
  {
    path: "product",
    loadComponent: () => import("./chunk-TRRQLIC2.js").then((m) => m.Product),
    data: { title: "Product", info: "Product" },
    resolve: { loaded: ProductResolver },
    canActivate: [AuthGuard]
  }
];

// src/app/store/reducers/login.reducer.ts
var initialState = {
  message: "",
  isLogin: false,
  loginData: {}
};
var loginReducer = createReducer(initialState, on(setLoginData, (state, { message, isLogin, loginData }) => __spreadProps(__spreadValues({}, state), { message, isLogin, loginData })));

// node_modules/@ngrx/store-devtools/fesm2022/ngrx-store-devtools.mjs
var PERFORM_ACTION = "PERFORM_ACTION";
var REFRESH = "REFRESH";
var RESET = "RESET";
var ROLLBACK = "ROLLBACK";
var COMMIT = "COMMIT";
var SWEEP = "SWEEP";
var TOGGLE_ACTION = "TOGGLE_ACTION";
var SET_ACTIONS_ACTIVE = "SET_ACTIONS_ACTIVE";
var JUMP_TO_STATE = "JUMP_TO_STATE";
var JUMP_TO_ACTION = "JUMP_TO_ACTION";
var IMPORT_STATE = "IMPORT_STATE";
var LOCK_CHANGES = "LOCK_CHANGES";
var PAUSE_RECORDING = "PAUSE_RECORDING";
var PerformAction = class {
  constructor(action, timestamp) {
    this.action = action;
    this.timestamp = timestamp;
    this.type = PERFORM_ACTION;
    if (typeof action.type === "undefined") {
      throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
    }
  }
};
var Refresh = class {
  constructor() {
    this.type = REFRESH;
  }
};
var Reset = class {
  constructor(timestamp) {
    this.timestamp = timestamp;
    this.type = RESET;
  }
};
var Rollback = class {
  constructor(timestamp) {
    this.timestamp = timestamp;
    this.type = ROLLBACK;
  }
};
var Commit = class {
  constructor(timestamp) {
    this.timestamp = timestamp;
    this.type = COMMIT;
  }
};
var Sweep = class {
  constructor() {
    this.type = SWEEP;
  }
};
var ToggleAction = class {
  constructor(id) {
    this.id = id;
    this.type = TOGGLE_ACTION;
  }
};
var JumpToState = class {
  constructor(index) {
    this.index = index;
    this.type = JUMP_TO_STATE;
  }
};
var JumpToAction = class {
  constructor(actionId) {
    this.actionId = actionId;
    this.type = JUMP_TO_ACTION;
  }
};
var ImportState = class {
  constructor(nextLiftedState) {
    this.nextLiftedState = nextLiftedState;
    this.type = IMPORT_STATE;
  }
};
var LockChanges = class {
  constructor(status) {
    this.status = status;
    this.type = LOCK_CHANGES;
  }
};
var PauseRecording = class {
  constructor(status) {
    this.status = status;
    this.type = PAUSE_RECORDING;
  }
};
var StoreDevtoolsConfig = class {
  constructor() {
    this.maxAge = false;
  }
};
var STORE_DEVTOOLS_CONFIG = new InjectionToken("@ngrx/store-devtools Options");
var INITIAL_OPTIONS = new InjectionToken("@ngrx/store-devtools Initial Config");
function noMonitor() {
  return null;
}
var DEFAULT_NAME = "NgRx Store DevTools";
function createConfig(optionsInput) {
  const DEFAULT_OPTIONS = {
    maxAge: false,
    monitor: noMonitor,
    actionSanitizer: void 0,
    stateSanitizer: void 0,
    name: DEFAULT_NAME,
    serialize: false,
    logOnly: false,
    autoPause: false,
    trace: false,
    traceLimit: 75,
    // Add all features explicitly. This prevent buggy behavior for
    // options like "lock" which might otherwise not show up.
    features: {
      pause: true,
      // Start/pause recording of dispatched actions
      lock: true,
      // Lock/unlock dispatching actions and side effects
      persist: true,
      // Persist states on page reloading
      export: true,
      // Export history of actions in a file
      import: "custom",
      // Import history of actions from a file
      jump: true,
      // Jump back and forth (time travelling)
      skip: true,
      // Skip (cancel) actions
      reorder: true,
      // Drag and drop actions in the history list
      dispatch: true,
      // Dispatch custom actions or action creators
      test: true
      // Generate tests for the selected actions
    },
    connectInZone: false
  };
  const options = typeof optionsInput === "function" ? optionsInput() : optionsInput;
  const logOnly = options.logOnly ? {
    pause: true,
    export: true,
    test: true
  } : false;
  const features = options.features || logOnly || DEFAULT_OPTIONS.features;
  if (features.import === true) {
    features.import = "custom";
  }
  const config = Object.assign({}, DEFAULT_OPTIONS, {
    features
  }, options);
  if (config.maxAge && config.maxAge < 2) {
    throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${config.maxAge}`);
  }
  return config;
}
function difference(first2, second) {
  return first2.filter((item) => second.indexOf(item) < 0);
}
function unliftState(liftedState) {
  const {
    computedStates,
    currentStateIndex
  } = liftedState;
  if (currentStateIndex >= computedStates.length) {
    const {
      state: state2
    } = computedStates[computedStates.length - 1];
    return state2;
  }
  const {
    state
  } = computedStates[currentStateIndex];
  return state;
}
function liftAction(action) {
  return new PerformAction(action, +Date.now());
}
function sanitizeActions(actionSanitizer, actions) {
  return Object.keys(actions).reduce((sanitizedActions, actionIdx) => {
    const idx = Number(actionIdx);
    sanitizedActions[idx] = sanitizeAction(actionSanitizer, actions[idx], idx);
    return sanitizedActions;
  }, {});
}
function sanitizeAction(actionSanitizer, action, actionIdx) {
  return __spreadProps(__spreadValues({}, action), {
    action: actionSanitizer(action.action, actionIdx)
  });
}
function sanitizeStates(stateSanitizer, states) {
  return states.map((computedState, idx) => ({
    state: sanitizeState(stateSanitizer, computedState.state, idx),
    error: computedState.error
  }));
}
function sanitizeState(stateSanitizer, state, stateIdx) {
  return stateSanitizer(state, stateIdx);
}
function shouldFilterActions(config) {
  return config.predicate || config.actionsSafelist || config.actionsBlocklist;
}
function filterLiftedState(liftedState, predicate, safelist, blocklist) {
  const filteredStagedActionIds = [];
  const filteredActionsById = {};
  const filteredComputedStates = [];
  liftedState.stagedActionIds.forEach((id, idx) => {
    const liftedAction = liftedState.actionsById[id];
    if (!liftedAction) return;
    if (idx && isActionFiltered(liftedState.computedStates[idx], liftedAction, predicate, safelist, blocklist)) {
      return;
    }
    filteredActionsById[id] = liftedAction;
    filteredStagedActionIds.push(id);
    filteredComputedStates.push(liftedState.computedStates[idx]);
  });
  return __spreadProps(__spreadValues({}, liftedState), {
    stagedActionIds: filteredStagedActionIds,
    actionsById: filteredActionsById,
    computedStates: filteredComputedStates
  });
}
function isActionFiltered(state, action, predicate, safelist, blockedlist) {
  const predicateMatch = predicate && !predicate(state, action.action);
  const safelistMatch = safelist && !action.action.type.match(safelist.map((s) => escapeRegExp(s)).join("|"));
  const blocklistMatch = blockedlist && action.action.type.match(blockedlist.map((s) => escapeRegExp(s)).join("|"));
  return predicateMatch || safelistMatch || blocklistMatch;
}
function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function injectZoneConfig(connectInZone) {
  const ngZone = connectInZone ? inject(NgZone) : null;
  return {
    ngZone,
    connectInZone
  };
}
var _DevtoolsDispatcher = class _DevtoolsDispatcher extends ActionsSubject {
};
_DevtoolsDispatcher.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275DevtoolsDispatcher_BaseFactory;
  return function DevtoolsDispatcher_Factory(__ngFactoryType__) {
    return (\u0275DevtoolsDispatcher_BaseFactory || (\u0275DevtoolsDispatcher_BaseFactory = \u0275\u0275getInheritedFactory(_DevtoolsDispatcher)))(__ngFactoryType__ || _DevtoolsDispatcher);
  };
})();
_DevtoolsDispatcher.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _DevtoolsDispatcher,
  factory: _DevtoolsDispatcher.\u0275fac
});
var DevtoolsDispatcher = _DevtoolsDispatcher;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevtoolsDispatcher, [{
    type: Injectable
  }], null, null);
})();
var ExtensionActionTypes = {
  START: "START",
  DISPATCH: "DISPATCH",
  STOP: "STOP",
  ACTION: "ACTION"
};
var REDUX_DEVTOOLS_EXTENSION = new InjectionToken("@ngrx/store-devtools Redux Devtools Extension");
var _DevtoolsExtension = class _DevtoolsExtension {
  constructor(devtoolsExtension, config, dispatcher) {
    this.config = config;
    this.dispatcher = dispatcher;
    this.zoneConfig = injectZoneConfig(this.config.connectInZone);
    this.devtoolsExtension = devtoolsExtension;
    this.createActionStreams();
  }
  notify(action, state) {
    if (!this.devtoolsExtension) {
      return;
    }
    if (action.type === PERFORM_ACTION) {
      if (state.isLocked || state.isPaused) {
        return;
      }
      const currentState = unliftState(state);
      if (shouldFilterActions(this.config) && isActionFiltered(currentState, action, this.config.predicate, this.config.actionsSafelist, this.config.actionsBlocklist)) {
        return;
      }
      const sanitizedState = this.config.stateSanitizer ? sanitizeState(this.config.stateSanitizer, currentState, state.currentStateIndex) : currentState;
      const sanitizedAction = this.config.actionSanitizer ? sanitizeAction(this.config.actionSanitizer, action, state.nextActionId) : action;
      this.sendToReduxDevtools(() => this.extensionConnection.send(sanitizedAction, sanitizedState));
    } else {
      const sanitizedLiftedState = __spreadProps(__spreadValues({}, state), {
        stagedActionIds: state.stagedActionIds,
        actionsById: this.config.actionSanitizer ? sanitizeActions(this.config.actionSanitizer, state.actionsById) : state.actionsById,
        computedStates: this.config.stateSanitizer ? sanitizeStates(this.config.stateSanitizer, state.computedStates) : state.computedStates
      });
      this.sendToReduxDevtools(() => this.devtoolsExtension.send(null, sanitizedLiftedState, this.getExtensionConfig(this.config)));
    }
  }
  createChangesObservable() {
    if (!this.devtoolsExtension) {
      return EMPTY;
    }
    return new Observable((subscriber) => {
      const connection = this.zoneConfig.connectInZone ? (
        // To reduce change detection cycles, we need to run the `connect` method
        // outside of the Angular zone. The `connect` method adds a `message`
        // event listener to communicate with an extension using `window.postMessage`
        // and handle message events.
        this.zoneConfig.ngZone.runOutsideAngular(() => this.devtoolsExtension.connect(this.getExtensionConfig(this.config)))
      ) : this.devtoolsExtension.connect(this.getExtensionConfig(this.config));
      this.extensionConnection = connection;
      connection.init();
      connection.subscribe((change) => subscriber.next(change));
      return connection.unsubscribe;
    });
  }
  createActionStreams() {
    const changes$ = this.createChangesObservable().pipe(share());
    const start$ = changes$.pipe(filter((change) => change.type === ExtensionActionTypes.START));
    const stop$ = changes$.pipe(filter((change) => change.type === ExtensionActionTypes.STOP));
    const liftedActions$ = changes$.pipe(filter((change) => change.type === ExtensionActionTypes.DISPATCH), map((change) => this.unwrapAction(change.payload)), concatMap((action) => {
      if (action.type === IMPORT_STATE) {
        return this.dispatcher.pipe(filter((action2) => action2.type === UPDATE), timeout(1e3), debounceTime(1e3), map(() => action), catchError(() => of(action)), take(1));
      } else {
        return of(action);
      }
    }));
    const actions$ = changes$.pipe(filter((change) => change.type === ExtensionActionTypes.ACTION), map((change) => this.unwrapAction(change.payload)));
    const actionsUntilStop$ = actions$.pipe(takeUntil(stop$));
    const liftedUntilStop$ = liftedActions$.pipe(takeUntil(stop$));
    this.start$ = start$.pipe(takeUntil(stop$));
    this.actions$ = this.start$.pipe(switchMap(() => actionsUntilStop$));
    this.liftedActions$ = this.start$.pipe(switchMap(() => liftedUntilStop$));
  }
  unwrapAction(action) {
    return typeof action === "string" ? (0, eval)(`(${action})`) : action;
  }
  getExtensionConfig(config) {
    const extensionOptions = {
      name: config.name,
      features: config.features,
      serialize: config.serialize,
      autoPause: config.autoPause ?? false,
      trace: config.trace ?? false,
      traceLimit: config.traceLimit ?? 75
      // The action/state sanitizers are not added to the config
      // because sanitation is done in this class already.
      // It is done before sending it to the devtools extension for consistency:
      // - If we call extensionConnection.send(...),
      //   the extension would call the sanitizers.
      // - If we call devtoolsExtension.send(...) (aka full state update),
      //   the extension would NOT call the sanitizers, so we have to do it ourselves.
    };
    if (config.maxAge !== false) {
      extensionOptions.maxAge = config.maxAge;
    }
    return extensionOptions;
  }
  sendToReduxDevtools(send) {
    try {
      send();
    } catch (err) {
      console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools", err);
    }
  }
};
_DevtoolsExtension.\u0275fac = function DevtoolsExtension_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DevtoolsExtension)(\u0275\u0275inject(REDUX_DEVTOOLS_EXTENSION), \u0275\u0275inject(STORE_DEVTOOLS_CONFIG), \u0275\u0275inject(DevtoolsDispatcher));
};
_DevtoolsExtension.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _DevtoolsExtension,
  factory: _DevtoolsExtension.\u0275fac
});
var DevtoolsExtension = _DevtoolsExtension;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevtoolsExtension, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [REDUX_DEVTOOLS_EXTENSION]
    }]
  }, {
    type: StoreDevtoolsConfig,
    decorators: [{
      type: Inject,
      args: [STORE_DEVTOOLS_CONFIG]
    }]
  }, {
    type: DevtoolsDispatcher
  }], null);
})();
var INIT_ACTION = {
  type: INIT
};
var RECOMPUTE = "@ngrx/store-devtools/recompute";
var RECOMPUTE_ACTION = {
  type: RECOMPUTE
};
function computeNextEntry(reducer, action, state, error, errorHandler2) {
  if (error) {
    return {
      state,
      error: "Interrupted by an error up the chain"
    };
  }
  let nextState = state;
  let nextError;
  try {
    nextState = reducer(state, action);
  } catch (err) {
    nextError = err.toString();
    errorHandler2.handleError(err);
  }
  return {
    state: nextState,
    error: nextError
  };
}
function recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler2, isPaused) {
  if (minInvalidatedStateIndex >= computedStates.length && computedStates.length === stagedActionIds.length) {
    return computedStates;
  }
  const nextComputedStates = computedStates.slice(0, minInvalidatedStateIndex);
  const lastIncludedActionId = stagedActionIds.length - (isPaused ? 1 : 0);
  for (let i = minInvalidatedStateIndex; i < lastIncludedActionId; i++) {
    const actionId = stagedActionIds[i];
    const action = actionsById[actionId].action;
    const previousEntry = nextComputedStates[i - 1];
    const previousState = previousEntry ? previousEntry.state : committedState;
    const previousError = previousEntry ? previousEntry.error : void 0;
    const shouldSkip = skippedActionIds.indexOf(actionId) > -1;
    const entry = shouldSkip ? previousEntry : computeNextEntry(reducer, action, previousState, previousError, errorHandler2);
    nextComputedStates.push(entry);
  }
  if (isPaused) {
    nextComputedStates.push(computedStates[computedStates.length - 1]);
  }
  return nextComputedStates;
}
function liftInitialState(initialCommittedState, monitorReducer) {
  return {
    monitorState: monitorReducer(void 0, {}),
    nextActionId: 1,
    actionsById: {
      0: liftAction(INIT_ACTION)
    },
    stagedActionIds: [0],
    skippedActionIds: [],
    committedState: initialCommittedState,
    currentStateIndex: 0,
    computedStates: [],
    isLocked: false,
    isPaused: false
  };
}
function liftReducerWith(initialCommittedState, initialLiftedState, errorHandler2, monitorReducer, options = {}) {
  return (reducer) => (liftedState, liftedAction) => {
    let {
      monitorState,
      actionsById,
      nextActionId,
      stagedActionIds,
      skippedActionIds,
      committedState,
      currentStateIndex,
      computedStates,
      isLocked,
      isPaused
    } = liftedState || initialLiftedState;
    if (!liftedState) {
      actionsById = Object.create(actionsById);
    }
    function commitExcessActions(n) {
      let excess = n;
      let idsToDelete = stagedActionIds.slice(1, excess + 1);
      for (let i = 0; i < idsToDelete.length; i++) {
        if (computedStates[i + 1].error) {
          excess = i;
          idsToDelete = stagedActionIds.slice(1, excess + 1);
          break;
        } else {
          delete actionsById[idsToDelete[i]];
        }
      }
      skippedActionIds = skippedActionIds.filter((id) => idsToDelete.indexOf(id) === -1);
      stagedActionIds = [0, ...stagedActionIds.slice(excess + 1)];
      committedState = computedStates[excess].state;
      computedStates = computedStates.slice(excess);
      currentStateIndex = currentStateIndex > excess ? currentStateIndex - excess : 0;
    }
    function commitChanges() {
      actionsById = {
        0: liftAction(INIT_ACTION)
      };
      nextActionId = 1;
      stagedActionIds = [0];
      skippedActionIds = [];
      committedState = computedStates[currentStateIndex].state;
      currentStateIndex = 0;
      computedStates = [];
    }
    let minInvalidatedStateIndex = 0;
    switch (liftedAction.type) {
      case LOCK_CHANGES: {
        isLocked = liftedAction.status;
        minInvalidatedStateIndex = Infinity;
        break;
      }
      case PAUSE_RECORDING: {
        isPaused = liftedAction.status;
        if (isPaused) {
          stagedActionIds = [...stagedActionIds, nextActionId];
          actionsById[nextActionId] = new PerformAction({
            type: "@ngrx/devtools/pause"
          }, +Date.now());
          nextActionId++;
          minInvalidatedStateIndex = stagedActionIds.length - 1;
          computedStates = computedStates.concat(computedStates[computedStates.length - 1]);
          if (currentStateIndex === stagedActionIds.length - 2) {
            currentStateIndex++;
          }
          minInvalidatedStateIndex = Infinity;
        } else {
          commitChanges();
        }
        break;
      }
      case RESET: {
        actionsById = {
          0: liftAction(INIT_ACTION)
        };
        nextActionId = 1;
        stagedActionIds = [0];
        skippedActionIds = [];
        committedState = initialCommittedState;
        currentStateIndex = 0;
        computedStates = [];
        break;
      }
      case COMMIT: {
        commitChanges();
        break;
      }
      case ROLLBACK: {
        actionsById = {
          0: liftAction(INIT_ACTION)
        };
        nextActionId = 1;
        stagedActionIds = [0];
        skippedActionIds = [];
        currentStateIndex = 0;
        computedStates = [];
        break;
      }
      case TOGGLE_ACTION: {
        const {
          id: actionId
        } = liftedAction;
        const index = skippedActionIds.indexOf(actionId);
        if (index === -1) {
          skippedActionIds = [actionId, ...skippedActionIds];
        } else {
          skippedActionIds = skippedActionIds.filter((id) => id !== actionId);
        }
        minInvalidatedStateIndex = stagedActionIds.indexOf(actionId);
        break;
      }
      case SET_ACTIONS_ACTIVE: {
        const {
          start,
          end,
          active
        } = liftedAction;
        const actionIds = [];
        for (let i = start; i < end; i++) actionIds.push(i);
        if (active) {
          skippedActionIds = difference(skippedActionIds, actionIds);
        } else {
          skippedActionIds = [...skippedActionIds, ...actionIds];
        }
        minInvalidatedStateIndex = stagedActionIds.indexOf(start);
        break;
      }
      case JUMP_TO_STATE: {
        currentStateIndex = liftedAction.index;
        minInvalidatedStateIndex = Infinity;
        break;
      }
      case JUMP_TO_ACTION: {
        const index = stagedActionIds.indexOf(liftedAction.actionId);
        if (index !== -1) currentStateIndex = index;
        minInvalidatedStateIndex = Infinity;
        break;
      }
      case SWEEP: {
        stagedActionIds = difference(stagedActionIds, skippedActionIds);
        skippedActionIds = [];
        currentStateIndex = Math.min(currentStateIndex, stagedActionIds.length - 1);
        break;
      }
      case PERFORM_ACTION: {
        if (isLocked) {
          return liftedState || initialLiftedState;
        }
        if (isPaused || liftedState && isActionFiltered(liftedState.computedStates[currentStateIndex], liftedAction, options.predicate, options.actionsSafelist, options.actionsBlocklist)) {
          const lastState = computedStates[computedStates.length - 1];
          computedStates = [...computedStates.slice(0, -1), computeNextEntry(reducer, liftedAction.action, lastState.state, lastState.error, errorHandler2)];
          minInvalidatedStateIndex = Infinity;
          break;
        }
        if (options.maxAge && stagedActionIds.length === options.maxAge) {
          commitExcessActions(1);
        }
        if (currentStateIndex === stagedActionIds.length - 1) {
          currentStateIndex++;
        }
        const actionId = nextActionId++;
        actionsById[actionId] = liftedAction;
        stagedActionIds = [...stagedActionIds, actionId];
        minInvalidatedStateIndex = stagedActionIds.length - 1;
        break;
      }
      case IMPORT_STATE: {
        ({
          monitorState,
          actionsById,
          nextActionId,
          stagedActionIds,
          skippedActionIds,
          committedState,
          currentStateIndex,
          computedStates,
          isLocked,
          isPaused
        } = liftedAction.nextLiftedState);
        break;
      }
      case INIT: {
        minInvalidatedStateIndex = 0;
        if (options.maxAge && stagedActionIds.length > options.maxAge) {
          computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler2, isPaused);
          commitExcessActions(stagedActionIds.length - options.maxAge);
          minInvalidatedStateIndex = Infinity;
        }
        break;
      }
      case UPDATE: {
        const stateHasErrors = computedStates.filter((state) => state.error).length > 0;
        if (stateHasErrors) {
          minInvalidatedStateIndex = 0;
          if (options.maxAge && stagedActionIds.length > options.maxAge) {
            computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler2, isPaused);
            commitExcessActions(stagedActionIds.length - options.maxAge);
            minInvalidatedStateIndex = Infinity;
          }
        } else {
          if (!isPaused && !isLocked) {
            if (currentStateIndex === stagedActionIds.length - 1) {
              currentStateIndex++;
            }
            const actionId = nextActionId++;
            actionsById[actionId] = new PerformAction(liftedAction, +Date.now());
            stagedActionIds = [...stagedActionIds, actionId];
            minInvalidatedStateIndex = stagedActionIds.length - 1;
            computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler2, isPaused);
          }
          computedStates = computedStates.map((cmp) => __spreadProps(__spreadValues({}, cmp), {
            state: reducer(cmp.state, RECOMPUTE_ACTION)
          }));
          currentStateIndex = stagedActionIds.length - 1;
          if (options.maxAge && stagedActionIds.length > options.maxAge) {
            commitExcessActions(stagedActionIds.length - options.maxAge);
          }
          minInvalidatedStateIndex = Infinity;
        }
        break;
      }
      default: {
        minInvalidatedStateIndex = Infinity;
        break;
      }
    }
    computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler2, isPaused);
    monitorState = monitorReducer(monitorState, liftedAction);
    return {
      monitorState,
      actionsById,
      nextActionId,
      stagedActionIds,
      skippedActionIds,
      committedState,
      currentStateIndex,
      computedStates,
      isLocked,
      isPaused
    };
  };
}
var _StoreDevtools = class _StoreDevtools {
  constructor(dispatcher, actions$, reducers$, extension, scannedActions, errorHandler2, initialState2, config) {
    const liftedInitialState = liftInitialState(initialState2, config.monitor);
    const liftReducer = liftReducerWith(initialState2, liftedInitialState, errorHandler2, config.monitor, config);
    const liftedAction$ = merge(merge(actions$.asObservable().pipe(skip(1)), extension.actions$).pipe(map(liftAction)), dispatcher, extension.liftedActions$).pipe(observeOn(queueScheduler));
    const liftedReducer$ = reducers$.pipe(map(liftReducer));
    const zoneConfig = injectZoneConfig(config.connectInZone);
    const liftedStateSubject = new ReplaySubject(1);
    this.liftedStateSubscription = liftedAction$.pipe(
      withLatestFrom(liftedReducer$),
      // The extension would post messages back outside of the Angular zone
      // because we call `connect()` wrapped with `runOutsideAngular`. We run change
      // detection only once at the end after all the required asynchronous tasks have
      // been processed (for instance, `setInterval` scheduled by the `timeout` operator).
      // We have to re-enter the Angular zone before the `scan` since it runs the reducer
      // which must be run within the Angular zone.
      emitInZone(zoneConfig),
      scan(({
        state: liftedState
      }, [action, reducer]) => {
        let reducedLiftedState = reducer(liftedState, action);
        if (action.type !== PERFORM_ACTION && shouldFilterActions(config)) {
          reducedLiftedState = filterLiftedState(reducedLiftedState, config.predicate, config.actionsSafelist, config.actionsBlocklist);
        }
        extension.notify(action, reducedLiftedState);
        return {
          state: reducedLiftedState,
          action
        };
      }, {
        state: liftedInitialState,
        action: null
      })
    ).subscribe(({
      state,
      action
    }) => {
      liftedStateSubject.next(state);
      if (action.type === PERFORM_ACTION) {
        const unliftedAction = action.action;
        scannedActions.next(unliftedAction);
      }
    });
    this.extensionStartSubscription = extension.start$.pipe(emitInZone(zoneConfig)).subscribe(() => {
      this.refresh();
    });
    const liftedState$ = liftedStateSubject.asObservable();
    const state$ = liftedState$.pipe(map(unliftState));
    Object.defineProperty(state$, "state", {
      value: toSignal(state$, {
        manualCleanup: true,
        requireSync: true
      })
    });
    this.dispatcher = dispatcher;
    this.liftedState = liftedState$;
    this.state = state$;
  }
  ngOnDestroy() {
    this.liftedStateSubscription.unsubscribe();
    this.extensionStartSubscription.unsubscribe();
  }
  dispatch(action) {
    this.dispatcher.next(action);
  }
  next(action) {
    this.dispatcher.next(action);
  }
  error(error) {
  }
  complete() {
  }
  performAction(action) {
    this.dispatch(new PerformAction(action, +Date.now()));
  }
  refresh() {
    this.dispatch(new Refresh());
  }
  reset() {
    this.dispatch(new Reset(+Date.now()));
  }
  rollback() {
    this.dispatch(new Rollback(+Date.now()));
  }
  commit() {
    this.dispatch(new Commit(+Date.now()));
  }
  sweep() {
    this.dispatch(new Sweep());
  }
  toggleAction(id) {
    this.dispatch(new ToggleAction(id));
  }
  jumpToAction(actionId) {
    this.dispatch(new JumpToAction(actionId));
  }
  jumpToState(index) {
    this.dispatch(new JumpToState(index));
  }
  importState(nextLiftedState) {
    this.dispatch(new ImportState(nextLiftedState));
  }
  lockChanges(status) {
    this.dispatch(new LockChanges(status));
  }
  pauseRecording(status) {
    this.dispatch(new PauseRecording(status));
  }
};
_StoreDevtools.\u0275fac = function StoreDevtools_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StoreDevtools)(\u0275\u0275inject(DevtoolsDispatcher), \u0275\u0275inject(ActionsSubject), \u0275\u0275inject(ReducerObservable), \u0275\u0275inject(DevtoolsExtension), \u0275\u0275inject(ScannedActionsSubject), \u0275\u0275inject(ErrorHandler), \u0275\u0275inject(INITIAL_STATE), \u0275\u0275inject(STORE_DEVTOOLS_CONFIG));
};
_StoreDevtools.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _StoreDevtools,
  factory: _StoreDevtools.\u0275fac
});
var StoreDevtools = _StoreDevtools;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreDevtools, [{
    type: Injectable
  }], () => [{
    type: DevtoolsDispatcher
  }, {
    type: ActionsSubject
  }, {
    type: ReducerObservable
  }, {
    type: DevtoolsExtension
  }, {
    type: ScannedActionsSubject
  }, {
    type: ErrorHandler
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [INITIAL_STATE]
    }]
  }, {
    type: StoreDevtoolsConfig,
    decorators: [{
      type: Inject,
      args: [STORE_DEVTOOLS_CONFIG]
    }]
  }], null);
})();
function emitInZone({
  ngZone,
  connectInZone
}) {
  return (source) => connectInZone ? new Observable((subscriber) => source.subscribe({
    next: (value) => ngZone.run(() => subscriber.next(value)),
    error: (error) => ngZone.run(() => subscriber.error(error)),
    complete: () => ngZone.run(() => subscriber.complete())
  })) : source;
}
var IS_EXTENSION_OR_MONITOR_PRESENT = new InjectionToken("@ngrx/store-devtools Is Devtools Extension or Monitor Present");
function createIsExtensionOrMonitorPresent(extension, config) {
  return Boolean(extension) || config.monitor !== noMonitor;
}
function createReduxDevtoolsExtension() {
  const extensionKey = "__REDUX_DEVTOOLS_EXTENSION__";
  if (typeof window === "object" && typeof window[extensionKey] !== "undefined") {
    return window[extensionKey];
  } else {
    return null;
  }
}
function createStateObservable(devtools) {
  return devtools.state;
}
function provideStoreDevtools(options = {}) {
  return makeEnvironmentProviders([DevtoolsExtension, DevtoolsDispatcher, StoreDevtools, {
    provide: INITIAL_OPTIONS,
    useValue: options
  }, {
    provide: IS_EXTENSION_OR_MONITOR_PRESENT,
    deps: [REDUX_DEVTOOLS_EXTENSION, STORE_DEVTOOLS_CONFIG],
    useFactory: createIsExtensionOrMonitorPresent
  }, {
    provide: REDUX_DEVTOOLS_EXTENSION,
    useFactory: createReduxDevtoolsExtension
  }, {
    provide: STORE_DEVTOOLS_CONFIG,
    deps: [INITIAL_OPTIONS],
    useFactory: createConfig
  }, {
    provide: StateObservable,
    deps: [StoreDevtools],
    useFactory: createStateObservable
  }, {
    provide: ReducerManagerDispatcher,
    useExisting: DevtoolsDispatcher
  }]);
}
var _StoreDevtoolsModule = class _StoreDevtoolsModule {
  static instrument(options = {}) {
    return {
      ngModule: _StoreDevtoolsModule,
      providers: [provideStoreDevtools(options)]
    };
  }
};
_StoreDevtoolsModule.\u0275fac = function StoreDevtoolsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StoreDevtoolsModule)();
};
_StoreDevtoolsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _StoreDevtoolsModule
});
_StoreDevtoolsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var StoreDevtoolsModule = _StoreDevtoolsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreDevtoolsModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();

// src/app/store/reducers/product.reducer.ts
var initialProductState = {
  loading: false,
  product: [],
  error: ""
};
var productReducer = createReducer(initialProductState, on(loadProductSuccess, (state, { product }) => __spreadProps(__spreadValues({}, state), { product, loading: false })), on(loadProductFailure, (state, { error }) => __spreadProps(__spreadValues({}, state), { error, loading: false })), on(loadProducts, (state) => __spreadProps(__spreadValues({}, state), { loading: true })));

// node_modules/@ngrx/effects/fesm2022/ngrx-effects.mjs
var DEFAULT_EFFECT_CONFIG = {
  dispatch: true,
  functional: false,
  useEffectsErrorHandler: true
};
var CREATE_EFFECT_METADATA_KEY = "__@ngrx/effects_create__";
function createEffect(source, config = {}) {
  const effect = config.functional ? source : source();
  const value = __spreadValues(__spreadValues({}, DEFAULT_EFFECT_CONFIG), config);
  Object.defineProperty(effect, CREATE_EFFECT_METADATA_KEY, {
    value
  });
  return effect;
}
function getCreateEffectMetadata(instance) {
  const propertyNames = Object.getOwnPropertyNames(instance);
  const metadata = propertyNames.filter((propertyName) => {
    if (instance[propertyName] && instance[propertyName].hasOwnProperty(CREATE_EFFECT_METADATA_KEY)) {
      const property = instance[propertyName];
      return property[CREATE_EFFECT_METADATA_KEY].hasOwnProperty("dispatch");
    }
    return false;
  }).map((propertyName) => {
    const metaData = instance[propertyName][CREATE_EFFECT_METADATA_KEY];
    return __spreadValues({
      propertyName
    }, metaData);
  });
  return metadata;
}
function getSourceMetadata(instance) {
  return getCreateEffectMetadata(instance);
}
function getSourceForInstance(instance) {
  return Object.getPrototypeOf(instance);
}
function isClassInstance(obj) {
  return !!obj.constructor && obj.constructor.name !== "Object" && obj.constructor.name !== "Function";
}
function isClass(classOrRecord) {
  return typeof classOrRecord === "function";
}
function getClasses(classesAndRecords) {
  return classesAndRecords.filter(isClass);
}
function isToken(tokenOrRecord) {
  return tokenOrRecord instanceof InjectionToken || isClass(tokenOrRecord);
}
function mergeEffects(sourceInstance, globalErrorHandler, effectsErrorHandler) {
  const source = getSourceForInstance(sourceInstance);
  const isClassBasedEffect = !!source && source.constructor.name !== "Object";
  const sourceName = isClassBasedEffect ? source.constructor.name : null;
  const observables$ = getSourceMetadata(sourceInstance).map(({
    propertyName,
    dispatch,
    useEffectsErrorHandler
  }) => {
    const observable$ = typeof sourceInstance[propertyName] === "function" ? sourceInstance[propertyName]() : sourceInstance[propertyName];
    const effectAction$ = useEffectsErrorHandler ? effectsErrorHandler(observable$, globalErrorHandler) : observable$;
    if (dispatch === false) {
      return effectAction$.pipe(ignoreElements());
    }
    const materialized$ = effectAction$.pipe(materialize());
    return materialized$.pipe(map((notification) => ({
      effect: sourceInstance[propertyName],
      notification,
      propertyName,
      sourceName,
      sourceInstance
    })));
  });
  return merge(...observables$);
}
var MAX_NUMBER_OF_RETRY_ATTEMPTS = 10;
function defaultEffectsErrorHandler(observable$, errorHandler2, retryAttemptLeft = MAX_NUMBER_OF_RETRY_ATTEMPTS) {
  return observable$.pipe(catchError((error) => {
    if (errorHandler2) errorHandler2.handleError(error);
    if (retryAttemptLeft <= 1) {
      return observable$;
    }
    return defaultEffectsErrorHandler(observable$, errorHandler2, retryAttemptLeft - 1);
  }));
}
var _Actions = class _Actions extends Observable {
  constructor(source) {
    super();
    if (source) {
      this.source = source;
    }
  }
  lift(operator) {
    const observable2 = new _Actions();
    observable2.source = this;
    observable2.operator = operator;
    return observable2;
  }
};
_Actions.\u0275fac = function Actions_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Actions)(\u0275\u0275inject(ScannedActionsSubject));
};
_Actions.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _Actions,
  factory: _Actions.\u0275fac,
  providedIn: "root"
});
var Actions = _Actions;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Actions, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Observable,
    decorators: [{
      type: Inject,
      args: [ScannedActionsSubject]
    }]
  }], null);
})();
function ofType(...allowedTypes) {
  return filter((action) => allowedTypes.some((typeOrActionCreator) => {
    if (typeof typeOrActionCreator === "string") {
      return typeOrActionCreator === action.type;
    }
    return typeOrActionCreator.type === action.type;
  }));
}
var _ROOT_EFFECTS_GUARD = new InjectionToken("@ngrx/effects Internal Root Guard");
var USER_PROVIDED_EFFECTS = new InjectionToken("@ngrx/effects User Provided Effects");
var _ROOT_EFFECTS = new InjectionToken("@ngrx/effects Internal Root Effects");
var _ROOT_EFFECTS_INSTANCES = new InjectionToken("@ngrx/effects Internal Root Effects Instances");
var _FEATURE_EFFECTS = new InjectionToken("@ngrx/effects Internal Feature Effects");
var _FEATURE_EFFECTS_INSTANCE_GROUPS = new InjectionToken("@ngrx/effects Internal Feature Effects Instance Groups");
var EFFECTS_ERROR_HANDLER = new InjectionToken("@ngrx/effects Effects Error Handler", {
  providedIn: "root",
  factory: () => defaultEffectsErrorHandler
});
var ROOT_EFFECTS_INIT = "@ngrx/effects/init";
var rootEffectsInit = createAction(ROOT_EFFECTS_INIT);
function reportInvalidActions(output, reporter) {
  if (output.notification.kind === "N") {
    const action = output.notification.value;
    const isInvalidAction = !isAction(action);
    if (isInvalidAction) {
      reporter.handleError(new Error(`Effect ${getEffectName(output)} dispatched an invalid action: ${stringify2(action)}`));
    }
  }
}
function isAction(action) {
  return typeof action !== "function" && action && action.type && typeof action.type === "string";
}
function getEffectName({
  propertyName,
  sourceInstance,
  sourceName
}) {
  const isMethod = typeof sourceInstance[propertyName] === "function";
  const isClassBasedEffect = !!sourceName;
  return isClassBasedEffect ? `"${sourceName}.${String(propertyName)}${isMethod ? "()" : ""}"` : `"${String(propertyName)}()"`;
}
function stringify2(action) {
  try {
    return JSON.stringify(action);
  } catch {
    return action;
  }
}
var onIdentifyEffectsKey = "ngrxOnIdentifyEffects";
function isOnIdentifyEffects(instance) {
  return isFunction2(instance, onIdentifyEffectsKey);
}
var onRunEffectsKey = "ngrxOnRunEffects";
function isOnRunEffects(instance) {
  return isFunction2(instance, onRunEffectsKey);
}
var onInitEffects = "ngrxOnInitEffects";
function isOnInitEffects(instance) {
  return isFunction2(instance, onInitEffects);
}
function isFunction2(instance, functionName) {
  return instance && functionName in instance && typeof instance[functionName] === "function";
}
var _EffectSources = class _EffectSources extends Subject {
  constructor(errorHandler2, effectsErrorHandler) {
    super();
    this.errorHandler = errorHandler2;
    this.effectsErrorHandler = effectsErrorHandler;
  }
  addEffects(effectSourceInstance) {
    this.next(effectSourceInstance);
  }
  /**
   * @internal
   */
  toActions() {
    return this.pipe(groupBy((effectsInstance2) => isClassInstance(effectsInstance2) ? getSourceForInstance(effectsInstance2) : effectsInstance2), mergeMap((source$) => {
      return source$.pipe(groupBy(effectsInstance));
    }), mergeMap((source$) => {
      const effect$ = source$.pipe(exhaustMap((sourceInstance) => {
        return resolveEffectSource(this.errorHandler, this.effectsErrorHandler)(sourceInstance);
      }), map((output) => {
        reportInvalidActions(output, this.errorHandler);
        return output.notification;
      }), filter((notification) => notification.kind === "N" && notification.value != null), dematerialize());
      const init$ = source$.pipe(take(1), filter(isOnInitEffects), map((instance) => instance.ngrxOnInitEffects()));
      return merge(effect$, init$);
    }));
  }
};
_EffectSources.\u0275fac = function EffectSources_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EffectSources)(\u0275\u0275inject(ErrorHandler), \u0275\u0275inject(EFFECTS_ERROR_HANDLER));
};
_EffectSources.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _EffectSources,
  factory: _EffectSources.\u0275fac,
  providedIn: "root"
});
var EffectSources = _EffectSources;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EffectSources, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ErrorHandler
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [EFFECTS_ERROR_HANDLER]
    }]
  }], null);
})();
function effectsInstance(sourceInstance) {
  if (isOnIdentifyEffects(sourceInstance)) {
    return sourceInstance.ngrxOnIdentifyEffects();
  }
  return "";
}
function resolveEffectSource(errorHandler2, effectsErrorHandler) {
  return (sourceInstance) => {
    const mergedEffects$ = mergeEffects(sourceInstance, errorHandler2, effectsErrorHandler);
    if (isOnRunEffects(sourceInstance)) {
      return sourceInstance.ngrxOnRunEffects(mergedEffects$);
    }
    return mergedEffects$;
  };
}
var _EffectsRunner = class _EffectsRunner {
  get isStarted() {
    return !!this.effectsSubscription;
  }
  constructor(effectSources, store) {
    this.effectSources = effectSources;
    this.store = store;
    this.effectsSubscription = null;
  }
  start() {
    if (!this.effectsSubscription) {
      this.effectsSubscription = this.effectSources.toActions().subscribe(this.store);
    }
  }
  ngOnDestroy() {
    if (this.effectsSubscription) {
      this.effectsSubscription.unsubscribe();
      this.effectsSubscription = null;
    }
  }
};
_EffectsRunner.\u0275fac = function EffectsRunner_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EffectsRunner)(\u0275\u0275inject(EffectSources), \u0275\u0275inject(Store));
};
_EffectsRunner.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _EffectsRunner,
  factory: _EffectsRunner.\u0275fac,
  providedIn: "root"
});
var EffectsRunner = _EffectsRunner;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EffectsRunner, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EffectSources
  }, {
    type: Store
  }], null);
})();
var _EffectsRootModule = class _EffectsRootModule {
  constructor(sources, runner, store, rootEffectsInstances, storeRootModule, storeFeatureModule, guard) {
    this.sources = sources;
    runner.start();
    for (const effectsInstance2 of rootEffectsInstances) {
      sources.addEffects(effectsInstance2);
    }
    store.dispatch({
      type: ROOT_EFFECTS_INIT
    });
  }
  addEffects(effectsInstance2) {
    this.sources.addEffects(effectsInstance2);
  }
};
_EffectsRootModule.\u0275fac = function EffectsRootModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EffectsRootModule)(\u0275\u0275inject(EffectSources), \u0275\u0275inject(EffectsRunner), \u0275\u0275inject(Store), \u0275\u0275inject(_ROOT_EFFECTS_INSTANCES), \u0275\u0275inject(StoreRootModule, 8), \u0275\u0275inject(StoreFeatureModule, 8), \u0275\u0275inject(_ROOT_EFFECTS_GUARD, 8));
};
_EffectsRootModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _EffectsRootModule
});
_EffectsRootModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var EffectsRootModule = _EffectsRootModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EffectsRootModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: EffectSources
  }, {
    type: EffectsRunner
  }, {
    type: Store
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [_ROOT_EFFECTS_INSTANCES]
    }]
  }, {
    type: StoreRootModule,
    decorators: [{
      type: Optional
    }]
  }, {
    type: StoreFeatureModule,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [_ROOT_EFFECTS_GUARD]
    }]
  }], null);
})();
var _EffectsFeatureModule = class _EffectsFeatureModule {
  constructor(effectsRootModule, effectsInstanceGroups, storeRootModule, storeFeatureModule) {
    const effectsInstances = effectsInstanceGroups.flat();
    for (const effectsInstance2 of effectsInstances) {
      effectsRootModule.addEffects(effectsInstance2);
    }
  }
};
_EffectsFeatureModule.\u0275fac = function EffectsFeatureModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EffectsFeatureModule)(\u0275\u0275inject(EffectsRootModule), \u0275\u0275inject(_FEATURE_EFFECTS_INSTANCE_GROUPS), \u0275\u0275inject(StoreRootModule, 8), \u0275\u0275inject(StoreFeatureModule, 8));
};
_EffectsFeatureModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _EffectsFeatureModule
});
_EffectsFeatureModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var EffectsFeatureModule = _EffectsFeatureModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EffectsFeatureModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: EffectsRootModule
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [_FEATURE_EFFECTS_INSTANCE_GROUPS]
    }]
  }, {
    type: StoreRootModule,
    decorators: [{
      type: Optional
    }]
  }, {
    type: StoreFeatureModule,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var _EffectsModule = class _EffectsModule {
  static forFeature(...featureEffects) {
    const effects = featureEffects.flat();
    const effectsClasses = getClasses(effects);
    return {
      ngModule: EffectsFeatureModule,
      providers: [effectsClasses, {
        provide: _FEATURE_EFFECTS,
        multi: true,
        useValue: effects
      }, {
        provide: USER_PROVIDED_EFFECTS,
        multi: true,
        useValue: []
      }, {
        provide: _FEATURE_EFFECTS_INSTANCE_GROUPS,
        multi: true,
        useFactory: createEffectsInstances,
        deps: [_FEATURE_EFFECTS, USER_PROVIDED_EFFECTS]
      }]
    };
  }
  static forRoot(...rootEffects) {
    const effects = rootEffects.flat();
    const effectsClasses = getClasses(effects);
    return {
      ngModule: EffectsRootModule,
      providers: [effectsClasses, {
        provide: _ROOT_EFFECTS,
        useValue: [effects]
      }, {
        provide: _ROOT_EFFECTS_GUARD,
        useFactory: _provideForRootGuard
      }, {
        provide: USER_PROVIDED_EFFECTS,
        multi: true,
        useValue: []
      }, {
        provide: _ROOT_EFFECTS_INSTANCES,
        useFactory: createEffectsInstances,
        deps: [_ROOT_EFFECTS, USER_PROVIDED_EFFECTS]
      }]
    };
  }
};
_EffectsModule.\u0275fac = function EffectsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EffectsModule)();
};
_EffectsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _EffectsModule
});
_EffectsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var EffectsModule = _EffectsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EffectsModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
function createEffectsInstances(effectsGroups, userProvidedEffectsGroups) {
  const effects = [];
  for (const effectsGroup of effectsGroups) {
    effects.push(...effectsGroup);
  }
  for (const userProvidedEffectsGroup of userProvidedEffectsGroups) {
    effects.push(...userProvidedEffectsGroup);
  }
  return effects.map((effectsTokenOrRecord) => isToken(effectsTokenOrRecord) ? inject(effectsTokenOrRecord) : effectsTokenOrRecord);
}
function _provideForRootGuard() {
  const runner = inject(EffectsRunner, {
    optional: true,
    skipSelf: true
  });
  const rootEffects = inject(_ROOT_EFFECTS, {
    self: true
  });
  const hasEffects = !(rootEffects.length === 1 && rootEffects[0].length === 0);
  if (hasEffects && runner) {
    throw new TypeError(`EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead.`);
  }
  return "guarded";
}
function provideEffects(...effects) {
  const effectsClassesAndRecords = effects.flat();
  const effectsClasses = getClasses(effectsClassesAndRecords);
  return makeEnvironmentProviders([effectsClasses, provideEnvironmentInitializer(() => {
    inject(ROOT_STORE_PROVIDER);
    inject(FEATURE_STATE_PROVIDER, {
      optional: true
    });
    const effectsRunner = inject(EffectsRunner);
    const effectSources = inject(EffectSources);
    const shouldInitEffects = !effectsRunner.isStarted;
    if (shouldInitEffects) {
      effectsRunner.start();
    }
    for (const effectsClassOrRecord of effectsClassesAndRecords) {
      const effectsInstance2 = isClass(effectsClassOrRecord) ? inject(effectsClassOrRecord) : effectsClassOrRecord;
      effectSources.addEffects(effectsInstance2);
    }
    if (shouldInitEffects) {
      const store = inject(Store);
      store.dispatch(rootEffectsInit());
    }
  })]);
}

// src/app/features/product/product-service.ts
var ProductService = class _ProductService {
  http;
  constructor(http) {
    this.http = http;
  }
  getProducts() {
    return this.http.get("https://api.escuelajs.co/api/v1/products");
  }
  static \u0275fac = function ProductService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductService, factory: _ProductService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/store/effects/product.effect.ts
var ProductEffect = class _ProductEffect {
  actions$;
  productService;
  // loadProducts$; // just declare, don’t assign yet
  constructor(actions$, productService) {
    this.actions$ = actions$;
    this.productService = productService;
    console.log("ProductEffect created");
    console.log("Actions instance:", this.actions$);
    console.log("ProductService instance:", this.productService);
  }
  loadProducts$ = createEffect(() => defer(() => this.actions$.pipe(ofType(loadProducts), mergeMap(() => this.productService.getProducts().pipe(map((response) => {
    const product = response.map((item) => ({ id: item.id, name: item.title }));
    return loadProductSuccess({ product });
  }), catchError((error) => of(loadProductFailure({ error }))))))));
  static \u0275fac = function ProductEffect_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductEffect)(\u0275\u0275inject(Actions), \u0275\u0275inject(ProductService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductEffect, factory: _ProductEffect.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductEffect, [{
    type: Injectable
  }], () => [{ type: Actions }, { type: ProductService }], null);
})();

// src/app/shared/interceptor/authorization-interceptor.ts
function authInterceptor(req, next) {
  const token = localStorage.getItem("token") || "";
  console.log(token, "token");
  const authReq = req.clone({
    setHeaders: { Authorization: `Bearer ${token}` }
  });
  return next(authReq);
}

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // provideEffects([ProductEffect]),
    //  importProvidersFrom(EffectsModule.forRoot([ProductEffect])),
    provideStore({ login: loginReducer, product: productReducer }),
    provideEffects([ProductEffect]),
    // ✅ this is correct
    provideHttpClient(),
    provideStoreDevtools({ maxAge: 25 }),
    // provideZonelessChangeDetection(),
    //  HttpClientModule,
    //  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideHttpClient(withInterceptors([authInterceptor])),
    provideHttpClient()
  ]
};

// src/app/shared/toaster/toaster.ts
function Toaster_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const toast_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.toastClass(toast_r1.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", toast_r1.message, " ");
  }
}
var Toaster = class _Toaster {
  toastService;
  toasts$;
  constructor(toastService) {
    this.toastService = toastService;
    this.toasts$ = this.toastService.toasts$;
  }
  toastClass(type) {
    switch (type) {
      case "success":
        return "bg-green-500";
      case "error":
        return "bg-red-500";
      case "info":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  }
  static \u0275fac = function Toaster_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Toaster)(\u0275\u0275directiveInject(ToasterService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Toaster, selectors: [["app-toaster"]], decls: 3, vars: 3, consts: [[1, "fixed", "top-4", "right-4", "space-y-2", "z-50", "bg-green-500", "text-red"], ["class", "px-4 py-2 rounded shadow text-white ", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "px-4", "py-2", "rounded", "shadow", "text-white", 3, "ngClass"]], template: function Toaster_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, Toaster_div_1_Template, 2, 2, "div", 1);
      \u0275\u0275pipe(2, "async");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx.toasts$));
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, AsyncPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Toaster, [{
    type: Component,
    args: [{ selector: "app-toaster", imports: [CommonModule, NgForOf, AsyncPipe], standalone: true, template: ' <div class="fixed top-4 right-4 space-y-2 z-50 bg-green-500 text-red">\n      <div *ngFor="let toast of toasts$ | async" \n           [ngClass]="toastClass(toast.type)"\n           class="px-4 py-2 rounded shadow text-white ">\n        {{ toast.message }}\n      </div>\n    </div>' }]
  }], () => [{ type: ToasterService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Toaster, { className: "Toaster", filePath: "src/app/shared/toaster/toaster.ts", lineNumber: 11 });
})();

// src/app/shared/pipes/fullname.ts
var Fullname = class _Fullname {
  transform(fistName, middleName, lastName) {
    return `${fistName} ${middleName} ${lastName}`;
  }
  static \u0275fac = function Fullname_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Fullname)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "fullname", type: _Fullname, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Fullname, [{
    type: Pipe,
    args: [{
      name: "fullname"
    }]
  }], null, null);
})();

// src/app/shared/directives/bgcolor.ts
var BgColorDirective = class _BgColorDirective {
  elementRef;
  renderer;
  constructor(elementRef, renderer) {
    this.elementRef = elementRef;
    this.renderer = renderer;
  }
  onMouseEnter() {
    this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "red");
  }
  onMouseLeave() {
    this.renderer.removeStyle(this.elementRef.nativeElement, "background-color");
  }
  static \u0275fac = function BgColorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BgColorDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _BgColorDirective, selectors: [["", "bgColor", ""]], hostBindings: function BgColorDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("mouseenter", function BgColorDirective_mouseenter_HostBindingHandler() {
        return ctx.onMouseEnter();
      })("mouseleave", function BgColorDirective_mouseleave_HostBindingHandler() {
        return ctx.onMouseLeave();
      });
    }
  } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BgColorDirective, [{
    type: Directive,
    args: [{
      selector: "[bgColor]"
    }]
  }], () => [{ type: ElementRef }, { type: Renderer2 }], { onMouseEnter: [{
    type: HostListener,
    args: ["mouseenter"]
  }], onMouseLeave: [{
    type: HostListener,
    args: ["mouseleave"]
  }] });
})();

// node_modules/ts-invariant/lib/invariant.js
var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf;
var setPrototypeOf = _a === void 0 ? function(obj, proto) {
  obj.__proto__ = proto;
  return obj;
} : _a;
var InvariantError = (
  /** @class */
  (function(_super) {
    __extends(InvariantError2, _super);
    function InvariantError2(message) {
      if (message === void 0) {
        message = genericMessage;
      }
      var _this = _super.call(this, typeof message === "number" ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)" : message) || this;
      _this.framesToPop = 1;
      _this.name = genericMessage;
      setPrototypeOf(_this, InvariantError2.prototype);
      return _this;
    }
    return InvariantError2;
  })(Error)
);
function invariant(condition, message) {
  if (!condition) {
    throw new InvariantError(message);
  }
}
var verbosityLevels = ["debug", "log", "warn", "error", "silent"];
var verbosityLevel = verbosityLevels.indexOf("log");
function wrapConsoleMethod(name) {
  return function() {
    if (verbosityLevels.indexOf(name) >= verbosityLevel) {
      var method = console[name] || console.log;
      return method.apply(console, arguments);
    }
  };
}
(function(invariant5) {
  invariant5.debug = wrapConsoleMethod("debug");
  invariant5.log = wrapConsoleMethod("log");
  invariant5.warn = wrapConsoleMethod("warn");
  invariant5.error = wrapConsoleMethod("error");
})(invariant || (invariant = {}));
function setVerbosity(level) {
  var old = verbosityLevels[verbosityLevel];
  verbosityLevel = Math.max(0, verbosityLevels.indexOf(level));
  return old;
}

// node_modules/@apollo/client/version.js
var version = "3.14.0";

// node_modules/@apollo/client/utilities/globals/maybe.js
function maybe(thunk) {
  try {
    return thunk();
  } catch (_a2) {
  }
}

// node_modules/@apollo/client/utilities/globals/global.js
var global_default = maybe(function() {
  return globalThis;
}) || maybe(function() {
  return window;
}) || maybe(function() {
  return self;
}) || maybe(function() {
  return global;
}) || // We don't expect the Function constructor ever to be invoked at runtime, as
// long as at least one of globalThis, window, self, or global is defined, so
// we are under no obligation to make it easy for static analysis tools to
// detect syntactic usage of the Function constructor. If you think you can
// improve your static analysis to detect this obfuscation, think again. This
// is an arms race you cannot win, at least not in JavaScript.
maybe(function() {
  return maybe.constructor("return this")();
});

// node_modules/@apollo/client/utilities/common/makeUniqueId.js
var prefixCounts = /* @__PURE__ */ new Map();
function makeUniqueId(prefix) {
  var count = prefixCounts.get(prefix) || 1;
  prefixCounts.set(prefix, count + 1);
  return "".concat(prefix, ":").concat(count, ":").concat(Math.random().toString(36).slice(2));
}

// node_modules/@apollo/client/utilities/common/stringifyForDisplay.js
function stringifyForDisplay(value, space) {
  if (space === void 0) {
    space = 0;
  }
  var undefId = makeUniqueId("stringifyForDisplay");
  return JSON.stringify(value, function(key, value2) {
    return value2 === void 0 ? undefId : value2;
  }, space).split(JSON.stringify(undefId)).join("<undefined>");
}

// node_modules/@apollo/client/utilities/globals/invariantWrappers.js
function wrap(fn) {
  return function(message) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    if (typeof message === "number") {
      var arg0 = message;
      message = getHandledErrorMsg(arg0);
      if (!message) {
        message = getFallbackErrorMsg(arg0, args);
        args = [];
      }
    }
    fn.apply(void 0, [message].concat(args));
  };
}
var invariant2 = Object.assign(function invariant3(condition, message) {
  var args = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }
  if (!condition) {
    invariant(condition, getHandledErrorMsg(message, args) || getFallbackErrorMsg(message, args));
  }
}, {
  debug: wrap(invariant.debug),
  log: wrap(invariant.log),
  warn: wrap(invariant.warn),
  error: wrap(invariant.error)
});
function newInvariantError(message) {
  var optionalParams = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    optionalParams[_i - 1] = arguments[_i];
  }
  return new InvariantError(getHandledErrorMsg(message, optionalParams) || getFallbackErrorMsg(message, optionalParams));
}
var ApolloErrorMessageHandler = Symbol.for("ApolloErrorMessageHandler_" + version);
function stringify3(arg) {
  if (typeof arg == "string") {
    return arg;
  }
  try {
    return stringifyForDisplay(arg, 2).slice(0, 1e3);
  } catch (_a2) {
    return "<non-serializable>";
  }
}
function getHandledErrorMsg(message, messageArgs) {
  if (messageArgs === void 0) {
    messageArgs = [];
  }
  if (!message)
    return;
  return global_default[ApolloErrorMessageHandler] && global_default[ApolloErrorMessageHandler](message, messageArgs.map(stringify3));
}
function getFallbackErrorMsg(message, messageArgs) {
  if (messageArgs === void 0) {
    messageArgs = [];
  }
  if (!message)
    return;
  return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
    version,
    message,
    args: messageArgs.map(stringify3)
  })));
}

// node_modules/@apollo/client/utilities/globals/index.js
var DEV = globalThis.__DEV__ !== false;

// node_modules/graphql/jsutils/devAssert.mjs
function devAssert(condition, message) {
  const booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(message);
  }
}

// node_modules/graphql/jsutils/isObjectLike.mjs
function isObjectLike(value) {
  return typeof value == "object" && value !== null;
}

// node_modules/graphql/jsutils/invariant.mjs
function invariant4(condition, message) {
  const booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(
      message != null ? message : "Unexpected invariant triggered."
    );
  }
}

// node_modules/graphql/language/location.mjs
var LineRegExp = /\r\n|[\n\r]/g;
function getLocation(source, position) {
  let lastLineStart = 0;
  let line = 1;
  for (const match2 of source.body.matchAll(LineRegExp)) {
    typeof match2.index === "number" || invariant4(false);
    if (match2.index >= position) {
      break;
    }
    lastLineStart = match2.index + match2[0].length;
    line += 1;
  }
  return {
    line,
    column: position + 1 - lastLineStart
  };
}

// node_modules/graphql/language/printLocation.mjs
function printLocation(location) {
  return printSourceLocation(
    location.source,
    getLocation(location.source, location.start)
  );
}
function printSourceLocation(source, sourceLocation) {
  const firstLineColumnOffset = source.locationOffset.column - 1;
  const body = "".padStart(firstLineColumnOffset) + source.body;
  const lineIndex = sourceLocation.line - 1;
  const lineOffset = source.locationOffset.line - 1;
  const lineNum = sourceLocation.line + lineOffset;
  const columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  const columnNum = sourceLocation.column + columnOffset;
  const locationStr = `${source.name}:${lineNum}:${columnNum}
`;
  const lines = body.split(/\r\n|[\n\r]/g);
  const locationLine = lines[lineIndex];
  if (locationLine.length > 120) {
    const subLineIndex = Math.floor(columnNum / 80);
    const subLineColumnNum = columnNum % 80;
    const subLines = [];
    for (let i = 0; i < locationLine.length; i += 80) {
      subLines.push(locationLine.slice(i, i + 80));
    }
    return locationStr + printPrefixedLines([
      [`${lineNum} |`, subLines[0]],
      ...subLines.slice(1, subLineIndex + 1).map((subLine) => ["|", subLine]),
      ["|", "^".padStart(subLineColumnNum)],
      ["|", subLines[subLineIndex + 1]]
    ]);
  }
  return locationStr + printPrefixedLines([
    // Lines specified like this: ["prefix", "string"],
    [`${lineNum - 1} |`, lines[lineIndex - 1]],
    [`${lineNum} |`, locationLine],
    ["|", "^".padStart(columnNum)],
    [`${lineNum + 1} |`, lines[lineIndex + 1]]
  ]);
}
function printPrefixedLines(lines) {
  const existingLines = lines.filter(([_, line]) => line !== void 0);
  const padLen = Math.max(...existingLines.map(([prefix]) => prefix.length));
  return existingLines.map(([prefix, line]) => prefix.padStart(padLen) + (line ? " " + line : "")).join("\n");
}

// node_modules/graphql/error/GraphQLError.mjs
function toNormalizedOptions(args) {
  const firstArg = args[0];
  if (firstArg == null || "kind" in firstArg || "length" in firstArg) {
    return {
      nodes: firstArg,
      source: args[1],
      positions: args[2],
      path: args[3],
      originalError: args[4],
      extensions: args[5]
    };
  }
  return firstArg;
}
var GraphQLError = class _GraphQLError extends Error {
  /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */
  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */
  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */
  /**
   * The original error thrown from a field resolver during execution.
   */
  /**
   * Extension fields to add to the formatted error.
   */
  /**
   * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
   */
  constructor(message, ...rawArgs) {
    var _this$nodes, _nodeLocations$, _ref;
    const { nodes, source, positions, path, originalError, extensions } = toNormalizedOptions(rawArgs);
    super(message);
    this.name = "GraphQLError";
    this.path = path !== null && path !== void 0 ? path : void 0;
    this.originalError = originalError !== null && originalError !== void 0 ? originalError : void 0;
    this.nodes = undefinedIfEmpty(
      Array.isArray(nodes) ? nodes : nodes ? [nodes] : void 0
    );
    const nodeLocations = undefinedIfEmpty(
      (_this$nodes = this.nodes) === null || _this$nodes === void 0 ? void 0 : _this$nodes.map((node) => node.loc).filter((loc) => loc != null)
    );
    this.source = source !== null && source !== void 0 ? source : nodeLocations === null || nodeLocations === void 0 ? void 0 : (_nodeLocations$ = nodeLocations[0]) === null || _nodeLocations$ === void 0 ? void 0 : _nodeLocations$.source;
    this.positions = positions !== null && positions !== void 0 ? positions : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc) => loc.start);
    this.locations = positions && source ? positions.map((pos) => getLocation(source, pos)) : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc) => getLocation(loc.source, loc.start));
    const originalExtensions = isObjectLike(
      originalError === null || originalError === void 0 ? void 0 : originalError.extensions
    ) ? originalError === null || originalError === void 0 ? void 0 : originalError.extensions : void 0;
    this.extensions = (_ref = extensions !== null && extensions !== void 0 ? extensions : originalExtensions) !== null && _ref !== void 0 ? _ref : /* @__PURE__ */ Object.create(null);
    Object.defineProperties(this, {
      message: {
        writable: true,
        enumerable: true
      },
      name: {
        enumerable: false
      },
      nodes: {
        enumerable: false
      },
      source: {
        enumerable: false
      },
      positions: {
        enumerable: false
      },
      originalError: {
        enumerable: false
      }
    });
    if (originalError !== null && originalError !== void 0 && originalError.stack) {
      Object.defineProperty(this, "stack", {
        value: originalError.stack,
        writable: true,
        configurable: true
      });
    } else if (Error.captureStackTrace) {
      Error.captureStackTrace(this, _GraphQLError);
    } else {
      Object.defineProperty(this, "stack", {
        value: Error().stack,
        writable: true,
        configurable: true
      });
    }
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
  toString() {
    let output = this.message;
    if (this.nodes) {
      for (const node of this.nodes) {
        if (node.loc) {
          output += "\n\n" + printLocation(node.loc);
        }
      }
    } else if (this.source && this.locations) {
      for (const location of this.locations) {
        output += "\n\n" + printSourceLocation(this.source, location);
      }
    }
    return output;
  }
  toJSON() {
    const formattedError = {
      message: this.message
    };
    if (this.locations != null) {
      formattedError.locations = this.locations;
    }
    if (this.path != null) {
      formattedError.path = this.path;
    }
    if (this.extensions != null && Object.keys(this.extensions).length > 0) {
      formattedError.extensions = this.extensions;
    }
    return formattedError;
  }
};
function undefinedIfEmpty(array) {
  return array === void 0 || array.length === 0 ? void 0 : array;
}

// node_modules/graphql/error/syntaxError.mjs
function syntaxError(source, position, description) {
  return new GraphQLError(`Syntax Error: ${description}`, {
    source,
    positions: [position]
  });
}

// node_modules/graphql/language/ast.mjs
var Location2 = class {
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The Token at which this Node begins.
   */
  /**
   * The Token at which this Node ends.
   */
  /**
   * The Source document the AST represents.
   */
  constructor(startToken, endToken, source) {
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  }
  get [Symbol.toStringTag]() {
    return "Location";
  }
  toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  }
};
var Token = class {
  /**
   * The kind of Token.
   */
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The 1-indexed line number on which this Token appears.
   */
  /**
   * The 1-indexed column number at which this Token begins.
   */
  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */
  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  constructor(kind, start, end, line, column, value) {
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
  get [Symbol.toStringTag]() {
    return "Token";
  }
  toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  }
};
var QueryDocumentKeys = {
  Name: [],
  Document: ["definitions"],
  OperationDefinition: [
    "name",
    "variableDefinitions",
    "directives",
    "selectionSet"
  ],
  VariableDefinition: ["variable", "type", "defaultValue", "directives"],
  Variable: ["name"],
  SelectionSet: ["selections"],
  Field: ["alias", "name", "arguments", "directives", "selectionSet"],
  Argument: ["name", "value"],
  FragmentSpread: ["name", "directives"],
  InlineFragment: ["typeCondition", "directives", "selectionSet"],
  FragmentDefinition: [
    "name",
    // Note: fragment variable definitions are deprecated and will removed in v17.0.0
    "variableDefinitions",
    "typeCondition",
    "directives",
    "selectionSet"
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ["values"],
  ObjectValue: ["fields"],
  ObjectField: ["name", "value"],
  Directive: ["name", "arguments"],
  NamedType: ["name"],
  ListType: ["type"],
  NonNullType: ["type"],
  SchemaDefinition: ["description", "directives", "operationTypes"],
  OperationTypeDefinition: ["type"],
  ScalarTypeDefinition: ["description", "name", "directives"],
  ObjectTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  FieldDefinition: ["description", "name", "arguments", "type", "directives"],
  InputValueDefinition: [
    "description",
    "name",
    "type",
    "defaultValue",
    "directives"
  ],
  InterfaceTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  UnionTypeDefinition: ["description", "name", "directives", "types"],
  EnumTypeDefinition: ["description", "name", "directives", "values"],
  EnumValueDefinition: ["description", "name", "directives"],
  InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
  DirectiveDefinition: ["description", "name", "arguments", "locations"],
  SchemaExtension: ["directives", "operationTypes"],
  ScalarTypeExtension: ["name", "directives"],
  ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
  InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
  UnionTypeExtension: ["name", "directives", "types"],
  EnumTypeExtension: ["name", "directives", "values"],
  InputObjectTypeExtension: ["name", "directives", "fields"]
};
var kindValues = new Set(Object.keys(QueryDocumentKeys));
function isNode(maybeNode) {
  const maybeKind = maybeNode === null || maybeNode === void 0 ? void 0 : maybeNode.kind;
  return typeof maybeKind === "string" && kindValues.has(maybeKind);
}
var OperationTypeNode;
(function(OperationTypeNode2) {
  OperationTypeNode2["QUERY"] = "query";
  OperationTypeNode2["MUTATION"] = "mutation";
  OperationTypeNode2["SUBSCRIPTION"] = "subscription";
})(OperationTypeNode || (OperationTypeNode = {}));

// node_modules/graphql/language/directiveLocation.mjs
var DirectiveLocation;
(function(DirectiveLocation2) {
  DirectiveLocation2["QUERY"] = "QUERY";
  DirectiveLocation2["MUTATION"] = "MUTATION";
  DirectiveLocation2["SUBSCRIPTION"] = "SUBSCRIPTION";
  DirectiveLocation2["FIELD"] = "FIELD";
  DirectiveLocation2["FRAGMENT_DEFINITION"] = "FRAGMENT_DEFINITION";
  DirectiveLocation2["FRAGMENT_SPREAD"] = "FRAGMENT_SPREAD";
  DirectiveLocation2["INLINE_FRAGMENT"] = "INLINE_FRAGMENT";
  DirectiveLocation2["VARIABLE_DEFINITION"] = "VARIABLE_DEFINITION";
  DirectiveLocation2["SCHEMA"] = "SCHEMA";
  DirectiveLocation2["SCALAR"] = "SCALAR";
  DirectiveLocation2["OBJECT"] = "OBJECT";
  DirectiveLocation2["FIELD_DEFINITION"] = "FIELD_DEFINITION";
  DirectiveLocation2["ARGUMENT_DEFINITION"] = "ARGUMENT_DEFINITION";
  DirectiveLocation2["INTERFACE"] = "INTERFACE";
  DirectiveLocation2["UNION"] = "UNION";
  DirectiveLocation2["ENUM"] = "ENUM";
  DirectiveLocation2["ENUM_VALUE"] = "ENUM_VALUE";
  DirectiveLocation2["INPUT_OBJECT"] = "INPUT_OBJECT";
  DirectiveLocation2["INPUT_FIELD_DEFINITION"] = "INPUT_FIELD_DEFINITION";
})(DirectiveLocation || (DirectiveLocation = {}));

// node_modules/graphql/language/kinds.mjs
var Kind;
(function(Kind2) {
  Kind2["NAME"] = "Name";
  Kind2["DOCUMENT"] = "Document";
  Kind2["OPERATION_DEFINITION"] = "OperationDefinition";
  Kind2["VARIABLE_DEFINITION"] = "VariableDefinition";
  Kind2["SELECTION_SET"] = "SelectionSet";
  Kind2["FIELD"] = "Field";
  Kind2["ARGUMENT"] = "Argument";
  Kind2["FRAGMENT_SPREAD"] = "FragmentSpread";
  Kind2["INLINE_FRAGMENT"] = "InlineFragment";
  Kind2["FRAGMENT_DEFINITION"] = "FragmentDefinition";
  Kind2["VARIABLE"] = "Variable";
  Kind2["INT"] = "IntValue";
  Kind2["FLOAT"] = "FloatValue";
  Kind2["STRING"] = "StringValue";
  Kind2["BOOLEAN"] = "BooleanValue";
  Kind2["NULL"] = "NullValue";
  Kind2["ENUM"] = "EnumValue";
  Kind2["LIST"] = "ListValue";
  Kind2["OBJECT"] = "ObjectValue";
  Kind2["OBJECT_FIELD"] = "ObjectField";
  Kind2["DIRECTIVE"] = "Directive";
  Kind2["NAMED_TYPE"] = "NamedType";
  Kind2["LIST_TYPE"] = "ListType";
  Kind2["NON_NULL_TYPE"] = "NonNullType";
  Kind2["SCHEMA_DEFINITION"] = "SchemaDefinition";
  Kind2["OPERATION_TYPE_DEFINITION"] = "OperationTypeDefinition";
  Kind2["SCALAR_TYPE_DEFINITION"] = "ScalarTypeDefinition";
  Kind2["OBJECT_TYPE_DEFINITION"] = "ObjectTypeDefinition";
  Kind2["FIELD_DEFINITION"] = "FieldDefinition";
  Kind2["INPUT_VALUE_DEFINITION"] = "InputValueDefinition";
  Kind2["INTERFACE_TYPE_DEFINITION"] = "InterfaceTypeDefinition";
  Kind2["UNION_TYPE_DEFINITION"] = "UnionTypeDefinition";
  Kind2["ENUM_TYPE_DEFINITION"] = "EnumTypeDefinition";
  Kind2["ENUM_VALUE_DEFINITION"] = "EnumValueDefinition";
  Kind2["INPUT_OBJECT_TYPE_DEFINITION"] = "InputObjectTypeDefinition";
  Kind2["DIRECTIVE_DEFINITION"] = "DirectiveDefinition";
  Kind2["SCHEMA_EXTENSION"] = "SchemaExtension";
  Kind2["SCALAR_TYPE_EXTENSION"] = "ScalarTypeExtension";
  Kind2["OBJECT_TYPE_EXTENSION"] = "ObjectTypeExtension";
  Kind2["INTERFACE_TYPE_EXTENSION"] = "InterfaceTypeExtension";
  Kind2["UNION_TYPE_EXTENSION"] = "UnionTypeExtension";
  Kind2["ENUM_TYPE_EXTENSION"] = "EnumTypeExtension";
  Kind2["INPUT_OBJECT_TYPE_EXTENSION"] = "InputObjectTypeExtension";
})(Kind || (Kind = {}));

// node_modules/graphql/language/characterClasses.mjs
function isWhiteSpace(code) {
  return code === 9 || code === 32;
}
function isDigit(code) {
  return code >= 48 && code <= 57;
}
function isLetter(code) {
  return code >= 97 && code <= 122 || // A-Z
  code >= 65 && code <= 90;
}
function isNameStart(code) {
  return isLetter(code) || code === 95;
}
function isNameContinue(code) {
  return isLetter(code) || isDigit(code) || code === 95;
}

// node_modules/graphql/language/blockString.mjs
function dedentBlockStringLines(lines) {
  var _firstNonEmptyLine2;
  let commonIndent = Number.MAX_SAFE_INTEGER;
  let firstNonEmptyLine = null;
  let lastNonEmptyLine = -1;
  for (let i = 0; i < lines.length; ++i) {
    var _firstNonEmptyLine;
    const line = lines[i];
    const indent2 = leadingWhitespace(line);
    if (indent2 === line.length) {
      continue;
    }
    firstNonEmptyLine = (_firstNonEmptyLine = firstNonEmptyLine) !== null && _firstNonEmptyLine !== void 0 ? _firstNonEmptyLine : i;
    lastNonEmptyLine = i;
    if (i !== 0 && indent2 < commonIndent) {
      commonIndent = indent2;
    }
  }
  return lines.map((line, i) => i === 0 ? line : line.slice(commonIndent)).slice(
    (_firstNonEmptyLine2 = firstNonEmptyLine) !== null && _firstNonEmptyLine2 !== void 0 ? _firstNonEmptyLine2 : 0,
    lastNonEmptyLine + 1
  );
}
function leadingWhitespace(str) {
  let i = 0;
  while (i < str.length && isWhiteSpace(str.charCodeAt(i))) {
    ++i;
  }
  return i;
}
function printBlockString(value, options) {
  const escapedValue = value.replace(/"""/g, '\\"""');
  const lines = escapedValue.split(/\r\n|[\n\r]/g);
  const isSingleLine = lines.length === 1;
  const forceLeadingNewLine = lines.length > 1 && lines.slice(1).every((line) => line.length === 0 || isWhiteSpace(line.charCodeAt(0)));
  const hasTrailingTripleQuotes = escapedValue.endsWith('\\"""');
  const hasTrailingQuote = value.endsWith('"') && !hasTrailingTripleQuotes;
  const hasTrailingSlash = value.endsWith("\\");
  const forceTrailingNewline = hasTrailingQuote || hasTrailingSlash;
  const printAsMultipleLines = !(options !== null && options !== void 0 && options.minimize) && // add leading and trailing new lines only if it improves readability
  (!isSingleLine || value.length > 70 || forceTrailingNewline || forceLeadingNewLine || hasTrailingTripleQuotes);
  let result2 = "";
  const skipLeadingNewLine = isSingleLine && isWhiteSpace(value.charCodeAt(0));
  if (printAsMultipleLines && !skipLeadingNewLine || forceLeadingNewLine) {
    result2 += "\n";
  }
  result2 += escapedValue;
  if (printAsMultipleLines || forceTrailingNewline) {
    result2 += "\n";
  }
  return '"""' + result2 + '"""';
}

// node_modules/graphql/language/tokenKind.mjs
var TokenKind;
(function(TokenKind2) {
  TokenKind2["SOF"] = "<SOF>";
  TokenKind2["EOF"] = "<EOF>";
  TokenKind2["BANG"] = "!";
  TokenKind2["DOLLAR"] = "$";
  TokenKind2["AMP"] = "&";
  TokenKind2["PAREN_L"] = "(";
  TokenKind2["PAREN_R"] = ")";
  TokenKind2["SPREAD"] = "...";
  TokenKind2["COLON"] = ":";
  TokenKind2["EQUALS"] = "=";
  TokenKind2["AT"] = "@";
  TokenKind2["BRACKET_L"] = "[";
  TokenKind2["BRACKET_R"] = "]";
  TokenKind2["BRACE_L"] = "{";
  TokenKind2["PIPE"] = "|";
  TokenKind2["BRACE_R"] = "}";
  TokenKind2["NAME"] = "Name";
  TokenKind2["INT"] = "Int";
  TokenKind2["FLOAT"] = "Float";
  TokenKind2["STRING"] = "String";
  TokenKind2["BLOCK_STRING"] = "BlockString";
  TokenKind2["COMMENT"] = "Comment";
})(TokenKind || (TokenKind = {}));

// node_modules/graphql/language/lexer.mjs
var Lexer = class {
  /**
   * The previously focused non-ignored token.
   */
  /**
   * The currently focused non-ignored token.
   */
  /**
   * The (1-indexed) line containing the current token.
   */
  /**
   * The character offset at which the current line begins.
   */
  constructor(source) {
    const startOfFileToken = new Token(TokenKind.SOF, 0, 0, 0, 0);
    this.source = source;
    this.lastToken = startOfFileToken;
    this.token = startOfFileToken;
    this.line = 1;
    this.lineStart = 0;
  }
  get [Symbol.toStringTag]() {
    return "Lexer";
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */
  advance() {
    this.lastToken = this.token;
    const token = this.token = this.lookahead();
    return token;
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */
  lookahead() {
    let token = this.token;
    if (token.kind !== TokenKind.EOF) {
      do {
        if (token.next) {
          token = token.next;
        } else {
          const nextToken = readNextToken(this, token.end);
          token.next = nextToken;
          nextToken.prev = token;
          token = nextToken;
        }
      } while (token.kind === TokenKind.COMMENT);
    }
    return token;
  }
};
function isPunctuatorTokenKind(kind) {
  return kind === TokenKind.BANG || kind === TokenKind.DOLLAR || kind === TokenKind.AMP || kind === TokenKind.PAREN_L || kind === TokenKind.PAREN_R || kind === TokenKind.SPREAD || kind === TokenKind.COLON || kind === TokenKind.EQUALS || kind === TokenKind.AT || kind === TokenKind.BRACKET_L || kind === TokenKind.BRACKET_R || kind === TokenKind.BRACE_L || kind === TokenKind.PIPE || kind === TokenKind.BRACE_R;
}
function isUnicodeScalarValue(code) {
  return code >= 0 && code <= 55295 || code >= 57344 && code <= 1114111;
}
function isSupplementaryCodePoint(body, location) {
  return isLeadingSurrogate(body.charCodeAt(location)) && isTrailingSurrogate(body.charCodeAt(location + 1));
}
function isLeadingSurrogate(code) {
  return code >= 55296 && code <= 56319;
}
function isTrailingSurrogate(code) {
  return code >= 56320 && code <= 57343;
}
function printCodePointAt(lexer, location) {
  const code = lexer.source.body.codePointAt(location);
  if (code === void 0) {
    return TokenKind.EOF;
  } else if (code >= 32 && code <= 126) {
    const char = String.fromCodePoint(code);
    return char === '"' ? `'"'` : `"${char}"`;
  }
  return "U+" + code.toString(16).toUpperCase().padStart(4, "0");
}
function createToken(lexer, kind, start, end, value) {
  const line = lexer.line;
  const col = 1 + start - lexer.lineStart;
  return new Token(kind, start, end, line, col, value);
}
function readNextToken(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start;
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    switch (code) {
      // Ignored ::
      //   - UnicodeBOM
      //   - WhiteSpace
      //   - LineTerminator
      //   - Comment
      //   - Comma
      //
      // UnicodeBOM :: "Byte Order Mark (U+FEFF)"
      //
      // WhiteSpace ::
      //   - "Horizontal Tab (U+0009)"
      //   - "Space (U+0020)"
      //
      // Comma :: ,
      case 65279:
      // <BOM>
      case 9:
      // \t
      case 32:
      // <space>
      case 44:
        ++position;
        continue;
      // LineTerminator ::
      //   - "New Line (U+000A)"
      //   - "Carriage Return (U+000D)" [lookahead != "New Line (U+000A)"]
      //   - "Carriage Return (U+000D)" "New Line (U+000A)"
      case 10:
        ++position;
        ++lexer.line;
        lexer.lineStart = position;
        continue;
      case 13:
        if (body.charCodeAt(position + 1) === 10) {
          position += 2;
        } else {
          ++position;
        }
        ++lexer.line;
        lexer.lineStart = position;
        continue;
      // Comment
      case 35:
        return readComment(lexer, position);
      // Token ::
      //   - Punctuator
      //   - Name
      //   - IntValue
      //   - FloatValue
      //   - StringValue
      //
      // Punctuator :: one of ! $ & ( ) ... : = @ [ ] { | }
      case 33:
        return createToken(lexer, TokenKind.BANG, position, position + 1);
      case 36:
        return createToken(lexer, TokenKind.DOLLAR, position, position + 1);
      case 38:
        return createToken(lexer, TokenKind.AMP, position, position + 1);
      case 40:
        return createToken(lexer, TokenKind.PAREN_L, position, position + 1);
      case 41:
        return createToken(lexer, TokenKind.PAREN_R, position, position + 1);
      case 46:
        if (body.charCodeAt(position + 1) === 46 && body.charCodeAt(position + 2) === 46) {
          return createToken(lexer, TokenKind.SPREAD, position, position + 3);
        }
        break;
      case 58:
        return createToken(lexer, TokenKind.COLON, position, position + 1);
      case 61:
        return createToken(lexer, TokenKind.EQUALS, position, position + 1);
      case 64:
        return createToken(lexer, TokenKind.AT, position, position + 1);
      case 91:
        return createToken(lexer, TokenKind.BRACKET_L, position, position + 1);
      case 93:
        return createToken(lexer, TokenKind.BRACKET_R, position, position + 1);
      case 123:
        return createToken(lexer, TokenKind.BRACE_L, position, position + 1);
      case 124:
        return createToken(lexer, TokenKind.PIPE, position, position + 1);
      case 125:
        return createToken(lexer, TokenKind.BRACE_R, position, position + 1);
      // StringValue
      case 34:
        if (body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
          return readBlockString(lexer, position);
        }
        return readString(lexer, position);
    }
    if (isDigit(code) || code === 45) {
      return readNumber(lexer, position, code);
    }
    if (isNameStart(code)) {
      return readName(lexer, position);
    }
    throw syntaxError(
      lexer.source,
      position,
      code === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : isUnicodeScalarValue(code) || isSupplementaryCodePoint(body, position) ? `Unexpected character: ${printCodePointAt(lexer, position)}.` : `Invalid character: ${printCodePointAt(lexer, position)}.`
    );
  }
  return createToken(lexer, TokenKind.EOF, bodyLength, bodyLength);
}
function readComment(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (code === 10 || code === 13) {
      break;
    }
    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      break;
    }
  }
  return createToken(
    lexer,
    TokenKind.COMMENT,
    start,
    position,
    body.slice(start + 1, position)
  );
}
function readNumber(lexer, start, firstCode) {
  const body = lexer.source.body;
  let position = start;
  let code = firstCode;
  let isFloat = false;
  if (code === 45) {
    code = body.charCodeAt(++position);
  }
  if (code === 48) {
    code = body.charCodeAt(++position);
    if (isDigit(code)) {
      throw syntaxError(
        lexer.source,
        position,
        `Invalid number, unexpected digit after 0: ${printCodePointAt(
          lexer,
          position
        )}.`
      );
    }
  } else {
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  }
  if (code === 46) {
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  }
  if (code === 69 || code === 101) {
    isFloat = true;
    code = body.charCodeAt(++position);
    if (code === 43 || code === 45) {
      code = body.charCodeAt(++position);
    }
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  }
  if (code === 46 || isNameStart(code)) {
    throw syntaxError(
      lexer.source,
      position,
      `Invalid number, expected digit but got: ${printCodePointAt(
        lexer,
        position
      )}.`
    );
  }
  return createToken(
    lexer,
    isFloat ? TokenKind.FLOAT : TokenKind.INT,
    start,
    position,
    body.slice(start, position)
  );
}
function readDigits(lexer, start, firstCode) {
  if (!isDigit(firstCode)) {
    throw syntaxError(
      lexer.source,
      start,
      `Invalid number, expected digit but got: ${printCodePointAt(
        lexer,
        start
      )}.`
    );
  }
  const body = lexer.source.body;
  let position = start + 1;
  while (isDigit(body.charCodeAt(position))) {
    ++position;
  }
  return position;
}
function readString(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  let chunkStart = position;
  let value = "";
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (code === 34) {
      value += body.slice(chunkStart, position);
      return createToken(lexer, TokenKind.STRING, start, position + 1, value);
    }
    if (code === 92) {
      value += body.slice(chunkStart, position);
      const escape = body.charCodeAt(position + 1) === 117 ? body.charCodeAt(position + 2) === 123 ? readEscapedUnicodeVariableWidth(lexer, position) : readEscapedUnicodeFixedWidth(lexer, position) : readEscapedCharacter(lexer, position);
      value += escape.value;
      position += escape.size;
      chunkStart = position;
      continue;
    }
    if (code === 10 || code === 13) {
      break;
    }
    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      throw syntaxError(
        lexer.source,
        position,
        `Invalid character within String: ${printCodePointAt(
          lexer,
          position
        )}.`
      );
    }
  }
  throw syntaxError(lexer.source, position, "Unterminated string.");
}
function readEscapedUnicodeVariableWidth(lexer, position) {
  const body = lexer.source.body;
  let point = 0;
  let size = 3;
  while (size < 12) {
    const code = body.charCodeAt(position + size++);
    if (code === 125) {
      if (size < 5 || !isUnicodeScalarValue(point)) {
        break;
      }
      return {
        value: String.fromCodePoint(point),
        size
      };
    }
    point = point << 4 | readHexDigit(code);
    if (point < 0) {
      break;
    }
  }
  throw syntaxError(
    lexer.source,
    position,
    `Invalid Unicode escape sequence: "${body.slice(
      position,
      position + size
    )}".`
  );
}
function readEscapedUnicodeFixedWidth(lexer, position) {
  const body = lexer.source.body;
  const code = read16BitHexCode(body, position + 2);
  if (isUnicodeScalarValue(code)) {
    return {
      value: String.fromCodePoint(code),
      size: 6
    };
  }
  if (isLeadingSurrogate(code)) {
    if (body.charCodeAt(position + 6) === 92 && body.charCodeAt(position + 7) === 117) {
      const trailingCode = read16BitHexCode(body, position + 8);
      if (isTrailingSurrogate(trailingCode)) {
        return {
          value: String.fromCodePoint(code, trailingCode),
          size: 12
        };
      }
    }
  }
  throw syntaxError(
    lexer.source,
    position,
    `Invalid Unicode escape sequence: "${body.slice(position, position + 6)}".`
  );
}
function read16BitHexCode(body, position) {
  return readHexDigit(body.charCodeAt(position)) << 12 | readHexDigit(body.charCodeAt(position + 1)) << 8 | readHexDigit(body.charCodeAt(position + 2)) << 4 | readHexDigit(body.charCodeAt(position + 3));
}
function readHexDigit(code) {
  return code >= 48 && code <= 57 ? code - 48 : code >= 65 && code <= 70 ? code - 55 : code >= 97 && code <= 102 ? code - 87 : -1;
}
function readEscapedCharacter(lexer, position) {
  const body = lexer.source.body;
  const code = body.charCodeAt(position + 1);
  switch (code) {
    case 34:
      return {
        value: '"',
        size: 2
      };
    case 92:
      return {
        value: "\\",
        size: 2
      };
    case 47:
      return {
        value: "/",
        size: 2
      };
    case 98:
      return {
        value: "\b",
        size: 2
      };
    case 102:
      return {
        value: "\f",
        size: 2
      };
    case 110:
      return {
        value: "\n",
        size: 2
      };
    case 114:
      return {
        value: "\r",
        size: 2
      };
    case 116:
      return {
        value: "	",
        size: 2
      };
  }
  throw syntaxError(
    lexer.source,
    position,
    `Invalid character escape sequence: "${body.slice(
      position,
      position + 2
    )}".`
  );
}
function readBlockString(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let lineStart = lexer.lineStart;
  let position = start + 3;
  let chunkStart = position;
  let currentLine = "";
  const blockLines = [];
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
      currentLine += body.slice(chunkStart, position);
      blockLines.push(currentLine);
      const token = createToken(
        lexer,
        TokenKind.BLOCK_STRING,
        start,
        position + 3,
        // Return a string of the lines joined with U+000A.
        dedentBlockStringLines(blockLines).join("\n")
      );
      lexer.line += blockLines.length - 1;
      lexer.lineStart = lineStart;
      return token;
    }
    if (code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
      currentLine += body.slice(chunkStart, position);
      chunkStart = position + 1;
      position += 4;
      continue;
    }
    if (code === 10 || code === 13) {
      currentLine += body.slice(chunkStart, position);
      blockLines.push(currentLine);
      if (code === 13 && body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }
      currentLine = "";
      chunkStart = position;
      lineStart = position;
      continue;
    }
    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      throw syntaxError(
        lexer.source,
        position,
        `Invalid character within String: ${printCodePointAt(
          lexer,
          position
        )}.`
      );
    }
  }
  throw syntaxError(lexer.source, position, "Unterminated string.");
}
function readName(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (isNameContinue(code)) {
      ++position;
    } else {
      break;
    }
  }
  return createToken(
    lexer,
    TokenKind.NAME,
    start,
    position,
    body.slice(start, position)
  );
}

// node_modules/graphql/jsutils/inspect.mjs
var MAX_ARRAY_LENGTH = 10;
var MAX_RECURSIVE_DEPTH = 2;
function inspect(value) {
  return formatValue(value, []);
}
function formatValue(value, seenValues) {
  switch (typeof value) {
    case "string":
      return JSON.stringify(value);
    case "function":
      return value.name ? `[function ${value.name}]` : "[function]";
    case "object":
      return formatObjectValue(value, seenValues);
    default:
      return String(value);
  }
}
function formatObjectValue(value, previouslySeenValues) {
  if (value === null) {
    return "null";
  }
  if (previouslySeenValues.includes(value)) {
    return "[Circular]";
  }
  const seenValues = [...previouslySeenValues, value];
  if (isJSONable(value)) {
    const jsonValue = value.toJSON();
    if (jsonValue !== value) {
      return typeof jsonValue === "string" ? jsonValue : formatValue(jsonValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }
  return formatObject(value, seenValues);
}
function isJSONable(value) {
  return typeof value.toJSON === "function";
}
function formatObject(object, seenValues) {
  const entries = Object.entries(object);
  if (entries.length === 0) {
    return "{}";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[" + getObjectTag(object) + "]";
  }
  const properties = entries.map(
    ([key, value]) => key + ": " + formatValue(value, seenValues)
  );
  return "{ " + properties.join(", ") + " }";
}
function formatArray(array, seenValues) {
  if (array.length === 0) {
    return "[]";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[Array]";
  }
  const len = Math.min(MAX_ARRAY_LENGTH, array.length);
  const remaining = array.length - len;
  const items = [];
  for (let i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }
  if (remaining === 1) {
    items.push("... 1 more item");
  } else if (remaining > 1) {
    items.push(`... ${remaining} more items`);
  }
  return "[" + items.join(", ") + "]";
}
function getObjectTag(object) {
  const tag = Object.prototype.toString.call(object).replace(/^\[object /, "").replace(/]$/, "");
  if (tag === "Object" && typeof object.constructor === "function") {
    const name = object.constructor.name;
    if (typeof name === "string" && name !== "") {
      return name;
    }
  }
  return tag;
}

// node_modules/graphql/jsutils/instanceOf.mjs
var isProduction = globalThis.process && // eslint-disable-next-line no-undef
false;
var instanceOf = (
  /* c8 ignore next 6 */
  // FIXME: https://github.com/graphql/graphql-js/issues/2317
  isProduction ? function instanceOf2(value, constructor) {
    return value instanceof constructor;
  } : function instanceOf3(value, constructor) {
    if (value instanceof constructor) {
      return true;
    }
    if (typeof value === "object" && value !== null) {
      var _value$constructor;
      const className = constructor.prototype[Symbol.toStringTag];
      const valueClassName = (
        // We still need to support constructor's name to detect conflicts with older versions of this library.
        Symbol.toStringTag in value ? value[Symbol.toStringTag] : (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.name
      );
      if (className === valueClassName) {
        const stringifiedValue = inspect(value);
        throw new Error(`Cannot use ${className} "${stringifiedValue}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
      }
    }
    return false;
  }
);

// node_modules/graphql/language/source.mjs
var Source = class {
  constructor(body, name = "GraphQL request", locationOffset = {
    line: 1,
    column: 1
  }) {
    typeof body === "string" || devAssert(false, `Body must be a string. Received: ${inspect(body)}.`);
    this.body = body;
    this.name = name;
    this.locationOffset = locationOffset;
    this.locationOffset.line > 0 || devAssert(
      false,
      "line in locationOffset is 1-indexed and must be positive."
    );
    this.locationOffset.column > 0 || devAssert(
      false,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
};
function isSource(source) {
  return instanceOf(source, Source);
}

// node_modules/graphql/language/parser.mjs
function parse(source, options) {
  const parser = new Parser(source, options);
  const document2 = parser.parseDocument();
  Object.defineProperty(document2, "tokenCount", {
    enumerable: false,
    value: parser.tokenCount
  });
  return document2;
}
var Parser = class {
  constructor(source, options = {}) {
    const sourceObj = isSource(source) ? source : new Source(source);
    this._lexer = new Lexer(sourceObj);
    this._options = options;
    this._tokenCounter = 0;
  }
  get tokenCount() {
    return this._tokenCounter;
  }
  /**
   * Converts a name lex token into a name parse node.
   */
  parseName() {
    const token = this.expectToken(TokenKind.NAME);
    return this.node(token, {
      kind: Kind.NAME,
      value: token.value
    });
  }
  // Implements the parsing rules in the Document section.
  /**
   * Document : Definition+
   */
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: Kind.DOCUMENT,
      definitions: this.many(
        TokenKind.SOF,
        this.parseDefinition,
        TokenKind.EOF
      )
    });
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   *
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  parseDefinition() {
    if (this.peek(TokenKind.BRACE_L)) {
      return this.parseOperationDefinition();
    }
    const hasDescription = this.peekDescription();
    const keywordToken = hasDescription ? this._lexer.lookahead() : this._lexer.token;
    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case "schema":
          return this.parseSchemaDefinition();
        case "scalar":
          return this.parseScalarTypeDefinition();
        case "type":
          return this.parseObjectTypeDefinition();
        case "interface":
          return this.parseInterfaceTypeDefinition();
        case "union":
          return this.parseUnionTypeDefinition();
        case "enum":
          return this.parseEnumTypeDefinition();
        case "input":
          return this.parseInputObjectTypeDefinition();
        case "directive":
          return this.parseDirectiveDefinition();
      }
      if (hasDescription) {
        throw syntaxError(
          this._lexer.source,
          this._lexer.token.start,
          "Unexpected description, descriptions are supported only on type definitions."
        );
      }
      switch (keywordToken.value) {
        case "query":
        case "mutation":
        case "subscription":
          return this.parseOperationDefinition();
        case "fragment":
          return this.parseFragmentDefinition();
        case "extend":
          return this.parseTypeSystemExtension();
      }
    }
    throw this.unexpected(keywordToken);
  }
  // Implements the parsing rules in the Operations section.
  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  parseOperationDefinition() {
    const start = this._lexer.token;
    if (this.peek(TokenKind.BRACE_L)) {
      return this.node(start, {
        kind: Kind.OPERATION_DEFINITION,
        operation: OperationTypeNode.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet()
      });
    }
    const operation = this.parseOperationType();
    let name;
    if (this.peek(TokenKind.NAME)) {
      name = this.parseName();
    }
    return this.node(start, {
      kind: Kind.OPERATION_DEFINITION,
      operation,
      name,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * OperationType : one of query mutation subscription
   */
  parseOperationType() {
    const operationToken = this.expectToken(TokenKind.NAME);
    switch (operationToken.value) {
      case "query":
        return OperationTypeNode.QUERY;
      case "mutation":
        return OperationTypeNode.MUTATION;
      case "subscription":
        return OperationTypeNode.SUBSCRIPTION;
    }
    throw this.unexpected(operationToken);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  parseVariableDefinitions() {
    return this.optionalMany(
      TokenKind.PAREN_L,
      this.parseVariableDefinition,
      TokenKind.PAREN_R
    );
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: Kind.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(TokenKind.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(TokenKind.EQUALS) ? this.parseConstValueLiteral() : void 0,
      directives: this.parseConstDirectives()
    });
  }
  /**
   * Variable : $ Name
   */
  parseVariable() {
    const start = this._lexer.token;
    this.expectToken(TokenKind.DOLLAR);
    return this.node(start, {
      kind: Kind.VARIABLE,
      name: this.parseName()
    });
  }
  /**
   * ```
   * SelectionSet : { Selection+ }
   * ```
   */
  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: Kind.SELECTION_SET,
      selections: this.many(
        TokenKind.BRACE_L,
        this.parseSelection,
        TokenKind.BRACE_R
      )
    });
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  parseSelection() {
    return this.peek(TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  parseField() {
    const start = this._lexer.token;
    const nameOrAlias = this.parseName();
    let alias;
    let name;
    if (this.expectOptionalToken(TokenKind.COLON)) {
      alias = nameOrAlias;
      name = this.parseName();
    } else {
      name = nameOrAlias;
    }
    return this.node(start, {
      kind: Kind.FIELD,
      alias,
      name,
      arguments: this.parseArguments(false),
      directives: this.parseDirectives(false),
      selectionSet: this.peek(TokenKind.BRACE_L) ? this.parseSelectionSet() : void 0
    });
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  parseArguments(isConst) {
    const item = isConst ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(TokenKind.PAREN_L, item, TokenKind.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  parseArgument(isConst = false) {
    const start = this._lexer.token;
    const name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return this.node(start, {
      kind: Kind.ARGUMENT,
      name,
      value: this.parseValueLiteral(isConst)
    });
  }
  parseConstArgument() {
    return this.parseArgument(true);
  }
  // Implements the parsing rules in the Fragments section.
  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  parseFragment() {
    const start = this._lexer.token;
    this.expectToken(TokenKind.SPREAD);
    const hasTypeCondition = this.expectOptionalKeyword("on");
    if (!hasTypeCondition && this.peek(TokenKind.NAME)) {
      return this.node(start, {
        kind: Kind.FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(false)
      });
    }
    return this.node(start, {
      kind: Kind.INLINE_FRAGMENT,
      typeCondition: hasTypeCondition ? this.parseNamedType() : void 0,
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  parseFragmentDefinition() {
    const start = this._lexer.token;
    this.expectKeyword("fragment");
    if (this._options.allowLegacyFragmentVariables === true) {
      return this.node(start, {
        kind: Kind.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet()
      });
    }
    return this.node(start, {
      kind: Kind.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentName : Name but not `on`
   */
  parseFragmentName() {
    if (this._lexer.token.value === "on") {
      throw this.unexpected();
    }
    return this.parseName();
  }
  // Implements the parsing rules in the Values section.
  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseValueLiteral(isConst) {
    const token = this._lexer.token;
    switch (token.kind) {
      case TokenKind.BRACKET_L:
        return this.parseList(isConst);
      case TokenKind.BRACE_L:
        return this.parseObject(isConst);
      case TokenKind.INT:
        this.advanceLexer();
        return this.node(token, {
          kind: Kind.INT,
          value: token.value
        });
      case TokenKind.FLOAT:
        this.advanceLexer();
        return this.node(token, {
          kind: Kind.FLOAT,
          value: token.value
        });
      case TokenKind.STRING:
      case TokenKind.BLOCK_STRING:
        return this.parseStringLiteral();
      case TokenKind.NAME:
        this.advanceLexer();
        switch (token.value) {
          case "true":
            return this.node(token, {
              kind: Kind.BOOLEAN,
              value: true
            });
          case "false":
            return this.node(token, {
              kind: Kind.BOOLEAN,
              value: false
            });
          case "null":
            return this.node(token, {
              kind: Kind.NULL
            });
          default:
            return this.node(token, {
              kind: Kind.ENUM,
              value: token.value
            });
        }
      case TokenKind.DOLLAR:
        if (isConst) {
          this.expectToken(TokenKind.DOLLAR);
          if (this._lexer.token.kind === TokenKind.NAME) {
            const varName = this._lexer.token.value;
            throw syntaxError(
              this._lexer.source,
              token.start,
              `Unexpected variable "$${varName}" in constant value.`
            );
          } else {
            throw this.unexpected(token);
          }
        }
        return this.parseVariable();
      default:
        throw this.unexpected();
    }
  }
  parseConstValueLiteral() {
    return this.parseValueLiteral(true);
  }
  parseStringLiteral() {
    const token = this._lexer.token;
    this.advanceLexer();
    return this.node(token, {
      kind: Kind.STRING,
      value: token.value,
      block: token.kind === TokenKind.BLOCK_STRING
    });
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  parseList(isConst) {
    const item = () => this.parseValueLiteral(isConst);
    return this.node(this._lexer.token, {
      kind: Kind.LIST,
      values: this.any(TokenKind.BRACKET_L, item, TokenKind.BRACKET_R)
    });
  }
  /**
   * ```
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   * ```
   */
  parseObject(isConst) {
    const item = () => this.parseObjectField(isConst);
    return this.node(this._lexer.token, {
      kind: Kind.OBJECT,
      fields: this.any(TokenKind.BRACE_L, item, TokenKind.BRACE_R)
    });
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  parseObjectField(isConst) {
    const start = this._lexer.token;
    const name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return this.node(start, {
      kind: Kind.OBJECT_FIELD,
      name,
      value: this.parseValueLiteral(isConst)
    });
  }
  // Implements the parsing rules in the Directives section.
  /**
   * Directives[Const] : Directive[?Const]+
   */
  parseDirectives(isConst) {
    const directives = [];
    while (this.peek(TokenKind.AT)) {
      directives.push(this.parseDirective(isConst));
    }
    return directives;
  }
  parseConstDirectives() {
    return this.parseDirectives(true);
  }
  /**
   * ```
   * Directive[Const] : @ Name Arguments[?Const]?
   * ```
   */
  parseDirective(isConst) {
    const start = this._lexer.token;
    this.expectToken(TokenKind.AT);
    return this.node(start, {
      kind: Kind.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(isConst)
    });
  }
  // Implements the parsing rules in the Types section.
  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  parseTypeReference() {
    const start = this._lexer.token;
    let type;
    if (this.expectOptionalToken(TokenKind.BRACKET_L)) {
      const innerType = this.parseTypeReference();
      this.expectToken(TokenKind.BRACKET_R);
      type = this.node(start, {
        kind: Kind.LIST_TYPE,
        type: innerType
      });
    } else {
      type = this.parseNamedType();
    }
    if (this.expectOptionalToken(TokenKind.BANG)) {
      return this.node(start, {
        kind: Kind.NON_NULL_TYPE,
        type
      });
    }
    return type;
  }
  /**
   * NamedType : Name
   */
  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: Kind.NAMED_TYPE,
      name: this.parseName()
    });
  }
  // Implements the parsing rules in the Type Definition section.
  peekDescription() {
    return this.peek(TokenKind.STRING) || this.peek(TokenKind.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  parseDescription() {
    if (this.peekDescription()) {
      return this.parseStringLiteral();
    }
  }
  /**
   * ```
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   * ```
   */
  parseSchemaDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("schema");
    const directives = this.parseConstDirectives();
    const operationTypes = this.many(
      TokenKind.BRACE_L,
      this.parseOperationTypeDefinition,
      TokenKind.BRACE_R
    );
    return this.node(start, {
      kind: Kind.SCHEMA_DEFINITION,
      description,
      directives,
      operationTypes
    });
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  parseOperationTypeDefinition() {
    const start = this._lexer.token;
    const operation = this.parseOperationType();
    this.expectToken(TokenKind.COLON);
    const type = this.parseNamedType();
    return this.node(start, {
      kind: Kind.OPERATION_TYPE_DEFINITION,
      operation,
      type
    });
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  parseScalarTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("scalar");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.SCALAR_TYPE_DEFINITION,
      description,
      name,
      directives
    });
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  parseObjectTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("type");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    return this.node(start, {
      kind: Kind.OBJECT_TYPE_DEFINITION,
      description,
      name,
      interfaces,
      directives,
      fields
    });
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  parseImplementsInterfaces() {
    return this.expectOptionalKeyword("implements") ? this.delimitedMany(TokenKind.AMP, this.parseNamedType) : [];
  }
  /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */
  parseFieldsDefinition() {
    return this.optionalMany(
      TokenKind.BRACE_L,
      this.parseFieldDefinition,
      TokenKind.BRACE_R
    );
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  parseFieldDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseName();
    const args = this.parseArgumentDefs();
    this.expectToken(TokenKind.COLON);
    const type = this.parseTypeReference();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.FIELD_DEFINITION,
      description,
      name,
      arguments: args,
      type,
      directives
    });
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  parseArgumentDefs() {
    return this.optionalMany(
      TokenKind.PAREN_L,
      this.parseInputValueDef,
      TokenKind.PAREN_R
    );
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  parseInputValueDef() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseName();
    this.expectToken(TokenKind.COLON);
    const type = this.parseTypeReference();
    let defaultValue;
    if (this.expectOptionalToken(TokenKind.EQUALS)) {
      defaultValue = this.parseConstValueLiteral();
    }
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.INPUT_VALUE_DEFINITION,
      description,
      name,
      type,
      defaultValue,
      directives
    });
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  parseInterfaceTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("interface");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    return this.node(start, {
      kind: Kind.INTERFACE_TYPE_DEFINITION,
      description,
      name,
      interfaces,
      directives,
      fields
    });
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  parseUnionTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("union");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const types = this.parseUnionMemberTypes();
    return this.node(start, {
      kind: Kind.UNION_TYPE_DEFINITION,
      description,
      name,
      directives,
      types
    });
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  parseUnionMemberTypes() {
    return this.expectOptionalToken(TokenKind.EQUALS) ? this.delimitedMany(TokenKind.PIPE, this.parseNamedType) : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  parseEnumTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("enum");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const values = this.parseEnumValuesDefinition();
    return this.node(start, {
      kind: Kind.ENUM_TYPE_DEFINITION,
      description,
      name,
      directives,
      values
    });
  }
  /**
   * ```
   * EnumValuesDefinition : { EnumValueDefinition+ }
   * ```
   */
  parseEnumValuesDefinition() {
    return this.optionalMany(
      TokenKind.BRACE_L,
      this.parseEnumValueDefinition,
      TokenKind.BRACE_R
    );
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */
  parseEnumValueDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseEnumValueName();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.ENUM_VALUE_DEFINITION,
      description,
      name,
      directives
    });
  }
  /**
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseEnumValueName() {
    if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") {
      throw syntaxError(
        this._lexer.source,
        this._lexer.token.start,
        `${getTokenDesc(
          this._lexer.token
        )} is reserved and cannot be used for an enum value.`
      );
    }
    return this.parseName();
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  parseInputObjectTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("input");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const fields = this.parseInputFieldsDefinition();
    return this.node(start, {
      kind: Kind.INPUT_OBJECT_TYPE_DEFINITION,
      description,
      name,
      directives,
      fields
    });
  }
  /**
   * ```
   * InputFieldsDefinition : { InputValueDefinition+ }
   * ```
   */
  parseInputFieldsDefinition() {
    return this.optionalMany(
      TokenKind.BRACE_L,
      this.parseInputValueDef,
      TokenKind.BRACE_R
    );
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  parseTypeSystemExtension() {
    const keywordToken = this._lexer.lookahead();
    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case "schema":
          return this.parseSchemaExtension();
        case "scalar":
          return this.parseScalarTypeExtension();
        case "type":
          return this.parseObjectTypeExtension();
        case "interface":
          return this.parseInterfaceTypeExtension();
        case "union":
          return this.parseUnionTypeExtension();
        case "enum":
          return this.parseEnumTypeExtension();
        case "input":
          return this.parseInputObjectTypeExtension();
      }
    }
    throw this.unexpected(keywordToken);
  }
  /**
   * ```
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   * ```
   */
  parseSchemaExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("schema");
    const directives = this.parseConstDirectives();
    const operationTypes = this.optionalMany(
      TokenKind.BRACE_L,
      this.parseOperationTypeDefinition,
      TokenKind.BRACE_R
    );
    if (directives.length === 0 && operationTypes.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.SCHEMA_EXTENSION,
      directives,
      operationTypes
    });
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  parseScalarTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("scalar");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    if (directives.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.SCALAR_TYPE_EXTENSION,
      name,
      directives
    });
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  parseObjectTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("type");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.OBJECT_TYPE_EXTENSION,
      name,
      interfaces,
      directives,
      fields
    });
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */
  parseInterfaceTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("interface");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.INTERFACE_TYPE_EXTENSION,
      name,
      interfaces,
      directives,
      fields
    });
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  parseUnionTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("union");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const types = this.parseUnionMemberTypes();
    if (directives.length === 0 && types.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.UNION_TYPE_EXTENSION,
      name,
      directives,
      types
    });
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  parseEnumTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("enum");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const values = this.parseEnumValuesDefinition();
    if (directives.length === 0 && values.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.ENUM_TYPE_EXTENSION,
      name,
      directives,
      values
    });
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  parseInputObjectTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("input");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const fields = this.parseInputFieldsDefinition();
    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.INPUT_OBJECT_TYPE_EXTENSION,
      name,
      directives,
      fields
    });
  }
  /**
   * ```
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   * ```
   */
  parseDirectiveDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("directive");
    this.expectToken(TokenKind.AT);
    const name = this.parseName();
    const args = this.parseArgumentDefs();
    const repeatable = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    const locations = this.parseDirectiveLocations();
    return this.node(start, {
      kind: Kind.DIRECTIVE_DEFINITION,
      description,
      name,
      arguments: args,
      repeatable,
      locations
    });
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  parseDirectiveLocations() {
    return this.delimitedMany(TokenKind.PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  parseDirectiveLocation() {
    const start = this._lexer.token;
    const name = this.parseName();
    if (Object.prototype.hasOwnProperty.call(DirectiveLocation, name.value)) {
      return name;
    }
    throw this.unexpected(start);
  }
  // Core parsing utility functions
  /**
   * Returns a node that, if configured to do so, sets a "loc" field as a
   * location object, used to identify the place in the source that created a
   * given parsed object.
   */
  node(startToken, node) {
    if (this._options.noLocation !== true) {
      node.loc = new Location2(
        startToken,
        this._lexer.lastToken,
        this._lexer.source
      );
    }
    return node;
  }
  /**
   * Determines if the next token is of a given kind
   */
  peek(kind) {
    return this._lexer.token.kind === kind;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectToken(kind) {
    const token = this._lexer.token;
    if (token.kind === kind) {
      this.advanceLexer();
      return token;
    }
    throw syntaxError(
      this._lexer.source,
      token.start,
      `Expected ${getTokenKindDesc(kind)}, found ${getTokenDesc(token)}.`
    );
  }
  /**
   * If the next token is of the given kind, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalToken(kind) {
    const token = this._lexer.token;
    if (token.kind === kind) {
      this.advanceLexer();
      return true;
    }
    return false;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectKeyword(value) {
    const token = this._lexer.token;
    if (token.kind === TokenKind.NAME && token.value === value) {
      this.advanceLexer();
    } else {
      throw syntaxError(
        this._lexer.source,
        token.start,
        `Expected "${value}", found ${getTokenDesc(token)}.`
      );
    }
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalKeyword(value) {
    const token = this._lexer.token;
    if (token.kind === TokenKind.NAME && token.value === value) {
      this.advanceLexer();
      return true;
    }
    return false;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  unexpected(atToken) {
    const token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
    return syntaxError(
      this._lexer.source,
      token.start,
      `Unexpected ${getTokenDesc(token)}.`
    );
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  any(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    const nodes = [];
    while (!this.expectOptionalToken(closeKind)) {
      nodes.push(parseFn.call(this));
    }
    return nodes;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  optionalMany(openKind, parseFn, closeKind) {
    if (this.expectOptionalToken(openKind)) {
      const nodes = [];
      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));
      return nodes;
    }
    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  many(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    const nodes = [];
    do {
      nodes.push(parseFn.call(this));
    } while (!this.expectOptionalToken(closeKind));
    return nodes;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */
  delimitedMany(delimiterKind, parseFn) {
    this.expectOptionalToken(delimiterKind);
    const nodes = [];
    do {
      nodes.push(parseFn.call(this));
    } while (this.expectOptionalToken(delimiterKind));
    return nodes;
  }
  advanceLexer() {
    const { maxTokens } = this._options;
    const token = this._lexer.advance();
    if (token.kind !== TokenKind.EOF) {
      ++this._tokenCounter;
      if (maxTokens !== void 0 && this._tokenCounter > maxTokens) {
        throw syntaxError(
          this._lexer.source,
          token.start,
          `Document contains more that ${maxTokens} tokens. Parsing aborted.`
        );
      }
    }
  }
};
function getTokenDesc(token) {
  const value = token.value;
  return getTokenKindDesc(token.kind) + (value != null ? ` "${value}"` : "");
}
function getTokenKindDesc(kind) {
  return isPunctuatorTokenKind(kind) ? `"${kind}"` : kind;
}

// node_modules/graphql/language/printString.mjs
function printString(str) {
  return `"${str.replace(escapedRegExp, escapedReplacer)}"`;
}
var escapedRegExp = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function escapedReplacer(str) {
  return escapeSequences[str.charCodeAt(0)];
}
var escapeSequences = [
  "\\u0000",
  "\\u0001",
  "\\u0002",
  "\\u0003",
  "\\u0004",
  "\\u0005",
  "\\u0006",
  "\\u0007",
  "\\b",
  "\\t",
  "\\n",
  "\\u000B",
  "\\f",
  "\\r",
  "\\u000E",
  "\\u000F",
  "\\u0010",
  "\\u0011",
  "\\u0012",
  "\\u0013",
  "\\u0014",
  "\\u0015",
  "\\u0016",
  "\\u0017",
  "\\u0018",
  "\\u0019",
  "\\u001A",
  "\\u001B",
  "\\u001C",
  "\\u001D",
  "\\u001E",
  "\\u001F",
  "",
  "",
  '\\"',
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 2F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 3F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 4F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\\\",
  "",
  "",
  "",
  // 5F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 6F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\u007F",
  "\\u0080",
  "\\u0081",
  "\\u0082",
  "\\u0083",
  "\\u0084",
  "\\u0085",
  "\\u0086",
  "\\u0087",
  "\\u0088",
  "\\u0089",
  "\\u008A",
  "\\u008B",
  "\\u008C",
  "\\u008D",
  "\\u008E",
  "\\u008F",
  "\\u0090",
  "\\u0091",
  "\\u0092",
  "\\u0093",
  "\\u0094",
  "\\u0095",
  "\\u0096",
  "\\u0097",
  "\\u0098",
  "\\u0099",
  "\\u009A",
  "\\u009B",
  "\\u009C",
  "\\u009D",
  "\\u009E",
  "\\u009F"
];

// node_modules/graphql/language/visitor.mjs
var BREAK = Object.freeze({});
function visit(root2, visitor, visitorKeys = QueryDocumentKeys) {
  const enterLeaveMap = /* @__PURE__ */ new Map();
  for (const kind of Object.values(Kind)) {
    enterLeaveMap.set(kind, getEnterLeaveForKind(visitor, kind));
  }
  let stack = void 0;
  let inArray = Array.isArray(root2);
  let keys = [root2];
  let index = -1;
  let edits = [];
  let node = root2;
  let key = void 0;
  let parent = void 0;
  const path = [];
  const ancestors = [];
  do {
    index++;
    const isLeaving = index === keys.length;
    const isEdited = isLeaving && edits.length !== 0;
    if (isLeaving) {
      key = ancestors.length === 0 ? void 0 : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();
      if (isEdited) {
        if (inArray) {
          node = node.slice();
          let editOffset = 0;
          for (const [editKey, editValue] of edits) {
            const arrayKey = editKey - editOffset;
            if (editValue === null) {
              node.splice(arrayKey, 1);
              editOffset++;
            } else {
              node[arrayKey] = editValue;
            }
          }
        } else {
          node = __spreadValues({}, node);
          for (const [editKey, editValue] of edits) {
            node[editKey] = editValue;
          }
        }
      }
      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else if (parent) {
      key = inArray ? index : keys[index];
      node = parent[key];
      if (node === null || node === void 0) {
        continue;
      }
      path.push(key);
    }
    let result2;
    if (!Array.isArray(node)) {
      var _enterLeaveMap$get, _enterLeaveMap$get2;
      isNode(node) || devAssert(false, `Invalid AST Node: ${inspect(node)}.`);
      const visitFn = isLeaving ? (_enterLeaveMap$get = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get === void 0 ? void 0 : _enterLeaveMap$get.leave : (_enterLeaveMap$get2 = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get2 === void 0 ? void 0 : _enterLeaveMap$get2.enter;
      result2 = visitFn === null || visitFn === void 0 ? void 0 : visitFn.call(visitor, node, key, parent, path, ancestors);
      if (result2 === BREAK) {
        break;
      }
      if (result2 === false) {
        if (!isLeaving) {
          path.pop();
          continue;
        }
      } else if (result2 !== void 0) {
        edits.push([key, result2]);
        if (!isLeaving) {
          if (isNode(result2)) {
            node = result2;
          } else {
            path.pop();
            continue;
          }
        }
      }
    }
    if (result2 === void 0 && isEdited) {
      edits.push([key, node]);
    }
    if (isLeaving) {
      path.pop();
    } else {
      var _node$kind;
      stack = {
        inArray,
        index,
        keys,
        edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : (_node$kind = visitorKeys[node.kind]) !== null && _node$kind !== void 0 ? _node$kind : [];
      index = -1;
      edits = [];
      if (parent) {
        ancestors.push(parent);
      }
      parent = node;
    }
  } while (stack !== void 0);
  if (edits.length !== 0) {
    return edits[edits.length - 1][1];
  }
  return root2;
}
function getEnterLeaveForKind(visitor, kind) {
  const kindVisitor = visitor[kind];
  if (typeof kindVisitor === "object") {
    return kindVisitor;
  } else if (typeof kindVisitor === "function") {
    return {
      enter: kindVisitor,
      leave: void 0
    };
  }
  return {
    enter: visitor.enter,
    leave: visitor.leave
  };
}

// node_modules/graphql/language/printer.mjs
function print(ast) {
  return visit(ast, printDocASTReducer);
}
var MAX_LINE_LENGTH = 80;
var printDocASTReducer = {
  Name: {
    leave: (node) => node.value
  },
  Variable: {
    leave: (node) => "$" + node.name
  },
  // Document
  Document: {
    leave: (node) => join(node.definitions, "\n\n")
  },
  OperationDefinition: {
    leave(node) {
      const varDefs = wrap2("(", join(node.variableDefinitions, ", "), ")");
      const prefix = join(
        [
          node.operation,
          join([node.name, varDefs]),
          join(node.directives, " ")
        ],
        " "
      );
      return (prefix === "query" ? "" : prefix + " ") + node.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable, type, defaultValue, directives }) => variable + ": " + type + wrap2(" = ", defaultValue) + wrap2(" ", join(directives, " "))
  },
  SelectionSet: {
    leave: ({ selections }) => block(selections)
  },
  Field: {
    leave({ alias, name, arguments: args, directives, selectionSet }) {
      const prefix = wrap2("", alias, ": ") + name;
      let argsLine = prefix + wrap2("(", join(args, ", "), ")");
      if (argsLine.length > MAX_LINE_LENGTH) {
        argsLine = prefix + wrap2("(\n", indent(join(args, "\n")), "\n)");
      }
      return join([argsLine, join(directives, " "), selectionSet], " ");
    }
  },
  Argument: {
    leave: ({ name, value }) => name + ": " + value
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name, directives }) => "..." + name + wrap2(" ", join(directives, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition, directives, selectionSet }) => join(
      [
        "...",
        wrap2("on ", typeCondition),
        join(directives, " "),
        selectionSet
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name, typeCondition, variableDefinitions, directives, selectionSet }) => (
      // or removed in the future.
      `fragment ${name}${wrap2("(", join(variableDefinitions, ", "), ")")} on ${typeCondition} ${wrap2("", join(directives, " "), " ")}` + selectionSet
    )
  },
  // Value
  IntValue: {
    leave: ({ value }) => value
  },
  FloatValue: {
    leave: ({ value }) => value
  },
  StringValue: {
    leave: ({ value, block: isBlockString }) => isBlockString ? printBlockString(value) : printString(value)
  },
  BooleanValue: {
    leave: ({ value }) => value ? "true" : "false"
  },
  NullValue: {
    leave: () => "null"
  },
  EnumValue: {
    leave: ({ value }) => value
  },
  ListValue: {
    leave: ({ values }) => "[" + join(values, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields }) => "{" + join(fields, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name, value }) => name + ": " + value
  },
  // Directive
  Directive: {
    leave: ({ name, arguments: args }) => "@" + name + wrap2("(", join(args, ", "), ")")
  },
  // Type
  NamedType: {
    leave: ({ name }) => name
  },
  ListType: {
    leave: ({ type }) => "[" + type + "]"
  },
  NonNullType: {
    leave: ({ type }) => type + "!"
  },
  // Type System Definitions
  SchemaDefinition: {
    leave: ({ description, directives, operationTypes }) => wrap2("", description, "\n") + join(["schema", join(directives, " "), block(operationTypes)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation, type }) => operation + ": " + type
  },
  ScalarTypeDefinition: {
    leave: ({ description, name, directives }) => wrap2("", description, "\n") + join(["scalar", name, join(directives, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description, name, interfaces, directives, fields }) => wrap2("", description, "\n") + join(
      [
        "type",
        name,
        wrap2("implements ", join(interfaces, " & ")),
        join(directives, " "),
        block(fields)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description, name, arguments: args, type, directives }) => wrap2("", description, "\n") + name + (hasMultilineItems(args) ? wrap2("(\n", indent(join(args, "\n")), "\n)") : wrap2("(", join(args, ", "), ")")) + ": " + type + wrap2(" ", join(directives, " "))
  },
  InputValueDefinition: {
    leave: ({ description, name, type, defaultValue, directives }) => wrap2("", description, "\n") + join(
      [name + ": " + type, wrap2("= ", defaultValue), join(directives, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description, name, interfaces, directives, fields }) => wrap2("", description, "\n") + join(
      [
        "interface",
        name,
        wrap2("implements ", join(interfaces, " & ")),
        join(directives, " "),
        block(fields)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description, name, directives, types }) => wrap2("", description, "\n") + join(
      ["union", name, join(directives, " "), wrap2("= ", join(types, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description, name, directives, values }) => wrap2("", description, "\n") + join(["enum", name, join(directives, " "), block(values)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description, name, directives }) => wrap2("", description, "\n") + join([name, join(directives, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description, name, directives, fields }) => wrap2("", description, "\n") + join(["input", name, join(directives, " "), block(fields)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description, name, arguments: args, repeatable, locations }) => wrap2("", description, "\n") + "directive @" + name + (hasMultilineItems(args) ? wrap2("(\n", indent(join(args, "\n")), "\n)") : wrap2("(", join(args, ", "), ")")) + (repeatable ? " repeatable" : "") + " on " + join(locations, " | ")
  },
  SchemaExtension: {
    leave: ({ directives, operationTypes }) => join(
      ["extend schema", join(directives, " "), block(operationTypes)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name, directives }) => join(["extend scalar", name, join(directives, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name, interfaces, directives, fields }) => join(
      [
        "extend type",
        name,
        wrap2("implements ", join(interfaces, " & ")),
        join(directives, " "),
        block(fields)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name, interfaces, directives, fields }) => join(
      [
        "extend interface",
        name,
        wrap2("implements ", join(interfaces, " & ")),
        join(directives, " "),
        block(fields)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name, directives, types }) => join(
      [
        "extend union",
        name,
        join(directives, " "),
        wrap2("= ", join(types, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name, directives, values }) => join(["extend enum", name, join(directives, " "), block(values)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name, directives, fields }) => join(["extend input", name, join(directives, " "), block(fields)], " ")
  }
};
function join(maybeArray, separator = "") {
  var _maybeArray$filter$jo;
  return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter((x) => x).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : "";
}
function block(array) {
  return wrap2("{\n", indent(join(array, "\n")), "\n}");
}
function wrap2(start, maybeString, end = "") {
  return maybeString != null && maybeString !== "" ? start + maybeString + end : "";
}
function indent(str) {
  return wrap2("  ", str.replace(/\n/g, "\n  "));
}
function hasMultilineItems(maybeArray) {
  var _maybeArray$some;
  return (_maybeArray$some = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.some((str) => str.includes("\n"))) !== null && _maybeArray$some !== void 0 ? _maybeArray$some : false;
}

// node_modules/graphql/language/predicates.mjs
function isSelectionNode(node) {
  return node.kind === Kind.FIELD || node.kind === Kind.FRAGMENT_SPREAD || node.kind === Kind.INLINE_FRAGMENT;
}

// node_modules/@apollo/client/utilities/graphql/directives.js
function shouldInclude(_a2, variables) {
  var directives = _a2.directives;
  if (!directives || !directives.length) {
    return true;
  }
  return getInclusionDirectives(directives).every(function(_a3) {
    var directive = _a3.directive, ifArgument = _a3.ifArgument;
    var evaledValue = false;
    if (ifArgument.value.kind === "Variable") {
      evaledValue = variables && variables[ifArgument.value.name.value];
      invariant2(evaledValue !== void 0, 106, directive.name.value);
    } else {
      evaledValue = ifArgument.value.value;
    }
    return directive.name.value === "skip" ? !evaledValue : evaledValue;
  });
}
function hasDirectives(names, root2, all) {
  var nameSet = new Set(names);
  var uniqueCount = nameSet.size;
  visit(root2, {
    Directive: function(node) {
      if (nameSet.delete(node.name.value) && (!all || !nameSet.size)) {
        return BREAK;
      }
    }
  });
  return all ? !nameSet.size : nameSet.size < uniqueCount;
}
function hasClientExports(document2) {
  return document2 && hasDirectives(["client", "export"], document2, true);
}
function isInclusionDirective(_a2) {
  var value = _a2.name.value;
  return value === "skip" || value === "include";
}
function getInclusionDirectives(directives) {
  var result2 = [];
  if (directives && directives.length) {
    directives.forEach(function(directive) {
      if (!isInclusionDirective(directive))
        return;
      var directiveArguments = directive.arguments;
      var directiveName = directive.name.value;
      invariant2(directiveArguments && directiveArguments.length === 1, 107, directiveName);
      var ifArgument = directiveArguments[0];
      invariant2(ifArgument.name && ifArgument.name.value === "if", 108, directiveName);
      var ifValue = ifArgument.value;
      invariant2(ifValue && (ifValue.kind === "Variable" || ifValue.kind === "BooleanValue"), 109, directiveName);
      result2.push({ directive, ifArgument });
    });
  }
  return result2;
}
function getFragmentMaskMode(fragment) {
  var _a2, _b;
  var directive = (_a2 = fragment.directives) === null || _a2 === void 0 ? void 0 : _a2.find(function(_a3) {
    var name = _a3.name;
    return name.value === "unmask";
  });
  if (!directive) {
    return "mask";
  }
  var modeArg = (_b = directive.arguments) === null || _b === void 0 ? void 0 : _b.find(function(_a3) {
    var name = _a3.name;
    return name.value === "mode";
  });
  if (globalThis.__DEV__ !== false) {
    if (modeArg) {
      if (modeArg.value.kind === Kind.VARIABLE) {
        globalThis.__DEV__ !== false && invariant2.warn(110);
      } else if (modeArg.value.kind !== Kind.STRING) {
        globalThis.__DEV__ !== false && invariant2.warn(111);
      } else if (modeArg.value.value !== "migrate") {
        globalThis.__DEV__ !== false && invariant2.warn(112, modeArg.value.value);
      }
    }
  }
  if (modeArg && "value" in modeArg.value && modeArg.value.value === "migrate") {
    return "migrate";
  }
  return "unmask";
}

// node_modules/@wry/trie/lib/index.js
var defaultMakeData = () => /* @__PURE__ */ Object.create(null);
var { forEach, slice } = Array.prototype;
var { hasOwnProperty } = Object.prototype;
var Trie = class _Trie {
  constructor(weakness = true, makeData = defaultMakeData) {
    this.weakness = weakness;
    this.makeData = makeData;
  }
  lookup() {
    return this.lookupArray(arguments);
  }
  lookupArray(array) {
    let node = this;
    forEach.call(array, (key) => node = node.getChildTrie(key));
    return hasOwnProperty.call(node, "data") ? node.data : node.data = this.makeData(slice.call(array));
  }
  peek() {
    return this.peekArray(arguments);
  }
  peekArray(array) {
    let node = this;
    for (let i = 0, len = array.length; node && i < len; ++i) {
      const map2 = node.mapFor(array[i], false);
      node = map2 && map2.get(array[i]);
    }
    return node && node.data;
  }
  remove() {
    return this.removeArray(arguments);
  }
  removeArray(array) {
    let data;
    if (array.length) {
      const head = array[0];
      const map2 = this.mapFor(head, false);
      const child = map2 && map2.get(head);
      if (child) {
        data = child.removeArray(slice.call(array, 1));
        if (!child.data && !child.weak && !(child.strong && child.strong.size)) {
          map2.delete(head);
        }
      }
    } else {
      data = this.data;
      delete this.data;
    }
    return data;
  }
  getChildTrie(key) {
    const map2 = this.mapFor(key, true);
    let child = map2.get(key);
    if (!child)
      map2.set(key, child = new _Trie(this.weakness, this.makeData));
    return child;
  }
  mapFor(key, create) {
    return this.weakness && isObjRef(key) ? this.weak || (create ? this.weak = /* @__PURE__ */ new WeakMap() : void 0) : this.strong || (create ? this.strong = /* @__PURE__ */ new Map() : void 0);
  }
};
function isObjRef(value) {
  switch (typeof value) {
    case "object":
      if (value === null)
        break;
    // Fall through to return true...
    case "function":
      return true;
  }
  return false;
}

// node_modules/@apollo/client/utilities/common/canUse.js
var isReactNative = maybe(function() {
  return navigator.product;
}) == "ReactNative";
var canUseWeakMap = typeof WeakMap === "function" && !(isReactNative && !global.HermesInternal);
var canUseWeakSet = typeof WeakSet === "function";
var canUseSymbol = typeof Symbol === "function" && typeof Symbol.for === "function";
var canUseAsyncIteratorSymbol = canUseSymbol && Symbol.asyncIterator;
var canUseDOM = typeof maybe(function() {
  return window.document.createElement;
}) === "function";
var usingJSDOM = (
  // Following advice found in this comment from @domenic (maintainer of jsdom):
  // https://github.com/jsdom/jsdom/issues/1537#issuecomment-229405327
  //
  // Since we control the version of Jest and jsdom used when running Apollo
  // Client tests, and that version is recent enought to include " jsdom/x.y.z"
  // at the end of the user agent string, I believe this case is all we need to
  // check. Testing for "Node.js" was recommended for backwards compatibility
  // with older version of jsdom, but we don't have that problem.
  maybe(function() {
    return navigator.userAgent.indexOf("jsdom") >= 0;
  }) || false
);

// node_modules/@apollo/client/utilities/common/objects.js
function isNonNullObject(obj) {
  return obj !== null && typeof obj === "object";
}

// node_modules/@apollo/client/utilities/graphql/fragments.js
function getFragmentQueryDocument(document2, fragmentName) {
  var actualFragmentName = fragmentName;
  var fragments = [];
  document2.definitions.forEach(function(definition) {
    if (definition.kind === "OperationDefinition") {
      throw newInvariantError(
        113,
        definition.operation,
        definition.name ? " named '".concat(definition.name.value, "'") : ""
      );
    }
    if (definition.kind === "FragmentDefinition") {
      fragments.push(definition);
    }
  });
  if (typeof actualFragmentName === "undefined") {
    invariant2(fragments.length === 1, 114, fragments.length);
    actualFragmentName = fragments[0].name.value;
  }
  var query = __assign(__assign({}, document2), { definitions: __spreadArray([
    {
      kind: "OperationDefinition",
      // OperationTypeNode is an enum
      operation: "query",
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: {
              kind: "Name",
              value: actualFragmentName
            }
          }
        ]
      }
    }
  ], document2.definitions, true) });
  return query;
}
function createFragmentMap(fragments) {
  if (fragments === void 0) {
    fragments = [];
  }
  var symTable = {};
  fragments.forEach(function(fragment) {
    symTable[fragment.name.value] = fragment;
  });
  return symTable;
}
function getFragmentFromSelection(selection, fragmentMap) {
  switch (selection.kind) {
    case "InlineFragment":
      return selection;
    case "FragmentSpread": {
      var fragmentName = selection.name.value;
      if (typeof fragmentMap === "function") {
        return fragmentMap(fragmentName);
      }
      var fragment = fragmentMap && fragmentMap[fragmentName];
      invariant2(fragment, 115, fragmentName);
      return fragment || null;
    }
    default:
      return null;
  }
}
function isFullyUnmaskedOperation(document2) {
  var isUnmasked = true;
  visit(document2, {
    FragmentSpread: function(node) {
      isUnmasked = !!node.directives && node.directives.some(function(directive) {
        return directive.name.value === "unmask";
      });
      if (!isUnmasked) {
        return BREAK;
      }
    }
  });
  return isUnmasked;
}

// node_modules/@wry/caches/lib/strong.js
function defaultDispose() {
}
var StrongCache = class {
  constructor(max = Infinity, dispose = defaultDispose) {
    this.max = max;
    this.dispose = dispose;
    this.map = /* @__PURE__ */ new Map();
    this.newest = null;
    this.oldest = null;
  }
  has(key) {
    return this.map.has(key);
  }
  get(key) {
    const node = this.getNode(key);
    return node && node.value;
  }
  get size() {
    return this.map.size;
  }
  getNode(key) {
    const node = this.map.get(key);
    if (node && node !== this.newest) {
      const { older, newer } = node;
      if (newer) {
        newer.older = older;
      }
      if (older) {
        older.newer = newer;
      }
      node.older = this.newest;
      node.older.newer = node;
      node.newer = null;
      this.newest = node;
      if (node === this.oldest) {
        this.oldest = newer;
      }
    }
    return node;
  }
  set(key, value) {
    let node = this.getNode(key);
    if (node) {
      return node.value = value;
    }
    node = {
      key,
      value,
      newer: null,
      older: this.newest
    };
    if (this.newest) {
      this.newest.newer = node;
    }
    this.newest = node;
    this.oldest = this.oldest || node;
    this.map.set(key, node);
    return node.value;
  }
  clean() {
    while (this.oldest && this.map.size > this.max) {
      this.delete(this.oldest.key);
    }
  }
  delete(key) {
    const node = this.map.get(key);
    if (node) {
      if (node === this.newest) {
        this.newest = node.older;
      }
      if (node === this.oldest) {
        this.oldest = node.newer;
      }
      if (node.newer) {
        node.newer.older = node.older;
      }
      if (node.older) {
        node.older.newer = node.newer;
      }
      this.map.delete(key);
      this.dispose(node.value, key);
      return true;
    }
    return false;
  }
};

// node_modules/@wry/caches/lib/weak.js
function noop() {
}
var defaultDispose2 = noop;
var _WeakRef = typeof WeakRef !== "undefined" ? WeakRef : function(value) {
  return { deref: () => value };
};
var _WeakMap = typeof WeakMap !== "undefined" ? WeakMap : Map;
var _FinalizationRegistry = typeof FinalizationRegistry !== "undefined" ? FinalizationRegistry : function() {
  return {
    register: noop,
    unregister: noop
  };
};
var finalizationBatchSize = 10024;
var WeakCache = class {
  constructor(max = Infinity, dispose = defaultDispose2) {
    this.max = max;
    this.dispose = dispose;
    this.map = new _WeakMap();
    this.newest = null;
    this.oldest = null;
    this.unfinalizedNodes = /* @__PURE__ */ new Set();
    this.finalizationScheduled = false;
    this.size = 0;
    this.finalize = () => {
      const iterator = this.unfinalizedNodes.values();
      for (let i = 0; i < finalizationBatchSize; i++) {
        const node = iterator.next().value;
        if (!node)
          break;
        this.unfinalizedNodes.delete(node);
        const key = node.key;
        delete node.key;
        node.keyRef = new _WeakRef(key);
        this.registry.register(key, node, node);
      }
      if (this.unfinalizedNodes.size > 0) {
        queueMicrotask(this.finalize);
      } else {
        this.finalizationScheduled = false;
      }
    };
    this.registry = new _FinalizationRegistry(this.deleteNode.bind(this));
  }
  has(key) {
    return this.map.has(key);
  }
  get(key) {
    const node = this.getNode(key);
    return node && node.value;
  }
  getNode(key) {
    const node = this.map.get(key);
    if (node && node !== this.newest) {
      const { older, newer } = node;
      if (newer) {
        newer.older = older;
      }
      if (older) {
        older.newer = newer;
      }
      node.older = this.newest;
      node.older.newer = node;
      node.newer = null;
      this.newest = node;
      if (node === this.oldest) {
        this.oldest = newer;
      }
    }
    return node;
  }
  set(key, value) {
    let node = this.getNode(key);
    if (node) {
      return node.value = value;
    }
    node = {
      key,
      value,
      newer: null,
      older: this.newest
    };
    if (this.newest) {
      this.newest.newer = node;
    }
    this.newest = node;
    this.oldest = this.oldest || node;
    this.scheduleFinalization(node);
    this.map.set(key, node);
    this.size++;
    return node.value;
  }
  clean() {
    while (this.oldest && this.size > this.max) {
      this.deleteNode(this.oldest);
    }
  }
  deleteNode(node) {
    if (node === this.newest) {
      this.newest = node.older;
    }
    if (node === this.oldest) {
      this.oldest = node.newer;
    }
    if (node.newer) {
      node.newer.older = node.older;
    }
    if (node.older) {
      node.older.newer = node.newer;
    }
    this.size--;
    const key = node.key || node.keyRef && node.keyRef.deref();
    this.dispose(node.value, key);
    if (!node.keyRef) {
      this.unfinalizedNodes.delete(node);
    } else {
      this.registry.unregister(node);
    }
    if (key)
      this.map.delete(key);
  }
  delete(key) {
    const node = this.map.get(key);
    if (node) {
      this.deleteNode(node);
      return true;
    }
    return false;
  }
  scheduleFinalization(node) {
    this.unfinalizedNodes.add(node);
    if (!this.finalizationScheduled) {
      this.finalizationScheduled = true;
      queueMicrotask(this.finalize);
    }
  }
};

// node_modules/@apollo/client/utilities/caching/caches.js
var scheduledCleanup = /* @__PURE__ */ new WeakSet();
function schedule(cache) {
  if (cache.size <= (cache.max || -1)) {
    return;
  }
  if (!scheduledCleanup.has(cache)) {
    scheduledCleanup.add(cache);
    setTimeout(function() {
      cache.clean();
      scheduledCleanup.delete(cache);
    }, 100);
  }
}
var AutoCleanedWeakCache = function(max, dispose) {
  var cache = new WeakCache(max, dispose);
  cache.set = function(key, value) {
    var ret = WeakCache.prototype.set.call(this, key, value);
    schedule(this);
    return ret;
  };
  return cache;
};
var AutoCleanedStrongCache = function(max, dispose) {
  var cache = new StrongCache(max, dispose);
  cache.set = function(key, value) {
    var ret = StrongCache.prototype.set.call(this, key, value);
    schedule(this);
    return ret;
  };
  return cache;
};

// node_modules/@apollo/client/utilities/caching/sizes.js
var cacheSizeSymbol = Symbol.for("apollo.cacheSize");
var cacheSizes = __assign({}, global_default[cacheSizeSymbol]);

// node_modules/@apollo/client/utilities/caching/getMemoryInternals.js
var globalCaches = {};
function registerGlobalCache(name, getSize) {
  globalCaches[name] = getSize;
}
var getApolloClientMemoryInternals = globalThis.__DEV__ !== false ? _getApolloClientMemoryInternals : void 0;
var getInMemoryCacheMemoryInternals = globalThis.__DEV__ !== false ? _getInMemoryCacheMemoryInternals : void 0;
var getApolloCacheMemoryInternals = globalThis.__DEV__ !== false ? _getApolloCacheMemoryInternals : void 0;
function getCurrentCacheSizes() {
  var defaults2 = {
    parser: 1e3,
    canonicalStringify: 1e3,
    print: 2e3,
    "documentTransform.cache": 2e3,
    "queryManager.getDocumentInfo": 2e3,
    "PersistedQueryLink.persistedQueryHashes": 2e3,
    "fragmentRegistry.transform": 2e3,
    "fragmentRegistry.lookup": 1e3,
    "fragmentRegistry.findFragmentSpreads": 4e3,
    "cache.fragmentQueryDocuments": 1e3,
    "removeTypenameFromVariables.getVariableDefinitions": 2e3,
    "inMemoryCache.maybeBroadcastWatch": 5e3,
    "inMemoryCache.executeSelectionSet": 5e4,
    "inMemoryCache.executeSubSelectedArray": 1e4
  };
  return Object.fromEntries(Object.entries(defaults2).map(function(_a2) {
    var k = _a2[0], v = _a2[1];
    return [
      k,
      cacheSizes[k] || v
    ];
  }));
}
function _getApolloClientMemoryInternals() {
  var _a2, _b, _c, _d, _e;
  if (!(globalThis.__DEV__ !== false))
    throw new Error("only supported in development mode");
  return {
    limits: getCurrentCacheSizes(),
    sizes: __assign({ print: (_a2 = globalCaches.print) === null || _a2 === void 0 ? void 0 : _a2.call(globalCaches), parser: (_b = globalCaches.parser) === null || _b === void 0 ? void 0 : _b.call(globalCaches), canonicalStringify: (_c = globalCaches.canonicalStringify) === null || _c === void 0 ? void 0 : _c.call(globalCaches), links: linkInfo(this.link), queryManager: {
      getDocumentInfo: this["queryManager"]["transformCache"].size,
      documentTransforms: transformInfo(this["queryManager"].documentTransform)
    } }, (_e = (_d = this.cache).getMemoryInternals) === null || _e === void 0 ? void 0 : _e.call(_d))
  };
}
function _getApolloCacheMemoryInternals() {
  return {
    cache: {
      fragmentQueryDocuments: getWrapperInformation(this["getFragmentDoc"])
    }
  };
}
function _getInMemoryCacheMemoryInternals() {
  var fragments = this.config.fragments;
  return __assign(__assign({}, _getApolloCacheMemoryInternals.apply(this)), { addTypenameDocumentTransform: transformInfo(this["addTypenameTransform"]), inMemoryCache: {
    executeSelectionSet: getWrapperInformation(this["storeReader"]["executeSelectionSet"]),
    executeSubSelectedArray: getWrapperInformation(this["storeReader"]["executeSubSelectedArray"]),
    maybeBroadcastWatch: getWrapperInformation(this["maybeBroadcastWatch"])
  }, fragmentRegistry: {
    findFragmentSpreads: getWrapperInformation(fragments === null || fragments === void 0 ? void 0 : fragments.findFragmentSpreads),
    lookup: getWrapperInformation(fragments === null || fragments === void 0 ? void 0 : fragments.lookup),
    transform: getWrapperInformation(fragments === null || fragments === void 0 ? void 0 : fragments.transform)
  } });
}
function isWrapper(f) {
  return !!f && "dirtyKey" in f;
}
function getWrapperInformation(f) {
  return isWrapper(f) ? f.size : void 0;
}
function isDefined(value) {
  return value != null;
}
function transformInfo(transform) {
  return recurseTransformInfo(transform).map(function(cache) {
    return { cache };
  });
}
function recurseTransformInfo(transform) {
  return transform ? __spreadArray(__spreadArray([
    getWrapperInformation(transform === null || transform === void 0 ? void 0 : transform["performWork"])
  ], recurseTransformInfo(transform === null || transform === void 0 ? void 0 : transform["left"]), true), recurseTransformInfo(transform === null || transform === void 0 ? void 0 : transform["right"]), true).filter(isDefined) : [];
}
function linkInfo(link) {
  var _a2;
  return link ? __spreadArray(__spreadArray([
    (_a2 = link === null || link === void 0 ? void 0 : link.getMemoryInternals) === null || _a2 === void 0 ? void 0 : _a2.call(link)
  ], linkInfo(link === null || link === void 0 ? void 0 : link.left), true), linkInfo(link === null || link === void 0 ? void 0 : link.right), true).filter(isDefined) : [];
}

// node_modules/@apollo/client/utilities/common/canonicalStringify.js
var canonicalStringify = Object.assign(function canonicalStringify2(value) {
  return JSON.stringify(value, stableObjectReplacer);
}, {
  reset: function() {
    sortingMap = new AutoCleanedStrongCache(
      cacheSizes.canonicalStringify || 1e3
      /* defaultCacheSizes.canonicalStringify */
    );
  }
});
if (globalThis.__DEV__ !== false) {
  registerGlobalCache("canonicalStringify", function() {
    return sortingMap.size;
  });
}
var sortingMap;
canonicalStringify.reset();
function stableObjectReplacer(key, value) {
  if (value && typeof value === "object") {
    var proto = Object.getPrototypeOf(value);
    if (proto === Object.prototype || proto === null) {
      var keys = Object.keys(value);
      if (keys.every(everyKeyInOrder))
        return value;
      var unsortedKey = JSON.stringify(keys);
      var sortedKeys = sortingMap.get(unsortedKey);
      if (!sortedKeys) {
        keys.sort();
        var sortedKey = JSON.stringify(keys);
        sortedKeys = sortingMap.get(sortedKey) || keys;
        sortingMap.set(unsortedKey, sortedKeys);
        sortingMap.set(sortedKey, sortedKeys);
      }
      var sortedObject_1 = Object.create(proto);
      sortedKeys.forEach(function(key2) {
        sortedObject_1[key2] = value[key2];
      });
      return sortedObject_1;
    }
  }
  return value;
}
function everyKeyInOrder(key, i, keys) {
  return i === 0 || keys[i - 1] <= key;
}

// node_modules/@apollo/client/utilities/graphql/storeUtils.js
function makeReference(id) {
  return { __ref: String(id) };
}
function isReference(obj) {
  return Boolean(obj && typeof obj === "object" && typeof obj.__ref === "string");
}
function isDocumentNode(value) {
  return isNonNullObject(value) && value.kind === "Document" && Array.isArray(value.definitions);
}
function isStringValue(value) {
  return value.kind === "StringValue";
}
function isBooleanValue(value) {
  return value.kind === "BooleanValue";
}
function isIntValue(value) {
  return value.kind === "IntValue";
}
function isFloatValue(value) {
  return value.kind === "FloatValue";
}
function isVariable(value) {
  return value.kind === "Variable";
}
function isObjectValue(value) {
  return value.kind === "ObjectValue";
}
function isListValue(value) {
  return value.kind === "ListValue";
}
function isEnumValue(value) {
  return value.kind === "EnumValue";
}
function isNullValue(value) {
  return value.kind === "NullValue";
}
function valueToObjectRepresentation(argObj, name, value, variables) {
  if (isIntValue(value) || isFloatValue(value)) {
    argObj[name.value] = Number(value.value);
  } else if (isBooleanValue(value) || isStringValue(value)) {
    argObj[name.value] = value.value;
  } else if (isObjectValue(value)) {
    var nestedArgObj_1 = {};
    value.fields.map(function(obj) {
      return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
    });
    argObj[name.value] = nestedArgObj_1;
  } else if (isVariable(value)) {
    var variableValue = (variables || {})[value.name.value];
    argObj[name.value] = variableValue;
  } else if (isListValue(value)) {
    argObj[name.value] = value.values.map(function(listValue) {
      var nestedArgArrayObj = {};
      valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
      return nestedArgArrayObj[name.value];
    });
  } else if (isEnumValue(value)) {
    argObj[name.value] = value.value;
  } else if (isNullValue(value)) {
    argObj[name.value] = null;
  } else {
    throw newInvariantError(124, name.value, value.kind);
  }
}
function storeKeyNameFromField(field, variables) {
  var directivesObj = null;
  if (field.directives) {
    directivesObj = {};
    field.directives.forEach(function(directive) {
      directivesObj[directive.name.value] = {};
      if (directive.arguments) {
        directive.arguments.forEach(function(_a2) {
          var name = _a2.name, value = _a2.value;
          return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
        });
      }
    });
  }
  var argObj = null;
  if (field.arguments && field.arguments.length) {
    argObj = {};
    field.arguments.forEach(function(_a2) {
      var name = _a2.name, value = _a2.value;
      return valueToObjectRepresentation(argObj, name, value, variables);
    });
  }
  return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export",
  "nonreactive"
];
var storeKeyNameStringify = canonicalStringify;
var getStoreKeyName = Object.assign(function(fieldName, args, directives) {
  if (args && directives && directives["connection"] && directives["connection"]["key"]) {
    if (directives["connection"]["filter"] && directives["connection"]["filter"].length > 0) {
      var filterKeys = directives["connection"]["filter"] ? directives["connection"]["filter"] : [];
      filterKeys.sort();
      var filteredArgs_1 = {};
      filterKeys.forEach(function(key) {
        filteredArgs_1[key] = args[key];
      });
      return "".concat(directives["connection"]["key"], "(").concat(storeKeyNameStringify(filteredArgs_1), ")");
    } else {
      return directives["connection"]["key"];
    }
  }
  var completeFieldName = fieldName;
  if (args) {
    var stringifiedArgs = storeKeyNameStringify(args);
    completeFieldName += "(".concat(stringifiedArgs, ")");
  }
  if (directives) {
    Object.keys(directives).forEach(function(key) {
      if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
        return;
      if (directives[key] && Object.keys(directives[key]).length) {
        completeFieldName += "@".concat(key, "(").concat(storeKeyNameStringify(directives[key]), ")");
      } else {
        completeFieldName += "@".concat(key);
      }
    });
  }
  return completeFieldName;
}, {
  setStringify: function(s) {
    var previous = storeKeyNameStringify;
    storeKeyNameStringify = s;
    return previous;
  }
});
function argumentsObjectFromField(field, variables) {
  if (field.arguments && field.arguments.length) {
    var argObj_1 = {};
    field.arguments.forEach(function(_a2) {
      var name = _a2.name, value = _a2.value;
      return valueToObjectRepresentation(argObj_1, name, value, variables);
    });
    return argObj_1;
  }
  return null;
}
function resultKeyNameFromField(field) {
  return field.alias ? field.alias.value : field.name.value;
}
function getTypenameFromResult(result2, selectionSet, fragmentMap) {
  var fragments;
  for (var _i = 0, _a2 = selectionSet.selections; _i < _a2.length; _i++) {
    var selection = _a2[_i];
    if (isField(selection)) {
      if (selection.name.value === "__typename") {
        return result2[resultKeyNameFromField(selection)];
      }
    } else if (fragments) {
      fragments.push(selection);
    } else {
      fragments = [selection];
    }
  }
  if (typeof result2.__typename === "string") {
    return result2.__typename;
  }
  if (fragments) {
    for (var _b = 0, fragments_1 = fragments; _b < fragments_1.length; _b++) {
      var selection = fragments_1[_b];
      var typename = getTypenameFromResult(result2, getFragmentFromSelection(selection, fragmentMap).selectionSet, fragmentMap);
      if (typeof typename === "string") {
        return typename;
      }
    }
  }
}
function isField(selection) {
  return selection.kind === "Field";
}
function isInlineFragment(selection) {
  return selection.kind === "InlineFragment";
}

// node_modules/@apollo/client/utilities/graphql/getFromAST.js
function checkDocument(doc) {
  invariant2(doc && doc.kind === "Document", 116);
  var operations = doc.definitions.filter(function(d) {
    return d.kind !== "FragmentDefinition";
  }).map(function(definition) {
    if (definition.kind !== "OperationDefinition") {
      throw newInvariantError(117, definition.kind);
    }
    return definition;
  });
  invariant2(operations.length <= 1, 118, operations.length);
  return doc;
}
function getOperationDefinition(doc) {
  checkDocument(doc);
  return doc.definitions.filter(function(definition) {
    return definition.kind === "OperationDefinition";
  })[0];
}
function getOperationName(doc) {
  return doc.definitions.filter(function(definition) {
    return definition.kind === "OperationDefinition" && !!definition.name;
  }).map(function(x) {
    return x.name.value;
  })[0] || null;
}
function getFragmentDefinitions(doc) {
  return doc.definitions.filter(function(definition) {
    return definition.kind === "FragmentDefinition";
  });
}
function getQueryDefinition(doc) {
  var queryDef = getOperationDefinition(doc);
  invariant2(queryDef && queryDef.operation === "query", 119);
  return queryDef;
}
function getFragmentDefinition(doc) {
  invariant2(doc.kind === "Document", 120);
  invariant2(doc.definitions.length <= 1, 121);
  var fragmentDef = doc.definitions[0];
  invariant2(fragmentDef.kind === "FragmentDefinition", 122);
  return fragmentDef;
}
function getMainDefinition(queryDoc) {
  checkDocument(queryDoc);
  var fragmentDefinition;
  for (var _i = 0, _a2 = queryDoc.definitions; _i < _a2.length; _i++) {
    var definition = _a2[_i];
    if (definition.kind === "OperationDefinition") {
      var operation = definition.operation;
      if (operation === "query" || operation === "mutation" || operation === "subscription") {
        return definition;
      }
    }
    if (definition.kind === "FragmentDefinition" && !fragmentDefinition) {
      fragmentDefinition = definition;
    }
  }
  if (fragmentDefinition) {
    return fragmentDefinition;
  }
  throw newInvariantError(123);
}
function getDefaultValues(definition) {
  var defaultValues = /* @__PURE__ */ Object.create(null);
  var defs = definition && definition.variableDefinitions;
  if (defs && defs.length) {
    defs.forEach(function(def) {
      if (def.defaultValue) {
        valueToObjectRepresentation(defaultValues, def.variable.name, def.defaultValue);
      }
    });
  }
  return defaultValues;
}

// node_modules/@wry/context/lib/slot.js
var currentContext = null;
var MISSING_VALUE = {};
var idCounter = 1;
var makeSlotClass = () => class Slot {
  constructor() {
    this.id = [
      "slot",
      idCounter++,
      Date.now(),
      Math.random().toString(36).slice(2)
    ].join(":");
  }
  hasValue() {
    for (let context = currentContext; context; context = context.parent) {
      if (this.id in context.slots) {
        const value = context.slots[this.id];
        if (value === MISSING_VALUE)
          break;
        if (context !== currentContext) {
          currentContext.slots[this.id] = value;
        }
        return true;
      }
    }
    if (currentContext) {
      currentContext.slots[this.id] = MISSING_VALUE;
    }
    return false;
  }
  getValue() {
    if (this.hasValue()) {
      return currentContext.slots[this.id];
    }
  }
  withValue(value, callback, args, thisArg) {
    const slots = {
      __proto__: null,
      [this.id]: value
    };
    const parent = currentContext;
    currentContext = { parent, slots };
    try {
      return callback.apply(thisArg, args);
    } finally {
      currentContext = parent;
    }
  }
  // Capture the current context and wrap a callback function so that it
  // reestablishes the captured context when called.
  static bind(callback) {
    const context = currentContext;
    return function() {
      const saved = currentContext;
      try {
        currentContext = context;
        return callback.apply(this, arguments);
      } finally {
        currentContext = saved;
      }
    };
  }
  // Immediately run a callback function without any captured context.
  static noContext(callback, args, thisArg) {
    if (currentContext) {
      const saved = currentContext;
      try {
        currentContext = null;
        return callback.apply(thisArg, args);
      } finally {
        currentContext = saved;
      }
    } else {
      return callback.apply(thisArg, args);
    }
  }
};
function maybe2(fn) {
  try {
    return fn();
  } catch (ignored) {
  }
}
var globalKey = "@wry/context:Slot";
var host = (
  // Prefer globalThis when available.
  // https://github.com/benjamn/wryware/issues/347
  maybe2(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
  // bundlers to the appropriate identifier (window, self, ...) depending on the
  // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
  maybe2(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
  // back to using the Array constructor as a namespace, but that was flagged in
  // https://github.com/benjamn/wryware/issues/347, and can be avoided.
  /* @__PURE__ */ Object.create(null)
);
var globalHost = host;
var Slot = globalHost[globalKey] || // Earlier versions of this package stored the globalKey property on the Array
// constructor, so we check there as well, to prevent Slot class duplication.
Array[globalKey] || (function(Slot2) {
  try {
    Object.defineProperty(globalHost, globalKey, {
      value: Slot2,
      enumerable: false,
      writable: false,
      // When it was possible for globalHost to be the Array constructor (a
      // legacy Slot dedup strategy), it was important for the property to be
      // configurable:true so it could be deleted. That does not seem to be as
      // important when globalHost is the global object, but I don't want to
      // cause similar problems again, and configurable:true seems safest.
      // https://github.com/endojs/endo/issues/576#issuecomment-1178274008
      configurable: true
    });
  } finally {
    return Slot2;
  }
})(makeSlotClass());

// node_modules/@wry/context/lib/index.js
var { bind, noContext } = Slot;

// node_modules/optimism/lib/context.js
var parentEntrySlot = new Slot();

// node_modules/optimism/lib/helpers.js
var { hasOwnProperty: hasOwnProperty2 } = Object.prototype;
var arrayFromSet = Array.from || function(set) {
  const array = [];
  set.forEach((item) => array.push(item));
  return array;
};
function maybeUnsubscribe(entryOrDep) {
  const { unsubscribe } = entryOrDep;
  if (typeof unsubscribe === "function") {
    entryOrDep.unsubscribe = void 0;
    unsubscribe();
  }
}

// node_modules/optimism/lib/entry.js
var emptySetPool = [];
var POOL_TARGET_SIZE = 100;
function assert(condition, optionalMessage) {
  if (!condition) {
    throw new Error(optionalMessage || "assertion failure");
  }
}
function valueIs(a, b) {
  const len = a.length;
  return (
    // Unknown values are not equal to each other.
    len > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    len === b.length && // The underlying value or exception must be the same.
    a[len - 1] === b[len - 1]
  );
}
function valueGet(value) {
  switch (value.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return value[0];
    case 2:
      throw value[1];
  }
}
function valueCopy(value) {
  return value.slice(0);
}
var Entry = class _Entry {
  constructor(fn) {
    this.fn = fn;
    this.parents = /* @__PURE__ */ new Set();
    this.childValues = /* @__PURE__ */ new Map();
    this.dirtyChildren = null;
    this.dirty = true;
    this.recomputing = false;
    this.value = [];
    this.deps = null;
    ++_Entry.count;
  }
  peek() {
    if (this.value.length === 1 && !mightBeDirty(this)) {
      rememberParent(this);
      return this.value[0];
    }
  }
  // This is the most important method of the Entry API, because it
  // determines whether the cached this.value can be returned immediately,
  // or must be recomputed. The overall performance of the caching system
  // depends on the truth of the following observations: (1) this.dirty is
  // usually false, (2) this.dirtyChildren is usually null/empty, and thus
  // (3) valueGet(this.value) is usually returned without recomputation.
  recompute(args) {
    assert(!this.recomputing, "already recomputing");
    rememberParent(this);
    return mightBeDirty(this) ? reallyRecompute(this, args) : valueGet(this.value);
  }
  setDirty() {
    if (this.dirty)
      return;
    this.dirty = true;
    reportDirty(this);
    maybeUnsubscribe(this);
  }
  dispose() {
    this.setDirty();
    forgetChildren(this);
    eachParent(this, (parent, child) => {
      parent.setDirty();
      forgetChild(parent, this);
    });
  }
  forget() {
    this.dispose();
  }
  dependOn(dep2) {
    dep2.add(this);
    if (!this.deps) {
      this.deps = emptySetPool.pop() || /* @__PURE__ */ new Set();
    }
    this.deps.add(dep2);
  }
  forgetDeps() {
    if (this.deps) {
      arrayFromSet(this.deps).forEach((dep2) => dep2.delete(this));
      this.deps.clear();
      emptySetPool.push(this.deps);
      this.deps = null;
    }
  }
};
Entry.count = 0;
function rememberParent(child) {
  const parent = parentEntrySlot.getValue();
  if (parent) {
    child.parents.add(parent);
    if (!parent.childValues.has(child)) {
      parent.childValues.set(child, []);
    }
    if (mightBeDirty(child)) {
      reportDirtyChild(parent, child);
    } else {
      reportCleanChild(parent, child);
    }
    return parent;
  }
}
function reallyRecompute(entry, args) {
  forgetChildren(entry);
  parentEntrySlot.withValue(entry, recomputeNewValue, [entry, args]);
  if (maybeSubscribe(entry, args)) {
    setClean(entry);
  }
  return valueGet(entry.value);
}
function recomputeNewValue(entry, args) {
  entry.recomputing = true;
  const { normalizeResult } = entry;
  let oldValueCopy;
  if (normalizeResult && entry.value.length === 1) {
    oldValueCopy = valueCopy(entry.value);
  }
  entry.value.length = 0;
  try {
    entry.value[0] = entry.fn.apply(null, args);
    if (normalizeResult && oldValueCopy && !valueIs(oldValueCopy, entry.value)) {
      try {
        entry.value[0] = normalizeResult(entry.value[0], oldValueCopy[0]);
      } catch (_a2) {
      }
    }
  } catch (e) {
    entry.value[1] = e;
  }
  entry.recomputing = false;
}
function mightBeDirty(entry) {
  return entry.dirty || !!(entry.dirtyChildren && entry.dirtyChildren.size);
}
function setClean(entry) {
  entry.dirty = false;
  if (mightBeDirty(entry)) {
    return;
  }
  reportClean(entry);
}
function reportDirty(child) {
  eachParent(child, reportDirtyChild);
}
function reportClean(child) {
  eachParent(child, reportCleanChild);
}
function eachParent(child, callback) {
  const parentCount = child.parents.size;
  if (parentCount) {
    const parents = arrayFromSet(child.parents);
    for (let i = 0; i < parentCount; ++i) {
      callback(parents[i], child);
    }
  }
}
function reportDirtyChild(parent, child) {
  assert(parent.childValues.has(child));
  assert(mightBeDirty(child));
  const parentWasClean = !mightBeDirty(parent);
  if (!parent.dirtyChildren) {
    parent.dirtyChildren = emptySetPool.pop() || /* @__PURE__ */ new Set();
  } else if (parent.dirtyChildren.has(child)) {
    return;
  }
  parent.dirtyChildren.add(child);
  if (parentWasClean) {
    reportDirty(parent);
  }
}
function reportCleanChild(parent, child) {
  assert(parent.childValues.has(child));
  assert(!mightBeDirty(child));
  const childValue = parent.childValues.get(child);
  if (childValue.length === 0) {
    parent.childValues.set(child, valueCopy(child.value));
  } else if (!valueIs(childValue, child.value)) {
    parent.setDirty();
  }
  removeDirtyChild(parent, child);
  if (mightBeDirty(parent)) {
    return;
  }
  reportClean(parent);
}
function removeDirtyChild(parent, child) {
  const dc = parent.dirtyChildren;
  if (dc) {
    dc.delete(child);
    if (dc.size === 0) {
      if (emptySetPool.length < POOL_TARGET_SIZE) {
        emptySetPool.push(dc);
      }
      parent.dirtyChildren = null;
    }
  }
}
function forgetChildren(parent) {
  if (parent.childValues.size > 0) {
    parent.childValues.forEach((_value, child) => {
      forgetChild(parent, child);
    });
  }
  parent.forgetDeps();
  assert(parent.dirtyChildren === null);
}
function forgetChild(parent, child) {
  child.parents.delete(parent);
  parent.childValues.delete(child);
  removeDirtyChild(parent, child);
}
function maybeSubscribe(entry, args) {
  if (typeof entry.subscribe === "function") {
    try {
      maybeUnsubscribe(entry);
      entry.unsubscribe = entry.subscribe.apply(null, args);
    } catch (e) {
      entry.setDirty();
      return false;
    }
  }
  return true;
}

// node_modules/optimism/lib/dep.js
var EntryMethods = {
  setDirty: true,
  dispose: true,
  forget: true
  // Fully remove parent Entry from LRU cache and computation graph
};
function dep(options) {
  const depsByKey = /* @__PURE__ */ new Map();
  const subscribe = options && options.subscribe;
  function depend(key) {
    const parent = parentEntrySlot.getValue();
    if (parent) {
      let dep2 = depsByKey.get(key);
      if (!dep2) {
        depsByKey.set(key, dep2 = /* @__PURE__ */ new Set());
      }
      parent.dependOn(dep2);
      if (typeof subscribe === "function") {
        maybeUnsubscribe(dep2);
        dep2.unsubscribe = subscribe(key);
      }
    }
  }
  depend.dirty = function dirty(key, entryMethodName) {
    const dep2 = depsByKey.get(key);
    if (dep2) {
      const m = entryMethodName && hasOwnProperty2.call(EntryMethods, entryMethodName) ? entryMethodName : "setDirty";
      arrayFromSet(dep2).forEach((entry) => entry[m]());
      depsByKey.delete(key);
      maybeUnsubscribe(dep2);
    }
  };
  return depend;
}

// node_modules/optimism/lib/index.js
var defaultKeyTrie;
function defaultMakeCacheKey(...args) {
  const trie = defaultKeyTrie || (defaultKeyTrie = new Trie(typeof WeakMap === "function"));
  return trie.lookupArray(args);
}
var caches = /* @__PURE__ */ new Set();
function wrap3(originalFunction, { max = Math.pow(2, 16), keyArgs, makeCacheKey = defaultMakeCacheKey, normalizeResult, subscribe, cache: cacheOption = StrongCache } = /* @__PURE__ */ Object.create(null)) {
  const cache = typeof cacheOption === "function" ? new cacheOption(max, (entry) => entry.dispose()) : cacheOption;
  const optimistic = function() {
    const key = makeCacheKey.apply(null, keyArgs ? keyArgs.apply(null, arguments) : arguments);
    if (key === void 0) {
      return originalFunction.apply(null, arguments);
    }
    let entry = cache.get(key);
    if (!entry) {
      cache.set(key, entry = new Entry(originalFunction));
      entry.normalizeResult = normalizeResult;
      entry.subscribe = subscribe;
      entry.forget = () => cache.delete(key);
    }
    const value = entry.recompute(Array.prototype.slice.call(arguments));
    cache.set(key, entry);
    caches.add(cache);
    if (!parentEntrySlot.hasValue()) {
      caches.forEach((cache2) => cache2.clean());
      caches.clear();
    }
    return value;
  };
  Object.defineProperty(optimistic, "size", {
    get: () => cache.size,
    configurable: false,
    enumerable: false
  });
  Object.freeze(optimistic.options = {
    max,
    keyArgs,
    makeCacheKey,
    normalizeResult,
    subscribe,
    cache
  });
  function dirtyKey(key) {
    const entry = key && cache.get(key);
    if (entry) {
      entry.setDirty();
    }
  }
  optimistic.dirtyKey = dirtyKey;
  optimistic.dirty = function dirty() {
    dirtyKey(makeCacheKey.apply(null, arguments));
  };
  function peekKey(key) {
    const entry = key && cache.get(key);
    if (entry) {
      return entry.peek();
    }
  }
  optimistic.peekKey = peekKey;
  optimistic.peek = function peek() {
    return peekKey(makeCacheKey.apply(null, arguments));
  };
  function forgetKey(key) {
    return key ? cache.delete(key) : false;
  }
  optimistic.forgetKey = forgetKey;
  optimistic.forget = function forget() {
    return forgetKey(makeCacheKey.apply(null, arguments));
  };
  optimistic.makeCacheKey = makeCacheKey;
  optimistic.getKey = keyArgs ? function getKey() {
    return makeCacheKey.apply(null, keyArgs.apply(null, arguments));
  } : makeCacheKey;
  return Object.freeze(optimistic);
}

// node_modules/@apollo/client/utilities/graphql/DocumentTransform.js
function identity(document2) {
  return document2;
}
var DocumentTransform = (
  /** @class */
  (function() {
    function DocumentTransform2(transform, options) {
      if (options === void 0) {
        options = /* @__PURE__ */ Object.create(null);
      }
      this.resultCache = canUseWeakSet ? /* @__PURE__ */ new WeakSet() : /* @__PURE__ */ new Set();
      this.transform = transform;
      if (options.getCacheKey) {
        this.getCacheKey = options.getCacheKey;
      }
      this.cached = options.cache !== false;
      this.resetCache();
    }
    DocumentTransform2.prototype.getCacheKey = function(document2) {
      return [document2];
    };
    DocumentTransform2.identity = function() {
      return new DocumentTransform2(identity, { cache: false });
    };
    DocumentTransform2.split = function(predicate, left, right) {
      if (right === void 0) {
        right = DocumentTransform2.identity();
      }
      return Object.assign(new DocumentTransform2(
        function(document2) {
          var documentTransform = predicate(document2) ? left : right;
          return documentTransform.transformDocument(document2);
        },
        // Reasonably assume both `left` and `right` transforms handle their own caching
        { cache: false }
      ), { left, right });
    };
    DocumentTransform2.prototype.resetCache = function() {
      var _this = this;
      if (this.cached) {
        var stableCacheKeys_1 = new Trie(canUseWeakMap);
        this.performWork = wrap3(DocumentTransform2.prototype.performWork.bind(this), {
          makeCacheKey: function(document2) {
            var cacheKeys = _this.getCacheKey(document2);
            if (cacheKeys) {
              invariant2(Array.isArray(cacheKeys), 105);
              return stableCacheKeys_1.lookupArray(cacheKeys);
            }
          },
          max: cacheSizes["documentTransform.cache"],
          cache: WeakCache
        });
      }
    };
    DocumentTransform2.prototype.performWork = function(document2) {
      checkDocument(document2);
      return this.transform(document2);
    };
    DocumentTransform2.prototype.transformDocument = function(document2) {
      if (this.resultCache.has(document2)) {
        return document2;
      }
      var transformedDocument = this.performWork(document2);
      this.resultCache.add(transformedDocument);
      return transformedDocument;
    };
    DocumentTransform2.prototype.concat = function(otherTransform) {
      var _this = this;
      return Object.assign(new DocumentTransform2(
        function(document2) {
          return otherTransform.transformDocument(_this.transformDocument(document2));
        },
        // Reasonably assume both transforms handle their own caching
        { cache: false }
      ), {
        left: this,
        right: otherTransform
      });
    };
    return DocumentTransform2;
  })()
);

// node_modules/@apollo/client/utilities/graphql/print.js
var printCache;
var print2 = Object.assign(function(ast) {
  var result2 = printCache.get(ast);
  if (!result2) {
    result2 = print(ast);
    printCache.set(ast, result2);
  }
  return result2;
}, {
  reset: function() {
    printCache = new AutoCleanedWeakCache(
      cacheSizes.print || 2e3
      /* defaultCacheSizes.print */
    );
  }
});
print2.reset();
if (globalThis.__DEV__ !== false) {
  registerGlobalCache("print", function() {
    return printCache ? printCache.size : 0;
  });
}

// node_modules/@apollo/client/utilities/common/arrays.js
var isArray = Array.isArray;
function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}

// node_modules/@apollo/client/utilities/graphql/transform.js
var TYPENAME_FIELD = {
  kind: Kind.FIELD,
  name: {
    kind: Kind.NAME,
    value: "__typename"
  }
};
function isEmpty(op, fragmentMap) {
  return !op || op.selectionSet.selections.every(function(selection) {
    return selection.kind === Kind.FRAGMENT_SPREAD && isEmpty(fragmentMap[selection.name.value], fragmentMap);
  });
}
function nullIfDocIsEmpty(doc) {
  return isEmpty(getOperationDefinition(doc) || getFragmentDefinition(doc), createFragmentMap(getFragmentDefinitions(doc))) ? null : doc;
}
function getDirectiveMatcher(configs) {
  var names = /* @__PURE__ */ new Map();
  var tests = /* @__PURE__ */ new Map();
  configs.forEach(function(directive) {
    if (directive) {
      if (directive.name) {
        names.set(directive.name, directive);
      } else if (directive.test) {
        tests.set(directive.test, directive);
      }
    }
  });
  return function(directive) {
    var config = names.get(directive.name.value);
    if (!config && tests.size) {
      tests.forEach(function(testConfig, test) {
        if (test(directive)) {
          config = testConfig;
        }
      });
    }
    return config;
  };
}
function makeInUseGetterFunction(defaultKey) {
  var map2 = /* @__PURE__ */ new Map();
  return function inUseGetterFunction(key) {
    if (key === void 0) {
      key = defaultKey;
    }
    var inUse = map2.get(key);
    if (!inUse) {
      map2.set(key, inUse = {
        // Variable and fragment spread names used directly within this
        // operation or fragment definition, as identified by key. These sets
        // will be populated during the first traversal of the document in
        // removeDirectivesFromDocument below.
        variables: /* @__PURE__ */ new Set(),
        fragmentSpreads: /* @__PURE__ */ new Set()
      });
    }
    return inUse;
  };
}
function removeDirectivesFromDocument(directives, doc) {
  checkDocument(doc);
  var getInUseByOperationName = makeInUseGetterFunction("");
  var getInUseByFragmentName = makeInUseGetterFunction("");
  var getInUse = function(ancestors) {
    for (var p = 0, ancestor = void 0; p < ancestors.length && (ancestor = ancestors[p]); ++p) {
      if (isArray(ancestor))
        continue;
      if (ancestor.kind === Kind.OPERATION_DEFINITION) {
        return getInUseByOperationName(ancestor.name && ancestor.name.value);
      }
      if (ancestor.kind === Kind.FRAGMENT_DEFINITION) {
        return getInUseByFragmentName(ancestor.name.value);
      }
    }
    globalThis.__DEV__ !== false && invariant2.error(125);
    return null;
  };
  var operationCount = 0;
  for (var i = doc.definitions.length - 1; i >= 0; --i) {
    if (doc.definitions[i].kind === Kind.OPERATION_DEFINITION) {
      ++operationCount;
    }
  }
  var directiveMatcher = getDirectiveMatcher(directives);
  var shouldRemoveField = function(nodeDirectives) {
    return isNonEmptyArray(nodeDirectives) && nodeDirectives.map(directiveMatcher).some(function(config) {
      return config && config.remove;
    });
  };
  var originalFragmentDefsByPath = /* @__PURE__ */ new Map();
  var firstVisitMadeChanges = false;
  var fieldOrInlineFragmentVisitor = {
    enter: function(node) {
      if (shouldRemoveField(node.directives)) {
        firstVisitMadeChanges = true;
        return null;
      }
    }
  };
  var docWithoutDirectiveSubtrees = visit(doc, {
    // These two AST node types share the same implementation, defined above.
    Field: fieldOrInlineFragmentVisitor,
    InlineFragment: fieldOrInlineFragmentVisitor,
    VariableDefinition: {
      enter: function() {
        return false;
      }
    },
    Variable: {
      enter: function(node, _key, _parent, _path, ancestors) {
        var inUse = getInUse(ancestors);
        if (inUse) {
          inUse.variables.add(node.name.value);
        }
      }
    },
    FragmentSpread: {
      enter: function(node, _key, _parent, _path, ancestors) {
        if (shouldRemoveField(node.directives)) {
          firstVisitMadeChanges = true;
          return null;
        }
        var inUse = getInUse(ancestors);
        if (inUse) {
          inUse.fragmentSpreads.add(node.name.value);
        }
      }
    },
    FragmentDefinition: {
      enter: function(node, _key, _parent, path) {
        originalFragmentDefsByPath.set(JSON.stringify(path), node);
      },
      leave: function(node, _key, _parent, path) {
        var originalNode = originalFragmentDefsByPath.get(JSON.stringify(path));
        if (node === originalNode) {
          return node;
        }
        if (
          // This logic applies only if the document contains one or more
          // operations, since removing all fragments from a document containing
          // only fragments makes the document useless.
          operationCount > 0 && node.selectionSet.selections.every(function(selection) {
            return selection.kind === Kind.FIELD && selection.name.value === "__typename";
          })
        ) {
          getInUseByFragmentName(node.name.value).removed = true;
          firstVisitMadeChanges = true;
          return null;
        }
      }
    },
    Directive: {
      leave: function(node) {
        if (directiveMatcher(node)) {
          firstVisitMadeChanges = true;
          return null;
        }
      }
    }
  });
  if (!firstVisitMadeChanges) {
    return doc;
  }
  var populateTransitiveVars = function(inUse) {
    if (!inUse.transitiveVars) {
      inUse.transitiveVars = new Set(inUse.variables);
      if (!inUse.removed) {
        inUse.fragmentSpreads.forEach(function(childFragmentName) {
          populateTransitiveVars(getInUseByFragmentName(childFragmentName)).transitiveVars.forEach(function(varName) {
            inUse.transitiveVars.add(varName);
          });
        });
      }
    }
    return inUse;
  };
  var allFragmentNamesUsed = /* @__PURE__ */ new Set();
  docWithoutDirectiveSubtrees.definitions.forEach(function(def) {
    if (def.kind === Kind.OPERATION_DEFINITION) {
      populateTransitiveVars(getInUseByOperationName(def.name && def.name.value)).fragmentSpreads.forEach(function(childFragmentName) {
        allFragmentNamesUsed.add(childFragmentName);
      });
    } else if (def.kind === Kind.FRAGMENT_DEFINITION && // If there are no operations in the document, then all fragment
    // definitions count as usages of their own fragment names. This heuristic
    // prevents accidentally removing all fragment definitions from the
    // document just because it contains no operations that use the fragments.
    operationCount === 0 && !getInUseByFragmentName(def.name.value).removed) {
      allFragmentNamesUsed.add(def.name.value);
    }
  });
  allFragmentNamesUsed.forEach(function(fragmentName) {
    populateTransitiveVars(getInUseByFragmentName(fragmentName)).fragmentSpreads.forEach(function(childFragmentName) {
      allFragmentNamesUsed.add(childFragmentName);
    });
  });
  var fragmentWillBeRemoved = function(fragmentName) {
    return !!// A fragment definition will be removed if there are no spreads that refer
    // to it, or the fragment was explicitly removed because it had no fields
    // other than __typename.
    (!allFragmentNamesUsed.has(fragmentName) || getInUseByFragmentName(fragmentName).removed);
  };
  var enterVisitor = {
    enter: function(node) {
      if (fragmentWillBeRemoved(node.name.value)) {
        return null;
      }
    }
  };
  return nullIfDocIsEmpty(visit(docWithoutDirectiveSubtrees, {
    // If the fragment is going to be removed, then leaving any dangling
    // FragmentSpread nodes with the same name would be a mistake.
    FragmentSpread: enterVisitor,
    // This is where the fragment definition is actually removed.
    FragmentDefinition: enterVisitor,
    OperationDefinition: {
      leave: function(node) {
        if (node.variableDefinitions) {
          var usedVariableNames_1 = populateTransitiveVars(
            // If an operation is anonymous, we use the empty string as its key.
            getInUseByOperationName(node.name && node.name.value)
          ).transitiveVars;
          if (usedVariableNames_1.size < node.variableDefinitions.length) {
            return __assign(__assign({}, node), { variableDefinitions: node.variableDefinitions.filter(function(varDef) {
              return usedVariableNames_1.has(varDef.variable.name.value);
            }) });
          }
        }
      }
    }
  }));
}
var addTypenameToDocument = Object.assign(function(doc) {
  return visit(doc, {
    SelectionSet: {
      enter: function(node, _key, parent) {
        if (parent && parent.kind === Kind.OPERATION_DEFINITION) {
          return;
        }
        var selections = node.selections;
        if (!selections) {
          return;
        }
        var skip2 = selections.some(function(selection) {
          return isField(selection) && (selection.name.value === "__typename" || selection.name.value.lastIndexOf("__", 0) === 0);
        });
        if (skip2) {
          return;
        }
        var field = parent;
        if (isField(field) && field.directives && field.directives.some(function(d) {
          return d.name.value === "export";
        })) {
          return;
        }
        return __assign(__assign({}, node), { selections: __spreadArray(__spreadArray([], selections, true), [TYPENAME_FIELD], false) });
      }
    }
  });
}, {
  added: function(field) {
    return field === TYPENAME_FIELD;
  }
});
function buildQueryFromSelectionSet(document2) {
  var definition = getMainDefinition(document2);
  var definitionOperation = definition.operation;
  if (definitionOperation === "query") {
    return document2;
  }
  var modifiedDoc = visit(document2, {
    OperationDefinition: {
      enter: function(node) {
        return __assign(__assign({}, node), { operation: "query" });
      }
    }
  });
  return modifiedDoc;
}
function removeClientSetsFromDocument(document2) {
  checkDocument(document2);
  var modifiedDoc = removeDirectivesFromDocument([
    {
      test: function(directive) {
        return directive.name.value === "client";
      },
      remove: true
    }
  ], document2);
  return modifiedDoc;
}
function addNonReactiveToNamedFragments(document2) {
  checkDocument(document2);
  return visit(document2, {
    FragmentSpread: function(node) {
      var _a2;
      if ((_a2 = node.directives) === null || _a2 === void 0 ? void 0 : _a2.some(function(directive) {
        return directive.name.value === "unmask";
      })) {
        return;
      }
      return __assign(__assign({}, node), { directives: __spreadArray(__spreadArray([], node.directives || [], true), [
        {
          kind: Kind.DIRECTIVE,
          name: { kind: Kind.NAME, value: "nonreactive" }
        }
      ], false) });
    }
  });
}

// node_modules/@apollo/client/utilities/common/mergeDeep.js
var hasOwnProperty3 = Object.prototype.hasOwnProperty;
function mergeDeep() {
  var sources = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }
  return mergeDeepArray(sources);
}
function mergeDeepArray(sources) {
  var target = sources[0] || {};
  var count = sources.length;
  if (count > 1) {
    var merger = new DeepMerger();
    for (var i = 1; i < count; ++i) {
      target = merger.merge(target, sources[i]);
    }
  }
  return target;
}
var defaultReconciler = function(target, source, property) {
  return this.merge(target[property], source[property]);
};
var DeepMerger = (
  /** @class */
  (function() {
    function DeepMerger2(reconciler) {
      if (reconciler === void 0) {
        reconciler = defaultReconciler;
      }
      this.reconciler = reconciler;
      this.isObject = isNonNullObject;
      this.pastCopies = /* @__PURE__ */ new Set();
    }
    DeepMerger2.prototype.merge = function(target, source) {
      var _this = this;
      var context = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        context[_i - 2] = arguments[_i];
      }
      if (isNonNullObject(source) && isNonNullObject(target)) {
        Object.keys(source).forEach(function(sourceKey) {
          if (hasOwnProperty3.call(target, sourceKey)) {
            var targetValue = target[sourceKey];
            if (source[sourceKey] !== targetValue) {
              var result2 = _this.reconciler.apply(_this, __spreadArray([
                target,
                source,
                sourceKey
              ], context, false));
              if (result2 !== targetValue) {
                target = _this.shallowCopyForMerge(target);
                target[sourceKey] = result2;
              }
            }
          } else {
            target = _this.shallowCopyForMerge(target);
            target[sourceKey] = source[sourceKey];
          }
        });
        return target;
      }
      return source;
    };
    DeepMerger2.prototype.shallowCopyForMerge = function(value) {
      if (isNonNullObject(value)) {
        if (!this.pastCopies.has(value)) {
          if (Array.isArray(value)) {
            value = value.slice(0);
          } else {
            value = __assign({ __proto__: Object.getPrototypeOf(value) }, value);
          }
          this.pastCopies.add(value);
        }
      }
      return value;
    };
    return DeepMerger2;
  })()
);

// node_modules/zen-observable-ts/module.js
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function() {
      if (i >= o.length) return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var hasSymbols = function() {
  return typeof Symbol === "function";
};
var hasSymbol = function(name) {
  return hasSymbols() && Boolean(Symbol[name]);
};
var getSymbol = function(name) {
  return hasSymbol(name) ? Symbol[name] : "@@" + name;
};
if (hasSymbols() && !hasSymbol("observable")) {
  Symbol.observable = Symbol("observable");
}
var SymbolIterator = getSymbol("iterator");
var SymbolObservable = getSymbol("observable");
var SymbolSpecies = getSymbol("species");
function getMethod(obj, key) {
  var value = obj[key];
  if (value == null) return void 0;
  if (typeof value !== "function") throw new TypeError(value + " is not a function");
  return value;
}
function getSpecies(obj) {
  var ctor = obj.constructor;
  if (ctor !== void 0) {
    ctor = ctor[SymbolSpecies];
    if (ctor === null) {
      ctor = void 0;
    }
  }
  return ctor !== void 0 ? ctor : Observable2;
}
function isObservable2(x) {
  return x instanceof Observable2;
}
function hostReportError(e) {
  if (hostReportError.log) {
    hostReportError.log(e);
  } else {
    setTimeout(function() {
      throw e;
    });
  }
}
function enqueue(fn) {
  Promise.resolve().then(function() {
    try {
      fn();
    } catch (e) {
      hostReportError(e);
    }
  });
}
function cleanupSubscription(subscription) {
  var cleanup = subscription._cleanup;
  if (cleanup === void 0) return;
  subscription._cleanup = void 0;
  if (!cleanup) {
    return;
  }
  try {
    if (typeof cleanup === "function") {
      cleanup();
    } else {
      var unsubscribe = getMethod(cleanup, "unsubscribe");
      if (unsubscribe) {
        unsubscribe.call(cleanup);
      }
    }
  } catch (e) {
    hostReportError(e);
  }
}
function closeSubscription(subscription) {
  subscription._observer = void 0;
  subscription._queue = void 0;
  subscription._state = "closed";
}
function flushSubscription(subscription) {
  var queue = subscription._queue;
  if (!queue) {
    return;
  }
  subscription._queue = void 0;
  subscription._state = "ready";
  for (var i = 0; i < queue.length; ++i) {
    notifySubscription(subscription, queue[i].type, queue[i].value);
    if (subscription._state === "closed") break;
  }
}
function notifySubscription(subscription, type, value) {
  subscription._state = "running";
  var observer = subscription._observer;
  try {
    var m = getMethod(observer, type);
    switch (type) {
      case "next":
        if (m) m.call(observer, value);
        break;
      case "error":
        closeSubscription(subscription);
        if (m) m.call(observer, value);
        else throw value;
        break;
      case "complete":
        closeSubscription(subscription);
        if (m) m.call(observer);
        break;
    }
  } catch (e) {
    hostReportError(e);
  }
  if (subscription._state === "closed") cleanupSubscription(subscription);
  else if (subscription._state === "running") subscription._state = "ready";
}
function onNotify(subscription, type, value) {
  if (subscription._state === "closed") return;
  if (subscription._state === "buffering") {
    subscription._queue.push({
      type,
      value
    });
    return;
  }
  if (subscription._state !== "ready") {
    subscription._state = "buffering";
    subscription._queue = [{
      type,
      value
    }];
    enqueue(function() {
      return flushSubscription(subscription);
    });
    return;
  }
  notifySubscription(subscription, type, value);
}
var Subscription2 = /* @__PURE__ */ (function() {
  function Subscription4(observer, subscriber) {
    this._cleanup = void 0;
    this._observer = observer;
    this._queue = void 0;
    this._state = "initializing";
    var subscriptionObserver = new SubscriptionObserver(this);
    try {
      this._cleanup = subscriber.call(void 0, subscriptionObserver);
    } catch (e) {
      subscriptionObserver.error(e);
    }
    if (this._state === "initializing") this._state = "ready";
  }
  var _proto = Subscription4.prototype;
  _proto.unsubscribe = function unsubscribe() {
    if (this._state !== "closed") {
      closeSubscription(this);
      cleanupSubscription(this);
    }
  };
  _createClass(Subscription4, [{
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]);
  return Subscription4;
})();
var SubscriptionObserver = /* @__PURE__ */ (function() {
  function SubscriptionObserver2(subscription) {
    this._subscription = subscription;
  }
  var _proto2 = SubscriptionObserver2.prototype;
  _proto2.next = function next(value) {
    onNotify(this._subscription, "next", value);
  };
  _proto2.error = function error(value) {
    onNotify(this._subscription, "error", value);
  };
  _proto2.complete = function complete() {
    onNotify(this._subscription, "complete");
  };
  _createClass(SubscriptionObserver2, [{
    key: "closed",
    get: function() {
      return this._subscription._state === "closed";
    }
  }]);
  return SubscriptionObserver2;
})();
var Observable2 = /* @__PURE__ */ (function() {
  function Observable3(subscriber) {
    if (!(this instanceof Observable3)) throw new TypeError("Observable cannot be called as a function");
    if (typeof subscriber !== "function") throw new TypeError("Observable initializer must be a function");
    this._subscriber = subscriber;
  }
  var _proto3 = Observable3.prototype;
  _proto3.subscribe = function subscribe(observer) {
    if (typeof observer !== "object" || observer === null) {
      observer = {
        next: observer,
        error: arguments[1],
        complete: arguments[2]
      };
    }
    return new Subscription2(observer, this._subscriber);
  };
  _proto3.forEach = function forEach2(fn) {
    var _this = this;
    return new Promise(function(resolve, reject) {
      if (typeof fn !== "function") {
        reject(new TypeError(fn + " is not a function"));
        return;
      }
      function done() {
        subscription.unsubscribe();
        resolve();
      }
      var subscription = _this.subscribe({
        next: function(value) {
          try {
            fn(value, done);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  };
  _proto3.map = function map2(fn) {
    var _this2 = this;
    if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
    var C = getSpecies(this);
    return new C(function(observer) {
      return _this2.subscribe({
        next: function(value) {
          try {
            value = fn(value);
          } catch (e) {
            return observer.error(e);
          }
          observer.next(value);
        },
        error: function(e) {
          observer.error(e);
        },
        complete: function() {
          observer.complete();
        }
      });
    });
  };
  _proto3.filter = function filter2(fn) {
    var _this3 = this;
    if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
    var C = getSpecies(this);
    return new C(function(observer) {
      return _this3.subscribe({
        next: function(value) {
          try {
            if (!fn(value)) return;
          } catch (e) {
            return observer.error(e);
          }
          observer.next(value);
        },
        error: function(e) {
          observer.error(e);
        },
        complete: function() {
          observer.complete();
        }
      });
    });
  };
  _proto3.reduce = function reduce(fn) {
    var _this4 = this;
    if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
    var C = getSpecies(this);
    var hasSeed = arguments.length > 1;
    var hasValue = false;
    var seed = arguments[1];
    var acc = seed;
    return new C(function(observer) {
      return _this4.subscribe({
        next: function(value) {
          var first2 = !hasValue;
          hasValue = true;
          if (!first2 || hasSeed) {
            try {
              acc = fn(acc, value);
            } catch (e) {
              return observer.error(e);
            }
          } else {
            acc = value;
          }
        },
        error: function(e) {
          observer.error(e);
        },
        complete: function() {
          if (!hasValue && !hasSeed) return observer.error(new TypeError("Cannot reduce an empty sequence"));
          observer.next(acc);
          observer.complete();
        }
      });
    });
  };
  _proto3.concat = function concat2() {
    var _this5 = this;
    for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
      sources[_key] = arguments[_key];
    }
    var C = getSpecies(this);
    return new C(function(observer) {
      var subscription;
      var index = 0;
      function startNext(next) {
        subscription = next.subscribe({
          next: function(v) {
            observer.next(v);
          },
          error: function(e) {
            observer.error(e);
          },
          complete: function() {
            if (index === sources.length) {
              subscription = void 0;
              observer.complete();
            } else {
              startNext(C.from(sources[index++]));
            }
          }
        });
      }
      startNext(_this5);
      return function() {
        if (subscription) {
          subscription.unsubscribe();
          subscription = void 0;
        }
      };
    });
  };
  _proto3.flatMap = function flatMap(fn) {
    var _this6 = this;
    if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
    var C = getSpecies(this);
    return new C(function(observer) {
      var subscriptions = [];
      var outer = _this6.subscribe({
        next: function(value) {
          if (fn) {
            try {
              value = fn(value);
            } catch (e) {
              return observer.error(e);
            }
          }
          var inner = C.from(value).subscribe({
            next: function(value2) {
              observer.next(value2);
            },
            error: function(e) {
              observer.error(e);
            },
            complete: function() {
              var i = subscriptions.indexOf(inner);
              if (i >= 0) subscriptions.splice(i, 1);
              completeIfDone();
            }
          });
          subscriptions.push(inner);
        },
        error: function(e) {
          observer.error(e);
        },
        complete: function() {
          completeIfDone();
        }
      });
      function completeIfDone() {
        if (outer.closed && subscriptions.length === 0) observer.complete();
      }
      return function() {
        subscriptions.forEach(function(s) {
          return s.unsubscribe();
        });
        outer.unsubscribe();
      };
    });
  };
  _proto3[SymbolObservable] = function() {
    return this;
  };
  Observable3.from = function from2(x) {
    var C = typeof this === "function" ? this : Observable3;
    if (x == null) throw new TypeError(x + " is not an object");
    var method = getMethod(x, SymbolObservable);
    if (method) {
      var observable2 = method.call(x);
      if (Object(observable2) !== observable2) throw new TypeError(observable2 + " is not an object");
      if (isObservable2(observable2) && observable2.constructor === C) return observable2;
      return new C(function(observer) {
        return observable2.subscribe(observer);
      });
    }
    if (hasSymbol("iterator")) {
      method = getMethod(x, SymbolIterator);
      if (method) {
        return new C(function(observer) {
          enqueue(function() {
            if (observer.closed) return;
            for (var _iterator = _createForOfIteratorHelperLoose(method.call(x)), _step; !(_step = _iterator()).done; ) {
              var item = _step.value;
              observer.next(item);
              if (observer.closed) return;
            }
            observer.complete();
          });
        });
      }
    }
    if (Array.isArray(x)) {
      return new C(function(observer) {
        enqueue(function() {
          if (observer.closed) return;
          for (var i = 0; i < x.length; ++i) {
            observer.next(x[i]);
            if (observer.closed) return;
          }
          observer.complete();
        });
      });
    }
    throw new TypeError(x + " is not observable");
  };
  Observable3.of = function of2() {
    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }
    var C = typeof this === "function" ? this : Observable3;
    return new C(function(observer) {
      enqueue(function() {
        if (observer.closed) return;
        for (var i = 0; i < items.length; ++i) {
          observer.next(items[i]);
          if (observer.closed) return;
        }
        observer.complete();
      });
    });
  };
  _createClass(Observable3, null, [{
    key: SymbolSpecies,
    get: function() {
      return this;
    }
  }]);
  return Observable3;
})();
if (hasSymbols()) {
  Object.defineProperty(Observable2, Symbol("extensions"), {
    value: {
      symbol: SymbolObservable,
      hostReportError
    },
    configurable: true
  });
}

// node_modules/symbol-observable/es/ponyfill.js
function symbolObservablePonyfill(root2) {
  var result2;
  var Symbol2 = root2.Symbol;
  if (typeof Symbol2 === "function") {
    if (Symbol2.observable) {
      result2 = Symbol2.observable;
    } else {
      if (typeof Symbol2.for === "function") {
        result2 = Symbol2.for("https://github.com/benlesh/symbol-observable");
      } else {
        result2 = Symbol2("https://github.com/benlesh/symbol-observable");
      }
      try {
        Symbol2.observable = result2;
      } catch (err) {
      }
    }
  } else {
    result2 = "@@observable";
  }
  return result2;
}

// node_modules/symbol-observable/es/index.js
var root;
if (typeof self !== "undefined") {
  root = self;
} else if (typeof window !== "undefined") {
  root = window;
} else if (typeof global !== "undefined") {
  root = global;
} else if (typeof module !== "undefined") {
  root = module;
} else {
  root = Function("return this")();
}
var result = symbolObservablePonyfill(root);

// node_modules/@apollo/client/utilities/observables/Observable.js
var prototype = Observable2.prototype;
var fakeObsSymbol = "@@observable";
if (!prototype[fakeObsSymbol]) {
  prototype[fakeObsSymbol] = function() {
    return this;
  };
}

// node_modules/@apollo/client/utilities/promises/preventUnhandledRejection.js
function preventUnhandledRejection(promise) {
  promise.catch(function() {
  });
  return promise;
}

// node_modules/@apollo/client/utilities/common/cloneDeep.js
var toString = Object.prototype.toString;
function cloneDeep(value) {
  return cloneDeepHelper(value);
}
function cloneDeepHelper(val, seen) {
  switch (toString.call(val)) {
    case "[object Array]": {
      seen = seen || /* @__PURE__ */ new Map();
      if (seen.has(val))
        return seen.get(val);
      var copy_1 = val.slice(0);
      seen.set(val, copy_1);
      copy_1.forEach(function(child, i) {
        copy_1[i] = cloneDeepHelper(child, seen);
      });
      return copy_1;
    }
    case "[object Object]": {
      seen = seen || /* @__PURE__ */ new Map();
      if (seen.has(val))
        return seen.get(val);
      var copy_2 = Object.create(Object.getPrototypeOf(val));
      seen.set(val, copy_2);
      Object.keys(val).forEach(function(key) {
        copy_2[key] = cloneDeepHelper(val[key], seen);
      });
      return copy_2;
    }
    default:
      return val;
  }
}

// node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js
function deepFreeze(value) {
  var workSet = /* @__PURE__ */ new Set([value]);
  workSet.forEach(function(obj) {
    if (isNonNullObject(obj) && shallowFreeze(obj) === obj) {
      Object.getOwnPropertyNames(obj).forEach(function(name) {
        if (isNonNullObject(obj[name]))
          workSet.add(obj[name]);
      });
    }
  });
  return value;
}
function shallowFreeze(obj) {
  if (globalThis.__DEV__ !== false && !Object.isFrozen(obj)) {
    try {
      Object.freeze(obj);
    } catch (e) {
      if (e instanceof TypeError)
        return null;
      throw e;
    }
  }
  return obj;
}
function maybeDeepFreeze(obj) {
  if (globalThis.__DEV__ !== false) {
    deepFreeze(obj);
  }
  return obj;
}

// node_modules/@apollo/client/utilities/observables/iteration.js
function iterateObserversSafely(observers, method, argument) {
  var observersWithMethod = [];
  observers.forEach(function(obs) {
    return obs[method] && observersWithMethod.push(obs);
  });
  observersWithMethod.forEach(function(obs) {
    return obs[method](argument);
  });
}

// node_modules/@apollo/client/utilities/observables/asyncMap.js
function asyncMap(observable2, mapFn, catchFn) {
  return new Observable2(function(observer) {
    var promiseQueue = {
      // Normally we would initialize promiseQueue to Promise.resolve(), but
      // in this case, for backwards compatibility, we need to be careful to
      // invoke the first callback synchronously.
      then: function(callback) {
        return new Promise(function(resolve) {
          return resolve(callback());
        });
      }
    };
    function makeCallback(examiner, key) {
      return function(arg) {
        if (examiner) {
          var both = function() {
            return observer.closed ? (
              /* will be swallowed */
              0
            ) : examiner(arg);
          };
          promiseQueue = promiseQueue.then(both, both).then(function(result2) {
            return observer.next(result2);
          }, function(error) {
            return observer.error(error);
          });
        } else {
          observer[key](arg);
        }
      };
    }
    var handler = {
      next: makeCallback(mapFn, "next"),
      error: makeCallback(catchFn, "error"),
      complete: function() {
        promiseQueue.then(function() {
          return observer.complete();
        });
      }
    };
    var sub = observable2.subscribe(handler);
    return function() {
      return sub.unsubscribe();
    };
  });
}

// node_modules/@apollo/client/utilities/observables/subclassing.js
function fixObservableSubclass(subclass) {
  function set(key) {
    Object.defineProperty(subclass, key, { value: Observable2 });
  }
  if (canUseSymbol && Symbol.species) {
    set(Symbol.species);
  }
  set("@@species");
  return subclass;
}

// node_modules/@apollo/client/utilities/observables/Concast.js
function isPromiseLike(value) {
  return value && typeof value.then === "function";
}
var Concast = (
  /** @class */
  (function(_super) {
    __extends(Concast2, _super);
    function Concast2(sources) {
      var _this = _super.call(this, function(observer) {
        _this.addObserver(observer);
        return function() {
          return _this.removeObserver(observer);
        };
      }) || this;
      _this.observers = /* @__PURE__ */ new Set();
      _this.promise = new Promise(function(resolve, reject) {
        _this.resolve = resolve;
        _this.reject = reject;
      });
      _this.handlers = {
        next: function(result2) {
          if (_this.sub !== null) {
            _this.latest = ["next", result2];
            _this.notify("next", result2);
            iterateObserversSafely(_this.observers, "next", result2);
          }
        },
        error: function(error) {
          var sub = _this.sub;
          if (sub !== null) {
            if (sub)
              setTimeout(function() {
                return sub.unsubscribe();
              });
            _this.sub = null;
            _this.latest = ["error", error];
            _this.reject(error);
            _this.notify("error", error);
            iterateObserversSafely(_this.observers, "error", error);
          }
        },
        complete: function() {
          var _a2 = _this, sub = _a2.sub, _b = _a2.sources, sources2 = _b === void 0 ? [] : _b;
          if (sub !== null) {
            var value = sources2.shift();
            if (!value) {
              if (sub)
                setTimeout(function() {
                  return sub.unsubscribe();
                });
              _this.sub = null;
              if (_this.latest && _this.latest[0] === "next") {
                _this.resolve(_this.latest[1]);
              } else {
                _this.resolve();
              }
              _this.notify("complete");
              iterateObserversSafely(_this.observers, "complete");
            } else if (isPromiseLike(value)) {
              value.then(function(obs) {
                return _this.sub = obs.subscribe(_this.handlers);
              }, _this.handlers.error);
            } else {
              _this.sub = value.subscribe(_this.handlers);
            }
          }
        }
      };
      _this.nextResultListeners = /* @__PURE__ */ new Set();
      _this.cancel = function(reason) {
        _this.reject(reason);
        _this.sources = [];
        _this.handlers.error(reason);
      };
      _this.promise.catch(function(_) {
      });
      if (typeof sources === "function") {
        sources = [new Observable2(sources)];
      }
      if (isPromiseLike(sources)) {
        sources.then(function(iterable) {
          return _this.start(iterable);
        }, _this.handlers.error);
      } else {
        _this.start(sources);
      }
      return _this;
    }
    Concast2.prototype.start = function(sources) {
      if (this.sub !== void 0)
        return;
      this.sources = Array.from(sources);
      this.handlers.complete();
    };
    Concast2.prototype.deliverLastMessage = function(observer) {
      if (this.latest) {
        var nextOrError = this.latest[0];
        var method = observer[nextOrError];
        if (method) {
          method.call(observer, this.latest[1]);
        }
        if (this.sub === null && nextOrError === "next" && observer.complete) {
          observer.complete();
        }
      }
    };
    Concast2.prototype.addObserver = function(observer) {
      if (!this.observers.has(observer)) {
        this.deliverLastMessage(observer);
        this.observers.add(observer);
      }
    };
    Concast2.prototype.removeObserver = function(observer) {
      if (this.observers.delete(observer) && this.observers.size < 1) {
        this.handlers.complete();
      }
    };
    Concast2.prototype.notify = function(method, arg) {
      var nextResultListeners = this.nextResultListeners;
      if (nextResultListeners.size) {
        this.nextResultListeners = /* @__PURE__ */ new Set();
        nextResultListeners.forEach(function(listener) {
          return listener(method, arg);
        });
      }
    };
    Concast2.prototype.beforeNext = function(callback) {
      var called = false;
      this.nextResultListeners.add(function(method, arg) {
        if (!called) {
          called = true;
          callback(method, arg);
        }
      });
    };
    return Concast2;
  })(Observable2)
);
fixObservableSubclass(Concast);

// node_modules/@apollo/client/utilities/common/incrementalResult.js
function isExecutionPatchIncrementalResult(value) {
  return "incremental" in value;
}
function isExecutionPatchInitialResult(value) {
  return "hasNext" in value && "data" in value;
}
function isExecutionPatchResult(value) {
  return isExecutionPatchIncrementalResult(value) || isExecutionPatchInitialResult(value);
}
function isApolloPayloadResult(value) {
  return isNonNullObject(value) && "payload" in value;
}
function mergeIncrementalData(prevResult, result2) {
  var mergedData = prevResult;
  var merger = new DeepMerger();
  if (isExecutionPatchIncrementalResult(result2) && isNonEmptyArray(result2.incremental)) {
    result2.incremental.forEach(function(_a2) {
      var data = _a2.data, path = _a2.path;
      for (var i = path.length - 1; i >= 0; --i) {
        var key = path[i];
        var isNumericKey = !isNaN(+key);
        var parent_1 = isNumericKey ? [] : {};
        parent_1[key] = data;
        data = parent_1;
      }
      mergedData = merger.merge(mergedData, data);
    });
  }
  return mergedData;
}

// node_modules/@apollo/client/utilities/common/errorHandling.js
function graphQLResultHasError(result2) {
  var errors = getGraphQLErrorsFromResult(result2);
  return isNonEmptyArray(errors);
}
function getGraphQLErrorsFromResult(result2) {
  var graphQLErrors = isNonEmptyArray(result2.errors) ? result2.errors.slice(0) : [];
  if (isExecutionPatchIncrementalResult(result2) && isNonEmptyArray(result2.incremental)) {
    result2.incremental.forEach(function(incrementalResult) {
      if (incrementalResult.errors) {
        graphQLErrors.push.apply(graphQLErrors, incrementalResult.errors);
      }
    });
  }
  return graphQLErrors;
}

// node_modules/@apollo/client/utilities/common/compact.js
function compact() {
  var objects = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    objects[_i] = arguments[_i];
  }
  var result2 = /* @__PURE__ */ Object.create(null);
  objects.forEach(function(obj) {
    if (!obj)
      return;
    Object.keys(obj).forEach(function(key) {
      var value = obj[key];
      if (value !== void 0) {
        result2[key] = value;
      }
    });
  });
  return result2;
}

// node_modules/@apollo/client/utilities/common/mergeOptions.js
function mergeOptions(defaults2, options) {
  return compact(defaults2, options, options.variables && {
    variables: compact(__assign(__assign({}, defaults2 && defaults2.variables), options.variables))
  });
}

// node_modules/@apollo/client/link/utils/fromError.js
function fromError(errorValue) {
  return new Observable2(function(observer) {
    observer.error(errorValue);
  });
}

// node_modules/@apollo/client/link/utils/throwServerError.js
var throwServerError = function(response, result2, message) {
  var error = new Error(message);
  error.name = "ServerError";
  error.response = response;
  error.statusCode = response.status;
  error.result = result2;
  throw error;
};

// node_modules/@apollo/client/link/utils/validateOperation.js
function validateOperation(operation) {
  var OPERATION_FIELDS = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ];
  for (var _i = 0, _a2 = Object.keys(operation); _i < _a2.length; _i++) {
    var key = _a2[_i];
    if (OPERATION_FIELDS.indexOf(key) < 0) {
      throw newInvariantError(58, key);
    }
  }
  return operation;
}

// node_modules/@apollo/client/link/utils/createOperation.js
function createOperation(starting, operation) {
  var context = __assign({}, starting);
  var setContext = function(next) {
    if (typeof next === "function") {
      context = __assign(__assign({}, context), next(context));
    } else {
      context = __assign(__assign({}, context), next);
    }
  };
  var getContext = function() {
    return __assign({}, context);
  };
  Object.defineProperty(operation, "setContext", {
    enumerable: false,
    value: setContext
  });
  Object.defineProperty(operation, "getContext", {
    enumerable: false,
    value: getContext
  });
  return operation;
}

// node_modules/@apollo/client/link/utils/transformOperation.js
function transformOperation(operation) {
  var transformedOperation = {
    variables: operation.variables || {},
    extensions: operation.extensions || {},
    operationName: operation.operationName,
    query: operation.query
  };
  if (!transformedOperation.operationName) {
    transformedOperation.operationName = typeof transformedOperation.query !== "string" ? getOperationName(transformedOperation.query) || void 0 : "";
  }
  return transformedOperation;
}

// node_modules/@apollo/client/link/utils/filterOperationVariables.js
function filterOperationVariables(variables, query) {
  var result2 = __assign({}, variables);
  var unusedNames = new Set(Object.keys(variables));
  visit(query, {
    Variable: function(node, _key, parent) {
      if (parent && parent.kind !== "VariableDefinition") {
        unusedNames.delete(node.name.value);
      }
    }
  });
  unusedNames.forEach(function(name) {
    delete result2[name];
  });
  return result2;
}

// node_modules/@apollo/client/utilities/deprecation/index.js
var muteAllDeprecations = Symbol.for("apollo.deprecations");
var global2 = global_default;
var slot = new Slot();
function isMuted(name) {
  return global2[muteAllDeprecations] || (slot.getValue() || []).includes(name);
}
function muteDeprecations(name) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  return slot.withValue.apply(slot, __spreadArray([Array.isArray(name) ? name : [name]], args, false));
}
function warnRemovedOption(options, name, callSite, recommendation) {
  if (recommendation === void 0) {
    recommendation = "Please remove this option.";
  }
  warnDeprecated(name, function() {
    if (name in options) {
      globalThis.__DEV__ !== false && invariant2.warn(104, callSite, name, recommendation);
    }
  });
}
function warnDeprecated(name, cb) {
  if (!isMuted(name)) {
    cb();
  }
}

// node_modules/@apollo/client/link/core/ApolloLink.js
function passthrough(op, forward) {
  return forward ? forward(op) : Observable2.of();
}
function toLink(handler) {
  return typeof handler === "function" ? new ApolloLink(handler) : handler;
}
function isTerminating(link) {
  return link.request.length <= 1;
}
var ApolloLink = (
  /** @class */
  (function() {
    function ApolloLink2(request) {
      if (request)
        this.request = request;
    }
    ApolloLink2.empty = function() {
      return new ApolloLink2(function() {
        return Observable2.of();
      });
    };
    ApolloLink2.from = function(links) {
      if (links.length === 0)
        return ApolloLink2.empty();
      return links.map(toLink).reduce(function(x, y) {
        return x.concat(y);
      });
    };
    ApolloLink2.split = function(test, left, right) {
      var leftLink = toLink(left);
      var rightLink = toLink(right || new ApolloLink2(passthrough));
      var ret;
      if (isTerminating(leftLink) && isTerminating(rightLink)) {
        ret = new ApolloLink2(function(operation) {
          return test(operation) ? leftLink.request(operation) || Observable2.of() : rightLink.request(operation) || Observable2.of();
        });
      } else {
        ret = new ApolloLink2(function(operation, forward) {
          return test(operation) ? leftLink.request(operation, forward) || Observable2.of() : rightLink.request(operation, forward) || Observable2.of();
        });
      }
      return Object.assign(ret, { left: leftLink, right: rightLink });
    };
    ApolloLink2.execute = function(link, operation) {
      return link.request(createOperation(operation.context, transformOperation(validateOperation(operation)))) || Observable2.of();
    };
    ApolloLink2.concat = function(first2, second) {
      var firstLink = toLink(first2);
      if (isTerminating(firstLink)) {
        globalThis.__DEV__ !== false && invariant2.warn(47, firstLink);
        return firstLink;
      }
      var nextLink = toLink(second);
      var ret;
      if (isTerminating(nextLink)) {
        ret = new ApolloLink2(function(operation) {
          return firstLink.request(operation, function(op) {
            return nextLink.request(op) || Observable2.of();
          }) || Observable2.of();
        });
      } else {
        ret = new ApolloLink2(function(operation, forward) {
          return firstLink.request(operation, function(op) {
            return nextLink.request(op, forward) || Observable2.of();
          }) || Observable2.of();
        });
      }
      return Object.assign(ret, { left: firstLink, right: nextLink });
    };
    ApolloLink2.prototype.split = function(test, left, right) {
      return this.concat(ApolloLink2.split(test, left, right || new ApolloLink2(passthrough)));
    };
    ApolloLink2.prototype.concat = function(next) {
      return ApolloLink2.concat(this, next);
    };
    ApolloLink2.prototype.request = function(operation, forward) {
      throw newInvariantError(48);
    };
    ApolloLink2.prototype.onError = function(error, observer) {
      if (globalThis.__DEV__ !== false) {
        warnDeprecated("onError", function() {
          globalThis.__DEV__ !== false && invariant2.warn(49);
        });
      }
      if (observer && observer.error) {
        observer.error(error);
        return false;
      }
      throw error;
    };
    ApolloLink2.prototype.setOnError = function(fn) {
      if (globalThis.__DEV__ !== false) {
        globalThis.__DEV__ !== false && invariant2.warn(50);
      }
      this.onError = fn;
      return this;
    };
    return ApolloLink2;
  })()
);

// node_modules/@apollo/client/link/core/execute.js
var execute = ApolloLink.execute;

// node_modules/@apollo/client/link/http/iterators/async.js
function asyncIterator(source) {
  var _a2;
  var iterator = source[Symbol.asyncIterator]();
  return _a2 = {
    next: function() {
      return iterator.next();
    }
  }, _a2[Symbol.asyncIterator] = function() {
    return this;
  }, _a2;
}

// node_modules/@apollo/client/link/http/iterators/nodeStream.js
function nodeStreamIterator(stream) {
  var cleanup = null;
  var error = null;
  var done = false;
  var data = [];
  var waiting = [];
  function onData(chunk) {
    if (error)
      return;
    if (waiting.length) {
      var shiftedArr = waiting.shift();
      if (Array.isArray(shiftedArr) && shiftedArr[0]) {
        return shiftedArr[0]({ value: chunk, done: false });
      }
    }
    data.push(chunk);
  }
  function onError(err) {
    error = err;
    var all = waiting.slice();
    all.forEach(function(pair) {
      pair[1](err);
    });
    !cleanup || cleanup();
  }
  function onEnd() {
    done = true;
    var all = waiting.slice();
    all.forEach(function(pair) {
      pair[0]({ value: void 0, done: true });
    });
    !cleanup || cleanup();
  }
  cleanup = function() {
    cleanup = null;
    stream.removeListener("data", onData);
    stream.removeListener("error", onError);
    stream.removeListener("end", onEnd);
    stream.removeListener("finish", onEnd);
    stream.removeListener("close", onEnd);
  };
  stream.on("data", onData);
  stream.on("error", onError);
  stream.on("end", onEnd);
  stream.on("finish", onEnd);
  stream.on("close", onEnd);
  function getNext() {
    return new Promise(function(resolve, reject) {
      if (error)
        return reject(error);
      if (data.length)
        return resolve({ value: data.shift(), done: false });
      if (done)
        return resolve({ value: void 0, done: true });
      waiting.push([resolve, reject]);
    });
  }
  var iterator = {
    next: function() {
      return getNext();
    }
  };
  if (canUseAsyncIteratorSymbol) {
    iterator[Symbol.asyncIterator] = function() {
      return this;
    };
  }
  return iterator;
}

// node_modules/@apollo/client/link/http/iterators/promise.js
function promiseIterator(promise) {
  var resolved = false;
  var iterator = {
    next: function() {
      if (resolved)
        return Promise.resolve({
          value: void 0,
          done: true
        });
      resolved = true;
      return new Promise(function(resolve, reject) {
        promise.then(function(value) {
          resolve({ value, done: false });
        }).catch(reject);
      });
    }
  };
  if (canUseAsyncIteratorSymbol) {
    iterator[Symbol.asyncIterator] = function() {
      return this;
    };
  }
  return iterator;
}

// node_modules/@apollo/client/link/http/iterators/reader.js
function readerIterator(reader) {
  var iterator = {
    next: function() {
      return reader.read();
    }
  };
  if (canUseAsyncIteratorSymbol) {
    iterator[Symbol.asyncIterator] = function() {
      return this;
    };
  }
  return iterator;
}

// node_modules/@apollo/client/link/http/responseIterator.js
function isNodeResponse(value) {
  return !!value.body;
}
function isReadableStream(value) {
  return !!value.getReader;
}
function isAsyncIterableIterator(value) {
  return !!(canUseAsyncIteratorSymbol && value[Symbol.asyncIterator]);
}
function isStreamableBlob(value) {
  return !!value.stream;
}
function isBlob(value) {
  return !!value.arrayBuffer;
}
function isNodeReadableStream(value) {
  return !!value.pipe;
}
function responseIterator(response) {
  var body = response;
  if (isNodeResponse(response))
    body = response.body;
  if (isAsyncIterableIterator(body))
    return asyncIterator(body);
  if (isReadableStream(body))
    return readerIterator(body.getReader());
  if (isStreamableBlob(body)) {
    return readerIterator(body.stream().getReader());
  }
  if (isBlob(body))
    return promiseIterator(body.arrayBuffer());
  if (isNodeReadableStream(body))
    return nodeStreamIterator(body);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}

// node_modules/@apollo/client/errors/index.js
var PROTOCOL_ERRORS_SYMBOL = Symbol();
function graphQLResultHasProtocolErrors(result2) {
  if (result2.extensions) {
    return Array.isArray(result2.extensions[PROTOCOL_ERRORS_SYMBOL]);
  }
  return false;
}
function isApolloError(err) {
  return err.hasOwnProperty("graphQLErrors");
}
var generateErrorMessage = function(err) {
  var errors = __spreadArray(__spreadArray(__spreadArray([], err.graphQLErrors, true), err.clientErrors, true), err.protocolErrors, true);
  if (err.networkError)
    errors.push(err.networkError);
  return errors.map(function(err2) {
    return isNonNullObject(err2) && err2.message || "Error message not found.";
  }).join("\n");
};
var ApolloError = (
  /** @class */
  (function(_super) {
    __extends(ApolloError2, _super);
    function ApolloError2(_a2) {
      var graphQLErrors = _a2.graphQLErrors, protocolErrors = _a2.protocolErrors, clientErrors = _a2.clientErrors, networkError = _a2.networkError, errorMessage = _a2.errorMessage, extraInfo = _a2.extraInfo;
      var _this = _super.call(this, errorMessage) || this;
      _this.name = "ApolloError";
      _this.graphQLErrors = graphQLErrors || [];
      _this.protocolErrors = protocolErrors || [];
      _this.clientErrors = clientErrors || [];
      _this.networkError = networkError || null;
      _this.message = errorMessage || generateErrorMessage(_this);
      _this.extraInfo = extraInfo;
      _this.cause = __spreadArray(__spreadArray(__spreadArray([
        networkError
      ], graphQLErrors || [], true), protocolErrors || [], true), clientErrors || [], true).find(function(e) {
        return !!e;
      }) || null;
      _this.__proto__ = ApolloError2.prototype;
      return _this;
    }
    return ApolloError2;
  })(Error)
);

// node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js
var hasOwnProperty4 = Object.prototype.hasOwnProperty;
function readMultipartBody(response, nextValue) {
  return __awaiter(this, void 0, void 0, function() {
    var decoder, contentType, delimiter, boundaryVal, boundary, buffer, iterator, running, _a2, value, done, chunk, searchFrom, bi, message, i, headers, contentType_1, body, result2, next;
    var _b, _c;
    var _d;
    return __generator(this, function(_e) {
      switch (_e.label) {
        case 0:
          if (TextDecoder === void 0) {
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          }
          decoder = new TextDecoder("utf-8");
          contentType = (_d = response.headers) === null || _d === void 0 ? void 0 : _d.get("content-type");
          delimiter = "boundary=";
          boundaryVal = (contentType === null || contentType === void 0 ? void 0 : contentType.includes(delimiter)) ? contentType === null || contentType === void 0 ? void 0 : contentType.substring((contentType === null || contentType === void 0 ? void 0 : contentType.indexOf(delimiter)) + delimiter.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-";
          boundary = "\r\n--".concat(boundaryVal);
          buffer = "";
          iterator = responseIterator(response);
          running = true;
          _e.label = 1;
        case 1:
          if (!running) return [3, 3];
          return [4, iterator.next()];
        case 2:
          _a2 = _e.sent(), value = _a2.value, done = _a2.done;
          chunk = typeof value === "string" ? value : decoder.decode(value);
          searchFrom = buffer.length - boundary.length + 1;
          running = !done;
          buffer += chunk;
          bi = buffer.indexOf(boundary, searchFrom);
          while (bi > -1) {
            message = void 0;
            _b = [
              buffer.slice(0, bi),
              buffer.slice(bi + boundary.length)
            ], message = _b[0], buffer = _b[1];
            i = message.indexOf("\r\n\r\n");
            headers = parseHeaders(message.slice(0, i));
            contentType_1 = headers["content-type"];
            if (contentType_1 && contentType_1.toLowerCase().indexOf("application/json") === -1) {
              throw new Error("Unsupported patch content type: application/json is required.");
            }
            body = message.slice(i);
            if (body) {
              result2 = parseJsonBody(response, body);
              if (Object.keys(result2).length > 1 || "data" in result2 || "incremental" in result2 || "errors" in result2 || "payload" in result2) {
                if (isApolloPayloadResult(result2)) {
                  next = {};
                  if ("payload" in result2) {
                    if (Object.keys(result2).length === 1 && result2.payload === null) {
                      return [
                        2
                        /*return*/
                      ];
                    }
                    next = __assign({}, result2.payload);
                  }
                  if ("errors" in result2) {
                    next = __assign(__assign({}, next), { extensions: __assign(__assign({}, "extensions" in next ? next.extensions : null), (_c = {}, _c[PROTOCOL_ERRORS_SYMBOL] = result2.errors, _c)) });
                  }
                  nextValue(next);
                } else {
                  nextValue(result2);
                }
              } else if (
                // If the chunk contains only a "hasNext: false", we can call
                // observer.complete() immediately.
                Object.keys(result2).length === 1 && "hasNext" in result2 && !result2.hasNext
              ) {
                return [
                  2
                  /*return*/
                ];
              }
            }
            bi = buffer.indexOf(boundary);
          }
          return [3, 1];
        case 3:
          return [
            2
            /*return*/
          ];
      }
    });
  });
}
function parseHeaders(headerText) {
  var headersInit = {};
  headerText.split("\n").forEach(function(line) {
    var i = line.indexOf(":");
    if (i > -1) {
      var name_1 = line.slice(0, i).trim().toLowerCase();
      var value = line.slice(i + 1).trim();
      headersInit[name_1] = value;
    }
  });
  return headersInit;
}
function parseJsonBody(response, bodyText) {
  if (response.status >= 300) {
    var getResult = function() {
      try {
        return JSON.parse(bodyText);
      } catch (err) {
        return bodyText;
      }
    };
    throwServerError(response, getResult(), "Response not successful: Received status code ".concat(response.status));
  }
  try {
    return JSON.parse(bodyText);
  } catch (err) {
    var parseError = err;
    parseError.name = "ServerParseError";
    parseError.response = response;
    parseError.statusCode = response.status;
    parseError.bodyText = bodyText;
    throw parseError;
  }
}
function handleError(err, observer) {
  if (err.result && err.result.errors && err.result.data) {
    observer.next(err.result);
  }
  observer.error(err);
}
function parseAndCheckHttpResponse(operations) {
  return function(response) {
    return response.text().then(function(bodyText) {
      return parseJsonBody(response, bodyText);
    }).then(function(result2) {
      if (!Array.isArray(result2) && !hasOwnProperty4.call(result2, "data") && !hasOwnProperty4.call(result2, "errors")) {
        throwServerError(response, result2, "Server response was missing for query '".concat(Array.isArray(operations) ? operations.map(function(op) {
          return op.operationName;
        }) : operations.operationName, "'."));
      }
      return result2;
    });
  };
}

// node_modules/@apollo/client/link/http/serializeFetchParameter.js
var serializeFetchParameter = function(p, label) {
  var serialized;
  try {
    serialized = JSON.stringify(p);
  } catch (e) {
    var parseError = newInvariantError(54, label, e.message);
    parseError.parseError = e;
    throw parseError;
  }
  return serialized;
};

// node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js
var defaultHttpOptions = {
  includeQuery: true,
  includeExtensions: false,
  preserveHeaderCase: false
};
var defaultHeaders = {
  // headers are case insensitive (https://stackoverflow.com/a/5259004)
  accept: "*/*",
  // The content-type header describes the type of the body of the request, and
  // so it typically only is sent with requests that actually have bodies. One
  // could imagine that Apollo Client would remove this header when constructing
  // a GET request (which has no body), but we historically have not done that.
  // This means that browsers will preflight all Apollo Client requests (even
  // GET requests). Apollo Server's CSRF prevention feature (introduced in
  // AS3.7) takes advantage of this fact and does not block requests with this
  // header. If you want to drop this header from GET requests, then you should
  // probably replace it with a `apollo-require-preflight` header, or servers
  // with CSRF prevention enabled might block your GET request. See
  // https://www.apollographql.com/docs/apollo-server/security/cors/#preventing-cross-site-request-forgery-csrf
  // for more details.
  "content-type": "application/json"
};
var defaultOptions = {
  method: "POST"
};
var fallbackHttpConfig = {
  http: defaultHttpOptions,
  headers: defaultHeaders,
  options: defaultOptions
};
var defaultPrinter = function(ast, printer) {
  return printer(ast);
};
function selectHttpOptionsAndBodyInternal(operation, printer) {
  var configs = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    configs[_i - 2] = arguments[_i];
  }
  var options = {};
  var http = {};
  configs.forEach(function(config) {
    options = __assign(__assign(__assign({}, options), config.options), { headers: __assign(__assign({}, options.headers), config.headers) });
    if (config.credentials) {
      options.credentials = config.credentials;
    }
    http = __assign(__assign({}, http), config.http);
  });
  if (options.headers) {
    options.headers = removeDuplicateHeaders(options.headers, http.preserveHeaderCase);
  }
  var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
  var body = { operationName, variables };
  if (http.includeExtensions)
    body.extensions = extensions;
  if (http.includeQuery)
    body.query = printer(query, print2);
  return {
    options,
    body
  };
}
function removeDuplicateHeaders(headers, preserveHeaderCase) {
  if (!preserveHeaderCase) {
    var normalizedHeaders_1 = {};
    Object.keys(Object(headers)).forEach(function(name) {
      normalizedHeaders_1[name.toLowerCase()] = headers[name];
    });
    return normalizedHeaders_1;
  }
  var headerData = {};
  Object.keys(Object(headers)).forEach(function(name) {
    headerData[name.toLowerCase()] = {
      originalName: name,
      value: headers[name]
    };
  });
  var normalizedHeaders = {};
  Object.keys(headerData).forEach(function(name) {
    normalizedHeaders[headerData[name].originalName] = headerData[name].value;
  });
  return normalizedHeaders;
}

// node_modules/@apollo/client/link/http/checkFetcher.js
var checkFetcher = function(fetcher) {
  if (!fetcher && typeof fetch === "undefined") {
    throw newInvariantError(51);
  }
};

// node_modules/@apollo/client/link/http/selectURI.js
var selectURI = function(operation, fallbackURI) {
  var context = operation.getContext();
  var contextURI = context.uri;
  if (contextURI) {
    return contextURI;
  } else if (typeof fallbackURI === "function") {
    return fallbackURI(operation);
  } else {
    return fallbackURI || "/graphql";
  }
};

// node_modules/@apollo/client/link/http/rewriteURIForGET.js
function rewriteURIForGET(chosenURI, body) {
  var queryParams = [];
  var addQueryParam = function(key, value) {
    queryParams.push("".concat(key, "=").concat(encodeURIComponent(value)));
  };
  if ("query" in body) {
    addQueryParam("query", body.query);
  }
  if (body.operationName) {
    addQueryParam("operationName", body.operationName);
  }
  if (body.variables) {
    var serializedVariables = void 0;
    try {
      serializedVariables = serializeFetchParameter(body.variables, "Variables map");
    } catch (parseError) {
      return { parseError };
    }
    addQueryParam("variables", serializedVariables);
  }
  if (body.extensions) {
    var serializedExtensions = void 0;
    try {
      serializedExtensions = serializeFetchParameter(body.extensions, "Extensions map");
    } catch (parseError) {
      return { parseError };
    }
    addQueryParam("extensions", serializedExtensions);
  }
  var fragment = "", preFragment = chosenURI;
  var fragmentStart = chosenURI.indexOf("#");
  if (fragmentStart !== -1) {
    fragment = chosenURI.substr(fragmentStart);
    preFragment = chosenURI.substr(0, fragmentStart);
  }
  var queryParamsPrefix = preFragment.indexOf("?") === -1 ? "?" : "&";
  var newURI = preFragment + queryParamsPrefix + queryParams.join("&") + fragment;
  return { newURI };
}

// node_modules/@apollo/client/link/http/createHttpLink.js
var backupFetch = maybe(function() {
  return fetch;
});
var createHttpLink = function(linkOptions) {
  if (linkOptions === void 0) {
    linkOptions = {};
  }
  var _a2 = linkOptions.uri, uri = _a2 === void 0 ? "/graphql" : _a2, preferredFetch = linkOptions.fetch, _b = linkOptions.print, print3 = _b === void 0 ? defaultPrinter : _b, includeExtensions = linkOptions.includeExtensions, preserveHeaderCase = linkOptions.preserveHeaderCase, useGETForQueries = linkOptions.useGETForQueries, _c = linkOptions.includeUnusedVariables, includeUnusedVariables = _c === void 0 ? false : _c, requestOptions = __rest(linkOptions, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  if (globalThis.__DEV__ !== false) {
    checkFetcher(preferredFetch || backupFetch);
  }
  var linkConfig = {
    http: { includeExtensions, preserveHeaderCase },
    options: requestOptions.fetchOptions,
    credentials: requestOptions.credentials,
    headers: requestOptions.headers
  };
  return new ApolloLink(function(operation) {
    var chosenURI = selectURI(operation, uri);
    var context = operation.getContext();
    var clientAwarenessHeaders = {};
    if (context.clientAwareness) {
      var _a3 = context.clientAwareness, name_1 = _a3.name, version2 = _a3.version;
      if (name_1) {
        clientAwarenessHeaders["apollographql-client-name"] = name_1;
      }
      if (version2) {
        clientAwarenessHeaders["apollographql-client-version"] = version2;
      }
    }
    var contextHeaders = __assign(__assign({}, clientAwarenessHeaders), context.headers);
    var contextConfig = {
      http: context.http,
      options: context.fetchOptions,
      credentials: context.credentials,
      headers: contextHeaders
    };
    if (hasDirectives(["client"], operation.query)) {
      if (globalThis.__DEV__ !== false) {
        globalThis.__DEV__ !== false && invariant2.warn(52);
      }
      var transformedQuery = removeClientSetsFromDocument(operation.query);
      if (!transformedQuery) {
        return fromError(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
      }
      operation.query = transformedQuery;
    }
    var _b2 = selectHttpOptionsAndBodyInternal(operation, print3, fallbackHttpConfig, linkConfig, contextConfig), options = _b2.options, body = _b2.body;
    if (body.variables && !includeUnusedVariables) {
      body.variables = filterOperationVariables(body.variables, operation.query);
    }
    var controller;
    if (!options.signal && typeof AbortController !== "undefined") {
      controller = new AbortController();
      options.signal = controller.signal;
    }
    var definitionIsMutation = function(d) {
      return d.kind === "OperationDefinition" && d.operation === "mutation";
    };
    var definitionIsSubscription = function(d) {
      return d.kind === "OperationDefinition" && d.operation === "subscription";
    };
    var isSubscription = definitionIsSubscription(getMainDefinition(operation.query));
    var hasDefer = hasDirectives(["defer"], operation.query);
    if (useGETForQueries && !operation.query.definitions.some(definitionIsMutation)) {
      options.method = "GET";
    }
    if (hasDefer || isSubscription) {
      options.headers = options.headers || {};
      var acceptHeader = "multipart/mixed;";
      if (isSubscription && hasDefer) {
        globalThis.__DEV__ !== false && invariant2.warn(53);
      }
      if (isSubscription) {
        acceptHeader += "boundary=graphql;subscriptionSpec=1.0,application/json";
      } else if (hasDefer) {
        acceptHeader += "deferSpec=20220824,application/json";
      }
      options.headers.accept = acceptHeader;
    }
    if (options.method === "GET") {
      var _c2 = rewriteURIForGET(chosenURI, body), newURI = _c2.newURI, parseError = _c2.parseError;
      if (parseError) {
        return fromError(parseError);
      }
      chosenURI = newURI;
    } else {
      try {
        options.body = serializeFetchParameter(body, "Payload");
      } catch (parseError2) {
        return fromError(parseError2);
      }
    }
    return new Observable2(function(observer) {
      var currentFetch = preferredFetch || maybe(function() {
        return fetch;
      }) || backupFetch;
      var observerNext = observer.next.bind(observer);
      currentFetch(chosenURI, options).then(function(response) {
        var _a4;
        operation.setContext({ response });
        var ctype = (_a4 = response.headers) === null || _a4 === void 0 ? void 0 : _a4.get("content-type");
        if (ctype !== null && /^multipart\/mixed/i.test(ctype)) {
          return readMultipartBody(response, observerNext);
        } else {
          return parseAndCheckHttpResponse(operation)(response).then(observerNext);
        }
      }).then(function() {
        controller = void 0;
        observer.complete();
      }).catch(function(err) {
        controller = void 0;
        handleError(err, observer);
      });
      return function() {
        if (controller)
          controller.abort();
      };
    });
  });
};

// node_modules/@apollo/client/link/http/HttpLink.js
var HttpLink = (
  /** @class */
  (function(_super) {
    __extends(HttpLink3, _super);
    function HttpLink3(options) {
      if (options === void 0) {
        options = {};
      }
      var _this = _super.call(this, createHttpLink(options).request) || this;
      _this.options = options;
      return _this;
    }
    return HttpLink3;
  })(ApolloLink)
);

// node_modules/@wry/equality/lib/index.js
var { toString: toString2, hasOwnProperty: hasOwnProperty5 } = Object.prototype;
var fnToStr = Function.prototype.toString;
var previousComparisons = /* @__PURE__ */ new Map();
function equal(a, b) {
  try {
    return check(a, b);
  } finally {
    previousComparisons.clear();
  }
}
var lib_default = equal;
function check(a, b) {
  if (a === b) {
    return true;
  }
  const aTag = toString2.call(a);
  const bTag = toString2.call(b);
  if (aTag !== bTag) {
    return false;
  }
  switch (aTag) {
    case "[object Array]":
      if (a.length !== b.length)
        return false;
    // Fall through to object case...
    case "[object Object]": {
      if (previouslyCompared(a, b))
        return true;
      const aKeys = definedKeys(a);
      const bKeys = definedKeys(b);
      const keyCount = aKeys.length;
      if (keyCount !== bKeys.length)
        return false;
      for (let k = 0; k < keyCount; ++k) {
        if (!hasOwnProperty5.call(b, aKeys[k])) {
          return false;
        }
      }
      for (let k = 0; k < keyCount; ++k) {
        const key = aKeys[k];
        if (!check(a[key], b[key])) {
          return false;
        }
      }
      return true;
    }
    case "[object Error]":
      return a.name === b.name && a.message === b.message;
    case "[object Number]":
      if (a !== a)
        return b !== b;
    // Fall through to shared +a === +b case...
    case "[object Boolean]":
    case "[object Date]":
      return +a === +b;
    case "[object RegExp]":
    case "[object String]":
      return a == `${b}`;
    case "[object Map]":
    case "[object Set]": {
      if (a.size !== b.size)
        return false;
      if (previouslyCompared(a, b))
        return true;
      const aIterator = a.entries();
      const isMap = aTag === "[object Map]";
      while (true) {
        const info = aIterator.next();
        if (info.done)
          break;
        const [aKey, aValue] = info.value;
        if (!b.has(aKey)) {
          return false;
        }
        if (isMap && !check(aValue, b.get(aKey))) {
          return false;
        }
      }
      return true;
    }
    case "[object Uint16Array]":
    case "[object Uint8Array]":
    // Buffer, in Node.js.
    case "[object Uint32Array]":
    case "[object Int32Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object ArrayBuffer]":
      a = new Uint8Array(a);
      b = new Uint8Array(b);
    // Fall through...
    case "[object DataView]": {
      let len = a.byteLength;
      if (len === b.byteLength) {
        while (len-- && a[len] === b[len]) {
        }
      }
      return len === -1;
    }
    case "[object AsyncFunction]":
    case "[object GeneratorFunction]":
    case "[object AsyncGeneratorFunction]":
    case "[object Function]": {
      const aCode = fnToStr.call(a);
      if (aCode !== fnToStr.call(b)) {
        return false;
      }
      return !endsWith(aCode, nativeCodeSuffix);
    }
  }
  return false;
}
function definedKeys(obj) {
  return Object.keys(obj).filter(isDefinedKey, obj);
}
function isDefinedKey(key) {
  return this[key] !== void 0;
}
var nativeCodeSuffix = "{ [native code] }";
function endsWith(full, suffix) {
  const fromIndex = full.length - suffix.length;
  return fromIndex >= 0 && full.indexOf(suffix, fromIndex) === fromIndex;
}
function previouslyCompared(a, b) {
  let bSet = previousComparisons.get(a);
  if (bSet) {
    if (bSet.has(b))
      return true;
  } else {
    previousComparisons.set(a, bSet = /* @__PURE__ */ new Set());
  }
  bSet.add(b);
  return false;
}

// node_modules/@apollo/client/core/equalByQuery.js
function equalByQuery(query, _a2, _b, variables) {
  var aData = _a2.data, aRest = __rest(_a2, ["data"]);
  var bData = _b.data, bRest = __rest(_b, ["data"]);
  return lib_default(aRest, bRest) && equalBySelectionSet(getMainDefinition(query).selectionSet, aData, bData, {
    fragmentMap: createFragmentMap(getFragmentDefinitions(query)),
    variables
  });
}
function equalBySelectionSet(selectionSet, aResult, bResult, context) {
  if (aResult === bResult) {
    return true;
  }
  var seenSelections = /* @__PURE__ */ new Set();
  return selectionSet.selections.every(function(selection) {
    if (seenSelections.has(selection))
      return true;
    seenSelections.add(selection);
    if (!shouldInclude(selection, context.variables))
      return true;
    if (selectionHasNonreactiveDirective(selection))
      return true;
    if (isField(selection)) {
      var resultKey = resultKeyNameFromField(selection);
      var aResultChild = aResult && aResult[resultKey];
      var bResultChild = bResult && bResult[resultKey];
      var childSelectionSet = selection.selectionSet;
      if (!childSelectionSet) {
        return lib_default(aResultChild, bResultChild);
      }
      var aChildIsArray = Array.isArray(aResultChild);
      var bChildIsArray = Array.isArray(bResultChild);
      if (aChildIsArray !== bChildIsArray)
        return false;
      if (aChildIsArray && bChildIsArray) {
        var length_1 = aResultChild.length;
        if (bResultChild.length !== length_1) {
          return false;
        }
        for (var i = 0; i < length_1; ++i) {
          if (!equalBySelectionSet(childSelectionSet, aResultChild[i], bResultChild[i], context)) {
            return false;
          }
        }
        return true;
      }
      return equalBySelectionSet(childSelectionSet, aResultChild, bResultChild, context);
    } else {
      var fragment = getFragmentFromSelection(selection, context.fragmentMap);
      if (fragment) {
        if (selectionHasNonreactiveDirective(fragment))
          return true;
        return equalBySelectionSet(
          fragment.selectionSet,
          // Notice that we reuse the same aResult and bResult values here,
          // since the fragment ...spread does not specify a field name, but
          // consists of multiple fields (within the fragment's selection set)
          // that should be applied to the current result value(s).
          aResult,
          bResult,
          context
        );
      }
    }
  });
}
function selectionHasNonreactiveDirective(selection) {
  return !!selection.directives && selection.directives.some(directiveIsNonreactive);
}
function directiveIsNonreactive(dir) {
  return dir.name.value === "nonreactive";
}

// node_modules/@apollo/client/masking/utils.js
var MapImpl = canUseWeakMap ? WeakMap : Map;
var SetImpl = canUseWeakSet ? WeakSet : Set;
var disableWarningsSlot = new Slot();
var issuedWarning = false;
function warnOnImproperCacheImplementation() {
  if (!issuedWarning) {
    issuedWarning = true;
    globalThis.__DEV__ !== false && invariant2.warn(64);
  }
}

// node_modules/@apollo/client/masking/maskDefinition.js
function maskDefinition(data, selectionSet, context) {
  return disableWarningsSlot.withValue(true, function() {
    var masked = maskSelectionSet(data, selectionSet, context, false);
    if (Object.isFrozen(data)) {
      maybeDeepFreeze(masked);
    }
    return masked;
  });
}
function getMutableTarget(data, mutableTargets) {
  if (mutableTargets.has(data)) {
    return mutableTargets.get(data);
  }
  var mutableTarget = Array.isArray(data) ? [] : /* @__PURE__ */ Object.create(null);
  mutableTargets.set(data, mutableTarget);
  return mutableTarget;
}
function maskSelectionSet(data, selectionSet, context, migration, path) {
  var _a2;
  var knownChanged = context.knownChanged;
  var memo = getMutableTarget(data, context.mutableTargets);
  if (Array.isArray(data)) {
    for (var _i = 0, _b = Array.from(data.entries()); _i < _b.length; _i++) {
      var _c = _b[_i], index = _c[0], item = _c[1];
      if (item === null) {
        memo[index] = null;
        continue;
      }
      var masked = maskSelectionSet(item, selectionSet, context, migration, globalThis.__DEV__ !== false ? "".concat(path || "", "[").concat(index, "]") : void 0);
      if (knownChanged.has(masked)) {
        knownChanged.add(memo);
      }
      memo[index] = masked;
    }
    return knownChanged.has(memo) ? memo : data;
  }
  for (var _d = 0, _e = selectionSet.selections; _d < _e.length; _d++) {
    var selection = _e[_d];
    var value = void 0;
    if (migration) {
      knownChanged.add(memo);
    }
    if (selection.kind === Kind.FIELD) {
      var keyName = resultKeyNameFromField(selection);
      var childSelectionSet = selection.selectionSet;
      value = memo[keyName] || data[keyName];
      if (value === void 0) {
        continue;
      }
      if (childSelectionSet && value !== null) {
        var masked = maskSelectionSet(data[keyName], childSelectionSet, context, migration, globalThis.__DEV__ !== false ? "".concat(path || "", ".").concat(keyName) : void 0);
        if (knownChanged.has(masked)) {
          value = masked;
        }
      }
      if (!(globalThis.__DEV__ !== false)) {
        memo[keyName] = value;
      }
      if (globalThis.__DEV__ !== false) {
        if (migration && keyName !== "__typename" && // either the field is not present in the memo object
        // or it has a `get` descriptor, not a `value` descriptor
        // => it is a warning accessor and we can overwrite it
        // with another accessor
        !((_a2 = Object.getOwnPropertyDescriptor(memo, keyName)) === null || _a2 === void 0 ? void 0 : _a2.value)) {
          Object.defineProperty(memo, keyName, getAccessorWarningDescriptor(keyName, value, path || "", context.operationName, context.operationType));
        } else {
          delete memo[keyName];
          memo[keyName] = value;
        }
      }
    }
    if (selection.kind === Kind.INLINE_FRAGMENT && (!selection.typeCondition || context.cache.fragmentMatches(selection, data.__typename))) {
      value = maskSelectionSet(data, selection.selectionSet, context, migration, path);
    }
    if (selection.kind === Kind.FRAGMENT_SPREAD) {
      var fragmentName = selection.name.value;
      var fragment = context.fragmentMap[fragmentName] || (context.fragmentMap[fragmentName] = context.cache.lookupFragment(fragmentName));
      invariant2(fragment, 59, fragmentName);
      var mode = getFragmentMaskMode(selection);
      if (mode !== "mask") {
        value = maskSelectionSet(data, fragment.selectionSet, context, mode === "migrate", path);
      }
    }
    if (knownChanged.has(value)) {
      knownChanged.add(memo);
    }
  }
  if ("__typename" in data && !("__typename" in memo)) {
    memo.__typename = data.__typename;
  }
  if (Object.keys(memo).length !== Object.keys(data).length) {
    knownChanged.add(memo);
  }
  return knownChanged.has(memo) ? memo : data;
}
function getAccessorWarningDescriptor(fieldName, value, path, operationName, operationType) {
  var getValue = function() {
    if (disableWarningsSlot.getValue()) {
      return value;
    }
    globalThis.__DEV__ !== false && invariant2.warn(60, operationName ? "".concat(operationType, " '").concat(operationName, "'") : "anonymous ".concat(operationType), "".concat(path, ".").concat(fieldName).replace(/^\./, ""));
    getValue = function() {
      return value;
    };
    return value;
  };
  return {
    get: function() {
      return getValue();
    },
    set: function(newValue) {
      getValue = function() {
        return newValue;
      };
    },
    enumerable: true,
    configurable: true
  };
}

// node_modules/@apollo/client/masking/maskFragment.js
function maskFragment(data, document2, cache, fragmentName) {
  if (!cache.fragmentMatches) {
    if (globalThis.__DEV__ !== false) {
      warnOnImproperCacheImplementation();
    }
    return data;
  }
  var fragments = document2.definitions.filter(function(node) {
    return node.kind === Kind.FRAGMENT_DEFINITION;
  });
  if (typeof fragmentName === "undefined") {
    invariant2(fragments.length === 1, 61, fragments.length);
    fragmentName = fragments[0].name.value;
  }
  var fragment = fragments.find(function(fragment2) {
    return fragment2.name.value === fragmentName;
  });
  invariant2(!!fragment, 62, fragmentName);
  if (data == null) {
    return data;
  }
  if (lib_default(data, {})) {
    return data;
  }
  return maskDefinition(data, fragment.selectionSet, {
    operationType: "fragment",
    operationName: fragment.name.value,
    fragmentMap: createFragmentMap(getFragmentDefinitions(document2)),
    cache,
    mutableTargets: new MapImpl(),
    knownChanged: new SetImpl()
  });
}

// node_modules/@apollo/client/masking/maskOperation.js
function maskOperation(data, document2, cache) {
  var _a2;
  if (!cache.fragmentMatches) {
    if (globalThis.__DEV__ !== false) {
      warnOnImproperCacheImplementation();
    }
    return data;
  }
  var definition = getOperationDefinition(document2);
  invariant2(definition, 63);
  if (data == null) {
    return data;
  }
  return maskDefinition(data, definition.selectionSet, {
    operationType: definition.operation,
    operationName: (_a2 = definition.name) === null || _a2 === void 0 ? void 0 : _a2.value,
    fragmentMap: createFragmentMap(getFragmentDefinitions(document2)),
    cache,
    mutableTargets: new MapImpl(),
    knownChanged: new SetImpl()
  });
}

// node_modules/@apollo/client/cache/core/cache.js
var ApolloCache = (
  /** @class */
  (function() {
    function ApolloCache2() {
      this.assumeImmutableResults = false;
      this.getFragmentDoc = wrap3(getFragmentQueryDocument, {
        max: cacheSizes["cache.fragmentQueryDocuments"] || 1e3,
        cache: WeakCache
      });
    }
    ApolloCache2.prototype.lookupFragment = function(fragmentName) {
      return null;
    };
    ApolloCache2.prototype.batch = function(options) {
      var _this = this;
      var optimisticId = typeof options.optimistic === "string" ? options.optimistic : options.optimistic === false ? null : void 0;
      var updateResult;
      this.performTransaction(function() {
        return updateResult = options.update(_this);
      }, optimisticId);
      return updateResult;
    };
    ApolloCache2.prototype.recordOptimisticTransaction = function(transaction, optimisticId) {
      this.performTransaction(transaction, optimisticId);
    };
    ApolloCache2.prototype.transformDocument = function(document2) {
      return document2;
    };
    ApolloCache2.prototype.transformForLink = function(document2) {
      return document2;
    };
    ApolloCache2.prototype.identify = function(object) {
      return;
    };
    ApolloCache2.prototype.gc = function() {
      return [];
    };
    ApolloCache2.prototype.modify = function(options) {
      return false;
    };
    ApolloCache2.prototype.readQuery = function(options, optimistic) {
      var _this = this;
      if (optimistic === void 0) {
        optimistic = !!options.optimistic;
      }
      if (globalThis.__DEV__ !== false) {
        warnRemovedOption(options, "canonizeResults", "cache.readQuery");
      }
      return muteDeprecations("canonizeResults", function() {
        return _this.read(__assign(__assign({}, options), { rootId: options.id || "ROOT_QUERY", optimistic }));
      });
    };
    ApolloCache2.prototype.watchFragment = function(options) {
      var _this = this;
      var fragment = options.fragment, fragmentName = options.fragmentName, from2 = options.from, _a2 = options.optimistic, optimistic = _a2 === void 0 ? true : _a2, otherOptions = __rest(options, ["fragment", "fragmentName", "from", "optimistic"]);
      var query = this.getFragmentDoc(fragment, fragmentName);
      var id = typeof from2 === "undefined" || typeof from2 === "string" ? from2 : this.identify(from2);
      var dataMasking = !!options[Symbol.for("apollo.dataMasking")];
      if (globalThis.__DEV__ !== false) {
        var actualFragmentName = fragmentName || getFragmentDefinition(fragment).name.value;
        if (!id) {
          globalThis.__DEV__ !== false && invariant2.warn(1, actualFragmentName);
        }
      }
      var diffOptions = __assign(__assign({}, otherOptions), { returnPartialData: true, id, query, optimistic });
      var latestDiff;
      return new Observable2(function(observer) {
        return _this.watch(__assign(__assign({}, diffOptions), { immediate: true, callback: function(diff) {
          var data = dataMasking ? maskFragment(diff.result, fragment, _this, fragmentName) : diff.result;
          if (
            // Always ensure we deliver the first result
            latestDiff && equalByQuery(
              query,
              { data: latestDiff.result },
              { data },
              // TODO: Fix the type on WatchFragmentOptions so that TVars
              // extends OperationVariables
              options.variables
            )
          ) {
            return;
          }
          var result2 = {
            data,
            complete: !!diff.complete
          };
          if (diff.missing) {
            result2.missing = mergeDeepArray(diff.missing.map(function(error) {
              return error.missing;
            }));
          }
          latestDiff = __assign(__assign({}, diff), { result: data });
          observer.next(result2);
        } }));
      });
    };
    ApolloCache2.prototype.readFragment = function(options, optimistic) {
      var _this = this;
      if (optimistic === void 0) {
        optimistic = !!options.optimistic;
      }
      if (globalThis.__DEV__ !== false) {
        warnRemovedOption(options, "canonizeResults", "cache.readFragment");
      }
      return muteDeprecations("canonizeResults", function() {
        return _this.read(__assign(__assign({}, options), { query: _this.getFragmentDoc(options.fragment, options.fragmentName), rootId: options.id, optimistic }));
      });
    };
    ApolloCache2.prototype.writeQuery = function(_a2) {
      var id = _a2.id, data = _a2.data, options = __rest(_a2, ["id", "data"]);
      return this.write(Object.assign(options, {
        dataId: id || "ROOT_QUERY",
        result: data
      }));
    };
    ApolloCache2.prototype.writeFragment = function(_a2) {
      var id = _a2.id, data = _a2.data, fragment = _a2.fragment, fragmentName = _a2.fragmentName, options = __rest(_a2, ["id", "data", "fragment", "fragmentName"]);
      return this.write(Object.assign(options, {
        query: this.getFragmentDoc(fragment, fragmentName),
        dataId: id,
        result: data
      }));
    };
    ApolloCache2.prototype.updateQuery = function(options, update) {
      if (globalThis.__DEV__ !== false) {
        warnRemovedOption(options, "canonizeResults", "cache.updateQuery");
      }
      return this.batch({
        update: function(cache) {
          var value = muteDeprecations("canonizeResults", function() {
            return cache.readQuery(options);
          });
          var data = update(value);
          if (data === void 0 || data === null)
            return value;
          cache.writeQuery(__assign(__assign({}, options), { data }));
          return data;
        }
      });
    };
    ApolloCache2.prototype.updateFragment = function(options, update) {
      if (globalThis.__DEV__ !== false) {
        warnRemovedOption(options, "canonizeResults", "cache.updateFragment");
      }
      return this.batch({
        update: function(cache) {
          var value = muteDeprecations("canonizeResults", function() {
            return cache.readFragment(options);
          });
          var data = update(value);
          if (data === void 0 || data === null)
            return value;
          cache.writeFragment(__assign(__assign({}, options), { data }));
          return data;
        }
      });
    };
    return ApolloCache2;
  })()
);
if (globalThis.__DEV__ !== false) {
  ApolloCache.prototype.getMemoryInternals = getApolloCacheMemoryInternals;
}

// node_modules/@apollo/client/cache/core/types/common.js
var MissingFieldError = (
  /** @class */
  (function(_super) {
    __extends(MissingFieldError2, _super);
    function MissingFieldError2(message, path, query, variables) {
      var _a2;
      var _this = _super.call(this, message) || this;
      _this.message = message;
      _this.path = path;
      _this.query = query;
      _this.variables = variables;
      if (Array.isArray(_this.path)) {
        _this.missing = _this.message;
        for (var i = _this.path.length - 1; i >= 0; --i) {
          _this.missing = (_a2 = {}, _a2[_this.path[i]] = _this.missing, _a2);
        }
      } else {
        _this.missing = _this.path;
      }
      _this.__proto__ = MissingFieldError2.prototype;
      return _this;
    }
    return MissingFieldError2;
  })(Error)
);

// node_modules/@apollo/client/cache/inmemory/helpers.js
var hasOwn = Object.prototype.hasOwnProperty;
function isNullish(value) {
  return value === null || value === void 0;
}
function defaultDataIdFromObject(_a2, context) {
  var __typename = _a2.__typename, id = _a2.id, _id = _a2._id;
  if (typeof __typename === "string") {
    if (context) {
      context.keyObject = !isNullish(id) ? { id } : !isNullish(_id) ? { _id } : void 0;
    }
    if (isNullish(id) && !isNullish(_id)) {
      id = _id;
    }
    if (!isNullish(id)) {
      return "".concat(__typename, ":").concat(typeof id === "number" || typeof id === "string" ? id : JSON.stringify(id));
    }
  }
}
var defaultConfig = {
  dataIdFromObject: defaultDataIdFromObject,
  addTypename: true,
  resultCaching: true,
  // Thanks to the shouldCanonizeResults helper, this should be the only line
  // you have to change to reenable canonization by default in the future.
  canonizeResults: false
};
function normalizeConfig(config) {
  return compact(defaultConfig, config);
}
function shouldCanonizeResults(config) {
  var value = config.canonizeResults;
  return value === void 0 ? defaultConfig.canonizeResults : value;
}
function getTypenameFromStoreObject(store, objectOrReference) {
  return isReference(objectOrReference) ? store.get(objectOrReference.__ref, "__typename") : objectOrReference && objectOrReference.__typename;
}
var TypeOrFieldNameRegExp = /^[_a-z][_0-9a-z]*/i;
function fieldNameFromStoreName(storeFieldName) {
  var match2 = storeFieldName.match(TypeOrFieldNameRegExp);
  return match2 ? match2[0] : storeFieldName;
}
function selectionSetMatchesResult(selectionSet, result2, variables) {
  if (isNonNullObject(result2)) {
    return isArray(result2) ? result2.every(function(item) {
      return selectionSetMatchesResult(selectionSet, item, variables);
    }) : selectionSet.selections.every(function(field) {
      if (isField(field) && shouldInclude(field, variables)) {
        var key = resultKeyNameFromField(field);
        return hasOwn.call(result2, key) && (!field.selectionSet || selectionSetMatchesResult(field.selectionSet, result2[key], variables));
      }
      return true;
    });
  }
  return false;
}
function storeValueIsStoreObject(value) {
  return isNonNullObject(value) && !isReference(value) && !isArray(value);
}
function makeProcessedFieldsMerger() {
  return new DeepMerger();
}
function extractFragmentContext(document2, fragments) {
  var fragmentMap = createFragmentMap(getFragmentDefinitions(document2));
  return {
    fragmentMap,
    lookupFragment: function(name) {
      var def = fragmentMap[name];
      if (!def && fragments) {
        def = fragments.lookup(name);
      }
      return def || null;
    }
  };
}

// node_modules/@apollo/client/cache/inmemory/entityStore.js
var DELETE = /* @__PURE__ */ Object.create(null);
var delModifier = function() {
  return DELETE;
};
var INVALIDATE = /* @__PURE__ */ Object.create(null);
var EntityStore = (
  /** @class */
  (function() {
    function EntityStore2(policies, group) {
      var _this = this;
      this.policies = policies;
      this.group = group;
      this.data = /* @__PURE__ */ Object.create(null);
      this.rootIds = /* @__PURE__ */ Object.create(null);
      this.refs = /* @__PURE__ */ Object.create(null);
      this.getFieldValue = function(objectOrReference, storeFieldName) {
        return maybeDeepFreeze(isReference(objectOrReference) ? _this.get(objectOrReference.__ref, storeFieldName) : objectOrReference && objectOrReference[storeFieldName]);
      };
      this.canRead = function(objOrRef) {
        return isReference(objOrRef) ? _this.has(objOrRef.__ref) : typeof objOrRef === "object";
      };
      this.toReference = function(objOrIdOrRef, mergeIntoStore) {
        if (typeof objOrIdOrRef === "string") {
          return makeReference(objOrIdOrRef);
        }
        if (isReference(objOrIdOrRef)) {
          return objOrIdOrRef;
        }
        var id = _this.policies.identify(objOrIdOrRef)[0];
        if (id) {
          var ref = makeReference(id);
          if (mergeIntoStore) {
            _this.merge(id, objOrIdOrRef);
          }
          return ref;
        }
      };
    }
    EntityStore2.prototype.toObject = function() {
      return __assign({}, this.data);
    };
    EntityStore2.prototype.has = function(dataId) {
      return this.lookup(dataId, true) !== void 0;
    };
    EntityStore2.prototype.get = function(dataId, fieldName) {
      this.group.depend(dataId, fieldName);
      if (hasOwn.call(this.data, dataId)) {
        var storeObject = this.data[dataId];
        if (storeObject && hasOwn.call(storeObject, fieldName)) {
          return storeObject[fieldName];
        }
      }
      if (fieldName === "__typename" && hasOwn.call(this.policies.rootTypenamesById, dataId)) {
        return this.policies.rootTypenamesById[dataId];
      }
      if (this instanceof Layer) {
        return this.parent.get(dataId, fieldName);
      }
    };
    EntityStore2.prototype.lookup = function(dataId, dependOnExistence) {
      if (dependOnExistence)
        this.group.depend(dataId, "__exists");
      if (hasOwn.call(this.data, dataId)) {
        return this.data[dataId];
      }
      if (this instanceof Layer) {
        return this.parent.lookup(dataId, dependOnExistence);
      }
      if (this.policies.rootTypenamesById[dataId]) {
        return /* @__PURE__ */ Object.create(null);
      }
    };
    EntityStore2.prototype.merge = function(older, newer) {
      var _this = this;
      var dataId;
      if (isReference(older))
        older = older.__ref;
      if (isReference(newer))
        newer = newer.__ref;
      var existing = typeof older === "string" ? this.lookup(dataId = older) : older;
      var incoming = typeof newer === "string" ? this.lookup(dataId = newer) : newer;
      if (!incoming)
        return;
      invariant2(typeof dataId === "string", 2);
      var merged = new DeepMerger(storeObjectReconciler).merge(existing, incoming);
      this.data[dataId] = merged;
      if (merged !== existing) {
        delete this.refs[dataId];
        if (this.group.caching) {
          var fieldsToDirty_1 = /* @__PURE__ */ Object.create(null);
          if (!existing)
            fieldsToDirty_1.__exists = 1;
          Object.keys(incoming).forEach(function(storeFieldName) {
            if (!existing || existing[storeFieldName] !== merged[storeFieldName]) {
              fieldsToDirty_1[storeFieldName] = 1;
              var fieldName = fieldNameFromStoreName(storeFieldName);
              if (fieldName !== storeFieldName && !_this.policies.hasKeyArgs(merged.__typename, fieldName)) {
                fieldsToDirty_1[fieldName] = 1;
              }
              if (merged[storeFieldName] === void 0 && !(_this instanceof Layer)) {
                delete merged[storeFieldName];
              }
            }
          });
          if (fieldsToDirty_1.__typename && !(existing && existing.__typename) && // Since we return default root __typename strings
          // automatically from store.get, we don't need to dirty the
          // ROOT_QUERY.__typename field if merged.__typename is equal
          // to the default string (usually "Query").
          this.policies.rootTypenamesById[dataId] === merged.__typename) {
            delete fieldsToDirty_1.__typename;
          }
          Object.keys(fieldsToDirty_1).forEach(function(fieldName) {
            return _this.group.dirty(dataId, fieldName);
          });
        }
      }
    };
    EntityStore2.prototype.modify = function(dataId, fields) {
      var _this = this;
      var storeObject = this.lookup(dataId);
      if (storeObject) {
        var changedFields_1 = /* @__PURE__ */ Object.create(null);
        var needToMerge_1 = false;
        var allDeleted_1 = true;
        var sharedDetails_1 = {
          DELETE,
          INVALIDATE,
          isReference,
          toReference: this.toReference,
          canRead: this.canRead,
          readField: function(fieldNameOrOptions, from2) {
            return _this.policies.readField(typeof fieldNameOrOptions === "string" ? {
              fieldName: fieldNameOrOptions,
              from: from2 || makeReference(dataId)
            } : fieldNameOrOptions, { store: _this });
          }
        };
        Object.keys(storeObject).forEach(function(storeFieldName) {
          var fieldName = fieldNameFromStoreName(storeFieldName);
          var fieldValue = storeObject[storeFieldName];
          if (fieldValue === void 0)
            return;
          var modify = typeof fields === "function" ? fields : fields[storeFieldName] || fields[fieldName];
          if (modify) {
            var newValue = modify === delModifier ? DELETE : modify(maybeDeepFreeze(fieldValue), __assign(__assign({}, sharedDetails_1), { fieldName, storeFieldName, storage: _this.getStorage(dataId, storeFieldName) }));
            if (newValue === INVALIDATE) {
              _this.group.dirty(dataId, storeFieldName);
            } else {
              if (newValue === DELETE)
                newValue = void 0;
              if (newValue !== fieldValue) {
                changedFields_1[storeFieldName] = newValue;
                needToMerge_1 = true;
                fieldValue = newValue;
                if (globalThis.__DEV__ !== false) {
                  var checkReference = function(ref) {
                    if (_this.lookup(ref.__ref) === void 0) {
                      globalThis.__DEV__ !== false && invariant2.warn(3, ref);
                      return true;
                    }
                  };
                  if (isReference(newValue)) {
                    checkReference(newValue);
                  } else if (Array.isArray(newValue)) {
                    var seenReference = false;
                    var someNonReference = void 0;
                    for (var _i = 0, newValue_1 = newValue; _i < newValue_1.length; _i++) {
                      var value = newValue_1[_i];
                      if (isReference(value)) {
                        seenReference = true;
                        if (checkReference(value))
                          break;
                      } else {
                        if (typeof value === "object" && !!value) {
                          var id = _this.policies.identify(value)[0];
                          if (id) {
                            someNonReference = value;
                          }
                        }
                      }
                      if (seenReference && someNonReference !== void 0) {
                        globalThis.__DEV__ !== false && invariant2.warn(4, someNonReference);
                        break;
                      }
                    }
                  }
                }
              }
            }
          }
          if (fieldValue !== void 0) {
            allDeleted_1 = false;
          }
        });
        if (needToMerge_1) {
          this.merge(dataId, changedFields_1);
          if (allDeleted_1) {
            if (this instanceof Layer) {
              this.data[dataId] = void 0;
            } else {
              delete this.data[dataId];
            }
            this.group.dirty(dataId, "__exists");
          }
          return true;
        }
      }
      return false;
    };
    EntityStore2.prototype.delete = function(dataId, fieldName, args) {
      var _a2;
      var storeObject = this.lookup(dataId);
      if (storeObject) {
        var typename = this.getFieldValue(storeObject, "__typename");
        var storeFieldName = fieldName && args ? this.policies.getStoreFieldName({ typename, fieldName, args }) : fieldName;
        return this.modify(dataId, storeFieldName ? (_a2 = {}, _a2[storeFieldName] = delModifier, _a2) : delModifier);
      }
      return false;
    };
    EntityStore2.prototype.evict = function(options, limit) {
      var evicted = false;
      if (options.id) {
        if (hasOwn.call(this.data, options.id)) {
          evicted = this.delete(options.id, options.fieldName, options.args);
        }
        if (this instanceof Layer && this !== limit) {
          evicted = this.parent.evict(options, limit) || evicted;
        }
        if (options.fieldName || evicted) {
          this.group.dirty(options.id, options.fieldName || "__exists");
        }
      }
      return evicted;
    };
    EntityStore2.prototype.clear = function() {
      this.replace(null);
    };
    EntityStore2.prototype.extract = function() {
      var _this = this;
      var obj = this.toObject();
      var extraRootIds = [];
      this.getRootIdSet().forEach(function(id) {
        if (!hasOwn.call(_this.policies.rootTypenamesById, id)) {
          extraRootIds.push(id);
        }
      });
      if (extraRootIds.length) {
        obj.__META = { extraRootIds: extraRootIds.sort() };
      }
      return obj;
    };
    EntityStore2.prototype.replace = function(newData) {
      var _this = this;
      Object.keys(this.data).forEach(function(dataId) {
        if (!(newData && hasOwn.call(newData, dataId))) {
          _this.delete(dataId);
        }
      });
      if (newData) {
        var __META = newData.__META, rest_1 = __rest(newData, ["__META"]);
        Object.keys(rest_1).forEach(function(dataId) {
          _this.merge(dataId, rest_1[dataId]);
        });
        if (__META) {
          __META.extraRootIds.forEach(this.retain, this);
        }
      }
    };
    EntityStore2.prototype.retain = function(rootId) {
      return this.rootIds[rootId] = (this.rootIds[rootId] || 0) + 1;
    };
    EntityStore2.prototype.release = function(rootId) {
      if (this.rootIds[rootId] > 0) {
        var count = --this.rootIds[rootId];
        if (!count)
          delete this.rootIds[rootId];
        return count;
      }
      return 0;
    };
    EntityStore2.prototype.getRootIdSet = function(ids) {
      if (ids === void 0) {
        ids = /* @__PURE__ */ new Set();
      }
      Object.keys(this.rootIds).forEach(ids.add, ids);
      if (this instanceof Layer) {
        this.parent.getRootIdSet(ids);
      } else {
        Object.keys(this.policies.rootTypenamesById).forEach(ids.add, ids);
      }
      return ids;
    };
    EntityStore2.prototype.gc = function() {
      var _this = this;
      var ids = this.getRootIdSet();
      var snapshot = this.toObject();
      ids.forEach(function(id) {
        if (hasOwn.call(snapshot, id)) {
          Object.keys(_this.findChildRefIds(id)).forEach(ids.add, ids);
          delete snapshot[id];
        }
      });
      var idsToRemove = Object.keys(snapshot);
      if (idsToRemove.length) {
        var root_1 = this;
        while (root_1 instanceof Layer)
          root_1 = root_1.parent;
        idsToRemove.forEach(function(id) {
          return root_1.delete(id);
        });
      }
      return idsToRemove;
    };
    EntityStore2.prototype.findChildRefIds = function(dataId) {
      if (!hasOwn.call(this.refs, dataId)) {
        var found_1 = this.refs[dataId] = /* @__PURE__ */ Object.create(null);
        var root2 = this.data[dataId];
        if (!root2)
          return found_1;
        var workSet_1 = /* @__PURE__ */ new Set([root2]);
        workSet_1.forEach(function(obj) {
          if (isReference(obj)) {
            found_1[obj.__ref] = true;
          }
          if (isNonNullObject(obj)) {
            Object.keys(obj).forEach(function(key) {
              var child = obj[key];
              if (isNonNullObject(child)) {
                workSet_1.add(child);
              }
            });
          }
        });
      }
      return this.refs[dataId];
    };
    EntityStore2.prototype.makeCacheKey = function() {
      return this.group.keyMaker.lookupArray(arguments);
    };
    return EntityStore2;
  })()
);
var CacheGroup = (
  /** @class */
  (function() {
    function CacheGroup2(caching, parent) {
      if (parent === void 0) {
        parent = null;
      }
      this.caching = caching;
      this.parent = parent;
      this.d = null;
      this.resetCaching();
    }
    CacheGroup2.prototype.resetCaching = function() {
      this.d = this.caching ? dep() : null;
      this.keyMaker = new Trie(canUseWeakMap);
    };
    CacheGroup2.prototype.depend = function(dataId, storeFieldName) {
      if (this.d) {
        this.d(makeDepKey(dataId, storeFieldName));
        var fieldName = fieldNameFromStoreName(storeFieldName);
        if (fieldName !== storeFieldName) {
          this.d(makeDepKey(dataId, fieldName));
        }
        if (this.parent) {
          this.parent.depend(dataId, storeFieldName);
        }
      }
    };
    CacheGroup2.prototype.dirty = function(dataId, storeFieldName) {
      if (this.d) {
        this.d.dirty(
          makeDepKey(dataId, storeFieldName),
          // When storeFieldName === "__exists", that means the entity identified
          // by dataId has either disappeared from the cache or was newly added,
          // so the result caching system would do well to "forget everything it
          // knows" about that object. To achieve that kind of invalidation, we
          // not only dirty the associated result cache entry, but also remove it
          // completely from the dependency graph. For the optimism implementation
          // details, see https://github.com/benjamn/optimism/pull/195.
          storeFieldName === "__exists" ? "forget" : "setDirty"
        );
      }
    };
    return CacheGroup2;
  })()
);
function makeDepKey(dataId, storeFieldName) {
  return storeFieldName + "#" + dataId;
}
function maybeDependOnExistenceOfEntity(store, entityId) {
  if (supportsResultCaching(store)) {
    store.group.depend(entityId, "__exists");
  }
}
(function(EntityStore2) {
  var Root = (
    /** @class */
    (function(_super) {
      __extends(Root2, _super);
      function Root2(_a2) {
        var policies = _a2.policies, _b = _a2.resultCaching, resultCaching = _b === void 0 ? true : _b, seed = _a2.seed;
        var _this = _super.call(this, policies, new CacheGroup(resultCaching)) || this;
        _this.stump = new Stump(_this);
        _this.storageTrie = new Trie(canUseWeakMap);
        if (seed)
          _this.replace(seed);
        return _this;
      }
      Root2.prototype.addLayer = function(layerId, replay) {
        return this.stump.addLayer(layerId, replay);
      };
      Root2.prototype.removeLayer = function() {
        return this;
      };
      Root2.prototype.getStorage = function() {
        return this.storageTrie.lookupArray(arguments);
      };
      return Root2;
    })(EntityStore2)
  );
  EntityStore2.Root = Root;
})(EntityStore || (EntityStore = {}));
var Layer = (
  /** @class */
  (function(_super) {
    __extends(Layer2, _super);
    function Layer2(id, parent, replay, group) {
      var _this = _super.call(this, parent.policies, group) || this;
      _this.id = id;
      _this.parent = parent;
      _this.replay = replay;
      _this.group = group;
      replay(_this);
      return _this;
    }
    Layer2.prototype.addLayer = function(layerId, replay) {
      return new Layer2(layerId, this, replay, this.group);
    };
    Layer2.prototype.removeLayer = function(layerId) {
      var _this = this;
      var parent = this.parent.removeLayer(layerId);
      if (layerId === this.id) {
        if (this.group.caching) {
          Object.keys(this.data).forEach(function(dataId) {
            var ownStoreObject = _this.data[dataId];
            var parentStoreObject = parent["lookup"](dataId);
            if (!parentStoreObject) {
              _this.delete(dataId);
            } else if (!ownStoreObject) {
              _this.group.dirty(dataId, "__exists");
              Object.keys(parentStoreObject).forEach(function(storeFieldName) {
                _this.group.dirty(dataId, storeFieldName);
              });
            } else if (ownStoreObject !== parentStoreObject) {
              Object.keys(ownStoreObject).forEach(function(storeFieldName) {
                if (!equal(ownStoreObject[storeFieldName], parentStoreObject[storeFieldName])) {
                  _this.group.dirty(dataId, storeFieldName);
                }
              });
            }
          });
        }
        return parent;
      }
      if (parent === this.parent)
        return this;
      return parent.addLayer(this.id, this.replay);
    };
    Layer2.prototype.toObject = function() {
      return __assign(__assign({}, this.parent.toObject()), this.data);
    };
    Layer2.prototype.findChildRefIds = function(dataId) {
      var fromParent = this.parent.findChildRefIds(dataId);
      return hasOwn.call(this.data, dataId) ? __assign(__assign({}, fromParent), _super.prototype.findChildRefIds.call(this, dataId)) : fromParent;
    };
    Layer2.prototype.getStorage = function() {
      var p = this.parent;
      while (p.parent)
        p = p.parent;
      return p.getStorage.apply(
        p,
        // @ts-expect-error
        arguments
      );
    };
    return Layer2;
  })(EntityStore)
);
var Stump = (
  /** @class */
  (function(_super) {
    __extends(Stump2, _super);
    function Stump2(root2) {
      return _super.call(this, "EntityStore.Stump", root2, function() {
      }, new CacheGroup(root2.group.caching, root2.group)) || this;
    }
    Stump2.prototype.removeLayer = function() {
      return this;
    };
    Stump2.prototype.merge = function(older, newer) {
      return this.parent.merge(older, newer);
    };
    return Stump2;
  })(Layer)
);
function storeObjectReconciler(existingObject, incomingObject, property) {
  var existingValue = existingObject[property];
  var incomingValue = incomingObject[property];
  return equal(existingValue, incomingValue) ? existingValue : incomingValue;
}
function supportsResultCaching(store) {
  return !!(store instanceof EntityStore && store.group.caching);
}

// node_modules/@apollo/client/cache/inmemory/object-canon.js
function shallowCopy(value) {
  if (isNonNullObject(value)) {
    return isArray(value) ? value.slice(0) : __assign({ __proto__: Object.getPrototypeOf(value) }, value);
  }
  return value;
}
var ObjectCanon = (
  /** @class */
  (function() {
    function ObjectCanon2() {
      this.known = new (canUseWeakSet ? WeakSet : Set)();
      this.pool = new Trie(canUseWeakMap);
      this.passes = /* @__PURE__ */ new WeakMap();
      this.keysByJSON = /* @__PURE__ */ new Map();
      this.empty = this.admit({});
    }
    ObjectCanon2.prototype.isKnown = function(value) {
      return isNonNullObject(value) && this.known.has(value);
    };
    ObjectCanon2.prototype.pass = function(value) {
      if (isNonNullObject(value)) {
        var copy = shallowCopy(value);
        this.passes.set(copy, value);
        return copy;
      }
      return value;
    };
    ObjectCanon2.prototype.admit = function(value) {
      var _this = this;
      if (isNonNullObject(value)) {
        var original = this.passes.get(value);
        if (original)
          return original;
        var proto = Object.getPrototypeOf(value);
        switch (proto) {
          case Array.prototype: {
            if (this.known.has(value))
              return value;
            var array = value.map(this.admit, this);
            var node = this.pool.lookupArray(array);
            if (!node.array) {
              this.known.add(node.array = array);
              if (globalThis.__DEV__ !== false) {
                Object.freeze(array);
              }
            }
            return node.array;
          }
          case null:
          case Object.prototype: {
            if (this.known.has(value))
              return value;
            var proto_1 = Object.getPrototypeOf(value);
            var array_1 = [proto_1];
            var keys = this.sortedKeys(value);
            array_1.push(keys.json);
            var firstValueIndex_1 = array_1.length;
            keys.sorted.forEach(function(key) {
              array_1.push(_this.admit(value[key]));
            });
            var node = this.pool.lookupArray(array_1);
            if (!node.object) {
              var obj_1 = node.object = Object.create(proto_1);
              this.known.add(obj_1);
              keys.sorted.forEach(function(key, i) {
                obj_1[key] = array_1[firstValueIndex_1 + i];
              });
              if (globalThis.__DEV__ !== false) {
                Object.freeze(obj_1);
              }
            }
            return node.object;
          }
        }
      }
      return value;
    };
    ObjectCanon2.prototype.sortedKeys = function(obj) {
      var keys = Object.keys(obj);
      var node = this.pool.lookupArray(keys);
      if (!node.keys) {
        keys.sort();
        var json = JSON.stringify(keys);
        if (!(node.keys = this.keysByJSON.get(json))) {
          this.keysByJSON.set(json, node.keys = { sorted: keys, json });
        }
      }
      return node.keys;
    };
    return ObjectCanon2;
  })()
);

// node_modules/@apollo/client/cache/inmemory/readFromStore.js
function execSelectionSetKeyArgs(options) {
  return [
    options.selectionSet,
    options.objectOrReference,
    options.context,
    // We split out this property so we can pass different values
    // independently without modifying options.context itself.
    options.context.canonizeResults
  ];
}
var StoreReader = (
  /** @class */
  (function() {
    function StoreReader2(config) {
      var _this = this;
      this.knownResults = new (canUseWeakMap ? WeakMap : Map)();
      this.config = compact(config, {
        addTypename: config.addTypename !== false,
        canonizeResults: shouldCanonizeResults(config)
      });
      this.canon = config.canon || new ObjectCanon();
      this.executeSelectionSet = wrap3(function(options) {
        var _a2;
        var canonizeResults = options.context.canonizeResults;
        var peekArgs = execSelectionSetKeyArgs(options);
        peekArgs[3] = !canonizeResults;
        var other = (_a2 = _this.executeSelectionSet).peek.apply(_a2, peekArgs);
        if (other) {
          if (canonizeResults) {
            return __assign(__assign({}, other), {
              // If we previously read this result without canonizing it, we can
              // reuse that result simply by canonizing it now.
              result: _this.canon.admit(other.result)
            });
          }
          return other;
        }
        maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
        return _this.execSelectionSetImpl(options);
      }, {
        max: this.config.resultCacheMaxSize || cacheSizes["inMemoryCache.executeSelectionSet"] || 5e4,
        keyArgs: execSelectionSetKeyArgs,
        // Note that the parameters of makeCacheKey are determined by the
        // array returned by keyArgs.
        makeCacheKey: function(selectionSet, parent, context, canonizeResults) {
          if (supportsResultCaching(context.store)) {
            return context.store.makeCacheKey(selectionSet, isReference(parent) ? parent.__ref : parent, context.varString, canonizeResults);
          }
        }
      });
      this.executeSubSelectedArray = wrap3(function(options) {
        maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
        return _this.execSubSelectedArrayImpl(options);
      }, {
        max: this.config.resultCacheMaxSize || cacheSizes["inMemoryCache.executeSubSelectedArray"] || 1e4,
        makeCacheKey: function(_a2) {
          var field = _a2.field, array = _a2.array, context = _a2.context;
          if (supportsResultCaching(context.store)) {
            return context.store.makeCacheKey(field, array, context.varString);
          }
        }
      });
    }
    StoreReader2.prototype.resetCanon = function() {
      this.canon = new ObjectCanon();
    };
    StoreReader2.prototype.diffQueryAgainstStore = function(_a2) {
      var store = _a2.store, query = _a2.query, _b = _a2.rootId, rootId = _b === void 0 ? "ROOT_QUERY" : _b, variables = _a2.variables, _c = _a2.returnPartialData, returnPartialData = _c === void 0 ? true : _c, _d = _a2.canonizeResults, canonizeResults = _d === void 0 ? this.config.canonizeResults : _d;
      var policies = this.config.cache.policies;
      variables = __assign(__assign({}, getDefaultValues(getQueryDefinition(query))), variables);
      var rootRef = makeReference(rootId);
      var execResult = this.executeSelectionSet({
        selectionSet: getMainDefinition(query).selectionSet,
        objectOrReference: rootRef,
        enclosingRef: rootRef,
        context: __assign({ store, query, policies, variables, varString: canonicalStringify(variables), canonizeResults }, extractFragmentContext(query, this.config.fragments))
      });
      var missing;
      if (execResult.missing) {
        missing = [
          new MissingFieldError(firstMissing(execResult.missing), execResult.missing, query, variables)
        ];
        if (!returnPartialData) {
          throw missing[0];
        }
      }
      return {
        result: execResult.result,
        complete: !missing,
        missing
      };
    };
    StoreReader2.prototype.isFresh = function(result2, parent, selectionSet, context) {
      if (supportsResultCaching(context.store) && this.knownResults.get(result2) === selectionSet) {
        var latest = this.executeSelectionSet.peek(
          selectionSet,
          parent,
          context,
          // If result is canonical, then it could only have been previously
          // cached by the canonizing version of executeSelectionSet, so we can
          // avoid checking both possibilities here.
          this.canon.isKnown(result2)
        );
        if (latest && result2 === latest.result) {
          return true;
        }
      }
      return false;
    };
    StoreReader2.prototype.execSelectionSetImpl = function(_a2) {
      var _this = this;
      var selectionSet = _a2.selectionSet, objectOrReference = _a2.objectOrReference, enclosingRef = _a2.enclosingRef, context = _a2.context;
      if (isReference(objectOrReference) && !context.policies.rootTypenamesById[objectOrReference.__ref] && !context.store.has(objectOrReference.__ref)) {
        return {
          result: this.canon.empty,
          missing: "Dangling reference to missing ".concat(objectOrReference.__ref, " object")
        };
      }
      var variables = context.variables, policies = context.policies, store = context.store;
      var typename = store.getFieldValue(objectOrReference, "__typename");
      var objectsToMerge = [];
      var missing;
      var missingMerger = new DeepMerger();
      if (this.config.addTypename && typeof typename === "string" && !policies.rootIdsByTypename[typename]) {
        objectsToMerge.push({ __typename: typename });
      }
      function handleMissing(result3, resultName) {
        var _a3;
        if (result3.missing) {
          missing = missingMerger.merge(missing, (_a3 = {}, _a3[resultName] = result3.missing, _a3));
        }
        return result3.result;
      }
      var workSet = new Set(selectionSet.selections);
      workSet.forEach(function(selection) {
        var _a3, _b;
        if (!shouldInclude(selection, variables))
          return;
        if (isField(selection)) {
          var fieldValue = policies.readField({
            fieldName: selection.name.value,
            field: selection,
            variables: context.variables,
            from: objectOrReference
          }, context);
          var resultName = resultKeyNameFromField(selection);
          if (fieldValue === void 0) {
            if (!addTypenameToDocument.added(selection)) {
              missing = missingMerger.merge(missing, (_a3 = {}, _a3[resultName] = "Can't find field '".concat(selection.name.value, "' on ").concat(isReference(objectOrReference) ? objectOrReference.__ref + " object" : "object " + JSON.stringify(objectOrReference, null, 2)), _a3));
            }
          } else if (isArray(fieldValue)) {
            if (fieldValue.length > 0) {
              fieldValue = handleMissing(_this.executeSubSelectedArray({
                field: selection,
                array: fieldValue,
                enclosingRef,
                context
              }), resultName);
            }
          } else if (!selection.selectionSet) {
            if (context.canonizeResults) {
              fieldValue = _this.canon.pass(fieldValue);
            }
          } else if (fieldValue != null) {
            fieldValue = handleMissing(_this.executeSelectionSet({
              selectionSet: selection.selectionSet,
              objectOrReference: fieldValue,
              enclosingRef: isReference(fieldValue) ? fieldValue : enclosingRef,
              context
            }), resultName);
          }
          if (fieldValue !== void 0) {
            objectsToMerge.push((_b = {}, _b[resultName] = fieldValue, _b));
          }
        } else {
          var fragment = getFragmentFromSelection(selection, context.lookupFragment);
          if (!fragment && selection.kind === Kind.FRAGMENT_SPREAD) {
            throw newInvariantError(10, selection.name.value);
          }
          if (fragment && policies.fragmentMatches(fragment, typename)) {
            fragment.selectionSet.selections.forEach(workSet.add, workSet);
          }
        }
      });
      var result2 = mergeDeepArray(objectsToMerge);
      var finalResult = { result: result2, missing };
      var frozen = context.canonizeResults ? this.canon.admit(finalResult) : maybeDeepFreeze(finalResult);
      if (frozen.result) {
        this.knownResults.set(frozen.result, selectionSet);
      }
      return frozen;
    };
    StoreReader2.prototype.execSubSelectedArrayImpl = function(_a2) {
      var _this = this;
      var field = _a2.field, array = _a2.array, enclosingRef = _a2.enclosingRef, context = _a2.context;
      var missing;
      var missingMerger = new DeepMerger();
      function handleMissing(childResult, i) {
        var _a3;
        if (childResult.missing) {
          missing = missingMerger.merge(missing, (_a3 = {}, _a3[i] = childResult.missing, _a3));
        }
        return childResult.result;
      }
      if (field.selectionSet) {
        array = array.filter(context.store.canRead);
      }
      array = array.map(function(item, i) {
        if (item === null) {
          return null;
        }
        if (isArray(item)) {
          return handleMissing(_this.executeSubSelectedArray({
            field,
            array: item,
            enclosingRef,
            context
          }), i);
        }
        if (field.selectionSet) {
          return handleMissing(_this.executeSelectionSet({
            selectionSet: field.selectionSet,
            objectOrReference: item,
            enclosingRef: isReference(item) ? item : enclosingRef,
            context
          }), i);
        }
        if (globalThis.__DEV__ !== false) {
          assertSelectionSetForIdValue(context.store, field, item);
        }
        return item;
      });
      return {
        result: context.canonizeResults ? this.canon.admit(array) : array,
        missing
      };
    };
    return StoreReader2;
  })()
);
function firstMissing(tree2) {
  try {
    JSON.stringify(tree2, function(_, value) {
      if (typeof value === "string")
        throw value;
      return value;
    });
  } catch (result2) {
    return result2;
  }
}
function assertSelectionSetForIdValue(store, field, fieldValue) {
  if (!field.selectionSet) {
    var workSet_1 = /* @__PURE__ */ new Set([fieldValue]);
    workSet_1.forEach(function(value) {
      if (isNonNullObject(value)) {
        invariant2(
          !isReference(value),
          11,
          getTypenameFromStoreObject(store, value),
          field.name.value
        );
        Object.values(value).forEach(workSet_1.add, workSet_1);
      }
    });
  }
}

// node_modules/@apollo/client/cache/inmemory/reactiveVars.js
var cacheSlot = new Slot();
var cacheInfoMap = /* @__PURE__ */ new WeakMap();
function getCacheInfo(cache) {
  var info = cacheInfoMap.get(cache);
  if (!info) {
    cacheInfoMap.set(cache, info = {
      vars: /* @__PURE__ */ new Set(),
      dep: dep()
    });
  }
  return info;
}
function forgetCache(cache) {
  getCacheInfo(cache).vars.forEach(function(rv) {
    return rv.forgetCache(cache);
  });
}
function recallCache(cache) {
  getCacheInfo(cache).vars.forEach(function(rv) {
    return rv.attachCache(cache);
  });
}
function makeVar(value) {
  var caches2 = /* @__PURE__ */ new Set();
  var listeners = /* @__PURE__ */ new Set();
  var rv = function(newValue) {
    if (arguments.length > 0) {
      if (value !== newValue) {
        value = newValue;
        caches2.forEach(function(cache2) {
          getCacheInfo(cache2).dep.dirty(rv);
          broadcast(cache2);
        });
        var oldListeners = Array.from(listeners);
        listeners.clear();
        oldListeners.forEach(function(listener) {
          return listener(value);
        });
      }
    } else {
      var cache = cacheSlot.getValue();
      if (cache) {
        attach(cache);
        getCacheInfo(cache).dep(rv);
      }
    }
    return value;
  };
  rv.onNextChange = function(listener) {
    listeners.add(listener);
    return function() {
      listeners.delete(listener);
    };
  };
  var attach = rv.attachCache = function(cache) {
    caches2.add(cache);
    getCacheInfo(cache).vars.add(rv);
    return rv;
  };
  rv.forgetCache = function(cache) {
    return caches2.delete(cache);
  };
  return rv;
}
function broadcast(cache) {
  if (cache.broadcastWatches) {
    cache.broadcastWatches();
  }
}

// node_modules/@apollo/client/cache/inmemory/key-extractor.js
var specifierInfoCache = /* @__PURE__ */ Object.create(null);
function lookupSpecifierInfo(spec) {
  var cacheKey = JSON.stringify(spec);
  return specifierInfoCache[cacheKey] || (specifierInfoCache[cacheKey] = /* @__PURE__ */ Object.create(null));
}
function keyFieldsFnFromSpecifier(specifier) {
  var info = lookupSpecifierInfo(specifier);
  return info.keyFieldsFn || (info.keyFieldsFn = function(object, context) {
    var extract = function(from2, key) {
      return context.readField(key, from2);
    };
    var keyObject = context.keyObject = collectSpecifierPaths(specifier, function(schemaKeyPath) {
      var extracted = extractKeyPath(
        context.storeObject,
        schemaKeyPath,
        // Using context.readField to extract paths from context.storeObject
        // allows the extraction to see through Reference objects and respect
        // custom read functions.
        extract
      );
      if (extracted === void 0 && object !== context.storeObject && hasOwn.call(object, schemaKeyPath[0])) {
        extracted = extractKeyPath(object, schemaKeyPath, extractKey);
      }
      invariant2(extracted !== void 0, 5, schemaKeyPath.join("."), object);
      return extracted;
    });
    return "".concat(context.typename, ":").concat(JSON.stringify(keyObject));
  });
}
function keyArgsFnFromSpecifier(specifier) {
  var info = lookupSpecifierInfo(specifier);
  return info.keyArgsFn || (info.keyArgsFn = function(args, _a2) {
    var field = _a2.field, variables = _a2.variables, fieldName = _a2.fieldName;
    var collected = collectSpecifierPaths(specifier, function(keyPath) {
      var firstKey = keyPath[0];
      var firstChar = firstKey.charAt(0);
      if (firstChar === "@") {
        if (field && isNonEmptyArray(field.directives)) {
          var directiveName_1 = firstKey.slice(1);
          var d = field.directives.find(function(d2) {
            return d2.name.value === directiveName_1;
          });
          var directiveArgs = d && argumentsObjectFromField(d, variables);
          return directiveArgs && extractKeyPath(
            directiveArgs,
            // If keyPath.length === 1, this code calls extractKeyPath with an
            // empty path, which works because it uses directiveArgs as the
            // extracted value.
            keyPath.slice(1)
          );
        }
        return;
      }
      if (firstChar === "$") {
        var variableName = firstKey.slice(1);
        if (variables && hasOwn.call(variables, variableName)) {
          var varKeyPath = keyPath.slice(0);
          varKeyPath[0] = variableName;
          return extractKeyPath(variables, varKeyPath);
        }
        return;
      }
      if (args) {
        return extractKeyPath(args, keyPath);
      }
    });
    var suffix = JSON.stringify(collected);
    if (args || suffix !== "{}") {
      fieldName += ":" + suffix;
    }
    return fieldName;
  });
}
function collectSpecifierPaths(specifier, extractor) {
  var merger = new DeepMerger();
  return getSpecifierPaths(specifier).reduce(function(collected, path) {
    var _a2;
    var toMerge = extractor(path);
    if (toMerge !== void 0) {
      for (var i = path.length - 1; i >= 0; --i) {
        toMerge = (_a2 = {}, _a2[path[i]] = toMerge, _a2);
      }
      collected = merger.merge(collected, toMerge);
    }
    return collected;
  }, /* @__PURE__ */ Object.create(null));
}
function getSpecifierPaths(spec) {
  var info = lookupSpecifierInfo(spec);
  if (!info.paths) {
    var paths_1 = info.paths = [];
    var currentPath_1 = [];
    spec.forEach(function(s, i) {
      if (isArray(s)) {
        getSpecifierPaths(s).forEach(function(p) {
          return paths_1.push(currentPath_1.concat(p));
        });
        currentPath_1.length = 0;
      } else {
        currentPath_1.push(s);
        if (!isArray(spec[i + 1])) {
          paths_1.push(currentPath_1.slice(0));
          currentPath_1.length = 0;
        }
      }
    });
  }
  return info.paths;
}
function extractKey(object, key) {
  return object[key];
}
function extractKeyPath(object, path, extract) {
  extract = extract || extractKey;
  return normalize(path.reduce(function reducer(obj, key) {
    return isArray(obj) ? obj.map(function(child) {
      return reducer(child, key);
    }) : obj && extract(obj, key);
  }, object));
}
function normalize(value) {
  if (isNonNullObject(value)) {
    if (isArray(value)) {
      return value.map(normalize);
    }
    return collectSpecifierPaths(Object.keys(value).sort(), function(path) {
      return extractKeyPath(value, path);
    });
  }
  return value;
}

// node_modules/@apollo/client/cache/inmemory/policies.js
function argsFromFieldSpecifier(spec) {
  return spec.args !== void 0 ? spec.args : spec.field ? argumentsObjectFromField(spec.field, spec.variables) : null;
}
var nullKeyFieldsFn = function() {
  return void 0;
};
var simpleKeyArgsFn = function(_args, context) {
  return context.fieldName;
};
var mergeTrueFn = function(existing, incoming, _a2) {
  var mergeObjects = _a2.mergeObjects;
  return mergeObjects(existing, incoming);
};
var mergeFalseFn = function(_, incoming) {
  return incoming;
};
var Policies = (
  /** @class */
  (function() {
    function Policies2(config) {
      this.config = config;
      this.typePolicies = /* @__PURE__ */ Object.create(null);
      this.toBeAdded = /* @__PURE__ */ Object.create(null);
      this.supertypeMap = /* @__PURE__ */ new Map();
      this.fuzzySubtypes = /* @__PURE__ */ new Map();
      this.rootIdsByTypename = /* @__PURE__ */ Object.create(null);
      this.rootTypenamesById = /* @__PURE__ */ Object.create(null);
      this.usingPossibleTypes = false;
      this.config = __assign({ dataIdFromObject: defaultDataIdFromObject }, config);
      this.cache = this.config.cache;
      this.setRootTypename("Query");
      this.setRootTypename("Mutation");
      this.setRootTypename("Subscription");
      if (config.possibleTypes) {
        this.addPossibleTypes(config.possibleTypes);
      }
      if (config.typePolicies) {
        this.addTypePolicies(config.typePolicies);
      }
    }
    Policies2.prototype.identify = function(object, partialContext) {
      var _a2;
      var policies = this;
      var typename = partialContext && (partialContext.typename || ((_a2 = partialContext.storeObject) === null || _a2 === void 0 ? void 0 : _a2.__typename)) || object.__typename;
      if (typename === this.rootTypenamesById.ROOT_QUERY) {
        return ["ROOT_QUERY"];
      }
      var storeObject = partialContext && partialContext.storeObject || object;
      var context = __assign(__assign({}, partialContext), { typename, storeObject, readField: partialContext && partialContext.readField || function() {
        var options = normalizeReadFieldOptions(arguments, storeObject);
        return policies.readField(options, {
          store: policies.cache["data"],
          variables: options.variables
        });
      } });
      var id;
      var policy = typename && this.getTypePolicy(typename);
      var keyFn = policy && policy.keyFn || this.config.dataIdFromObject;
      disableWarningsSlot.withValue(true, function() {
        while (keyFn) {
          var specifierOrId = keyFn(__assign(__assign({}, object), storeObject), context);
          if (isArray(specifierOrId)) {
            keyFn = keyFieldsFnFromSpecifier(specifierOrId);
          } else {
            id = specifierOrId;
            break;
          }
        }
      });
      id = id ? String(id) : void 0;
      return context.keyObject ? [id, context.keyObject] : [id];
    };
    Policies2.prototype.addTypePolicies = function(typePolicies) {
      var _this = this;
      Object.keys(typePolicies).forEach(function(typename) {
        var _a2 = typePolicies[typename], queryType = _a2.queryType, mutationType = _a2.mutationType, subscriptionType = _a2.subscriptionType, incoming = __rest(_a2, ["queryType", "mutationType", "subscriptionType"]);
        if (queryType)
          _this.setRootTypename("Query", typename);
        if (mutationType)
          _this.setRootTypename("Mutation", typename);
        if (subscriptionType)
          _this.setRootTypename("Subscription", typename);
        if (hasOwn.call(_this.toBeAdded, typename)) {
          _this.toBeAdded[typename].push(incoming);
        } else {
          _this.toBeAdded[typename] = [incoming];
        }
      });
    };
    Policies2.prototype.updateTypePolicy = function(typename, incoming, existingFieldPolicies) {
      var existing = this.getTypePolicy(typename);
      var keyFields = incoming.keyFields, fields = incoming.fields;
      function setMerge(existing2, merge2) {
        existing2.merge = typeof merge2 === "function" ? merge2 : merge2 === true ? mergeTrueFn : merge2 === false ? mergeFalseFn : existing2.merge;
      }
      setMerge(existing, incoming.merge);
      existing.keyFn = // Pass false to disable normalization for this typename.
      keyFields === false ? nullKeyFieldsFn : isArray(keyFields) ? keyFieldsFnFromSpecifier(keyFields) : typeof keyFields === "function" ? keyFields : existing.keyFn;
      if (fields) {
        Object.keys(fields).forEach(function(fieldName) {
          var existing2 = existingFieldPolicies[fieldName];
          if (!existing2 || (existing2 === null || existing2 === void 0 ? void 0 : existing2.typename) !== typename) {
            existing2 = existingFieldPolicies[fieldName] = { typename };
          }
          var incoming2 = fields[fieldName];
          if (typeof incoming2 === "function") {
            existing2.read = incoming2;
          } else {
            var keyArgs = incoming2.keyArgs, read = incoming2.read, merge2 = incoming2.merge;
            existing2.keyFn = // Pass false to disable argument-based differentiation of
            // field identities.
            keyArgs === false ? simpleKeyArgsFn : isArray(keyArgs) ? keyArgsFnFromSpecifier(keyArgs) : typeof keyArgs === "function" ? keyArgs : existing2.keyFn;
            if (typeof read === "function") {
              existing2.read = read;
            }
            setMerge(existing2, merge2);
          }
          if (existing2.read && existing2.merge) {
            existing2.keyFn = existing2.keyFn || simpleKeyArgsFn;
          }
        });
      }
    };
    Policies2.prototype.setRootTypename = function(which, typename) {
      if (typename === void 0) {
        typename = which;
      }
      var rootId = "ROOT_" + which.toUpperCase();
      var old = this.rootTypenamesById[rootId];
      if (typename !== old) {
        invariant2(!old || old === which, 6, which);
        if (old)
          delete this.rootIdsByTypename[old];
        this.rootIdsByTypename[typename] = rootId;
        this.rootTypenamesById[rootId] = typename;
      }
    };
    Policies2.prototype.addPossibleTypes = function(possibleTypes) {
      var _this = this;
      this.usingPossibleTypes = true;
      Object.keys(possibleTypes).forEach(function(supertype) {
        _this.getSupertypeSet(supertype, true);
        possibleTypes[supertype].forEach(function(subtype) {
          _this.getSupertypeSet(subtype, true).add(supertype);
          var match2 = subtype.match(TypeOrFieldNameRegExp);
          if (!match2 || match2[0] !== subtype) {
            _this.fuzzySubtypes.set(subtype, new RegExp(subtype));
          }
        });
      });
    };
    Policies2.prototype.getTypePolicy = function(typename) {
      var _this = this;
      if (!hasOwn.call(this.typePolicies, typename)) {
        var policy_1 = this.typePolicies[typename] = /* @__PURE__ */ Object.create(null);
        policy_1.fields = /* @__PURE__ */ Object.create(null);
        var supertypes_1 = this.supertypeMap.get(typename);
        if (!supertypes_1 && this.fuzzySubtypes.size) {
          supertypes_1 = this.getSupertypeSet(typename, true);
          this.fuzzySubtypes.forEach(function(regExp, fuzzy) {
            if (regExp.test(typename)) {
              var fuzzySupertypes = _this.supertypeMap.get(fuzzy);
              if (fuzzySupertypes) {
                fuzzySupertypes.forEach(function(supertype) {
                  return supertypes_1.add(supertype);
                });
              }
            }
          });
        }
        if (supertypes_1 && supertypes_1.size) {
          supertypes_1.forEach(function(supertype) {
            var _a2 = _this.getTypePolicy(supertype), fields = _a2.fields, rest = __rest(_a2, ["fields"]);
            Object.assign(policy_1, rest);
            Object.assign(policy_1.fields, fields);
          });
        }
      }
      var inbox = this.toBeAdded[typename];
      if (inbox && inbox.length) {
        inbox.splice(0).forEach(function(policy) {
          _this.updateTypePolicy(typename, policy, _this.typePolicies[typename].fields);
        });
      }
      return this.typePolicies[typename];
    };
    Policies2.prototype.getFieldPolicy = function(typename, fieldName) {
      if (typename) {
        return this.getTypePolicy(typename).fields[fieldName];
      }
    };
    Policies2.prototype.getSupertypeSet = function(subtype, createIfMissing) {
      var supertypeSet = this.supertypeMap.get(subtype);
      if (!supertypeSet && createIfMissing) {
        this.supertypeMap.set(subtype, supertypeSet = /* @__PURE__ */ new Set());
      }
      return supertypeSet;
    };
    Policies2.prototype.fragmentMatches = function(fragment, typename, result2, variables) {
      var _this = this;
      if (!fragment.typeCondition)
        return true;
      if (!typename)
        return false;
      var supertype = fragment.typeCondition.name.value;
      if (typename === supertype)
        return true;
      if (this.usingPossibleTypes && this.supertypeMap.has(supertype)) {
        var typenameSupertypeSet = this.getSupertypeSet(typename, true);
        var workQueue_1 = [typenameSupertypeSet];
        var maybeEnqueue_1 = function(subtype) {
          var supertypeSet2 = _this.getSupertypeSet(subtype, false);
          if (supertypeSet2 && supertypeSet2.size && workQueue_1.indexOf(supertypeSet2) < 0) {
            workQueue_1.push(supertypeSet2);
          }
        };
        var needToCheckFuzzySubtypes = !!(result2 && this.fuzzySubtypes.size);
        var checkingFuzzySubtypes = false;
        for (var i = 0; i < workQueue_1.length; ++i) {
          var supertypeSet = workQueue_1[i];
          if (supertypeSet.has(supertype)) {
            if (!typenameSupertypeSet.has(supertype)) {
              if (checkingFuzzySubtypes) {
                globalThis.__DEV__ !== false && invariant2.warn(7, typename, supertype);
              }
              typenameSupertypeSet.add(supertype);
            }
            return true;
          }
          supertypeSet.forEach(maybeEnqueue_1);
          if (needToCheckFuzzySubtypes && // Start checking fuzzy subtypes only after exhausting all
          // non-fuzzy subtypes (after the final iteration of the loop).
          i === workQueue_1.length - 1 && // We could wait to compare fragment.selectionSet to result
          // after we verify the supertype, but this check is often less
          // expensive than that search, and we will have to do the
          // comparison anyway whenever we find a potential match.
          selectionSetMatchesResult(fragment.selectionSet, result2, variables)) {
            needToCheckFuzzySubtypes = false;
            checkingFuzzySubtypes = true;
            this.fuzzySubtypes.forEach(function(regExp, fuzzyString) {
              var match2 = typename.match(regExp);
              if (match2 && match2[0] === typename) {
                maybeEnqueue_1(fuzzyString);
              }
            });
          }
        }
      }
      return false;
    };
    Policies2.prototype.hasKeyArgs = function(typename, fieldName) {
      var policy = this.getFieldPolicy(typename, fieldName);
      return !!(policy && policy.keyFn);
    };
    Policies2.prototype.getStoreFieldName = function(fieldSpec) {
      var typename = fieldSpec.typename, fieldName = fieldSpec.fieldName;
      var policy = this.getFieldPolicy(typename, fieldName);
      var storeFieldName;
      var keyFn = policy && policy.keyFn;
      if (keyFn && typename) {
        var context = {
          typename,
          fieldName,
          field: fieldSpec.field || null,
          variables: fieldSpec.variables
        };
        var args = argsFromFieldSpecifier(fieldSpec);
        while (keyFn) {
          var specifierOrString = keyFn(args, context);
          if (isArray(specifierOrString)) {
            keyFn = keyArgsFnFromSpecifier(specifierOrString);
          } else {
            storeFieldName = specifierOrString || fieldName;
            break;
          }
        }
      }
      if (storeFieldName === void 0) {
        storeFieldName = fieldSpec.field ? storeKeyNameFromField(fieldSpec.field, fieldSpec.variables) : getStoreKeyName(fieldName, argsFromFieldSpecifier(fieldSpec));
      }
      if (storeFieldName === false) {
        return fieldName;
      }
      return fieldName === fieldNameFromStoreName(storeFieldName) ? storeFieldName : fieldName + ":" + storeFieldName;
    };
    Policies2.prototype.readField = function(options, context) {
      var objectOrReference = options.from;
      if (!objectOrReference)
        return;
      var nameOrField = options.field || options.fieldName;
      if (!nameOrField)
        return;
      if (options.typename === void 0) {
        var typename = context.store.getFieldValue(objectOrReference, "__typename");
        if (typename)
          options.typename = typename;
      }
      var storeFieldName = this.getStoreFieldName(options);
      var fieldName = fieldNameFromStoreName(storeFieldName);
      var existing = context.store.getFieldValue(objectOrReference, storeFieldName);
      var policy = this.getFieldPolicy(options.typename, fieldName);
      var read = policy && policy.read;
      if (read) {
        var readOptions = makeFieldFunctionOptions(this, objectOrReference, options, context, context.store.getStorage(isReference(objectOrReference) ? objectOrReference.__ref : objectOrReference, storeFieldName));
        return cacheSlot.withValue(this.cache, read, [
          existing,
          readOptions
        ]);
      }
      return existing;
    };
    Policies2.prototype.getReadFunction = function(typename, fieldName) {
      var policy = this.getFieldPolicy(typename, fieldName);
      return policy && policy.read;
    };
    Policies2.prototype.getMergeFunction = function(parentTypename, fieldName, childTypename) {
      var policy = this.getFieldPolicy(parentTypename, fieldName);
      var merge2 = policy && policy.merge;
      if (!merge2 && childTypename) {
        policy = this.getTypePolicy(childTypename);
        merge2 = policy && policy.merge;
      }
      return merge2;
    };
    Policies2.prototype.runMergeFunction = function(existing, incoming, _a2, context, storage) {
      var field = _a2.field, typename = _a2.typename, merge2 = _a2.merge;
      if (merge2 === mergeTrueFn) {
        return makeMergeObjectsFunction(context.store)(existing, incoming);
      }
      if (merge2 === mergeFalseFn) {
        return incoming;
      }
      if (context.overwrite) {
        existing = void 0;
      }
      return merge2(existing, incoming, makeFieldFunctionOptions(
        this,
        // Unlike options.readField for read functions, we do not fall
        // back to the current object if no foreignObjOrRef is provided,
        // because it's not clear what the current object should be for
        // merge functions: the (possibly undefined) existing object, or
        // the incoming object? If you think your merge function needs
        // to read sibling fields in order to produce a new value for
        // the current field, you might want to rethink your strategy,
        // because that's a recipe for making merge behavior sensitive
        // to the order in which fields are written into the cache.
        // However, readField(name, ref) is useful for merge functions
        // that need to deduplicate child objects and references.
        void 0,
        {
          typename,
          fieldName: field.name.value,
          field,
          variables: context.variables
        },
        context,
        storage || /* @__PURE__ */ Object.create(null)
      ));
    };
    return Policies2;
  })()
);
function makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage) {
  var storeFieldName = policies.getStoreFieldName(fieldSpec);
  var fieldName = fieldNameFromStoreName(storeFieldName);
  var variables = fieldSpec.variables || context.variables;
  var _a2 = context.store, toReference = _a2.toReference, canRead = _a2.canRead;
  return {
    args: argsFromFieldSpecifier(fieldSpec),
    field: fieldSpec.field || null,
    fieldName,
    storeFieldName,
    variables,
    isReference,
    toReference,
    storage,
    cache: policies.cache,
    canRead,
    readField: function() {
      return policies.readField(normalizeReadFieldOptions(arguments, objectOrReference, variables), context);
    },
    mergeObjects: makeMergeObjectsFunction(context.store)
  };
}
function normalizeReadFieldOptions(readFieldArgs, objectOrReference, variables) {
  var fieldNameOrOptions = readFieldArgs[0], from2 = readFieldArgs[1], argc = readFieldArgs.length;
  var options;
  if (typeof fieldNameOrOptions === "string") {
    options = {
      fieldName: fieldNameOrOptions,
      // Default to objectOrReference only when no second argument was
      // passed for the from parameter, not when undefined is explicitly
      // passed as the second argument.
      from: argc > 1 ? from2 : objectOrReference
    };
  } else {
    options = __assign({}, fieldNameOrOptions);
    if (!hasOwn.call(options, "from")) {
      options.from = objectOrReference;
    }
  }
  if (globalThis.__DEV__ !== false && options.from === void 0) {
    globalThis.__DEV__ !== false && invariant2.warn(8, stringifyForDisplay(Array.from(readFieldArgs)));
  }
  if (void 0 === options.variables) {
    options.variables = variables;
  }
  return options;
}
function makeMergeObjectsFunction(store) {
  return function mergeObjects(existing, incoming) {
    if (isArray(existing) || isArray(incoming)) {
      throw newInvariantError(9);
    }
    if (isNonNullObject(existing) && isNonNullObject(incoming)) {
      var eType = store.getFieldValue(existing, "__typename");
      var iType = store.getFieldValue(incoming, "__typename");
      var typesDiffer = eType && iType && eType !== iType;
      if (typesDiffer) {
        return incoming;
      }
      if (isReference(existing) && storeValueIsStoreObject(incoming)) {
        store.merge(existing.__ref, incoming);
        return existing;
      }
      if (storeValueIsStoreObject(existing) && isReference(incoming)) {
        store.merge(existing, incoming.__ref);
        return incoming;
      }
      if (storeValueIsStoreObject(existing) && storeValueIsStoreObject(incoming)) {
        return __assign(__assign({}, existing), incoming);
      }
    }
    return incoming;
  };
}

// node_modules/@apollo/client/cache/inmemory/writeToStore.js
function getContextFlavor(context, clientOnly, deferred) {
  var key = "".concat(clientOnly).concat(deferred);
  var flavored = context.flavors.get(key);
  if (!flavored) {
    context.flavors.set(key, flavored = context.clientOnly === clientOnly && context.deferred === deferred ? context : __assign(__assign({}, context), { clientOnly, deferred }));
  }
  return flavored;
}
var StoreWriter = (
  /** @class */
  (function() {
    function StoreWriter2(cache, reader, fragments) {
      this.cache = cache;
      this.reader = reader;
      this.fragments = fragments;
    }
    StoreWriter2.prototype.writeToStore = function(store, _a2) {
      var _this = this;
      var query = _a2.query, result2 = _a2.result, dataId = _a2.dataId, variables = _a2.variables, overwrite = _a2.overwrite;
      var operationDefinition = getOperationDefinition(query);
      var merger = makeProcessedFieldsMerger();
      variables = __assign(__assign({}, getDefaultValues(operationDefinition)), variables);
      var context = __assign(__assign({ store, written: /* @__PURE__ */ Object.create(null), merge: function(existing, incoming) {
        return merger.merge(existing, incoming);
      }, variables, varString: canonicalStringify(variables) }, extractFragmentContext(query, this.fragments)), { overwrite: !!overwrite, incomingById: /* @__PURE__ */ new Map(), clientOnly: false, deferred: false, flavors: /* @__PURE__ */ new Map() });
      var ref = this.processSelectionSet({
        result: result2 || /* @__PURE__ */ Object.create(null),
        dataId,
        selectionSet: operationDefinition.selectionSet,
        mergeTree: { map: /* @__PURE__ */ new Map() },
        context
      });
      if (!isReference(ref)) {
        throw newInvariantError(12, result2);
      }
      context.incomingById.forEach(function(_a3, dataId2) {
        var storeObject = _a3.storeObject, mergeTree = _a3.mergeTree, fieldNodeSet = _a3.fieldNodeSet;
        var entityRef = makeReference(dataId2);
        if (mergeTree && mergeTree.map.size) {
          var applied = _this.applyMerges(mergeTree, entityRef, storeObject, context);
          if (isReference(applied)) {
            return;
          }
          storeObject = applied;
        }
        if (globalThis.__DEV__ !== false && !context.overwrite) {
          var fieldsWithSelectionSets_1 = /* @__PURE__ */ Object.create(null);
          fieldNodeSet.forEach(function(field) {
            if (field.selectionSet) {
              fieldsWithSelectionSets_1[field.name.value] = true;
            }
          });
          var hasSelectionSet_1 = function(storeFieldName) {
            return fieldsWithSelectionSets_1[fieldNameFromStoreName(storeFieldName)] === true;
          };
          var hasMergeFunction_1 = function(storeFieldName) {
            var childTree = mergeTree && mergeTree.map.get(storeFieldName);
            return Boolean(childTree && childTree.info && childTree.info.merge);
          };
          Object.keys(storeObject).forEach(function(storeFieldName) {
            if (hasSelectionSet_1(storeFieldName) && !hasMergeFunction_1(storeFieldName)) {
              warnAboutDataLoss(entityRef, storeObject, storeFieldName, context.store);
            }
          });
        }
        store.merge(dataId2, storeObject);
      });
      store.retain(ref.__ref);
      return ref;
    };
    StoreWriter2.prototype.processSelectionSet = function(_a2) {
      var _this = this;
      var dataId = _a2.dataId, result2 = _a2.result, selectionSet = _a2.selectionSet, context = _a2.context, mergeTree = _a2.mergeTree;
      var policies = this.cache.policies;
      var incoming = /* @__PURE__ */ Object.create(null);
      var typename = dataId && policies.rootTypenamesById[dataId] || getTypenameFromResult(result2, selectionSet, context.fragmentMap) || dataId && context.store.get(dataId, "__typename");
      if ("string" === typeof typename) {
        incoming.__typename = typename;
      }
      var readField = function() {
        var options = normalizeReadFieldOptions(arguments, incoming, context.variables);
        if (isReference(options.from)) {
          var info = context.incomingById.get(options.from.__ref);
          if (info) {
            var result_1 = policies.readField(__assign(__assign({}, options), { from: info.storeObject }), context);
            if (result_1 !== void 0) {
              return result_1;
            }
          }
        }
        return policies.readField(options, context);
      };
      var fieldNodeSet = /* @__PURE__ */ new Set();
      this.flattenFields(
        selectionSet,
        result2,
        // This WriteContext will be the default context value for fields returned
        // by the flattenFields method, but some fields may be assigned a modified
        // context, depending on the presence of @client and other directives.
        context,
        typename
      ).forEach(function(context2, field) {
        var _a3;
        var resultFieldKey = resultKeyNameFromField(field);
        var value = result2[resultFieldKey];
        fieldNodeSet.add(field);
        if (value !== void 0) {
          var storeFieldName = policies.getStoreFieldName({
            typename,
            fieldName: field.name.value,
            field,
            variables: context2.variables
          });
          var childTree = getChildMergeTree(mergeTree, storeFieldName);
          var incomingValue = _this.processFieldValue(
            value,
            field,
            // Reset context.clientOnly and context.deferred to their default
            // values before processing nested selection sets.
            field.selectionSet ? getContextFlavor(context2, false, false) : context2,
            childTree
          );
          var childTypename = void 0;
          if (field.selectionSet && (isReference(incomingValue) || storeValueIsStoreObject(incomingValue))) {
            childTypename = readField("__typename", incomingValue);
          }
          var merge2 = policies.getMergeFunction(typename, field.name.value, childTypename);
          if (merge2) {
            childTree.info = {
              // TODO Check compatibility against any existing childTree.field?
              field,
              typename,
              merge: merge2
            };
          } else {
            maybeRecycleChildMergeTree(mergeTree, storeFieldName);
          }
          incoming = context2.merge(incoming, (_a3 = {}, _a3[storeFieldName] = incomingValue, _a3));
        } else if (globalThis.__DEV__ !== false && !context2.clientOnly && !context2.deferred && !addTypenameToDocument.added(field) && // If the field has a read function, it may be a synthetic field or
        // provide a default value, so its absence from the written data should
        // not be cause for alarm.
        !policies.getReadFunction(typename, field.name.value)) {
          globalThis.__DEV__ !== false && invariant2.error(13, resultKeyNameFromField(field), result2);
        }
      });
      try {
        var _b = policies.identify(result2, {
          typename,
          selectionSet,
          fragmentMap: context.fragmentMap,
          storeObject: incoming,
          readField
        }), id = _b[0], keyObject = _b[1];
        dataId = dataId || id;
        if (keyObject) {
          incoming = context.merge(incoming, keyObject);
        }
      } catch (e) {
        if (!dataId)
          throw e;
      }
      if ("string" === typeof dataId) {
        var dataRef = makeReference(dataId);
        var sets = context.written[dataId] || (context.written[dataId] = []);
        if (sets.indexOf(selectionSet) >= 0)
          return dataRef;
        sets.push(selectionSet);
        if (this.reader && this.reader.isFresh(result2, dataRef, selectionSet, context)) {
          return dataRef;
        }
        var previous_1 = context.incomingById.get(dataId);
        if (previous_1) {
          previous_1.storeObject = context.merge(previous_1.storeObject, incoming);
          previous_1.mergeTree = mergeMergeTrees(previous_1.mergeTree, mergeTree);
          fieldNodeSet.forEach(function(field) {
            return previous_1.fieldNodeSet.add(field);
          });
        } else {
          context.incomingById.set(dataId, {
            storeObject: incoming,
            // Save a reference to mergeTree only if it is not empty, because
            // empty MergeTrees may be recycled by maybeRecycleChildMergeTree and
            // reused for entirely different parts of the result tree.
            mergeTree: mergeTreeIsEmpty(mergeTree) ? void 0 : mergeTree,
            fieldNodeSet
          });
        }
        return dataRef;
      }
      return incoming;
    };
    StoreWriter2.prototype.processFieldValue = function(value, field, context, mergeTree) {
      var _this = this;
      if (!field.selectionSet || value === null) {
        return globalThis.__DEV__ !== false ? cloneDeep(value) : value;
      }
      if (isArray(value)) {
        return value.map(function(item, i) {
          var value2 = _this.processFieldValue(item, field, context, getChildMergeTree(mergeTree, i));
          maybeRecycleChildMergeTree(mergeTree, i);
          return value2;
        });
      }
      return this.processSelectionSet({
        result: value,
        selectionSet: field.selectionSet,
        context,
        mergeTree
      });
    };
    StoreWriter2.prototype.flattenFields = function(selectionSet, result2, context, typename) {
      if (typename === void 0) {
        typename = getTypenameFromResult(result2, selectionSet, context.fragmentMap);
      }
      var fieldMap = /* @__PURE__ */ new Map();
      var policies = this.cache.policies;
      var limitingTrie = new Trie(false);
      (function flatten(selectionSet2, inheritedContext) {
        var visitedNode = limitingTrie.lookup(
          selectionSet2,
          // Because we take inheritedClientOnly and inheritedDeferred into
          // consideration here (in addition to selectionSet), it's possible for
          // the same selection set to be flattened more than once, if it appears
          // in the query with different @client and/or @directive configurations.
          inheritedContext.clientOnly,
          inheritedContext.deferred
        );
        if (visitedNode.visited)
          return;
        visitedNode.visited = true;
        selectionSet2.selections.forEach(function(selection) {
          if (!shouldInclude(selection, context.variables))
            return;
          var clientOnly = inheritedContext.clientOnly, deferred = inheritedContext.deferred;
          if (
            // Since the presence of @client or @defer on this field can only
            // cause clientOnly or deferred to become true, we can skip the
            // forEach loop if both clientOnly and deferred are already true.
            !(clientOnly && deferred) && isNonEmptyArray(selection.directives)
          ) {
            selection.directives.forEach(function(dir) {
              var name = dir.name.value;
              if (name === "client")
                clientOnly = true;
              if (name === "defer") {
                var args = argumentsObjectFromField(dir, context.variables);
                if (!args || args.if !== false) {
                  deferred = true;
                }
              }
            });
          }
          if (isField(selection)) {
            var existing = fieldMap.get(selection);
            if (existing) {
              clientOnly = clientOnly && existing.clientOnly;
              deferred = deferred && existing.deferred;
            }
            fieldMap.set(selection, getContextFlavor(context, clientOnly, deferred));
          } else {
            var fragment = getFragmentFromSelection(selection, context.lookupFragment);
            if (!fragment && selection.kind === Kind.FRAGMENT_SPREAD) {
              throw newInvariantError(14, selection.name.value);
            }
            if (fragment && policies.fragmentMatches(fragment, typename, result2, context.variables)) {
              flatten(fragment.selectionSet, getContextFlavor(context, clientOnly, deferred));
            }
          }
        });
      })(selectionSet, context);
      return fieldMap;
    };
    StoreWriter2.prototype.applyMerges = function(mergeTree, existing, incoming, context, getStorageArgs) {
      var _a2;
      var _this = this;
      if (mergeTree.map.size && !isReference(incoming)) {
        var e_1 = (
          // Items in the same position in different arrays are not
          // necessarily related to each other, so when incoming is an array
          // we process its elements as if there was no existing data.
          !isArray(incoming) && // Likewise, existing must be either a Reference or a StoreObject
          // in order for its fields to be safe to merge with the fields of
          // the incoming object.
          (isReference(existing) || storeValueIsStoreObject(existing)) ? existing : void 0
        );
        var i_1 = incoming;
        if (e_1 && !getStorageArgs) {
          getStorageArgs = [isReference(e_1) ? e_1.__ref : e_1];
        }
        var changedFields_1;
        var getValue_1 = function(from2, name) {
          return isArray(from2) ? typeof name === "number" ? from2[name] : void 0 : context.store.getFieldValue(from2, String(name));
        };
        mergeTree.map.forEach(function(childTree, storeFieldName) {
          var eVal = getValue_1(e_1, storeFieldName);
          var iVal = getValue_1(i_1, storeFieldName);
          if (void 0 === iVal)
            return;
          if (getStorageArgs) {
            getStorageArgs.push(storeFieldName);
          }
          var aVal = _this.applyMerges(childTree, eVal, iVal, context, getStorageArgs);
          if (aVal !== iVal) {
            changedFields_1 = changedFields_1 || /* @__PURE__ */ new Map();
            changedFields_1.set(storeFieldName, aVal);
          }
          if (getStorageArgs) {
            invariant2(getStorageArgs.pop() === storeFieldName);
          }
        });
        if (changedFields_1) {
          incoming = isArray(i_1) ? i_1.slice(0) : __assign({}, i_1);
          changedFields_1.forEach(function(value, name) {
            incoming[name] = value;
          });
        }
      }
      if (mergeTree.info) {
        return this.cache.policies.runMergeFunction(existing, incoming, mergeTree.info, context, getStorageArgs && (_a2 = context.store).getStorage.apply(_a2, getStorageArgs));
      }
      return incoming;
    };
    return StoreWriter2;
  })()
);
var emptyMergeTreePool = [];
function getChildMergeTree(_a2, name) {
  var map2 = _a2.map;
  if (!map2.has(name)) {
    map2.set(name, emptyMergeTreePool.pop() || { map: /* @__PURE__ */ new Map() });
  }
  return map2.get(name);
}
function mergeMergeTrees(left, right) {
  if (left === right || !right || mergeTreeIsEmpty(right))
    return left;
  if (!left || mergeTreeIsEmpty(left))
    return right;
  var info = left.info && right.info ? __assign(__assign({}, left.info), right.info) : left.info || right.info;
  var needToMergeMaps = left.map.size && right.map.size;
  var map2 = needToMergeMaps ? /* @__PURE__ */ new Map() : left.map.size ? left.map : right.map;
  var merged = { info, map: map2 };
  if (needToMergeMaps) {
    var remainingRightKeys_1 = new Set(right.map.keys());
    left.map.forEach(function(leftTree, key) {
      merged.map.set(key, mergeMergeTrees(leftTree, right.map.get(key)));
      remainingRightKeys_1.delete(key);
    });
    remainingRightKeys_1.forEach(function(key) {
      merged.map.set(key, mergeMergeTrees(right.map.get(key), left.map.get(key)));
    });
  }
  return merged;
}
function mergeTreeIsEmpty(tree2) {
  return !tree2 || !(tree2.info || tree2.map.size);
}
function maybeRecycleChildMergeTree(_a2, name) {
  var map2 = _a2.map;
  var childTree = map2.get(name);
  if (childTree && mergeTreeIsEmpty(childTree)) {
    emptyMergeTreePool.push(childTree);
    map2.delete(name);
  }
}
var warnings = /* @__PURE__ */ new Set();
function warnAboutDataLoss(existingRef, incomingObj, storeFieldName, store) {
  var getChild = function(objOrRef) {
    var child = store.getFieldValue(objOrRef, storeFieldName);
    return typeof child === "object" && child;
  };
  var existing = getChild(existingRef);
  if (!existing)
    return;
  var incoming = getChild(incomingObj);
  if (!incoming)
    return;
  if (isReference(existing))
    return;
  if (equal(existing, incoming))
    return;
  if (Object.keys(existing).every(function(key) {
    return store.getFieldValue(incoming, key) !== void 0;
  })) {
    return;
  }
  var parentType = store.getFieldValue(existingRef, "__typename") || store.getFieldValue(incomingObj, "__typename");
  var fieldName = fieldNameFromStoreName(storeFieldName);
  var typeDotName = "".concat(parentType, ".").concat(fieldName);
  if (warnings.has(typeDotName))
    return;
  warnings.add(typeDotName);
  var childTypenames = [];
  if (!isArray(existing) && !isArray(incoming)) {
    [existing, incoming].forEach(function(child) {
      var typename = store.getFieldValue(child, "__typename");
      if (typeof typename === "string" && !childTypenames.includes(typename)) {
        childTypenames.push(typename);
      }
    });
  }
  globalThis.__DEV__ !== false && invariant2.warn(15, fieldName, parentType, childTypenames.length ? "either ensure all objects of type " + childTypenames.join(" and ") + " have an ID or a custom merge function, or " : "", typeDotName, __assign({}, existing), __assign({}, incoming));
}

// node_modules/@apollo/client/cache/inmemory/inMemoryCache.js
var InMemoryCache = (
  /** @class */
  (function(_super) {
    __extends(InMemoryCache2, _super);
    function InMemoryCache2(config) {
      if (config === void 0) {
        config = {};
      }
      var _this = _super.call(this) || this;
      _this.watches = /* @__PURE__ */ new Set();
      _this.addTypenameTransform = new DocumentTransform(addTypenameToDocument);
      _this.assumeImmutableResults = true;
      _this.makeVar = makeVar;
      _this.txCount = 0;
      if (globalThis.__DEV__ !== false) {
        warnRemovedOption(config, "addTypename", "InMemoryCache", "Please remove the `addTypename` option when initializing `InMemoryCache`.");
        warnRemovedOption(config, "canonizeResults", "InMemoryCache", "Please remove the `canonizeResults` option when initializing `InMemoryCache`.");
      }
      _this.config = normalizeConfig(config);
      _this.addTypename = !!_this.config.addTypename;
      _this.policies = new Policies({
        cache: _this,
        dataIdFromObject: _this.config.dataIdFromObject,
        possibleTypes: _this.config.possibleTypes,
        typePolicies: _this.config.typePolicies
      });
      _this.init();
      return _this;
    }
    InMemoryCache2.prototype.init = function() {
      var rootStore = this.data = new EntityStore.Root({
        policies: this.policies,
        resultCaching: this.config.resultCaching
      });
      this.optimisticData = rootStore.stump;
      this.resetResultCache();
    };
    InMemoryCache2.prototype.resetResultCache = function(resetResultIdentities) {
      var _this = this;
      var previousReader = this.storeReader;
      var fragments = this.config.fragments;
      this.addTypenameTransform.resetCache();
      fragments === null || fragments === void 0 ? void 0 : fragments.resetCaches();
      this.storeWriter = new StoreWriter(this, this.storeReader = new StoreReader({
        cache: this,
        addTypename: this.addTypename,
        resultCacheMaxSize: this.config.resultCacheMaxSize,
        canonizeResults: shouldCanonizeResults(this.config),
        canon: resetResultIdentities ? void 0 : previousReader && previousReader.canon,
        fragments
      }), fragments);
      this.maybeBroadcastWatch = wrap3(function(c, options) {
        return _this.broadcastWatch(c, options);
      }, {
        max: this.config.resultCacheMaxSize || cacheSizes["inMemoryCache.maybeBroadcastWatch"] || 5e3,
        makeCacheKey: function(c) {
          var store = c.optimistic ? _this.optimisticData : _this.data;
          if (supportsResultCaching(store)) {
            var optimistic = c.optimistic, id = c.id, variables = c.variables;
            return store.makeCacheKey(
              c.query,
              // Different watches can have the same query, optimistic
              // status, rootId, and variables, but if their callbacks are
              // different, the (identical) result needs to be delivered to
              // each distinct callback. The easiest way to achieve that
              // separation is to include c.callback in the cache key for
              // maybeBroadcastWatch calls. See issue #5733.
              c.callback,
              canonicalStringify({ optimistic, id, variables })
            );
          }
        }
      });
      (/* @__PURE__ */ new Set([this.data.group, this.optimisticData.group])).forEach(function(group) {
        return group.resetCaching();
      });
    };
    InMemoryCache2.prototype.restore = function(data) {
      this.init();
      if (data)
        this.data.replace(data);
      return this;
    };
    InMemoryCache2.prototype.extract = function(optimistic) {
      if (optimistic === void 0) {
        optimistic = false;
      }
      return (optimistic ? this.optimisticData : this.data).extract();
    };
    InMemoryCache2.prototype.read = function(options) {
      if (globalThis.__DEV__ !== false) {
        warnRemovedOption(options, "canonizeResults", "cache.read");
      }
      var _a2 = options.returnPartialData, returnPartialData = _a2 === void 0 ? false : _a2;
      try {
        return this.storeReader.diffQueryAgainstStore(__assign(__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData })).result || null;
      } catch (e) {
        if (e instanceof MissingFieldError) {
          return null;
        }
        throw e;
      }
    };
    InMemoryCache2.prototype.write = function(options) {
      try {
        ++this.txCount;
        return this.storeWriter.writeToStore(this.data, options);
      } finally {
        if (!--this.txCount && options.broadcast !== false) {
          this.broadcastWatches();
        }
      }
    };
    InMemoryCache2.prototype.modify = function(options) {
      if (hasOwn.call(options, "id") && !options.id) {
        return false;
      }
      var store = options.optimistic ? this.optimisticData : this.data;
      try {
        ++this.txCount;
        return store.modify(options.id || "ROOT_QUERY", options.fields);
      } finally {
        if (!--this.txCount && options.broadcast !== false) {
          this.broadcastWatches();
        }
      }
    };
    InMemoryCache2.prototype.diff = function(options) {
      if (globalThis.__DEV__ !== false) {
        warnRemovedOption(options, "canonizeResults", "cache.diff");
      }
      return this.storeReader.diffQueryAgainstStore(__assign(__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, rootId: options.id || "ROOT_QUERY", config: this.config }));
    };
    InMemoryCache2.prototype.watch = function(watch) {
      var _this = this;
      if (!this.watches.size) {
        recallCache(this);
      }
      this.watches.add(watch);
      if (watch.immediate) {
        this.maybeBroadcastWatch(watch);
      }
      return function() {
        if (_this.watches.delete(watch) && !_this.watches.size) {
          forgetCache(_this);
        }
        _this.maybeBroadcastWatch.forget(watch);
      };
    };
    InMemoryCache2.prototype.gc = function(options) {
      if (globalThis.__DEV__ !== false) {
        warnRemovedOption(options || {}, "resetResultIdentities", "cache.gc", "First ensure all usages of `canonizeResults` are removed, then remove this option.");
      }
      canonicalStringify.reset();
      print2.reset();
      var ids = this.optimisticData.gc();
      if (options && !this.txCount) {
        if (options.resetResultCache) {
          this.resetResultCache(options.resetResultIdentities);
        } else if (options.resetResultIdentities) {
          this.storeReader.resetCanon();
        }
      }
      return ids;
    };
    InMemoryCache2.prototype.retain = function(rootId, optimistic) {
      return (optimistic ? this.optimisticData : this.data).retain(rootId);
    };
    InMemoryCache2.prototype.release = function(rootId, optimistic) {
      return (optimistic ? this.optimisticData : this.data).release(rootId);
    };
    InMemoryCache2.prototype.identify = function(object) {
      if (isReference(object))
        return object.__ref;
      try {
        return this.policies.identify(object)[0];
      } catch (e) {
        globalThis.__DEV__ !== false && invariant2.warn(e);
      }
    };
    InMemoryCache2.prototype.evict = function(options) {
      if (!options.id) {
        if (hasOwn.call(options, "id")) {
          return false;
        }
        options = __assign(__assign({}, options), { id: "ROOT_QUERY" });
      }
      try {
        ++this.txCount;
        return this.optimisticData.evict(options, this.data);
      } finally {
        if (!--this.txCount && options.broadcast !== false) {
          this.broadcastWatches();
        }
      }
    };
    InMemoryCache2.prototype.reset = function(options) {
      var _this = this;
      this.init();
      canonicalStringify.reset();
      if (options && options.discardWatches) {
        this.watches.forEach(function(watch) {
          return _this.maybeBroadcastWatch.forget(watch);
        });
        this.watches.clear();
        forgetCache(this);
      } else {
        this.broadcastWatches();
      }
      return Promise.resolve();
    };
    InMemoryCache2.prototype.removeOptimistic = function(idToRemove) {
      var newOptimisticData = this.optimisticData.removeLayer(idToRemove);
      if (newOptimisticData !== this.optimisticData) {
        this.optimisticData = newOptimisticData;
        this.broadcastWatches();
      }
    };
    InMemoryCache2.prototype.batch = function(options) {
      var _this = this;
      var update = options.update, _a2 = options.optimistic, optimistic = _a2 === void 0 ? true : _a2, removeOptimistic = options.removeOptimistic, onWatchUpdated = options.onWatchUpdated;
      var updateResult;
      var perform = function(layer) {
        var _a3 = _this, data = _a3.data, optimisticData = _a3.optimisticData;
        ++_this.txCount;
        if (layer) {
          _this.data = _this.optimisticData = layer;
        }
        try {
          return updateResult = update(_this);
        } finally {
          --_this.txCount;
          _this.data = data;
          _this.optimisticData = optimisticData;
        }
      };
      var alreadyDirty = /* @__PURE__ */ new Set();
      if (onWatchUpdated && !this.txCount) {
        this.broadcastWatches(__assign(__assign({}, options), { onWatchUpdated: function(watch) {
          alreadyDirty.add(watch);
          return false;
        } }));
      }
      if (typeof optimistic === "string") {
        this.optimisticData = this.optimisticData.addLayer(optimistic, perform);
      } else if (optimistic === false) {
        perform(this.data);
      } else {
        perform();
      }
      if (typeof removeOptimistic === "string") {
        this.optimisticData = this.optimisticData.removeLayer(removeOptimistic);
      }
      if (onWatchUpdated && alreadyDirty.size) {
        this.broadcastWatches(__assign(__assign({}, options), { onWatchUpdated: function(watch, diff) {
          var result2 = onWatchUpdated.call(this, watch, diff);
          if (result2 !== false) {
            alreadyDirty.delete(watch);
          }
          return result2;
        } }));
        if (alreadyDirty.size) {
          alreadyDirty.forEach(function(watch) {
            return _this.maybeBroadcastWatch.dirty(watch);
          });
        }
      } else {
        this.broadcastWatches(options);
      }
      return updateResult;
    };
    InMemoryCache2.prototype.performTransaction = function(update, optimisticId) {
      return this.batch({
        update,
        optimistic: optimisticId || optimisticId !== null
      });
    };
    InMemoryCache2.prototype.transformDocument = function(document2) {
      return this.addTypenameToDocument(this.addFragmentsToDocument(document2));
    };
    InMemoryCache2.prototype.fragmentMatches = function(fragment, typename) {
      return this.policies.fragmentMatches(fragment, typename);
    };
    InMemoryCache2.prototype.lookupFragment = function(fragmentName) {
      var _a2;
      return ((_a2 = this.config.fragments) === null || _a2 === void 0 ? void 0 : _a2.lookup(fragmentName)) || null;
    };
    InMemoryCache2.prototype.broadcastWatches = function(options) {
      var _this = this;
      if (!this.txCount) {
        this.watches.forEach(function(c) {
          return _this.maybeBroadcastWatch(c, options);
        });
      }
    };
    InMemoryCache2.prototype.addFragmentsToDocument = function(document2) {
      var fragments = this.config.fragments;
      return fragments ? fragments.transform(document2) : document2;
    };
    InMemoryCache2.prototype.addTypenameToDocument = function(document2) {
      if (this.addTypename) {
        return this.addTypenameTransform.transformDocument(document2);
      }
      return document2;
    };
    InMemoryCache2.prototype.broadcastWatch = function(c, options) {
      var _this = this;
      var lastDiff = c.lastDiff;
      var diff = muteDeprecations("canonizeResults", function() {
        return _this.diff(c);
      });
      if (options) {
        if (c.optimistic && typeof options.optimistic === "string") {
          diff.fromOptimisticTransaction = true;
        }
        if (options.onWatchUpdated && options.onWatchUpdated.call(this, c, diff, lastDiff) === false) {
          return;
        }
      }
      if (!lastDiff || !equal(lastDiff.result, diff.result)) {
        c.callback(c.lastDiff = diff, lastDiff);
      }
    };
    return InMemoryCache2;
  })(ApolloCache)
);
if (globalThis.__DEV__ !== false) {
  InMemoryCache.prototype.getMemoryInternals = getInMemoryCacheMemoryInternals;
}

// node_modules/@apollo/client/core/networkStatus.js
var NetworkStatus;
(function(NetworkStatus2) {
  NetworkStatus2[NetworkStatus2["loading"] = 1] = "loading";
  NetworkStatus2[NetworkStatus2["setVariables"] = 2] = "setVariables";
  NetworkStatus2[NetworkStatus2["fetchMore"] = 3] = "fetchMore";
  NetworkStatus2[NetworkStatus2["refetch"] = 4] = "refetch";
  NetworkStatus2[NetworkStatus2["poll"] = 6] = "poll";
  NetworkStatus2[NetworkStatus2["ready"] = 7] = "ready";
  NetworkStatus2[NetworkStatus2["error"] = 8] = "error";
})(NetworkStatus || (NetworkStatus = {}));
function isNetworkRequestInFlight(networkStatus) {
  return networkStatus ? networkStatus < 7 : false;
}

// node_modules/@apollo/client/core/ObservableQuery.js
var assign = Object.assign;
var hasOwnProperty6 = Object.hasOwnProperty;
var ObservableQuery = (
  /** @class */
  (function(_super) {
    __extends(ObservableQuery2, _super);
    function ObservableQuery2(_a2) {
      var queryManager = _a2.queryManager, queryInfo = _a2.queryInfo, options = _a2.options;
      var _this = this;
      var startedInactive = ObservableQuery2.inactiveOnCreation.getValue();
      _this = _super.call(this, function(observer) {
        _this._getOrCreateQuery();
        try {
          var subObserver = observer._subscription._observer;
          if (subObserver && !subObserver.error) {
            subObserver.error = defaultSubscriptionObserverErrorCallback;
          }
        } catch (_a3) {
        }
        var first2 = !_this.observers.size;
        _this.observers.add(observer);
        var last3 = _this.last;
        if (last3 && last3.error) {
          observer.error && observer.error(last3.error);
        } else if (last3 && last3.result) {
          observer.next && observer.next(_this.maskResult(last3.result));
        }
        if (first2) {
          _this.reobserve().catch(function() {
          });
        }
        return function() {
          if (_this.observers.delete(observer) && !_this.observers.size) {
            _this.tearDownQuery();
          }
        };
      }) || this;
      _this.observers = /* @__PURE__ */ new Set();
      _this.subscriptions = /* @__PURE__ */ new Set();
      _this.dirty = false;
      _this._getOrCreateQuery = function() {
        if (startedInactive) {
          queryManager["queries"].set(_this.queryId, queryInfo);
          startedInactive = false;
        }
        return _this.queryManager.getOrCreateQuery(_this.queryId);
      };
      _this.queryInfo = queryInfo;
      _this.queryManager = queryManager;
      _this.waitForOwnResult = skipCacheDataFor(options.fetchPolicy);
      _this.isTornDown = false;
      _this.subscribeToMore = _this.subscribeToMore.bind(_this);
      _this.maskResult = _this.maskResult.bind(_this);
      var _b = queryManager.defaultOptions.watchQuery, _c = _b === void 0 ? {} : _b, _d = _c.fetchPolicy, defaultFetchPolicy = _d === void 0 ? "cache-first" : _d;
      var _e = options.fetchPolicy, fetchPolicy = _e === void 0 ? defaultFetchPolicy : _e, _f = options.initialFetchPolicy, initialFetchPolicy = _f === void 0 ? fetchPolicy === "standby" ? defaultFetchPolicy : fetchPolicy : _f;
      _this.options = __assign(__assign({}, options), {
        // Remember the initial options.fetchPolicy so we can revert back to this
        // policy when variables change. This information can also be specified
        // (or overridden) by providing options.initialFetchPolicy explicitly.
        initialFetchPolicy,
        // This ensures this.options.fetchPolicy always has a string value, in
        // case options.fetchPolicy was not provided.
        fetchPolicy
      });
      _this.queryId = queryInfo.queryId || queryManager.generateQueryId();
      var opDef = getOperationDefinition(_this.query);
      _this.queryName = opDef && opDef.name && opDef.name.value;
      return _this;
    }
    Object.defineProperty(ObservableQuery2.prototype, "query", {
      // The `query` computed property will always reflect the document transformed
      // by the last run query. `this.options.query` will always reflect the raw
      // untransformed query to ensure document transforms with runtime conditionals
      // are run on the original document.
      get: function() {
        return this.lastQuery || this.options.query;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ObservableQuery2.prototype, "variables", {
      // Computed shorthand for this.options.variables, preserved for
      // backwards compatibility.
      /**
       * An object containing the variables that were provided for the query.
       */
      get: function() {
        return this.options.variables;
      },
      enumerable: false,
      configurable: true
    });
    ObservableQuery2.prototype.result = function() {
      var _this = this;
      if (globalThis.__DEV__ !== false) {
        warnDeprecated("observableQuery.result", function() {
          globalThis.__DEV__ !== false && invariant2.warn(23);
        });
      }
      return new Promise(function(resolve, reject) {
        var observer = {
          next: function(result2) {
            resolve(result2);
            _this.observers.delete(observer);
            if (!_this.observers.size) {
              _this.queryManager.removeQuery(_this.queryId);
            }
            setTimeout(function() {
              subscription.unsubscribe();
            }, 0);
          },
          error: reject
        };
        var subscription = _this.subscribe(observer);
      });
    };
    ObservableQuery2.prototype.resetDiff = function() {
      this.queryInfo.resetDiff();
    };
    ObservableQuery2.prototype.getCurrentFullResult = function(saveAsLastResult) {
      var _this = this;
      if (saveAsLastResult === void 0) {
        saveAsLastResult = true;
      }
      var lastResult = muteDeprecations("getLastResult", function() {
        return _this.getLastResult(true);
      });
      var networkStatus = this.queryInfo.networkStatus || lastResult && lastResult.networkStatus || NetworkStatus.ready;
      var result2 = __assign(__assign({}, lastResult), { loading: isNetworkRequestInFlight(networkStatus), networkStatus });
      var _a2 = this.options.fetchPolicy, fetchPolicy = _a2 === void 0 ? "cache-first" : _a2;
      if (
        // These fetch policies should never deliver data from the cache, unless
        // redelivering a previously delivered result.
        skipCacheDataFor(fetchPolicy) || // If this.options.query has @client(always: true) fields, we cannot
        // trust diff.result, since it was read from the cache without running
        // local resolvers (and it's too late to run resolvers now, since we must
        // return a result synchronously).
        this.queryManager.getDocumentInfo(this.query).hasForcedResolvers
      ) {
      } else if (this.waitForOwnResult) {
        this.queryInfo["updateWatch"]();
      } else {
        var diff = this.queryInfo.getDiff();
        if (diff.complete || this.options.returnPartialData) {
          result2.data = diff.result;
        }
        if (equal(result2.data, {})) {
          result2.data = void 0;
        }
        if (diff.complete) {
          delete result2.partial;
          if (diff.complete && result2.networkStatus === NetworkStatus.loading && (fetchPolicy === "cache-first" || fetchPolicy === "cache-only")) {
            result2.networkStatus = NetworkStatus.ready;
            result2.loading = false;
          }
        } else {
          result2.partial = true;
        }
        if (result2.networkStatus === NetworkStatus.ready && (result2.error || result2.errors)) {
          result2.networkStatus = NetworkStatus.error;
        }
        if (globalThis.__DEV__ !== false && !diff.complete && !this.options.partialRefetch && !result2.loading && !result2.data && !result2.error) {
          logMissingFieldErrors(diff.missing);
        }
      }
      if (saveAsLastResult) {
        this.updateLastResult(result2);
      }
      return result2;
    };
    ObservableQuery2.prototype.getCurrentResult = function(saveAsLastResult) {
      if (saveAsLastResult === void 0) {
        saveAsLastResult = true;
      }
      return this.maskResult(this.getCurrentFullResult(saveAsLastResult));
    };
    ObservableQuery2.prototype.isDifferentFromLastResult = function(newResult, variables) {
      if (!this.last) {
        return true;
      }
      var documentInfo = this.queryManager.getDocumentInfo(this.query);
      var dataMasking = this.queryManager.dataMasking;
      var query = dataMasking ? documentInfo.nonReactiveQuery : this.query;
      var resultIsDifferent = dataMasking || documentInfo.hasNonreactiveDirective ? !equalByQuery(query, this.last.result, newResult, this.variables) : !equal(this.last.result, newResult);
      return resultIsDifferent || variables && !equal(this.last.variables, variables);
    };
    ObservableQuery2.prototype.getLast = function(key, variablesMustMatch) {
      var last3 = this.last;
      if (last3 && last3[key] && (!variablesMustMatch || equal(last3.variables, this.variables))) {
        return last3[key];
      }
    };
    ObservableQuery2.prototype.getLastResult = function(variablesMustMatch) {
      if (globalThis.__DEV__ !== false) {
        warnDeprecated("getLastResult", function() {
          globalThis.__DEV__ !== false && invariant2.warn(24);
        });
      }
      return this.getLast("result", variablesMustMatch);
    };
    ObservableQuery2.prototype.getLastError = function(variablesMustMatch) {
      if (globalThis.__DEV__ !== false) {
        warnDeprecated("getLastError", function() {
          globalThis.__DEV__ !== false && invariant2.warn(25);
        });
      }
      return this.getLast("error", variablesMustMatch);
    };
    ObservableQuery2.prototype.resetLastResults = function() {
      if (globalThis.__DEV__ !== false) {
        warnDeprecated("resetLastResults", function() {
          globalThis.__DEV__ !== false && invariant2.warn(26);
        });
      }
      delete this.last;
      this.isTornDown = false;
    };
    ObservableQuery2.prototype.resetQueryStoreErrors = function() {
      if (globalThis.__DEV__ !== false) {
        globalThis.__DEV__ !== false && invariant2.warn(27);
      }
      this.queryManager.resetErrors(this.queryId);
    };
    ObservableQuery2.prototype.refetch = function(variables) {
      var _a2;
      var reobserveOptions = {
        // Always disable polling for refetches.
        pollInterval: 0
      };
      var fetchPolicy = this.options.fetchPolicy;
      if (fetchPolicy === "no-cache") {
        reobserveOptions.fetchPolicy = "no-cache";
      } else {
        reobserveOptions.fetchPolicy = "network-only";
      }
      if (globalThis.__DEV__ !== false && variables && hasOwnProperty6.call(variables, "variables")) {
        var queryDef = getQueryDefinition(this.query);
        var vars = queryDef.variableDefinitions;
        if (!vars || !vars.some(function(v) {
          return v.variable.name.value === "variables";
        })) {
          globalThis.__DEV__ !== false && invariant2.warn(
            28,
            variables,
            ((_a2 = queryDef.name) === null || _a2 === void 0 ? void 0 : _a2.value) || queryDef
          );
        }
      }
      if (variables && !equal(this.options.variables, variables)) {
        reobserveOptions.variables = this.options.variables = __assign(__assign({}, this.options.variables), variables);
      }
      this.queryInfo.resetLastWrite();
      return this.reobserve(reobserveOptions, NetworkStatus.refetch);
    };
    ObservableQuery2.prototype.fetchMore = function(fetchMoreOptions) {
      var _this = this;
      var combinedOptions = __assign(__assign({}, fetchMoreOptions.query ? fetchMoreOptions : __assign(__assign(__assign(__assign({}, this.options), { query: this.options.query }), fetchMoreOptions), { variables: __assign(__assign({}, this.options.variables), fetchMoreOptions.variables) })), {
        // The fetchMore request goes immediately to the network and does
        // not automatically write its result to the cache (hence no-cache
        // instead of network-only), because we allow the caller of
        // fetchMore to provide an updateQuery callback that determines how
        // the data gets written to the cache.
        fetchPolicy: "no-cache"
      });
      combinedOptions.query = this.transformDocument(combinedOptions.query);
      var qid = this.queryManager.generateQueryId();
      this.lastQuery = fetchMoreOptions.query ? this.transformDocument(this.options.query) : combinedOptions.query;
      var queryInfo = this.queryInfo;
      var originalNetworkStatus = queryInfo.networkStatus;
      queryInfo.networkStatus = NetworkStatus.fetchMore;
      if (combinedOptions.notifyOnNetworkStatusChange) {
        this.observe();
      }
      var updatedQuerySet = /* @__PURE__ */ new Set();
      var updateQuery = fetchMoreOptions === null || fetchMoreOptions === void 0 ? void 0 : fetchMoreOptions.updateQuery;
      var isCached = this.options.fetchPolicy !== "no-cache";
      if (!isCached) {
        invariant2(updateQuery, 29);
      }
      return this.queryManager.fetchQuery(qid, combinedOptions, NetworkStatus.fetchMore).then(function(fetchMoreResult) {
        _this.queryManager.removeQuery(qid);
        if (queryInfo.networkStatus === NetworkStatus.fetchMore) {
          queryInfo.networkStatus = originalNetworkStatus;
        }
        if (isCached) {
          _this.queryManager.cache.batch({
            update: function(cache) {
              var updateQuery2 = fetchMoreOptions.updateQuery;
              if (updateQuery2) {
                cache.updateQuery({
                  query: _this.query,
                  variables: _this.variables,
                  returnPartialData: true,
                  optimistic: false
                }, function(previous) {
                  return updateQuery2(previous, {
                    fetchMoreResult: fetchMoreResult.data,
                    variables: combinedOptions.variables
                  });
                });
              } else {
                cache.writeQuery({
                  query: combinedOptions.query,
                  variables: combinedOptions.variables,
                  data: fetchMoreResult.data
                });
              }
            },
            onWatchUpdated: function(watch) {
              updatedQuerySet.add(watch.query);
            }
          });
        } else {
          var lastResult = _this.getLast("result");
          var data = updateQuery(lastResult.data, {
            fetchMoreResult: fetchMoreResult.data,
            variables: combinedOptions.variables
          });
          _this.reportResult(__assign(__assign({}, lastResult), { networkStatus: originalNetworkStatus, loading: isNetworkRequestInFlight(originalNetworkStatus), data }), _this.variables);
        }
        return _this.maskResult(fetchMoreResult);
      }).finally(function() {
        if (isCached && !updatedQuerySet.has(_this.query)) {
          _this.reobserveCacheFirst();
        }
      });
    };
    ObservableQuery2.prototype.subscribeToMore = function(options) {
      var _this = this;
      var subscription = this.queryManager.startGraphQLSubscription({
        query: options.document,
        variables: options.variables,
        context: options.context
      }).subscribe({
        next: function(subscriptionData) {
          var updateQuery = options.updateQuery;
          if (updateQuery) {
            _this.updateQuery(function(previous, updateOptions) {
              return updateQuery(previous, __assign({ subscriptionData }, updateOptions));
            });
          }
        },
        error: function(err) {
          if (options.onError) {
            options.onError(err);
            return;
          }
          globalThis.__DEV__ !== false && invariant2.error(30, err);
        }
      });
      this.subscriptions.add(subscription);
      return function() {
        if (_this.subscriptions.delete(subscription)) {
          subscription.unsubscribe();
        }
      };
    };
    ObservableQuery2.prototype.setOptions = function(newOptions) {
      if (globalThis.__DEV__ !== false) {
        warnRemovedOption(newOptions, "canonizeResults", "setOptions");
        warnDeprecated("setOptions", function() {
          globalThis.__DEV__ !== false && invariant2.warn(31);
        });
      }
      return this.reobserve(newOptions);
    };
    ObservableQuery2.prototype.silentSetOptions = function(newOptions) {
      var mergedOptions = compact(this.options, newOptions || {});
      assign(this.options, mergedOptions);
    };
    ObservableQuery2.prototype.setVariables = function(variables) {
      var _this = this;
      if (equal(this.variables, variables)) {
        return this.observers.size ? muteDeprecations("observableQuery.result", function() {
          return _this.result();
        }) : Promise.resolve();
      }
      this.options.variables = variables;
      if (!this.observers.size) {
        return Promise.resolve();
      }
      return this.reobserve({
        // Reset options.fetchPolicy to its original value.
        fetchPolicy: this.options.initialFetchPolicy,
        variables
      }, NetworkStatus.setVariables);
    };
    ObservableQuery2.prototype.updateQuery = function(mapFn) {
      var queryManager = this.queryManager;
      var _a2 = queryManager.cache.diff({
        query: this.options.query,
        variables: this.variables,
        returnPartialData: true,
        optimistic: false
      }), result2 = _a2.result, complete = _a2.complete;
      var newResult = mapFn(result2, {
        variables: this.variables,
        complete: !!complete,
        previousData: result2
      });
      if (newResult) {
        queryManager.cache.writeQuery({
          query: this.options.query,
          data: newResult,
          variables: this.variables
        });
        queryManager.broadcastQueries();
      }
    };
    ObservableQuery2.prototype.startPolling = function(pollInterval) {
      this.options.pollInterval = pollInterval;
      this.updatePolling();
    };
    ObservableQuery2.prototype.stopPolling = function() {
      this.options.pollInterval = 0;
      this.updatePolling();
    };
    ObservableQuery2.prototype.applyNextFetchPolicy = function(reason, options) {
      if (options.nextFetchPolicy) {
        var _a2 = options.fetchPolicy, fetchPolicy = _a2 === void 0 ? "cache-first" : _a2, _b = options.initialFetchPolicy, initialFetchPolicy = _b === void 0 ? fetchPolicy : _b;
        if (fetchPolicy === "standby") {
        } else if (typeof options.nextFetchPolicy === "function") {
          options.fetchPolicy = options.nextFetchPolicy(fetchPolicy, {
            reason,
            options,
            observable: this,
            initialFetchPolicy
          });
        } else if (reason === "variables-changed") {
          options.fetchPolicy = initialFetchPolicy;
        } else {
          options.fetchPolicy = options.nextFetchPolicy;
        }
      }
      return options.fetchPolicy;
    };
    ObservableQuery2.prototype.fetch = function(options, newNetworkStatus, query) {
      var queryInfo = this._getOrCreateQuery();
      queryInfo.setObservableQuery(this);
      return this.queryManager["fetchConcastWithInfo"](queryInfo, options, newNetworkStatus, query);
    };
    ObservableQuery2.prototype.updatePolling = function() {
      var _this = this;
      if (this.queryManager.ssrMode) {
        return;
      }
      var _a2 = this, pollingInfo = _a2.pollingInfo, pollInterval = _a2.options.pollInterval;
      if (!pollInterval || !this.hasObservers()) {
        if (pollingInfo) {
          clearTimeout(pollingInfo.timeout);
          delete this.pollingInfo;
        }
        return;
      }
      if (pollingInfo && pollingInfo.interval === pollInterval) {
        return;
      }
      invariant2(pollInterval, 32);
      var info = pollingInfo || (this.pollingInfo = {});
      info.interval = pollInterval;
      var maybeFetch = function() {
        var _a3, _b;
        if (_this.pollingInfo) {
          if (!isNetworkRequestInFlight(_this.queryInfo.networkStatus) && !((_b = (_a3 = _this.options).skipPollAttempt) === null || _b === void 0 ? void 0 : _b.call(_a3))) {
            _this.reobserve({
              // Most fetchPolicy options don't make sense to use in a polling context, as
              // users wouldn't want to be polling the cache directly. However, network-only and
              // no-cache are both useful for when the user wants to control whether or not the
              // polled results are written to the cache.
              fetchPolicy: _this.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
            }, NetworkStatus.poll).then(poll, poll);
          } else {
            poll();
          }
        }
      };
      var poll = function() {
        var info2 = _this.pollingInfo;
        if (info2) {
          clearTimeout(info2.timeout);
          info2.timeout = setTimeout(maybeFetch, info2.interval);
        }
      };
      poll();
    };
    ObservableQuery2.prototype.updateLastResult = function(newResult, variables) {
      var _this = this;
      if (variables === void 0) {
        variables = this.variables;
      }
      var error = muteDeprecations("getLastError", function() {
        return _this.getLastError();
      });
      if (error && this.last && !equal(variables, this.last.variables)) {
        error = void 0;
      }
      return this.last = __assign({ result: this.queryManager.assumeImmutableResults ? newResult : cloneDeep(newResult), variables }, error ? { error } : null);
    };
    ObservableQuery2.prototype.reobserveAsConcast = function(newOptions, newNetworkStatus) {
      var _this = this;
      this.isTornDown = false;
      var useDisposableConcast = (
        // Refetching uses a disposable Concast to allow refetches using different
        // options/variables, without permanently altering the options of the
        // original ObservableQuery.
        newNetworkStatus === NetworkStatus.refetch || // The fetchMore method does not actually call the reobserve method, but,
        // if it did, it would definitely use a disposable Concast.
        newNetworkStatus === NetworkStatus.fetchMore || // Polling uses a disposable Concast so the polling options (which force
        // fetchPolicy to be "network-only" or "no-cache") won't override the original options.
        newNetworkStatus === NetworkStatus.poll
      );
      var oldVariables = this.options.variables;
      var oldFetchPolicy = this.options.fetchPolicy;
      var mergedOptions = compact(this.options, newOptions || {});
      var options = useDisposableConcast ? (
        // Disposable Concast fetches receive a shallow copy of this.options
        // (merged with newOptions), leaving this.options unmodified.
        mergedOptions
      ) : assign(this.options, mergedOptions);
      var query = this.transformDocument(options.query);
      this.lastQuery = query;
      if (!useDisposableConcast) {
        this.updatePolling();
        if (newOptions && newOptions.variables && !equal(newOptions.variables, oldVariables) && // Don't mess with the fetchPolicy if it's currently "standby".
        options.fetchPolicy !== "standby" && // If we're changing the fetchPolicy anyway, don't try to change it here
        // using applyNextFetchPolicy. The explicit options.fetchPolicy wins.
        (options.fetchPolicy === oldFetchPolicy || // A `nextFetchPolicy` function has even higher priority, though,
        // so in that case `applyNextFetchPolicy` must be called.
        typeof options.nextFetchPolicy === "function")) {
          this.applyNextFetchPolicy("variables-changed", options);
          if (newNetworkStatus === void 0) {
            newNetworkStatus = NetworkStatus.setVariables;
          }
        }
      }
      this.waitForOwnResult && (this.waitForOwnResult = skipCacheDataFor(options.fetchPolicy));
      var finishWaitingForOwnResult = function() {
        if (_this.concast === concast) {
          _this.waitForOwnResult = false;
        }
      };
      var variables = options.variables && __assign({}, options.variables);
      var _a2 = this.fetch(options, newNetworkStatus, query), concast = _a2.concast, fromLink = _a2.fromLink;
      var observer = {
        next: function(result2) {
          if (equal(_this.variables, variables)) {
            finishWaitingForOwnResult();
            _this.reportResult(result2, variables);
          }
        },
        error: function(error) {
          if (equal(_this.variables, variables)) {
            if (!isApolloError(error)) {
              error = new ApolloError({ networkError: error });
            }
            finishWaitingForOwnResult();
            _this.reportError(error, variables);
          }
        }
      };
      if (!useDisposableConcast && (fromLink || !this.concast)) {
        if (this.concast && this.observer) {
          this.concast.removeObserver(this.observer);
        }
        this.concast = concast;
        this.observer = observer;
      }
      concast.addObserver(observer);
      return concast;
    };
    ObservableQuery2.prototype.reobserve = function(newOptions, newNetworkStatus) {
      return preventUnhandledRejection(this.reobserveAsConcast(newOptions, newNetworkStatus).promise.then(this.maskResult));
    };
    ObservableQuery2.prototype.resubscribeAfterError = function() {
      var _this = this;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var last3 = this.last;
      muteDeprecations("resetLastResults", function() {
        return _this.resetLastResults();
      });
      var subscription = this.subscribe.apply(this, args);
      this.last = last3;
      return subscription;
    };
    ObservableQuery2.prototype.observe = function() {
      this.reportResult(
        // Passing false is important so that this.getCurrentResult doesn't
        // save the fetchMore result as this.lastResult, causing it to be
        // ignored due to the this.isDifferentFromLastResult check in
        // this.reportResult.
        this.getCurrentFullResult(false),
        this.variables
      );
    };
    ObservableQuery2.prototype.reportResult = function(result2, variables) {
      var _this = this;
      var lastError = muteDeprecations("getLastError", function() {
        return _this.getLastError();
      });
      var isDifferent = this.isDifferentFromLastResult(result2, variables);
      if (lastError || !result2.partial || this.options.returnPartialData) {
        this.updateLastResult(result2, variables);
      }
      if (lastError || isDifferent) {
        iterateObserversSafely(this.observers, "next", this.maskResult(result2));
      }
    };
    ObservableQuery2.prototype.reportError = function(error, variables) {
      var _this = this;
      var errorResult = __assign(__assign({}, muteDeprecations("getLastResult", function() {
        return _this.getLastResult();
      })), { error, errors: error.graphQLErrors, networkStatus: NetworkStatus.error, loading: false });
      this.updateLastResult(errorResult, variables);
      iterateObserversSafely(this.observers, "error", this.last.error = error);
    };
    ObservableQuery2.prototype.hasObservers = function() {
      return this.observers.size > 0;
    };
    ObservableQuery2.prototype.tearDownQuery = function() {
      if (this.isTornDown)
        return;
      if (this.concast && this.observer) {
        this.concast.removeObserver(this.observer);
        delete this.concast;
        delete this.observer;
      }
      this.stopPolling();
      this.subscriptions.forEach(function(sub) {
        return sub.unsubscribe();
      });
      this.subscriptions.clear();
      this.queryManager.stopQuery(this.queryId);
      this.observers.clear();
      this.isTornDown = true;
    };
    ObservableQuery2.prototype.transformDocument = function(document2) {
      return this.queryManager.transform(document2);
    };
    ObservableQuery2.prototype.maskResult = function(result2) {
      return result2 && "data" in result2 ? __assign(__assign({}, result2), { data: this.queryManager.maskOperation({
        document: this.query,
        data: result2.data,
        fetchPolicy: this.options.fetchPolicy,
        id: this.queryId
      }) }) : result2;
    };
    ObservableQuery2.prototype.resetNotifications = function() {
      this.cancelNotifyTimeout();
      this.dirty = false;
    };
    ObservableQuery2.prototype.cancelNotifyTimeout = function() {
      if (this.notifyTimeout) {
        clearTimeout(this.notifyTimeout);
        this.notifyTimeout = void 0;
      }
    };
    ObservableQuery2.prototype.scheduleNotify = function() {
      var _this = this;
      if (this.dirty)
        return;
      this.dirty = true;
      if (!this.notifyTimeout) {
        this.notifyTimeout = setTimeout(function() {
          return _this.notify();
        }, 0);
      }
    };
    ObservableQuery2.prototype.notify = function() {
      this.cancelNotifyTimeout();
      if (this.dirty) {
        if (this.options.fetchPolicy == "cache-only" || this.options.fetchPolicy == "cache-and-network" || !isNetworkRequestInFlight(this.queryInfo.networkStatus)) {
          var diff = this.queryInfo.getDiff();
          if (diff.fromOptimisticTransaction) {
            this.observe();
          } else {
            this.reobserveCacheFirst();
          }
        }
      }
      this.dirty = false;
    };
    ObservableQuery2.prototype.reobserveCacheFirst = function() {
      var _a2 = this.options, fetchPolicy = _a2.fetchPolicy, nextFetchPolicy = _a2.nextFetchPolicy;
      if (fetchPolicy === "cache-and-network" || fetchPolicy === "network-only") {
        return this.reobserve({
          fetchPolicy: "cache-first",
          // Use a temporary nextFetchPolicy function that replaces itself with the
          // previous nextFetchPolicy value and returns the original fetchPolicy.
          nextFetchPolicy: function(currentFetchPolicy, context) {
            this.nextFetchPolicy = nextFetchPolicy;
            if (typeof this.nextFetchPolicy === "function") {
              return this.nextFetchPolicy(currentFetchPolicy, context);
            }
            return fetchPolicy;
          }
        });
      }
      return this.reobserve();
    };
    ObservableQuery2.inactiveOnCreation = new Slot();
    return ObservableQuery2;
  })(Observable2)
);
fixObservableSubclass(ObservableQuery);
function defaultSubscriptionObserverErrorCallback(error) {
  globalThis.__DEV__ !== false && invariant2.error(33, error.message, error.stack);
}
function logMissingFieldErrors(missing) {
  if (globalThis.__DEV__ !== false && missing) {
    globalThis.__DEV__ !== false && invariant2.debug(34, missing);
  }
}
function skipCacheDataFor(fetchPolicy) {
  return fetchPolicy === "network-only" || fetchPolicy === "no-cache" || fetchPolicy === "standby";
}

// node_modules/@apollo/client/core/QueryInfo.js
var destructiveMethodCounts = new (canUseWeakMap ? WeakMap : Map)();
function wrapDestructiveCacheMethod(cache, methodName) {
  var original = cache[methodName];
  if (typeof original === "function") {
    cache[methodName] = function() {
      destructiveMethodCounts.set(
        cache,
        // The %1e15 allows the count to wrap around to 0 safely every
        // quadrillion evictions, so there's no risk of overflow. To be
        // clear, this is more of a pedantic principle than something
        // that matters in any conceivable practical scenario.
        (destructiveMethodCounts.get(cache) + 1) % 1e15
      );
      return original.apply(this, arguments);
    };
  }
}
var QueryInfo = (
  /** @class */
  (function() {
    function QueryInfo2(queryManager, queryId) {
      if (queryId === void 0) {
        queryId = queryManager.generateQueryId();
      }
      this.queryId = queryId;
      this.document = null;
      this.lastRequestId = 1;
      this.stopped = false;
      this.observableQuery = null;
      var cache = this.cache = queryManager.cache;
      if (!destructiveMethodCounts.has(cache)) {
        destructiveMethodCounts.set(cache, 0);
        wrapDestructiveCacheMethod(cache, "evict");
        wrapDestructiveCacheMethod(cache, "modify");
        wrapDestructiveCacheMethod(cache, "reset");
      }
    }
    QueryInfo2.prototype.init = function(query) {
      var networkStatus = query.networkStatus || NetworkStatus.loading;
      if (this.variables && this.networkStatus !== NetworkStatus.loading && !equal(this.variables, query.variables)) {
        networkStatus = NetworkStatus.setVariables;
      }
      if (!equal(query.variables, this.variables)) {
        this.lastDiff = void 0;
        this.cancel();
      }
      Object.assign(this, {
        document: query.document,
        variables: query.variables,
        networkError: null,
        graphQLErrors: this.graphQLErrors || [],
        networkStatus
      });
      if (query.observableQuery) {
        this.setObservableQuery(query.observableQuery);
      }
      if (query.lastRequestId) {
        this.lastRequestId = query.lastRequestId;
      }
      return this;
    };
    QueryInfo2.prototype.resetDiff = function() {
      this.lastDiff = void 0;
    };
    QueryInfo2.prototype.getDiff = function() {
      var _this = this;
      var options = this.getDiffOptions();
      if (this.lastDiff && equal(options, this.lastDiff.options)) {
        return this.lastDiff.diff;
      }
      this.updateWatch(this.variables);
      var oq = this.observableQuery;
      if (oq && oq.options.fetchPolicy === "no-cache") {
        return { complete: false };
      }
      var diff = muteDeprecations("canonizeResults", function() {
        return _this.cache.diff(options);
      });
      this.updateLastDiff(diff, options);
      return diff;
    };
    QueryInfo2.prototype.updateLastDiff = function(diff, options) {
      this.lastDiff = diff ? {
        diff,
        options: options || this.getDiffOptions()
      } : void 0;
    };
    QueryInfo2.prototype.getDiffOptions = function(variables) {
      var _a2;
      if (variables === void 0) {
        variables = this.variables;
      }
      return {
        query: this.document,
        variables,
        returnPartialData: true,
        optimistic: true,
        canonizeResults: (_a2 = this.observableQuery) === null || _a2 === void 0 ? void 0 : _a2.options.canonizeResults
      };
    };
    QueryInfo2.prototype.setDiff = function(diff) {
      var _this = this;
      var _a2;
      var oldDiff = this.lastDiff && this.lastDiff.diff;
      if (diff && !diff.complete && muteDeprecations("getLastError", function() {
        var _a3;
        return (_a3 = _this.observableQuery) === null || _a3 === void 0 ? void 0 : _a3.getLastError();
      })) {
        return;
      }
      this.updateLastDiff(diff);
      if (!equal(oldDiff && oldDiff.result, diff && diff.result)) {
        (_a2 = this.observableQuery) === null || _a2 === void 0 ? void 0 : _a2["scheduleNotify"]();
      }
    };
    QueryInfo2.prototype.setObservableQuery = function(oq) {
      if (oq === this.observableQuery)
        return;
      this.observableQuery = oq;
      if (oq) {
        oq["queryInfo"] = this;
      }
    };
    QueryInfo2.prototype.stop = function() {
      var _a2;
      if (!this.stopped) {
        this.stopped = true;
        (_a2 = this.observableQuery) === null || _a2 === void 0 ? void 0 : _a2["resetNotifications"]();
        this.cancel();
        var oq = this.observableQuery;
        if (oq)
          oq.stopPolling();
      }
    };
    QueryInfo2.prototype.cancel = function() {
      var _a2;
      (_a2 = this.cancelWatch) === null || _a2 === void 0 ? void 0 : _a2.call(this);
      this.cancelWatch = void 0;
    };
    QueryInfo2.prototype.updateWatch = function(variables) {
      var _this = this;
      if (variables === void 0) {
        variables = this.variables;
      }
      var oq = this.observableQuery;
      if (oq && oq.options.fetchPolicy === "no-cache") {
        return;
      }
      var watchOptions = __assign(__assign({}, this.getDiffOptions(variables)), { watcher: this, callback: function(diff) {
        return _this.setDiff(diff);
      } });
      if (!this.lastWatch || !equal(watchOptions, this.lastWatch)) {
        this.cancel();
        this.cancelWatch = this.cache.watch(this.lastWatch = watchOptions);
      }
    };
    QueryInfo2.prototype.resetLastWrite = function() {
      this.lastWrite = void 0;
    };
    QueryInfo2.prototype.shouldWrite = function(result2, variables) {
      var lastWrite = this.lastWrite;
      return !(lastWrite && // If cache.evict has been called since the last time we wrote this
      // data into the cache, there's a chance writing this result into
      // the cache will repair what was evicted.
      lastWrite.dmCount === destructiveMethodCounts.get(this.cache) && equal(variables, lastWrite.variables) && equal(result2.data, lastWrite.result.data));
    };
    QueryInfo2.prototype.markResult = function(result2, document2, options, cacheWriteBehavior) {
      var _this = this;
      var _a2;
      var merger = new DeepMerger();
      var graphQLErrors = isNonEmptyArray(result2.errors) ? result2.errors.slice(0) : [];
      (_a2 = this.observableQuery) === null || _a2 === void 0 ? void 0 : _a2["resetNotifications"]();
      if ("incremental" in result2 && isNonEmptyArray(result2.incremental)) {
        var mergedData = mergeIncrementalData(this.getDiff().result, result2);
        result2.data = mergedData;
      } else if ("hasNext" in result2 && result2.hasNext) {
        var diff = this.getDiff();
        result2.data = merger.merge(diff.result, result2.data);
      }
      this.graphQLErrors = graphQLErrors;
      if (options.fetchPolicy === "no-cache") {
        this.updateLastDiff({ result: result2.data, complete: true }, this.getDiffOptions(options.variables));
      } else if (cacheWriteBehavior !== 0) {
        if (shouldWriteResult(result2, options.errorPolicy)) {
          this.cache.performTransaction(function(cache) {
            if (_this.shouldWrite(result2, options.variables)) {
              cache.writeQuery({
                query: document2,
                data: result2.data,
                variables: options.variables,
                overwrite: cacheWriteBehavior === 1
              });
              _this.lastWrite = {
                result: result2,
                variables: options.variables,
                dmCount: destructiveMethodCounts.get(_this.cache)
              };
            } else {
              if (_this.lastDiff && _this.lastDiff.diff.complete) {
                result2.data = _this.lastDiff.diff.result;
                return;
              }
            }
            var diffOptions = _this.getDiffOptions(options.variables);
            var diff2 = muteDeprecations("canonizeResults", function() {
              return cache.diff(diffOptions);
            });
            if (!_this.stopped && equal(_this.variables, options.variables)) {
              _this.updateWatch(options.variables);
            }
            _this.updateLastDiff(diff2, diffOptions);
            if (diff2.complete) {
              result2.data = diff2.result;
            }
          });
        } else {
          this.lastWrite = void 0;
        }
      }
    };
    QueryInfo2.prototype.markReady = function() {
      this.networkError = null;
      return this.networkStatus = NetworkStatus.ready;
    };
    QueryInfo2.prototype.markError = function(error) {
      var _a2;
      this.networkStatus = NetworkStatus.error;
      this.lastWrite = void 0;
      (_a2 = this.observableQuery) === null || _a2 === void 0 ? void 0 : _a2["resetNotifications"]();
      if (error.graphQLErrors) {
        this.graphQLErrors = error.graphQLErrors;
      }
      if (error.networkError) {
        this.networkError = error.networkError;
      }
      return error;
    };
    return QueryInfo2;
  })()
);
function shouldWriteResult(result2, errorPolicy) {
  if (errorPolicy === void 0) {
    errorPolicy = "none";
  }
  var ignoreErrors = errorPolicy === "ignore" || errorPolicy === "all";
  var writeWithErrors = !graphQLResultHasError(result2);
  if (!writeWithErrors && ignoreErrors && result2.data) {
    writeWithErrors = true;
  }
  return writeWithErrors;
}

// node_modules/@apollo/client/core/QueryManager.js
var hasOwnProperty7 = Object.prototype.hasOwnProperty;
var IGNORE = /* @__PURE__ */ Object.create(null);
var QueryManager = (
  /** @class */
  (function() {
    function QueryManager2(options) {
      var _this = this;
      this.clientAwareness = {};
      this.queries = /* @__PURE__ */ new Map();
      this.fetchCancelFns = /* @__PURE__ */ new Map();
      this.transformCache = new AutoCleanedWeakCache(
        cacheSizes["queryManager.getDocumentInfo"] || 2e3
        /* defaultCacheSizes["queryManager.getDocumentInfo"] */
      );
      this.queryIdCounter = 1;
      this.requestIdCounter = 1;
      this.mutationIdCounter = 1;
      this.inFlightLinkObservables = new Trie(false);
      this.noCacheWarningsByQueryId = /* @__PURE__ */ new Set();
      var defaultDocumentTransform = new DocumentTransform(
        function(document2) {
          return _this.cache.transformDocument(document2);
        },
        // Allow the apollo cache to manage its own transform caches
        { cache: false }
      );
      this.cache = options.cache;
      this.link = options.link;
      this.defaultOptions = options.defaultOptions;
      this.queryDeduplication = options.queryDeduplication;
      this.clientAwareness = options.clientAwareness;
      this.localState = options.localState;
      this.ssrMode = options.ssrMode;
      this.assumeImmutableResults = options.assumeImmutableResults;
      this.dataMasking = options.dataMasking;
      var documentTransform = options.documentTransform;
      this.documentTransform = documentTransform ? defaultDocumentTransform.concat(documentTransform).concat(defaultDocumentTransform) : defaultDocumentTransform;
      this.defaultContext = options.defaultContext || /* @__PURE__ */ Object.create(null);
      if (this.onBroadcast = options.onBroadcast) {
        this.mutationStore = /* @__PURE__ */ Object.create(null);
      }
    }
    QueryManager2.prototype.stop = function() {
      var _this = this;
      this.queries.forEach(function(_info, queryId) {
        _this.stopQueryNoBroadcast(queryId);
      });
      this.cancelPendingFetches(newInvariantError(35));
    };
    QueryManager2.prototype.cancelPendingFetches = function(error) {
      this.fetchCancelFns.forEach(function(cancel) {
        return cancel(error);
      });
      this.fetchCancelFns.clear();
    };
    QueryManager2.prototype.mutate = function(_a2) {
      return __awaiter(this, arguments, void 0, function(_b) {
        var mutationId, hasClientExports2, mutationStoreValue, isOptimistic, self2;
        var _c, _d;
        var mutation = _b.mutation, variables = _b.variables, optimisticResponse = _b.optimisticResponse, updateQueries = _b.updateQueries, _e = _b.refetchQueries, refetchQueries = _e === void 0 ? [] : _e, _f = _b.awaitRefetchQueries, awaitRefetchQueries = _f === void 0 ? false : _f, updateWithProxyFn = _b.update, onQueryUpdated = _b.onQueryUpdated, _g = _b.fetchPolicy, fetchPolicy = _g === void 0 ? ((_c = this.defaultOptions.mutate) === null || _c === void 0 ? void 0 : _c.fetchPolicy) || "network-only" : _g, _h = _b.errorPolicy, errorPolicy = _h === void 0 ? ((_d = this.defaultOptions.mutate) === null || _d === void 0 ? void 0 : _d.errorPolicy) || "none" : _h, keepRootFields = _b.keepRootFields, context = _b.context;
        return __generator(this, function(_j) {
          switch (_j.label) {
            case 0:
              invariant2(mutation, 36);
              invariant2(fetchPolicy === "network-only" || fetchPolicy === "no-cache", 37);
              mutationId = this.generateMutationId();
              mutation = this.cache.transformForLink(this.transform(mutation));
              hasClientExports2 = this.getDocumentInfo(mutation).hasClientExports;
              variables = this.getVariables(mutation, variables);
              if (!hasClientExports2) return [3, 2];
              return [4, this.localState.addExportedVariables(mutation, variables, context)];
            case 1:
              variables = _j.sent();
              _j.label = 2;
            case 2:
              mutationStoreValue = this.mutationStore && (this.mutationStore[mutationId] = {
                mutation,
                variables,
                loading: true,
                error: null
              });
              isOptimistic = optimisticResponse && this.markMutationOptimistic(optimisticResponse, {
                mutationId,
                document: mutation,
                variables,
                fetchPolicy,
                errorPolicy,
                context,
                updateQueries,
                update: updateWithProxyFn,
                keepRootFields
              });
              this.broadcastQueries();
              self2 = this;
              return [2, new Promise(function(resolve, reject) {
                return asyncMap(self2.getObservableFromLink(mutation, __assign(__assign({}, context), { optimisticResponse: isOptimistic ? optimisticResponse : void 0 }), variables, {}, false), function(result2) {
                  if (graphQLResultHasError(result2) && errorPolicy === "none") {
                    throw new ApolloError({
                      graphQLErrors: getGraphQLErrorsFromResult(result2)
                    });
                  }
                  if (mutationStoreValue) {
                    mutationStoreValue.loading = false;
                    mutationStoreValue.error = null;
                  }
                  var storeResult = __assign({}, result2);
                  if (typeof refetchQueries === "function") {
                    refetchQueries = refetchQueries(storeResult);
                  }
                  if (errorPolicy === "ignore" && graphQLResultHasError(storeResult)) {
                    delete storeResult.errors;
                  }
                  return self2.markMutationResult({
                    mutationId,
                    result: storeResult,
                    document: mutation,
                    variables,
                    fetchPolicy,
                    errorPolicy,
                    context,
                    update: updateWithProxyFn,
                    updateQueries,
                    awaitRefetchQueries,
                    refetchQueries,
                    removeOptimistic: isOptimistic ? mutationId : void 0,
                    onQueryUpdated,
                    keepRootFields
                  });
                }).subscribe({
                  next: function(storeResult) {
                    self2.broadcastQueries();
                    if (!("hasNext" in storeResult) || storeResult.hasNext === false) {
                      resolve(__assign(__assign({}, storeResult), { data: self2.maskOperation({
                        document: mutation,
                        data: storeResult.data,
                        fetchPolicy,
                        id: mutationId
                      }) }));
                    }
                  },
                  error: function(err) {
                    if (mutationStoreValue) {
                      mutationStoreValue.loading = false;
                      mutationStoreValue.error = err;
                    }
                    if (isOptimistic) {
                      self2.cache.removeOptimistic(mutationId);
                    }
                    self2.broadcastQueries();
                    reject(err instanceof ApolloError ? err : new ApolloError({
                      networkError: err
                    }));
                  }
                });
              })];
          }
        });
      });
    };
    QueryManager2.prototype.markMutationResult = function(mutation, cache) {
      var _this = this;
      if (cache === void 0) {
        cache = this.cache;
      }
      var result2 = mutation.result;
      var cacheWrites = [];
      var skipCache = mutation.fetchPolicy === "no-cache";
      if (!skipCache && shouldWriteResult(result2, mutation.errorPolicy)) {
        if (!isExecutionPatchIncrementalResult(result2)) {
          cacheWrites.push({
            result: result2.data,
            dataId: "ROOT_MUTATION",
            query: mutation.document,
            variables: mutation.variables
          });
        }
        if (isExecutionPatchIncrementalResult(result2) && isNonEmptyArray(result2.incremental)) {
          var diff = cache.diff({
            id: "ROOT_MUTATION",
            // The cache complains if passed a mutation where it expects a
            // query, so we transform mutations and subscriptions to queries
            // (only once, thanks to this.transformCache).
            query: this.getDocumentInfo(mutation.document).asQuery,
            variables: mutation.variables,
            optimistic: false,
            returnPartialData: true
          });
          var mergedData = void 0;
          if (diff.result) {
            mergedData = mergeIncrementalData(diff.result, result2);
          }
          if (typeof mergedData !== "undefined") {
            result2.data = mergedData;
            cacheWrites.push({
              result: mergedData,
              dataId: "ROOT_MUTATION",
              query: mutation.document,
              variables: mutation.variables
            });
          }
        }
        var updateQueries_1 = mutation.updateQueries;
        if (updateQueries_1) {
          this.queries.forEach(function(_a2, queryId) {
            var observableQuery = _a2.observableQuery;
            var queryName = observableQuery && observableQuery.queryName;
            if (!queryName || !hasOwnProperty7.call(updateQueries_1, queryName)) {
              return;
            }
            var updater = updateQueries_1[queryName];
            var _b = _this.queries.get(queryId), document2 = _b.document, variables = _b.variables;
            var _c = cache.diff({
              query: document2,
              variables,
              returnPartialData: true,
              optimistic: false
            }), currentQueryResult = _c.result, complete = _c.complete;
            if (complete && currentQueryResult) {
              var nextQueryResult = updater(currentQueryResult, {
                mutationResult: result2,
                queryName: document2 && getOperationName(document2) || void 0,
                queryVariables: variables
              });
              if (nextQueryResult) {
                cacheWrites.push({
                  result: nextQueryResult,
                  dataId: "ROOT_QUERY",
                  query: document2,
                  variables
                });
              }
            }
          });
        }
      }
      if (cacheWrites.length > 0 || (mutation.refetchQueries || "").length > 0 || mutation.update || mutation.onQueryUpdated || mutation.removeOptimistic) {
        var results_1 = [];
        this.refetchQueries({
          updateCache: function(cache2) {
            if (!skipCache) {
              cacheWrites.forEach(function(write) {
                return cache2.write(write);
              });
            }
            var update = mutation.update;
            var isFinalResult = !isExecutionPatchResult(result2) || isExecutionPatchIncrementalResult(result2) && !result2.hasNext;
            if (update) {
              if (!skipCache) {
                var diff2 = cache2.diff({
                  id: "ROOT_MUTATION",
                  // The cache complains if passed a mutation where it expects a
                  // query, so we transform mutations and subscriptions to queries
                  // (only once, thanks to this.transformCache).
                  query: _this.getDocumentInfo(mutation.document).asQuery,
                  variables: mutation.variables,
                  optimistic: false,
                  returnPartialData: true
                });
                if (diff2.complete) {
                  result2 = __assign(__assign({}, result2), { data: diff2.result });
                  if ("incremental" in result2) {
                    delete result2.incremental;
                  }
                  if ("hasNext" in result2) {
                    delete result2.hasNext;
                  }
                }
              }
              if (isFinalResult) {
                update(cache2, result2, {
                  context: mutation.context,
                  variables: mutation.variables
                });
              }
            }
            if (!skipCache && !mutation.keepRootFields && isFinalResult) {
              cache2.modify({
                id: "ROOT_MUTATION",
                fields: function(value, _a2) {
                  var fieldName = _a2.fieldName, DELETE2 = _a2.DELETE;
                  return fieldName === "__typename" ? value : DELETE2;
                }
              });
            }
          },
          include: mutation.refetchQueries,
          // Write the final mutation.result to the root layer of the cache.
          optimistic: false,
          // Remove the corresponding optimistic layer at the same time as we
          // write the final non-optimistic result.
          removeOptimistic: mutation.removeOptimistic,
          // Let the caller of client.mutate optionally determine the refetching
          // behavior for watched queries after the mutation.update function runs.
          // If no onQueryUpdated function was provided for this mutation, pass
          // null instead of undefined to disable the default refetching behavior.
          onQueryUpdated: mutation.onQueryUpdated || null
        }).forEach(function(result3) {
          return results_1.push(result3);
        });
        if (mutation.awaitRefetchQueries || mutation.onQueryUpdated) {
          return Promise.all(results_1).then(function() {
            return result2;
          });
        }
      }
      return Promise.resolve(result2);
    };
    QueryManager2.prototype.markMutationOptimistic = function(optimisticResponse, mutation) {
      var _this = this;
      var data = typeof optimisticResponse === "function" ? optimisticResponse(mutation.variables, { IGNORE }) : optimisticResponse;
      if (data === IGNORE) {
        return false;
      }
      this.cache.recordOptimisticTransaction(function(cache) {
        try {
          _this.markMutationResult(__assign(__assign({}, mutation), { result: { data } }), cache);
        } catch (error) {
          globalThis.__DEV__ !== false && invariant2.error(error);
        }
      }, mutation.mutationId);
      return true;
    };
    QueryManager2.prototype.fetchQuery = function(queryId, options, networkStatus) {
      return this.fetchConcastWithInfo(this.getOrCreateQuery(queryId), options, networkStatus).concast.promise;
    };
    QueryManager2.prototype.getQueryStore = function() {
      var store = /* @__PURE__ */ Object.create(null);
      this.queries.forEach(function(info, queryId) {
        store[queryId] = {
          variables: info.variables,
          networkStatus: info.networkStatus,
          networkError: info.networkError,
          graphQLErrors: info.graphQLErrors
        };
      });
      return store;
    };
    QueryManager2.prototype.resetErrors = function(queryId) {
      var queryInfo = this.queries.get(queryId);
      if (queryInfo) {
        queryInfo.networkError = void 0;
        queryInfo.graphQLErrors = [];
      }
    };
    QueryManager2.prototype.transform = function(document2) {
      return this.documentTransform.transformDocument(document2);
    };
    QueryManager2.prototype.getDocumentInfo = function(document2) {
      var transformCache = this.transformCache;
      if (!transformCache.has(document2)) {
        var cacheEntry = {
          // TODO These three calls (hasClientExports, shouldForceResolvers, and
          // usesNonreactiveDirective) are performing independent full traversals
          // of the transformed document. We should consider merging these
          // traversals into a single pass in the future, though the work is
          // cached after the first time.
          hasClientExports: hasClientExports(document2),
          hasForcedResolvers: this.localState.shouldForceResolvers(document2),
          hasNonreactiveDirective: hasDirectives(["nonreactive"], document2),
          nonReactiveQuery: addNonReactiveToNamedFragments(document2),
          clientQuery: this.localState.clientQuery(document2),
          serverQuery: removeDirectivesFromDocument([
            { name: "client", remove: true },
            { name: "connection" },
            { name: "nonreactive" },
            { name: "unmask" }
          ], document2),
          defaultVars: getDefaultValues(getOperationDefinition(document2)),
          // Transform any mutation or subscription operations to query operations
          // so we can read/write them from/to the cache.
          asQuery: __assign(__assign({}, document2), { definitions: document2.definitions.map(function(def) {
            if (def.kind === "OperationDefinition" && def.operation !== "query") {
              return __assign(__assign({}, def), { operation: "query" });
            }
            return def;
          }) })
        };
        transformCache.set(document2, cacheEntry);
      }
      return transformCache.get(document2);
    };
    QueryManager2.prototype.getVariables = function(document2, variables) {
      return __assign(__assign({}, this.getDocumentInfo(document2).defaultVars), variables);
    };
    QueryManager2.prototype.watchQuery = function(options) {
      var query = this.transform(options.query);
      options = __assign(__assign({}, options), { variables: this.getVariables(query, options.variables) });
      if (typeof options.notifyOnNetworkStatusChange === "undefined") {
        options.notifyOnNetworkStatusChange = false;
      }
      var queryInfo = new QueryInfo(this);
      var observable2 = new ObservableQuery({
        queryManager: this,
        queryInfo,
        options
      });
      observable2["lastQuery"] = query;
      if (!ObservableQuery["inactiveOnCreation"].getValue()) {
        this.queries.set(observable2.queryId, queryInfo);
      }
      queryInfo.init({
        document: query,
        observableQuery: observable2,
        variables: observable2.variables
      });
      return observable2;
    };
    QueryManager2.prototype.query = function(options, queryId) {
      var _this = this;
      if (queryId === void 0) {
        queryId = this.generateQueryId();
      }
      invariant2(options.query, 38);
      invariant2(options.query.kind === "Document", 39);
      invariant2(!options.returnPartialData, 40);
      invariant2(!options.pollInterval, 41);
      var query = this.transform(options.query);
      return this.fetchQuery(queryId, __assign(__assign({}, options), { query })).then(function(result2) {
        return result2 && __assign(__assign({}, result2), { data: _this.maskOperation({
          document: query,
          data: result2.data,
          fetchPolicy: options.fetchPolicy,
          id: queryId
        }) });
      }).finally(function() {
        return _this.stopQuery(queryId);
      });
    };
    QueryManager2.prototype.generateQueryId = function() {
      return String(this.queryIdCounter++);
    };
    QueryManager2.prototype.generateRequestId = function() {
      return this.requestIdCounter++;
    };
    QueryManager2.prototype.generateMutationId = function() {
      return String(this.mutationIdCounter++);
    };
    QueryManager2.prototype.stopQueryInStore = function(queryId) {
      this.stopQueryInStoreNoBroadcast(queryId);
      this.broadcastQueries();
    };
    QueryManager2.prototype.stopQueryInStoreNoBroadcast = function(queryId) {
      var queryInfo = this.queries.get(queryId);
      if (queryInfo)
        queryInfo.stop();
    };
    QueryManager2.prototype.clearStore = function(options) {
      if (options === void 0) {
        options = {
          discardWatches: true
        };
      }
      this.cancelPendingFetches(newInvariantError(42));
      this.queries.forEach(function(queryInfo) {
        if (queryInfo.observableQuery) {
          queryInfo.networkStatus = NetworkStatus.loading;
        } else {
          queryInfo.stop();
        }
      });
      if (this.mutationStore) {
        this.mutationStore = /* @__PURE__ */ Object.create(null);
      }
      return this.cache.reset(options);
    };
    QueryManager2.prototype.getObservableQueries = function(include) {
      var _this = this;
      if (include === void 0) {
        include = "active";
      }
      var queries = /* @__PURE__ */ new Map();
      var queryNames = /* @__PURE__ */ new Map();
      var queryNamesAndQueryStrings = /* @__PURE__ */ new Map();
      var legacyQueryOptions = /* @__PURE__ */ new Set();
      if (Array.isArray(include)) {
        include.forEach(function(desc) {
          if (typeof desc === "string") {
            queryNames.set(desc, desc);
            queryNamesAndQueryStrings.set(desc, false);
          } else if (isDocumentNode(desc)) {
            var queryString = print2(_this.transform(desc));
            queryNames.set(queryString, getOperationName(desc));
            queryNamesAndQueryStrings.set(queryString, false);
          } else if (isNonNullObject(desc) && desc.query) {
            legacyQueryOptions.add(desc);
          }
        });
      }
      this.queries.forEach(function(_a2, queryId) {
        var oq = _a2.observableQuery, document2 = _a2.document;
        if (oq) {
          if (include === "all") {
            queries.set(queryId, oq);
            return;
          }
          var queryName = oq.queryName, fetchPolicy = oq.options.fetchPolicy;
          if (fetchPolicy === "standby" || include === "active" && !oq.hasObservers()) {
            return;
          }
          if (include === "active" || queryName && queryNamesAndQueryStrings.has(queryName) || document2 && queryNamesAndQueryStrings.has(print2(document2))) {
            queries.set(queryId, oq);
            if (queryName)
              queryNamesAndQueryStrings.set(queryName, true);
            if (document2)
              queryNamesAndQueryStrings.set(print2(document2), true);
          }
        }
      });
      if (legacyQueryOptions.size) {
        legacyQueryOptions.forEach(function(options) {
          var queryId = makeUniqueId("legacyOneTimeQuery");
          var queryInfo = _this.getOrCreateQuery(queryId).init({
            document: options.query,
            variables: options.variables
          });
          var oq = new ObservableQuery({
            queryManager: _this,
            queryInfo,
            options: __assign(__assign({}, options), { fetchPolicy: "network-only" })
          });
          invariant2(oq.queryId === queryId);
          queryInfo.setObservableQuery(oq);
          queries.set(queryId, oq);
        });
      }
      if (globalThis.__DEV__ !== false && queryNamesAndQueryStrings.size) {
        queryNamesAndQueryStrings.forEach(function(included, nameOrQueryString) {
          if (!included) {
            var queryName = queryNames.get(nameOrQueryString);
            if (queryName) {
              globalThis.__DEV__ !== false && invariant2.warn(43, queryName);
            } else {
              globalThis.__DEV__ !== false && invariant2.warn(44);
            }
          }
        });
      }
      return queries;
    };
    QueryManager2.prototype.reFetchObservableQueries = function(includeStandby) {
      var _this = this;
      if (includeStandby === void 0) {
        includeStandby = false;
      }
      var observableQueryPromises = [];
      this.getObservableQueries(includeStandby ? "all" : "active").forEach(function(observableQuery, queryId) {
        var fetchPolicy = observableQuery.options.fetchPolicy;
        muteDeprecations("resetLastResults", function() {
          return observableQuery.resetLastResults();
        });
        if (includeStandby || fetchPolicy !== "standby" && fetchPolicy !== "cache-only") {
          observableQueryPromises.push(observableQuery.refetch());
        }
        (_this.queries.get(queryId) || observableQuery["queryInfo"]).setDiff(null);
      });
      this.broadcastQueries();
      return Promise.all(observableQueryPromises);
    };
    QueryManager2.prototype.startGraphQLSubscription = function(options) {
      var _this = this;
      var query = options.query, variables = options.variables;
      var fetchPolicy = options.fetchPolicy, _a2 = options.errorPolicy, errorPolicy = _a2 === void 0 ? "none" : _a2, _b = options.context, context = _b === void 0 ? {} : _b, _c = options.extensions, extensions = _c === void 0 ? {} : _c;
      query = this.transform(query);
      variables = this.getVariables(query, variables);
      var makeObservable = function(variables2) {
        return _this.getObservableFromLink(query, context, variables2, extensions).map(function(result2) {
          if (fetchPolicy !== "no-cache") {
            if (shouldWriteResult(result2, errorPolicy)) {
              _this.cache.write({
                query,
                result: result2.data,
                dataId: "ROOT_SUBSCRIPTION",
                variables: variables2
              });
            }
            _this.broadcastQueries();
          }
          var hasErrors = graphQLResultHasError(result2);
          var hasProtocolErrors = graphQLResultHasProtocolErrors(result2);
          if (hasErrors || hasProtocolErrors) {
            var errors = {};
            if (hasErrors) {
              errors.graphQLErrors = result2.errors;
            }
            if (hasProtocolErrors) {
              errors.protocolErrors = result2.extensions[PROTOCOL_ERRORS_SYMBOL];
            }
            if (errorPolicy === "none" || hasProtocolErrors) {
              throw new ApolloError(errors);
            }
          }
          if (errorPolicy === "ignore") {
            delete result2.errors;
          }
          return result2;
        });
      };
      if (this.getDocumentInfo(query).hasClientExports) {
        var observablePromise_1 = this.localState.addExportedVariables(query, variables, context).then(makeObservable);
        return new Observable2(function(observer) {
          var sub = null;
          observablePromise_1.then(function(observable2) {
            return sub = observable2.subscribe(observer);
          }, observer.error);
          return function() {
            return sub && sub.unsubscribe();
          };
        });
      }
      return makeObservable(variables);
    };
    QueryManager2.prototype.stopQuery = function(queryId) {
      this.stopQueryNoBroadcast(queryId);
      this.broadcastQueries();
    };
    QueryManager2.prototype.stopQueryNoBroadcast = function(queryId) {
      this.stopQueryInStoreNoBroadcast(queryId);
      this.removeQuery(queryId);
    };
    QueryManager2.prototype.removeQuery = function(queryId) {
      var _a2;
      this.fetchCancelFns.delete(queryId);
      if (this.queries.has(queryId)) {
        (_a2 = this.queries.get(queryId)) === null || _a2 === void 0 ? void 0 : _a2.stop();
        this.queries.delete(queryId);
      }
    };
    QueryManager2.prototype.broadcastQueries = function() {
      if (this.onBroadcast)
        this.onBroadcast();
      this.queries.forEach(function(info) {
        var _a2;
        return (_a2 = info.observableQuery) === null || _a2 === void 0 ? void 0 : _a2["notify"]();
      });
    };
    QueryManager2.prototype.getLocalState = function() {
      return this.localState;
    };
    QueryManager2.prototype.getObservableFromLink = function(query, context, variables, extensions, deduplication) {
      var _this = this;
      var _a2;
      if (deduplication === void 0) {
        deduplication = (_a2 = context === null || context === void 0 ? void 0 : context.queryDeduplication) !== null && _a2 !== void 0 ? _a2 : this.queryDeduplication;
      }
      var observable2;
      var _b = this.getDocumentInfo(query), serverQuery = _b.serverQuery, clientQuery = _b.clientQuery;
      if (serverQuery) {
        var _c = this, inFlightLinkObservables_1 = _c.inFlightLinkObservables, link = _c.link;
        var operation = {
          query: serverQuery,
          variables,
          operationName: getOperationName(serverQuery) || void 0,
          context: this.prepareContext(__assign(__assign({}, context), { forceFetch: !deduplication })),
          extensions
        };
        context = operation.context;
        if (deduplication) {
          var printedServerQuery_1 = print2(serverQuery);
          var varJson_1 = canonicalStringify(variables);
          var entry = inFlightLinkObservables_1.lookup(printedServerQuery_1, varJson_1);
          observable2 = entry.observable;
          if (!observable2) {
            var concast_1 = new Concast([
              execute(link, operation)
            ]);
            observable2 = entry.observable = concast_1;
            concast_1.beforeNext(function cb(method, arg) {
              if (method === "next" && "hasNext" in arg && arg.hasNext) {
                concast_1.beforeNext(cb);
              } else {
                inFlightLinkObservables_1.remove(printedServerQuery_1, varJson_1);
              }
            });
          }
        } else {
          observable2 = new Concast([
            execute(link, operation)
          ]);
        }
      } else {
        observable2 = new Concast([Observable2.of({ data: {} })]);
        context = this.prepareContext(context);
      }
      if (clientQuery) {
        observable2 = asyncMap(observable2, function(result2) {
          return _this.localState.runResolvers({
            document: clientQuery,
            remoteResult: result2,
            context,
            variables
          });
        });
      }
      return observable2;
    };
    QueryManager2.prototype.getResultsFromLink = function(queryInfo, cacheWriteBehavior, options) {
      var requestId = queryInfo.lastRequestId = this.generateRequestId();
      var linkDocument = this.cache.transformForLink(options.query);
      return asyncMap(this.getObservableFromLink(linkDocument, options.context, options.variables), function(result2) {
        var graphQLErrors = getGraphQLErrorsFromResult(result2);
        var hasErrors = graphQLErrors.length > 0;
        var errorPolicy = options.errorPolicy;
        if (requestId >= queryInfo.lastRequestId) {
          if (hasErrors && errorPolicy === "none") {
            throw queryInfo.markError(new ApolloError({
              graphQLErrors
            }));
          }
          queryInfo.markResult(result2, linkDocument, options, cacheWriteBehavior);
          queryInfo.markReady();
        }
        var aqr = {
          data: result2.data,
          loading: false,
          networkStatus: NetworkStatus.ready
        };
        if (hasErrors && errorPolicy === "none") {
          aqr.data = void 0;
        }
        if (hasErrors && errorPolicy !== "ignore") {
          aqr.errors = graphQLErrors;
          aqr.networkStatus = NetworkStatus.error;
        }
        return aqr;
      }, function(networkError) {
        var error = isApolloError(networkError) ? networkError : new ApolloError({ networkError });
        if (requestId >= queryInfo.lastRequestId) {
          queryInfo.markError(error);
        }
        throw error;
      });
    };
    QueryManager2.prototype.fetchConcastWithInfo = function(queryInfo, options, networkStatus, query) {
      var _this = this;
      if (networkStatus === void 0) {
        networkStatus = NetworkStatus.loading;
      }
      if (query === void 0) {
        query = options.query;
      }
      var variables = this.getVariables(query, options.variables);
      var defaults2 = this.defaultOptions.watchQuery;
      var _a2 = options.fetchPolicy, fetchPolicy = _a2 === void 0 ? defaults2 && defaults2.fetchPolicy || "cache-first" : _a2, _b = options.errorPolicy, errorPolicy = _b === void 0 ? defaults2 && defaults2.errorPolicy || "none" : _b, _c = options.returnPartialData, returnPartialData = _c === void 0 ? false : _c, _d = options.notifyOnNetworkStatusChange, notifyOnNetworkStatusChange = _d === void 0 ? false : _d, _e = options.context, context = _e === void 0 ? {} : _e;
      var normalized = Object.assign({}, options, {
        query,
        variables,
        fetchPolicy,
        errorPolicy,
        returnPartialData,
        notifyOnNetworkStatusChange,
        context
      });
      var fromVariables = function(variables2) {
        normalized.variables = variables2;
        var sourcesWithInfo2 = _this.fetchQueryByPolicy(queryInfo, normalized, networkStatus);
        if (
          // If we're in standby, postpone advancing options.fetchPolicy using
          // applyNextFetchPolicy.
          normalized.fetchPolicy !== "standby" && // The "standby" policy currently returns [] from fetchQueryByPolicy, so
          // this is another way to detect when nothing was done/fetched.
          sourcesWithInfo2.sources.length > 0 && queryInfo.observableQuery
        ) {
          queryInfo.observableQuery["applyNextFetchPolicy"]("after-fetch", options);
        }
        return sourcesWithInfo2;
      };
      var cleanupCancelFn = function() {
        return _this.fetchCancelFns.delete(queryInfo.queryId);
      };
      this.fetchCancelFns.set(queryInfo.queryId, function(reason) {
        cleanupCancelFn();
        setTimeout(function() {
          return concast.cancel(reason);
        });
      });
      var concast, containsDataFromLink;
      if (this.getDocumentInfo(normalized.query).hasClientExports) {
        concast = new Concast(this.localState.addExportedVariables(normalized.query, normalized.variables, normalized.context).then(fromVariables).then(function(sourcesWithInfo2) {
          return sourcesWithInfo2.sources;
        }));
        containsDataFromLink = true;
      } else {
        var sourcesWithInfo = fromVariables(normalized.variables);
        containsDataFromLink = sourcesWithInfo.fromLink;
        concast = new Concast(sourcesWithInfo.sources);
      }
      concast.promise.then(cleanupCancelFn, cleanupCancelFn);
      return {
        concast,
        fromLink: containsDataFromLink
      };
    };
    QueryManager2.prototype.refetchQueries = function(_a2) {
      var _this = this;
      var updateCache = _a2.updateCache, include = _a2.include, _b = _a2.optimistic, optimistic = _b === void 0 ? false : _b, _c = _a2.removeOptimistic, removeOptimistic = _c === void 0 ? optimistic ? makeUniqueId("refetchQueries") : void 0 : _c, onQueryUpdated = _a2.onQueryUpdated;
      var includedQueriesById = /* @__PURE__ */ new Map();
      if (include) {
        this.getObservableQueries(include).forEach(function(oq, queryId) {
          includedQueriesById.set(queryId, {
            oq,
            lastDiff: (_this.queries.get(queryId) || oq["queryInfo"]).getDiff()
          });
        });
      }
      var results = /* @__PURE__ */ new Map();
      if (updateCache) {
        this.cache.batch({
          update: updateCache,
          // Since you can perform any combination of cache reads and/or writes in
          // the cache.batch update function, its optimistic option can be either
          // a boolean or a string, representing three distinct modes of
          // operation:
          //
          // * false: read/write only the root layer
          // * true: read/write the topmost layer
          // * string: read/write a fresh optimistic layer with that ID string
          //
          // When typeof optimistic === "string", a new optimistic layer will be
          // temporarily created within cache.batch with that string as its ID. If
          // we then pass that same string as the removeOptimistic option, we can
          // make cache.batch immediately remove the optimistic layer after
          // running the updateCache function, triggering only one broadcast.
          //
          // However, the refetchQueries method accepts only true or false for its
          // optimistic option (not string). We interpret true to mean a temporary
          // optimistic layer should be created, to allow efficiently rolling back
          // the effect of the updateCache function, which involves passing a
          // string instead of true as the optimistic option to cache.batch, when
          // refetchQueries receives optimistic: true.
          //
          // In other words, we are deliberately not supporting the use case of
          // writing to an *existing* optimistic layer (using the refetchQueries
          // updateCache function), since that would potentially interfere with
          // other optimistic updates in progress. Instead, you can read/write
          // only the root layer by passing optimistic: false to refetchQueries,
          // or you can read/write a brand new optimistic layer that will be
          // automatically removed by passing optimistic: true.
          optimistic: optimistic && removeOptimistic || false,
          // The removeOptimistic option can also be provided by itself, even if
          // optimistic === false, to remove some previously-added optimistic
          // layer safely and efficiently, like we do in markMutationResult.
          //
          // If an explicit removeOptimistic string is provided with optimistic:
          // true, the removeOptimistic string will determine the ID of the
          // temporary optimistic layer, in case that ever matters.
          removeOptimistic,
          onWatchUpdated: function(watch, diff, lastDiff) {
            var oq = watch.watcher instanceof QueryInfo && watch.watcher.observableQuery;
            if (oq) {
              if (onQueryUpdated) {
                includedQueriesById.delete(oq.queryId);
                var result2 = onQueryUpdated(oq, diff, lastDiff);
                if (result2 === true) {
                  result2 = oq.refetch();
                }
                if (result2 !== false) {
                  results.set(oq, result2);
                }
                return result2;
              }
              if (onQueryUpdated !== null) {
                includedQueriesById.set(oq.queryId, { oq, lastDiff, diff });
              }
            }
          }
        });
      }
      if (includedQueriesById.size) {
        includedQueriesById.forEach(function(_a3, queryId) {
          var oq = _a3.oq, lastDiff = _a3.lastDiff, diff = _a3.diff;
          var result2;
          if (onQueryUpdated) {
            if (!diff) {
              diff = muteDeprecations("canonizeResults", function() {
                return _this.cache.diff(oq["queryInfo"]["getDiffOptions"]());
              });
            }
            result2 = onQueryUpdated(oq, diff, lastDiff);
          }
          if (!onQueryUpdated || result2 === true) {
            result2 = oq.refetch();
          }
          if (result2 !== false) {
            results.set(oq, result2);
          }
          if (queryId.indexOf("legacyOneTimeQuery") >= 0) {
            _this.stopQueryNoBroadcast(queryId);
          }
        });
      }
      if (removeOptimistic) {
        this.cache.removeOptimistic(removeOptimistic);
      }
      return results;
    };
    QueryManager2.prototype.maskOperation = function(options) {
      var _a2, _b, _c;
      var document2 = options.document, data = options.data;
      if (globalThis.__DEV__ !== false) {
        var fetchPolicy = options.fetchPolicy, id = options.id;
        var operationType = (_a2 = getOperationDefinition(document2)) === null || _a2 === void 0 ? void 0 : _a2.operation;
        var operationId = ((_b = operationType === null || operationType === void 0 ? void 0 : operationType[0]) !== null && _b !== void 0 ? _b : "o") + id;
        if (this.dataMasking && fetchPolicy === "no-cache" && !isFullyUnmaskedOperation(document2) && !this.noCacheWarningsByQueryId.has(operationId)) {
          this.noCacheWarningsByQueryId.add(operationId);
          globalThis.__DEV__ !== false && invariant2.warn(
            45,
            (_c = getOperationName(document2)) !== null && _c !== void 0 ? _c : "Unnamed ".concat(operationType !== null && operationType !== void 0 ? operationType : "operation")
          );
        }
      }
      return this.dataMasking ? maskOperation(data, document2, this.cache) : data;
    };
    QueryManager2.prototype.maskFragment = function(options) {
      var data = options.data, fragment = options.fragment, fragmentName = options.fragmentName;
      return this.dataMasking ? maskFragment(data, fragment, this.cache, fragmentName) : data;
    };
    QueryManager2.prototype.fetchQueryByPolicy = function(queryInfo, _a2, networkStatus) {
      var _this = this;
      var query = _a2.query, variables = _a2.variables, fetchPolicy = _a2.fetchPolicy, refetchWritePolicy = _a2.refetchWritePolicy, errorPolicy = _a2.errorPolicy, returnPartialData = _a2.returnPartialData, context = _a2.context, notifyOnNetworkStatusChange = _a2.notifyOnNetworkStatusChange;
      var oldNetworkStatus = queryInfo.networkStatus;
      queryInfo.init({
        document: query,
        variables,
        networkStatus
      });
      var readCache = function() {
        return queryInfo.getDiff();
      };
      var resultsFromCache = function(diff2, networkStatus2) {
        if (networkStatus2 === void 0) {
          networkStatus2 = queryInfo.networkStatus || NetworkStatus.loading;
        }
        var data = diff2.result;
        if (globalThis.__DEV__ !== false && !returnPartialData && !equal(data, {})) {
          logMissingFieldErrors(diff2.missing);
        }
        var fromData = function(data2) {
          return Observable2.of(__assign({ data: data2, loading: isNetworkRequestInFlight(networkStatus2), networkStatus: networkStatus2 }, diff2.complete ? null : { partial: true }));
        };
        if (data && _this.getDocumentInfo(query).hasForcedResolvers) {
          return _this.localState.runResolvers({
            document: query,
            remoteResult: { data },
            context,
            variables,
            onlyRunForcedResolvers: true
          }).then(function(resolved) {
            return fromData(resolved.data || void 0);
          });
        }
        if (errorPolicy === "none" && networkStatus2 === NetworkStatus.refetch && Array.isArray(diff2.missing)) {
          return fromData(void 0);
        }
        return fromData(data);
      };
      var cacheWriteBehavior = fetchPolicy === "no-cache" ? 0 : networkStatus === NetworkStatus.refetch && refetchWritePolicy !== "merge" ? 1 : 2;
      var resultsFromLink = function() {
        return _this.getResultsFromLink(queryInfo, cacheWriteBehavior, {
          query,
          variables,
          context,
          fetchPolicy,
          errorPolicy
        });
      };
      var shouldNotify = notifyOnNetworkStatusChange && typeof oldNetworkStatus === "number" && oldNetworkStatus !== networkStatus && isNetworkRequestInFlight(networkStatus);
      switch (fetchPolicy) {
        default:
        case "cache-first": {
          var diff = readCache();
          if (diff.complete) {
            return {
              fromLink: false,
              sources: [resultsFromCache(diff, queryInfo.markReady())]
            };
          }
          if (returnPartialData || shouldNotify) {
            return {
              fromLink: true,
              sources: [resultsFromCache(diff), resultsFromLink()]
            };
          }
          return { fromLink: true, sources: [resultsFromLink()] };
        }
        case "cache-and-network": {
          var diff = readCache();
          if (diff.complete || returnPartialData || shouldNotify) {
            return {
              fromLink: true,
              sources: [resultsFromCache(diff), resultsFromLink()]
            };
          }
          return { fromLink: true, sources: [resultsFromLink()] };
        }
        case "cache-only":
          return {
            fromLink: false,
            sources: [resultsFromCache(readCache(), queryInfo.markReady())]
          };
        case "network-only":
          if (shouldNotify) {
            return {
              fromLink: true,
              sources: [resultsFromCache(readCache()), resultsFromLink()]
            };
          }
          return { fromLink: true, sources: [resultsFromLink()] };
        case "no-cache":
          if (shouldNotify) {
            return {
              fromLink: true,
              // Note that queryInfo.getDiff() for no-cache queries does not call
              // cache.diff, but instead returns a { complete: false } stub result
              // when there is no queryInfo.diff already defined.
              sources: [resultsFromCache(queryInfo.getDiff()), resultsFromLink()]
            };
          }
          return { fromLink: true, sources: [resultsFromLink()] };
        case "standby":
          return { fromLink: false, sources: [] };
      }
    };
    QueryManager2.prototype.getOrCreateQuery = function(queryId) {
      if (queryId && !this.queries.has(queryId)) {
        this.queries.set(queryId, new QueryInfo(this, queryId));
      }
      return this.queries.get(queryId);
    };
    QueryManager2.prototype.prepareContext = function(context) {
      if (context === void 0) {
        context = {};
      }
      var newContext = this.localState.prepareContext(context);
      return __assign(__assign(__assign({}, this.defaultContext), newContext), { clientAwareness: this.clientAwareness });
    };
    return QueryManager2;
  })()
);

// node_modules/@apollo/client/core/LocalState.js
var LocalState = (
  /** @class */
  (function() {
    function LocalState2(_a2) {
      var cache = _a2.cache, client = _a2.client, resolvers = _a2.resolvers, fragmentMatcher = _a2.fragmentMatcher;
      this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap();
      this.cache = cache;
      if (client) {
        this.client = client;
      }
      if (resolvers) {
        this.addResolvers(resolvers);
      }
      if (fragmentMatcher) {
        this.setFragmentMatcher(fragmentMatcher);
      }
    }
    LocalState2.prototype.addResolvers = function(resolvers) {
      var _this = this;
      this.resolvers = this.resolvers || {};
      if (Array.isArray(resolvers)) {
        resolvers.forEach(function(resolverGroup) {
          _this.resolvers = mergeDeep(_this.resolvers, resolverGroup);
        });
      } else {
        this.resolvers = mergeDeep(this.resolvers, resolvers);
      }
    };
    LocalState2.prototype.setResolvers = function(resolvers) {
      this.resolvers = {};
      this.addResolvers(resolvers);
    };
    LocalState2.prototype.getResolvers = function() {
      return this.resolvers || {};
    };
    LocalState2.prototype.runResolvers = function(_a2) {
      return __awaiter(this, arguments, void 0, function(_b) {
        var document2 = _b.document, remoteResult = _b.remoteResult, context = _b.context, variables = _b.variables, _c = _b.onlyRunForcedResolvers, onlyRunForcedResolvers = _c === void 0 ? false : _c;
        return __generator(this, function(_d) {
          if (document2) {
            return [2, this.resolveDocument(document2, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function(localResult) {
              return __assign(__assign({}, remoteResult), { data: localResult.result });
            })];
          }
          return [2, remoteResult];
        });
      });
    };
    LocalState2.prototype.setFragmentMatcher = function(fragmentMatcher) {
      this.fragmentMatcher = fragmentMatcher;
    };
    LocalState2.prototype.getFragmentMatcher = function() {
      return this.fragmentMatcher;
    };
    LocalState2.prototype.clientQuery = function(document2) {
      if (hasDirectives(["client"], document2)) {
        if (this.resolvers) {
          return document2;
        }
      }
      return null;
    };
    LocalState2.prototype.serverQuery = function(document2) {
      return removeClientSetsFromDocument(document2);
    };
    LocalState2.prototype.prepareContext = function(context) {
      var cache = this.cache;
      return __assign(__assign({}, context), {
        cache,
        // Getting an entry's cache key is useful for local state resolvers.
        getCacheKey: function(obj) {
          return cache.identify(obj);
        }
      });
    };
    LocalState2.prototype.addExportedVariables = function(document_1) {
      return __awaiter(this, arguments, void 0, function(document2, variables, context) {
        if (variables === void 0) {
          variables = {};
        }
        if (context === void 0) {
          context = {};
        }
        return __generator(this, function(_a2) {
          if (document2) {
            return [2, this.resolveDocument(document2, this.buildRootValueFromCache(document2, variables) || {}, this.prepareContext(context), variables).then(function(data) {
              return __assign(__assign({}, variables), data.exportedVariables);
            })];
          }
          return [2, __assign({}, variables)];
        });
      });
    };
    LocalState2.prototype.shouldForceResolvers = function(document2) {
      var forceResolvers = false;
      visit(document2, {
        Directive: {
          enter: function(node) {
            if (node.name.value === "client" && node.arguments) {
              forceResolvers = node.arguments.some(function(arg) {
                return arg.name.value === "always" && arg.value.kind === "BooleanValue" && arg.value.value === true;
              });
              if (forceResolvers) {
                return BREAK;
              }
            }
          }
        }
      });
      return forceResolvers;
    };
    LocalState2.prototype.buildRootValueFromCache = function(document2, variables) {
      return this.cache.diff({
        query: buildQueryFromSelectionSet(document2),
        variables,
        returnPartialData: true,
        optimistic: false
      }).result;
    };
    LocalState2.prototype.resolveDocument = function(document_1, rootValue_1) {
      return __awaiter(this, arguments, void 0, function(document2, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
        var mainDefinition, fragments, fragmentMap, selectionsToResolve, definitionOperation, defaultOperationType, _a2, cache, client, execContext, isClientFieldDescendant;
        if (context === void 0) {
          context = {};
        }
        if (variables === void 0) {
          variables = {};
        }
        if (fragmentMatcher === void 0) {
          fragmentMatcher = function() {
            return true;
          };
        }
        if (onlyRunForcedResolvers === void 0) {
          onlyRunForcedResolvers = false;
        }
        return __generator(this, function(_b) {
          mainDefinition = getMainDefinition(document2);
          fragments = getFragmentDefinitions(document2);
          fragmentMap = createFragmentMap(fragments);
          selectionsToResolve = this.collectSelectionsToResolve(mainDefinition, fragmentMap);
          definitionOperation = mainDefinition.operation;
          defaultOperationType = definitionOperation ? definitionOperation.charAt(0).toUpperCase() + definitionOperation.slice(1) : "Query";
          _a2 = this, cache = _a2.cache, client = _a2.client;
          execContext = {
            fragmentMap,
            context: __assign(__assign({}, context), { cache, client }),
            variables,
            fragmentMatcher,
            defaultOperationType,
            exportedVariables: {},
            selectionsToResolve,
            onlyRunForcedResolvers
          };
          isClientFieldDescendant = false;
          return [2, this.resolveSelectionSet(mainDefinition.selectionSet, isClientFieldDescendant, rootValue, execContext).then(function(result2) {
            return {
              result: result2,
              exportedVariables: execContext.exportedVariables
            };
          })];
        });
      });
    };
    LocalState2.prototype.resolveSelectionSet = function(selectionSet, isClientFieldDescendant, rootValue, execContext) {
      return __awaiter(this, void 0, void 0, function() {
        var fragmentMap, context, variables, resultsToMerge, execute2;
        var _this = this;
        return __generator(this, function(_a2) {
          fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
          resultsToMerge = [rootValue];
          execute2 = function(selection) {
            return __awaiter(_this, void 0, void 0, function() {
              var fragment, typeCondition;
              return __generator(this, function(_a3) {
                if (!isClientFieldDescendant && !execContext.selectionsToResolve.has(selection)) {
                  return [
                    2
                    /*return*/
                  ];
                }
                if (!shouldInclude(selection, variables)) {
                  return [
                    2
                    /*return*/
                  ];
                }
                if (isField(selection)) {
                  return [2, this.resolveField(selection, isClientFieldDescendant, rootValue, execContext).then(function(fieldResult) {
                    var _a4;
                    if (typeof fieldResult !== "undefined") {
                      resultsToMerge.push((_a4 = {}, _a4[resultKeyNameFromField(selection)] = fieldResult, _a4));
                    }
                  })];
                }
                if (isInlineFragment(selection)) {
                  fragment = selection;
                } else {
                  fragment = fragmentMap[selection.name.value];
                  invariant2(fragment, 21, selection.name.value);
                }
                if (fragment && fragment.typeCondition) {
                  typeCondition = fragment.typeCondition.name.value;
                  if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                    return [2, this.resolveSelectionSet(fragment.selectionSet, isClientFieldDescendant, rootValue, execContext).then(function(fragmentResult) {
                      resultsToMerge.push(fragmentResult);
                    })];
                  }
                }
                return [
                  2
                  /*return*/
                ];
              });
            });
          };
          return [2, Promise.all(selectionSet.selections.map(execute2)).then(function() {
            return mergeDeepArray(resultsToMerge);
          })];
        });
      });
    };
    LocalState2.prototype.resolveField = function(field, isClientFieldDescendant, rootValue, execContext) {
      return __awaiter(this, void 0, void 0, function() {
        var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
        var _this = this;
        return __generator(this, function(_a2) {
          if (!rootValue) {
            return [2, null];
          }
          variables = execContext.variables;
          fieldName = field.name.value;
          aliasedFieldName = resultKeyNameFromField(field);
          aliasUsed = fieldName !== aliasedFieldName;
          defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
          resultPromise = Promise.resolve(defaultResult);
          if (!execContext.onlyRunForcedResolvers || this.shouldForceResolvers(field)) {
            resolverType = rootValue.__typename || execContext.defaultOperationType;
            resolverMap = this.resolvers && this.resolvers[resolverType];
            if (resolverMap) {
              resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
              if (resolve) {
                resultPromise = Promise.resolve(
                  // In case the resolve function accesses reactive variables,
                  // set cacheSlot to the current cache instance.
                  cacheSlot.withValue(this.cache, resolve, [
                    rootValue,
                    argumentsObjectFromField(field, variables),
                    execContext.context,
                    { field, fragmentMap: execContext.fragmentMap }
                  ])
                );
              }
            }
          }
          return [2, resultPromise.then(function(result2) {
            var _a3, _b;
            if (result2 === void 0) {
              result2 = defaultResult;
            }
            if (field.directives) {
              field.directives.forEach(function(directive) {
                if (directive.name.value === "export" && directive.arguments) {
                  directive.arguments.forEach(function(arg) {
                    if (arg.name.value === "as" && arg.value.kind === "StringValue") {
                      execContext.exportedVariables[arg.value.value] = result2;
                    }
                  });
                }
              });
            }
            if (!field.selectionSet) {
              return result2;
            }
            if (result2 == null) {
              return result2;
            }
            var isClientField = (_b = (_a3 = field.directives) === null || _a3 === void 0 ? void 0 : _a3.some(function(d) {
              return d.name.value === "client";
            })) !== null && _b !== void 0 ? _b : false;
            if (Array.isArray(result2)) {
              return _this.resolveSubSelectedArray(field, isClientFieldDescendant || isClientField, result2, execContext);
            }
            if (field.selectionSet) {
              return _this.resolveSelectionSet(field.selectionSet, isClientFieldDescendant || isClientField, result2, execContext);
            }
          })];
        });
      });
    };
    LocalState2.prototype.resolveSubSelectedArray = function(field, isClientFieldDescendant, result2, execContext) {
      var _this = this;
      return Promise.all(result2.map(function(item) {
        if (item === null) {
          return null;
        }
        if (Array.isArray(item)) {
          return _this.resolveSubSelectedArray(field, isClientFieldDescendant, item, execContext);
        }
        if (field.selectionSet) {
          return _this.resolveSelectionSet(field.selectionSet, isClientFieldDescendant, item, execContext);
        }
      }));
    };
    LocalState2.prototype.collectSelectionsToResolve = function(mainDefinition, fragmentMap) {
      var isSingleASTNode = function(node) {
        return !Array.isArray(node);
      };
      var selectionsToResolveCache = this.selectionsToResolveCache;
      function collectByDefinition(definitionNode) {
        if (!selectionsToResolveCache.has(definitionNode)) {
          var matches_1 = /* @__PURE__ */ new Set();
          selectionsToResolveCache.set(definitionNode, matches_1);
          visit(definitionNode, {
            Directive: function(node, _, __, ___, ancestors) {
              if (node.name.value === "client") {
                ancestors.forEach(function(node2) {
                  if (isSingleASTNode(node2) && isSelectionNode(node2)) {
                    matches_1.add(node2);
                  }
                });
              }
            },
            FragmentSpread: function(spread, _, __, ___, ancestors) {
              var fragment = fragmentMap[spread.name.value];
              invariant2(fragment, 22, spread.name.value);
              var fragmentSelections = collectByDefinition(fragment);
              if (fragmentSelections.size > 0) {
                ancestors.forEach(function(node) {
                  if (isSingleASTNode(node) && isSelectionNode(node)) {
                    matches_1.add(node);
                  }
                });
                matches_1.add(spread);
                fragmentSelections.forEach(function(selection) {
                  matches_1.add(selection);
                });
              }
            }
          });
        }
        return selectionsToResolveCache.get(definitionNode);
      }
      return collectByDefinition(mainDefinition);
    };
    return LocalState2;
  })()
);

// node_modules/@apollo/client/core/ApolloClient.js
var hasSuggestedDevtools = false;
var ApolloClient = (
  /** @class */
  (function() {
    function ApolloClient2(options) {
      var _this = this;
      var _a2, _b, _c;
      this.resetStoreCallbacks = [];
      this.clearStoreCallbacks = [];
      if (!options.cache) {
        throw newInvariantError(16);
      }
      var uri = options.uri, credentials = options.credentials, headers = options.headers, cache = options.cache, documentTransform = options.documentTransform, _d = options.ssrMode, ssrMode = _d === void 0 ? false : _d, _e = options.ssrForceFetchDelay, ssrForceFetchDelay = _e === void 0 ? 0 : _e, connectToDevTools = options.connectToDevTools, _f = options.queryDeduplication, queryDeduplication = _f === void 0 ? true : _f, defaultOptions2 = options.defaultOptions, defaultContext = options.defaultContext, _g = options.assumeImmutableResults, assumeImmutableResults = _g === void 0 ? cache.assumeImmutableResults : _g, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwareness = options.clientAwareness, clientAwarenessName = options.name, clientAwarenessVersion = options.version, devtools = options.devtools, dataMasking = options.dataMasking;
      if (globalThis.__DEV__ !== false) {
        warnRemovedOption(options, "connectToDevTools", "ApolloClient", "Please use `devtools.enabled` instead.");
        warnRemovedOption(options, "uri", "ApolloClient", "Please initialize an instance of `HttpLink` with `uri` instead.");
        warnRemovedOption(options, "credentials", "ApolloClient", "Please initialize an instance of `HttpLink` with `credentials` instead.");
        warnRemovedOption(options, "headers", "ApolloClient", "Please initialize an instance of `HttpLink` with `headers` instead.");
        warnRemovedOption(options, "name", "ApolloClient", "Please use the `clientAwareness.name` option instead.");
        warnRemovedOption(options, "version", "ApolloClient", "Please use the `clientAwareness.version` option instead.");
        warnRemovedOption(options, "typeDefs", "ApolloClient");
        if (!options.link) {
          globalThis.__DEV__ !== false && invariant2.warn(17);
        }
      }
      var link = options.link;
      if (!link) {
        link = uri ? new HttpLink({ uri, credentials, headers }) : ApolloLink.empty();
      }
      this.link = link;
      this.cache = cache;
      this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
      this.queryDeduplication = queryDeduplication;
      this.defaultOptions = defaultOptions2 || /* @__PURE__ */ Object.create(null);
      this.typeDefs = typeDefs;
      this.devtoolsConfig = __assign(__assign({}, devtools), { enabled: (_a2 = devtools === null || devtools === void 0 ? void 0 : devtools.enabled) !== null && _a2 !== void 0 ? _a2 : connectToDevTools });
      if (this.devtoolsConfig.enabled === void 0) {
        this.devtoolsConfig.enabled = globalThis.__DEV__ !== false;
      }
      if (ssrForceFetchDelay) {
        setTimeout(function() {
          return _this.disableNetworkFetches = false;
        }, ssrForceFetchDelay);
      }
      this.watchQuery = this.watchQuery.bind(this);
      this.query = this.query.bind(this);
      this.mutate = this.mutate.bind(this);
      this.watchFragment = this.watchFragment.bind(this);
      this.resetStore = this.resetStore.bind(this);
      this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
      this.version = version;
      this.localState = new LocalState({
        cache,
        client: this,
        resolvers,
        fragmentMatcher
      });
      this.queryManager = new QueryManager({
        cache: this.cache,
        link: this.link,
        defaultOptions: this.defaultOptions,
        defaultContext,
        documentTransform,
        queryDeduplication,
        ssrMode,
        dataMasking: !!dataMasking,
        clientAwareness: {
          name: (_b = clientAwareness === null || clientAwareness === void 0 ? void 0 : clientAwareness.name) !== null && _b !== void 0 ? _b : clientAwarenessName,
          version: (_c = clientAwareness === null || clientAwareness === void 0 ? void 0 : clientAwareness.version) !== null && _c !== void 0 ? _c : clientAwarenessVersion
        },
        localState: this.localState,
        assumeImmutableResults,
        onBroadcast: this.devtoolsConfig.enabled ? function() {
          if (_this.devToolsHookCb) {
            _this.devToolsHookCb({
              action: {},
              state: {
                queries: _this.queryManager.getQueryStore(),
                mutations: _this.queryManager.mutationStore || {}
              },
              dataWithOptimisticResults: _this.cache.extract(true)
            });
          }
        } : void 0
      });
      if (this.devtoolsConfig.enabled)
        this.connectToDevTools();
    }
    Object.defineProperty(ApolloClient2.prototype, "prioritizeCacheValues", {
      /**
       * Whether to prioritize cache values over network results when `query` or `watchQuery` is called.
       * This will essentially turn a `"network-only"` or `"cache-and-network"` fetchPolicy into a `"cache-first"` fetchPolicy,
       * but without influencing the `fetchPolicy` of the created `ObservableQuery` long-term.
       *
       * This can e.g. be used to prioritize the cache during the first render after SSR.
       */
      get: function() {
        return this.disableNetworkFetches;
      },
      set: function(value) {
        this.disableNetworkFetches = value;
      },
      enumerable: false,
      configurable: true
    });
    ApolloClient2.prototype.connectToDevTools = function() {
      if (typeof window === "undefined") {
        return;
      }
      var windowWithDevTools = window;
      var devtoolsSymbol = Symbol.for("apollo.devtools");
      (windowWithDevTools[devtoolsSymbol] = windowWithDevTools[devtoolsSymbol] || []).push(this);
      windowWithDevTools.__APOLLO_CLIENT__ = this;
      if (!hasSuggestedDevtools && globalThis.__DEV__ !== false) {
        hasSuggestedDevtools = true;
        if (window.document && window.top === window.self && /^(https?|file):$/.test(window.location.protocol)) {
          setTimeout(function() {
            if (!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
              var nav = window.navigator;
              var ua = nav && nav.userAgent;
              var url = void 0;
              if (typeof ua === "string") {
                if (ua.indexOf("Chrome/") > -1) {
                  url = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm";
                } else if (ua.indexOf("Firefox/") > -1) {
                  url = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/";
                }
              }
              if (url) {
                globalThis.__DEV__ !== false && invariant2.log("Download the Apollo DevTools for a better development experience: %s", url);
              }
            }
          }, 1e4);
        }
      }
    };
    Object.defineProperty(ApolloClient2.prototype, "documentTransform", {
      /**
       * The `DocumentTransform` used to modify GraphQL documents before a request
       * is made. If a custom `DocumentTransform` is not provided, this will be the
       * default document transform.
       */
      get: function() {
        return this.queryManager.documentTransform;
      },
      enumerable: false,
      configurable: true
    });
    ApolloClient2.prototype.stop = function() {
      this.queryManager.stop();
    };
    ApolloClient2.prototype.watchQuery = function(options) {
      if (this.defaultOptions.watchQuery) {
        options = mergeOptions(this.defaultOptions.watchQuery, options);
      }
      if (this.disableNetworkFetches && (options.fetchPolicy === "network-only" || options.fetchPolicy === "cache-and-network")) {
        options = __assign(__assign({}, options), { fetchPolicy: "cache-first" });
      }
      if (globalThis.__DEV__ !== false) {
        warnRemovedOption(options, "canonizeResults", "client.watchQuery");
        warnRemovedOption(options, "partialRefetch", "client.watchQuery");
      }
      return this.queryManager.watchQuery(options);
    };
    ApolloClient2.prototype.query = function(options) {
      if (this.defaultOptions.query) {
        options = mergeOptions(this.defaultOptions.query, options);
      }
      invariant2(options.fetchPolicy !== "cache-and-network", 18);
      if (this.disableNetworkFetches && options.fetchPolicy === "network-only") {
        options = __assign(__assign({}, options), { fetchPolicy: "cache-first" });
      }
      if (globalThis.__DEV__ !== false) {
        warnRemovedOption(options, "canonizeResults", "client.query");
        warnRemovedOption(options, "notifyOnNetworkStatusChange", "client.query", "This option does not affect `client.query` and can be safely removed.");
        if (options.fetchPolicy === "standby") {
          globalThis.__DEV__ !== false && invariant2.warn(19);
        }
      }
      return this.queryManager.query(options);
    };
    ApolloClient2.prototype.mutate = function(options) {
      if (this.defaultOptions.mutate) {
        options = mergeOptions(this.defaultOptions.mutate, options);
      }
      return this.queryManager.mutate(options);
    };
    ApolloClient2.prototype.subscribe = function(options) {
      var _this = this;
      var id = this.queryManager.generateQueryId();
      return this.queryManager.startGraphQLSubscription(options).map(function(result2) {
        return __assign(__assign({}, result2), { data: _this.queryManager.maskOperation({
          document: options.query,
          data: result2.data,
          fetchPolicy: options.fetchPolicy,
          id
        }) });
      });
    };
    ApolloClient2.prototype.readQuery = function(options, optimistic) {
      if (optimistic === void 0) {
        optimistic = false;
      }
      return this.cache.readQuery(options, optimistic);
    };
    ApolloClient2.prototype.watchFragment = function(options) {
      var _a2;
      return this.cache.watchFragment(__assign(__assign({}, options), (_a2 = {}, _a2[Symbol.for("apollo.dataMasking")] = this.queryManager.dataMasking, _a2)));
    };
    ApolloClient2.prototype.readFragment = function(options, optimistic) {
      if (optimistic === void 0) {
        optimistic = false;
      }
      return this.cache.readFragment(options, optimistic);
    };
    ApolloClient2.prototype.writeQuery = function(options) {
      var ref = this.cache.writeQuery(options);
      if (options.broadcast !== false) {
        this.queryManager.broadcastQueries();
      }
      return ref;
    };
    ApolloClient2.prototype.writeFragment = function(options) {
      var ref = this.cache.writeFragment(options);
      if (options.broadcast !== false) {
        this.queryManager.broadcastQueries();
      }
      return ref;
    };
    ApolloClient2.prototype.__actionHookForDevTools = function(cb) {
      this.devToolsHookCb = cb;
    };
    ApolloClient2.prototype.__requestRaw = function(payload) {
      return execute(this.link, payload);
    };
    ApolloClient2.prototype.resetStore = function() {
      var _this = this;
      return Promise.resolve().then(function() {
        return _this.queryManager.clearStore({
          discardWatches: false
        });
      }).then(function() {
        return Promise.all(_this.resetStoreCallbacks.map(function(fn) {
          return fn();
        }));
      }).then(function() {
        return _this.reFetchObservableQueries();
      });
    };
    ApolloClient2.prototype.clearStore = function() {
      var _this = this;
      return Promise.resolve().then(function() {
        return _this.queryManager.clearStore({
          discardWatches: true
        });
      }).then(function() {
        return Promise.all(_this.clearStoreCallbacks.map(function(fn) {
          return fn();
        }));
      });
    };
    ApolloClient2.prototype.onResetStore = function(cb) {
      var _this = this;
      this.resetStoreCallbacks.push(cb);
      return function() {
        _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function(c) {
          return c !== cb;
        });
      };
    };
    ApolloClient2.prototype.onClearStore = function(cb) {
      var _this = this;
      this.clearStoreCallbacks.push(cb);
      return function() {
        _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function(c) {
          return c !== cb;
        });
      };
    };
    ApolloClient2.prototype.reFetchObservableQueries = function(includeStandby) {
      return this.queryManager.reFetchObservableQueries(includeStandby);
    };
    ApolloClient2.prototype.refetchQueries = function(options) {
      var map2 = this.queryManager.refetchQueries(options);
      var queries = [];
      var results = [];
      map2.forEach(function(result3, obsQuery) {
        queries.push(obsQuery);
        results.push(result3);
      });
      var result2 = Promise.all(results);
      result2.queries = queries;
      result2.results = results;
      result2.catch(function(error) {
        globalThis.__DEV__ !== false && invariant2.debug(20, error);
      });
      return result2;
    };
    ApolloClient2.prototype.getObservableQueries = function(include) {
      if (include === void 0) {
        include = "active";
      }
      return this.queryManager.getObservableQueries(include);
    };
    ApolloClient2.prototype.extract = function(optimistic) {
      return this.cache.extract(optimistic);
    };
    ApolloClient2.prototype.restore = function(serializedState) {
      return this.cache.restore(serializedState);
    };
    ApolloClient2.prototype.addResolvers = function(resolvers) {
      this.localState.addResolvers(resolvers);
    };
    ApolloClient2.prototype.setResolvers = function(resolvers) {
      this.localState.setResolvers(resolvers);
    };
    ApolloClient2.prototype.getResolvers = function() {
      return this.localState.getResolvers();
    };
    ApolloClient2.prototype.setLocalStateFragmentMatcher = function(fragmentMatcher) {
      this.localState.setFragmentMatcher(fragmentMatcher);
    };
    ApolloClient2.prototype.setLink = function(newLink) {
      this.link = this.queryManager.link = newLink;
    };
    Object.defineProperty(ApolloClient2.prototype, "defaultContext", {
      get: function() {
        return this.queryManager.defaultContext;
      },
      enumerable: false,
      configurable: true
    });
    return ApolloClient2;
  })()
);
if (globalThis.__DEV__ !== false) {
  ApolloClient.prototype.getMemoryInternals = getApolloClientMemoryInternals;
}

// node_modules/graphql-tag/lib/index.js
var docCache = /* @__PURE__ */ new Map();
var fragmentSourceMap = /* @__PURE__ */ new Map();
var printFragmentWarnings = true;
var experimentalFragmentVariables = false;
function normalize2(string) {
  return string.replace(/[\s,]+/g, " ").trim();
}
function cacheKeyFromLoc(loc) {
  return normalize2(loc.source.body.substring(loc.start, loc.end));
}
function processFragments(ast) {
  var seenKeys = /* @__PURE__ */ new Set();
  var definitions = [];
  ast.definitions.forEach(function(fragmentDefinition) {
    if (fragmentDefinition.kind === "FragmentDefinition") {
      var fragmentName = fragmentDefinition.name.value;
      var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
      var sourceKeySet = fragmentSourceMap.get(fragmentName);
      if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
        if (printFragmentWarnings) {
          console.warn("Warning: fragment with name " + fragmentName + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
        }
      } else if (!sourceKeySet) {
        fragmentSourceMap.set(fragmentName, sourceKeySet = /* @__PURE__ */ new Set());
      }
      sourceKeySet.add(sourceKey);
      if (!seenKeys.has(sourceKey)) {
        seenKeys.add(sourceKey);
        definitions.push(fragmentDefinition);
      }
    } else {
      definitions.push(fragmentDefinition);
    }
  });
  return __assign(__assign({}, ast), { definitions });
}
function stripLoc(doc) {
  var workSet = new Set(doc.definitions);
  workSet.forEach(function(node) {
    if (node.loc)
      delete node.loc;
    Object.keys(node).forEach(function(key) {
      var value = node[key];
      if (value && typeof value === "object") {
        workSet.add(value);
      }
    });
  });
  var loc = doc.loc;
  if (loc) {
    delete loc.startToken;
    delete loc.endToken;
  }
  return doc;
}
function parseDocument(source) {
  var cacheKey = normalize2(source);
  if (!docCache.has(cacheKey)) {
    var parsed = parse(source, {
      experimentalFragmentVariables,
      allowLegacyFragmentVariables: experimentalFragmentVariables
    });
    if (!parsed || parsed.kind !== "Document") {
      throw new Error("Not a valid GraphQL document.");
    }
    docCache.set(cacheKey, stripLoc(processFragments(parsed)));
  }
  return docCache.get(cacheKey);
}
function gql(literals) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  if (typeof literals === "string") {
    literals = [literals];
  }
  var result2 = literals[0];
  args.forEach(function(arg, i) {
    if (arg && arg.kind === "Document") {
      result2 += arg.loc.source.body;
    } else {
      result2 += arg;
    }
    result2 += literals[i + 1];
  });
  return parseDocument(result2);
}
function resetCaches() {
  docCache.clear();
  fragmentSourceMap.clear();
}
function disableFragmentWarnings() {
  printFragmentWarnings = false;
}
function enableExperimentalFragmentVariables() {
  experimentalFragmentVariables = true;
}
function disableExperimentalFragmentVariables() {
  experimentalFragmentVariables = false;
}
var extras = {
  gql,
  resetCaches,
  disableFragmentWarnings,
  enableExperimentalFragmentVariables,
  disableExperimentalFragmentVariables
};
(function(gql_1) {
  gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;
})(gql || (gql = {}));
gql["default"] = gql;

// node_modules/@apollo/client/core/index.js
setVerbosity(globalThis.__DEV__ !== false ? "log" : "silent");

// node_modules/apollo-angular/fesm2022/ngApollo.mjs
function fromPromise(promiseFn) {
  return new Observable((subscriber) => {
    promiseFn().then((result2) => {
      if (!subscriber.closed) {
        subscriber.next(result2);
        subscriber.complete();
      }
    }, (error) => {
      if (!subscriber.closed) {
        subscriber.error(error);
      }
    });
    return () => subscriber.unsubscribe();
  });
}
function useMutationLoading(source, enabled) {
  if (!enabled) {
    return source.pipe(map((result2) => __spreadProps(__spreadValues({}, result2), {
      loading: false
    })));
  }
  return source.pipe(startWith({
    loading: true
  }), map((result2) => __spreadProps(__spreadValues({}, result2), {
    loading: !!result2.loading
  })));
}
var ZoneScheduler = class {
  zone;
  constructor(zone) {
    this.zone = zone;
  }
  now = Date.now ? Date.now : () => +/* @__PURE__ */ new Date();
  schedule(work, delay = 0, state) {
    return this.zone.run(() => queueScheduler.schedule(work, delay, state));
  }
};
function fixObservable(obs) {
  obs[observable] = () => obs;
  return obs;
}
function wrapWithZone(obs, ngZone) {
  return obs.pipe(observeOn(new ZoneScheduler(ngZone)));
}
function useInitialLoading(obsQuery) {
  return function useInitialLoadingOperator(source) {
    return new Observable(function useInitialLoadingSubscription(subscriber) {
      const currentResult = obsQuery.getCurrentResult();
      const {
        loading,
        errors,
        error,
        partial,
        data
      } = currentResult;
      const {
        partialRefetch,
        fetchPolicy
      } = obsQuery.options;
      const hasError = errors || error;
      if (partialRefetch && partial && (!data || Object.keys(data).length === 0) && fetchPolicy !== "cache-only" && !loading && !hasError) {
        subscriber.next(__spreadProps(__spreadValues({}, currentResult), {
          loading: true,
          networkStatus: NetworkStatus.loading
        }));
      }
      return source.subscribe(subscriber);
    });
  };
}
var QueryRef = class {
  obsQuery;
  valueChanges;
  queryId;
  constructor(obsQuery, ngZone, options) {
    this.obsQuery = obsQuery;
    const wrapped = wrapWithZone(from(fixObservable(this.obsQuery)), ngZone);
    this.valueChanges = options.useInitialLoading ? wrapped.pipe(useInitialLoading(this.obsQuery)) : wrapped;
    this.queryId = this.obsQuery.queryId;
  }
  // ObservableQuery's methods
  get options() {
    return this.obsQuery.options;
  }
  get variables() {
    return this.obsQuery.variables;
  }
  result() {
    return this.obsQuery.result();
  }
  getCurrentResult() {
    return this.obsQuery.getCurrentResult();
  }
  getLastResult() {
    return this.obsQuery.getLastResult();
  }
  getLastError() {
    return this.obsQuery.getLastError();
  }
  resetLastResults() {
    return this.obsQuery.resetLastResults();
  }
  refetch(variables) {
    return this.obsQuery.refetch(variables);
  }
  fetchMore(fetchMoreOptions) {
    return this.obsQuery.fetchMore(fetchMoreOptions);
  }
  subscribeToMore(options) {
    return this.obsQuery.subscribeToMore(options);
  }
  updateQuery(mapFn) {
    return this.obsQuery.updateQuery(mapFn);
  }
  stopPolling() {
    return this.obsQuery.stopPolling();
  }
  startPolling(pollInterval) {
    return this.obsQuery.startPolling(pollInterval);
  }
  setOptions(opts) {
    return this.obsQuery.setOptions(opts);
  }
  setVariables(variables) {
    return this.obsQuery.setVariables(variables);
  }
};
var APOLLO_FLAGS = new InjectionToken("APOLLO_FLAGS");
var APOLLO_OPTIONS = new InjectionToken("APOLLO_OPTIONS");
var APOLLO_NAMED_OPTIONS = new InjectionToken("APOLLO_NAMED_OPTIONS");
var ApolloBase = class {
  ngZone;
  flags;
  _client;
  useInitialLoading;
  useMutationLoading;
  constructor(ngZone, flags, _client) {
    this.ngZone = ngZone;
    this.flags = flags;
    this._client = _client;
    this.useInitialLoading = flags?.useInitialLoading ?? false;
    this.useMutationLoading = flags?.useMutationLoading ?? false;
  }
  watchQuery(options) {
    return new QueryRef(this.ensureClient().watchQuery(__spreadValues({}, options)), this.ngZone, __spreadValues({
      useInitialLoading: this.useInitialLoading
    }, options));
  }
  query(options) {
    return fromPromise(() => this.ensureClient().query(__spreadValues({}, options)));
  }
  mutate(options) {
    return useMutationLoading(fromPromise(() => this.ensureClient().mutate(__spreadValues({}, options))), options.useMutationLoading ?? this.useMutationLoading);
  }
  watchFragment(options, extra) {
    const obs = from(fixObservable(this.ensureClient().watchFragment(__spreadValues({}, options))));
    return extra && extra.useZone !== true ? obs : wrapWithZone(obs, this.ngZone);
  }
  subscribe(options, extra) {
    const obs = from(fixObservable(this.ensureClient().subscribe(__spreadValues({}, options))));
    return extra && extra.useZone !== true ? obs : wrapWithZone(obs, this.ngZone);
  }
  /**
   * Get an instance of ApolloClient
   */
  get client() {
    return this.ensureClient();
  }
  /**
   * Set a new instance of ApolloClient
   * Remember to clean up the store before setting a new client.
   *
   * @param client ApolloClient instance
   */
  set client(client) {
    if (this._client) {
      throw new Error("Client has been already defined");
    }
    this._client = client;
  }
  ensureClient() {
    this.checkInstance();
    return this._client;
  }
  checkInstance() {
    if (this._client) {
      return true;
    } else {
      throw new Error("Client has not been defined yet");
    }
  }
};
var Apollo = class _Apollo extends ApolloBase {
  map = /* @__PURE__ */ new Map();
  constructor(ngZone, apolloOptions, apolloNamedOptions, flags) {
    super(ngZone, flags);
    if (apolloOptions) {
      this.createDefault(apolloOptions);
    }
    if (apolloNamedOptions && typeof apolloNamedOptions === "object") {
      for (let name in apolloNamedOptions) {
        if (apolloNamedOptions.hasOwnProperty(name)) {
          const options = apolloNamedOptions[name];
          this.create(options, name);
        }
      }
    }
  }
  /**
   * Create an instance of ApolloClient
   * @param options Options required to create ApolloClient
   * @param name client's name
   */
  create(options, name) {
    if (isNamed(name)) {
      this.createNamed(name, options);
    } else {
      this.createDefault(options);
    }
  }
  /**
   * Use a default ApolloClient
   */
  default() {
    return this;
  }
  /**
   * Use a named ApolloClient
   * @param name client's name
   */
  use(name) {
    if (isNamed(name)) {
      return this.map.get(name);
    } else {
      return this.default();
    }
  }
  /**
   * Create a default ApolloClient, same as `apollo.create(options)`
   * @param options ApolloClient's options
   */
  createDefault(options) {
    if (this._client) {
      throw new Error("Apollo has been already created.");
    }
    this.client = this.ngZone.runOutsideAngular(() => new ApolloClient(options));
  }
  /**
   * Create a named ApolloClient, same as `apollo.create(options, name)`
   * @param name client's name
   * @param options ApolloClient's options
   */
  createNamed(name, options) {
    if (this.map.has(name)) {
      throw new Error(`Client ${name} has been already created`);
    }
    this.map.set(name, new ApolloBase(this.ngZone, this.flags, this.ngZone.runOutsideAngular(() => new ApolloClient(options))));
  }
  /**
   * Remember to clean up the store before removing a client
   * @param name client's name
   */
  removeClient(name) {
    if (isNamed(name)) {
      this.map.delete(name);
    } else {
      this._client = void 0;
    }
  }
  static \u0275fac = function Apollo_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Apollo)(\u0275\u0275inject(NgZone), \u0275\u0275inject(APOLLO_OPTIONS, 8), \u0275\u0275inject(APOLLO_NAMED_OPTIONS, 8), \u0275\u0275inject(APOLLO_FLAGS, 8));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Apollo,
    factory: _Apollo.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Apollo, [{
    type: Injectable
  }], () => [{
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [APOLLO_OPTIONS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [APOLLO_NAMED_OPTIONS]
    }, {
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [APOLLO_FLAGS]
    }, {
      type: Optional
    }]
  }], null);
})();
function isNamed(name) {
  return !!name && name !== "default";
}
function provideApollo(optionsFactory, flags = {}) {
  return [Apollo, {
    provide: APOLLO_OPTIONS,
    useFactory: optionsFactory
  }, {
    provide: APOLLO_FLAGS,
    useValue: flags
  }];
}
var Query = class _Query {
  apollo;
  client = "default";
  constructor(apollo) {
    this.apollo = apollo;
  }
  watch(variables, options) {
    return this.apollo.use(this.client).watchQuery(__spreadProps(__spreadValues({}, options), {
      variables,
      query: this.document
    }));
  }
  fetch(variables, options) {
    return this.apollo.use(this.client).query(__spreadProps(__spreadValues({}, options), {
      variables,
      query: this.document
    }));
  }
  static \u0275fac = function Query_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Query)(\u0275\u0275inject(Apollo));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Query,
    factory: _Query.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Query, [{
    type: Injectable
  }], () => [{
    type: Apollo
  }], null);
})();
var Mutation = class _Mutation {
  apollo;
  client = "default";
  constructor(apollo) {
    this.apollo = apollo;
  }
  mutate(variables, options) {
    return this.apollo.use(this.client).mutate(__spreadProps(__spreadValues({}, options), {
      variables,
      mutation: this.document
    }));
  }
  static \u0275fac = function Mutation_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Mutation)(\u0275\u0275inject(Apollo));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Mutation,
    factory: _Mutation.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Mutation, [{
    type: Injectable
  }], () => [{
    type: Apollo
  }], null);
})();
var Subscription3 = class _Subscription {
  apollo;
  client = "default";
  constructor(apollo) {
    this.apollo = apollo;
  }
  subscribe(variables, options, extra) {
    return this.apollo.use(this.client).subscribe(__spreadProps(__spreadValues({}, options), {
      variables,
      query: this.document
    }), extra);
  }
  static \u0275fac = function Subscription_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Subscription)(\u0275\u0275inject(Apollo));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Subscription,
    factory: _Subscription.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Subscription3, [{
    type: Injectable
  }], () => [{
    type: Apollo
  }], null);
})();
var typedGQLTag = gql;
var gql2 = typedGQLTag;

// src/app/graphql/queries/query.ts
var GET_USERS = gql2`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;
var ADD_USER = gql2`
  mutation AddUser($name: String!, $email: String!) {
    addUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

// src/app/graphql/components/graphql-user/graphql-user.ts
var _forTrack0 = ($index, $item) => $item.id;
function GraphqlUser_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", user_r1.name, " - ", user_r1.email, " ");
  }
}
function GraphqlUser_ForEmpty_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1, "No record found");
    \u0275\u0275domElementEnd();
  }
}
var GraphqlUser = class _GraphqlUser {
  apollo;
  users = [];
  constructor(apollo) {
    this.apollo = apollo;
  }
  ngOnInit() {
    this.apollo.watchQuery({
      query: GET_USERS
    }).valueChanges.subscribe((result2) => {
      this.users = result2?.data?.users;
    });
  }
  addUser() {
    this.apollo.mutate({
      mutation: ADD_USER,
      variables: {
        name: "New User",
        email: "newuser@example.com"
      }
    }).subscribe((result2) => {
      console.log("User added", result2.data);
    });
  }
  static \u0275fac = function GraphqlUser_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GraphqlUser)(\u0275\u0275directiveInject(Apollo));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GraphqlUser, selectors: [["app-graphql-user"]], decls: 8, vars: 1, consts: [[3, "click"]], template: function GraphqlUser_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "h2");
      \u0275\u0275text(1, "Users");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(2, "ul");
      \u0275\u0275repeaterCreate(3, GraphqlUser_For_4_Template, 2, 2, "li", null, _forTrack0, false, GraphqlUser_ForEmpty_5_Template, 2, 0, "span");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "button", 0);
      \u0275\u0275domListener("click", function GraphqlUser_Template_button_click_6_listener() {
        return ctx.addUser();
      });
      \u0275\u0275text(7, "Add User");
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.users);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GraphqlUser, [{
    type: Component,
    args: [{ selector: "app-graphql-user", imports: [], template: '<h2>Users</h2>\n<ul>\n   @for(user of users; track user.id){\n<li >\n    {{ user.name }} - {{ user.email }}\n  </li>\n    }@empty{\n        <span>No record found</span>\n    }\n  \n</ul>\n\n<button (click)="addUser()">Add User</button>\n' }]
  }], () => [{ type: Apollo }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GraphqlUser, { className: "GraphqlUser", filePath: "src/app/graphql/components/graphql-user/graphql-user.ts", lineNumber: 10 });
})();

// node_modules/@apollo/client/link/batch/batching.js
var OperationBatcher = (
  /** @class */
  (function() {
    function OperationBatcher2(_a2) {
      var batchDebounce = _a2.batchDebounce, batchInterval = _a2.batchInterval, batchMax = _a2.batchMax, batchHandler = _a2.batchHandler, batchKey = _a2.batchKey;
      this.batchesByKey = /* @__PURE__ */ new Map();
      this.scheduledBatchTimerByKey = /* @__PURE__ */ new Map();
      this.batchDebounce = batchDebounce;
      this.batchInterval = batchInterval;
      this.batchMax = batchMax || 0;
      this.batchHandler = batchHandler;
      this.batchKey = batchKey || (function() {
        return "";
      });
    }
    OperationBatcher2.prototype.enqueueRequest = function(request) {
      var _this = this;
      var requestCopy = __assign(__assign({}, request), { next: [], error: [], complete: [], subscribers: /* @__PURE__ */ new Set() });
      var key = this.batchKey(request.operation);
      if (!requestCopy.observable) {
        requestCopy.observable = new Observable2(function(observer) {
          var batch = _this.batchesByKey.get(key);
          if (!batch)
            _this.batchesByKey.set(key, batch = /* @__PURE__ */ new Set());
          var isFirstEnqueuedRequest = batch.size === 0;
          var isFirstSubscriber = requestCopy.subscribers.size === 0;
          requestCopy.subscribers.add(observer);
          if (isFirstSubscriber) {
            batch.add(requestCopy);
          }
          if (observer.next) {
            requestCopy.next.push(observer.next.bind(observer));
          }
          if (observer.error) {
            requestCopy.error.push(observer.error.bind(observer));
          }
          if (observer.complete) {
            requestCopy.complete.push(observer.complete.bind(observer));
          }
          if (isFirstEnqueuedRequest || _this.batchDebounce) {
            _this.scheduleQueueConsumption(key);
          }
          if (batch.size === _this.batchMax) {
            _this.consumeQueue(key);
          }
          return function() {
            var _a2;
            if (requestCopy.subscribers.delete(observer) && requestCopy.subscribers.size < 1) {
              if (batch.delete(requestCopy) && batch.size < 1) {
                _this.consumeQueue(key);
                (_a2 = batch.subscription) === null || _a2 === void 0 ? void 0 : _a2.unsubscribe();
              }
            }
          };
        });
      }
      return requestCopy.observable;
    };
    OperationBatcher2.prototype.consumeQueue = function(key) {
      if (key === void 0) {
        key = "";
      }
      var batch = this.batchesByKey.get(key);
      this.batchesByKey.delete(key);
      if (!batch || !batch.size) {
        return;
      }
      var operations = [];
      var forwards = [];
      var observables = [];
      var nexts = [];
      var errors = [];
      var completes = [];
      batch.forEach(function(request) {
        operations.push(request.operation);
        forwards.push(request.forward);
        observables.push(request.observable);
        nexts.push(request.next);
        errors.push(request.error);
        completes.push(request.complete);
      });
      var batchedObservable = this.batchHandler(operations, forwards) || Observable2.of();
      var onError = function(error) {
        errors.forEach(function(rejecters) {
          if (rejecters) {
            rejecters.forEach(function(e) {
              return e(error);
            });
          }
        });
      };
      batch.subscription = batchedObservable.subscribe({
        next: function(results) {
          if (!Array.isArray(results)) {
            results = [results];
          }
          if (nexts.length !== results.length) {
            var error = new Error("server returned results with length ".concat(results.length, ", expected length of ").concat(nexts.length));
            error.result = results;
            return onError(error);
          }
          results.forEach(function(result2, index) {
            if (nexts[index]) {
              nexts[index].forEach(function(next) {
                return next(result2);
              });
            }
          });
        },
        error: onError,
        complete: function() {
          completes.forEach(function(complete) {
            if (complete) {
              complete.forEach(function(c) {
                return c();
              });
            }
          });
        }
      });
      return observables;
    };
    OperationBatcher2.prototype.scheduleQueueConsumption = function(key) {
      var _this = this;
      clearTimeout(this.scheduledBatchTimerByKey.get(key));
      this.scheduledBatchTimerByKey.set(key, setTimeout(function() {
        _this.consumeQueue(key);
        _this.scheduledBatchTimerByKey.delete(key);
      }, this.batchInterval));
    };
    return OperationBatcher2;
  })()
);

// node_modules/@apollo/client/link/batch/batchLink.js
var BatchLink = (
  /** @class */
  (function(_super) {
    __extends(BatchLink2, _super);
    function BatchLink2(fetchParams) {
      var _this = _super.call(this) || this;
      var _a2 = fetchParams || {}, batchDebounce = _a2.batchDebounce, _b = _a2.batchInterval, batchInterval = _b === void 0 ? 10 : _b, _c = _a2.batchMax, batchMax = _c === void 0 ? 0 : _c, _d = _a2.batchHandler, batchHandler = _d === void 0 ? function() {
        return null;
      } : _d, _e = _a2.batchKey, batchKey = _e === void 0 ? function() {
        return "";
      } : _e;
      _this.batcher = new OperationBatcher({
        batchDebounce,
        batchInterval,
        batchMax,
        batchHandler,
        batchKey
      });
      if (fetchParams.batchHandler.length <= 1) {
        _this.request = function(operation) {
          return _this.batcher.enqueueRequest({ operation });
        };
      }
      return _this;
    }
    BatchLink2.prototype.request = function(operation, forward) {
      return this.batcher.enqueueRequest({
        operation,
        forward
      });
    };
    return BatchLink2;
  })(ApolloLink)
);

// node_modules/apollo-angular/fesm2022/ngApolloLinkHttp.mjs
var fetch2 = (req, httpClient, extractFiles) => {
  const shouldUseBody = ["POST", "PUT", "PATCH"].indexOf(req.method.toUpperCase()) !== -1;
  const shouldStringify = (param) => ["variables", "extensions"].indexOf(param.toLowerCase()) !== -1;
  const isBatching = req.body.length;
  let shouldUseMultipart = req.options && req.options.useMultipart;
  let multipartInfo;
  if (shouldUseMultipart) {
    if (isBatching) {
      return new Observable((observer) => observer.error(new Error("File upload is not available when combined with Batching")));
    }
    if (!shouldUseBody) {
      return new Observable((observer) => observer.error(new Error("File upload is not available when GET is used")));
    }
    if (!extractFiles) {
      return new Observable((observer) => observer.error(new Error(`To use File upload you need to pass "extractFiles" function from "extract-files" library to HttpLink's options`)));
    }
    multipartInfo = extractFiles(req.body);
    shouldUseMultipart = !!multipartInfo.files.size;
  }
  let bodyOrParams = {};
  if (isBatching) {
    if (!shouldUseBody) {
      return new Observable((observer) => observer.error(new Error("Batching is not available for GET requests")));
    }
    bodyOrParams = {
      body: req.body
    };
  } else {
    const body = shouldUseMultipart ? multipartInfo.clone : req.body;
    if (shouldUseBody) {
      bodyOrParams = {
        body
      };
    } else {
      const params = Object.keys(req.body).reduce((obj, param) => {
        const value = req.body[param];
        obj[param] = shouldStringify(param) ? JSON.stringify(value) : value;
        return obj;
      }, {});
      bodyOrParams = {
        params
      };
    }
  }
  if (shouldUseMultipart && shouldUseBody) {
    const form = new FormData();
    form.append("operations", JSON.stringify(bodyOrParams.body));
    const map2 = {};
    const files = multipartInfo.files;
    let i = 0;
    files.forEach((paths) => {
      map2[++i] = paths;
    });
    form.append("map", JSON.stringify(map2));
    i = 0;
    files.forEach((_, file) => {
      form.append(++i + "", file, file.name);
    });
    bodyOrParams.body = form;
  }
  return httpClient.request(req.method, req.url, __spreadValues(__spreadValues({
    observe: "response",
    responseType: "json",
    reportProgress: false
  }, bodyOrParams), req.options));
};
var mergeHeaders = (source, destination) => {
  if (source && destination) {
    const merged = destination.keys().reduce((headers, name) => headers.set(name, destination.getAll(name)), source);
    return merged;
  }
  return destination || source;
};
function prioritize(...values) {
  return values.find((val) => typeof val !== "undefined");
}
function createHeadersWithClientAwareness(context) {
  let headers = context.headers && context.headers instanceof HttpHeaders ? context.headers : new HttpHeaders(context.headers);
  if (context.clientAwareness) {
    const {
      name,
      version: version2
    } = context.clientAwareness;
    if (name && !headers.has("apollographql-client-name")) {
      headers = headers.set("apollographql-client-name", name);
    }
    if (version2 && !headers.has("apollographql-client-version")) {
      headers = headers.set("apollographql-client-version", version2);
    }
  }
  return headers;
}
var defaults = {
  batchInterval: 10,
  batchMax: 10,
  uri: "graphql",
  method: "POST",
  withCredentials: false,
  includeQuery: true,
  includeExtensions: false,
  useMultipart: false
};
function pick(context, options, key) {
  return prioritize(context[key], options[key], defaults[key]);
}
var HttpBatchLinkHandler = class extends ApolloLink {
  httpClient;
  options;
  batcher;
  batchInterval;
  batchMax;
  print = print;
  constructor(httpClient, options) {
    super();
    this.httpClient = httpClient;
    this.options = options;
    this.batchInterval = options.batchInterval || defaults.batchInterval;
    this.batchMax = options.batchMax || defaults.batchMax;
    if (this.options.operationPrinter) {
      this.print = this.options.operationPrinter;
    }
    const batchHandler = (operations) => {
      return new Observable2((observer) => {
        const body = this.createBody(operations);
        const headers = this.createHeaders(operations);
        const {
          method,
          uri,
          withCredentials
        } = this.createOptions(operations);
        if (typeof uri === "function") {
          throw new Error(`Option 'uri' is a function, should be a string`);
        }
        const req = {
          method,
          url: uri,
          body,
          options: {
            withCredentials,
            headers
          }
        };
        const sub = fetch2(req, this.httpClient, () => {
          throw new Error("File upload is not available when combined with Batching");
        }).subscribe({
          next: (result2) => observer.next(result2.body),
          error: (err) => observer.error(err),
          complete: () => observer.complete()
        });
        return () => {
          if (!sub.closed) {
            sub.unsubscribe();
          }
        };
      });
    };
    const batchKey = options.batchKey || ((operation) => {
      return this.createBatchKey(operation);
    });
    this.batcher = new BatchLink({
      batchInterval: this.batchInterval,
      batchMax: this.batchMax,
      batchKey,
      batchHandler
    });
  }
  createOptions(operations) {
    const context = operations[0].getContext();
    return {
      method: pick(context, this.options, "method"),
      uri: pick(context, this.options, "uri"),
      withCredentials: pick(context, this.options, "withCredentials")
    };
  }
  createBody(operations) {
    return operations.map((operation) => {
      const includeExtensions = prioritize(operation.getContext().includeExtensions, this.options.includeExtensions, false);
      const includeQuery = prioritize(operation.getContext().includeQuery, this.options.includeQuery, true);
      const body = {
        operationName: operation.operationName,
        variables: operation.variables
      };
      if (includeExtensions) {
        body.extensions = operation.extensions;
      }
      if (includeQuery) {
        body.query = this.print(operation.query);
      }
      return body;
    });
  }
  createHeaders(operations) {
    return operations.reduce((headers, operation) => {
      return mergeHeaders(headers, operation.getContext().headers);
    }, createHeadersWithClientAwareness({
      headers: this.options.headers,
      clientAwareness: operations[0]?.getContext()?.clientAwareness
    }));
  }
  createBatchKey(operation) {
    const context = operation.getContext();
    if (context.skipBatching) {
      return Math.random().toString(36).substring(2, 11);
    }
    const headers = context.headers && context.headers.keys().map((k) => context.headers.get(k));
    const opts = JSON.stringify({
      includeQuery: context.includeQuery,
      includeExtensions: context.includeExtensions,
      headers
    });
    return prioritize(context.uri, this.options.uri, "") + opts;
  }
  request(op) {
    return this.batcher.request(op);
  }
};
var HttpBatchLink = class _HttpBatchLink {
  httpClient;
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  create(options) {
    return new HttpBatchLinkHandler(this.httpClient, options);
  }
  static \u0275fac = function HttpBatchLink_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HttpBatchLink)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _HttpBatchLink,
    factory: _HttpBatchLink.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpBatchLink, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient
  }], null);
})();
var HttpLinkHandler = class extends ApolloLink {
  httpClient;
  options;
  requester;
  print = print;
  constructor(httpClient, options) {
    super();
    this.httpClient = httpClient;
    this.options = options;
    if (this.options.operationPrinter) {
      this.print = this.options.operationPrinter;
    }
    this.requester = (operation) => new Observable2((observer) => {
      const context = operation.getContext();
      let method = pick(context, this.options, "method");
      const includeQuery = pick(context, this.options, "includeQuery");
      const includeExtensions = pick(context, this.options, "includeExtensions");
      const url = pick(context, this.options, "uri");
      const withCredentials = pick(context, this.options, "withCredentials");
      const useMultipart = pick(context, this.options, "useMultipart");
      const useGETForQueries = this.options.useGETForQueries === true;
      const isQuery = operation.query.definitions.some((def) => def.kind === "OperationDefinition" && def.operation === "query");
      if (useGETForQueries && isQuery) {
        method = "GET";
      }
      const req = {
        method,
        url: typeof url === "function" ? url(operation) : url,
        body: {
          operationName: operation.operationName,
          variables: operation.variables
        },
        options: {
          withCredentials,
          useMultipart,
          headers: this.options.headers
        }
      };
      if (includeExtensions) {
        req.body.extensions = operation.extensions;
      }
      if (includeQuery) {
        req.body.query = this.print(operation.query);
      }
      const headers = createHeadersWithClientAwareness(context);
      req.options.headers = mergeHeaders(req.options.headers, headers);
      const sub = fetch2(req, this.httpClient, this.options.extractFiles).subscribe({
        next: (response) => {
          operation.setContext({
            response
          });
          observer.next(response.body);
        },
        error: (err) => observer.error(err),
        complete: () => observer.complete()
      });
      return () => {
        if (!sub.closed) {
          sub.unsubscribe();
        }
      };
    });
  }
  request(op) {
    return this.requester(op);
  }
};
var HttpLink2 = class _HttpLink {
  httpClient;
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  create(options) {
    return new HttpLinkHandler(this.httpClient, options);
  }
  static \u0275fac = function HttpLink_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HttpLink)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _HttpLink,
    factory: _HttpLink.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpLink2, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient
  }], null);
})();

// src/app/app.ts
var App = class _App {
  meta;
  titleService;
  route;
  router;
  title = signal("robo-angular", ...ngDevMode ? [{ debugName: "title" }] : []);
  constructor(meta, titleService, route, router) {
    this.meta = meta;
    this.titleService = titleService;
    this.route = route;
    this.router = router;
    this.route.events.pipe(filter((event) => event instanceof NavigationEnd), map(() => {
      let route2 = this.router;
      while (route2.firstChild)
        route2 = route2.firstChild;
      return route2;
    }), mergeMap((route2) => route2.data)).subscribe((data) => {
      this.titleService.setTitle(data["title"] || "MyApp");
      this.meta.updateTag({ name: data["info"], content: data["info"] });
    });
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)(\u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], features: [\u0275\u0275ProvidersFeature([
    // provideHttpClient(),
    provideApollo(() => {
      const httpLink = inject(HttpLink2);
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({ uri: "http://localhost:4000/graphql" })
      };
    })
  ])], decls: 6, vars: 5, consts: [["bgColor", ""]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet")(1, "app-toaster");
      \u0275\u0275elementStart(2, "div", 0);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "fullname");
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "app-graphql-user");
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(4, 1, "paul", "prem", "kumar"));
    }
  }, dependencies: [RouterOutlet, Toaster, BgColorDirective, GraphqlUser, Fullname], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, Toaster, Fullname, BgColorDirective, GraphqlUser], providers: [
      // provideHttpClient(),
      provideApollo(() => {
        const httpLink = inject(HttpLink2);
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({ uri: "http://localhost:4000/graphql" })
        };
      })
    ], template: '<router-outlet />\n<app-toaster></app-toaster>\n<div bgColor>{{"paul" | fullname:"prem":"kumar"}}</div>\n<app-graphql-user></app-graphql-user>' }]
  }], () => [{ type: Meta }, { type: Title }, { type: Router }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 28 });
})();

// node_modules/zone.js/fesm2015/zone.js
var global3 = globalThis;
function __symbol__(name) {
  const symbolPrefix = global3["__Zone_symbol_prefix"] || "__zone_symbol__";
  return symbolPrefix + name;
}
function initZone() {
  const performance2 = global3["performance"];
  function mark(name) {
    performance2 && performance2["mark"] && performance2["mark"](name);
  }
  function performanceMeasure(name, label) {
    performance2 && performance2["measure"] && performance2["measure"](name, label);
  }
  mark("Zone");
  class ZoneImpl {
    static __symbol__ = __symbol__;
    static assertZonePatched() {
      if (global3["Promise"] !== patches["ZoneAwarePromise"]) {
        throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)");
      }
    }
    static get root() {
      let zone = ZoneImpl.current;
      while (zone.parent) {
        zone = zone.parent;
      }
      return zone;
    }
    static get current() {
      return _currentZoneFrame.zone;
    }
    static get currentTask() {
      return _currentTask;
    }
    static __load_patch(name, fn, ignoreDuplicate = false) {
      if (patches.hasOwnProperty(name)) {
        const checkDuplicate = global3[__symbol__("forceDuplicateZoneCheck")] === true;
        if (!ignoreDuplicate && checkDuplicate) {
          throw Error("Already loaded patch: " + name);
        }
      } else if (!global3["__Zone_disable_" + name]) {
        const perfName = "Zone:" + name;
        mark(perfName);
        patches[name] = fn(global3, ZoneImpl, _api);
        performanceMeasure(perfName, perfName);
      }
    }
    get parent() {
      return this._parent;
    }
    get name() {
      return this._name;
    }
    _parent;
    _name;
    _properties;
    _zoneDelegate;
    constructor(parent, zoneSpec) {
      this._parent = parent;
      this._name = zoneSpec ? zoneSpec.name || "unnamed" : "<root>";
      this._properties = zoneSpec && zoneSpec.properties || {};
      this._zoneDelegate = new _ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
    }
    get(key) {
      const zone = this.getZoneWith(key);
      if (zone)
        return zone._properties[key];
    }
    getZoneWith(key) {
      let current = this;
      while (current) {
        if (current._properties.hasOwnProperty(key)) {
          return current;
        }
        current = current._parent;
      }
      return null;
    }
    fork(zoneSpec) {
      if (!zoneSpec)
        throw new Error("ZoneSpec required!");
      return this._zoneDelegate.fork(this, zoneSpec);
    }
    wrap(callback, source) {
      if (typeof callback !== "function") {
        throw new Error("Expecting function got: " + callback);
      }
      const _callback = this._zoneDelegate.intercept(this, callback, source);
      const zone = this;
      return function() {
        return zone.runGuarded(_callback, this, arguments, source);
      };
    }
    run(callback, applyThis, applyArgs, source) {
      _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
      try {
        return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
      } finally {
        _currentZoneFrame = _currentZoneFrame.parent;
      }
    }
    runGuarded(callback, applyThis = null, applyArgs, source) {
      _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
      try {
        try {
          return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
        } catch (error) {
          if (this._zoneDelegate.handleError(this, error)) {
            throw error;
          }
        }
      } finally {
        _currentZoneFrame = _currentZoneFrame.parent;
      }
    }
    runTask(task, applyThis, applyArgs) {
      if (task.zone != this) {
        throw new Error("A task can only be run in the zone of creation! (Creation: " + (task.zone || NO_ZONE).name + "; Execution: " + this.name + ")");
      }
      const zoneTask = task;
      const { type, data: { isPeriodic = false, isRefreshable = false } = {} } = task;
      if (task.state === notScheduled && (type === eventTask || type === macroTask)) {
        return;
      }
      const reEntryGuard = task.state != running;
      reEntryGuard && zoneTask._transitionTo(running, scheduled);
      const previousTask = _currentTask;
      _currentTask = zoneTask;
      _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
      try {
        if (type == macroTask && task.data && !isPeriodic && !isRefreshable) {
          task.cancelFn = void 0;
        }
        try {
          return this._zoneDelegate.invokeTask(this, zoneTask, applyThis, applyArgs);
        } catch (error) {
          if (this._zoneDelegate.handleError(this, error)) {
            throw error;
          }
        }
      } finally {
        const state = task.state;
        if (state !== notScheduled && state !== unknown) {
          if (type == eventTask || isPeriodic || isRefreshable && state === scheduling) {
            reEntryGuard && zoneTask._transitionTo(scheduled, running, scheduling);
          } else {
            const zoneDelegates = zoneTask._zoneDelegates;
            this._updateTaskCount(zoneTask, -1);
            reEntryGuard && zoneTask._transitionTo(notScheduled, running, notScheduled);
            if (isRefreshable) {
              zoneTask._zoneDelegates = zoneDelegates;
            }
          }
        }
        _currentZoneFrame = _currentZoneFrame.parent;
        _currentTask = previousTask;
      }
    }
    scheduleTask(task) {
      if (task.zone && task.zone !== this) {
        let newZone = this;
        while (newZone) {
          if (newZone === task.zone) {
            throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${task.zone.name}`);
          }
          newZone = newZone.parent;
        }
      }
      task._transitionTo(scheduling, notScheduled);
      const zoneDelegates = [];
      task._zoneDelegates = zoneDelegates;
      task._zone = this;
      try {
        task = this._zoneDelegate.scheduleTask(this, task);
      } catch (err) {
        task._transitionTo(unknown, scheduling, notScheduled);
        this._zoneDelegate.handleError(this, err);
        throw err;
      }
      if (task._zoneDelegates === zoneDelegates) {
        this._updateTaskCount(task, 1);
      }
      if (task.state == scheduling) {
        task._transitionTo(scheduled, scheduling);
      }
      return task;
    }
    scheduleMicroTask(source, callback, data, customSchedule) {
      return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, void 0));
    }
    scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
      return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
    }
    scheduleEventTask(source, callback, data, customSchedule, customCancel) {
      return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
    }
    cancelTask(task) {
      if (task.zone != this)
        throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (task.zone || NO_ZONE).name + "; Execution: " + this.name + ")");
      if (task.state !== scheduled && task.state !== running) {
        return;
      }
      task._transitionTo(canceling, scheduled, running);
      try {
        this._zoneDelegate.cancelTask(this, task);
      } catch (err) {
        task._transitionTo(unknown, canceling);
        this._zoneDelegate.handleError(this, err);
        throw err;
      }
      this._updateTaskCount(task, -1);
      task._transitionTo(notScheduled, canceling);
      task.runCount = -1;
      return task;
    }
    _updateTaskCount(task, count) {
      const zoneDelegates = task._zoneDelegates;
      if (count == -1) {
        task._zoneDelegates = null;
      }
      for (let i = 0; i < zoneDelegates.length; i++) {
        zoneDelegates[i]._updateTaskCount(task.type, count);
      }
    }
  }
  const DELEGATE_ZS = {
    name: "",
    onHasTask: (delegate, _, target, hasTaskState) => delegate.hasTask(target, hasTaskState),
    onScheduleTask: (delegate, _, target, task) => delegate.scheduleTask(target, task),
    onInvokeTask: (delegate, _, target, task, applyThis, applyArgs) => delegate.invokeTask(target, task, applyThis, applyArgs),
    onCancelTask: (delegate, _, target, task) => delegate.cancelTask(target, task)
  };
  class _ZoneDelegate {
    get zone() {
      return this._zone;
    }
    _zone;
    _taskCounts = {
      "microTask": 0,
      "macroTask": 0,
      "eventTask": 0
    };
    _parentDelegate;
    _forkDlgt;
    _forkZS;
    _forkCurrZone;
    _interceptDlgt;
    _interceptZS;
    _interceptCurrZone;
    _invokeDlgt;
    _invokeZS;
    _invokeCurrZone;
    _handleErrorDlgt;
    _handleErrorZS;
    _handleErrorCurrZone;
    _scheduleTaskDlgt;
    _scheduleTaskZS;
    _scheduleTaskCurrZone;
    _invokeTaskDlgt;
    _invokeTaskZS;
    _invokeTaskCurrZone;
    _cancelTaskDlgt;
    _cancelTaskZS;
    _cancelTaskCurrZone;
    _hasTaskDlgt;
    _hasTaskDlgtOwner;
    _hasTaskZS;
    _hasTaskCurrZone;
    constructor(zone, parentDelegate, zoneSpec) {
      this._zone = zone;
      this._parentDelegate = parentDelegate;
      this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
      this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
      this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this._zone : parentDelegate._forkCurrZone);
      this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
      this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
      this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this._zone : parentDelegate._interceptCurrZone);
      this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
      this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
      this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this._zone : parentDelegate._invokeCurrZone);
      this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
      this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
      this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this._zone : parentDelegate._handleErrorCurrZone);
      this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
      this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
      this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this._zone : parentDelegate._scheduleTaskCurrZone);
      this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
      this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
      this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this._zone : parentDelegate._invokeTaskCurrZone);
      this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
      this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
      this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this._zone : parentDelegate._cancelTaskCurrZone);
      this._hasTaskZS = null;
      this._hasTaskDlgt = null;
      this._hasTaskDlgtOwner = null;
      this._hasTaskCurrZone = null;
      const zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
      const parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
      if (zoneSpecHasTask || parentHasTask) {
        this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
        this._hasTaskDlgt = parentDelegate;
        this._hasTaskDlgtOwner = this;
        this._hasTaskCurrZone = this._zone;
        if (!zoneSpec.onScheduleTask) {
          this._scheduleTaskZS = DELEGATE_ZS;
          this._scheduleTaskDlgt = parentDelegate;
          this._scheduleTaskCurrZone = this._zone;
        }
        if (!zoneSpec.onInvokeTask) {
          this._invokeTaskZS = DELEGATE_ZS;
          this._invokeTaskDlgt = parentDelegate;
          this._invokeTaskCurrZone = this._zone;
        }
        if (!zoneSpec.onCancelTask) {
          this._cancelTaskZS = DELEGATE_ZS;
          this._cancelTaskDlgt = parentDelegate;
          this._cancelTaskCurrZone = this._zone;
        }
      }
    }
    fork(targetZone, zoneSpec) {
      return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new ZoneImpl(targetZone, zoneSpec);
    }
    intercept(targetZone, callback, source) {
      return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
    }
    invoke(targetZone, callback, applyThis, applyArgs, source) {
      return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
    }
    handleError(targetZone, error) {
      return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
    }
    scheduleTask(targetZone, task) {
      let returnTask = task;
      if (this._scheduleTaskZS) {
        if (this._hasTaskZS) {
          returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
        }
        returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
        if (!returnTask)
          returnTask = task;
      } else {
        if (task.scheduleFn) {
          task.scheduleFn(task);
        } else if (task.type == microTask) {
          scheduleMicroTask(task);
        } else {
          throw new Error("Task is missing scheduleFn.");
        }
      }
      return returnTask;
    }
    invokeTask(targetZone, task, applyThis, applyArgs) {
      return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
    }
    cancelTask(targetZone, task) {
      let value;
      if (this._cancelTaskZS) {
        value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
      } else {
        if (!task.cancelFn) {
          throw Error("Task is not cancelable");
        }
        value = task.cancelFn(task);
      }
      return value;
    }
    hasTask(targetZone, isEmpty2) {
      try {
        this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty2);
      } catch (err) {
        this.handleError(targetZone, err);
      }
    }
    _updateTaskCount(type, count) {
      const counts = this._taskCounts;
      const prev = counts[type];
      const next = counts[type] = prev + count;
      if (next < 0) {
        throw new Error("More tasks executed then were scheduled.");
      }
      if (prev == 0 || next == 0) {
        const isEmpty2 = {
          microTask: counts["microTask"] > 0,
          macroTask: counts["macroTask"] > 0,
          eventTask: counts["eventTask"] > 0,
          change: type
        };
        this.hasTask(this._zone, isEmpty2);
      }
    }
  }
  class ZoneTask {
    type;
    source;
    invoke;
    callback;
    data;
    scheduleFn;
    cancelFn;
    _zone = null;
    runCount = 0;
    _zoneDelegates = null;
    _state = "notScheduled";
    constructor(type, source, callback, options, scheduleFn, cancelFn) {
      this.type = type;
      this.source = source;
      this.data = options;
      this.scheduleFn = scheduleFn;
      this.cancelFn = cancelFn;
      if (!callback) {
        throw new Error("callback is not defined");
      }
      this.callback = callback;
      const self2 = this;
      if (type === eventTask && options && options.useG) {
        this.invoke = ZoneTask.invokeTask;
      } else {
        this.invoke = function() {
          return ZoneTask.invokeTask.call(global3, self2, this, arguments);
        };
      }
    }
    static invokeTask(task, target, args) {
      if (!task) {
        task = this;
      }
      _numberOfNestedTaskFrames++;
      try {
        task.runCount++;
        return task.zone.runTask(task, target, args);
      } finally {
        if (_numberOfNestedTaskFrames == 1) {
          drainMicroTaskQueue();
        }
        _numberOfNestedTaskFrames--;
      }
    }
    get zone() {
      return this._zone;
    }
    get state() {
      return this._state;
    }
    cancelScheduleRequest() {
      this._transitionTo(notScheduled, scheduling);
    }
    _transitionTo(toState, fromState1, fromState2) {
      if (this._state === fromState1 || this._state === fromState2) {
        this._state = toState;
        if (toState == notScheduled) {
          this._zoneDelegates = null;
        }
      } else {
        throw new Error(`${this.type} '${this.source}': can not transition to '${toState}', expecting state '${fromState1}'${fromState2 ? " or '" + fromState2 + "'" : ""}, was '${this._state}'.`);
      }
    }
    toString() {
      if (this.data && typeof this.data.handleId !== "undefined") {
        return this.data.handleId.toString();
      } else {
        return Object.prototype.toString.call(this);
      }
    }
    // add toJSON method to prevent cyclic error when
    // call JSON.stringify(zoneTask)
    toJSON() {
      return {
        type: this.type,
        state: this.state,
        source: this.source,
        zone: this.zone.name,
        runCount: this.runCount
      };
    }
  }
  const symbolSetTimeout = __symbol__("setTimeout");
  const symbolPromise = __symbol__("Promise");
  const symbolThen = __symbol__("then");
  let _microTaskQueue = [];
  let _isDrainingMicrotaskQueue = false;
  let nativeMicroTaskQueuePromise;
  function nativeScheduleMicroTask(func) {
    if (!nativeMicroTaskQueuePromise) {
      if (global3[symbolPromise]) {
        nativeMicroTaskQueuePromise = global3[symbolPromise].resolve(0);
      }
    }
    if (nativeMicroTaskQueuePromise) {
      let nativeThen = nativeMicroTaskQueuePromise[symbolThen];
      if (!nativeThen) {
        nativeThen = nativeMicroTaskQueuePromise["then"];
      }
      nativeThen.call(nativeMicroTaskQueuePromise, func);
    } else {
      global3[symbolSetTimeout](func, 0);
    }
  }
  function scheduleMicroTask(task) {
    if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
      nativeScheduleMicroTask(drainMicroTaskQueue);
    }
    task && _microTaskQueue.push(task);
  }
  function drainMicroTaskQueue() {
    if (!_isDrainingMicrotaskQueue) {
      _isDrainingMicrotaskQueue = true;
      while (_microTaskQueue.length) {
        const queue = _microTaskQueue;
        _microTaskQueue = [];
        for (let i = 0; i < queue.length; i++) {
          const task = queue[i];
          try {
            task.zone.runTask(task, null, null);
          } catch (error) {
            _api.onUnhandledError(error);
          }
        }
      }
      _api.microtaskDrainDone();
      _isDrainingMicrotaskQueue = false;
    }
  }
  const NO_ZONE = { name: "NO ZONE" };
  const notScheduled = "notScheduled", scheduling = "scheduling", scheduled = "scheduled", running = "running", canceling = "canceling", unknown = "unknown";
  const microTask = "microTask", macroTask = "macroTask", eventTask = "eventTask";
  const patches = {};
  const _api = {
    symbol: __symbol__,
    currentZoneFrame: () => _currentZoneFrame,
    onUnhandledError: noop2,
    microtaskDrainDone: noop2,
    scheduleMicroTask,
    showUncaughtError: () => !ZoneImpl[__symbol__("ignoreConsoleErrorUncaughtError")],
    patchEventTarget: () => [],
    patchOnProperties: noop2,
    patchMethod: () => noop2,
    bindArguments: () => [],
    patchThen: () => noop2,
    patchMacroTask: () => noop2,
    patchEventPrototype: () => noop2,
    isIEOrEdge: () => false,
    getGlobalObjects: () => void 0,
    ObjectDefineProperty: () => noop2,
    ObjectGetOwnPropertyDescriptor: () => void 0,
    ObjectCreate: () => void 0,
    ArraySlice: () => [],
    patchClass: () => noop2,
    wrapWithCurrentZone: () => noop2,
    filterProperties: () => [],
    attachOriginToPatched: () => noop2,
    _redefineProperty: () => noop2,
    patchCallbacks: () => noop2,
    nativeScheduleMicroTask
  };
  let _currentZoneFrame = { parent: null, zone: new ZoneImpl(null, null) };
  let _currentTask = null;
  let _numberOfNestedTaskFrames = 0;
  function noop2() {
  }
  performanceMeasure("Zone", "Zone");
  return ZoneImpl;
}
function loadZone() {
  const global4 = globalThis;
  const checkDuplicate = global4[__symbol__("forceDuplicateZoneCheck")] === true;
  if (global4["Zone"] && (checkDuplicate || typeof global4["Zone"].__symbol__ !== "function")) {
    throw new Error("Zone already loaded.");
  }
  global4["Zone"] ??= initZone();
  return global4["Zone"];
}
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ObjectDefineProperty = Object.defineProperty;
var ObjectGetPrototypeOf = Object.getPrototypeOf;
var ObjectCreate = Object.create;
var ArraySlice = Array.prototype.slice;
var ADD_EVENT_LISTENER_STR = "addEventListener";
var REMOVE_EVENT_LISTENER_STR = "removeEventListener";
var ZONE_SYMBOL_ADD_EVENT_LISTENER = __symbol__(ADD_EVENT_LISTENER_STR);
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = __symbol__(REMOVE_EVENT_LISTENER_STR);
var TRUE_STR = "true";
var FALSE_STR = "false";
var ZONE_SYMBOL_PREFIX = __symbol__("");
function wrapWithCurrentZone(callback, source) {
  return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
  return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = __symbol__;
var isWindowExists = typeof window !== "undefined";
var internalWindow = isWindowExists ? window : void 0;
var _global2 = isWindowExists && internalWindow || globalThis;
var REMOVE_ATTRIBUTE = "removeAttribute";
function bindArguments(args, source) {
  for (let i = args.length - 1; i >= 0; i--) {
    if (typeof args[i] === "function") {
      args[i] = wrapWithCurrentZone(args[i], source + "_" + i);
    }
  }
  return args;
}
function patchPrototype(prototype2, fnNames) {
  const source = prototype2.constructor["name"];
  for (let i = 0; i < fnNames.length; i++) {
    const name = fnNames[i];
    const delegate = prototype2[name];
    if (delegate) {
      const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype2, name);
      if (!isPropertyWritable(prototypeDesc)) {
        continue;
      }
      prototype2[name] = ((delegate2) => {
        const patched = function() {
          return delegate2.apply(this, bindArguments(arguments, source + "." + name));
        };
        attachOriginToPatched(patched, delegate2);
        return patched;
      })(delegate);
    }
  }
}
function isPropertyWritable(propertyDesc) {
  if (!propertyDesc) {
    return true;
  }
  if (propertyDesc.writable === false) {
    return false;
  }
  return !(typeof propertyDesc.get === "function" && typeof propertyDesc.set === "undefined");
}
var isWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
var isNode2 = !("nw" in _global2) && typeof _global2.process !== "undefined" && _global2.process.toString() === "[object process]";
var isBrowser = !isNode2 && !isWebWorker && !!(isWindowExists && internalWindow["HTMLElement"]);
var isMix = typeof _global2.process !== "undefined" && _global2.process.toString() === "[object process]" && !isWebWorker && !!(isWindowExists && internalWindow["HTMLElement"]);
var zoneSymbolEventNames$1 = {};
var enableBeforeunloadSymbol = zoneSymbol("enable_beforeunload");
var wrapFn = function(event) {
  event = event || _global2.event;
  if (!event) {
    return;
  }
  let eventNameSymbol = zoneSymbolEventNames$1[event.type];
  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames$1[event.type] = zoneSymbol("ON_PROPERTY" + event.type);
  }
  const target = this || event.target || _global2;
  const listener = target[eventNameSymbol];
  let result2;
  if (isBrowser && target === internalWindow && event.type === "error") {
    const errorEvent = event;
    result2 = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
    if (result2 === true) {
      event.preventDefault();
    }
  } else {
    result2 = listener && listener.apply(this, arguments);
    if (
      // https://github.com/angular/angular/issues/47579
      // https://www.w3.org/TR/2011/WD-html5-20110525/history.html#beforeunloadevent
      // This is the only specific case we should check for. The spec defines that the
      // `returnValue` attribute represents the message to show the user. When the event
      // is created, this attribute must be set to the empty string.
      event.type === "beforeunload" && // To prevent any breaking changes resulting from this change, given that
      // it was already causing a significant number of failures in G3, we have hidden
      // that behavior behind a global configuration flag. Consumers can enable this
      // flag explicitly if they want the `beforeunload` event to be handled as defined
      // in the specification.
      _global2[enableBeforeunloadSymbol] && // The IDL event definition is `attribute DOMString returnValue`, so we check whether
      // `typeof result` is a string.
      typeof result2 === "string"
    ) {
      event.returnValue = result2;
    } else if (result2 != void 0 && !result2) {
      event.preventDefault();
    }
  }
  return result2;
};
function patchProperty(obj, prop, prototype2) {
  let desc = ObjectGetOwnPropertyDescriptor(obj, prop);
  if (!desc && prototype2) {
    const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype2, prop);
    if (prototypeDesc) {
      desc = { enumerable: true, configurable: true };
    }
  }
  if (!desc || !desc.configurable) {
    return;
  }
  const onPropPatchedSymbol = zoneSymbol("on" + prop + "patched");
  if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
    return;
  }
  delete desc.writable;
  delete desc.value;
  const originalDescGet = desc.get;
  const originalDescSet = desc.set;
  const eventName = prop.slice(2);
  let eventNameSymbol = zoneSymbolEventNames$1[eventName];
  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames$1[eventName] = zoneSymbol("ON_PROPERTY" + eventName);
  }
  desc.set = function(newValue) {
    let target = this;
    if (!target && obj === _global2) {
      target = _global2;
    }
    if (!target) {
      return;
    }
    const previousValue = target[eventNameSymbol];
    if (typeof previousValue === "function") {
      target.removeEventListener(eventName, wrapFn);
    }
    originalDescSet?.call(target, null);
    target[eventNameSymbol] = newValue;
    if (typeof newValue === "function") {
      target.addEventListener(eventName, wrapFn, false);
    }
  };
  desc.get = function() {
    let target = this;
    if (!target && obj === _global2) {
      target = _global2;
    }
    if (!target) {
      return null;
    }
    const listener = target[eventNameSymbol];
    if (listener) {
      return listener;
    } else if (originalDescGet) {
      let value = originalDescGet.call(this);
      if (value) {
        desc.set.call(this, value);
        if (typeof target[REMOVE_ATTRIBUTE] === "function") {
          target.removeAttribute(prop);
        }
        return value;
      }
    }
    return null;
  };
  ObjectDefineProperty(obj, prop, desc);
  obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype2) {
  if (properties) {
    for (let i = 0; i < properties.length; i++) {
      patchProperty(obj, "on" + properties[i], prototype2);
    }
  } else {
    const onProperties = [];
    for (const prop in obj) {
      if (prop.slice(0, 2) == "on") {
        onProperties.push(prop);
      }
    }
    for (let j = 0; j < onProperties.length; j++) {
      patchProperty(obj, onProperties[j], prototype2);
    }
  }
}
var originalInstanceKey = zoneSymbol("originalInstance");
function patchClass(className) {
  const OriginalClass = _global2[className];
  if (!OriginalClass)
    return;
  _global2[zoneSymbol(className)] = OriginalClass;
  _global2[className] = function() {
    const a = bindArguments(arguments, className);
    switch (a.length) {
      case 0:
        this[originalInstanceKey] = new OriginalClass();
        break;
      case 1:
        this[originalInstanceKey] = new OriginalClass(a[0]);
        break;
      case 2:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
        break;
      case 3:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
        break;
      case 4:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
        break;
      default:
        throw new Error("Arg list too long.");
    }
  };
  attachOriginToPatched(_global2[className], OriginalClass);
  const instance = new OriginalClass(function() {
  });
  let prop;
  for (prop in instance) {
    if (className === "XMLHttpRequest" && prop === "responseBlob")
      continue;
    (function(prop2) {
      if (typeof instance[prop2] === "function") {
        _global2[className].prototype[prop2] = function() {
          return this[originalInstanceKey][prop2].apply(this[originalInstanceKey], arguments);
        };
      } else {
        ObjectDefineProperty(_global2[className].prototype, prop2, {
          set: function(fn) {
            if (typeof fn === "function") {
              this[originalInstanceKey][prop2] = wrapWithCurrentZone(fn, className + "." + prop2);
              attachOriginToPatched(this[originalInstanceKey][prop2], fn);
            } else {
              this[originalInstanceKey][prop2] = fn;
            }
          },
          get: function() {
            return this[originalInstanceKey][prop2];
          }
        });
      }
    })(prop);
  }
  for (prop in OriginalClass) {
    if (prop !== "prototype" && OriginalClass.hasOwnProperty(prop)) {
      _global2[className][prop] = OriginalClass[prop];
    }
  }
}
function patchMethod(target, name, patchFn) {
  let proto = target;
  while (proto && !proto.hasOwnProperty(name)) {
    proto = ObjectGetPrototypeOf(proto);
  }
  if (!proto && target[name]) {
    proto = target;
  }
  const delegateName = zoneSymbol(name);
  let delegate = null;
  if (proto && (!(delegate = proto[delegateName]) || !proto.hasOwnProperty(delegateName))) {
    delegate = proto[delegateName] = proto[name];
    const desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
    if (isPropertyWritable(desc)) {
      const patchDelegate = patchFn(delegate, delegateName, name);
      proto[name] = function() {
        return patchDelegate(this, arguments);
      };
      attachOriginToPatched(proto[name], delegate);
    }
  }
  return delegate;
}
function patchMacroTask(obj, funcName, metaCreator) {
  let setNative = null;
  function scheduleTask(task) {
    const data = task.data;
    data.args[data.cbIdx] = function() {
      task.invoke.apply(this, arguments);
    };
    setNative.apply(data.target, data.args);
    return task;
  }
  setNative = patchMethod(obj, funcName, (delegate) => function(self2, args) {
    const meta = metaCreator(self2, args);
    if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === "function") {
      return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
    } else {
      return delegate.apply(self2, args);
    }
  });
}
function attachOriginToPatched(patched, original) {
  patched[zoneSymbol("OriginalDelegate")] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIEOrEdge() {
  if (isDetectedIEOrEdge) {
    return ieOrEdge;
  }
  isDetectedIEOrEdge = true;
  try {
    const ua = internalWindow.navigator.userAgent;
    if (ua.indexOf("MSIE ") !== -1 || ua.indexOf("Trident/") !== -1 || ua.indexOf("Edge/") !== -1) {
      ieOrEdge = true;
    }
  } catch (error) {
  }
  return ieOrEdge;
}
function isFunction3(value) {
  return typeof value === "function";
}
function isNumber(value) {
  return typeof value === "number";
}
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
  useG: true
};
var zoneSymbolEventNames = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = new RegExp("^" + ZONE_SYMBOL_PREFIX + "(\\w+)(true|false)$");
var IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol("propagationStopped");
function prepareEventNames(eventName, eventNameToString) {
  const falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
  const trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
  const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
  const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
  zoneSymbolEventNames[eventName] = {};
  zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
  zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
}
function patchEventTarget(_global3, api, apis, patchOptions) {
  const ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
  const REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
  const LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || "eventListeners";
  const REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || "removeAllListeners";
  const zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
  const ADD_EVENT_LISTENER_SOURCE = "." + ADD_EVENT_LISTENER + ":";
  const PREPEND_EVENT_LISTENER = "prependListener";
  const PREPEND_EVENT_LISTENER_SOURCE = "." + PREPEND_EVENT_LISTENER + ":";
  const invokeTask = function(task, target, event) {
    if (task.isRemoved) {
      return;
    }
    const delegate = task.callback;
    if (typeof delegate === "object" && delegate.handleEvent) {
      task.callback = (event2) => delegate.handleEvent(event2);
      task.originalDelegate = delegate;
    }
    let error;
    try {
      task.invoke(task, target, [event]);
    } catch (err) {
      error = err;
    }
    const options = task.options;
    if (options && typeof options === "object" && options.once) {
      const delegate2 = task.originalDelegate ? task.originalDelegate : task.callback;
      target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate2, options);
    }
    return error;
  };
  function globalCallback(context, event, isCapture) {
    event = event || _global3.event;
    if (!event) {
      return;
    }
    const target = context || event.target || _global3;
    const tasks = target[zoneSymbolEventNames[event.type][isCapture ? TRUE_STR : FALSE_STR]];
    if (tasks) {
      const errors = [];
      if (tasks.length === 1) {
        const err = invokeTask(tasks[0], target, event);
        err && errors.push(err);
      } else {
        const copyTasks = tasks.slice();
        for (let i = 0; i < copyTasks.length; i++) {
          if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
            break;
          }
          const err = invokeTask(copyTasks[i], target, event);
          err && errors.push(err);
        }
      }
      if (errors.length === 1) {
        throw errors[0];
      } else {
        for (let i = 0; i < errors.length; i++) {
          const err = errors[i];
          api.nativeScheduleMicroTask(() => {
            throw err;
          });
        }
      }
    }
  }
  const globalZoneAwareCallback = function(event) {
    return globalCallback(this, event, false);
  };
  const globalZoneAwareCaptureCallback = function(event) {
    return globalCallback(this, event, true);
  };
  function patchEventTargetMethods(obj, patchOptions2) {
    if (!obj) {
      return false;
    }
    let useGlobalCallback = true;
    if (patchOptions2 && patchOptions2.useG !== void 0) {
      useGlobalCallback = patchOptions2.useG;
    }
    const validateHandler = patchOptions2 && patchOptions2.vh;
    let checkDuplicate = true;
    if (patchOptions2 && patchOptions2.chkDup !== void 0) {
      checkDuplicate = patchOptions2.chkDup;
    }
    let returnTarget = false;
    if (patchOptions2 && patchOptions2.rt !== void 0) {
      returnTarget = patchOptions2.rt;
    }
    let proto = obj;
    while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
      proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && obj[ADD_EVENT_LISTENER]) {
      proto = obj;
    }
    if (!proto) {
      return false;
    }
    if (proto[zoneSymbolAddEventListener]) {
      return false;
    }
    const eventNameToString = patchOptions2 && patchOptions2.eventNameToString;
    const taskData = {};
    const nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
    const nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
    const nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
    const nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
    let nativePrependEventListener;
    if (patchOptions2 && patchOptions2.prepend) {
      nativePrependEventListener = proto[zoneSymbol(patchOptions2.prepend)] = proto[patchOptions2.prepend];
    }
    function buildEventListenerOptions(options, passive) {
      if (!passive) {
        return options;
      }
      if (typeof options === "boolean") {
        return { capture: options, passive: true };
      }
      if (!options) {
        return { passive: true };
      }
      if (typeof options === "object" && options.passive !== false) {
        return __spreadProps(__spreadValues({}, options), { passive: true });
      }
      return options;
    }
    const customScheduleGlobal = function(task) {
      if (taskData.isExisting) {
        return;
      }
      return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
    };
    const customCancelGlobal = function(task) {
      if (!task.isRemoved) {
        const symbolEventNames = zoneSymbolEventNames[task.eventName];
        let symbolEventName;
        if (symbolEventNames) {
          symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
        }
        const existingTasks = symbolEventName && task.target[symbolEventName];
        if (existingTasks) {
          for (let i = 0; i < existingTasks.length; i++) {
            const existingTask = existingTasks[i];
            if (existingTask === task) {
              existingTasks.splice(i, 1);
              task.isRemoved = true;
              if (task.removeAbortListener) {
                task.removeAbortListener();
                task.removeAbortListener = null;
              }
              if (existingTasks.length === 0) {
                task.allRemoved = true;
                task.target[symbolEventName] = null;
              }
              break;
            }
          }
        }
      }
      if (!task.allRemoved) {
        return;
      }
      return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
    };
    const customScheduleNonGlobal = function(task) {
      return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };
    const customSchedulePrepend = function(task) {
      return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };
    const customCancelNonGlobal = function(task) {
      return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
    };
    const customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
    const customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
    const compareTaskCallbackVsDelegate = function(task, delegate) {
      const typeOfDelegate = typeof delegate;
      return typeOfDelegate === "function" && task.callback === delegate || typeOfDelegate === "object" && task.originalDelegate === delegate;
    };
    const compare2 = patchOptions2?.diff || compareTaskCallbackVsDelegate;
    const unpatchedEvents = Zone[zoneSymbol("UNPATCHED_EVENTS")];
    const passiveEvents = _global3[zoneSymbol("PASSIVE_EVENTS")];
    function copyEventListenerOptions(options) {
      if (typeof options === "object" && options !== null) {
        const newOptions = __spreadValues({}, options);
        if (options.signal) {
          newOptions.signal = options.signal;
        }
        return newOptions;
      }
      return options;
    }
    const makeAddListener = function(nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget2 = false, prepend = false) {
      return function() {
        const target = this || _global3;
        let eventName = arguments[0];
        if (patchOptions2 && patchOptions2.transferEventName) {
          eventName = patchOptions2.transferEventName(eventName);
        }
        let delegate = arguments[1];
        if (!delegate) {
          return nativeListener.apply(this, arguments);
        }
        if (isNode2 && eventName === "uncaughtException") {
          return nativeListener.apply(this, arguments);
        }
        let isEventListenerObject = false;
        if (typeof delegate !== "function") {
          if (!delegate.handleEvent) {
            return nativeListener.apply(this, arguments);
          }
          isEventListenerObject = true;
        }
        if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
          return;
        }
        const passive = !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
        const options = copyEventListenerOptions(buildEventListenerOptions(arguments[2], passive));
        const signal2 = options?.signal;
        if (signal2?.aborted) {
          return;
        }
        if (unpatchedEvents) {
          for (let i = 0; i < unpatchedEvents.length; i++) {
            if (eventName === unpatchedEvents[i]) {
              if (passive) {
                return nativeListener.call(target, eventName, delegate, options);
              } else {
                return nativeListener.apply(this, arguments);
              }
            }
          }
        }
        const capture = !options ? false : typeof options === "boolean" ? true : options.capture;
        const once = options && typeof options === "object" ? options.once : false;
        const zone = Zone.current;
        let symbolEventNames = zoneSymbolEventNames[eventName];
        if (!symbolEventNames) {
          prepareEventNames(eventName, eventNameToString);
          symbolEventNames = zoneSymbolEventNames[eventName];
        }
        const symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
        let existingTasks = target[symbolEventName];
        let isExisting = false;
        if (existingTasks) {
          isExisting = true;
          if (checkDuplicate) {
            for (let i = 0; i < existingTasks.length; i++) {
              if (compare2(existingTasks[i], delegate)) {
                return;
              }
            }
          }
        } else {
          existingTasks = target[symbolEventName] = [];
        }
        let source;
        const constructorName = target.constructor["name"];
        const targetSource = globalSources[constructorName];
        if (targetSource) {
          source = targetSource[eventName];
        }
        if (!source) {
          source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
        }
        taskData.options = options;
        if (once) {
          taskData.options.once = false;
        }
        taskData.target = target;
        taskData.capture = capture;
        taskData.eventName = eventName;
        taskData.isExisting = isExisting;
        const data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : void 0;
        if (data) {
          data.taskData = taskData;
        }
        if (signal2) {
          taskData.options.signal = void 0;
        }
        const task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
        if (signal2) {
          taskData.options.signal = signal2;
          const onAbort = () => task.zone.cancelTask(task);
          nativeListener.call(signal2, "abort", onAbort, { once: true });
          task.removeAbortListener = () => signal2.removeEventListener("abort", onAbort);
        }
        taskData.target = null;
        if (data) {
          data.taskData = null;
        }
        if (once) {
          taskData.options.once = true;
        }
        if (typeof task.options !== "boolean") {
          task.options = options;
        }
        task.target = target;
        task.capture = capture;
        task.eventName = eventName;
        if (isEventListenerObject) {
          task.originalDelegate = delegate;
        }
        if (!prepend) {
          existingTasks.push(task);
        } else {
          existingTasks.unshift(task);
        }
        if (returnTarget2) {
          return target;
        }
      };
    };
    proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
    if (nativePrependEventListener) {
      proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
    }
    proto[REMOVE_EVENT_LISTENER] = function() {
      const target = this || _global3;
      let eventName = arguments[0];
      if (patchOptions2 && patchOptions2.transferEventName) {
        eventName = patchOptions2.transferEventName(eventName);
      }
      const options = arguments[2];
      const capture = !options ? false : typeof options === "boolean" ? true : options.capture;
      const delegate = arguments[1];
      if (!delegate) {
        return nativeRemoveEventListener.apply(this, arguments);
      }
      if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
        return;
      }
      const symbolEventNames = zoneSymbolEventNames[eventName];
      let symbolEventName;
      if (symbolEventNames) {
        symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
      }
      const existingTasks = symbolEventName && target[symbolEventName];
      if (existingTasks) {
        for (let i = 0; i < existingTasks.length; i++) {
          const existingTask = existingTasks[i];
          if (compare2(existingTask, delegate)) {
            existingTasks.splice(i, 1);
            existingTask.isRemoved = true;
            if (existingTasks.length === 0) {
              existingTask.allRemoved = true;
              target[symbolEventName] = null;
              if (!capture && typeof eventName === "string") {
                const onPropertySymbol = ZONE_SYMBOL_PREFIX + "ON_PROPERTY" + eventName;
                target[onPropertySymbol] = null;
              }
            }
            existingTask.zone.cancelTask(existingTask);
            if (returnTarget) {
              return target;
            }
            return;
          }
        }
      }
      return nativeRemoveEventListener.apply(this, arguments);
    };
    proto[LISTENERS_EVENT_LISTENER] = function() {
      const target = this || _global3;
      let eventName = arguments[0];
      if (patchOptions2 && patchOptions2.transferEventName) {
        eventName = patchOptions2.transferEventName(eventName);
      }
      const listeners = [];
      const tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
      for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
        listeners.push(delegate);
      }
      return listeners;
    };
    proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function() {
      const target = this || _global3;
      let eventName = arguments[0];
      if (!eventName) {
        const keys = Object.keys(target);
        for (let i = 0; i < keys.length; i++) {
          const prop = keys[i];
          const match2 = EVENT_NAME_SYMBOL_REGX.exec(prop);
          let evtName = match2 && match2[1];
          if (evtName && evtName !== "removeListener") {
            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
          }
        }
        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, "removeListener");
      } else {
        if (patchOptions2 && patchOptions2.transferEventName) {
          eventName = patchOptions2.transferEventName(eventName);
        }
        const symbolEventNames = zoneSymbolEventNames[eventName];
        if (symbolEventNames) {
          const symbolEventName = symbolEventNames[FALSE_STR];
          const symbolCaptureEventName = symbolEventNames[TRUE_STR];
          const tasks = target[symbolEventName];
          const captureTasks = target[symbolCaptureEventName];
          if (tasks) {
            const removeTasks = tasks.slice();
            for (let i = 0; i < removeTasks.length; i++) {
              const task = removeTasks[i];
              let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }
          if (captureTasks) {
            const removeTasks = captureTasks.slice();
            for (let i = 0; i < removeTasks.length; i++) {
              const task = removeTasks[i];
              let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }
        }
      }
      if (returnTarget) {
        return this;
      }
    };
    attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
    attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
    if (nativeRemoveAllListeners) {
      attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
    }
    if (nativeListeners) {
      attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
    }
    return true;
  }
  let results = [];
  for (let i = 0; i < apis.length; i++) {
    results[i] = patchEventTargetMethods(apis[i], patchOptions);
  }
  return results;
}
function findEventTasks(target, eventName) {
  if (!eventName) {
    const foundTasks = [];
    for (let prop in target) {
      const match2 = EVENT_NAME_SYMBOL_REGX.exec(prop);
      let evtName = match2 && match2[1];
      if (evtName && (!eventName || evtName === eventName)) {
        const tasks = target[prop];
        if (tasks) {
          for (let i = 0; i < tasks.length; i++) {
            foundTasks.push(tasks[i]);
          }
        }
      }
    }
    return foundTasks;
  }
  let symbolEventName = zoneSymbolEventNames[eventName];
  if (!symbolEventName) {
    prepareEventNames(eventName);
    symbolEventName = zoneSymbolEventNames[eventName];
  }
  const captureFalseTasks = target[symbolEventName[FALSE_STR]];
  const captureTrueTasks = target[symbolEventName[TRUE_STR]];
  if (!captureFalseTasks) {
    return captureTrueTasks ? captureTrueTasks.slice() : [];
  } else {
    return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
  }
}
function patchEventPrototype(global4, api) {
  const Event = global4["Event"];
  if (Event && Event.prototype) {
    api.patchMethod(Event.prototype, "stopImmediatePropagation", (delegate) => function(self2, args) {
      self2[IMMEDIATE_PROPAGATION_SYMBOL] = true;
      delegate && delegate.apply(self2, args);
    });
  }
}
function patchQueueMicrotask(global4, api) {
  api.patchMethod(global4, "queueMicrotask", (delegate) => {
    return function(self2, args) {
      Zone.current.scheduleMicroTask("queueMicrotask", args[0]);
    };
  });
}
var taskSymbol = zoneSymbol("zoneTask");
function patchTimer(window2, setName, cancelName, nameSuffix) {
  let setNative = null;
  let clearNative = null;
  setName += nameSuffix;
  cancelName += nameSuffix;
  const tasksByHandleId = {};
  function scheduleTask(task) {
    const data = task.data;
    data.args[0] = function() {
      return task.invoke.apply(this, arguments);
    };
    const handleOrId = setNative.apply(window2, data.args);
    if (isNumber(handleOrId)) {
      data.handleId = handleOrId;
    } else {
      data.handle = handleOrId;
      data.isRefreshable = isFunction3(handleOrId.refresh);
    }
    return task;
  }
  function clearTask(task) {
    const { handle, handleId } = task.data;
    return clearNative.call(window2, handle ?? handleId);
  }
  setNative = patchMethod(window2, setName, (delegate) => function(self2, args) {
    if (isFunction3(args[0])) {
      const options = {
        isRefreshable: false,
        isPeriodic: nameSuffix === "Interval",
        delay: nameSuffix === "Timeout" || nameSuffix === "Interval" ? args[1] || 0 : void 0,
        args
      };
      const callback = args[0];
      args[0] = function timer() {
        try {
          return callback.apply(this, arguments);
        } finally {
          const { handle: handle2, handleId: handleId2, isPeriodic: isPeriodic2, isRefreshable: isRefreshable2 } = options;
          if (!isPeriodic2 && !isRefreshable2) {
            if (handleId2) {
              delete tasksByHandleId[handleId2];
            } else if (handle2) {
              handle2[taskSymbol] = null;
            }
          }
        }
      };
      const task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
      if (!task) {
        return task;
      }
      const { handleId, handle, isRefreshable, isPeriodic } = task.data;
      if (handleId) {
        tasksByHandleId[handleId] = task;
      } else if (handle) {
        handle[taskSymbol] = task;
        if (isRefreshable && !isPeriodic) {
          const originalRefresh = handle.refresh;
          handle.refresh = function() {
            const { zone, state } = task;
            if (state === "notScheduled") {
              task._state = "scheduled";
              zone._updateTaskCount(task, 1);
            } else if (state === "running") {
              task._state = "scheduling";
            }
            return originalRefresh.call(this);
          };
        }
      }
      return handle ?? handleId ?? task;
    } else {
      return delegate.apply(window2, args);
    }
  });
  clearNative = patchMethod(window2, cancelName, (delegate) => function(self2, args) {
    const id = args[0];
    let task;
    if (isNumber(id)) {
      task = tasksByHandleId[id];
      delete tasksByHandleId[id];
    } else {
      task = id?.[taskSymbol];
      if (task) {
        id[taskSymbol] = null;
      } else {
        task = id;
      }
    }
    if (task?.type) {
      if (task.cancelFn) {
        task.zone.cancelTask(task);
      }
    } else {
      delegate.apply(window2, args);
    }
  });
}
function patchCustomElements(_global3, api) {
  const { isBrowser: isBrowser2, isMix: isMix2 } = api.getGlobalObjects();
  if (!isBrowser2 && !isMix2 || !_global3["customElements"] || !("customElements" in _global3)) {
    return;
  }
  const callbacks = [
    "connectedCallback",
    "disconnectedCallback",
    "adoptedCallback",
    "attributeChangedCallback",
    "formAssociatedCallback",
    "formDisabledCallback",
    "formResetCallback",
    "formStateRestoreCallback"
  ];
  api.patchCallbacks(api, _global3.customElements, "customElements", "define", callbacks);
}
function eventTargetPatch(_global3, api) {
  if (Zone[api.symbol("patchEventTarget")]) {
    return;
  }
  const { eventNames, zoneSymbolEventNames: zoneSymbolEventNames2, TRUE_STR: TRUE_STR2, FALSE_STR: FALSE_STR2, ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX2 } = api.getGlobalObjects();
  for (let i = 0; i < eventNames.length; i++) {
    const eventName = eventNames[i];
    const falseEventName = eventName + FALSE_STR2;
    const trueEventName = eventName + TRUE_STR2;
    const symbol = ZONE_SYMBOL_PREFIX2 + falseEventName;
    const symbolCapture = ZONE_SYMBOL_PREFIX2 + trueEventName;
    zoneSymbolEventNames2[eventName] = {};
    zoneSymbolEventNames2[eventName][FALSE_STR2] = symbol;
    zoneSymbolEventNames2[eventName][TRUE_STR2] = symbolCapture;
  }
  const EVENT_TARGET = _global3["EventTarget"];
  if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
    return;
  }
  api.patchEventTarget(_global3, api, [EVENT_TARGET && EVENT_TARGET.prototype]);
  return true;
}
function patchEvent(global4, api) {
  api.patchEventPrototype(global4, api);
}
function filterProperties(target, onProperties, ignoreProperties) {
  if (!ignoreProperties || ignoreProperties.length === 0) {
    return onProperties;
  }
  const tip = ignoreProperties.filter((ip) => ip.target === target);
  if (tip.length === 0) {
    return onProperties;
  }
  const targetIgnoreProperties = tip[0].ignoreProperties;
  return onProperties.filter((op) => targetIgnoreProperties.indexOf(op) === -1);
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype2) {
  if (!target) {
    return;
  }
  const filteredProperties = filterProperties(target, onProperties, ignoreProperties);
  patchOnProperties(target, filteredProperties, prototype2);
}
function getOnEventNames(target) {
  return Object.getOwnPropertyNames(target).filter((name) => name.startsWith("on") && name.length > 2).map((name) => name.substring(2));
}
function propertyDescriptorPatch(api, _global3) {
  if (isNode2 && !isMix) {
    return;
  }
  if (Zone[api.symbol("patchEvents")]) {
    return;
  }
  const ignoreProperties = _global3["__Zone_ignore_on_properties"];
  let patchTargets = [];
  if (isBrowser) {
    const internalWindow2 = window;
    patchTargets = patchTargets.concat([
      "Document",
      "SVGElement",
      "Element",
      "HTMLElement",
      "HTMLBodyElement",
      "HTMLMediaElement",
      "HTMLFrameSetElement",
      "HTMLFrameElement",
      "HTMLIFrameElement",
      "HTMLMarqueeElement",
      "Worker"
    ]);
    const ignoreErrorProperties = [];
    patchFilteredProperties(internalWindow2, getOnEventNames(internalWindow2), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow2));
  }
  patchTargets = patchTargets.concat([
    "XMLHttpRequest",
    "XMLHttpRequestEventTarget",
    "IDBIndex",
    "IDBRequest",
    "IDBOpenDBRequest",
    "IDBDatabase",
    "IDBTransaction",
    "IDBCursor",
    "WebSocket"
  ]);
  for (let i = 0; i < patchTargets.length; i++) {
    const target = _global3[patchTargets[i]];
    target?.prototype && patchFilteredProperties(target.prototype, getOnEventNames(target.prototype), ignoreProperties);
  }
}
function patchBrowser(Zone2) {
  Zone2.__load_patch("legacy", (global4) => {
    const legacyPatch = global4[Zone2.__symbol__("legacyPatch")];
    if (legacyPatch) {
      legacyPatch();
    }
  });
  Zone2.__load_patch("timers", (global4) => {
    const set = "set";
    const clear = "clear";
    patchTimer(global4, set, clear, "Timeout");
    patchTimer(global4, set, clear, "Interval");
    patchTimer(global4, set, clear, "Immediate");
  });
  Zone2.__load_patch("requestAnimationFrame", (global4) => {
    patchTimer(global4, "request", "cancel", "AnimationFrame");
    patchTimer(global4, "mozRequest", "mozCancel", "AnimationFrame");
    patchTimer(global4, "webkitRequest", "webkitCancel", "AnimationFrame");
  });
  Zone2.__load_patch("blocking", (global4, Zone3) => {
    const blockingMethods = ["alert", "prompt", "confirm"];
    for (let i = 0; i < blockingMethods.length; i++) {
      const name = blockingMethods[i];
      patchMethod(global4, name, (delegate, symbol, name2) => {
        return function(s, args) {
          return Zone3.current.run(delegate, global4, args, name2);
        };
      });
    }
  });
  Zone2.__load_patch("EventTarget", (global4, Zone3, api) => {
    patchEvent(global4, api);
    eventTargetPatch(global4, api);
    const XMLHttpRequestEventTarget = global4["XMLHttpRequestEventTarget"];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
      api.patchEventTarget(global4, api, [XMLHttpRequestEventTarget.prototype]);
    }
  });
  Zone2.__load_patch("MutationObserver", (global4, Zone3, api) => {
    patchClass("MutationObserver");
    patchClass("WebKitMutationObserver");
  });
  Zone2.__load_patch("IntersectionObserver", (global4, Zone3, api) => {
    patchClass("IntersectionObserver");
  });
  Zone2.__load_patch("FileReader", (global4, Zone3, api) => {
    patchClass("FileReader");
  });
  Zone2.__load_patch("on_property", (global4, Zone3, api) => {
    propertyDescriptorPatch(api, global4);
  });
  Zone2.__load_patch("customElements", (global4, Zone3, api) => {
    patchCustomElements(global4, api);
  });
  Zone2.__load_patch("XHR", (global4, Zone3) => {
    patchXHR(global4);
    const XHR_TASK = zoneSymbol("xhrTask");
    const XHR_SYNC = zoneSymbol("xhrSync");
    const XHR_LISTENER = zoneSymbol("xhrListener");
    const XHR_SCHEDULED = zoneSymbol("xhrScheduled");
    const XHR_URL = zoneSymbol("xhrURL");
    const XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol("xhrErrorBeforeScheduled");
    function patchXHR(window2) {
      const XMLHttpRequest2 = window2["XMLHttpRequest"];
      if (!XMLHttpRequest2) {
        return;
      }
      const XMLHttpRequestPrototype = XMLHttpRequest2.prototype;
      function findPendingTask(target) {
        return target[XHR_TASK];
      }
      let oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
      let oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
      if (!oriAddListener) {
        const XMLHttpRequestEventTarget = window2["XMLHttpRequestEventTarget"];
        if (XMLHttpRequestEventTarget) {
          const XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
          oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        }
      }
      const READY_STATE_CHANGE = "readystatechange";
      const SCHEDULED = "scheduled";
      function scheduleTask(task) {
        const data = task.data;
        const target = data.target;
        target[XHR_SCHEDULED] = false;
        target[XHR_ERROR_BEFORE_SCHEDULED] = false;
        const listener = target[XHR_LISTENER];
        if (!oriAddListener) {
          oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        }
        if (listener) {
          oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
        }
        const newListener = target[XHR_LISTENER] = () => {
          if (target.readyState === target.DONE) {
            if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
              const loadTasks = target[Zone3.__symbol__("loadfalse")];
              if (target.status !== 0 && loadTasks && loadTasks.length > 0) {
                const oriInvoke = task.invoke;
                task.invoke = function() {
                  const loadTasks2 = target[Zone3.__symbol__("loadfalse")];
                  for (let i = 0; i < loadTasks2.length; i++) {
                    if (loadTasks2[i] === task) {
                      loadTasks2.splice(i, 1);
                    }
                  }
                  if (!data.aborted && task.state === SCHEDULED) {
                    oriInvoke.call(task);
                  }
                };
                loadTasks.push(task);
              } else {
                task.invoke();
              }
            } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
              target[XHR_ERROR_BEFORE_SCHEDULED] = true;
            }
          }
        };
        oriAddListener.call(target, READY_STATE_CHANGE, newListener);
        const storedTask = target[XHR_TASK];
        if (!storedTask) {
          target[XHR_TASK] = task;
        }
        sendNative.apply(target, data.args);
        target[XHR_SCHEDULED] = true;
        return task;
      }
      function placeholderCallback() {
      }
      function clearTask(task) {
        const data = task.data;
        data.aborted = true;
        return abortNative.apply(data.target, data.args);
      }
      const openNative = patchMethod(XMLHttpRequestPrototype, "open", () => function(self2, args) {
        self2[XHR_SYNC] = args[2] == false;
        self2[XHR_URL] = args[1];
        return openNative.apply(self2, args);
      });
      const XMLHTTPREQUEST_SOURCE = "XMLHttpRequest.send";
      const fetchTaskAborting = zoneSymbol("fetchTaskAborting");
      const fetchTaskScheduling = zoneSymbol("fetchTaskScheduling");
      const sendNative = patchMethod(XMLHttpRequestPrototype, "send", () => function(self2, args) {
        if (Zone3.current[fetchTaskScheduling] === true) {
          return sendNative.apply(self2, args);
        }
        if (self2[XHR_SYNC]) {
          return sendNative.apply(self2, args);
        } else {
          const options = {
            target: self2,
            url: self2[XHR_URL],
            isPeriodic: false,
            args,
            aborted: false
          };
          const task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
          if (self2 && self2[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted && task.state === SCHEDULED) {
            task.invoke();
          }
        }
      });
      const abortNative = patchMethod(XMLHttpRequestPrototype, "abort", () => function(self2, args) {
        const task = findPendingTask(self2);
        if (task && typeof task.type == "string") {
          if (task.cancelFn == null || task.data && task.data.aborted) {
            return;
          }
          task.zone.cancelTask(task);
        } else if (Zone3.current[fetchTaskAborting] === true) {
          return abortNative.apply(self2, args);
        }
      });
    }
  });
  Zone2.__load_patch("geolocation", (global4) => {
    if (global4["navigator"] && global4["navigator"].geolocation) {
      patchPrototype(global4["navigator"].geolocation, ["getCurrentPosition", "watchPosition"]);
    }
  });
  Zone2.__load_patch("PromiseRejectionEvent", (global4, Zone3) => {
    function findPromiseRejectionHandler(evtName) {
      return function(e) {
        const eventTasks = findEventTasks(global4, evtName);
        eventTasks.forEach((eventTask) => {
          const PromiseRejectionEvent = global4["PromiseRejectionEvent"];
          if (PromiseRejectionEvent) {
            const evt = new PromiseRejectionEvent(evtName, {
              promise: e.promise,
              reason: e.rejection
            });
            eventTask.invoke(evt);
          }
        });
      };
    }
    if (global4["PromiseRejectionEvent"]) {
      Zone3[zoneSymbol("unhandledPromiseRejectionHandler")] = findPromiseRejectionHandler("unhandledrejection");
      Zone3[zoneSymbol("rejectionHandledHandler")] = findPromiseRejectionHandler("rejectionhandled");
    }
  });
  Zone2.__load_patch("queueMicrotask", (global4, Zone3, api) => {
    patchQueueMicrotask(global4, api);
  });
}
function patchPromise(Zone2) {
  Zone2.__load_patch("ZoneAwarePromise", (global4, Zone3, api) => {
    const ObjectGetOwnPropertyDescriptor2 = Object.getOwnPropertyDescriptor;
    const ObjectDefineProperty2 = Object.defineProperty;
    function readableObjectToString(obj) {
      if (obj && obj.toString === Object.prototype.toString) {
        const className = obj.constructor && obj.constructor.name;
        return (className ? className : "") + ": " + JSON.stringify(obj);
      }
      return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    const __symbol__3 = api.symbol;
    const _uncaughtPromiseErrors = [];
    const isDisableWrappingUncaughtPromiseRejection = global4[__symbol__3("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")] !== false;
    const symbolPromise = __symbol__3("Promise");
    const symbolThen = __symbol__3("then");
    const creationTrace = "__creationTrace__";
    api.onUnhandledError = (e) => {
      if (api.showUncaughtError()) {
        const rejection = e && e.rejection;
        if (rejection) {
          console.error("Unhandled Promise rejection:", rejection instanceof Error ? rejection.message : rejection, "; Zone:", e.zone.name, "; Task:", e.task && e.task.source, "; Value:", rejection, rejection instanceof Error ? rejection.stack : void 0);
        } else {
          console.error(e);
        }
      }
    };
    api.microtaskDrainDone = () => {
      while (_uncaughtPromiseErrors.length) {
        const uncaughtPromiseError = _uncaughtPromiseErrors.shift();
        try {
          uncaughtPromiseError.zone.runGuarded(() => {
            if (uncaughtPromiseError.throwOriginal) {
              throw uncaughtPromiseError.rejection;
            }
            throw uncaughtPromiseError;
          });
        } catch (error) {
          handleUnhandledRejection(error);
        }
      }
    };
    const UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__3("unhandledPromiseRejectionHandler");
    function handleUnhandledRejection(e) {
      api.onUnhandledError(e);
      try {
        const handler = Zone3[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
        if (typeof handler === "function") {
          handler.call(this, e);
        }
      } catch (err) {
      }
    }
    function isThenable(value) {
      return value && typeof value.then === "function";
    }
    function forwardResolution(value) {
      return value;
    }
    function forwardRejection(rejection) {
      return ZoneAwarePromise.reject(rejection);
    }
    const symbolState = __symbol__3("state");
    const symbolValue = __symbol__3("value");
    const symbolFinally = __symbol__3("finally");
    const symbolParentPromiseValue = __symbol__3("parentPromiseValue");
    const symbolParentPromiseState = __symbol__3("parentPromiseState");
    const source = "Promise.then";
    const UNRESOLVED = null;
    const RESOLVED = true;
    const REJECTED = false;
    const REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
      return (v) => {
        try {
          resolvePromise(promise, state, v);
        } catch (err) {
          resolvePromise(promise, false, err);
        }
      };
    }
    const once = function() {
      let wasCalled = false;
      return function wrapper(wrappedFunction) {
        return function() {
          if (wasCalled) {
            return;
          }
          wasCalled = true;
          wrappedFunction.apply(null, arguments);
        };
      };
    };
    const TYPE_ERROR = "Promise resolved with itself";
    const CURRENT_TASK_TRACE_SYMBOL = __symbol__3("currentTaskTrace");
    function resolvePromise(promise, state, value) {
      const onceWrapper = once();
      if (promise === value) {
        throw new TypeError(TYPE_ERROR);
      }
      if (promise[symbolState] === UNRESOLVED) {
        let then = null;
        try {
          if (typeof value === "object" || typeof value === "function") {
            then = value && value.then;
          }
        } catch (err) {
          onceWrapper(() => {
            resolvePromise(promise, false, err);
          })();
          return promise;
        }
        if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
          clearRejectedNoCatch(value);
          resolvePromise(promise, value[symbolState], value[symbolValue]);
        } else if (state !== REJECTED && typeof then === "function") {
          try {
            then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
          } catch (err) {
            onceWrapper(() => {
              resolvePromise(promise, false, err);
            })();
          }
        } else {
          promise[symbolState] = state;
          const queue = promise[symbolValue];
          promise[symbolValue] = value;
          if (promise[symbolFinally] === symbolFinally) {
            if (state === RESOLVED) {
              promise[symbolState] = promise[symbolParentPromiseState];
              promise[symbolValue] = promise[symbolParentPromiseValue];
            }
          }
          if (state === REJECTED && value instanceof Error) {
            const trace = Zone3.currentTask && Zone3.currentTask.data && Zone3.currentTask.data[creationTrace];
            if (trace) {
              ObjectDefineProperty2(value, CURRENT_TASK_TRACE_SYMBOL, {
                configurable: true,
                enumerable: false,
                writable: true,
                value: trace
              });
            }
          }
          for (let i = 0; i < queue.length; ) {
            scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
          }
          if (queue.length == 0 && state == REJECTED) {
            promise[symbolState] = REJECTED_NO_CATCH;
            let uncaughtPromiseError = value;
            try {
              throw new Error("Uncaught (in promise): " + readableObjectToString(value) + (value && value.stack ? "\n" + value.stack : ""));
            } catch (err) {
              uncaughtPromiseError = err;
            }
            if (isDisableWrappingUncaughtPromiseRejection) {
              uncaughtPromiseError.throwOriginal = true;
            }
            uncaughtPromiseError.rejection = value;
            uncaughtPromiseError.promise = promise;
            uncaughtPromiseError.zone = Zone3.current;
            uncaughtPromiseError.task = Zone3.currentTask;
            _uncaughtPromiseErrors.push(uncaughtPromiseError);
            api.scheduleMicroTask();
          }
        }
      }
      return promise;
    }
    const REJECTION_HANDLED_HANDLER = __symbol__3("rejectionHandledHandler");
    function clearRejectedNoCatch(promise) {
      if (promise[symbolState] === REJECTED_NO_CATCH) {
        try {
          const handler = Zone3[REJECTION_HANDLED_HANDLER];
          if (handler && typeof handler === "function") {
            handler.call(this, { rejection: promise[symbolValue], promise });
          }
        } catch (err) {
        }
        promise[symbolState] = REJECTED;
        for (let i = 0; i < _uncaughtPromiseErrors.length; i++) {
          if (promise === _uncaughtPromiseErrors[i].promise) {
            _uncaughtPromiseErrors.splice(i, 1);
          }
        }
      }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
      clearRejectedNoCatch(promise);
      const promiseState = promise[symbolState];
      const delegate = promiseState ? typeof onFulfilled === "function" ? onFulfilled : forwardResolution : typeof onRejected === "function" ? onRejected : forwardRejection;
      zone.scheduleMicroTask(source, () => {
        try {
          const parentPromiseValue = promise[symbolValue];
          const isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];
          if (isFinallyPromise) {
            chainPromise[symbolParentPromiseValue] = parentPromiseValue;
            chainPromise[symbolParentPromiseState] = promiseState;
          }
          const value = zone.run(delegate, void 0, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
          resolvePromise(chainPromise, true, value);
        } catch (error) {
          resolvePromise(chainPromise, false, error);
        }
      }, chainPromise);
    }
    const ZONE_AWARE_PROMISE_TO_STRING = "function ZoneAwarePromise() { [native code] }";
    const noop2 = function() {
    };
    const AggregateError = global4.AggregateError;
    class ZoneAwarePromise {
      static toString() {
        return ZONE_AWARE_PROMISE_TO_STRING;
      }
      static resolve(value) {
        if (value instanceof ZoneAwarePromise) {
          return value;
        }
        return resolvePromise(new this(null), RESOLVED, value);
      }
      static reject(error) {
        return resolvePromise(new this(null), REJECTED, error);
      }
      static withResolvers() {
        const result2 = {};
        result2.promise = new ZoneAwarePromise((res, rej) => {
          result2.resolve = res;
          result2.reject = rej;
        });
        return result2;
      }
      static any(values) {
        if (!values || typeof values[Symbol.iterator] !== "function") {
          return Promise.reject(new AggregateError([], "All promises were rejected"));
        }
        const promises = [];
        let count = 0;
        try {
          for (let v of values) {
            count++;
            promises.push(ZoneAwarePromise.resolve(v));
          }
        } catch (err) {
          return Promise.reject(new AggregateError([], "All promises were rejected"));
        }
        if (count === 0) {
          return Promise.reject(new AggregateError([], "All promises were rejected"));
        }
        let finished = false;
        const errors = [];
        return new ZoneAwarePromise((resolve, reject) => {
          for (let i = 0; i < promises.length; i++) {
            promises[i].then((v) => {
              if (finished) {
                return;
              }
              finished = true;
              resolve(v);
            }, (err) => {
              errors.push(err);
              count--;
              if (count === 0) {
                finished = true;
                reject(new AggregateError(errors, "All promises were rejected"));
              }
            });
          }
        });
      }
      static race(values) {
        let resolve;
        let reject;
        let promise = new this((res, rej) => {
          resolve = res;
          reject = rej;
        });
        function onResolve(value) {
          resolve(value);
        }
        function onReject(error) {
          reject(error);
        }
        for (let value of values) {
          if (!isThenable(value)) {
            value = this.resolve(value);
          }
          value.then(onResolve, onReject);
        }
        return promise;
      }
      static all(values) {
        return ZoneAwarePromise.allWithCallback(values);
      }
      static allSettled(values) {
        const P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
        return P.allWithCallback(values, {
          thenCallback: (value) => ({ status: "fulfilled", value }),
          errorCallback: (err) => ({ status: "rejected", reason: err })
        });
      }
      static allWithCallback(values, callback) {
        let resolve;
        let reject;
        let promise = new this((res, rej) => {
          resolve = res;
          reject = rej;
        });
        let unresolvedCount = 2;
        let valueIndex = 0;
        const resolvedValues = [];
        for (let value of values) {
          if (!isThenable(value)) {
            value = this.resolve(value);
          }
          const curValueIndex = valueIndex;
          try {
            value.then((value2) => {
              resolvedValues[curValueIndex] = callback ? callback.thenCallback(value2) : value2;
              unresolvedCount--;
              if (unresolvedCount === 0) {
                resolve(resolvedValues);
              }
            }, (err) => {
              if (!callback) {
                reject(err);
              } else {
                resolvedValues[curValueIndex] = callback.errorCallback(err);
                unresolvedCount--;
                if (unresolvedCount === 0) {
                  resolve(resolvedValues);
                }
              }
            });
          } catch (thenErr) {
            reject(thenErr);
          }
          unresolvedCount++;
          valueIndex++;
        }
        unresolvedCount -= 2;
        if (unresolvedCount === 0) {
          resolve(resolvedValues);
        }
        return promise;
      }
      constructor(executor) {
        const promise = this;
        if (!(promise instanceof ZoneAwarePromise)) {
          throw new Error("Must be an instanceof Promise.");
        }
        promise[symbolState] = UNRESOLVED;
        promise[symbolValue] = [];
        try {
          const onceWrapper = once();
          executor && executor(onceWrapper(makeResolver(promise, RESOLVED)), onceWrapper(makeResolver(promise, REJECTED)));
        } catch (error) {
          resolvePromise(promise, false, error);
        }
      }
      get [Symbol.toStringTag]() {
        return "Promise";
      }
      get [Symbol.species]() {
        return ZoneAwarePromise;
      }
      then(onFulfilled, onRejected) {
        let C = this.constructor?.[Symbol.species];
        if (!C || typeof C !== "function") {
          C = this.constructor || ZoneAwarePromise;
        }
        const chainPromise = new C(noop2);
        const zone = Zone3.current;
        if (this[symbolState] == UNRESOLVED) {
          this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
        } else {
          scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
        }
        return chainPromise;
      }
      catch(onRejected) {
        return this.then(null, onRejected);
      }
      finally(onFinally) {
        let C = this.constructor?.[Symbol.species];
        if (!C || typeof C !== "function") {
          C = ZoneAwarePromise;
        }
        const chainPromise = new C(noop2);
        chainPromise[symbolFinally] = symbolFinally;
        const zone = Zone3.current;
        if (this[symbolState] == UNRESOLVED) {
          this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
        } else {
          scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
        }
        return chainPromise;
      }
    }
    ZoneAwarePromise["resolve"] = ZoneAwarePromise.resolve;
    ZoneAwarePromise["reject"] = ZoneAwarePromise.reject;
    ZoneAwarePromise["race"] = ZoneAwarePromise.race;
    ZoneAwarePromise["all"] = ZoneAwarePromise.all;
    const NativePromise = global4[symbolPromise] = global4["Promise"];
    global4["Promise"] = ZoneAwarePromise;
    const symbolThenPatched = __symbol__3("thenPatched");
    function patchThen(Ctor) {
      const proto = Ctor.prototype;
      const prop = ObjectGetOwnPropertyDescriptor2(proto, "then");
      if (prop && (prop.writable === false || !prop.configurable)) {
        return;
      }
      const originalThen = proto.then;
      proto[symbolThen] = originalThen;
      Ctor.prototype.then = function(onResolve, onReject) {
        const wrapped = new ZoneAwarePromise((resolve, reject) => {
          originalThen.call(this, resolve, reject);
        });
        return wrapped.then(onResolve, onReject);
      };
      Ctor[symbolThenPatched] = true;
    }
    api.patchThen = patchThen;
    function zoneify(fn) {
      return function(self2, args) {
        let resultPromise = fn.apply(self2, args);
        if (resultPromise instanceof ZoneAwarePromise) {
          return resultPromise;
        }
        let ctor = resultPromise.constructor;
        if (!ctor[symbolThenPatched]) {
          patchThen(ctor);
        }
        return resultPromise;
      };
    }
    if (NativePromise) {
      patchThen(NativePromise);
      patchMethod(global4, "fetch", (delegate) => zoneify(delegate));
    }
    Promise[Zone3.__symbol__("uncaughtPromiseErrors")] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
  });
}
function patchToString(Zone2) {
  Zone2.__load_patch("toString", (global4) => {
    const originalFunctionToString = Function.prototype.toString;
    const ORIGINAL_DELEGATE_SYMBOL = zoneSymbol("OriginalDelegate");
    const PROMISE_SYMBOL = zoneSymbol("Promise");
    const ERROR_SYMBOL = zoneSymbol("Error");
    const newFunctionToString = function toString3() {
      if (typeof this === "function") {
        const originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
        if (originalDelegate) {
          if (typeof originalDelegate === "function") {
            return originalFunctionToString.call(originalDelegate);
          } else {
            return Object.prototype.toString.call(originalDelegate);
          }
        }
        if (this === Promise) {
          const nativePromise = global4[PROMISE_SYMBOL];
          if (nativePromise) {
            return originalFunctionToString.call(nativePromise);
          }
        }
        if (this === Error) {
          const nativeError = global4[ERROR_SYMBOL];
          if (nativeError) {
            return originalFunctionToString.call(nativeError);
          }
        }
      }
      return originalFunctionToString.call(this);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    const originalObjectToString = Object.prototype.toString;
    const PROMISE_OBJECT_TO_STRING = "[object Promise]";
    Object.prototype.toString = function() {
      if (typeof Promise === "function" && this instanceof Promise) {
        return PROMISE_OBJECT_TO_STRING;
      }
      return originalObjectToString.call(this);
    };
  });
}
function patchCallbacks(api, target, targetName, method, callbacks) {
  const symbol = Zone.__symbol__(method);
  if (target[symbol]) {
    return;
  }
  const nativeDelegate = target[symbol] = target[method];
  target[method] = function(name, opts, options) {
    if (opts && opts.prototype) {
      callbacks.forEach(function(callback) {
        const source = `${targetName}.${method}::` + callback;
        const prototype2 = opts.prototype;
        try {
          if (prototype2.hasOwnProperty(callback)) {
            const descriptor = api.ObjectGetOwnPropertyDescriptor(prototype2, callback);
            if (descriptor && descriptor.value) {
              descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
              api._redefineProperty(opts.prototype, callback, descriptor);
            } else if (prototype2[callback]) {
              prototype2[callback] = api.wrapWithCurrentZone(prototype2[callback], source);
            }
          } else if (prototype2[callback]) {
            prototype2[callback] = api.wrapWithCurrentZone(prototype2[callback], source);
          }
        } catch {
        }
      });
    }
    return nativeDelegate.call(target, name, opts, options);
  };
  api.attachOriginToPatched(target[method], nativeDelegate);
}
function patchUtil(Zone2) {
  Zone2.__load_patch("util", (global4, Zone3, api) => {
    const eventNames = getOnEventNames(global4);
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
    api.patchMacroTask = patchMacroTask;
    const SYMBOL_BLACK_LISTED_EVENTS = Zone3.__symbol__("BLACK_LISTED_EVENTS");
    const SYMBOL_UNPATCHED_EVENTS = Zone3.__symbol__("UNPATCHED_EVENTS");
    if (global4[SYMBOL_UNPATCHED_EVENTS]) {
      global4[SYMBOL_BLACK_LISTED_EVENTS] = global4[SYMBOL_UNPATCHED_EVENTS];
    }
    if (global4[SYMBOL_BLACK_LISTED_EVENTS]) {
      Zone3[SYMBOL_BLACK_LISTED_EVENTS] = Zone3[SYMBOL_UNPATCHED_EVENTS] = global4[SYMBOL_BLACK_LISTED_EVENTS];
    }
    api.patchEventPrototype = patchEventPrototype;
    api.patchEventTarget = patchEventTarget;
    api.isIEOrEdge = isIEOrEdge;
    api.ObjectDefineProperty = ObjectDefineProperty;
    api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
    api.ObjectCreate = ObjectCreate;
    api.ArraySlice = ArraySlice;
    api.patchClass = patchClass;
    api.wrapWithCurrentZone = wrapWithCurrentZone;
    api.filterProperties = filterProperties;
    api.attachOriginToPatched = attachOriginToPatched;
    api._redefineProperty = Object.defineProperty;
    api.patchCallbacks = patchCallbacks;
    api.getGlobalObjects = () => ({
      globalSources,
      zoneSymbolEventNames,
      eventNames,
      isBrowser,
      isMix,
      isNode: isNode2,
      TRUE_STR,
      FALSE_STR,
      ZONE_SYMBOL_PREFIX,
      ADD_EVENT_LISTENER_STR,
      REMOVE_EVENT_LISTENER_STR
    });
  });
}
function patchCommon(Zone2) {
  patchPromise(Zone2);
  patchToString(Zone2);
  patchUtil(Zone2);
}
var Zone$1 = loadZone();
patchCommon(Zone$1);
patchBrowser(Zone$1);

// node_modules/zone.js/fesm2015/zone-testing.js
function patchJasmine(Zone2) {
  Zone2.__load_patch("jasmine", (global4, Zone3, api) => {
    const __extends2 = function(d, b) {
      for (const p in b)
        if (b.hasOwnProperty(p))
          d[p] = b[p];
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    if (!Zone3)
      throw new Error("Missing: zone.js");
    if (typeof jest !== "undefined") {
      return;
    }
    if (typeof jasmine == "undefined" || jasmine["__zone_patch__"]) {
      return;
    }
    jasmine["__zone_patch__"] = true;
    const SyncTestZoneSpec = Zone3["SyncTestZoneSpec"];
    const ProxyZoneSpec2 = Zone3["ProxyZoneSpec"];
    if (!SyncTestZoneSpec)
      throw new Error("Missing: SyncTestZoneSpec");
    if (!ProxyZoneSpec2)
      throw new Error("Missing: ProxyZoneSpec");
    const ambientZone = Zone3.current;
    const symbol = Zone3.__symbol__;
    const disablePatchingJasmineClock = global4[symbol("fakeAsyncDisablePatchingClock")] === true;
    const enableAutoFakeAsyncWhenClockPatched = !disablePatchingJasmineClock && (global4[symbol("fakeAsyncPatchLock")] === true || global4[symbol("fakeAsyncAutoFakeAsyncWhenClockPatched")] === true);
    const ignoreUnhandledRejection = global4[symbol("ignoreUnhandledRejection")] === true;
    if (!ignoreUnhandledRejection) {
      const globalErrors = jasmine.GlobalErrors;
      if (globalErrors && !jasmine[symbol("GlobalErrors")]) {
        jasmine[symbol("GlobalErrors")] = globalErrors;
        jasmine.GlobalErrors = function() {
          const instance = new globalErrors();
          const originalInstall = instance.install;
          if (originalInstall && !instance[symbol("install")]) {
            instance[symbol("install")] = originalInstall;
            instance.install = function() {
              const isNode3 = typeof process !== "undefined" && !!process.on;
              const originalHandlers = isNode3 ? process.listeners("unhandledRejection") : global4.eventListeners("unhandledrejection");
              const result2 = originalInstall.apply(this, arguments);
              isNode3 ? process.removeAllListeners("unhandledRejection") : global4.removeAllListeners("unhandledrejection");
              if (originalHandlers) {
                originalHandlers.forEach((handler) => {
                  if (isNode3) {
                    process.on("unhandledRejection", handler);
                  } else {
                    global4.addEventListener("unhandledrejection", handler);
                  }
                });
              }
              return result2;
            };
          }
          return instance;
        };
      }
    }
    const jasmineEnv = jasmine.getEnv();
    ["describe", "xdescribe", "fdescribe"].forEach((methodName) => {
      let originalJasmineFn = jasmineEnv[methodName];
      jasmineEnv[methodName] = function(description, specDefinitions) {
        return originalJasmineFn.call(this, description, wrapDescribeInZone(description, specDefinitions));
      };
    });
    ["it", "xit", "fit"].forEach((methodName) => {
      let originalJasmineFn = jasmineEnv[methodName];
      jasmineEnv[symbol(methodName)] = originalJasmineFn;
      jasmineEnv[methodName] = function(description, specDefinitions, timeout2) {
        arguments[1] = wrapTestInZone(specDefinitions);
        return originalJasmineFn.apply(this, arguments);
      };
    });
    ["beforeEach", "afterEach", "beforeAll", "afterAll"].forEach((methodName) => {
      let originalJasmineFn = jasmineEnv[methodName];
      jasmineEnv[symbol(methodName)] = originalJasmineFn;
      jasmineEnv[methodName] = function(specDefinitions, timeout2) {
        arguments[0] = wrapTestInZone(specDefinitions);
        return originalJasmineFn.apply(this, arguments);
      };
    });
    if (!disablePatchingJasmineClock) {
      const originalClockFn = jasmine[symbol("clock")] = jasmine["clock"];
      jasmine["clock"] = function() {
        const clock = originalClockFn.apply(this, arguments);
        if (!clock[symbol("patched")]) {
          clock[symbol("patched")] = symbol("patched");
          const originalTick = clock[symbol("tick")] = clock.tick;
          clock.tick = function() {
            const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
            if (fakeAsyncZoneSpec) {
              return fakeAsyncZoneSpec.tick.apply(fakeAsyncZoneSpec, arguments);
            }
            return originalTick.apply(this, arguments);
          };
          const originalMockDate = clock[symbol("mockDate")] = clock.mockDate;
          clock.mockDate = function() {
            const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
            if (fakeAsyncZoneSpec) {
              const dateTime = arguments.length > 0 ? arguments[0] : /* @__PURE__ */ new Date();
              return fakeAsyncZoneSpec.setFakeBaseSystemTime.apply(fakeAsyncZoneSpec, dateTime && typeof dateTime.getTime === "function" ? [dateTime.getTime()] : arguments);
            }
            return originalMockDate.apply(this, arguments);
          };
          if (enableAutoFakeAsyncWhenClockPatched) {
            ["install", "uninstall"].forEach((methodName) => {
              const originalClockFn2 = clock[symbol(methodName)] = clock[methodName];
              clock[methodName] = function() {
                const FakeAsyncTestZoneSpec2 = Zone3["FakeAsyncTestZoneSpec"];
                if (FakeAsyncTestZoneSpec2) {
                  jasmine[symbol("clockInstalled")] = "install" === methodName;
                  return;
                }
                return originalClockFn2.apply(this, arguments);
              };
            });
          }
        }
        return clock;
      };
    }
    if (!jasmine[Zone3.__symbol__("createSpyObj")]) {
      const originalCreateSpyObj = jasmine.createSpyObj;
      jasmine[Zone3.__symbol__("createSpyObj")] = originalCreateSpyObj;
      jasmine.createSpyObj = function() {
        const args = Array.prototype.slice.call(arguments);
        const propertyNames = args.length >= 3 ? args[2] : null;
        let spyObj;
        if (propertyNames) {
          const defineProperty = Object.defineProperty;
          Object.defineProperty = function(obj, p, attributes) {
            return defineProperty.call(this, obj, p, __spreadProps(__spreadValues({}, attributes), {
              configurable: true,
              enumerable: true
            }));
          };
          try {
            spyObj = originalCreateSpyObj.apply(this, args);
          } finally {
            Object.defineProperty = defineProperty;
          }
        } else {
          spyObj = originalCreateSpyObj.apply(this, args);
        }
        return spyObj;
      };
    }
    function wrapDescribeInZone(description, describeBody) {
      return function() {
        const syncZone = ambientZone.fork(new SyncTestZoneSpec(`jasmine.describe#${description}`));
        return syncZone.run(describeBody, this, arguments);
      };
    }
    function runInTestZone(testBody, applyThis, queueRunner, done) {
      const isClockInstalled = !!jasmine[symbol("clockInstalled")];
      queueRunner.testProxyZoneSpec;
      const testProxyZone = queueRunner.testProxyZone;
      if (isClockInstalled && enableAutoFakeAsyncWhenClockPatched) {
        const fakeAsyncModule = Zone3[Zone3.__symbol__("fakeAsyncTest")];
        if (fakeAsyncModule && typeof fakeAsyncModule.fakeAsync === "function") {
          testBody = fakeAsyncModule.fakeAsync(testBody);
        }
      }
      if (done) {
        return testProxyZone.run(testBody, applyThis, [done]);
      } else {
        return testProxyZone.run(testBody, applyThis);
      }
    }
    function wrapTestInZone(testBody) {
      return testBody && (testBody.length ? function(done) {
        return runInTestZone(testBody, this, this.queueRunner, done);
      } : function() {
        return runInTestZone(testBody, this, this.queueRunner);
      });
    }
    const QueueRunner = jasmine.QueueRunner;
    jasmine.QueueRunner = (function(_super) {
      __extends2(ZoneQueueRunner, _super);
      function ZoneQueueRunner(attrs) {
        if (attrs.onComplete) {
          attrs.onComplete = /* @__PURE__ */ ((fn) => () => {
            this.testProxyZone = null;
            this.testProxyZoneSpec = null;
            ambientZone.scheduleMicroTask("jasmine.onComplete", fn);
          })(attrs.onComplete);
        }
        const nativeSetTimeout = global4[Zone3.__symbol__("setTimeout")];
        const nativeClearTimeout = global4[Zone3.__symbol__("clearTimeout")];
        if (nativeSetTimeout) {
          attrs.timeout = {
            setTimeout: nativeSetTimeout ? nativeSetTimeout : global4.setTimeout,
            clearTimeout: nativeClearTimeout ? nativeClearTimeout : global4.clearTimeout
          };
        }
        if (jasmine.UserContext) {
          if (!attrs.userContext) {
            attrs.userContext = new jasmine.UserContext();
          }
          attrs.userContext.queueRunner = this;
        } else {
          if (!attrs.userContext) {
            attrs.userContext = {};
          }
          attrs.userContext.queueRunner = this;
        }
        const onException = attrs.onException;
        attrs.onException = function(error) {
          if (error && error.message === "Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.") {
            const proxyZoneSpec = this && this.testProxyZoneSpec;
            if (proxyZoneSpec) {
              const pendingTasksInfo = proxyZoneSpec.getAndClearPendingTasksInfo();
              try {
                error.message += pendingTasksInfo;
              } catch (err) {
              }
            }
          }
          if (onException) {
            onException.call(this, error);
          }
        };
        _super.call(this, attrs);
      }
      ZoneQueueRunner.prototype.execute = function() {
        let zone = Zone3.current;
        let isChildOfAmbientZone = false;
        while (zone) {
          if (zone === ambientZone) {
            isChildOfAmbientZone = true;
            break;
          }
          zone = zone.parent;
        }
        if (!isChildOfAmbientZone)
          throw new Error("Unexpected Zone: " + Zone3.current.name);
        this.testProxyZoneSpec = new ProxyZoneSpec2();
        this.testProxyZone = ambientZone.fork(this.testProxyZoneSpec);
        if (!Zone3.currentTask) {
          Zone3.current.scheduleMicroTask("jasmine.execute().forceTask", () => QueueRunner.prototype.execute.call(this));
        } else {
          _super.prototype.execute.call(this);
        }
      };
      return ZoneQueueRunner;
    })(QueueRunner);
  });
}
function patchJest(Zone2) {
  Zone2.__load_patch("jest", (context, Zone3, api) => {
    if (typeof jest === "undefined" || jest["__zone_patch__"]) {
      return;
    }
    Zone3[api.symbol("ignoreConsoleErrorUncaughtError")] = true;
    jest["__zone_patch__"] = true;
    const ProxyZoneSpec2 = Zone3["ProxyZoneSpec"];
    const SyncTestZoneSpec = Zone3["SyncTestZoneSpec"];
    if (!ProxyZoneSpec2) {
      throw new Error("Missing ProxyZoneSpec");
    }
    const rootZone = Zone3.current;
    const syncZone = rootZone.fork(new SyncTestZoneSpec("jest.describe"));
    const proxyZoneSpec = new ProxyZoneSpec2();
    const proxyZone = rootZone.fork(proxyZoneSpec);
    function wrapDescribeFactoryInZone(originalJestFn) {
      return function(...tableArgs) {
        const originalDescribeFn = originalJestFn.apply(this, tableArgs);
        return function(...args) {
          args[1] = wrapDescribeInZone(args[1]);
          return originalDescribeFn.apply(this, args);
        };
      };
    }
    function wrapTestFactoryInZone(originalJestFn) {
      return function(...tableArgs) {
        return function(...args) {
          args[1] = wrapTestInZone(args[1]);
          return originalJestFn.apply(this, tableArgs).apply(this, args);
        };
      };
    }
    function wrapDescribeInZone(describeBody) {
      return function(...args) {
        return syncZone.run(describeBody, this, args);
      };
    }
    function wrapTestInZone(testBody, isTestFunc = false) {
      if (typeof testBody !== "function") {
        return testBody;
      }
      const wrappedFunc = function() {
        if (Zone3[api.symbol("useFakeTimersCalled")] === true && testBody && !testBody.isFakeAsync) {
          const fakeAsyncModule = Zone3[Zone3.__symbol__("fakeAsyncTest")];
          if (fakeAsyncModule && typeof fakeAsyncModule.fakeAsync === "function") {
            testBody = fakeAsyncModule.fakeAsync(testBody);
          }
        }
        proxyZoneSpec.isTestFunc = isTestFunc;
        return proxyZone.run(testBody, null, arguments);
      };
      Object.defineProperty(wrappedFunc, "length", {
        configurable: true,
        writable: true,
        enumerable: false
      });
      wrappedFunc.length = testBody.length;
      return wrappedFunc;
    }
    ["describe", "xdescribe", "fdescribe"].forEach((methodName) => {
      let originalJestFn = context[methodName];
      if (context[Zone3.__symbol__(methodName)]) {
        return;
      }
      context[Zone3.__symbol__(methodName)] = originalJestFn;
      context[methodName] = function(...args) {
        args[1] = wrapDescribeInZone(args[1]);
        return originalJestFn.apply(this, args);
      };
      context[methodName].each = wrapDescribeFactoryInZone(originalJestFn.each);
    });
    context.describe.only = context.fdescribe;
    context.describe.skip = context.xdescribe;
    ["it", "xit", "fit", "test", "xtest"].forEach((methodName) => {
      let originalJestFn = context[methodName];
      if (context[Zone3.__symbol__(methodName)]) {
        return;
      }
      context[Zone3.__symbol__(methodName)] = originalJestFn;
      context[methodName] = function(...args) {
        args[1] = wrapTestInZone(args[1], true);
        return originalJestFn.apply(this, args);
      };
      context[methodName].each = wrapTestFactoryInZone(originalJestFn.each);
      context[methodName].todo = originalJestFn.todo;
      context[methodName].failing = originalJestFn.failing;
    });
    context.it.only = context.fit;
    context.it.skip = context.xit;
    context.test.only = context.fit;
    context.test.skip = context.xit;
    ["beforeEach", "afterEach", "beforeAll", "afterAll"].forEach((methodName) => {
      let originalJestFn = context[methodName];
      if (context[Zone3.__symbol__(methodName)]) {
        return;
      }
      context[Zone3.__symbol__(methodName)] = originalJestFn;
      context[methodName] = function(...args) {
        args[0] = wrapTestInZone(args[0]);
        return originalJestFn.apply(this, args);
      };
    });
    Zone3.patchJestObject = function patchJestObject(Timer, isModern = false) {
      function isPatchingFakeTimer() {
        const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
        return !!fakeAsyncZoneSpec;
      }
      function isInTestFunc() {
        const proxyZoneSpec2 = Zone3.current.get("ProxyZoneSpec");
        return proxyZoneSpec2 && proxyZoneSpec2.isTestFunc;
      }
      if (Timer[api.symbol("fakeTimers")]) {
        return;
      }
      Timer[api.symbol("fakeTimers")] = true;
      api.patchMethod(Timer, "_checkFakeTimers", (delegate) => {
        return function(self2, args) {
          if (isPatchingFakeTimer()) {
            return true;
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
      api.patchMethod(Timer, "useFakeTimers", (delegate) => {
        return function(self2, args) {
          Zone3[api.symbol("useFakeTimersCalled")] = true;
          if (isModern || isInTestFunc()) {
            return delegate.apply(self2, args);
          }
          return self2;
        };
      });
      api.patchMethod(Timer, "useRealTimers", (delegate) => {
        return function(self2, args) {
          Zone3[api.symbol("useFakeTimersCalled")] = false;
          if (isModern || isInTestFunc()) {
            return delegate.apply(self2, args);
          }
          return self2;
        };
      });
      api.patchMethod(Timer, "setSystemTime", (delegate) => {
        return function(self2, args) {
          const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
          if (fakeAsyncZoneSpec && isPatchingFakeTimer()) {
            fakeAsyncZoneSpec.setFakeBaseSystemTime(args[0]);
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
      api.patchMethod(Timer, "getRealSystemTime", (delegate) => {
        return function(self2, args) {
          const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
          if (fakeAsyncZoneSpec && isPatchingFakeTimer()) {
            return fakeAsyncZoneSpec.getRealSystemTime();
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
      api.patchMethod(Timer, "runAllTicks", (delegate) => {
        return function(self2, args) {
          const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
          if (fakeAsyncZoneSpec) {
            fakeAsyncZoneSpec.flushMicrotasks();
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
      api.patchMethod(Timer, "runAllTimers", (delegate) => {
        return function(self2, args) {
          const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
          if (fakeAsyncZoneSpec) {
            fakeAsyncZoneSpec.flush(100, true);
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
      api.patchMethod(Timer, "advanceTimersByTime", (delegate) => {
        return function(self2, args) {
          const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
          if (fakeAsyncZoneSpec) {
            fakeAsyncZoneSpec.tick(args[0]);
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
      api.patchMethod(Timer, "runOnlyPendingTimers", (delegate) => {
        return function(self2, args) {
          const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
          if (fakeAsyncZoneSpec) {
            fakeAsyncZoneSpec.flushOnlyPendingTimers();
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
      api.patchMethod(Timer, "advanceTimersToNextTimer", (delegate) => {
        return function(self2, args) {
          const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
          if (fakeAsyncZoneSpec) {
            fakeAsyncZoneSpec.tickToNext(args[0]);
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
      api.patchMethod(Timer, "clearAllTimers", (delegate) => {
        return function(self2, args) {
          const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
          if (fakeAsyncZoneSpec) {
            fakeAsyncZoneSpec.removeAllTimers();
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
      api.patchMethod(Timer, "getTimerCount", (delegate) => {
        return function(self2, args) {
          const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
          if (fakeAsyncZoneSpec) {
            return fakeAsyncZoneSpec.getTimerCount();
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
    };
  });
}
function patchMocha(Zone2) {
  Zone2.__load_patch("mocha", (global4, Zone3) => {
    const Mocha = global4.Mocha;
    if (typeof Mocha === "undefined") {
      return;
    }
    if (typeof Zone3 === "undefined") {
      throw new Error("Missing Zone.js");
    }
    const ProxyZoneSpec2 = Zone3["ProxyZoneSpec"];
    const SyncTestZoneSpec = Zone3["SyncTestZoneSpec"];
    if (!ProxyZoneSpec2) {
      throw new Error("Missing ProxyZoneSpec");
    }
    if (Mocha["__zone_patch__"]) {
      throw new Error('"Mocha" has already been patched with "Zone".');
    }
    Mocha["__zone_patch__"] = true;
    const rootZone = Zone3.current;
    const syncZone = rootZone.fork(new SyncTestZoneSpec("Mocha.describe"));
    let testZone = null;
    const suiteZone = rootZone.fork(new ProxyZoneSpec2());
    const mochaOriginal = {
      after: global4.after,
      afterEach: global4.afterEach,
      before: global4.before,
      beforeEach: global4.beforeEach,
      describe: global4.describe,
      it: global4.it
    };
    function modifyArguments(args, syncTest, asyncTest) {
      for (let i = 0; i < args.length; i++) {
        let arg = args[i];
        if (typeof arg === "function") {
          args[i] = arg.length === 0 ? syncTest(arg) : asyncTest(arg);
          args[i].toString = function() {
            return arg.toString();
          };
        }
      }
      return args;
    }
    function wrapDescribeInZone(args) {
      const syncTest = function(fn) {
        return function() {
          return syncZone.run(fn, this, arguments);
        };
      };
      return modifyArguments(args, syncTest);
    }
    function wrapTestInZone(args) {
      const asyncTest = function(fn) {
        return function(done) {
          return testZone.run(fn, this, [done]);
        };
      };
      const syncTest = function(fn) {
        return function() {
          return testZone.run(fn, this);
        };
      };
      return modifyArguments(args, syncTest, asyncTest);
    }
    function wrapSuiteInZone(args) {
      const asyncTest = function(fn) {
        return function(done) {
          return suiteZone.run(fn, this, [done]);
        };
      };
      const syncTest = function(fn) {
        return function() {
          return suiteZone.run(fn, this);
        };
      };
      return modifyArguments(args, syncTest, asyncTest);
    }
    global4.describe = global4.suite = function() {
      return mochaOriginal.describe.apply(this, wrapDescribeInZone(arguments));
    };
    global4.xdescribe = global4.suite.skip = global4.describe.skip = function() {
      return mochaOriginal.describe.skip.apply(this, wrapDescribeInZone(arguments));
    };
    global4.describe.only = global4.suite.only = function() {
      return mochaOriginal.describe.only.apply(this, wrapDescribeInZone(arguments));
    };
    global4.it = global4.specify = global4.test = function() {
      return mochaOriginal.it.apply(this, wrapTestInZone(arguments));
    };
    global4.xit = global4.xspecify = global4.it.skip = function() {
      return mochaOriginal.it.skip.apply(this, wrapTestInZone(arguments));
    };
    global4.it.only = global4.test.only = function() {
      return mochaOriginal.it.only.apply(this, wrapTestInZone(arguments));
    };
    global4.after = global4.suiteTeardown = function() {
      return mochaOriginal.after.apply(this, wrapSuiteInZone(arguments));
    };
    global4.afterEach = global4.teardown = function() {
      return mochaOriginal.afterEach.apply(this, wrapTestInZone(arguments));
    };
    global4.before = global4.suiteSetup = function() {
      return mochaOriginal.before.apply(this, wrapSuiteInZone(arguments));
    };
    global4.beforeEach = global4.setup = function() {
      return mochaOriginal.beforeEach.apply(this, wrapTestInZone(arguments));
    };
    ((originalRunTest, originalRun) => {
      Mocha.Runner.prototype.runTest = function(fn) {
        Zone3.current.scheduleMicroTask("mocha.forceTask", () => {
          originalRunTest.call(this, fn);
        });
      };
      Mocha.Runner.prototype.run = function(fn) {
        this.on("test", (e) => {
          testZone = rootZone.fork(new ProxyZoneSpec2());
        });
        this.on("fail", (test, err) => {
          const proxyZoneSpec = testZone && testZone.get("ProxyZoneSpec");
          if (proxyZoneSpec && err) {
            try {
              err.message += proxyZoneSpec.getAndClearPendingTasksInfo();
            } catch (error) {
            }
          }
        });
        return originalRun.call(this, fn);
      };
    })(Mocha.Runner.prototype.runTest, Mocha.Runner.prototype.run);
  });
}
var global$2 = globalThis;
function __symbol__2(name) {
  const symbolPrefix = global$2["__Zone_symbol_prefix"] || "__zone_symbol__";
  return symbolPrefix + name;
}
var __global = typeof window !== "undefined" && window || typeof self !== "undefined" && self || global;
var AsyncTestZoneSpec = class _AsyncTestZoneSpec {
  finishCallback;
  failCallback;
  // Needs to be a getter and not a plain property in order run this just-in-time. Otherwise
  // `__symbol__` would be evaluated during top-level execution prior to the Zone prefix being
  // changed for tests.
  static get symbolParentUnresolved() {
    return __symbol__2("parentUnresolved");
  }
  _pendingMicroTasks = false;
  _pendingMacroTasks = false;
  _alreadyErrored = false;
  _isSync = false;
  _existingFinishTimer = null;
  entryFunction = null;
  runZone = Zone.current;
  unresolvedChainedPromiseCount = 0;
  supportWaitUnresolvedChainedPromise = false;
  constructor(finishCallback, failCallback, namePrefix) {
    this.finishCallback = finishCallback;
    this.failCallback = failCallback;
    this.name = "asyncTestZone for " + namePrefix;
    this.properties = { "AsyncTestZoneSpec": this };
    this.supportWaitUnresolvedChainedPromise = __global[__symbol__2("supportWaitUnResolvedChainedPromise")] === true;
  }
  isUnresolvedChainedPromisePending() {
    return this.unresolvedChainedPromiseCount > 0;
  }
  _finishCallbackIfDone() {
    if (this._existingFinishTimer !== null) {
      clearTimeout(this._existingFinishTimer);
      this._existingFinishTimer = null;
    }
    if (!(this._pendingMicroTasks || this._pendingMacroTasks || this.supportWaitUnresolvedChainedPromise && this.isUnresolvedChainedPromisePending())) {
      this.runZone.run(() => {
        this._existingFinishTimer = setTimeout(() => {
          if (!this._alreadyErrored && !(this._pendingMicroTasks || this._pendingMacroTasks)) {
            this.finishCallback();
          }
        }, 0);
      });
    }
  }
  patchPromiseForTest() {
    if (!this.supportWaitUnresolvedChainedPromise) {
      return;
    }
    const patchPromiseForTest = Promise[Zone.__symbol__("patchPromiseForTest")];
    if (patchPromiseForTest) {
      patchPromiseForTest();
    }
  }
  unPatchPromiseForTest() {
    if (!this.supportWaitUnresolvedChainedPromise) {
      return;
    }
    const unPatchPromiseForTest = Promise[Zone.__symbol__("unPatchPromiseForTest")];
    if (unPatchPromiseForTest) {
      unPatchPromiseForTest();
    }
  }
  // ZoneSpec implementation below.
  name;
  properties;
  onScheduleTask(delegate, current, target, task) {
    if (task.type !== "eventTask") {
      this._isSync = false;
    }
    if (task.type === "microTask" && task.data && task.data instanceof Promise) {
      if (task.data[_AsyncTestZoneSpec.symbolParentUnresolved] === true) {
        this.unresolvedChainedPromiseCount--;
      }
    }
    return delegate.scheduleTask(target, task);
  }
  onInvokeTask(delegate, current, target, task, applyThis, applyArgs) {
    if (task.type !== "eventTask") {
      this._isSync = false;
    }
    return delegate.invokeTask(target, task, applyThis, applyArgs);
  }
  onCancelTask(delegate, current, target, task) {
    if (task.type !== "eventTask") {
      this._isSync = false;
    }
    return delegate.cancelTask(target, task);
  }
  // Note - we need to use onInvoke at the moment to call finish when a test is
  // fully synchronous. TODO(juliemr): remove this when the logic for
  // onHasTask changes and it calls whenever the task queues are dirty.
  // updated by(JiaLiPassion), only call finish callback when no task
  // was scheduled/invoked/canceled.
  onInvoke(parentZoneDelegate, currentZone, targetZone, delegate, applyThis, applyArgs, source) {
    if (!this.entryFunction) {
      this.entryFunction = delegate;
    }
    try {
      this._isSync = true;
      return parentZoneDelegate.invoke(targetZone, delegate, applyThis, applyArgs, source);
    } finally {
      if (this._isSync && this.entryFunction === delegate) {
        this._finishCallbackIfDone();
      }
    }
  }
  onHandleError(parentZoneDelegate, currentZone, targetZone, error) {
    const result2 = parentZoneDelegate.handleError(targetZone, error);
    if (result2) {
      this.failCallback(error);
      this._alreadyErrored = true;
    }
    return false;
  }
  onHasTask(delegate, current, target, hasTaskState) {
    delegate.hasTask(target, hasTaskState);
    if (current !== target) {
      return;
    }
    if (hasTaskState.change == "microTask") {
      this._pendingMicroTasks = hasTaskState.microTask;
      this._finishCallbackIfDone();
    } else if (hasTaskState.change == "macroTask") {
      this._pendingMacroTasks = hasTaskState.macroTask;
      this._finishCallbackIfDone();
    }
  }
};
function patchAsyncTest(Zone2) {
  Zone2["AsyncTestZoneSpec"] = AsyncTestZoneSpec;
  Zone2.__load_patch("asynctest", (global4, Zone3, api) => {
    Zone3[api.symbol("asyncTest")] = function asyncTest(fn) {
      if (global4.jasmine) {
        return function(done) {
          if (!done) {
            done = function() {
            };
            done.fail = function(e) {
              throw e;
            };
          }
          runInTestZone(fn, this, done, (err) => {
            if (typeof err === "string") {
              return done.fail(new Error(err));
            } else {
              done.fail(err);
            }
          });
        };
      }
      return function() {
        return new Promise((finishCallback, failCallback) => {
          runInTestZone(fn, this, finishCallback, failCallback);
        });
      };
    };
    function runInTestZone(fn, context, finishCallback, failCallback) {
      const currentZone = Zone3.current;
      const AsyncTestZoneSpec2 = Zone3["AsyncTestZoneSpec"];
      if (AsyncTestZoneSpec2 === void 0) {
        throw new Error("AsyncTestZoneSpec is needed for the async() test helper but could not be found. Please make sure that your environment includes zone.js/plugins/async-test");
      }
      const ProxyZoneSpec2 = Zone3["ProxyZoneSpec"];
      if (!ProxyZoneSpec2) {
        throw new Error("ProxyZoneSpec is needed for the async() test helper but could not be found. Please make sure that your environment includes zone.js/plugins/proxy");
      }
      const proxyZoneSpec = ProxyZoneSpec2.get();
      ProxyZoneSpec2.assertPresent();
      const proxyZone = Zone3.current.getZoneWith("ProxyZoneSpec");
      const previousDelegate = proxyZoneSpec.getDelegate();
      proxyZone.parent.run(() => {
        const testZoneSpec = new AsyncTestZoneSpec2(() => {
          if (proxyZoneSpec.getDelegate() == testZoneSpec) {
            proxyZoneSpec.setDelegate(previousDelegate);
          }
          testZoneSpec.unPatchPromiseForTest();
          currentZone.run(() => {
            finishCallback();
          });
        }, (error) => {
          if (proxyZoneSpec.getDelegate() == testZoneSpec) {
            proxyZoneSpec.setDelegate(previousDelegate);
          }
          testZoneSpec.unPatchPromiseForTest();
          currentZone.run(() => {
            failCallback(error);
          });
        }, "test");
        proxyZoneSpec.setDelegate(testZoneSpec);
        testZoneSpec.patchPromiseForTest();
      });
      return Zone3.current.runGuarded(fn, context);
    }
  });
}
var global$1 = typeof window === "object" && window || typeof self === "object" && self || globalThis.global;
var OriginalDate = global$1.Date;
function FakeDate() {
  if (arguments.length === 0) {
    const d = new OriginalDate();
    d.setTime(FakeDate.now());
    return d;
  } else {
    const args = Array.prototype.slice.call(arguments);
    return new OriginalDate(...args);
  }
}
FakeDate.now = function() {
  const fakeAsyncTestZoneSpec = Zone.current.get("FakeAsyncTestZoneSpec");
  if (fakeAsyncTestZoneSpec) {
    return fakeAsyncTestZoneSpec.getFakeSystemTime();
  }
  return OriginalDate.now.apply(this, arguments);
};
FakeDate.UTC = OriginalDate.UTC;
FakeDate.parse = OriginalDate.parse;
var patchedTimers;
var timeoutCallback = function() {
};
var Scheduler = class _Scheduler {
  // Next scheduler id.
  static nextNodeJSId = 1;
  static nextId = -1;
  // Scheduler queue with the tuple of end time and callback function - sorted by end time.
  _schedulerQueue = [];
  // Current simulated time in millis.
  _currentTickTime = 0;
  // Current fake system base time in millis.
  _currentFakeBaseSystemTime = OriginalDate.now();
  // track requeuePeriodicTimer
  _currentTickRequeuePeriodicEntries = [];
  constructor() {
  }
  static getNextId() {
    const id = patchedTimers.nativeSetTimeout.call(global$1, timeoutCallback, 0);
    patchedTimers.nativeClearTimeout.call(global$1, id);
    if (typeof id === "number") {
      return id;
    }
    return _Scheduler.nextNodeJSId++;
  }
  getCurrentTickTime() {
    return this._currentTickTime;
  }
  getFakeSystemTime() {
    return this._currentFakeBaseSystemTime + this._currentTickTime;
  }
  setFakeBaseSystemTime(fakeBaseSystemTime) {
    this._currentFakeBaseSystemTime = fakeBaseSystemTime;
  }
  getRealSystemTime() {
    return OriginalDate.now();
  }
  scheduleFunction(cb, delay, options) {
    options = __spreadValues(__spreadValues({}, {
      args: [],
      isPeriodic: false,
      isRequestAnimationFrame: false,
      id: -1,
      isRequeuePeriodic: false
    }), options);
    let currentId = options.id < 0 ? _Scheduler.nextId : options.id;
    _Scheduler.nextId = _Scheduler.getNextId();
    let endTime = this._currentTickTime + delay;
    let newEntry = {
      endTime,
      id: currentId,
      func: cb,
      args: options.args,
      delay,
      isPeriodic: options.isPeriodic,
      isRequestAnimationFrame: options.isRequestAnimationFrame
    };
    if (options.isRequeuePeriodic) {
      this._currentTickRequeuePeriodicEntries.push(newEntry);
    }
    let i = 0;
    for (; i < this._schedulerQueue.length; i++) {
      let currentEntry = this._schedulerQueue[i];
      if (newEntry.endTime < currentEntry.endTime) {
        break;
      }
    }
    this._schedulerQueue.splice(i, 0, newEntry);
    return currentId;
  }
  removeScheduledFunctionWithId(id) {
    for (let i = 0; i < this._schedulerQueue.length; i++) {
      if (this._schedulerQueue[i].id == id) {
        this._schedulerQueue.splice(i, 1);
        break;
      }
    }
  }
  removeAll() {
    this._schedulerQueue = [];
  }
  getTimerCount() {
    return this._schedulerQueue.length;
  }
  tickToNext(step = 1, doTick, tickOptions) {
    if (this._schedulerQueue.length < step) {
      return;
    }
    const startTime = this._currentTickTime;
    const targetTask = this._schedulerQueue[step - 1];
    this.tick(targetTask.endTime - startTime, doTick, tickOptions);
  }
  tick(millis = 0, doTick, tickOptions) {
    let finalTime = this._currentTickTime + millis;
    let lastCurrentTime = 0;
    tickOptions = Object.assign({ processNewMacroTasksSynchronously: true }, tickOptions);
    const schedulerQueue = tickOptions.processNewMacroTasksSynchronously ? this._schedulerQueue : this._schedulerQueue.slice();
    if (schedulerQueue.length === 0 && doTick) {
      doTick(millis);
      return;
    }
    while (schedulerQueue.length > 0) {
      this._currentTickRequeuePeriodicEntries = [];
      let current = schedulerQueue[0];
      if (finalTime < current.endTime) {
        break;
      } else {
        let current2 = schedulerQueue.shift();
        if (!tickOptions.processNewMacroTasksSynchronously) {
          const idx = this._schedulerQueue.indexOf(current2);
          if (idx >= 0) {
            this._schedulerQueue.splice(idx, 1);
          }
        }
        lastCurrentTime = this._currentTickTime;
        this._currentTickTime = current2.endTime;
        if (doTick) {
          doTick(this._currentTickTime - lastCurrentTime);
        }
        let retval = current2.func.apply(global$1, current2.isRequestAnimationFrame ? [this._currentTickTime] : current2.args);
        if (!retval) {
          break;
        }
        if (!tickOptions.processNewMacroTasksSynchronously) {
          this._currentTickRequeuePeriodicEntries.forEach((newEntry) => {
            let i = 0;
            for (; i < schedulerQueue.length; i++) {
              const currentEntry = schedulerQueue[i];
              if (newEntry.endTime < currentEntry.endTime) {
                break;
              }
            }
            schedulerQueue.splice(i, 0, newEntry);
          });
        }
      }
    }
    lastCurrentTime = this._currentTickTime;
    this._currentTickTime = finalTime;
    if (doTick) {
      doTick(this._currentTickTime - lastCurrentTime);
    }
  }
  flushOnlyPendingTimers(doTick) {
    if (this._schedulerQueue.length === 0) {
      return 0;
    }
    const startTime = this._currentTickTime;
    const lastTask = this._schedulerQueue[this._schedulerQueue.length - 1];
    this.tick(lastTask.endTime - startTime, doTick, { processNewMacroTasksSynchronously: false });
    return this._currentTickTime - startTime;
  }
  flush(limit = 20, flushPeriodic = false, doTick) {
    if (flushPeriodic) {
      return this.flushPeriodic(doTick);
    } else {
      return this.flushNonPeriodic(limit, doTick);
    }
  }
  flushPeriodic(doTick) {
    if (this._schedulerQueue.length === 0) {
      return 0;
    }
    const startTime = this._currentTickTime;
    const lastTask = this._schedulerQueue[this._schedulerQueue.length - 1];
    this.tick(lastTask.endTime - startTime, doTick);
    return this._currentTickTime - startTime;
  }
  flushNonPeriodic(limit, doTick) {
    const startTime = this._currentTickTime;
    let lastCurrentTime = 0;
    let count = 0;
    while (this._schedulerQueue.length > 0) {
      count++;
      if (count > limit) {
        throw new Error("flush failed after reaching the limit of " + limit + " tasks. Does your code use a polling timeout?");
      }
      if (this._schedulerQueue.filter((task) => !task.isPeriodic && !task.isRequestAnimationFrame).length === 0) {
        break;
      }
      const current = this._schedulerQueue.shift();
      lastCurrentTime = this._currentTickTime;
      this._currentTickTime = current.endTime;
      if (doTick) {
        doTick(this._currentTickTime - lastCurrentTime);
      }
      const retval = current.func.apply(global$1, current.args);
      if (!retval) {
        break;
      }
    }
    return this._currentTickTime - startTime;
  }
};
var FakeAsyncTestZoneSpec = class _FakeAsyncTestZoneSpec {
  trackPendingRequestAnimationFrame;
  macroTaskOptions;
  static assertInZone() {
    if (Zone.current.get("FakeAsyncTestZoneSpec") == null) {
      throw new Error("The code should be running in the fakeAsync zone to call this function");
    }
  }
  _scheduler = new Scheduler();
  _microtasks = [];
  _lastError = null;
  _uncaughtPromiseErrors = Promise[Zone.__symbol__("uncaughtPromiseErrors")];
  pendingPeriodicTimers = [];
  pendingTimers = [];
  patchDateLocked = false;
  constructor(namePrefix, trackPendingRequestAnimationFrame = false, macroTaskOptions) {
    this.trackPendingRequestAnimationFrame = trackPendingRequestAnimationFrame;
    this.macroTaskOptions = macroTaskOptions;
    this.name = "fakeAsyncTestZone for " + namePrefix;
    if (!this.macroTaskOptions) {
      this.macroTaskOptions = global$1[Zone.__symbol__("FakeAsyncTestMacroTask")];
    }
  }
  _fnAndFlush(fn, completers) {
    return (...args) => {
      fn.apply(global$1, args);
      if (this._lastError === null) {
        if (completers.onSuccess != null) {
          completers.onSuccess.apply(global$1);
        }
        this.flushMicrotasks();
      } else {
        if (completers.onError != null) {
          completers.onError.apply(global$1);
        }
      }
      return this._lastError === null;
    };
  }
  static _removeTimer(timers, id) {
    let index = timers.indexOf(id);
    if (index > -1) {
      timers.splice(index, 1);
    }
  }
  _dequeueTimer(id) {
    return () => {
      _FakeAsyncTestZoneSpec._removeTimer(this.pendingTimers, id);
    };
  }
  _requeuePeriodicTimer(fn, interval, args, id) {
    return () => {
      if (this.pendingPeriodicTimers.indexOf(id) !== -1) {
        this._scheduler.scheduleFunction(fn, interval, {
          args,
          isPeriodic: true,
          id,
          isRequeuePeriodic: true
        });
      }
    };
  }
  _dequeuePeriodicTimer(id) {
    return () => {
      _FakeAsyncTestZoneSpec._removeTimer(this.pendingPeriodicTimers, id);
    };
  }
  _setTimeout(fn, delay, args, isTimer = true) {
    let removeTimerFn = this._dequeueTimer(Scheduler.nextId);
    let cb = this._fnAndFlush(fn, { onSuccess: removeTimerFn, onError: removeTimerFn });
    let id = this._scheduler.scheduleFunction(cb, delay, { args, isRequestAnimationFrame: !isTimer });
    if (isTimer) {
      this.pendingTimers.push(id);
    }
    return id;
  }
  _clearTimeout(id) {
    _FakeAsyncTestZoneSpec._removeTimer(this.pendingTimers, id);
    this._scheduler.removeScheduledFunctionWithId(id);
  }
  _setInterval(fn, interval, args) {
    let id = Scheduler.nextId;
    let completers = { onSuccess: null, onError: this._dequeuePeriodicTimer(id) };
    let cb = this._fnAndFlush(fn, completers);
    completers.onSuccess = this._requeuePeriodicTimer(cb, interval, args, id);
    this._scheduler.scheduleFunction(cb, interval, { args, isPeriodic: true });
    this.pendingPeriodicTimers.push(id);
    return id;
  }
  _clearInterval(id) {
    _FakeAsyncTestZoneSpec._removeTimer(this.pendingPeriodicTimers, id);
    this._scheduler.removeScheduledFunctionWithId(id);
  }
  _resetLastErrorAndThrow() {
    let error = this._lastError || this._uncaughtPromiseErrors[0];
    this._uncaughtPromiseErrors.length = 0;
    this._lastError = null;
    throw error;
  }
  getCurrentTickTime() {
    return this._scheduler.getCurrentTickTime();
  }
  getFakeSystemTime() {
    return this._scheduler.getFakeSystemTime();
  }
  setFakeBaseSystemTime(realTime) {
    this._scheduler.setFakeBaseSystemTime(realTime);
  }
  getRealSystemTime() {
    return this._scheduler.getRealSystemTime();
  }
  static patchDate() {
    if (!!global$1[Zone.__symbol__("disableDatePatching")]) {
      return;
    }
    if (global$1["Date"] === FakeDate) {
      return;
    }
    global$1["Date"] = FakeDate;
    FakeDate.prototype = OriginalDate.prototype;
    _FakeAsyncTestZoneSpec.checkTimerPatch();
  }
  static resetDate() {
    if (global$1["Date"] === FakeDate) {
      global$1["Date"] = OriginalDate;
    }
  }
  static checkTimerPatch() {
    if (!patchedTimers) {
      throw new Error("Expected timers to have been patched.");
    }
    if (global$1.setTimeout !== patchedTimers.setTimeout) {
      global$1.setTimeout = patchedTimers.setTimeout;
      global$1.clearTimeout = patchedTimers.clearTimeout;
    }
    if (global$1.setInterval !== patchedTimers.setInterval) {
      global$1.setInterval = patchedTimers.setInterval;
      global$1.clearInterval = patchedTimers.clearInterval;
    }
  }
  lockDatePatch() {
    this.patchDateLocked = true;
    _FakeAsyncTestZoneSpec.patchDate();
  }
  unlockDatePatch() {
    this.patchDateLocked = false;
    _FakeAsyncTestZoneSpec.resetDate();
  }
  tickToNext(steps = 1, doTick, tickOptions = { processNewMacroTasksSynchronously: true }) {
    if (steps <= 0) {
      return;
    }
    _FakeAsyncTestZoneSpec.assertInZone();
    this.flushMicrotasks();
    this._scheduler.tickToNext(steps, doTick, tickOptions);
    if (this._lastError !== null) {
      this._resetLastErrorAndThrow();
    }
  }
  tick(millis = 0, doTick, tickOptions = { processNewMacroTasksSynchronously: true }) {
    _FakeAsyncTestZoneSpec.assertInZone();
    this.flushMicrotasks();
    this._scheduler.tick(millis, doTick, tickOptions);
    if (this._lastError !== null) {
      this._resetLastErrorAndThrow();
    }
  }
  flushMicrotasks() {
    _FakeAsyncTestZoneSpec.assertInZone();
    const flushErrors = () => {
      if (this._lastError !== null || this._uncaughtPromiseErrors.length) {
        this._resetLastErrorAndThrow();
      }
    };
    while (this._microtasks.length > 0) {
      let microtask = this._microtasks.shift();
      microtask.func.apply(microtask.target, microtask.args);
    }
    flushErrors();
  }
  flush(limit, flushPeriodic, doTick) {
    _FakeAsyncTestZoneSpec.assertInZone();
    this.flushMicrotasks();
    const elapsed = this._scheduler.flush(limit, flushPeriodic, doTick);
    if (this._lastError !== null) {
      this._resetLastErrorAndThrow();
    }
    return elapsed;
  }
  flushOnlyPendingTimers(doTick) {
    _FakeAsyncTestZoneSpec.assertInZone();
    this.flushMicrotasks();
    const elapsed = this._scheduler.flushOnlyPendingTimers(doTick);
    if (this._lastError !== null) {
      this._resetLastErrorAndThrow();
    }
    return elapsed;
  }
  removeAllTimers() {
    _FakeAsyncTestZoneSpec.assertInZone();
    this._scheduler.removeAll();
    this.pendingPeriodicTimers = [];
    this.pendingTimers = [];
  }
  getTimerCount() {
    return this._scheduler.getTimerCount() + this._microtasks.length;
  }
  // ZoneSpec implementation below.
  name;
  properties = { "FakeAsyncTestZoneSpec": this };
  onScheduleTask(delegate, current, target, task) {
    switch (task.type) {
      case "microTask":
        let args = task.data && task.data.args;
        let additionalArgs;
        if (args) {
          let callbackIndex = task.data.cbIdx;
          if (typeof args.length === "number" && args.length > callbackIndex + 1) {
            additionalArgs = Array.prototype.slice.call(args, callbackIndex + 1);
          }
        }
        this._microtasks.push({
          func: task.invoke,
          args: additionalArgs,
          target: task.data && task.data.target
        });
        break;
      case "macroTask":
        switch (task.source) {
          case "setTimeout":
            task.data["handleId"] = this._setTimeout(task.invoke, task.data["delay"], Array.prototype.slice.call(task.data["args"], 2));
            break;
          case "setImmediate":
            task.data["handleId"] = this._setTimeout(task.invoke, 0, Array.prototype.slice.call(task.data["args"], 1));
            break;
          case "setInterval":
            task.data["handleId"] = this._setInterval(task.invoke, task.data["delay"], Array.prototype.slice.call(task.data["args"], 2));
            break;
          case "XMLHttpRequest.send":
            throw new Error("Cannot make XHRs from within a fake async test. Request URL: " + task.data["url"]);
          case "requestAnimationFrame":
          case "webkitRequestAnimationFrame":
          case "mozRequestAnimationFrame":
            task.data["handleId"] = this._setTimeout(task.invoke, 16, task.data["args"], this.trackPendingRequestAnimationFrame);
            break;
          default:
            const macroTaskOption = this.findMacroTaskOption(task);
            if (macroTaskOption) {
              const args2 = task.data && task.data["args"];
              const delay = args2 && args2.length > 1 ? args2[1] : 0;
              let callbackArgs = macroTaskOption.callbackArgs ? macroTaskOption.callbackArgs : args2;
              if (!!macroTaskOption.isPeriodic) {
                task.data["handleId"] = this._setInterval(task.invoke, delay, callbackArgs);
                task.data.isPeriodic = true;
              } else {
                task.data["handleId"] = this._setTimeout(task.invoke, delay, callbackArgs);
              }
              break;
            }
            throw new Error("Unknown macroTask scheduled in fake async test: " + task.source);
        }
        break;
      case "eventTask":
        task = delegate.scheduleTask(target, task);
        break;
    }
    return task;
  }
  onCancelTask(delegate, current, target, task) {
    switch (task.source) {
      case "setTimeout":
      case "requestAnimationFrame":
      case "webkitRequestAnimationFrame":
      case "mozRequestAnimationFrame":
        return this._clearTimeout(task.data["handleId"]);
      case "setInterval":
        return this._clearInterval(task.data["handleId"]);
      default:
        const macroTaskOption = this.findMacroTaskOption(task);
        if (macroTaskOption) {
          const handleId = task.data["handleId"];
          return macroTaskOption.isPeriodic ? this._clearInterval(handleId) : this._clearTimeout(handleId);
        }
        return delegate.cancelTask(target, task);
    }
  }
  onInvoke(delegate, current, target, callback, applyThis, applyArgs, source) {
    try {
      _FakeAsyncTestZoneSpec.patchDate();
      return delegate.invoke(target, callback, applyThis, applyArgs, source);
    } finally {
      if (!this.patchDateLocked) {
        _FakeAsyncTestZoneSpec.resetDate();
      }
    }
  }
  findMacroTaskOption(task) {
    if (!this.macroTaskOptions) {
      return null;
    }
    for (let i = 0; i < this.macroTaskOptions.length; i++) {
      const macroTaskOption = this.macroTaskOptions[i];
      if (macroTaskOption.source === task.source) {
        return macroTaskOption;
      }
    }
    return null;
  }
  onHandleError(parentZoneDelegate, currentZone, targetZone, error) {
    this._lastError = error;
    return false;
  }
};
var _fakeAsyncTestZoneSpec = null;
function getProxyZoneSpec() {
  return Zone && Zone["ProxyZoneSpec"];
}
var _sharedProxyZoneSpec = null;
var _sharedProxyZone = null;
function resetFakeAsyncZone() {
  if (_fakeAsyncTestZoneSpec) {
    _fakeAsyncTestZoneSpec.unlockDatePatch();
  }
  _fakeAsyncTestZoneSpec = null;
  getProxyZoneSpec()?.get()?.resetDelegate();
  _sharedProxyZoneSpec?.resetDelegate();
}
function fakeAsync(fn, options = {}) {
  const { flush: flush2 = true } = options;
  const fakeAsyncFn = function(...args) {
    const ProxyZoneSpec2 = getProxyZoneSpec();
    if (!ProxyZoneSpec2) {
      throw new Error("ProxyZoneSpec is needed for the fakeAsync() test helper but could not be found. Make sure that your environment includes zone-testing.js");
    }
    const proxyZoneSpec = ProxyZoneSpec2.assertPresent();
    if (Zone.current.get("FakeAsyncTestZoneSpec")) {
      throw new Error("fakeAsync() calls can not be nested");
    }
    try {
      if (!_fakeAsyncTestZoneSpec) {
        const FakeAsyncTestZoneSpec2 = Zone && Zone["FakeAsyncTestZoneSpec"];
        if (proxyZoneSpec.getDelegate() instanceof FakeAsyncTestZoneSpec2) {
          throw new Error("fakeAsync() calls can not be nested");
        }
        _fakeAsyncTestZoneSpec = new FakeAsyncTestZoneSpec2();
      }
      let res;
      const lastProxyZoneSpec = proxyZoneSpec.getDelegate();
      proxyZoneSpec.setDelegate(_fakeAsyncTestZoneSpec);
      _fakeAsyncTestZoneSpec.lockDatePatch();
      try {
        res = fn.apply(this, args);
        if (flush2) {
          _fakeAsyncTestZoneSpec.flush(20, true);
        } else {
          flushMicrotasks();
        }
      } finally {
        proxyZoneSpec.setDelegate(lastProxyZoneSpec);
      }
      if (!flush2) {
        if (_fakeAsyncTestZoneSpec.pendingPeriodicTimers.length > 0) {
          throw new Error(`${_fakeAsyncTestZoneSpec.pendingPeriodicTimers.length} periodic timer(s) still in the queue.`);
        }
        if (_fakeAsyncTestZoneSpec.pendingTimers.length > 0) {
          throw new Error(`${_fakeAsyncTestZoneSpec.pendingTimers.length} timer(s) still in the queue.`);
        }
      }
      return res;
    } finally {
      resetFakeAsyncZone();
    }
  };
  fakeAsyncFn.isFakeAsync = true;
  return fakeAsyncFn;
}
function _getFakeAsyncZoneSpec() {
  if (_fakeAsyncTestZoneSpec == null) {
    _fakeAsyncTestZoneSpec = Zone.current.get("FakeAsyncTestZoneSpec");
    if (_fakeAsyncTestZoneSpec == null) {
      throw new Error("The code should be running in the fakeAsync zone to call this function");
    }
  }
  return _fakeAsyncTestZoneSpec;
}
function tick(millis = 0, ignoreNestedTimeout = false) {
  _getFakeAsyncZoneSpec().tick(millis, null, ignoreNestedTimeout);
}
function flush(maxTurns) {
  return _getFakeAsyncZoneSpec().flush(maxTurns);
}
function discardPeriodicTasks() {
  const zoneSpec = _getFakeAsyncZoneSpec();
  zoneSpec.pendingPeriodicTimers;
  zoneSpec.pendingPeriodicTimers.length = 0;
}
function withProxyZone(fn) {
  const autoProxyFn = function(...args) {
    const proxyZoneSpec = getProxyZoneSpec();
    if (proxyZoneSpec === void 0) {
      throw new Error("ProxyZoneSpec is needed for the withProxyZone() test helper but could not be found. Make sure that your environment includes zone-testing.js");
    }
    const proxyZone = proxyZoneSpec.get() !== void 0 ? Zone.current : getOrCreateRootProxy();
    return proxyZone.run(fn, this, args);
  };
  return autoProxyFn;
}
function getOrCreateRootProxy() {
  const ProxyZoneSpec2 = getProxyZoneSpec();
  if (ProxyZoneSpec2 === void 0) {
    throw new Error("ProxyZoneSpec is needed for withProxyZone but could not be found. Make sure that your environment includes zone-testing.js");
  }
  if (_sharedProxyZoneSpec === null) {
    _sharedProxyZoneSpec = new ProxyZoneSpec2();
  }
  _sharedProxyZone = Zone.root.fork(_sharedProxyZoneSpec);
  return _sharedProxyZone;
}
function flushMicrotasks() {
  _getFakeAsyncZoneSpec().flushMicrotasks();
}
function patchFakeAsyncTest(Zone2) {
  Zone2["FakeAsyncTestZoneSpec"] = FakeAsyncTestZoneSpec;
  Zone2.__load_patch("fakeasync", (global4, Zone3, api) => {
    Zone3[api.symbol("fakeAsyncTest")] = {
      resetFakeAsyncZone,
      flushMicrotasks,
      discardPeriodicTasks,
      tick,
      flush,
      fakeAsync,
      withProxyZone
    };
  }, true);
  patchedTimers = {
    setTimeout: global$1.setTimeout,
    setInterval: global$1.setInterval,
    clearTimeout: global$1.clearTimeout,
    clearInterval: global$1.clearInterval,
    nativeSetTimeout: global$1[Zone2.__symbol__("setTimeout")],
    nativeClearTimeout: global$1[Zone2.__symbol__("clearTimeout")]
  };
  Scheduler.nextId = Scheduler.getNextId();
}
function patchLongStackTrace(Zone2) {
  const NEWLINE = "\n";
  const IGNORE_FRAMES = {};
  const creationTrace = "__creationTrace__";
  const ERROR_TAG = "STACKTRACE TRACKING";
  const SEP_TAG = "__SEP_TAG__";
  let sepTemplate = SEP_TAG + "@[native]";
  class LongStackTrace {
    error = getStacktrace();
    timestamp = /* @__PURE__ */ new Date();
  }
  function getStacktraceWithUncaughtError() {
    return new Error(ERROR_TAG);
  }
  function getStacktraceWithCaughtError() {
    try {
      throw getStacktraceWithUncaughtError();
    } catch (err) {
      return err;
    }
  }
  const error = getStacktraceWithUncaughtError();
  const caughtError = getStacktraceWithCaughtError();
  const getStacktrace = error.stack ? getStacktraceWithUncaughtError : caughtError.stack ? getStacktraceWithCaughtError : getStacktraceWithUncaughtError;
  function getFrames(error2) {
    return error2.stack ? error2.stack.split(NEWLINE) : [];
  }
  function addErrorStack(lines, error2) {
    let trace = getFrames(error2);
    for (let i = 0; i < trace.length; i++) {
      const frame = trace[i];
      if (!IGNORE_FRAMES.hasOwnProperty(frame)) {
        lines.push(trace[i]);
      }
    }
  }
  function renderLongStackTrace(frames, stack) {
    const longTrace = [stack ? stack.trim() : ""];
    if (frames) {
      let timestamp = (/* @__PURE__ */ new Date()).getTime();
      for (let i = 0; i < frames.length; i++) {
        const traceFrames = frames[i];
        const lastTime = traceFrames.timestamp;
        let separator = `____________________Elapsed ${timestamp - lastTime.getTime()} ms; At: ${lastTime}`;
        separator = separator.replace(/[^\w\d]/g, "_");
        longTrace.push(sepTemplate.replace(SEP_TAG, separator));
        addErrorStack(longTrace, traceFrames.error);
        timestamp = lastTime.getTime();
      }
    }
    return longTrace.join(NEWLINE);
  }
  function stackTracesEnabled() {
    return Error.stackTraceLimit > 0;
  }
  Zone2["longStackTraceZoneSpec"] = {
    name: "long-stack-trace",
    longStackTraceLimit: 10,
    // Max number of task to keep the stack trace for.
    // add a getLongStackTrace method in spec to
    // handle handled reject promise error.
    getLongStackTrace: function(error2) {
      if (!error2) {
        return void 0;
      }
      const trace = error2[Zone2.__symbol__("currentTaskTrace")];
      if (!trace) {
        return error2.stack;
      }
      return renderLongStackTrace(trace, error2.stack);
    },
    onScheduleTask: function(parentZoneDelegate, currentZone, targetZone, task) {
      if (stackTracesEnabled()) {
        const currentTask = Zone2.currentTask;
        let trace = currentTask && currentTask.data && currentTask.data[creationTrace] || [];
        trace = [new LongStackTrace()].concat(trace);
        if (trace.length > this.longStackTraceLimit) {
          trace.length = this.longStackTraceLimit;
        }
        if (!task.data)
          task.data = {};
        if (task.type === "eventTask") {
          task.data = __spreadValues({}, task.data);
        }
        task.data[creationTrace] = trace;
      }
      return parentZoneDelegate.scheduleTask(targetZone, task);
    },
    onHandleError: function(parentZoneDelegate, currentZone, targetZone, error2) {
      if (stackTracesEnabled()) {
        const parentTask = Zone2.currentTask || error2.task;
        if (error2 instanceof Error && parentTask) {
          const longStack = renderLongStackTrace(parentTask.data && parentTask.data[creationTrace], error2.stack);
          try {
            error2.stack = error2.longStack = longStack;
          } catch (err) {
          }
        }
      }
      return parentZoneDelegate.handleError(targetZone, error2);
    }
  };
  function captureStackTraces(stackTraces, count) {
    if (count > 0) {
      stackTraces.push(getFrames(new LongStackTrace().error));
      captureStackTraces(stackTraces, count - 1);
    }
  }
  function computeIgnoreFrames() {
    if (!stackTracesEnabled()) {
      return;
    }
    const frames = [];
    captureStackTraces(frames, 2);
    const frames1 = frames[0];
    const frames2 = frames[1];
    for (let i = 0; i < frames1.length; i++) {
      const frame1 = frames1[i];
      if (frame1.indexOf(ERROR_TAG) == -1) {
        let match2 = frame1.match(/^\s*at\s+/);
        if (match2) {
          sepTemplate = match2[0] + SEP_TAG + " (http://localhost)";
          break;
        }
      }
    }
    for (let i = 0; i < frames1.length; i++) {
      const frame1 = frames1[i];
      const frame2 = frames2[i];
      if (frame1 === frame2) {
        IGNORE_FRAMES[frame1] = true;
      } else {
        break;
      }
    }
  }
  computeIgnoreFrames();
}
var ProxyZoneSpec = class _ProxyZoneSpec {
  defaultSpecDelegate;
  name = "ProxyZone";
  _delegateSpec = null;
  properties = { "ProxyZoneSpec": this };
  propertyKeys = null;
  lastTaskState = null;
  isNeedToTriggerHasTask = false;
  tasks = [];
  static get() {
    return Zone.current.get("ProxyZoneSpec");
  }
  static isLoaded() {
    return _ProxyZoneSpec.get() instanceof _ProxyZoneSpec;
  }
  static assertPresent() {
    const spec = _ProxyZoneSpec.get();
    if (spec === void 0) {
      throw new Error(`Expected to be running in 'ProxyZone', but it was not found.`);
    }
    return spec;
  }
  constructor(defaultSpecDelegate = null) {
    this.defaultSpecDelegate = defaultSpecDelegate;
    this.setDelegate(defaultSpecDelegate);
  }
  setDelegate(delegateSpec) {
    const isNewDelegate = this._delegateSpec !== delegateSpec;
    this._delegateSpec = delegateSpec;
    this.propertyKeys && this.propertyKeys.forEach((key) => delete this.properties[key]);
    this.propertyKeys = null;
    if (delegateSpec && delegateSpec.properties) {
      this.propertyKeys = Object.keys(delegateSpec.properties);
      this.propertyKeys.forEach((k) => this.properties[k] = delegateSpec.properties[k]);
    }
    if (isNewDelegate && this.lastTaskState && (this.lastTaskState.macroTask || this.lastTaskState.microTask)) {
      this.isNeedToTriggerHasTask = true;
    }
  }
  getDelegate() {
    return this._delegateSpec;
  }
  resetDelegate() {
    this.getDelegate();
    this.setDelegate(this.defaultSpecDelegate);
  }
  tryTriggerHasTask(parentZoneDelegate, currentZone, targetZone) {
    if (this.isNeedToTriggerHasTask && this.lastTaskState) {
      this.isNeedToTriggerHasTask = false;
      this.onHasTask(parentZoneDelegate, currentZone, targetZone, this.lastTaskState);
    }
  }
  removeFromTasks(task) {
    if (!this.tasks) {
      return;
    }
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i] === task) {
        this.tasks.splice(i, 1);
        return;
      }
    }
  }
  getAndClearPendingTasksInfo() {
    if (this.tasks.length === 0) {
      return "";
    }
    const taskInfo = this.tasks.map((task) => {
      const dataInfo = task.data && Object.keys(task.data).map((key) => {
        return key + ":" + task.data[key];
      }).join(",");
      return `type: ${task.type}, source: ${task.source}, args: {${dataInfo}}`;
    });
    const pendingTasksInfo = "--Pending async tasks are: [" + taskInfo + "]";
    this.tasks = [];
    return pendingTasksInfo;
  }
  onFork(parentZoneDelegate, currentZone, targetZone, zoneSpec) {
    if (this._delegateSpec && this._delegateSpec.onFork) {
      return this._delegateSpec.onFork(parentZoneDelegate, currentZone, targetZone, zoneSpec);
    } else {
      return parentZoneDelegate.fork(targetZone, zoneSpec);
    }
  }
  onIntercept(parentZoneDelegate, currentZone, targetZone, delegate, source) {
    if (this._delegateSpec && this._delegateSpec.onIntercept) {
      return this._delegateSpec.onIntercept(parentZoneDelegate, currentZone, targetZone, delegate, source);
    } else {
      return parentZoneDelegate.intercept(targetZone, delegate, source);
    }
  }
  onInvoke(parentZoneDelegate, currentZone, targetZone, delegate, applyThis, applyArgs, source) {
    this.tryTriggerHasTask(parentZoneDelegate, currentZone, targetZone);
    if (this._delegateSpec && this._delegateSpec.onInvoke) {
      return this._delegateSpec.onInvoke(parentZoneDelegate, currentZone, targetZone, delegate, applyThis, applyArgs, source);
    } else {
      return parentZoneDelegate.invoke(targetZone, delegate, applyThis, applyArgs, source);
    }
  }
  onHandleError(parentZoneDelegate, currentZone, targetZone, error) {
    if (this._delegateSpec && this._delegateSpec.onHandleError) {
      return this._delegateSpec.onHandleError(parentZoneDelegate, currentZone, targetZone, error);
    } else {
      return parentZoneDelegate.handleError(targetZone, error);
    }
  }
  onScheduleTask(parentZoneDelegate, currentZone, targetZone, task) {
    if (task.type !== "eventTask") {
      this.tasks.push(task);
    }
    if (this._delegateSpec && this._delegateSpec.onScheduleTask) {
      return this._delegateSpec.onScheduleTask(parentZoneDelegate, currentZone, targetZone, task);
    } else {
      return parentZoneDelegate.scheduleTask(targetZone, task);
    }
  }
  onInvokeTask(parentZoneDelegate, currentZone, targetZone, task, applyThis, applyArgs) {
    if (task.type !== "eventTask") {
      this.removeFromTasks(task);
    }
    this.tryTriggerHasTask(parentZoneDelegate, currentZone, targetZone);
    if (this._delegateSpec && this._delegateSpec.onInvokeTask) {
      return this._delegateSpec.onInvokeTask(parentZoneDelegate, currentZone, targetZone, task, applyThis, applyArgs);
    } else {
      return parentZoneDelegate.invokeTask(targetZone, task, applyThis, applyArgs);
    }
  }
  onCancelTask(parentZoneDelegate, currentZone, targetZone, task) {
    if (task.type !== "eventTask") {
      this.removeFromTasks(task);
    }
    this.tryTriggerHasTask(parentZoneDelegate, currentZone, targetZone);
    if (this._delegateSpec && this._delegateSpec.onCancelTask) {
      return this._delegateSpec.onCancelTask(parentZoneDelegate, currentZone, targetZone, task);
    } else {
      return parentZoneDelegate.cancelTask(targetZone, task);
    }
  }
  onHasTask(delegate, current, target, hasTaskState) {
    this.lastTaskState = hasTaskState;
    if (this._delegateSpec && this._delegateSpec.onHasTask) {
      this._delegateSpec.onHasTask(delegate, current, target, hasTaskState);
    } else {
      delegate.hasTask(target, hasTaskState);
    }
  }
};
function patchProxyZoneSpec(Zone2) {
  Zone2["ProxyZoneSpec"] = ProxyZoneSpec;
}
function patchSyncTest(Zone2) {
  class SyncTestZoneSpec {
    runZone = Zone2.current;
    constructor(namePrefix) {
      this.name = "syncTestZone for " + namePrefix;
    }
    // ZoneSpec implementation below.
    name;
    onScheduleTask(delegate, current, target, task) {
      switch (task.type) {
        case "microTask":
        case "macroTask":
          throw new Error(`Cannot call ${task.source} from within a sync test (${this.name}).`);
        case "eventTask":
          task = delegate.scheduleTask(target, task);
          break;
      }
      return task;
    }
  }
  Zone2["SyncTestZoneSpec"] = SyncTestZoneSpec;
}
function patchPromiseTesting(Zone2) {
  Zone2.__load_patch("promisefortest", (global4, Zone3, api) => {
    const symbolState = api.symbol("state");
    const UNRESOLVED = null;
    const symbolParentUnresolved = api.symbol("parentUnresolved");
    Promise[api.symbol("patchPromiseForTest")] = function patchPromiseForTest() {
      let oriThen = Promise[Zone3.__symbol__("ZonePromiseThen")];
      if (oriThen) {
        return;
      }
      oriThen = Promise[Zone3.__symbol__("ZonePromiseThen")] = Promise.prototype.then;
      Promise.prototype.then = function() {
        const chained = oriThen.apply(this, arguments);
        if (this[symbolState] === UNRESOLVED) {
          const asyncTestZoneSpec = Zone3.current.get("AsyncTestZoneSpec");
          if (asyncTestZoneSpec) {
            asyncTestZoneSpec.unresolvedChainedPromiseCount++;
            chained[symbolParentUnresolved] = true;
          }
        }
        return chained;
      };
    };
    Promise[api.symbol("unPatchPromiseForTest")] = function unpatchPromiseForTest() {
      const oriThen = Promise[Zone3.__symbol__("ZonePromiseThen")];
      if (oriThen) {
        Promise.prototype.then = oriThen;
        Promise[Zone3.__symbol__("ZonePromiseThen")] = void 0;
      }
    };
  });
}
function rollupTesting(Zone2) {
  patchLongStackTrace(Zone2);
  patchProxyZoneSpec(Zone2);
  patchSyncTest(Zone2);
  patchJasmine(Zone2);
  patchJest(Zone2);
  patchMocha(Zone2);
  patchAsyncTest(Zone2);
  patchFakeAsyncTest(Zone2);
  patchPromiseTesting(Zone2);
}
rollupTesting(Zone);

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/platform-browser/fesm2022/dom_renderer.mjs:
@angular/platform-browser/fesm2022/browser.mjs:
@angular/platform-browser/fesm2022/platform-browser.mjs:
@angular/router/fesm2022/router2.mjs:
@angular/router/fesm2022/router_module.mjs:
@angular/router/fesm2022/router.mjs:
  (**
   * @license Angular v20.3.1
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)

zone.js/fesm2015/zone.js:
zone.js/fesm2015/zone-testing.js:
  (**
   * @license Angular v<unknown>
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
