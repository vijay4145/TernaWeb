const GcrLinkDb = require("../models/GcrLink");
const ExperimentDb = require("../models/Resources");
const mongoose = require('mongoose');
const { default: axios } = require("axios");
require('dotenv').config();

module.exports.resourceController = {
  postResourceData: async (req, res)=>{
    try{
      // console.log(req.body);
      // for(const data of req.body){
      //   console.log(data);
      // }
      await ExperimentDb.insertMany(req.body);
      res.status(201).json("success");
    }catch(err){
      res.status(500);
    }
  },
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
    const id = req.body._id;
    const SUBJECT = req.body.SUBJECT;
    const EXPERIMENT_NO = req.body.EXPERIMENT_NO;

    const name = req.body.NAME;
    const batch = req.body.BATCH;
    const roll_no = req.body.ROLL_NO;


    const query = { _id : id };
    const projection = { _id: 0, URL: 1, Page_no : 1, NAME : 1 };
    ExperimentDb.findOne(query, projection)
      .then((dbUrl) => {
        const my_url = dbUrl._doc.URL;
        let page_no = 0;
        if(dbUrl._doc.hasOwnProperty('Page_no')) page_no = dbUrl._doc.Page_no;
        const data = {
            url: my_url,
            searchStrings: ["{name}", "{roll_no}", "{batch}"],
            replaceStrings: [name, roll_no, batch],
            caseSensitive: false,
            replacementLimit: 1,
            pages: page_no.toString(),
            password: "",
            name: `${roll_no}_${dbUrl.NAME}`,
            async : false
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

  getResourceListForThatBranchSemSub : async (req, res)=>{
    const BRANCH = req.params.branch;
    const SEMESTER = req.params.semester;
    const SUBJECT = req.params.subject;

    const pipeline = [
      {
        $match : {SUBJECT, SEMESTER, BRANCH}
      },
      {
        $sort: { 
          NAME : 1
        } 
      }
    ]

    ExperimentDb.aggregate(pipeline).then(list=>{
      res.status(200).json(list);
    }).catch(err=>{
      console.log(err);
      res.status(400).json({
        success: false
      });
    })
  },



  getExperimentUrlNormal : (req, res)=>{
    id = req.body._id;
    const query = { id };
    const projection = { _id: 0, DOCX_URL: 1 };
    ExperimentDb.findOne(query, projection)
      .then((dbUrl) => {
        res.status(200).json(dbUrl.DOCX_URL);
    }).catch(err=>{
      res.status(400).json({
        success: false
      })
      console.log(err);
    })
  },

  getBranchSemesterSubjectListAvailable : async (req, res)=>{
    try{
    const uniqueValues = await ExperimentDb.aggregate([
      { $project: { _id: 0, SEMESTER: 1, BRANCH: 1, SUBJECT : 1 } }
    ]);
    let resjson = {};
    for(let ele of uniqueValues){
      if(!resjson.hasOwnProperty(ele.BRANCH))
        resjson[`${ele.BRANCH}`] = {};
      if(!resjson[`${ele.BRANCH}`].hasOwnProperty(ele.SEMESTER))
        resjson[`${ele.BRANCH}`][`${ele.SEMESTER}`] = [];
      if(!resjson[`${ele.BRANCH}`][`${ele.SEMESTER}`].includes(ele.SUBJECT))
        resjson[`${ele.BRANCH}`][`${ele.SEMESTER}`].push(ele.SUBJECT);
    }
    res.status(200).json(resjson);
  }catch (e){
    res.status(500).json("INTERNAL SERVER ERROR");
  }

  }
};
