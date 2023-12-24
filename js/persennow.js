function persenNumberNow(persen, number) {
    var resultPersensatuan = document.getElementById("resultPersensatuan");

    // Looping dari 1 sampai 9
    var percentage = persen;

    for (var i = 1; i <= 100; i++) {
        percentage++;
        var value = number;

        // Buat elemen paragraf
        var paragraph = document.createElement("p");
        paragraph.className = "lead mb-0";

        // Buat tautan dengan href dinamis
        var link = document.createElement("a");
        link.href = "hasil.html#:~:text=Jadi, " + percentage + "% dari " + value + " adalah " + (percentage * value / 100).toFixed(2);
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = percentage + "% dari " + value + " berapa?";

        // Masukkan tautan ke dalam elemen paragraf
        paragraph.appendChild(link);

        // Masukkan elemen paragraf ke dalam container
        resultPersensatuan.appendChild(paragraph);
    }
}

function persenNowRangeNumber(persen, number) {
    var persenNowRangeNumber = document.getElementById("persenNowRangeNumber");

    // Looping dari 1 sampai 9
    var percentage = persen;

    for (var i = 1; i <= 100; i++) {
        // percentage++;
        var value = number++;

        // Buat elemen paragraf
        var paragraph = document.createElement("p");
        paragraph.className = "lead mb-0";

        // Buat tautan dengan href dinamis
        var link = document.createElement("a");
        link.href = "hasil.html#:~:text=Jadi, " + percentage + "% dari " + value + " adalah " + (percentage * value / 100).toFixed(2);
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = percentage + "% dari " + value + " berapa?";

        // Masukkan tautan ke dalam elemen paragraf
        paragraph.appendChild(link);

        // Masukkan elemen paragraf ke dalam container
        persenNowRangeNumber.appendChild(paragraph);
    }
}