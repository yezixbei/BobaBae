/* GET homepage */
const about = (req, res) => {
  res.render('generic-text',
    {
      title: 'About Boba Bae',
      content: 'Boba Bae was created to help Betsy learn Express, Node, Angular, and MongoDB. Betsy is a new graduate from Brown University looking for a development role in the Bay Area.'
    }
  );
};

module.exports = {
  about
};
