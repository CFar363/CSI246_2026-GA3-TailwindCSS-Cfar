import React from "react";

export default function page() {
  return (
    <div className="space-y-8 p-4">
      {/* Flex Container Example
          - container mx-auto: centers the container and sets max-width
          - flex flex-row: creates horizontal flexbox layout
          - space-x-4: adds horizontal spacing between flex items
          - p-4: adds padding
          - bg-gray-100: adds background color for visibility */}
      <div className="container mx-auto p-4 flex flex-row space-x-4 bg-blue-100 rounded-lg">
        <div className="border flex-1 text-center p-4 bg-gray-100 rounded-lg shadow">
          Flex Item 1
        </div>
        <div className="border flex-1 text-center p-4 bg-gray-100 rounded-lg shadow">
          Flex Item 2
        </div>
        <div className="border flex-1 text-center p-4 bg-gray-100 rounded-lg shadow">
          Flex Item 3
        </div>
      </div>

      {/* Grid Container Example
          - grid: enables grid layout
          - grid-cols-1: 1 column on mobile
          - md:grid-cols-2: 2 columns on medium screens
          - lg:grid-cols-3: 3 columns on large screens
          - gap-4: adds spacing between grid items
          - container mx-auto: centers the container */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-100 rounded-lg shadow text-center">
          Grid Item 1
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow text-center">
          Grid Item 2
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow text-center">
          Grid Item 3
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow text-center">
          Grid Item 4
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow text-center">
          Grid Item 5
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow text-center">
          Grid Item 6
        </div>
      </div>

      {/* Responsive Container Example
          - mx-auto: centers the container
          - max-w-7xl: sets maximum width
          - p-2: base padding
          - sm:p-8: padding on small screens
          - lg:p-16: padding on large screens
          - bg-blue-100: background color for visibility */}
      <div className="mx-auto max-w-7xl p-2 sm:p-8 lg:p-16 bg-blue-100 rounded-lg text-center">
        Responsive container with adaptive padding
      </div>

      {/* Flex Container with Wrap Example
          - flex flex-wrap: allows items to wrap to next line
          - justify-center: centers items horizontally
          - items-center: centers items vertically
          - gap-4: adds uniform spacing between items */}
      <div className="container mx-auto p-4 flex flex-wrap justify-center items-center gap-4 bg-purple-100 rounded-lg">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="w-48 h-24 flex items-center justify-center bg-white rounded-lg shadow"
          >
            Flex Wrap Item {item}
          </div>
        ))}
      </div>

      {/* Grid with Auto-fit Example
          - grid-cols-[repeat(auto-fit,minmax(200px,1fr))]: creates responsive columns
          - auto-fit automatically fits as many columns as possible
          - minmax(200px,1fr) sets minimum and maximum column width
          - gap-6: adds larger gap between items */}
      <div className="container mx-auto p-4 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 bg-green-100 rounded-lg">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="aspect-square bg-white rounded-lg shadow p-4 flex items-center justify-center"
          >
            Auto-fit Grid Item {item}
          </div>
        ))}
      </div>
    </div>
  );
}
