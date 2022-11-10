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

            setTimeout(() => {
                const saveUrl = qrElement.querySelector('img').src;
                createSaveBtn(saveUrl);
            },50)

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
    const saveBtn = document.getElementById('save-link')
    if(saveBtn) {
        saveBtn.remove()
    }
}

const createSaveBtn = (saveURL) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'rounded bg-red-500 hover:bg-red-700 text-white font-bold py-2 w-1/3 m-auto my-5'
    link.href= saveURL;
    link.download = 'Inertia-QR Code';
    link.innerHTML= 'Save Image';
    document.getElementById('generated').appendChild(link);
}

hideSpinner()


form.addEventListener('submit', handleSubmit);

