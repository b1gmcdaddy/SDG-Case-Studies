import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [openIndices, setOpenIndices] = useState(
    Array(items.length).fill(false)
  );

  const toggleAccordion = (index) => {
    const newOpenIndices = [...openIndices];
    newOpenIndices[index] = !newOpenIndices[index];
    setOpenIndices(newOpenIndices);
  };

  return (
    <div className="md:mt-12">
      {items.map((item, index) => (
        <div
          key={index}
          className="border rounded-b-lg border-t-0 mb-2 text-white shadow-gray-400 shadow-md"
        >
          <div
            className="flex justify-between items-center px-4 py-2 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <div className="text-lg font-semibold">
              {item.title}
              <span className="ml-3 text-sm text-gray-400 italic">
                Click me to show
              </span>
            </div>

            <div className="text-xl">{openIndices[index] ? "-" : "+"}</div>
          </div>
          {openIndices[index] && (
            <div className="p-4">
              <img src={item.image} alt={item.title} className="w-full" />
              <img
                src={item.image2}
                alt={item.title2}
                className="w-full mt-5"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
