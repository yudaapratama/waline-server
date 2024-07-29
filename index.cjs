const Application = require('@waline/vercel');
const CustomModel = require('./CustomModel.cjs');


module.exports = Application({
	env: 'development',
	model: (tableName) => {
		return this.service(`storage/mysql`, tableName)
	},
  plugins: [],
  async postSave(comment) {
    // do what ever you want after comment saved
  },
});
