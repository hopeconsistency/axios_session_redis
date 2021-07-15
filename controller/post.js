const axios = require("axios");

const fetchremoteinfo = async (req, res) => {
  let number = req.query.number;
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${number}`
    );
    console.log(response.data);
    req.session.post = response.data;
    req.session.save();
    const sessionPost = req.session.post;
    // return res.send("remote information fetched");
    return res.send(sessionPost);
  } catch (error) {
    console.error(error);
  }
};

const showremoteinfo = async (req, res) => {
  const sessionPost = req.session.post;
  return res.send(sessionPost);
};

const deleteremoteinfo = async (req, res) => {
  req.session.destroy();
  return res.send("post deleted");
};

module.exports = {fetchremoteinfo, showremoteinfo, deleteremoteinfo};