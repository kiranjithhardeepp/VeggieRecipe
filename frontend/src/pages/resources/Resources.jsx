import React from 'react';

const Resources = () => {
  // Sample blogData array
  const blogData = [
    {
      imgSrc: "https://tec-sense.com/wp-content/uploads/2024/02/Understanding-React.js.png",
      title: "Understanding React",
      date: "December 2024",
      views: "500 Views",
      category: "React"
    },
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpuYdLEzBvwemix8pwsncUkLLOQqnByncadg&s",
      title: "JavaScript Basics",
      date: "November 2024",
      views: "800 Views",
      category: "JavaScript"
    },
    {
      imgSrc: "https://media.geeksforgeeks.org/wp-content/uploads/20241015151938111349/CSS-Tutorial.webp",
      title: "CSS for Beginners",
      date: "October 2024",
      views: "1200 Views",
      category: "CSS"
    },
    // Add more blog objects as needed
  ];

  return (
    <section className="px-6 lg:px-12 py-20">
      <h1 className="text-3xl text-center mb-8 font-semibold text-secondary sm:text-5xl sm:leading-relaxed">Resources</h1>
      <article className="py-6 sm:py-12">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Partem repromisque an pro</h2>
            <p className="text-sm mb-16">
              Qualisque erroribus usu at, duo to agam soute mucius
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {blogData.map((blog, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={blog.imgSrc} alt={blog.title} className="w-full h-auto rounded-md mb-4" />
                <h3 className="text-2xl font-semibold">{blog.title}</h3>
                <p className="text-sm">{blog.date}</p>
                <p className="text-sm">{blog.views}</p>
                <p className="text-sm">{blog.category}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Resources;
