import {useRouter} from "vue-router";

const router = useRouter();
export const url = "http://localhost:80/api/";

export async function requestData(uri, method, data) {
    let token = localStorage.getItem("token");
    if (token != null) token = JSON.parse(token)["auth-token"];
    else token = "";
    const response = await fetch(url + uri, {
        method: method,
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json", "auth-token": token}
    });
    const statusCode = response.status;
    if (statusCode >= 200 && statusCode <= 299)
        try {return await response.json();} catch (ignore) {return {};}
    else
        throw new Error(JSON.stringify(await response.json()));
}