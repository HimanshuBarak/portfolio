import React from 'react'
import Navbar from './Navbar'
import { makeStyles , Button,Grid,Box,Avatar} from '@material-ui/core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Fade from 'react-reveal/Fade';


library.add(fab)

const usestyles =makeStyles(theme=>({
  root:{
    background:"rgb(237, 249, 254)",
    width:"100%",
    color:"#0b3343",
    textAlign:"center",  
    [theme.breakpoints.up('sm')]:{
      paddingTop:"60px" 
  }},
  img:{
    width:"100%",
    height:"100%",
    maxHeight:"480px",
    margin:"auto"
    
 },
  greeting:{
    
     [theme.breakpoints.up('md')]:{
      paddingTop:"100px",
     textAlign:"left" ,
    },
     [theme.breakpoints.down('md')]:{
      paddingTop:"60px"
    },
    "& a":{
      textDecoration:"none"
    },
  },
  sub_heading:{
   
    paddingTop:"20px",
    fontSize:"clamp(22px,3vw,34px)",
    fontFamily:"Montserrat,sans-serif",
    color:"rgb(127, 141, 170)" ,
    paddingBottom:"22px",
    [theme.breakpoints.down('md')]:{
      textAlign:"center",
      
    }
  },
  heading:{
    fontSize:"clamp(35px,6vw,72px)",
    fontFamily:"BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    color:"rgb(0, 28, 85)",
    textAlign:"left",
    [theme.breakpoints.down('md')]:{
      textAlign:"center"
    }
  },
  btn:{
    padding:"8px 20px 8px 20px",
    backgroundColor:"rgb(0, 28, 85)",
    marginTop:"28px" ,
    fontFamily:"Montserrat,sans-serif",
    fontSize:"clamp(14px,2vw,19px)",
    color:"rgb(237, 249, 254)",
    borderRadius:"7px",
    letterSpacing:"1.5px",
    "&:hover":{
      transition: "all .4s ease-in-out",
      backgroundColor:"rgb(237, 249, 254)",
      border:"1px solid rgb(0, 28, 85)",
      color:"rgb(0, 28, 85)",
      boxShadow:"none"
    }

},
  github_icon:{
    backgroundColor:"black",
    marginRight:"10px",
    "&:hover":{
      backgroundColor:"rgb(0, 28, 85)"
    },
  },
  linkedin_icon:{
    backgroundColor:"rgb(0, 119, 181)",
    marginRight:"10px",
    "&:hover":{
      backgroundColor:"rgb(0, 28, 85)"
    },
  },
  google_icon:{
    backgroundColor:"rgb(209, 72, 54)",
    marginRight:"10px",
    "&:hover":{
      backgroundColor:"rgb(0, 28, 85)"
    },
  },
  instagram_icon:{
    backgroundColor:"#e4405f",
    marginRight:"10px",
    "&:hover":{
      backgroundColor:"rgb(0, 28, 85)"
    },
  },
  icons:{
   display:"flex",
   textAlign:"left",
   
   [theme.breakpoints.down('md')]:{
     justifyContent:"center"
   }
   
},
vector:{
  marginTop:"50px"
}
}));
function Header() {
   const {root,greeting,heading,icons,bg_color,img,sub_heading,github_icon,linkedin_icon,google_icon,instagram_icon,btn, vector} =usestyles();
    return (
        <div className={bg_color} id="home">
           <Navbar />
          <Grid container className={root}>
         
             
               
          <Box mt={5} />
          <Box pt={5} />  
         
         
          
          <Grid item xs={12} md={6} lg={6}>
            <Box m={5}>
              <Fade bottom duration={1500} distance="50px">
              <div className={greeting}>
             <h1 className={heading}>I'm Himanshu</h1> 
             <h3 className={sub_heading} >A passionate web developer who loves to build things.</h3>
              <div className={icons}>
              <a href="https://github.com/HimanshuBarak" target="_blank"><Avatar alt="Github_icon" className={github_icon} ><FontAwesomeIcon icon={['fab','github']}  /> </Avatar></a>
              <a href="https://www.linkedin.com/in/himanshu-barak-002714118" target="_blank"><Avatar alt="linkedin_icon" className={linkedin_icon} > <FontAwesomeIcon icon={['fab','linkedin-in']} /></Avatar></a>
              <a href="mailto:himanshubarak12@gmail.com" target="_blank"><Avatar alt="google_icon" className={google_icon} > <FontAwesomeIcon icon={['fab','google']} /></Avatar></a> 
              <a href="https://www.instagram.com/__himanshu_0_0/" target="_blank"><Avatar alt="google_icon" className={instagram_icon}> <FontAwesomeIcon icon={['fab','instagram']} /></Avatar></a>
              </div>
               <a href="resume.pdf" download><Button variant="contained" color="primary" className={btn}> See my Resume</Button></a>
              </div>
              </Fade>
            
            </Box>
       </Grid>
        
        
          <Grid item xs={12} md={6} lg={6}>
              <Box  m={4} pr={1} >
               
              <Fade bottom duration={1500} distance="50px">
               <div className={vector}>
               <svg class={img} id="e4bbe722-77af-4dff-9d23-13f94132c30a" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" 
            width="921.71991" height="653.40956" viewBox="0 0 921.71991 653.40956"><title>hacker_mindset</title><ellipse cx="85.34394" cy="578.40956"
             rx="85" ry="6" fill="#d0cde1"></ellipse><ellipse cx="343.34394" cy="642.90956" rx="221" ry="10.5" fill="#d0cde1"></ellipse>
             <polygon points="458.344 218.41 462.344 211.41 442.344 207.41 440.344 217.41 443.344 225.41 458.344 218.41" fill="#6c63ff"></polygon>
             <polygon points="458.344 218.41 462.344 211.41 442.344 207.41 440.344 217.41 443.344 225.41 458.344 218.41" opacity="0.2"></polygon>
             <circle cx="446.84394" cy="187.90956" r="26" fill="#ffb8b8"></circle>
             <polygon points="424.844 187.91 403.844 222.91 434.844 240.91 450.844 203.91 424.844 187.91" fill="#ffb8b8"></polygon>
             <path d="M561.984,352.20478l-27-11s-41,7-45,20-4,118-4,118-10,26,4,27c0,0-4,6,0,7s45,0,61,5,48,9,48,4v-9s7-7,3-19-9-38-9-38,30-66,27-74-39.627-32.73752-39.627-32.73752Z" transform="translate(-139.14005 -123.29522)" fill="#0E6BA8"></path>
             <polygon points="360.844 355.91 361.844 363.91 375.844 346.91 370.844 346.91 360.844 355.91" fill="#ffb8b8"></polygon>
             <path d="M561.984,352.20478l-29-7s-6-5-6-11,9-15,15-21a5.53494,5.53494,0,0,1,4.02-1.67005c5.94-.05,13.14,7.74006,13.14,7.74006l-7.99,13.32995-.36.59Z" transform="translate(-139.14005 -123.29522)" fill="#0E6BA8"></path><path d="M584.337,340.26347l17.147-5.55869s5.5,21.5-.5,22.5-39-2-39-2Z" transform="translate(-139.14005 -123.29522)" fill="#0E6BA8"></path>
             <path d="M491.984,508.20478l-13,74s-5,9-3,13,3,4,0,6-7,0-6,5a51.04342,51.04342,0,0,1,1,9l-28,96s-18,8-5,13,26,9,29,4,0-11,0-11l46-110s7-10,7-16,23-49,23-49,1,43,2,46-2,9-2,13-2,4,0,6,2,25,2,25-12,89-5,90,27-1,27-5-3-5-3-5l13-76s-1-5,1-9,2-4,2-6-1-3,0-4a4.93754,4.93754,0,0,0,1-3s-2-6-1-7,23-76,16-85S491.984,508.20478,491.984,508.20478Z" transform="translate(-139.14005 -123.29522)" fill="#2f2e41"></path><path d="M540.984,719.20478l-7,16s-16,18-4,22,16,3,16,3,5,1,5,3,40,17,43,4-31-37-31-37v-12Z" transform="translate(-139.14005 -123.29522)" fill="#2f2e41"></path>
             <path d="M463.84928,726.61089l1.51424,17.39847s9.40163,22.17227-3.24739,22.12362-16.119-2.2756-16.119-2.2756-5.05717-.65191-5.69692,1.243S396.964,768.41226,398.28,755.13566s41.20659-25.13994,41.20659-25.13994L443.325,718.6262Z" transform="translate(-139.14005 -123.29522)" fill="#2f2e41"></path>
             <path d="M560.66011,318.32235c1.606-.10777,2.67686-1.85837,3.12129-3.5239s.55756-3.49031,1.46479-4.92153c2.486-3.92181,8.95008-2.33769,
             11.57509-6.153,1.61443-2.34646,1.27653-6.16723,3.60711-7.66021,1.47173-.9428,3.34776-.45722,4.96944.13509a54.30716,54.30716,0,0,1,
             17.11591,10.19386l2.08805-1.70011,2.6083,5.21428c1.01118-1.21946,2.96144-.274,3.81,1.08163s1.2604,3.0882,2.47038,4.0756c1.92859,
             1.5738,4.94138.24083,6.10956-2.0413s.97537-5.072.57046-7.6412a54.73664,54.73664,0,0,0-6.34849-18.32183l2.38634-1.43177-3.08517-.44062,
             1.1807-2.67875-3.23175-.03778,1.27614-2.28985c-4.34441,1.49085-8.8338-1.23972-12.98317-3.27543-6.94067-3.40513-14.74842-5.03925-22.28433-3.77426A28.16811,28.16811,0,0,0,558.02727,285.508c-3.28584,5.166-5.18305,12.66746-3.54049,18.854C555.97979,309.98536,562.49815,310.86064,560.66011,318.32235Z" transform="translate(-139.14005 -123.29522)" fill="#2f2e41"></path>
             <path d="M495.984,357.20478s-6-1-10,7-34,72-19,92,29,26,29,26l3,1,15-16-5-7s0-7-4-8-4,2-5-2,4-1-1-5-1-6-1-6Z" transform="translate(-139.14005 -123.29522)" fill="#0E6BA8"></path><polygon points="462.844 367.41 461.844 375.41 447.844 358.41 452.844 358.41 462.844 367.41" fill="#ffb8b8"></polygon><path d="M600.484,378.70478s14-7,18,1,31.5,68,16.5,88-29,26-29,26l-3,1-15-16,5-7s0-7,4-8,4,2,5-2-4-1,1-5,1-6,1-6Z" transform="translate(-139.14005 -123.29522)"
              fill="#0E6BA8"></path><polygon points="366.344 273.41 355.344 317.41 368.344 333.41 362.344 313.41 366.344 273.41" opacity="0.2"></polygon><path d="M559.144,319.27479l-7.99,13.32995c-5.02-1.74-5.44-13.38995-5.15-21.07C551.944,311.48475,559.144,319.27479,559.144,319.27479Z" transform="translate(-139.14005 -123.29522)" opacity="0.2"></path>
              <path d="M389.24816,738.971c.17358,17.79415-10.34427,24.10956-23.39225,24.23685q-.45462.00443-.905-.00133-.90726-.01071-1.796-.06514c-11.78438-.71893-20.9982-7.1609-21.15964-23.70942-.16706-17.12566,21.50989-38.95143,23.13581-40.56545l.00287-.00148c.06177-.06151.09339-.09227.09339-.09227S389.07459,721.17826,389.24816,738.971Z" transform="translate(-139.14005 -123.29522)" fill="#d0cde1"></path><path d="M355.2587,653.138c.12253,12.56057-7.30184,17.01851-16.51218,17.10836q-.32091.00314-.63879-.00094-.64042-.00756-1.2678-.046c-8.31838-.50748-14.82226-5.05475-14.93621-16.73606-.11793-12.0887,15.18345-27.49513,16.33116-28.63444l.002-.001c.0436-.04342.06592-.06513.06592-.06513S355.13618,640.5784,355.2587,653.138Z" transform="translate(-139.14005 -123.29522)" fill="#d0cde1"></path><ellipse cx="199.34394" cy="545.18425" rx="60" ry="4.23529" fill="#d0cde1"></ellipse><rect x="524.96798" y="279.81069" width="396.75193" height="202" fill="#00072D"></rect>
              <rect x="596.94506" y="347.82884" width="40.17978" height="3.34831" fill="#A6E1FA"></rect><rect x="650.5181" y="347.82884" width="40.17978" height="3.34831" fill="#A6E1FA"></rect><rect x="728.36641" y="378.80075" width="40.17978" height="3.34831" fill="#A6E1FA"></rect><rect x="782.77653" y="378.80075" width="40.17978" height="3.34831" fill="#A6E1FA"></rect><rect x="704.92821" y="347.82884" width="118.02809" height="3.34831" fill="#A6E1FA"></rect><rect x="596.94506" y="378.80075" width="118.02809" height="3.34831" fill="#A6E1FA"></rect><rect x="596.94506" y="409.77266" width="118.02809" height="3.34831" fill="#A6E1FA"></rect><rect x="740.92259" y="409.77266" width="82.03371" height="3.34831" fill="#A6E1FA"></rect><polygon points="585.652 361.964 571.516 347.829 585.652 333.693 588.48 336.521 577.172 347.829 588.48 359.136 585.652 361.964" fill="#A6E1FA"></polygon>
              <polygon points="861.036 427.257 858.208 424.429 869.516 413.12 858.208 401.813 861.036 398.985 875.172 413.12 861.036 427.257" fill="#A6E1FA"></polygon><rect x="968.59125" y="533.99771" width="28.86361" height="4.00006" transform="translate(45.81388 1198.01366) rotate(-73.13998)" fill="#A6E1FA"></rect><path d="M231.95115,674.97664l74.0679-110.14639-73.91642,121.996.15457,12.39424q-8.11088.06185-16.06418-.27013l3.6736-159.31973-.10065-1.22909.13556-.23748.35161-15.05475L139.14005,405.34256l81.01738,106.49915.28751,3.1821,2.77474-120.37228L153.15983,272.55438l70.25938,100.95121-.73336-249.38034.00157-.83.02384.81631L227.362,320.65679,291.21318,240.82,227.571,337.58873l1.39359,107.67021,58.75622-105.082L229.18056,461.0883l.77576,59.87006,85.4474-146.378L230.21608,541.84447Z"
              transform="translate(-139.14005 -123.29522)" fill="#d0cde1"></path></svg>
               </div>
             
               </Fade>
              </Box>
            
          </Grid>
        
          
        
          </Grid>
          
         
        </div>
    )
}

export default Header;
