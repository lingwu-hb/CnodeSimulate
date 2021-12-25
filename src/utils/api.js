import request from '@src/utils/request'

// 获取首页帖子列表数据
export const getTopics = data => {
  return request({
    url: '/topics',
    method: 'get',
    params: data
  })
}

// 获取帖子详情数据
export const getTopicById = id => {
  return request({
    url: `/topic/${id}`,
    method: 'get'
  })
}

// 获取用户详情数据
export const getUserByName = loginname => {
  return request({
    url: `/user/${loginname}`,
    method: 'get'
  })
}
//验证accessToken
export const accessMatch = accesstoken =>{
  return request({
    url:`/accesstoken`,
    method: 'post',
  })
}

//为评论点赞
export const upvoteComments = reply_id =>{
  return request(
      {
        url:`/reply/${reply_id}/ups`,
        method: 'post'
      }
  )
}