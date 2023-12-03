const carData = {
    brands: ['Toyota', 'Ford', 'Tesla', 'Chevrolet', 'Honda', 'Nissan'],
    models: {
        Toyota: ['Camry', 'Corolla', 'Rav4'],
        Ford: ['Mustang', 'Fusion', 'Escape'],
        Tesla: ['Model S', 'Model 3', 'Model X'],
        Chevrolet: ['Camaro', 'Malibu', 'Equinox'],
        Honda: ['Civic', 'Accord', 'CR-V'],
        Nissan: ['Altima', 'Rogue', '370Z']
    }
};

const laptopData = {
    brands: ['Dell', 'HP', 'Lenovo', 'Asus', 'Acer', 'Apple'],
    models: {
        Dell: ['Inspiron', 'XPS', 'Latitude'],
        HP: ['Pavilion', 'EliteBook', 'Omen'],
        Lenovo: ['IdeaPad', 'ThinkPad', 'Legion'],
        Asus: ['ZenBook', 'ROG', 'VivoBook'],
        Acer: ['Aspire', 'Predator', 'Swift'],
        Apple: ['MacBook Air', 'MacBook Pro']
    }
};

const brandSelect = document.getElementById('brand');
const modelSelect = document.getElementById('model');
const dataTypeRadios = document.getElementsByName('dataType');

function populateBrands() {
    brandSelect.innerHTML = '';
    const data = getSelectedData();
    data.brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandSelect.appendChild(option);
    });
    populateModels();
}

function populateModels() {
    const selectedBrand = brandSelect.value;
    modelSelect.innerHTML = '';
    const data = getSelectedData();
    data.models[selectedBrand].forEach(model => {
        const option = document.createElement('option');
        option.value = model;
        option.textContent = model;
        modelSelect.appendChild(option);
    });
}

function submitData() {
    const selectedBrand = brandSelect.value;
    const selectedModel = modelSelect.value;
    alert(`Отправлены данные: Тип - ${getSelectedDataType()}, Бренд - ${selectedBrand}, Модель - ${selectedModel}`);
}

function showData() {
    populateBrands();
}

function getSelectedData() {
    return getSelectedDataType() === 'carData' ? carData : laptopData;
}

function getSelectedDataType() {
    for (const radio of dataTypeRadios) {
        if (radio.checked) {
            return radio.value;
        }
    }
    return null;
}

// Initial setup
showData();