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
async function getUsers() {
    try {
        const response = await fetch('http://localhost:3000/api/users');
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log(error);
    }
}


async function updateTranslations() {
    const courses = await getCourses();
    const users = await getUsers();
    if (window.location.pathname === '/') {
        const imageTextElements = document.querySelectorAll('.image-text');
        imageTextElements.forEach(element => {
            const translationKey = element.dataset.i18n;
            element.textContent = i18next.t(translationKey);
        });

        const textContainerHeadings = document.querySelectorAll('#text-container h1');
        textContainerHeadings.forEach(element => {
            const translationKey = element.dataset.i18n;
            element.textContent = i18next.t(translationKey);
        });

        const textContainerParagraphs = document.querySelectorAll('#text-container p');
        textContainerParagraphs.forEach(element => {
            const translationKey = element.dataset.i18n;
            element.textContent = i18next.t(translationKey);
        });

        document.querySelector('.our-teachers__title').textContent = i18next.t('our-teachers__title');
        document.querySelector('.why-do-they-love-us__title').textContent = i18next.t('why-do-they-love-us__title');
        document.querySelector('.our-gallery__title').textContent = i18next.t('our-gallery__title');
        document.querySelector('.our-gallery__btn').textContent = i18next.t('our-gallery__btn');
    }

    if (window.location.pathname === '/teacher') {
        const teacherPositions = document.querySelectorAll('.teacher__position');
        teacherPositions.forEach(element => {
            const translationKey = element.dataset.i18n;
            element.textContent = i18next.t(translationKey);
        });
    }

    if (window.location.pathname === '/course') {
        const labels = document.querySelectorAll('label');
        labels.forEach(label => {
            const translationKey = label.dataset.i18n;
            label.textContent = i18next.t(translationKey);
        });

        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            const translationKey = input.dataset.i18n;
            input.placeholder = i18next.t(translationKey);
        });

        const options = document.querySelectorAll('option');
        options.forEach(option => {
            const translationKey = option.dataset.i18n;
            option.textContent = i18next.t(translationKey);
        });

        // document.querySelector('.courses__title').textContent = i18next.t('courses__title');

        const coursesParagraphs = document.querySelectorAll('.courses-paragraph');
        coursesParagraphs.forEach(coursesParagraph => {
            const translationKey = coursesParagraph.dataset.i18n;
            coursesParagraph.textContent = i18next.t(translationKey);
        })

        const readMoreButtons = document.querySelectorAll('.read-more-btn');
        readMoreButtons.forEach(readMoreButton => {
            const translationKey = readMoreButton.dataset.i18n;
            readMoreButton.textContent = i18next.t(translationKey);
        });
    }

    courses.forEach(course=> {
        if (window.location.pathname === `/course/read/${course._id}`) {
            document.querySelector('.buy-button').textContent = i18next.t('buy-button');
        }
    })

        const navbarLinks = document.querySelectorAll('.navbar__item[data-i18n] a');
        navbarLinks.forEach(link => {
            const parentListItem = link.closest('.navbar__item[data-i18n]');
            const translationKey = parentListItem.getAttribute('data-i18n');
            link.textContent = i18next.t(translationKey);
        });
        if (window.location.pathname === '/admin/users' || window.location.pathname === '/admin/courses' || window.location.pathname === '/admin/helps') {
            const btnLinks = document.querySelectorAll('.btn--link[data-i18n]');
            btnLinks.forEach(btn => {
                const parentListItem = btn.closest('.btn--link[data-i18n]');
                const translationKey = parentListItem.getAttribute('data-i18n');
                btn.textContent = i18next.t(translationKey);
            });

            const labels = document.querySelectorAll('label');
            labels.forEach(label => {
                const translationKey = label.dataset.i18n;
                label.textContent = i18next.t(translationKey);
            });

            const inputs = document.querySelectorAll('input');
            inputs.forEach(input => {
                const translationKey = input.dataset.i18n;
                input.placeholder = i18next.t(translationKey);
            });

            const options = document.querySelectorAll('option');
            options.forEach(option => {
                const translationKey = option.dataset.i18n;
                option.textContent = i18next.t(translationKey);
            });

            const thLinks = document.querySelectorAll('th');
            thLinks.forEach(th => {
                const parentListItem = th.closest('th[data-i18n]');
                const translationKey = parentListItem.getAttribute('data-i18n');
                th.textContent = i18next.t(translationKey);
            });
            const modalLinks = document.querySelectorAll('.modal-title');
            modalLinks.forEach(modal => {
                const parentListItem = modal.closest('.modal-title[data-i18n]');
                const translationKey = parentListItem.getAttribute('data-i18n');
                modal.textContent = i18next.t(translationKey);
            });
        }
    users.forEach(user => {
        if (window.location.pathname === `/profile/${user._id}`) {
            const btnLinks = document.querySelectorAll('.btn--link[data-i18n]');
            btnLinks.forEach(btn => {
                const parentListItem = btn.closest('.btn--link[data-i18n]');
                const translationKey = parentListItem.getAttribute('data-i18n');
                btn.textContent = i18next.t(translationKey);
            });

            const labels = document.querySelectorAll('label');
            labels.forEach(label => {
                const translationKey = label.dataset.i18n;
                label.textContent = i18next.t(translationKey);
            });

            const inputs = document.querySelectorAll('input');
            inputs.forEach(input => {
                const translationKey = input.dataset.i18n;
                input.placeholder = i18next.t(translationKey);
            });

            const options = document.querySelectorAll('option');
            options.forEach(option => {
                const translationKey = option.dataset.i18n;
                option.textContent = i18next.t(translationKey);
            });

            const modalLinks = document.querySelectorAll('.modal-title');
            modalLinks.forEach(modal => {
                const parentListItem = modal.closest('.modal-title[data-i18n]');
                const translationKey = parentListItem.getAttribute('data-i18n');
                modal.textContent = i18next.t(translationKey);
            });
        }
    })

    const aboutCompanyTitles = document.querySelectorAll('.about-company__title');
    aboutCompanyTitles.forEach(element => {
        const translationKey = element.dataset.i18n;
        element.textContent = i18next.t(translationKey);
    });

    const aboutCompanySubtitles = document.querySelectorAll('.about-company__subtitle');
    aboutCompanySubtitles.forEach(element => {
        const translationKey = element.dataset.i18n;
        element.textContent = i18next.t(translationKey);
    });

    document.querySelector('.quick-connection__title').textContent = i18next.t('quick-connection-title');
    document.querySelector('.quick-connection__label-name').textContent = i18next.t('quick-connection-label-name');
    const quickConnectionInputName = document.querySelector('.quick-connection__input-name');
    quickConnectionInputName.placeholder = i18next.t('quick-connection-input-name');

    document.querySelector('.quick-connection__label-email').textContent = i18next.t('quick-connection-label-email');
    const quickConnectionInputEmail = document.querySelector('.quick-connection__input-email');
    quickConnectionInputEmail.placeholder = i18next.t('quick-connection-input-email');

    document.querySelector('.quick-connection__label-theme').textContent = i18next.t('quick-connection-label-theme');
    const quickConnectionInputTheme = document.querySelector('.quick-connection__input-theme');
    quickConnectionInputTheme.placeholder = i18next.t('quick-connection-input-theme');

    document.querySelector('.quick-connection__label-article').textContent = i18next.t('quick-connection__label-article');
    const quickConnectionInputPassword = document.querySelector('.quick-connection__input-article');
    quickConnectionInputPassword.placeholder = i18next.t('quick-connection__input-article');

    document.querySelector('.quick-connection__btn').textContent = i18next.t('quick-connection-btn');

    document.querySelector('.main__subtitle').textContent = i18next.t('main__subtitle');
    const mainTitleParts = document.querySelectorAll('.main__title-part');
    mainTitleParts.forEach(element => {
        const translationKey = element.dataset.i18n;
        element.textContent = i18next.t(translationKey);
    });
}

function changeLanguage() {
    const currentLanguage = i18next.language;
    const newLanguage = currentLanguage === 'kz' ? 'ru' : 'kz';

    i18next.changeLanguage(newLanguage, function (err) {
        if (err) return console.error(err);

        updateTranslations();
    });
}

export function getNavbar() {
    const langSwitch = document.querySelectorAll('.navbar__item');
    const targetItem = Array.from(langSwitch).find(item => item.textContent.trim() === 'Каз/Рус');
    targetItem.addEventListener("click", (event) => {
        event.preventDefault();
        changeLanguage();
    });
}

export function initializeLocalization() {
    if (!i18next.isInitialized) {
        i18next.init({
            lng: 'kz',
            debug: true,
            resources: {
                kz: {
                    translation: {
                        "update--profile--link": "Профильді өзгерту",
                        "update--photo--link": "Фотоны өзгерту",
                        "create--link": "Құру",
                        "upload--link": "Енгізу:",
                        "create--course--link": "Әдістемелікті құру",
                        "delete--comment--text--link": "Сіз бұл пікірді өшіргіңіз келетініне сенімдісіз бе?",
                        "delete--comment--link": "Пікірді өшіру",
                        "reject--course--text--link": "Сіз бұл әдістемелікті қабылдағыңыз келмейтініне сенімдісіз бе?",
                        "reject--course--link": "Әдістемелікті қабылдамау",
                        "reject--link": "Қабылдамау",
                        "delete--user--text--link": "Сіз бұл пайдаланушыны өшіргіңіз келетініне сенімдісіз бе?",
                        "delete--user--link": "Пайдаланушыны өшіру",
                        "delete--message--text--link": "Сіз бұл өтінімді өшіргіңіз келетініне сенімдісіз бе?",
                        "delete--message--link": "Өтінімді өшіру",
                        "approve--course--text--link": "Сіз бұл әдістемелікті қабылдағыңыз келетініне сенімдісіз бе?",
                        "approve--course--link": "Әдістемелікті қабылдау",
                        "approve--link": "Қабылдау",
                        "password--link": "Құпиясөз",
                        "save--link": "Сақтау",
                        "close--link": "Жабу",
                        "add--user--link": "Пайдаланушыны қосу",
                        "panel--link": "Админ беті",
                        "date--link": "Жасалған күні",
                        "direction--link": "Бағыт",
                        "price--link": "Баға",
                        "fio--link": "Толық аты",
                        "role--link": "Рөл",
                        "experience--link": "Жұмыс тәжірибесі",
                        "lastname--link": "Әкесінің аты",
                        "surname--link": "Тегі",
                        "name--link": "Аты",
                        "users--link": "Пайдаланушылар",
                        "logout--link": "Шығу",
                        "helps--link": "Өтінімдер",
                        "courses--link": "Әдістемеліктер",
                        "add--link": "Қосу",
                        "main--link": "Басты бет",
                        "delete--link": "Өшіру",
                        "update--link": "Өзгерту",
                        "id--link": "ID",
                        "title--link": "Тақырып",
                        "description--link": "Сипаттама",
                        "phone--number--link": "Телефон нөмірі",
                        "email--link": "Электрондық пошта",
                        "actions--link": "Іс-әрекеттер",
                        "about-company-title-social-networks": "Әлеуметтік желілер",
                        "our-gallery__title": "Біздің галерея",
                        "our-gallery__btn": "Толығырақ көру",
                        "readmore-btn": "Тіркелу",
                        "register-link": "Тіркелу",
                        "profile-link": "Профиль",
                        "admin-link": "Админ",
                        "gallery-link": "Галерея",
                        "teachers-link": "Біздің мұғалімдер",
                        "courses-link": "Әдістемелік жәшігі",
                        "connections-link": "Байланыстар",
                        "login-link": "Кіру",
                        "translation-link": "Орысша",
                        "why-do-they-love-us__title": "Неге бізді жақсы көреді?",
                        "image-text-specialists": "Білікті мамандар",
                        "image-text-food": "Дәмді тағамдар",
                        "image-text-programs": "Тамаша бағдарламалар",
                        "image-text-games": "Көңілді ойындар",
                        "main-title-part-first": "Оқу әр",
                        "main-title-part-second": "Балаға қызықты",
                        "main__subtitle": "Сапалы оқыту мен жан-жақты дамытуды жүзеге асыра отырып, еркін әрекет ететін, қиялы ұшқыр, салауатты, қоғамға тез бейімделетін тұлға қалыптастыру.",
                        "our-teachers__title": "Біздің мұғалімдер",
                        "go-to-gallery__title": "Біздің балабақшаның фотогалереясын қараңыз",
                        "go-to-gallery__btn": "Көшу",
                        "about-company-title-address": "Пошталық мекенжай",
                        "about-company-subtitle-address": "Қазақстан, Семей Қаласы, Докучаева көшесі 7, Немере балабақшасы",
                        "about-company-title-email": "Электрондық пошта",
                        "about-company-subtitle-email": "info@balakorzhin.kz",
                        "about-company-title-job-time": "Жұмыс уақыты",
                        "about-company-subtitle-job-time": "Дүйсенбі-жұма 8.00_18.00 Сенбі-жексенбі демалыс күндері",
                        "about-company-title-kids-time": "Балалар сағаттары",
                        "about-company-subtitle-kids-time": "Дүйсенбі-Сенбі 9.00_17.00 Жексенбі демалыс күні",
                        "image-text-specialists-paragraph": "Баланың жан-жақты дамуы мен тәрбие алуының бастауы ерте жастан- балабақша табалдырығынан бастау алады. Баланың жеке тұлға болып ,құзіреттіліктерінің қалыптасуы, өзіне сенімді , еркін ойлы болашақ мектеп оқушысы болуы тікелей балабақшада қалыптасады.Ал, онда қызмет ететін педагог жоғары кәсіби біліктілік талап етілетін маман. Себебі, ол адамның физикалық ,адамгершілік,психикалық,ақыл-ой дамуы туралы білім қорына ие болып қана қоймай, бар білімді тәжірибеге сала алатын , іс-жүзінде қолдануға қабілетті маман болуы тиіс.",
                        "image-text-food-paragraph": "Баланың бойында тағамға және тамақтануға деген дұрыс қарым- қатынасты тәрбиелеу өте маңызды. Бала егер, дұрыс тамақтанса, өз денінің саулығы туралы ойласа, ауырмауға және оқуда жетістікке жетуге болатындығын түсінуі тиіс. Мектепке дейнгі кезең адам өмірінің ең жауапты кезеңдерінің бірі. Осы кезеңде физикалық саулықтың және мәдени машықтардың қалыптасуы жүреді.",
                        "image-text-programs-paragraph": "Әр ата-ана өз баласының білімді, ақылды, дарынды және әр нәрсеге қабілетті болып өскенін қалайды. Баланы ерте жастан дамыту мен тәрбиелеуде сәтті деп танылған бірнеше арнайы бағдарламалар, әдістер мен тәсілдер де бар. Дегенмен, баланы жан-жақты дамытуда жетістікке жетудің бір ғана жолы ол- түрлі оқу,тәрбиелеу жүйесін тиімді үйлестіру болып табылады. Білім беру саласында модернизациялаудың, сапалы қызмет көрсетудің алғы шарттарының бірі деп бағдарламалардың плюрализмін қарастырады. Бұған арнайы дайындық пен білім және заттық орта: заттар мен оқытушы ойын құралдары қажет.",
                        "image-text-games-paragraph": "Балалық шақ- адам өмірінің ең тамаша кезеңі екенін естен шығармау маңызды. Балабақша баласын артық ақпаратпен жүктеп тастауға немесе бір әрекетпен еркінен тыс шұғылдануға мәжбүрлеудің қажеті жоқ. Ойын барысында бала әлемді таниды, әлеуметпен қарым-қатынастың алғышарттарын орнатады.Сондықтан-да баланың үйлесімді дамуына кедергі келтірмеу керек, тек, оған ойынға қажетті заттарды, ортаны қамтамасыз ету арқылыөзін-өзі жетілдіруіне көмек жасау қажет. Баланың жасы мен қызығушылықтарын ескерген маңызды. Баланың өзіне жайлы табиғы орта мен жағдайда- ойын әрекетінде дамуына мүмкіндік берілуі тиіс.",
                        "quick-connection-title": "Жылдам байланыс",
                        "quick-connection-label-name": "Атыңыз:",
                        "quick-connection-input-name": "Сіздің атыңыз",
                        "quick-connection-label-email": "Электрондық пошта:",
                        "quick-connection-input-email": "Сіздің электрондық поштаңыз",
                        "quick-connection-label-theme": "Нөміріңіз:",
                        "quick-connection-input-theme": "Сіздің телефон нөміріңіз",
                        "quick-connection__label-article": "Сипаттама:",
                        "quick-connection__input-article": "Сіздің сипаттамаңыз",
                        "quick-connection-btn": "Жіберу",
                        "teacher__position-educator": "Тәрбиеші",
                        "teacher__position-methodist": "Әдіскер",
                        "teacher__position-manager": "Меңгеруші",
                        "search-course-label": "Курс аты бойынша іздеу:",
                        "search-name-label": "Толық аты бойынша іздеу:",
                        "filter-direction-select": "Бағыт бойынша сұрыптау:",
                        "min-price-label": "Ең төменгі баға:",
                        "max-price-label": "Максималды баға:",
                        "sort-select-label": "Сұрыптау:",
                        "search-course-input": "Курс атын енгізіңіз",
                        "search-name-input": "Толық аты-жөніңізді енгізіңіз",
                        "min-price-input": "Ең төменгі баға",
                        "max-price-input": "Максималды баға",
                        "all-directions": "Барлық бағыттар",
                        "work-parents": "Ата-аналармен жұмыс",
                        "work-kids": "Балалармен жұмыс",
                        "personal-experience": "Жеке тәжірибе",
                        "sort": "Сұрыптау",
                        "name-asc": "А-дан Я-ға дейін",
                        "name-desc": "Я-дан А-ға дейін",
                        "date-asc": "Жаңа курстар (күні бойынша)",
                        "date-desc": "Ескі курстар (күні бойынша)",
                        "courses__title": "Әдістемелік жәшігі",
                        "read-more-btn": "Көбірек",
                        "price-courses": "Бағасы: ",
                        "direction-courses": "Бағыты: ",
                        "date-of-creation-courses": "Құрылған күні: ",
                        "description-courses": "Курс сипаттамасы: ",
                        "buy-button": "Сатып алу",
                    }
                },
                ru: {
                    translation: {
                        "update--profile--link": "Изменить профиль",
                        "update--photo--link": "Изменить фото",
                        "create--link": "Создать",
                        "upload--link": "Загрузить:",
                        "create--course--link": "Создать курс",
                        "delete--comment--text--link": "Вы уверены что хотите удалить этот комментарий?",
                        "delete--comment--link": "Удалить комментарий",
                        "reject--course--text--link": "Вы уверены что хотите отклонить этот курс?",
                        "reject--course--link": "Отклонить курс",
                        "reject--link": "Отклонить",
                        "delete--user--text--link": "Вы уверены что хотите удалить этого пользователя?",
                        "delete--user--link": "Удалить пользователя",
                        "delete--message--text--link": "Вы уверены что хотите удалить эту заявку?",
                        "delete--message--link": "Удалить заявку",
                        "approve--course--text--link": "Вы точно хотите одобрить этот курс?",
                        "approve--course--link": "Одобрить курс",
                        "approve--link": "Одобрить",
                        "password--link": "Пароль",
                        "save--link": "Сохранить",
                        "close--link": "Закрыть",
                        "add--user--link": "Добавить пользователя",
                        "panel--link": "Страница Админа",
                        "date--link": "Дата создания",
                        "direction--link": "Направление",
                        "price--link": "Цена",
                        "fio--link": "ФИО",
                        "role--link": "Роль",
                        "experience--link": "Опыт работы",
                        "lastname--link": "Отчество",
                        "surname--link": "Фамилия",
                        "name--link": "Имя",
                        "users--link": "Пользователи",
                        "logout--link": "Выйти",
                        "helps--link": "Заявки",
                        "courses--link": "Курсы",
                        "add--link": "Добавить",
                        "main--link": "Главная",
                        "delete--link": "Удалить",
                        "update--link": "Изменить",
                        "id--link": "ID",
                        "title--link": "Тема",
                        "description--link": "Описание",
                        "phone--number--link": "Телефонный номер",
                        "email--link": "Электронная почта",
                        "actions--link": "Действия",
                        "about-company-title-social-networks": "Соц. Сети",
                        "our-gallery__title": "Наша галерея",
                        "our-gallery__btn": "Посмотреть все",
                        "register-link": "Регистрация",
                        "profile-link": "Профиль",
                        "admin-link": "Админ",
                        "gallery-link": "Галерея",
                        "teachers-link": "Наши учителя",
                        "courses-link": "Методическая копилка",
                        "connections-link": "Связи",
                        "login-link": "Вход",
                        "translation-link": "Казахский",
                        "why-do-they-love-us__title": "Почему нас любят ?",
                        "image-text-specialists": "Квалифицированные специалисты",
                        "image-text-food": "Вкусная еда",
                        "image-text-programs": "Отличные программы",
                        "image-text-games": "Веселые игры",
                        "main-title-part-first": "Читать интересно",
                        "main-title-part-second": "каждому ребенку",
                        "main__subtitle": "Формирование свободной, творческой, здоровой личности, быстро адаптирующейся в обществе, при этом осуществляется качественное образование и всестороннее развитие.",
                        "our-teachers__title": "Наши учителя",
                        "go-to-gallery__title": "Смотрите фотогалерею нашего детского сада",
                        "go-to-gallery__btn": "Перейти",
                        "about-company-title-address": "Почтовый адрес",
                        "about-company-subtitle-address": "Детский сад «Немере», ул. Докучаева, 7, г. Семей, Казахстан",
                        "about-company-title-email": "Электронная почта",
                        "about-company-subtitle-email": "info@balakorzhin.kz",
                        "about-company-title-job-time": "Рабочее время",
                        "about-company-subtitle-job-time": "Понедельник-пятница 8.00_18.00 Суббота-воскресенье выходные",
                        "about-company-title-kids-time": "Детские часы",
                        "about-company-subtitle-kids-time": "Понедельник-суббота 9.00-17.00 Воскресенье выходной",
                        "image-text-specialists-paragraph": "Начало всестороннего развития и воспитания ребенка начинается в раннем возрасте - на пороге детского сада. Индивидуальность ребенка, развитие компетенций, уверенный в себе, свободомыслящий будущий школьник формируются непосредственно в детском саду. Причина в том, что он должен не только обладать запасом знаний о физическом, нравственном, психическом и интеллектуальном развитии человека, но и быть специалистом, способным применять имеющиеся знания на практике и уметь применять их на практике.",
                        "image-text-food-paragraph": "Очень важно воспитать в ребенке правильное отношение к еде и питанию. Ребенок должен понимать, что если он правильно питается, думает о своем здоровье, он не сможет заболеть и добиться успехов в учебе. Дошкольный период – один из самых ответственных периодов жизни человека. В этот период происходит формирование физического здоровья и культурных практик.",
                        "image-text-programs-paragraph": "Каждый родитель хочет, чтобы его ребенок вырос образованным, умным, талантливым и способным на все. Также существует несколько специальных программ, методов и подходов, признанных успешными в развитии и обучении ребенка с раннего возраста. Однако единственный способ добиться успеха во всестороннем развитии ребенка – это эффективная координация различных систем обучения и воспитания. Считает плюрализм программ одной из предпосылок модернизации и качественного обслуживания в сфере образования. Для этого необходимы специальная подготовка и знания и физической среды: предметов и обучающих игровых средств.",
                        "image-text-games-paragraph": "Важно не забывать, что детство – самый прекрасный период жизни человека. Не нужно заставлять детсадовца перегружаться лишней информацией или заниматься одним видом деятельности против его воли. В процессе игры ребенок познает мир, устанавливает предпосылки для социальных отношений, поэтому необходимо не мешать гармоничному развитию ребенка, а помогать ему совершенствоваться, обеспечивая его необходимыми вещами и средой для игра. Важно учитывать возраст и интересы ребенка. Ребенку должна быть предоставлена возможность развиваться в естественной среде и ситуации - игровой деятельности.",
                        "quick-connection-title": "Быстрая связь",
                        "quick-connection-label-name": "Тема:",
                        "quick-connection-input-name": "Ваша тема",
                        "quick-connection-label-email": "Электронная почта:",
                        "quick-connection-input-email": "Ваша электронная почта",
                        "quick-connection-label-theme": "Номер:",
                        "quick-connection-input-theme": "Ваш телефонный номер",
                        "quick-connection__label-article": "Описание: ",
                        "quick-connection__input-article": "Ваше описание",
                        "quick-connection-btn": "Отправить",
                        "teacher__position-educator": "Педагог",
                        "teacher__position-methodist": "Методист",
                        "teacher__position-manager": "Менеджер",
                        "search-course-label": "Поиск по названию курса:",
                        "search-name-label": "Поиск по ФИО:",
                        "filter-direction-select": "Фильтр по направлению:",
                        "min-price-label": "Минимальная цена:",
                        "max-price-label": "Максимальная цена:",
                        "sort-select-label": "Сортировка:",
                        "search-course-input": "Введите название курса",
                        "search-name-input": "Введите ФИО",
                        "min-price-input": "Минимальная цена",
                        "max-price-input": "Максимальная цена",
                        "all-directions": "Все направления",
                        "work-parents": "Работа с родителями",
                        "work-kids": "Работа с детьми",
                        "personal-experience": "Личный опыт",
                        "sort": "Сортировка",
                        "name-asc": "От А до Я",
                        "name-desc": "От Я до А",
                        "date-asc": "Новые курсы (по дате)",
                        "date-desc": "Старые курсы (по дате)",
                        "courses__title": "Методическая копилка",
                        "read-more-btn": "Подробнее",
                        "price-courses": "Цена: ",
                        "direction-courses": "Направление: ",
                        "date-of-creation-courses": "Дата создания: ",
                        "description-courses": "Описание курса: ",
                        "buy-button": "Купить",
                    }
                }
            }
        }, function (err) {
            if (err) return console.error(err);

            updateTranslations();
        });
    } else {
        updateTranslations();
    }
}