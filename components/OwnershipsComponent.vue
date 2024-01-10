<template>
    <section id="parcerias">
        <div class="ownership__container">
            <div class="ownership__wrapper">
                <div class="ownership__title">
                    <span>Veja nossos parceiros</span>
                    <span>Nossos parceiros de <b>negócios!</b></span>
                </div>
                <div class="ownership__images">
                    <img
                        v-for="image in ownerships"
                        :src="image.link"
                        :alt="image.name"
                        :key="image.name"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            ownerships: [
                {
                    name: 'Exit',
                    link: '/static/images/ownerships/exit-logo.svg',
                },
                {
                    name: 'Aldrigues',
                    link: '/static/images/ownerships/aldrigues-logo.svg',
                },
                {
                    name: 'Audrix',
                    link: '/static/images/ownerships/audrix-logo.svg',
                },
                {
                    name: 'Bibi Mais',
                    link: '/static/images/ownerships/bibi-mais-logo.svg',
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
section#parcerias {
    scroll-margin-top: 125px;
    background-color: #fff;
    height: auto;
    width: 100%;
    padding: 2rem 0;
    box-sizing: border-box;
    position: relative;
    @media screen and (min-width: 992px) {
        scroll-margin-top: 95px;
        display: grid;
        min-height: 65vh;
    }
}
.ownership__container {
    width: 90%;
    margin: 0 auto;
}
.ownership__wrapper {
    display: grid;
    place-content: center;
    height: 100%;
}
.ownership__title {
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    color: #4b4b4b;
    font-weight: bold;
    span:nth-child(1) {
        font-family: 'Nunito', sans-serif;
        font-size: 1.5rem;
    }
    span:nth-child(2) {
        font-family: 'Inter', sans-serif;
        font-size: 2.5rem;
        b {
            color: $secondary;
        }
    }
    @media screen and (min-width: 992px) {
        span:nth-child(2) {
            font-size: 3rem;
        }
    }
}
.ownership__images {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 1.75rem auto;
    gap: 1rem;
    & > img {
        display: block;
        height: 195px;
        width: 275px;
        padding: .5rem;
    }
}
</style>
