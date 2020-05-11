<template>
        <div class="content">
           <Profile />
           <StickyBar/>
           <Items />
        </div>
</template>

<script>
import StickyBar from '@/components/StickyBar.vue';
import Profile from '@/components/Profile.vue';
import Items from '@/components/Items.vue';

export default {
  name: 'Content',
  components: {
    StickyBar,
    Profile,
    Items,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.content {
    max-width: 950px;
    margin-left: auto;
    margin-right: auto;

    &__profile {
        background-color: $content-background-color;

        &__wrapper {
            font-size: 32px;
            margin-bottom: 10px;
            font-weight: bold;
            text-align: center;
            line-height: 1.6em;
            background: $content-background-color;
            padding: 30px 20px;

            &__image {
                display: block;
                margin-left: auto;
                margin-right: auto;
                margin-bottom: 25px;
                width: 125px;
                height: 125px;
                border-radius: 125px;
            }
        }
    } /* end of profile*/

    &__stickybar {
        color: $secondary-font-color;
        background-color: $highlight-green;
        font-size: 32px;
        font-weight: bold;
        text-align: center;
        top: 0px;
        position: sticky;
        padding: 20px;
        margin: 10px 0px;
    }

    &__items {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        @media only screen and (max-width: 900px) {
            grid-template-columns: 1fr 1fr;
        }
        @media only screen and (max-width: 600px) {
            grid-template-columns: 1fr;
        }
        gap: 10px 10px;

        &__item {
            background-color: $content-background-color;
            max-width: 100%;
            text-align: center;
            font-size: 18px;
            padding: 20px 15px;

            &__controls {
                font-size: 20px;
                font-weight: bold;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                margin-top: 25px;
                gap: 10px 10px;
            }

            &__label {
                font-size: 22px;
                font-weight: bold;
            }

            &__price {
                font-size: 20px;
                color: $highlight-green;
            }

            &__image {
                display: block;
                margin-left: auto;
                margin-right: auto;
                height: 110px;
                object-fit: contain;
                padding: 15px 10px 10px;
            }
            &__input {
                font-size: 16px;
                color: $primary-font-color;
                -webkit-appearance: none;
                padding: 9px 12px;
                border-radius: 3px;
                border-width: 1px;
                border-style: solid;
                border-color: $input-border-color;
                border-image: initial;
                max-width: 100px;
                text-align: center;
            }
            &__button {
                font-size: 16px;
                cursor: pointer;
                text-align: center;
                color: $secondary-font-color;
                font-weight: bold;
                user-select: none;
                touch-action: manipulation;
                padding: 9px 12px;
                border-radius: 3px;
                border-width: initial;
                border-style: none;
                border-color: initial;
                border-image: initial;
                &--sell {
                    background-color: $button-danger;
                }
                &--buy {
                    background-color: $button-success;
                }
                &--disabled {
                    color: $primary-font-color;
                    cursor: auto;
                    background-color: $button-disabled !important;
                }
            }
        }
    }
}
</style>
