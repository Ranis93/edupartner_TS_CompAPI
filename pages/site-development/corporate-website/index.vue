<template>
  <div>
    <AppMain />
    <AppWhatIs />
    <AppStages />
    <AppControl />
    <AppTrust />
    <AppTeam />
    <AppReccomend />
    <AppChoose />
  </div>
</template>

<script>
import AppMain from '~/components/Control/CorpWebsitePage/AppMain.vue'
import AppWhatIs from '~/components/Control/CorpWebsitePage/AppWhatIs.vue'
import AppTrust from '~/components/Control/CorpWebsitePage/AppTrust.vue'
import AppStages from '~/components/Control/CorpWebsitePage/AppStages.vue'
import AppControl from '~/components/Control/CorpWebsitePage/AppControl.vue'
import AppTeam from '~/components/Control/CorpWebsitePage/AppTeam.vue'
import AppReccomend from '~/components/Control/CorpWebsitePage/AppReccomend.vue'
import AppChoose from '~/components/MainPage/AppChoose.vue'
export default {
  name: 'CorpWebsitePage',
  components: { AppMain, AppWhatIs, AppTrust, AppStages, AppControl, AppTeam, AppReccomend, AppChoose },
  head () {
    return {
      title: 'Разработка и создание корпоративного сайта по доступной цене в Уфе от компании EduPartner',
      meta: [
        {
          name: 'description',
          content: 'Разработка корпоративного веб сайта компании под ключ! Профессиональные услуги разработки корпоративных порталов в Уфе и преображения компании в онлайн пространстве. Команда высококлассных специалистов. Поможем вашему бизнесу расти и развиваться! ⭐Бесплатная консультация. Звоните!☎ +7 (800)-101-19-45'
        }
      ]
    }
  },
  mounted () {
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 2 })
    this.$store.commit('bredcrumbs/changeBredcrumbs', {
      values: ['Разработка сайта', 'Корпоративный сайт'],
      paths: ['/site-development', '/site-development/corporate-website']
    })
  }
}
</script>
