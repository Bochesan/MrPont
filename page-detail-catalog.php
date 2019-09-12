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

    <form action="" class="detailFilter">
        <div class="detailFilter__head wrapper">
            <div class="detailFilter__popular">
                <input type="radio" class="detailFilter__popularUp" name="popular" value="1">
                <input type="radio" class="detailFilter__popularDown" name="popular" value="2">
                <span class="detailFilter__popularTitle">По популярности</span>
            </div>
            <div class="detailFilter__filter">
                <div class="detailFilter__filterDisplay"></div>
                <div class="detailFilter__controls">
                    <input class="detailFilter__submit" type="submit" name="" value="">
                    <div class="detailFilter__clear"></div>
                </div>
                <div class="detailFilter__filterButton">Фильтры</div>
            </div>
        </div>
        <div class="detailFilter__filterDetail filterDetail wrapper">
        <div class="filterDetail__container" style="position: relative; width: 100%;">
            <div class="filterDetail__inner">
                <div class="filterDetail__category filterDetail__category--range is-active" data-index="0">
                    <div class="filterDetail__categoryTitle">Цена</div>
                    <div class="filterDetail__categoryContainer">
                        <div class="filterDetail__price">
                            <label class="filterDetail__priceLabel">
                                <span class="filterDetail__priceTitle">от</span>
                                <input class="filterDetail__priceInput filterDetail__priceInput--min" type="text" name="" placeholder="0 руб">
                            </label>
                            <label class="filterDetail__priceLabel">
                                <span class="filterDetail__priceTitle">до</span>
                                <input class="filterDetail__priceInput filterDetail__priceInput--max" type="text" name="" placeholder="0 руб">
                            </label>
                        </div>
                    </div>
                </div>

                <div class="filterDetail__category filterDetail__category--checkbox" data-index="1">
                    <div class="filterDetail__categoryTitle">Вставка</div>
                    <div class="filterDetail__categoryContainer">
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">Сапфир</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">Золото</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">Измуруд</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">Серебро</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">Оникс</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">Эмаль</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">Сапфир</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">Черный бриллиант</span>
                        </label>
                    </div>
                </div>

                <div class="filterDetail__category filterDetail__category--checkbox" data-index="2">
                    <div class="filterDetail__categoryTitle">Материал</div>
                    <div class="filterDetail__categoryContainer">
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">Золото</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">Серебро</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">Платина</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">Палладий</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">Родий</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">Рутений</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">Никель</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">Бронза</span>
                        </label>
                    </div>
                </div>

                <div class="filterDetail__category filterDetail__category--checkbox" data-index="3">
                    <div class="filterDetail__categoryTitle">Размер</div>
                    <div class="filterDetail__categoryContainer">
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">14,86</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">15,27</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">15,70</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">16,10</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">16,51</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">16,92</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">17,35</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">17,75</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">18,19</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">18,53</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">18,89</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">19,41</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">19,84</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">20,20</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">20,68</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">21,08</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">21,49</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">21,89</span>
                        </label>
                        <label class="filterDetail__label">
                            <input type="checkbox">
                            <span class="filterDetail__labelText">22,33</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </form>

    <div class="detail-catalog wrapper">
        <div class="dc-container">

            <div class="dc-container__box">
                <div class="dc-container__box-preview">
                    <div class="dc-container__box-title">Кольцо из серебра Levels MTRX-01</div>
                    <div class="dc-container__box-image">
                        <img src="/dist/images/sl1.png" alt="">
                    </div>
                    <div class="dc-container__box-price">4 200 р</div>
                </div>
                <div class="dc-container__box-info">
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Состав:</span>
                        <span class="dc-container__box-info-text">Серебро 925 (глубокое чернение)</span>
                    </div>
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Вес,гр:</span>
                        <span class="dc-container__box-info-text">4</span>
                    </div>
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Размеры:</span>
                        <span class="dc-container__box-info-text">16, 16.5, 17, 19.5, 20</span>
                    </div>
                    <button class="button button--black">В корзину</button>
                </div>
            </div>

            <div class="dc-container__box">
                <div class="dc-container__box-preview">
                    <div class="dc-container__box-title">Кольцо из серебра Levels MTRX-01</div>
                    <div class="dc-container__box-image">
                        <img src="/dist/images/sl1.png" alt="">
                    </div>
                    <div class="dc-container__box-price">4 200 р</div>
                </div>
                <div class="dc-container__box-info">
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Состав:</span>
                        <span class="dc-container__box-info-text">Серебро 925 (глубокое чернение)</span>
                    </div>
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Вес,гр:</span>
                        <span class="dc-container__box-info-text">4</span>
                    </div>
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Размеры:</span>
                        <span class="dc-container__box-info-text">16, 16.5, 17, 19.5, 20</span>
                    </div>
                    <button class="button button--black">В корзину</button>
                </div>
            </div>

            <div class="dc-container__box">
                <div class="dc-container__box-preview">
                    <div class="dc-container__box-title">Кольцо из серебра Levels MTRX-01</div>
                    <div class="dc-container__box-image">
                        <img src="/dist/images/sl1.png" alt="">
                    </div>
                    <div class="dc-container__box-price">4 200 р</div>
                </div>
                <div class="dc-container__box-info">
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Состав:</span>
                        <span class="dc-container__box-info-text">Серебро 925 (глубокое чернение)</span>
                    </div>
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Вес,гр:</span>
                        <span class="dc-container__box-info-text">4</span>
                    </div>
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Размеры:</span>
                        <span class="dc-container__box-info-text">16, 16.5, 17, 19.5, 20</span>
                    </div>
                    <button class="button button--black">В корзину</button>
                </div>
            </div>

            <div class="dc-container__box">
                <div class="dc-container__box-preview">
                    <div class="dc-container__box-title">Кольцо из серебра Levels MTRX-01</div>
                    <div class="dc-container__box-image">
                        <img src="/dist/images/sl1.png" alt="">
                    </div>
                    <div class="dc-container__box-price">4 200 р</div>
                </div>
                <div class="dc-container__box-info">
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Состав:</span>
                        <span class="dc-container__box-info-text">Серебро 925 (глубокое чернение)</span>
                    </div>
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Вес,гр:</span>
                        <span class="dc-container__box-info-text">4</span>
                    </div>
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Размеры:</span>
                        <span class="dc-container__box-info-text">16, 16.5, 17, 19.5, 20</span>
                    </div>
                    <button class="button button--black">В корзину</button>
                </div>
            </div>

            <div class="dc-container__box">
                <div class="dc-container__box-preview">
                    <div class="dc-container__box-title">Кольцо из серебра Levels MTRX-01</div>
                    <div class="dc-container__box-image">
                        <img src="/dist/images/sl1.png" alt="">
                    </div>
                    <div class="dc-container__box-price">4 200 р</div>
                </div>
                <div class="dc-container__box-info">
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Состав:</span>
                        <span class="dc-container__box-info-text">Серебро 925 (глубокое чернение)</span>
                    </div>
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Вес,гр:</span>
                        <span class="dc-container__box-info-text">4</span>
                    </div>
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Размеры:</span>
                        <span class="dc-container__box-info-text">16, 16.5, 17, 19.5, 20</span>
                    </div>
                    <button class="button button--black">В корзину</button>
                </div>
            </div>

            <div class="dc-container__box">
                <div class="dc-container__box-preview">
                    <div class="dc-container__box-title">Кольцо из серебра Levels MTRX-01</div>
                    <div class="dc-container__box-image">
                        <img src="/dist/images/sl1.png" alt="">
                    </div>
                    <div class="dc-container__box-price">4 200 р</div>
                </div>
                <div class="dc-container__box-info">
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Состав:</span>
                        <span class="dc-container__box-info-text">Серебро 925 (глубокое чернение)</span>
                    </div>
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Вес,гр:</span>
                        <span class="dc-container__box-info-text">4</span>
                    </div>
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Размеры:</span>
                        <span class="dc-container__box-info-text">16, 16.5, 17, 19.5, 20</span>
                    </div>
                    <button class="button button--black">В корзину</button>
                </div>
            </div>

            <div class="dc-container__box">
                <div class="dc-container__box-preview">
                    <div class="dc-container__box-title">Кольцо из серебра Levels MTRX-01</div>
                    <div class="dc-container__box-image">
                        <img src="/dist/images/sl1.png" alt="">
                    </div>
                    <div class="dc-container__box-price">4 200 р</div>
                </div>
                <div class="dc-container__box-info">
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Состав:</span>
                        <span class="dc-container__box-info-text">Серебро 925 (глубокое чернение)</span>
                    </div>
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Вес,гр:</span>
                        <span class="dc-container__box-info-text">4</span>
                    </div>
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Размеры:</span>
                        <span class="dc-container__box-info-text">16, 16.5, 17, 19.5, 20</span>
                    </div>
                    <button class="button button--black">В корзину</button>
                </div>
            </div>

            <div class="dc-container__box">
                <div class="dc-container__box-preview">
                    <div class="dc-container__box-title">Кольцо из серебра Levels MTRX-01</div>
                    <div class="dc-container__box-image">
                        <img src="/dist/images/sl1.png" alt="">
                    </div>
                    <div class="dc-container__box-price">4 200 р</div>
                </div>
                <div class="dc-container__box-info">
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Состав:</span>
                        <span class="dc-container__box-info-text">Серебро 925 (глубокое чернение)</span>
                    </div>
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Вес,гр:</span>
                        <span class="dc-container__box-info-text">4</span>
                    </div>
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Размеры:</span>
                        <span class="dc-container__box-info-text">16, 16.5, 17, 19.5, 20</span>
                    </div>
                    <button class="button button--black">В корзину</button>
                </div>
            </div>

            <div class="dc-container__box">
                <div class="dc-container__box-preview">
                    <div class="dc-container__box-title">Кольцо из серебра Levels MTRX-01</div>
                    <div class="dc-container__box-image">
                        <img src="/dist/images/sl1.png" alt="">
                    </div>
                    <div class="dc-container__box-price">4 200 р</div>
                </div>
                <div class="dc-container__box-info">
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Состав:</span>
                        <span class="dc-container__box-info-text">Серебро 925 (глубокое чернение)</span>
                    </div>
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Вес,гр:</span>
                        <span class="dc-container__box-info-text">4</span>
                    </div>
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Размеры:</span>
                        <span class="dc-container__box-info-text">16, 16.5, 17, 19.5, 20</span>
                    </div>
                    <button class="button button--black">В корзину</button>
                </div>
            </div>

            <div class="dc-container__box">
                <div class="dc-container__box-preview">
                    <div class="dc-container__box-title">Кольцо из серебра Levels MTRX-01</div>
                    <div class="dc-container__box-image">
                        <img src="/dist/images/sl1.png" alt="">
                    </div>
                    <div class="dc-container__box-price">4 200 р</div>
                </div>
                <div class="dc-container__box-info">
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Состав:</span>
                        <span class="dc-container__box-info-text">Серебро 925 (глубокое чернение)</span>
                    </div>
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Вес,гр:</span>
                        <span class="dc-container__box-info-text">4</span>
                    </div>
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Размеры:</span>
                        <span class="dc-container__box-info-text">16, 16.5, 17, 19.5, 20</span>
                    </div>
                    <button class="button button--black">В корзину</button>
                </div>
            </div>

            <div class="dc-container__box">
                <div class="dc-container__box-preview">
                    <div class="dc-container__box-title">Кольцо из серебра Levels MTRX-01</div>
                    <div class="dc-container__box-image">
                        <img src="/dist/images/sl1.png" alt="">
                    </div>
                    <div class="dc-container__box-price">4 200 р</div>
                </div>
                <div class="dc-container__box-info">
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Состав:</span>
                        <span class="dc-container__box-info-text">Серебро 925 (глубокое чернение)</span>
                    </div>
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Вес,гр:</span>
                        <span class="dc-container__box-info-text">4</span>
                    </div>
                    <div class="dc-container__box-info-row">
                        <span class="dc-container__box-info-title">Размеры:</span>
                        <span class="dc-container__box-info-text">16, 16.5, 17, 19.5, 20</span>
                    </div>
                    <button class="button button--black">В корзину</button>
                </div>
            </div>
        </div>
    </div>

</main>

<? require('footer.php'); ?>
