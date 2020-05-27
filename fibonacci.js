const fibonacci = function(nthItem) {
    if (nthItem < 1) {
        return "OOPS";
    }

    if (nthItem == 1 || nthItem == 2) {
        return 1;
    };

    return (fibonacci(nthItem - 1) + fibonacci(nthItem - 2));

}

module.exports = fibonacci
