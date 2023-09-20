document.addEventListener("DOMContentLoaded", () => {
    const blocks = document.querySelectorAll(".block");
    const textContainer = document.getElementById('text-container');
    const gotoGalleryButton = document.querySelector('.our-gallery__btn');

    const imageTexts = {
        "image-text-specialists": {
            heading: "Білікті мамандар",
            paragraph:
                "Баланың жан-жақты дамуы мен тәрбие алуының бастауы ерте жастан- балабақша табалдырығынан бастау алады. Баланың жеке тұлға болып ,құзіреттіліктерінің қалыптасуы, өзіне сенімді , еркін ойлы болашақ мектеп оқушысы болуы тікелей балабақшада қалыптасады.Ал, онда қызмет ететін педагог жоғары кәсіби біліктілік талап етілетін маман. Себебі, ол адамның физикалық ,адамгершілік,психикалық,ақыл-ой дамуы туралы білім қорына ие болып қана қоймай, бар білімді тәжірибеге сала алатын , іс-жүзінде қолдануға қабілетті маман болуы тиіс.",
            image: "/assets/slider8.png",
        },
        "image-text-food": {
            heading: "Дәмді тағамдар",
            paragraph: "Баланың бойында тағамға және тамақтануға деген дұрыс қарым- қатынасты тәрбиелеу өте маңызды. Бала егер, дұрыс тамақтанса, өз денінің саулығы туралы ойласа, ауырмауға және оқуда жетістікке жетуге болатындығын түсінуі тиіс. Мектепке дейнгі кезең адам өмірінің ең жауапты кезеңдерінің бірі. Осы кезеңде физикалық саулықтың және мәдени машықтардың қалыптасуы жүреді.",
            image: "/assets/slider3.png",
        },
        "image-text-programs": {
            heading: "Тамаша бағдарламалар",
            paragraph: "Әр ата-ана өз баласының білімді, ақылды, дарынды және әр нәрсеге қабілетті болып өскенін қалайды. Баланы ерте жастан дамыту мен тәрбиелеуде сәтті деп танылған бірнеше арнайы бағдарламалар, әдістер мен тәсілдер де бар. Дегенмен, баланы жан-жақты дамытуда жетістікке жетудің бір ғана жолы ол- түрлі оқу,тәрбиелеу жүйесін тиімді үйлестіру болып табылады. Білім беру саласында модернизациялаудың, сапалы қызмет көрсетудің алғы шарттарының бірі деп бағдарламалардың плюрализмін қарастырады. Бұған арнайы дайындық пен білім және заттық орта: заттар мен оқытушы ойын құралдары қажет.",
            image: "/assets/slider7.png",
        },
        "image-text-games": {
            heading: "Көңілді ойындар",
            paragraph: "Балалық шақ- адам өмірінің ең тамаша кезеңі екенін естен шығармау маңызды. Балабақша баласын артық ақпаратпен жүктеп тастауға немесе бір әрекетпен еркінен тыс шұғылдануға мәжбүрлеудің қажеті жоқ. Ойын барысында бала әлемді таниды, әлеуметпен қарым-қатынастың алғышарттарын орнатады.Сондықтан-да баланың үйлесімді дамуына кедергі келтірмеу керек, тек, оған ойынға қажетті заттарды, ортаны қамтамасыз ету арқылыөзін-өзі жетілдіруіне көмек жасау қажет. Баланың жасы мен қызығушылықтарын ескерген маңызды. Баланың өзіне жайлы табиғы орта мен жағдайда- ойын әрекетінде дамуына мүмкіндік берілуі тиіс.",
            image: "/assets/slider5.png",
        }
    };

    blocks.forEach((block) => {
        block.addEventListener("mouseover", () => {
            const paragraph = block.querySelector("p[data-i18n]");
            const dataI18nValue = paragraph.getAttribute("data-i18n");
            const text = imageTexts[dataI18nValue];

            const translatedHeadingForSpecialists = i18next.t('image-text-specialists');
            const translatedParagraphForSpecialists = i18next.t('image-text-specialists-paragraph');

            const translatedHeadingForFood = i18next.t('image-text-food');
            const translatedParagraphForFood = i18next.t('image-text-food-paragraph');

            const translatedHeadingForPrograms = i18next.t('image-text-programs');
            const translatedParagraphForPrograms = i18next.t('image-text-programs-paragraph');

            const translatedHeadingForGames = i18next.t('image-text-games');
            const translatedParagraphForGames = i18next.t('image-text-games-paragraph');

            if (dataI18nValue === "image-text-specialists") {
                textContainer.innerHTML = `
                <div>
                    <h1 data-i18n="image-text-specialists">${translatedHeadingForSpecialists}</h1>
                    <p data-i18n="image-text-specialists-paragraph">${translatedParagraphForSpecialists}</p>
                </div>
                <img src="${text.image}" alt=""/>`;
            } else if (dataI18nValue === "image-text-food") {
                textContainer.innerHTML = `
                <div>
                    <h1 data-i18n="image-text-food">${translatedHeadingForFood}</h1>
                    <p data-i18n="image-text-food-paragraph">${translatedParagraphForFood}</p>
                </div>
                <img src="${text.image}" alt=""/>`;
            } else if (dataI18nValue === "image-text-programs") {
                textContainer.innerHTML = `
                <div>
                    <h1 data-i18n="image-text-programs">${translatedHeadingForPrograms}</h1>
                    <p data-i18n="image-text-programs-paragraph">${translatedParagraphForPrograms}</p>
                </div>
                <img src="${text.image}" alt=""/>`;
            } else if (dataI18nValue === "image-text-games") {
                textContainer.innerHTML = `
                <div>
                    <h1 data-i18n="image-text-games">${translatedHeadingForGames}</h1>
                    <p data-i18n="image-text-games-paragraph">${translatedParagraphForGames}</p>
                </div>
                <img src="${text.image}" alt=""/>`;
            }
        });

        gotoGalleryButton.addEventListener("click", () => {
            window.location.href = "/gallery";
        });

        if (window.innerWidth <= 768) {
            const slider = document.querySelector('.slider');
            const slides = document.querySelectorAll('.slide');
            let slideIndex = 0;

            function nextSlide() {
                slideIndex++;
                if (slideIndex >= slides.length) {
                    slideIndex = 0;
                }
                updateSlider();
            }

            function updateSlider() {
                const translateX = -slideIndex * (450 / slides.length);
                slider.style.transform = `translateX(${translateX}%)`;
            }

            setInterval(() => {
                nextSlide();
            }, 3000);

            slides.forEach((block) => {
                block.addEventListener("mouseover", () => {
                    const paragraph = block.querySelector("p[data-i18n]");
                    const dataI18nValue = paragraph.getAttribute("data-i18n");
                    const text = imageTexts[dataI18nValue];

                    const translatedHeadingForSpecialists = i18next.t('image-text-specialists');
                    const translatedParagraphForSpecialists = i18next.t('image-text-specialists-paragraph');

                    const translatedHeadingForFood = i18next.t('image-text-food');
                    const translatedParagraphForFood = i18next.t('image-text-food-paragraph');

                    const translatedHeadingForPrograms = i18next.t('image-text-programs');
                    const translatedParagraphForPrograms = i18next.t('image-text-programs-paragraph');

                    const translatedHeadingForGames = i18next.t('image-text-games');
                    const translatedParagraphForGames = i18next.t('image-text-games-paragraph');

                    if (dataI18nValue === "image-text-specialists") {
                        textContainer.innerHTML = `
                <div>
                    <h1 data-i18n="image-text-specialists">${translatedHeadingForSpecialists}</h1>
                    <p data-i18n="image-text-specialists-paragraph">${translatedParagraphForSpecialists}</p>
                </div>`;
                    } else if (dataI18nValue === "image-text-food") {
                        textContainer.innerHTML = `
                <div>
                    <h1 data-i18n="image-text-food">${translatedHeadingForFood}</h1>
                    <p data-i18n="image-text-food-paragraph">${translatedParagraphForFood}</p>
                </div>`;
                    } else if (dataI18nValue === "image-text-programs") {
                        textContainer.innerHTML = `
                <div>
                    <h1 data-i18n="image-text-programs">${translatedHeadingForPrograms}</h1>
                    <p data-i18n="image-text-programs-paragraph">${translatedParagraphForPrograms}</p>
                </div>`;
                    } else if (dataI18nValue === "image-text-games") {
                        textContainer.innerHTML = `
                <div>
                    <h1 data-i18n="image-text-games">${translatedHeadingForGames}</h1>
                    <p data-i18n="image-text-games-paragraph">${translatedParagraphForGames}</p>
                </div>`;
                    }
                });
            });
        }
    });
});