const dbCon = require('../config/db.conn');

const Studio = function (studio) {
    this.studioname = studio.studioname;
    this.aboutstudio = studio.aboutstudio;
}

//get all studio list 
Studio.getStudioList = (result) => {
    dbCon.query('SELECT * FROM studio', (err, res) => {
      if(err) {
        console.log('Error while fetching', err);
        result(null, err);
      } else {
        //console.log('Studio fetching succesfully');
        result(null,res);
      }
    })
}

//get anime by Id from DB
Studio.getStudioListByID = (id, result) => {
    dbCon.query('SELECT * FROM studio WHERE id=?', id, (err, res) => {
      if(err) {
        console.log('Error while fetch studio by id', err);
        result(null, err);
      } else {
        result(null, res);
      }
    })
}

//create new studio 
Studio.createStudio = (studioReqData, result) => {
    dbCon.query('INSERT INTO studio SET ?', studioReqData, (err, res) => {
      if(err) {
        console.log('Error while inserting data');
        result(null, err)
      } else {
        console.log('Studio created succesfully');
        result(null, res)
      }
    })
}

//update studio
Studio.updateStudio = (id, studioReqData, result) => {
    dbCon.query('UPDATE studio SET studioname=?, aboutstudio=? WHERE id = ?',
    [studioReqData.studioname, studioReqData.aboutstudio, id], 
    (err, res) => {
      if(err) {
        console.log('Error while updating the studio');
        result(null, err);
      } else {
        console.log('studio updated successfully');
        result(null, res);
      }
    })
}

//delete studio
Studio.deleteStudio = (id, result) => {
    dbCon.query('DELETE FROM studio WHERE id=?', [id], (err, res) => {
      if(err) {
        console.log('Error while deleting the studio');
        result(null, err)
      } else {
        result(null, res)
      }
    })
  }
  
module.exports = Studio;