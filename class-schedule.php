<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <!-- <meta
      name="keywords"
      content="web design, web development, web agency, seo, branding, marketing, illustration"
    />
    <meta
      name="description"
      content="Duo Studio is a creative web agency dedicated to functional + visual web solutions"
    />
    <meta name="url" content="https://duo-studio.co" />
    <meta property="og:type" content="business.business" />
    <meta property="og:title" content="Duo Studio" />
    <meta property="og:url" content="https://duo-studio.co" />
    <meta
      property="og:description"
      content="Duo Studio is a creative web agency dedicated to functional + visual web solutions"
    />
    <meta
      property="og:image"
      content="https://duo-studio.co/assets/DuoStudio_Meta.jpg"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="duo-studio.co" />
    <meta property="twitter:url" content="https://duo-studio.co" />
    <meta name="twitter:title" content="Duo Studio" />
    <meta
      name="twitter:description"
      content="Duo Studio is a creative web agency dedicated to functional + visual web solutions"
    />
    <meta
      name="twitter:image"
      content="https://duo-studio.co/assets/DuoStudio_Meta.jpg"
    />
  -->
  <link
  rel="shortcut icon"
  type="image/png"
  href="assets/FitnessClub_Favicon.png"
  />

  <link rel="stylesheet" href="style.css" />

  <script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"
  ></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/ScrollTrigger.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script>
  <script src="https://unpkg.com/@barba/core"></script>

  <title>The Fitness Club | Class Schedule</title>
  <script>
      //   window.dataLayer = window.dataLayer || [];
      //   function gtag() {
      //     dataLayer.push(arguments);
      //   }
      //   gtag("js", new Date());

      //   gtag("config", "UA-182193324-1");
    </script>
    <link rel="stylesheet" href="./calendarnote.css">
  </head>

  <body class="class-schedule">
    <nav>
      <a href="" class="logo"
      ><img src="assets/FitnessClub_Horizontal_Red_White.svg" alt="logo"
      /></a>
      <ul>
        <li class="active">
          <a href="class-schedule.html">Class Schedule</a>
        </li>
        <li><a href="visit-us.html">Visit Us</a></li>
        <li><a href="tel:+13016800505">Call Us: (301) 680-0505</a></li>
        <li><a class="btn" href="join">Join Online</a></li>
      </ul>
      <div class="menu-toggle">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </nav>

    <section id="banner" class="schedule">
      <header>
        <h1>Class Schedule</h1>
        <h3>
          No need to reserve a class. Bring your water and get your sweat on!
        </h3>
      </header>

      <aside class="days">
        <div class="arrows">
          <div class="arrow prev">
            <img src="assets/icon-arrow-left.svg" alt="arrow-left" />
          </div>
          <div class="arrow next">
            <img src="assets/icon-arrow-right.svg" alt="arrow-right" />
          </div>
        </div>
        <div class="container">
          <div class="week-wrapper">
            <div class="day">
              <h2 class="num">16</h2>
              <p class="name">Sunday</p>
            </div>

            <div class="day">
              <h2 class="num">17</h2>
              <p class="name">Monday</p>
            </div>

            <div class="day">
              <h2 class="num">18</h2>
              <p class="name">Tuesday</p>
            </div>

            <div class="day">
              <h2 class="num">19</h2>
              <p class="name">Wednesday</p>
            </div>

            <div class="day">
              <h2 class="num">20</h2>
              <p class="name">Thursday</p>
            </div>

            <div class="day">
              <h2 class="num">21</h2>
              <p class="name">Friday</p>
            </div>

            <div class="day">
              <h2 class="num">22</h2>
              <p class="name">Saturday</p>
            </div>
          </div>
        </div>
      </aside>
    </section>
    <section class="reponsive-date">
      <aside class="days">
        <!-- <div class="arrows">
          <div class="arrow prev">
            <img src="assets/icon-arrow-left.svg" alt="arrow-left">
          </div>
          <div class="arrow next">
            <img src="assets/icon-arrow-right.svg" alt="arrow-right">
          </div>
        </div> -->
        <div class="container">
          <div class="week-wrapper">
            <div class="day">
              <h2 class="num">16</h2>
              <p class="name">Sunday</p>
            </div>

            <div class="day">
              <h2 class="num">17</h2>
              <p class="name">Monday</p>
            </div>

            <div class="day">
              <h2 class="num">18</h2>
              <p class="name">Tuesday</p>
            </div>

            <div class="day">
              <h2 class="num">19</h2>
              <p class="name">Wednesday</p>
            </div>

            <div class="day">
              <h2 class="num">20</h2>
              <p class="name">Thursday</p>
            </div>

            <div class="day">
              <h2 class="num">21</h2>
              <p class="name">Friday</p>
            </div>

            <div class="day">
              <h2 class="num">22</h2>
              <p class="name">Saturday</p>
            </div>
          </div>
        </div>
      </aside>
    </section>
    <section id="calendar">
      <div class="col style-4">
        <div class="note note-1">
          <h2>Tabata</h2>
          <div>
            <span class="name">Angel</span>
            <br>
            <span class="oclock">6:00-6:45 AM</span>
          </div>
        </div>
        <div class="note note-2">
          <h2>Zumba</h2>
          <div>
            <span class="name">Robert</span>
            <br>
            <span class="oclock">10:00-11:00 AM</span>
          </div>
        </div>
        <div class="note note-3"></div>
        <div class="note note-4"></div>
        <div class="note note-5"></div>
        <div class="note note-6">
          <h2>Body Pump</h2>
          <div>
            <span class="name">Crystal</span>
            <br>
            <span class="oclock">6:00-6:45 PM</span>
          </div>
        </div>
        <div class="note note-7"></div>
        <div class="note note-8"></div>
        <div class="note note-9"></div>
        <div class="note note-10"></div>
        <div class="note note-11"></div>
        <div class="note note-12"></div>
      </div>
      <div class="col style-4">
        <div class="note note-1">
        </div>
        <div class="note note-2">
          <h2>Yoga</h2>
          <div>
            <span class="name">Cassandra</span>
            <br>
            <span class="oclock">10:00-11:00 AM</span>
          </div>
        </div>
        <div class="note note-3">
          <h2>Pilates</h2>
          <div>
            <span class="name">Crystal</span>
            <br>
            <span class="oclock">1:00-1:45 PM</span>
          </div>
        </div>
        <div class="note note-4"></div>
        <div class="note note-5">
          <h2>Zumba</h2>
          <div>
            <span class="name">Raquita</span>
            <br>
            <span class="oclock">5:00-6:15 PM </span>
          </div>
        </div>
        <div class="note note-6">
          <h2>Cycling</h2>
          <div>
            <span class="name">Amanda</span>
            <br>
            <span class="oclock">6:00-6:45 PM</span>
          </div>
        </div>
        <div class="note note-7"></div>
        <div class="note note-8"></div>
        <div class="note note-9"></div>
        <div class="note note-10"></div>
        <div class="note note-11"></div>
        <div class="note note-12"></div>
      </div>
      <div class="col style-4">
        <div class="note note-1">
          <h2>Tabata</h2>
          <div>
            <span class="name">Angel</span>
            <br>
            <span class="oclock">6:00-6:45 AM</span>
          </div>
        </div>
        <div class="note note-2"></div>
        <div class="note note-3"></div>
        <div class="note note-4">
          <h2>Body Attack</h2>
          <div>
            <span class="name">Robert</span>
            <br>
            <span class="oclock">3:00-3:45 PM</span>
          </div>
        </div>
        <div class="note note-5"></div>
        <div class="note note-6">
          <h2>Body Pump</h2>
          <div>
            <span class="name">Crystal</span>
            <br>
            <span class="oclock">6:00-6:45 PM</span>
          </div>
        </div>
        <div class="note note-7">
          <h2>Zumba</h2>
          <div>
            <span class="name">Yessika</span>
            <br>
            <span class="oclock">8:00-9:00 PM</span>
          </div>
        </div>
        <div class="note note-8"></div>
        <div class="note note-9"></div>
        <div class="note note-10"></div>
        <div class="note note-11"></div>
        <div class="note note-12"></div>
      </div>
      <div class="col style-4">
        <div class="note note-1"></div>
        <div class="note note-2">
          <h2>Yoga</h2>
          <div>
            <span class="name">Cassandra</span>
            <br>
            <span class="oclock">10:00-11:00 AM</span>
          </div>
        </div>
        <div class="note note-3">
          <h2>Pilates</h2>
          <div>
            <span class="name">Crystal</span>
            <br>
            <span class="oclock">1:00-1:45 PM</span>
          </div>
        </div>
        <div class="note note-4"></div>
        <div class="note note-5">
          <h2>Zumba</h2>
          <div>
            <span class="name">Raquita</span>
            <br>
            <span class="oclock">5:00-6:15 PM</span>
          </div>
        </div>
        <div class="note note-6">
          <h2>Cycling</h2>
          <div>
            <span class="name">Amanda</span>
            <br>
            <span class="oclock">6:00-6:45 PM</span>
          </div>
          <a href="#" class="note-btn">Learn More&#8594;</a>
        </div>
        <div class="note note-7"></div>
        <div class="note note-8"></div>
        <div class="note note-9"></div>
        <div class="note note-10"></div>
        <div class="note note-11"></div>
        <div class="note note-12"></div>
      </div>
      <div class="col style-4">
        <div class="note note-1">
          <h2>Tabata</h2>
          <div>
            <span class="name">Angel</span>
            <br>
            <span class="oclock">6:00-6:45 AM</span>
          </div>
        </div>
        <div class="note note-2">
        </div>
        <div class="note note-3"></div>
        <div class="note note-4">
          <h2>Body Attack</h2>
          <div>
            <span class="name">Robert</span>
            <br>
            <span class="oclock">3:00-3:45 PM</span>
          </div>
        </div>
        <div class="note note-5"></div>
        <div class="note note-6">
          <h2>Body Pump</h2>
          <div>
            <span class="name">Crystal</span>
            <br>
            <span class="oclock">6:00-6:45 PM</span>
          </div>
        </div>
        <div class="note note-7">
          <h2>Zumba</h2>
          <div>
            <span class="name">Yessika</span>
            <br>
            <span class="oclock">8:00-9:00 PM</span>
          </div>
        </div>
        <div class="note note-8"></div>
        <div class="note note-9"></div>
        <div class="note note-10"></div>
        <div class="note note-11"></div>
        <div class="note note-12"></div>
      </div>
      <div class="col style-4">
        <div class="note note-1">
          <h2>Tabata</h2>
          <div>
            <span class="name">Angel</span>
            <br>
            <span class="oclock">6:00-6:45 AM</span>
          </div>
        </div>
        <div class="note note-2">
          <h2>Zumba</h2>
          <div>
            <span class="name">Robert</span>
            <br>
            <span class="oclock">10:00-11:00 AM</span>
          </div>
        </div>
        <div class="note note-3"></div>
        <div class="note note-4">
          <h2>Cycling</h2>
          <div>
            <span class="name">Amanda</span>
            <br>
            <span class="oclock">3:00-3:45 PM</span>
          </div>
        </div>
        <div class="note note-5"></div>
        <div class="note note-6"></div>
        <div class="note note-7"></div>
        <div class="note note-8"></div>
        <div class="note note-9"></div>
        <div class="note note-10"></div>
        <div class="note note-11"></div>
        <div class="note note-12"></div>
      </div>
      <div class="col style-4">
        <div class="note note-1">
          <h2>Tabata</h2>
          <div>
            <span class="name">Angel</span>
            <br>
            <span class="oclock">6:00-6:45 AM</span>
          </div>
        </div>
        <div class="note note-2">
          <h2>Zumba</h2>
          <div>
            <span class="name">Robert</span>
            <br>
            <span class="oclock">10:00-11:00 AM</span>
          </div>
        </div>
        <div class="note note-3"></div>
        <div class="note note-4"></div>
        <div class="note note-5"></div>
        <div class="note note-6">
          <h2>Body Pump</h2>
          <div>
            <span class="name">Crystal</span>
            <br>
            <span class="oclock">6:00-6:45 PM</span>
          </div>
        </div>
        <div class="note note-7"></div>
        <div class="note note-8"></div>
        <div class="note note-9"></div>
        <div class="note note-10"></div>
        <div class="note note-11"></div>
        <div class="note note-12"></div>
      </div>
    </section>
    <footer>
      <div class="cta">
        <a class="col" href="join">
          <h6>Get a Membership</h6>
          <h2>Join Online</h2>
        </a>
        <a class="col" href="schedule">
          <h6>View the Homepage</h6>
          <h2>Go Back</h2>
        </a>
      </div>

      <div class="wrapper">
        <div class="col">
          <a href="" class="logo"
          ><img
          src="assets/FitnessClub_Horizontal_Red_White.svg"
          alt="TheFitnessClub__logo"
          /></a>
          <h5>
            The gym you won’t<br />
            want to break up with.
          </h5>
        </div>

        <ul class="col">
          <h6>Contact Us</h6>
          <li><a href="tel+13016800505">(301) 680-0505</a></li>
          <li>
            <a href="mailto:contact@thefitnessclub.net"
            >contact@thefitnessclub.net</a
            >
          </li>
        </ul>

        <ul class="col">
          <h6>Find Us</h6>
          <li>2144 Industrial Pkwy,</li>
          <li>Silver Spring, MD 20904</li>
        </ul>

        <ul class="col">
          <h6>Follow Us</h6>
          <li>
            <a href="https://www.instagram.com/thefitnessclubmd/">Instagram</a>
          </li>
          <li>
            <a href="https://www.instagram.com/thefitnessclubmd/">Facebook</a>
          </li>
        </ul>
      </div>

      <small> The Fitness Club | All Rights Reserved 2021 </small>
    </footer>
    <script src="scripts/main.js"></script>
    <script src="scripts/calendar.js"></script>
  </body>
  </html>
