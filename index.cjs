const Application = require('@waline/vercel');
const CustomModel = require('./CustomModel.cjs');


module.exports = Application({
	env: 'development',
	model: (tableName) => {
		return new CustomModel(tableName)
	},
  plugins: [],
  async postSave(comment) {
    // do what ever you want after comment saved
  },
});
