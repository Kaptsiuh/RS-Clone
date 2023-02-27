const Footer = () => {
  return (
    <footer className="bg-gray-500">
      <div className="container text-white flex items-center justify-around  max-md:flex-col ">
        <div className="hover:text-orange-500 transition-colors font-bold">
          <a href="https://rs.school/js/">RS School</a>
        </div>
        <div className="flex">
          <a
            href="https://github.com/Kaptsiuh"
            className="flex m-4 items-center hover:text-orange-500 transition-colors"
          >
            <img
              src="../src/assets/github.svg"
              alt="github"
              className="w-6 m-2"
            />
            <p>Kaptsiuh</p>
          </a>
          <a
            href="https://github.com/kovalev-ds"
            className="flex m-4 items-center hover:text-orange-500 transition-colors"
          >
            <img
              src="../src/assets/github.svg"
              alt="github"
              className="w-6 m-2"
            />
            kovalev-ds
          </a>
          <a
            href="https://github.com/flopinski"
            className="flex m-4 items-center hover:text-orange-500 transition-colors"
          >
            <img
              src="../src/assets/github.svg"
              alt="github"
              className="w-6 m-2"
            />
            flopinski
          </a>
        </div>
        <div>© toggl.track-clone 2022</div>
      </div>
    </footer>
  );
};

export default Footer;
