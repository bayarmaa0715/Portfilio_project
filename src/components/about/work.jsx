import { CiShare1 } from "react-icons/ci";
const Work = () => {
  return (
    <div className="my-24 max-sm:my-6">
      <div className="flex  justify-center items-center">
        <h1 className="text-center mb-4 text-gray-600 bg-gray-200 py-1 px-[20px] rounded-xl">
          Work
        </h1>
      </div>

      <div>
        <h1 className="text-center text-gray-600 mb-16">
          Some of the noteworthy projects I have built:
        </h1>
        <div className="flex gap-12 items-center justify-center ">
          <div className="grid gap-20 ">
            <div className="flex justify-between w-[1150px] border-b-2 border-gray-300 rounded-b-xl p-8 max-sm:grid max-sm:w-[35rem]">
              <div className="w-[480px] h-[384px]">
                <img src="/images/work1.png" alt="" className="size-full" />
              </div>
              <div className="grid w-[480px] gap-6">
                <h1 className="font-bold ">UBCab</h1>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae.
                </p>
                <div>
                  <ul className="flex gap-3   ">
                    <li className="text-center mb-4 text-gray-600 bg-gray-200 py-1 px-[20px] rounded-xl ">
                      React
                    </li>
                    <li className="text-center mb-4 text-gray-600 bg-gray-200 py-1 px-[20px] rounded-xl">
                      Next.js
                    </li>

                    <li className="text-center mb-4 text-gray-600 bg-gray-200 py-1 px-[20px] rounded-xl">
                      Javascript
                    </li>
                    <li className="text-center mb-4 text-gray-600 bg-gray-200 py-1 px-[20px] rounded-xl">
                      Node.js
                    </li>
                    <p className="text-center mb-4 text-gray-600 bg-gray-200 py-1 px-[20px] rounded-xl">
                      Work
                    </p>
                  </ul>
                </div>
                <p className="text-2xl font-bolder">
                  <CiShare1 />
                </p>
              </div>
            </div>

            <div className="flex justify-between w-[1150px] border-b-2 border-gray-300 rounded-b-xl p-8 max-sm:grid max-sm:w-[35rem]">
              <div className="grid w-[480px] gap-6">
                <h1 className="font-bold ">Mentorhub</h1>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae.
                </p>
                <div>
                  <ul className="flex gap-3   ">
                    <li className="text-center mb-4 text-gray-600 bg-gray-200 py-1 px-[20px] rounded-xl">
                      React
                    </li>
                    <li className="text-center mb-4 text-gray-600 bg-gray-200 py-1 px-[20px] rounded-xl">
                      Next.js
                    </li>

                    <li className="text-center mb-4 text-gray-600 bg-gray-200 py-1 px-[20px] rounded-xl">
                      Javascript
                    </li>
                    <li className="text-center mb-4 text-gray-600 bg-gray-200 py-1 px-[20px] rounded-xl">
                      Node.js
                    </li>
                    <p className="text-center mb-4 text-gray-600 bg-gray-200 py-1 px-[20px] rounded-xl">
                      Work
                    </p>
                  </ul>
                </div>
                <p className="text-2xl font-bolder">
                  <CiShare1 />
                </p>
              </div>
              <div className="w-[480px] h-[384px]">
                <img src="/images/work2.png" alt="" className="size-full" />
              </div>
            </div>

            <div className="flex justify-between w-[1150px] border-b-2 border-gray-300 rounded-b-xl p-8 max-sm:grid max-sm:w-[35rem] max-sm:justify-center">
              <div className="w-[480px] h-[384px]">
                <img
                  src="/images/work3.jpeg"
                  alt=""
                  className="size-full object-cover object-top	"
                />
              </div>
              <div className="grid w-[480px] gap-6">
                <h1 className="font-bold ">iToim</h1>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae.
                </p>
                <div>
                  <ul className="flex gap-3   ">
                    <li className="text-center mb-4 text-gray-600 bg-gray-200 py-1 px-[20px] rounded-xl">
                      React
                    </li>
                    <li className="text-center mb-4 text-gray-600 bg-gray-200 py-1 px-[20px] rounded-xl">
                      Next.js
                    </li>

                    <li className="text-center mb-4 text-gray-600 bg-gray-200 py-1 px-[20px] rounded-xl">
                      Javascript
                    </li>
                    <li className="text-center mb-4 text-gray-600 bg-gray-200 py-1 px-[20px] rounded-xl">
                      Node.js
                    </li>
                    <p className="text-center mb-4 text-gray-600 bg-gray-200 py-1 px-[20px] rounded-xl">
                      Work
                    </p>
                  </ul>
                </div>
                <p className="text-2xl font-bolder">
                  <CiShare1 />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work;
