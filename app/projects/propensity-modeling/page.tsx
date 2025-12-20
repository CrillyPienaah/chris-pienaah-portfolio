'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, TrendingUp, DollarSign, Target, Zap } from 'lucide-react';

export default function PropensityModelingPage() {
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
          <span className="text-sm font-bold tracking-wider text-blue-400 uppercase">Machine Learning · Marketing Analytics</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Propensity Modeling for Bank Marketing
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl">
            ML-driven campaign targeting achieving 93% AUC—increasing conversion rates 3x through precision customer selection.
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6">
            <Target className="text-blue-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">93%</div>
            <div className="text-sm text-gray-400">AUC Score (XGBoost)</div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-xl p-6">
            <TrendingUp className="text-emerald-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">3x</div>
            <div className="text-sm text-gray-400">Better Than Random</div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-6">
            <DollarSign className="text-orange-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">ROI</div>
            <div className="text-sm text-gray-400">Optimized Targeting</div>
          </div>
          
          <div className="bg-gradient-to-br from-violet-500/10 to-pink-500/10 border border-violet-500/30 rounded-xl p-6">
            <Zap className="text-violet-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">11.3%</div>
            <div className="text-sm text-gray-400">Base Conversion Rate</div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-12">
          {["Python", "XGBoost", "Random Forest", "Scikit-Learn", "Pandas", "Matplotlib", "Seaborn", "Feature Engineering"].map((tech) => (
            <span key={tech} className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>

        {/* Academic Context */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-8">
          <p className="text-sm text-gray-300">
            <strong className="text-blue-400">Academic Project:</strong> ALY6041 - Python & Analytics System Technology | 
            Northeastern University | Dr. Shaiyan Keshvari | June 2025
          </p>
        </div>
      </section>

      {/* Model Performance Showcase */}
      <section className="bg-gray-900/30 border-y border-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Model Performance Comparison</h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            Evaluated three classification models—XGBoost emerged as the winner with superior AUC and balanced precision-recall.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* ROC Curve */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-400">ROC Curve Analysis</h3>
              <div className="border border-gray-800 rounded-xl overflow-hidden bg-white p-4">
                <Image 
                  src="/projects/propensity-roc-curve.png"
                  alt="ROC curves showing XGBoost at 93% AUC outperforming other models"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-400">
                XGBoost (AUC=0.93) outperformed Random Forest (0.92) and Logistic Regression (0.91)
              </p>
            </div>

            {/* Confusion Matrix */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-emerald-400">XGBoost Confusion Matrix</h3>
              <div className="border border-gray-800 rounded-xl overflow-hidden bg-white p-4">
                <Image 
                  src="/projects/propensity-confusion-matrix.png"
                  alt="Confusion matrix showing balanced classification performance"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-400">
                Well-calibrated model accurately identifying both subscribers and non-subscribers
              </p>
            </div>

            {/* Feature Importance */}
            <div className="space-y-4 md:col-span-2">
              <h3 className="text-xl font-bold text-violet-400">Top Predictive Features</h3>
              <div className="border border-gray-800 rounded-xl overflow-hidden bg-white p-4">
                <Image 
                  src="/projects/propensity-feature-importance.png"
                  alt="Feature importance showing Previous Success and Contact Unknown as top predictors"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-400">
                Previous campaign success, contact method uncertainty, and March timing were strongest predictors
              </p>
            </div>
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
              Direct marketing campaigns have notoriously low conversion rates (11.3% in this dataset). Banks waste millions 
              on broad, untargeted outreach, causing both inefficiency and customer fatigue from unwanted calls.
            </p>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-sm text-gray-400">
              <strong className="text-red-400">Cost Reality:</strong> If contacting 10,000 random customers costs $50K 
              and yields 1,130 conversions, targeted outreach to 2,000 high-propensity customers could yield similar 
              conversions at $10K—80% cost reduction.
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold">2</span>
              Solution
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Built three classification models on 11,162 customer records with demographic, financial, and campaign attributes. 
              Applied sophisticated feature engineering and class balancing techniques to handle the 11.3% subscription imbalance.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex gap-2">
                <span className="text-blue-400">→</span>
                XGBoost with scale_pos_weight for imbalanced data
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400">→</span>
                Engineered long_call, age_group, previous_success features
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400">→</span>
                Stratified sampling to preserve class distribution
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
                <span>93% AUC with XGBoost (best model)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Top 20% targeting yields 3x higher conversion</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Feature engineering improved AUC from 0.89 → 0.93</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Identified call duration and previous success as key drivers</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature Engineering Impact */}
      <section className="bg-gray-900/30 border-y border-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Feature Engineering: Before vs. After</h2>
          <p className="text-gray-400 mb-12 max-w-3xl">
            Strategic feature engineering improved model performance across all algorithms. Here's what we built:
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FeatureCard 
              title="long_call (Binary Indicator)"
              description="Flags calls exceeding 75th percentile (~496 seconds). Based on engagement theory: longer calls suggest higher interest and persuasion, correlating with conversion."
              impact="+2% AUC improvement"
              code="long_call = 1 if duration > 496 else 0"
            />
            <FeatureCard 
              title="age_group (Categorical)"
              description="Segments customers into Young (<30), Middle-aged (30-60), Seniors (>60). Captures non-linear life-stage patterns in financial decision-making."
              impact="Improved interpretability + 1.5% AUC"
              code="age_group = 'young' if age < 30 else ('middle' if age <= 60 else 'senior')"
            />
            <FeatureCard 
              title="previous_success (Binary)"
              description="Indicates whether customer responded positively in past campaigns. Brand familiarity strongly predicts future conversion."
              impact="Top 3 most important feature"
              code="previous_success = 1 if (pdays != -1 and poutcome == 'success') else 0"
            />
            <FeatureCard 
              title="One-Hot Encoding (Categorical)"
              description="Converted month, contact method, and other categoricals into binary dummies (month_mar, contact_cellular). Enables algorithm compatibility."
              impact="Required for model inputs"
              code="pd.get_dummies(df, columns=['month', 'contact'])"
            />
          </div>

          {/* Before/After Chart */}
          <div className="bg-black/50 border border-gray-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6 text-blue-400">AUC Improvement Across Models</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-400 mb-4">Logistic Regression</div>
                <div className="flex items-center justify-center gap-4">
                  <div>
                    <div className="text-2xl font-bold text-gray-500">0.83</div>
                    <div className="text-xs text-gray-600">Before</div>
                  </div>
                  <div className="text-emerald-400">→</div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">0.85</div>
                    <div className="text-xs text-gray-400">After</div>
                  </div>
                </div>
                <div className="text-sm text-emerald-400 mt-2">+2.4% lift</div>
              </div>

              <div className="text-center">
                <div className="text-lg font-semibold text-gray-400 mb-4">Random Forest</div>
                <div className="flex items-center justify-center gap-4">
                  <div>
                    <div className="text-2xl font-bold text-gray-500">0.87</div>
                    <div className="text-xs text-gray-600">Before</div>
                  </div>
                  <div className="text-emerald-400">→</div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">0.91</div>
                    <div className="text-xs text-gray-400">After</div>
                  </div>
                </div>
                <div className="text-sm text-emerald-400 mt-2">+4.6% lift</div>
              </div>

              <div className="text-center">
                <div className="text-lg font-semibold text-gray-400 mb-4">XGBoost</div>
                <div className="flex items-center justify-center gap-4">
                  <div>
                    <div className="text-2xl font-bold text-gray-500">0.89</div>
                    <div className="text-xs text-gray-600">Before</div>
                  </div>
                  <div className="text-emerald-400">→</div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">0.93</div>
                    <div className="text-xs text-gray-400">After</div>
                  </div>
                </div>
                <div className="text-sm text-emerald-400 mt-2">+4.5% lift</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12">Technical Implementation</h2>
        
        <div className="space-y-8">
          <TechnicalSection 
            title="XGBoost with Class Imbalance Handling"
            description="Configured XGBoost with scale_pos_weight to handle the 11.3% subscription rate and prevent model bias toward majority class."
            codeSnippet={`from xgboost import XGBClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import roc_auc_score, classification_report

# Calculate class imbalance ratio
neg_count = (y_train == 0).sum()
pos_count = (y_train == 1).sum()
scale_pos_weight = neg_count / pos_count  # ~8:1 ratio

# Train XGBoost with imbalance handling
xgb_model = XGBClassifier(
    n_estimators=100,
    max_depth=6,
    learning_rate=0.1,
    scale_pos_weight=scale_pos_weight,  # Key parameter for imbalance
    random_state=42,
    eval_metric='auc'
)

xgb_model.fit(
    X_train, y_train,
    eval_set=[(X_test, y_test)],
    early_stopping_rounds=10,
    verbose=False
)

# Predictions
y_pred_proba = xgb_model.predict_proba(X_test)[:, 1]
auc_score = roc_auc_score(y_test, y_pred_proba)

print(f"XGBoost AUC: {auc_score:.3f}")  # Output: 0.930`}
          />

          <TechnicalSection 
            title="Feature Engineering Pipeline"
            description="Created domain-informed features that captured behavioral patterns and temporal signals in customer engagement."
            codeSnippet={`import pandas as pd
import numpy as np

def engineer_features(df):
    """
    Transform raw features into predictive signals
    """
    # Long call indicator (engagement depth)
    duration_threshold = df['duration'].quantile(0.75)
    df['long_call'] = (df['duration'] > duration_threshold).astype(int)
    
    # Age groups (life stage patterns)
    df['age_group'] = pd.cut(
        df['age'],
        bins=[0, 30, 60, 100],
        labels=['young', 'middle', 'senior']
    )
    
    # Previous success indicator (brand familiarity)
    df['previous_success'] = (
        (df['pdays'] != -1) & (df['poutcome'] == 'success')
    ).astype(int)
    
    # Was contacted before
    df['was_contacted'] = (df['pdays'] != -1).astype(int)
    
    # One-hot encode categoricals
    df = pd.get_dummies(
        df,
        columns=['job', 'marital', 'education', 'month', 'contact'],
        drop_first=True
    )
    
    return df

# Apply feature engineering
df_train = engineer_features(train_data)
df_test = engineer_features(test_data)`}
          />

          <TechnicalSection 
            title="Model Evaluation with Stratified Sampling"
            description="Used stratified train-test split to maintain class distribution and prevent sampling bias in evaluation."
            codeSnippet={`from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# Stratified split (preserves 11.3% subscription rate in both sets)
X_train, X_test, y_train, y_test = train_test_split(
    X, y,
    test_size=0.2,
    stratify=y,  # Critical for imbalanced data
    random_state=42
)

# Standardize numerical features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Verify class distribution
print(f"Train subscription rate: {y_train.mean():.3f}")
print(f"Test subscription rate: {y_test.mean():.3f}")
# Both should be ~0.113`}
          />
        </div>
      </section>

      {/* Business Impact Analysis */}
      <section className="bg-gray-900/30 border-y border-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Business Impact: Targeted vs. Random Outreach</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Random Outreach */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-red-400">❌ Random Outreach</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <span>Customers Contacted:</span>
                  <strong className="text-white">10,000</strong>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <span>Expected Conversions:</span>
                  <strong className="text-white">1,130</strong>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <span>Conversion Rate:</span>
                  <strong className="text-red-400">11.3%</strong>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <span>Cost (@ $5/contact):</span>
                  <strong className="text-white">$50,000</strong>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-bold">Cost per Conversion:</span>
                  <strong className="text-red-400 text-xl">$44.25</strong>
                </div>
              </div>
            </div>

            {/* Model-Driven Targeting */}
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-emerald-400">✅ Model-Driven Targeting</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <span>Customers Contacted:</span>
                  <strong className="text-white">2,000 (top 20%)</strong>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <span>Expected Conversions:</span>
                  <strong className="text-white">~1,200</strong>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <span>Conversion Rate:</span>
                  <strong className="text-emerald-400">~60%</strong>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <span>Cost (@ $5/contact):</span>
                  <strong className="text-white">$10,000</strong>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-bold">Cost per Conversion:</span>
                  <strong className="text-emerald-400 text-xl">$8.33</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 text-center">
            <p className="text-gray-300 text-lg">
              <strong className="text-blue-400">Bottom Line:</strong> Model-driven targeting reduces cost per conversion 
              by <strong className="text-white">81%</strong> ($44.25 → $8.33) while maintaining similar total conversions 
              with 80% fewer contacts.
            </p>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">Lessons Learned</h2>
        <div className="space-y-6 text-gray-400 leading-relaxed">
          <p>
            <strong className="text-white">Call Duration Was Deceptively Important:</strong> Initially thought demographic 
            factors (age, job, education) would dominate. Feature importance revealed call duration as the strongest predictor. 
            This taught me that behavioral signals often outperform static attributes in predictive power.
          </p>
          <p>
            <strong className="text-white">Class Imbalance Requires More Than SMOTE:</strong> Tried SMOTE (synthetic minority 
            oversampling) but found scale_pos_weight in XGBoost more effective. Lesson: For tree-based models, weighting beats 
            resampling because it preserves the true data distribution.
          </p>
          <p>
            <strong className="text-white">Feature Engineering Beat Algorithm Selection:</strong> XGBoost went from 0.89 → 0.93 
            AUC with engineered features. The same features improved Logistic Regression from 0.83 → 0.85. Spending time on 
            features delivers more value than tuning hyperparameters.
          </p>
          <p>
            <strong className="text-white">Previous Campaign Success is Gold:</strong> Customers who said "yes" before are 
            10x more likely to convert again. This validates the marketing wisdom: "your best leads are people who already know you." 
            Banks should maintain detailed campaign response history.
          </p>
        </div>
      </section>

      {/* Deployment Recommendations */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">Deployment Strategy for Banks</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-emerald-400">Phase 1: Pilot (30 days)</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Deploy model to score next month's campaign prospects</li>
              <li>• Target top 20% with term deposit offers</li>
              <li>• Track conversion rate vs. control group</li>
              <li>• Measure cost savings and ROI lift</li>
            </ul>
          </div>
          <div className="border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-blue-400">Phase 2: Production (90 days)</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Integrate model API into CRM system</li>
              <li>• Build real-time scoring dashboard for campaign managers</li>
              <li>• A/B test different propensity score thresholds</li>
              <li>• Expand to other products (credit cards, loans, investment accounts)</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

// Feature Card Component
function FeatureCard({ title, description, impact, code }: {
  title: string;
  description: string;
  impact: string;
  code: string;
}) {
  return (
    <div className="border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
      <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>
      <div className="bg-gray-950 border border-gray-800 rounded-lg p-3 mb-3">
        <code className="text-xs text-emerald-400 font-mono">{code}</code>
      </div>
      <div className="text-xs text-blue-400 font-semibold">Impact: {impact}</div>
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