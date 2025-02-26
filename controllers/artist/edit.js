const { Artist } = require("../../models");

module.exports = {
  edited: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { packagename, artistname, releasedate, price } = req.body;
      const imageurl = req.files["imageurl"];
      const sampleurl = req.files["sampleurl"];

      const find = await Artist.findOne({ where: { id } });

      if (!find) {
        return res.status(404).json({
          status: false,
          message: "data not found",
          data: null,
        });
      }

      const filenameImage = imageurl[0].path.split("\\").pop().split("/").pop();
      const filenameSampleUrl = sampleurl[0].path
        .split("\\")
        .pop()
        .split("/")
        .pop();

      const edited = await Artist.update(
        {
          packagename,
          artistname,
          releasedate,
          imageurl: `http://${req.get("host")}/public/images/${filenameImage}`,
          sampleurl: `http://${req.get(
            "host"
          )}/public/mp3/${filenameSampleUrl}`,
          price,
        },
        { where: { id } }
      );

      // return res.status(200).json({
      //   status: true,
      //   message: "update data successfull",
      //   data: edited,
      // });

      return res.redirect("/update-success");
    } catch (err) {
      next(err);
    }
  },
  getEdit: async (req, res, next) => {
    try {
      const { id } = req.params;

      const data = await Artist.findOne({ where: { id } });

      if (!data) {
        return res.status(404).json({
          status: false,
          message: "data not found",
          data: null,
        });
      }

      return res.render("edit", { data: data });
    } catch (err) {
      next(err);
    }
  },
};
