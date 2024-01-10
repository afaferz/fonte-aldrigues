<template>
    <header class="header">
        <div class="header__content">
            <h1>
                <a href="#">
                    <img
                        src="/static/images/logo.svg"
                        alt="Logo"
                        class="header__logo"
                    />
                </a>
            </h1>
            <button class="header__button" @click="openMenu = !openMenu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <nav
            class="header__nav"
            :class="{
                open: openMenu,
            }"
        >
            <ul>
                <li v-for="link in items" :key="link.name">
                    <a
                        :href="link.href"
                        class="header__nav__link"
                        :class="{
                            active: isActive(link.href),
                        }"
                        @click.self.stop="openMenu = false"
                    >
                        {{ link.name }}
                    </a>
                </li>
                <li>
                    <button class="header__cta">
                        <a href="" target="_blank" rel="noopener">
                            Reservar Agora
                        </a>
                    </button>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script set>
export default {
    data() {
        return {
            openMenu: false,
            items: [
                { name: 'Início', href: '#inicio' },
                {
                    name: 'Espaços de trabalho',
                    href: '#espacos-de-trabalho',
                    active: false,
                },
                { name: 'Parcerias', href: '#parcerias' },
                {
                    name: 'Planos & Preços',
                    href: '#planos-e-precos',
                    active: false,
                },
                { name: 'Sobre Nós', href: '#sobre-nos' },
                { name: 'Contato', href: '#contato' },
            ],
        };
    },
    computed: {
        isActive() {
            const { hash } = this.$route;
            console.log(hash);

            return (href) => href === hash;
        },
    },
};
</script>
<style scoped lang="scss">
header {
    height: 125px;
    background-color: $primary;
    box-shadow: 10px 4px 4px rgba($color: #000000, $alpha: 0.25);
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    @media screen and (min-width: 992px) {
        height: 95px;
    }
}
.header__content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;

    @media screen and (min-width: 992px) {
        padding: 1rem;
        width: max-content;
        margin-inline: auto;
        justify-content: space-between;
    }
}
.header__button {
    height: 100%;
    width: 45px;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    gap: 5px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    border: none;
    order: 2;
    & > span {
        width: 100%;
        height: 3px;
        border-radius: 0.25rem;
        background-color: $white;
    }
    @media screen and (min-width: 992px) {
        display: none;
    }
}
.header__nav {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: $primary;
    position: absolute;
    top: 125px;
    height: 0px;
    width: 100vw;
    left: 0;
    gap: 1.2rem;
    box-sizing: border-box;
    transform-origin: top center;
    transition: all 0.5s ease;
    overflow: hidden;
    z-index: 0;
    &.open {
        height: 100vh;
        z-index: 9;
    }
    ul {
        list-style: none;
        gap: 5px;
        display: flex;
        flex-direction: column;
        margin: 1rem;
    }
    ul > li {
        height: 100%;
        box-sizing: border-box;
    }
    ul > li > a.header__nav__link {
        display: block;
        text-decoration: none;
        color: $grey-scale;
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
        width: 100%;
        text-align: center;
        padding: 1.5rem;
        height: 100%;
        box-sizing: border-box;
        &.active {
            color: $white;
        }
    }
    @media screen and (min-width: 992px) {
        height: 100%;
        flex-direction: row;
        position: initial;
        width: max-content;
        display: flex;
        justify-content: center;
        margin-inline: auto;
        align-items: center;
        ul {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 1.2rem;
            padding: 0;
            height: 65px;
        }
        ul > li {
            height: 100%;
        }
        ul > li > a.header__nav__link {
            padding: 1.25rem;
            height: 100%;
        }
    }
}
.header__logo {
    height: 100%;
    padding: 3px;
    min-height: 45px;
    width: 200px;
}
.header__cta {
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
    }
    @media screen and (min-width: 992px) {
        height: 100%;
        max-width: 173px;
        padding: 8px 1rem;
    }
}
</style>
