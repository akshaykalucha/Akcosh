const hashtags = require('../Assets/hashtags.png')
const smartstore = require('../Assets/SmartStore.jpg')
const heartstroke = require('../Assets/HeartStroke.png')
const pathfinding = require('../Assets/Pathfinding.png')
const pygram = require('../Assets/PyGram.jpg')
const imgClassifier = require('../Assets/VisionTransformer.png')
const geometry = require('../Assets/bezier_fajk3b.png')
const imgAscii = require('../Assets/Img2Ascii.png')
const depth = require('../Assets/DepthMap.png')
const twitter = require('../Assets/twitterlogo.png')
const github = require('../Assets/githubLogo.png')
const sysdesign = require('../Assets/sysdesign.svg')
const uiux = require('../Assets/uiux.svg')
const fullstack = require('../Assets/fullstack.svg')
const seo = require('../Assets/seo.svg')
const Redispic = require('../Assets/redispubsub.jpeg')
const ProtoPic = require('../Assets/protocolbuffers.png')
const TravelPic = require('../Assets/chicagoreszd.jpg')
const GitRescue = require('../Assets/gitrescue.png')


const sideProjs = [
    {
        "img": hashtags,
        "heading": "Ai Hashtags",
        "link": "https://github.com/akshaykalucha3/React_Image_Search",
        "desc": "See trends & generate popular tweets using automatic tweet generator tool!"
    },
    {
        "img": smartstore,
        "link": "https://github.com/akshaykalucha3/PictureSkew",
        "heading": "PictureSkew - Indian Smart Store",
        "desc": "Smart Store is a project that aims towards smartifying department stores, by monitoring air conditions and customer behaviour..."
    },
    {
        "img": heartstroke,
        "link": "https://github.com/akshaykalucha3/React-HeartStroke-Prediction",
        "heading": "Reactjs Heart-Stroke Prediction",
        "desc": "AI application that can predict the survival of patients with heart failure using 12 clinical features"
    }
]
const SharedGithub = [
    {
        "img": pathfinding,
        "link": "https://github.com/akshaykalucha3/A--path-finding-using-Javascript",
        "heading": "A* Pathfinding",
        "desc": "This is my first attempt at A* pathfinding. I made this visualization..."
    },
    {
        "img": pygram,
        "link": "https://github.com/clubgamma/Instagram-Image-Video-Downloader/tree/master/akshaykalucha3",
        "heading": "PyGram - Image/Vid downloader",
        "desc": " python program which will serve the purpose to download Photos and Videos from Instagram"
    },
    {
        "img": imgClassifier,
        "link": "https://github.com/akshaykalucha3/FeaturePatch-VisionTransformation",
        "heading": "Image Classifier",
        "desc": "This repo is a gist of implementation of the Vision Transformation which was introduced in the paper"
    },
    {
        "img": github,
        "heading": "See more",
        "desc": "",
        "a": "https://www.github.com/akshaykalucha3"
    }
] 
const SharedTwitter = [
    {
        "img": geometry,
        "link": "https://twitter.com/lifeofakshy/status/1395412534169989125",
        "heading": "Geometry Blueprint",
        "desc": "A simple geometry construction program made with the Python to map various shapes & curves"
    },
    {
        "img": imgAscii,
        "link": "https://github.com/akshaykalucha3/meme2AsciiArt",
        "heading": "Image2Ascii",
        "desc": "Get your favourite meme template converted to ascii values & spam those dank meme comments"
    },
    {
        "img": depth,
        "link": "https://github.com/akshaykalucha3/FeaturePatch-VisionTransformation",
        "heading": "Depth Analyser",
        "desc": "The goal of this utility is to provide a simple way to generate depth maps (Z-Buffers) from 3D models"
    },
    {
        "img": twitter,
        "heading": "See more",
        "desc": "",
        "a": "https://www.twitter.com/lifeofakshy"
    }
]

const MyServices =[
    {
        "img": sysdesign,
        "heading": "Design System",
        "desc": "Colors, components, typography etc... all in one place, documented and easy to access as a npm module."
    },
    {
        "img": uiux,
        "heading": "UI/UX Design",
        "desc": "Good looking user interfaces with a good user experience for an affordable price."
    },
    {
        "img": fullstack,
        "heading": "Full Stack Development",
        "desc": "Get your mvp up & running in less than a week built with the MERN or JAM stack, ask your early users for feedback before scaling it."
    },
    {
        "img": seo,
        "heading": "SEO & growth",
        "desc": "Your ranking on search engines will improve and growth hacking strategies will be tested and reported to keep you ahead of your competitors."
    }
]

const MyArticles = [
    {
        "img": ProtoPic,
        "link": "Why-you-should-move-to-the-new-Protocol-Buffers-instead-of-old-JSON",
        "heading": "Why you should move to the new Protocol Buffers instead of old JSON",
        "desc": "APIs are backbone of modern applications. APIs are powering the backend for web client and mobile client applications, and also used for communicate between applications regardless of technology and platform.",
        "tags": ["tech", "dev", "stack"],
        "date": "Jul 8, 2020",
        "time": "5 min"
    },
    {
        "img": Redispic,
        "link": "Redis-PubSub-&-the-messaging-system",
        "heading": "Redis Pub/Sub & the messaging system",
        "desc": "Redis Pub/Sub implements the messaging system where the senders (publishers) sends the messages while the receivers (subscribers) receive them. The link by which the messages are transferred is called channel.",
        "tags": ["dev"],
        "date": "Oct 22, 2019",
        "time": "2 min"
    },
    {
        "img": GitRescue,
        "link": "Git-A-Rescue-Dictionary",
        "heading": "Git, A Rescue Dictionary",
        "desc": "When you are working on a project by yourself or as part of a team, there might be instances when you want to undo a commit. The git reset command is one of the tools known to be a real lifesaver;",
        "tags": ["tech", "dev", "stack"],
        "date": "Apr 15, 2020",
        "time": "4 min"
    }
]

const SoftwareTable =[
    {
        title: "A* Path Finding Algorithm",
        description: "an informed search algorithm, best-first search, meaning that it is formulated in terms of weighted graphs",
        language: "JavaSvript",
        date: "2019-06-25",
        stars: 2,
        updates: 14
        },
        {
        title: "Lane Path finding visualisaton",
        description: "an artificial intelligence scrip that uses OpenCV to throw ray of dots projecting directions for a running car",
        language: "Python",
        date: "2019-08-22",
        stars: 1,
        updates: 3
        },
        {
        title: "Django Blog",
        description: "Blog website framed in django with summernote installed having secure log-in, log-out backend",
        language: "Python",
        date: "2019-06-10",
        stars: 3,
        updates: 5
        },
        {
        title: "Face Filters",
        description: "The objective of the program given is to detect object on face in real time and to keep tracking of the same object",
        language: "Python",
        date: "2019-06-20",
        stars: 1,
        updates: 2
        },
        {
        title: "Watermark Filter",
        description: "this is a simple example of how to detect corner in Python. video detected by training the classifier on required objects.",
        language: "Python",
        date: "2019-07-15",
        stars: 2,
        updates: 3
        },
        {
        title: "Budget Calculator",
        description: "A budget Calculator built in javascript that can calculate monthly average percentage of your savings and expenses, styled beautifully it gives awesome experience.",
        language: "JavaSvript",
        date: "2019-07-15",
        stars: 2,
        updates: 9
        },
        {
        title: "Portfolio Website",
        description: "My Previous Portfolio Website built on HTML, CSS, Javascript",
        language: "JavaSvript",
        date: "2018-12-28",
        stars: 0,
        updates: 19
        },
        {
        title: "Django-Blog",
        description: "A Blog web app where user can create account, log in and out and use CRUD methods to publish a blog",
        language: "Python",
        date: "2019-08-22",
        stars: 2,
        updates: 12
        },
        {
        title: "Face Detection AI",
        description: "A python script using OpenCV to forecast a rectangle around your face and detect your name using the data given",
        language: "Python",
        date: "2019-06-18",
        stars: 2,
        updates: 4
        },
        {
        title: "Javascript Calculator",
        description: "Calculator webapp built on Javascript that can perform basic airthmetic algorithms",
        language: "JavaSvript",
        date: "2019-05-03",
        stars: 1,
        updates: 0
        }
]

const webArchitecture = [
    {
        "heading": "Front-End",
        "sub": "HTML/CSS + JavaScript",
        "list": ["Single page Web apps written in create-react-app", "Elements in table injected using Django template tags having", "Multi-page, server rendered apps written in Next js + React"]
    },
    {
        "heading": "Thin Backend Servers (non CPU-bound)",
        "sub": "Python + Django",
        "list": ["Django app for each service.", "Single thread event-driven architecture, good for simple services that are mostly waiting on I/O."]
    },
    {
        "heading": "Database",
        "sub": "Sqlite",
        "list": ["Storage for JWT Identity, Hangfire, and Application Servers.", "Low level/embedded IoT programming", "Single instance backed by persistent volume (would like to deploy a cluster someday)."]
    },
    {
        "heading": "Deployment",
        "sub": "Pythonanywhere",
        "list": ["In-browser interactive consoles with code running on hosted servers, shareable between multiple users.", "WSGI-based web hosting", "Many popular Python modules pre-installed"]
    }
]


const SoftwareServices = [
    {
        "Name": "jwtidentity",
        "Endpoint": "Akshaykalucha.io/api/auth",
        "Language": "Python",
        "Description": "JWT Authentication Server used to secure all other services (hangfire, mailer)"
    },
    {
        "Name": "mysql",
        "Endpoint": "private only accessible within cluster",
        "Language": "MySql",
        "Description": "Database for jwtidentity, hangfire, hangfire_github, hangfire_youtube"
    },
    {
        "Name": "Django+Node",
        "Endpoint": "Akshaykalucha.io/api/hangfire",
        "Language": "JavaScript",
        "Description": "Background processing server"
    },
    {
        "Name": "front",
        "Endpoint": "Akshaykalucha.io/",
        "Language": "Nextjs + React",
        "Description": "What you see"
    },
    {
        "Name": "mailer",
        "Endpoint": "Akshaykalucha.io/api/mailer",
        "Language": "Python",
        "Description": "Mailing service secured by JWT"
    }
]

const ServicesHeading = ["Name", "Endpoint", "Language", "Description"]

const Tableheading = ["Title", "Description", "Language", "Date", "Stars", "Updates"]


const SharedList = [SharedGithub, SharedTwitter]

module.exports = {webArchitecture, ServicesHeading, SoftwareServices, sideProjs, SharedList, MyServices, MyArticles, SoftwareTable, Tableheading}


/* <div class="CardBody__Wrapper-n3ytwk-0 dbyeKN">
<div className="imgWrapper" style={{ position:"relative",overflow:"hidden" }}>
    <div aria-hidden="true" style={{ width:"100%",paddingBottom: "75%" }}></div>
        <picture>
            <img className="mainimg" sizes="(max-width: 630px) 100vw, 630px" src={data.img} alt="Uboux Logo" loading="lazy" style={{ position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center center",opacity:"1",transition:"opacity 500ms ease 0s" }}></img>
        </picture>
</div>
</div> */

/* <div class="cardImg">
<div className="imgWrapper" style={{ position:"relative",overflow:"hidden" }}>
    <div aria-hidden="true" style={{ width:"100%",paddingBottom: "75%" }}></div>
        <picture>
            <img className="mainimg" sizes="(max-width: 630px) 100vw, 630px" src={data.img} alt="Uboux Logo" loading="lazy" style={{ position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center center",opacity:"1",transition:"opacity 500ms ease 0s" }}></img>
        </picture>
</div>
</div> */