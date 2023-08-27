const directions = ['Работа с родителями', 'Работа с детьми', 'Личный опыт'];


async function getCourses() {
    try {
        const response = await fetch('http://localhost:3000/api/courses');
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log(error);
    }
}

async function getData() {
    const currentLanguage = i18next.language;
    const newLanguage = currentLanguage === 'kz' ? 'ru' : 'kz';
    const courses = await getCourses();
    const coursesContainer = document.getElementById('courses-container');

    courses.forEach(course => {
        console.log(course._id)
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');

        const fullNameElement = document.createElement('h2');
        fullNameElement.textContent = course.fio;

        const nameElement = document.createElement('h2');
        nameElement.textContent = course.title;

        const priceElement = document.createElement('p');
        if (newLanguage === 'kz') {
            priceElement.innerHTML = 'Баға: <span class="price">' + course.price + ' ₸</span>';
        } else if (newLanguage === 'ru') {
            priceElement.innerHTML = 'Цена: <span class="price">' + course.price + ' ₸</span>';
        }


        const directionElement = document.createElement('p');
        directionElement.innerHTML = 'Направление: <span class="direction">' + course.direction + '</span>';

        const dateElement = document.createElement('p');
        dateElement.innerHTML = 'Дата создания: <span class="date">' + course.createdAt + '</span>';

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

    function filterCourses() {
        const searchCourseValue = document.getElementById('searchCourseInput').value.toLowerCase();
        const searchFullNameValue = document.getElementById('searchFullNameInput').value.toLowerCase();
        const filterDirectionValue = document.getElementById('filterDirectionSelect').value;
        const minPriceValue = parseFloat(document.getElementById('minPriceInput').value);
        const maxPriceValue = parseFloat(document.getElementById('maxPriceInput').value);

        const filteredCourses = courses.filter(course => {
            const nameMatch = course.title.toLowerCase().includes(searchCourseValue);
            const fullNameMatch = course.fio.toLowerCase().includes(searchFullNameValue);
            const directionMatch = filterDirectionValue === '' || course.direction === filterDirectionValue;
            const minPriceMatch = isNaN(minPriceValue) || course.price >= minPriceValue;
            const maxPriceMatch = isNaN(maxPriceValue) || course.price <= maxPriceValue;

            return nameMatch && fullNameMatch && directionMatch && minPriceMatch && maxPriceMatch;
        });

        return filteredCourses;
    }

    function sortCourses(filteredCourses) {
        const sortValue = document.getElementById('sortSelect').value;

        if (sortValue === 'nameAsc') {
            filteredCourses.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortValue === 'nameDesc') {
            filteredCourses.sort((a, b) => b.name.localeCompare(a.name));
        } else if (sortValue === 'dateAsc') {
            filteredCourses.sort((a, b) => a.date.getTime() - b.date.getTime());
        } else if (sortValue === 'dateDesc') {
            filteredCourses.sort((a, b) => b.date.getTime() - a.date.getTime());
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


            const dateElement = document.createElement('p');
            const createdAt = new Date(course.createdAt);
            const day = String(createdAt.getDate()).padStart(2, '0');
            const month = String(createdAt.getMonth() + 1).padStart(2, '0');
            const year = createdAt.getFullYear();
            const formattedDate = `${day}-${month}-${year}`;
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
    }

    function truncateDescription(description, wordLimit) {
        const words = description.split(' ');

        if (words.length <= wordLimit) {
            return description;
        }

        return words.slice(0, wordLimit).join(' ') + '...';
    }

    document.getElementById('searchCourseInput').addEventListener('input', updateCourseList);
    document.getElementById('searchFullNameInput').addEventListener('input', updateCourseList);
    document.getElementById('filterDirectionSelect').addEventListener('change', updateCourseList);
    document.getElementById('minPriceInput').addEventListener('input', updateCourseList);
    document.getElementById('maxPriceInput').addEventListener('input', updateCourseList);
    document.getElementById('sortSelect').addEventListener('change', updateCourseList);

    updateCourseList();

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

}

getData();