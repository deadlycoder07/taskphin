const CandidateModel = require('../models/candidateModel');
const { responseDTO } = require('../utils/responseDTO');

const getCandidates = async (req, res) => {
  try {
    const candidates = await CandidateModel.getAllCandidates();
    const response = responseDTO(true,200,"Candidates fetched successfully",{count:candidates.length,candidates:candidates})
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message)
    const response = responseDTO(false,500,"Internal Server Error")
    res.status(500).send(response);
  }
};

const addCandidate = async (req,res) => {
    try{
        const candidate = await CandidateModel.addCandidate(req.body)
        const response = responseDTO(true,200,"Candidate added successfully",candidate)
        res.status(200).json(response)
    }catch(error){
        console.log(error.message)
        const response = responseDTO(false,500,"Internal Server Error")
        res.status(500).send(response);
    }
}

const updateCandidateStatus = async (req,res) => {
    try{
        const {id,candidateStatus} = req.body
        const result = await CandidateModel.updateCandidateStatus(id,candidateStatus)
        if (!result){
            throw new Error(message="Update failed")
        }
        const response = responseDTO(true,200,"Updated Successfully")
        res.status(200).json(response)
    }catch(error){
        console.log(error.message)
        const response = responseDTO(false,500,"Internal Server Error")
        res.status(500).send(response);
    }
}
const getCandidateAnalytics = async (req,res) => {
    try{
        const result = await CandidateModel.getAnalytics();
        const response = responseDTO(true,200,"Details fetched successfully",result)
        res.status(200).json(response);
    }catch(error){
        console.log(error.message)
        const response = responseDTO(false,500,"Internal Server Error")
        res.status(500).send(response);
    }
}

// Define other CRUD operations

module.exports = {
  getCandidates,
  addCandidate,
  updateCandidateStatus,
  getCandidateAnalytics,
};
