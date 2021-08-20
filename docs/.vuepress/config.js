module.exports = {
    title: 'E-life',
    description: 'Just playing around',
    base: '/E-life/',
    themeConfig: {
      nav: [
        {
          text: "主页",
          link: "/",
          icon: "el-icon-house"
        },
        {
          text: "附近活动",
          link: "/activity",
          // icon: "el-icon-house"
        },
        {
          text: "出行轨迹",
          link: "/path",
          icon: "el-icon-location-information"
        },
        {
          text: "亲友代付",
          link: "/pay_for_another",
          icon: "el-icon-bank-card"
        },
      ]
    }
  }