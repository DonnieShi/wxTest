// pages/home/home.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    imgUrls:[
      "../../img/one_swiper/1.jpg",
      "../../img/one_swiper/2.jpg",
      "../../img/one_swiper/3.jpg",
      "../../img/one_swiper/4.jpg",
      "../../img/one_swiper/5.jpg",
      "../../img/one_swiper/6.jpg"
    ],
    boolHidden:true,
    detailSrc:""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    imgLoad:function(e){

    },
    swiperClick:function(e){
      console.log(e)
      var that=this;
      that.setData({
        boolHidden:false,
        detailSrc:(that.data.imgUrls[e.target.id])
      })

    },
    onLoad:function(){

    },
    detailClick:function(e){
      var that=this;
      that.setData({
        boolHidden:true
      })
    }
  }
})
