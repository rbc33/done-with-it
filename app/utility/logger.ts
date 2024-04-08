// import Bugsnag from "@bugsnag/expo";

const log = (error: any) => {
  // Bugsnag.notify(error);
  console.log(error);
};

const start = () => {
  // Bugsnag.start();
  null;
};

export default { log, start };
