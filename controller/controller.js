import users from "../db/user";
import parties from "../db/parties";
import offices from "../db/office";
import candidates from "../db/candidates";
import votes from "../db/votes";
import petitions from "../db/Petition";
import moment from "moment";

class postsController {
  static getparties(req, res) {
    if(req){
    return res.json({
      message: "List of all parties",
      posts: parties

    });
  }
}
    static getuser(req, res) {
        return res.json({
          status:200,  
          message: "List of all users",
          posts: users
        });
    }

        static getoffice(req, res) {
            return res.json({
              status:200,  
              message: "List of all offices",
              posts: offices
            });
  }

  static getcandidates(req, res) {
    return res.json({
      status:200,  
      message: "List of all candidates",
      posts: candidates
    });

  }
    static getvotes(req, res) {
        return res.json({
          status:200,  
          message: "List of all votes",
          posts: votes
        });
    }

        static getpetition(req, res) {
            return res.json({
              status:200,  
              message: "List of all petitions",
              posts: petitions
            });
} 

//create function
static createparties(req, res) {
    const id = parseInt(parties.length) + 1;
    const {name,HQAddress,logourl} = req.body;
    const newparty = {
      id,
      name,
      HQAddress,
      logourl,
      created_at: moment.utc().format()
    };
    parties.push(newparty);
    return res.status(200).json({  
      message: "created a new party"
    });

  }

  static createuser(req, res) {
    const id = parseInt(users.length) + 1;
    const {firstname,lastname,othername,email,phonenumber,passporturl} = req.body;
    const newuser = {
      id,
      firstname,
      lastname,
      othername,
      email,
      phonenumber,
      passporturl,
      isadmin:'false',
      
    };
    users.push(newuser);
    return res.status(200).json({  
      message: "created a new user"
    });
  }

  static createcandidates(req, res) {
    const id = parseInt(candidates.length) + 1;

    const newcandidate = {
      id,
      office:1,
      party:2,
      candidate:3,
      
    };
    candidates.push(newcandidate);
    return res.status(200).json({  
      message: "created a new candidate"
    });
  }


  static createpetition(req, res) {
    const id = parseInt(petitions.length) + 1;

    const {body} = req.body;
    const newpetition = {
      id,
      createdon:moment.utc().format(),
      createdby:1,
      office:3,
      body,
    };
    petitions.push(newpetition);
    return res.status(200).json({  
      message: "created a new petition"
    });
  }

  

  static createoffice(req, res) {
    const id = parseInt(offices.length) + 1;
    const {type,name}= req.body;
    const newoffice = {
      created_at: moment.utc().format(),
      id,
      type,
      name,
     
    };
    offices.push(newoffice);
    return res.status(200).json({  
      message: "created a new office"
    });
  }

////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
//get user by id
static getOneuser(req, res) {
  const { id } = req.params;
  const user = users.find(oneuser => oneuser.id == id);
  if (user) {
    return res.status(200).json({
      message: "one user found",
      onePost: user
    });
  } else {
    res.status(400).json({
      error: "no user found with that id"
    });
  }
}

//get parties by id
static getOneparty(req, res) {
  const { id } = req.params;
  const party = parties.find(oneparties => oneparties.id == id);
  if (party) {
    return res.status(200).json({
      message: "one party found",
      onePost: party
    });
  } else {
    res.status(400).json({
      error: "no party found with that id"
    });
  }
}
// get office by id
static getOneoffice(req, res) {
  const { id } = req.params;
  const office = offices.find(oneoffice => oneoffice.id == id);
  if (office) {
    return res.status(200).json({
      message: "one office found",
      onePost: office
    });
  } else {
    res.status(400).json({
      error: "no office found with that id"
    });
  }
}
//get candidate by id
static getOnecandidate(req, res) {
  const { id } = req.params;
  const candidate = candidates.find(onecandidates => onecandidates.id == id);
  if (candidate) {
    return res.status(200).json({
      message: "one candidate found",
      onePost: candidate
    });
  } else {
    res.status(400).json({
      error: "no candidate found with that id"
    });
  }
}

//get votes by id
static getOnevote(req, res) {
  const { id } = req.params;
  const vote = votes.find(onevotes => onevotes.id == id);
  if (vote) {
    return res.status(200).json({
      message: "one vote found",
      onePost: vote
    });
  } else {
    res.status(400).json({
      error: "no vote found with that id"
    });
  }
}

//get petition by id
static getOnepetition(req, res) {
  const { id } = req.params;
  const petition = petitions.find(onepetition => onepetition.id == id);
  if (petition) {
    return res.status(200).json({
      message: "one petition found",
      onePost: petition
    });
  } else {
    res.status(400).json({
      error: "no petition found with that id"
    });
  }
}

//update data function

static updateoffice(req, res) {
  const { id } = req.params;
  const office = offices.find(updatePost => updatePost.id == id);
  if (office) {
    (office.name = req.body.name), (office.type=req.body.type),(office.body = req.body.body);
    return res.status(201).json({
      message: "successfully updated",
      updatePost: office
    });
  } else {
    res.status(400).json({
      error: "office cannot be updated"
    });
  }
}
 
static updateparty(req, res) {
  const { id } = req.params;
  const party = parties.find(updatePost => updatePost.id == id);
  if (party) {
    (party.name = req.body.name), (party.HQAddress=req.body.HQAddress), (party.logourl=req.body.logourl), (party.body = req.body.body);
    return res.status(201).json({
      message: "successfully updated",
      updatePost: party
    });
  } else {
    res.status(400).json({
      error: "party cannot be updated"
    });
  }
}


//update function (patch)
static updatepartyname(req, res) {
  const { id } = req.params;
  const { name } = req.params;
  const party = parties.find(updatePost => updatePost.id == id);
  const partyname = parties.find(updatePost => updatePost.name == name);

  if (party&&partyname) {
    (party.name = req.body.name),(party.body = req.body.body);
    return res.status(201).json({
      message: "party successfully  updated",
      updatePost: party
    });
  } else {
    res.status(400).json({
      error: "party cannot be updated"
    });
  }
}



static updateuser(req, res) {
  const { id } = req.params;
  const user = users.find(updatePost => updatePost.id == id);
  if (user) {
        (user.firstname = req.body.firstname), (user.lastname=req.body.lastname), (user.othername=req.body.othername),(user.email=req.body.email),(user.phonenumber=req.body.phonenumber),(user.passporturl=req.body.passporturl),(user.body = req.body.body);
    return res.status(201).json({
      message: "user successfully updated",
      updatePost: user
    });
  } else {
    res.status(400).json({
      error: "post cannot be updated"
    });
  }
}

// delete data functions 

  static deleteparties(req, res) {
    let { id } = req.params;
    const findparty = parties.find(post => {
      return post.id == id;
    });
    if (findparty) {
      parties.pop(findparty);
      const newparty = parties.filter(post => {
        return post !== findparty;
      });
      res.status(200).json({
        message: "party successfully deleted",
        Posts: newparty
      });
    } else {
      res.status(400).json({
        error: "could not delete a party"
      });
    }
  }

  static deleteuser(req, res) {
    let { id } = req.params;
    const finduser = users.find(post => {
      return post.id == id;
    });
    if (finduser) {
      users.pop(finduser);
      const newuser = users.filter(post => {
        return post !== finduser;
      });
      res.status(200).json({
        message: "user successfully deleted",
        Posts: newuser
      });
    } else {
      res.status(400).json({
        error: "could not delete a user"
      });
    }
  }

  
  static deletecandidate(req, res) {
    let { id } = req.params;
    const findcandidate = candidates.find(post => {
      return post.id == id;
    });
    if (findcandidate) {
      candidates.pop(findcandidate);
      const newcandidate = candidates.filter(post => {
        return post !== findcandidate;
      });
      res.status(200).json({
        message: "candidate successfully deleted",
        Posts: newcandidate
      });
    } else {
      res.status(400).json({
        error: "could not delete a candidate"
      });
    }
  }

  static deleteoffice(req, res) {
    let { id } = req.params;
    const findoffice = offices.find(post => {
      return post.id == id;
    });
    if (findoffice) {
      offices.pop(findoffice);
      const newoffice = offices.filter(post => {
        return post !== findoffice;
      });
      res.status(200).json({
        message: "office successfully deleted",
        Posts: newoffice
      });
    } else {
      res.status(400).json({
        error: "could not delete an office"
      });
    }
  }



static deletepetition(req, res) {
  let { id } = req.params;
  const findpetition = petitions.find(post => {
    return post.id == id;
  });
  if (findpetition) {
    petitions.pop(findpetition);
    const newpetition = petitions.filter(post => {
      return post !== findpetition;
    });
    res.status(200).json({
      message: "petition successfully deleted",
      Posts: newpetition
    });
  } else {
    res.status(400).json({
      error: "could not delete a petition"
    });
  }
}
}







export default postsController;