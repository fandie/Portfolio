/* Reset some default styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  min-height: 100vh;
    background: url(assets/image/index/stary\ night_none.jpg);
    background-size: cover;
    background-position: center;
    animation: loopBackground 30s linear infinite;
}
/*Navbar*/
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.3rem 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}

.header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  backdrop-filter: blur(50px);
  z-index: -1;
}

.header::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, .4), transparent);
  transition: .5s;
}

.header:hover::after {
  left: 100%;
}


.logo {
  font-size: 2rem;
  background: yellowgreen;
  text-shadow: 0 0 10px #fff;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  text-decoration: none;
  font-weight: 700;
  opacity: 1;
  animation: slideTop 1s ease forwards;
}

.navbar {
  animation: slideTop 1s ease forwards;
}

.navbar a {
  position: relative;
  font-size: 1.15rem;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  margin-left: 2.5rem;
  text-shadow:  0 0 10px #000000;
}

.navbar a.active::before {
  content: '';
  bottom: -6px;
  position: absolute;
  left: 0;
  width: 100%;
  height: .2rem;
  background: #fff;
}

#check {
  display: none;
}

.icons {
  position: absolute;
  right: 5%;
  font-size: 2.8rem;
  color: #fff;
  cursor: pointer;
  display: none;
}

/*------------------------------------------------------------------------------------Home Section---------------------------------------------------------------------------------------------*/
main {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.Home {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-left: 10%;
  margin-right: 10%;
}

.home-content {
  max-width: 600px;
  width: 100%; /* Mengatur lebar maksimal pada home-content */
  color: #fff;
  opacity: 0;
  transform: translateX(20px);
  animation: fadeIn 1s ease forwards;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  padding: 0 5px;
}


.home-content h1,
.home-content span,
.home-content p,
.home-content .btn {
  animation: fadeIn 1s ease forwards;
}

.home-content h1 {
  font-size: 50px;
  font-weight: 700;
}

.home-content span {
  font-size: 36px;
  font-weight: 700;
  color: yellowgreen;
}

.home-content p {
  font-size: 20px;
  margin: 20px 0 40px;
}

.home-content p a {
  color: yellowgreen;
}

.home-content .btn {
  display: inline-block;
  background: var(--main-color);
  color: yellowgreen;
  font-size: 36px;
  letter-spacing: .1rem;
  font-weight: 600;
  transition: .5s ease;
}

.home-content .btn:hover {
  color: var(--main-color);
  border-color: transparent;
  text-shadow:  0 0 20px yellowgreen;
}

.socmed {
  display: flex;
  gap: 20px; /* Add gap between icons */
  max-width: 100%; /* Adjust the max-width as needed (40px width + 20px gap)*3 */
  margin-top: 5%;
  position: relative;
}

.socmed a {
  box-sizing: border-box;
  position: relative;
  display: flex;
  width: 40px;
  height: 40px;
  background: yellowgreen;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-decoration: none;
  z-index: 1;
  transition: .5s ease;
  padding: 10px;
}

.socmed a:nth-child(1) {
  margin-right: 10px;
  opacity: 0;
  animation: slideleft 1s ease forwards;
  animation-delay: .1s;
}
.socmed a:nth-child(2) {
  margin-right: 10px;
  opacity: 1;
}
.socmed a:nth-child(3) {
  margin-right: 10px;
  opacity: 0;
  animation: slideRight 1s ease forwards;
  animation-delay: .1s;
}

.socmed a::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: yellowgreen;
  z-index: -1;
  transition: .5s ease;
}

.socmed a:hover::before {
  filter: blur(50px);
}

.socmed a::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000000;
  transform: scale(.88);
  z-index: -1;
  transition: .5s ease;
}

.socmed a:hover::after {
  transform: scale(0);
}

.image {
  width: 35%;
  border-radius: 10px;
  opacity: 0;
  animation: zoomin 1s ease forwards, floatImage 4s ease-in-out infinite;
  filter: drop-shadow(10px 0px 10px yellowgreen);
}

.land {
  position:relative;
  width: 100%;
  margin-top: -10%;
  margin-bottom: -5;
}

/*-----------------------------------------------------------------------------------------About-----------------------------------------------------------------------------------------------*/

.About {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 60px;
  background-color: #000000;
}

.About .heading {
  font-size: 50px;
  margin-bottom: 20px;
  text-align: center;
  color: #fff;
  margin-top: 12%;
  animation: slideTop 1s ease forwards;
}

span {
  color: yellowgreen;
}

.about-img {
  width: 20%;
  height: 20%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-img img {
  width: 60%;
  border-radius: 50%;
  border: 3.2px solid yellowgreen;
  box-shadow: 0 0 20px #fff;
  animation: slideTop 1s ease forwards;
}

.about-content {
  text-align: center;
  animation: slideRight 1s ease forwards;
}

.about-content p {
  font-size: 25px;
  margin: 32px 0 48px;
  color: #fff;
  margin-left: 2%;
  margin-right: 2%;
}

.accordion-item {
  border: 2px solid #ddd;
  margin-bottom: 5px;
  width: 100%;
}

.accordion-button {
  width: 100%;
  text-align: left;
  padding: 10px;
  border: none;
  outline: none;
  background-color: #f8f9fa;
  position: relative;
  font-size: 20px;
}

.accordion-button .bx {
  float: right;
  display: block;
  font-size: 30px;
  cursor: pointer;
}

h3 {
  margin-left: 25px;
  display: inline;
}

.accordion-content {
  color: #fff;
  margin-top: 20px;
  background-color: #ddd;
}

.card-group {
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  animation: slideTop 1s ease forwards;
}

.card {
  align-items: center;
  width: 18rem;
  height: auto;
  border: 1px solid #000000;
  border-radius: 8px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, .5);
  margin-top: 15px;
  margin-bottom: 10px;
}

.card:hover {
  transform: scale(1.06);
}

.card:hover ~ .card {
  left:50px
}

.card-img-top {
  width: 30%;
  height: auto;
  margin-top: 30px;
}

.card-body {
  padding: 20px;
  animation: slideleft 1s ease forwards;
}

.card-title {
  font-size: 30px;
  font-weight: bold;
  color: #000000;
}

.card-body p {
  font-size: 20px;
  color: #000000;
}

/* Styling Journey Tab */
#Jouney-tab {
  background-color: #f8f9fa;
  border: 2px solid #ddd;
  margin-bottom: 5px;
  width: 100%;
  text-align: left;
  padding: 10px;
  outline: none;
  position: relative;
  font-size: 20px;
}

#Jouney-tab .bx {
  float: right;
  display: block;
  font-size: 30px;
  cursor: pointer;
}

/* Styling Education and Certification Columns */
.education-column,
.certification-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: slideTop 1s ease forwards;
}

/* Styling Title in Education and Certification */
.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #007bff;
}

/* Styling Education and Certification Boxes */
.education-box,
.certification-box {
  background-color: rgba(255, 255, 255, .5);
  border: 1px solid #000000;
  border-radius: 8px;
  padding: 15px;
  overflow: hidden;
}

.education-box:hover,
.certification-box:hover {
  transform: scale(1.01);
  background-color: #f8f9fa;
}

/* Styling Education and Certification Content */
.education-content,
.certification-content {
  display: flex;
  gap: 20px;
}

/* Styling Year and Credential in Education and Certification */
.year,
.crendential {
  font-size: 16px;
  color: #000000;
  margin-top: 5px;
}

/* Styling Links in Credential */
.crendential a {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.crendential a:hover {
  text-decoration: underline;
}

/* Styling Card Content in Education and Certification */
.content {
  flex: 1;
  text-align: start;
  margin-left: 30px;
}

/* Styling Card Content Elements */
h3,
h4 {
  margin: 0;
  color: #000000;
  margin-top: 20px;
}

h4 {
  font-weight: normal;
}

/* Styling Paragraph in Card Content */
.content li {
  margin-top: 10px;
  color: #000000;
  font-size: 20px;
  text-align: start;
  margin-left: 50px;
}

.content:hover li {
  color: #000000;
}

.content p {
  font-size: 20px;
  text-align: start;
  color: #000000;
}

.content:hover p {
  color: #000000;
}

/* Styling Icon in Year */
.year i,
.crendential i {
  margin-right: 5px;
  font-size: 20px;
  color: #000000;
}

.experience-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: slideTop 1s ease forwards;
}

.experience-box {
  background-color: rgba(255, 255, 255, .5);
  border: 1px solid #000000;
  border-radius: 8px;
  padding: 15px;
  overflow: hidden;
}

.experience-box:hover {
  transform: scale(1.02);
  background-color: #f8f9fa;
}

.experience-box h3 {
  margin-bottom: 5px;
}

.experience-content {
  display: flex;
  gap: 20px;
}
/*--------------------------------------------------------------------------------------------My Project--------------------------------------------------------------------------------------------*/

#project {
  padding: 50px 0;
  background-color: #333;
}

.container-project h1 {
  color: #fff;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 30px;
  font-size: 50px;
}

.project-list {
  display: flex;
  grid-gap: 30px;
  margin-top: 50px;
}

.work {
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}

.layer {
  width: 100%;
  height: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.6), yellowgreen);
  border-radius: 10px;
  color: #fff;
  padding: 0 40px;
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 14px;
  transition: height 0.5s;
}

.layer h3 {
  color: #fff;
  font-weight: 500;
  margin-bottom: 20px;
}

.layer a {
  margin-top: 20px;
  color: #000000;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  background: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
}

.work img {
  width: 100%;
  border-radius: 10px;
  display: block;
  transition: transform 0.5s;
}

.work:hover img {
  transform: scale(1.1);
}

.work:hover .layer {
  height: 100%;
}

/*------------------------------------------------------------------------------------------Footer------------------------------------------------------------------------------------------------*/
.footer {
  position: relative;;
  color: #fff;
  background-color: #000000;
  font-weight: 1000;
  text-align: center;
  padding: 15px;
  bottom: 0;
  width: 100%;
  height: 20%;
}

/*Breakpoint*/
@media (max-width: 992px) {
  .header {
    padding: 1.3rem 5%;
  }
}

@media (max-width: 768px) {
  .icons {
    display: inline-flex;
  }

  #check:checked~.icons #menu-icon {
    display: none;
  }

  .icons #close-icon {
    display: none;
  }

  #check:checked~.icons #close-icon {
    display: block;
  }

  .navbar {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 0;
    background: rgba(0, 0, 0, .1);
    backdrop-filter: blur(50px);
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);
    overflow: hidden;
    transition: .3s ease;
  }

  #check:checked~.navbar {
    height: 17.7rem;
  }

  .navbar a {
    display: block;
    font-size: 1.1rem;
    margin: 1.5rem 0;
    text-align: center;
    transform: translateY(-50px);
    transition: .3s ease;
  }

  #check:checked~.navbar a{
    transform: translateY(0);
    opacity: 1;
  }

  .home {
    align-items: center;
  }

  .socmed {
    justify-content: center;
  }

  .home-content {
    text-align: center;
    margin-top: 40%;
  }

  .image {
    margin-top: 10%;
    width: 100%;
  }

  .land {
    position:relative;
    width: 100%;
    margin-top: 80%;
    margin-bottom: -10%;
  }

  .About {
    margin-top: 50px;
  }

  .About .heading {
    margin-top: 20%;
  }

  .about-img img {
    width: 200%;
    height: 200%;
  }
}

@keyframes slideTop {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideRight {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideleft {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes zoomin {
  0% {
    opacity: 0;
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes floatImage {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-24px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes loopBackground {
  0% {
      background-position: 100% 0;
  }
  100% {
      background-position: 0 0;
  }
}
