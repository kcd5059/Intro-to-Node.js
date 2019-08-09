

const createError = require("create-error");

module.exports = {
	AuthenticationError: createError("AuthenticationError", 
		{isCustomError: true, statusCode: 401})
};
