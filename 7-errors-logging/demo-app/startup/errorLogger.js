module.exports = function (winston, process) {
  winston.add(
    new winston.transports.Console({ format: winston.format.simple() }),
    new winston.transports.File({ filename: "logfile.log" })
  );

  winston.add(
    new winston.transports.MongoDB({
      db: "mongodb://localhost/shop-error",
      level: "error", // only log errors in the db.
    })
  );

  // Handle uncaught Exception
  process.on("uncaughtException", (exception) => {
    winston.error(exception.message, exception);
    process.exit(1);
  });

  // handle unhandled promise rejection
  process.on("unhandledRejection", (exception) => {
    winston.error(exception.message, exception);
    process.exit(1);
  });
};
