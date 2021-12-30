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
