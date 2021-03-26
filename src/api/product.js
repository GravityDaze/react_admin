import request from '../utils/request'
// 查询分类列表
export const queryCate = data => request.get('/manage/category/list',{ params:data })

// 更新分类
export const updateCate = data => request.post('/manage/category/update',data)

// 添加分类
export const addCate = data => request.post('/manage/category/add',data)