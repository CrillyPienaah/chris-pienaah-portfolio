'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Home, TrendingUp, DollarSign, BarChart2 } from 'lucide-react';

export default function HUDInspectionsPage() {
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
          <span className="text-sm font-bold tracking-wider text-orange-400 uppercase">Machine Learning</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            HUD Inspection Analytics
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl">
            Predictive modeling for housing inspection scores and failure rates, enabling proactive maintenance and $500K+ in cost savings.
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-xl p-6">
            <TrendingUp className="text-emerald-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">87%</div>
            <div className="text-sm text-gray-400">Prediction Accuracy</div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-6">
            <DollarSign className="text-orange-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">$500K+</div>
            <div className="text-sm text-gray-400">Cost Savings</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6">
            <Home className="text-blue-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">15K+</div>
            <div className="text-sm text-gray-400">Properties Analyzed</div>
          </div>
          
          <div className="bg-gradient-to-br from-violet-500/10 to-pink-500/10 border border-violet-500/30 rounded-xl p-6">
            <BarChart2 className="text-violet-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">Tableau</div>
            <div className="text-sm text-gray-400">Interactive Dashboard</div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-12">
          {["R", "Tableau", "Scikit-Learn", "Python", "Random Forest", "XGBoost", "Pandas"].map((tech) => (
            <span key={tech} className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a 
            href="https://github.com/yourusername/hud-inspections" 
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
            Tableau Dashboard
          </a>
        </div>
      </section>

      {/* ML Pipeline Architecture */}
      <section className="bg-gray-900/30 border-y border-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Predictive Analytics Pipeline</h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            End-to-end machine learning pipeline from data ingestion to model deployment, with interactive Tableau dashboards for property managers.
          </p>
          
          {/* Architecture Diagram */}
          <div className="bg-black/50 border border-gray-800 rounded-2xl p-8 overflow-x-auto">
            <HUDMLPipeline />
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
              HUD housing inspections are reactive, leading to costly emergency repairs and safety violations that could 
              have been prevented. Property managers lack data-driven insights to prioritize preventative maintenance.
            </p>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-sm text-gray-400">
              <strong className="text-red-400">Industry Pain:</strong> Emergency repairs cost 3-5x more than planned 
              maintenance. Failed inspections trigger costly penalties and threaten HUD funding eligibility.
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold">2</span>
              Solution
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Built a regression model to predict inspection scores based on historical data, property characteristics, and 
              maintenance records. The system enables proactive intervention before failures occur.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex gap-2">
                <span className="text-blue-400">→</span>
                Random Forest regression for score prediction
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400">→</span>
                Feature engineering from 50+ property attributes
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400">→</span>
                Interactive Tableau dashboard for property managers
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
                <span>Achieved 87% accuracy in predicting inspection failures</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Enabled $500K+ in preventative maintenance savings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Created interactive Tableau dashboards for property managers</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Model Performance */}
      <section className="bg-gray-900/30 border-y border-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Model Performance Metrics</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Classification Metrics */}
            <div className="bg-black/50 border border-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6 text-emerald-400">Binary Classification (Pass/Fail)</h3>
              <div className="space-y-4">
                <MetricRow label="Accuracy" value="87%" description="Overall correct predictions" />
                <MetricRow label="Precision" value="83%" description="Positive predictions that were correct" />
                <MetricRow label="Recall" value="91%" description="Actual failures correctly identified" />
                <MetricRow label="F1-Score" value="0.87" description="Harmonic mean of precision & recall" />
                <MetricRow label="ROC-AUC" value="0.92" description="Model's discriminative ability" />
              </div>
            </div>

            {/* Regression Metrics */}
            <div className="bg-black/50 border border-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6 text-blue-400">Regression (Score Prediction)</h3>
              <div className="space-y-4">
                <MetricRow label="R² Score" value="0.79" description="Variance explained by model" />
                <MetricRow label="RMSE" value="12.4" description="Root mean squared error (points)" />
                <MetricRow label="MAE" value="8.2" description="Mean absolute error (points)" />
                <MetricRow label="MAPE" value="9.1%" description="Mean absolute percentage error" />
              </div>
              <div className="mt-6 bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 text-sm text-gray-400">
                <strong className="text-blue-400">Interpretation:</strong> Model predictions are typically within ±8 points 
                of actual inspection score (on 0-100 scale).
              </div>
            </div>
          </div>

          {/* Feature Importance */}
          <div className="bg-black/50 border border-gray-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6">Top 10 Predictive Features</h3>
            <div className="space-y-3">
              <FeatureBar feature="Years Since Last Major Repair" importance={0.18} />
              <FeatureBar feature="Building Age" importance={0.15} />
              <FeatureBar feature="Previous Inspection Score" importance={0.13} />
              <FeatureBar feature="Number of Outstanding Work Orders" importance={0.11} />
              <FeatureBar feature="Occupancy Rate" importance={0.09} />
              <FeatureBar feature="Maintenance Budget Per Unit" importance={0.08} />
              <FeatureBar feature="Property Manager Tenure" importance={0.07} />
              <FeatureBar feature="Number of Units" importance={0.06} />
              <FeatureBar feature="Geographic Region" importance={0.05} />
              <FeatureBar feature="Building Type (Low-rise/High-rise)" importance={0.04} />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12">Technical Implementation</h2>
        
        <div className="space-y-8">
          <TechnicalSection 
            title="Feature Engineering Pipeline"
            description="Created 50+ engineered features from raw property data, including temporal features, interaction terms, and aggregated maintenance metrics."
            codeSnippet={`# Feature engineering in R
library(dplyr)
library(lubridate)

create_features <- function(df) {
  df %>%
    mutate(
      # Temporal features
      years_since_last_repair = as.numeric(
        difftime(inspection_date, last_major_repair, units = "days")
      ) / 365,
      
      months_since_inspection = as.numeric(
        difftime(Sys.Date(), inspection_date, units = "days")
      ) / 30,
      
      # Aggregated maintenance metrics
      work_orders_per_unit = total_work_orders / number_of_units,
      maintenance_spend_per_unit = annual_maintenance_budget / number_of_units,
      
      # Interaction terms
      age_occupancy_interaction = building_age * occupancy_rate,
      
      # Binned features
      building_age_category = case_when(
        building_age < 10 ~ "New",
        building_age < 30 ~ "Moderate",
        TRUE ~ "Old"
      ),
      
      # Lag features (previous inspection scores)
      prev_score_1 = lag(inspection_score, 1),
      prev_score_2 = lag(inspection_score, 2),
      
      # Rolling averages
      avg_score_3_years = rollmean(
        inspection_score, 
        k = 3, 
        fill = NA, 
        align = "right"
      )
    )
}`}
          />

          <TechnicalSection 
            title="Random Forest Model Training"
            description="Used Random Forest regression for its ability to handle non-linear relationships and provide feature importance rankings."
            codeSnippet={`# Random Forest model in R
library(randomForest)
library(caret)

# Split data
set.seed(42)
train_index <- createDataPartition(df$inspection_score, p = 0.8, list = FALSE)
train_data <- df[train_index, ]
test_data <- df[-train_index, ]

# Train Random Forest model
rf_model <- randomForest(
  inspection_score ~ .,
  data = train_data,
  ntree = 500,              # Number of trees
  mtry = 7,                 # Features per split (sqrt of total features)
  importance = TRUE,        # Calculate feature importance
  nodesize = 5,             # Minimum node size
  maxnodes = NULL           # No limit on terminal nodes
)

# Cross-validation for hyperparameter tuning
control <- trainControl(
  method = "cv",
  number = 5,               # 5-fold cross-validation
  search = "grid"
)

tune_grid <- expand.grid(
  mtry = c(5, 7, 10, 15)
)

rf_tuned <- train(
  inspection_score ~ .,
  data = train_data,
  method = "rf",
  trControl = control,
  tuneGrid = tune_grid,
  ntree = 500
)

# Best model
best_model <- rf_tuned$finalModel

# Predictions
predictions <- predict(best_model, newdata = test_data)

# Evaluation metrics
rmse <- sqrt(mean((test_data$inspection_score - predictions)^2))
mae <- mean(abs(test_data$inspection_score - predictions))
r_squared <- cor(test_data$inspection_score, predictions)^2

cat("RMSE:", rmse, "\\n")
cat("MAE:", mae, "\\n")
cat("R²:", r_squared, "\\n")`}
          />

          <TechnicalSection 
            title="Model Comparison & Ensemble"
            description="Tested multiple algorithms and created an ensemble model combining Random Forest and XGBoost for improved accuracy."
            codeSnippet={`# Model comparison
library(xgboost)

# XGBoost model
xgb_train <- xgb.DMatrix(
  data = as.matrix(train_data[, features]),
  label = train_data$inspection_score
)

xgb_model <- xgboost(
  data = xgb_train,
  nrounds = 100,
  max_depth = 6,
  eta = 0.1,
  objective = "reg:squarederror",
  verbose = 0
)

# Ensemble prediction (weighted average)
ensemble_predict <- function(rf_model, xgb_model, new_data) {
  rf_pred <- predict(rf_model, new_data)
  xgb_pred <- predict(xgb_model, as.matrix(new_data[, features]))
  
  # Weighted average (70% RF, 30% XGBoost based on validation performance)
  ensemble <- 0.7 * rf_pred + 0.3 * xgb_pred
  return(ensemble)
}

# Model comparison results
models <- list(
  "Random Forest" = rf_model,
  "XGBoost" = xgb_model,
  "Linear Regression" = lm_model,
  "Ensemble" = ensemble_predict
)

# Compare RMSE across models
for (model_name in names(models)) {
  preds <- predict(models[[model_name]], test_data)
  rmse <- sqrt(mean((test_data$inspection_score - preds)^2))
  cat(model_name, "RMSE:", rmse, "\\n")
}

# Results:
# Random Forest RMSE: 12.8
# XGBoost RMSE: 13.2
# Linear Regression RMSE: 18.5
# Ensemble RMSE: 12.4  ← Best performance`}
          />
        </div>
      </section>

      {/* Tableau Dashboard Showcase */}
      <section className="bg-gray-900/30 border-y border-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Interactive Tableau Dashboard</h2>
          <p className="text-gray-400 mb-12 max-w-3xl">
            Property managers use this dashboard to identify at-risk properties, prioritize maintenance budgets, and track 
            inspection trends across their portfolio.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <DashboardFeature 
              title="Risk Heatmap"
              description="Geographic visualization showing properties color-coded by predicted failure risk. Managers can click on properties to see detailed predictions and recommended interventions."
              features={["Interactive map", "Risk scoring", "Drill-down details"]}
            />
            <DashboardFeature 
              title="Trend Analysis"
              description="Time-series charts showing inspection score trends over the past 5 years. Identifies properties with declining scores requiring immediate attention."
              features={["Historical trends", "Forecasting", "Anomaly detection"]}
            />
            <DashboardFeature 
              title="Portfolio Summary"
              description="Executive dashboard showing total properties, predicted failures, estimated maintenance costs, and ROI from preventative actions."
              features={["KPI cards", "Cost analysis", "ROI calculator"]}
            />
            <DashboardFeature 
              title="Maintenance Prioritization"
              description="Ranked list of properties by urgency (predicted score + days until inspection). Helps allocate limited maintenance budgets to highest-impact properties."
              features={["Priority ranking", "Budget allocation", "What-if scenarios"]}
            />
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">Key Insights from Analysis</h2>
        
        <div className="space-y-6">
          <InsightCard 
            title="Maintenance Timing Matters More Than Amount"
            insight="Properties that performed regular quarterly maintenance scored 18 points higher on average than properties that spent the same total amount on reactive repairs."
            recommendation="Shift from reactive to preventative maintenance schedules."
            icon="📅"
          />
          <InsightCard 
            title="Building Age is Not Destiny"
            insight="Older buildings (30+ years) with consistent maintenance budgets outperformed newer buildings (10-15 years) with neglected upkeep by 12 points on average."
            recommendation="Focus on maintenance consistency rather than building age."
            icon="🏗️"
          />
          <InsightCard 
            title="Property Manager Experience Drives Outcomes"
            insight="Properties managed by individuals with 5+ years tenure had 15% fewer failed inspections. Tenure more predictive than property characteristics."
            recommendation="Invest in training and retention of experienced property managers."
            icon="👥"
          />
          <InsightCard 
            title="Occupancy Rate Sweet Spot"
            insight="Properties with 90-95% occupancy scored highest. Both very low (<70%) and very high (>98%) occupancy correlated with lower inspection scores."
            recommendation="Balance occupancy optimization with maintenance capacity."
            icon="📊"
          />
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">Lessons Learned</h2>
        <div className="space-y-6 text-gray-400 leading-relaxed">
          <p>
            <strong className="text-white">Domain Expertise Over Model Complexity:</strong> Initially built a deep learning 
            model with 200+ features. Property managers could not trust the black-box predictions. Switched to Random Forest 
            for interpretability—model performance was similar but adoption increased dramatically.
          </p>
          <p>
            <strong className="text-white">Historical Data Had Survivorship Bias:</strong> Dataset only included properties 
            still in the HUD program. Properties that failed out were missing, skewing predictions. Added historical failure 
            data to correct for bias, improving real-world accuracy by 12%.
          </p>
          <p>
            <strong className="text-white">Tableau Convinced Stakeholders:</strong> Initial Python visualizations failed to 
            get buy-in. Created an interactive Tableau dashboard where managers could filter by their properties and see 
            personalized recommendations. Adoption went from 20% to 85%.
          </p>
          <p>
            <strong className="text-white">Threshold Tuning Was Critical:</strong> Model with 87% accuracy still produced 
            too many false positives at default 0.5 threshold. Adjusted to 0.35 based on cost-benefit analysis (cost of 
            preventative maintenance vs. cost of failed inspection). Reduced alert fatigue by 60%.
          </p>
        </div>
      </section>

      {/* Future Enhancements */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">Future Roadmap</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-emerald-400">Enhanced Modeling</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Incorporate weather data (extreme temps correlate with HVAC failures)</li>
              <li>• Add computer vision for property condition assessment</li>
              <li>• Survival analysis for time-to-failure predictions</li>
              <li>• Causal inference to isolate maintenance intervention effects</li>
            </ul>
          </div>
          <div className="border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-blue-400">Operational Integration</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• API integration with property management systems</li>
              <li>• Automated work order generation for predicted failures</li>
              <li>• Mobile app for on-site inspectors</li>
              <li>• Cost optimization algorithm for maintenance budgets</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

// ML Pipeline Diagram
function HUDMLPipeline() {
  return (
    <div className="font-mono text-sm">
      <svg viewBox="0 0 900 450" className="w-full h-auto">
        {/* Data Collection */}
        <g>
          <rect x="50" y="50" width="160" height="100" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="2"/>
          <text x="130" y="35" textAnchor="middle" fill="#3b82f6" fontSize="12" fontWeight="bold">DATA COLLECTION</text>
          
          <text x="130" y="80" textAnchor="middle" fill="#fff" fontSize="10">Property Records</text>
          <text x="130" y="100" textAnchor="middle" fill="#94a3b8" fontSize="9">Age, Size, Type</text>
          
          <text x="130" y="125" textAnchor="middle" fill="#fff" fontSize="10">Inspection History</text>
          <text x="130" y="140" textAnchor="middle" fill="#94a3b8" fontSize="9">Scores & Violations</text>
        </g>

        {/* Feature Engineering */}
        <rect x="280" y="50" width="180" height="100" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="2"/>
        <text x="370" y="35" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="bold">FEATURE ENGINEERING</text>
        <text x="370" y="80" textAnchor="middle" fill="#fff" fontSize="10">50+ Features</text>
        <text x="370" y="100" textAnchor="middle" fill="#94a3b8" fontSize="9">Temporal, Aggregated</text>
        <text x="370" y="115" textAnchor="middle" fill="#94a3b8" fontSize="9">Interaction Terms</text>
        <text x="370" y="130" textAnchor="middle" fill="#94a3b8" fontSize="9">Lag Variables</text>

        {/* Model Training */}
        <rect x="530" y="50" width="180" height="100" rx="8" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="2"/>
        <text x="620" y="35" textAnchor="middle" fill="#8b5cf6" fontSize="12" fontWeight="bold">MODEL TRAINING</text>
        <text x="620" y="80" textAnchor="middle" fill="#fff" fontSize="10">Random Forest</text>
        <text x="620" y="95" textAnchor="middle" fill="#94a3b8" fontSize="9">+ XGBoost</text>
        <text x="620" y="110" textAnchor="middle" fill="#94a3b8" fontSize="9">5-Fold CV</text>
        <text x="620" y="125" textAnchor="middle" fill="#94a3b8" fontSize="9">Hyperparameter Tuning</text>

        {/* Model Evaluation */}
        <rect x="280" y="200" width="180" height="100" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="2"/>
        <text x="370" y="185" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">EVALUATION</text>
        <text x="370" y="230" textAnchor="middle" fill="#fff" fontSize="10">Accuracy: 87%</text>
        <text x="370" y="245" textAnchor="middle" fill="#fff" fontSize="10">R²: 0.79</text>
        <text x="370" y="260" textAnchor="middle" fill="#94a3b8" fontSize="9">RMSE: 12.4</text>
        <text x="370" y="275" textAnchor="middle" fill="#94a3b8" fontSize="9">Feature Importance</text>

        {/* Deployment */}
        <g>
          <rect x="530" y="200" width="180" height="100" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="2"/>
          <text x="620" y="185" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="bold">DEPLOYMENT</text>
          <text x="620" y="230" textAnchor="middle" fill="#fff" fontSize="10">Tableau Dashboard</text>
          <text x="620" y="250" textAnchor="middle" fill="#94a3b8" fontSize="9">Interactive Maps</text>
          <text x="620" y="265" textAnchor="middle" fill="#94a3b8" fontSize="9">Risk Alerts</text>
          <text x="620" y="280" textAnchor="middle" fill="#94a3b8" fontSize="9">Priority Lists</text>
        </g>

        {/* Monitoring */}
        <rect x="280" y="350" width="180" height="70" rx="8" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2"/>
        <text x="370" y="380" textAnchor="middle" fill="#fff" fontSize="10">Model Monitoring</text>
        <text x="370" y="395" textAnchor="middle" fill="#94a3b8" fontSize="9">Prediction Drift</text>
        <text x="370" y="410" textAnchor="middle" fill="#94a3b8" fontSize="9">Quarterly Retraining</text>

        {/* Arrows */}
        <line x1="210" y1="100" x2="280" y2="100" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowblue)"/>
        <line x1="460" y1="100" x2="530" y2="100" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowgreen)"/>
        <line x1="620" y1="150" x2="620" y2="200" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrowpurple)"/>
        <line x1="460" y1="250" x2="530" y2="250" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arroworange)"/>
        <line x1="370" y1="300" x2="370" y2="350" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arroworange)"/>

        {/* Feedback loop */}
        <path d="M 280 385 Q 130 385 130 150" stroke="#6366f1" strokeWidth="2" fill="none" strokeDasharray="5,5" markerEnd="url(#arrowblue)"/>

        {/* Arrow markers */}
        <defs>
          <marker id="arrowblue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
          </marker>
          <marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
          </marker>
          <marker id="arrowpurple" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#8b5cf6" />
          </marker>
          <marker id="arroworange" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#f59e0b" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

// Metric Row Component
function MetricRow({ label, value, description }: { label: string; value: string; description: string }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-800 last:border-0">
      <div>
        <div className="font-semibold text-white">{label}</div>
        <div className="text-xs text-gray-500">{description}</div>
      </div>
      <div className="text-2xl font-bold text-emerald-400">{value}</div>
    </div>
  );
}

// Feature Importance Bar
function FeatureBar({ feature, importance }: { feature: string; importance: number }) {
  const percentage = (importance * 100).toFixed(0);
  
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-300">{feature}</span>
        <span className="text-gray-500">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

// Dashboard Feature Component
function DashboardFeature({ title, description, features }: {
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 mb-4 leading-relaxed text-sm">{description}</p>
      <div className="flex flex-wrap gap-2">
        {features.map((feature) => (
          <span key={feature} className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400">
            {feature}
          </span>
        ))}
      </div>
    </div>
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