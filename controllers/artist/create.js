const { Artist } = require("../../models");

module.exports = {
  getCreate: async (_req, res, next) => {
    try {
      res.render("addnew");
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const { packagename, artistname, releasedate, price } = req.body;
      const imageurl = req.files["imageurl"];
      const sampleurl = req.files["sampleurl"];

      const song = await Artist.findOne({ where: { packagename } });

      if (song) {
        return res.status(409).json({
          status: false,
          message: "package name already exist",
        });
      }

      const filenameImage = imageurl[0].path.split("\\").pop().split("/").pop();
      const filenameSampleUrl = sampleurl[0].path
        .split("\\")
        .pop()
        .split("/")
        .pop();

      const created = await Artist.create({
        packagename,
        artistname,
        releasedate,
        imageurl: `http://${req.get("host")}/public/images/${filenameImage}`,
        sampleurl: `http://${req.get("host")}/public/mp3/${filenameSampleUrl}`,
        price,
      });

      // return res.status(201).json({
      //   status: true,
      //   message: "create new artist successfully",
      //   data: created,
      // });

      return res.redirect("/create-success");
    } catch (err) {
      next(err);
    }
  },
};
