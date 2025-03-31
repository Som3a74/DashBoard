import React from 'react'

const Home = () => {
    return (
        <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
            <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-prose text-center">
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                        Welcome 
                        <strong className="text-primary"> Eyego Team </strong>
                        to my dashboard project
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default Home