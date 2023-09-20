document.addEventListener("DOMContentLoaded", () => {
    if (!i18next.isInitialized) {
        i18next.init({
            lng: 'kz',
            debug: true,
            resources: {
                kz: {
                    translation: {
                        "submit-quick-link": "Жіберу",
                        "admin-link": "Админ",
                        "gallery-link": "Галерея",
                        "teachers-link": "Біздің мұғалімдер",
                        "courses-link": "Әдістемелік жәшігі",
                        "connections-link": "Байланыстар",
                        "login-link": "Кіру/Тіркелу",
                        "translation-link": "Орысша",
                        "why-do-they-love-us__title": "Неге бізді жақсы көреді ?",
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
                        "quick-connection-label-name": "Сіздің атыңыз:",
                        "quick-connection-input-name": "Сіздің атыңыз",
                        "quick-connection-label-email": "Сіздің электрондық поштаңыз:",
                        "quick-connection-input-email": "Сіздің электрондық поштаңыз",
                        "quick-connection-label-theme": "Тақырып:",
                        "quick-connection-input-theme": "Тақырып",
                        "language-switch-link": "Орысша",
                        "quick-connection-label-password": "Сіздің хабарламаңыз (міндетті емес): ",
                        "quick-connection-input-password": "Сіздің хабарламаңыз (міндетті емес)",
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
                        "buy-button": "Сатып алу",
                    }
                },
                ru: {
                    translation: {
                        "submit-quick-link": "Отправить",
                        "admin-link": "Админ",
                        "gallery-link": "Галерея",
                        "teachers-link": "Наши учителя",
                        "courses-link": "Методическая копилка",
                        "connections-link": "Связи",
                        "login-link": "Вход/Регистрация",
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
                        "quick-connection-label-name": "Ваше имя:",
                        "quick-connection-input-name": "Ваше имя",
                        "quick-connection-label-email": "Ваша электронная почта:",
                        "quick-connection-input-email": "Ваша электронная почта",
                        "quick-connection-label-theme": "Тема:",
                        "quick-connection-input-theme": "Тема",
                        "quick-connection-label-password": "Ваше сообщение (необязательно): ",
                        "quick-connection-input-password": "Ваше сообщение (необязательно)",
                        "quick-connection-btn": "Отправить",
                        "language-switch-link": "Казахский",
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

    function changeLanguage() {
        const currentLanguage = i18next.language;
        const newLanguage = currentLanguage === 'kz' ? 'ru' : 'kz';

        i18next.changeLanguage(newLanguage, function (err, t) {
            if (err) return console.error(err);

            updateTranslations();
        });
    }

    function updateTranslations(){
        const elementsWithTranslation = document.querySelectorAll('[data-i18n]');
        elementsWithTranslation.forEach(element => {
            const translationKey = element.getAttribute('data-i18n');
            element.textContent = i18next.t(translationKey);
        });
    }

    function getLanguageNavbar() {
        const languageSwitch = document.querySelector('language-switch-link');
        languageSwitch.addEventListener("click", () => {
            changeLanguage();
        });
    }

    getLanguageNavbar();
});

