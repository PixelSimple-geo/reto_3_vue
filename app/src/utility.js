import {ref} from "vue";

export function getCookie(cookieName) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(`${cookieName}=`))
            return cookie.substring(cookieName.length + 1);
    }
    return null;
}

export function checkAuthentication() {
    let token = localStorage.getItem("token");
    if (token != null) token = JSON.parse(token).receivedAt;
    else return false;
    // La sesión no es válida después de 30 minutos
    return Date.now() - token < 30 * 60 * 1000;
}

export function setAuthenticationStatus() {isAuthenticated.value = checkAuthentication();}

export function getAuthenticationStatus() {return isAuthenticated.value;}

export const isAuthenticated = ref(checkAuthentication());