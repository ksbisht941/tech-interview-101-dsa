function printNumber(N) {
    if (N == 0) {
        return;
    }

    console.log(N);
    printNumber(N - 1);
}

printNumber(5);