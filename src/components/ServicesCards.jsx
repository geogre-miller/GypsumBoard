const ServicesCards = ({ icon, title, description, href }) => {
  return (
    <div className="group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl bg-white shadow-md transform-gpu dark:bg-black dark:border dark:border-neutral-800 dark:shadow-lg hover:scale-105 transition-transform duration-300 w-[280px] sm:w-[232px] lg:w-[232px] h-[280px] sm:h-[300px] lg:h-[300px]">
      {/* Content */}
      <div className="pointer-events-none z-10 flex flex-col gap-1 p-4 sm:p-5 lg:p-6 mt-2 sm:mt-3 transition-all duration-300 group-hover:-translate-y-6">
        <img
          src={icon}
          alt="icon"
          className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-2 sm:mb-3 mt-2 sm:mt-3 mx-auto origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75"
        />

        <h3 className="text-lg sm:text-xl font-semibold text-neutral-700 dark:text-neutral-300 font-nunito">
          {title}
        </h3>
        <p className="max-w-lg text-sm sm:text-base text-neutral-500 dark:text-neutral-400 font-roboto text-pretty">
          {description}
        </p>
      </div>
      {/* Button */}
      <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-6 transform-gpu flex-row items-center p-3 sm:p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <a
          href={href}
          target="_blank"
          className="pointer-events-auto inline-flex items-center justify-center h-7 sm:h-8 rounded-xl px-2 sm:px-3 text-xs sm:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground"
        >
          Tìm hiểu thêm
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-3 w-3 sm:h-3.5 sm:w-3.5"
          >
            <path
              d="M3.5 1.5C3.22386 1.5 3 1.72386 3 2C3 2.27614 3.22386 2.5 3.5 2.5H10.2929L2.64645 10.1464C2.45118 10.3417 2.45118 10.6583 2.64645 10.8536C2.84171 11.0488 3.15829 11.0488 3.35355 10.8536L11 3.20711V10C11 10.2761 11.2239 10.5 11.5 10.5C11.7761 10.5 12 10.2761 12 10V2C12 1.72386 11.7761 1.5 11.5 1.5H3.5Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ServicesCards;
