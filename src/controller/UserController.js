const userService = require('../services/UserService');

exports.getUserDetail = async (req, res) => {
    try {
        const user = await userService.getUserDetail(req.params.id);
        res.status(200).json({ data: user, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
  };

exports.checkUserName = async (req,res) => {
    try{
        const isDuplicate = await userService.isExists(req.params.name);
        if(isDuplicate != null) {
            return res.status(409).json({message: "Nickname is duplicated",isExists: true });
        }
        res.status(200).json({isExists: false});
    }catch(err) {
        res.status(500).json({error: err.message});
    }
}