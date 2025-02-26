const { Artist } = require("../../models");

module.exports = {
  getAll: async (_req, res, next) => {
    try {
      const data = await Artist.findAll();

      if (!data) {
        return res.status(404).json({
          status: false,
          message: "data not found",
          data: null,
        });
      }

      return res.render("main", { data: data });
    } catch (err) {
      next(err);
    }
  },
  getById: async (req, res, next) => {
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

      return res.status(200).json({
        status: true,
        message: "get data by id successfully",
        data: find,
      });
    } catch (err) {
      next(err);
    }
  },
};
