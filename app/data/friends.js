// ===============================================================================
// DATA
// Below data will hold all of the users and their scores.
// Initially we just set it equal to a "dummy" user.

var friendArray = [
    {
      name: "",
      photo: "",
      scores: [""],
    }
  ];

  // Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;
