import request from '@/utils/request'

// 列表数据查询
export function getFileList(queryParam) {
  return request({
    url: '/business/file/',
    method: 'get',
    params: queryParam
  })
}

// 删除
export function deleteFileById(fileId) {
  return request({
    url: `/business/file/${fileId}/`,
    method: 'delete'
  })
}

// 展示
export function showFileByFileName(file_name) {
  return request({
    url: `/business/file/${file_name}get_gis_view/`,
    method: 'get'
  })
}

// 新增展示
export function generate_background_byID(fileId, background) {
  return request({
    url: `/business/file/${fileId}/generate_gis_view/`,
    method: 'get',
    params: { background: background }
  })
}

// 执行
export function executeTaskById(taskId, execute_time) {
  return request({
    url: `/business/task/${taskId}/execute/`,
    method: 'get',
    params: { execute_time: execute_time }
  })
}
