import type { Technology } from "../types/technology";

type Props = {
    technology: Technology;
};

const TechnologyCard = ({ technology }: Props) => {
    return (
        <div className="border border-gray-200 rounded-xl p-4 bg-white">

            {/* Top section */}
            <div className="flex justify-between items-start">

                {/* Icon */}
                <div className="w-10 h-10">
                    <img
                        src={technology.icon}
                        alt={technology.name}
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Badge */}
                <span className="text-xs px-3 py-1 rounded-full bg-pink-50 text-pink-500">
                    {technology.badge}
                </span>

            </div>


            {/* Name */}
            <h3 className="font-bold text-lg mt-4">
                {technology.name}
            </h3>


            {/* Description */}
            <p className="text-sm text-gray-500 mt-2 leading-5">
                {technology.description}
            </p>


            {/* Information */}
            <div className="flex items-center justify-between mt-4">

                <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                    {technology.category}
                </span>

                <span className="text-xs text-gray-500">
                    {technology.difficulty}
                </span>

                <span className="text-xs">
                    ⭐ {technology.rating}
                </span>

            </div>


            {/* Button */}
            <button
                className="w-full mt-4 bg-[#0B1120] text-white py-2 rounded-lg text-sm"
            >
                Add to Stack
            </button>

        </div>
    );
};

export default TechnologyCard;