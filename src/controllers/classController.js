const batchModel = require('../models/batchModel')
const developerModel = require('../models/developerModel')

const createNBatch = async function(req,res){
    const data = req.body;
    const savedData = await batchModel.create(data)
    res.send({ msg : savedData})
}

const createNdevelop = async function(req,res){
    const data = req.body;
    const savedData = await developerModel.create(data)
    res.send({msg : savedData})
}

const getFemCan = async function(req,res){
    const disData = await developerModel.find({gender : "female",percentage:{$gte:70}})
    res.send({ msg : disData})
}

// const developers = async function(req,res){
//     const pro = await batchModel.find({ program: req.query.program}).select({_id: 1});
//     const proId = pro[0]._id;
//     const developer = await developerModel.find({$and: [{batch : proId},{percentage:{$gte:req.query.percentage}}],}).populate("batch");
//     res.send({msg:developer});
// }; 

const developers1 = async function (req,res){
    const percentage = req.query.percentage;
    const program = req.query.program;
    const devProgram =await batchModel.find({name : program}).select({_id:1});
    console.log(devProgram);
    let arrayOfId =[];
    for(let i=0; i< devProgram.length; i++){
        let a = devProgram[i]._id
        arrayOfId.push(a)
    }
    const conditionmatch = await developerModel.find({batch: { $in: [arrayOfId]}, percentage: {$gte : percentage}}).populate("batch")
    res.send({ msg : conditionmatch})

}






module.exports.createNBatch = createNBatch
module.exports.createNdevelop = createNdevelop
module.exports.getFemCan =getFemCan
// module.exports.developers =developers
module.exports.developers1 =developers1