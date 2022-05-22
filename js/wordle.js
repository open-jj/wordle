const d = new Date("June 21, 2021 11:59:00");
const g = d.getTime();
const f = Date.now();
const h = f - g;
const j = h / 86400000;
const o = Math.round(j);
const k = o + 2;
const letter = document.getElementsByClassName('letter');
const showButton = document.getElementsByClassName('show-btn');
const copyButton = document.getElementsByClassName('copy-btn');

let xmlHttpReq = new XMLHttpRequest();
xmlHttpReq.open("GET", 'https://raw.githubusercontent.com/reddGit/tools/main/wordle/words.txt', false); 
xmlHttpReq.send(null); 
n = xmlHttpReq.responseText;
m = n.split(/\n|\r/g);

for (i = 0; i < m[k].length; i++) {
    letter[i].textContent = m[k][i].toUpperCase();
    letter[i].style.color = "#090909";
}

showButton[0].addEventListener("click", function() {
    if (this.textContent === "Show") {
        this.textContent = "Hide";
        for (i = 0; i < m[k].length; i++) {
            letter[i].style.color = "#fff";
            letter[i].style.backgroundColor = "#3d8037";
        }
    } else if (this.textContent === "Hide") {
        this.textContent = "Show";
        for (i = 0; i < m[k].length; i++) {
            letter[i].style.color = "#090909";
            letter[i].style.backgroundColor = "#090909";
        }
    }
});

copyButton[0].addEventListener("click", function() {
    navigator.clipboard.writeText(m[k]);
    this.textContent = "Copied!";
    setTimeout(function() {
        this.textContent = "Copy";
    }, 5000);
});