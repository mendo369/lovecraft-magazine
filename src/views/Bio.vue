<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const modules = [Pagination];
</script>

<template>
  <section class="section">
    <div class="title"><h1>Vida</h1></div>
    <div class="carrousel">
      <swiper :pagination="true" :modules="modules" class="mySwiper">
        <swiper-slide>
          <div class="birth slide-item">
            <div class="text">
              <div class="title"><h3>Nacimiento</h3></div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis quia fugiat architecto maxime, doloribus qui sit
                deserunt quaerat porro voluptatum totam! Expedita optio tenetur
                aliquam corporis necessitatibus, nulla modi. Maxime! <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At id
                nulla, iusto voluptas aliquid numquam necessitatibus praesentium
                repudiandae voluptatibus repellendus dolorum reprehenderit quia
                incidunt quae nisi vel obcaecati ratione harum.
              </p>
            </div>
            <div class="img">
              <img src="../../public/images/birth.jpg" alt="" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide
          ><div class="childhood slide-item">
            <div class="text">
              <div class="title"><h3>Infancia</h3></div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis quia fugiat architecto maxime, doloribus qui sit
                deserunt quaerat porro voluptatum totam! Expedita optio tenetur
                aliquam corporis necessitatibus, nulla modi. Maxime! <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At id
                nulla, iusto voluptas aliquid numquam necessitatibus praesentium
                repudiandae voluptatibus repellendus dolorum reprehenderit quia
                incidunt quae nisi vel obcaecati ratione harum.
              </p>
            </div>

            <div class="img">
              <img src="../../public/images/childhood.jpg" alt="" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="study slide-item">
            <div class="text">
              <div class="title"><h3>Estudios</h3></div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis quia fugiat architecto maxime, doloribus qui sit
                deserunt quaerat porro voluptatum totam! Expedita optio tenetur
                aliquam corporis necessitatibus, nulla modi. Maxime! <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At id
                nulla, iusto voluptas aliquid numquam necessitatibus praesentium
                repudiandae voluptatibus repellendus dolorum reprehenderit quia
                incidunt quae nisi vel obcaecati ratione harum.
              </p>
            </div>

            <div class="img"><img src="" alt="" /></div>
          </div>
        </swiper-slide>
        <swiper-slide
          ><div class="job slide-item">
            <div class="text">
              <div class="title"><h3>Trabajo</h3></div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis quia fugiat architecto maxime, doloribus qui sit
                deserunt quaerat porro voluptatum totam! Expedita optio tenetur
                aliquam corporis necessitatibus, nulla modi. Maxime! <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At id
                nulla, iusto voluptas aliquid numquam necessitatibus praesentium
                repudiandae voluptatibus repellendus dolorum reprehenderit quia
                incidunt quae nisi vel obcaecati ratione harum.
              </p>
            </div>

            <div class="img">
              <img src="../../public/images/job.jpg" alt="" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide
          ><div class="life-place slide-item">
            <div class="text">
              <div class="title"><h3>Lugar donde vivió</h3></div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis quia fugiat architecto maxime, doloribus qui sit
                deserunt quaerat porro voluptatum totam! Expedita optio tenetur
                aliquam corporis necessitatibus, nulla modi. Maxime! <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At id
                nulla, iusto voluptas aliquid numquam necessitatibus praesentium
                repudiandae voluptatibus repellendus dolorum reprehenderit quia
                incidunt quae nisi vel obcaecati ratione harum.
              </p>
            </div>

            <div class="img">
              <img src="../../public/images/life-place.jpg" alt="" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide
          ><div class="dead slide-item">
            <div class="text">
              <div class="title"><h3>Muerte</h3></div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis quia fugiat architecto maxime, doloribus qui sit
                deserunt quaerat porro voluptatum totam! Expedita optio tenetur
                aliquam corporis necessitatibus, nulla modi. Maxime! <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At id
                nulla, iusto voluptas aliquid numquam necessitatibus praesentium
                repudiandae voluptatibus repellendus dolorum reprehenderit quia
                incidunt quae nisi vel obcaecati ratione harum.
              </p>
            </div>

            <div class="img">
              <img src="../../public/images/dead.jpg" alt="" />
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style scoped>
.section {
  display: grid;
  /* align-items: center; */
  justify-content: center;
  width: 100%;
}

.title {
  color: white;
  text-align: center;
}

.carrousel {
  width: 80vw;
  height: 400px;
  /* overflow: hidden; */
}

.slide-item {
  display: flex;
  height: 100%;
}

.slide-item .text {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.slide-item .text p {
  width: 90%;
  text-align: justify;
}

.slide-item .img {
  width: 40%;
}

.slide-item .img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mySwiper {
  width: 100%;
  height: 100%;
}

@media (max-width: 400px) {
  .carrousel {
    width: 100vw;
  }

  .slide-item .img {
    height: min-content;
    margin: auto;
  }
}
</style>
