class UserInfo {
    constructor(name, info){
        this._name = document.querySelector(name);
        this._info = document.querySelector(info);
    }
    getUserInfo() {
        const userData = {};
        userData.userName = this._name.textContent;
        userData.userInfo = this._info.textContent;
        return userData;
    }
    setUserInfo(data) {
        this._name.textContent = data.userName;
        this._info.textContent = data.userInfo;
    }
}
export default UserInfo;