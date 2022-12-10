export const BarChartHorizontal = () => import('../..\\components\\BarChartHorizontal.vue' /* webpackChunkName: "components/bar-chart-horizontal" */).then(c => wrapFunctional(c.default || c))
export const BarChartHorizontal2 = () => import('../..\\components\\BarChartHorizontal2.vue' /* webpackChunkName: "components/bar-chart-horizontal2" */).then(c => wrapFunctional(c.default || c))
export const BarChartVertival = () => import('../..\\components\\BarChartVertival.vue' /* webpackChunkName: "components/bar-chart-vertival" */).then(c => wrapFunctional(c.default || c))
export const Button = () => import('../..\\components\\Button.vue' /* webpackChunkName: "components/button" */).then(c => wrapFunctional(c.default || c))
export const ClassButton = () => import('../..\\components\\ClassButton.vue' /* webpackChunkName: "components/class-button" */).then(c => wrapFunctional(c.default || c))
export const ClassList = () => import('../..\\components\\ClassList.vue' /* webpackChunkName: "components/class-list" */).then(c => wrapFunctional(c.default || c))
export const DetailBuilding = () => import('../..\\components\\DetailBuilding.vue' /* webpackChunkName: "components/detail-building" */).then(c => wrapFunctional(c.default || c))
export const DetailCard = () => import('../..\\components\\DetailCard.vue' /* webpackChunkName: "components/detail-card" */).then(c => wrapFunctional(c.default || c))
export const DetailCards = () => import('../..\\components\\DetailCards.vue' /* webpackChunkName: "components/detail-cards" */).then(c => wrapFunctional(c.default || c))
export const Frame = () => import('../..\\components\\Frame.vue' /* webpackChunkName: "components/frame" */).then(c => wrapFunctional(c.default || c))
export const Frame2 = () => import('../..\\components\\Frame2.vue' /* webpackChunkName: "components/frame2" */).then(c => wrapFunctional(c.default || c))
export const Frame3 = () => import('../..\\components\\Frame3.vue' /* webpackChunkName: "components/frame3" */).then(c => wrapFunctional(c.default || c))
export const Frame4 = () => import('../..\\components\\Frame4.vue' /* webpackChunkName: "components/frame4" */).then(c => wrapFunctional(c.default || c))
export const LineGraph = () => import('../..\\components\\LineGraph.vue' /* webpackChunkName: "components/line-graph" */).then(c => wrapFunctional(c.default || c))
export const Logo = () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const Maps = () => import('../..\\components\\Maps.vue' /* webpackChunkName: "components/maps" */).then(c => wrapFunctional(c.default || c))
export const Maps2 = () => import('../..\\components\\Maps2.vue' /* webpackChunkName: "components/maps2" */).then(c => wrapFunctional(c.default || c))
export const MbsaEnergyConsumption = () => import('../..\\components\\MbsaEnergyConsumption.vue' /* webpackChunkName: "components/mbsa-energy-consumption" */).then(c => wrapFunctional(c.default || c))
export const MultipleLineChart = () => import('../..\\components\\MultipleLineChart.vue' /* webpackChunkName: "components/multiple-line-chart" */).then(c => wrapFunctional(c.default || c))
export const MultipleLineChart2 = () => import('../..\\components\\MultipleLineChart2.vue' /* webpackChunkName: "components/multiple-line-chart2" */).then(c => wrapFunctional(c.default || c))
export const MultipleLineChart3 = () => import('../..\\components\\MultipleLineChart3.vue' /* webpackChunkName: "components/multiple-line-chart3" */).then(c => wrapFunctional(c.default || c))
export const Notification = () => import('../..\\components\\Notification.vue' /* webpackChunkName: "components/notification" */).then(c => wrapFunctional(c.default || c))
export const SingleLineChart = () => import('../..\\components\\SingleLineChart.vue' /* webpackChunkName: "components/single-line-chart" */).then(c => wrapFunctional(c.default || c))
export const SingleLineChart2 = () => import('../..\\components\\SingleLineChart2.vue' /* webpackChunkName: "components/single-line-chart2" */).then(c => wrapFunctional(c.default || c))
export const VuetifyLogo = () => import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))
export const AdminBuildingTable = () => import('../..\\components\\Admin\\BuildingTable.vue' /* webpackChunkName: "components/admin-building-table" */).then(c => wrapFunctional(c.default || c))
export const AdminUserTable = () => import('../..\\components\\Admin\\UserTable.vue' /* webpackChunkName: "components/admin-user-table" */).then(c => wrapFunctional(c.default || c))
export const LoginForm = () => import('../..\\components\\Login\\Form.vue' /* webpackChunkName: "components/login-form" */).then(c => wrapFunctional(c.default || c))
export const RegisterForm2 = () => import('../..\\components\\Register\\Form2.vue' /* webpackChunkName: "components/register-form2" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
