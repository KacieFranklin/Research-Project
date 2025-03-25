<script>
    const login = localStorage.getItem("account-info");
    localStorage.setItem("foo", "there");
    function onload(){
        if (login != null){
            if (login == "first-visit") {
                localStorage.setItem("account-info", "returning");
                localStorage.setItem("foo", "failed-homepage-link");
                window.location.href = "/home";
            }
            else {
                localStorage.setItem("foo", "failed-mainpage-link");
                window.location.href = "/dynamic";
            }
        }
        else {
            localStorage.setItem("foo", "failed-legal-page-link");
            window.location.href = "/legal-info";
        }
    }
    onload();
</script>

<h1>Redirecting...</h1>