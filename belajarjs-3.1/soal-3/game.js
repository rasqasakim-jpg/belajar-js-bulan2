export default function hitungTotalPoin(poin) {
    return poin.reduce((a, b) => a + b, 0);
}

export const POIN_MAKSIMAL = 1000;
export const POIN_BONUS = 50;