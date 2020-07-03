/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
declare namespace common {
    export class Location {
        /**
         * Returns the normalized URL path.
         * @param {boolean} includeHash
         * @return {string}
         */
        public path(includeHash : boolean) : string;

        /**
         * Returns the normalized URL path.
         * @return {string}
         */
        public path() : string;

        /**
         * Normalizes the given path and compares to the current normalized path.
         * @param {string} path
         * @param {string} query
         * @return {boolean}
         */
        public isCurrentPathEqualTo(path : string, query : string) : boolean;

        /**
         * Normalizes the given path and compares to the current normalized path.
         * @param {string} path
         * @return {boolean}
         */
        public isCurrentPathEqualTo(path : string) : boolean;

        /**
         * Given a string representing a URL, returns the normalized URL path
         * without leading or trailing slashes
         * @param {string} url
         * @return {string}
         */
        public normalize(url : string) : string;

        /**
         * Given a string representing a URL, returns the platform-specific external
         * URL path. If the given URL doesn't begin with a leading slash (`'/'`),
         * this method adds one before normalizing. This method will also add a hash
         * if `HashLocationStrategy` is used, or the `APP_BASE_HREF` if the
         * `PathLocationStrategy` is in use.
         * @param {string} url
         * @return {string}
         */
        public prepareExternalUrl(url : string) : string;

        /**
         * Changes the browsers URL to the normalized version of the given URL, and
         * pushes a new item onto the platform's history.
         * @param {string} path
         * @param {string} query
         */
        public go(path : string, query : string);

        /**
         * Changes the browsers URL to the normalized version of the given URL, and
         * pushes a new item onto the platform's history.
         * @param {string} path
         */
        public go(path : string);

        /**
         * Changes the browsers URL to the normalized version of the given URL, and
         * replaces the top item on the platform's history stack.
         * @param {string} path
         * @param {string} query
         */
        public replaceState(path : string, query : string);

        /**
         * Changes the browsers URL to the normalized version of the given URL, and
         * replaces the top item on the platform's history stack.
         * @param {string} path
         */
        public replaceState(path : string);

        /**
         * Navigates forward in the platform's history.
         */
        public forward();

        /**
         * Navigates back in the platform's history.
         */
        public back();

        /**
         * Subscribe to the platform's `popState` events.
         * @param {*} onNext
         * @param {*} onThrow
         * @param {() => void} onReturn
         * @return {*}
         */
        public subscribe(onNext : (p1: any) => void, onThrow : (p1: any) => void, onReturn : () => void) : any;

        /**
         * Subscribe to the platform's `popState` events.
         * @param {*} onNext
         * @param {*} onThrow
         * @return {*}
         */
        public subscribe(onNext : (p1: any) => void, onThrow : (p1: any) => void) : any;

        /**
         * Subscribe to the platform's `popState` events.
         * @param {*} onNext
         * @return {*}
         */
        public subscribe(onNext : (p1: any) => void) : any;

        /**
         * Given a string of url parameters, prepend with '?' if needed, otherwise
         * return parameters as is.
         * @param {string} params
         * @return {string}
         */
        public static normalizeQueryParams(params : string) : string;

        /**
         * Given 2 parts of a url, join them with a slash if needed.
         * @param {string} start
         * @param {string} end
         * @return {string}
         */
        public static joinWithSlash(start : string, end : string) : string;

        /**
         * If url has a trailing slash, remove it, otherwise return url as is.
         * @param {string} url
         * @return {string}
         */
        public static stripTrailingSlash(url : string) : string;
    }
}
declare namespace common {}
declare namespace core {
    export class ChangeDetectorRef {    }
}
declare namespace core {}
declare namespace core {
    export class ElementRef {
        /**
         * The underlying native element or `null` if direct access to native
         * elements is not supported (e.g. when the application runs in a web
         * worker).
         * 
         * <div class="callout is-critical"> <header>Use with caution</header>
         * <p>
         * Use this API as the last resort when direct access to DOM is needed. Use
         * templating and data-binding provided by Angular instead. Alternatively
         * you take a look at {@link Renderer} which provides API that can safely be
         * used even when direct access to native elements is not supported.
         * </p>
         * <p>
         * Relying on direct DOM access creates tight coupling between your
         * application and rendering layers which will make it impossible to
         * separate the two and deploy your application into a web worker.
         * </p>
         * </div>
         * 
         * @stable
         */
        public nativeElement : any;

        public constructor(nativeElement : any);
    }
}
declare namespace core {
    export class EventEmitter<T> {
        public constructor(isAsync : boolean);

        public constructor();

        public emit(value : T);

        public emit();

        public subscribe(generatorOrNext : any, error : any, complete : any) : any;

        public subscribe(generatorOrNext : any, error : any) : any;

        public subscribe(generatorOrNext : any) : any;

        public subscribe() : any;
    }
}
declare namespace core {}
declare namespace core {
    export interface IterableDiffer {
        diff(object : any) : any;

        onDestroy() : any;
    }
}
declare namespace core {
    export interface IterableDifferFactory {
        supports(objects : any) : boolean;

        create(cdRef : any, trackByFn : any) : core.IterableDiffer;

        create(cdRef : any) : core.IterableDiffer;

        create() : core.IterableDiffer;
    }
}
declare namespace core {
    export class IterableDiffers {
        public factories : core.IterableDifferFactory[];

        public constructor(factories : core.IterableDifferFactory[]);

        public static create(factories : core.IterableDifferFactory[], parent : IterableDiffers) : IterableDiffers;

        public static create(factories : core.IterableDifferFactory[]) : IterableDiffers;

        /**
         * Takes an array of {@link IterableDifferFactory} and returns a provider
         * used to extend the inherited {@link IterableDiffers} instance with the
         * provided factories and return a new {@link IterableDiffers} instance.
         * 
         * The following example shows how to extend an existing list of factories,
         * which will only be applied to the injector for this component and its
         * children. This step is all that's required to make a new
         * {@link IterableDiffer} available.
         * 
         * ### Example
         * 
         * ```
         * 
         * @Component({ viewProviders: [ IterableDiffers.extend([new
         * ImmutableListDiffer()]) ] }) ```
         * @param {Array} factories
         * @return {*}
         */
        public static extend(factories : core.IterableDifferFactory[]) : any;

        public find(iterable : any) : core.IterableDifferFactory;
    }
}
declare namespace core {}
declare namespace core {
    export class NgZone {
        public static isInAngularZone() : boolean;

        public static assertInAngularZone();

        public static assertNotInAngularZone();

        /**
         * Notifies when code enters Angular Zone. This gets fired first on VM Turn.
         */
        public onUnstable : core.EventEmitter<any>;

        /**
         * Notifies when there is no more microtasks enqueue in the current VM Turn.
         * This is a hint for Angular to do change detection, which may enqueue more
         * microtasks. For this reason this event can fire multiple times per VM
         * Turn.
         */
        public onMicrotaskEmpty : core.EventEmitter<any>;

        /**
         * Notifies when the last `onMicrotaskEmpty` has run and there are no more
         * microtasks, which implies we are about to relinquish VM turn. This event
         * gets called just once.
         */
        public onStable : core.EventEmitter<any>;

        /**
         * Notify that an error has been delivered.
         */
        public onError : core.EventEmitter<any>;

        /**
         * Whether there are no outstanding microtasks or microtasks.
         */
        public isStable : boolean;

        /**
         * Whether there are any outstanding microtasks.
         */
        public hasPendingMicrotasks : boolean;

        /**
         * Whether there are any outstanding microtasks.
         */
        public hasPendingMacrotasks : boolean;

        /**
         * Executes the `fn` function synchronously within the Angular zone and
         * returns value returned by the function.
         * 
         * Running functions via `run` allows you to reenter Angular zone from a
         * task that was executed outside of the Angular zone (typically started via
         * {@link #runOutsideAngular}).
         * 
         * Any future tasks or microtasks scheduled from within this function will
         * continue executing from within the Angular zone.
         * 
         * If a synchronous error happens it will be rethrown and not reported via
         * `onError`.
         * @param {*} fn
         * @return {*}
         */
        public run(fn : () => any) : any;

        /**
         * Same as #run, except that synchronous errors are caught and forwarded via
         * `onError` and not rethrown.
         * @param {*} fn
         * @return {*}
         */
        public runGuarded(fn : () => any) : any;

        /**
         * Executes the `fn` function synchronously in Angular's parent zone and
         * returns value returned by the function.
         * 
         * Running functions via `runOutsideAngular` allows you to escape Angular's
         * zone and do work that doesn't trigger Angular change-detection or is
         * subject to Angular's error handling.
         * 
         * Any future tasks or microtasks scheduled from within this function will
         * continue executing from outside of the Angular zone.
         * 
         * Use {@link #run} to reenter the Angular zone and do work that updates the
         * application model.
         * @param {*} fn
         * @return {*}
         */
        public runOutsideAngular(fn : () => any) : any;
    }
}
declare namespace core {}
declare namespace core {
    export class QueryList<T> {
        public changes : any;

        public length : number;

        public first : T;

        public last : T;

        /**
         * See [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/
         * Reference/Global_Objects/Array/map)
         * @param {*} fn
         * @return {Array}
         */
        public map<U>(fn : (p1: T, p2: number, p3: T[]) => U) : U[];

        /**
         * See
         * [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/
         * Reference/Global_Objects/Array/filter)
         * @param {*} fn
         * @return {Array}
         */
        public filter(fn : (p1: T, p2: number, p3: T[]) => boolean) : T[];

        /**
         * See
         * [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/
         * Reference/Global_Objects/Array/reduce)
         * @param {*} fn
         * @param {*} init
         * @return {*}
         */
        public reduce<U>(fn : QueryList.Function4<U, T, number, T[], U>, init : U) : U;

        /**
         * See
         * [Array.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/
         * Reference/Global_Objects/Array/forEach)
         * @param {*} fn
         */
        public forEach(fn : (p1: T, p2: number, p3: T[]) => void);

        /**
         * See [Array.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/
         * Reference/Global_Objects/Array/some)
         * @param {*} fn
         * @return {boolean}
         */
        public some(fn : (p1: T, p2: number, p3: T[]) => boolean) : boolean;

        public toArray() : T[];

        public toString() : string;

        public reset(res : Array<any>);

        public notifyOnChanges();
    }

    export namespace QueryList {

        export interface Function4<T1, T2, T3, T4, R> {
            (p1 : T1, p2 : T2, p3 : T3, p4 : T4) : R;
        }
    }

}
declare namespace core {
    export class Renderer {
        public selectRootElement(selectorOrNode : string) : any;

        public selectRootElement(selectorOrNode : any) : any;

        public createElement(parentElement : any, name : string) : any;

        public createViewRoot(hostElement : any) : any;

        public createTemplateAnchor(parentElement : any) : any;

        public createText(parentElement : any, value : string) : any;

        public projectNodes(parentElement : any, nodes : any[]);

        public attachViewAfter(node : any, viewRootNodes : any[]);

        public detachView(viewRootNodes : any[]);

        public destroyView(hostElement : any, viewAllNodes : any[]);

        public listen(renderElement : any, name : string, callback : Function) : Function;

        public listenGlobal(target : string, name : string, callback : Function) : Function;

        public setElementProperty(renderElement : any, propertyName : string, propertyValue : any);

        public setElementAttribute(renderElement : any, attributeName : string, attributeValue : string);

        /**
         * Used only in debug mode to serialize property changes to dom nodes as
         * attributes.
         * @param {*} renderElement
         * @param {string} propertyName
         * @param {string} propertyValue
         */
        public setBindingDebugInfo(renderElement : any, propertyName : string, propertyValue : string);

        public setElementClass(renderElement : any, className : string, isAdd : boolean);

        public setElementStyle(renderElement : any, styleName : string, styleValue : string);

        public invokeElementMethod(renderElement : any, methodName : string, args : any[]);

        public invokeElementMethod(renderElement : any, methodName : string);

        public setText(renderNode : any, text : string);
    }
}
declare namespace core {
    export class SimpleChange {
        public previousValue : any;

        public currentValue : any;

        public constructor(previousValue : any, currentValue : any);

        public isFirstChange() : boolean;
    }
}
declare namespace core {
    export class TemplateRef<C> {
        /**
         * The location in the View where the Embedded View logically belongs to.
         * 
         * The data-binding and injection contexts of Embedded Views created from
         * this `TemplateRef` inherit from the contexts of this location.
         * 
         * Typically new Embedded Views are attached to the View Container of this
         * location, but in advanced use-cases, the View can be attached to a
         * different container while keeping the data-binding and injection context
         * from the original location.
         */
        public elementRef : core.ElementRef;
    }
}
declare namespace core {
    export class Type<T> {    }
}
declare namespace core {
    export class ViewContainerRef {
        /**
         * Anchor element that specifies the location of this container in the
         * containing View. <!-- TODO: rename to anchorElement -->
         */
        public element : core.ElementRef;

        /**
         * Destroys all Views in this container.
         */
        public clear();

        /**
         * Returns the {@link ViewRef} for the View located in this container at the
         * specified index.
         * @param {number} index
         * @return {core.ViewRef}
         */
        public get(index : number) : core.ViewRef;

        /**
         * Returns the number of Views currently attached to this container.
         */
        public length : number;

        /**
         * Inserts a View identified by a {@link ViewRef} into the container at the
         * specified `index`.
         * 
         * If `index` is not specified, the new View will be inserted as the last
         * View in the container.
         * 
         * Returns the inserted {@link ViewRef}.
         * @param {core.ViewRef} viewRef
         * @param {number} index
         * @return {core.ViewRef}
         */
        public insert(viewRef : core.ViewRef, index : number) : core.ViewRef;

        /**
         * Inserts a View identified by a {@link ViewRef} into the container at the
         * specified `index`.
         * 
         * If `index` is not specified, the new View will be inserted as the last
         * View in the container.
         * 
         * Returns the inserted {@link ViewRef}.
         * @param {core.ViewRef} viewRef
         * @return {core.ViewRef}
         */
        public insert(viewRef : core.ViewRef) : core.ViewRef;

        /**
         * Moves a View identified by a {@link ViewRef} into the container at the
         * specified `index`.
         * 
         * Returns the inserted {@link ViewRef}.
         * @param {core.ViewRef} viewRef
         * @param {number} currentIndex
         * @return {core.ViewRef}
         */
        public move(viewRef : core.ViewRef, currentIndex : number) : core.ViewRef;

        /**
         * Returns the index of the View, specified via {@link ViewRef}, within the
         * current container or `-1` if this container doesn't contain the View.
         * @param {core.ViewRef} viewRef
         * @return {number}
         */
        public indexOf(viewRef : core.ViewRef) : number;

        /**
         * Destroys a View attached to this container at the specified `index`.
         * 
         * If `index` is not specified, the last View in the container will be
         * removed.
         * @param {number} index
         */
        public remove(index : number);

        /**
         * Destroys a View attached to this container at the specified `index`.
         * 
         * If `index` is not specified, the last View in the container will be
         * removed.
         */
        public remove();

        /**
         * Use along with {@link #insert} to move a View within the current
         * container.
         * 
         * If the `index` param is omitted, the last {@link ViewRef} is detached.
         * @param {number} index
         * @return {core.ViewRef}
         */
        public detach(index : number) : core.ViewRef;

        /**
         * Use along with {@link #insert} to move a View within the current
         * container.
         * 
         * If the `index` param is omitted, the last {@link ViewRef} is detached.
         * @return {core.ViewRef}
         */
        public detach() : core.ViewRef;
    }
}
declare namespace core {
    export class ViewRef {    }
}
declare namespace forms {
    export class FormsModule {    }
}
declare namespace forms {}
declare namespace http {
    /**
     * HTTP request body used by both {@link Request} and {@link Response}
     * https://fetch.spec.whatwg.org/#body
     * @class
     */
    export class Body {
        /**
         * Attempts to return body as parsed `JSON` object, or raises an exception.
         * @return {*}
         */
        public json() : any;

        /**
         * Returns the body as a string, presuming `toString()` can be called on the
         * response body.
         * @return {string}
         */
        public text() : string;

        /**
         * Return the body as an ArrayBuffer
         * @return {ArrayBuffer}
         */
        public arrayBuffer() : ArrayBuffer;

        /**
         * Returns the request's body as a Blob, assuming that body exists.
         * @return {Blob}
         */
        public blob() : Blob;
    }
}
declare namespace http {
    /**
     * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
     * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
     * 
     * The only known difference between this `Headers` implementation and the spec is the
     * lack of an `entries` method.
     * 
     * ### Example ([live demo](http://plnkr.co/edit/MTdwT6?p=preview))
     * 
     * ```
     * import {Headers} from '@angular/http';
     * 
     * var firstHeaders = new Headers();
     * firstHeaders.append('Content-Type', 'image/jpeg');
     * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
     * 
     * // Create headers from Plain Old JavaScript Object
     * var secondHeaders = new Headers({
     * 'X-My-Custom-Header': 'Angular'
     * });
     * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
     * 
     * var thirdHeaders = new Headers(secondHeaders);
     * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
     * ```
     * 
     * @experimental
     * @param {http.Headers} headers
     * @class
     */
    export class Headers {
        public constructor();

        public constructor(headers : Headers);

        public constructor(headers : any);

        /**
         * Returns a new Headers instance from the given DOMString of Response Headers
         * @param {string} headersString
         * @return {http.Headers}
         */
        public static fromResponseHeaderString(headersString : string) : Headers;

        /**
         * Appends a header to existing list of header values for a given header name.
         * @param {string} name
         * @param {string} value
         */
        public append(name : string, value : string);

        /**
         * Deletes all header values for the given name.
         * @param {string} name
         */
        public delete(name : string);

        /**
         * Returns first header that matches given name.
         * @param {string} header
         * @return {string}
         */
        public get(header : string) : string;

        /**
         * Check for existence of header by given name.
         * @param {string} header
         * @return {boolean}
         */
        public has(header : string) : boolean;

        /**
         * Provides names of set headers
         * @return {Array}
         */
        public keys() : string[];

        /**
         * Sets or overrides header value for given name.
         * @param {string} header
         * @param {string} value
         */
        public set(header : string, value : string);

        public set(header : string, value : string[]);

        /**
         * Returns values of all headers.
         * @return {Array}
         */
        public values() : string[][];

        /**
         * Returns string of all headers.
         * @return {*}
         */
        public toJSON() : any;

        /**
         * Returns list of header values for a given name.
         * @param {string} header
         * @return {Array}
         */
        public getAll(header : string) : string[];
    }

    export namespace Headers {

        export class HeaderValue {
            public constructor(name : string, value : string);
        }
    }

}
declare namespace http {
    export class Http {
        public request(url : string) : rxjs.Observable<http.Response>;

        public request(url : string, options : http.RequestOptionsArgs) : rxjs.Observable<http.Response>;

        public request(url : http.Request) : rxjs.Observable<http.Response>;

        public request(url : http.Request, options : http.RequestOptionsArgs) : rxjs.Observable<http.Response>;

        /**
         * Performs a request with `get` http method.
         * @param {string} url
         * @param {http.RequestOptionsArgs} options
         * @return {rxjs.Observable}
         */
        public get(url : string, options : http.RequestOptionsArgs) : rxjs.Observable<http.Response>;

        /**
         * Performs a request with `get` http method.
         * @param {string} url
         * @return {rxjs.Observable}
         */
        public get(url : string) : rxjs.Observable<http.Response>;

        /**
         * Performs a request with `post` http method.
         * @param {string} url
         * @param {*} body
         * @param {http.RequestOptionsArgs} options
         * @return {rxjs.Observable}
         */
        public post(url : string, body : any, options : http.RequestOptionsArgs) : rxjs.Observable<http.Response>;

        /**
         * Performs a request with `post` http method.
         * @param {string} url
         * @param {*} body
         * @return {rxjs.Observable}
         */
        public post(url : string, body : any) : rxjs.Observable<http.Response>;

        /**
         * Performs a request with `put` http method.
         * @param {string} url
         * @param {*} body
         * @param {http.RequestOptionsArgs} options
         * @return {rxjs.Observable}
         */
        public put(url : string, body : any, options : http.RequestOptionsArgs) : rxjs.Observable<http.Response>;

        /**
         * Performs a request with `put` http method.
         * @param {string} url
         * @param {*} body
         * @return {rxjs.Observable}
         */
        public put(url : string, body : any) : rxjs.Observable<http.Response>;

        /**
         * Performs a request with `delete` http method.
         * @param {string} url
         * @param {http.RequestOptionsArgs} options
         * @return {rxjs.Observable}
         */
        public delete(url : string, options : http.RequestOptionsArgs) : rxjs.Observable<http.Response>;

        /**
         * Performs a request with `delete` http method.
         * @param {string} url
         * @return {rxjs.Observable}
         */
        public delete(url : string) : rxjs.Observable<http.Response>;

        /**
         * Performs a request with `patch` http method.
         * @param {string} url
         * @param {*} body
         * @param {http.RequestOptionsArgs} options
         * @return {rxjs.Observable}
         */
        public patch(url : string, body : any, options : http.RequestOptionsArgs) : rxjs.Observable<http.Response>;

        /**
         * Performs a request with `patch` http method.
         * @param {string} url
         * @param {*} body
         * @return {rxjs.Observable}
         */
        public patch(url : string, body : any) : rxjs.Observable<http.Response>;

        /**
         * Performs a request with `head` http method.
         * @param {string} url
         * @param {http.RequestOptionsArgs} options
         * @return {rxjs.Observable}
         */
        public head(url : string, options : http.RequestOptionsArgs) : rxjs.Observable<http.Response>;

        /**
         * Performs a request with `head` http method.
         * @param {string} url
         * @return {rxjs.Observable}
         */
        public head(url : string) : rxjs.Observable<http.Response>;

        /**
         * Performs a request with `options` http method.
         * @param {string} url
         * @param {http.RequestOptionsArgs} options
         * @return {rxjs.Observable}
         */
        public options(url : string, options : http.RequestOptionsArgs) : rxjs.Observable<http.Response>;

        /**
         * Performs a request with `options` http method.
         * @param {string} url
         * @return {rxjs.Observable}
         */
        public options(url : string) : rxjs.Observable<http.Response>;
    }
}
declare namespace http {
    export class HttpModule {    }
}
declare namespace http {}
declare namespace http {
    export class Request extends http.Body {    }
}
declare namespace http {
    /**
     * Creates a request options object to be optionally provided when instantiating a
     * {@link Request}.
     * <p>
     * This class is based on the `RequestInit` description in the [Fetch
     * Spec](https://fetch.spec.whatwg.org/#requestinit).
     * <p>
     * All values are null by default. Typical defaults can be found in the {@link BaseRequestOptions}
     * class, which sub-classes `RequestOptions`.
     * <p>
     * ### Example ([live demo](http://plnkr.co/edit/7Wvi3lfLq41aQPKlxB4O?p=preview))
     * <p>
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '@angular/http';
     * <p>
     * var options = new RequestOptions({
     * method: RequestMethod.Post,
     * url: 'https://google.com'
     * });
     * var req = new Request(options);
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // https://google.com
     * ```
     * 
     * @experimental
     * @param {http.RequestOptionsArgs} args
     * @class
     */
    export class RequestOptions {
        /**
         * Http method with which to execute a {@link Request}.
         * Acceptable methods are defined in the {@link RequestMethod} enum.
         */
        reuqestMethod : string;

        /**
         * {@link Headers} to be attached to a {@link Request}.
         */
        headers : http.Headers;

        /**
         * Body to be used when creating a {@link Request}.
         */
        body : any;

        /**
         * Url with which to perform a {@link Request}.
         */
        url : string;

        /**
         * Enable use credentials for a {@link Request}.
         */
        withCredentials : boolean;

        public constructor(args : http.RequestOptionsArgs);
    }
}
declare namespace http {
    /**
     * Interface for options to construct a RequestOptions, based on
     * [RequestInit](https://fetch.spec.whatwg.org/#requestinit) from the Fetch spec.
     * 
     * @experimental
     * @param {string} url
     * @param {string} method
     * @param {string} search
     * @param {http.Headers} headers
     * @param {http.Body} body
     * @param {boolean} withCredentials
     * @class
     */
    export class RequestOptionsArgs {
        public constructor(headers : http.Headers);

        public constructor(url : string, method : string, search : string, headers : http.Headers, body : http.Body, withCredentials : boolean);

        url : string;

        method : string;

        search : string;

        headers : http.Headers;

        body : http.Body;

        withCredentials : boolean;
    }
}
declare namespace http {
    export class Response extends http.Body {    }
}
declare namespace platform_browser {
    export class BrowserModule {    }
}
declare namespace platform_browser {
    export class DomSanitizer {    }
}
declare namespace platform_browser {
    export function platformBrowserDynamic() : platform_browser.BrowserModule;

}
declare namespace platform_browser {}
declare namespace platform_browser_dynamic {
    export function platformBrowserDynamic() : platform_browser_dynamic.PlatformBrowserDynamic;

}
declare namespace platform_browser_dynamic {}
declare namespace platform_browser_dynamic {
    export class PlatformBrowserDynamic {
        public bootstrapModule(module : any);
    }
}
declare namespace router {
    export interface ErrorHandler {
        (error : any) : any;
    }
}
declare namespace router {}
declare namespace router {
    export interface Route {
        path? : string;

        pathMatch? : string;

        component? : core.Type<any>;

        redirectTo? : string;

        outlet? : string;

        canActivate? : any[];

        canActivateChild? : any[];

        canDeactivate? : any[];

        canLoad? : any[];

        data? : any;

        resolve? : any;

        children? : Route[];

        loadChildren? : any;
    }
}
declare namespace router {
    export class Router {
        public config : router.Route[];

        public errorHandler : router.ErrorHandler;

        /**
         * Indicates if at least one navigation happened.
         * 
         * @stable
         */
        public navigated : boolean;

        /**
         * Sets up the location change listener and performs the inital navigation
         */
        public initialNavigation();

        /**
         * Sets up the location change listener
         */
        public setUpLocationChangeListener();

        /**
         * Returns the current route state.
         */
        public routerState : any;

        /**
         * Returns the current url.
         */
        public url : string;

        /**
         * Returns an observable of route events
         */
        public events : any;

        /**
         * Resets the configuration used for navigation and generating links.
         * 
         * ### Usage
         * 
         * ``` router.resetConfig([ { path: 'team/:id', component: TeamCmp,
         * children: [ { path: 'simple', component: SimpleCmp }, { path:
         * 'user/:name', component: UserCmp } ] } ]); ```
         * @param {Array} config
         */
        public resetConfig(config : router.Route[]);

        public ngOnDestroy();

        /**
         * Disposes of the router.
         */
        public dispose();
    }
}


declare module "@angular/http" {
    export = http;
}

declare module "@angular/router" {
    export = router;
}

declare module "@angular/platform-browser" {
    export = platform_browser;
}

declare module "@angular/platform-browser-dynamic" {
    export = platform_browser_dynamic;
}

declare module "@angular/common" {
    export = common;
}

declare module "@angular/forms" {
    export = forms;
}

declare module "@angular/core" {
    export = core;
}
