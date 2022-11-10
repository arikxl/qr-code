const form = document.getElementById('generate-form');
const qrElement = document.getElementById('qrCode');

const handleSubmit= (e) => {
    e.preventDefault();
    clearUI();
    

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    if (url === ' ' || url.length < 10) {
        alert('Please enter a valid URL')
    } else {
        showSpinner();
        setTimeout(() => {
            hideSpinner()
            generateQrCode(url, size);
        }, 2000)
    }
}

const generateQrCode = (url, size) => {
    const qrcode = new QRCode('qrCode', {
        text: url,
        width: size,
        height: size,
    });
};


const showSpinner = () => {
    document.getElementById('spinner').style.display='block';
}
const hideSpinner = () => {
    document.getElementById('spinner').style.display='none';
}

const clearUI = () => {
    qrElement.innerHTML='';
}

hideSpinner()


form.addEventListener('submit', handleSubmit);

