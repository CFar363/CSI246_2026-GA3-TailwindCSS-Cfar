import React from "react";

export default function page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
      {/* Hero Section
          - text-center: centers text
          - space-y-4: vertical spacing between elements */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Welcome to Tailwind CSS Examples
        </h1>
        <p className="text-xl text-gray-600">
          Explore the power of utility-first CSS with our interactive examples
        </p>
      </div>

      {/* Introduction Section
          - prose: applies typography styles
          - mx-auto: centers the content
          - space-y-4: vertical spacing between elements */}
      <div className="prose mx-auto space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          What is Tailwind CSS?
        </h2>
        <p className="text-gray-600">
          Tailwind CSS is a utility-first CSS framework that allows you to build
          modern websites without ever leaving your HTML. Instead of pre-built
          components, Tailwind provides low-level utility classes that let you
          build completely custom designs.
        </p>
      </div>

      {/* Key Features
          - grid: creates grid layout
          - gap-6: spacing between grid items
          - rounded-lg: rounded corners
          - hover effects for interactivity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Utility-First Approach
          </h3>
          <p className="text-gray-600">
            Build your designs directly in your markup using utility classes
            like flex, pt-4, text-center, and rotate-90.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Responsive Design
          </h3>
          <p className="text-gray-600">
            Create responsive layouts using intuitive breakpoint prefixes like
            sm:, md:, lg:, and xl:.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Component Composition
          </h3>
          <p className="text-gray-600">
            Compose complex components from a set of primitive utilities instead
            of relying on predefined styles.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Dark Mode & More
          </h3>
          <p className="text-gray-600">
            Built-in support for dark mode, hover states, focus states, and
            other interactive utilities.
          </p>
        </div>
      </div>

      {/* Call to Action
          - mt-12: top margin
          - text-center: centers content
          - gradient background
          - hover effect */}
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-600 mb-4">
          Ready to explore more examples?
        </p>
        <a
          href="/flexgrid"
          className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-colors"
        >
          View FlexGrid Examples →
        </a>
      </div>
    </div>
  );
}
