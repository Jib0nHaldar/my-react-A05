import { useEffect, useState } from "react";
import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";


const Category = () => {

    const [technologies, setTechnologies] = useState<Technology[]>([]);

    useEffect(() => {

        fetch("/technologies.json")
            .then(res => res.json())
            .then(data => {
                setTechnologies(data);
            });

    }, []);

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">

            <div>
                <h2 className="text-3xl font-bold mb-2">
                    Explore the{" "}
                    <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
                        Technologies
                    </span>
                </h2>

                <p className="text-gray-600">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            <div className="grid grid-cols-12 gap-6 mt-8">

                <div className="col-span-12 lg:col-span-9">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

                        {technologies.map((technology) => (
                            <TechnologyCard
                                key={technology.id}
                                technology={technology}
                            />
                        ))}

                    </div>

                </div>

            </div>


            <div className="col-span-12 lg:col-span-3">

            </div>

        </section >
    );
};

export default Category;