<template>
    <section id="planos-e-precos">
        <div class="plan-and-price__container">
            <div class="plan-and-price__wrapper">
                <div class="plan-and-price__content">
                    <h3 class="plan-and-price__title">Planos &amp; Preços</h3>
                    <div
                        class="plan-and-price__carousel"
                        v-for="item in plansAndPrices"
                        :key="item.name"
                    >
                        <div v-for="(item2, key2) in item" :key="key2">
                            <CardPlanAndPriceComponent :data="item2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            plansAndPrices: {
                planoPiloto: [
                    {
                        name: 'Cowork (sem Móveis)',
                        type: 'Plano Mensal',
                        imgLink: '/static/images/Rectangle 98.png',
                        prices: [
                            {
                                name: 'Sala com janela (Taguatinga)',
                                range: [1100, 1800],
                            },
                            {
                                name: 'Salas sem janela (Taguatinga)',
                                range: [1300, 2500],
                            },
                        ],
                    },
                    {
                        name: 'Cowork (com Móveis)',
                        type: 'Plano Mensal',
                        prices: [
                            {
                                name: 'Diária (Taguatinga)',
                                range: [250],
                            },
                            {
                                name: 'Diária (Plano Piloto)',
                                range: [450],
                            },
                            {
                                name: 'Por Hora (Taguatinga)',
                                range: [65],
                            },
                            {
                                name: 'Por Hora (Plano Piloto)',
                                range: [265],
                            },
                        ],
                    },
                ],
                taguatinga: [
                    {
                        name: 'Cowork (sem Móveis)',
                        type: 'Plano Mensal',
                        imgLink: '/static/images/Rectangle 98.png',
                        prices: [
                            {
                                name: 'Sala com janela (Taguatinga)',
                                range: [1100, 1800],
                            },
                            {
                                name: 'Salas sem janela (Taguatinga)',
                                range: [1300, 2500],
                            },
                        ],
                    },
                    {
                        name: 'Cowork (com Móveis)',
                        type: 'Plano Mensal',
                        prices: [
                            {
                                name: 'Diária (Taguatinga)',
                                range: [250],
                            },
                            {
                                name: 'Diária (Plano Piloto)',
                                range: [450],
                            },
                            {
                                name: 'Por Hora (Taguatinga)',
                                range: [65],
                            },
                            {
                                name: 'Por Hora (Plano Piloto)',
                                range: [265],
                            },
                        ],
                    },
                ],
            },
        };
    },
};
</script>

<style lang="scss" scoped>
section#planos-e-precos {
    scroll-margin-top: 125px;
    background-color: #393939;
    height: auto;
    width: 100%;
    position: relative;
    @media screen and (min-width: 992px) {
        scroll-margin-top: 95px;
        display: grid;
        min-height: 100vh;
    }
}
.plan-and-price__container {
    width: 95%;
    margin: 0 auto;
    overflow-x: hidden;
}
.plan-and-price__wrapper {
    height: 100%;
}
.plan-and-price__content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    height: 100%;
    width: 100%;
    padding: 1.5rem 0.8rem;
    box-sizing: border-box;
    @media screen and (min-width: 992px) {
    }
}
.plan-and-price__carousel {
    height: 600px;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    display: inline-flex;
    gap: 2rem;
    padding: 0.25rem;
    & > div > div {
        height: 100%;
    }
    @media screen and (min-width: 992px) {
        height: 75%;
    }
    @media screen and (min-width: 768px) {
        height: 650px;
    }
}
.plan-and-price__title {
    font-family: 'Inter', sans-serif;
    color: #f3f3f3;
    margin: 1.5rem 0;
    font-size: 2.2rem;
    text-align: left;
    font-weight: bold;
    @media screen and (min-width: 992px) {
        font-size: 3.5rem;
    }
}
</style>
