function pipe() {
    return [...arguments].reduce((a, b) => b(a));
}