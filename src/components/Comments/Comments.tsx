import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Comments.scss";
import { useCommentsData } from "../../Data/Data";
export default function Comments() {
  const { data: comments, isLoading, isError } = useCommentsData();

  if (isLoading) return <p>Loading...</p>;
  if (isError || !comments) return <p>Error loading comments</p>;

  return (
    <section className="Comments">
      <div className="swiper-container-wrapper">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          breakpoints={{
            0: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="comments-swiper"
        >
          {comments.map((comment) => (
            <SwiperSlide key={comment.id}>
              <div className="comment-card">
                <p className="comment-body">"{comment.body}"</p>

                <div className="comment-user">
                  <strong>{comment.user.fullName}</strong>
                  <span>@{comment.user.username}</span>
                </div>

                <div className="comment-likes">
                  ❤️ {comment.likes}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="navigation-buttons">
          <button className="custom-prev nav-btn">
            &#8592;
          </button>
          <button className="custom-next nav-btn">
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
