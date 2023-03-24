// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import user1 from "./image/friend-4.jpg";
import user2 from "./image/friend-1.jpg";
import user3 from "./image/friend-2.jpg";
import user4 from "./image/friend-3.jpg";
import user5 from "./image/friend-5.jpg";
import user6 from "./image/friend-6.jpg";
import img1 from "./image/11.jpg";
import img2 from "./image/10.jpg";
import img3 from "./image/9.jpg";
import img4 from "./image/12.jpg";
import img5 from "./image/13.jpg";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="slider"
      >
        <SwiperSlide className="story">
          <div className="storyBox">
            <div className="myImg"></div>
            <div className="user">
              <div className="icon">
                <i className="ri-add-line"></i>
              </div>
              <div className="userName">
                <h6>Add Story</h6>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="story">
          <div className="storyBox">
            <div className="storyImg">
              <img className="img-fluid" src={img2} alt="story" />
            </div>
            <div className="user">
              <div className="userImg">
                <img className="img-fluid" src={user1} alt="user" />
              </div>
              <div className="userName">
                <h6>Kareem Roshdy</h6>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="story">
          <div className="storyBox">
            <div className="storyImg">
              <img className="img-fluid" src={img3} alt="story" />
            </div>
            <div className="user">
              <div className="userImg">
                <img className="img-fluid" src={user2} alt="user" />
              </div>
              <div className="userName">
                <h6>Reem Mohammed</h6>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="story">
          <div className="storyBox">
            <div className="storyImg">
              <img className="img-fluid" src={img4} alt="story" />
            </div>
            <div className="user">
              <div className="userImg">
                <img className="img-fluid" src={user3} alt="user" />
              </div>
              <div className="userName">
                <h6>Minna Ali</h6>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="story">
          <div className="storyBox">
            <div className="storyImg">
              <img className="img-fluid" src={img1} alt="story" />
            </div>
            <div className="user">
              <div className="userImg">
                <img className="img-fluid" src={user5} alt="user" />
              </div>
              <div className="userName">
                <h6>Mohammed Khaled</h6>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="story">
          <div className="storyBox">
            <div className="storyImg">
              <img className="img-fluid" src={img5} alt="story" />
            </div>
            <div className="user">
              <div className="userImg">
                <img className="img-fluid" src={user6} alt="user" />
              </div>
              <div className="userName">
                <h6>Ahmed Zizo</h6>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="story">
          <div className="storyBox">
            <div className="storyImg">
              <img className="img-fluid" src={img2} alt="story" />
            </div>
            <div className="user">
              <div className="userImg">
                <img className="img-fluid" src={user4} alt="user" />
              </div>
              <div className="userName">
                <h6>Hamza Kareem</h6>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
