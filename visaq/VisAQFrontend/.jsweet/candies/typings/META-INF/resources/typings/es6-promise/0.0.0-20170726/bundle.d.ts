/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
interface Thenable<T> {
    then<U>(onFulfilled : (p1: T) => U, onRejected : (p1: any) => U) : Thenable<U>;

    then<U>(onFulfilled : (p1: T) => U, onRejected : (p1: any) => void) : Thenable<U>;

    then<U>(onFulfilled : (p1: T) => U) : Thenable<U>;

    then<U>() : Thenable<U>;

    then<U>(onFulfilled : (p1: T) => U, onRejected : (p1: any) => Thenable<U>) : Thenable<U>;

    then<U>(onFulfilled : (p1: T) => Thenable<U>, onRejected : (p1: any) => Thenable<U>) : Thenable<U>;

    then<U>(onFulfilled : (p1: T) => Thenable<U>, onRejected : (p1: any) => U) : Thenable<U>;

    then<U>(onFulfilled : (p1: T) => Thenable<U>, onRejected : (p1: any) => void) : Thenable<U>;

    then<U>(onFulfilled : (p1: T) => Thenable<U>) : Thenable<U>;
}

/**
 * If you call resolve in the body of the callback passed to the constructor,
 * your promise is fulfilled with result object passed to resolve.
 * If you call reject your promise is rejected with the object passed to reject.
 * For consistency and debugging (eg stack traces), obj should be an instanceof Error.
 * Any errors thrown in the constructor callback will be implicitly passed to reject().
 * @param {*} callback
 * @class
 * @extends *
 */
declare class Promise<T> implements Thenable<T> {
    public constructor(callback : any);

    /**
     * onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects.
     * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called.
     * Both callbacks have a single parameter , the fulfillment value or rejection reason.
     * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve.
     * If an error is thrown in the callback, the returned promise rejects with that error.
     * 
     * @param {*} onFulfilled called when/if "promise" resolves
     * @param {*} onRejected called when/if "promise" rejects
     * @return {Promise}
     */
    public then<U>(onFulfilled : (p1: T) => U, onRejected : (p1: any) => U) : Promise<U>;

    public then<U>(onFulfilled : (p1: T) => U, onRejected : (p1: any) => void) : Promise<U>;

    /**
     * Sugar for promise.then(undefined, onRejected)
     * 
     * @param {*} onRejected called when/if "promise" rejects
     * @return {Promise}
     */
    public catch<U>(onRejected : (p1: any) => U) : Promise<U>;

    /**
     * Make a new promise from the thenable.
     * A thenable is promise-like in as far as it has a "then" method.
     * @param {*} value
     * @return {Promise}
     */
    public static resolve<T>(value : T) : Promise<T>;

    /**
     * Make a promise that rejects to obj. For consistency and debugging (eg stack traces), obj should be an instanceof Error
     * @param {Promise.ErrorAny} error
     * @return {Promise}
     */
    public static reject(error : any) : Promise<any>;

    public static reject<T>(error : any) : Promise<T>;

    /**
     * Make a promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
     * the array passed to all can be a mixture of promise-like objects and other objects.
     * The fulfillment value is an array (in order) of fulfillment values. The rejection value is the first rejection value.
     * @param {Tuple6} values
     * @return {Promise}
     */
    public static all<T1, T2, T3, T4, T5, T6>(values : [((T1)|(Thenable<T1>)),((T2)|(Thenable<T2>)),((T3)|(Thenable<T3>)),((T4)|(Thenable<T4>)),((T5)|(Thenable<T5>)),((T6)|(Thenable<T6>))]) : Promise<[T1,T2,T3,T4,T5,T6]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4>(values : any) : Promise<[T1,T2,T3,T4]>;

    public static all<T1, T2, T3>(values : any) : Promise<[T1,T2,T3]>;

    public static all<T1, T2>(values : any) : Promise<[T1,T2]>;

    public static all<T>(values : T[]) : Promise<T[]>;

    /**
     * Make a Promise that fulfills when any item fulfills, and rejects if any item rejects.
     * @param {Array} promises
     * @return {Promise}
     */
    public static race<T>(promises : T[]) : Promise<T>;

    /**
     * onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects.
     * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called.
     * Both callbacks have a single parameter , the fulfillment value or rejection reason.
     * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve.
     * If an error is thrown in the callback, the returned promise rejects with that error.
     * 
     * @param {*} onFulfilled called when/if "promise" resolves
     * @param onRejected called when/if "promise" rejects
     * @return {Promise}
     */
    public then<U>(onFulfilled : (p1: T) => U) : Promise<U>;

    /**
     * onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects.
     * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called.
     * Both callbacks have a single parameter , the fulfillment value or rejection reason.
     * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve.
     * If an error is thrown in the callback, the returned promise rejects with that error.
     * 
     * @param onFulfilled called when/if "promise" resolves
     * @param onRejected called when/if "promise" rejects
     * @return {Promise}
     */
    public then<U>() : Promise<U>;

    /**
     * Sugar for promise.then(undefined, onRejected)
     * 
     * @param onRejected called when/if "promise" rejects
     * @return {Promise}
     */
    public catch<U>() : Promise<U>;

    /**
     * Make a new promise from the thenable.
     * A thenable is promise-like in as far as it has a "then" method.
     * @return {Promise}
     */
    public static resolve<T>() : Promise<T>;

    public constructor(callback : any);

    /**
     * onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects.
     * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called.
     * Both callbacks have a single parameter , the fulfillment value or rejection reason.
     * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve.
     * If an error is thrown in the callback, the returned promise rejects with that error.
     * 
     * @param {*} onFulfilled called when/if "promise" resolves
     * @param {*} onRejected called when/if "promise" rejects
     * @return {Promise}
     */
    public then<U>(onFulfilled : (p1: T) => Thenable<U>, onRejected : (p1: any) => U) : Promise<U>;

    /**
     * onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects.
     * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called.
     * Both callbacks have a single parameter , the fulfillment value or rejection reason.
     * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve.
     * If an error is thrown in the callback, the returned promise rejects with that error.
     * 
     * @param {*} onFulfilled called when/if "promise" resolves
     * @param {*} onRejected called when/if "promise" rejects
     * @return {Promise}
     */
    public then<U>(onFulfilled : (p1: T) => Thenable<U>, onRejected : (p1: any) => Thenable<U>) : Promise<U>;

    /**
     * onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects.
     * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called.
     * Both callbacks have a single parameter , the fulfillment value or rejection reason.
     * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve.
     * If an error is thrown in the callback, the returned promise rejects with that error.
     * 
     * @param {*} onFulfilled called when/if "promise" resolves
     * @param {*} onRejected called when/if "promise" rejects
     * @return {Promise}
     */
    public then<U>(onFulfilled : (p1: T) => U, onRejected : (p1: any) => Thenable<U>) : Promise<U>;

    public then<U>(onFulfilled : (p1: T) => Thenable<U>, onRejected : (p1: any) => void) : Promise<U>;

    /**
     * Sugar for promise.then(undefined, onRejected)
     * 
     * @param {*} onRejected called when/if "promise" rejects
     * @return {Promise}
     */
    public catch<U>(onRejected : (p1: any) => Thenable<U>) : Promise<U>;

    /**
     * Make a new promise from the thenable.
     * A thenable is promise-like in as far as it has a "then" method.
     * @param {*} value
     * @return {Promise}
     */
    public static resolve<T>(value : Thenable<T>) : Promise<T>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4, T5>(values : any) : Promise<[T1,T2,T3,T4,T5]>;

    public static all<T1, T2, T3, T4>(values : any) : Promise<[T1,T2,T3,T4]>;

    public static all<T1, T2, T3, T4>(values : any) : Promise<[T1,T2,T3,T4]>;

    public static all<T1, T2, T3, T4>(values : any) : Promise<[T1,T2,T3,T4]>;

    public static all<T1, T2, T3, T4>(values : any) : Promise<[T1,T2,T3,T4]>;

    public static all<T1, T2, T3, T4>(values : any) : Promise<[T1,T2,T3,T4]>;

    public static all<T1, T2, T3, T4>(values : any) : Promise<[T1,T2,T3,T4]>;

    public static all<T1, T2, T3, T4>(values : any) : Promise<[T1,T2,T3,T4]>;

    public static all<T1, T2, T3, T4>(values : any) : Promise<[T1,T2,T3,T4]>;

    public static all<T1, T2, T3, T4>(values : any) : Promise<[T1,T2,T3,T4]>;

    public static all<T1, T2, T3, T4>(values : any) : Promise<[T1,T2,T3,T4]>;

    public static all<T1, T2, T3, T4>(values : any) : Promise<[T1,T2,T3,T4]>;

    public static all<T1, T2, T3, T4>(values : any) : Promise<[T1,T2,T3,T4]>;

    public static all<T1, T2, T3, T4>(values : any) : Promise<[T1,T2,T3,T4]>;

    public static all<T1, T2, T3, T4>(values : any) : Promise<[T1,T2,T3,T4]>;

    public static all<T1, T2, T3, T4>(values : any) : Promise<[T1,T2,T3,T4]>;

    public static all<T1, T2, T3>(values : any) : Promise<[T1,T2,T3]>;

    public static all<T1, T2, T3>(values : any) : Promise<[T1,T2,T3]>;

    public static all<T1, T2, T3>(values : any) : Promise<[T1,T2,T3]>;

    public static all<T1, T2, T3>(values : any) : Promise<[T1,T2,T3]>;

    public static all<T1, T2, T3>(values : any) : Promise<[T1,T2,T3]>;

    public static all<T1, T2, T3>(values : any) : Promise<[T1,T2,T3]>;

    public static all<T1, T2, T3>(values : any) : Promise<[T1,T2,T3]>;

    public static all<T1, T2>(values : any) : Promise<[T1,T2]>;

    public static all<T1, T2>(values : any) : Promise<[T1,T2]>;

    public static all<T1, T2>(values : any) : Promise<[T1,T2]>;

    public static all<T>(values : Thenable<T>[]) : Promise<T[]>;

    /**
     * Make a Promise that fulfills when any item fulfills, and rejects if any item rejects.
     * @param {Array} promises
     * @return {Promise}
     */
    public static race<T>(promises : Thenable<T>[]) : Promise<T>;

    /**
     * onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects.
     * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called.
     * Both callbacks have a single parameter , the fulfillment value or rejection reason.
     * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve.
     * If an error is thrown in the callback, the returned promise rejects with that error.
     * 
     * @param {*} onFulfilled called when/if "promise" resolves
     * @param onRejected called when/if "promise" rejects
     * @return {Promise}
     */
    public then<U>(onFulfilled : (p1: T) => Thenable<U>) : Promise<U>;

    constructor();
}


