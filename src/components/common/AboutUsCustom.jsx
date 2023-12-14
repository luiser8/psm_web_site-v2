import React from 'react';

const AboutUsCustom = ({data}) => {
  return (
<section class="bg-white dark:bg-gray-900">
    <div class="container px-0 py-10 mx-auto">
        <div class="lg:-mx-6 lg:flex lg:items-center">
            <img class="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src={data.image} alt="" />

            <div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">

                <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                    {data.about_us.title}
                </h1>

                <p class="max-w-lg mt-6">{data.about_us.description1}</p>
                <p class="max-w-lg mt-6">{data.about_us.description2}</p>
                <p class="max-w-lg mt-6">{data.about_us.description3}</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default AboutUsCustom;