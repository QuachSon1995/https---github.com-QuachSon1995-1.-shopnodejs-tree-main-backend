const category = require('../services/categoryService')

module.exports = {
    add: async (req, res) => {
        let { name, parent_id } = req.body
        console.log(req.body)
        if (!name) return res.status(400).json({ message: "name hollow" })
        else {
            if (!parent_id) {
                let parent_id = 0
                let data = { name, parent_id }
                const add_Category = await category.add_category(data)
                return res.status(200).json({ add_Category })
            }
            else if (parent_id) {
                let data = { name, parent_id }
                const add_Category = await category.add_category(data)
                return res.status(200).json({ add_Category })
            }
        }
    },
    update: async (req, res) => {
        let id = req.params.id
        let { name, parent_id } = req.body
        console.log(req.body)
        if (!name) return res.status(400).json({ message: "name hollow" })
        else {
            if (!parent_id) {
                let parent_id = 0
                let data = { name, parent_id }
                const update_Category = await category.update_category( data,id)
                return res.status(200).json({ update_Category })
            }
            else if (parent_id) {
                let data = { name, parent_id }
                const update_Category = await category.update_category(data, id)
                return res.status(200).json({ update_Category })
            }
        }
    },
    delete: async () => { },
    get_id: async () => { },
    get_all: async () => { },
}