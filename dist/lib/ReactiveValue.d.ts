export type Subscriber<T> = (value: T) => void;
export type Subscription = () => void;
export declare class ReactiveValue<T> {
    private _value;
    private subscribers;
    constructor(initialValue: T);
    get value(): T;
    set value(newValue: T);
    subscribe(subscriber: Subscriber<T>): Subscription;
    unsubscribe(subscriber: Subscriber<T>): void;
    private notify;
}
//# sourceMappingURL=ReactiveValue.d.ts.map