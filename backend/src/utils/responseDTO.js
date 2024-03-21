
function  responseDTO(success, statusCode, message, data = null) {
    return {
      success,
      statusCode,
      message,
      data,
    };
}

module.exports = {
    responseDTO,
};