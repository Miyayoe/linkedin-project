<script setup>
import axios from 'axios';
const projectsArr = ref([]);
const skillArr = ref([]);
const experienceArr = ref([]);
const educationArr = ref([]);
const visitorsArr = ref([]);
const coursesArr = ref([]);

//projectsArr
axios
  .get(
    'https://api.unsplash.com/search/photos?page=1&query=taiwan&client_id=cZdfd8fqxmmbqYfHGbYbeHxf7nO9WRv4lxG0Wv4_Cc8'
  )
  .then((response) => {
    const imgArr = response.data.results;
    projectsArr.value = [
      {
        img: imgArr[0].urls.regular,
        title: 'Zara redesign concept',
        description: 'UX/UI design, 15.07.2019',
      },
      {
        img: imgArr[1].urls.regular,
        title: ' SCTHONevent brand identity',
        description: 'Graohic design, 03.31.2019',
      },
      {
        img: imgArr[3].urls.regular,
        title: ' Drozed. Brand identity. 2016',
        description: 'Graphic design, 03.04.2016',
      },
    ];
  });
//skillArr
axios
  .get(
    'https://api.unsplash.com/search/photos?query=users&client_id=cZdfd8fqxmmbqYfHGbYbeHxf7nO9WRv4lxG0Wv4_Cc8'
  )
  .then((response) => {
    const imgArr = response.data.results;
    skillArr.value = [
      {
        title: 'User experience (UX)',
        number: 6,
        users: [
          {
            img: imgArr[0].urls.regular,
          },
          {
            img: imgArr[1].urls.regular,
          },
          {
            img: imgArr[2].urls.regular,
          },
          {
            img: imgArr[3].urls.regular,
          },
          {
            img: imgArr[4].urls.regular,
          },
          {
            img: imgArr[4].urls.regular,
          },
        ],
      },
      {
        title: 'User interface (UI)',
        number: 7,
        users: [
          {
            img: imgArr[5].urls.regular,
          },
          {
            img: imgArr[6].urls.regular,
          },
          {
            img: imgArr[7].urls.regular,
          },
          {
            img: imgArr[8].urls.regular,
          },
          {
            img: imgArr[9].urls.regular,
          },
          {
            img: imgArr[9].urls.regular,
          },
          {
            img: imgArr[9].urls.regular,
          },
        ],
      },
      {
        title: 'Brand identity',
        number: 5,
        users: [
          {
            img: imgArr[0].urls.regular,
          },
          {
            img: imgArr[1].urls.regular,
          },
          {
            img: imgArr[2].urls.regular,
          },
          {
            img: imgArr[3].urls.regular,
          },
          {
            img: imgArr[4].urls.regular,
          },
        ],
      },
    ];
  });
//experienceArr
axios
  .get(
    'https://api.unsplash.com/search/photos?query=company-logo&client_id=cZdfd8fqxmmbqYfHGbYbeHxf7nO9WRv4lxG0Wv4_Cc8'
  )
  .then((response) => {
    const imgArr = response.data.results;
    experienceArr.value = [
      {
        title: 'Freelance UX/UI designer',
        img: imgArr[0].urls.regular,
        company: {
          name: 'Self Employed',
          spot: 'Around the world',
        },
        time: {
          since: 'Jun 2016 — Present',
          howLong: '3 yrs 3 mos',
        },
        content:
          'Work with clients and web studios as freelancer. Work in next areas: eCommerce web projects; creative landing pages; iOs and Android apps; corporate web sites and corporate identity sometimes.',
      },
      {
        title: 'UX/UI designer',
        img: imgArr[2].urls.regular,
        company: {
          name: 'Upwork',
          spot: 'International',
        },
        time: {
          since: 'Jun 2019 — Present',
          howLong: '3 mos',
        },
        content:
          'New experience with Upwork system. Work in next areas: UX/UI design, graphic design, interaction design, UX research.',
      },
    ];
  });
//educationArr
axios
  .get(
    'https://api.unsplash.com/search/photos?query=college-logo&client_id=cZdfd8fqxmmbqYfHGbYbeHxf7nO9WRv4lxG0Wv4_Cc8'
  )
  .then((response) => {
    const imgArr = response.data.results;
    educationArr.value = [
      {
        title: 'Moscow State Linguistic University',
        img: imgArr[0].urls.regular,
        degree:
          "Bachelor's degree Field Of StudyComputer and Information Systems Security/Information Assurance",
        time: '2013 — 2017',
        content: 'Additional English classes and UX profile courses​.',
      },
    ];
  });

axios
  .get(
    'https://api.unsplash.com/search/photos?page=2&query=users&client_id=cZdfd8fqxmmbqYfHGbYbeHxf7nO9WRv4lxG0Wv4_Cc8'
  )
  .then((response) => {
    const imgArr = response.data.results;
    visitorsArr.value = [
      {
        name: 'Darlene Black',
        img: imgArr[0].urls.regular,
        content: 'HR-manager, 10 000 connec...',
      },
      {
        name: 'Theresa Steward',
        img: imgArr[1].urls.regular,
        content: 'iOS developer',
      },
      {
        name: 'Brandon Wilson',
        img: imgArr[2].urls.regular,
        content: 'Senior UX designer',
      },
      {
        name: 'Kyle Fisher',
        img: imgArr[3].urls.regular,
        content: 'Product designer at Com...',
      },
      {
        name: 'Audrey Alexander',
        img: imgArr[4].urls.regular,
        content: 'Team lead at Google',
      },
    ];
  });
axios
  .get(
    'https://api.unsplash.com/search/photos?page=2&query=courses&client_id=cZdfd8fqxmmbqYfHGbYbeHxf7nO9WRv4lxG0Wv4_Cc8'
  )
  .then((response) => {
    const imgArr = response.data.results;
    coursesArr.value = [
      {
        title: 'UX Foundations: Prototyping',
        img: imgArr[0].urls.regular,
        content: '27,959 viewers',
      },
      {
        title: 'Designing with Adobe XD and pro',
        img: imgArr[1].urls.regular,
        content: '9,122 viewers',
      },
      {
        title: 'UX Foundations: Styles and GUIs',
        img: imgArr[2].urls.regular,
        content: '13,858 viewers',
      },
    ];
  });
</script>

<template>
  <main>
    <header>
      <Navbar />
    </header>
    <section>
      <div class="container">
        <div class="content">
          <div class="profile">
            <div class="banner">
              <img src="@/assets/images/banner.jpg" alt="" />
              <div class="buttons">
                <button class="share">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10"
                      stroke="#181818"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.3333 5.33333L8 2L4.66667 5.33333"
                      stroke="#181818"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 2V10"
                      stroke="#181818"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button class="more">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z"
                      fill="#181818"
                      stroke="#181818"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19Z"
                      fill="#181818"
                      stroke="#181818"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5Z"
                      fill="#181818"
                      stroke="#181818"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button class="edit">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_99)">
                      <path
                        d="M8.0257 3.61491H3.35903C3.00541 3.61491 2.66627 3.75539 2.41622 4.00544C2.16617 4.25549 2.0257 4.59463 2.0257 4.94825V14.2816C2.0257 14.6352 2.16617 14.9743 2.41622 15.2244C2.66627 15.4744 3.00541 15.6149 3.35903 15.6149H12.6924C13.046 15.6149 13.3851 15.4744 13.6352 15.2244C13.8852 14.9743 14.0257 14.6352 14.0257 14.2816V9.61491"
                        stroke="#181818"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.0257 2.61484C13.2909 2.34962 13.6506 2.20062 14.0257 2.20062C14.4008 2.20062 14.7605 2.34962 15.0257 2.61484C15.2909 2.88005 15.4399 3.23976 15.4399 3.61484C15.4399 3.98991 15.2909 4.34962 15.0257 4.61484L8.69236 10.9482L6.0257 11.6148L6.69236 8.94817L13.0257 2.61484Z"
                        stroke="#181818"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_99">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0.692383 0.948242)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>EDIT PROFILE</p>
                </button>
              </div>
            </div>
            <div class="info">
              <div class="left">
                <div class="user-image-area">
                  <div class="user-image-cut">
                    <img src="@/assets/images/picture.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div class="right">
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
                  <p class="user-location">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 7.33328L14.6667 1.33328L8.66667 13.9999L7.33333 8.66662L2 7.33328Z"
                        fill="#0275B1"
                      />
                    </svg>
                    Saint Petersburg, Russian Federation
                  </p>
                </div>
                <div class="info-content">
                  <p>
                    Freelance UX/UI designer, 80+ projects in web design, mobile
                    apps (iOS & android) and creative projects. Open to offers.
                  </p>
                </div>
                <div class="info-footer">
                  <button class="active">CONTACT INFO</button>
                  <button>1,043 CONNECTIONS</button>
                </div>
              </div>
            </div>
          </div>
          <div class="tabs">
            <ul>
              <li><button class="active">PROFILE</button></li>
              <li><button>ACTIVITY & INTERESTS</button></li>
              <li><button>ARTICLES (3)</button></li>
            </ul>
          </div>
          <home-content class="home-about">
            <template #header>
              <p>About</p>
            </template>
            <template #content>
              <p>
                I'm more experienced in eCommerce web projects and mobile
                banking apps, but also like to work with creative projects, such
                as landing pages or unusual corporate websites.
              </p>
            </template>
            <template #footer>
              <a href="javascript:;">SEE MORE</a>
            </template>
          </home-content>
          <home-content class="home-projects">
            <template #header>
              <p>Projects <span>3 of 12</span></p>
            </template>
            <template #content>
              <div v-for="item in projectsArr" :key="item.title" class="card">
                <img :src="item.img" :alt="item.title" height="200" />
                <p>{{ item.title }}</p>
                <span>{{ item.description }}</span>
              </div>
            </template>
            <template #footer>
              <a href="javascript:;">SEE ALL (12)</a>
            </template>
          </home-content>
          <home-content class="home-skill">
            <template #header>
              <p>Skills & Endorsements</p>
            </template>
            <template #content>
              <div v-for="item in skillArr" :key="item.title" class="card">
                <p>
                  {{ item.title }} <span>{{ item.number }}</span>
                </p>
                <div class="users">
                  <div v-for="el in item.users.slice(0, 5)" class="user">
                    <img :src="el.img" />
                  </div>
                  <div class="over-user" v-if="item.users.length - 5 > 0">
                    <p>+{{ item.users.length - 5 }}</p>
                  </div>
                </div>
              </div>
            </template>
            <template #footer>
              <a href="javascript:;">SEE ALL (17)</a>
            </template>
          </home-content>
          <home-content class="home-experience">
            <template #header>
              <p>Experience</p>
            </template>
            <template #content>
              <div v-for="item in experienceArr" :key="item.title" class="card">
                <div class="left"><img :src="item.img" /></div>
                <div class="right">
                  <p class="title">{{ item.title }}</p>
                  <p class="company">
                    {{ item.company.name }} <span>{{ item.company.spot }}</span>
                  </p>
                  <p class="time">
                    {{ item.time.since }} <span>{{ item.time.howLong }}</span>
                  </p>
                  <p class="experience-content">{{ item.content }}</p>
                </div>
              </div>
            </template>
          </home-content>
          <home-content class="home-education">
            <template #header>
              <p>Education</p>
            </template>
            <template #content>
              <div v-for="item in educationArr" :key="item.title" class="card">
                <div class="left"><img :src="item.img" /></div>
                <div class="right">
                  <p class="title">{{ item.title }}</p>
                  <p class="degree">
                    {{ item.degree }}
                  </p>
                  <p class="time">
                    {{ item.time }}
                  </p>
                  <p class="experience-content">{{ item.content }}</p>
                </div>
              </div>
            </template>
          </home-content>
        </div>
        <div class="sidebar">
          <Dashboard />
          <side-content class="visitors">
            <template #header>
              <p>VISITORS<a href="javascript:;">VIEW ALL</a></p>
            </template>
            <template #content>
              <div v-for="item in visitorsArr" :key="item.name" class="content">
                <div class="card">
                  <div class="left">
                    <img :src="item.img" alt="" />
                  </div>
                  <div class="right">
                    <p>{{ item.name }}</p>
                    <span>{{ item.content }}</span>
                  </div>
                </div>
              </div>
            </template>
          </side-content>
          <side-content class="courses">
            <template #header>
              <p>YOU MAY LIKE THESE COURSES</p>
            </template>
            <template #content>
              <div v-for="item in coursesArr" :key="item.title" class="card">
                <div class="left">
                  <img :src="item.img" alt="" />
                </div>
                <div class="right">
                  <p>{{ item.title }}</p>
                  <span>{{ item.content }}</span>
                </div>
              </div>
            </template>
            <template #footer>
              <a href="javascript:;">SEE ALL RECOMMENDATIONS</a>
            </template>
          </side-content>
        </div>
      </div>
    </section>
    <footer>
      <Footer />
    </footer>
  </main>
</template>

<style lang="scss" style>
:root {
  --font: '@/assets/GothamPro.ttf', 'Noto Sans TC', sans-serif;
}
* {
  font-family: var(--font);
  box-sizing: border-box;
}
section {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  .container {
    margin-top: 70px;
    display: flex;
    .content {
      width: 55vw;
      .profile {
        background-color: white;
        height: 500px;
        display: flex;
        flex-direction: column;

        .banner {
          height: 50%;
          overflow: hidden;
          position: relative;
          .buttons {
            position: relative;
            margin: 1.5rem 2rem;
            align-items: center;
            button {
              min-width: 35px;
              height: 35px;
              background-color: rgba($color: white, $alpha: 0.8);
              border: none;
              border-radius: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 5px;
              cursor: pointer;
              transition: 0.2s linear;
              &:hover {
                background-color: rgba($color: white, $alpha: 1);
              }
              &.share {
                float: left;
              }
              &.edit {
                float: right;
                margin-right: 1rem;
                padding: 10px;

                p {
                  font-family: var(--font);
                }
              }
              &.more {
                float: right;
              }
            }
          }
          img {
            position: absolute;
            top: -20%;
            width: 100%;
          }
        }
        .info {
          height: 50%;
          display: flex;
          flex-wrap: wrap;
          .left {
            position: relative;
            width: 250px;
            height: 100%;
            margin-left: 1.5rem;
            .user-image-area {
              position: absolute;
              width: 250px;
              height: 250px;
              background-color: white;
              border-radius: 50%;
              top: -25%;
              left: 50%;
              transform: translateX(-50%);
              display: flex;
              justify-content: center;
              align-items: center;
              .user-image-cut {
                width: 90%;
                height: 90%;
                border-radius: 50%;
                overflow: hidden;
                img {
                  width: 100%;
                }
              }
            }
          }
          .right {
            flex: 1;
            margin: 2rem 1rem 0rem 1rem;
            .info-header {
              display: flex;
              justify-content: flex-end;
              .user-name {
                justify-self: flex-start;
                display: flex;
                align-items: center;
                font-family: var(--font);
                font-size: 1.5rem;
                font-weight: bold;
                svg {
                  margin-left: 0.5rem;
                }
              }
              .user-location {
                display: flex;
                margin-left: auto;
                font-family: var(--font);
                color: #181818;
                svg {
                  margin-right: 0.5rem;
                }
              }
            }
            .info-content {
              margin-top: 1rem;
              font-size: 1.25rem;
              p {
                font-family: var(--font);
                color: #181818;
              }
            }
            .info-footer {
              margin-top: 1rem;
              button {
                border: 1px solid #0275b1;
                background-color: transparent;
                padding: 0.8rem 2rem;
                margin-right: 1rem;
                border-radius: 5px;
                font-size: 1rem;
                font-family: var(--font);
                font-weight: bold;
                color: #0275b1;
                &.active {
                  background-color: #0275b1;
                  color: white;
                }
              }
            }
          }
        }
      }
      .tabs {
        margin-top: 2rem;
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
              padding: 1.5rem 5rem;
              background-color: white;
              font-size: 1rem;
              font-family: var(--font);
              font-weight: bold;
              border-radius: 5px;
              transition: 0.2s linear;
              &:hover,
              &.active {
                background: linear-gradient(180deg, #0077b5 0%, #0e6795 100%);
                color: #fff;
                padding: 2rem 10rem;
              }
            }
          }
        }
      }
      .home-about {
        .home-header {
          p {
            font-size: 2rem;
            font-family: var(--font);
            font-weight: bold;
          }
        }
        .home-content {
          p {
            font-size: 1.5rem;
            font-family: var(--font);
            color: #181818;
          }
        }
      }
      .home-projects {
        .home-header {
          p {
            font-size: 2rem;
            font-family: var(--font);
            font-weight: bold;
          }
          span {
            font-family: var(--font);
            color: #747474;
            margin-left: 1rem;
            font-size: 1.75rem;
          }
        }
        .home-content {
          display: flex;
          width: 100%;
          justify-content: space-between;
          .card {
            width: 16vw;
            img {
              width: 100%;
              object-fit: cover;
            }
            p {
              font-family: var(--font);
              font-weight: bold;
              margin: 0.5rem 0rem;
            }
            span {
              font-family: var(--font);
              font-size: 0.5rem;
              color: #181818;
              font-weight: lighter;
            }
          }
        }
      }
      .home-skill {
        .home-header {
          p {
            font-size: 2rem;
            font-family: var(--font);
            font-weight: bold;
          }
        }
        .home-content {
          width: 100%;
          display: flex;
          justify-content: space-between;
          .card {
            width: 15vw;
            border: 1px solid #f4f4f4;
            padding: 1rem;
            border-radius: 5px;
            p {
              font-family: var(--font);
              font-weight: bold;
              font-size: 1.25rem;
              margin: 0.5rem 0;
              span {
                float: right;
                color: #0275b1;
                font-weight: bold;
                font-family: var(--font);
              }
            }
            .users {
              display: flex;
              align-items: center;
              img {
                border-radius: 50%;
                width: 1.2vw;
                height: 1.2vw;
                object-fit: cover;
              }
              :not(first-child) {
                margin-left: -0.1vw;
              }
              .over-user {
                background-color: #0275b1;
                width: 1.2vw;
                height: 1.2vw;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                p {
                  font-family: var(--font);
                  color: white;
                  font-size: 0.5rem;
                }
              }
            }
          }
        }
      }
      .home-experience {
        .home-header {
          p {
            font-size: 2rem;
            font-family: var(--font);
            font-weight: bold;
          }
        }
        .home-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: calc(120px * 2);
          :not(:first-child).card {
            border-top: 1px solid #f4f4f4;
          }
          .card {
            display: flex;
            padding: 1rem 0;
            .left {
              padding: 0 1rem;
              img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                object-fit: cover;
              }
            }
            .right {
              p.title {
                font-family: var(--font);
                font-weight: bold;
                margin-bottom: 1rem;
              }
              p.company {
                font-size: 0.5rem;
                font-family: var(--font);
                margin-bottom: 0.5rem;
                span {
                  margin-left: 0.5rem;
                  font-family: var(--font);
                  color: #181818;
                }
              }
              p.time {
                font-size: 0.5rem;
                font-family: var(--font);
                margin-bottom: 0.5rem;
                color: #181818;
                margin-bottom: 1rem;
                span {
                  margin-left: 0.5rem;
                  font-size: 0.75rem;
                  font-weight: bold;
                  font-family: var(--font);
                  color: #0275b1;
                }
              }
              p.experience-content {
                font-family: var(--font);
                font-size: 0.5rem;
              }
            }
          }
        }
      }
      .home-education {
        .home-header {
          p {
            font-size: 2rem;
            font-family: var(--font);
            font-weight: bold;
          }
        }
        .home-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: calc(120px * 1);

          .card {
            display: flex;
            .left {
              padding: 0 1rem;
              img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                object-fit: cover;
              }
            }
            .right {
              p.title {
                font-family: var(--font);
                font-weight: bold;
                margin-bottom: 1rem;
              }
              p.degree {
                font-size: 0.5rem;
                font-family: var(--font);
                margin-bottom: 0.5rem;
              }
              p.time {
                font-size: 0.5rem;
                font-family: var(--font);
                margin-bottom: 0.5rem;
                color: #181818;
                margin-bottom: 1rem;
              }
              p.experience-content {
                font-family: var(--font);
                font-size: 0.5rem;
              }
            }
          }
        }
      }
    }

    .sidebar {
      margin-left: 2.5vw;
      width: 20vw;
      .visitors {
        p {
          a {
            border-bottom: none;
          }
        }
        .side-content {
          .card {
            display: flex;
            margin: 1rem 0;
            .left {
              img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                object-fit: cover;
              }
            }
            .right {
              display: flex;
              flex-direction: column;
              justify-content: center;
              margin-left: 0.5rem;
              p {
                font-weight: bold;
                font-family: var(--font);
                margin-bottom: 0.25rem;
              }
              span {
                font-family: var(--font);
                font-size: 0.5rem;
                color: #181818;
              }
            }
          }
        }
      }
      .courses {
        .side-content {
          display: flex;
          flex-direction: column;
          .card {
            display: flex;
            margin: 0.5rem 0;
            .left {
              img {
                width: 150px;
                height: 75px;
                object-fit: cover;
              }
            }
            .right {
              display: flex;
              flex-direction: column;
              justify-content: center;
              margin-left: 1rem;
              p {
                font-family: var(--font);
                font-weight: bold;
              }
              span {
                font-family: var(--font);
                font-size: 0.5rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
