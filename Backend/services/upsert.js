
//Uso 
// upsert(userModel, { first_name: 'Taku' }, { id: 1234 }).then(function(result){
// res.status(200).send({success: true});
// });
exports.upsert = function(Model, values, condition) {
    return Model
        .findOne({ where: condition })
        .then(function (obj) {
            if (obj) { // update
                console.log("actualizar");
                return obj.update(values);
            }
            else { // insert
                console.log("ingresar");
                return Model.create(values);
            }
        })
}