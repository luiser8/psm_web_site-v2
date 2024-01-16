import React from 'react';

const TeamCustom = ({data}) => {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="container px-0 py-8 mx-auto">
        <h2 className="text-3xl lg:text-2xl font-semibold text-heading-5 text-dark">{data.authorities.title}</h2>
        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {data.authorities.data.map((item, key) => (
                <div key={key} className="w-full max-w-xs text-center items-center">
                <img className="object-cover object-center w-64 h-64 mx-auto rounded-full" src={item.photo} alt="avatar" />
                    {/*  */}
                <div className="mt-2">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">{item.names}</h3>
                    <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">{item.position}</span>
                </div>
            </div>
            ))}
        </div>
    </div>
</section>
  )
}

export default TeamCustom;