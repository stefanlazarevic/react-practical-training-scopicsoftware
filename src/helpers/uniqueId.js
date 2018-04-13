export default function uniqueId(prefix = 'id_') {
    let start = 0;
    return function incrementId() {
        return prefix + start++;
    }
}
