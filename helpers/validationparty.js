
import Joi from 'joi';

//create functions
const party = (field)=>{

    const schema={
        name:Joi.string().regex(/^67[a-zA-Z] |[a-zA-Z] ?[a-zA-Z]+$/).min(3).max(15).required(),
        HQAddress:Joi.string().min(3).max(15).required(),
        logourl:Joi.string().min(3).max(15).required(),
    }

const options ={
    language:{

        key:'{{key}}'
    }
}
return Joi.validate(field,schema,options);

}

export default party;


