Array.prototype.shuffle = function() {
    for (let i = this.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [this[i], this[rand]] = [this[rand], this[i]];
    }
    return this;
}

Array.prototype.groupBy = function(key) {
    return this.sort((a, b) => a.category > b.category ? 1 : (b.category > a.category ? - 1 : 0)); 
}