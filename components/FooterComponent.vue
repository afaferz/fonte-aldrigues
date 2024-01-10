<template>
    <footer class="footer">
        <div class="footer__content">
            <img
                src="/static/images/logo.svg"
                alt="Logo"
                class="footer__logo"
            />
            <div class="footer__address">
                <address v-for="address in address" :key="address.name">
                    <span class="footer__label">{{ address.name }}</span>
                    <span>
                        {{ address.description }}
                    </span>
                </address>
            </div>
            <div class="footer__contact">
                <span class="footer__label"> Contato </span>
                <span> (61) 99167-4883 </span>
            </div>
            <div class="footer__social">
                <span class="footer__label"> Nos acompanhe nas Redes </span>
                <ul>
                    <li v-for="socialLink in social" :key="socialLink.name">
                        <a href="" target="_black" rel="noopener">
                            {{ socialLink.name }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            social: [
                { name: 'Facebook', link: '', icon: '' },
                { name: 'Facebook', link: '', icon: '' },
                { name: 'Facebook', link: '', icon: '' },
                { name: 'Facebook', link: '', icon: '' },
                { name: 'Facebook', link: '', icon: '' },
            ],
            address: [
                {
                    name: 'Localização Taguatinga:',
                    description:
                        '• Endereço: QSD 11, lote 39, Taguatinga Sul, Brasília, DF, CEP: 72.020-110, Ed. Fonte Aldrigues',
                },
                {
                    name: 'Localização Plano Piloto - Asa Sul:',
                    description:
                        '• Endereço: Quadra 715 Sul, bloco H, casa 4, 2º andar',
                },
            ],
        };
    },
};
</script>
<style lang="scss" scoped>
footer {
    height: max-content;
    background-color: $primary;
    box-shadow: 10px 4px 4px rgba($color: #000000, $alpha: 0.25);
    margin: 0 auto;
    padding: 2rem;
    @media screen and (min-width: 992px) {
        height: 240px;
    }
}
.footer__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    flex: 1 1 auto;
    @media screen and (min-width: 992px) {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1.5fr 10% 1fr;
        grid-template-rows: 100%;
        max-width: 75vw;
        margin: 0 auto;
    }
}
.footer__logo {
    width: 100%;
    max-width: 360px;
    height: 77px;
    @media screen and (min-width: 992px) {
        max-width: 250px;
    }
}
.footer__address {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-family: 'Inter', sans-serif;
    font-size: 0.85rem;
    max-width: 360px;

    @media screen and (min-width: 992px) {
        width: 100%;
        align-items: flex-end;
    }
}
.footer__address > address {
    color: $white;
    display: flex;
    flex-direction: column;
    line-height: 1.5;
    gap: 6px;
    font-weight: 300;
    width: 100%;
}
.footer__contact {
    display: flex;
    flex-direction: column;
    font-family: 'Inter', sans-serif;
    gap: 6px;
    line-height: 1.5;
    width: 100%;
    margin: 1rem 0;
    max-width: 360px;

    @media screen and (min-width: 992px) {
        width: 100%;
    }
    span:last-child {
        color: $white;
        font-weight: 300;
    }
}
.footer__social {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 360px;
    ul {
        display: flex;
        list-style: none;
        gap: 6px;
    }
    ul > li {
        width: 35px;
        height: 35px;
        background-color: $secondary;
        border-radius: 50%;
    }

    @media screen and (min-width: 992px) {
        width: 100%;
        align-items: flex-end;
        margin-inline: 10px;
        align-items: flex-end;
    }
}
.footer__label {
    font-size: 1rem;
    font-weight: bold;
    font-family: 'Manrope', sans-serif;
    color: $white;
}
</style>
