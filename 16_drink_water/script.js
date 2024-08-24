const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const remained = document.getElementById('remained');
const percentage = document.getElementById('percentage');

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--;
    }

    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const smallCupsDrank = document.querySelectorAll('.cup.cup-small.full');
    const totalCups = smallCups.length;

    if (smallCupsDrank.length === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${smallCupsDrank.length / totalCups * 330}px`;
        percentage.innerText = `${smallCupsDrank.length / totalCups * 100}%`;
    }

    if (smallCupsDrank.length === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * smallCupsDrank.length / 1000)}L`;
    }
}