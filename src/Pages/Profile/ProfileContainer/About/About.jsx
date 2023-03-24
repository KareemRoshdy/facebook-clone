import React from "react";
import "./About.css";
import AboutHead from "./AboutHead";
import Work from "./Work";
import user1 from "../../image/11.jpg";
import user2 from "../../image/12.jpg";
import user4 from "../../image/friend-6.jpg";
import user5 from "../../image/15.png";
import user6 from "../../image/16.jpg";
import user7 from "../../image/17.jpg";
import user8 from "../../image/18.jpg";
const About = () => {
  return (
    <div id="about" className="hidden">
      <div className="row ">
        <div className="col-lg-12 mb-2">
          <div className="About_content">
            <AboutHead title="Work" />
            <Work
              icon="ri-briefcase-4-fill"
              job="Group Member at"
              position="JS USA"
              time="28 Aug 2022 - now"
            />
            <Work
              icon="ri-briefcase-4-fill"
              job="Web Developer at"
              position="Freelancer"
              time="4 May 2021 - now"
            />
            <Work
              icon="ri-briefcase-4-fill"
              job="Works as Team Leader in"
              position="DTU"
              time="13 Feb 2021 - now"
            />
          </div>
        </div>
        <div className="col-lg-12 mb-2">
          <div className="About_content">
            <AboutHead title="Education" />
            <Work
              icon="ri-briefcase-4-fill"
              job="Studying in"
              position="Faculty of industrial technology and energy"
              time="30 Jun 2020 - now"
            />
            <Work
              icon="ri-briefcase-4-fill"
              job="Studying in"
              position="Information Of Technology (IT)"
              time="30 Jun 2020 - now"
            />
            <Work
              icon="ri-briefcase-4-fill"
              job="Studying in"
              position="Delta Technological University"
              time="30 Jun 2020 - now"
            />
          </div>
        </div>
        <div className="col-lg-12 mb-2">
          <div className="About_content">
            <AboutHead title="Places Lived" />
            <Work
              icon="ri-building-line"
              job="Lives in"
              position="Al Qanatir Al Khayriyah, Al Qalyubiyah, Egypt"
              time="Current City"
            />
            <Work
              icon="ri-building-line"
              job="Lives in"
              position="Ashmun, Al Minufiyah, Egypt"
              time="place of birth"
            />
          </div>
        </div>
        <div className="col-lg-12 mb-2">
          <div className="About_content">
            <AboutHead title="Contact Info" />
            <Work
              icon="ri-phone-line"
              position="+123 4567 890"
              time="Phone Number"
            />
            <Work
              icon="ri-global-line"
              position="email@gmail.com"
              time="Email Address"
            />
          </div>
        </div>
        <div className="col-lg-12 mb-2">
          <div className="About_content">
            <AboutHead title="Basic Info" />
            <Work icon="ri-men-line" position="Mail" time="Gender" />
            <Work icon="ri-cake-line" position="4 Dec 2000" time="Birth Day" />
          </div>
        </div>
        <div className="col-lg-12 mb-2">
          <div className="About_content">
            <AboutHead title="Other Names" />
            <Work
              icon="ri-english-input"
              job="Nik Name"
              position="Kemo"
              time="Show at the top of the profile"
            />
          </div>
        </div>
        <div className="col-lg-12 mb-2">
          <div className="About_content">
            <AboutHead title="Relationship" />
            <Work icon="ri-hand-heart-line" position="In RelationShip" />
          </div>
        </div>
        <div className="col-lg-12 mb-2">
          <div className="About_content">
            <AboutHead title="Family Members" />
            <Work img={user1} position="Ahmed Roshdy" time="Brother" />
            <Work img={user2} position="Mohammed Roshdy" time="Brother" />
          </div>
        </div>
        <div className="col-lg-12 mb-2">
          <div className="About_content">
            <AboutHead title="Likes" link="See All" />
            <Work img={user8} position="Amir Mounir" />
            <Work img={user4} position="Animation Coding" />
          </div>
        </div>
        <div className="col-lg-12 mb-2">
          <div className="About_content">
            <AboutHead title="Following" link="See All" />
            <Work img={user6} position="Elzero Web School" />
            <Work img={user5} position="دروس اونلاين" />
            <Work icon="ri-code-s-slash-line" position="CodeCoffee" />
          </div>
        </div>
        <div className="col-lg-12 mb-2">
          <div className="About_content">
            <AboutHead title="Groups" link="See All" />
            <Work
              img={user6}
              position="Elzero Web School"
              time="419,512 Members"
            />
            <Work
              img={user7}
              position="Dev Mohammed Elrafey"
              time="100,371 Members"
            />
            <Work
              icon="ri-code-s-slash-line"
              position="Computer Since"
              time="50,210 Members"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
