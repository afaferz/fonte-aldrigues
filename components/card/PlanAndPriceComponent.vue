<template>
    <div class="card__container">
        <div class="card__image">
            <img :src="data.imgLink" :alt="data.name" />
        </div>
        <div class="card__infos">
            <div class="card__infos__title">
                {{ data.name }}
            </div>
            <div class="card__infos__subtitle">
                {{ data.type }}
            </div>
            <hr role="separator" />
            <div class="card__infos__prices">
                <div v-for="price in data.prices" :key="price.name">
                    <span> - {{ price.name }}: </span>
                    <span v-if="price.range.length > 1">
                        De {{ formatMoney(price.range[0]) }} a
                        {{ formatMoney(price.range[1]) }}
                    </span>
                    <span v-else>
                        {{ formatMoney(price.range[0]) }}
                    </span>
                </div>
            </div>
            <button class="card__infos__cta">
                <a href="/" target="_blank" rel="noopener">
                    Faça um orçamento
                </a>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardPlanAndPriceComponent',
    props: {
        data: {
            type: Object,
            default: () => ({}),
        },
    },
    methods: {
        formatMoney(value) {
            return new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(value);
        },
    },
};
</script>
<style lang="scss" scoped>
.card__container {
    height: 100%;
    width: 275px;
    background-color: #f3f3f3;
    border-radius: 12px 12px 8px 8px;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 992px) {
        width: 500px;
    }
    @media screen and (min-width: 768px) {
        width: 500px;
    }
}
.card__image {
    height: 40%;
    border-radius: 8px 8px 0 0;
    & > img {
        border-radius: 8px 8px 0 0;
        display: block;
        width: 100%;
        height: 100%;
    }
}
.card__infos {
    height: 60%;
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    &__title {
        font-size: 1.1rem;
        margin-bottom: 1rem;
        color: #4b4b4b;
        font-weight: bold;
        font-family: 'Inter', sans-serif;
    }
    &__subtitle {
        font-family: 'Nunito', sans-serif;
        font-size: 0.95rem;
        color: $secondary;
        font-weight: bold;
    }
    hr {
        margin: 1rem 0;
        background-color: #000;
    }
    &__prices {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        & > div {
            display: inline-flex;
            justify-content: space-between;
            font-family: 'Nunito', sans-serif;
            font-size: 12px;
            align-items: flex-start;
            & > span:nth-child(1) {
                display: inline-block;
                max-width: 50%;
                line-height: 1.5;
                font-weight: 400;
            }
            & > span:nth-child(2) {
                text-align: right;
                margin-top: 4px;
                color: #4b4b4b;
                font-weight: bold;
            }
        }
    }
    &__cta {
        display: block;
        background-color: $secondary;
        color: #fff;
        font-family: 'Manrope', sans-serif;
        font-weight: bold;
        border-radius: 4px;
        font-size: 12px;

        width: 85%;
        border: none;
        margin-bottom: 10px;
        align-self: flex-end;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
        & > a {
            padding: 0.5rem 2rem;
            display: block;
            width: 100%;
            text-decoration: none;
            color: inherit;
        }
    }
    @media screen and (min-width: 992px) {
        height: auto;
        min-height: 60%;
        padding: 2rem 2.5rem;
        &__title {
            font-size: 1.5rem;
        }
        &__subtitle {
            font-size: 1.3rem;
        }
        &__prices {
            & > div {
                font-size: 1rem;
            }
        }
        &__cta {
            height: 50px;
            font-size: 1rem;
            margin-bottom: 1.75rem;
        }
    }
}
</style>
