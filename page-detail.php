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
        <div class="detail">
            <div class="detail__image fadeIn">
                <div class="detail__slider swiper-container">
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper">
                        <!-- Slides -->
                        <div class="swiper-slide">
                            <div class="detail__slider-image">
                                <img src="/dist/images/sl2.png" alt="">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="detail__slider-image">
                                <img src="/dist/images/pryag.png" alt="">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="detail__slider-image">
                                <img src="/dist/images/sl3.png" alt="">
                            </div>
                        </div>
                    </div>
                    <!-- If we need pagination -->
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            <div class="detail__info fadeIn">
                <form action="">
                    <div class="detail__title">Перстень из серебра мужской <br>Antequera WHR39-21</div>
                    <div class="detail__price">4 200 р</div>
                    <div class="detail__size">
                        <div class="detail__size-title">Размер:</div>
                        <div class="detail__size-values">
                            <label>
                                <input type="checkbox" name="" value="15">
                                <span class="detail__size-value">15</span>
                            </label>
                            <label>
                                <input type="checkbox" name="" value="15.5">
                                <span class="detail__size-value">15.5</span>
                            </label>
                            <label>
                                <input type="checkbox" name="" value="16.5">
                                <span class="detail__size-value">16.5</span>
                            </label>
                            <label>
                                <input type="checkbox" name="" value="17">
                                <span class="detail__size-value">17</span>
                            </label>
                            <label>
                                <input type="checkbox" name="" value="17.5">
                                <span class="detail__size-value">17.5</span>
                            </label>
                            <label>
                                <input type="checkbox" name="" value="18">
                                <span class="detail__size-value">18</span>
                            </label>
                            <label>
                                <input type="checkbox" name="" value="18.5">
                                <span class="detail__size-value">18.5</span>
                            </label>
                            <label>
                                <input type="checkbox" name="" value="19">
                                <span class="detail__size-value">19</span>
                            </label>
                        </div>
                    </div>
                    <div class="detail__buttons">
                        <span class="detail__button button">В корзину</span>
                        <input type="submit" class="detail__button button button--dark" value="Купить в 1 клик">
                    </div>

                    <div class="detail__more-info more-info">
                        <div class="more-info__title">Подробнее</div>
                        <div class="more-info__container">
                            <div class="more-info__row">
                                <div class="more-info__name">Артикул:</div>
                                <div class="more-info__info">WHR39-21</div>
                            </div>
                            <div class="more-info__row">
                                <div class="more-info__name">Пол:</div>
                                <div class="more-info__info">Мужской</div>
                            </div>
                            <div class="more-info__row">
                                <div class="more-info__name">Наличие/заказ:</div>
                                <div class="more-info__info">В наличии</div>
                            </div>
                            <div class="more-info__row">
                                <div class="more-info__name">Вес,гр:</div>
                                <div class="more-info__info">4</div>
                            </div>
                            <div class="more-info__row">
                                <div class="more-info__name">Состав:</div>
                                <div class="more-info__info">Серебро 925 Перламутр</div>
                            </div>
                            <div class="more-info__row">
                                <div class="more-info__name">Вес,гр:</div>
                                <div class="more-info__info">4</div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</main>

<? require('footer.php'); ?>
