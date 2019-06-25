<? require_once('header.php'); ?>

<main>
    <div class="main-screen wrapper">
        <div class="main-screen__title">Ювелирные изделия из<br>серебра и&nbsp;золота на&nbsp;заказ</div>
        <div class="main-screen__info main-screen__info--address">
            <a href="#">ТВЦ Тишинка</a>
        </div>
        <div class="main-screen__info main-screen__info--worktime">с 10:00 до 20:00</div>
        <div class="main-screen__info main-screen__info--phone">
            <a href="tel:+79262563334">+7 926 256 33 34</a>
        </div>
        <div class="main-screen__info main-screen__info--point">2 этаж, пав. АB 2.10</div>
        <span class="scroll-icon">
            <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.499756 1L4.49976 5L8.49976 1" stroke="#FEFEFE"/>
            </svg>
        </span>
    </div>

    <div class="have-time wrapper">
        <div class="have-time__head">
            <div class="have-time__head-title">Успейте<br> приобрести</div>
            <span class="have-time__head-info">Успейте приобрести</span>
        </div>
        <div class="have-time__body">
            <div class="have-time__price-section">
                <div class="have-time__old-price">32 499 р</div>
                <div class="have-time__new-price">22 499 р</div>
                <div class="have-time__button-price button">В корзину</div>
            </div>
            <div class="have-time__image-section">
                <!-- <img src="/dist/images/ring.png" alt=""> -->
                <!-- Slider main container -->
                <div class="have-time__slider swiper-container">
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper">
                        <!-- Slides -->
                        <div class="swiper-slide">
                            <img src="/dist/images/ring.png" alt="">
                        </div>
                        <div class="swiper-slide">
                            <img src="/dist/images/pryag.png" alt="">
                        </div>
                        <div class="swiper-slide">
                            <img src="/dist/images/bras.png" alt="">
                        </div>
                    </div>
                    <!-- If we need pagination -->
                    <div class="swiper-pagination"></div>

                </div>
            </div>
            <div class="have-time__info-section">
                <div class="have-time__info-title">Antique crown</div>
                <div class="have-time__info-text">Изумруд - драгоценный камень тёмно-зелёного цвета. Чистые изумруды синевато-зелёного цвета могут стоить дороже алмазов!</div>
            </div>
        </div>
    </div>
</main>

<? require('footer.php'); ?>
