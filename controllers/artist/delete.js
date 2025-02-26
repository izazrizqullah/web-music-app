const { Artist } = require("../../models");

module.exports = {
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;

      const find = await Artist.findOne({ where: { id } });

      if (!find) {
        return res.status(404).json({
          status: false,
          message: "data not found",
          data: null,
        });
      }

      const deleted = await Artist.destroy({ where: { id } });

      // return res.status(200).json({
      //   status: true,
      //   message: "delete data successfull",
      //   data: deleted,
      // });
      res.redirect("/delete-success");
    } catch (err) {
      next(err);
    }
  },
};
