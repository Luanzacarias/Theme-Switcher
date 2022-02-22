const body = document.querySelector('body');

const toggle = document.getElementById('toggle');

toggle.onclick = () => {
    if (body.classList.contains('light') == true){
        body.classList.remove('light')
        body.classList.add('dark')
    }else {
        body.classList.remove('dark')
        body.classList.add('light')
    }

    
}