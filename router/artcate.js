const express = require('express')
const router = express.Router()

const artCate_handler = require('../router_handler/artcate')

const expressJoi = require('@escook/express-joi')
const { add_cate_schema, delete_cate_schema, get_cate_schema, update_cate_schema } = require('../schema/artcate')

router.get('/cates', artCate_handler.getArtCates)

router.post('/addcates', expressJoi(add_cate_schema), artCate_handler.addArticleCates)

router.get('/deletecate/:id', expressJoi(delete_cate_schema), artCate_handler.deleteCateById)

router.get('/cates/:id', expressJoi(get_cate_schema), artCate_handler.getArtCateById)

router.post('/updatecate', expressJoi(update_cate_schema), artCate_handler.updateCateById)

module.exports = router