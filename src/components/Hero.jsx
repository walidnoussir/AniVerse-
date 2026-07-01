function Hero() {
  const scrollToTrending = () => {
    document.getElementById("trending")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="h-[70vh] bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/hero_background.jpg')] bg-cover bg-center relative px-8">
      <div className="absolute bottom-2 space-y-4">
        <h1 className="text-text text-2xl lg:text-4xl">
          Discover Your Anime <br /> Universe{" "}
        </h1>

        <p>
          Explore thousands of titles, track your progress, and join a <br />{" "}
          community of passionate fans in our immersive, cinematic <br />{" "}
          library.
        </p>

        <div className="flex gap-4 pr-2">
          <button className="btn-primary w-full md:w-44 lg:w-60">
            Explore Anime
          </button>

          <button
            className="btn-secondary w-full md:w-44 lg:w-60"
            onClick={scrollToTrending}
          >
            Trending Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
