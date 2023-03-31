const GcrLinkDb = require("../models/GcrLink");
const ExperimentDb = require("../models/Experiments");
const { default: axios } = require("axios");
require('dotenv').config();

module.exports.resourceController = {
  getGCRLink: (req, res) => {
    const branch = req.params.branch;
    const semester = req.params.semester;
    const pipeline = [
      {
        $match: {
          SEMESTER: semester,
          BRANCH: branch,
        },
      },
      {
        $project: {
          _id: 0,
          SUBJECT: 1,
          LINK: 1,
        },
      },
    ];
    GcrLinkDb.aggregate(pipeline)
      .then((list) => {
        res.status(200).json(list);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({
          success: false,
        });
      });
  },

  addGCRLink: (req, res) => {
    const branch = req.params.branch;
    const semester = req.params.semester;
    let data = {
      BRANCH: branch,
      SEMESTER: semester,
      SUBJECT: req.body.SUBJECT,
      LINK: req.body.LINK,
    };
    const gcrlinkmodel = new GcrLinkDb(data);
    gcrlinkmodel
      .save()
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(400).json({
          err,
        });
      });
  },

  getExperimentUrl: async (req, res) => {
    const BRANCH = req.body.BRANCH;
    const SEMESTER = req.body.SEMESTER;
    const SUBJECT = req.body.SUBJECT;
    const EXPERIMENT_NO = req.body.EXPERIMENT_NO;

    const name = req.body.NAME;
    const batch = req.body.BATCH;
    const roll_no = req.body.ROLL_NO;


    const query = { SEMESTER, BRANCH, SUBJECT, EXPERIMENT_NO };
    const projection = { _id: 0, URL: 1 };

    ExperimentDb.findOne(query, projection)
      .then((dbUrl) => {
        const my_url = dbUrl._doc.URL;
        const data = {
            url: my_url,
            searchStrings: ["{name}", "{roll_no}", "{batch}"],
            replaceStrings: [name, roll_no, batch],
            caseSensitive: false,
            pages: "",
            password: "",
            name: `${roll_no}_${SUBJECT}_${EXPERIMENT_NO}`,
        };
        axios.post("https://api.pdf.co/v1/pdf/edit/replace-text", data, {
            headers: {
                'x-api-key': process.env.API_PDF_API_KEY,
                'Content-Type': 'application/json'
            }
        }).then(response=>{
            res.status(200).json(response.data)
        }).catch(err=>{
            console.log(err);
            res.status(400).json(err);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
