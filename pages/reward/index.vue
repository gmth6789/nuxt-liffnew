<template>
  <div>
    <v-app-bar
      color="primary"
      dense
      flat
      dark
    >
    <v-toolbar-title>ภารกิจแชร์รับคูปอง</v-toolbar-title>
    </v-app-bar>
    <v-container class="pt-0 pb-0">
      <v-row>
        <v-col>
          <v-card class="mt-8">
            <v-card-text>
              <div class="d-flex">
                <div>
                  <img :src="getLine.pictureUrl" alt="" width="40" style="border-radius: 50%;">
                </div>
                <div class="align-self-center">
                  <h2 class="name text-primary m-0">{{ getUser.firstname }}</h2>
                </div>
              </div>
            </v-card-text>
            <div class="stamp-zone">
              <div class="stamp" v-for="(obj, index) in stamps" :key="index">
                <div class="circle" :class="obj.value == true ? 'active' : ''" v-if="index != Object.keys(stamps).length - 1">
                  <span>{{ index+1 }}</span>
                  <v-icon>check</v-icon>
                </div>
                <div class="circle end" :class="obj.value == true ? 'active' : ''" v-else>
                  <span>GOAL</span>
                  <v-icon>check</v-icon>
                </div>
              </div>              
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn v-if="isDone == false" rounded color="primary" dark class="w-100 mt-10 my-btn sendShare" @click="sendShare">
            <svg id="fi_9382189" enable-background="new 0 0 512 512" height="35" viewBox="0 0 512 512" width="35" xmlns="http://www.w3.org/2000/svg"><g id="Currency"><g id="Dollar"><g id="Coin"><g id="Bottom"><ellipse cx="256" cy="256" fill="#e88102" rx="245" ry="256"></ellipse><circle cx="256" cy="242.5" fill="#fdd835" r="242.5"></circle></g><g id="Shade" fill="#fff"><path d="m352.8 20.1-319.2 319.1c-10.7-24.5-17.4-51.1-19.4-79l259.5-259.6c27.9 2.1 54.5 8.8 79.1 19.5z" opacity=".5"></path><path d="m467.3 123.5-330.3 330.3c-20.6-11.6-39.2-26.1-55.5-43l342.9-342.8c16.8 16.2 31.3 34.9 42.9 55.5z" opacity=".5"></path><path d="m414.5 58.9-342 342c-5.3-6.2-10.4-12.7-15.1-19.4l337.7-337.7c6.7 4.7 13.2 9.8 19.4 15.1z" opacity=".5"></path><path d="m490.9 182-295.4 295.4c-8.9-2.3-17.6-5.1-26.1-8.3l313.2-313.2c3.2 8.5 6 17.2 8.3 26.1z" opacity=".5"></path><path d="m498.5 242.5c0 1.7 0 3.3-.1 5-2.6-131.6-110.1-237.5-242.4-237.5s-239.8 105.9-242.4 237.5c0-1.7-.1-3.3-.1-5 0-133.9 108.6-242.5 242.5-242.5s242.5 108.6 242.5 242.5z" opacity=".5"></path><path d="m453 253c0 104.9-85.1 190-190 190-58.9 0-111.6-26.9-146.5-69 34.7 37.5 84.3 61 139.5 61 104.9 0 190-85.1 190-190 0-46-16.3-88.1-43.5-121 31.3 33.9 50.5 79.2 50.5 129z" opacity=".5"></path></g><g id="Top"><circle cx="256" cy="245" fill="#f39e09" r="190"></circle><path d="m400 121c-33.3-28.7-76.6-46-124-46-104.9 0-190 85.1-190 190 0 47.4 17.3 90.7 46 124-40.4-34.9-66-86.4-66-144 0-104.9 85.1-190 190-190 57.5 0 109.1 25.6 144 66z" fill="#e88102"></path></g></g><g id="Icon"><path id="Bottom-2" d="m244.1 196.6c-3.4 3.9-5.2 9.3-5.2 16.2s2 12.6 6 16.7 10.4 8 19.2 11.8c8.8 3.7 17.1 7.6 24.9 11.6s14.5 8.6 20.2 13.7 10.1 11.1 13.3 17.9c1.2 2.6 4.8 7.5 4.8 7.5s0 16.6 0 17.1c0 16.2-5.1 29.4-15.4 39.6s-24.2 16.2-41.9 17.9v28.4h-22.6v-28.7c-20.6-2.2-36.4-9.2-47.5-21.2-11-12-16.5-27.7-16.5-47.3v-15l47.8 15c0 10.8 2.4 19 7.2 24.6s11.6 8.4 20.4 8.4c6.4 0 11.5-1.9 15.2-5.8s5.5-9.1 5.5-15.8c0-7.5-1.8-13.3-5.5-17.6s-10.2-8.3-19.4-12.1c-9.3-3.8-17.8-7.6-25.7-11.5s-14.6-8.4-20.3-13.5-10-11-13.1-17.7c-3-6.7-4.5-14.8-4.5-24.4v-15.9s8.9-16.7 16.2-23.6c10.8-10.4 25.2-16.4 43.1-18.1v-29.8h22.6v30.5c17.3 2.6 30.9 9.7 40.8 21.4 6.8 8 14.8 29.5 14.8 29.5v15h-48c0-9.8-1.9-17.4-5.7-22.7s-9.2-7.9-16.2-7.9c-6.2-.1-11 1.9-14.5 5.8z" fill="#db6704"></path><path id="Top-2" d="m279.5 294.3c0-7.5-1.8-13.3-5.5-17.6s-10.2-8.3-19.4-12.1c-9.3-3.8-17.8-7.6-25.7-11.5s-14.6-8.4-20.3-13.5-10-11-13.1-17.7c-3-6.7-4.5-14.9-4.5-24.4 0-16 5.4-29.2 16.2-39.5s25.2-16.4 43.1-18.1v-29.9h22.6v30.5c17.3 2.6 30.9 9.7 40.8 21.4s14.8 26.5 14.8 44.5h-48c0-9.8-1.9-17.4-5.7-22.7s-9.2-7.9-16.2-7.9c-6.2 0-11.1 2-14.5 5.9s-5.2 9.3-5.2 16.2 2 12.6 6 16.7 10.4 8 19.1 11.8c8.8 3.7 17.1 7.6 24.9 11.6s14.5 8.6 20.2 13.7 10.1 11.1 13.3 17.9 4.8 15 4.8 24.5c0 16.2-5.1 29.4-15.4 39.6s-24.2 16.2-41.9 17.9v28.4h-22.6v-28.7c-20.6-2.2-36.4-9.2-47.5-21.2-11-12-16.5-27.7-16.5-47.3h47.8c0 10.8 2.4 19 7.2 24.6s11.6 8.4 20.4 8.4c6.4 0 11.5-1.9 15.2-5.8s5.6-9 5.6-15.7z" fill="#fdd835"></path><g id="Shade-2" fill="#fff"><path d="m207.2 158c5.8-5.6 12.7-9.9 20.6-13l-33.9 34c2.6-8 7-14.9 13.3-21z" opacity=".5"></path><path d="m262.8 110-12.5 12.5v-12.5z" opacity=".5"></path><path d="m322.1 268.7-81.7 81.7c-17.2-2.9-30.7-9.7-40.4-20.2-6.3-6.9-10.8-15-13.5-24.3l23-23h21.8c0 10.8 2.4 19 7.2 24.6s11.6 8.4 20.4 8.4c6.4 0 11.5-1.9 15.2-5.8s5.5-9.1 5.5-15.8c0-7.5-1.8-13.3-5.5-17.6s-10.2-8.3-19.4-12.1c-6.6-2.7-12.8-5.4-18.7-8.2l29.6-29.6c8.3 3.6 16.1 7.2 23.5 11 7.8 4 14.5 8.6 20.2 13.7 5.4 5 9.7 10.7 12.8 17.2z" opacity=".5"></path><path d="m328.5 206.3h-42.5l34.5-34.5c5.3 9.8 8 21.3 8 34.5z" opacity=".5"></path><path d="m183.5 282.8h7.1l-6.8 6.8c-.2-2.2-.3-4.5-.3-6.8z" opacity=".5"></path><path d="m244.9 214.5c2 2.1 4.6 4.1 7.9 6.1l-29.6 29.6c-5.5-3.1-10.4-6.6-14.6-10.5-1.7-1.5-3.2-3.1-4.6-4.7l35.1-35.1c.3 6 2.3 10.9 5.8 14.6z" opacity=".5"></path><path d="m312.7 160.7-33.4 33.4c-.9-4.1-2.4-7.6-4.4-10.4-3-4.2-7-6.7-12-7.6l29.9-29.9c7.7 3.5 14.3 8.3 19.9 14.5z" opacity=".5"></path><path d="m258.4 380 11.6-11.6v11.6z" opacity=".5"></path><path d="m324.2 314.2c-2.5 7.4-6.6 13.8-12.2 19.4s-12.3 9.9-20.1 12.9z" opacity=".5"></path><path d="m414.5 140.1c-123 43.2-221.8 138.1-270.2 258.6-4.2-3.1-8.3-6.3-12.3-9.8-28.7-33.3-46-76.6-46-123.9 0-104.9 85.1-190 190-190 47.4 0 90.7 17.3 123.9 46 5.3 6.1 10.1 12.5 14.6 19.1z" opacity=".25"></path></g></g></g></g></svg>
            แชร์เพื่อรับรางวัล
          </v-btn>
          <v-btn v-if="isDone == true" rounded color="primary" dark class="w-100 mt-10 my-btn" @click="next">Redeem Reward</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  mounted(){
    liff.init({
      liffId: '2001038259-zO07aGp8'
    }).then(() => {
      if(liff.isLoggedIn()){
        liff.getProfile().then(profile => {
          this.$store.dispatch('setLine', profile);
          this.$axios.get(`https://liffcard-default-rtdb.asia-southeast1.firebasedatabase.app/members/${this.$store.getters.getLine.userId}/profile.json`).then((res) => {            
            if(res.data != null){
              this.$store.dispatch('setUser', res.data);
            }
          });
          this.$axios.get(`https://liffcard-default-rtdb.asia-southeast1.firebasedatabase.app/rewards/betfilx/${this.$store.getters.getLine.userId}.json`).then((res) => {            
            if(res.data != null){
              this.stamps = res.data
            }
          });
        })
      }else{
        liff.login();
      }
    })
  },
  computed: {
    getLine(){
      return this.$store.getters.getLine;
    },
    getUser(){
      return this.$store.getters.getUser;
    },
    isDone(){
      let isDone = true;
      this.stamps.forEach(ele => {
        if(ele.value === false){
          isDone = false;
          return isDone;
        }
      })
      return isDone;
    }
  },
  methods: {
    sendShare() {
      liff.shareTargetPicker([ //share
        {
          "type": "flex",
  "contents": {
    "size": "giga",
    "type": "bubble",
    "body": {
      "layout": "vertical",
      "paddingAll": "0px",
      "type": "box",
      "contents": [
        {
          "layout": "horizontal",
          "paddingAll": "10px",
          "spacing": "md",
          "type": "box",
          "action": {
            "label": "action",
            "type": "uri",
            "uri": "${_.trim(vcard.website)}"
          },
          "contents": [
            {
              "borderColor": "#1877f2",
              "borderWidth": "2px",
              "cornerRadius": "20px",
              "height": "40px",
              "layout": "vertical",
              "type": "box",
              "width": "40px",
              "contents": [
                {
                  "borderColor": "#ffffff",
                  "borderWidth": "2px",
                  "cornerRadius": "20px",
                  "height": "36px",
                  "layout": "vertical",
                  "type": "box",
                  "width": "36px",
                  "contents": [
                    {
                      "aspectMode": "cover",
                      "aspectRatio": "1:1",
                      "size": "full",
                      "type": "image",
                      "url": "${vcard.avatar}"
                    }
                  ]
                }
              ]
            },
            {
              "layout": "vertical",
              "type": "box",
              "contents": [
                {
                  "layout": "horizontal",
                  "type": "box",
                  "contents": [
                    {
                      "flex": 0,
                      "gravity": "center",
                      "text": "${vcard.author}",
                      "type": "text",
                      "weight": "bold"
                    },
                    {
                      "gravity": "center",
                      "text": "${vcard.action}",
                      "type": "text"
                    }
                  ]
                },
                {
                  "flex": 1,
                  "layout": "vertical",
                  "type": "box",
                  "contents": [
                    {
                      "type": "filler"
                    }
                  ]
                },
                {
                  "size": "xxs",
                  "text": "${dayjs().format('M月D日 HH:mm')}",
                  "type": "text"
                }
              ]
            }
          ]
        },
        {
          "layout": "vertical",
          "type": "box",
          "action": {
            "label": "action",
            "type": "uri",
            "uri": "${_.trim(vcard.link)}"
          },
          "contents": [
            {
              "aspectMode": "cover",
              "aspectRatio": "${vcard.ratio}",
              "size": "full",
              "type": "image",
              "url": "${vcard.image}"
            }
          ]
        },
        {
          "layout": "vertical",
          "paddingAll": "15px",
          "spacing": "md",
          "type": "box",
          "action": {
            "label": "action",
            "type": "uri",
            "uri": "${_.trim(vcard.link)}"
          },
          "contents": [
            {
              "size": "lg",
              "text": "${vcard.title}",
              "type": "text",
              "weight": "bold"
            },
            {
              "maxLines": 3,
              "size": "sm",
              "text": "${escapeStr(vcard.desc)}",
              "type": "text",
              "wrap": true
            }
          ]
        },
        {
          "type": "separator"
        },
        {
          "layout": "horizontal",
          "type": "box",
          "contents": [
            {
              "flex": 1,
              "layout": "horizontal",
              "paddingAll": "15px",
              "spacing": "sm",
              "type": "box",
              "action": {
                "label": "action",
                "type": "uri",
                "uri": "${liffLink}"
              },
              "contents": [
                {
                  "flex": 1,
                  "layout": "vertical",
                  "type": "box",
                  "contents": [
                    {
                      "type": "filler"
                    }
                  ]
                },
                {
                  "height": "20px",
                  "layout": "vertical",
                  "type": "box",
                  "width": "20px",
                  "contents": [
                    {
                      "aspectMode": "cover",
                      "aspectRatio": "1:1",
                      "size": "full",
                      "type": "image",
                      "url": "https://i.imgur.com/IFjR25G.png"
                    }
                  ]
                },
                {
                  "flex": 0,
                  "gravity": "center",
                  "text": "分享",
                  "type": "text"
                },
                {
                  "flex": 1,
                  "layout": "vertical",
                  "type": "box",
                  "contents": [
                    {
                      "type": "filler"
                    }
                  ]
                }
              ]
            },
            {
              "flex": 1,
              "layout": "horizontal",
              "paddingAll": "15px",
              "spacing": "sm",
              "type": "box",
              "action": {
                "label": "action",
                "type": "uri",
                "uri": "${_.trim(vcard.link)}"
              },
              "contents": [
                {
                  "flex": 1,
                  "layout": "vertical",
                  "type": "box",
                  "contents": [
                    {
                      "type": "filler"
                    }
                  ]
                },
                {
                  "height": "20px",
                  "layout": "vertical",
                  "type": "box",
                  "width": "20px",
                  "contents": [
                    {
                      "aspectMode": "cover",
                      "aspectRatio": "1:1",
                      "size": "full",
                      "type": "image",
                      "url": "https://i.imgur.com/tg4zN4R.png"
                    }
                  ]
                },
                {
                  "flex": 0,
                  "gravity": "center",
                  "text": "開啟",
                  "type": "text"
                },
                {
                  "flex": 1,
                  "layout": "vertical",
                  "type": "box",
                  "contents": [
                    {
                      "type": "filler"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "height": "1px",
          "layout": "vertical",
          "offsetStart": "0px",
          "offsetTop": "0px",
          "position": "absolute",
          "type": "box",
          "width": "1px",
          "contents": [
            {
              "align": "center",
              "aspectMode": "cover",
              "aspectRatio": "1:1",
              "gravity": "center",
              "size": "full",
              "type": "image",
              "url": "${gaScreenView(vcard)}"
            }
          ]
        }
      ]
    }
  }
  ]}, //sendshare
      then(result => {
        this.stamps = this.stamps.map((obj) => {
          if(obj.name == result.value){
            obj.value = true;
          }
          return obj;
        })
        this.$axios.patch(`https://liffcard-default-rtdb.asia-southeast1.firebasedatabase.app/rewards/betfilx/${this.$store.getters.getLine.userId}.json`, {...this.stamps}).then((res) => {            

        }).catch(e => alert(e))
      }).catch(e => alert(e))
    },
    next(){
      this.$router.push('reward/done');
    }
  },
  data(){
    return {
      stamps: [
        {
          name: 'stamp1',
          value: false
        },
        {
          name: 'stamp2',
          value: false
        },
        {
          name: 'stamp3',
          value: false
        },
        {
          name: 'stamp4',
          value: false
        },
        {
          name: 'stamp5',
          value: false
        },
        {
          name: 'stamp6',
          value: false
        },
        {
          name: 'stamp7',
          value: false
        },
        {
          name: 'stamp8',
          value: false
        }     
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .name{
    margin-left: 20px;
    font-size: 20px;
  }
  .v-card__text{
    padding: 10px 15px;
  }
  .stamp-zone{
    background: #BDBDBD;
    padding: 25px 25px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .stamp{
    flex-basis: 25%;
  }
  .circle{
    background: #FFF;
    border-radius: 50%;
    border: 2px #F80096 solid;
    height: 55px;
    width: 55px;    
    justify-content: center;
    display: inline-flex;
    margin-bottom: 25px;    
    .v-icon{
      display: none;
    }
    &.active{
      background: #1A56BE;
      span{
        display: none;
      }
      .v-icon{
        display: flex;
        color: #FFF;
      }
    }
    &.end{
      background: #F80096;
      span{
        font-size: 16px;        
        color: #FFF;
      }
    }
    span{
      align-self: center;
      font-size: 20px;
      color: #F80096;
      font-weight: bold;
    }
  }
  .scan{
    svg{
      margin-right: 5px;
    }
  }
</style>