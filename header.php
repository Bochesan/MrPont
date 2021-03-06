<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="/favicon.ico">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.8/css/select2.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="/dist/css/main.min.css">
    <title>MrPont</title>
</head>
<body>
    <div class="outer">
        <header class="header">
            <div class="header__body">

                <div class="header__head wrapper">
                    <div class="header__menu-control">
                        <div id='menu-button' class="header__menu-button menu-button">
                              <div class="menu-button__inner">
                                <div class="menu-button__line menu-button__line--1"></div>
                                <div class="menu-button__line menu-button__line--2"></div>
                                <div class="menu-button__line menu-button__line--3"></div>
                              </div>
                        </div>
                        <span class="mobileSearchButton">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8.5" cy="8.5" r="8" stroke="#E1E1E1"/>
                                <path d="M14.5 14.5L19.5 19.5" stroke="#E1E1E1"/>
                            </svg>
                        </span>
                    </div>
                    <a class="header__logo" href="/">
                        <img src="/dist/images/logo.svg" alt="">
                    </a>

                        <div class="header__controls">

                                <form class="search" action="" method="">
                                    <input type="text" class="search__input">
                                    <div class="search__clear"></div>
                                    <input type="submit" class="search__submit" name="" value="">
                                    <div class="search__button"></div>
                                </form>

                            <a href="/page-basket.php" class="header__basket">Корзина(0)</a>
                        </div>

                </div>

                <nav class="header__nav wrapper">
                    <div class="header__nav-inner">
                        <ul class="header__nav-container">
                            <li class="header__nav-item"><a href="/" class="header__nav-link" data-name="Главная">Главная</a></li>
                            <li class="header__nav-item"><a href="/page-catalog.php" class="header__nav-link" data-name="Каталог">Каталог</a></li>
                            <li class="header__nav-item"><a href="/page-about.php" class="header__nav-link" data-name="О нас">О нас</a></li>
                            <li class="header__nav-item"><a href="/page-contacts.php" class="header__nav-link" data-name="Контакты">Контакты</a></li>
                            <li class="header__nav-item"><a href="/page-collection.php" class="header__nav-link" data-name="Коллекции">Коллекции</a></li>
                        </ul>
                        <div class="header__nav-footer">
                            <span>
                                <a href="mailto:info@blacksilver.ru">info@blacksilver.ru</a>
                            </span>
                            <span class="header__nav-social">
                                <a href="#">instagram</a>
                                <a href="#">vkontakte</a>
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="header__subnav">
                <ul class="header__subnav-container">
                    <li class="header__subnav-item"><a href="#" class="header__subnav-link">Кольца и перстни</a></li>
                    <li class="header__subnav-item"><a href="#" class="header__subnav-link">Цепи</a></li>
                    <li class="header__subnav-item"><a href="#" class="header__subnav-link">Браслеты</a></li>
                    <li class="header__subnav-item header__subnav-item--submenu">
                        <a href="#" class="header__subnav-link">Весь каталог</a>
                        <div class="header__subnav-submenu">
                            <ul class="submenu">
                                <li class="submenu__item"><a href="#" class="submenu__link">Браслеты</a></li>
                                <li class="submenu__item"><a href="#" class="submenu__link">Каффы</a></li>
                                <li class="submenu__item"><a href="#" class="submenu__link">Трости</a></li>
                                <li class="submenu__item"><a href="#" class="submenu__link">Авторучки серебряные</a></li>
                                <li class="submenu__item"><a href="#" class="submenu__link">Кольца и перстни</a></li>
                                <li class="submenu__item"><a href="#" class="submenu__link">Запонки</a></li>
                                <li class="submenu__item"><a href="#" class="submenu__link">Зажимы для купюр</a></li>
                                <li class="submenu__item"><a href="#" class="submenu__link">Зажигалки</a></li>
                                <li class="submenu__item"><a href="#" class="submenu__link">Подвески и кулоны</a></li>
                                <li class="submenu__item"><a href="#" class="submenu__link">Пряжки к ремням</a></li>
                                <li class="submenu__item"><a href="#" class="submenu__link">Цепи, ожерелья</a></li>
                                <li class="submenu__item"><a href="#" class="submenu__link">Пепельницы</a></li>
                                <li class="submenu__item"><a href="#" class="submenu__link">Серьги</a></li>
                                <li class="submenu__item"><a href="#" class="submenu__link">Тремляки для ножей</a></li>
                                <li class="submenu__item"><a href="#" class="submenu__link">Брелоки</a></li>
                                <li class="submenu__item"><a href="#" class="submenu__link">Изделия из кожи</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="header__subnav-item header__subnav-item--submenu">
                        <a href="#" class="header__subnav-link">Коллекции</a>
                        <div class="header__subnav-submenu">
                            <ul class="submenu">
                                <li class="submenu__item"><a href="#" class="submenu__link">Виталий Азаров</a></li>
                                <li class="submenu__item"><a href="#" class="submenu__link">Мистер Ярослав</a></li>
                                <li class="submenu__item"><a href="#" class="submenu__link">Миссис Евгения</a></li>
                                <li class="submenu__item"><a href="#" class="submenu__link">Господин Богдан</a></li>
                                <li class="submenu__item"><a href="#" class="submenu__link">Владислав Полицейский</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
