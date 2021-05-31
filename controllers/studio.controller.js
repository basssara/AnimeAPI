const StudioModel = require('../model/studio.model')

// get all studio
exports.getStudioList = (req, res) => {
    //console.log('here all studio');
    StudioModel.getStudioList((err, studio) => {
        //console.log('We are here');
        if(err)
        res.send(err);
        //console.log('studio', studio);
        res.render('studio', { studio })
    })
}

//get studio by Id
exports.getStudioListByID = (req, res) => {
    //console.log('get studio by id')
    StudioModel.getStudioListByID(req.params.id, (err, studio) => {
        if(err)
        res.send(err);
        //console.log('single studio adata', studio);
        res.render('studioid', {studio})
    })
}

//create new studio 
exports.createNewStudioList = (req, res) => {
    const studioReqData = new StudioModel(req.body);
    console.log('studioReqData', studioReqData);
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
       res.sendStatus(400).send({success: false, message: 'Please fill'})
    } else {
        console.log('valid data');
        StudioModel.createStudio(studioReqData, (err, studio) => {
            if(err)
            res.send(err);
            return res.json({status: true, message: 'Successfully created', data: studio.insertId})
        })
    }
}

//update studio
exports.updateStudio = (req, res) => {
    const studioReqData = new StudioModel(req.body);
    console.log('studioReqData update', studioReqData);
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
       res.sendStatus(400).send({success: false, message: 'Please fill'})
    } else {
        console.log('valid data');
        StudioModel.updateStudio(req.params.id, studioReqData, (err, studio) => {
            if(err)
            res.send(err);
            return res.json({status: true, message: 'Successfully updated', data: studio.insertId})
        })
    }
}

//delete studio
exports.deleteStudio = (req, res) => {
    StudioModel.deleteStudio(req.params.id, (err, studio) => {
        if(err)
        res.send(err);
        res.json({success: true, message: 'Studio deleted'})
    })
}
