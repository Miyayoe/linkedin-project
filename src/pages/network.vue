<script setup>
import axios from 'axios';
const connectionArr = ref([]);
const recentArr = ref([]);

const handleButton = (arr, idx) => {
  arr.splice(idx, 1);
};

async function getData() {
  let userImg = await axios.get(
    'https://api.unsplash.com/search/photos?query=users&client_id=cZdfd8fqxmmbqYfHGbYbeHxf7nO9WRv4lxG0Wv4_Cc8'
  );

  connectionArr.value = [
    {
      user: {
        img: userImg.data.results[0].urls.regular,
        name: 'Brandon Wilson',
        job: 'Senior UX designer',
        connection: '623 connections',
      },
      message:
        'Hey, I saw your works. I like it! Can we do something together? Or maybe you have project for UX at the moment?',
    },
    {
      user: {
        img: userImg.data.results[1].urls.regular,
        name: 'Theresa Steward',
        job: 'iOS developer',
        connection: '481 connections',
      },
      message: '',
    },
  ];

  recentArr.value = [
    {
      user: {
        img: userImg.data.results[3].urls.regular,
        name: 'Audrey Alexander',
        job: 'Team lead at Google',
      },
      time: 'Yesterday, 14:30',
    },
    {
      user: {
        img: userImg.data.results[4].urls.regular,
        name: 'Kyle Fisher',
        job: 'Product designer at Commandor Corp',
      },
      time: 'Yesterday, 12:03',
    },
    {
      user: {
        img: userImg.data.results[5].urls.regular,
        name: 'Darlene Black',
        job: 'HR-manager, 10 000 connections',
      },
      time: '26 aug, monday',
    },
    {
      user: {
        img: userImg.data.results[6].urls.regular,
        name: 'Eduardo Russell',
        job: 'Full stack developer at Yandex',
      },
      time: '25 aug, sunday',
    },
  ];
}
onMounted(() => {
  getData();
});
</script>

<template>
  <main>
    <section>
      <div class="container">
        <div class="sidebar">
          <ul>
            <li>
              <div class="hover-box"></div>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_548)">
                  <path
                    d="M6.9978 9.03973C7.2841 9.42248 7.64937 9.73918 8.06884 9.96835C8.4883 10.1975 8.95214 10.3338 9.4289 10.3679C9.90567 10.4021 10.3842 10.3333 10.832 10.1662C11.2799 9.99919 11.6865 9.73777 12.0245 9.39973L14.0245 7.39973C14.6317 6.77105 14.9676 5.92904 14.9601 5.05506C14.9525 4.18107 14.6019 3.34502 13.9839 2.727C13.3658 2.10897 12.5298 1.75841 11.6558 1.75081C10.7818 1.74322 9.93981 2.0792 9.31114 2.68639L8.16447 3.82639"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.66428 7.70631C9.37797 7.32355 9.0127 7.00685 8.59324 6.77768C8.17378 6.54851 7.70994 6.41223 7.23318 6.37808C6.75641 6.34394 6.27789 6.41273 5.83005 6.57979C5.38221 6.74684 4.97553 7.00826 4.63761 7.34631L2.63761 9.34631C2.03042 9.97498 1.69444 10.817 1.70203 11.691C1.70963 12.565 2.06019 13.401 2.67822 14.019C3.29624 14.6371 4.13228 14.9876 5.00627 14.9952C5.88026 15.0028 6.72227 14.6668 7.35094 14.0596L8.49094 12.9196"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_548">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.331055 0.373047)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p class="item-title">CONNECTIONS</p>
              <p>1,038</p>
            </li>
            <li class="invitations active">
              <div class="hover-box"></div>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="1" clip-path="url(#clip0_1_556)">
                  <path
                    d="M8.64347 14.6667C12.3254 14.6667 15.3101 11.6819 15.3101 8C15.3101 4.3181 12.3254 1.33333 8.64347 1.33333C4.96158 1.33333 1.97681 4.3181 1.97681 8C1.97681 11.6819 4.96158 14.6667 8.64347 14.6667Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.64355 10C9.74812 10 10.6436 9.10457 10.6436 8C10.6436 6.89543 9.74812 6 8.64355 6C7.53899 6 6.64355 6.89543 6.64355 8C6.64355 9.10457 7.53899 10 8.64355 10Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_556">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.643555)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p class="item-title">INVITATIONS</p>
              <p>2</p>
            </li>
            <li>
              <div class="hover-box"></div>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_588)">
                  <path
                    d="M14.8896 5.33333V14H2.88965V5.33333"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.2231 2H1.5564V5.33333H16.2231V2Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.5564 8H10.2231"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_588">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.889648)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p class="item-title">TEAMMATES</p>
            </li>
            <li>
              <div class="hover-box"></div>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_564)">
                  <path
                    d="M11.3334 14.2686V12.9352C11.3334 12.228 11.0525 11.5497 10.5524 11.0496C10.0523 10.5495 9.37399 10.2686 8.66675 10.2686H3.33341C2.62617 10.2686 1.94789 10.5495 1.4478 11.0496C0.9477 11.5497 0.666748 12.228 0.666748 12.9352V14.2686"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.99992 7.60189C7.47268 7.60189 8.66659 6.40798 8.66659 4.93522C8.66659 3.46246 7.47268 2.26855 5.99992 2.26855C4.52716 2.26855 3.33325 3.46246 3.33325 4.93522C3.33325 6.40798 4.52716 7.60189 5.99992 7.60189Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.3333 14.2686V12.9353C15.3328 12.3444 15.1362 11.7704 14.7742 11.3035C14.4122 10.8365 13.9053 10.503 13.3333 10.3553"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.6667 2.35526C11.2404 2.50212 11.7488 2.83572 12.1118 3.30346C12.4749 3.7712 12.672 4.34647 12.672 4.93859C12.672 5.5307 12.4749 6.10598 12.1118 6.57371C11.7488 7.04145 11.2404 7.37505 10.6667 7.52192"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_564">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0 0.268555)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p class="item-title">GROUPS</p>
              <p>6</p>
            </li>
            <li>
              <div class="hover-box"></div>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_573)">
                  <path
                    d="M8.70988 1.78061L2.04321 5.11394L8.70988 8.44728L15.3765 5.11394L8.70988 1.78061Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.04321 11.7806L8.70988 15.1139L15.3765 11.7806"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.04321 8.44727L8.70988 11.7806L15.3765 8.44727"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_573">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.709961 0.447266)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p class="item-title">PAGES</p>
              <p>28</p>
            </li>
            <li>
              <div class="hover-box"></div>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.50854 6.75195H14.1752"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.50854 10.752H14.1752"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.50838 2.75195L6.17505 14.752"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.5084 2.75195L10.175 14.752"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p class="item-title">HASHTAGS</p>
              <p>8</p>
            </li>
          </ul>
        </div>
        <div class="content">
          <div class="tabs">
            <ul>
              <li><button class="active">RECEIVED</button></li>
              <li><button>SENT</button></li>
            </ul>
          </div>
          <div class="sort">
            <hr />
            <p>
              YOU HAVE
              <span>{{ connectionArr.length }} NEW CONNECTIONS</span>
            </p>
            <hr />
          </div>
          <div
            v-for="(item, idx) in connectionArr"
            :key="item.user.name"
            class="connection"
          >
            <div class="user-info">
              <div class="left">
                <img :src="item.user.img" alt="" />
              </div>
              <div class="right">
                <p>{{ item.user.name }}</p>
                <span>{{ item.user.job }}</span>
                <span class="number">{{ item.user.connection }}</span>
              </div>
            </div>
            <div class="message">
              <div v-if="item.message != ''" class="box"></div>
              <span v-if="item.message != ''">
                Hey, I saw your works. I like it! Can we do something together?
                Or maybe you have project for UX at the moment?
              </span>
            </div>
            <div class="buttons">
              <div
                class="button accept"
                @click="handleButton(connectionArr, idx)"
              >
                ACCEPT
              </div>
              <div
                class="button decline"
                @click="handleButton(connectionArr, idx)"
              >
                DECLINE
              </div>
            </div>
          </div>
          <div class="sort">
            <hr />
            <p>RECENT CONNECTIONS</p>
            <hr />
          </div>
          <div class="recent-container">
            <div v-for="item in recentArr" class="recent-item">
              <div class="user-info">
                <div class="left">
                  <img :src="item.user.img" alt="" />
                </div>
                <div class="right">
                  <p>{{ item.user.name }}</p>
                  <span>{{ item.user.job }}</span>
                </div>
              </div>
              <span class="time">{{ item.user.time }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
section {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  .container {
    margin-top: 70px;
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: flex-start;
    .sidebar {
      background-color: white;
      width: 15%;
      border-radius: 5px;
      ul {
        li {
          display: flex;
          height: 16px * 3.5;
          justify-content: flex-end;
          align-items: center;
          &:not(:first-child) {
            border-top: 1px solid #e7e7e7;
          }
          .hover-box {
            width: 0;
            height: 100%;
            background-color: #0275b1;
            transition: 0.2s linear;
          }
          &.active,
          &:hover {
            opacity: 0.8;
            .hover-box {
              width: 16px * 0.5;
            }
          }
          &.invitations {
            :last-child {
              color: #ed8f03;
              &::after {
                content: '●';
                margin: 0 16px * 0.25;
              }
            }
          }
          svg {
            margin-left: 16px;
            stroke: black;
          }
          .item-title {
            margin-right: auto;
          }
          p {
            padding: 0 16px;
          }
        }
      }
    }
    .content {
      width: 80%;
      .tabs {
        width: 100%;
        ul {
          width: 100%;
          display: flex;
          border-bottom: 2px solid #e7e7e7;
          align-items: flex-end;

          li {
            list-style-type: none;
            overflow: hidden;
            button {
              transform: translateY(10%);
              border: 1px solid #e7e7e7;
              padding: 16px 16px * 8;
              background-color: white;
              font-size: 1rem;
              font-weight: bold;
              border-radius: 5px;
              transition: 0.2s linear;
              &:hover,
              &.active {
                background: linear-gradient(180deg, #0077b5 0%, #0e6795 100%);
                color: #fff;
                padding: 16px * 1.5 16px * 10;
              }
            }
          }
        }
      }
      .sort {
        margin: 2rem 0;
        display: flex;
        align-items: center;
        hr {
          flex: 1;
        }
        span {
          border: none;
          background-color: transparent;
          font-size: 1rem;
          color: #0275b1;
          font-weight: bold;
          margin-right: 0.5rem;
        }
        p {
          margin-left: 0.5rem;
          font-weight: bold;
        }
      }
      .connection {
        display: grid;
        grid-template-columns: 25% 1fr 30%;
        background-color: #fff;
        margin-bottom: 16px;

        .user-info {
          display: flex;

          .left {
            flex: 1;
            padding: 16px;
            img {
              width: 16px * 5;
              height: 16px * 5;
              border-radius: 50%;
              object-fit: cover;
            }
          }
          .right {
            flex: 4;
            display: flex;
            flex-direction: column;
            justify-content: center;
            :not(:first-child) {
              margin-top: 16px * 0.25;
            }
            p {
              font-weight: bold;
            }
            span {
              font-size: 0.5rem;
            }
            .number {
              color: #0275b1;
            }
          }
        }

        .message {
          display: flex;
          padding: 16px;
          align-items: center;
          .box {
            width: 16px * 0.25;
            height: 80%;
            background-color: #0275b1;
          }
          span {
            margin-left: 16px;
            color: rgba(24, 24, 24, 0.6);
          }
        }
        .buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          .button {
            margin: 0 16px * 0.5;
            padding: 16px * 0.75 16px * 2;
            font-weight: bold;
            border-radius: 5px;
            cursor: pointer;

            &.accept {
              background: linear-gradient(180deg, #0077b5 0%, #0e6795 100%);
              color: #fff;
            }
            &.decline {
              color: #b7b7b7;
              border: 2px solid #b7b7b7;
            }
          }
        }
      }
      .recent-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        .recent-item {
          height: 10vh;
          background-color: #fff;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 16px;
          cursor: pointer;

          .user-info {
            display: flex;
            margin-right: auto;
            .left {
              img {
                width: 16px * 5;
                height: 16px * 5;
                object-fit: cover;
                border-radius: 50%;
              }
            }
            .right {
              display: flex;
              flex-direction: column;
              justify-content: center;
              margin-left: 16px;
              p {
                font-weight: bold;
                margin-bottom: 16px * 0.25;
              }
              span {
                font-size: 0.5rem;
              }
            }
          }
          .time {
            align-self: flex-end;
            color: rgba(24, 24, 24, 0.3);
          }
        }
      }
    }
  }
}
</style>
