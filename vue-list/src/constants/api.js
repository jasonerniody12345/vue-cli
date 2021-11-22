let BASE_URL = ""

if (process.env.VUE_APP_NODE_ENV == "DEV") {
    BASE_URL = "http://localhost:8080"
}
else {
    BASE_URL = "https://vue-mongoose.herokuapp.com"
}

export const USER_REGISTER = `${BASE_URL}/users/create`
export const USER_LOGIN = `${BASE_URL}/users/login`
export const TODO_GET = `${BASE_URL}/todos/getTodo`
export const TODO_DELETE = `${BASE_URL}/todos/delete`
export const TODO_UPDATE = `${BASE_URL}/todos/update`