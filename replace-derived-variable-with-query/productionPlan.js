class ProductionPlan {
  constructor() {
    this._adjustments = [];
  }

  get production() {
    return this._adjustments.reduce((sum, adjustment) => sum + adjustment.amount, 0);
  }

  applyAdjustment(someAdjustment) {
    this._adjustments.push(someAdjustment);
  }
}
