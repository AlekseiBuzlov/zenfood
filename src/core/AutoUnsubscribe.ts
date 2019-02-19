export function AutoUnsubscribe(blackList = []) {
    return function (constructor) {
        const original = constructor.prototype.ngOnDestroy;
        constructor.prototype.ngOnDestroy = function () {
            for (const prop in this) {
                if (blackList.includes(prop)) {
                    continue;
                }
                if (!this[prop]) {
                    continue;
                }
                if (typeof this[prop].unsubscribe === 'function') {
                    this[prop].unsubscribe();
                }

                if (this[prop] instanceof Array) {
                    this[prop].forEach((item) => {
                        if (item && typeof item.unsubscribe === 'function') {
                            item.unsubscribe();
                        }
                    });
                }
            }
            if (original && typeof original === 'function') {
                return original.apply(this, arguments);
            }
        };
    };
}
