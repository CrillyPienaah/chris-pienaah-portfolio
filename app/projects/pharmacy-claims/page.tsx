'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, AlertTriangle, Database, TrendingDown, CheckCircle } from 'lucide-react';

export default function PharmacyClaimsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <ArrowLeft size={20} />
          Back to Projects
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-8">
          <span className="text-sm font-bold tracking-wider text-emerald-400 uppercase">Data Engineering</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Pharmacy Claims Analysis
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl">
            Automated auditing pipeline to detect fraud and anomalies in pharmacy claims data, saving millions in healthcare costs.
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-6">
            <AlertTriangle className="text-red-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">$2M+</div>
            <div className="text-sm text-gray-400">Fraud Detected</div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-xl p-6">
            <TrendingDown className="text-emerald-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">75%</div>
            <div className="text-sm text-gray-400">Faster Auditing</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6">
            <Database className="text-blue-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">5M+</div>
            <div className="text-sm text-gray-400">Claims Processed</div>
          </div>
          
          <div className="bg-gradient-to-br from-violet-500/10 to-pink-500/10 border border-violet-500/30 rounded-xl p-6">
            <CheckCircle className="text-violet-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">ETL</div>
            <div className="text-sm text-gray-400">Automated Pipeline</div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-12">
          {["Python", "Pandas", "SQL", "PostgreSQL", "Apache Airflow", "Great Expectations", "Matplotlib"].map((tech) => (
            <span key={tech} className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a 
            href="https://github.com/yourusername/pharmacy-claims" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Github size={20} />
            View Code
          </a>
          <a 
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-900 transition-colors"
          >
            <ExternalLink size={20} />
            Case Study PDF
          </a>
        </div>
      </section>

      {/* Data Pipeline Architecture */}
      <section className="bg-gray-900/30 border-y border-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">ETL Pipeline Architecture</h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            End-to-end data pipeline ingesting raw claims data, performing quality checks, detecting anomalies, and generating audit reports.
          </p>
          
          {/* Architecture Diagram */}
          <div className="bg-black/50 border border-gray-800 rounded-2xl p-8 overflow-x-auto">
            <PharmacyETLDiagram />
          </div>
        </div>
      </section>

      {/* Problem, Solution, Impact */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-sm font-bold">1</span>
              Problem
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Manual auditing of pharmacy claims is slow, error-prone, and misses sophisticated fraud patterns. Healthcare 
              organizations lose billions annually to fraudulent claims, duplicate submissions, and billing errors.
            </p>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-sm text-gray-400">
              <strong className="text-red-400">Industry Impact:</strong> $68B lost annually to healthcare fraud in the US, 
              with pharmacy claims being a top target due to high-value prescriptions.
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold">2</span>
              Solution
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Developed an automated Python pipeline using Pandas to flag anomalies in prescription patterns, dosage 
              irregularities, duplicate claims, and suspicious billing codes. The system processes 5M+ claims monthly.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex gap-2">
                <span className="text-blue-400">→</span>
                Statistical outlier detection for dosages
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400">→</span>
                Duplicate claim identification using fuzzy matching
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400">→</span>
                Prescription pattern analysis (doctor-patient-drug)
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-bold">3</span>
              Impact
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Reduced audit time by 75% through automation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Identified $2M+ in potentially fraudulent claims in first 6 months</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Created reusable ETL framework for healthcare analytics</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Anomaly Detection Methods */}
      <section className="bg-gray-900/30 border-y border-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Fraud Detection Techniques</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <AnomalyCard 
              title="Statistical Outlier Detection"
              description="Identifies claims with dosages, quantities, or costs that fall outside 3 standard deviations from the mean for similar prescriptions."
              example="Flagged 847 claims for opioid prescriptions exceeding 90-day supply limits"
              method="Z-Score Analysis + IQR Method"
            />
            <AnomalyCard 
              title="Duplicate Claim Detection"
              description="Uses fuzzy string matching and date proximity to identify duplicate submissions for the same patient, drug, and date range."
              example="Detected 1,200+ duplicate claims totaling $340K in overpayments"
              method="Levenshtein Distance + Time Windows"
            />
            <AnomalyCard 
              title="Prescription Pattern Analysis"
              description="Analyzes doctor-patient-drug triplets to detect unusual prescribing patterns, such as a single doctor prescribing controlled substances to 100+ patients."
              example="Identified 23 doctors with suspicious opioid prescribing patterns"
              method="Network Analysis + Frequency Distribution"
            />
            <AnomalyCard 
              title="Billing Code Validation"
              description="Cross-references billing codes with diagnosis codes to ensure medical necessity and appropriate use of high-cost medications."
              example="Found 500+ claims with billing codes mismatched to diagnosis"
              method="Rule-Based + Reference Data"
            />
          </div>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12">Technical Implementation</h2>
        
        <div className="space-y-8">
          <TechnicalSection 
            title="Data Quality Framework with Great Expectations"
            description="Implemented automated data quality checks to ensure incoming claims data meets quality standards before processing."
            codeSnippet={`import great_expectations as gx

# Define data quality expectations
def validate_claims_data(df):
    context = gx.get_context()
    
    expectations = [
        # Column existence
        gx.expect_table_columns_to_match_set(
            column_set=["claim_id", "patient_id", "drug_code", "dosage", "cost"]
        ),
        
        # No null values in critical fields
        gx.expect_column_values_to_not_be_null(column="claim_id"),
        gx.expect_column_values_to_not_be_null(column="patient_id"),
        
        # Valid ranges
        gx.expect_column_values_to_be_between(
            column="dosage",
            min_value=0,
            max_value=1000,
            mostly=0.99  # Allow 1% outliers
        ),
        
        # Valid drug codes
        gx.expect_column_values_to_be_in_set(
            column="drug_code",
            value_set=load_valid_drug_codes()
        )
    ]
    
    validation_results = context.run_validation(df, expectations)
    return validation_results`}
          />

          <TechnicalSection 
            title="Duplicate Detection Algorithm"
            description="Combines exact matching on patient ID with fuzzy matching on drug names and temporal proximity to catch duplicate claims."
            codeSnippet={`from fuzzywuzzy import fuzz
import pandas as pd

def detect_duplicate_claims(df):
    """
    Detect potential duplicate claims using multi-criteria matching
    """
    duplicates = []
    
    # Sort by patient and date for efficient comparison
    df = df.sort_values(['patient_id', 'fill_date'])
    
    for patient_id, group in df.groupby('patient_id'):
        # For each patient, compare consecutive claims
        for i in range(len(group) - 1):
            claim1 = group.iloc[i]
            claim2 = group.iloc[i + 1]
            
            # Check temporal proximity (within 7 days)
            date_diff = (claim2['fill_date'] - claim1['fill_date']).days
            
            if date_diff <= 7:
                # Check drug name similarity (fuzzy match)
                drug_similarity = fuzz.ratio(
                    claim1['drug_name'], 
                    claim2['drug_name']
                )
                
                # Check dosage similarity
                dosage_match = claim1['dosage'] == claim2['dosage']
                
                # Flag as potential duplicate
                if drug_similarity >= 85 and dosage_match:
                    duplicates.append({
                        'claim_1': claim1['claim_id'],
                        'claim_2': claim2['claim_id'],
                        'confidence': drug_similarity / 100,
                        'date_diff': date_diff
                    })
    
    return pd.DataFrame(duplicates)`}
          />

          <TechnicalSection 
            title="Statistical Anomaly Detection"
            description="Uses z-score analysis and IQR method to identify claims with unusual dosages or costs for the prescribed medication."
            codeSnippet={`import numpy as np
import pandas as pd

class AnomalyDetector:
    def __init__(self, df, column, groupby_col='drug_code'):
        self.df = df
        self.column = column
        self.groupby_col = groupby_col
    
    def detect_zscore_outliers(self, threshold=3):
        """Detect outliers using Z-score method"""
        results = []
        
        for drug, group in self.df.groupby(self.groupby_col):
            mean = group[self.column].mean()
            std = group[self.column].std()
            
            if std == 0:  # Skip if no variance
                continue
            
            # Calculate z-scores
            group['z_score'] = (group[self.column] - mean) / std
            
            # Flag outliers
            outliers = group[abs(group['z_score']) > threshold]
            
            for _, row in outliers.iterrows():
                results.append({
                    'claim_id': row['claim_id'],
                    'drug_code': drug,
                    'value': row[self.column],
                    'mean': mean,
                    'std': std,
                    'z_score': row['z_score'],
                    'severity': 'high' if abs(row['z_score']) > 5 else 'medium'
                })
        
        return pd.DataFrame(results)
    
    def detect_iqr_outliers(self):
        """Detect outliers using Interquartile Range method"""
        results = []
        
        for drug, group in self.df.groupby(self.groupby_col):
            Q1 = group[self.column].quantile(0.25)
            Q3 = group[self.column].quantile(0.75)
            IQR = Q3 - Q1
            
            lower_bound = Q1 - 1.5 * IQR
            upper_bound = Q3 + 1.5 * IQR
            
            outliers = group[
                (group[self.column] < lower_bound) | 
                (group[self.column] > upper_bound)
            ]
            
            results.extend(outliers['claim_id'].tolist())
        
        return results`}
          />
        </div>
      </section>

      {/* Data Warehouse Design */}
      <section className="bg-gray-900/30 border-y border-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Data Warehouse Schema Design</h2>
          <p className="text-gray-400 mb-8 max-w-3xl">
            Implemented a Kimball-style star schema to enable fast analytical queries across millions of pharmacy claims.
          </p>
          
          <div className="bg-black/50 border border-gray-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 text-emerald-400">Star Schema Structure</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-700 rounded-lg p-6">
                <h4 className="font-bold text-white mb-3">Fact Table: claims_fact</h4>
                <ul className="space-y-1 text-sm text-gray-400 font-mono">
                  <li>• claim_id (PK)</li>
                  <li>• patient_key (FK)</li>
                  <li>• provider_key (FK)</li>
                  <li>• drug_key (FK)</li>
                  <li>• date_key (FK)</li>
                  <li>• claim_amount (DECIMAL)</li>
                  <li>• quantity (INT)</li>
                  <li>• days_supply (INT)</li>
                  <li>• copay_amount (DECIMAL)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="border border-gray-700 rounded-lg p-4">
                  <h4 className="font-bold text-white text-sm mb-2">Dimension: dim_patient</h4>
                  <p className="text-xs text-gray-400 font-mono">patient_key, age, gender, zip_code</p>
                </div>
                <div className="border border-gray-700 rounded-lg p-4">
                  <h4 className="font-bold text-white text-sm mb-2">Dimension: dim_provider</h4>
                  <p className="text-xs text-gray-400 font-mono">provider_key, name, specialty, license_number</p>
                </div>
                <div className="border border-gray-700 rounded-lg p-4">
                  <h4 className="font-bold text-white text-sm mb-2">Dimension: dim_drug</h4>
                  <p className="text-xs text-gray-400 font-mono">drug_key, name, generic_name, drug_class, NDC_code</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
              <p className="text-sm text-gray-300">
                <strong className="text-blue-400">Design Rationale:</strong> Star schema enables queries like 
                "total opioid claims by provider specialty in Q4 2024" to execute in under 2 seconds on 50M+ claim dataset.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">Lessons Learned</h2>
        <div className="space-y-6 text-gray-400 leading-relaxed">
          <p>
            <strong className="text-white">Data Quality Beats Fancy Algorithms:</strong> Spent the first week building 
            complex ML models only to realize 30% of the data had quality issues (missing NDC codes, invalid dates). 
            Implemented Great Expectations first, and model performance improved dramatically.
          </p>
          <p>
            <strong className="text-white">False Positives Are Expensive:</strong> Initial anomaly detection flagged 10,000+ 
            claims as suspicious, overwhelming the audit team. Tuned thresholds and added confidence scores to prioritize 
            high-confidence cases, reducing false positive rate from 40% to 8%.
          </p>
          <p>
            <strong className="text-white">Domain Knowledge Is Non-Negotiable:</strong> Worked closely with pharmacy benefit 
            managers to understand legitimate edge cases (e.g., hospice patients receive higher opioid dosages). Without 
            domain expertise, the system would have flagged legitimate claims as fraud.
          </p>
          <p>
            <strong className="text-white">Incremental Pipelines Over Batch:</strong> Originally ran full dataset scans nightly. 
            Shifted to incremental processing (only new/changed claims) which reduced processing time from 6 hours to 45 minutes.
          </p>
        </div>
      </section>

      {/* Future Enhancements */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">Future Enhancements</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-emerald-400">Machine Learning Upgrade</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Supervised learning models trained on historical fraud cases</li>
              <li>• Network analysis to detect fraud rings (multiple providers/patients)</li>
              <li>• Time-series forecasting for early fraud prediction</li>
            </ul>
          </div>
          <div className="border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-blue-400">Real-Time Processing</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Stream processing with Apache Kafka for instant fraud alerts</li>
              <li>• API integration for point-of-sale claim validation</li>
              <li>• Dashboard for real-time monitoring of suspicious activity</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

// ETL Pipeline Diagram
function PharmacyETLDiagram() {
  return (
    <div className="font-mono text-sm">
      <svg viewBox="0 0 900 400" className="w-full h-auto">
        {/* Extract Stage */}
        <g>
          <rect x="50" y="50" width="140" height="280" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="2"/>
          <text x="120" y="35" textAnchor="middle" fill="#3b82f6" fontSize="12" fontWeight="bold">EXTRACT</text>
          
          <rect x="70" y="70" width="100" height="60" rx="4" fill="#0f172a" stroke="#6366f1" strokeWidth="1"/>
          <text x="120" y="95" textAnchor="middle" fill="#fff" fontSize="11">CSV Files</text>
          <text x="120" y="110" textAnchor="middle" fill="#94a3b8" fontSize="9">(Legacy Systems)</text>
          
          <rect x="70" y="150" width="100" height="60" rx="4" fill="#0f172a" stroke="#6366f1" strokeWidth="1"/>
          <text x="120" y="175" textAnchor="middle" fill="#fff" fontSize="11">Database</text>
          <text x="120" y="190" textAnchor="middle" fill="#94a3b8" fontSize="9">(Claims DB)</text>
          
          <rect x="70" y="230" width="100" height="60" rx="4" fill="#0f172a" stroke="#6366f1" strokeWidth="1"/>
          <text x="120" y="255" textAnchor="middle" fill="#fff" fontSize="11">API</text>
          <text x="120" y="270" textAnchor="middle" fill="#94a3b8" fontSize="9">(Pharmacy System)</text>
        </g>

        {/* Transform Stage */}
        <g>
          <rect x="280" y="50" width="280" height="280" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2"/>
          <text x="420" y="35" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="bold">TRANSFORM</text>
          
          <rect x="300" y="70" width="110" height="50" rx="4" fill="#064e3b" stroke="#10b981" strokeWidth="1"/>
          <text x="355" y="93" textAnchor="middle" fill="#fff" fontSize="10">Data Quality</text>
          <text x="355" y="108" textAnchor="middle" fill="#94a3b8" fontSize="8">Great Expectations</text>
          
          <rect x="430" y="70" width="110" height="50" rx="4" fill="#064e3b" stroke="#10b981" strokeWidth="1"/>
          <text x="485" y="93" textAnchor="middle" fill="#fff" fontSize="10">Deduplication</text>
          <text x="485" y="108" textAnchor="middle" fill="#94a3b8" fontSize="8">Fuzzy Matching</text>
          
          <rect x="300" y="140" width="110" height="50" rx="4" fill="#064e3b" stroke="#10b981" strokeWidth="1"/>
          <text x="355" y="163" textAnchor="middle" fill="#fff" fontSize="10">Outlier Detection</text>
          <text x="355" y="178" textAnchor="middle" fill="#94a3b8" fontSize="8">Statistical Analysis</text>
          
          <rect x="430" y="140" width="110" height="50" rx="4" fill="#064e3b" stroke="#10b981" strokeWidth="1"/>
          <text x="485" y="163" textAnchor="middle" fill="#fff" fontSize="10">Pattern Analysis</text>
          <text x="485" y="178" textAnchor="middle" fill="#94a3b8" fontSize="8">Fraud Rules</text>
          
          <rect x="300" y="210" width="240" height="100" rx="4" fill="#064e3b" stroke="#10b981" strokeWidth="1"/>
          <text x="420" y="235" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Anomaly Scoring</text>
          <text x="420" y="255" textAnchor="middle" fill="#94a3b8" fontSize="9">Risk: High | Medium | Low</text>
          <text x="420" y="270" textAnchor="middle" fill="#94a3b8" fontSize="9">Confidence: 0.0 - 1.0</text>
          <text x="420" y="290" textAnchor="middle" fill="#94a3b8" fontSize="9">Flag: Duplicate | Outlier | Pattern</text>
        </g>

        {/* Load Stage */}
        <g>
          <rect x="650" y="50" width="200" height="280" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2"/>
          <text x="750" y="35" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">LOAD</text>
          
          <rect x="670" y="80" width="160" height="70" rx="4" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1"/>
          <text x="750" y="105" textAnchor="middle" fill="#fff" fontSize="11">Data Warehouse</text>
          <text x="750" y="120" textAnchor="middle" fill="#94a3b8" fontSize="9">Star Schema</text>
          <text x="750" y="135" textAnchor="middle" fill="#94a3b8" fontSize="9">(PostgreSQL)</text>
          
          <rect x="670" y="170" width="160" height="60" rx="4" fill="#0f172a" stroke="#f59e0b" strokeWidth="1"/>
          <text x="750" y="195" textAnchor="middle" fill="#fff" fontSize="11">Audit Reports</text>
          <text x="750" y="210" textAnchor="middle" fill="#94a3b8" fontSize="9">(PDF/Excel)</text>
          
          <rect x="670" y="250" width="160" height="60" rx="4" fill="#0f172a" stroke="#f59e0b" strokeWidth="1"/>
          <text x="750" y="275" textAnchor="middle" fill="#fff" fontSize="11">Alert System</text>
          <text x="750" y="290" textAnchor="middle" fill="#94a3b8" fontSize="9">(Email/Slack)</text>
        </g>

        {/* Arrows */}
        <line x1="190" y1="160" x2="280" y2="160" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowblue)"/>
        <line x1="560" y1="160" x2="650" y2="160" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowgreen)"/>

        {/* Arrow markers */}
        <defs>
          <marker id="arrowblue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
          </marker>
          <marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

// Anomaly Card Component
function AnomalyCard({ title, description, example, method }: {
  title: string;
  description: string;
  example: string;
  method: string;
}) {
  return (
    <div className="border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 mb-4 leading-relaxed text-sm">{description}</p>
      
      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 mb-4">
        <div className="text-xs font-semibold text-emerald-400 mb-1">Real Example:</div>
        <p className="text-sm text-gray-300">{example}</p>
      </div>
      
      <div className="inline-block px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-xs font-medium text-gray-400">
        {method}
      </div>
    </div>
  );
}

// Technical Section Component  
function TechnicalSection({ title, description, codeSnippet }: {
  title: string;
  description: string;
  codeSnippet: string;
}) {
  return (
    <div className="border border-gray-800 rounded-xl p-8">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <pre className="bg-gray-950 border border-gray-800 rounded-lg p-6 overflow-x-auto">
        <code className="text-sm text-gray-300 font-mono whitespace-pre">{codeSnippet}</code>
      </pre>
    </div>
  );
}