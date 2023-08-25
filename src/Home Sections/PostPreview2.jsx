import React from 'react'
import { ImCross } from 'react-icons/im';

const PostPreview2 = () => {
  return (
    <section className="mt-20 lg:flex lg:flex-col mx-4 lg:mx-[3.3rem]">
      <div>
        <h1 className="font-bold text-5xl lg:text-[7.50rem] lg:w-[60%]">
          Enjoy the sea as a lifestyle
        </h1>
      </div>
      <div className="lg:flex">
        <div className="mt-10 mb-10 lg:w-full">
          <img
            src="https://nauticaereso.com/wp-content/uploads/2023/01/img-post-02.jpg"
            alt="image"
          />
        </div>
        <div className="mt-4 space-y-3 lg:mt-40 lg:text-left lg:w-[50%] lg:mr-40 lg:flex lg:flex-col lg:justify-start lg:space-y-7">
          <ImCross className="hidden lg:block mb-20 ml-20 text-3xl text-red-500" />
          <h1 className="font-bold text-2xl lg:text-3xl mt-0 mb-0 uppercase lg:normal-case">
            Water sports
          </h1>
          <p className="text-xl lg:text-2xl leading-6 lg:leading-5 lg:font-light font-semibold">
            You can come to Ereso to buy a diving mask, a paddle surf board, a
            technical jacket to go sailing all year round, or a fliteboard to
            fly over the sea.
          </p>
          <p className="text-xl lg:text-2xl leading-6 lg:leading-5 lg:font-light font-semibold">
            We are specialists in brands and accessories for the practice of
            water sports.
          </p>
          <p className="text-xl lg:text-2xl leading-6 lg:leading-5 lg:font-light font-semibold">
            Whether you live in Ibiza or you are just passing through, come to
            Náutica Ereso and equip yourself with specialists.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PostPreview2