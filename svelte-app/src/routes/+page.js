/** @type {import('./$types').PageLoad} */
export function load(){
    const login = localStorage.getItem("account-info");
    let redirect_link = "/legal-info"
    if (login){
        if (login == "first-visit") {
            localStorage.setItem("account-info", "returning");
            redirect_link = "/home";
        }
        else {
            redirect_link = "/dynamic";
        }
    }
    window.location.href = redirect_link;
}