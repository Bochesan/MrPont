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

    <div class="contacts wrapper">
        <div class="contacts__info">
            <div class="contacts__info-container">
                <div class="contacts__info-title">Адрес:</div>
                <div class="contacts__info-text">г. Москва, Тишинская площадь, дом 1, ТВЦ Тишинка, 2 этаж, пав. АB 2.10</div>
            </div>
            <div class="contacts__info-container">
                <div class="contacts__info-title">График работы:</div>
                <div class="contacts__info-text">Пн-Вс: с 10:00 до 20:00</div>
                <div class="contacts__info-text">Без выходных</div>
            </div>
            <div class="contacts__info-container">
                <div class="contacts__info-title">Контакты:</div>
                <div class="contacts__info-text">
                    <a href="tel:+79262563334">+7 926 256 33 34</a>
                </div>
                <div class="contacts__info-text">
                    <a href="mailto:info@blacksilver.ru">info@blacksilver.ru</a>
                </div>
            </div>
            <div class="contacts__info-container">
                <div class="contacts__info-text">
                    <a href="#">instagram</a>
                </div>
                <div class="contacts__info-text">
                    <a href="#">vkontakte</a>
                </div>
            </div>

        </div>
        <div class="contacts__map">
            <div id="map"></div>
        </div>
    </div>

</main>

<? require('footer.php'); ?>
