const UploadModel = require('../model/schema');
const fs = require('fs');

exports.home = (req,res) => {
    res.render('main',{images:"All Images"});
}

exports.uploads = (req,res,next) => {
    const files = req.files;
     
    if(!files){
        const error = new Error('please choose file');
        error.httpStatusCode = 400;
        return next(error)
    }

    //convert images into base64 encoding
    let imgArray = files.map((file) => {
        let img = fs.readFileSync(file.path)

        return encode_image =  img.toString('base64')
    })

    let result = imgArray.map((src,index) => {

        //create object to store data in collection
        let finalImg = {
            filename: files[index].originalname,
            contentType: files[index].mimetype,
            imageBase64: src
        }

        let newUpload = new UploadModel(finalImg);

        return newUpload
            .save()
            .then(() => {
                return{msg:`${files[index].originalname} uploaded succesfully..!`}
            })
            .catch(error => {
                if(error){
                    if(error.name === 'MongoError' && error.code === 11000){
                        return Promise.reject({error:`Duplicate ${files[index].originalname}.File Already Exists!`})
                    }
                    return Promise.reject({error:error.message || `cannot upload ${files[index].originalname} Something Missing`})
                }
            })
    });

    Promise.all(result)
        .then(msg => {
           // res.json(msg)
            res.redirect('/')
        })
    //res.json(imgArray);
    .catch(err => {
        res.json(err)
    })
}