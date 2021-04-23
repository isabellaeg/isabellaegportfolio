// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import reduxIcon from "./images/redux.png"
import psqlIcon from "./images/psql.png"
import sassIcon from "./images/sass.png"
import vueIcon from "./images/vue.png"
import vuetifyIcon from "./images/vuetify.png"
import gatsbyIcon from "./images/gatsby-icon.png"
import Isabella from "./images/isabella.png"
import Wimet from './images/wimet.png'
import Democracy from './images/democracy.png'

import githubIcon from "./images/github.svg"
import LinkedIn from "./images/linkedd.svg"

export default {
  name: "Isabella",
  headerTagline: [
    "Isabella Esquivel",
    "Full Stack Developer",
  ],
  headerParagraph:
    "I'm a Full Stack Developer with an inclination towards Front End Development and Design",
  contactEmail: "isabellaesquivelg@gmail.com",
  projects: [
    {
      id: 1,
      title: "Democracy.earth", 
      para:
        "DAO proposal launcher for open-source project", 
      imageSrc: Democracy,
      url: "http://democracy.earth/",
    },
    {
      id: 2, 
      title: "Pokedex",
      para:
        "Pokedex using Pokemon API and React",
      imageSrc:
        "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60",
      url: "http://chetanverma.com/",
    },
    {
      id: 3,
      title: "Canal Musical E-Commerce", 
      para:
        "E-Commerce developed with React, Node and PSQL. it features product listing and flteirng through categories, a functional shopping cart, user login and registration and an admin panel.",
      imageSrc:
        "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      url: "http://chetanverma.com/",
    },
    {
      id: 4, 
      title: "Wimet",
      para:
        "I work as a front-end software engineer for Wimet, developing new designs as well as maintaining and imporving the site constantly", 
      imageSrc: Wimet,
      url: "http://wimet.co/",
    },
    {
      id: 5, 
      title: "E-Commerce", 
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", 
      imageSrc:
        "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      url: "http://chetanverma.com/",
    },
    {
      id: 6, 
      title: "Project Six", 
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", 
      imageSrc:
        "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
      url: "http://chetanverma.com/",
    },
  ],

  // About Secton --------------
  aboutParaOne:
    "I'm 23 years old from Venezuela but currently living in Buenos Aires, Argentina. I originally began studying Vterinarty Medicine but changed career path when i discovered my passion for Programming",
  aboutParaTwo:
    "I think one quallity that defies me most is my curiosity, i lover learning and i am in constant search for something new to learn wether its a new framework or a new language",
  aboutParaThree:
    "I consider myself very creative and thats why i've leaned towards Fron End Development mostly, i feel i can truly let that crative side shine through while being able to write code and challenge myself.",
  aboutImage: Isabella,

  // Skills Section ---------------

  skills: [
    {
      id: 1,
      img: reactIcon,
      para:
        "React.js",
    },
    {
      id: 2,
      img: reduxIcon,
      para:
        "Redux",
    },
    {
      id: 3,
      img: jsIcon,
      para:
        "JavaScript",
    },
    {
      id: 4,
      img: vueIcon,
      para:
        "Vue.js",
    },
    {
      id: 5,
      img: vuetifyIcon,
      para:
        "Vuetify",
    },
    {
      id: 6,
      img: htmlIcon,
      para:
        "HTML",
    },
    {
      id: 7,
      img: cssIcon,
      para:
        "CSS",
    },
    {
      id: 8,
      img: sassIcon,
      para:
        "Sass",
    },
    {
      id: 9,
      img: psqlIcon,
      para:
        "PostreSQL",
    },
    {
      id: 10,
      img: gatsbyIcon,
      para:
        "Gatsby",
    },
  ],

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

  contactSubHeading: "Let's create something together",
  social: [
    { img: githubIcon, url: "https://github.com/isabellaeg" },
    {
      img: LinkedIn,
      url: "https://www.linkedin.com/in/isabella-e-725051144/",
    },
  ],
}
