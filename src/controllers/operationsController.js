/**
 * Ordena una lista de números utilizando el algoritmo de Bubble Sort.
 * 
 * @param {Object} req - El objeto de la solicitud.
 * @param {Array<number>} req.body.numbers - La lista de números a ordenar.
 * @param {Object} res - El objeto de la respuesta.
 * @returns {void} - Devuelve un objeto JSON con la lista de números ordenada.
 */
const bubbleSort = (req, res) => {
    const { numbers } = req.body;
    let n = numbers.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
            }
        }
    }
    res.json({ sorted: numbers });
};

/**
 * Filtra los números pares de una lista.
 * 
 * @param {Object} req - El objeto de la solicitud.
 * @param {Array<number>} req.body.numbers - La lista de números a filtrar.
 * @param {Object} res - El objeto de la respuesta.
 * @returns {void} - Devuelve un objeto JSON con la lista de números pares.
 */
const filterEven = (req, res) => {
    const { numbers } = req.body;
    const evens = numbers.filter(num => num % 2 === 0);
    res.json({ evens });
};

/**
 * Suma todos los números en una lista.
 * 
 * @param {Object} req - El objeto de la solicitud.
 * @param {Array<number>} req.body.numbers - La lista de números a sumar.
 * @param {Object} res - El objeto de la respuesta.
 * @returns {void} - Devuelve un objeto JSON con la suma de los números.
 */
const sumList = (req, res) => {
    const { numbers } = req.body;
    const sum = numbers.reduce((a, b) => a + b, 0);
    res.json({ sum });
};

/**
 * Realiza una búsqueda binaria en una lista de números ordenada.
 * 
 * @param {Object} req - El objeto de la solicitud.
 * @param {Array<number>} req.body.numbers - La lista de números donde se realizará la búsqueda.
 * @param {number} req.body.target - El número objetivo a buscar.
 * @param {Object} res - El objeto de la respuesta.
 * @returns {void} - Devuelve un objeto JSON indicando si se encontró el número objetivo y su índice.
 */
const binarySearch = (req, res) => {
    const { numbers, target } = req.body;
    let left = 0, right = numbers.length - 1;
    let found = false;
    let index = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (numbers[mid] === target) {
            found = true;
            index = mid;
            break;
        } else if (numbers[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    res.json({ found, index });
};

module.exports = { bubbleSort, filterEven, sumList, binarySearch };
