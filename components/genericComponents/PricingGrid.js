import { storyblokEditable } from "@storyblok/react";

const PricingGrid = ({ blok }) => {
  return (
    <div className="py-12 bg-gray-100" {...storyblokEditable(blok)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Membership Plans
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the path that fits your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blok.cards.map((card) => (
            <div
              key={card._uid}
              className={`rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 ${
                card.highlight ? "border-2 border-red-600 relative" : "bg-white"
              }`}
            >
              {card.highlight && (
                <div className="bg-red-600 text-white text-xs font-bold uppercase py-1 px-4 absolute top-0 right-0 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                <div className="flex justify-center">
                  <span className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-gray-100 text-gray-800">
                    {card.title}
                  </span>
                </div>
                <div className="mt-4 flex justify-center text-6xl font-extrabold text-gray-900">
                  {card.price}
                  <span className="ml-1 text-2xl font-medium text-gray-500 self-end">/mo</span>
                </div>
                <p className="mt-5 text-lg text-gray-500 text-center">
                  {card.description}
                </p>
              </div>
              <div className="px-6 pt-6 pb-8 bg-gray-50 sm:p-10 sm:pt-6">
                <div className="text-gray-700 text-sm">
                   {/* This renders the Rich Text or simple list */}
                   {card.features} 
                </div>
                <div className="mt-6 rounded-md shadow">
                  <a
                    href="#"
                    className={`flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white ${
                      card.highlight ? "bg-red-600 hover:bg-red-700" : "bg-gray-800 hover:bg-gray-900"
                    }`}
                  >
                    Join Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingGrid;