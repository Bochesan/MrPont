<? require_once('header.php'); ?>

<main>
    <div class="wrapper">
        <div class="breadcrumbs">
            <ul class="breadcrumbs__container">
                <li class="breadcrumbs__item"><a href="/" class="breadcrumbs__link">Главная</a></li>
                <li class="breadcrumbs__item"><a href="/page-catalog.php" class="breadcrumbs__link">Каталог</a></li>
                <li class="breadcrumbs__item">Кольца и перстни</li>
            </ul>
        </div>
    </div>

    <div class="wrapper">
        <h1>Кольца и перстни</h1>
    </div>

    <div class="detailFilter wrapper">
        <div class="detailFilter__popular">По популярности</div>
        <div class="detailFilter__filter">
            <ul class="detailFilter__filter-container">
                <li>500 - 2000 руб</li>
                <li>Сапфир</li>
                <li>Изумруд</li>
            </ul>
            <div class="detailFilter__filter-button">Фильтры</div>
        </div>
        <div class="detailFilter__filter-detail filterDetail wrapper">
            <div class="filterDetail__inner">
                <div class="filterDetail__category">
                    <div class="filterDetail__category-title" data-index="1">Цена</div>
                    <div class="filterDetail__category-title is-active" data-index='2'>Вставка</div>
                    <div class="filterDetail__category-title" data-index='3'>Материал</div>
                    <div class="filterDetail__category-title" data-index='4'>Размер</div>
                </div>
                <div class="filterDetail__category-container">
                    <div class="filterDetail__detail" data-index='2'>
                        <div class="filterDetail__detail-title">
                            <span class="filterDetail__detail-title-text">Сапфир</span>
                        </div>
                        <div class="filterDetail__detail-title">
                            <span class="filterDetail__detail-title-text">Золото</span>
                        </div>
                        <div class="filterDetail__detail-title">
                            <span class="filterDetail__detail-title-text">Измуруд</span>
                        </div>
                        <div class="filterDetail__detail-title">
                            <span class="filterDetail__detail-title-text">Серебро</span>
                        </div>
                        <div class="filterDetail__detail-title">
                            <span class="filterDetail__detail-title-text">Оникс</span>
                        </div>
                        <div class="filterDetail__detail-title">
                            <span class="filterDetail__detail-title-text">Эмаль</span>
                        </div>
                        <div class="filterDetail__detail-title">
                            <span class="filterDetail__detail-title-text">Сапфир</span>
                        </div>
                        <div class="filterDetail__detail-title">
                            <span class="filterDetail__detail-title-text">Черный бриллиант</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</main>

<? require('footer.php'); ?>
