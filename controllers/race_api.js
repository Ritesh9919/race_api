const MensRanking = require('../models/race');


module.exports.create = async (req, res) => {
    try {

        await MensRanking.create(req.body);
        return res.status(201).json({
            message: 'Mens Record created succesffuly'
        })
    } catch (err) {
        console.log('Error', err);
        return;
    }

}


module.exports.read = async (req, res) => {
    try {
    const mensRacerRecords = await MensRanking.find({});
    return res.json({
        success:true,
        data:{
            raceRecords:mensRacerRecords
        }
    })
} catch(err) {
    console.log('Error', err);
}

}


module.exports.destroy = async (req, res) => {
    try {
        await MensRanking.findByIdAndDelete(req.params.id);
        return res.json({
            message: 'Deleted successfully'
        })
    } catch (err) {
        console.log('Error', err);
    }
}