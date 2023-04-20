<template>
  <section class="WhatIs">
    <div class="container">
      <div class="WhatIs__columns">
        <div class="WhatIs__about">
          <div class="WhatIs__title">
            Корпоративный сайт —
          </div>
          <div class="WhatIs__desc">
            это многостраничный веб-сайт, созданный для компании или организации для предоставления информации о своей деятельности, продуктах и услугах. Его можно использовать для связи с клиентами, партнерами или инвесторами, а также для повышения узнаваемости бренда и улучшения имиджа компании.
          </div>
        </div>
        <div class="WhatIs__col">
          <div class="WhatIs__cards">
            <div class="WhatIs__card">
              <div class="WhatIs__img one">
                <img src="../../../assets/images/control/corp-website/what-is-cards/info.svg" alt="info">
              </div>
              <div class="WhatIs__subtitle">
                Больше информации
              </div>
              <div class="WhatIs__text">
                Продемонстрируем все услуги или продукцию компании, формируем положительный имидж
              </div>
            </div>
            <div class="WhatIs__card">
              <div class="WhatIs__img one">
                <img src="../../../assets/images/control/corp-website/what-is-cards/schedule.svg" alt="schedule">
              </div>
              <div class="WhatIs__subtitle">
                Повышение узнаваемости
              </div>
              <div class="WhatIs__text">
                Расширим клиентуру и географию рынка компании, проинформируем о событиях и значимых новостях
              </div>
            </div>
            <div class="WhatIs__card">
              <div class="WhatIs__img one">
                <img src="../../../assets/images/control/corp-website/what-is-cards/mac.svg" alt="mac">
              </div>
              <div class="WhatIs__subtitle">
                Уникальный дизайн
              </div>
              <div class="WhatIs__text">
                Создадим продающий дизайн для вашего сайта, который поможет расширить бизнес
              </div>
            </div>
            <div class="WhatIs__card">
              <div class="WhatIs__img two">
                <img src="../../../assets/images/control/corp-website/what-is-cards/phone.svg" alt="phone">
              </div>
              <div class="WhatIs__subtitle">
                Адаптивная верстка
              </div>
              <div class="WhatIs__text">
                Адаптируем сайт под разные устройства: планшет, мобильный телефон.
              </div>
            </div>
          </div>
          <div class="WhatIs__prices">
            <div class="WhatIs__new-price">
              от 100 000 ₽
            </div>
            <div class="WhatIs__old-price">
              от 150 000 ₽
            </div>
          </div>
          <div class="WhatIs__btn">
            Заказать
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
.WhatIs{
  @include bgcenter('../../../assets/images/control/corp-website/what-is-bg.png')
}
.WhatIs__columns{
  padding: 150px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .WhatIs__about{
    max-width: 580px;
    .WhatIs__title{
      font-family: $ff1;
      font-style: normal;
      font-weight: 700;
      font-size: 45px;
      line-height: 55px;
      color: #FFFFFF;
      padding-bottom: 33px;
    }
    .WhatIs__desc{
      font-family: $ff2;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 26px;
      color: #FFFFFF;
      max-width: 480px;
    }
  }
  .WhatIs__col{
    padding-top: 88px;
    .WhatIs__cards{
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      max-width: 580px;
      column-gap: 15px;
      row-gap: 36px;
      .WhatIs__card{
        width: 48%;
        .WhatIs__img{
          height: auto;
          &.one{
            width: 45px;
          }
          &.two{
            width: 23px;
          }
        }
        .WhatIs__subtitle{
          font-family: $ff1;
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 30px;
          color: #FAFF00;
          margin: 20px 0 10px 0;
        }
        .WhatIs__text{
          font-family: $ff2;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 130%;
          color: #D4D4D4;
        }
      }
    }
    .WhatIs__prices{
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      margin: 50px 0 35px 0;
      .WhatIs__new-price{
        font-family: $ff2;
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 30px;
        color: #FAFF00;
        padding-top: 30px;
      }
      .WhatIs__old-price{
        font-family: $ff2;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 15px;
        text-decoration: line-through;
        color: #C4C4C4;
      }
    }
    .WhatIs__btn{
      font-family: $ff1;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 33px;
      color: rgba(29, 29, 29, 0.9);
      background: #F9FF05;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
      border-radius: 50px;
      padding: 10px 40px;
      width: fit-content;
    }
  }
}
@media (max-width: 1024px) {
  .WhatIs__columns{
    padding: 100px 0;
    .WhatIs__about{
      max-width: 418px;
    }
    .WhatIs__col{
      max-width: 416px;
      .WhatIs__cards{
        .WhatIs__card{
          .WhatIs__subtitle{
            font-size: 18px;
            line-height: 30px;
          }
          .WhatIs__text{
            font-size: 16px;
            line-height: 21px;
          }
        }
      }
      .WhatIs__btn{
        padding: 10px 47px;
      }
    }
  }
}
@media (max-width: 768px) {
  .WhatIs__columns{
    flex-wrap: wrap;
    row-gap: 50px;
    .WhatIs__about{
      max-width: none;
      width: 100%;
      .WhatIs__title{
        padding-bottom: 32px;
      }
      .WhatIs__desc{
        max-width: 625px;
      }
    }
    .WhatIs__col{
      padding-top: 0;
      max-width: none;
      width: 100%;
      .WhatIs__cards{
        max-width: none;
        row-gap: 40px;
        .WhatIs__card{
          .WhatIs__text{
            font-size: 18px;
            line-height: 23px;
          }
          .WhatIs__img{
            &.one{
              width: 50px;
            }
            &.two{
              width: 25px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 480px) {
  .WhatIs__columns{
    .WhatIs__about{
      .WhatIs__title{
        font-size: 36px;
        padding-bottom: 20px;
      }
    }
    .WhatIs__col{
      .WhatIs__cards{
        .WhatIs__card{
          width: 47%;
          .WhatIs__img{
            &.two{
              width: 23px;
            }
          }
        }
      }
      .WhatIs__prices{
        position: relative;
        .WhatIs__old-price{
          position: absolute;
          top: 0;
          right: 0;
        }
      }
    }
  }
}
@media (max-width: 360px) {
  .WhatIs__columns{
    row-gap: 47px;
    .WhatIs__about{
      .WhatIs__title{
        font-size: 28px;
      }
      .WhatIs__desc{
        font-size: 16px;
        line-height: 21px;
      }
    }
    .WhatIs__col{
      .WhatIs__cards{
        column-gap: normal;
        row-gap: 35px;
        .WhatIs__card{
          width: 100%;
          .WhatIs__subtitle{
            font-size: 18px;
            line-height: 30px;
          }
          .WhatIs__text{
            font-size: 16px;
            line-height: 21px;
          }
        }
      }
      .WhatIs__prices{
        margin-top: 67px;
        .WhatIs__new-price{
          font-size: 32px;
        }
      }
    }
  }
}
</style>
