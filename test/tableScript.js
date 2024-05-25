t = document.getElementById('t')

for(let i = 0; i < 4; i++) {
    ri = t.insertRow(i);
    for(let j = 0; j < 4; j++) {
        cij = ri.insertCell(j);
        text = document.createTextNode("c" + i + j)
        cij.appendChild(text)
    }
}



