jQuery(document).ready(function($)
{
    $('#promotion').before(`
    
<div id="products">
    <div class="workspace">

        <div id="product_1">
            <div style="padding: 36px 36px 36px 36px;">

                <div style="color: #3b3b3b; font-size: 24px; font-weight: 900; text-align: center;"><span style="color: #d57787;">Sofito Classic</span></div>

                <div class="pro_image" style="background: url(/design/ceilings_classic.jpg) center no-repeat; background-size: contain;"></div>

                <div class="first_list">
                    <div style="position: absolute; top: 9px; font-size: 11px; color: #c0c0c0;">Производитель</div>
                    Китай
                </div>
                <div class="in_list">
                    <div style="position: absolute; top: 9px; font-size: 11px; color: #c0c0c0;">Толщина полотна</div>
                    0,17 мкр
                </div>
                <div class="in_list">
                    <div style="position: absolute; top: 9px; font-size: 11px; color: #c0c0c0;">Ширина полотна</div>
                    до 5 м
                </div>
                <div class="in_list">
                    <div style="position: absolute; top: 9px; font-size: 11px; color: #c0c0c0;">Состав материала</div>
                    ПВХ
                </div>
                <div class="in_list">
                    <div style="position: absolute; top: 9px; font-size: 11px; color: #c0c0c0;">Зеркальность глянца</div>
                    91%
                </div>
                <div class="in_list">
                    <div style="position: absolute; top: 9px; font-size: 11px; color: #c0c0c0;">Сертификат</div>
                    Нет
                </div>
                <div class="in_list">
                    <div style="position: absolute; top: 9px; font-size: 11px; color: #c0c0c0;">Гарантия</div>
                    5 лет
                </div>

                <div style="padding: 36px 24px 12px 24px; text-align: center;">
                    <s>Старая цена: 200 руб.</s><br>
                    <b style="color: #3b3b3b; font-size: 24px; font-weight: 900;">Новая цена: 100 руб./м<sup>2</sup></b>
                </div>


                <div style="width: 160px; margin: 6px auto 0px auto; text-align: center; background: #d57787; border-bottom: 4px solid #c6576a; font-weight: 400; color: #FFF; font-size: 22px; border-radius: 200px; padding: 14px 0px 14px 0px; cursor: pointer;" onclick="callback('block_1');">Заказать</div>


            </div>
        </div>

        <div id="product_2">
            <div style="padding: 36px 36px 36px 36px;">

                <div style="color: #3b3b3b; font-size: 24px; font-weight: 900; text-align: center;"><span style="color: #d57787;">Sofito Premium</span></div>

                <div class="pro_image" style="background: url(/design/ceilings_premium.jpg) center no-repeat; background-size: contain;"></div>

                <div class="first_list">
                    <div style="position: absolute; top: 9px; font-size: 11px; color: #c0c0c0;">Производитель</div>
                    Германия
                </div>
                <div class="in_list">
                    <div style="position: absolute; top: 9px; font-size: 11px; color: #c0c0c0;">Толщина полотна</div>
                    0,18 мкр
                </div>
                <div class="in_list">
                    <div style="position: absolute; top: 9px; font-size: 11px; color: #c0c0c0;">Ширина полотна</div>
                    до 5 м
                </div>
                <div class="in_list">
                    <div style="position: absolute; top: 9px; font-size: 11px; color: #c0c0c0;">Состав материала</div>
                    ПВХ
                </div>
                <div class="in_list">
                    <div style="position: absolute; top: 9px; font-size: 11px; color: #c0c0c0;">Зеркальность глянца</div>
                    93%
                </div>
                <div class="in_list">
                    <div style="position: absolute; top: 9px; font-size: 11px; color: #c0c0c0;">Сертификат</div>
                    Стандартный
                </div>
                <div class="in_list">
                    <div style="position: absolute; top: 9px; font-size: 11px; color: #c0c0c0;">Гарантия</div>
                    бессрочная
                </div>

                <div style="padding: 36px 24px 12px 24px; text-align: center;">
                    <s>Старая цена: 1000 руб.</s><br>
                    <b style="color: #3b3b3b; font-size: 24px; font-weight: 900;">Новая цена: 500 руб./м<sup>2</sup></b>
                </div>


                <div style="width: 160px; margin: 6px auto 0px auto; text-align: center; background: #d57787; border-bottom: 4px solid #c6576a; font-weight: 400; color: #FFF; font-size: 22px; border-radius: 200px; padding: 14px 0px 14px 0px; cursor: pointer;" onclick="callback('block_1');">Заказать</div>

            </div>
        </div>


        <div id="product_3">
            <div style="padding: 36px 36px 36px 36px;">

                <div style="color: #3b3b3b; font-size: 24px; font-weight: 900; text-align: center;"><span style="color: #d57787;">Sofito Evolution</span><br><br>
                    Специальное предложение!<br>
                    Только до 18.02.2019 г.</div>

                <a href="http://xn----otbbferaebb2agi0a.xn--p1ai/specialnye-predlozheniya/msd-evolution/">
                    <div class="pro_image" style="background: url(/design/ceilings_evolution.jpg) center no-repeat; background-size: contain;"></div>
                </a>

                <div class="first_list">
                    <div style="position: absolute; top: 9px; font-size: 11px; color: #c0c0c0;">Производитель</div>
                    Китай
                </div>
                <div class="in_list">
                    <div style="position: absolute; top: 9px; font-size: 11px; color: #c0c0c0;">Толщина полотна</div>
                    0,22 мкр
                </div>
                <div class="in_list">
                    <div style="position: absolute; top: 9px; font-size: 11px; color: #c0c0c0;">Ширина полотна</div>
                    до 5 м
                </div>
                <div class="in_list">
                    <div style="position: absolute; top: 9px; font-size: 11px; color: #c0c0c0;">Состав материала</div>
                    ЭКО ПВХ
                </div>
                <div class="in_list">
                    <div style="position: absolute; top: 9px; font-size: 11px; color: #c0c0c0;">Зеркальность глянца</div>
                    97%
                </div>
                <div class="in_list">
                    <div style="position: absolute; top: 9px; font-size: 11px; color: #c0c0c0;">Сертификат</div>
                    <a href="/design/msd-evolution.jpg" rel="group" style="color: #d57787;">Гигиенический</a>
                </div>
                <div class="in_list">
                    <div style="position: absolute; top: 9px; font-size: 11px; color: #c0c0c0;">Гарантия</div>
                    10 лет
                </div>

                <div style="padding: 36px 24px 12px 24px; text-align: center;">
                    <s>Старая цена: 600 руб.</s><br>
                    <b style="color: #3b3b3b; font-size: 24px; font-weight: 900;">Новая цена: 300 руб./м<sup>2</sup></b>
                </div>

                <div class="null"></div>



                <a href="/specialnye-predlozheniya/msd-evolution/" style="text-decoration: none;">
                    <div class="spec_but_1">Подробнее</div>
                </a>

                <div class="spec_but_2" onclick="callback('block_1');">Заказать</div>


                <div class="null"></div>
            </div>
        </div>

        <div class="null"></div>

        <div class="spec_desc">
            Точный расчет и стоимость Ваших новых натяжных потолков, подробности действующих акций, Вы сможете узнать у наших специалистов<br>по телефону +7 (495) 055-48-51. Стоимость указана без учета монтажа.</div>

        <div class="null"></div>
    </div>
</div>
    
    `);
});