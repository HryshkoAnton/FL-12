function getMin() {
    return [...arguments].sort((a,b) => a-b)[0];
}