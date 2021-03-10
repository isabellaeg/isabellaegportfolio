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

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  name: "Isabella",
  headerTagline: [
    //Line 1 For Header
    "Isabella Esquivel",
    "Full Stack Developer",
  ],
  //   Header Paragraph
  headerParagraph:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",

  contactEmail: "isabellaesquivelg@gmail.com",

  // Work Section ------------------------
  projects: [
    {
      id: 1,
      title: "Democracy.earth", 
      para:
        "DAO proposal launcher for open-source project", 
      imageSrc:
        "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
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
      title: "Project Three", 
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      imageSrc:
        "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      url: "http://chetanverma.com/",
    },
    {
      id: 4, 
      title: "Project Four",
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", 
      imageSrc:
        "https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      url: "http://chetanverma.com/",
    },
    {
      id: 5, 
      title: "Project Five", 
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
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  aboutParaTwo:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  aboutParaThree:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
      img: codepenIcon,
      url: "https://www.codepen.com/",
    },
    {
      img: dribbbleIcon,
      url: "https://dribbble.com/chetanverma",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/",
    },
  ],
}
