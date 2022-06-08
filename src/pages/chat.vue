<script setup>
import axios from 'axios';

const chatArr = ref([]);
const mesArr = ref([]);
const message = computed(() => {
  const resultArr = [];
  const dataArr = [...mesArr.value];
  resultArr.push({
    img: dataArr[0].img,
    messages: [dataArr[0].text],
    timestamp: dataArr[0].timestamp,
    another: dataArr[0].another,
  });
  dataArr.shift();

  while (dataArr.length) {
    if (resultArr[resultArr.length - 1].another == dataArr[0].another) {
      resultArr[resultArr.length - 1].messages.unshift(dataArr[0].text);
    } else {
      resultArr.push({
        img: dataArr[0].img,
        messages: [dataArr[0].text],
        timestamp: dataArr[0].timestamp,
        another: dataArr[0].another,
      });
    }
    dataArr.shift();
  }
  return resultArr;
});
const newMessage = ref('');
const handleNewMessage = () => {
  if (!newMessage.value) return;
  mesArr.value.unshift({
    img: '',
    text: newMessage.value,
    timestamp: `${new Date().getHours() % 12}:${new Date()
      .getMinutes()
      .toString()
      .padStart(2, 0)} ${new Date().getHours > 12 ? 'PM' : 'AM'}`,
    another: false,
  });
  newMessage.value = '';
};

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
    mesArr.value = [
      {
        img: chatArr.value[3].images[0],
        text: 'So, it’s up to you!',
        timestamp: '4:30 PM',
        another: true,
      },
      {
        img: chatArr.value[3].images[0],
        text: 'It’ll be great! I need this job, but...',
        timestamp: '4:30 PM',
        another: true,
      },
      {
        img: '',
        text: 'Wow! I can invite you in my new project. We need a product designer right now!',
        timestamp: '4:29 PM',
        another: false,
      },
      {
        img: chatArr.value[3].images[0],
        text: 'Nope, they kicked me out of the office!',
        timestamp: '4:29 PM',
        another: true,
      },
      {
        img: '',
        text: 'Hi, Kyle. How are you doing? Did you get that job yesterday?',
        timestamp: '4:20 PM',
        another: false,
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
        <div class="new-chat">
          <button><p>START NEW CHAT</p></button>
        </div>
      </div>
      <div class="content">
        <div class="chat-box">
          <div class="chat-header">
            <p>Chat with <span>Kyle Fisher</span></p>
            <p class="timestamp">LAST ONLINE: 4 HOURS AGO</p>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.25 14.298L16.0557 24.3305C14.8069 25.5595 13.113 26.25 11.3469 26.25C9.58069 26.25 7.88686 25.5595 6.63798 24.3305C5.38911 23.1014 4.6875 21.4345 4.6875 19.6963C4.6875 17.9582 5.38911 16.2912 6.63798 15.0622L16.8322 5.02969C17.6648 4.21032 18.794 3.75 19.9715 3.75C21.1489 3.75 22.2782 4.21032 23.1107 5.02969C23.9433 5.84906 24.4111 6.96036 24.4111 8.11912C24.4111 9.27788 23.9433 10.3892 23.1107 11.2086L12.9054 21.241C12.4891 21.6507 11.9245 21.8809 11.3358 21.8809C10.747 21.8809 10.1824 21.6507 9.76614 21.241C9.34985 20.8314 9.11598 20.2757 9.11598 19.6963C9.11598 19.1169 9.34985 18.5613 9.76614 18.1516L19.1839 8.89421"
                stroke="#0275B1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Shared media (12)</p>
          </div>
          <div v-if="mesArr.length > 0" class="chat-content">
            <div
              v-for="item in message"
              :key="item.messages[0]"
              :class="{
                'another-msg': item.another,
                'mine-msg': !item.another,
              }"
            >
              <div v-show="item.another" class="another-img">
                <img :src="chatArr[3].images[0]" alt="" />
              </div>
              <div class="msg-stack">
                <div
                  v-show="!item.another"
                  v-for="msg in item.messages"
                  class="msg-content"
                >
                  <p>{{ msg }}</p>
                  <div class="triangle"></div>
                </div>
                <p v-show="item.another" v-for="msg in item.messages">
                  {{ msg }}
                </p>
                <span v-show="item.another">{{ item.timestamp }}</span>
              </div>
              <span v-show="!item.another">
                <svg
                  width="22"
                  height="15"
                  viewBox="0 0 22 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.412 3.75L12.2944 10.625L9.05908 7.5"
                    stroke="#0275B1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.9413 3.75L5.82367 10.625L2.58838 7.5"
                    stroke="#0275B1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg
                >{{ item.timestamp }}
              </span>
            </div>
            <div class="date-divider">
              <hr />
              <span>YESTERDAY, 29 AUG</span>
              <hr />
            </div>
            <div class="another-msg">
              <div class="another-img">
                <img :src="chatArr[3].images[0]" alt="" />
              </div>
              <div class="msg-stack">
                <p>Nope, they kicked me out of the office!</p>
                <span>4:29 PM</span>
              </div>
            </div>
          </div>
          <div class="chat-footer">
            <input
              type="text "
              v-model="newMessage"
              placeholder="Write your message"
              @keydown.enter="handleNewMessage"
            />
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.15">
                <path
                  d="M26.25 14.2981L16.0557 24.3305C14.8069 25.5596 13.113 26.2501 11.3469 26.2501C9.58069 26.2501 7.88686 25.5596 6.63798 24.3305C5.38911 23.1015 4.6875 21.4345 4.6875 19.6964C4.6875 17.9582 5.38911 16.2913 6.63798 15.0622L16.8322 5.02975C17.6648 4.21038 18.794 3.75006 19.9715 3.75006C21.1489 3.75006 22.2782 4.21038 23.1107 5.02975C23.9433 5.84912 24.4111 6.96042 24.4111 8.11918C24.4111 9.27795 23.9433 10.3892 23.1107 11.2086L12.9054 21.2411C12.4891 21.6508 11.9245 21.8809 11.3358 21.8809C10.747 21.8809 10.1824 21.6508 9.76614 21.2411C9.34985 20.8314 9.11598 20.2758 9.11598 19.6964C9.11598 19.117 9.34985 18.5613 9.76614 18.1517L19.1839 8.89427"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            <svg
              @click="handleNewMessage"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="6.10352e-05"
                width="32"
                height="32"
                rx="4"
                fill="url(#paint0_linear_1_1515)"
              />
              <g clip-path="url(#clip0_1_1515)">
                <path
                  d="M21.6668 10.3334L14.3335 17.6667"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.6668 10.3334L17.0002 23.6667L14.3335 17.6667L8.3335 15L21.6668 10.3334Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_1_1515"
                  x1="16"
                  y1="6.10352e-05"
                  x2="16"
                  y2="32.0001"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#0077B5" />
                  <stop offset="1" stop-color="#0E6795" />
                </linearGradient>
                <clipPath id="clip0_1_1515">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(7 9.00006)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
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
    width: 70%;
    display: flex;
    justify-content: space-between;
    .sidebar {
      width: 20%;
      // background-color: #fcfdfd;
      .chats {
        width: 100%;
        padding: 16px 16px * 2;
        background-color: #fcfdfd;
        p {
          font-weight: bold;
        }
      }
      .chat-box {
        display: flex;
        width: 100%;
        align-items: center;
        background-color: #fcfdfd;
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
      .new-chat {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        background-color: white;
        margin-top: 16px * 2;

        button {
          border: none;
          background-color: transparent;
          background: linear-gradient(180deg, #0077b5 0%, #0e6795 100%);
          padding: 16px * 0.5 16px * 2.5;
          border-radius: 5px;
          p {
            font-size: 1.25rem;
            transform: scaleY(0.8);
            color: white;
          }
        }
      }
    }
    .content {
      width: 75%;
      height: 60vh;
      .chat-box {
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        display: grid;
        grid-template-rows: 10% 1fr 12.5%;
        .chat-header {
          border-bottom: 1px solid #f4f4f4;
          display: flex;
          align-items: center;
          padding: 16px * 2;
          p {
            font-weight: bold;
            span {
              color: #0275b1;
              font-weight: bold;
            }
          }
          .timestamp {
            color: rgba(24, 24, 24, 0.5);
            padding-left: 16px;
          }
          svg {
            margin-left: auto;
            margin-right: 16px;
            cursor: pointer;
          }
        }
        .chat-content {
          overflow: hidden;
          display: flex;
          mask-image: linear-gradient(
            top,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 20%
          );
          -webkit-mask-image: -webkit-linear-gradient(
            top,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.8) 10%,
            rgba(0, 0, 0, 1) 20%
          );
          background: #fff;
          flex-direction: column-reverse;
          .date-divider {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 16px 16px * 2;
            span {
              color: rgba(24, 24, 24, 0.5);
              font-weight: bold;
              margin: 0 16px;
            }
            hr {
              flex: 1;
            }
          }
          .another-msg {
            display: flex;
            flex-direction: row-reverse;
            padding-bottom: 16px * 2;

            .another-img {
              width: 16px * 3;
              height: 16px * 3;
              margin: 0 16px;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                margin-top: -25%;
                border-radius: 50%;
              }
            }
            .msg-stack {
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              p {
                background-color: #e9f0f8;
                padding: 16px;
                border-radius: 5px;
                margin-bottom: 16px * 0.5;
              }
              span {
                color: rgba(24, 24, 24, 0.3);
              }
            }
          }
          .mine-msg {
            display: flex;
            margin-left: 16px * 3;
            align-items: flex-start;
            flex-direction: column;
            margin-bottom: 16px;

            .msg-stack {
              display: flex;
              flex-direction: column;
              align-items: flex-start;

              .msg-content {
                position: relative;
                margin-bottom: 16px * 0.5;
                p {
                  background-color: #0275b1;
                  color: white;
                  padding: 16px;
                  border-radius: 5px;
                }
                .triangle {
                  position: absolute;
                  border-width: 0px 0px 16px 20px;
                  border-color: #0275b1 transparent;
                  border-style: solid;
                  width: 0;
                  height: 0;
                  bottom: 0;
                  left: -16px;
                }
              }
            }
          }
        }
        .chat-footer {
          border-top: 1px solid #f4f4f4;
          display: flex;
          align-items: center;
          input {
            flex: 1;
            outline: none;
            border: none;
            font-size: 16px * 1.5;
            margin-left: 16px * 2;
            height: 100%;
            &::placeholder {
              color: rgba(24, 24, 24, 0.2);
            }
          }
          svg {
            margin-right: 16px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
