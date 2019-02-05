import user from "../db/user";
import parties from "../db/parties";
import office from "../db/office";
import candidates from "../db/candidates";
import votes from "../db/votes";
import petition from "../db/petition";
import moment from "moment";

class postsController {
  static getparties(req, res) {
    return res.json({
      message: "List of all parties",
      posts: parties
    });
}
    static getuser(req, res) {
        return res.json({
          status:200,  
          message: "List of all user",
          posts: user
        });
    }

        static getoffice(req, res) {
            return res.json({
              status:200,  
              message: "List of all office",
              posts: office
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
              posts: petition
            });
} 

//create function
static createparties(req, res) {
    const id = parseInt(parties.length) + 1;
    const {name,HQAddress,logourl} = req.body;
    const newPost = {
      id,
      name,
      HQAddress,
      logourl,
      created_at: moment.utc().format()
    };
    parties.push(newPost);
    return res.status(200).json({  
      message: "created a new party"
    });

  }

  static createuser(req, res) {
    const id = parseInt(user.length) + 1;
    const {firstname,lastname,othername,email,phonenumber,passporturl} = req.body;
    const newPost = {
      id,
      firstname,
      lastname,
      othername,
      email,
      phonenumber,
      passporturl,
      isadmin:'false',
      
    };
    user.push(newPost);
    return res.status(200).json({  
      message: "created a new user"
    });
  }

  static createcandidates(req, res) {
    const id = parseInt(candidates.length) + 1;
    office.id=1
    parties.id=2
    user.id=3

    const idoff=office.id;
    const idparty= parties.id;
    const idcnd=user.id;

    const newPost = {
      id,
      office:idoff,
      party:idparty,
      candidate:idcnd,

      
      
    };
    candidates.push(newPost);
    return res.status(200).json({  
      message: "created a new candidates"
    });
  }


  static createpetition(req, res) {
    const id = parseInt(parties.length) + 1;
    office.id=1
    user.id=3

    const idoff=office.id;
    const idcnd=user.id;

    const {body} = req.body;
    const newPost = {
      id,
      createdon:moment.utc().format(),
      createdby:idcnd,
      office:idoff,
      body,
    };
    petition.push(newPost);
    return res.status(200).json({  
      message: "created a new petition"
    });
  }

  

  static createoffice(req, res) {
    const id = parseInt(parties.length) + 1;
    const {type,name}= req.body;
    const newPost = {
      created_at: moment.utc().format(),
      id,
      type,
      name,
     
    };
    office.push(newPost);
    return res.status(200).json({  
      message: "created a new office"
    });
  }

////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
//get user by id
static getOneuser(req, res) {
  const { id } = req.params;
  const post = user.find(oneuser => oneuser.id == id);
  if (post) {
    return res.status(200).json({
      message: "one user found",
      onePost: post
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
  const post = parties.find(oneparties => oneparties.id == id);
  if (post) {
    return res.status(200).json({
      message: "one party found",
      onePost: post
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
  const post = office.find(oneoffice => oneoffice.id == id);
  if (post) {
    return res.status(200).json({
      message: "one office found",
      onePost: post
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
  const post = candidates.find(onecandidates => onecandidates.id == id);
  if (post) {
    return res.status(200).json({
      message: "one candidates found",
      onePost: post
    });
  } else {
    res.status(400).json({
      error: "no candidates found with that id"
    });
  }
}

//get votes by id
static getOnevote(req, res) {
  const { id } = req.params;
  const post = votes.find(onevotes => onevotes.id == id);
  if (post) {
    return res.status(200).json({
      message: "one vote found",
      onePost: post
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
  const post = petition.find(onepetition => onepetition.id == id);
  if (post) {
    return res.status(200).json({
      message: "one petition found",
      onePost: post
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
  const post = office.find(updatePost => updatePost.id == id);
  if (post) {
    (post.name = req.body.name), (post.type=req.body.type),(post.body = req.body.body);
    return res.status(201).json({
      message: "successfully updated",
      updatePost: post
    });
  } else {
    res.status(400).json({
      error: "post cannot be updated"
    });
  }
}

static updateparty(req, res) {
  const { id } = req.params;
  const post = parties.find(updatePost => updatePost.id == id);
  if (post) {
    (post.name = req.body.name), (post.HQAddress=req.body.HQAddress), (post.logourl=req.body.logourl), (post.body = req.body.body);
    return res.status(201).json({
      message: "successfully updated",
      updatePost: post
    });
  } else {
    res.status(400).json({
      error: "post cannot be updated"
    });
  }
}

static updateuser(req, res) {
  const { id } = req.params;
  const post = user.find(updatePost => updatePost.id == id);
  if (post) {
        (post.firstname = req.body.firstname), (post.lastname=req.body.lastname), (post.othername=req.body.othername),(post.email=req.body.email),(post.phonenumber=req.body.phonenumber),(post.passporturl=req.body.passporturl),(post.body = req.body.body);
    return res.status(201).json({
      message: "user successfully updated",
      updatePost: post
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
    const findPost = parties.find(post => {
      return post.id == id;
    });
    if (findPost) {
      parties.pop(findPost);
      const newparties = parties.filter(post => {
        return post !== findPost;
      });
      res.status(200).json({
        message: "party successfully deleted",
        Posts: newparties
      });
    } else {
      res.status(400).json({
        error: "could not delete a party"
      });
    }
  }

  static deleteuser(req, res) {
    let { id } = req.params;
    const findPost = user.find(post => {
      return post.id == id;
    });
    if (findPost) {
      user.pop(findPost);
      const newparties = user.filter(post => {
        return post !== findPost;
      });
      res.status(200).json({
        message: "user successfully deleted",
        Posts: newparties
      });
    } else {
      res.status(400).json({
        error: "could not delete a user"
      });
    }
  }
  static deletecandidate(req, res) {
    let { id } = req.params;
    const findPost = candidates.find(post => {
      return post.id == id;
    });
    if (findPost) {
      candidates.pop(findPost);
      const newparties = candidates.filter(post => {
        return post !== findPost;
      });
      res.status(200).json({
        message: "candidate successfully deleted",
        Posts: newparties
      });
    } else {
      res.status(400).json({
        error: "could not delete a candidate"
      });
    }
  }

  static deleteoffice(req, res) {
    let { id } = req.params;
    const findPost = office.find(post => {
      return post.id == id;
    });
    if (findPost) {
      office.pop(findPost);
      const newparties = office.filter(post => {
        return post !== findPost;
      });
      res.status(200).json({
        message: "office successfully deleted",
        Posts: newparties
      });
    } else {
      res.status(400).json({
        error: "could not delete an office"
      });
    }
  }



static deletepetition(req, res) {
  let { id } = req.params;
  const findPost = petition.find(post => {
    return post.id == id;
  });
  if (findPost) {
    petition.pop(findPost);
    const newparties = petition.filter(post => {
      return post !== findPost;
    });
    res.status(200).json({
      message: "petition successfully deleted",
      Posts: newparties
    });
  } else {
    res.status(400).json({
      error: "could not delete a petition"
    });
  }
}
}







export default postsController;