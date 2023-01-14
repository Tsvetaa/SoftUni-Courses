/*
function lockedProfile() {
    document.getElementsByTagName('main')[0].addEventListener('click', onClick);
    let status

    function onClick(event) {
        let radioBtns = Array.from(event.target.parentElement.querySelectorAll('input[type = "radio"]'));
        if (event.target.tagName == 'BUTTON' && event.target.textContent == "Show more") {

            radioBtns.forEach(btn => {
                if (btn.checked) {
                    status = btn.getAttribute("value")
                }
            })

            if (status == 'unlock') {
                event.target.parentElement.querySelector('div').style.display = 'block';
                event.target.textContent = 'Hide it';
            }
        } else if (event.target.tagName == 'BUTTON' && event.target.textContent == "Hide it") {

            radioBtns.forEach(btn => {
                if (btn.checked) {
                    status = btn.getAttribute("value")
                }
            })

            if (status == 'unlock') {
                event.target.parentElement.querySelector('div').style.display = '';
                event.target.textContent = 'Show more';
            }
        }
    }
}
*/
function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
        .forEach(b => b.addEventListener('click', toogle))

        function toogle(e) {
            const profile = e.target.parentElement; 
            const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

            if(isActive) {
                let div = profile.querySelector('div');

                if(e.target.textContent == 'Show more') {
                    div.style.display = 'block'
                    e.target.textContent = 'Hide it'
                } else {
                    div.style.display = ''
                    e.target.textContent = 'Show more'
                }
            }
        }
}