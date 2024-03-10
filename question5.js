function reverseString(str) {
    let arr = '';
    str = str.split('');

    for (let i = (str.length - 1); i > -1; i--) {
        arr = arr + str[i];
    }

    return arr;
}

console.log(reverseString('Diogo Dias Mello'));