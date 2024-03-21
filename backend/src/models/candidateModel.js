const pool = require('../config/dbConfig');

const getAllCandidates = async () => {
    try {
        const result = await pool.query('SELECT * FROM candidates ORDER BY score DESC');
        return result.rows;
    } catch (err) {
        console.error(err.message);
        throw err;
    }

}

const addCandidate = async (candidateData) => {
    try {
        const { firstName, lastName, company, phoneNumber, linkedinUrl, workExperience, nodeExperience, reactExperience, email, expectedSalary } = candidateData;
        const score = (nodeExperience == 1 ? 1 : nodeExperience == 2 ? 2 : 3) + (reactExperience == 1 ? 1 : reactExperience == 2 ? 2 : 3);
        const skills = {
            node_experience: nodeExperience == 1 ? "Less than 1 year" : nodeExperience == 2 ? "1-2 years" : "Greater than 2 years" ,
            react_experience: reactExperience == 1 ? "Less than 1 year" : nodeExperience == 2 ? "1-2 years" : "Greater than 2 years"
        }
        const status = "AWAITING_REVIEW";
        const result = await pool.query(
            'INSERT INTO candidates (first_name,last_name, company, phone_number, linkedin_url, work_experience,skills,email_address,expected_salary,status,score) VALUES ($1, $2, $3, $4, $5, $6, $7,$8,$9,$10,$11) RETURNING *',
            [firstName, lastName, company, phoneNumber, linkedinUrl, workExperience, skills, email, expectedSalary, status,score]
        );
        return result.rows[0];
    } catch (err) {
        console.error(err.message)
        throw err
    }
};
const updateCandidateStatus = async (id,candidateStatus) => {
    try{
        const result = await pool.query(
            'UPDATE candidates SET status = $1 WHERE id = $2',[candidateStatus,id]
        );
        return result.rowCount == 1;
    }catch(err){
        console.error(err.message)
        throw err
    }
}
const getAnalytics = async () => {
    try{
        const result = await pool.query(
            "SELECT COUNT(*) AS total_entries,COUNT(*) FILTER (WHERE status = 'HIRED') AS hired_count, \
            COUNT(*) FILTER (WHERE status = 'REJECTED') AS rejected_count,AVG(score) AS average_score FROM candidates;"
        );
        return result.rows[0];
    }catch(err){
        console.error(err.message)
        throw err
    }
}
module.exports = {
    getAllCandidates,
    addCandidate,
    updateCandidateStatus,
    getAnalytics,
};