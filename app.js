// Data
const hn = {
    satu: {
        tgl: "01012021",
        tglBaru: "2021-01-01",
        ket: "Tahun Baru 2021 Masehi"
    },
    dua: {
        tgl: "12022021",
        tglBaru: "2021-02-12",
        ket: "Tahun Baru Imlek 2572 Kongzili"
    },
    tiga: {
        tgl: "11032021",
        tglBaru: "2021-03-11",
        ket: "Isra Mikraj Nabi Muhammad SAW"
    },
    empat: {
        tgl: "14032021",
        tglBaru: "2021-03-14",
        ket: "Hari Suci Nyepi Tahun Baru Saka 1943"
    },
    lima: {
        tgl: "02042021",
        tglBaru: "2021-04-02",
        ket: "Wafat Isa Al Masih"
    },
    enam: {
        tgl: "01052021",
        tglBaru: "2021-05-01",
        ket: "Hari Buruh Internasional"
    },
    tujuh: {
        tgl: "13052021",
        tglBaru: "2021-05-13",
        ket: "Kenaikan Isa Al Masih"
    },
    delapan: {
        tgl: "13052021",
        tglBaru: "2021-05-13",
        ket: "Hari Raya Idul Fitri 1442 Hijriah"
    },
    sembilan: {
        tgl: "26052021",
        tglBaru: "2021-05-26",
        ket: "Hari Raya Waisak 2565"
    },
    sepuluh: {
        tgl: "01062021",
        tglBaru: "2021-06-01",
        ket: "Hari Lahir Pancasila"
    },
    sebelas: {
        tgl: "20072021",
        tglBaru: "2021-07-20",
        ket: "Hari Raya Idul Adha 1442 Hijriah"
    },
    duabelas: {
        tgl: "10082021",
        tglBaru: "2021-08-10",
        ket: "Tahun Baru Islam 1443 Hijriah"
    },
    tigabelas: {
        tgl: "17082021",
        tglBaru: "2021-08-17",
        ket: "Hari Kemerdekaan Republik Indonesia"
    },
    empatbelas: {
        tgl: "19102021",
        tglBaru: "2021-10-19",
        ket: "Maulid Nabi Muhammad SAW"
    },
    limabelas: {
        tgl: "25122021",
        tglBaru: "2021-12-25",
        ket: "Hari Raya Natal"
    },
}

// Wib
const tglWib = document.getElementById('tgl-wib')
const jamWib = document.getElementById('jam-wib')
const hariWib = document.getElementById('hari-wib')
const upcomingWib = document.getElementById('upcoming-wib')
const btnWib = document.getElementById('btn-wib')
const eventWib = document.getElementById('event-wib')
const afterWib = document.getElementById('after-wib')
const beforeWib = document.getElementById('before-wib')
// Wita
const tglWita = document.getElementById('tgl-wita')
const jamWita = document.getElementById('jam-wita')
const hariWita = document.getElementById('hari-wita')
const upcomingWita = document.getElementById('upcoming-wita')
const btnWita = document.getElementById('btn-wita')
const eventWita = document.getElementById('event-wita')
const afterWita = document.getElementById('after-wita')
const beforeWita = document.getElementById('before-wita')
// Wit
const tglWit = document.getElementById('tgl-wit')
const jamWit = document.getElementById('jam-wit')
const hariWit = document.getElementById('hari-wit')
const upcomingWit = document.getElementById('upcoming-wit')
const btnWit = document.getElementById('btn-wit')
const eventWit = document.getElementById('event-wit')
const afterWit = document.getElementById('after-wit')
const beforeWit = document.getElementById('before-wit')
// Global
// function
btnWib.addEventListener('click', changePageWib)
btnWita.addEventListener('click', changePageWita)
btnWit.addEventListener('click', changePageWit)

function changePageWib() {
    //wib
    btnWib.classList.add('btn-info')
    btnWib.classList.remove('btn-light')
    eventWib.classList.add('d-flex')
    eventWib.classList.remove('d-none')
    //wita
    btnWita.classList.add('btn-light')
    btnWita.classList.remove('btn-info')
    eventWita.classList.add('d-none')
    eventWita.classList.remove('d-flex')
    //wit
    btnWit.classList.add('btn-light')
    btnWit.classList.remove('btn-info')
    eventWit.classList.add('d-none')
    eventWit.classList.remove('d-flex')
}

function changePageWita() {
    //wib
    btnWib.classList.add('btn-light')
    btnWib.classList.remove('btn-info')
    eventWib.classList.add('d-none')
    eventWib.classList.remove('d-d-flex')
    //wita
    btnWita.classList.add('btn-info')
    btnWita.classList.remove('btn-light')
    eventWita.classList.add('d-flex')
    eventWita.classList.remove('d-none')
    //wit
    btnWit.classList.add('btn-light')
    btnWit.classList.remove('btn-info')
    eventWit.classList.add('d-none')
    eventWit.classList.remove('d-d-flex')
}

function changePageWit() {
    //wib
    btnWib.classList.add('btn-light')
    btnWib.classList.remove('btn-info')
    eventWib.classList.add('d-none')
    eventWib.classList.remove('d-flex')
    //wita
    btnWita.classList.add('btn-light')
    btnWita.classList.remove('btn-info')
    eventWita.classList.add('d-none')
    eventWita.classList.remove('d-flex')
    //wit
    btnWit.classList.add('btn-info')
    btnWit.classList.remove('btn-light')
    eventWit.classList.add('d-flex')
    eventWit.classList.remove('d-none')
}

function globalLive() {
    const timesWib = moment().utcOffset('+07:00').locale('id').format('dddd')
    const timesWita = moment().utcOffset('+08:00').locale('id').format('dddd')
    const timesWit = moment().utcOffset('+09:00').locale('id').format('dddd')
    // wib
    tglWib.innerHTML = moment().utcOffset('+07:00').locale('id').format('LL')
    jamWib.innerHTML = moment().utcOffset('+07:00').locale('id').format('HH:mm:ss')
    switch (timesWib) {
        case 'Senin':
            hariWib.children[0].classList.toggle('blink')
            break;
        case 'Selasa':
            hariWib.children[1].classList.toggle('blink')
            break;
        case 'Rabu':
            hariWib.children[2].classList.toggle('blink')
            break;
        case 'Kamis':
            hariWib.children[3].classList.toggle('blink')
            break;
        case 'Jumat':
            hariWib.children[4].classList.toggle('blink')
            break;
        case 'Sabtu':
            hariWib.children[5].classList.toggle('blink')
            break;
        case 'Minggu':
            hariWib.children[6].classList.toggle('blink')
            break;

        default:
            break;
    }
    //wita
    tglWita.innerHTML = moment().utcOffset('+08:00').locale('id').format('LL')
    jamWita.innerHTML = moment().utcOffset('+08:00').locale('id').format('HH:mm:ss')
    switch (timesWita) {
        case 'Senin':
            hariWita.children[0].classList.toggle('blink')
            break;
        case 'Selasa':
            hariWita.children[1].classList.toggle('blink')
            break;
        case 'Rabu':
            hariWita.children[2].classList.toggle('blink')
            break;
        case 'Kamis':
            hariWita.children[3].classList.toggle('blink')
            break;
        case 'Jumat':
            hariWita.children[4].classList.toggle('blink')
            break;
        case 'Sabtu':
            hariWita.children[5].classList.toggle('blink')
            break;
        case 'Minggu':
            hariWita.children[6].classList.toggle('blink')
            break;

        default:
            break;
    }
    //wit
    tglWit.innerHTML = moment().utcOffset('+09:00').locale('id').format('LL')
    jamWit.innerHTML = moment().utcOffset('+09:00').locale('id').format('HH:mm:ss')
    switch (timesWit) {
        case 'Senin':
            hariWit.children[0].classList.toggle('blink')
            break;
        case 'Selasa':
            hariWit.children[1].classList.toggle('blink')
            break;
        case 'Rabu':
            hariWit.children[2].classList.toggle('blink')
            break;
        case 'Kamis':
            hariWit.children[3].classList.toggle('blink')
            break;
        case 'Jumat':
            hariWit.children[4].classList.toggle('blink')
            break;
        case 'Sabtu':
            hariWit.children[5].classList.toggle('blink')
            break;
        case 'Minggu':
            hariWit.children[6].classList.toggle('blink')
            break;

        default:
            break;
    }

    // wib after
    if (moment().isBefore(hn.satu.tglBaru)) {
        afterWib.children[14].classList.add('d-none')
    } else {
        afterWib.children[14].classList.remove('d-none')
    }
    if (moment().isBefore(hn.dua.tglBaru)) {
        afterWib.children[13].classList.add('d-none')
    } else {
        afterWib.children[13].classList.remove('d-none')
    }
    if (moment().isBefore(hn.tiga.tglBaru)) {
        afterWib.children[12].classList.add('d-none')
    } else {
        afterWib.children[12].classList.remove('d-none')
    }
    if (moment().isBefore(hn.empat.tglBaru)) {
        afterWib.children[11].classList.add('d-none')
    } else {
        afterWib.children[11].classList.remove('d-none')
    }
    if (moment().isBefore(hn.lima.tglBaru)) {
        afterWib.children[10].classList.add('d-none')
    } else {
        afterWib.children[10].classList.remove('d-none')
    }
    if (moment().isBefore(hn.enam.tglBaru)) {
        afterWib.children[9].classList.add('d-none')
    } else {
        afterWib.children[9].classList.remove('d-none')
    }
    if (moment().isBefore(hn.tujuh.tglBaru)) {
        afterWib.children[8].classList.add('d-none')
    } else {
        afterWib.children[8].classList.remove('d-none')
    }
    if (moment().isBefore(hn.delapan.tglBaru)) {
        afterWib.children[7].classList.add('d-none')
    } else {
        afterWib.children[7].classList.remove('d-none')
    }
    if (moment().isBefore(hn.sembilan.tglBaru)) {
        afterWib.children[6].classList.add('d-none')
    } else {
        afterWib.children[6].classList.remove('d-none')
    }
    if (moment().isBefore(hn.sepuluh.tglBaru)) {
        afterWib.children[5].classList.add('d-none')
    } else {
        afterWib.children[5].classList.remove('d-none')
    }
    if (moment().isBefore(hn.sebelas.tglBaru)) {
        afterWib.children[4].classList.add('d-none')
    } else {
        afterWib.children[4].classList.remove('d-none')
    }
    if (moment().isBefore(hn.duabelas.tglBaru)) {
        afterWib.children[3].classList.add('d-none')
    } else {
        afterWib.children[3].classList.remove('d-none')
    }
    if (moment().isBefore(hn.tigabelas.tglBaru)) {
        afterWib.children[1].classList.add('d-none')
    } else {
        afterWib.children[1].classList.remove('d-none')
    }
    if (moment().isBefore(hn.limabelas.tglBaru)) {
        afterWib.children[0].classList.add('d-none')
    } else {
        afterWib.children[0].classList.remove('d-none')
    }

    // wib before
    if (moment().isBefore(hn.satu.tglBaru)) {
        beforeWib.children[0].classList.remove('d-none')
    } else {
        beforeWib.children[0].classList.add('d-none')
    }
    if (moment().isBefore(hn.dua.tglBaru)) {
        beforeWib.children[1].classList.remove('d-none')
    } else {
        beforeWib.children[1].classList.add('d-none')
    }
    if (moment().isBefore(hn.tiga.tglBaru)) {
        beforeWib.children[2].classList.remove('d-none')
    } else {
        beforeWib.children[2].classList.add('d-none')
    }
    if (moment().isBefore(hn.empat.tglBaru)) {
        beforeWib.children[3].classList.remove('d-none')
    } else {
        beforeWib.children[3].classList.add('d-none')
    }
    if (moment().isBefore(hn.lima.tglBaru)) {
        beforeWib.children[4].classList.remove('d-none')
    } else {
        beforeWib.children[4].classList.add('d-none')
    }
    if (moment().isBefore(hn.enam.tglBaru)) {
        beforeWib.children[5].classList.remove('d-none')
    } else {
        beforeWib.children[5].classList.add('d-none')
    }
    if (moment().isBefore(hn.tujuh.tglBaru)) {
        beforeWib.children[6].classList.remove('d-none')
    } else {
        beforeWib.children[6].classList.add('d-none')
    }
    if (moment().isBefore(hn.delapan.tglBaru)) {
        beforeWib.children[7].classList.remove('d-none')
    } else {
        beforeWib.children[7].classList.add('d-none')
    }
    if (moment().isBefore(hn.sembilan.tglBaru)) {
        beforeWib.children[8].classList.remove('d-none')
    } else {
        beforeWib.children[8].classList.add('d-none')
    }
    if (moment().isBefore(hn.sepuluh.tglBaru)) {
        beforeWib.children[9].classList.remove('d-none')
    } else {
        beforeWib.children[9].classList.add('d-none')
    }
    if (moment().isBefore(hn.sebelas.tglBaru)) {
        beforeWib.children[10].classList.remove('d-none')
    } else {
        beforeWib.children[10].classList.add('d-none')
    }
    if (moment().isBefore(hn.duabelas.tglBaru)) {
        beforeWib.children[11].classList.remove('d-none')
    } else {
        beforeWib.children[11].classList.add('d-none')
    }
    if (moment().isBefore(hn.tigabelas.tglBaru)) {
        beforeWib.children[12].classList.remove('d-none')
    } else {
        beforeWib.children[12].classList.add('d-none')
    }
    if (moment().isBefore(hn.empatbelas.tglBaru)) {
        beforeWib.children[13].classList.remove('d-none')
    } else {
        beforeWib.children[13].classList.add('d-none')
    }
    if (moment().isBefore(hn.limabelas.tglBaru)) {
        beforeWib.children[14].classList.remove('d-none')
    } else {
        beforeWib.children[14].classList.add('d-none')
    }

    //wib after
    afterWib.children[0].innerHTML = `${hn.limabelas.ket} ${moment(hn.limabelas.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`
    afterWib.children[1].innerHTML = `${hn.empatbelas.ket} ${moment(hn.empatbelas.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`
    afterWib.children[2].innerHTML = `${hn.tigabelas.ket} ${moment(hn.tigabelas.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`
    afterWib.children[3].innerHTML = `${hn.duabelas.ket} ${moment(hn.duabelas.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`
    afterWib.children[4].innerHTML = `${hn.sebelas.ket} ${moment(hn.sebelas.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`
    afterWib.children[5].innerHTML = `${hn.sepuluh.ket} ${moment(hn.sepuluh.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`
    afterWib.children[6].innerHTML = `${hn.sembilan.ket} ${moment(hn.sembilan.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`
    afterWib.children[7].innerHTML = `${hn.delapan.ket} ${moment(hn.delapan.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`
    afterWib.children[8].innerHTML = `${hn.tujuh.ket} ${moment(hn.tujuh.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`
    afterWib.children[9].innerHTML = `${hn.enam.ket} ${moment(hn.enam.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`
    afterWib.children[10].innerHTML = `${hn.lima.ket} ${moment(hn.lima.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`
    afterWib.children[11].innerHTML = `${hn.empat.ket} ${moment(hn.empat.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`
    afterWib.children[12].innerHTML = `${hn.tiga.ket} ${moment(hn.tiga.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`
    afterWib.children[13].innerHTML = `${hn.dua.ket} ${moment(hn.dua.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`
    afterWib.children[14].innerHTML = `${hn.satu.ket} ${moment(hn.satu.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`
    // wib before
    beforeWib.children[14].innerHTML = `${hn.limabelas.ket} ${moment(hn.limabelas.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`
    beforeWib.children[13].innerHTML = `${hn.empatbelas.ket} ${moment(hn.empatbelas.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`
    beforeWib.children[12].innerHTML = `${hn.tigabelas.ket} ${moment(hn.tigabelas.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`
    beforeWib.children[11].innerHTML = `${hn.duabelas.ket} ${moment(hn.duabelas.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`
    beforeWib.children[10].innerHTML = `${hn.sebelas.ket} ${moment(hn.sebelas.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`
    beforeWib.children[9].innerHTML = `${hn.sepuluh.ket} ${moment(hn.sepuluh.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`
    beforeWib.children[8].innerHTML = `${hn.sembilan.ket} ${moment(hn.sembilan.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`
    beforeWib.children[7].innerHTML = `${hn.delapan.ket} ${moment(hn.delapan.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`
    beforeWib.children[6].innerHTML = `${hn.tujuh.ket} ${moment(hn.tujuh.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`
    beforeWib.children[5].innerHTML = `${hn.enam.ket} ${moment(hn.enam.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`
    beforeWib.children[4].innerHTML = `${hn.lima.ket} ${moment(hn.lima.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`
    beforeWib.children[3].innerHTML = `${hn.empat.ket} ${moment(hn.empat.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`
    beforeWib.children[2].innerHTML = `${hn.tiga.ket} ${moment(hn.tiga.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`
    beforeWib.children[1].innerHTML = `${hn.dua.ket} ${moment(hn.dua.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`
    beforeWib.children[0].innerHTML = `${hn.satu.ket} ${moment(hn.satu.tgl, "DDMMYYYY").locale('id').startOf('hour').fromNow()}`

    // wita after
    if (moment().utcOffset('+08:00').isBefore(hn.satu.tglBaru)) {
        afterWita.children[14].classList.add('d-none')
    } else {
        afterWita.children[14].classList.remove('d-none')
    }
    if (moment().utcOffset('+08:00').isBefore(hn.dua.tglBaru)) {
        afterWita.children[13].classList.add('d-none')
    } else {
        afterWita.children[13].classList.remove('d-none')
    }
    if (moment().utcOffset('+08:00').isBefore(hn.tiga.tglBaru)) {
        afterWita.children[12].classList.add('d-none')
    } else {
        afterWita.children[12].classList.remove('d-none')
    }
    if (moment().utcOffset('+08:00').isBefore(hn.empat.tglBaru)) {
        afterWita.children[11].classList.add('d-none')
    } else {
        afterWita.children[11].classList.remove('d-none')
    }
    if (moment().utcOffset('+08:00').isBefore(hn.lima.tglBaru)) {
        afterWita.children[10].classList.add('d-none')
    } else {
        afterWita.children[10].classList.remove('d-none')
    }
    if (moment().utcOffset('+08:00').isBefore(hn.enam.tglBaru)) {
        afterWita.children[9].classList.add('d-none')
    } else {
        afterWita.children[9].classList.remove('d-none')
    }
    if (moment().utcOffset('+08:00').isBefore(hn.tujuh.tglBaru)) {
        afterWita.children[8].classList.add('d-none')
    } else {
        afterWita.children[8].classList.remove('d-none')
    }
    if (moment().utcOffset('+08:00').isBefore(hn.delapan.tglBaru)) {
        afterWita.children[7].classList.add('d-none')
    } else {
        afterWita.children[7].classList.remove('d-none')
    }
    if (moment().utcOffset('+08:00').isBefore(hn.sembilan.tglBaru)) {
        afterWita.children[6].classList.add('d-none')
    } else {
        afterWita.children[6].classList.remove('d-none')
    }
    if (moment().utcOffset('+08:00').isBefore(hn.sepuluh.tglBaru)) {
        afterWita.children[5].classList.add('d-none')
    } else {
        afterWita.children[5].classList.remove('d-none')
    }
    if (moment().utcOffset('+08:00').isBefore(hn.sebelas.tglBaru)) {
        afterWita.children[4].classList.add('d-none')
    } else {
        afterWita.children[4].classList.remove('d-none')
    }
    if (moment().utcOffset('+08:00').isBefore(hn.duabelas.tglBaru)) {
        afterWita.children[3].classList.add('d-none')
    } else {
        afterWita.children[3].classList.remove('d-none')
    }
    if (moment().utcOffset('+08:00').isBefore(hn.tigabelas.tglBaru)) {
        afterWita.children[1].classList.add('d-none')
    } else {
        afterWita.children[1].classList.remove('d-none')
    }
    if (moment().utcOffset('+08:00').isBefore(hn.limabelas.tglBaru)) {
        afterWita.children[0].classList.add('d-none')
    } else {
        afterWita.children[0].classList.remove('d-none')
    }

    // wita before
    if (moment().utcOffset('+08:00').isBefore(hn.satu.tglBaru)) {
        beforeWita.children[0].classList.remove('d-none')
    } else {
        beforeWita.children[0].classList.add('d-none')
    }
    if (moment().utcOffset('+08:00').isBefore(hn.dua.tglBaru)) {
        beforeWita.children[1].classList.remove('d-none')
    } else {
        beforeWita.children[1].classList.add('d-none')
    }
    if (moment().utcOffset('+08:00').isBefore(hn.tiga.tglBaru)) {
        beforeWita.children[2].classList.remove('d-none')
    } else {
        beforeWita.children[2].classList.add('d-none')
    }
    if (moment().utcOffset('+08:00').isBefore(hn.empat.tglBaru)) {
        beforeWita.children[3].classList.remove('d-none')
    } else {
        beforeWita.children[3].classList.add('d-none')
    }
    if (moment().utcOffset('+08:00').isBefore(hn.lima.tglBaru)) {
        beforeWita.children[4].classList.remove('d-none')
    } else {
        beforeWita.children[4].classList.add('d-none')
    }
    if (moment().utcOffset('+08:00').isBefore(hn.enam.tglBaru)) {
        beforeWita.children[5].classList.remove('d-none')
    } else {
        beforeWita.children[5].classList.add('d-none')
    }
    if (moment().utcOffset('+08:00').isBefore(hn.tujuh.tglBaru)) {
        beforeWita.children[6].classList.remove('d-none')
    } else {
        beforeWita.children[6].classList.add('d-none')
    }
    if (moment().utcOffset('+08:00').isBefore(hn.delapan.tglBaru)) {
        beforeWita.children[7].classList.remove('d-none')
    } else {
        beforeWita.children[7].classList.add('d-none')
    }
    if (moment().utcOffset('+08:00').isBefore(hn.sembilan.tglBaru)) {
        beforeWita.children[8].classList.remove('d-none')
    } else {
        beforeWita.children[8].classList.add('d-none')
    }
    if (moment().utcOffset('+08:00').isBefore(hn.sepuluh.tglBaru)) {
        beforeWita.children[9].classList.remove('d-none')
    } else {
        beforeWita.children[9].classList.add('d-none')
    }
    if (moment().utcOffset('+08:00').isBefore(hn.sebelas.tglBaru)) {
        beforeWita.children[10].classList.remove('d-none')
    } else {
        beforeWita.children[10].classList.add('d-none')
    }
    if (moment().utcOffset('+08:00').isBefore(hn.duabelas.tglBaru)) {
        beforeWita.children[11].classList.remove('d-none')
    } else {
        beforeWita.children[11].classList.add('d-none')
    }
    if (moment().utcOffset('+08:00').isBefore(hn.tigabelas.tglBaru)) {
        beforeWita.children[12].classList.remove('d-none')
    } else {
        beforeWita.children[12].classList.add('d-none')
    }
    if (moment().utcOffset('+08:00').isBefore(hn.empatbelas.tglBaru)) {
        beforeWita.children[13].classList.remove('d-none')
    } else {
        beforeWita.children[13].classList.add('d-none')
    }
    if (moment().utcOffset('+08:00').isBefore(hn.limabelas.tglBaru)) {
        beforeWita.children[14].classList.remove('d-none')
    } else {
        beforeWita.children[14].classList.add('d-none')
    }

    //wita after
    afterWita.children[0].innerHTML = `${hn.limabelas.ket} ${moment(hn.limabelas.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`
    afterWita.children[1].innerHTML = `${hn.empatbelas.ket} ${moment(hn.empatbelas.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`
    afterWita.children[2].innerHTML = `${hn.tigabelas.ket} ${moment(hn.tigabelas.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`
    afterWita.children[3].innerHTML = `${hn.duabelas.ket} ${moment(hn.duabelas.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`
    afterWita.children[4].innerHTML = `${hn.sebelas.ket} ${moment(hn.sebelas.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`
    afterWita.children[5].innerHTML = `${hn.sepuluh.ket} ${moment(hn.sepuluh.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`
    afterWita.children[6].innerHTML = `${hn.sembilan.ket} ${moment(hn.sembilan.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`
    afterWita.children[7].innerHTML = `${hn.delapan.ket} ${moment(hn.delapan.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`
    afterWita.children[8].innerHTML = `${hn.tujuh.ket} ${moment(hn.tujuh.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`
    afterWita.children[9].innerHTML = `${hn.enam.ket} ${moment(hn.enam.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`
    afterWita.children[10].innerHTML = `${hn.lima.ket} ${moment(hn.lima.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`
    afterWita.children[11].innerHTML = `${hn.empat.ket} ${moment(hn.empat.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`
    afterWita.children[12].innerHTML = `${hn.tiga.ket} ${moment(hn.tiga.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`
    afterWita.children[13].innerHTML = `${hn.dua.ket} ${moment(hn.dua.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`
    afterWita.children[14].innerHTML = `${hn.satu.ket} ${moment(hn.satu.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`
    // wita before
    beforeWita.children[14].innerHTML = `${hn.limabelas.ket} ${moment(hn.limabelas.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`
    beforeWita.children[13].innerHTML = `${hn.empatbelas.ket} ${moment(hn.empatbelas.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`
    beforeWita.children[12].innerHTML = `${hn.tigabelas.ket} ${moment(hn.tigabelas.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`
    beforeWita.children[11].innerHTML = `${hn.duabelas.ket} ${moment(hn.duabelas.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`
    beforeWita.children[10].innerHTML = `${hn.sebelas.ket} ${moment(hn.sebelas.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`
    beforeWita.children[9].innerHTML = `${hn.sepuluh.ket} ${moment(hn.sepuluh.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`
    beforeWita.children[8].innerHTML = `${hn.sembilan.ket} ${moment(hn.sembilan.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`
    beforeWita.children[7].innerHTML = `${hn.delapan.ket} ${moment(hn.delapan.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`
    beforeWita.children[6].innerHTML = `${hn.tujuh.ket} ${moment(hn.tujuh.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`
    beforeWita.children[5].innerHTML = `${hn.enam.ket} ${moment(hn.enam.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`
    beforeWita.children[4].innerHTML = `${hn.lima.ket} ${moment(hn.lima.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`
    beforeWita.children[3].innerHTML = `${hn.empat.ket} ${moment(hn.empat.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`
    beforeWita.children[2].innerHTML = `${hn.tiga.ket} ${moment(hn.tiga.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`
    beforeWita.children[1].innerHTML = `${hn.dua.ket} ${moment(hn.dua.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`
    beforeWita.children[0].innerHTML = `${hn.satu.ket} ${moment(hn.satu.tgl, "DDMMYYYY").utcOffset('+08:00').locale('id').startOf('hour').fromNow()}`

    // wit after
    if (moment().utcOffset('+09:00').isBefore(hn.satu.tglBaru)) {
        afterWit.children[14].classList.add('d-none')
    } else {
        afterWit.children[14].classList.remove('d-none')
    }
    if (moment().utcOffset('+09:00').isBefore(hn.dua.tglBaru)) {
        afterWit.children[13].classList.add('d-none')
    } else {
        afterWit.children[13].classList.remove('d-none')
    }
    if (moment().utcOffset('+09:00').isBefore(hn.tiga.tglBaru)) {
        afterWit.children[12].classList.add('d-none')
    } else {
        afterWit.children[12].classList.remove('d-none')
    }
    if (moment().utcOffset('+09:00').isBefore(hn.empat.tglBaru)) {
        afterWit.children[11].classList.add('d-none')
    } else {
        afterWit.children[11].classList.remove('d-none')
    }
    if (moment().utcOffset('+09:00').isBefore(hn.lima.tglBaru)) {
        afterWit.children[10].classList.add('d-none')
    } else {
        afterWit.children[10].classList.remove('d-none')
    }
    if (moment().utcOffset('+09:00').isBefore(hn.enam.tglBaru)) {
        afterWit.children[9].classList.add('d-none')
    } else {
        afterWit.children[9].classList.remove('d-none')
    }
    if (moment().utcOffset('+09:00').isBefore(hn.tujuh.tglBaru)) {
        afterWit.children[8].classList.add('d-none')
    } else {
        afterWit.children[8].classList.remove('d-none')
    }
    if (moment().utcOffset('+09:00').isBefore(hn.delapan.tglBaru)) {
        afterWit.children[7].classList.add('d-none')
    } else {
        afterWit.children[7].classList.remove('d-none')
    }
    if (moment().utcOffset('+09:00').isBefore(hn.sembilan.tglBaru)) {
        afterWit.children[6].classList.add('d-none')
    } else {
        afterWit.children[6].classList.remove('d-none')
    }
    if (moment().utcOffset('+09:00').isBefore(hn.sepuluh.tglBaru)) {
        afterWit.children[5].classList.add('d-none')
    } else {
        afterWit.children[5].classList.remove('d-none')
    }
    if (moment().utcOffset('+09:00').isBefore(hn.sebelas.tglBaru)) {
        afterWit.children[4].classList.add('d-none')
    } else {
        afterWit.children[4].classList.remove('d-none')
    }
    if (moment().utcOffset('+09:00').isBefore(hn.duabelas.tglBaru)) {
        afterWit.children[3].classList.add('d-none')
    } else {
        afterWit.children[3].classList.remove('d-none')
    }
    if (moment().utcOffset('+09:00').isBefore(hn.tigabelas.tglBaru)) {
        afterWit.children[1].classList.add('d-none')
    } else {
        afterWit.children[1].classList.remove('d-none')
    }
    if (moment().utcOffset('+09:00').isBefore(hn.limabelas.tglBaru)) {
        afterWit.children[0].classList.add('d-none')
    } else {
        afterWit.children[0].classList.remove('d-none')
    }

    // wit before
    if (moment().utcOffset('+09:00').isBefore(hn.satu.tglBaru)) {
        beforeWit.children[0].classList.remove('d-none')
    } else {
        beforeWit.children[0].classList.add('d-none')
    }
    if (moment().utcOffset('+09:00').isBefore(hn.dua.tglBaru)) {
        beforeWit.children[1].classList.remove('d-none')
    } else {
        beforeWit.children[1].classList.add('d-none')
    }
    if (moment().utcOffset('+09:00').isBefore(hn.tiga.tglBaru)) {
        beforeWit.children[2].classList.remove('d-none')
    } else {
        beforeWit.children[2].classList.add('d-none')
    }
    if (moment().utcOffset('+09:00').isBefore(hn.empat.tglBaru)) {
        beforeWit.children[3].classList.remove('d-none')
    } else {
        beforeWit.children[3].classList.add('d-none')
    }
    if (moment().utcOffset('+09:00').isBefore(hn.lima.tglBaru)) {
        beforeWit.children[4].classList.remove('d-none')
    } else {
        beforeWit.children[4].classList.add('d-none')
    }
    if (moment().utcOffset('+09:00').isBefore(hn.enam.tglBaru)) {
        beforeWit.children[5].classList.remove('d-none')
    } else {
        beforeWit.children[5].classList.add('d-none')
    }
    if (moment().utcOffset('+09:00').isBefore(hn.tujuh.tglBaru)) {
        beforeWit.children[6].classList.remove('d-none')
    } else {
        beforeWit.children[6].classList.add('d-none')
    }
    if (moment().utcOffset('+09:00').isBefore(hn.delapan.tglBaru)) {
        beforeWit.children[7].classList.remove('d-none')
    } else {
        beforeWit.children[7].classList.add('d-none')
    }
    if (moment().utcOffset('+09:00').isBefore(hn.sembilan.tglBaru)) {
        beforeWit.children[8].classList.remove('d-none')
    } else {
        beforeWit.children[8].classList.add('d-none')
    }
    if (moment().utcOffset('+09:00').isBefore(hn.sepuluh.tglBaru)) {
        beforeWit.children[9].classList.remove('d-none')
    } else {
        beforeWit.children[9].classList.add('d-none')
    }
    if (moment().utcOffset('+09:00').isBefore(hn.sebelas.tglBaru)) {
        beforeWit.children[10].classList.remove('d-none')
    } else {
        beforeWit.children[10].classList.add('d-none')
    }
    if (moment().utcOffset('+09:00').isBefore(hn.duabelas.tglBaru)) {
        beforeWit.children[11].classList.remove('d-none')
    } else {
        beforeWit.children[11].classList.add('d-none')
    }
    if (moment().utcOffset('+09:00').isBefore(hn.tigabelas.tglBaru)) {
        beforeWit.children[12].classList.remove('d-none')
    } else {
        beforeWit.children[12].classList.add('d-none')
    }
    if (moment().utcOffset('+09:00').isBefore(hn.empatbelas.tglBaru)) {
        beforeWit.children[13].classList.remove('d-none')
    } else {
        beforeWit.children[13].classList.add('d-none')
    }
    if (moment().utcOffset('+09:00').isBefore(hn.limabelas.tglBaru)) {
        beforeWit.children[14].classList.remove('d-none')
    } else {
        beforeWit.children[14].classList.add('d-none')
    }

    //wit after
    afterWit.children[0].innerHTML = `${hn.limabelas.ket} ${moment(hn.limabelas.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
    afterWit.children[1].innerHTML = `${hn.empatbelas.ket} ${moment(hn.empatbelas.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
    afterWit.children[2].innerHTML = `${hn.tigabelas.ket} ${moment(hn.tigabelas.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
    afterWit.children[3].innerHTML = `${hn.duabelas.ket} ${moment(hn.duabelas.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
    afterWit.children[4].innerHTML = `${hn.sebelas.ket} ${moment(hn.sebelas.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
    afterWit.children[5].innerHTML = `${hn.sepuluh.ket} ${moment(hn.sepuluh.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
    afterWit.children[6].innerHTML = `${hn.sembilan.ket} ${moment(hn.sembilan.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
    afterWit.children[7].innerHTML = `${hn.delapan.ket} ${moment(hn.delapan.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
    afterWit.children[8].innerHTML = `${hn.tujuh.ket} ${moment(hn.tujuh.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
    afterWit.children[9].innerHTML = `${hn.enam.ket} ${moment(hn.enam.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
    afterWit.children[10].innerHTML = `${hn.lima.ket} ${moment(hn.lima.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
    afterWit.children[11].innerHTML = `${hn.empat.ket} ${moment(hn.empat.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
    afterWit.children[12].innerHTML = `${hn.tiga.ket} ${moment(hn.tiga.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
    afterWit.children[13].innerHTML = `${hn.dua.ket} ${moment(hn.dua.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
    afterWit.children[14].innerHTML = `${hn.satu.ket} ${moment(hn.satu.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
    // wit before
    beforeWit.children[14].innerHTML = `${hn.limabelas.ket} ${moment(hn.limabelas.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
    beforeWit.children[13].innerHTML = `${hn.empatbelas.ket} ${moment(hn.empatbelas.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
    beforeWit.children[12].innerHTML = `${hn.tigabelas.ket} ${moment(hn.tigabelas.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
    beforeWit.children[11].innerHTML = `${hn.duabelas.ket} ${moment(hn.duabelas.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
    beforeWit.children[10].innerHTML = `${hn.sebelas.ket} ${moment(hn.sebelas.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
    beforeWit.children[9].innerHTML = `${hn.sepuluh.ket} ${moment(hn.sepuluh.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
    beforeWit.children[8].innerHTML = `${hn.sembilan.ket} ${moment(hn.sembilan.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
    beforeWit.children[7].innerHTML = `${hn.delapan.ket} ${moment(hn.delapan.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
    beforeWit.children[6].innerHTML = `${hn.tujuh.ket} ${moment(hn.tujuh.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
    beforeWit.children[5].innerHTML = `${hn.enam.ket} ${moment(hn.enam.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
    beforeWit.children[4].innerHTML = `${hn.lima.ket} ${moment(hn.lima.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
    beforeWit.children[3].innerHTML = `${hn.empat.ket} ${moment(hn.empat.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
    beforeWit.children[2].innerHTML = `${hn.tiga.ket} ${moment(hn.tiga.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
    beforeWit.children[1].innerHTML = `${hn.dua.ket} ${moment(hn.dua.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
    beforeWit.children[0].innerHTML = `${hn.satu.ket} ${moment(hn.satu.tgl, "DDMMYYYY").utcOffset('+09:00').locale('id').startOf('hour').fromNow()}`
}
setInterval(globalLive, 1000)