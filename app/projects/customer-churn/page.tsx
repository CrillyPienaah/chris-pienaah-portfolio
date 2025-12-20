'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Github, TrendingUp, Users, Target, BarChart3 } from 'lucide-react';

export default function CustomerChurnPage() {
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
          <span className="text-sm font-bold tracking-wider text-orange-400 uppercase">Machine Learning · Banking Analytics</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Customer Churn Prediction
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl">
            Banking ML model predicting customer attrition with 86.93% accuracy, enabling proactive retention strategies worth millions.
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-xl p-6">
            <TrendingUp className="text-emerald-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">86.93%</div>
            <div className="text-sm text-gray-400">Model Accuracy</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6">
            <Target className="text-blue-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">2x</div>
            <div className="text-sm text-gray-400">Sensitivity Improvement</div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-6">
            <Users className="text-orange-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">10K+</div>
            <div className="text-sm text-gray-400">Customers Analyzed</div>
          </div>
          
          <div className="bg-gradient-to-br from-violet-500/10 to-pink-500/10 border border-violet-500/30 rounded-xl p-6">
            <BarChart3 className="text-violet-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">45%</div>
            <div className="text-sm text-gray-400">Highest Churn (Germany)</div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-12">
          {["R", "Python", "Random Forest", "K-Means", "PCA", "Decision Trees", "ggplot2", "caret"].map((tech) => (
            <span key={tech} className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>

        {/* Academic Context */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-8">
          <p className="text-sm text-gray-300">
            <strong className="text-blue-400">Academic Project:</strong> ALY6015 - Intermediate Analytics | 
            Northeastern University | Dr. Sohom Mandal | February 2025
          </p>
        </div>
      </section>

      {/* Model Performance Showcase */}
      <section className="bg-gray-900/30 border-y border-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Model Performance Analysis</h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            Comprehensive evaluation using confusion matrices, feature importance analysis, and customer segmentation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Confusion Matrix */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-emerald-400">Random Forest Confusion Matrix</h3>
              <div className="border border-gray-800 rounded-xl overflow-hidden bg-white p-4">
                <Image 
                  src="/projects/churn-confusion-matrix.png"
                  alt="Random Forest confusion matrix showing 86.93% accuracy"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-400">
                Random Forest achieved 86.93% accuracy with 46.48% sensitivity (2x better than Logistic Regression)
              </p>
            </div>

            {/* Feature Importance */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-400">Feature Importance Rankings</h3>
              <div className="border border-gray-800 rounded-xl overflow-hidden bg-white p-4">
                <Image 
                  src="/projects/churn-feature-importance.png"
                  alt="Feature importance showing Balance, Age, and Active Membership as top predictors"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-400">
                Balance (30%), Age (25%), and Active Membership (20%) were the strongest churn predictors
              </p>
            </div>

            {/* K-Means Clustering */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-violet-400">Customer Segmentation (K-Means)</h3>
              <div className="border border-gray-800 rounded-xl overflow-hidden bg-white p-4">
                <Image 
                  src="/projects/churn-kmeans-clustering.png"
                  alt="K-Means clustering segmenting customers into Low, Moderate, and High risk groups"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-400">
                Customers segmented into Low-Risk (3.52), Moderate-Risk (3.32), and High-Risk (3.13) clusters
              </p>
            </div>

            {/* PCA Variance */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-orange-400">PCA Dimensionality Reduction</h3>
              <div className="border border-gray-800 rounded-xl overflow-hidden bg-white p-4">
                <Image 
                  src="/projects/churn-pca-variance.png"
                  alt="PCA showing 97% variance explained by 8 principal components"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-400">
                8 principal components retained 97% of variance, reducing dimensionality without information loss
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
              Customer churn directly impacts bank revenue and profitability. Acquiring new customers costs 5-7x more 
              than retaining existing ones. Banks need predictive models to identify at-risk customers proactively.
            </p>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-sm text-gray-400">
              <strong className="text-red-400">Industry Impact:</strong> A 5% reduction in churn can increase bank 
              profitability by 25-95% according to Bain & Company research.
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold">2</span>
              Solution
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Built and compared three classification models on 10,000 customers. Applied advanced techniques including 
              K-Means clustering for segmentation, PCA to reduce multicollinearity, and feature engineering to capture 
              behavioral patterns.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex gap-2">
                <span className="text-blue-400">→</span>
                Random Forest with 100 trees for robust predictions
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400">→</span>
                K-Means clustering into Low/Moderate/High risk segments
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400">→</span>
                10-fold cross-validation for reliability
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
                <span>86.93% accuracy (Random Forest best model)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Improved sensitivity from 23% → 46.48% (2x improvement)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Segmented 10K customers into actionable risk groups</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Identified Germany (45% churn) for targeted intervention</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Model Comparison */}
      <section className="bg-gray-900/30 border-y border-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Model Performance Comparison</h2>
          
          <div className="bg-black/50 border border-gray-800 rounded-xl p-8 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="pb-4 text-gray-300 font-semibold">Model</th>
                  <th className="pb-4 text-gray-300 font-semibold">Accuracy</th>
                  <th className="pb-4 text-gray-300 font-semibold">Sensitivity (Churn Detection)</th>
                  <th className="pb-4 text-gray-300 font-semibold">Specificity (Retention Detection)</th>
                </tr>
              </thead>
              <tbody className="text-gray-400">
                <tr className="border-b border-gray-800">
                  <td className="py-4">Logistic Regression</td>
                  <td className="py-4">82.06%</td>
                  <td className="py-4 text-red-400">23.08%</td>
                  <td className="py-4">97.15%</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4">Decision Tree</td>
                  <td className="py-4">86.26%</td>
                  <td className="py-4 text-yellow-400">40.43%</td>
                  <td className="py-4">97.99%</td>
                </tr>
                <tr className="bg-emerald-500/5">
                  <td className="py-4 font-bold text-white">Random Forest ✓</td>
                  <td className="py-4 font-bold text-emerald-400">86.93%</td>
                  <td className="py-4 font-bold text-emerald-400">46.48%</td>
                  <td className="py-4 font-bold text-emerald-400">97.28%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
            <p className="text-sm text-gray-300">
              <strong className="text-emerald-400">Why Random Forest Won:</strong> Balanced high accuracy with the best 
              sensitivity (churn detection). Logistic Regression missed 77% of churners despite high overall accuracy—useless for retention campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Key Insights from Analysis */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">Key Business Insights</h2>
        
        <div className="space-y-6">
          <InsightCard 
            title="Balance is the Strongest Predictor (30% importance)"
            insight="Customers with lower account balances are significantly more likely to churn. This suggests that financial engagement correlates with retention—customers with minimal balances may not perceive value in maintaining the relationship."
            recommendation="Implement balance-building incentives: offer cashback rewards, savings challenges, or fee waivers for customers maintaining minimum balances."
            icon="💰"
          />
          <InsightCard 
            title="Germany Requires Urgent Attention (45% churn rate)"
            insight="Germany's churn rate is 3x higher than France (15%) and 2.25x higher than Spain (20%). This suggests region-specific issues—possibly competitive pressure, regulatory differences, or service quality gaps."
            recommendation="Deploy dedicated retention team in Germany. Conduct exit interviews to understand why customers leave. Consider localized products or pricing."
            icon="🇩🇪"
          />
          <InsightCard 
            title="Inactive Members are High-Risk (20% importance)"
            insight="Active membership status is the 3rd strongest predictor. Customers who aren't engaging with bank services (online banking, mobile app, transactions) are much more likely to churn."
            recommendation="Gamify engagement: send personalized nudges, offer rewards for using digital banking features, flag 90-day inactive customers for outreach."
            icon="📱"
          />
          <InsightCard 
            title="Age Matters: Middle-Aged Customers Stay"
            insight="Older customers (40-60) show lower churn rates. Younger customers (18-30) are more price-sensitive and willing to switch banks for better offers."
            recommendation="Age-specific retention strategies: loyalty perks for seniors, competitive rates/digital features for younger segments."
            icon="👥"
          />
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="bg-gray-900/30 border-y border-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Technical Implementation</h2>
          
          <div className="space-y-8">
            <TechnicalSection 
              title="Random Forest Implementation with Feature Importance"
              description="Built Random Forest classifier with 100 trees, extracting feature importance scores to identify key churn drivers."
              codeSnippet={`# Load required libraries
library(randomForest)
library(caret)

# Train Random Forest Model
set.seed(123)
rf_model <- randomForest(
  Exited ~ CreditScore + Geography + Gender + Age + Balance + 
           NumOfProducts + IsActiveMember,
  data = train,
  importance = TRUE,
  ntree = 100
)

# Plot Feature Importance
varImpPlot(
  rf_model,
  main = "Feature Importance in Random Forest Model"
)

# Predictions on test data
rf_preds <- predict(rf_model, newdata = test)

# Evaluation
conf_matrix_rf <- confusionMatrix(rf_preds, test$Exited)
print(conf_matrix_rf)

# Results:
# Accuracy: 86.93%
# Sensitivity (Churn Detection): 46.48%
# Specificity (Retention Detection): 97.28%`}
            />

            <TechnicalSection 
              title="K-Means Customer Segmentation"
              description="Applied K-Means clustering to segment 10,000 customers into Low, Moderate, and High-risk groups based on churn probability."
              codeSnippet={`library(cluster)
library(factoextra)

# Normalize features for clustering
clustering_data <- scale(
  train[, c("CreditScore", "Age", "Balance", 
            "NumOfProducts", "EstimatedSalary")]
)

# Determine optimal clusters using Elbow Method
set.seed(123)
wss <- sapply(1:10, function(k) {
  kmeans(clustering_data, centers = k, nstart = 25)$tot.withinss
})

# Apply K-Means with k=3
kmeans_model <- kmeans(clustering_data, centers = 3, nstart = 25)

# Visualize Clusters
fviz_cluster(
  kmeans_model,
  data = clustering_data,
  geom = "point",
  ellipse = TRUE,
  main = "Customer Segmentation by Churn Risk"
)

# Cluster Centers:
# Low-Risk: 3.52 (high balance, active, multiple products)
# Moderate-Risk: 3.32 (mid-range engagement)
# High-Risk: 3.13 (low balance, inactive, fewer products)`}
            />

            <TechnicalSection 
              title="PCA for Dimensionality Reduction"
              description="Used Principal Component Analysis to reduce multicollinearity and improve model efficiency while retaining 97% of variance."
              codeSnippet={`library(ggplot2)
library(factoextra)

# Standardize features
pca_data <- scale(
  train[, c("CreditScore", "Age", "Balance", 
            "NumOfProducts", "EstimatedSalary")]
)

# Perform PCA
pca_model <- prcomp(pca_data, center = TRUE, scale. = TRUE)

# Scree Plot - Variance Explained
fviz_eig(
  pca_model,
  addlabels = TRUE,
  barfill = "steelblue",
  main = "Variance Explained by Principal Components"
)

# Results: First 8 components explain 97% of variance
# Comp 1: 25.95%
# Comp 2: 44.46% (cumulative)
# ...
# Comp 8: 97.03% (cumulative)

# This allowed us to reduce 14 features to 8 components
# without significant information loss`}
            />
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">Lessons Learned</h2>
        <div className="space-y-6 text-gray-400 leading-relaxed">
          <p>
            <strong className="text-white">Accuracy Isn't Everything—Sensitivity Matters More:</strong> Logistic Regression 
            had 82% accuracy but only caught 23% of churners. For business value, detecting at-risk customers (sensitivity) 
            matters more than overall accuracy. Random Forest's 46.48% sensitivity meant we caught twice as many churners.
          </p>
          <p>
            <strong className="text-white">Class Imbalance Requires Strategic Handling:</strong> With only 20% churn rate, 
            models naturally bias toward predicting "no churn." Used stratified sampling and evaluated precision-recall 
            tradeoffs rather than just accuracy. Real-world deployment would require threshold tuning based on intervention costs.
          </p>
          <p>
            <strong className="text-white">Geographic Differences Demand Localized Strategies:</strong> Germany's 45% churn 
            vs. France's 15% wasn't a data quirk—it revealed real market dynamics. One-size-fits-all retention won't work. 
            Banks need country-specific playbooks.
          </p>
          <p>
            <strong className="text-white">Feature Engineering Beats Algorithm Selection:</strong> Initial models performed 
            poorly. Adding engineered features (active_member_status, balance_bins, age_groups) improved all models. Good 
            features matter more than fancy algorithms.
          </p>
        </div>
      </section>

      {/* Business Recommendations */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">Actionable Recommendations for Banks</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-emerald-400">Immediate Actions (30 days)</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Deploy model to score all active customers monthly</li>
              <li>• Create "High-Risk Customer" dashboard for retention team</li>
              <li>• Launch Germany-focused retention pilot program</li>
              <li>• Implement automated email campaigns for inactive members</li>
            </ul>
          </div>
          <div className="border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-blue-400">Long-Term Strategy (6-12 months)</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Integrate model predictions into CRM system</li>
              <li>• A/B test retention offers on High-Risk segment</li>
              <li>• Build real-time churn prediction API for branch staff</li>
              <li>• Expand model to include transaction-level behavioral data</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

// Insight Card Component
function InsightCard({ title, insight, recommendation, icon }: {
  title: string;
  insight: string;
  recommendation: string;
  icon: string;
}) {
  return (
    <div className="border border-gray-800 rounded-xl p-6">
      <div className="flex items-start gap-4">
        <div className="text-4xl">{icon}</div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400 mb-3 leading-relaxed text-sm">{insight}</p>
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3">
            <div className="text-xs font-semibold text-emerald-400 mb-1">Recommendation:</div>
            <p className="text-sm text-gray-300">{recommendation}</p>
          </div>
        </div>
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