import React from 'react';

function CustomerSection() {
  return (
    <section className="flex items-center justify-center py-16 bg-gray-900">
      <div className="w-full max-w-4xl px-6 text-center">
        <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">
          Our Customers
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
          Trusted by teams who <span className="text-green-400">require high-quality scans</span> at speed
        </h2>
        <p className="text-gray-300">
          Organizations across various industries depend on our scanner to identify vulnerabilities quickly, ensuring their digital assets are secure and compliant.
        </p>
      </div>
    </section>
  );
}

export default CustomerSection;
