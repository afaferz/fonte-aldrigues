<template>
    <section id="planos-e-precos">
        <div class="plan-and-price__container">
            <div class="plan-and-price__wrapper">
                <div class="plan-and-price__content">
                    <h3 class="plan-and-price__title">Planos &amp; Preços</h3>
                    <div
                        v-for="(item, key) in plansAndPrices"
                        :key="item.name"
                        class="plan-and-price__carousel-wrapper"
                    >
                        <span class="plan-and-price__subtitle">
                            {{ key }}
                        </span>
                        <div class="plan-and-price__carousel-item">
                            <div v-for="(item2, key2) in item" :key="key2">
                                <CardPlanAndPriceComponent :data="item2" />
                            </div>
                        </div>
                        <span class="plan-and-price__disclamer">
                            * Lembre-se de que não oferecemos diretamente serviços de buffet para eventos e coffee breaks, mas podemos indicar parceiros confiáveis para essas necessidades específicas.
                        </span>
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
                'Plano Piloto': [
                    {
                        name: 'Cowork (com Móveis)',
                        type: '_',
                        prices: [
                            {
                                name: 'Diária',
                                range: [450],
                            },
                            {
                                name: 'Por hora',
                                range: [265],
                            },
                        ],
                        ctaLink: ''
                    },
                    {
                        name: 'Auditório',
                        type: '_',
                        prices: [
                            {
                                name: 'Turno',
                                range: [550],
                            },
                            {
                                name: 'Diária',
                                range: [1200],
                            },
                        ],
                        ctaLink: ''
                    },
                    {
                        name: 'Sala de Reunião ou Mini Auditório',
                        type: '_',
                        prices: [
                            {
                                name: 'Diária',
                                range: [750],
                            },
                            {
                                name: 'Por hora',
                                range: [275],
                            },
                        ],
                        ctaLink: ''
                    },
                    {
                        name: 'Espaço Gourmet ao Lado do Auditório',
                        type: '_',
                        prices: [
                            {
                                name: 'Adicional de Dia Inteiro',
                                range: [650],
                            },
                            {
                                name: 'Adicional de Meio Período',
                                range: [520],
                            },
                        ],
                        ctaLink: ''
                    },
                    {
                        name: 'Espaço Gourmet (Somente)',
                        type: '_',
                        prices: [
                            {
                                name: 'Diária',
                                range: [900],
                            },
                            {
                                name: 'Meio Período',
                                range: [750],
                            },
                        ],
                        ctaLink: ''
                    },
                ],
                Taguatinga: [
                    {
                        name: 'Cowork (com Móveis)',
                        type: '_',
                        prices: [
                            {
                                name: 'Diária',
                                range: [250],
                            },
                            {
                                name: 'Por hora',
                                range: [65],
                            },
                        ],
                        ctaLink: ''
                    },
                    {
                        name: 'Cowork (sem Móveis)',
                        type: 'Mensal',
                        imgLink: '/static/images/Rectangle 98.png',
                        prices: [
                            {
                                name: 'Sala com janela',
                                range: [1100, 1800],
                            },
                            {
                                name: 'Salas sem janela',
                                range: [1300, 2500],
                            },
                        ],
                        ctaLink: ''
                    },                 
                    {
                        name: 'Auditório',
                        type: '',
                        prices: [
                            {
                                name: 'Turno',
                                range: [550],
                            },
                            {
                                name: 'Diária',
                                range: [900],
                            },
                        ],
                        ctaLink: ''
                    },
                    {
                        name: 'Sala de Reunião ou Mini Auditório',
                        type: '_',
                        prices: [
                            {
                                name: 'Diária',
                                range: [350],
                            },
                            {
                                name: 'Por hora',
                                range: [75],
                            },
                        ],
                        ctaLink: ''
                    },
                    {
                        name: 'Espaço Gourmet ao Lado do Auditório',
                        type: '_',
                        prices: [
                            {
                                name: 'Adicional de Dia Inteiro',
                                range: [250],
                            },
                            {
                                name: 'Adicional de Meio Período',
                                range: [120],
                            },
                        ],
                        ctaLink: ''
                    },
                    {
                        name: 'Espaço Gourmet (Somente)',
                        type: '_',
                        prices: [
                            {
                                name: 'Diária',
                                range: [500],
                            },
                            {
                                name: 'Meio Período',
                                range: [350],
                            },
                        ],
                        ctaLink: ''
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

.plan-and-price__carousel-wrapper {
    display: flex;
    flex-direction: column;
}
.plan-and-price__carousel-item {
    height: 600px;
    width: 100%;
    overflow-x: auto;
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
.plan-and-price__subtitle {
    font-family: 'Inter', sans-serif;
    color: $secondary;
    margin: 1.5rem 0;
    font-size: 1.7rem;
    text-align: left;
    font-weight: bold;
    @media screen and (min-width: 992px) {
        font-size: 2.2rem;
    }
}
.plan-and-price__disclamer {
    font-size: 14px;
    font-weight: 400;
    margin: 1rem 0;
    display: inline-block;
    color: #fff;
}
</style>
