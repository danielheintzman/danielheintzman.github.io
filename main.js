const whitescreen = document.getElementById('whitescreen');
const switchOneLinks = document.querySelectorAll('.rbh-switch-1');
const switchTwoLinks = document.querySelectorAll('.rbh-switch-2');
const switchThreeLinks = document.querySelectorAll('.rbh-switch-3');
const rbhImgOne = document.getElementById('initial-web');
const rbhImgTwo = document.getElementById('prev-mobile-ios');
const rbhImgThree = document.getElementById('prev-mobile-android');
const rbhImgFour = document.getElementById('new-mobile-ios');
const rbhImgFive = document.getElementById('new-mobile-android');
const facebookAccDesk = document.getElementById("fb0");
const facebookPassDesk = document.getElementById("fb1");
const facebookPassAnd = document.getElementById("fb2");
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const fbVid1 = document.querySelector('.case-study-video');
const fbVid2 = document.getElementById('facebook-desktop');
const fbVid3 = document.getElementById('facebook-mobile');

//removing the whitescreen on page load function
function removeWhitescreen() {
    whitescreen.classList.add('hidden');
    setTimeout(() => {
        whitescreen.classList.add('undisplayed')
    }, 1000);

}
whitescreen.addEventListener("DOMContentLoaded", removeWhitescreen())

//This function is for the robinhood image switch
function changeActive(arr, lucky, old1, old2, img1, newsrc1, img2 = null, newsrc2 = null) {
    if (!arr[lucky].classList.contains('active')) {
        if (arr[old1].classList.contains('active')) {
            arr[old1].classList.remove('active');
            arr[lucky].classList.add('active');
        } else {
            arr[old2].classList.remove('active');
            arr[lucky].classList.add('active');
        }
        img1.src = newsrc1;
        if (img2 != null) {
            img2.src = newsrc2;
        }
    }
}

//This is for the robinhood image switch
if (switchOneLinks[0] != null && switchOneLinks[0] != undefined) {
    switchOneLinks[0].addEventListener('click', (event) => {
        event.preventDefault();
        changeActive(switchOneLinks, 0, 1, 2, rbhImgOne, "../static/img/robinhood/initial-web-stock-detail.png");
    });
    switchOneLinks[1].addEventListener('click', (event) => {
        event.preventDefault();
        changeActive(switchOneLinks, 1, 0, 2, rbhImgOne, "../static/img/robinhood/initial-web-search.png");
    });
    switchOneLinks[2].addEventListener('click', (event) => {
        event.preventDefault();
        changeActive(switchOneLinks, 2, 0, 1, rbhImgOne, "../static/img/robinhood/initial-web-list.png");
    });
    switchTwoLinks[0].addEventListener('click', (event) => {
        event.preventDefault();
        changeActive(switchTwoLinks, 0, 1, 2, rbhImgTwo, "../static/img/robinhood/previous-ios-stock-detail.png", rbhImgThree, "../static/img/robinhood/previous-android-stock-detail.png");
    });
    switchTwoLinks[1].addEventListener('click', (event) => {
        event.preventDefault();
        changeActive(switchTwoLinks, 1, 0, 2, rbhImgTwo, "../static/img/robinhood/previous-ios-search.png", rbhImgThree, "../static/img/robinhood/previous-android-search.png");
    });
    switchTwoLinks[2].addEventListener('click', (event) => {
        event.preventDefault();
        changeActive(switchTwoLinks, 2, 0, 1, rbhImgTwo, "../static/img/robinhood/previous-ios-list.png", rbhImgThree, "../static/img/robinhood/previous-android-list.png");
    });
    switchThreeLinks[0].addEventListener('click', (event) => {
        event.preventDefault();
        changeActive(switchThreeLinks, 0, 1, 2, rbhImgFour, "../static/img/robinhood/new-ios-stock-detail.png", rbhImgFive, "../static/img/robinhood/new-android-stock-detail.png");
    });
    switchThreeLinks[1].addEventListener('click', (event) => {
        event.preventDefault();
        changeActive(switchThreeLinks, 1, 0, 2, rbhImgFour, "../static/img/robinhood/new-ios-search.png", rbhImgFive, "../static/img/robinhood/new-android-search.png");
    });
    switchThreeLinks[2].addEventListener('click', (event) => {
        event.preventDefault();
        changeActive(switchThreeLinks, 2, 0, 1, rbhImgFour, "../static/img/robinhood/new-ios-list.png", rbhImgFive, "../static/img/robinhood/new-android-list.png");
    });
}


if(facebookPassDesk!=null && facebookPassDesk!=undefined){
    if(vw > 900){
        facebookAccDesk.setAttribute('src', '');
        facebookPassDesk.setAttribute('src', '');
        facebookPassAnd.setAttribute('src', '');
        fbVid1.load();
        fbVid2.load();
        fbVid3.load();
        fbVid1.play();
        fbVid2.play();
        fbVid3.play();
    }
}