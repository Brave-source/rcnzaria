import React from "react";

const AboutUsSection = () => {
  return (
    <section className="relative ">
      <div className="w-full h-full bg-orange-900/70 absolute top-0 -z-10 ">
        <img
          className=" mix-blend-overlay w-full h-full object-cover"
          src="https://media.istockphoto.com/id/1339453124/photo/hands-raising-concert-hands-raising-for-religion-background.jpg?b=1&s=170667a&w=0&k=20&c=2MxQ7hkrzICH3xXO9XT-cQ8CPLgWbDtButI6akkigUg="
          alt=""
        />
      </div>
      <div className="wrapper text-center px-4 py-8">
        <div className="flex gap-2 flex-col">
          <h1 className="text-orange-200  text-2xl md:text-3xl uppercase tracking-widest mt-4 font-bold">
            About us
          </h1>
          <hr className="w-24 mx-auto mb-4" />
          <h2 className="text-orange-100 text-4xl md:text-5xl tracking-wider font-bold mb-5">
            We are a Church That Believes in Jesus.
          </h2>
          <p className="text-gray-100 text-lg md:text-xl sm:w-2/3 sm:mx-auto">
            Welcome to Remnant Christian Network, a church where we believe and
            preach the Good News of Jesus Christ! <br /> At Remnant Christian
            Network, we are committed to sharing the love and message of Jesus
            with all who seek it. We believe that Jesus is the Son of God, who
            came to earth to save us from our sins through his death on the
            cross and resurrection. <br /> We believe that through faith in
            Jesus, we can have eternal life and a personal relationship with
            God. Our church is a place of fellowship and community, where we
            gather together to worship God, learn from his Word, and grow in our
            faith. We believe that the Bible is the inspired and authoritative
            Word of God, and we seek to study it and apply its teachings to our
            lives. <br /> If you are looking for a church that is passionate
            about Jesus and dedicated to spreading his message, we invite you to
            join us at Remnant Christian Network. We would love the opportunity
            to get to know you and share the love of Christ with you.
          </p>
          <div className="my-6">
            <button className="btn bg-orange-500 text-gray-100 border-none rounded-none">
              Explore Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
