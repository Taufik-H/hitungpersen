function persenSatuan() {
    var resultPersensatuan = document.getElementById("resultPersensatuan");

    // Looping dari 1 sampai 9
    var percentage = 0;

    for (var i = 1; i <= 10; i++) {
        percentage++;
        var value = i;

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

function persenPuluhan(){
    var resultPersenPuluhan = document.getElementById("resultPersenPuluhan");
    var percentage = 0;

    // Looping dari 1 sampai 9
    for (var i = 11; i <= 20; i++) {
        percentage++;
        var value = i;

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
        resultPersenPuluhan.appendChild(paragraph);
    }
}

function persenRatusan(){
    var resultPersenRatusan = document.getElementById("resultPersenRatusan");

    // Looping dari 1 sampai 9
    var percentage = 0;
    for (var i = 100; i <= 109; i++) {
        percentage++;
        var value = i;

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
        resultPersenRatusan.appendChild(paragraph);
    }
}

function persenRibuan(){
    var resultPersenRibuan = document.getElementById("resultPersenRibuan");

    // Looping dari 1 sampai 9
    var percentage = 0;
    for (var i = 1000; i <= 1009; i++) {
        percentage++;
        var value = i;

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
        resultPersenRibuan.appendChild(paragraph);
    }
}

function persenPuluhRibuan(){
    var resultPersenPuluhRibuan = document.getElementById("resultPersenPuluhRibuan");

    // Looping dari 1 sampai 9
    var percentage = 0;
    for (var i = 10000; i <= 10009; i++) {
        percentage++;
        var value = i;

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
        resultPersenPuluhRibuan.appendChild(paragraph);
    }
}

function persenRatusanRibuan(){
    var resultPersenRatusanRibuan = document.getElementById("resultPersenRatusanRibuan");

    // Looping dari 1 sampai 9
    var percentage = 0;
    for (var i = 100000; i <= 100009; i++) {
        percentage++;
        var value = i;

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
        resultPersenRatusanRibuan.appendChild(paragraph);
    }
}

function persenJutaan(){
    var resultPersenJutaan = document.getElementById("resultPersenJutaan");

    // Looping dari 1 sampai 9
    var percentage = 0;
    for (var i = 1000000; i <= 1000009; i++) {
        percentage++;
        var value = i;

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
        resultPersenJutaan.appendChild(paragraph);
    }
}

function persenPuluhanJutaan(){
    var resultPersenPuluhanJutaan = document.getElementById("resultPersenPuluhanJutaan");

    // Looping dari 1 sampai 9
    var percentage = 0;
    for (var i = 10000000; i <= 10000009; i++) {
        percentage++;
        var value = i;

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
        resultPersenPuluhanJutaan.appendChild(paragraph);
    }
}

function persenRatusanJutaan(){
    var resultpersenRatusanJutaan = document.getElementById("resultpersenRatusanJutaan");

    // Looping dari 1 sampai 9
    var percentage = 0;
    for (var i = 100000000; i <= 100000009; i++) {
        percentage++;
        var value = i;

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
        resultpersenRatusanJutaan.appendChild(paragraph);
    }
}

function persenMiliar(){
    var resultpersenMiliar = document.getElementById("resultpersenMiliar");

    // Looping dari 1 sampai 9
    var percentage = 0;
    for (var i = 1000000000; i <= 1000000009; i++) {
        percentage++;
        var value = i;

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
        resultpersenMiliar.appendChild(paragraph);
    }
}

function persenPuluhanMiliar(){
    var resultpersenPuluhanMiliar = document.getElementById("resultpersenPuluhanMiliar");

    // Looping dari 1 sampai 9
    var percentage = 0;
    for (var i = 10000000000; i <= 10000000009; i++) {
        percentage++;
        var value = i;

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
        resultpersenPuluhanMiliar.appendChild(paragraph);
    }
}
function persenRatusanMiliar(){
    var resultpersenRatusanMiliar = document.getElementById("resultpersenRatusanMiliar");

    // Looping dari 1 sampai 9
    var percentage = 0;
    for (var i = 100000000000; i <= 100000000009; i++) {
        percentage++;
        var value = i;

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
        resultpersenRatusanMiliar.appendChild(paragraph);
    }
}

function persenTriliun(){
    var resultpersenTriliun = document.getElementById("resultpersenTriliun");

    // Looping dari 1 sampai 9
    var percentage = 0;
    for (var i = 1000000000000; i <= 1000000000009; i++) {
        percentage++;
        var value = i;

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
        resultpersenTriliun.appendChild(paragraph);
    }
}

function persenPuluhanTriliun(){
    var resultpersenPuluhanTriliun = document.getElementById("resultpersenPuluhanTriliun");

    // Looping dari 1 sampai 9
    var percentage = 0;
    for (var i = 10000000000000; i <= 10000000000009; i++) {
        percentage++;
        var value = i;

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
        resultpersenPuluhanTriliun.appendChild(paragraph);
    }
}


persenSatuan()
persenPuluhan()
persenRatusan()
persenRibuan()
persenPuluhRibuan()
persenRatusanRibuan()
persenJutaan()
persenPuluhanJutaan()
persenRatusanJutaan()
persenMiliar()
persenPuluhanMiliar()
persenRatusanMiliar()
persenTriliun()
persenPuluhanTriliun()