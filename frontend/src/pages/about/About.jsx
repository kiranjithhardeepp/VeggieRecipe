import React from 'react'

const About = () => {
  return (
    <section className='px-6 lg:px-12 py-20'>
        <h1 className='text-center text-3xl pt-10 pb-4 font-semibold text-secondary sm:text-6xl sm:leading-relaxed'>About</h1>
        <p className='text-center sm:w-1/2 mx-auto mb-20'>Tasty food is a celebration of flavors, textures, and aromas that delight the senses. Each recipe tells a unique story, combining ingredients to create something special. Cooking allows creativity to shine, turning simple ingredients into mouthwatering dishes. The joy of sharing a delicious meal with loved ones makes the experience even more memorable. A great recipe doesn’t just fill your stomach; it nurtures the soul and sparks happiness.</p>
          {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<section
  className="relative bg-[url(https://foodsquare.co.in/wp-content/uploads/2015/11/Homepage-Banner-4.jpg)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Let us find your 

        <strong className="block font-extrabold text-rose-700"> Taste </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed">
      “Good food brings people together, creating memories and moments that last beyond the meal.”
      </p>

      
    </div>
  </div>
</section>
    </section>
  )
}

export default About;
