<template>
    <section id="sobre-nos">
        <div class="about__container">
            <div class="about__wrapper">
                <div class="about__content">
                    <article class="about__image">
                        <img
                            src="/static/images/home-about.png"
                            alt="Fachada Imagem"
                            width="100%"
                            height="100%"
                        />
                    </article>
                    <article class="about__text">
                        <img src="/static/images/logo-black.svg" alt="" />
                        <h3>Sobre Nós</h3>
                        <p>
                            A nossa empresa é o resultado da visão de dois
                            grandes empreendedores, Hélio Fontenele e Wanessa
                            Aldrigues, que uniram suas paixões e conhecimentos
                            para criar um ambiente moderno, elegante e de fácil
                            acesso. No Centro Empresarial FONTEALDRIGUES, nossa
                            missão é proporcionar um espaço de trabalho
                            compartilhado que vai além do convencional.
                            <br />
                            <br />
                            Combinando a expertise dos nossos fundadores,
                            concebemos um local que atende às necessidades de
                            diversos profissionais, desde advogados
                            independentes até pequenos empreendedores que
                            desejam uma alternativa prática e eficiente aos
                            escritórios convencionais. Nosso espaço também
                            oferece instalações adequadas para cursos e eventos,
                            criando um ambiente multifuncional e dinâmico.
                        </p>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section#sobre-nos {
    scroll-margin-top: 125px;
    background-color: #fcf2e5;
    height: auto;
    width: 100%;
    position: relative;
    @media screen and (min-width: 992px) {
        scroll-margin-top: 95px;
        display: grid;
        min-height: 100vh;
    }
}
.about__container {
    width: 90%;
    margin: 0 auto;
}
.about__wrapper {
    display: grid;
    place-content: center;
    height: 100%;
}
.about__content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 1.5rem;
    height: 100%;
    width: 100%;
    padding: 1.5rem;
    box-sizing: border-box;
    @media screen and (min-width: 992px) {
        display: grid;
        gap: 9.75rem;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 100%;
    }
    @media screen and (max-width: 1200px) {
        gap: 2.75rem;
    }
}
.about__image {
    width: 250px;
    height: 200px;
    @media screen and (min-width: 992px) {
        height: 95%;
        width: 100%;
    }
}
.about__text {
    img {
        display: block;
        margin-top: 1rem;
        margin-bottom: 0.65rem;
    }
    h3 {
        display: inline-block;
        margin: 1.5rem 0;
        color: #4b4b4b;
        font-size: 1.5rem;
        font-weight: bold;
    }
    p {
        line-height: 1.5;
        font-family: 'Nunito', sans-serif;
        color: #868686;
    }
    @media screen and (min-width: 992px) {
        max-width: 465px;
        h3 {
            font-size: 4rem;
        }
        p {
            font-size: 1rem;
        }
    }
}
</style>
