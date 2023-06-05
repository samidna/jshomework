"use strict";

function wordCount() {
    let txt = document.getElementById('txt').value;
    let count = 0;
    let space = " ";
    for (let i = 0; i < txt.length; i++) {
        if (txt[i] === " " && txt[i + 1] !== " ") {
            count++;
        }
    }
    document.getElementById("wcount").innerHTML = count;
}

