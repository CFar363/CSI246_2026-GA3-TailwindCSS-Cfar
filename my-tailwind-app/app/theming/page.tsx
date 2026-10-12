import React from "react";

export default function ThemePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
      {/* Theme Introduction */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Theme System Examples
        </h1>
        <p className="text-xl text-gray-600">
          Explore how to use Tailwind CSS with CSS variables for theming
        </p>
      </div>

      {/* Color Palette Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Primary Colors */}
        <div className="p-6 rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">Primary Colors</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-500 rounded-lg"></div>
              <div>
                <p className="font-medium">Primary Blue</p>
                <p className="text-sm text-gray-500">bg-blue-500</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-600 rounded-lg"></div>
              <div>
                <p className="font-medium">Primary Blue Dark</p>
                <p className="text-sm text-gray-500">bg-blue-600</p>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Colors */}
        <div className="p-6 rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">Secondary Colors</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-green-500 rounded-lg"></div>
              <div>
                <p className="font-medium">Secondary Green</p>
                <p className="text-sm text-gray-500">bg-green-500</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-green-600 rounded-lg"></div>
              <div>
                <p className="font-medium">Secondary Green Dark</p>
                <p className="text-sm text-gray-500">bg-green-600</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Theme Components Examples */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">Theme Components</h2>

        {/* Buttons */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Primary Button
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
              Secondary Button
            </button>
            <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors">
              Outlined Button
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-lg shadow-md border-t-4 border-blue-500">
              <h4 className="font-semibold mb-2">Primary Card</h4>
              <p className="text-gray-600">
                This card uses our primary color as an accent.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-md border-t-4 border-green-500">
              <h4 className="font-semibold mb-2">Secondary Card</h4>
              <p className="text-gray-600">
                This card uses our secondary color as an accent.
              </p>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Typography</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-500">Heading 1</h4>
              <h1 className="text-4xl font-bold">The Quick Brown Fox</h1>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Heading 2</h4>
              <h2 className="text-3xl font-semibold">The Quick Brown Fox</h2>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Body Text</h4>
              <p className="text-gray-600">
                The quick brown fox jumps over the lazy dog. This is an example
                of our body text styling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
