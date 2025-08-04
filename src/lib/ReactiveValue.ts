export type Subscriber<T> = (value: T) => void;
export type Subscription = () => void;

export class ReactiveValue<T> {
    private _value: T;
    private subscribers: Set<Subscriber<T>> = new Set();

    constructor(initialValue: T) {
        this._value = initialValue;
    }

    get value(): T {
        return this._value;
    }

    set value(newValue: T) {
        if (this._value !== newValue) {
            this._value = newValue;
            this.notify();
        }
    }

    subscribe(subscriber: Subscriber<T>): Subscription {
        this.subscribers.add(subscriber);
        subscriber(this._value);
        return () => this.unsubscribe(subscriber);
    }

    unsubscribe(subscriber: Subscriber<T>): void {
        this.subscribers.delete(subscriber);
    }

    private notify() {
        for (const subscriber of this.subscribers) {
            subscriber(this._value);
        }
    }
}
