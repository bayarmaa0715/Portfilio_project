const Contact = () => {
  return (
    <div className="my-24">
      <div className="flex  justify-center items-center">
        <h1 className="text-center mb-4 text-gray-600 bg-gray-200 py-1 px-[20px] rounded-xl">
          Get in touch
        </h1>
      </div>

      <div className=" flex justify-center items-center text-center">
        <div>
          <h1 className="text-center text-gray-600 mb-16">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </h1>
          <div className="text-2xl mb-4">
            <h1>tom@pinecone.mn</h1>
            <h1>+976 88112233</h1>
          </div>

          <p>You may also find me on these platforms!</p>
          <div className="">
            <a href="">G</a>
            <a href="">X</a>
            <a href="">F</a>
          </div>
        </div>
      </div>
      <p className="text-center mt-8 text-gray-500 text-sm">
        2024 | Greetings with ❤️️ from Ulaanbaatar
      </p>
    </div>
  );
};
export default Contact;
