import Mock from 'mockjs'

// Mock.setup({timeout: '300 - 2200'})

Mock.mock('/api/login', 'post', (req) => {

    const body = JSON.parse(req.body);
    if (!body) {
        return {
            code: -1,
            message: 'params invalid'
        }
    }

    const bodyParams = body || {};
    const {username, password} = bodyParams;
    if (username === 'guest' && password === 'guest') {
        return {
            code: 0,
            data: {
                token: Mock.Random.uuid(),
                username: 'guest'
            }
        }
    } else {
        return {
            code: -1,
            message: 'Invalid username and password'
        }
    }
});
