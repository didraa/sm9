const form = document.getElementById('validation-form');
const resultSection = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameField = document.getElementById('name-field');
    const birthYearField = document.getElementById('birth-year-field');

    let hasError = false;

    if (nameField.value.trim() === '' || nameField.value.length < 2) {
    nameField.classList.add('error');
    document.getElementById('name-error').textContent = 'Недопустимое имя (минимальная длина - 2 символа)';
    document.getElementById('name-error').style.display = 'block';
    hasError = true;
    } else {
    nameField.classList.remove('error');
    document.getElementById('name-error').style.display = 'none';
    }

    if (isNaN(birthYearField.value)) {
    console.log(typeof(birthYearField.value))
    birthYearField.classList.add('error');
    document.getElementById('birth-year-error').textContent = 'Введите число';
    document.getElementById('birth-year-error').style.display = 'block';
    hasError = true;
    } else if (birthYearField.value.trim() === '' || birthYearField.value.length !== 4) {
    birthYearField.classList.add('error');
    document.getElementById('birth-year-error').textContent = 'Неверный год рождения (должен состоять из 4 цифр)';
    document.getElementById('birth-year-error').style.display = 'block';
    hasError = true;
    } else {
    const currentYear = new Date().getFullYear();
    const birthYear = parseInt(birthYearField.value, 10);

    if (currentYear - birthYear < 18) {
        birthYearField.classList.add('error');
        document.getElementById('birth-year-error').textContent = 'Вам должно быть не менее 18 лет';
        document.getElementById('birth-year-error').style.display = 'block';
        hasError = true;
    } else {
        birthYearField.classList.remove('error');
        document.getElementById('birth-year-error').style.display = 'none';
    }
    }

    
    if (!hasError) {
    resultSection.style.display = 'block';
    }
});

function createFirework() {
    const firework = document.createElement('div'); 
    firework.className = 'firework'; 

    const screenWidth = window.innerWidth; 
    const screenHeight = window.innerHeight; 

   
    const x = Math.random() * screenWidth;
    const y = Math.random() * screenHeight;

    firework.style.left = x + 'px'; 
    firework.style.top = y + 'px'; 
    
    document.body.appendChild(firework);

    const firework1 = document.createElement('div'); 
    firework1.className = 'firework1'; 


  
    const x1 = Math.random() * screenWidth;
    const y1 = Math.random() * screenHeight;

    firework1.style.left = x1 + 'px'; 
    firework1.style.top = y1 + 'px'; 
    
    document.body.appendChild(firework1);

    const firework2 = document.createElement('div'); 
    firework2.className = 'firework2'; 


    
    const x2 = Math.random() * screenWidth;
    const y2 = Math.random() * screenHeight;

    firework2.style.left = x2 + 'px'; 
    firework2.style.top = y2 + 'px'; 
    
    document.body.appendChild(firework2);

    const firework3 = document.createElement('div'); 
    firework3.className = 'firework3'; 



    const x3 = Math.random() * screenWidth;
    const y3 = Math.random() * screenHeight;

    firework3.style.left = x3 + 'px'; 
    firework3.style.top = y3 + 'px'; 
    
    document.body.appendChild(firework3);


    const firework4 = document.createElement('div'); 
    firework4.className = 'firework4'; 


 
    const x4 = Math.random() * screenWidth;
    const y4 = Math.random() * screenHeight;

    firework4.style.left = x4 + 'px'; 
    firework4.style.top = y4 + 'px'; 
    
    document.body.appendChild(firework4);

    const firework5 = document.createElement('div'); 
    firework5.className = 'firework5'; 


    const x5 = Math.random() * screenWidth;
    const y5 = Math.random() * screenHeight;

    firework5.style.left = x5 + 'px'; 
    firework5.style.top = y5 + 'px'; 
    
    document.body.appendChild(firework5);
    

    setTimeout(() => {
        firework3.remove();
        firework4.remove();
        firework5.remove();
        
    }, 1000);

    setTimeout(() => {
        firework.remove();
        firework1.remove(); 
        firework2.remove();
        
    }, 2000);

    
}
    

const fireButton = document.getElementById('fire-button');
fireButton.addEventListener('click', () => {
    for (let i = 0; i <= 30; i++) {
        createFirework()
    }
    
}); 