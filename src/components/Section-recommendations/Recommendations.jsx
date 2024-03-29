import './style.scss';

const Recommendation = () => {
    return (
        <section className="section-recommendations" id='recommendations'>
        <h2 className="recommendations-title block-title">— РЕКОМЕНДАЦИИ ПО УХОДУ</h2>
        <h1 className="title-block_memo">Памятка по содержанию пятнистого эублефара</h1>
            <div className="memo-blocks">
                <p className="memo-block">Для содержания пятнистого эублефара нужен горизонтальный террариум или контейнер площадью от 40х30 см, высотой около 20 см с хорошей проточной вентиляцией. Вентиляция, должна быть расположена в нижней части одной стенки и в противоположном углу – в верхней части стены или в потолке.</p>
                <p className="memo-block">Обогрев нижний, осуществляется термошнуром или термоковриком, который помещается под террариум и занимает примерно 1/3 площади дна.Температура в обогреваемой части 30-32 градуса, в самой горячей точке не выше 35 С. В холодной части – 23-25 градусов. В первые месяцы жизни эублефара рекомендуется круглосуточный обогрев, позже в ночное время обогрев выключают. Ночная температура 21-23 градуса.</p>
                <p className="memo-block">Освещение не обязательно, а для особей с красными глазами — противопоказано. В террариуме должно быть несколько укрытий. Одно – в точке максимального прогрева, другие – в разных температурных зонах.
                Влажную камеру – закрытый контейнер с отверстием в стенке или крышке и влажным субстратом (мох, грунт, салфетки) на дне – размещают в холодном углу. Там же ставится поилка.</p>
                <p className="memo-block">За исключением влажной камеры воздух в террариуме должен быть сухой, влажность около 50%.
                Молодняк кормят каждый день, желательно вечером. В 3-4 месяца можно перейти на кормление через день, а в 6-8 – 2 раза в неделю. Выбрав определенный график кормления важно его придерживаться, не чередуя ежедневное кормление с трехдневной голодовкой.</p>
                <p className="memo-block">Насекомые непосредственно перед скармливанием обязательно посыпаются кальцием с витамином D3. Дополнительно рекомендуется ставить в террариум мисочку с чистым (без витаминов) карбонатом кальция, чтобы животные могли его слизывать.</p>
                <p className="memo-block">Несъеденных живых насекомых нужно убирать из террариума. Их можно предложить вторично, предварительно покормив и заново опудрив витаминами. Неживые корма повторной заморозке не подлежат, лучше сразу убирать остатки, максимум через час, иначе геккон может получить отравление.
                </p>
            </div>
        </section>
    );
}
 
export default Recommendation;