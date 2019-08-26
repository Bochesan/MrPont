<? require_once('header.php'); ?>

<main>
    <div class="wrapper">
        <div class="breadcrumbs">
            <ul class="breadcrumbs__container">
                <li class="breadcrumbs__item"><a href="/" class="breadcrumbs__link">Главная</a></li>
                <li class="breadcrumbs__item">Каталог</li>
            </ul>
        </div>
    </div>

    <div class="wrapper">
        <div class="section-head fadeIn">
            <h1 class="section-head__title">О нас</h1>
        </div>
    </div>

    <div class="about wrapper">
        <div class="about__info">
            <div class="about__info-title">Уважаемый Клиент, приветствуем Вас на сайте Blacksilver.ru.</div>
            <div class="about__info-text">Наш сайт был создан в 2010 году и стал первым интернет-проектом в России, осуществляющим on-line продажи ювелирных изделий из серебра и кожи. Несколькими месяцами ранее, в конце 2009 года, открылся наш магазин на Тишинке.</div>
            <div class="about__info-text">И вот уже почти 10 лет мы предлагаем покупателям широкий выбор браслетов, колец, подвесок, серег, брелоков, ключных цепей и пряжек из серебра, а также изделия из натуральной кожи - ремни, портмоне, чехлы для телефонов и сумки.</div>
        </div>
        <div class="about__photo">
            <!-- Slider main container -->
            <div class="about__slider swiper-container">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide">
                        <img src="/dist/images/image.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="/dist/images/image.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="/dist/images/image.jpg" alt="">
                    </div>
                </div>
                <!-- If we need pagination -->
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>

    <div class="delivery wrapper">
        <div class="section-head fadeIn">
            <div class="section-head__title">О доставке</div>
        </div>
        <div class="delivery__row delivery__row--sb">
            <div class="novelty__article fadeIn">
                <div class="novelty__article-text">Доставка заказов производится<br> следующими способами:</div>
            </div>
            <div class="delivery__info">
                <div class="delivery__container">
                    <div class="delivery-box fadeIn">
                        <div class="delivery-box__title">По Москве</div>
                        <div class="delivery-box__text">Доставка по Москве осуществляется курьером по рабочим дням с 10 до 18 часов в пределах г. Москвы.</div>
                        <div class="delivery-box__text delivery-box__text--primary">При стоимости заказа более 5000 рублей доставка осуществляется бесплатно. В остальных случаях - стоимость доставки составит 600 рублей.</div>
                        <div class="delivery-box__text">Представитель магазина свяжется с Вами в течение рабочего дня с момента размещения заказа для обсуждения деталей. Вы можете указать как домашний, так и рабочий адрес. Срок доставки составляет 2-4 дня с момента размещения заказа.</div>
                        <div class="delivery-box__text">При отказе от заказа в момент приезда курьера, оплачивается доставка в размере 600 рублей. При отказе в последующие дни оплачивается вызов курьера по двойноному тарифу.</div>
                    </div>

                    <div class="delivery-box fadeIn">
                        <div class="delivery-box__title">По Московской области</div>
                        <div class="delivery-box__text">Стоимость доставки зависит от местонахождения.</div>
                        <div class="delivery-box__text delivery-box__text--primary">До 10 км от МКАД + 200 руб к сумме доставки.</div>
                        <div class="delivery-box__text">То есть если сумма заказ более 5000руб, Вы платите всего 200 рублей. Если сумма заказа менее 5000 руб., Вы платите 600руб+200руб=800 руб.</div>
                        <div class="delivery-box__text delivery-box__text--primary">Каждые 10 км удаленности от МКАД, увеличивают сумму доставки на 200 руб.</div>
                    </div>

                    <div class="delivery-box fadeIn">
                        <div class="delivery-box__title">По территории Российской Федерации</div>
                        <div class="delivery-box__text">Осуществляется Почтой России наложенным платежом. Это означает, что Вы платите за товар в момент его получения непосредственно в почтовом отделении. Срок и стоимость доставки определяются в зависимости от региона и сообщаются Вам вместе с информацией о начале обработки заказа.</div>
                        <div class="delivery-box__text delivery-box__text--primary">Таким образом, сумма заказа будет формироваться из следующих величин: Стоимость товара + Стоимость почтовой доставки.</div>
                        <div class="delivery-box__text">Например: Вы живете в Санкт Петербурге. Стоимость доставки браслета (имеет значение вес) составляет (из нашего опыта) 300руб. Т.есть при стоимости браслета 700 руб, Вам придется заплать 700+300=1000руб.</div>
                    </div>

                    <div class="delivery-box fadeIn">
                        <div class="delivery-box__title">Внимание! Заказы с оплатой наложенным платежом отменять нельзя, т.к. они могут быть уже в процессе отсылки.</div>
                    </div>

                </div>
            </div>
        </div>
    </div>


</main>

<? require('footer.php'); ?>
