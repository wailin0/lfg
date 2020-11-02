export default function JWTHeader() {
    const token = JSON.parse(localStorage.getItem('LFGUser'));

    if (token) {
        return { Authorization: 'Bearer ' + token };
    } else {
        return {};
    }
}