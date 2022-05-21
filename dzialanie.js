const liczby = document.querySelectorAll('.number');
const liczba0 = document.querySelectorAll('.number0');
const rownosc = document.querySelectorAll('.equals');
const operatory = document.querySelectorAll('.operator');
const wyczysc = document.querySelectorAll('.clear');
const wynikAktualnie = document.querySelectorAll('.aktualneDzialanie');
const wynikPoprzednio = document.querySelectorAll('.poprzednieDzialanie');
let aktualneDzialanie = '';
let poprzednieDzialanie = '';
let operacja = undefined;
const zaktualizujWynik = () => {
    wynikAktualnie.innerText = aktualneDzialanie;
    wynikPoprzednio.innerText = poprzednieDzialanie;
};

const dodajLiczbe = (liczba) => {
    aktualneDzialanie = aktualneDzialanie.toString() + liczba.toString;

};
liczby.array.forEach(liczba => {
    liczba.addEventListener('click', () => {
        dodajLiczbe(liczba.innerText)
        zaktualizujWynik()
    });

});