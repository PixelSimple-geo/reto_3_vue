import {ref} from "vue";

export function getCookie(cookieName) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(`${cookieName}=`)) {
            return cookie.substring(cookieName.length + 1);
        }
    }
    return null;
}

export function checkAuthentication() {
    const user = JSON.parse(localStorage.getItem("user"));
    return user != null && Date.now() - user.fecha < 30 * 60 * 1000;
}

export const isAuthenticated = ref(checkAuthentication());

export function setAuthenticationStatus() {
    isAuthenticated.value = checkAuthentication();
}

export function getAuthenticationStatus() {
    return isAuthenticated.value;
}