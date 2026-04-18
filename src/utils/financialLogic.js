// Risk scoring
export const calculateRiskScore = (product, user) => {
  let score = 0;

  if (user.riskTolerance === product.riskLevel) {
    score += 50;
  }

  if (user.income > 50000 && product.minInvestment < user.income * 0.2) {
    score += 30;
  }

  if (user.age < 35 && product.riskLevel === "high") {
    score += 20;
  }

  return score;
};

// Recommendation logic
export const getRecommendations = (products, userProfile) => {
  if (!userProfile) return [];

  return products
    .map((product) => ({
      ...product,
      score: calculateRiskScore(product, userProfile),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
};

// Portfolio summary
export const calculatePortfolioValue = (portfolio) => {
  return portfolio.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
};