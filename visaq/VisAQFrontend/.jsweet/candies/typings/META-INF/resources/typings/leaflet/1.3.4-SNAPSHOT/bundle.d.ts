/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
declare namespace L {
    export interface BaseIconOptions extends L.LayerOptions {
        iconUrl? : string;

        iconRetinaUrl? : string;

        iconSize? : ((L.Point)|([number,number]));

        iconAnchor? : ((L.Point)|([number,number]));

        popupAnchor? : ((L.Point)|([number,number]));

        tooltipAnchor? : ((L.Point)|([number,number]));

        shadowUrl? : string;

        shadowRetinaUrl? : string;

        shadowSize? : ((L.Point)|([number,number]));

        shadowAnchor? : ((L.Point)|([number,number]));

        className? : string;
    }
}
declare namespace L {
    export class Bounds {
        public constructor(topLeft : L.Point, bottomRight : L.Point);

        public constructor(points : L.Point[]);

        public extend(point : L.Point) : Bounds;

        public getCenter(round : boolean) : L.Point;

        public getBottomLeft() : L.Point;

        public getTopRight() : L.Point;

        public getSize() : L.Point;

        public contains(pointOrBounds : any) : boolean;

        public intersects(otherBounds : Bounds) : boolean;

        public overlaps(otherBounds : Bounds) : boolean;

        public min : L.Point;

        public max : L.Point;

        public getCenter() : L.Point;

        public constructor(topLeft : L.Point, bottomRight : [number,number]);

        public constructor(topLeft : [number,number], bottomRight : L.Point);

        public constructor(topLeft : [number,number], bottomRight : [number,number]);

        public constructor(points : [[number,number],[number,number]]);

        public extend(point : [number,number]) : Bounds;

        public intersects(otherBounds : [[number,number],[number,number]]) : boolean;

        public overlaps(otherBounds : [[number,number],[number,number]]) : boolean;

        constructor();
    }
}
declare namespace L.Browser {}
declare namespace L {
    /**
     * Utility class.
     * @extends Object
     * @class
     */
    export class Browser {
        constructor();

        public static ie : boolean;

        public static ielt9 : boolean;

        public static edge : boolean;

        public static webkit : boolean;

        public static gecko : boolean;

        public static android : boolean;

        public static android23 : boolean;

        public static chrome : boolean;

        public static safari : boolean;

        public static win : boolean;

        public static ie3d : boolean;

        public static webkit3d : boolean;

        public static gecko3d : boolean;

        public static opera12 : boolean;

        public static any3d : boolean;

        public static mobile : boolean;

        public static mobileWebkit : boolean;

        public static mobileWebkit3d : boolean;

        public static mobileOpera : boolean;

        public static mobileGecko : boolean;

        public static touch : boolean;

        public static msPointer : boolean;

        public static pointer : boolean;

        public static retina : boolean;

        public static canvas : boolean;

        public static vml : boolean;

        public static svg : boolean;
    }
}
declare namespace L {
    export class Canvas extends L.Renderer {    }
}
declare namespace L {
    export class Circle<P> extends L.CircleMarker<P> {
        public constructor(latlng : L.LatLng, options : L.CircleMarkerOptions);

        public constructor(latlng : L.LatLng, radius : number, options : L.CircleMarkerOptions);

        public getBounds() : L.LatLngBounds;

        public constructor(latlng : L.LatLng);

        public constructor(latlng : L.LatLng, radius : number);

        public constructor(latlng : L.LatLngLiteral, options : L.CircleMarkerOptions);

        public constructor(latlng : [number,number], options : L.CircleMarkerOptions);

        public constructor(latlng : L.LatLngLiteral, radius : number, options : L.CircleMarkerOptions);

        public constructor(latlng : [number,number], radius : number, options : L.CircleMarkerOptions);

        public constructor(latlng : [number,number]);

        public constructor(latlng : L.LatLngLiteral);

        public constructor(latlng : [number,number], radius : number);

        public constructor(latlng : L.LatLngLiteral, radius : number);

        constructor();
    }
}
declare namespace L {
    export class CircleMarker<P> extends L.Path {
        public constructor(latlng : L.LatLng, options : L.CircleMarkerOptions);

        public toGeoJSON() : GeoJSON.Feature;

        public setLatLng(latLng : L.LatLng) : CircleMarker<any>;

        public getLatLng() : L.LatLng;

        public setRadius(radius : number) : CircleMarker<any>;

        public getRadius() : number;

        public options : L.CircleMarkerOptions;

        public feature : GeoJSON.Feature;

        public constructor(latlng : L.LatLng);

        public constructor(latlng : [number,number], options : L.CircleMarkerOptions);

        public constructor(latlng : L.LatLngLiteral, options : L.CircleMarkerOptions);

        public setLatLng(latLng : L.LatLngLiteral) : CircleMarker<any>;

        public setLatLng(latLng : [number,number]) : CircleMarker<any>;

        public constructor(latlng : L.LatLngLiteral);

        public constructor(latlng : [number,number]);

        constructor();
    }
}
declare namespace L {
    export interface CircleMarkerOptions extends L.PathOptions {
        radius? : number;
    }
}
declare namespace L {
    export class Class {
        public static extend(props : any) : ((any)|(Class));

        public static include(props : any) : ((any)|(Class));

        public static mergeOptions(props : any) : ((any)|(Class));

        public static addInitHook(initHookFn : () => void) : ((any)|(Class));

        public static addInitHook(methodName : string, ...args : any[]) : ((any)|(Class));
    }
}
declare namespace L.control {
    export class Attribution extends L.Control {
        public constructor(options : L.control.AttributionOptions);

        public setPrefix(prefix : string) : Attribution;

        public addAttribution(text : string) : Attribution;

        public removeAttribution(text : string) : Attribution;

        public options : L.control.AttributionOptions;

        public constructor();
    }
}
declare namespace L.control {
    export interface AttributionOptions extends L.ControlOptions {
        prefix? : ((string)|(boolean));
    }
}
declare namespace L.control {
    export function zoom(options : L.control.ZoomOptions) : L.control.Zoom;

    export function attribution(options : L.control.AttributionOptions) : L.control.Attribution;

    export function layers(baseLayers : L.control.LayersObject, overlays : L.control.LayersObject, options : L.control.LayersOptions) : L.control.Layers;

    export function scale(options : L.control.ScaleOptions) : L.control.Scale;

    export function zoom() : L.control.Zoom;

    export function attribution() : L.control.Attribution;

    export function layers(baseLayers : L.control.LayersObject, overlays : L.control.LayersObject) : L.control.Layers;

    export function layers(baseLayers : L.control.LayersObject) : L.control.Layers;

    export function layers() : L.control.Layers;

    export function scale() : L.control.Scale;

}
declare namespace L.control {
    export class Layers extends L.Control {
        public constructor(baseLayers : L.control.LayersObject, overlays : L.control.LayersObject, options : L.control.LayersOptions);

        public addBaseLayer(layer : L.Layer, name : string) : Layers;

        public addOverlay(layer : L.Layer, name : string) : Layers;

        public removeLayer(layer : L.Layer) : Layers;

        public expand() : Layers;

        public collapse() : Layers;

        public options : L.control.LayersOptions;

        public constructor(baseLayers : L.control.LayersObject, overlays : L.control.LayersObject);

        public constructor(baseLayers : L.control.LayersObject);

        public constructor();
    }
}
declare namespace L.control {
    export interface LayersObject {
        [name : string]: L.Layer;
    }
}
declare namespace L.control {
    export interface LayersOptions extends L.ControlOptions {
        collapsed? : boolean;

        autoZIndex? : boolean;

        hideSingleBase? : boolean;
    }
}
declare namespace L.control {}
declare namespace L.control {
    export class Scale extends L.Control {
        public constructor(options : L.control.ScaleOptions);

        public options : L.control.ScaleOptions;

        public constructor();
    }
}
declare namespace L.control {
    export interface ScaleOptions extends L.ControlOptions {
        maxWidth? : number;

        metric? : boolean;

        imperial? : boolean;

        updateWhenIdle? : boolean;
    }
}
declare namespace L.control {
    export class Zoom extends L.Control {
        public constructor(options : L.control.ZoomOptions);

        public options : L.control.ZoomOptions;

        public constructor();
    }
}
declare namespace L.control {
    export interface ZoomOptions extends L.ControlOptions {
        zoomInText? : string;

        zoomInTitle? : string;

        zoomOutText? : string;

        zoomOutTitle? : string;
    }
}
declare namespace L {
    export class Control extends L.Class {
        public constructor(options : L.ControlOptions);

        public getPosition() : any;

        public setPosition(position : any) : Control;

        public getContainer() : HTMLElement;

        public addTo(map : L.Map) : Control;

        public remove() : Control;

        public onAdd(map : L.Map) : HTMLElement;

        public onRemove(map : L.Map);

        public options : L.ControlOptions;

        public constructor();
    }
}
declare namespace L {
    export interface ControlOptions {
        position? : any;
    }
}
declare namespace L {
    export interface Coords extends L.Point {
        z : number;
    }
}
declare namespace L {}
declare namespace L {}
declare namespace L {
    export interface CRS {
        latLngToPoint(latlng : L.LatLng, zoom : number) : L.Point;

        pointToLatLng(point : L.Point, zoom : number) : L.LatLng;

        project(latlng : L.LatLng) : L.Point;

        unproject(point : L.Point) : L.LatLng;

        scale(zoom : number) : number;

        zoom(scale : number) : number;

        getProjectedBounds(zoom : number) : L.Bounds;

        distance(latlng1 : L.LatLng, latlng2 : L.LatLng) : number;

        wrapLatLng(latlng : L.LatLng) : L.LatLng;

        code? : string;

        wrapLng? : [number,number];

        wrapLat? : [number,number];

        infinite : boolean;

        latLngToPoint(latlng : L.LatLngLiteral, zoom : number) : L.Point;

        latLngToPoint(latlng : [number,number], zoom : number) : L.Point;

        pointToLatLng(point : [number,number], zoom : number) : L.LatLng;

        project(latlng : L.LatLngLiteral) : L.Point;

        unproject(point : [number,number]) : L.LatLng;

        distance(latlng1 : L.LatLngLiteral, latlng2 : L.LatLngLiteral) : number;

        distance(latlng1 : L.LatLng, latlng2 : [number,number]) : number;

        distance(latlng1 : [number,number], latlng2 : [number,number]) : number;

        distance(latlng1 : [number,number], latlng2 : L.LatLngLiteral) : number;

        distance(latlng1 : [number,number], latlng2 : L.LatLng) : number;

        distance(latlng1 : L.LatLng, latlng2 : L.LatLngLiteral) : number;

        distance(latlng1 : L.LatLngLiteral, latlng2 : [number,number]) : number;

        distance(latlng1 : L.LatLngLiteral, latlng2 : L.LatLng) : number;

        wrapLatLng(latlng : L.LatLngLiteral) : L.LatLng;
    }

    export namespace CRS {

        export var EPSG3395 : CRS;

        export var EPSG3857 : CRS;

        export var EPSG4326 : CRS;

        export var Earth : CRS;

        export var Simple : CRS;
    }

}
declare namespace L {
    export interface DefaultMapPanes {
        mapPane : HTMLElement;

        tilePane : HTMLElement;

        overlayPane : HTMLElement;

        shadowPane : HTMLElement;

        markerPane : HTMLElement;

        tooltipPane : HTMLElement;

        popupPane : HTMLElement;
    }
}
declare namespace L {
    export class DivIcon extends L.Icon<L.DivIconOptions> {
        public constructor(options : L.DivIconOptions);

        public constructor();
    }
}
declare namespace L {
    export interface DivIconOptions extends L.BaseIconOptions {
        html? : ((string)|(boolean));

        bgPos? : ((L.Point)|([number,number]));

        iconSize? : ((L.Point)|([number,number]));

        iconAnchor? : ((L.Point)|([number,number]));

        popupAnchor? : ((L.Point)|([number,number]));

        className? : string;
    }
}
declare namespace L {
    export interface DivOverlayOptions {
        offset? : ((L.Point)|([number,number]));

        zoomAnimation? : boolean;

        className? : string;

        pane? : string;
    }
}
declare namespace L.DomEvent {}
declare namespace L.DomEvent {
    export function on(el : HTMLElement, types : string, fn : (p1: Event) => void, context : any);

    export function on(el : HTMLElement, eventMap : any, context : any);

    export function off(el : HTMLElement, types : string, fn : (p1: Event) => void, context : any);

    export function off(el : HTMLElement, eventMap : any, context : any);

    export function stopPropagation(ev : Event);

    export function disableScrollPropagation(el : HTMLElement);

    export function disableClickPropagation(el : HTMLElement);

    export function preventDefault(ev : Event);

    export function stop(ev : Event);

    export function getMousePosition(ev : MouseEvent, container : HTMLElement) : L.Point;

    export function getWheelDelta(ev : Event) : number;

    export function addListener(el : HTMLElement, types : string, fn : (p1: Event) => void, context : any);

    export function addListener(el : HTMLElement, eventMap : any, context : any);

    export function removeListener(el : HTMLElement, types : string, fn : (p1: Event) => void, context : any);

    export function removeListener(el : HTMLElement, eventMap : any, context : any);

    export function on(el : HTMLElement, types : string, fn : (p1: Event) => void);

    export function on(el : HTMLElement, eventMap : any);

    export function off(el : HTMLElement, types : string, fn : (p1: Event) => void);

    export function off(el : HTMLElement, eventMap : any);

    export function getMousePosition(ev : MouseEvent) : L.Point;

    export function addListener(el : HTMLElement, types : string, fn : (p1: Event) => void);

    export function addListener(el : HTMLElement, eventMap : any);

    export function removeListener(el : HTMLElement, types : string, fn : (p1: Event) => void);

    export function removeListener(el : HTMLElement, eventMap : any);

}
declare namespace L.DomEvent {}
declare namespace L.DomUtil {}
declare namespace L {
    /**
     * Utility class.
     * @extends Object
     * @class
     */
    export class DomUtil {
        constructor();

        /**
         * Get Element by its ID or with the given HTML-Element
         * @param {string} element
         * @return {HTMLElement}
         */
        public static get(element : string) : HTMLElement;

        public static getStyle(el : HTMLElement, styleAttrib : string) : string;

        public static create(tagName : string, className : string, container : HTMLElement) : HTMLElement;

        public static remove(el : HTMLElement);

        public static empty(el : HTMLElement);

        public static toFront(el : HTMLElement);

        public static toBack(el : HTMLElement);

        public static hasClass(el : HTMLElement, name : string) : boolean;

        public static addClass(el : HTMLElement, name : string);

        public static removeClass(el : HTMLElement, name : string);

        public static setClass(el : HTMLElement, name : string);

        public static getClass(el : HTMLElement) : string;

        public static setOpacity(el : HTMLElement, opacity : number);

        public static testProp(props : string[]) : string;

        public static setTransform(el : HTMLElement, offset : L.Point, scale : number);

        public static setPosition(el : HTMLElement, position : L.Point);

        public static getPosition(el : HTMLElement) : L.Point;

        public static disableTextSelection();

        public static enableTextSelection();

        public static disableImageDrag();

        public static enableImageDrag();

        public static preventOutline(el : HTMLElement);

        public static restoreOutline();

        public static TRANSFORM : string;

        public static TRANSITION : string;

        public static TRANSITION_END : string;

        public static create(tagName : string, className : string) : HTMLElement;

        public static create(tagName : string) : HTMLElement;

        public static setTransform(el : HTMLElement, offset : L.Point);

        /**
         * Get Element by its ID or with the given HTML-Element
         * @param {HTMLElement} element
         * @return {HTMLElement}
         */
        public static get(element : HTMLElement) : HTMLElement;
    }
}
declare namespace L {
    export interface DragEndEvent extends L.LeafletEvent {
        distance : number;
    }
}
declare namespace L {
    /**
     * A class for making DOM elements draggable (including touch support).
     * Used internally for map and marker dragging. Only works for elements
     * that were positioned with [`L.DomUtil.setPosition`](#domutil-setposition).
     * @param {HTMLElement} element
     * @param {HTMLElement} dragStartTarget
     * @param {boolean} preventOutline
     * @class
     * @extends L.Evented
     */
    export class Draggable extends L.Evented {
        public constructor(element : HTMLElement, dragStartTarget : HTMLElement, preventOutline : boolean);

        public enable();

        public disable();

        public finishDrag();

        public constructor(element : HTMLElement, dragStartTarget : HTMLElement);

        public constructor(element : HTMLElement);

        constructor();
    }
}
declare namespace L {
    export interface ErrorEvent extends L.LeafletEvent {
        message : string;

        code : number;
    }
}
declare namespace L {
    /**
     * A set of methods shared between event-powered classes (like Map and Marker).
     * Generally, events allow you to execute some function when something happens
     * with an object (e.g. the user clicks on the map, causing the map to fire
     * 'click' event).
     * @class
     * @extends L.Class
     */
    export class Evented extends L.Class {
        /**
         * Adds a listener function (fn) to a particular event type of the object.
         * You can optionally specify the context of the listener (object the this
         * keyword will point to). You can also pass several space-separated types
         * (e.g. 'click dblclick').
         * @param {string} type
         * @param {*} fn
         * @param {*} context
         * @return {L.Evented}
         */
        public on(type : string, fn : (p1: L.LeafletEvent) => void, context : any) : Evented;

        /**
         * Adds a set of type/listener pairs, e.g. {click: onClick, mousemove: onMouseMove}
         * @param {*} eventMap
         * @return {L.Evented}
         */
        public on(eventMap : L.LeafletEventHandlerFnMap) : Evented;

        /**
         * Removes a previously added listener function. If no function is specified,
         * it will remove all the listeners of that particular event from the object.
         * Note that if you passed a custom context to on, you must pass the same context
         * to off in order to remove the listener.
         * @param {string} type
         * @param {*} fn
         * @param {*} context
         * @return {L.Evented}
         */
        public off(type : string, fn : (p1: L.LeafletEvent) => void, context : any) : Evented;

        /**
         * Removes a set of type/listener pairs.
         * @param {*} eventMap
         * @return {L.Evented}
         */
        public off(eventMap : L.LeafletEventHandlerFnMap) : Evented;

        /**
         * Removes all listeners to all events on the object.
         * @return {L.Evented}
         */
        public off() : Evented;

        /**
         * Fires an event of the specified type. You can optionally provide a data
         * object — the first argument of the listener function will contain its properties.
         * The event might can optionally be propagated to event parents.
         * @param {string} type
         * @param {*} data
         * @param {boolean} propagate
         * @return {L.Evented}
         */
        public fire(type : string, data : any, propagate : boolean) : Evented;

        /**
         * Returns true if a particular event type has any listeners attached to it.
         * @param {string} type
         * @return {boolean}
         */
        public listens(type : string) : boolean;

        /**
         * Behaves as on(...), except the listener will only get fired once and then removed.
         * @param {string} type
         * @param {*} fn
         * @param {*} context
         * @return {L.Evented}
         */
        public once(type : string, fn : (p1: L.LeafletEvent) => void, context : any) : Evented;

        /**
         * Behaves as on(...), except the listener will only get fired once and then removed.
         * @param {*} eventMap
         * @return {L.Evented}
         */
        public once(eventMap : L.LeafletEventHandlerFnMap) : Evented;

        /**
         * Adds an event parent - an Evented that will receive propagated events
         * @param {L.Evented} obj
         * @return {L.Evented}
         */
        public addEventParent(obj : Evented) : Evented;

        /**
         * Removes an event parent, so it will stop receiving propagated events
         * @param {L.Evented} obj
         * @return {L.Evented}
         */
        public removeEventParent(obj : Evented) : Evented;

        /**
         * Alias for on(...)
         * 
         * Adds a listener function (fn) to a particular event type of the object.
         * You can optionally specify the context of the listener (object the this
         * keyword will point to). You can also pass several space-separated types
         * (e.g. 'click dblclick').
         * @param {string} type
         * @param {*} fn
         * @param {*} context
         * @return {L.Evented}
         */
        public addEventListener(type : string, fn : (p1: L.LeafletEvent) => void, context : any) : Evented;

        /**
         * Alias for on(...)
         * 
         * Adds a set of type/listener pairs, e.g. {click: onClick, mousemove: onMouseMove}
         * @param {*} eventMap
         * @return {L.Evented}
         */
        public addEventListener(eventMap : L.LeafletEventHandlerFnMap) : Evented;

        /**
         * Alias for off(...)
         * 
         * Removes a previously added listener function. If no function is specified,
         * it will remove all the listeners of that particular event from the object.
         * Note that if you passed a custom context to on, you must pass the same context
         * to off in order to remove the listener.
         * @param {string} type
         * @param {*} fn
         * @param {*} context
         * @return {L.Evented}
         */
        public removeEventListener(type : string, fn : (p1: L.LeafletEvent) => void, context : any) : Evented;

        /**
         * Alias for off(...)
         * 
         * Removes a set of type/listener pairs.
         * @param {*} eventMap
         * @return {L.Evented}
         */
        public removeEventListener(eventMap : L.LeafletEventHandlerFnMap) : Evented;

        /**
         * Alias for off()
         * 
         * Removes all listeners to all events on the object.
         * @return {L.Evented}
         */
        public clearAllEventListeners() : Evented;

        /**
         * Alias for once(...)
         * 
         * Behaves as on(...), except the listener will only get fired once and then removed.
         * @param {string} type
         * @param {*} fn
         * @param {*} context
         * @return {L.Evented}
         */
        public addOneTimeEventListener(type : string, fn : (p1: L.LeafletEvent) => void, context : any) : Evented;

        /**
         * Alias for once(...)
         * 
         * Behaves as on(...), except the listener will only get fired once and then removed.
         * @param {*} eventMap
         * @return {L.Evented}
         */
        public addOneTimeEventListener(eventMap : L.LeafletEventHandlerFnMap) : Evented;

        /**
         * Alias for fire(...)
         * 
         * Fires an event of the specified type. You can optionally provide a data
         * object — the first argument of the listener function will contain its properties.
         * The event might can optionally be propagated to event parents.
         * @param {string} type
         * @param {*} data
         * @param {boolean} propagate
         * @return {L.Evented}
         */
        public fireEvent(type : string, data : any, propagate : boolean) : Evented;

        /**
         * Alias for listens(...)
         * 
         * Returns true if a particular event type has any listeners attached to it.
         * @param {string} type
         * @return {boolean}
         */
        public hasEventListeners(type : string) : boolean;

        /**
         * Adds a listener function (fn) to a particular event type of the object.
         * You can optionally specify the context of the listener (object the this
         * keyword will point to). You can also pass several space-separated types
         * (e.g. 'click dblclick').
         * @param {string} type
         * @param {*} fn
         * @return {L.Evented}
         */
        public on(type : string, fn : (p1: L.LeafletEvent) => void) : Evented;

        /**
         * Removes a previously added listener function. If no function is specified,
         * it will remove all the listeners of that particular event from the object.
         * Note that if you passed a custom context to on, you must pass the same context
         * to off in order to remove the listener.
         * @param {string} type
         * @param {*} fn
         * @return {L.Evented}
         */
        public off(type : string, fn : (p1: L.LeafletEvent) => void) : Evented;

        /**
         * Removes a previously added listener function. If no function is specified,
         * it will remove all the listeners of that particular event from the object.
         * Note that if you passed a custom context to on, you must pass the same context
         * to off in order to remove the listener.
         * @param {string} type
         * @return {L.Evented}
         */
        public off(type : string) : Evented;

        /**
         * Fires an event of the specified type. You can optionally provide a data
         * object — the first argument of the listener function will contain its properties.
         * The event might can optionally be propagated to event parents.
         * @param {string} type
         * @param {*} data
         * @return {L.Evented}
         */
        public fire(type : string, data : any) : Evented;

        /**
         * Fires an event of the specified type. You can optionally provide a data
         * object — the first argument of the listener function will contain its properties.
         * The event might can optionally be propagated to event parents.
         * @param {string} type
         * @return {L.Evented}
         */
        public fire(type : string) : Evented;

        /**
         * Behaves as on(...), except the listener will only get fired once and then removed.
         * @param {string} type
         * @param {*} fn
         * @return {L.Evented}
         */
        public once(type : string, fn : (p1: L.LeafletEvent) => void) : Evented;

        /**
         * Alias for on(...)
         * 
         * Adds a listener function (fn) to a particular event type of the object.
         * You can optionally specify the context of the listener (object the this
         * keyword will point to). You can also pass several space-separated types
         * (e.g. 'click dblclick').
         * @param {string} type
         * @param {*} fn
         * @return {L.Evented}
         */
        public addEventListener(type : string, fn : (p1: L.LeafletEvent) => void) : Evented;

        /**
         * Alias for off(...)
         * 
         * Removes a previously added listener function. If no function is specified,
         * it will remove all the listeners of that particular event from the object.
         * Note that if you passed a custom context to on, you must pass the same context
         * to off in order to remove the listener.
         * @param {string} type
         * @param {*} fn
         * @return {L.Evented}
         */
        public removeEventListener(type : string, fn : (p1: L.LeafletEvent) => void) : Evented;

        /**
         * Alias for once(...)
         * 
         * Behaves as on(...), except the listener will only get fired once and then removed.
         * @param {string} type
         * @param {*} fn
         * @return {L.Evented}
         */
        public addOneTimeEventListener(type : string, fn : (p1: L.LeafletEvent) => void) : Evented;

        /**
         * Alias for fire(...)
         * 
         * Fires an event of the specified type. You can optionally provide a data
         * object — the first argument of the listener function will contain its properties.
         * The event might can optionally be propagated to event parents.
         * @param {string} type
         * @param {*} data
         * @return {L.Evented}
         */
        public fireEvent(type : string, data : any) : Evented;

        /**
         * Alias for fire(...)
         * 
         * Fires an event of the specified type. You can optionally provide a data
         * object — the first argument of the listener function will contain its properties.
         * The event might can optionally be propagated to event parents.
         * @param {string} type
         * @return {L.Evented}
         */
        public fireEvent(type : string) : Evented;
    }
}
declare namespace L {
    /**
     * Extended LayerGroup that also has mouse events (propagated from
     * members of the group) and a shared bindPopup method.
     * @class
     * @extends L.LayerGroup
     */
    export class FeatureGroup<P> extends L.LayerGroup<P> {
        /**
         * Sets the given path options to each layer of the group that has a setStyle method.
         * @param {*} style
         * @return {L.FeatureGroup}
         */
        public setStyle(style : L.PathOptions) : FeatureGroup<any>;

        /**
         * Brings the layer group to the top of all other layers
         * @return {L.FeatureGroup}
         */
        public bringToFront() : FeatureGroup<any>;

        /**
         * Brings the layer group to the top [sic] of all other layers
         * @return {L.FeatureGroup}
         */
        public bringToBack() : FeatureGroup<any>;

        /**
         * Returns the LatLngBounds of the Feature Group (created from
         * bounds and coordinates of its children).
         * @return {L.LatLngBounds}
         */
        public getBounds() : L.LatLngBounds;
    }
}
declare namespace L {
    export interface FitBoundsOptions extends L.ZoomOptions {
        paddingTopLeft? : ((L.Point)|([number,number]));

        paddingBottomRight? : ((L.Point)|([number,number]));

        padding? : ((L.Point)|([number,number]));

        maxZoom? : number;

        animate? : boolean;

        duration? : number;

        easeLinearity? : number;

        noMoveStart? : boolean;
    }
}
declare namespace L {
    /**
     * Represents a GeoJSON object or an array of GeoJSON objects.
     * Allows you to parse GeoJSON data and display it on the map. Extends FeatureGroup.
     * @param {*} geojson
     * @param {*} options
     * @class
     * @extends L.FeatureGroup
     */
    export class GeoJSON<P> extends L.FeatureGroup<P> {
        /**
         * Creates a Layer from a given GeoJSON feature. Can use a custom pointToLayer
         * and/or coordsToLatLng functions if provided as options.
         * @param {*} featureData
         * @param {*} options
         * @return {L.Layer}
         */
        public static geometryToLayer<P>(featureData : GeoJSON.Feature, options : L.GeoJSONOptions<P>) : L.Layer;

        /**
         * Creates a LatLng object from an array of 2 numbers (longitude, latitude) or
         * 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.
         * @param {Tuple2} coords
         * @return {L.LatLng}
         */
        public static coordsToLatLng(coords : [number,number]) : L.LatLng;

        /**
         * Creates a multidimensional array of LatLngs from a GeoJSON coordinates array.
         * levelsDeep specifies the nesting level (0 is for an array of points, 1 for an array of
         * arrays of points, etc., 0 by default).
         * Can use a custom coordsToLatLng function.
         * @param {Array} coords
         * @param {number} levelsDeep
         * @param {*} coordsToLatLng
         * @return {Array}
         */
        public static coordsToLatLngs(coords : any[], levelsDeep : number, coordsToLatLng : (p1: [number,number]) => L.LatLng) : any[];

        /**
         * Reverse of coordsToLatLng
         * @param {L.LatLng} latlng
         * @return {*}
         */
        public static latLngToCoords(latlng : L.LatLng) : (([number,number])|([number,number,number]));

        /**
         * Reverse of coordsToLatLngs closed determines whether the first point should be
         * appended to the end of the array to close the feature, only used when levelsDeep is 0.
         * False by default.
         * @param {Array} latlngs
         * @param {number} levelsDeep
         * @param {boolean} closed
         * @return {Array}
         */
        public static latLngsToCoords(latlngs : any[], levelsDeep : number, closed : boolean) : any[];

        /**
         * Normalize GeoJSON geometries/features into GeoJSON features.
         * @param {*} geojson
         * @return {*}
         */
        public static asFeature<P>(geojson : GeoJSON.Feature) : GeoJSON.Feature;

        public constructor(geojson : GeoJSON.GeoJsonObject, options : L.GeoJSONOptions<P>);

        /**
         * Adds a GeoJSON object to the layer.
         * @param {*} data
         * @return {L.Layer}
         */
        public addData(data : GeoJSON.GeoJsonObject) : L.Layer;

        /**
         * Resets the given vector layer's style to the original GeoJSON style,
         * useful for resetting style after hover events.
         * @param {L.Layer} layer
         * @return {L.Layer}
         */
        public resetStyle(layer : L.Layer) : L.Layer;

        /**
         * Same as FeatureGroup's setStyle method, but style-functions are also
         * allowed here to set the style according to the feature.
         * @param {*} style
         * @return {L.GeoJSON}
         */
        public setStyle(style : L.PathOptions) : GeoJSON<any>;

        public options : L.GeoJSONOptions<P>;

        /**
         * Creates a Layer from a given GeoJSON feature. Can use a custom pointToLayer
         * and/or coordsToLatLng functions if provided as options.
         * @param {*} featureData
         * @return {L.Layer}
         */
        public static geometryToLayer<P>(featureData : GeoJSON.Feature) : L.Layer;

        /**
         * Creates a multidimensional array of LatLngs from a GeoJSON coordinates array.
         * levelsDeep specifies the nesting level (0 is for an array of points, 1 for an array of
         * arrays of points, etc., 0 by default).
         * Can use a custom coordsToLatLng function.
         * @param {Array} coords
         * @param {number} levelsDeep
         * @return {Array}
         */
        public static coordsToLatLngs(coords : any[], levelsDeep : number) : any[];

        /**
         * Creates a multidimensional array of LatLngs from a GeoJSON coordinates array.
         * levelsDeep specifies the nesting level (0 is for an array of points, 1 for an array of
         * arrays of points, etc., 0 by default).
         * Can use a custom coordsToLatLng function.
         * @param {Array} coords
         * @return {Array}
         */
        public static coordsToLatLngs(coords : any[]) : any[];

        /**
         * Reverse of coordsToLatLngs closed determines whether the first point should be
         * appended to the end of the array to close the feature, only used when levelsDeep is 0.
         * False by default.
         * @param {Array} latlngs
         * @param {number} levelsDeep
         * @return {Array}
         */
        public static latLngsToCoords(latlngs : any[], levelsDeep : number) : any[];

        /**
         * Reverse of coordsToLatLngs closed determines whether the first point should be
         * appended to the end of the array to close the feature, only used when levelsDeep is 0.
         * False by default.
         * @param {Array} latlngs
         * @return {Array}
         */
        public static latLngsToCoords(latlngs : any[]) : any[];

        public constructor(geojson : GeoJSON.GeoJsonObject);

        public constructor();

        /**
         * Creates a LatLng object from an array of 2 numbers (longitude, latitude) or
         * 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.
         * @param {Tuple3} coords
         * @return {L.LatLng}
         */
        public static coordsToLatLng(coords : [number,number,number]) : L.LatLng;

        /**
         * Creates a multidimensional array of LatLngs from a GeoJSON coordinates array.
         * levelsDeep specifies the nesting level (0 is for an array of points, 1 for an array of
         * arrays of points, etc., 0 by default).
         * Can use a custom coordsToLatLng function.
         * @param {Array} coords
         * @param {number} levelsDeep
         * @param {*} coordsToLatLng
         * @return {Array}
         */
        public static coordsToLatLngs(coords : any[], levelsDeep : number, coordsToLatLng : (p1: [number,number,number]) => L.LatLng) : any[];

        /**
         * Normalize GeoJSON geometries/features into GeoJSON features.
         * @param {*} geojson
         * @return {*}
         */
        public static asFeature<P>(geojson : GeoJSON.GeometryObject) : GeoJSON.Feature;

        /**
         * Same as FeatureGroup's setStyle method, but style-functions are also
         * allowed here to set the style according to the feature.
         * @param {*} style
         * @return {L.GeoJSON}
         */
        public setStyle(style : (p1: GeoJSON.Feature) => L.PathOptions) : GeoJSON<any>;
    }
}
declare namespace L {
    export interface GeoJSONEvent extends L.LeafletEvent {
        layer : L.Layer;

        properties : any;

        geometryType : string;

        id : string;
    }
}
declare namespace L {
    export interface GeoJSONOptions<P> extends L.LayerOptions {
        /**
         * A Function defining how GeoJSON points spawn Leaflet layers. It is internally called when data is added, passing the GeoJSON point feature and its
         * LatLng.
         * 
         * The default is to spawn a default Marker:
         * 
         * ``` function(geoJsonPoint, latlng) { return L.marker(latlng); } ```
         * @param {*} geoJsonPoint
         * @param {L.LatLng} latlng
         * @return {L.Layer}
         */
        pointToLayer(geoJsonPoint : GeoJSON.Feature, latlng : L.LatLng) : L.Layer;

        /**
         * A Function defining the Path options for styling GeoJSON lines and polygons, called internally when data is added.
         * 
         * The default value is to not override any defaults:
         * 
         * ``` function (geoJsonFeature) { return {} } ```
         */
        style? : (p1: GeoJSON.Feature) => L.PathOptions;

        /**
         * A Function that will be called once for each created Feature, after it has been created and styled. Useful for attaching events and popups to features.
         * 
         * The default is to do nothing with the newly created layers:
         * 
         * ``` function (feature, layer) {} ```
         * @param {*} feature
         * @param {L.Layer} layer
         */
        onEachFeature(feature : GeoJSON.Feature, layer : L.Layer);

        /**
         * A Function that will be used to decide whether to show a feature or not.
         * 
         * The default is to show all features:
         * 
         * ``` function (geoJsonFeature) { return true; } ```
         * @param {*} geoJsonFeature
         * @return {boolean}
         */
        filter(geoJsonFeature : GeoJSON.Feature) : boolean;

        /**
         * A Function that will be used for converting GeoJSON coordinates to LatLngs. The default is the coordsToLatLng static method.
         * @param {Tuple2} coords
         * @return {L.LatLng}
         */
        coordsToLatLng(coords : [number,number]) : L.LatLng;

        /**
         * A Function that will be used for converting GeoJSON coordinates to LatLngs. The default is the coordsToLatLng static method.
         * @param {Tuple3} coords
         * @return {L.LatLng}
         */
        coordsToLatLng(coords : [number,number,number]) : L.LatLng;
    }
}
declare namespace L {
    export function latLng(latitude : number, longitude : number, altitude : number) : L.LatLng;

    export function latLng(coords : any) : L.LatLng;

    export function latLngBounds(southWest : L.LatLng, northEast : L.LatLng) : L.LatLngBounds;

    export function latLngBounds(latlngs : L.LatLng[]) : L.LatLngBounds;

    export function point(x : number, y : number, round : boolean) : L.Point;

    export function point(coords : [number,number]) : L.Point;

    export function bounds(topLeft : L.Point, bottomRight : L.Point) : L.Bounds;

    export function bounds(points : L.Point[]) : L.Bounds;

    export function gridLayer(options : L.GridLayerOptions) : L.GridLayer;

    export function tileLayer(urlTemplate : string, options : L.TileLayerOptions) : L.TileLayer;

    export function imageOverlay(imageUrl : string, bounds : L.LatLngBounds, options : L.ImageOverlayOptions) : L.ImageOverlay;

    export function polyline(latlngs : L.LatLng[], options : L.PolylineOptions) : L.Polyline<any, any>;

    export function polygon(latlngs : L.LatLng[], options : L.PolylineOptions) : L.Polygon<any>;

    export function rectangle(latLngBounds : L.LatLngBounds, options : L.PolylineOptions) : L.Rectangle<any>;

    export function circleMarker(latlng : L.LatLng, options : L.CircleMarkerOptions) : L.CircleMarker<any>;

    export function circle(latlng : L.LatLng, options : L.CircleMarkerOptions) : L.Circle<any>;

    export function circle(latlng : L.LatLng, radius : number, options : L.CircleMarkerOptions) : L.Circle<any>;

    export function svg(options : L.RendererOptions) : L.SVG;

    export function canvas(options : L.RendererOptions) : L.Canvas;

    /**
     * Create a layer group, optionally given an initial set of layers and an `options` object.
     * @param {Array} layers
     * @param {*} options
     * @return {L.LayerGroup}
     */
    export function layerGroup<P>(layers : L.Layer[], options : L.LayerOptions) : L.LayerGroup<P>;

    /**
     * Create a feature group, optionally given an initial set of layers.
     * @param {Array} layers
     * @return {L.FeatureGroup}
     */
    export function featureGroup<P>(layers : L.Layer[]) : L.FeatureGroup<P>;

    /**
     * Creates a GeoJSON layer.
     * 
     * Optionally accepts an object in GeoJSON format to display on the
     * map (you can alternatively add it later with addData method) and
     * an options object.
     * @param {*} geojson
     * @param {*} options
     * @return {L.GeoJSON}
     */
    export function geoJSON<P>(geojson : GeoJSON.GeoJsonObject, options : L.GeoJSONOptions<P>) : L.GeoJSON<P>;

    export function popup(options : L.PopupOptions, source : L.Layer) : L.Popup;

    export function tooltip(options : L.TooltipOptions, source : L.Layer) : L.Tooltip;

    /**
     * ID of a HTML-Element as string or the HTML-ELement itself
     * @param {string} element
     * @param {*} options
     * @return {L.Map}
     */
    export function map(element : string, options : L.MapOptions) : L.Map;

    export function icon(options : L.IconOptions) : L.Icon<any>;

    export function divIcon(options : L.DivIconOptions) : L.DivIcon;

    export function marker(latlng : L.LatLng, options : L.MarkerOptions) : L.Marker<any>;

    export function latLng(latitude : number, longitude : number) : L.LatLng;

    export function point(x : number, y : number) : L.Point;

    export function gridLayer() : L.GridLayer;

    export function tileLayer(urlTemplate : string) : L.TileLayer;

    export function imageOverlay(imageUrl : string, bounds : L.LatLngBounds) : L.ImageOverlay;

    export function polyline(latlngs : L.LatLng[]) : L.Polyline<any, any>;

    export function polygon(latlngs : L.LatLng[]) : L.Polygon<any>;

    export function rectangle(latLngBounds : L.LatLngBounds) : L.Rectangle<any>;

    export function circleMarker(latlng : L.LatLng) : L.CircleMarker<any>;

    export function circle(latlng : L.LatLng) : L.Circle<any>;

    export function circle(latlng : L.LatLng, radius : number) : L.Circle<any>;

    export function svg() : L.SVG;

    export function canvas() : L.Canvas;

    /**
     * Create a layer group, optionally given an initial set of layers and an `options` object.
     * @param {Array} layers
     * @return {L.LayerGroup}
     */
    export function layerGroup(layers : L.Layer[]) : L.LayerGroup<any>;

    /**
     * Create a layer group, optionally given an initial set of layers and an `options` object.
     * @return {L.LayerGroup}
     */
    export function layerGroup() : L.LayerGroup<any>;

    /**
     * Create a feature group, optionally given an initial set of layers.
     * @return {L.FeatureGroup}
     */
    export function featureGroup() : L.FeatureGroup<any>;

    /**
     * Creates a GeoJSON layer.
     * 
     * Optionally accepts an object in GeoJSON format to display on the
     * map (you can alternatively add it later with addData method) and
     * an options object.
     * @param {*} geojson
     * @return {L.GeoJSON}
     */
    export function geoJSON<P>(geojson : GeoJSON.GeoJsonObject) : L.GeoJSON<P>;

    /**
     * Creates a GeoJSON layer.
     * 
     * Optionally accepts an object in GeoJSON format to display on the
     * map (you can alternatively add it later with addData method) and
     * an options object.
     * @return {L.GeoJSON}
     */
    export function geoJSON<P>() : L.GeoJSON<P>;

    export function popup(options : L.PopupOptions) : L.Popup;

    export function popup() : L.Popup;

    export function tooltip(options : L.TooltipOptions) : L.Tooltip;

    export function tooltip() : L.Tooltip;

    /**
     * ID of a HTML-Element as string or the HTML-ELement itself
     * @param {string} element
     * @return {L.Map}
     */
    export function map(element : string) : L.Map;

    export function divIcon() : L.DivIcon;

    export function marker(latlng : L.LatLng) : L.Marker<any>;

    export function latLngBounds(southWest : L.LatLngLiteral, northEast : L.LatLngLiteral) : L.LatLngBounds;

    export function latLngBounds(southWest : L.LatLng, northEast : [number,number]) : L.LatLngBounds;

    export function latLngBounds(southWest : [number,number], northEast : L.LatLng) : L.LatLngBounds;

    export function latLngBounds(southWest : L.LatLngLiteral, northEast : [number,number]) : L.LatLngBounds;

    export function latLngBounds(southWest : L.LatLng, northEast : L.LatLngLiteral) : L.LatLngBounds;

    export function latLngBounds(southWest : L.LatLngLiteral, northEast : L.LatLng) : L.LatLngBounds;

    export function latLngBounds(southWest : [number,number], northEast : L.LatLngLiteral) : L.LatLngBounds;

    export function latLngBounds(southWest : [number,number], northEast : [number,number]) : L.LatLngBounds;

    export function latLngBounds(latlngs : [number,number][]) : L.LatLngBounds;

    export function latLngBounds(latlngs : L.LatLngLiteral[]) : L.LatLngBounds;

    export function point(coords : any) : L.Point;

    export function bounds(topLeft : [number,number], bottomRight : [number,number]) : L.Bounds;

    export function bounds(topLeft : L.Point, bottomRight : [number,number]) : L.Bounds;

    export function bounds(topLeft : [number,number], bottomRight : L.Point) : L.Bounds;

    export function bounds(points : [[number,number],[number,number]]) : L.Bounds;

    export function imageOverlay(imageUrl : string, bounds : [number,number][], options : L.ImageOverlayOptions) : L.ImageOverlay;

    export function polyline(latlngs : [number,number][][], options : L.PolylineOptions) : L.Polyline<any, any>;

    export function polyline(latlngs : L.LatLngLiteral[][], options : L.PolylineOptions) : L.Polyline<any, any>;

    export function polyline(latlngs : L.LatLng[][], options : L.PolylineOptions) : L.Polyline<any, any>;

    export function polyline(latlngs : [number,number][], options : L.PolylineOptions) : L.Polyline<any, any>;

    export function polyline(latlngs : L.LatLngLiteral[], options : L.PolylineOptions) : L.Polyline<any, any>;

    export function polygon(latlngs : [number,number][][][], options : L.PolylineOptions) : L.Polygon<any>;

    export function polygon(latlngs : L.LatLng[][], options : L.PolylineOptions) : L.Polygon<any>;

    export function polygon(latlngs : L.LatLng[][][], options : L.PolylineOptions) : L.Polygon<any>;

    export function polygon(latlngs : L.LatLngLiteral[][][], options : L.PolylineOptions) : L.Polygon<any>;

    export function polygon(latlngs : [number,number][][], options : L.PolylineOptions) : L.Polygon<any>;

    export function polygon(latlngs : [number,number][], options : L.PolylineOptions) : L.Polygon<any>;

    export function polygon(latlngs : L.LatLngLiteral[], options : L.PolylineOptions) : L.Polygon<any>;

    export function polygon(latlngs : L.LatLngLiteral[][], options : L.PolylineOptions) : L.Polygon<any>;

    export function rectangle(latLngBounds : [number,number][], options : L.PolylineOptions) : L.Rectangle<any>;

    export function circleMarker(latlng : [number,number], options : L.CircleMarkerOptions) : L.CircleMarker<any>;

    export function circleMarker(latlng : L.LatLngLiteral, options : L.CircleMarkerOptions) : L.CircleMarker<any>;

    export function circle(latlng : [number,number], options : L.CircleMarkerOptions) : L.Circle<any>;

    export function circle(latlng : L.LatLngLiteral, options : L.CircleMarkerOptions) : L.Circle<any>;

    export function circle(latlng : [number,number], radius : number, options : L.CircleMarkerOptions) : L.Circle<any>;

    export function circle(latlng : L.LatLngLiteral, radius : number, options : L.CircleMarkerOptions) : L.Circle<any>;

    /**
     * ID of a HTML-Element as string or the HTML-ELement itself
     * @param {HTMLElement} element
     * @param {*} options
     * @return {L.Map}
     */
    export function map(element : HTMLElement, options : L.MapOptions) : L.Map;

    export function marker(latlng : [number,number], options : L.MarkerOptions) : L.Marker<any>;

    export function marker(latlng : L.LatLngLiteral, options : L.MarkerOptions) : L.Marker<any>;

    export function imageOverlay(imageUrl : string, bounds : [number,number][]) : L.ImageOverlay;

    export function polyline(latlngs : [number,number][][]) : L.Polyline<any, any>;

    export function polyline(latlngs : L.LatLng[][]) : L.Polyline<any, any>;

    export function polyline(latlngs : [number,number][]) : L.Polyline<any, any>;

    export function polyline(latlngs : L.LatLngLiteral[][]) : L.Polyline<any, any>;

    export function polyline(latlngs : L.LatLngLiteral[]) : L.Polyline<any, any>;

    export function polygon(latlngs : L.LatLngLiteral[][]) : L.Polygon<any>;

    export function polygon(latlngs : L.LatLng[][][]) : L.Polygon<any>;

    export function polygon(latlngs : [number,number][][]) : L.Polygon<any>;

    export function polygon(latlngs : [number,number][]) : L.Polygon<any>;

    export function polygon(latlngs : L.LatLngLiteral[]) : L.Polygon<any>;

    export function polygon(latlngs : [number,number][][][]) : L.Polygon<any>;

    export function polygon(latlngs : L.LatLngLiteral[][][]) : L.Polygon<any>;

    export function polygon(latlngs : L.LatLng[][]) : L.Polygon<any>;

    export function rectangle(latLngBounds : [number,number][]) : L.Rectangle<any>;

    export function circleMarker(latlng : L.LatLngLiteral) : L.CircleMarker<any>;

    export function circleMarker(latlng : [number,number]) : L.CircleMarker<any>;

    export function circle(latlng : L.LatLngLiteral) : L.Circle<any>;

    export function circle(latlng : [number,number]) : L.Circle<any>;

    export function circle(latlng : [number,number], radius : number) : L.Circle<any>;

    export function circle(latlng : L.LatLngLiteral, radius : number) : L.Circle<any>;

    /**
     * ID of a HTML-Element as string or the HTML-ELement itself
     * @param {HTMLElement} element
     * @return {L.Map}
     */
    export function map(element : HTMLElement) : L.Map;

    export function marker(latlng : L.LatLngLiteral) : L.Marker<any>;

    export function marker(latlng : [number,number]) : L.Marker<any>;

}
declare namespace L {
    export class GridLayer extends L.Layer {
        public constructor(options : L.GridLayerOptions);

        public bringToFront() : GridLayer;

        public bringToBack() : GridLayer;

        public getContainer() : HTMLElement;

        public setOpacity(opacity : number) : GridLayer;

        public setZIndex(zIndex : number) : GridLayer;

        public isLoading() : boolean;

        public redraw() : GridLayer;

        public getTileSize() : L.Point;

        public createTile(coords : L.Coords, done : (p1: Error, p2: HTMLElement) => void) : HTMLElement;

        public _tileCoordsToKey(coords : L.Coords) : string;

        public _tiles : L.InternalTiles;

        public _tileZoom : number;

        public constructor();

        public createTile(coords : L.Coords, done : (p1: Error) => void) : HTMLElement;

        public createTile(coords : L.Coords, done : () => void) : HTMLElement;
    }
}
declare namespace L {
    export interface GridLayerOptions {
        tileSize? : ((number)|(L.Point));

        opacity? : number;

        updateWhenIdle? : boolean;

        updateWhenZooming? : boolean;

        updateInterval? : number;

        attribution? : string;

        zIndex? : number;

        bounds? : ((L.LatLngBounds)|([number,number][]));

        minZoom? : number;

        maxZoom? : number;

        noWrap? : boolean;

        pane? : string;

        className? : string;

        keepBuffer? : number;
    }
}
declare namespace L {
    export class Handler extends L.Class {
        public constructor(map : L.Map);

        public enable() : Handler;

        public disable() : Handler;

        public enabled() : boolean;

        public addHooks();

        public removeHooks();

        constructor();
    }
}
declare namespace L.Icon {
    export class Default extends L.Icon<L.Icon.DefaultIconOptions> {
        public static imagePath : string;

        public constructor(options : L.Icon.DefaultIconOptions);

        public constructor();
    }
}
declare namespace L.Icon {
    export interface DefaultIconOptions extends L.BaseIconOptions {
        imagePath? : string;
    }
}
declare namespace L.Icon {}
declare namespace L {
    export class Icon<T extends L.BaseIconOptions> extends L.Layer {
        public constructor(options : T);

        public createIcon(oldIcon : HTMLElement) : HTMLElement;

        public createShadow(oldIcon : HTMLElement) : HTMLElement;

        public options : T;

        public createIcon() : HTMLElement;

        public createShadow() : HTMLElement;

        constructor();
    }
}
declare namespace L {
    export interface IconOptions extends L.BaseIconOptions {
        iconUrl : string;
    }
}
declare namespace L {
    export class ImageOverlay extends L.Layer {
        public constructor(imageUrl : string, bounds : L.LatLngBounds, options : L.ImageOverlayOptions);

        public setOpacity(opacity : number) : ImageOverlay;

        public bringToFront() : ImageOverlay;

        public bringToBack() : ImageOverlay;

        public setUrl(url : string) : ImageOverlay;

        /**
         * Update the bounds that this ImageOverlay covers
         * @param {L.LatLngBounds} bounds
         * @return {L.ImageOverlay}
         */
        public setBounds(bounds : L.LatLngBounds) : ImageOverlay;

        /**
         * Get the bounds that this ImageOverlay covers
         * @return {L.LatLngBounds}
         */
        public getBounds() : L.LatLngBounds;

        /**
         * Get the img element that represents the ImageOverlay on the map
         * @return {HTMLImageElement}
         */
        public getElement() : HTMLImageElement;

        public options : L.ImageOverlayOptions;

        public constructor(imageUrl : string, bounds : L.LatLngBounds);

        public constructor(imageUrl : string, bounds : [number,number][], options : L.ImageOverlayOptions);

        public constructor(imageUrl : string, bounds : [number,number][]);

        constructor();
    }
}
declare namespace L {
    export interface ImageOverlayOptions extends L.InteractiveLayerOptions {
        opacity? : number;

        alt? : string;

        interactive? : boolean;

        attribution? : string;

        crossOrigin? : boolean;

        className? : string;
    }
}
declare namespace L {
    export interface InteractiveLayerOptions extends L.LayerOptions {
        interactive? : boolean;

        bubblingMouseEvents? : boolean;
    }
}
declare namespace L {
    export interface InternalTiles {
        [key : string]: any;
    }
}
declare namespace L {
    export class LatLng {
        public constructor(latitude : number, longitude : number, altitude : number);

        public equals(otherLatLng : LatLng, maxMargin : number) : boolean;

        public toString() : string;

        public distanceTo(otherLatLng : LatLng) : number;

        public wrap() : LatLng;

        public toBounds(sizeInMeters : number) : L.LatLngBounds;

        public lat : number;

        public lng : number;

        public alt : number;

        public constructor(latitude : number, longitude : number);

        public equals(otherLatLng : LatLng) : boolean;

        public equals(otherLatLng : [number,number], maxMargin : number) : boolean;

        public equals(otherLatLng : L.LatLngLiteral, maxMargin : number) : boolean;

        public distanceTo(otherLatLng : [number,number]) : number;

        public distanceTo(otherLatLng : L.LatLngLiteral) : number;

        public equals(otherLatLng : L.LatLngLiteral) : boolean;

        public equals(otherLatLng : [number,number]) : boolean;

        constructor();
    }
}
declare namespace L {
    export class LatLngBounds {
        public constructor(southWest : L.LatLng, northEast : L.LatLng);

        public constructor(latlngs : [number,number][]);

        public extend(latlngOrBounds : any) : LatLngBounds;

        public pad(bufferRatio : number) : LatLngBounds;

        public getCenter() : L.LatLng;

        public getSouthWest() : L.LatLng;

        public getNorthEast() : L.LatLng;

        public getNorthWest() : L.LatLng;

        public getSouthEast() : L.LatLng;

        public getWest() : number;

        public getSouth() : number;

        public getEast() : number;

        public getNorth() : number;

        public contains(otherBoundsOrLatLng : any) : boolean;

        public intersects(otherBounds : LatLngBounds) : boolean;

        public overlaps(otherBounds : L.Bounds) : boolean;

        public toBBoxString() : string;

        public equals(otherBounds : LatLngBounds) : boolean;

        public isValid() : boolean;

        public constructor(southWest : L.LatLng, northEast : L.LatLngLiteral);

        public constructor(southWest : [number,number], northEast : [number,number]);

        public constructor(southWest : [number,number], northEast : L.LatLngLiteral);

        public constructor(southWest : L.LatLng, northEast : [number,number]);

        public constructor(southWest : L.LatLngLiteral, northEast : [number,number]);

        public constructor(southWest : L.LatLngLiteral, northEast : L.LatLng);

        public constructor(southWest : [number,number], northEast : L.LatLng);

        public constructor(southWest : L.LatLngLiteral, northEast : L.LatLngLiteral);

        public intersects(otherBounds : [number,number][]) : boolean;

        public overlaps(otherBounds : [[number,number],[number,number]]) : boolean;

        public equals(otherBounds : [number,number][]) : boolean;

        constructor();
    }
}
declare namespace L {
    export interface LatLngLiteral {
        lat : number;

        lng : number;
    }
}
declare namespace L {
    export class Layer extends L.Evented {
        public constructor(options : L.LayerOptions);

        public addTo(map : L.Map) : Layer;

        public remove() : Layer;

        public removeFrom(map : L.Map) : Layer;

        public getPane(name : string) : HTMLElement;

        public bindPopup(content : string, options : L.PopupOptions) : Layer;

        public unbindPopup() : Layer;

        public openPopup(latlng : L.LatLng) : Layer;

        public closePopup() : Layer;

        public togglePopup() : Layer;

        public isPopupOpen() : boolean;

        public setPopupContent(content : string) : Layer;

        public getPopup() : L.Popup;

        public bindTooltip(content : string, options : L.TooltipOptions) : Layer;

        public unbindTooltip() : Layer;

        public openTooltip(latlng : L.LatLng) : Layer;

        public closeTooltip() : Layer;

        public toggleTooltip() : Layer;

        public isTooltipOpen() : boolean;

        public setTooltipContent(content : string) : Layer;

        public getTooltip() : L.Tooltip;

        public onAdd(map : L.Map) : Layer;

        public onRemove(map : L.Map) : Layer;

        public getEvents() : any;

        public getAttribution() : string;

        public beforeAdd(map : L.Map) : Layer;

        public _map : L.Map;

        public constructor();

        public getPane() : HTMLElement;

        public bindPopup(content : string) : Layer;

        public openPopup() : Layer;

        public bindTooltip(content : string) : Layer;

        public openTooltip() : Layer;

        public addTo(map : L.LayerGroup<any>) : Layer;

        public bindPopup(content : HTMLElement, options : L.PopupOptions) : Layer;

        public openPopup(latlng : L.LatLngLiteral) : Layer;

        public openPopup(latlng : [number,number]) : Layer;

        public setPopupContent(content : HTMLElement) : Layer;

        public setPopupContent(content : L.Popup) : Layer;

        public bindTooltip(content : HTMLElement, options : L.TooltipOptions) : Layer;

        public openTooltip(latlng : L.LatLngLiteral) : Layer;

        public openTooltip(latlng : [number,number]) : Layer;

        public setTooltipContent(content : L.Tooltip) : Layer;

        public setTooltipContent(content : HTMLElement) : Layer;

        public bindPopup(content : HTMLElement) : Layer;

        public bindTooltip(content : HTMLElement) : Layer;
    }
}
declare namespace L {
    export interface LayerEvent extends L.LeafletEvent {
        layer : L.Layer;
    }
}
declare namespace L {
    /**
     * Used to group several layers and handle them as one. If you add it to the map, any layers added or removed from the group will be added/removed on the map as
     * well. Extends Layer.
     * @param {Array} layers
     * @param {*} options
     * @class
     * @extends L.Layer
     */
    export class LayerGroup<P> extends L.Layer {
        public constructor(layers : L.Layer[], options : L.LayerOptions);

        /**
         * Returns a GeoJSON representation of the layer group (as a GeoJSON GeometryCollection, GeoJSONFeatureCollection or Multipoint).
         * @return {*}
         */
        public toGeoJSON() : ((GeoJSON.FeatureCollection)|(GeoJSON.Feature)|(GeoJSON.GeometryCollection));

        /**
         * Adds the given layer to the group.
         * @param {L.Layer} layer
         * @return {L.LayerGroup}
         */
        public addLayer(layer : L.Layer) : LayerGroup<any>;

        /**
         * Removes the layer with the given internal ID or the given layer from the group.
         * @param {number} layer
         * @return {L.LayerGroup}
         */
        public removeLayer(layer : number) : LayerGroup<any>;

        /**
         * Returns true if the given layer is currently added to the group.
         * @param {L.Layer} layer
         * @return {boolean}
         */
        public hasLayer(layer : L.Layer) : boolean;

        /**
         * Removes all the layers from the group.
         * @return {L.LayerGroup}
         */
        public clearLayers() : LayerGroup<any>;

        /**
         * Calls methodName on every layer contained in this group, passing any additional parameters. Has no effect if the layers contained do not implement
         * methodName.
         * @param {string} methodName
         * @param {Array} params
         * @return {L.LayerGroup}
         */
        public invoke(methodName : string, ...params : any[]) : LayerGroup<any>;

        /**
         * Iterates over the layers of the group, optionally specifying context of the iterator function.
         * @param {*} fn
         * @param {*} context
         * @return {L.LayerGroup}
         */
        public eachLayer(fn : (p1: L.Layer) => void, context : any) : LayerGroup<any>;

        /**
         * Returns the layer with the given internal ID.
         * @param {number} id
         * @return {L.Layer}
         */
        public getLayer(id : number) : L.Layer;

        /**
         * Returns an array of all the layers added to the group.
         * @return {Array}
         */
        public getLayers() : L.Layer[];

        /**
         * Calls setZIndex on every layer contained in this group, passing the z-index.
         * @param {number} zIndex
         * @return {L.LayerGroup}
         */
        public setZIndex(zIndex : number) : LayerGroup<any>;

        /**
         * Returns the internal ID for a layer
         * @param {L.Layer} layer
         * @return {number}
         */
        public getLayerId(layer : L.Layer) : number;

        public feature : ((GeoJSON.FeatureCollection)|(GeoJSON.Feature)|(GeoJSON.GeometryCollection));

        public constructor(layers : L.Layer[]);

        public constructor();

        /**
         * Iterates over the layers of the group, optionally specifying context of the iterator function.
         * @param {*} fn
         * @return {L.LayerGroup}
         */
        public eachLayer(fn : (p1: L.Layer) => void) : LayerGroup<P>;

        /**
         * Removes the layer with the given internal ID or the given layer from the group.
         * @param {L.Layer} layer
         * @return {L.LayerGroup}
         */
        public removeLayer(layer : L.Layer) : LayerGroup<P>;
    }
}
declare namespace L {
    export interface LayerOptions {
        pane? : string;

        attribution? : string;
    }
}
declare namespace L {
    export interface LayersControlEvent extends L.LayerEvent {
        name : string;
    }
}
declare namespace L {
    export interface LeafletEvent {
        type : string;

        target : any;
    }
}
declare namespace L {
    export interface LeafletEventHandlerFnMap {
        [type : string]: (p1: L.LeafletEvent) => void;
    }
}
declare namespace L {
    export interface LeafletKeyboardEvent extends L.LeafletEvent {
        originalEvent : KeyboardEvent;
    }
}
declare namespace L {
    export interface LeafletMouseEvent extends L.LeafletEvent {
        latlng : L.LatLng;

        layerPoint : L.Point;

        containerPoint : L.Point;

        originalEvent : MouseEvent;
    }
}
declare namespace L.LineUtil {}
declare namespace L {
    /**
     * Utility class.
     * @extends Object
     * @class
     */
    export class LineUtil {
        constructor();

        public static simplify(points : L.Point[], tolerance : number) : L.Point[];

        public static pointToSegmentDistance(p : L.Point, p1 : L.Point, p2 : L.Point) : number;

        public static closestPointOnSegment(p : L.Point, p1 : L.Point, p2 : L.Point) : L.Point;

        public static isFlat(latlngs : L.LatLng[]) : boolean;

        public static isFlat(latlngs : [number,number][]) : boolean;

        public static isFlat(latlngs : L.LatLngLiteral[]) : boolean;
    }
}
declare namespace L {
    export interface LocateOptions {
        watch? : boolean;

        setView? : boolean;

        maxZoom? : number;

        timeout? : number;

        maximumAge? : number;

        enableHighAccuracy? : boolean;
    }
}
declare namespace L {
    export interface LocationEvent extends L.LeafletEvent {
        latlng : L.LatLng;

        bounds : L.LatLngBounds;

        accuracy : number;

        altitude : number;

        altitudeAccuracy : number;

        heading : number;

        speed : number;

        timestamp : number;
    }
}
declare namespace L {
    export class Map extends L.Evented {
        public constructor(element : string, options : L.MapOptions);

        public getRenderer(layer : L.Path) : L.Renderer;

        public addControl(control : L.Control) : Map;

        public removeControl(control : L.Control) : Map;

        public addLayer(layer : L.Layer) : Map;

        public removeLayer(layer : L.Layer) : Map;

        public hasLayer(layer : L.Layer) : boolean;

        public eachLayer(fn : (p1: L.Layer) => void, context : any) : Map;

        public openPopup(popup : L.Popup) : Map;

        public openPopup(content : string, latlng : L.LatLng, options : L.PopupOptions) : Map;

        public closePopup(popup : L.Popup) : Map;

        public openTooltip(tooltip : L.Tooltip) : Map;

        public openTooltip(content : string, latlng : L.LatLng, options : L.TooltipOptions) : Map;

        public closeTooltip(tooltip : L.Tooltip) : Map;

        public setView(center : L.LatLng, zoom : number, options : L.ZoomPanOptions) : Map;

        public setZoom(zoom : number, options : L.ZoomPanOptions) : Map;

        public zoomIn(delta : number, options : L.ZoomOptions) : Map;

        public zoomOut(delta : number, options : L.ZoomOptions) : Map;

        public setZoomAround(position : any, zoom : number, options : L.ZoomOptions) : Map;

        public fitBounds(bounds : L.LatLngBounds, options : L.FitBoundsOptions) : Map;

        public fitWorld(options : L.FitBoundsOptions) : Map;

        public panTo(latlng : L.LatLng, options : L.PanOptions) : Map;

        public panBy(offset : L.Point) : Map;

        public setMaxBounds(bounds : L.LatLngBounds) : Map;

        public setMinZoom(zoom : number) : Map;

        public setMaxZoom(zoom : number) : Map;

        public panInsideBounds(bounds : L.LatLngBounds, options : L.PanOptions) : Map;

        /**
         * Boolean for animate or advanced ZoomPanOptions
         * @param {boolean} options
         * @return {L.Map}
         */
        public invalidateSize(options : boolean) : Map;

        public stop() : Map;

        public flyTo(latlng : L.LatLng, zoom : number, options : L.ZoomPanOptions) : Map;

        public flyToBounds(bounds : L.LatLngBounds, options : L.FitBoundsOptions) : Map;

        public addHandler(name : string, HandlerClass : L.Handler) : Map;

        public remove() : Map;

        public createPane(name : string, container : HTMLElement) : HTMLElement;

        /**
         * Name of the pane or the pane as HTML-Element
         * @param {string} pane
         * @return {HTMLElement}
         */
        public getPane(pane : string) : HTMLElement;

        public getPanes() : ((any)|(L.DefaultMapPanes));

        public getContainer() : HTMLElement;

        public whenReady(fn : () => void, context : any) : Map;

        public getCenter() : L.LatLng;

        public getZoom() : number;

        public getBounds() : L.LatLngBounds;

        public getMinZoom() : number;

        public getMaxZoom() : number;

        public getBoundsZoom(bounds : L.LatLngBounds, inside : boolean) : number;

        public getSize() : L.Point;

        public getPixelBounds() : L.Bounds;

        public getPixelOrigin() : L.Point;

        public getPixelWorldBounds(zoom : number) : L.Bounds;

        public getZoomScale(toZoom : number, fromZoom : number) : number;

        public getScaleZoom(scale : number, fromZoom : number) : number;

        public project(latlng : L.LatLng, zoom : number) : L.Point;

        public unproject(point : L.Point, zoom : number) : L.LatLng;

        public layerPointToLatLng(point : L.Point) : L.LatLng;

        public latLngToLayerPoint(latlng : L.LatLng) : L.Point;

        public wrapLatLng(latlng : L.LatLng) : L.LatLng;

        public wrapLatLngBounds(bounds : L.LatLngBounds) : L.LatLngBounds;

        public distance(latlng1 : L.LatLng, latlng2 : L.LatLng) : number;

        public containerPointToLayerPoint(point : L.Point) : L.Point;

        public containerPointToLatLng(point : L.Point) : L.LatLng;

        public layerPointToContainerPoint(point : L.Point) : L.Point;

        public latLngToContainerPoint(latlng : L.LatLng) : L.Point;

        public mouseEventToContainerPoint(ev : MouseEvent) : L.Point;

        public mouseEventToLayerPoint(ev : MouseEvent) : L.Point;

        public mouseEventToLatLng(ev : MouseEvent) : L.LatLng;

        public locate(options : L.LocateOptions) : Map;

        public stopLocate() : Map;

        public boxZoom : L.Handler;

        public doubleClickZoom : L.Handler;

        public dragging : L.Handler;

        public keyboard : L.Handler;

        public scrollWheelZoom : L.Handler;

        public tap : L.Handler;

        public touchZoom : L.Handler;

        public zoomControl : L.control.Zoom;

        public options : L.MapOptions;

        public constructor(element : string);

        public eachLayer(fn : (p1: L.Layer) => void) : Map;

        public openPopup(content : string, latlng : L.LatLng) : Map;

        public closePopup() : Map;

        public openTooltip(content : string, latlng : L.LatLng) : Map;

        public closeTooltip() : Map;

        public setView(center : L.LatLng, zoom : number) : Map;

        public setZoom(zoom : number) : Map;

        public zoomIn(delta : number) : Map;

        public zoomIn() : Map;

        public zoomOut(delta : number) : Map;

        public zoomOut() : Map;

        public setZoomAround(position : any, zoom : number) : Map;

        public fitBounds(bounds : L.LatLngBounds) : Map;

        public fitWorld() : Map;

        public panTo(latlng : L.LatLng) : Map;

        public panInsideBounds(bounds : L.LatLngBounds) : Map;

        /**
         * Boolean for animate or advanced ZoomPanOptions
         * @return {L.Map}
         */
        public invalidateSize() : Map;

        public flyTo(latlng : L.LatLng, zoom : number) : Map;

        public flyTo(latlng : L.LatLng) : Map;

        public flyToBounds(bounds : L.LatLngBounds) : Map;

        public createPane(name : string) : HTMLElement;

        public whenReady(fn : () => void) : Map;

        public getBoundsZoom(bounds : L.LatLngBounds) : number;

        public getPixelWorldBounds() : L.Bounds;

        public locate() : Map;

        public constructor(element : HTMLElement, options : L.MapOptions);

        public openPopup(content : HTMLElement, latlng : [number,number], options : L.PopupOptions) : Map;

        public openPopup(content : string, latlng : [number,number], options : L.PopupOptions) : Map;

        public openPopup(content : HTMLElement, latlng : L.LatLng, options : L.PopupOptions) : Map;

        public openPopup(content : HTMLElement, latlng : L.LatLngLiteral, options : L.PopupOptions) : Map;

        public openPopup(content : string, latlng : L.LatLngLiteral, options : L.PopupOptions) : Map;

        public openTooltip(content : HTMLElement, latlng : [number,number], options : L.TooltipOptions) : Map;

        public openTooltip(content : HTMLElement, latlng : L.LatLngLiteral, options : L.TooltipOptions) : Map;

        public openTooltip(content : string, latlng : L.LatLngLiteral, options : L.TooltipOptions) : Map;

        public openTooltip(content : HTMLElement, latlng : L.LatLng, options : L.TooltipOptions) : Map;

        public openTooltip(content : string, latlng : [number,number], options : L.TooltipOptions) : Map;

        public setView(center : L.LatLngLiteral, zoom : number, options : L.ZoomPanOptions) : Map;

        public setView(center : [number,number], zoom : number, options : L.ZoomPanOptions) : Map;

        public fitBounds(bounds : [number,number][], options : L.FitBoundsOptions) : Map;

        public panTo(latlng : [number,number], options : L.PanOptions) : Map;

        public panTo(latlng : L.LatLngLiteral, options : L.PanOptions) : Map;

        public panBy(offset : [number,number]) : Map;

        public setMaxBounds(bounds : [number,number][]) : Map;

        public panInsideBounds(bounds : [number,number][], options : L.PanOptions) : Map;

        /**
         * Boolean for animate or advanced ZoomPanOptions
         * @param {*} options
         * @return {L.Map}
         */
        public invalidateSize(options : L.ZoomPanOptions) : Map;

        public flyTo(latlng : [number,number], zoom : number, options : L.ZoomPanOptions) : Map;

        public flyTo(latlng : L.LatLngLiteral, zoom : number, options : L.ZoomPanOptions) : Map;

        public flyToBounds(bounds : [number,number][], options : L.FitBoundsOptions) : Map;

        /**
         * Name of the pane or the pane as HTML-Element
         * @param {HTMLElement} pane
         * @return {HTMLElement}
         */
        public getPane(pane : HTMLElement) : HTMLElement;

        public getBoundsZoom(bounds : [number,number][], inside : boolean) : number;

        public project(latlng : L.LatLngLiteral, zoom : number) : L.Point;

        public project(latlng : [number,number], zoom : number) : L.Point;

        public unproject(point : [number,number], zoom : number) : L.LatLng;

        public layerPointToLatLng(point : [number,number]) : L.LatLng;

        public latLngToLayerPoint(latlng : [number,number]) : L.Point;

        public latLngToLayerPoint(latlng : L.LatLngLiteral) : L.Point;

        public wrapLatLng(latlng : [number,number]) : L.LatLng;

        public wrapLatLng(latlng : L.LatLngLiteral) : L.LatLng;

        public distance(latlng1 : L.LatLngLiteral, latlng2 : [number,number]) : number;

        public distance(latlng1 : [number,number], latlng2 : [number,number]) : number;

        public distance(latlng1 : [number,number], latlng2 : L.LatLngLiteral) : number;

        public distance(latlng1 : L.LatLng, latlng2 : L.LatLngLiteral) : number;

        public distance(latlng1 : L.LatLng, latlng2 : [number,number]) : number;

        public distance(latlng1 : L.LatLngLiteral, latlng2 : L.LatLng) : number;

        public distance(latlng1 : L.LatLngLiteral, latlng2 : L.LatLngLiteral) : number;

        public distance(latlng1 : [number,number], latlng2 : L.LatLng) : number;

        public containerPointToLayerPoint(point : [number,number]) : L.Point;

        public containerPointToLatLng(point : [number,number]) : L.LatLng;

        public layerPointToContainerPoint(point : [number,number]) : L.Point;

        public latLngToContainerPoint(latlng : [number,number]) : L.Point;

        public latLngToContainerPoint(latlng : L.LatLngLiteral) : L.Point;

        public constructor(element : HTMLElement);

        public openPopup(content : string, latlng : [number,number]) : Map;

        public openPopup(content : string, latlng : L.LatLngLiteral) : Map;

        public openPopup(content : HTMLElement, latlng : L.LatLng) : Map;

        public openPopup(content : HTMLElement, latlng : [number,number]) : Map;

        public openPopup(content : HTMLElement, latlng : L.LatLngLiteral) : Map;

        public openTooltip(content : string, latlng : L.LatLngLiteral) : Map;

        public openTooltip(content : HTMLElement, latlng : L.LatLng) : Map;

        public openTooltip(content : string, latlng : [number,number]) : Map;

        public openTooltip(content : HTMLElement, latlng : L.LatLngLiteral) : Map;

        public openTooltip(content : HTMLElement, latlng : [number,number]) : Map;

        public setView(center : L.LatLngLiteral, zoom : number) : Map;

        public setView(center : [number,number], zoom : number) : Map;

        public fitBounds(bounds : [number,number][]) : Map;

        public panTo(latlng : [number,number]) : Map;

        public panTo(latlng : L.LatLngLiteral) : Map;

        public panInsideBounds(bounds : [number,number][]) : Map;

        public flyTo(latlng : L.LatLngLiteral, zoom : number) : Map;

        public flyTo(latlng : [number,number], zoom : number) : Map;

        public flyTo(latlng : L.LatLngLiteral) : Map;

        public flyTo(latlng : [number,number]) : Map;

        public flyToBounds(bounds : [number,number][]) : Map;

        public getBoundsZoom(bounds : [number,number][]) : number;

        constructor();
    }
}
declare namespace L {
    export interface MapOptions {
        preferCanvas? : boolean;

        attributionControl? : boolean;

        zoomControl? : boolean;

        closePopupOnClick? : boolean;

        zoomSnap? : number;

        zoomDelta? : number;

        trackResize? : boolean;

        boxZoom? : boolean;

        doubleClickZoom? : ((boolean)|(StringTypes.center));

        dragging? : boolean;

        crs? : L.CRS;

        center? : ((L.LatLng)|(L.LatLngLiteral)|([number,number]));

        zoom? : number;

        minZoom? : number;

        maxZoom? : number;

        layers? : L.Layer[];

        maxBounds? : ((L.LatLngBounds)|([number,number][]));

        renderer? : L.Renderer;

        fadeAnimation? : boolean;

        markerZoomAnimation? : boolean;

        transform3DLimit? : number;

        zoomAnimation? : boolean;

        zoomAnimationThreshold? : number;

        inertia? : boolean;

        inertiaDeceleration? : number;

        inertiaMaxSpeed? : number;

        easeLinearity? : number;

        worldCopyJump? : boolean;

        maxBoundsViscosity? : number;

        keyboard? : boolean;

        keyboardPanDelta? : number;

        scrollWheelZoom? : ((boolean)|(StringTypes.center));

        wheelDebounceTime? : number;

        wheelPxPerZoomLevel? : number;

        tap? : boolean;

        tapTolerance? : number;

        touchZoom? : ((boolean)|(StringTypes.center));

        bounceAtZoomLimits? : boolean;
    }
}
declare namespace L {
    export class Marker<P> extends L.Layer {
        public constructor(latlng : L.LatLng, options : L.MarkerOptions);

        public toGeoJSON() : GeoJSON.Feature;

        public getLatLng() : L.LatLng;

        public setLatLng(latlng : L.LatLng) : Marker<any>;

        public setZIndexOffset(offset : number) : Marker<any>;

        public setIcon(icon : L.Icon<any>) : Marker<any>;

        public setOpacity(opacity : number) : Marker<any>;

        public getElement() : HTMLElement;

        public options : L.MarkerOptions;

        public dragging : L.Handler;

        public feature : GeoJSON.Feature;

        public constructor(latlng : L.LatLng);

        public constructor(latlng : L.LatLngLiteral, options : L.MarkerOptions);

        public constructor(latlng : [number,number], options : L.MarkerOptions);

        public setLatLng(latlng : [number,number]) : Marker<any>;

        public setLatLng(latlng : L.LatLngLiteral) : Marker<any>;

        public setIcon(icon : L.DivIcon) : Marker<any>;

        public constructor(latlng : [number,number]);

        public constructor(latlng : L.LatLngLiteral);

        constructor();
    }
}
declare namespace L {
    export interface MarkerOptions extends L.InteractiveLayerOptions {
        icon? : ((L.Icon<any>)|(L.DivIcon));

        clickable? : boolean;

        draggable? : boolean;

        keyboard? : boolean;

        title? : string;

        alt? : string;

        zIndexOffset? : number;

        opacity? : number;

        riseOnHover? : boolean;

        riseOffset? : number;
    }
}
declare namespace L {}
declare namespace L {
    export interface PanOptions {
        animate? : boolean;

        duration? : number;

        easeLinearity? : number;

        noMoveStart? : boolean;
    }
}
declare namespace L {
    export class Path extends L.Layer {
        public redraw() : Path;

        public setStyle(style : L.PathOptions) : Path;

        public bringToFront() : Path;

        public bringToBack() : Path;

        public getElement() : Element;

        public options : L.PathOptions;
    }
}
declare namespace L {
    export interface PathOptions extends L.InteractiveLayerOptions {
        stroke? : boolean;

        color? : string;

        weight? : number;

        opacity? : number;

        lineCap? : any;

        lineJoin? : any;

        dashArray? : string;

        dashOffset? : string;

        fill? : boolean;

        fillColor? : string;

        fillOpacity? : number;

        fillRule? : ((StringTypes.nonzero)|(StringTypes.evenodd)|(StringTypes.inherit));

        renderer? : L.Renderer;

        className? : string;
    }
}
declare namespace L {
    export class Point {
        public constructor(x : number, y : number, round : boolean);

        public clone() : Point;

        public add(otherPoint : Point) : Point;

        public subtract(otherPoint : Point) : Point;

        public divideBy(num : number) : Point;

        public multiplyBy(num : number) : Point;

        public scaleBy(scale : Point) : Point;

        public unscaleBy(scale : Point) : Point;

        public round() : Point;

        public floor() : Point;

        public ceil() : Point;

        public distanceTo(otherPoint : Point) : number;

        public equals(otherPoint : Point) : boolean;

        public contains(otherPoint : Point) : boolean;

        public toString() : string;

        public x : number;

        public y : number;

        public constructor(x : number, y : number);

        public add(otherPoint : [number,number]) : Point;

        public subtract(otherPoint : [number,number]) : Point;

        public scaleBy(scale : [number,number]) : Point;

        public unscaleBy(scale : [number,number]) : Point;

        public distanceTo(otherPoint : [number,number]) : number;

        public equals(otherPoint : [number,number]) : boolean;

        public contains(otherPoint : [number,number]) : boolean;

        constructor();
    }
}
declare namespace L {
    export class Polygon<P> extends L.Polyline<((GeoJSON.GeometryObject)|(GeoJSON.LineString)|(GeoJSON.MultiLineString)), P> {
        public constructor(latlngs : L.LatLng[], options : L.PolylineOptions);

        public constructor(latlngs : L.LatLng[]);

        public constructor(latlngs : [number,number][][], options : L.PolylineOptions);

        public constructor(latlngs : [number,number][], options : L.PolylineOptions);

        public constructor(latlngs : L.LatLngLiteral[][][], options : L.PolylineOptions);

        public constructor(latlngs : L.LatLng[][][], options : L.PolylineOptions);

        public constructor(latlngs : L.LatLngLiteral[][], options : L.PolylineOptions);

        public constructor(latlngs : L.LatLngLiteral[], options : L.PolylineOptions);

        public constructor(latlngs : [number,number][][][], options : L.PolylineOptions);

        public constructor(latlngs : L.LatLng[][], options : L.PolylineOptions);

        public constructor(latlngs : [number,number][]);

        public constructor(latlngs : [number,number][][][]);

        public constructor(latlngs : L.LatLngLiteral[]);

        public constructor(latlngs : L.LatLng[][]);

        public constructor(latlngs : L.LatLngLiteral[][]);

        public constructor(latlngs : L.LatLngLiteral[][][]);

        public constructor(latlngs : [number,number][][]);

        public constructor(latlngs : L.LatLng[][][]);

        constructor();
    }
}
declare namespace L {
    export class Polyline<T extends ((GeoJSON.GeometryObject)|(GeoJSON.LineString)|(GeoJSON.MultiLineString)), P> extends L.Path {
        public constructor(latlngs : L.LatLng[], options : L.PolylineOptions);

        public toGeoJSON() : GeoJSON.Feature;

        public getLatLngs() : ((L.LatLng[])|(L.LatLng[][])|(L.LatLng[][][]));

        public setLatLngs(latlngs : L.LatLng[]) : Polyline<any, any>;

        public isEmpty() : boolean;

        public getCenter() : L.LatLng;

        public getBounds() : L.LatLngBounds;

        public addLatLng(latlng : any) : Polyline<any, any>;

        public feature : GeoJSON.Feature;

        public options : L.PolylineOptions;

        public constructor(latlngs : L.LatLng[]);

        public constructor(latlngs : L.LatLngLiteral[][], options : L.PolylineOptions);

        public constructor(latlngs : [number,number][][], options : L.PolylineOptions);

        public constructor(latlngs : L.LatLngLiteral[], options : L.PolylineOptions);

        public constructor(latlngs : L.LatLng[][], options : L.PolylineOptions);

        public constructor(latlngs : [number,number][], options : L.PolylineOptions);

        public setLatLngs(latlngs : L.LatLngLiteral[][]) : Polyline<any, any>;

        public setLatLngs(latlngs : L.LatLng[][]) : Polyline<any, any>;

        public setLatLngs(latlngs : L.LatLng[][][]) : Polyline<any, any>;

        public setLatLngs(latlngs : L.LatLngLiteral[][][]) : Polyline<any, any>;

        public setLatLngs(latlngs : [number,number][]) : Polyline<any, any>;

        public setLatLngs(latlngs : [number,number][][][]) : Polyline<any, any>;

        public setLatLngs(latlngs : [number,number][][]) : Polyline<any, any>;

        public setLatLngs(latlngs : L.LatLngLiteral[]) : Polyline<any, any>;

        public constructor(latlngs : L.LatLng[][]);

        public constructor(latlngs : [number,number][]);

        public constructor(latlngs : L.LatLngLiteral[][]);

        public constructor(latlngs : L.LatLngLiteral[]);

        public constructor(latlngs : [number,number][][]);

        constructor();
    }
}
declare namespace L {
    export interface PolylineOptions extends L.PathOptions {
        smoothFactor? : number;

        noClip? : boolean;
    }
}
declare namespace L.PolyUtil {}
declare namespace L {
    /**
     * Utility class.
     * @extends Object
     * @class
     */
    export class PolyUtil {
        constructor();

        public static clipPolygon(points : L.Point[], bounds : L.Bounds, round : boolean) : L.Point[];

        public static clipPolygon(points : L.Point[], bounds : L.Bounds) : L.Point[];

        public static clipPolygon(points : L.Point[], bounds : [[number,number],[number,number]], round : boolean) : L.Point[];

        public static clipPolygon(points : L.Point[], bounds : [[number,number],[number,number]]) : L.Point[];
    }
}
declare namespace L {
    export class Popup extends L.Layer {
        public constructor(options : L.PopupOptions, source : L.Layer);

        public getLatLng() : L.LatLng;

        public setLatLng(latlng : L.LatLng) : Popup;

        public getContent() : ((string)|(HTMLElement));

        public setContent(htmlContent : string) : Popup;

        public getElement() : HTMLElement;

        public update();

        public isOpen() : boolean;

        public bringToFront() : Popup;

        public bringToBack() : Popup;

        public openOn(map : L.Map) : Popup;

        public options : L.PopupOptions;

        public constructor(options : L.PopupOptions);

        public constructor();

        public setLatLng(latlng : [number,number]) : Popup;

        public setLatLng(latlng : L.LatLngLiteral) : Popup;

        public setContent(htmlContent : HTMLElement) : Popup;
    }
}
declare namespace L {
    export interface PopupEvent extends L.LeafletEvent {
        popup : L.Popup;
    }
}
declare namespace L {
    export interface PopupOptions extends L.DivOverlayOptions {
        maxWidth? : number;

        minWidth? : number;

        maxHeight? : number;

        autoPan? : boolean;

        autoPanPaddingTopLeft? : ((L.Point)|([number,number]));

        autoPanPaddingBottomRight? : ((L.Point)|([number,number]));

        autoPanPadding? : ((L.Point)|([number,number]));

        keepInView? : boolean;

        closeButton? : boolean;

        autoClose? : boolean;

        closeOnClick? : boolean;
    }
}
declare namespace L {
    export interface Projection {
        project(latlng : L.LatLng) : L.Point;

        unproject(point : L.Point) : L.LatLng;

        bounds : L.Bounds;

        project(latlng : L.LatLngLiteral) : L.Point;

        unproject(point : [number,number]) : L.LatLng;
    }

    export namespace Projection {

        export var LonLat : Projection;

        export var Mercator : Projection;

        export var SphericalMercator : Projection;
    }

}
declare namespace L {
    export class Rectangle<P> extends L.Polygon<P> {
        public constructor(latLngBounds : L.LatLngBounds, options : L.PolylineOptions);

        public setBounds(latLngBounds : L.LatLngBounds) : Rectangle<any>;

        public constructor(latLngBounds : L.LatLngBounds);

        public constructor(latLngBounds : [number,number][], options : L.PolylineOptions);

        public setBounds(latLngBounds : [number,number][]) : Rectangle<any>;

        public constructor(latLngBounds : [number,number][]);

        constructor();
    }
}
declare namespace L {
    export class Renderer extends L.Layer {
        public constructor(options : L.RendererOptions);

        public options : L.RendererOptions;

        public constructor();
    }
}
declare namespace L {
    export interface RendererOptions extends L.LayerOptions {
        padding? : number;
    }
}
declare namespace L {
    export interface ResizeEvent extends L.LeafletEvent {
        oldSize : L.Point;

        newSize : L.Point;
    }
}
declare namespace L {
    export class SVG extends L.Renderer {
        public static create(name : string) : SVGElement;

        public static pointsToPath(rings : L.Point[], close : boolean) : string;

        public static pointsToPath(rings : [number,number][], close : boolean) : string;
    }
}
declare namespace L {
    export interface TileErrorEvent extends L.TileEvent {
        error : Error;
    }
}
declare namespace L {
    export interface TileEvent extends L.LeafletEvent {
        tile : HTMLImageElement;

        coords : L.Point;
    }
}
declare namespace L.tileLayer {
    export function wms(baseUrl : string, options : L.WMSOptions) : L.tileLayer.WMS;

    export function wms(baseUrl : string) : L.tileLayer.WMS;

}
declare namespace L.tileLayer {}
declare namespace L.tileLayer {
    export class WMS extends L.TileLayer {
        public constructor(baseUrl : string, options : L.WMSOptions);

        public setParams(params : L.WMSParams, noRedraw : boolean) : WMS;

        public wmsParams : L.WMSParams;

        public options : L.WMSOptions;

        public setParams(params : L.WMSParams) : WMS;

        constructor();
    }
}
declare namespace L {
    export class TileLayer extends L.GridLayer {
        public constructor(urlTemplate : string, options : L.TileLayerOptions);

        public setUrl(url : string, noRedraw : boolean) : TileLayer;

        public _abortLoading();

        public _getZoomForUrl() : number;

        public options : L.TileLayerOptions;

        public constructor(urlTemplate : string);

        public setUrl(url : string) : TileLayer;

        constructor();
    }
}
declare namespace L {
    export interface TileLayerOptions extends L.GridLayerOptions {
        minZoom? : number;

        maxZoom? : number;

        maxNativeZoom? : number;

        minNativeZoom? : number;

        subdomains? : ((string)|(string[]));

        errorTileUrl? : string;

        zoomOffset? : number;

        tms? : boolean;

        zoomReverse? : boolean;

        detectRetina? : boolean;

        crossOrigin? : boolean;
    }
}
declare namespace L {
    export class Tooltip extends L.Layer {
        public constructor(options : L.TooltipOptions, source : L.Layer);

        public setOpacity(val : number);

        public getLatLng() : L.LatLng;

        public setLatLng(latlng : L.LatLng) : Tooltip;

        public getContent() : ((string)|(HTMLElement));

        public setContent(htmlContent : string) : Tooltip;

        public getElement() : HTMLElement;

        public update();

        public isOpen() : boolean;

        public bringToFront() : Tooltip;

        public bringToBack() : Tooltip;

        public options : L.TooltipOptions;

        public constructor(options : L.TooltipOptions);

        public constructor();

        public setLatLng(latlng : L.LatLngLiteral) : Tooltip;

        public setLatLng(latlng : [number,number]) : Tooltip;

        public setContent(htmlContent : HTMLElement) : Tooltip;
    }
}
declare namespace L {
    export interface TooltipEvent extends L.LeafletEvent {
        tooltip : L.Tooltip;
    }
}
declare namespace L {
    export interface TooltipOptions extends L.DivOverlayOptions {
        pane? : string;

        offset? : ((L.Point)|([number,number]));

        direction? : any;

        permanent? : boolean;

        sticky? : boolean;

        interactive? : boolean;

        opacity? : number;
    }
}
declare namespace L {
    export class Transformation {
        public constructor(a : number, b : number, c : number, d : number);

        public transform(point : L.Point, scale : number) : L.Point;

        public untransform(point : L.Point, scale : number) : L.Point;

        public transform(point : L.Point) : L.Point;

        public untransform(point : L.Point) : L.Point;

        constructor();
    }
}
declare namespace L.Util {}
declare namespace L {
    /**
     * Utility class.
     * @extends Object
     * @class
     */
    export class Util {
        constructor();

        public static extend<D extends any, S1, S2>(dest : D, src1 : S1, src2 : S2) : ((D)|(S1)|(S2));

        public static extend<D extends any, S1, S2, S3>(dest : D, src1 : S1, src2 : S2, src3 : S3) : any;

        public static extend(dest : any, ...src : any[]) : any;

        public static create(proto : any, properties : PropertyDescriptorMap) : Object;

        public static bind(fn : () => void, ...obj : any[]) : () => void;

        public static stamp(obj : any) : number;

        public static throttle(fn : () => void, time : number, context : any) : () => void;

        public static wrapNum(num : number, range : number[], includeMax : boolean) : number;

        public static falseFn() : boolean;

        public static formatNum(num : number, digits : number) : number;

        public static trim(str : string) : string;

        public static splitWords(str : string) : string[];

        public static setOptions(obj : any, options : any) : any;

        public static getParamString(obj : any, existingUrl : string, uppercase : boolean) : string;

        public static template(str : string, data : any) : string;

        public static isArray(obj : any) : boolean;

        public static indexOf(array : any[], el : any) : number;

        public static requestAnimFrame(fn : (p1: number) => void, context : any, immediate : boolean) : number;

        public static cancelAnimFrame(id : number);

        public static lastId : number;

        public static emptyImageUrl : string;

        public static create(proto : Object) : Object;

        public static wrapNum(num : number, range : number[]) : number;

        public static formatNum(num : number) : number;

        public static getParamString(obj : any, existingUrl : string) : string;

        public static getParamString(obj : any) : string;

        public static requestAnimFrame(fn : (p1: number) => void, context : any) : number;

        public static requestAnimFrame(fn : (p1: number) => void) : number;

        public static create(proto : Object, properties : PropertyDescriptorMap) : Object;

        public static create(proto : any) : Object;
    }
}
declare namespace L {
    export interface WMSOptions extends L.TileLayerOptions {
        layers? : string;

        styles? : string;

        format? : string;

        transparent? : boolean;

        version? : string;

        crs? : L.CRS;

        uppercase? : boolean;
    }
}
declare namespace L {
    export interface WMSParams {
        format? : string;

        layers : string;

        request? : string;

        service? : string;

        styles? : string;

        version? : string;

        transparent? : boolean;

        width? : number;

        height? : number;
    }
}
declare namespace L {
    export interface ZoomAnimEvent extends L.LeafletEvent {
        center : L.LatLng;

        zoom : number;

        noUpdate : boolean;
    }
}
declare namespace L {
    export interface ZoomOptions {
        animate? : boolean;
    }
}
declare namespace L {
    export interface ZoomPanOptions extends L.ZoomOptions {
        animate? : boolean;

        duration? : number;

        easeLinearity? : number;

        noMoveStart? : boolean;
    }
}
interface StringTypes {}

declare namespace StringTypes {

    /**
     * Generated to type the string "nonzero".
     * @exclude
     * @class
     */
    export interface nonzero {    }

    /**
     * Generated to type the string "evenodd".
     * @exclude
     * @class
     */
    export interface evenodd {    }

    /**
     * Generated to type the string "inherit".
     * @exclude
     * @class
     */
    export interface inherit {    }

    /**
     * Generated to type the string "center".
     * @exclude
     * @class
     */
    export interface center {    }
}



