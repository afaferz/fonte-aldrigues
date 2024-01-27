<template>
    <section id="espacos-de-trabalho">
        <div class="workspace__container">
            <div class="workspace__wrapper">
                <div class="plan-and-price__content">
                    <div class="workspace__title">
                        <h3>Espaços <b>de trabalho</b></h3>
                        <span>Conheça nossos espaços!</span>
                    </div>
                </div>
                <div class="workspace__tab_wrapper">
                    <div class="workspace__tab_control">
                        <button
                            v-for="(tab, idx) in tabs"
                            :key="tab"
                            class="workspace__tab_control__btn"
                            :class="{
                                'workspace__tab_control__btn--active':
                                    idx === selectedTab,
                            }"
                            @click="selectTab(idx)"
                        >
                            {{ tab }}
                        </button>
                    </div>

                    <div
                        class="workspace__tab_item"
                        v-for="(tab, idx) in contentTabs"
                        :key="idx"
                        v-show="idx === selectedTab"
                    >
                        <Transition name="fade">
                            <Swiper
                                v-show="idx === selectedTab"
                                :modules="[SwiperAutoplay, SwiperEffectFade]"
                                :slides-per-view="1"
                                :spaceBetween="'1rem'"
                                :loop="true"
                                :effect="'fade'"
                                :autoplay="{
                                    delay: 5000,
                                    disableOnInteraction: true,
                                }"
                            >
                                <SwiperSlide v-for="slide in tab" :key="slide">
                                    <div class="slide__img_wrapper">
                                        <img
                                            src=""
                                            :alt="img"
                                            v-for="img in slide"
                                            :key="img"
                                        />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </Transition>
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
            contentTabs: [
                [
                    ['1', '2', '3'],
                    ['1x', '2x', '3x'],
                ],
                [['4', '5', '6']],
                [['7', '8', '9']],
            ],
            tabs: ['Auditório', 'Sala de Reunião', 'Espaço Gourmet'],
            selectedTab: 0,
        };
    },
    methods: {
        selectTab(i) {
            this.selectedTab = i;
        },
    },
};
</script>

<style lang="scss" scoped>
section#espacos-de-trabalho {
    scroll-margin-top: 125px;
    background-color: #393939;
    min-height: 100vh;
    width: 100%;
    height: auto;
    position: relative;
    box-sizing: border-box;
    @media screen and (min-width: 992px) {
        display: grid;
        place-content: center;
        scroll-margin-top: 95px;
    }
}
.workspace__container {
    width: 95%;
    height: 100%;
    margin: 0 auto;
    @media screen and (min-width: 992px) {
        scroll-margin-top: 95px;
        width: 100%;
        width: 85dvw;
    }
}
.workspace__wrapper {
    height: 100%;
}
.workspace__content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    height: 100%;
    height: 100%;
    width: 100%;
    padding: 2.5rem 0.8rem;
    box-sizing: border-box;
    @media screen and (min-width: 992px) {
    }
}
.workspace__title {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    padding: 1.5rem 0;
    box-sizing: border-box;
    h3 {
        font-size: 2rem;
        font-family: 'Inter', sans-serif;
        color: #fff;
        font-weight: bold;
        b {
            color: $secondary !important;
        }
        @media screen and (min-width: 992px) {
            font-size: 2.5rem;
        }
    }
    span {
        font-family: 'Nunito', sans-serif;
        font-size: 1.2rem;
        color: #868686;
    }
}
.workspace__tab_wrapper {
    width: 100%;
    height: 90%;
    min-height: 90%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 1rem 0;
}
.workspace__tab_control {
    display: flex;
    margin: 10px 0;
    flex-direction: column;
    gap: 1rem;
    @media screen and (min-width: 992px) {
        flex-direction: row;
        justify-content: space-between;
    }
    &__btn {
        cursor: pointer;
        padding-inline: 1rem;
        font-family: 'Manrope', sans-serif;
        font-weight: bold;
        border: none;
        border-radius: 4px;
        font-size: 1rem;
        height: 53px;
        min-width: 32%;
        width: 100%;
        background-color: transparent;
        color: #868686;
        border: 2px solid #868686;
        &--active {
            border: none;
            background-color: $secondary;
            color: #fff;
        }
        @media screen and (min-width: 992px) {
            max-width: 450px;
        }
    }
}
.workspace__tab_item {
    height: auto;
    background-color: blue;
    padding: 10px 0;
    @media screen and (min-width: 992px) {
        height: 397px;
    }
}
.slide__img_wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    img {
        display: block;
        height: 320px;
        width: 100%;
        background-color: #868686;
    }
    @media screen and (min-width: 768px) {
        justify-content: center;
        align-items: center;
        img {
            flex-wrap: wrap;
            max-width: calc(100% / 2);
        }
    }
    @media screen and (min-width: 992px) {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        img {
            max-width: calc(100% / 3);
            height: 100%;
        }
    }
}
// Slider
.swiper {
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 1rem;
}
.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    height: 100% !important;
    font-size: 4rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    gap: 1rem;
    width: auto;
}
.swiper-wrapper {
    height: 100%;
    width: fit-content;
}
.swiper-cards {
    width: 100%;
    height: 100%;
}
.swiper-cards .swiper-slide {
    border-radius: 6px;
    border: 1px solid black;
}
// Helpers
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
