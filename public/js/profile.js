document.getElementById('edit-avatar-button').addEventListener('click', function() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';

    fileInput.addEventListener('change', function(e) {
        let file = e.target.files[0];

        if (file) {
            let reader = new FileReader();

            reader.onload = function(e) {
                document.getElementById('avatar').src = e.target.result;
            };

            reader.readAsDataURL(file);
        }
    });

    fileInput.click();
});

let currentName = "";
let currentSurname = "";
let currentEmail = "";
let currentRole = "";

document.getElementById('edit-button').addEventListener('click', function() {
    document.getElementById('edit-name-input').value = currentName;
    document.getElementById('edit-surname-input').value = currentSurname;
    document.getElementById('edit-email-input').value = currentEmail;
    document.getElementById('edit-role-input').value = currentRole;

    openModal('edit-modal');
});

document.getElementById('save-changes-button').addEventListener('click', function() {
    const newName = document.getElementById('edit-name-input').value;
    const newSurname = document.getElementById('edit-surname-input').value;
    const newEmail = document.getElementById('edit-email-input').value;
    const newRole = document.getElementById('edit-role-input').value;

    currentName = newName;
    currentSurname = newSurname;
    currentEmail = newEmail;
    currentRole = newRole;

    document.getElementById('name').textContent = newName;
    document.getElementById('surname').textContent = newSurname;
    document.getElementById('email').textContent = newEmail;
    document.getElementById('role').textContent = newRole;

    closeModal('edit-modal');
});

document.getElementById('save-changes-button').addEventListener('click', function() {
    document.getElementById('name').textContent = document.getElementById('edit-name-input').value;
    document.getElementById('surname').textContent = document.getElementById('edit-surname-input').value;
    document.getElementById('email').textContent = document.getElementById('edit-email-input').value;
    document.getElementById('role').textContent = document.getElementById('edit-role-input').value;
    closeModal('edit-modal');
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

document.getElementById('create-course-button').addEventListener('click', function() {
});
