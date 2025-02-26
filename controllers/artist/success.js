module.exports = {
  notifUpdateSuccess: async (req, res, next) => {
    try {
      return res.render("notif/updateSuccess");
    } catch (err) {
      next(err);
    }
  },
  notifCreateSuccess: async (req, res, next) => {
    try {
      return res.render("notif/createSuccess");
    } catch (err) {
      next(err);
    }
  },
  notifDeleteSuccess: async (req, res, next) => {
    try {
      return res.render("notif/deleteSuccess");
    } catch (err) {
      next(err);
    }
  },
};
