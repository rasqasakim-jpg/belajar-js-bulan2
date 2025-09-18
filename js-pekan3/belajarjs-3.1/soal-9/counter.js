export default function buatCounter() {
    let hitung = START;
    return function() {
        return hitung++;
    };
}
export const START = 0;
export const LIMIT = 10;