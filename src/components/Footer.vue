<template>
    <footer class="footer">
        <div class="footer__label">You may also like</div>
        <div class="footer__blocks">
            <a href="/dark-patterns/">
                <div class="footer__blocks__content">
                    <div class="footer__blocks__content__background
                    footer__blocks__content__background--left"></div>
                    <div class="footer__blocks__content__label">Dark Patterns</div>
                </div>
                </a>
                <a href="/auction-game/">
                <div class="footer__blocks__content">
                    <div class="footer__blocks__content__background
                    footer__blocks__content__background--right">
                    </div>
                    <div class="footer__blocks__content__label">The Auction Game</div>
                </div>
                </a>
        </div>
        <div class="footer__credits">Made with ❤️ by
            <a class="footer__credits footer__credits__link"
               target="_blank" href="https://linkedin.com/giovanipvieira">Giovani Vieira</a></div>
        <div class="footer__logo"><a class="footer__logo__link" href="/">Neal.fun</a></div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
    margin-top: 15px;
    text-align: center;
    font-size: 22px;
    font-family: Roboto !important;
    background: $content-background-color;
    padding: 30px 20px 45px;

    &__label{
        font-size: 22px;
    }
    &__blocks {
        display: grid;
        max-width: 900px;
        grid-template-columns: 1fr 1fr;
        @media only screen and (max-width: 800px) {
            grid-template-columns: 1fr;
        }
        grid-auto-rows: 1fr;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
        gap: 10px 10px;

        &__content {
            position: relative;
            height: 140px;
            background: $content-background-color;
            overflow: hidden;

            &__background {
                background-size: auto 100%;
                height: 140px;
                width: 100%;
                position: absolute;
                left: 0px;
                top: 0px;
                z-index: 1;
                transform: translate3d(0px, 0px, 0px);
                background-repeat: repeat, no-repeat;
                background-position: center center;
                &--left {
                    background-image: url(https://neal.fun/link-backgrounds/minimized/dark-patterns.png);
                }
                &--right {
                    background-image: url(https://neal.fun/link-backgrounds/minimized/auction-game.png);
                }
            }

            &__label {
                font-weight: bold;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                pointer-events: none;
                white-space: nowrap;
                font-size: 22px;
                display: flex;
                align-items: flex-end;
                z-index: 2;
                color: $primary-font-color !important;
                background: $content-background-color;
                padding: 14px 20px;
                border-radius: 5px;
            }
        }
    }
    &__credits {
        text-align: center;
        font-size: 22px;
        &__link {
            text-decoration: underline;
        }
    }
    &__logo {
        font-size: 26px;
        margin-top: 18px;
        &__link{
            text-decoration: none;
            color: inherit;
        }
    }
}
</style>
