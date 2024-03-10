function fibonacci(previous, next, stopFibonacci) {
    let count = 1;
    let value = 0;

    while (value <= stopFibonacci) {
        value = previous + next;

        if (stopFibonacci === value) {
            console.log(`${count += 1}° ciclo: ${value} (Pertence)`);
        } else console.log(`${count += 1}° ciclo: ${value}`);

        previous = next;
        next = value;

    }

    return value;
}

fibonacci(0, 1, 55);