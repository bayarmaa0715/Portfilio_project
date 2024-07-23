const Intro = () => {
  return (
    <div className="flex justify-evenly my-24">
      <div>
        <div>
          <h1 className="text-gray-900 text-6xl font-bold mb-2">
            Hi, I’m Tom 👋
          </h1>
          <p className="w-[600px] text-gray-600 text-[16px] font-normal mb-12">
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs.
          </p>
        </div>

        <div className="mb-12 ">
          <p>Ulaanaatar,Mongolia</p>
          <p>Available for new projects</p>
        </div>
        <div className="">
          <a href="">G</a>
          <a href="">X</a>
          <a href="">F</a>
        </div>
      </div>

      <div className=" w-72 h-80 relative ">
        <div className="size-full   bg-gray-200  absolute top-10 left-10   "></div>
        <img
          src="/images/b.png"
          alt=""
          className="size-full object-cover relative  border-8 border-white  "
        />
      </div>
    </div>
  );
};

export default Intro;
