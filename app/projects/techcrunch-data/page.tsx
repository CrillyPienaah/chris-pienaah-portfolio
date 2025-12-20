import React from 'react';

const TechCrunchPage = () => {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20 text-slate-900 dark:text-slate-50">
      {/* Header */}
      <header className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-10">
        <h1 className="text-4xl font-bold mb-4">TechCrunch Funding Normalization</h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">
          3NF Relational Schema for Venture Capital Analytics.
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {['SQL', 'MySQL', 'ERD Design', 'Data Modeling', 'Normalization'].map(tag => (
            <span key={tag} className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100 rounded-full text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* TL;DR */}
      <section className="mb-12 bg-slate-50 dark:bg-slate-900 p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">🔹 TL;DR</h2>
        <ul className="space-y-3">
          <li><strong>Problem:</strong> TechCrunch funding data was denormalized, redundant, and difficult to query for insights.</li>
          <li><strong>Solution:</strong> Designed a fully normalized (3NF) relational schema with clear entity relationships and analytical queries.</li>
          <li><strong>My Role:</strong> Sole designer and engineer — modeled schema, built ERD, implemented tables, and wrote SQL analytics.</li>
          <li><strong>Impact:</strong> Created a scalable foundation for venture capital trend analysis and reporting.</li>
        </ul>
      </section>

      {/* Body */}
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">🧠 Context</h2>
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
            Startup funding data from TechCrunch contains valuable insights on investment trends. However, the raw dataset suffered from repeated fields, mixed entity types, and high risk of anomalies. The goal was to redesign the dataset into a clean relational model suitable for analytics.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">🏗️ Architecture & Schema Design</h2>
          <p className="mb-4">I decomposed the raw dataset into core entities including Company, FundingEvent, Category, City, State, and Country.</p>
          
          <div className="my-8 p-4 border border-dashed border-slate-300 rounded-lg bg-slate-50 dark:bg-slate-900 flex justify-center items-center h-64">
             {/* Diagram Trigger */}
             
          </div>

          <h3 className="font-bold text-lg mb-2">The schema enforces:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Primary keys for each entity</li>
            <li>Foreign key constraints for referential integrity</li>
            <li>Elimination of transitive and partial dependencies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">⚙️ Key Engineering Decisions</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>3NF over denormalized design:</strong> Prioritized integrity and maintainability over raw query simplicity.</li>
            <li><strong>Location hierarchy split:</strong> City, state, and country separated to avoid duplication and enable geographic analytics.</li>
            <li><strong>Event-centric modeling:</strong> Funding rounds modeled as a fact-like table linked to companies for time-based analysis.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">📊 Analytics Enabled</h2>
          <p className="mb-4">With the normalized schema, I could efficiently run queries for:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded">📈 Total funding by company category</div>
            <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded">🌍 Funding distribution by country</div>
            <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded">🏆 Top companies by total raised</div>
            <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded">📅 Funding trends over time</div>
          </div>
        </section>
      </div>
    </article>
  );
};

export default TechCrunchPage;