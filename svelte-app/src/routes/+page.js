import { base } from '$app/paths';
import { goto } from '$app/navigation';

/** @type {import('./$types').PageLoad} */
export function load(){
    const login = localStorage.getItem("account-info");
    if (login){
        if (login == "first-visit") {
            localStorage.setItem("account-info", "returning");
            goto(`${base}/home`);
        }
        else {
            goto(`${base}/dynamic`);
        }
    }
    goto(`${base}/legal-info`);
}