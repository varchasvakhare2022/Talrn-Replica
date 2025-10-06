export default function News() {
  return (
    <section className="mt-16">
      <div>
        <h1 className="mx-auto flex justify-center items-center text-gray-600 text-3xl font-semibold">
          <span className="text-blue-500">Talrn </span> in the news
        </h1>
        <p className="mx-auto flex justify-center items-center text-gray-600 text-lg text-center font-semibold">
          We are recognized as one of the leading <br /> platforms for on-demand
          talent.
        </p>
      </div>
      <div className="flex justify-between items-center mx-auto w-5xl m-10">
        <img src="/nbc.png" alt="NBC" width={120} height={120} />
        <img src="/fox_news.png" alt="Fox News" width={120} height={120} />
        <img src="/cbso.png" alt="CBSO" width={120} height={120} />
        <img src="/usa_today.png" alt="USA Today" width={120} height={120} />
      </div>
      <div className="bg-blue-700 text-white py-13 mt-10 w-5xl rounded-xl mx-auto mb-18">
        <div className="px-8 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-4xl font-semibold mb-4 md:mb-4">
              Start your outsourcing <br />
              journey today
            </h1>
            <ul className="flex justify-between items-center">
              <li> Independent</li>
              <li>Secure</li>
              <li>Transparent</li>
            </ul>
          </div>
          <div>
            <button className="w-xs bg-white text-blue-900 px-6 py-2 mr-8 rounded-md font-semibold hover:bg-gray-100">
              View Profiles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
