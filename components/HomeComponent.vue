<template>
    <section id="inicio">
        <div class="home__wrapper">
            <div class="home__title">
                <span>
                    Seja bem-vindo ao
                    <br />
                    Centro Empresarial
                </span>
                <h1> FONTE ALDRIGUES </h1>
            </div>
            <div class="home__description">
                <p>
                    Seja bem-vindo ao Centro Empresarial FONTE ALDRIGUES, onde a
                    inovação, a excelência e a conexão estão no cerne de tudo o
                    que fazemos. Estamos ansiosos para fazer parte do seu
                    sucesso empresarial e contribuir para o crescimento de sua
                    carreira.
                </p>
            </div>
            <div class="home__cta">
                <button>
                    <a href="#sobre-nos"> Sobre Nós </a>
                </button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section#inicio {
    scroll-margin-top: 125px;
    background-image: url('/static/images/home-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 100vh;
    width: 100%;
    margin-top: 95px;
    position: relative;
    @media screen and (min-width: 992px) {
        background-position: right right;
        scroll-margin-top: 95px;
    }
}
.home__wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 90vw;
    @media screen and (min-width: 992px) {
        width: 55vw;
        top: 35%;
        left: 35%;
    }
}
.home__title {
    font-weight: 900;
    font-family: 'Inter', sans-serif;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    span:nth-child(1) {
        color: #4b4b4b;
        line-height: 1.3;
    }
    h1 {
        color: $secondary;
        margin-top: 10px;
        display: inline-block;
    }
    @media screen and (min-width: 992px) {
        font-size: 4rem;
    }
}
.home__description {
    margin: 1rem 0;
    p {
        font-family: 'Nunito', sans-serif;
        line-height: 1.3;
        font-size: 1rem;
        color: #868686;
        font-weight: 500;
    }
    @media screen and (min-width: 992px) {
        max-width: 650px;
    }
}
.home__cta {
    margin: 1rem 0;
    button {
        height: 55px;
        border-radius: 0.25rem;
        background-color: $secondary;
        text-align: center;
        border: 0px;
        font-size: 1rem;
        padding: 1rem 2rem;
        font-family: 'Nunito', sans-serif;
        font-weight: bold;
        width: 100%;
        cursor: pointer;
        a {
            color: $white;
            text-decoration: none;
            display: block;
            width: 100%;
        }
        @media screen and (min-width: 992px) {
            height: 100%;
            max-width: 421px;
            padding: 8px 1rem;
        }
    }
}
</style>
