/*const letters = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
};
function crpito() {
    console.log(letters.m, letters.a, letters.m, letters.a, letters.c, letters.o)
}
crpito() 
// Função para gerar o mapeamento automático das letras
const generateLetterMap = () => {
    const letters = {};
    for (let i = 0; i < 26; i++) {
        letters[String.fromCharCode(97 + i)] = i + 1;  // 97 é o código ASCII de 'a'
    }
    return letters;
};

// Gerando o mapeamento de letras e valores
const letters = generateLetterMap();

// Função para criptografar uma palavra
function encrypt(word) {
    return word
        .toLowerCase()
        .split('')
        .map(letter => letters[letter] || '?')  // '?' para caracteres desconhecidos
        .join(' ');
}

// Função para descriptografar números
function decrypt(numbers) {
    const reverseLetters = Object.fromEntries(Object.entries(letters).map(([k, v]) => [v, k]));
    return numbers
        .map(num => reverseLetters[num] || '?')
        .join('');
}

// Testando a função de criptografia
const wordToEncrypt = "mamaco";
const encrypted = encrypt(wordToEncrypt);
console.log(`Criptografia de "${wordToEncrypt}": ${encrypted}`);

// Testando a função de descriptografia
const numbersToDecrypt = [13, 1, 13, 1, 3, 15];
const decrypted = decrypt(numbersToDecrypt);
console.log(`Descriptografia dos números [${numbersToDecrypt.join(', ')}]: ${decrypted}`);*/
