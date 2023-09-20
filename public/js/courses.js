let courses;

async function getCourses() {
    try {
        const response = await fetch('http://localhost:3000/api/courses');
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

async function getData() {
    courses = await getCourses();
    const coursesPerPage = 5;
    let currentPage = 0;
    let totalPages = Math.ceil(courses.length / coursesPerPage);
    const coursesContainer = document.getElementById('courses-container');

    function initializePage() {
        currentPage = 0;
        showPage(currentPage);
    }

    window.addEventListener('load', initializePage);

    function showPage(page) {
        const startIndex = page * coursesPerPage;
        const endIndex = startIndex + coursesPerPage;
        const courseElements = document.querySelectorAll('.course-card');

        courseElements.forEach((course, index) => {
            if (index < startIndex || index >= endIndex) {
                course.classList.add('hidden');
            } else {
                course.classList.remove('hidden');
            }
        });

        updateActiveButtonStates();
    }

    function createPageButtons() {
        const paginationContainer = document.createElement('div');
        paginationContainer.classList.add('pagination');

        for (let i = 0; i < totalPages; i++) {
            const pageButton = document.createElement('button');

            pageButton.textContent = i + 1;
            pageButton.addEventListener('click', () => {
                currentPage = i;
                showPage(currentPage);
                updateActiveButtonStates();
            });

            paginationContainer.appendChild(pageButton);
        }

        coursesContainer.appendChild(paginationContainer);
    }


    function updateActiveButtonStates() {
        const pageButtons = document.querySelectorAll('.pagination button');

        pageButtons.forEach((button, index) => {
            if (index === currentPage) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');

        const fullNameElement = document.createElement('h2');
        fullNameElement.textContent = course.fio;

        const nameElement = document.createElement('h2');
        nameElement.textContent = course.title;

        const priceElement = document.createElement('p');
        priceElement.innerHTML = '<span class="courses-paragraph" data-i18n="price-courses"></span> <span class="price">' + course.price + ' ₸.</span>';

        const directionElement = document.createElement('p');
        directionElement.innerHTML = '<span class="courses-paragraph" data-i18n="direction-courses"></span> <span class="direction">' + course.direction + '</span>';

        const createdAt = new Date(course.createdAt);
        const day = String(createdAt.getDate()).padStart(2, '0');
        const month = String(createdAt.getMonth() + 1).padStart(2, '0');
        const year = createdAt.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;
        const dateElement = document.createElement('p');
        dateElement.innerHTML = '<span class="courses-paragraph" data-i18n="date-of-creation-courses"></span> <span class="date">' + formattedDate + '</span>';

        const truncatedDescription = truncateDescription(course.description, 20);
        const descriptionElement = document.createElement('p');
        descriptionElement.innerHTML = `<span class="courses-paragraph" data-i18n="description-courses"></span> ${truncatedDescription}`;

        const readMoreBtn = document.createElement('a');
        readMoreBtn.classList.add('read-more-btn');
        readMoreBtn.textContent = 'Read more';
        readMoreBtn.href = '/course/read/' + course._id;

        courseCard.appendChild(fullNameElement);
        courseCard.appendChild(nameElement);
        courseCard.appendChild(priceElement);
        courseCard.appendChild(directionElement);
        courseCard.appendChild(dateElement);
        courseCard.appendChild(readMoreBtn);

        coursesContainer.appendChild(courseCard);
    });

    function truncateDescription(description, wordLimit) {
        const words = description.split(' ');

        if (words.length <= wordLimit) {
            return description;
        }

        return words.slice(0, wordLimit).join(' ') + '...';
    }

    function filterCourses() {
        const searchCourseValue = document.getElementById('searchCourseInput').value.toLowerCase();
        const searchFullNameValue = document.getElementById('searchFullNameInput').value.toLowerCase();
        const filterDirectionValue = document.getElementById('filterDirectionSelect').value;
        const minPriceValue = parseFloat(document.getElementById('minPriceInput').value);
        const maxPriceValue = parseFloat(document.getElementById('maxPriceInput').value);

        return courses.filter(course => {
            const nameMatch = course.title.toLowerCase().includes(searchCourseValue);
            const fullNameMatch = course.fio.toLowerCase().includes(searchFullNameValue);
            const directionMatch = filterDirectionValue === '' || course.direction === filterDirectionValue;
            const minPriceMatch = isNaN(minPriceValue) || course.price >= minPriceValue;
            const maxPriceMatch = isNaN(maxPriceValue) || course.price <= maxPriceValue;

            return nameMatch && fullNameMatch && directionMatch && minPriceMatch && maxPriceMatch;
        });
    }

    function sortCourses(filteredCourses) {
        const sortValue = document.getElementById('sortSelect').value;

        if (sortValue === 'nameAsc') {
            return filteredCourses.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortValue === 'nameDesc') {
            return filteredCourses.sort((a, b) => b.title.localeCompare(a.title));
        } else if (sortValue === 'dateAsc') {
            return filteredCourses.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        } else if (sortValue === 'dateDesc') {
            return filteredCourses.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }

        return filteredCourses;
    }


    function updateCourseList() {
        const coursesContainer = document.getElementById('courses-container');
        coursesContainer.innerHTML = '';

        const filteredCourses = filterCourses();
        const sortedCourses = sortCourses(filteredCourses);

        sortedCourses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.classList.add('course-card');

            const fullNameElement = document.createElement('h2');
            fullNameElement.textContent = course.fio;

            const nameElement = document.createElement('h2');
            nameElement.textContent = course.title;

            const priceElement = document.createElement('p');
            priceElement.innerHTML = '<span class="courses-paragraph" data-i18n="price-courses"></span> <span class="price">' + course.price + ' ₸.</span>';

            const directionElement = document.createElement('p');
            directionElement.innerHTML = '<span class="courses-paragraph" data-i18n="direction-courses"></span> <span class="direction">' + course.direction + '</span>';

            const createdAt = new Date(course.createdAt);
            const day = String(createdAt.getDate()).padStart(2, '0');
            const month = String(createdAt.getMonth() + 1).padStart(2, '0');
            const year = createdAt.getFullYear();
            const formattedDate = `${day}/${month}/${year}`;
            const dateElement = document.createElement('p');
            dateElement.innerHTML = '<span class="courses-paragraph" data-i18n="date-of-creation-courses"></span> <span class="date">' + formattedDate + '</span>';

            const truncatedDescription = truncateDescription(course.description, 20);
            const descriptionElement = document.createElement('p');
            descriptionElement.innerHTML = `<span class="courses-paragraph" data-i18n="description-courses"></span> ${truncatedDescription}`;

            const readMoreBtn = document.createElement('a');
            readMoreBtn.id = 'readMoreBtn';
            readMoreBtn.classList.add('read-more-btn');
            readMoreBtn.setAttribute('data-i18n', 'read-more-btn');
            readMoreBtn.textContent = 'Көбірек';
            readMoreBtn.href = '/course/read/' + course._id;

            courseCard.appendChild(fullNameElement);
            courseCard.appendChild(nameElement);
            courseCard.appendChild(priceElement);
            courseCard.appendChild(directionElement);
            courseCard.appendChild(dateElement);
            courseCard.appendChild(descriptionElement);
            courseCard.appendChild(readMoreBtn);

            coursesContainer.appendChild(courseCard);
        });

        totalPages = sortedCourses.length / coursesPerPage;
        createPageButtons();
        showPage(currentPage);
    }

    document.getElementById('searchCourseInput').addEventListener('input', updateCourseList);
    document.getElementById('searchFullNameInput').addEventListener('input', updateCourseList);
    document.getElementById('filterDirectionSelect').addEventListener('change', updateCourseList);
    document.getElementById('minPriceInput').addEventListener('input', updateCourseList);
    document.getElementById('maxPriceInput').addEventListener('input', updateCourseList);
    document.getElementById('sortSelect').addEventListener('change', updateCourseList);

    const readMoreBtns = document.querySelectorAll('.read-more-btn');

    readMoreBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            let card = this.parentNode;
            let descriptionShort = card.querySelector('.description-short');
            let descriptionFull = card.querySelector('.description-full');

            descriptionShort.style.display = 'none';
            descriptionFull.style.display = 'block';
        });
    });

    updateCourseList();
}

getData();