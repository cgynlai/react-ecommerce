export default function convertcurr (num) {
    return "$" + Number(num.toFixed(1)).toLocaleString() + " ";
}