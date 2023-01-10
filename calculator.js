const Calculator = function() {
    this.sum = function(a, b){
        return a + b;
    }
    this.subtract = function(a, b){
        return a - b;
    } 
    this.multiply = function(a, b){
        return a * b;
    }
    this.divide = function(a, b){
        return a / b;
    }
    this.modulus = function(a, b){
        return a % b;
    }
    this.even = function(a){
        if (a % 2 === 0)
        return "This number is even";
    }
    this.odd = function(a){
        if (a % 2 === !0)
        return "This number is odd";
    }
}

// const subtract = null;

// const multiply = null;

// const divide = null;

// const modulus = null;

// const even = null;

// const odd = null;

module.exports = {Calculator};
