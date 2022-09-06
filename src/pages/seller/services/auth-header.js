export default function authHeader(){
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        const userStr = localStorage.getItem('markutosSaler');
        let user = null;
        if (userStr)
            user = JSON.parse(userStr);
        if (user && user) {
            return 'Bearer ' + user.toString();
        } else {
            return null;
        }
    }
}