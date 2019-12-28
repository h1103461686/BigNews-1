/* 沙箱模式 */
(function (w) {
    const token = localStorage.getItem('token')
    //为所有的ajax设置默认值
    $.ajaxSetup(
        {
            // 发送ajax之前执行的函数
            beforeSend(xhr) {
                //判断 如果没有令牌就打回登录页面
                if (!token) {
                    location.href = './login.html';
                }
                // 如果当前页面的不是登录页面
                if (location.href.indexOf('login.html') === -1) {
                    //给所有的请求同意设置token请求头
                    xhr.setRequestHeader('Authorization', token)
                }
            }
        }
    )
})(window);