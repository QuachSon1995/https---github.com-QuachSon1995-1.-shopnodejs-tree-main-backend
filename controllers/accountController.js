const account = require('../services/accountService')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    login: async (req, res) => {
        const { email, password } = req.body
        console.log(req.body)
        if (!(email && password)) return res.status(400).json({ message: "infomation hollow" })
        else {
            const check_Info = await account.check_info(email)
            if (!check_Info || !(await bcrypt.compare(password, check_Info.password))) return res.status(400).json({ message: "infomation hollow" })
            if (check_Info && (await bcrypt.compare(password, check_Info.password))) {
                const token = jwt.sign(
                  { email },
                  process.env.ACCESS_TOKEN_SECRET,
                  {
                    expiresIn: "2h",
                  }
                );
                check_Info.token = token;
                res.status(200).json({check_Info, token});
              }
        }
    },
    add: async (req, res) => {
        var SALT_ROUNDS = 10;
        const name = req.body.name
        const email = req.body.email
        const Account = await account.getEmail(email);
        if (Account) res.status(409).send('Tên tài khoản đã tồn tại.');
        else {
            const hashPassword = bcrypt.hashSync(req.body.password, SALT_ROUNDS);
            const new_account = {
                name:name,
                email: email,
                password: hashPassword,

            };
            console.log(new_account)
            const create_Account = await account.addAccount(new_account);
            if (!createaccount) {
                return res.status(400).json('Có lỗi trong quá trình tạo tài khoản, vui lòng thử lại.');
            }
            return res.send({
                name,
            });
        }
    }
}