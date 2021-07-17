class UserInfo {
    constructor(name, info){
        this._name = document.querySelector(name);
        this._info = document.querySelector(info);
    }
    getUserInfo() {
        const userData = {};
        userData.fullName = this._name.textContent;
        userData.aboutYou = this._info.textContent;
        return userData;
    }
    setUserInfo(data) {
        this._name.textContent = data.fullName;
        this._info.textContent = data.aboutYou;
    }
}
export default UserInfo;