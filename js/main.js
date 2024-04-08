let uploudBtn = document.getElementById('uploudBtn');
let choseenImage = document.getElementById('chosen-image');
let fileName = document.getElementById('file-name');
let container = document.querySelector('.container');

let error = document.getElementById('error');

let imageDisplay = document.getElementById('image_display');


const fileHandler = (file, name, type)  => {
    if(type.split('/')[0] !== 'image'){
        error.innerText = 'Please choose an image file';
        return false;
    }
    error.innerText = '';
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        let imageContainer = document.createElement('figure');
        let img = document.createElement('img');
        img.src = reader.result;
        imageContainer.appendChild(img);
        imageContainer.innerHTML += `<figcaption>${name}</figcaption>`;
        imageDisplay.appendChild(imageContainer);
    };
};

//Upload Button Event Listener

uploudBtn.addEventListener('change', () => {
    imageDisplay.innerHTML = '';
    Array.from(uploudBtn.files).forEach((file) => {
        fileHandler(file, file.name, file.type);
    });
} );
