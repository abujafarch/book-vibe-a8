const Banner = () => {
    return (
        <div className="hero bg-[#1313130D] rounded-[24px] md:px-14 lg:px-[120px] py-9 sm:py-[75px] md:mb-[100px] mb-8">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src='https://i.ibb.co/HNV9gsh/pngwing-1.png' className="sm:max-w-sm rounded-lg"/>
                <div>
                    <h1 className="lg:text-[56px] text-3xl sm:text-5xl font-bold font-playfair mb-5 sm:mb-12 sm:leading-[80px]">Books to freshen up your bookshelf</h1>
                    <button className="sm:px-7 sm:py-4 px-5 py-3 rounded-lg font-work bg-[#23BE0A] text-xl font-bold text-white">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;