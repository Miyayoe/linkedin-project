<script setup>
import axios from 'axios';
const posts = ref([]);
const groupArr = ref([]);
const coursesArr = ref([]);

async function getPosts() {
  let userImg = await axios.get(
    'https://api.unsplash.com/search/photos?query=users&client_id=cZdfd8fqxmmbqYfHGbYbeHxf7nO9WRv4lxG0Wv4_Cc8'
  );
  let postImg = await axios.get(
    'https://api.unsplash.com/search/photos?page=2&query=taiwan&client_id=cZdfd8fqxmmbqYfHGbYbeHxf7nO9WRv4lxG0Wv4_Cc8'
  );

  posts.value = [
    {
      reacts:
        '<span>Ted Bell</span>,<span>Annette Nguyen</span> and <span>Cody Hawkins</span> liked this.',
      user: {
        img: userImg.data.results[0].urls.regular,
        name: 'Theresa Steward',
        job: 'iOS developer',
      },
      text: 'What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins).',
      overflow: true,
      img: '',
      file: [
        // {
        //   fileName: 'iOS 11 guidelines for UX/UI designers',
        //   fileDetail: 'PDF file, 324 kb',
        // },
      ],
      like: {
        count: 42,
        liked: false,
      },
      comment: {
        count: 9,
        commented: false,
      },
    },
    {
      reacts: '<span>Audrey</span> <span>Alexander</span> comment this',
      user: {
        img: userImg.data.results[1].urls.regular,
        name: 'Kyle Fisher',
        job: 'Product designer at Commander Corp.',
      },
      text: 'How’s your day going, guys?',
      overflow: false,
      img: postImg.data.results[1].urls.regular,
      file: [
        // {
        //   fileName: 'iOS 11 guidelines for UX/UI designers',
        //   fileDetail: 'PDF file, 324 kb',
        // },
      ],
      like: {
        count: 12,
        liked: true,
      },
      comment: {
        count: 3,
        commented: false,
      },
    },
    {
      reacts: 'High rated post from your feed',
      user: {
        img: userImg.data.results[2].urls.regular,
        name: 'Brandon Wilson',
        job: 'Senior UX designer',
      },
      text: 'There is some new guidelines for iOS',
      overflow: false,
      img: '',
      file: [
        {
          fileName: 'iOS 15 guidelines for UX/UI designers',
          fileDetail: 'PDF file, 324 kb',
        },
        {
          fileName: 'iOS 15 guidelines for developers',
          fileDetail: 'PDF file, 245 kb',
        },
      ],

      like: {
        count: 89,
        liked: true,
      },
      comment: {
        count: 7,
        commented: true,
      },
    },
    {
      reacts: 'First post from <span>Audrey Alexander</span>',
      user: {
        img: userImg.data.results[3].urls.regular,
        name: 'Audrey Alexander',
        job: 'Team lead at Google',
      },
      text: 'The bun runs along the road and meets a wolf. «Little bun, little bun, I want to eat you!» says the wolf. «I ran away from Grandfather, I ran away from Grandmother, I ran away from the hare. And I can run away from you, grey wolf!» says the bun and runs away.',
      overflow: false,
      img: '',
      file: [],
      // {
      //   fileName: 'iOS 11 guidelines for UX/UI designers',
      //   fileDetail: 'PDF file, 324 kb',
      // },
      like: {
        count: 10,
        liked: false,
      },
      comment: {
        count: 0,
        commented: false,
      },
    },
  ];
}

onMounted(() => {
  getPosts();
  axios
    .get(
      'https://api.unsplash.com/search/photos?page=1&query=college&client_id=cZdfd8fqxmmbqYfHGbYbeHxf7nO9WRv4lxG0Wv4_Cc8'
    )
    .then((response) => {
      const imgArr = response.data.results;
      groupArr.value = [
        {
          img: imgArr[0].urls.regular,
          title: 'Moscow State Linguistical University',
        },
        {
          img: imgArr[1].urls.regular,
          title: 'Digital freelancers group',
        },
        {
          img: imgArr[2].urls.regular,
          title: 'Interaction design association',
        },
      ];
    });
  axios
    .get(
      'https://api.unsplash.com/search/photos?page=1&query=courses&client_id=cZdfd8fqxmmbqYfHGbYbeHxf7nO9WRv4lxG0Wv4_Cc8'
    )
    .then((response) => {
      const imgArr = response.data.results;
      coursesArr.value = [
        {
          title: 'How I make cool designs?',
          img: imgArr[0].urls.regular,
          content: '6,340 viewers',
        },
        {
          title: 'Advices for young HR-manage',
          img: imgArr[1].urls.regular,
          content: '8,123 viewers',
        },
        {
          title: 'A little about usability testing',
          img: imgArr[2].urls.regular,
          content: '3,912 viewers',
        },
      ];
    });
});
</script>

<template>
  <main>
    <section>
      <div class="container">
        <div class="content">
          <div class="new-post">
            <div class="np-title"><p>NEW POST</p></div>
            <hr />
            <div class="np-content">
              <input type="text" placeholder="What’s on your mind?" />
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.15">
                  <path
                    d="M21 11.4384L12.8446 19.4644C11.8455 20.4476 10.4904 21 9.07749 21C7.66455 21 6.30948 20.4476 5.31039 19.4644C4.31129 18.4811 3.75 17.1476 3.75 15.7571C3.75 14.3665 4.31129 13.033 5.31039 12.0497L13.4658 4.02375C14.1319 3.36825 15.0352 3 15.9772 3C16.9192 3 17.8225 3.36825 18.4886 4.02375C19.1547 4.67924 19.5289 5.56829 19.5289 6.4953C19.5289 7.42231 19.1547 8.31135 18.4886 8.96685L10.3243 16.9928C9.99129 17.3206 9.5396 17.5047 9.06862 17.5047C8.59764 17.5047 8.14595 17.3206 7.81291 16.9928C7.47988 16.6651 7.29279 16.2206 7.29279 15.7571C7.29279 15.2935 7.47988 14.849 7.81291 14.5213L15.3471 7.11537"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.15">
                  <path
                    d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 15L16 10L5 21"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.15">
                  <path
                    d="M19.038 3H4.962C3.87842 3 3 3.87842 3 4.962V19.038C3 20.1216 3.87842 21 4.962 21H19.038C20.1216 21 21 20.1216 21 19.038V4.962C21 3.87842 20.1216 3 19.038 3Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.50049 3V21"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 3V21"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 12.0003H21"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 7.50041H7.5"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 16.5H7.5"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 16.5H21"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 7.50041H21"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="32"
                  height="32"
                  rx="4"
                  fill="url(#paint0_linear_1_243)"
                />
                <path
                  d="M21.6666 10.3333L14.3333 17.6667"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.6666 10.3333L16.9999 23.6667L14.3333 17.6667L8.33325 15L21.6666 10.3333Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_243"
                    x1="16"
                    y1="0"
                    x2="16"
                    y2="32"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0077B5" />
                    <stop offset="1" stop-color="#0E6795" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div class="sort">
            <hr />
            <p>SORT BY :</p>
            <select name="" id="">
              <option value="TRENDING">TRENDING</option>
            </select>
            <hr />
          </div>
          <PostContent
            v-for="item in posts"
            :reacts="item.reacts"
            :user="item.user"
            :text="item.text"
            :overflow="item.overflow"
            :img="item.img"
            :file="item.file"
            :like="item.like"
            :comment="item.comment"
          />
        </div>
        <div class="sidebar">
          <div class="profile">
            <div class="banner">
              <img src="/images/banner.jpg" alt="" />
            </div>
            <div class="info">
              <div class="picture">
                <div class="img-bg">
                  <img src="/images/picture.jpg" alt="" />
                </div>
              </div>
              <div class="info-container">
                <div class="info-header">
                  <p class="user-name">
                    Miya
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.87868 0.87868C0 1.75736 0 3.17157 0 6V10C0 12.8284 0 14.2426 0.87868 15.1213C1.75736 16 3.17157 16 6 16H10C12.8284 16 14.2426 16 15.1213 15.1213C16 14.2426 16 12.8284 16 10V6C16 3.17157 16 1.75736 15.1213 0.87868C14.2426 0 12.8284 0 10 0H6C3.17157 0 1.75736 0 0.87868 0.87868ZM3.99344 5.01216C3.33466 5.01216 2.8 4.47202 2.8 3.80608C2.8 3.14014 3.33466 2.6 3.99344 2.6C4.65222 2.6 5.18688 3.14014 5.18688 3.80608C5.18688 4.47202 4.6529 5.01216 3.99344 5.01216ZM2.97049 13.4V5.87911H5.01639V13.4H2.97049ZM11.1541 13.4H13.2V8.77876C13.2 5.18719 9.37894 5.31778 8.42623 7.08587V5.87911H6.38033V13.4H8.42623V9.56845C8.42623 7.44004 11.1541 7.26569 11.1541 9.56845V13.4Z"
                        fill="url(#paint0_linear_1_87)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_87"
                          x1="8"
                          y1="0"
                          x2="8"
                          y2="16"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#D8C281" />
                          <stop offset="1" stop-color="#AC9B69" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </p>
                </div>
                <div class="info-content">
                  <p>
                    Freelance UX/UI designer, 80+ projects in web design, mobile
                    apps (iOS & android) and creative projects. Open to offers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="new-article">
            <button><p>WRITE NEW ARTICLE</p></button>
          </div>
          <side-content class="group">
            <template #header>
              <p>MY GROUPS<a href="javascript:;">VIEW ALL</a></p>
            </template>
            <template #content>
              <div
                v-for="item in groupArr"
                :key="item.title"
                class="group-card"
              >
                <img :src="item.img" alt="" />
                <p>{{ item.title }}</p>
              </div>
            </template>
            <template #footer>
              <a href="javascript:;">SHOW ALL (8)</a>
            </template>
          </side-content>
          <side-content class="hashtags">
            <template #header>
              <p>FOLLOWED HASHTAGS</p>
            </template>
            <template #content>
              <div class="hashtag-box">
                <a href="javascript:;"><p>#work</p></a>
                <a href="javascript:;"><p>#business</p></a>
                <a href="javascript:;"><p>#hr</p></a>
                <a href="javascript:;"><p>#userinterface</p></a>
                <a href="javascript:;"><p>#digital</p></a>
                <a href="javascript:;"> <p>#userexperience</p></a>
                <a href="javascript:;"><p>#ux</p></a>
                <a href="javascript:;"><p>#ui</p></a>
                <a href="javascript:;"><p>#freelance</p></a>
              </div>
            </template>
          </side-content>
          <side-content class="articles">
            <template #header>
              <p>TRENDING ARTICLES</p>
            </template>
            <template #content>
              <div
                v-for="item in coursesArr"
                :key="item.title"
                class="article-card"
              >
                <div class="left">
                  <img :src="item.img" alt="" />
                </div>
                <div class="right">
                  <p>{{ item.title }}</p>
                  <span>{{ item.content }}</span>
                </div>
              </div>
            </template>
          </side-content>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;

  .container {
    width: 100%;
    margin-top: 70px;
    display: flex;
    justify-content: center;
    .content {
      width: 55vw;
      .new-post {
        background-color: white;
        padding: 16px * 2;
        p {
          font-weight: bold;
        }
        hr {
          margin: 1rem 0;
        }
        .np-content {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          input {
            font-size: 1.5rem;
            border: none;
            flex: 1;
            margin-right: auto;
            &:focus {
              outline: none;
            }
            &::placeholder {
              color: #cecece;
            }
          }
          svg {
            margin-left: 1rem;
            cursor: pointer;
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
        select {
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
    }
    .sidebar {
      margin-left: 2.5vw;
      width: 15vw;
      .profile {
        height: 400px;
        background-color: white;
        .banner {
          height: 50%;
          overflow: hidden;
          position: relative;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 50%;
          }
        }
        .info {
          display: flex;
          flex-direction: column;
          .picture {
            display: flex;
            justify-content: center;
            .img-bg {
              width: 50%;
              height: 50%;
              margin-top: -25%;
              z-index: 1;
              background-color: white;
              border-radius: 50%;
              img {
                width: 100%;
                border-radius: 50%;
                border: 0.25vw solid white;
              }
            }
          }
          .info-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .info-content {
              width: 80%;
              p {
                text-align: center;
                font-size: 0.5rem;
              }
            }
          }
        }
      }
      .new-article {
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
      .group {
        margin-top: 16px * 2;
        .group-card {
          display: flex;
          align-items: center;
          border: 1px solid #f4f4f4;
          border-radius: 5px;
          padding: 16px;
          margin-top: 16px;
          cursor: pointer;
          transition: 0.2s linear;

          &:hover {
            border-color: #0275b1;
          }
          img {
            width: 2.75vw;
            height: 2.75vw;
            object-fit: cover;
            border-radius: 50%;
          }
          p {
            margin-left: 16px;
            font-weight: bold;
          }
        }
      }
      .hashtags {
        .side-content {
          .hashtag-box {
            display: flex;
            margin-top: 16px;
            flex-wrap: wrap;
            a {
              text-decoration: none;
              p {
                padding: 16px * 0.75;
                margin-right: 16px * 0.5;
                margin-bottom: 16px * 0.5;
                border-radius: 5px;
                background-color: #e9f0f8;
                color: #181818;
              }
            }
          }
        }
      }
      .article-card {
        margin-top: 16px;
        display: flex;
        cursor: pointer;
        .left {
          display: flex;
          align-items: center;
          img {
            width: 4vw;
          }
        }
        .right {
          margin-left: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          p {
            font-weight: bold;
          }
          span {
            margin-top: 0.5rem;
            font-size: 0.5rem;
          }
        }
      }
    }
  }
}
</style>
