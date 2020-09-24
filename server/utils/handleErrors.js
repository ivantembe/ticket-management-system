const handleErrors = (err, errorsObject) => {
  // handle uniqueness error code
  if (err.code === 11000) {
    errorsObject.email = 'Email is already registerd';
    console.log(`>>> Errors:\n`, errorsObject);
    return errorsObject;
  }

  // handle other validation errors
  if (err.message.includes('User validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errorsObject[properties.path] = properties.message;
    });
    console.log(`>>> Errors:\n`, errorsObject);
  }
  return errorsObject;
};

module.exports = handleErrors;
