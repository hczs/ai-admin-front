import request from '@/utils/request'

// 列表数据查询
export function getTaskList(queryParam) {
  return request({
    url: '/business/task/',
    method: 'get',
    params: queryParam
  })
}

// 回显单个数据
export function getTaskById(taskId) {
  return request({
    url: `/business/task/${taskId}/`,
    method: 'get'
  })
}

// 新增
export function addTask(data) {
  return request({
    url: '/business/task/',
    method: 'post',
    data
  })
}

// 任务是否存在
export function taskExists(data) {
  return request({
    url: '/business/task/exists/',
    method: 'post',
    data
  })
}

// 更新
export function updateTaskById(taskId, data) {
  return request({
    url: `/business/task/${taskId}/`,
    method: 'patch',
    data
  })
}

// 删除
export function deleteTaskById(taskId) {
  return request({
    url: `/business/task/${taskId}/`,
    method: 'delete'
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
