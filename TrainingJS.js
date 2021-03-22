'use strict';

const hyperTrophymodal = document.querySelector('.hyperTrophy');
const cutModal = document.querySelector('.cut');
const bulkModal = document.querySelector('.bulk');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowHyper = document.querySelectorAll('.hypertrophyModal');
const btnsShowCut = document.querySelectorAll('.cutModal');
const btnsShowBulk = document.querySelectorAll('.bulkModal');

const closeModalsHyper = function () {
    hyperTrophymodal.classList.add('hidden');
    overlay.classList.add('hidden');
};
const openModalHyper = function () {
    hyperTrophymodal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsShowHyper.length; i++)
    btnsShowHyper[i].addEventListener('click', openModalHyper);

overlay.addEventListener('click', closeModalsHyper);
btnCloseModal.addEventListener('click', closeModalsHyper);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !hyperTrophymodal.classList.contains('hidden')) {
        closeModalsHyper();
    };
});


const closeModalsCut = function () {
    cutModal.classList.add('hidden');
    overlay.classList.add('hidden');
};
const openModalCut = function () {
    cutModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
for (let i = 0; i < btnsShowCut.length; i++)
    btnsShowCut[i].addEventListener('click', openModalCut);

    overlay.addEventListener('click', closeModalsCut);
    btnCloseModal.addEventListener('click', closeModalsCut);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !cutModal.classList.contains('hidden')) {
        closeModalsCut();
    };
});


const closeModalsBulk = function () {
    bulkModal.classList.add('hidden');
        overlay.classList.add('hidden');
    };
    const openModalBulk = function () {
        bulkModal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }
        for (let i = 0; i < btnsShowBulk.length; i++)
            btnsShowBulk[i].addEventListener('click', openModalBulk);

        overlay.addEventListener('click', closeModalsBulk);
        btnCloseModal.addEventListener('click', closeModalsBulk);

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && !bulkModal.classList.contains('hidden')) {
                closeModalsBulk();
            };
        })
    
