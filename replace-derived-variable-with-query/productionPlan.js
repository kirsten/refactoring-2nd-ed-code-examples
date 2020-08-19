class ProductionPlan {
  constructor() {
    this._adjustments = [];
    this._production = 0;
  }

  get production() {
    return this._adjustments.reduce((sum, adjustment) => sum + adjustment.amount, 0);
  }

  applyAdjustment(someAdjustment) {
    this._adjustments.push(someAdjustment);
    this._production += someAdjustment.amount;
  }
}
