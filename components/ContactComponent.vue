<template>
    <section id="contato">
        <div class="about__container">
            <div class="about__wrapper">
                <div class="about__content">
                    <article class="about__form">
                        <span class="title">
                            Faça sua reserva e experimente o futuro do trabalho!
                        </span>
                        <span class="subtitle">
                            Mais do que um espaço de trabalho, somos uma
                            comunidade que nutre seus sonhos.
                        </span>
                        <div class="input__wrapper">
                            <label for="name">Nome</label>
                            <input
                                v-model="form.name"
                                id="name"
                                type="text"
                                placeholder="Digite seu nome completo..."
                            />
                        </div>
                        <div class="input__wrapper">
                            <label for="email">E-mail</label>
                            <input
                                v-model="form.email"
                                id="email"
                                type="text"
                                placeholder="Digite seu e-mail..."
                            />
                        </div>
                        <div class="input__wrapper">
                            <label for="phone">Telefone</label>
                            <input
                                v-model="form.phone"
                                id="phone"
                                type="tel"
                                placeholder="Digite seu telefone..."
                            />
                        </div>
                        <div class="input__wrapper">
                            <label for="workspace">Tipo de espaço</label>
                            <select
                                name=""
                                id="workspace"
                                v-model="form.workspace"
                            >
                                <option value="" disabled selected>
                                    Selecione o espaço de trabalho...
                                </option>
                                <option value="Auditório">Auditório</option>
                                <option value="Sala de Reunião">
                                    Sala de Reunião
                                </option>
                                <option value="Espaço Gourmet">
                                    Espaço Gourmet
                                </option>
                            </select>
                        </div>
                        <div class="input__wrapper">
                            <label for="hours">Quantidade de horas</label>
                            <input
                                v-model="form.hours"
                                id="hours"
                                type="range"
                                step="1"
                                min="1"
                                max="12"
                            />
                            <span class="value">
                                Valor selecionado: {{ form.hours }}
                            </span>
                        </div>
                        <div class="actions">
                            <button
                                :disabled="!isValid"
                                @click="sendMail($event)"
                            >
                                <a> Pedir agendamento </a>
                            </button>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                phone: '',
                workspace: '',
                hours: '1',
            },
        };
    },
    computed: {
        isValid() {
            console.log(
                Object.entries(this.form).every(([_, value]) => !!value)
            );
            return Object.entries(this.form).every(([_, value]) => !!value);
        },
        mailLink() {
            const body = `
                Nome: ${this.form.name}; \n
                E-mail: ${this.form.email}; \n
                Telefone: ${this.form.phone}; \n
                Espaço de trabalho: ${this.form.workspace}; \n
                Quantidade de Horas: ${this.form.hours}; \n
            `;
            const email = 'afa00.papa@gmail.com';
            const subject = 'Agendamento';
            const link = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(
                body
            )}`;
            return link;
        },
    },
    methods: {
        sendMail(event) {
            if (!this.isValid) return;
            event.preventDefault();
            window.location = this.mailLink;
        },
    },
};
</script>
<style lang="scss" scoped>
section#contato {
    scroll-margin-top: 125px;
    background-color: #d3a132;
    height: auto;
    width: 100%;
    position: relative;
    @media screen and (min-width: 992px) {
        padding: 3rem 0;
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
    background-image: url('/static/images/contact/bg-contact.png');
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    @media screen and (min-width: 992px) {
        display: grid;
        gap: 9.75rem;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 100%;
        background-position: left center;
        background-size: contain;
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
.about__form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #f8fafc;
    padding: 2rem 1rem;
    height: max-content;
    .title {
        display: block;
        color: #393939;
        font-family: 'Inter', sans-serif;
        font-weight: bold;
        width: 100%;
        text-align: center;
        font-size: 1rem;
        @media screen and (min-width: 992px) {
            font-size: 2rem;
        }
    }
    .subtitle {
        display: block;
        color: #868686;
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        width: 85%;
        font-size: 0.75rem;
        margin: 0.5rem auto;
        text-align: center;
        @media screen and (min-width: 992px) {
            font-size: 1rem;
            width: 68%;
            margin: 1rem auto;
        }
    }
    .input__wrapper {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 6px 0;
        & > label {
            font-size: 0.75rem;
            font-family: 'Inter', sans-serif;
            color: #d3a132;
            font-weight: bold;
        }
        & > input,
        & > select {
            border-radius: 4px;
            padding: 0.55rem 1rem;
            border: none;
            outline: 1px solid $secondary;
            color: #9b9b9b;
            background-color: #f8fafc;
            &::placeholder {
                color: #9b9b9b;
            }
        }
        & > input[type='range'] {
            -webkit-appearance: none;
            outline: none;
            margin: 10px 0;
            padding: 0;
            width: 100%;
        }
        & > input[type='range']:focus {
            outline: none;
        }
        & > input[type='range']::-webkit-slider-runnable-track {
            width: 100%;
            height: 32px;
            cursor: pointer;
            animate: 0.2s;
            box-shadow: 0px 0px 0px #000000;
            background: #fff;
            border-radius: 50px;
            border: 1px solid #d3a132;
            padding-inline: 5px;
        }
        & > input[type='range']::-webkit-slider-thumb {
            box-shadow: 0px 0px 1px #000000;
            border: 0px solid #000000;
            height: 25px;
            width: 25px;
            border-radius: 50px;
            background: #393939;
            cursor: pointer;
            -webkit-appearance: none;
            margin-top: 2.5px;
        }
        & > input[type='range']:focus::-webkit-slider-runnable-track {
            background: #fff;
        }
        & > input[type='range']::-moz-range-track {
            width: 100%;
            height: 32px;
            cursor: pointer;
            animate: 0.2s;
            box-shadow: 0px 0px 0px #000000;
            background: #fff;
            border-radius: 50px;
            border: 1px solid #d3a132;
            padding-inline: 5px;
        }
        & > input[type='range']::-moz-range-thumb {
            box-shadow: 0px 0px 1px #000000;
            border: 0px solid #000000;
            height: 25px;
            width: 25px;
            border-radius: 50px;
            background: #393939;
            cursor: pointer;
        }
        & > input[type='range']::-ms-track {
            width: 100%;
            height: 32px;
            cursor: pointer;
            animate: 0.2s;
            background: transparent;
            border-color: transparent;
            color: transparent;
        }
        & > input[type='range']::-ms-fill-lower {
            background: #fff;
            border: 1px solid #d3a132;
            border-radius: 100px;
            box-shadow: 0px 0px 0px #000000;
        }
        & > input[type='range']::-ms-fill-upper {
            background: #fff;
            border: 1px solid #d3a132;
            border-radius: 100px;
            box-shadow: 0px 0px 0px #000000;
        }
        & > input[type='range']::-ms-thumb {
            box-shadow: 0px 0px 1px #000000;
            border: 0px solid #000000;
            height: 25px;
            width: 25px;
            border-radius: 50px;
            background: #393939;
            cursor: pointer;
        }
        & > input[type='range']:focus::-ms-fill-lower {
            background: #fff;
        }
        & > input[type='range']:focus::-ms-fill-upper {
            background: #fff;
        }
        & > span.value {
            font-size: 0.75rem;
            color: #9b9b9b;
            font-family: 'Nunito', sans-serif;
            font-weight: 400;
        }
        @media screen and (min-width: 992px) {
            & > label {
                font-size: 1rem;
            }
            & > span.value {
                font-size: 1rem;
            }
        }
    }
    .actions {
        & > button {
            display: block;
            background-color: $secondary;
            color: #fff;
            font-family: 'Manrope', sans-serif;
            font-weight: bold;
            border-radius: 4px;
            font-size: 0.74rem;
            width: 100%;
            border: none;
            height: 35px;
            margin-bottom: 10px;
            align-self: flex-end;
            cursor: pointer;
            & > a {
                padding: 0.5rem 2rem;
                display: block;
                width: 100%;
                text-decoration: none;
                color: inherit;
            }
            @media screen and (min-width: 992px) {
                font-size: 1rem;
                height: 53px;
            }
        }
        & > button[disabled] {
            color: #c0c0c0;
            cursor: not-allowed;
            background-color: #9b9b9b;
        }
    }
    @media screen and (min-width: 992px) {
        max-width: auto;
        position: absolute;
        max-width: 40vw;
        height: max-content;
        right: 8%;
        padding: 3rem 2rem;
    }
}
</style>
