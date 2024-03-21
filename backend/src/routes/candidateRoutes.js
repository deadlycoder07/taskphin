const express = require('express');
const { getCandidates, addCandidate, updateCandidateStatus, getCandidateAnalytics } = require('../controllers/candidateController');


const router = express.Router();

router.get('/', getCandidates);
router.post('/',addCandidate);
router.patch('/',updateCandidateStatus);
router.get('/analytics',getCandidateAnalytics);
// Define other routes for CRUD operations

module.exports = router;
