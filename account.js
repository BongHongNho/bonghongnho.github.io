var dXNlcg = document.getElementById('username');
var cGFzcw = document.getElementById('password');
var YnRuTG9naW4 = document.getElementById('btnLogin');
var cc  = document.getElementById('forget');
var bim = document.getElementById('info');
YnRuTG9naW4.addEventListener("click", function (hjevwbfewhuAqfwKAvewih) {
    hjevwbfewhuAqfwKAvewih.preventDefault()

    let ZW51c2VybmFtZUxsewhakdbdegcvSvZ2lu = 'dGFuZGV2ZHowMw==';
    let ZW5wYXNzd29ydcmxiauExvZ2lu = 'MWhpZ2hiYXI0bmFtZTY3ODk=';
    let ZGV1c2VybmFtZUxvZ2lu = atob(ZW51c2VybmFtZUxsewhakdbdegcvSvZ2lu);
    let ZGVwYXNzd29yZExvZ2lu = atob(ZW5wYXNzd29ydcmxiauExvZ2lu);
    let nsYwkansiaudbSc = "SW5jb3JyZWN0IHVzZXJuYW1lIG9yIHBhc3N3b3Jk";
    let jaQUoaoisjsioownkndj = atob(nsYwkansiaudbSc);

    if (dXNlcg.value.trim() == "" && cGFzcw.value.trim() == "" || dXNlcg.value.trim() == "" || cGFzcw.value.trim() == "" ) {
        let XNzdzbshsunaisSYw29 = "TG9naW4gZmFpbGVk";
        let jswUWsnakaikw = atob(XNzdzbshsunaisSYw29);
        alert(jswUWsnakaikw);
        window.close();
        return flase;
    }
    if (dXNlcg.value.trim().length < 10 || cGFzcw.value.trim().length < 10) {
        let XaW4gZmFpNzYw29 = "VXNlcm5hbWUgb3IgcGFzc3dvcmQgY2Fubm90IGJlIGxlc3MgdGhhbiAxMCBjaGFyYWN0ZXJz";
        let IGNoYXJjYW5ub3QgYmUg = atob(XaW4gZmFpNzYw29);
        alert(IGNoYXJjYW5ub3QgYmUg);
        window.close();
        return flase;
    }
    if (dXNlcg.value == ZGV1c2VybmFtZUxvZ2lu && cGFzcw.value == ZGVwYXNzd29yZExvZ2lu) {
        let b2tpbG9naMoiqW4 = "TG9nZ2VkIGluIHN1Y2Nlc3NmdWxseQ==";
        let bm90aW9raWxnsJAImsj = atob(b2tpbG9naMoiqW4);
        alert(bm90aW9raWxnsJAImsj);
        window.close();
        bG9naW5Pa2k();
        return true;
    }
    else {
        alert(jaQUoaoisjsioownkndj)
        window.close();
        return flase;
    }
    function bG9naW5Pa2k() {
        chrome.runtime.sendMessage({ type: "login" })
    };
});
