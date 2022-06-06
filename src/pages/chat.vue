<script setup>
import axios from 'axios';

const chatArr = ref([]);

onMounted(() => {
  (async () => {
    let userImg = await axios.get(
      'https://api.unsplash.com/search/photos?query=users&client_id=cZdfd8fqxmmbqYfHGbYbeHxf7nO9WRv4lxG0Wv4_Cc8'
    );
    chatArr.value = [
      {
        images: [userImg.data.results[0].urls.regular],
        name: 'Darlene Black',
        preview: {
          lastView: './images/picture.jpg',
          msg: 'Hey, how is your project?',
        },
        active: false,
        unread: false,
        online: true,
        heightLight: false,
      },
      {
        images: [userImg.data.results[1].urls.regular],
        name: 'Theresa Steward',
        preview: {
          lastView: '',
          msg: 'Hi, Dmitry! I have a work for you. We',
        },
        active: false,
        unread: true,
        online: true,
        heightLight: true,
      },
      {
        images: [userImg.data.results[3].urls.regular],
        name: 'Brandon Wilson',
        preview: {
          lastView: '',
          msg: 'I am Russian and I am learning Engl',
        },
        active: false,
        unread: true,
        online: false,
        heightLight: false,
      },
      {
        images: [userImg.data.results[4].urls.regular],
        name: 'Kyle Fisher',
        preview: {
          lastView: './images/picture.jpg',
          msg: 'So, It’s up to you!',
        },
        active: true,
        unread: false,
        online: false,
        heightLight: false,
      },
      {
        images: [userImg.data.results[9].urls.regular],
        name: 'Audrey Alexander',
        preview: {
          lastView: './images/picture.jpg',
          msg: 'When you got it?',
        },
        active: false,
        unread: true,
        online: true,
        heightLight: false,
      },
      {
        images: [
          userImg.data.results[8].urls.regular,
          userImg.data.results[7].urls.regular,
          userImg.data.results[6].urls.regular,
          userImg.data.results[5].urls.regular,
        ],
        name: 'Design Conference',
        preview: {
          lastView: './images/picture.jpg',
          msg: 'Can you guys help me with it?',
        },
        active: false,
        unread: true,
        heightLight: false,
      },
    ];
  })();
});
</script>

<template>
  <section>
    <div class="container">
      <div class="sidebar">
        <div class="chats">
          <p>CHATS</p>
        </div>
        <hr />
        <div
          v-for="item of chatArr"
          class="chat-box"
          :class="{ active: item.active, 'height-light': item.heightLight }"
          :key="item.name"
        >
          <div class="front-box"></div>
          <div class="img-area">
            <div class="img-cut" :class="{ group: item.images.length > 1 }">
              <img v-for="el of item.images" :src="el" :key="el" alt="" />
            </div>
            <svg
              v-show="item.images.length < 2"
              width="9"
              height="9"
              viewBox="0 0 9 9"
              xmlns="http://www.w3.org/2000/svg"
              :class="{ online: item.online }"
            >
              <circle
                cx="4.5"
                cy="4.5"
                r="3.75"
                stroke="#02B033"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div class="chat-preview">
            <p class="user-name">
              {{ item.name }}
            </p>
            <p class="message" :class="{ unread: item.unread }">
              <img
                v-show="item.preview.lastView"
                :src="item.preview.lastView"
                alt=""
                class="last-view"
              />
              {{ item.preview.msg }}
            </p>
          </div>
          <p v-show="item.heightLight" class="height-light-point">○</p>
        </div>
      </div>
      <div class="content"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  .container {
    margin-top: 70px;
    width: 80%;
    display: flex;
    .sidebar {
      width: 20%;
      background-color: #fcfdfd;
      .chats {
        width: 100%;
        padding: 16px 16px * 2;
        p {
          font-weight: bold;
        }
      }
      .chat-box {
        display: flex;
        width: 100%;
        align-items: center;
        border-bottom: 1px solid #f4f4f4;
        position: relative;
        .front-box {
          height: 16px * 6;
          width: 0px;
          background-color: #0275b1;
          transition: 0.2s linear;
        }
        &.active,
        &:hover {
          .front-box {
            width: 16px;
          }
        }
        &.active {
          img {
            opacity: 0.5;
          }
          p {
            opacity: 0.5;
          }
        }
        &.height-light {
          color: #0275b1;
          .height-light-point {
            position: absolute;
            right: 5%;
            top: 5%;
            font-size: 16px * 1.5;
            font-weight: bold;
          }
        }

        .img-area {
          position: relative;
          z-index: 999;
          svg {
            position: absolute;
            width: 16px;
            height: 16px;
            bottom: 0;
            right: 0;
            fill: #ffffff;

            &.online {
              fill: #02b033;
            }
          }
          .img-cut {
            display: flex;
            margin-left: 16px;
            width: 16px * 4.5;
            min-width: 16px * 4.5;
            height: 16px * 4.5;
            z-index: 1;
            border-radius: 50%;
            overflow: hidden;
            flex-wrap: wrap;
            align-items: center;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }

            &.group img {
              width: 50%;
              height: 50%;
            }
          }
        }
        .chat-preview {
          margin-left: 16px;
          .user-name {
            font-weight: bold;
            font-size: 1.1rem;
          }

          .message {
            display: flex;
            align-items: center;
            margin-top: 16px * 0.5;
            font-size: 0.5rem;
            color: rgba(0, 0, 0, 0);

            &.unread {
              background: linear-gradient(
                90deg,
                rgb(0, 0, 0) 0%,
                rgba(0, 0, 0) 80%,
                rgba(0, 0, 0, 0) 96.96%
              );
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
            }
            .last-view {
              width: 16px;
              height: 16px;
              border-radius: 50%;
              margin-right: 16px * 0.25;
            }
          }
        }
      }
    }
  }
}
</style>
